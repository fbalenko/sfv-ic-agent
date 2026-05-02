import Link from "next/link";
import { notFound } from "next/navigation";
import { parseMemo } from "@/src/lib/memo-parser";
import MemoContent from "@/components/memo/memo-content";
import MemoSidebar from "@/components/memo/memo-sidebar";

export const dynamic = "force-dynamic";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const memo = parseMemo(slug);
  if (!memo) return { title: "Memo not found — SFV IC Agent" };
  return {
    title: `${memo.company} — IC Memo · SFV IC Agent`,
    description: memo.rationale.slice(0, 200),
  };
}

export default async function MemoPage({ params }: Params) {
  const { slug } = await params;
  const memo = parseMemo(slug);
  if (!memo) return notFound();

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-14">
      <Link
        href="/"
        className="label mb-6 inline-flex items-center gap-2 text-[10px] text-text-muted transition-colors hover:text-accent"
      >
        ← Back to map
      </Link>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="min-w-0">
          <div className="mx-auto max-w-[760px] bg-bg-light px-7 py-10 md:px-12 md:py-14">
            <div className="mb-8">
              <span
                className="label text-[10px]"
                style={{ color: "var(--color-text-muted-light)" }}
              >
                IC Memo · {memo.date}
              </span>
              <h1
                className="display mt-2 text-[40px] leading-none md:text-[48px]"
                style={{ color: "var(--color-text-on-light)" }}
              >
                {memo.company}
              </h1>
            </div>
            <MemoContent content={memo.content} sources={memo.sources} />
          </div>
        </article>

        <div className="lg:sticky lg:top-6 lg:self-start">
          <MemoSidebar memo={memo} />
        </div>
      </div>
    </div>
  );
}
