import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 border-b border-white/10 bg-bg/90 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span className="display text-[20px] tracking-tight text-text">
            SFV <span className="text-accent">IC</span> Agent
          </span>
          <span className="hidden items-center gap-2 md:flex">
            <span className="h-3 w-px bg-white/15" />
            <span className="label text-[10px] text-text-muted">
              AI-native financial infrastructure
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/thesis"
            className="label hidden text-[12px] text-text-muted transition-colors hover:text-text md:inline"
          >
            Thesis
          </Link>
          <Link
            href="/"
            className="label hidden text-[12px] text-text-muted transition-colors hover:text-text md:inline"
          >
            Market map
          </Link>
          <Link
            href="/new"
            className="label inline-flex items-center gap-2 bg-accent px-3 py-2 text-[11px] text-white transition-[filter] hover:brightness-110"
          >
            Generate new memo
            <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
