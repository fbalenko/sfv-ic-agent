"use client";

import { useState } from "react";
import type { DiligenceItem } from "@/src/lib/memo-parser";

export default function DiligenceChecklist({ items }: { items: DiligenceItem[] }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  if (!items.length) return null;

  // group by group label, preserve order
  const groups: { label: string; items: { idx: number; text: string }[] }[] = [];
  items.forEach((it, idx) => {
    const last = groups[groups.length - 1];
    if (last && last.label === it.group) last.items.push({ idx, text: it.text });
    else groups.push({ label: it.group, items: [{ idx, text: it.text }] });
  });

  return (
    <div className="border border-white/10 bg-bg/60">
      <div className="border-b border-white/10 px-4 py-3">
        <span className="label text-[10px] text-text-muted">Week one diligence</span>
      </div>
      <div className="space-y-4 p-4">
        {groups.map((g) => (
          <div key={g.label}>
            <div className="label mb-2 text-[10px] text-text-muted/80">{g.label}</div>
            <ul className="space-y-1.5">
              {g.items.map(({ idx, text }) => {
                const isChecked = !!checked[idx];
                return (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => setChecked((c) => ({ ...c, [idx]: !c[idx] }))}
                      className="flex w-full items-start gap-2 text-left transition-colors hover:text-text"
                    >
                      <span
                        className="mt-0.5 inline-flex h-3 w-3 shrink-0 items-center justify-center border"
                        style={{
                          borderColor: isChecked ? "var(--color-accent)" : "var(--color-text-muted)",
                          background: isChecked ? "var(--color-accent)" : "transparent",
                        }}
                      >
                        {isChecked && (
                          <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true">
                            <path d="M1 4.5 L3 6.5 L7 1.5" stroke="white" strokeWidth="1.5" fill="none" />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`text-[12px] leading-snug ${
                          isChecked ? "text-text-muted line-through" : "text-text/85"
                        }`}
                      >
                        {text}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
