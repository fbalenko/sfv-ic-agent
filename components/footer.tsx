export default function Footer() {
  return (
    <footer className="relative z-[1] mt-24 border-t border-white/10 bg-bg-elevated/40">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-4 px-6 py-10 text-text-muted md:flex-row md:items-center md:px-10">
        <div className="flex items-center gap-3">
          <span className="label text-[11px] text-text-muted">Built by</span>
          <span className="text-[13px] text-text/80">Filip Balenko</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/fbalenko/sfv-ic-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[11px] text-text-muted transition-colors hover:text-text"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/filipbalenko/"
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[11px] text-text-muted transition-colors hover:text-text"
          >
            LinkedIn
          </a>
          <span className="label text-[11px] text-text-muted/70">
            sfv-ic.com
          </span>
        </div>
      </div>
    </footer>
  );
}
