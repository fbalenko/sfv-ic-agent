# Ramp — IC Memo

**Date:** 2026-05-02
**Analyst:** sfv-ic-agent
**Stage / Round:** Late-stage (Series E+, multiple rounds in 2025)
**Ask:** Most recent: $300M primary round at $32B post-money (November 2025) [3]

## 1. Recommendation

**WATCH.** Confidence: H. Ramp is the most important company in AI-powered spend management and the benchmark for the agentic FinOps thesis, but at $32B pre-IPO it is outside SFV's venture investment window — and the AI layer, while increasingly real, was added on top of a scaled card-and-software platform rather than being the founding architecture.

## 2. Thesis fit

**Subsegment:** Agentic FinOps and treasury automation; AI-native back-office (AP/AR, reconciliation, close, audit).

Ramp is building the intelligence layer for corporate finance operations — from card issuance through expense management, bill pay, procurement, and treasury. The AI agents introduced in mid-2025 automate controller workflows (policy enforcement, fraud detection, expense approval) and AP workflows (auto-coding, invoice triage, vendor sourcing) [7][9].

**Why now — specifically:** The timing unlock was not "LLMs got better" generically. It was that multimodal reasoning models crossed the accuracy threshold for understanding the messy, exception-heavy documents that corporate finance teams actually deal with: receipts with handwritten tips, invoices from foreign vendors in non-standard formats, contracts with ambiguous payment terms. Ramp's own data shows their policy agent reached 99% accuracy on expense approvals [7] — a number that was not achievable two years prior. The CFO buyer will not automate a compliance-critical workflow at 90% accuracy. The gap between 90% and 99% is the gap between a demo and a deployment.

The second timing factor is competitive: Brex's acquisition by Capital One for $5.15B in January 2026 [11] — at a steep discount to its $12.3B peak valuation [5] — removed Ramp's most direct pure-play competitor as an independent entity. Capital One's integration process will slow Brex's product velocity for 12–18 months, creating a window for Ramp to consolidate the mid-market and push upmarket with AI-differentiated features.

## 3. Product

Ramp is a full-stack corporate finance platform anchored by a Visa corporate card. The product portfolio now spans six major lines: corporate cards (unlimited virtual and physical, 1.5% cash back), expense management, bill pay (launched October 2021), travel management, procurement (via Venue acquisition, August 2023), and treasury (launched January 2025, offering 2.5% yield on operating cash) [1][12][5].

The AI layer — branded "Ramp Intelligence" — sits on top of this transactional platform. As of mid-2025, Ramp began shipping AI agents that operate autonomously within these workflows:

- **Agents for Controllers** (July 2025): Auto-enforce expense policies, approve low-risk expenses, flag fraud, answer employee policy questions. 99% accuracy claimed on expense approvals (company-stated, based on Ramp internal analysis 7/1/25) [7]. Early adopters include Notion, Hex, Sierra, and Quora [7].
- **Agents for AP** (October 2025): Auto-code transactions by analyzing historical patterns, detect fraud when vendor banking details change, triage invoices [3].
- **Procurement agents** (April 2026): Triage employee purchase requests, source vendors, review contract terms, handle compliance checks. Ramp procurement customers report 16% average annual reduction in vendor costs and 46 hours/month saved on manual purchasing (company-stated) [9].
- **Visa partnership** (March 2026): Joint development of AI agents for corporate bill pay automation, paired with a multi-year issuing agreement renewal [10].

Architecturally, Ramp uses multiple LLM providers (OpenAI, Anthropic, Google) through a centralized "Applied AI Service" that acts as an LLM proxy with unified SDKs, batch processing, and cost tracing [8]. They transitioned from hundreds of isolated agents to a single unified agent with thousands of skills deployed across every product surface via an interface called "Omnichat" [8]. In October 2025, the AI layer made 26.1 million automated decisions across $10B+ in spend, prevented 511,157 policy violations saving $290.98M, and blocked a $49,000 AI-generated fake invoice [3].

**AI core or cosmetic?** Cosmetic — trending toward core.

Remove the AI and Ramp still functions as a corporate card with expense management, bill pay, procurement, travel, and treasury. Employees can still swipe cards, submit receipts, get reimbursed. Managers can still approve expenses. AP can still process invoices. The platform scaled from zero to ~$700M ARR before any AI agents shipped [2]. The AI makes these workflows dramatically faster and catches more errors, but the transactional backbone — card issuance, payment rails, GL integrations — is deterministic infrastructure that does not require AI to operate.

