"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ResearchLog, { type LogEntry } from "./research-log";
import LiveMemo from "./live-memo";
import RecommendationBadge from "@/components/memo/recommendation-badge";
import type { Recommendation } from "@/src/lib/memo-parser";

type Status = "idle" | "running" | "done" | "error";

function summarizeToolEvent(ev: any): string {
  if (typeof ev.summary === "string" && ev.summary) return ev.summary;
  return "";
}

function parseSseEvent(buffer: string): { event: string; data: any }[] {
  const out: { event: string; data: any }[] = [];
  const blocks = buffer.split("\n\n");
  for (const block of blocks) {
    const lines = block.split("\n");
    let event = "message";
    const dataParts: string[] = [];
    for (const l of lines) {
      if (l.startsWith("event:")) event = l.slice(6).trim();
      else if (l.startsWith("data:")) dataParts.push(l.slice(5).trim());
    }
    if (!dataParts.length) continue;
    try {
      out.push({ event, data: JSON.parse(dataParts.join("\n")) });
    } catch {
      out.push({ event, data: { raw: dataParts.join("\n") } });
    }
  }
  return out;
}

export default function GenerateForm() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const idCounter = useRef(0);

  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const [memoContent, setMemoContent] = useState("");
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [resultSlug, setResultSlug] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // cmd+k focus
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // redirect on completion
  useEffect(() => {
    if (status === "done" && resultSlug) {
      const t = setTimeout(() => router.push(`/memo/${resultSlug}`), 2000);
      return () => clearTimeout(t);
    }
  }, [status, resultSlug, router]);

  async function start(e: React.FormEvent) {
    e.preventDefault();
    const name = company.trim();
    if (!name || status === "running") return;

    abortRef.current?.abort();
    abortRef.current = new AbortController();
    setEntries([]);
    setMemoContent("");
    setRecommendation(null);
    setResultSlug(null);
    setError(null);
    setStatus("running");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company: name }),
        signal: abortRef.current.signal,
      });
      if (!res.ok || !res.body) {
        const msg = await res.text().catch(() => "request failed");
        setError(msg);
        setStatus("error");
        return;
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        let split = buf.lastIndexOf("\n\n");
        if (split < 0) continue;
        const ready = buf.slice(0, split + 2);
        buf = buf.slice(split + 2);
        const events = parseSseEvent(ready);
        for (const { event, data } of events) {
          handleEvent(event, data);
        }
      }
      // any trailing buffered events
      if (buf.trim()) {
        for (const { event, data } of parseSseEvent(buf)) handleEvent(event, data);
      }
    } catch (err: any) {
      if (err?.name === "AbortError") return;
      setError(err?.message ?? "stream failed");
      setStatus("error");
    }
  }

  function handleEvent(event: string, data: any) {
    if (event === "tool_use") {
      pushEntry({
        kind: "tool",
        tool: data.tool,
        text: summarizeToolEvent(data),
        ts: data.ts ?? new Date().toISOString(),
      });
    } else if (event === "text") {
      const content = String(data.content ?? "").trim();
      if (content) {
        pushEntry({
          kind: "text",
          text: content.length > 220 ? content.slice(0, 217) + "…" : content,
          ts: data.ts ?? new Date().toISOString(),
        });
      }
    } else if (event === "memo_progress") {
      if (typeof data.partial_content === "string") {
        setMemoContent(data.partial_content);
      }
    } else if (event === "tool_result") {
      // quietly noted; do not flood the log
    } else if (event === "complete") {
      const rec = (data.recommendation as Recommendation) || "UNKNOWN";
      setRecommendation(rec);
      setResultSlug(data.slug ?? null);
      pushEntry({
        kind: "result",
        text: `Memo complete · ${rec}${data.slug ? " · /memo/" + data.slug : ""}`,
        ts: data.ts ?? new Date().toISOString(),
      });
      setStatus("done");
    } else if (event === "error") {
      const msg = data.message ?? "unknown error";
      pushEntry({ kind: "error", text: msg, ts: new Date().toISOString() });
      setError(msg);
      setStatus("error");
    } else if (event === "log") {
      pushEntry({
        kind: "info",
        text: String(data.content ?? ""),
        ts: new Date().toISOString(),
      });
    } else if (event === "done") {
      // stream closed; status is set by complete or error
    }
  }

  function pushEntry(e: Omit<LogEntry, "id">) {
    const id = ++idCounter.current;
    setEntries((cur) => [...cur, { id, ...e }]);
  }

  function cancel() {
    abortRef.current?.abort();
    setStatus("idle");
  }

  return (
    <div className="space-y-10">
      <form onSubmit={start} className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <span className="label pointer-events-none absolute left-4 top-3 text-[10px] text-text-muted">
            Company
          </span>
          <input
            ref={inputRef}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Casca, Sardine, Rillet…"
            disabled={status === "running"}
            className="w-full border border-white/15 bg-bg/60 px-4 pb-3 pt-7 text-[16px] text-text outline-none transition-colors placeholder:text-text-muted/60 focus:border-accent"
            spellCheck={false}
            autoComplete="off"
          />
          <span className="mono pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-text-muted/70">
            ⌘K
          </span>
        </div>
        {status === "running" ? (
          <button
            type="button"
            onClick={cancel}
            className="label shrink-0 border border-white/20 px-5 py-3 text-[11px] text-text transition-colors hover:bg-bg-elevated"
          >
            Cancel
          </button>
        ) : (
          <button
            type="submit"
            disabled={!company.trim()}
            className="label shrink-0 bg-accent px-5 py-3 text-[11px] text-white transition-[filter] hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Generate IC memo →
          </button>
        )}
      </form>

      {status === "idle" ? (
        <HowItWorks />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <ResearchLog entries={entries} />
            <LiveMemo content={memoContent} active={status === "running"} />
          </div>
          {status === "done" && recommendation && (
            <div className="fade-up flex items-center justify-center gap-3 border border-accent/30 bg-accent/5 px-5 py-4">
              <span className="label text-[11px] text-text-muted">Result</span>
              <RecommendationBadge value={recommendation} size="md" />
              <span className="text-[13px] text-text/85">
                Redirecting to memo…
              </span>
            </div>
          )}
          {error && (
            <div className="border border-[var(--color-negative)]/40 bg-[var(--color-negative)]/10 px-5 py-4 text-[13px] text-[var(--color-negative)]">
              {error}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: 1,
      title: "Research via Exa",
      sub: "company_research_exa, linkedin_search_exa, web_search_exa, crawling_exa",
    },
    { n: 2, title: "Draft against memo template", sub: "Twelve sections in fixed order." },
    { n: 3, title: "Cite all claims with source verification", sub: "Numbered, dated, primary-first." },
    { n: 4, title: "Score on rubric and write to disk", sub: "Six dimensions out of 30; appended to market map." },
  ];
  return (
    <div className="border border-white/10 bg-bg-elevated/30">
      <div className="border-b border-white/10 px-6 py-4">
        <span className="label text-[10px] text-text-muted">How the agent works</span>
      </div>
      <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
        {steps.map((s) => (
          <div key={s.n} className="flex flex-col gap-2 p-6">
            <span className="mono text-[10px] text-accent">0{s.n}</span>
            <span className="display text-[14px] text-text">{s.title}</span>
            <span className="text-[12px] leading-snug text-text-muted">{s.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
