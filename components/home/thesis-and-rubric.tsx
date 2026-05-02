const RUBRIC_ROWS = [
  {
    dim: "AI centrality",
    one: "AI is a feature label on a traditional SaaS product",
    three: "AI handles a meaningful but optional workflow",
    five: "AI is the product; remove it and nothing is left",
  },
  {
    dim: "Workflow depth",
    one: "Surface-level tool (notifications, summaries)",
    three: "Owns one full workflow end-to-end",
    five: "Owns multiple connected workflows; replaces a role",
  },
  {
    dim: "Data loop",
    one: "No proprietary data accumulating",
    three: "Some proprietary data, weak loop",
    five: "Strong loop: more usage → better model → more usage",
  },
  {
    dim: "Founder-workflow fit",
    one: "Founders have no domain background",
    three: "Founders have adjacent domain experience",
    five: "Founders have done the exact job being automated",
  },
  {
    dim: "Traction signal",
    one: "Pre-revenue or pilots only",
    three: "Real ARR, mixed retention",
    five: "Real ARR with strong NDR and logo quality",
  },
  {
    dim: "SFV thesis fit",
    one: "Tangential to the thesis",
    three: "Clearly within the thesis",
    five: "Central to the thesis; SFV should know this company",
  },
];

export default function ThesisAndRubric() {
  return (
    <section className="border-t border-white/10 bg-bg">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <span className="label text-[10px] text-text-muted">About this thesis</span>
          <h2 className="display mt-3 text-[28px] leading-tight text-text md:text-[36px]">
            What &ldquo;AI-native&rdquo; actually means here.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-[1.65] text-text/85">
            <p>
              We&rsquo;re looking for companies rebuilding back-office and
              middle-office financial workflows with LLMs and agents at the
              core — not GPT wrappers bolted onto incumbent suites. The test is
              binary: remove the AI and the product still works? It&rsquo;s
              cosmetic. Remove it and the product disappears? It&rsquo;s core.
            </p>
            <p>
              Memos commit to two judgments every time: AI core vs. cosmetic,
              and founder-workflow fit. The rubric on the right scores six
              dimensions out of five each. <span className="mono text-text">22+</span> earns
              a star and a place on the &ldquo;build conviction&rdquo; shortlist.
            </p>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="border border-white/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="label px-4 py-3 text-[10px] text-text-muted">
                    Dimension
                  </th>
                  <th className="label px-4 py-3 text-[10px] text-text-muted">1</th>
                  <th className="label px-4 py-3 text-[10px] text-text-muted">3</th>
                  <th className="label px-4 py-3 text-[10px] text-text-muted">5</th>
                </tr>
              </thead>
              <tbody>
                {RUBRIC_ROWS.map((r) => (
                  <tr key={r.dim} className="border-t border-white/5">
                    <td className="px-4 py-3 align-top">
                      <span className="text-[13px] font-semibold text-text">
                        {r.dim}
                      </span>
                    </td>
                    <td className="px-4 py-3 align-top text-[12px] text-text-muted">
                      {r.one}
                    </td>
                    <td className="px-4 py-3 align-top text-[12px] text-text/80">
                      {r.three}
                    </td>
                    <td className="px-4 py-3 align-top text-[12px] text-text">
                      {r.five}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
