# Rillet — IC Memo

**Date:** 2026-05-02
**Analyst:** sfv-ic-agent
**Stage / Round:** Series B (closed August 2025)
**Ask:** $70M Series B at ~$500M post-money (valuation per Reuters; not company-disclosed) [1][3]

---

## 1. Recommendation

**WATCH.** Confidence: **H.** Rillet is the strongest AI-native back-office play we have seen — real product depth, elite investor syndicate, and rapid customer acquisition — but the Series B is closed at a valuation that leaves limited margin for SFV entry; track for Series C participation or strategic co-sell via Salesforce CRM integration.

---

## 2. Thesis fit

**Subsegment:** AI-native back-office (GL, close management, reconciliation, AP/AR, revenue recognition).

Rillet is rebuilding the general ledger — the single most entrenched system in a CFO's stack — with AI agents handling ingestion, reconciliation, accruals, and close workflows. This maps directly to the core of the AI-native back-office thesis.

**Why now — specific to this workflow and this buyer:**

The convergence of three forces created a window that did not exist 24 months ago:

1. **LLMs crossed the accuracy threshold for messy financial document understanding in 2024–2025.** Bank statements with inconsistent formats, vendor invoices with variable layouts, contracts requiring ASC 606 classification — these were brittle OCR problems in 2022. By mid-2024, multimodal models could handle the long tail of document variation at production accuracy. Rillet's ingestion layer rides this step function.

2. **The accounting labor crisis reached an inflection point.** 75% of U.S. CPAs are approaching retirement within 15 years, the accounting workforce has shrunk 17% since 2020, and fewer graduates are entering the field [7]. This is not a cyclical shortage — it is structural. Every CFO of a 100-person SaaS company now faces the same question: hire a controller who does not exist, or buy software that does the work.

3. **The NetSuite implementation tax became untenable for the Series A–C SaaS cohort.** Implementation timelines of 6–18 months and costs of $150K+ [10] collide with the velocity expectations of companies doubling revenue annually. Rillet's 4–8 week implementation is not an incremental improvement — it changes the unit economics of ERP adoption and makes it rational to switch mid-growth rather than suffer through.

The buyer is the VP Finance or Controller at a 50–300 person venture-backed SaaS company who is about to outgrow QuickBooks or is being strangled by NetSuite. That buyer's pain is acute, their switching cost tolerance is high (they are growing fast enough to absorb disruption), and their finance team is small enough that automation delivers immediate headcount leverage.

---

## 3. Product

Rillet is a full general ledger and ERP platform — not a point solution layered on top of an existing GL. It provides automated GL posting, accounts receivable, accounts payable, bank reconciliation, close management, advanced revenue recognition (ASC 606), multi-entity consolidation, and SaaS reporting [1][6]. Native integrations connect directly to Stripe, Salesforce, Brex, Ramp, Rippling, Bill, ADP, Snowflake, and 20+ other tools in the modern finance stack [6].

The AI layer, branded **Aura**, operates in four modes [9]:

- **Aura Agents** — specialized domain agents for flux analysis, accruals, reconciliation, revenue recognition, and journal entry creation. These are not generic LLM wrappers; each agent is scoped to a specific accounting workflow with constrained context windows and deterministic guardrails.
- **Aura Chat** — natural language query interface grounded in the live ledger. Answers trace back to actual transactions.
- **Aura Flow** — workflow automation builder. Users describe workflows in plain English; the system generates execution plans, routes to the right agents, and runs on a set cadence (daily, weekly, monthly).
- **MCP integration** — Model Context Protocol integration with Claude for querying financials from external tools [9].

The reconciliation agent uses ML to match 95%+ of transactions to invoices and bills automatically [9]. The accruals agent proposes expense entries from historical patterns and current-period activity [9]. The company claims 99.7% of journal entries are booked automatically [4].

**AI core or cosmetic?** **AI is core — but the spine is deterministic, and that is the right architecture.**

If you remove the AI, you have a modern cloud GL that still posts journal entries, runs depreciation schedules, and produces GAAP-compliant financials. The core ledger math is deliberately non-AI — as Kopp stated in a podcast interview: "You want an LLM nowhere near [depreciation and deferred revenue calculations]" [8]. This is correct. The deterministic core is a feature, not a weakness.

