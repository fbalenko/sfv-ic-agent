"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function LiveMemo({
  content,
  active,
}: {
  content: string;
  active: boolean;
}) {
  return (
    <div className="flex h-[640px] flex-col border border-white/10 bg-bg-light text-text-on-light">
      <div
        className="flex items-center justify-between border-b border-bg/10 px-5 py-3"
        style={{ borderBottomColor: "rgba(3,45,96,0.12)" }}
      >
        <span
          className="label text-[10px]"
          style={{ color: "var(--color-text-muted-light)" }}
        >
          Live memo
        </span>
        {active && (
          <span
            className="mono text-[10px]"
            style={{ color: "var(--color-text-muted-light)" }}
          >
            writing…
          </span>
        )}
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {content ? (
          <div className={`memo-prose ${active ? "cursor" : ""}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        ) : (
          <div
            className="text-[13px]"
            style={{ color: "var(--color-text-muted-light)" }}
          >
            Memo will stream here as the agent writes it to disk.
          </div>
        )}
      </div>
    </div>
  );
}
