import "dotenv/config";
import { query } from "@anthropic-ai/claude-agent-sdk";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = process.cwd();

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
    console.log("[sfv-ic-agent] no EXA_API_KEY set — using built-in WebSearch only");
    return { enabled: false, servers: {} as Record<string, any> };
  }
  console.log("[sfv-ic-agent] Exa MCP enabled");
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

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  const company = process.argv.slice(2).join(" ").trim();
  if (!company) {
    console.error('Usage: npm run agent -- "Company Name"');
    process.exit(1);
  }

  const slug = slugify(company);
  const systemPrompt = loadPrompt("system.md");
  const memoTemplate = loadPrompt("memo-template.md");
  const rubric = loadPrompt("rubric.md");
  const operatorContext = loadPrompt("operator-context.md", true);

  const fullSystemPrompt = operatorContext
    ? `${systemPrompt}\n\n---\n\n# Operator context (background — never quote directly)\n\n${operatorContext}`
    : systemPrompt;

  const mcp = buildMcpServers();

  const researchInstructions = mcp.enabled
    ? `
## Research tools — use Exa first, WebSearch second

You have access to four Exa MCP tools. **Prefer Exa tools over the built-in WebSearch for every research step below.** WebSearch is the fallback when Exa returns nothing useful.

Use the right Exa tool for each task:

- **\`company_research_exa\`** — Your primary tool. Use this FIRST for any new company. It pulls funding history, recent news, product information, and press coverage in a single call. Run this against ${company} as your first research action.

- **\`linkedin_search_exa\`** — Use this for the team section. Pull current and past roles for each named founder/executive. Specifically check: (a) what role each founder held immediately before this company, (b) whether any senior hires have departed since founding (look for changed "current company" fields), (c) advisor/board member backgrounds.

- **\`crawling_exa\`** — Use this when you have a specific URL whose full content you need: the company's "about" page, a specific press release, a podcast transcript, a founder essay. Don't use it for general searching.

- **\`web_search_exa\`** — General-purpose web search via Exa's index. Use this for queries that don't fit the patterns above (industry reports, competitor mentions, regulatory filings, niche press coverage).

Required research sequence:
1. \`company_research_exa\` on "${company}" — establish funding, customers, recent news.
2. \`linkedin_search_exa\` on each named founder and any executive mentioned on the website.
3. \`web_search_exa\` for: "${company} customers", "${company} ARR", "${company} review", "${company} vs [competitor]", and the names of named competitors.
4. \`crawling_exa\` on the company's homepage and any podcast or interview URLs surfaced in step 1.
5. Built-in \`WebSearch\` only if a specific question remains unanswered after the above.

Aim for 12+ distinct sources cited in section 12.
`.trim()
    : `
## Research tools

Use the built-in WebSearch and WebFetch tools for research. Aim for 8+ distinct sources cited in section 12. (Note: Exa MCP is not configured — set EXA_API_KEY in .env for substantially better research quality.)
`.trim();

  const userPrompt = `
Produce a full IC memo on **${company}**.

${researchInstructions}

## Workflow

1. Execute the research sequence above. Take notes as you go — you will cite extensively in section 12.
2. Draft the memo following the template below exactly. Section order and section headers are non-negotiable.
3. **Citation discipline is non-negotiable.** Every non-obvious factual claim gets an inline numbered citation [1], [2], etc. Every cited source is listed in section 12 with title, URL, and accessed date.
4. **Numbers discipline is non-negotiable.** If a number (ARR, NDR, headcount, customer count, processing volume, etc.) is not directly stated in a cited source, write "Not disclosed." Do not infer, estimate, or benchmark. No ranges with disclaimers. No "consistent with" framing.
5. Score the company against the rubric below as section 11.
6. Write the completed memo to \`output/${slug}-memo.md\` using the Write tool. Do not print the memo to stdout.
7. Update \`output/market-map.md\`:
   - If the file exists, read it first using the Read tool.
   - Append the new company's one-line entry to the table.
   - Re-sort the table by Score descending, then by Stage.
   - Write the updated file back.
   - If the file does not exist, create it with a header ("# AI-Native Financial Infrastructure — Market Map") followed by the rubric-format table.
8. After writing both files, output one line confirming the file paths and the recommendation.

---

# Memo template

${memoTemplate}

---

# Scoring rubric

${rubric}
`.trim();

  console.log(`\n[sfv-ic-agent] generating IC memo for: ${company}`);
  console.log(`[sfv-ic-agent] target: output/${slug}-memo.md`);
  console.log(`[sfv-ic-agent] market map: output/market-map.md\n`);

  const q = query({
    prompt: userPrompt,
    options: {
      model: "claude-opus-4-6",
      systemPrompt: { type: "preset", preset: "claude_code", append: fullSystemPrompt },
      allowedTools: ["WebSearch", "WebFetch", "Read", "Write", "Edit", "Glob", "Grep"],
      mcpServers: mcp.servers,
      permissionMode: "acceptEdits",
      settingSources: [],
    },
  });

  for await (const msg of q) {
    if (msg.type === "assistant") {
      const text = msg.message.content
        .filter((b: any) => b.type === "text")
        .map((b: any) => b.text)
        .join("");
      if (text.trim()) console.log(text);
    }
    if (msg.type === "result" && msg.subtype === "success") {
      console.log(`\n[sfv-ic-agent] ✓ done\n`);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