That said, the trajectory is clear. The AI agents are becoming the differentiation layer for enterprise sales, and the "graduated autonomy" model (customers set an autonomy slider for auto-approval thresholds) [8] is a genuine product insight. Ramp is one of the few companies where "AI-native" could become true retroactively — if the agent layer becomes the primary interface through which finance teams interact with the platform, the deterministic rails become plumbing and the AI becomes the product. Not there yet.

## 4. Defensibility

**Workflow lock-in** — this is the real moat.

Ramp's card sits in every employee's wallet. Expense policies are configured. GL codes are mapped. ERP integrations (QuickBooks, Xero, NetSuite, Sage Intacct) are live. Travel policies are set. Procurement workflows are configured with approval chains. Ripping out Ramp means reconfiguring every employee's expense workflow, re-mapping every GL code, rebuilding every approval chain, and re-integrating with the ERP — for every product surface. The multi-product expansion strategy was explicitly designed to increase switching cost surface area.

This compounds: each new product (travel, procurement, treasury) adds another integration and another workflow that must be rebuilt on migration. Ramp's data shows 90% adoption crossover across product lines [5], meaning customers who adopt one product tend to adopt others — and each additional product deepens the lock-in.

The secondary moat is the data loop: $100B+ in annualized purchase volume [3] gives Ramp genuine pricing benchmarks that no startup can replicate. When Ramp tells a procurement team that a SaaS vendor is charging above market, that intelligence is powered by seeing thousands of comparable contracts. But it is the workflow lock-in — not the data — that a well-funded competitor would need 18+ months to replicate.

## 5. Market

**Budget displacement:** Ramp's revenue displaces four budget line items in the buyer's P&L:

1. **SAP Concur / Expensify licenses** — SAP Concur commands 49.6% market share in worldwide T&E management software [13], charging $8–23/user/month. Ramp's free tier undercuts this entirely; Ramp Plus at $15/user/month matches or beats Concur on price while offering a modern UX and AI automation.
2. **BILL.com / manual AP headcount** — BILL.com charges per-transaction fees for bill pay [5]. Ramp's bill pay is bundled with the card. Companies replacing 1–2 AP clerks ($50–80K loaded cost each) with Ramp's AI agents see direct headcount savings.
3. **Procurement software (Coupa, SAP Ariba)** — Enterprise procurement suites run $50–200K/year. Ramp Procurement undercuts these while offering AI-native vendor sourcing and contract review.
4. **Interchange on existing corporate cards** — When Ramp wins a card portfolio from Amex, Chase, or BoA, the interchange shifts. This is Ramp's largest revenue line.

The budget owner is the **CFO**, with secondary influence from the controller and VP of Finance. This budget is actively moving: 25% of US firms with $1B+ revenue are already using generative AI in procure-to-pay cycles, with another 48% considering it [9].

**Sanity-check sizing (top-down, acknowledged):** Ramp penetrates approximately 1.5% of US businesses today [5] and less than 2% of corporate and small business credit card spend flows through Ramp customers [4]. The surface area is enormous: even modest share gains in a market where SAP Concur alone controls half of T&E software produce substantial revenue. The realistic 5-year revenue ceiling is $3–5B, which would require sustained enterprise expansion, procurement and treasury becoming material revenue contributors, and meaningful international expansion — which has barely begun.

## 6. Team

**Founder-workflow fit: Adjacent, not exact.** Eric Glyman (CEO) and Karim Atiyeh (CTO) met at Harvard and co-founded Paribus in 2014, a consumer price-tracking application that reached 700K users and saved consumers over $100M before being acquired by Capital One in 2016 [5]. Both worked at Capital One post-acquisition. Gene Lee, the third co-founder, was a software engineer at Paribus who joined them at Capital One [5]. The trio left Capital One in March 2019 and spoke to 100 entrepreneurs and finance experts before defining the Ramp product [5].

Glyman's first job was at a restructuring firm handling bankruptcies [5]. Neither founder has prior CFO or controller experience. The founding team consists of elite product builders with fintech M&A experience and Capital One's credit infrastructure exposure — but they have not personally sat in the finance team chair they are selling into. This is mitigated by systematic customer research (100 interviews pre-launch), the hiring of Will Petrie as CFO in January 2025 [1], and an early team where one in three of the first 60 employees were former founders [5] — suggesting an unusually high density of operator-minded talent.

**Key hires:** Geoff Charles (CPO) leads the product expansion including procurement agents [9]. Colin Kennedy serves as Chief Business Officer, managing the Visa partnership [10]. The company had approximately 1,200 employees as of 2025 [1].

