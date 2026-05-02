import Link from "next/link";
import { parseMarketMap } from "@/src/lib/market-map-parser";
import { SUBSEGMENTS } from "@/src/lib/subsegments";
import ResearchStack from "@/components/home/research-stack";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "The thesis · SFV IC Agent",
  description:
    "AI-native financial infrastructure: what the bet is, what the five subsegments are, how the rubric scores, and the three category-level risks.",
};

const RUBRIC_DEEP = [
  {
    dim: "AI centrality",
    one: "AI is a feature label on a traditional SaaS product",
    three: "AI handles a meaningful but optional workflow",
    five: "AI is the product; remove it and nothing is left",
    note:
      "We are looking for products that disappear without their LLMs. Auto-coding, conversational intake, multi-source evidence synthesis, narrative generation. Cosmetic AI is the largest category in the market — a 1 or 2 score is the default, not the exception.",
  },
  {
    dim: "Workflow depth",
    one: "Surface-level tool (notifications, summaries)",
    three: "Owns one full workflow end-to-end",
    five: "Owns multiple connected workflows; replaces a role",
    note:
      "Depth is the difference between a copilot and a system of record. The companies we want own the credit narrative, not the dashboard above it. Multiple connected workflows are how a product crosses from automation to displacement.",
  },
  {
    dim: "Data loop",
    one: "No proprietary data accumulating",
    three: "Some proprietary data, weak loop",
    five: "Strong loop: more usage → better model → more usage",
    note:
      "The most over-claimed moat in fintech. We probe whether data is actually entering model updates or just sitting in a warehouse. A real loop changes the unit economics of every additional customer; a fake one is just storage.",
  },
  {
    dim: "Founder-workflow fit",
    one: "Founders have no domain background",
    three: "Founders have adjacent domain experience",
    five: "Founders have done the exact job being automated",
    note:
      "An ex-credit-officer building underwriting tools is a different bet than an ex-Google PM building underwriting tools. We score adjacency vs. exact-job experience explicitly. Engineers building for engineers usually outperforms — but not in regulated finance.",
  },
  {
    dim: "Traction signal",
    one: "Pre-revenue or pilots only",
    three: "Real ARR, mixed retention",
    five: "Real ARR with strong NDR and logo quality",
    note:
      "Real ARR with named logos beats a TAM model with conviction every time. We anchor on disclosed numbers only — no inference from round size, no extrapolation from headcount, no benchmarking to the median Series A.",
  },
  {
    dim: "SFV thesis fit",
    one: "Tangential to the thesis",
    three: "Clearly within the thesis",
    five: "Central to the thesis; SFV should know this company",
  note: "We score how well a company matches the AI-native financial infrastructure brief — not how interesting the company is in general. Adjacent breakthroughs in horizontal AI tooling don’t earn a 5 here.",
  },
];

const RISKS = [
  {
    title: "Regulatory backlash on AI in lending and compliance",
    body:
      "An OCC, CFPB or state regulator examines an AI-rendered adverse action and finds the explanation chain inadequate, or a fair-lending audit shows disparate impact in an AI-assisted approval flow. The category response — model risk management documentation, bias testing, examiner-ready audit trails — becomes a hard floor that compresses the gap between AI-native entrants and incumbents who can throw lawyers and consultants at the problem.",
  },
  {
    title: "Incumbent counter-attack via M&A",
    body:
      "nCino, Moody’s, FIS, Fiserv, SAP, Coupa or BILL acquire two or three of the strongest AI-native entrants in their adjacency, fold them into existing distribution, and the standalone-platform thesis collapses into an OEM thesis. Brex → Capital One in January 2026 already showed this is the live exit path. Good for early holders, harder for companies betting on independent scale.",
  },
  {
    title: "The “AI-native” label getting diluted as everyone bolts on AI",
    body:
      "Within 12–18 months every legacy vendor will claim AI-native status, the buyer signal collapses, and procurement teams stop treating AI-nativity as a tiebreaker. The thesis still works — but the marketing wedge disappears. Companies whose moat is real workflow ownership keep compounding; companies whose moat was being first to say the words don’t.",
  },
];

