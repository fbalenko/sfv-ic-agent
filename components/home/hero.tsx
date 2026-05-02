export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="fade-up grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-9">
            <span className="label text-[11px] text-text-muted">
              SFV Thesis · AI-native financial infrastructure
            </span>
            <h1 className="display mt-5 text-[44px] leading-[0.95] text-text md:text-[72px] lg:text-[84px]">
              IC-grade research,
              <br />
              <span className="text-accent">agent-native.</span>
            </h1>
          </div>
          <div className="md:col-span-3">
            <p className="text-[15px] leading-[1.6] text-text-muted md:text-[16px]">
              An operator-led thesis on the companies rebuilding back-office and
              middle-office finance with LLMs at the core — scored, sourced, and
              ready for the partner meeting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