But remove the AI and you lose the value proposition: the continuous close, the automated reconciliation, the accrual prediction, the 4-week implementation (which relies on AI-assisted data migration and chart-of-accounts mapping). Without the AI, Rillet is a cleaner NetSuite — nice, but not a category creator. With the AI, it is a fundamentally different operating model for a finance team. The AI is doing load-bearing work that a deterministic system cannot replicate: classifying unstructured documents at ingest, learning reconciliation patterns from historical data, predicting accruals from bill flow, and surfacing flux anomalies at the transaction level.

Kopp estimates current capabilities at "maybe 5%" of true end-to-end automation across broad use cases, while narrow, scoped workflows are "substantially mature" [8]. This honesty is a positive signal — the team knows the boundary between what works and what is theater.

---

## 4. Defensibility

**The real moat is workflow lock-in, compounded by data gravity.**

Rillet is not defensible because of a proprietary model or a unique data set. The LLMs powering Aura are commercially available (Kopp references using OpenAI models for ingestion [8]). The defensibility is structural:

1. **The GL is the stickiest system in a company's stack.** Once a company migrates its chart of accounts, historical transactions, reconciliation rules, revenue recognition schedules, and audit trail to Rillet, the switching cost is measured in quarters, not weeks. Every month the company operates on Rillet, more institutional knowledge accumulates in the system — custom workflows, dimension hierarchies, auditor-approved configurations. This is not a moat that compounds through model improvement; it compounds through operational entrenchment.

2. **Integration depth creates lock-in at the edges.** Rillet connects natively to Stripe, Salesforce, Brex, Ramp, Rippling, and others [6]. Each integration carries custom mapping rules and reconciliation logic. The more integrations a customer activates, the harder it is to extract.

3. **The accounting firm partnerships create distribution lock-in.** Strategic alliances with Armanino (top 20) and Wiss (top 50) mean that external audit and advisory firms are now recommending Rillet to their client portfolios [1]. This is a distribution channel that compounds — once an audit firm standardizes on a platform, their entire client base becomes a pipeline.

A well-funded competitor would need 18 months to replicate the combination of: a full GL capable of supporting $100M+ ARR companies through audit, a deep integration library with production-tested reconciliation logic, and the implementation playbook that gets customers live in 4–8 weeks. Any one of these is achievable; the intersection is the moat.

---

## 5. Market

**Budget displacement framing:**

Rillet's revenue comes from three budget line items in the buyer's P&L:

1. **ERP software license** — the NetSuite / Sage Intacct / QuickBooks subscription. This is a direct swap. The CFO owns it. NetSuite's mid-market ACV runs $50K–$150K+; Rillet's pricing is not publicly disclosed but is feature/complexity-based rather than seat-based [12]. The budget is actively moving — approximately one-third of Rillet's deals involve replacing NetSuite [2].

2. **Implementation and consulting fees** — NetSuite implementations cost $150K+ and take 6–18 months [10]. Rillet's CPA-led implementation runs 4–8 weeks [1][8]. This is a real-dollar savings that the CFO can quantify in the first year.

3. **Accounting labor cost** — the scarce, expensive controller or senior accountant who spends 60%+ of their time on close and reconciliation. Rillet does not eliminate the role, but it changes the ratio. Windsurf runs its entire finance operation with two people [1]. Postscript closes in three days [1]. This is headcount leverage, and the budget owner is the CFO.

**Sanity-check sizing (top-down, stated honestly):**

The global accounting software market exceeds $500B [7]. That number is not useful. The addressable market for Rillet today is venture-backed SaaS companies in the Series A–C range with $5M–$50M ARR — their stated ICP [chatfin comparison data]. There are roughly 5,000–10,000 such companies in the U.S. at any given time. At an estimated mid-market ACV (pricing undisclosed), the near-term TAM is in the low single-digit billions. This is a credible venture-scale market.

**The 5-year revenue ceiling** depends on whether Rillet can expand beyond venture-backed SaaS into broader mid-market (professional services, e-commerce, healthcare). The company claims customers with $100M+ ARR are already on the platform [1][3]. If Rillet can support companies through IPO — which they explicitly target within 6–12 months [7] — the expansion TAM grows meaningfully. What would have to be true: the product handles audit-grade complexity at public-company scale, and the AI maintains accuracy as transaction volume and entity count increase by an order of magnitude.