export default function ThesisPage() {
  const rows = parseMarketMap();
  const examplesBySub: Record<string, string[]> = {};
  for (const r of rows) {
    if (!examplesBySub[r.subsegment]) examplesBySub[r.subsegment] = [];
    if (examplesBySub[r.subsegment].length < 2) examplesBySub[r.subsegment].push(r.company);
  }

  return (
    <article className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
      {/* The bet */}
      <header className="grid grid-cols-1 gap-10 border-b border-white/10 pb-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="label text-[10px] text-text-muted">The thesis</span>
          <h1 className="display mt-3 text-[44px] leading-[0.95] text-text md:text-[64px]">
            The bet.
          </h1>
        </div>
        <div className="space-y-5 text-[16px] leading-[1.65] text-text/90 md:col-span-8">
          <p>
            <span className="text-text">AI-native financial infrastructure</span> is the
            companies rebuilding back-office and middle-office financial workflows
            with LLMs and agents at the core — not as a feature on top of a
            traditional SaaS product, but as the load-bearing logic of the system.
            Underwriting, treasury, AP/AR, compliance, credit memos: the work that
            used to require a person now done by an agent that ships with examiner-
            ready audit trails. The buyer is the CFO, the chief credit officer, the
            BSA/AML officer; the budget being displaced is real headcount and
            real legacy software.
          </p>
          <p>
            Why now is not &ldquo;LLMs got better.&rdquo; It is that, between 2023 and
            2025, multimodal models crossed three specific thresholds at once:
            messy financial-document understanding became reliable enough for human-
            in-the-loop production use, conversational interfaces stopped
            embarrassing the buyer&rsquo;s brand, and structured extraction from
            government forms hit examiner-acceptable accuracy. The category
            went from demo-able to deployable inside the same eighteen months
            that incumbent vendors were still figuring out their AI roadmaps.
            That window is the bet.
          </p>
        </div>
      </header>

      {/* Five subsegments */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="label text-[10px] text-text-muted">Where we look</span>
            <h2 className="display mt-3 text-[28px] leading-tight text-text md:text-[36px]">
              Five subsegments.
            </h2>
          </div>
          <Link
            href="/"
            className="label text-[11px] text-accent transition-colors hover:underline"
          >
            See market map →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-2">
          {SUBSEGMENTS.map((s) => (
            <div key={s.key} className="bg-bg p-6 md:p-8">
              <span className="label text-[10px] text-text-muted">{s.short}</span>
              <h3 className="display mt-2 text-[22px] leading-tight text-text">
                {s.name}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.6] text-text/85">
                {s.definition}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="label text-[10px] text-text-muted">Examples</span>
                {(examplesBySub[s.key] ?? []).map((c) => (
                  <span
                    key={c}
                    className="mono inline-flex items-center border border-white/15 px-2 py-1 text-[11px] text-text/85"
                  >
                    {c}
                  </span>
                ))}
                {!(examplesBySub[s.key]?.length) && (
                  <span className="text-[11px] text-text-muted">—</span>
                )}
              </div>
              <div className="mt-5 border-l-2 border-accent/60 pl-3">
                <span className="label text-[10px] text-text-muted">
                  Load-bearing question
                </span>
                <p className="mt-1 text-[13px] italic text-text/85">{s.loadBearing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rubric (deeper) */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="label text-[10px] text-text-muted">How we score</span>
            <h2 className="display mt-3 text-[28px] leading-tight text-text md:text-[36px]">
              The rubric.
            </h2>
          </div>
          <span className="label text-[10px] text-text-muted">Six dimensions · 30 points</span>
        </div>
        <div className="space-y-6">
          {RUBRIC_DEEP.map((r) => (
            <div
              key={r.dim}
              className="grid grid-cols-1 items-start gap-6 border-t border-white/10 pt-6 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <span className="display text-[18px] uppercase text-text">{r.dim}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 md:col-span-5">
                <div>
                  <span className="label text-[10px] text-text-muted">1</span>
                  <p className="mt-1 text-[12px] text-text-muted">{r.one}</p>
                </div>
                <div>
                  <span className="label text-[10px] text-text-muted">3</span>
                  <p className="mt-1 text-[12px] text-text/80">{r.three}</p>
                </div>
                <div>
                  <span className="label text-[10px] text-text-muted">5</span>
                  <p className="mt-1 text-[12px] text-text">{r.five}</p>
                </div>
              </div>
              <div className="md:col-span-4">
                <p className="text-[13px] leading-[1.6] text-text/80">{r.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category risks */}
      <section className="border-b border-white/10 py-16 md:py-20">
        <div className="mb-10">
          <span className="label text-[10px] text-text-muted">Category-level risks</span>
          <h2 className="display mt-3 text-[28px] leading-tight text-text md:text-[36px]">
            What kills the thesis.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
          {RISKS.map((r, i) => (
            <div key={i} className="bg-bg p-6 md:p-8">
              <span className="mono text-[10px] text-accent">0{i + 1}</span>
              <h3 className="display mt-3 text-[18px] leading-tight text-text">
                {r.title}
              </h3>
              <p className="mt-4 text-[13px] leading-[1.6] text-text/85">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ResearchStack size="large" />
    </article>
  );
}
