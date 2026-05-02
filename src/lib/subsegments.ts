export type SubsegmentKey =
  | "underwriting"
  | "finops"
  | "back-office"
  | "embedded"
  | "compliance";

export interface Subsegment {
  key: SubsegmentKey;
  name: string;
  short: string;
  loadBearing: string;
  definition: string;
}

export const SUBSEGMENTS: Subsegment[] = [
  {
    key: "underwriting",
    name: "AI underwriting & credit decisioning",
    short: "Underwriting",
    loadBearing:
      "Will banks and lenders trust AI-rendered credit decisions in front of regulators, or stay constrained to AI-as-assistant?",
    definition:
      "Companies rebuilding origination, credit analysis and decisioning workflows around LLMs — for consumer, SMB, embedded and SBA lending.",
  },
  {
    key: "finops",
    name: "Agentic FinOps",
    short: "FinOps",
    loadBearing:
      "Does the agent layer become the primary surface area for the CFO stack, or is it a UX skin on a card-and-software platform?",
    definition:
      "Treasury, spend management and procurement automation where AI agents own approval, fraud, and policy workflows end-to-end.",
  },
  {
    key: "back-office",
    name: "AI-native back-office",
    short: "Back-office",
    loadBearing:
      "Can an AI-native ERP or close stack actually displace NetSuite at venture-backed companies before the incumbents bolt on credible AI?",
    definition:
      "AP/AR, reconciliation, close, audit and the broader controller stack — rebuilt around language-model document understanding, not OCR.",
  },
  {
    key: "embedded",
    name: "Embedded finance",
    short: "Embedded",
    loadBearing:
      "Where does AI orchestration justify a dedicated infrastructure layer above the existing BaaS plumbing?",
    definition:
      "Embedded finance infrastructure with AI orchestration on top of BaaS rails — credit, payments, treasury inside a vertical product.",
  },
  {
    key: "compliance",
    name: "Compliance & KYC/AML",
    short: "Compliance",
    loadBearing:
      "Will regulated FIs trust an agent to clear an alert, or only to triage one — and is the difference a moat or a ceiling?",
    definition:
      "AML, KYC, KYB, sanctions and regulatory-change monitoring — agents that clear alerts and produce examiner-ready audit trails.",
  },
];

const KEYWORDS: Array<{ key: SubsegmentKey; keywords: string[] }> = [
  {
    key: "underwriting",
    keywords: ["underwriting", "credit decision", "origination", "lending", "loan", "sba"],
  },
  {
    key: "finops",
    keywords: ["finops", "spend", "treasury", "procurement", "expense", "card"],
  },
  {
    key: "back-office",
    keywords: [
      "back-office",
      "back office",
      "ap/ar",
      "ap / ar",
      "ap ",
      "reconciliation",
      "close",
      "audit",
      "ledger",
      "gl",
      "erp",
      "knowledge",
    ],
  },
  {
    key: "embedded",
    keywords: ["embedded", "baas", "banking-as-a-service", "orchestration"],
  },
  {
    key: "compliance",
    keywords: ["compliance", "kyc", "aml", "kyb", "regulatory", "fraud", "sanctions", "regtech"],
  },
];

export function classifySubsegment(raw: string): SubsegmentKey {
  const t = raw.toLowerCase();
  // weight: most-specific first wins
  for (const { key, keywords } of KEYWORDS) {
    if (keywords.some((k) => t.includes(k))) return key;
  }
  return "back-office";
}

export function subsegment(key: SubsegmentKey): Subsegment {
  return SUBSEGMENTS.find((s) => s.key === key) || SUBSEGMENTS[2];
}