---

## 6. Team

**Founder-workflow fit: Adjacent, not exact — compensated by aggressive domain hiring.**

**Nicolas Kopp** (CEO, Co-founder) — MSc Accounting from London School of Economics; BA from University of St. Gallen; 5 years in investment banking at Morgan Stanley (Global Capital Markets, 2010–2015); U.S. CEO of N26 (2017–2020), where N26 reached a $9B valuation [8][15]. Kopp experienced the GL pain as a fintech executive managing five disconnected ledgers with weeks-long consolidation cycles [8]. He knows the buyer's pain because he was the buyer — but he was not the controller doing the work.

**Stelios Modes** (CTO, Co-founder) — 15+ years in software engineering; Lead Software Engineer at ThoughtWorks (6 years), where he led data lake implementations and real-time payments processing for neobanks; Software Engineer at Shazam (2014–2015); architected N26's payment infrastructure [4][7]. Strong technical profile for building financial systems at scale, but no accounting domain background.

**The honest call:** Neither founder has been a controller, a senior accountant, or an audit manager. Kopp has formal accounting training (MSc) and operator-level exposure to the pain, but he was consuming accounting output, not producing it. This is not a 5 on founder-workflow fit. It is a credible 3 — adjacent domain experience with deep intellectual fluency.

**The compensation strategy is strong:**
- **CPO** — former EY controller [1][7]
- **Head of Customer Success** — PwC background [1][7]
- **VP of Implementations** — CPA and former Rillet customer [1][7]

This is the right pattern: fintech-operator founders who understand scale and product, surrounded by accounting professionals who understand the workflow. The risk is that domain hires are employees, not owners — their retention matters, and departures from these roles would be a meaningful signal.

**Board:** Alex Rampell (a16z GP) and Seth Pierrepont (ICONIQ GP) joined at Series B [1]. Rampell's fintech portfolio (NerdWallet, Plaid, Greenlight) provides meaningful pattern matching.

**Gaps:** No disclosed Chief Revenue Officer or VP Sales. At 200+ customers and rapid growth, this hire is overdue if not already filled quietly.

---

## 7. Competition

**AI-native entrants:**

- **Puzzle** — Raised $66.5M+ total [14]. Targets seed-to-Series-B startups with real-time GL and bank feed integrations. Positioned below Rillet in ICP maturity; less proven for multi-entity or high-volume environments [10]. Competes on the low end of Rillet's ICP.
- **Truewind** — $17M total funding, Series A (Jan 2025) [Truewind data]. AI-powered bookkeeping and accounting for startups. More of an outsourced accounting replacement (AI + human hybrid) than a GL platform. Different architecture — Truewind replaces the accountant; Rillet replaces the software the accountant uses.
- **Campfire** — AI-native with natural language transaction categorization. Still early in enterprise features and integration depth [10].

**Incumbents bolting on AI:**

- **Oracle NetSuite** — 37,000+ customers [10]. Recently announced "NetSuite Next" with AI autopilot and agentic workflows, expected in North America within 12 months. This is the existential competitive threat. NetSuite has distribution, customer lock-in, and a $150K+ ACV base to fund AI R&D. The question is whether NetSuite's 20-year-old data model can support AI-native workflows or whether the AI layer is cosmetic. Based on the architecture — NetSuite's core was designed for batch processing, not continuous close — the bolt-on AI will hit structural limits. But "good enough" AI on top of an incumbent is how many startups die.
- **Sage Intacct** — 350+ marketplace integrations, strong mid-market presence. Announced AI-powered close analytics, data import, and cash intelligence in February 2026 [13]. Credible AI roadmap, but the core architecture is still batch-oriented.

**In-house builds at the buyer:**

Rare for the GL itself — no one builds their own ledger. But in-house automation on top of NetSuite/Intacct (custom scripts, RPA, GPT wrappers for reconciliation) is the real competitor for some accounts. This is the "good enough" risk: a controller who builds an Airtable + GPT workflow that handles 80% of what Rillet does for free.

**Where Rillet wins:** Against NetSuite/Intacct on implementation speed and automation depth for Series A–C SaaS companies. Against Puzzle/Truewind on product maturity and workflow breadth. Against in-house builds on reliability and audit-readiness.

