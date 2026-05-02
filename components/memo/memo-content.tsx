"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Citation from "./citation";
import type { MemoSource } from "@/src/lib/memo-parser";

interface Props {
  content: string;
  sources: MemoSource[];
}

const NUM_RX =
  /(\$\d+(?:[\d,]*\.?\d+)?\s?[KMBkmb]?\+?(?:\/[a-zA-Z]+)?|\b\d+(?:\.\d+)?%|\b\d+\/\d+\b|\b\d{1,3}(?:,\d{3})+\b|\b\d+x\b)/g;

const CITE_RX = /\[(\d+)\]/g;

interface CiteToken {
  kind: "cite";
  n: number;
  raw: string;
}
interface NumToken {
  kind: "num";
  text: string;
}
interface TextToken {
  kind: "text";
  text: string;
}
type Token = CiteToken | NumToken | TextToken;

function tokenize(input: string): Token[] {
  const out: Token[] = [];
  // Step 1: split by citations
  let lastIdx = 0;
  let citeMatch: RegExpExecArray | null;
  CITE_RX.lastIndex = 0;
  const segments: { text: string; cite?: number }[] = [];
  while ((citeMatch = CITE_RX.exec(input)) !== null) {
    if (citeMatch.index > lastIdx) {
      segments.push({ text: input.slice(lastIdx, citeMatch.index) });
    }
    segments.push({ text: citeMatch[0], cite: parseInt(citeMatch[1], 10) });
    lastIdx = citeMatch.index + citeMatch[0].length;
  }
  if (lastIdx < input.length) segments.push({ text: input.slice(lastIdx) });

  // Step 2: within non-citation segments, split by numbers
  for (const seg of segments) {
    if (seg.cite != null) {
      out.push({ kind: "cite", n: seg.cite, raw: seg.text });
      continue;
    }
    const piece = seg.text;
    let lastNumIdx = 0;
    let numMatch: RegExpExecArray | null;
    NUM_RX.lastIndex = 0;
    while ((numMatch = NUM_RX.exec(piece)) !== null) {
      if (numMatch.index > lastNumIdx) {
        out.push({ kind: "text", text: piece.slice(lastNumIdx, numMatch.index) });
      }
      out.push({ kind: "num", text: numMatch[0] });
      lastNumIdx = numMatch.index + numMatch[0].length;
    }
    if (lastNumIdx < piece.length) out.push({ kind: "text", text: piece.slice(lastNumIdx) });
  }
  return out;
}

function renderTokens(input: string, sources: MemoSource[]): React.ReactNode[] {
  const tokens = tokenize(input);
  return tokens.map((t, i) => {
    if (t.kind === "cite") {
      const src = sources.find((s) => s.n === t.n);
      return <Citation key={i} n={t.n} source={src} />;
    }
    if (t.kind === "num") {
      return (
        <span key={i} className="num">
          {t.text}
        </span>
      );
    }
    return <React.Fragment key={i}>{t.text}</React.Fragment>;
  });
}

function transformChildren(children: React.ReactNode, sources: MemoSource[]): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (typeof child === "string") return renderTokens(child, sources);
    return child;
  });
}

/**
 * Strip the leading H1 + frontmatter block (Date / Analyst / Stage / Ask / Recommendation
 * are surfaced in the sidebar).
 *
 * Also remove the "## 12. Sources" section — sources are listed in the sidebar.
 */
function trimContent(raw: string): string {
  let out = raw;
  // remove sources section onwards
  const idx = out.search(/^##\s*12\.\s*Sources/m);
  if (idx >= 0) out = out.slice(0, idx).trimEnd();
  // remove leading h1 + first metadata block + leading "---"
  out = out.replace(/^#\s+[^\n]+\n+/, "");
  out = out.replace(/^(\*\*[A-Za-z][^*]*\*\*[^\n]*\n)+/m, "");
  out = out.replace(/^---\s*$/m, "");
  return out.trim();
}

export default function MemoContent({ content, sources }: Props) {
  const trimmed = trimContent(content);
  return (
    <div className="memo-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => <p>{transformChildren(children, sources)}</p>,
          li: ({ children }) => <li>{transformChildren(children, sources)}</li>,
          td: ({ children }) => <td>{transformChildren(children, sources)}</td>,
          th: ({ children }) => <th>{transformChildren(children, sources)}</th>,
          strong: ({ children }) => <strong>{transformChildren(children, sources)}</strong>,
          em: ({ children }) => <em>{transformChildren(children, sources)}</em>,
        }}
      >
        {trimmed}
      </ReactMarkdown>
    </div>
  );
}
