import { classifySource } from "@/src/lib/source-classifier";
import type { ParsedMemo } from "@/src/lib/memo-parser";
import RecommendationBadge from "./recommendation-badge";
import ScoreCircle from "./score-circle";
import RubricRadar from "./radar-chart";
import DiligenceChecklist from "./diligence-checklist";
import SourceDot from "./source-dot";

function fmtDate(iso: string): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function MemoSidebar({ memo }: { memo: ParsedMemo }) {
  return (
    <aside className="space-y-5">
      <div>
        <span className="label text-[10px] text-text-muted">Company</span>
        <h2 className="display mt-2 text-[28px] leading-tight text-text">{memo.company}</h2>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-text-muted">
          <span className="mono text-[11px]">{memo.stage || "Stage —"}</span>
          {memo.ask && (
            <>
              <span className="text-text-muted/50">·</span>
              <span className="mono text-[11px]">{memo.ask}</span>
            </>
          )}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <RecommendationBadge value={memo.recommendation} size="md" />
          {memo.confidence && (
            <span className="mono text-[11px] text-text-muted">
              Confidence: <span className="text-text">{memo.confidence}</span>
            </span>
          )}
        </div>
      </div>

      <div className="border border-white/10 bg-bg/60 p-4">
        <ScoreCircle score={memo.totalScore} />
      </div>

      <RubricRadar rubric={memo.rubric} />

      <DiligenceChecklist items={memo.diligenceItems} />

      <div className="border border-white/10 bg-bg/60">
        <div className="border-b border-white/10 px-4 py-3">
          <span className="label text-[10px] text-text-muted">Sources · {memo.sources.length}</span>
        </div>
        <ol className="space-y-2 p-4 text-[12px]">
          {memo.sources.map((s) => (
            <li key={s.n} className="flex items-start gap-2">
              <span className="mono w-5 shrink-0 text-text-muted">[{s.n}]</span>
              <SourceDot type={classifySource(s.url)} />
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-snug text-text/85 transition-colors hover:text-accent"
              >
                {s.title}
                {s.outlet && (
                  <span className="block text-[11px] text-text-muted">{s.outlet}</span>
                )}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div className="text-text-muted">
        <span className="label text-[10px]">Last updated</span>
        <div className="mono mt-1 text-[11px] text-text-muted">{fmtDate(memo.lastUpdated)}</div>
      </div>
    </aside>
  );
}
