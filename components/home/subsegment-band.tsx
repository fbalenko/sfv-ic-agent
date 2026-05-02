"use client";

import { SUBSEGMENTS, type SubsegmentKey } from "@/src/lib/subsegments";
import type { ScoredCompany } from "@/components/home/types";

interface Props {
  rows: ScoredCompany[];
  active: SubsegmentKey | null;
  onToggle: (key: SubsegmentKey) => void;
}

export default function SubsegmentBand({ rows, active, onToggle }: Props) {
  const stats = SUBSEGMENTS.map((s) => {
    const matches = rows.filter((r) => r.subsegment === s.key);
    const avg =
      matches.length > 0
        ? Math.round(
            (matches.reduce((a, r) => a + r.score, 0) / matches.length) * 10
          ) / 10
        : 0;
    const top = matches.slice().sort((a, b) => b.score - a.score)[0];
    return { sub: s, count: matches.length, avg, top };
  });

  return (
    <div className="-mx-6 overflow-x-auto px-6 md:-mx-10 md:px-10">
      <div className="grid min-w-[860px] grid-cols-5 gap-px border border-white/10 bg-white/10">
        {stats.map(({ sub, count, avg, top }) => {
          const isActive = active === sub.key;
          const dimmed = active && !isActive;
          return (
            <button
              key={sub.key}
              onClick={() => onToggle(sub.key)}
              className={`group flex h-full flex-col items-start gap-3 bg-bg p-5 text-left transition-colors duration-150 hover:bg-bg-elevated ${
                isActive ? "ring-1 ring-accent/80" : ""
              } ${dimmed ? "opacity-40" : ""}`}
            >
              <span className="label text-[10px] text-text-muted">
                {sub.short}
              </span>
              <span className="display text-[18px] leading-tight text-text">
                {sub.name}
              </span>
              <div className="mt-auto flex w-full items-end justify-between gap-3 pt-4">
                <div className="flex flex-col gap-1">
                  <span className="mono text-[11px] text-text-muted">
                    {count} co · avg {avg || "—"}
                  </span>
                  <span className="text-[12px] text-text/80">
                    {top?.company ?? "—"}
                  </span>
                </div>
                <span
                  className={`mono text-[22px] tabular-nums ${
                    isActive ? "text-accent" : "text-text/70"
                  }`}
                >
                  {top?.score ?? "—"}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