**Where Rillet loses:** Against NetSuite for companies with 1,000+ employees who need full-suite ERP (procurement, inventory, HR). Against in-house builds for companies with strong internal engineering who only need 2–3 automations. Against incumbents when the buyer's auditor insists on a "proven" platform.

---

## 8. Traction

- **Customer count:** 200+ signed customers as of Series B announcement (August 2025) [1][2][3]. The company website currently claims 400+ finance teams [6] — if accurate, this implies meaningful acceleration since the Series B close.
- **ARR:** Not disclosed. Revenue doubled in the 12 weeks between Series A and Series B [1][5]. Revenue grew 5x since product launch [2].
- **NDR:** Not disclosed.
- **Named customers:** Postscript (stated $100M+ ARR; closes books in 3 days) [1], Windsurf (2-person finance team) [1], Decagon [2][3], Finch [3], Laurel [3], Lang AI [3], Bitwarden [7].
- **Logo quality:** Mixed-to-strong. Postscript is a legitimate mid-market logo. Windsurf (AI coding) and Decagon (AI customer support) are high-growth but early-stage — their own durability is not yet proven. The presence of Bitwarden (mature open-source security company) is a stronger signal of enterprise readiness.
- **Partnerships:** Armanino (top 20 U.S. accounting firm) and Wiss (top 50) as strategic implementation partners [1].
- **G2 rating:** 5.0 stars — claimed as the only ERP with a perfect G2 rating [6].
- **Investor quality:** Sequoia (Series A lead), a16z and ICONIQ (Series B co-leads), First Round Capital (seed), Creandum, Susa Ventures, Oak HC/FT [1][2].

**Unusually strong signals:** The speed of capital formation — $108.5M in under 12 months, with the Series B closing just 10–12 weeks after the Series A [1][3] — is rare and suggests that growth metrics shared with investors during the Series A process triggered a preemptive Series B. The Armanino partnership is a particularly strong signal; top-20 accounting firms do not lend their brand to unproven platforms.

**Unusually weak signals:** No disclosed ARR figure, no NDR, no gross margin. At $108.5M raised and $500M valuation, investors clearly saw the numbers — but the absence of any public metric makes independent assessment impossible. The ICP concentration in venture-backed SaaS creates macro exposure: if venture funding contracts, Rillet's customer pipeline contracts with it.

---

## 9. Top 3 risks, ranked

**1. NetSuite's AI roadmap closes the gap before Rillet escapes the mid-market.**

This is the existential risk. NetSuite has 37,000+ customers, Oracle's AI R&D budget, and the "nobody gets fired for buying NetSuite" dynamic that Kopp acknowledges as his biggest sales hurdle [8]. NetSuite Next is expected in North America within 12 months. If Oracle ships "good enough" AI automation on top of the existing NetSuite data model, Rillet's switching argument weakens materially — the implementation pain of moving to Rillet has to be justified by a capabilities gap that remains wide. What would have to be true: Oracle executes on AI faster than its track record suggests and ships production-quality agentic workflows (not just chatbot UX) within 18 months. What would kill it: Oracle's 20-year-old batch-processing architecture makes continuous close structurally impossible without a core rewrite, and Oracle has never done a core rewrite of NetSuite.

**2. ICP concentration in venture-backed SaaS creates macro fragility.**

Rillet's ideal customer is a 50–300 person Series A–C SaaS company [ICP data]. This is a customer base whose existence depends on venture capital availability. In a venture downturn — which the 2025–2026 market has not yet experienced since Rillet's growth inflection — new logo acquisition could decelerate sharply. Existing customers could churn as they cut burn. The 5x revenue growth and ARR doubling are impressive, but both occurred during a period of recovering venture sentiment. What would have to be true: a sustained 12+ month venture funding contraction. What would kill it: Rillet successfully expands upmarket to non-venture-backed mid-market companies (professional services, e-commerce, healthcare), diversifying the customer base before a downturn hits.

**3. Audit and compliance risk at the IPO transition.**

