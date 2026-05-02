/**
 * Agent runner that emits structured NDJSON events to stdout.
 *
 * One JSON object per line:
 *   { type: "tool_use", tool, summary, ts }
 *   { type: "tool_result", tool, ok, ts }
 *   { type: "text", content, ts }
 *   { type: "memo_progress", partial_content, ts }
 *   { type: "complete", slug, recommendation, ts }
 *   { type: "error", message, ts }
 *
 * The Next API route (/api/generate) spawns this with `tsx`, parses each line,
 * and translates it into an SSE event of the same name.
 *
 * This is a thin wrapper around the same `query()` call as src/agent.ts.
 * It does NOT touch agent.ts so the CLI remains stable.
 */

import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { slugify } from "./lib/slugify";

const ROOT = process.cwd();

function emit(event: Record<string, unknown>) {
  process.stdout.write(JSON.stringify({ ts: new Date().toISOString(), ...event }) + "\n");
}

function loadPrompt(name: string, optional = false): string {
  const path = resolve(ROOT, "prompts", name);
  if (!existsSync(path)) {
    if (optional) return "";
    throw new Error(`Missing prompt file: ${path}`);
  }
  return readFileSync(path, "utf8");
}

function buildMcpServers() {
  const exaKey = process.env.EXA_API_KEY;
  if (!exaKey) {
    return { enabled: false, servers: {} as Record<string, any> };
  }
  return {
    enabled: true,
    servers: {
      exa: {
        type: "http" as const,
        url: `https://mcp.exa.ai/mcp?exaApiKey=${exaKey}&tools=web_search_exa,company_research_exa,crawling_exa,linkedin_search_exa`,
      },
    },
  };
}

function summarizeToolInput(name: string, input: any): string {
  if (!input || typeof input !== "object") return "";
  // Exa search-style
  if (typeof input.query === "string") return input.query.slice(0, 140);
  if (typeof input.companyName === "string") return input.companyName;
  if (typeof input.url === "string") return input.url;
  if (typeof input.urls === "object" && Array.isArray(input.urls)) return input.urls[0] || "";
  if (typeof input.file_path === "string") return input.file_path;
  if (typeof input.path === "string") return input.path;
  if (typeof input.command === "string") return input.command.slice(0, 140);
  if (typeof input.pattern === "string") return input.pattern;
  // strip mcp prefix from tool name for fallback
  return JSON.stringify(input).slice(0, 140);
}

function summarizeWriteContent(input: any): string | null {
  if (!input || typeof input !== "object") return null;
  if (typeof input.content === "string") return input.content;
  if (typeof input.new_string === "string") return input.new_string;
  return null;
}

async function main() {
  const company = process.argv.slice(2).join(" ").trim();
  if (!company) {
    emit({ type: "error", message: 'Usage: agent:stream "<Company Name>"' });
    process.exit(1);
  }

  const slug = slugify(company);

  let systemPrompt = "";
  let memoTemplate = "";
  let rubric = "";
  let operatorContext = "";
  try {
    systemPrompt = loadPrompt("system.md");
    memoTemplate = loadPrompt("memo-template.md");
    rubric = loadPrompt("rubric.md");
    operatorContext = loadPrompt("operator-context.md", true);
  } catch (err) {
    emit({ type: "error", message: err instanceof Error ? err.message : String(err) });
    process.exit(1);
  }

  const fullSystemPrompt = operatorContext
    ? `${systemPrompt}\n\n---\n\n# Operator context (background — never quote directly)\n\n${operatorContext}`
    : systemPrompt;

  const mcp = buildMcpServers();

  const researchInstructions = mcp.enabled
    ? `
## Research tools — use Exa first, WebSearch second

You have access to four Exa MCP tools. Prefer Exa over WebSearch for every research step.
- company_research_exa first against ${company}
- linkedin_search_exa for each named founder/exec
- web_search_exa for adjacent queries
- crawling_exa for any URL whose full content you need
- WebSearch only as fallback

Aim for 12+ distinct sources cited in section 12.
`.trim()
    : `
## Research tools

Use the built-in WebSearch and WebFetch tools for research. Aim for 8+ distinct sources cited in section 12.
`.trim();

  const userPrompt = `
Produce a full IC memo on **${company}**.

${researchInstructions}

## Workflow

1. Execute the research sequence above. Take notes as you go — you will cite extensively in section 12.
2. Draft the memo following the template below exactly. Section order and section headers are non-negotiable.
3. Citation discipline is non-negotiable. Every non-obvious factual claim gets an inline numbered citation [1], [2], etc. Every cited source is listed in section 12 with title, URL, and accessed date.
4. Numbers discipline is non-negotiable. If a number is not directly stated in a cited source, write "Not disclosed."
5. Score the company against the rubric below as section 11.
6. Write the completed memo to \`output/${slug}-memo.md\` using the Write tool.
7. Update \`output/market-map.md\`.
8. After writing both files, output one line confirming the file paths and the recommendation.

---

# Memo template

${memoTemplate}

---

# Scoring rubric

${rubric}
`.trim();

  emit({ type: "text", content: `Starting research on ${company}.` });

  let lastWriteForMemo = "";
  let recommendation: string | null = null;

  try {
    const q = query({
      prompt: userPrompt,
      options: {
        model: "claude-opus-4-6",
        systemPrompt: { type: "preset", preset: "claude_code", append: fullSystemPrompt },
        allowedTools: ["WebSearch", "WebFetch", "Read", "Write", "Edit", "Glob", "Grep"],
        mcpServers: mcp.servers,
        permissionMode: "bypassPermissions",
        settingSources: [],
      },
    });

    for await (const msg of q) {
      if (msg.type === "assistant") {
        for (const block of msg.message.content as any[]) {
          if (block.type === "text" && block.text?.trim()) {
            emit({ type: "text", content: block.text });
            const recMatch = block.text.match(/\b(PASS|WATCH|PURSUE|TERM SHEET)\b/);
            if (recMatch && !recommendation) recommendation = recMatch[1];
          }
          if (block.type === "tool_use") {
            const tool: string = block.name;
            const summary = summarizeToolInput(tool, block.input);
            emit({ type: "tool_use", tool, summary });
            // surface live memo writes
            if (tool === "Write" || tool === "Edit") {
              const path = block.input?.file_path || "";
              if (typeof path === "string" && path.includes(`${slug}-memo.md`)) {
                const memoContent = summarizeWriteContent(block.input);
                if (memoContent && memoContent !== lastWriteForMemo) {
                  lastWriteForMemo = memoContent;
                  emit({ type: "memo_progress", partial_content: memoContent });
                }
              }
            }
          }
        }
      }
      if (msg.type === "user") {
        for (const block of msg.message.content as any[]) {
          if (block.type === "tool_result") {
            emit({ type: "tool_result", ok: !block.is_error });
          }
        }
      }
      if (msg.type === "result") {
        if (msg.subtype === "success") {
          emit({
            type: "complete",
            slug,
            recommendation: recommendation ?? "UNKNOWN",
          });
        } else {
          emit({ type: "error", message: `agent ended with subtype=${msg.subtype}` });
        }
      }
    }
  } catch (err) {
    emit({ type: "error", message: err instanceof Error ? err.message : String(err) });
    process.exit(1);
  }
}

main().catch((err) => {
  emit({ type: "error", message: err instanceof Error ? err.message : String(err) });
  process.exit(1);
});
