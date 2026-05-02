"use client";

import { useState } from "react";
import SubsegmentBand from "./subsegment-band";
import ThesisScatter from "./thesis-scatter";
import MarketMapTable from "./market-map-table";
import type { ScoredCompany } from "./types";
import type { SubsegmentKey } from "@/src/lib/subsegments";

export default function HomeBoard({ rows }: { rows: ScoredCompany[] }) {
  const [active, setActive] = useState<SubsegmentKey | null>(null);

  const onToggle = (key: SubsegmentKey) => {
    setActive((cur) => (cur === key ? null : key));
  };

  return (
    <div className="mx-auto max-w-[1400px] space-y-12 px-6 py-12 md:px-10 md:py-16">
      <SubsegmentBand rows={rows} active={active} onToggle={onToggle} />
      <ThesisScatter rows={rows} active={active} />
      <MarketMapTable rows={rows} active={active} />
    </div>
  );
}