Rillet explicitly targets having customers IPO on its platform within 6–12 months [7]. The transition from private-company accounting to public-company accounting is a regulatory step function — SOX compliance, public auditor requirements, PCAOB standards. If Rillet's first IPO customer hits audit complications attributable to the platform, the reputational damage would be severe and the "enterprise-ready" narrative collapses. The AI layer adds a specific risk vector: auditors and bank examiners are still developing frameworks for evaluating AI-generated journal entries and reconciliation outputs. A regulatory or audit failure at the IPO threshold could freeze the entire pipeline of growth-stage customers. What would have to be true: a Big 4 auditor flags AI-generated entries as insufficiently auditable. What would kill it: Rillet pre-clears its audit trail and AI transparency with Big 4 firms before the first IPO close, establishing the precedent rather than reacting to it.

---

## 10. Diligence plan

**Week one priorities:**

1. **Reference calls:**
   - Postscript CFO/Controller — validate the "3-day close" claim, understand what the close looked like before Rillet, and probe for any audit concerns.
   - Bitwarden finance lead — mature company with different risk profile than AI startups. Why did they choose Rillet over NetSuite/Intacct? What did the auditor say?
   - Armanino partner (Dean Quiambao, quoted on website [6]) — what is the real implementation experience? How does the audit trail hold up under external review? Would they recommend it to a client preparing for IPO?
   - A churned customer — ask Rillet for one, or find one via LinkedIn. Why did they leave? What broke?

2. **CTO questions (for Stelios Modes):**
   - Architecture walkthrough: how is the deterministic GL core separated from the AI layer? What happens when the AI is wrong — what is the human escalation path and how often does it trigger?
   - Model dependency: which AI models power Aura (OpenAI confirmed for ingestion [8] — what about reconciliation, accruals, flux)? What is the fallback if OpenAI changes pricing or deprecates a model?
   - Data isolation: how is customer data partitioned? Is any customer data used for model training? What is the SOC 2 / SOX posture?
   - Scalability: what does the architecture look like at 10x current transaction volume? The website claims 100M+ daily transactions processed [4] — what is the actual per-customer ceiling?

3. **Financial data request:**
   - Monthly ARR cohort data (not total ARR — cohort-level to see retention)
   - Logo-level NDR for the oldest 50 customers
   - Gross margin breakdown (infrastructure cost per customer, AI API cost per transaction)
   - CAC and payback period by acquisition channel (direct vs. partner referral)

**Three open items for partner discussion:**

1. **Valuation entry point.** At ~$500M post-money, what ARR multiple does this imply and is there a credible path to a 5x return from here? Do we wait for Series C repricing or engage now on secondary?

2. **Salesforce strategic angle.** Rillet integrates natively with Salesforce CRM [6]. Is there a co-sell or embedded distribution play that would give SFV a differentiated angle versus a16z and ICONIQ? Could Salesforce's AppExchange become a meaningful distribution channel?

3. **Public-company readiness claim.** Rillet says customers will IPO on its platform within 6–12 months [7]. If that happens successfully, it is the single strongest proof point in the AI-native back-office market. Should we condition our interest on that milestone?

---

## 11. Rubric scoring

| Dimension | Score | Rationale |
|---|---|---|
| **AI centrality** | 4 | AI is deeply embedded in reconciliation, close, accruals, and ingestion — but the core GL is deliberately deterministic. Remove the AI and you still have a functional ledger; add it back and you have a category-defining product. Not quite "remove AI and nothing is left," but close. |
| **Workflow depth** | 5 | Owns GL, AR, AP, bank reconciliation, close management, revenue recognition, multi-entity consolidation, and reporting. This is a full role replacement for large portions of what a controller does. Customers running 2-person finance teams on Rillet [1] confirm this. |
| **Data loop** | 3 | Reconciliation ML improves with more transaction data; accrual prediction learns from historical patterns. But Kopp acknowledges only "maybe 5%" end-to-end automation [8], and the models are commercially available (OpenAI). The data loop exists but is not yet a durable moat. |
| **Founder-workflow fit** | 3 | Kopp has an MSc in Accounting (LSE) and experienced GL pain as N26's US CEO — but he was the buyer, not the practitioner. Neither founder has been a controller or audit manager. Compensated by strong domain hires (CPO ex-EY controller, VP Implementations is a CPA). Adjacent, not exact. |
| **Traction signal** | 4 | 200+ customers, 5x revenue growth, ARR doubling in 12 weeks, named logos (Postscript, Bitwarden, Windsurf), Armanino partnership, $108.5M raised. Strong signals — but no disclosed ARR, NDR, or gross margin prevents a 5. |
| **SFV thesis fit** | 5 | Central to AI-native back-office thesis. Rebuilding the general ledger — the most entrenched financial system — with AI agents at the core. SFV should know this company cold. |

