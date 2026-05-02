# SFV IC Agent

A research agent that produces IC-grade memos and a market map for an
AI-native financial-infrastructure thesis at Salesforce Ventures, wrapped in
a Next.js site at [sfv-ic.com](https://sfv-ic.com).

It exists for two reasons:
1. To show what the thesis is and who is in it — eight memos already in the
   `output/` directory, scored on a six-dimension rubric.
2. To let an investing partner generate a fresh memo on any company in
   ~5 minutes, watch the agent reason in real time, and read the result
   immediately.

The agent is built on the [Claude Agent SDK][sdk] with Exa MCP for research.
The site is plain Next.js 15 + Tailwind v4 over the same `output/` directory
the agent writes to. There is no database. The files **are** the database.

[sdk]: https://docs.anthropic.com/en/docs/claude-code/sdk

## Demo flow

1. Land on `/` — five thesis subsegments, a positioning scatter, and a
   market map of eight companies scored on AI centrality, workflow depth,
   data loop, founder fit, traction and SFV thesis fit.
2. Click any row → `/memo/<slug>` for the full memo. Inline `[n]` citations
   open source popovers categorized by type (primary, tier-1 press, analyst).
3. Click **Generate new memo** → `/new`. Type a company name, watch Exa
   research stream into the research log, watch the memo render live as the
   agent writes it, then auto-redirect to `/memo/<slug>`.

> _Suggested screenshot: the homepage scatter with the market-map table
> below, taken at desktop width._

## Architecture

```
/app                Next 15 App Router pages — / · /memo/[slug] · /new · /thesis
/components         React components (home, memo, new, primitives)
/src
  /lib              Pure helpers — market-map-parser · memo-parser · source-classifier · subsegments
  agent.ts          Original CLI agent (unchanged)
  run-agent-streaming.ts   NDJSON-emitting wrapper used by /api/generate
  batch.ts          Batch runner for multiple companies (unchanged)
  merge-map.ts      Re-derives output/market-map.md from the memos (unchanged)
/prompts            system · memo template · rubric · operator context (unchanged)
/output             Memos + market map. Read at request time by Next.
/api/generate       SSE route → spawns tsx src/run-agent-streaming.ts
```

The Next site renders entirely from `output/*.md` at request time
(`force-dynamic`). To change a memo, re-run the agent.

## Run it yourself

Requires Node 20+ and an Anthropic API key. Exa is optional but strongly
recommended — without it the agent falls back to built-in WebSearch and the
research is meaningfully thinner.

```bash
git clone https://github.com/<user>/sfv-ic-agent
cd sfv-ic-agent
npm install
cp .env.example .env       # then fill in keys
```

`.env`:

```
ANTHROPIC_API_KEY=sk-ant-...
EXA_API_KEY=...            # optional but recommended
```

Then:

```bash
# the website
npm run dev                # http://localhost:3000

# generate one memo from the CLI (no website needed)
npm run agent -- "Casca"

# batch a list of companies (see src/batch.ts)
npm run batch

# regenerate output/market-map.md from existing memos
npm run merge-map
```

## Deploy

```bash
vercel link
vercel deploy --prod
```

`vercel.json` extends the `/api/generate` function timeout to 600s so the
agent can run end-to-end in production.

## A note on the streaming endpoint

The original `src/agent.ts` only logs assistant text — tool calls and tool
results never reach stdout, so parsing the CLI process can&rsquo;t produce
the per-tool research log that `/new` shows. The fix is a small wrapper,
`src/run-agent-streaming.ts`, that mirrors the same `query()` call and
emits NDJSON events for each message. The `/api/generate` route spawns the
wrapper with `tsx`, parses each NDJSON line, and re-emits it as an SSE
event. The original `agent.ts` is untouched.

---

Built by Filip Balenko.
