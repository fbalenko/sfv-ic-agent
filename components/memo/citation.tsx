"use client";

import { useEffect, useRef, useState } from "react";
import { classifySource, sourceTypeLabel } from "@/src/lib/source-classifier";
import type { MemoSource } from "@/src/lib/memo-parser";
import SourceDot from "./source-dot";

export default function Citation({
  n,
  source,
}: {
  n: number;
  source?: MemoSource;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (!source) {
    return <sup className="cite">[{n}]</sup>;
  }
  const type = classifySource(source.url);

  return (
    <span ref={ref} className="relative inline-block">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setOpen((o) => !o);
        }}
        className="cite"
        aria-label={`Source ${n}: ${source.title}`}
      >
        [{n}]
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 top-full z-30 mt-2 w-[320px] -translate-x-1/2 border border-bg-elevated bg-bg-light p-3 text-left shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          style={{ color: "var(--color-text-on-light)" }}
        >
          <span className="mb-2 flex items-center gap-2">
            <SourceDot type={type} />
            <span className="label text-[10px]" style={{ color: "var(--color-text-muted-light)" }}>
              {sourceTypeLabel(type)}
            </span>
            {source.accessed && (
              <span
                className="mono ml-auto text-[10px]"
                style={{ color: "var(--color-text-muted-light)" }}
              >
                {source.accessed}
              </span>
            )}
          </span>
          <span className="block text-[12px] font-semibold leading-snug" style={{ color: "var(--color-text-on-light)" }}>
            {source.title}
          </span>
          {source.outlet && (
            <span
              className="mt-1 block text-[11px]"
              style={{ color: "var(--color-text-muted-light)" }}
            >
              {source.outlet}
            </span>
          )}
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mono mt-2 block break-all text-[10px] underline"
            style={{ color: "var(--color-accent)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {source.url}
          </a>
        </span>
      )}
    </span>
  );
}