**Notable signal:** No major executive departures have been reported. No layoffs during the 2023–2024 period when the tech industry saw 300,000+ layoffs [5].

## 7. Competition

**AI-native entrants:**

- **Brex** (acquired by Capital One for $5.15B, January 2026; closed April 2026) [11]: The most direct historical competitor. Now inside Capital One, which provides a massive balance sheet but will slow product iteration during integration. Brex had focused on global multi-country expense management and local currency card issuance in 40+ countries — a capability Ramp hasn't matched.
- **Navan** ($9.2B valuation) [5]: Strongest in travel management with point-of-sale controls. Less competitive in pure expense management and AP. Ramp and Navan overlap most in T&E but diverge on broader FinOps.
- **Rippling**: Expanding from HRIS/payroll into spend management. Approaching from the employee data layer rather than the payment layer. Early but well-funded.

**Incumbents bolting on AI:**

- **SAP Concur** (49.6% T&E market share) [13]: Debuted Joule AI copilot in 2025 for natural-language T&E interactions. The Concur data model is pre-LLM and deeply integrated into SAP's ERP stack — adding AI features will be additive, not transformative. A full architectural rebuild is impractical.
- **Coupa** (acquired by Thoma Bravo for $8B in 2023): Strong in procurement for Fortune 500. Adding AI features but constrained by legacy architecture.
- **BILL.com** ($5.3B market cap) [5]: Dominant in SMB bill pay. Adding AI but the user experience gap vs. Ramp is substantial.

**In-house builds:** Companies with $500M+ in spend sometimes consider building internal expense policy engines. Ramp's free tier and fast deployment undercut the build-vs-buy math. The AI agents further tilt this: no internal team can match the breadth of training data Ramp has across 50,000+ companies.

**Where Ramp wins:** Mid-market companies ($10M–$1B revenue) switching from legacy T&E; multi-product consolidation (replacing Concur + BILL + Coupa with one vendor); AI-differentiated sales cycles where the 99% auto-approval accuracy [7] is a clincher.

