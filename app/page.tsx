import Hero from "@/components/home/hero";
import HomeBoard from "@/components/home/home-board";
import ThesisAndRubric from "@/components/home/thesis-and-rubric";
import ResearchStack from "@/components/home/research-stack";
import { parseMarketMap } from "@/src/lib/market-map-parser";
import { aiCentrality, parseMemo, workflowDepth } from "@/src/lib/memo-parser";
import type { ScoredCompany } from "@/components/home/types";

export const dynamic = "force-dynamic"; // re-read disk on every request

export default function Home() {
  const rows = parseMarketMap();
  const scored: ScoredCompany[] = rows.map((r) => {
    let aic = 0;
    let wd = 0;
    let rec: ScoredCompany["recommendation"] = "UNKNOWN";
    if (r.slug) {
      const memo = parseMemo(r.slug);
      if (memo) {
        aic = aiCentrality(memo);
        wd = workflowDepth(memo);
        rec = memo.recommendation;
      }
    }
    return { ...r, aiCentrality: aic, workflowDepth: wd, recommendation: rec };
  });

  return (
    <>
      <Hero />
      <HomeBoard rows={scored} />
      <ThesisAndRubric />
      <ResearchStack />
    </>
  );
}