**Total: 24 / 30** ⭐

**Market map entry:**
| Rillet ⭐ | AI-native back-office (GL, close, reconciliation, AP/AR, rev rec) | Series B | Yes | 24 | AI-native ERP replacing NetSuite for venture-backed SaaS; 200+ customers, $108.5M raised in <12 months, 5x revenue growth; NetSuite's AI roadmap and ICP concentration in venture-backed companies are the key risks. |

---

## 12. Sources

[1] "Rillet raises $70M Series B from Andreessen Horowitz and ICONIQ." https://www.rillet.com/blog/rillet-raises-70m-series-b-from-andreessen-horowitz-and-iconiq. Accessed: 2026-05-02.

[2] "Rillet raises $25M from Sequoia to automate general ledger systems using AI." TechCrunch. https://techcrunch.com/2025/05/28/rillet-raises-25m-from-sequoia-to-automate-general-ledger-systems-using-ai/. Accessed: 2026-05-02.

[3] "Fintech Startup Rillet Lands $70M Series B From a16z, Iconiq Just 12 Weeks After Last Raise." Crunchbase News. https://news.crunchbase.com/fintech/startup-rillet-ai-seriesb-a16z-iconiq/. Accessed: 2026-05-02.

[4] "Rillet — About." https://www.rillet.com/about. Accessed: 2026-05-02.

[5] "Backing Rillet: Reimagining the ERP for the AI Era." ICONIQ Growth. https://www.iconiq.com/growth/insights/backing-rillet-reimagining-the-erp-for-the-ai-era. Accessed: 2026-05-02.

[6] "Rillet — The AI-native ERP." https://www.rillet.com/. Accessed: 2026-05-02.

[7] "From Frustration to Fix: Rillet Founders Drop $100M on Legacy Accounting Pain." Sovereign Magazine. https://www.sovereignmagazine.com/article/from-frustration-to-fix-rillet-founders-drop-100m-on-legacy-accounting-pain. Accessed: 2026-05-02.

[8] "AI ERP for Finance & Accounting teams to Replace NetSuite and Automate Close in 4 Weeks With Nicolas Kopp." The FP&A Guy. https://www.thefpandaguy.com/future-finance/ai-erp-for-fpanda-teams-to-replace-netsuite-and-automate-close-in-4-weeks-with-nicolas-kopp. Accessed: 2026-05-02.

[9] "Aura AI by Rillet — AI Accounting Agents Built Into Your GL." https://www.rillet.com/product/aura-ai. Accessed: 2026-05-02.

[10] "AI Accounting Alternatives to Rillet — 2026 Comparison." ChatFin. https://chatfin.ai/blog/ai-accounting-alternatives-to-rillet-2026-comparison/. Accessed: 2026-05-02.

[11] "Rillet raises $70M to replace 20th-century accounting software with AI-native ERP built by accountants." GlobeNewsWire. https://www.globenewswire.com/news-release/2025/08/06/3128328/0/en/Rillet-raises-70M-to-replace-20th-century-accounting-software-with-AI-native-ERP-built-by-accountants.html. Accessed: 2026-05-02.

[12] "Rillet — Plans." https://www.rillet.com/plans. Accessed: 2026-05-02.

[13] "Sage Intacct delivers new AI-powered capabilities to transform how finance teams close, analyse, and act on financial data." Sage. https://www.sage.com/en-us/news/press-releases/2026/02/sage-intacct-delivers-new-ai-powered-capabilities-to-transform-how-finance-teams-close/. Accessed: 2026-05-02.

[14] "Puzzle Raises $30M to Revolutionize AI-Powered Accounting." Puzzle.io. https://puzzle.io/blog/puzzle-raises-an-additional-30m-to-fuel-a-new-era-of-ai-powered-accounting. Accessed: 2026-05-02.

[15] "Nicolas Kopp — Co-founder & CEO, Rillet." Slush. https://slush.org/program/nicolas-kopp. Accessed: 2026-05-02.

[16] "Nicolas Kopp — Co-Founder & CEO @ Rillet." Crunchbase. https://www.crunchbase.com/person/nicolas-kopp. Accessed: 2026-05-02.
