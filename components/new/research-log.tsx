"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface LogEntry {
  id: number;
  ts: string;
  kind: "tool" | "text" | "error" | "info" | "result";
  tool?: string;
  text: string;
}

const TOOL_COLOR: Record<string, string> = {
  exa: "var(--color-accent)",
  websearch: "var(--color-warn)",
  webfetch: "var(--color-warn)",
  read: "var(--color-positive)",
  write: "var(--color-positive)",
  edit: "var(--color-positive)",
  glob: "var(--color-text-muted)",
  grep: "var(--color-text-muted)",
};

function colorForTool(t?: string): string {
  if (!t) return "var(--color-text-muted)";
  const lower = t.toLowerCase();
  if (lower.includes("exa")) return TOOL_COLOR.exa;
  for (const k of Object.keys(TOOL_COLOR)) {
    if (lower === k) return TOOL_COLOR[k];
  }
  return "var(--color-text-muted)";
}

function fmtTs(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toTimeString().slice(0, 8);
  } catch {
    return "--:--:--";
  }
}

export default function ResearchLog({ entries }: { entries: LogEntry[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [entries.length]);

  return (
    <div className="flex h-[640px] flex-col border border-white/10 bg-bg-elevated/30">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="label text-[10px] text-text-muted">Research log</span>
        <span className="mono text-[10px] text-text-muted">{entries.length} events</span>
      </div>
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-3">
        <AnimatePresence initial={false}>
          {entries.map((e) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-1 flex items-start gap-3 text-[12px] leading-snug"
            >
              <span className="mono shrink-0 text-text-muted/80">{fmtTs(e.ts)}</span>
              {e.kind === "tool" ? (
                <>
                  <span
                    className="label shrink-0 text-[10px]"
                    style={{ color: colorForTool(e.tool) }}
                  >
                    {(e.tool || "").replace(/^mcp__/, "")}
                  </span>
                  <span className="text-text/80">{e.text}</span>
                </>
              ) : e.kind === "error" ? (
                <span className="text-[var(--color-negative)]">{e.text}</span>
              ) : e.kind === "result" ? (
                <span className="label text-[10px] text-text-muted">{e.text}</span>
              ) : (
                <span className="text-text/85">{e.text}</span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
