"use client";

import Link from "next/link";
import type { ScoredCompany } from "./types";
import type { SubsegmentKey } from "@/src/lib/subsegments";
import { subsegment } from "@/src/lib/subsegments";

const REC_COLOR: Record<string, string> = {
  PURSUE: "var(--color-accent)",
  "TERM SHEET": "var(--color-accent)",
  WATCH: "var(--color-warn)",
  PASS: "var(--color-negative)",
  UNKNOWN: "var(--color-text-muted)",
};

interface Props {
  rows: ScoredCompany[];
  active: SubsegmentKey | null;
}

export default function MarketMapTable({ rows, active }: Props) {
  return (
    <div className="border border-white/10 bg-bg-elevated/30">
      <div className="flex items-baseline justify-between border-b border-white/10 px-6 py-4">
        <h2 className="display text-[20px] text-text">Market map</h2>
        <span className="label text-[10px] text-text-muted">
          {rows.length} companies · ⭐ scored 22+
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr>
              <Th>Company</Th>
              <Th>Subsegment</Th>
              <Th>Stage</Th>
              <Th align="center">Core</Th>
              <Th align="right">Score</Th>
              <Th>One-line take</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const dim = active && r.subsegment !== active;
              const top = r.score >= 22;
              const Cell = r.slug ? Link : "div";
              const linkProps = r.slug ? { href: `/memo/${r.slug}` as const } : {};
              return (
                <tr
                  key={`${r.company}-${r.score}`}
                  className={`group border-t border-white/5 transition-opacity ${
                    dim ? "opacity-30" : "opacity-100"
                  } ${top ? "bg-accent/[0.04]" : ""}`}
                >
                  <Td>
                    <Cell
                      {...(linkProps as any)}
                      className="flex items-center gap-2 transition-colors hover:text-accent"
                    >
                      <span className="text-[14px] text-text">{r.company}</span>
                      {r.isStarred && (
                        <span className="text-accent" aria-label="starred">
                          ⭐
                        </span>
                      )}
                    </Cell>
                  </Td>
                  <Td>
                    <span className="text-[13px] text-text-muted">
                      {subsegment(r.subsegment).short}
                    </span>
                  </Td>
                  <Td>
                    <span className="mono text-[12px] text-text-muted">{r.stage}</span>
                  </Td>
                  <Td align="center">
                    <span
                      className="mono text-[12px]"
                      style={{
                        color: r.isAiCore ? "var(--color-accent)" : "var(--color-text-muted)",
                      }}
                    >
                      {r.isAiCore ? "yes" : "no"}
                    </span>
                  </Td>
                  <Td align="right">
                    <span
                      className="mono tabular-nums"
                      style={{
                        color: top ? "var(--color-accent)" : "var(--color-text)",
                        fontSize: top ? "20px" : "14px",
                        fontWeight: 600,
                      }}
                    >
                      {r.score}
                    </span>
                  </Td>
                  <Td>
                    <span className="text-[13px] text-text/85">{r.take}</span>
                  </Td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children, align }: { children: React.ReactNode; align?: "right" | "center" }) {
  return (
    <th
      className="label px-4 py-3 text-[10px] font-semibold text-text-muted"
      style={{ textAlign: align ?? "left" }}
    >
      {children}
    </th>
  );
}

function Td({ children, align }: { children: React.ReactNode; align?: "right" | "center" }) {
  return (
    <td className="px-4 py-3 align-middle" style={{ textAlign: align ?? "left" }}>
      {children}
    </td>
  );
}