**Where Ramp loses:** Large global enterprises needing 40+ country local currency cards (Brex/Capital One's strength); companies deeply embedded in SAP ERP where Concur integration is a given; companies needing bank-grade treasury beyond stored value.

## 8. Traction

| Metric | Value | Source |
|---|---|---|
| Annualized revenue | Over $1B (August 2025) | [2] |
| Revenue growth | $500M → $1B+ in 12 months | [3] |
| Prior milestones | $700M (Jan 2025), ~$300M (Aug 2023) | [2] |
| Customer count | 50,000+ businesses | [3] |
| Enterprise customers ($100K+/yr) | 2,200+ (133% YoY growth) | [3] |
| Purchase volume | $100B+ annualized | [3] |
| Cash flow | Producing free cash flow | [3] |
| Contribution profit growth | 153% YoY | [3] |
| NDR | >200% (March 2022) | [5] |
| Recent NDR | Not disclosed | — |
| Total equity raised | $2.3B | [3] |
| Valuation | $32B (November 2025) | [3] |
| Employees | ~1,200 (2025) | [1] |

**Logo quality:** Shopify, Figma, Perplexity, Notion, Anduril, Stripe, Discord, Eventbrite, Quora, Hex, Sierra [4][7].

**AI adoption signal:** October 2025: 26.1M automated decisions across $10B+ in spend; 511,157 policy violations prevented ($290.98M saved); zero-touch transaction percentage doubled in three months [3].

**Unusually strong:** The $500M-to-$1B revenue doubling in 12 months, at this scale, is among the fastest in fintech history. The 133% YoY enterprise customer growth [3] signals successful upmarket migration, not just long-tail SMB growth.

**Unusually weak:** No recent NDR figure has been disclosed. The March 2022 figure of >200% [5] is four years old and was likely inflated by early-stage expansion dynamics. The absence of an updated figure is notable for a company preparing for an eventual IPO.

## 9. Top 3 risks, ranked

**1. AI differentiation is competed away within 18 months.**

Capital One + Brex now combines the largest US card issuer with a sophisticated pure-play corporate card platform. Capital One has massive AI/ML teams and Brex's engineering talent. If Capital One invests aggressively in AI agents for the combined Brex platform, Ramp's AI edge — currently its key enterprise differentiator — could narrow. SAP is also adding Joule across Concur. **Materializes if:** Capital One keeps Brex's engineering team intact and ships competitive AI agents on a comparable timeline, and enterprise buyers treat AI automation as table-stakes rather than differentiated. **What kills it:** Capital One fumbles the integration (historically probable — large bank + startup integrations destroy product velocity), or Ramp's $100B+ spend data advantage proves hard to replicate.

**2. Interchange compression or regulatory risk erodes the revenue model.**

Ramp's largest revenue line is card interchange. The Durbin Amendment already caps debit interchange; any extension to commercial cards — which Congress has periodically discussed — would directly hit Ramp's unit economics. **Materializes if:** regulatory momentum from consumer card interchange reform spills into commercial cards, or if the card networks compress interchange rates under competitive pressure. **What kills it:** Ramp's software revenue (Ramp Plus at $15/user/month, procurement, treasury) grows fast enough to diversify away from interchange dependency. The multi-product expansion is an explicit hedge.

**3. The $32B valuation creates a binary outcome — IPO or down-round.**

At $32B on $1B+ revenue, Ramp trades at ~25–30x revenue. This prices in sustained high growth for multiple years. If growth decelerates to 40–50% (normal at this scale), public market comps (BILL at ~5x, Paycom at ~8x) suggest a significant valuation haircut in a public offering. **Materializes if:** the IPO window closes or macro deteriorates, forcing a private round at a lower valuation. **What kills it:** Ramp hits $2B+ ARR within 18 months and IPOs into a receptive market, justifying the premium with a growth narrative public investors will pay up for.

## 10. Diligence plan

**Customer references to call:**
- **Shopify** — Ramp's largest named logo and sole expense management provider as of August 2023 [5]. Understand depth of multi-product deployment and whether they use all six product lines.
- **Notion or Quora** — Early AI agent adopters [7]. Validate the 99% accuracy claim from the buyer side. Ask: how many exceptions per month, what's the escalation flow, would you go back to manual review?
- **A churned customer** — Ask Brex/Navan sales teams for a Ramp-to-competitor switch reference. Understand what drove the decision.

**CTO questions for Karim Atiyeh:**
- What percentage of revenue is AI-influenced (i.e., the customer would have churned or not expanded without AI features)?
- What is the actual production error rate on AI agents, including edge cases the 99% headline excludes?
- How does the "graduated autonomy" slider distribute across customers — what percentage have set it to full automation vs. human-in-the-loop?

**Open data points to close:**
- Updated NDR (the >200% figure from March 2022 is stale)
- Gross margin breakdown between interchange and software revenue
- Churn rate by segment (SMB vs. mid-market vs. enterprise)
- International expansion timeline and investment plan

**Three items for the partner:**

1. **Stage and allocation:** At $32B, this is a pre-IPO position, not a venture bet. Does SFV have a mandate for late-stage or crossover allocations, or is Ramp better tracked for a public-market entry?
2. **AI-native definition:** Does a company that scaled to $1B ARR on card interchange, then added an AI layer, qualify as "AI-native financial infrastructure" for our thesis? If yes, the thesis scope is broader than currently applied. If no, Ramp is the benchmark competitor — not the investment target — and every AI-native entrant in FinOps will be measured against it.
3. **Brex-as-comp:** Capital One acquired Brex for $5.15B — a ~60% discount to peak valuation. Is Ramp's $32B a sign of winner-take-most dynamics in spend management, or is Brex's discount a warning about the category's terminal value?

## 11. Rubric scoring

| Dimension | Score | Rationale |
|---|---|---|
| **AI centrality** | 3 | AI agents handle meaningful automation (26M decisions/month, 99% claimed approval accuracy), but the card-and-software platform functions without them — it scaled to ~$700M ARR before any agents shipped. |
| **Workflow depth** | 5 | Owns six connected workflows (cards, expenses, bill pay, procurement, travel, treasury) with deep ERP integrations; 90% product crossover adoption replaces multiple finance roles. |
| **Data loop** | 4 | $100B+ in purchase volume creates genuine pricing intelligence and benchmarks that compound with scale; AI models use commercial LLMs contextualized with proprietary spend data rather than fully proprietary models. |
| **Founder-workflow fit** | 3 | Founders built Paribus (consumer fintech) and worked at Capital One — strong adjacent fintech experience, but no founding team member has served as a CFO, controller, or finance operator. |
| **Traction signal** | 5 | $1B+ ARR, cash-flow positive, 50K+ customers, 2,200+ enterprise logos growing 133% YoY, named logos include Shopify, Stripe, Anduril, Notion. Elite traction at any stage. |
| **SFV thesis fit** | 4 | Sits at the center of agentic FinOps and AI-native back-office — SFV must understand Ramp to evaluate every other company in the thesis. Not AI-native from inception, and at $32B pre-IPO it is outside the typical SFV venture window. |

**Total: 24/30** ⭐

**Market map entry:**

| Ramp ⭐ | Agentic FinOps / AI-native back-office | Late-stage (Series E+) | No | 24 | The benchmark: $1B+ ARR spend-management platform with the most credible AI agent layer in FinOps; at $32B pre-IPO, track for thesis intelligence not venture allocation. |

## 12. Sources

[1] "Ramp (company)." Wikipedia. https://en.wikipedia.org/wiki/Ramp_(company). Accessed: 2026-05-02.

[2] "Exclusive: Fintech startup Ramp hits $1 billion in annualized revenue after notching $22.5 billion valuation." Fortune. https://fortune.com/2025/09/04/ramp-exclusive-revenue-billion-dollar-fintech-corporate-credit-card-glyman/. Accessed: 2026-05-02.

[3] "Ramp Reaches $32 Billion Valuation, Doubling Revenue and Customers in Past Year." PR Newswire. https://www.prnewswire.com/news-releases/ramp-reaches-32-billion-valuation-doubling-revenue-and-customers-in-past-year-302616510.html. Accessed: 2026-05-02.

[4] "Why We Led Ramp's $300M Round: Building the Intelligence Layer for Finance." Lightspeed Venture Partners. https://lsvp.com/stories/why-we-led-ramps-300m-round-building-the-intelligence-layer-for-finance/. Accessed: 2026-05-02.

[5] "Ramp Business Breakdown & Founding Story." Contrary Research. https://research.contrary.com/company/ramp. Accessed: 2026-05-02.

[6] "Ramp secures $13 billion valuation in deal allowing employees, investors to sell shares." CNBC. https://www.cnbc.com/2025/03/03/ramp-secures-13-billion-valuation-in-secondary-deal.html. Accessed: 2026-05-02.

[7] "Ramp Introduces AI Agents to Automate Finance Operations." PR Newswire. https://www.prnewswire.com/news-releases/ramp-introduces-ai-agents-to-automate-finance-operations-302502154.html. Accessed: 2026-05-02.

[8] "Ramp: Agentic Workflow Automation for Financial Operations." ZenML LLMOps Database. https://www.zenml.io/llmops-database/building-production-scale-ai-agents-for-financial-automation. Accessed: 2026-05-02.

[9] "Ramp Launches AI Agents to Automate Corporate Procurement." PYMNTS.com. https://www.pymnts.com/news/b2b-payments/2026/ramp-launches-ai-agents-to-automate-corporate-procurement/. Accessed: 2026-05-02.

[10] "Visa and Ramp Develop AI Agents for Corporate Bill Pay." PYMNTS.com. https://www.pymnts.com/news/b2b-payments/2026/visa-and-ramp-develop-ai-agents-for-corporate-bill-pay/. Accessed: 2026-05-02.

[11] "Capital One is buying startup Brex for $5.15 billion in credit card firm's latest deal." CNBC. https://www.cnbc.com/2026/01/22/capital-one-is-buying-startup-brex-for-5point15-billion-in-credit-card-firms-latest-deal.html. Accessed: 2026-05-02.

[12] "Ramp encroaches into digital bank territory with new treasury product." TechCrunch. https://techcrunch.com/2025/01/22/ramp-encroaches-into-digital-bank-territory-with-new-treasury-product/. Accessed: 2026-05-02.

[13] "AI-Driven Solutions: Why SAP Concur Is a Four-Time Leader in IDC MarketScape T&E Software 2025." SAP Concur. https://www.concur.com/blog/article/idc-marketscape-te-software-leader-2025. Accessed: 2026-05-02.

[14] "Ramp at $32 billion: Money talks. Now It thinks." Ramp Blog. https://ramp.com/blog/ramp-november-2025-valuation. Accessed: 2026-05-02.

[15] "Ramp Raises $200M Series E at $16B Valuation as Companies of All Sizes Choose AI-Powered Finance Platform." PR Newswire. https://www.prnewswire.com/news-releases/ramp-raises-200m-series-e-at-16b-valuation-as-companies-of-all-sizes-choose-ai-powered-finance-platform-302483377.html. Accessed: 2026-05-02.

[16] "Ramp Expands Public Sector Offerings with Ramp for Public Sector." PR Newswire. https://www.prnewswire.com/news-releases/ramp-expands-public-sector-offerings-with-ramp-for-public-sector-announces-partnerships-with-carahsoft-omnia-partners-and-velocity1-302704664.html. Accessed: 2026-05-02.
