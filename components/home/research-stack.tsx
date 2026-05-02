interface Props {
  size?: "default" | "large";
}

const STAGES: Array<{ title: string; sub: string; tools?: string[]; flex?: number }> = [
  { title: "User input", sub: "Company name", flex: 1 },
  { title: "Claude Agent SDK", sub: "claude-opus-4-6 · streaming query()", flex: 1.2 },
  {
    title: "Exa MCP",
    sub: "Four research tools",
    flex: 1.8,
    tools: [
      "web_search_exa",
      "company_research_exa",
      "linkedin_search_exa",
      "crawling_exa",
    ],
  },
  {
    title: "System prompts",
    sub: "system · memo template · rubric · operator context",
    flex: 1.4,
  },
  {
    title: "File output",
    sub: "output/<slug>-memo.md · output/market-map.md",
    flex: 1.2,
  },
];

export default function ResearchStack({ size = "default" }: Props) {
  const padding = size === "large" ? "px-6 py-7" : "px-5 py-6";
  const titleSize = size === "large" ? "text-[16px]" : "text-[14px]";
  return (
    <section className="border-t border-white/10 bg-bg-elevated/30">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="label text-[10px] text-text-muted">Research stack</span>
            <h2 className="display mt-3 text-[28px] leading-tight text-text md:text-[36px]">
              How a memo gets made.
            </h2>
          </div>
          <p className="hidden max-w-[420px] text-[13px] text-text-muted md:block">
            Each memo is one agent run. The agent picks its own tool calls; the prompts enforce
            citation and numbers discipline.
          </p>
        </div>

        {/* desktop: horizontal flow */}
        <div className="hidden items-stretch gap-2 lg:flex">
          {STAGES.map((stage, i) => (
            <div key={stage.title} className="contents">
              <div
                className={`flex flex-col border border-white/10 bg-bg ${padding}`}
                style={{ flex: stage.flex ?? 1 }}
              >
                <div className="label text-[10px] text-text-muted">Step {i + 1}</div>
                <div className={`display mt-3 ${titleSize} text-text`}>{stage.title}</div>
                <div className="mt-2 text-[12px] leading-snug text-text-muted">{stage.sub}</div>
                {stage.tools && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {stage.tools.map((t) => (
                      <span
                        key={t}
                        className="mono inline-flex items-center border border-accent/40 bg-accent/[0.08] px-2 py-1 text-[10px] text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {i < STAGES.length - 1 && (
                <div className="flex shrink-0 items-center px-1">
                  <span className="label text-[14px] text-text-muted">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* mobile: vertical flow */}
        <div className="grid grid-cols-1 gap-3 lg:hidden">
          {STAGES.map((stage, i) => (
            <div key={stage.title} className={`border border-white/10 bg-bg ${padding}`}>
              <div className="label text-[10px] text-text-muted">Step {i + 1}</div>
              <div className={`display mt-3 ${titleSize} text-text`}>{stage.title}</div>
              <div className="mt-2 text-[12px] leading-snug text-text-muted">{stage.sub}</div>
              {stage.tools && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {stage.tools.map((t) => (
                    <span
                      key={t}
                      className="mono inline-flex items-center border border-accent/40 bg-accent/[0.08] px-2 py-1 text-[10px] text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
