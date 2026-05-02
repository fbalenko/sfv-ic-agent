import GenerateForm from "@/components/new/generate-form";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Generate IC memo · SFV IC Agent",
};

export default function NewPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
      <div className="mb-10 max-w-[760px]">
        <span className="label text-[10px] text-text-muted">Generate</span>
        <h1 className="display mt-2 text-[40px] leading-[0.95] text-text md:text-[56px]">
          One company in.
          <br />
          One IC memo out.
        </h1>
        <p className="mt-5 text-[14px] leading-[1.6] text-text-muted md:text-[15px]">
          The agent runs Exa research, drafts against the IC template, scores on
          the rubric, and writes the memo plus market-map row to disk. Roughly
          five minutes per company. Watch the research log on the left and the
          memo render live on the right.
        </p>
      </div>
      <GenerateForm />
    </div>
  );
}
