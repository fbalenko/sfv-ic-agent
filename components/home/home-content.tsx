import Hero from "./hero";
import DemoVideo from "./demo-video";
import HomeBoard from "./home-board";
import ThesisAndRubric from "./thesis-and-rubric";
import ResearchStack from "./research-stack";
import { parseMarketMap } from "@/src/lib/market-map-parser";
import { aiCentrality, parseMemo, workflowDepth } from "@/src/lib/memo-parser";
import type { ScoredCompany } from "./types";

interface Props {
  autoOpenDemo?: boolean;
}

export default function HomeContent({ autoOpenDemo = false }: Props) {
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
      <DemoVideo autoOpen={autoOpenDemo} />
      <HomeBoard rows={scored} />
      <ThesisAndRubric />
      <ResearchStack />
    </>
  );
}
