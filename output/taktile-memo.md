# Taktile — IC Memo

**Date:** 2026-05-02
**Analyst:** sfv-ic-agent
**Stage / Round:** Series B
**Ask:** $54M raised (Feb 2025); total funding $79M [1][2]. Post-money valuation not disclosed.

## 1. Recommendation

**PURSUE.** Confidence: M. Taktile is the strongest pure-play AI decisioning platform for financial services at the Series B stage — real ARR velocity, expanding from fintech into traditional FIs, and a product architecture that is genuinely evolving toward AI centrality — but the incumbent threat from FICO's Forrester-validated AI push and the founder-workflow fit gap warrant diligence before conviction hardens.

## 2. Thesis fit

**Workflow being replaced:** Manual and semi-automated risk decisioning — credit underwriting, fraud detection, AML/KYC screening, and compliance case management. These workflows today live in a patchwork of legacy rules engines (FICO Decision Management, SAS Intelligent Decisioning, Experian PowerCurve), spreadsheet-based policy logic, and internal engineering builds that take weeks to modify and months to A/B test.

**SFV subsegment:** AI underwriting and credit decisioning (primary), plus compliance and KYC/AML automation with agents (expanding).

**Why now — specifically:** Two things changed in the last 18 months that matter for this exact buyer. First, LLMs crossed the accuracy threshold for messy financial document understanding — bank statements with inconsistent formatting, tax returns with amendments, foreign-language compliance documents. This isn't a generic "AI got better" claim: prior to mid-2023, OCR + rules-based extraction on these document types produced error rates that were unacceptable for credit decisions. The quality gap closed between 2023 and 2025, making it possible to embed LLM-based extraction and summarization directly into decisioning flows without a human-in-the-loop on every case. Second, the post-2023 credit cycle forced fintechs and non-bank lenders to tighten underwriting without slowing origination. When defaults spiked and warehouse lines tightened, lenders needed to iterate on credit policies weekly, not quarterly. Legacy decisioning tools couldn't support that iteration velocity. Taktile's A/B testing and rapid deployment architecture became a genuine operational advantage, not a nice-to-have. The timing of their customer base quadrupling in 2024 [2] isn't coincidental — it tracks the moment when "faster policy iteration" became a survival requirement, not a roadmap aspiration.

## 3. Product

Taktile is a decision platform for financial institutions. In plain terms: risk teams use it to build, test, deploy, and monitor automated decision flows — the logic that determines whether to approve a loan, flag a transaction, onboard a customer, or escalate a compliance case.

The platform has four modules [3]:

- **Decision Engine:** No-code environment where risk analysts build decision strategies by combining business rules, predictive model outputs, third-party data enrichments (Equifax, Plaid, Ocrolus, etc.), and now LLM-based AI nodes [3][12].
- **AI Agent Manager:** Purpose-built AI agents that automate specific sub-workflows — financial spreading, document extraction, case summarization, alert triage [3][10].
- **Case Manager:** Integrated case management for investigations that require human review, with AI-assisted prioritization and summarization [3].
- **Context Layer:** Unified data access layer that centralizes customer data across all decision touchpoints (onboarding, credit, fraud, collections) [3].

The platform supports back-testing, A/B testing, model performance monitoring, and deployment across 24 markets [2].

**AI core or cosmetic?** This is a nuanced call, and I'll be precise. The Decision Engine — the original product — can technically function as a pure rules engine without AI. You can build deterministic decision flows using only business rules and third-party data lookups. In that mode, it competes with Noble and legacy rules engines. So at the foundation layer, AI is additive, not load-bearing.

But the differentiated product — the reason customers choose Taktile over a rules engine — is the tight integration of ML models and now LLM agents into those decision flows. The AI Agent Manager, the financial spreading agent (company-stated: up to 80% manual work reduction [3]), the AML agent that reduced Finom's false positives by 75% [10] — these are doing work that deterministic rules cannot. The AI Copilot generates decision logic from plain language and debugs issues [12]. Strip the AI, and you have a functional but unremarkable workflow tool. The AI is what makes the product category-defining rather than category-adjacent.

**Verdict: AI is core to the differentiated product, with a rules-engine fallback that still functions.** This is a 4 out of 5 on AI centrality — not pure theater, but not "remove the AI and nothing is left" either. The trajectory is clearly toward deeper AI centrality as the agent layer matures.

## 4. Defensibility

**The real moat is workflow lock-in.**

When a risk team builds its credit policy, AML screening logic, fraud detection rules, model integrations, A/B test history, and compliance audit trails on Taktile, the switching cost becomes enormous. This isn't just data migration — it's institutional knowledge encoded in decision flows. Every experiment, every model integration, every regulatory documentation artifact lives in the platform. A bank examiner who has reviewed and approved a Taktile-based policy deployment creates a regulatory lock-in that compounds over time — nobody wants to re-validate their entire decisioning stack with the examiner.

Taktile reports processing hundreds of millions of risk decisions monthly [2]. Each of those decisions generates outcome data (approved → performed/defaulted, flagged → true positive/false positive) that feeds back into model calibration and policy tuning. This creates a nascent data loop, but I'm less convinced this is the primary moat: it's unclear how aggressively Taktile uses cross-customer decision data to train proprietary models versus keeping data in customer-specific silos (as regulated financial institutions typically require).

The workflow lock-in compounds in a way the data loop may not: every new use case a customer builds (starting with credit, expanding to fraud, then AML, then collections — as Finom did [10]) deepens the switching cost multiplicatively. A well-funded competitor would need 18+ months to replicate the breadth of integrations (Equifax, Plaid, Ocrolus, Inscribe, OpenSanctions, and others [3]), the testing/deployment infrastructure, and the regulatory-grade audit trail.

## 5. Market

**Budget displacement framing:** Taktile's revenue comes from three line items in the buyer's P&L:

1. **Engineering headcount allocated to internal decisioning infrastructure.** At a mid-size fintech, 3-8 engineers maintain the homegrown credit engine. At $200K fully-loaded per head, that's $600K-$1.6M/year in salary alone, plus opportunity cost of those engineers not building product. Taktile displaces a meaningful fraction of this spend by letting risk analysts self-serve.

2. **Legacy vendor contracts.** FICO Decision Management Suite, SAS Intelligent Decisioning, and Experian PowerCurve carry enterprise license fees typically ranging from $200K-$2M/year depending on institution size and decision volume. These contracts are increasingly up for renewal as 5-7 year terms signed in 2018-2021 expire. The budget is moving: 78.6% of the credit decisioning market is now cloud-based [14], signaling that on-prem legacy renewals are losing ground.

3. **Manual operations headcount.** Credit analysts, compliance investigators, and fraud reviewers whose case volume can be reduced through automation. Breakout Finance reported a 95% reduction in underwriting time enabling 3-5x application capacity [2] (company-stated). Finom reported 60% fewer transaction alerts [10] (company-stated). These are headcount-equivalent savings.

The budget owner varies by segment: at fintechs, it's typically the VP/Head of Risk or VP Engineering. At banks, it's the CRO with CIO co-sign for infrastructure decisions. At insurance companies, it's the Chief Underwriting Officer. The multi-buyer dynamic (risk + engineering) is both an advantage (larger budget pool) and a friction point (two approvals needed).

**Top-down sanity check (honestly labeled):** There are roughly 10,000+ financial institutions globally large enough to need automated decisioning, plus thousands of fintechs and embedded finance providers. If Taktile can reach an average ACV in the $150K-$500K range at mid-market and $500K-$2M at enterprise, the addressable market supports a $300M-$500M ARR ceiling at maturity. What would have to be true: Taktile must successfully move upmarket from fintech customers into traditional banks and insurers (longer sales cycles, heavier compliance requirements, different buyer personas) and expand from credit decisioning into adjacent workflows (fraud, AML, collections, insurance underwriting) within existing accounts. The Allianz and Rakuten Bank logos [2] suggest this motion has started but is early.

## 6. Team

**Founder-workflow fit: Adjacent, not exact.** Neither founder has been a credit officer, risk analyst, or compliance investigator. They have not personally sat in the seat of the buyer they're selling to. Here's what they have done:

- **Maik Taro Wehmeyer (CEO):** Industrial engineering background (Karlsruhe Institute of Technology, École Polytechnique, Harvard) [5]. Prior roles at McKinsey and Bosch [5]. Part of the leadership team at QuantCo, an AI-powered enterprise software company founded by four Harvard/Stanford PhDs that builds algorithmic pricing, claims management, and forecasting solutions for financial, retail, and healthcare organizations [7][15]. Member of the EU Commission AI Alliance and founding member of the German AI Association [5].

- **Maximilian Eber (CPTO):** PhD from Harvard [6]. Worked as an ML engineer in financial services, specifically helping hedge funds, banks, and insurance companies modernize their quantitative decision-making infrastructure [6]. Also part of the QuantCo leadership team [7].

The QuantCo connection is the most relevant signal. Both founders built ML-based decisioning tools for financial services clients before starting Taktile — they saw the problem from the tooling/engineering side, watched the same broken infrastructure repeatedly, and decided to productize the solution [7]. This is meaningfully different from an ex-Google PM who read a McKinsey report about credit decisioning. But it's also not a former CRO who has lived through a bank examination or managed a collections team through a default spike.

**Team scale:** 110 employees as of February 2025, up from 45 at Series A in November 2022 [1][7]. Offices in New York, London, and Berlin [7].

**Advisors/board:** Larry Summers (former US Treasury Secretary) participated in the Series B [1]. Index Ventures (Carlos Gonzalez-Cadenas) has been invested since seed [4][8]. Balderton Capital led Series B [1]. Tiger Global co-led Series A and followed on [1][7].

**Key departures since founding:** None identified in public sources.

## 7. Competition

**AI-native entrants:**
- **Alloy** ($211M raised, ~$1.55B valuation [16]): Identity decisioning and fraud prevention platform. Stronger on KYC/identity verification, weaker on credit underwriting and policy iteration. Forbes Fintech 50 in 2025 [16]. Different wedge (identity-first vs. decisioning-first) but convergent roadmaps.
- **Scienaptic AI** ($9.89M raised [17]): AI credit decisioning platform trusted by 150+ credit unions [17]. Narrower market (US credit unions) with a CUSO-backed distribution model. Less product breadth than Taktile but deeper in a specific segment.
- **Provenir:** Cloud-native AI decisioning platform operating in 60+ countries, processing 4B+ transactions annually [13]. Longer history, broader geographic footprint. Named a "Strong Performer" in Forrester's 2025 AI Decisioning Platforms report [13]. The most direct competitor in terms of product scope.

**Incumbents bolting on AI:**
- **FICO:** Named Leader in Forrester Wave AI Decisioning Platforms Q2 2025 with the highest score in current offering [18]. FICO is evolving from a score provider into an end-to-end decisioning platform with AI, model development, and workflow automation. Massive installed base. This is the most dangerous competitive threat — if FICO's modernization succeeds, Taktile's displacement argument weakens. But FICO's core data model and on-prem architecture are pre-LLM, and enterprise modernization is slow.
- **SAS Intelligent Decisioning:** Long-standing favorite among banks and regulators for statistical modeling. Strong with institutions that have large in-house data science teams. Weaker on self-service for non-technical users.
- **Experian PowerCurve:** Decision management tooling for lenders. Tied to Experian's data assets, which is both an advantage (data bundle) and a limitation (vendor lock-in to one bureau).

**In-house builds:** This is Taktile's biggest actual competitor. Well-resourced fintechs (Stripe, Block, Nubank) and large banks (JPM, Goldman) build internal decisioning engines. Taktile wins when the engineering cost of maintaining internal tools exceeds the platform fee and when policy iteration speed matters more than full customization. Taktile loses when the institution has a large enough engineering team to justify the build and needs deep integration with proprietary internal systems.

**Where Taktile actually wins:** Against legacy vendors on deployment speed, iteration velocity, and self-service for risk teams. Against in-house builds on time-to-production and breadth of pre-built integrations. Against other AI-native entrants on product breadth (credit + fraud + AML + collections on one platform).

**Where Taktile loses:** Against FICO on brand trust with bank regulators. Against in-house builds at engineering-heavy fintechs on customization depth. Against Alloy on identity-specific use cases.

## 8. Traction

- **ARR:** Not disclosed (absolute number). Grew 3.5x in 2024 [1][2].
- **ARR growth rate:** 3.5x year-over-year in 2024 [1][2]. Over 300% revenue growth reported at Series A in 2022 [7].
- **NDR:** Not disclosed.
- **Customer count:** Quadrupled in 2024 [2]. Exact number not disclosed.
- **Decision volume:** Hundreds of millions of risk decisions monthly as of Feb 2025 [2]. 250,000+ decisions daily as of Nov 2022 [7].
- **Geographic reach:** 24 markets [2].
- **Team size:** 110 employees as of Feb 2025 [1].
- **Runway:** CEO stated "more than two years of runway" remaining at time of Series B raise [1].

**Named customer logos:** Mercury, Kueski, Zilch, Allianz, Rakuten Bank [2], Branch, Moss, Rhino, Novo, Vivid Money [7], Finom [10], Isaac, Capchase, Pleo, Zippi, Credix, Breakout Finance, SaveIN [9]. This is an unusually broad and high-quality logo set for a Series B company — spanning consumer fintech (Zilch, Mercury), SMB lending (Breakout Finance, Novo, Capchase), European neobanks (Finom, Pleo, Vivid Money), LATAM lenders (Kueski, Zippi, Credix), traditional FIs (Allianz, Rakuten Bank), and insurtech (Rhino).

**Company-stated customer results** (not independently verified):
- Finom: 75% false positive reduction, 99% faster rule updates [10]
- Zilch: 50% reduction in service provider/usage costs [2]
- Zippi: 67% faster policy deployment, doubled experimentation velocity [2]
- Breakout Finance: 95% reduction in underwriting time [2]
- Isaac: 11% reduction in delinquencies [9]
- Credix: 95% reduction in decision times [9]

**Recognition:** G2 category leader for 3 consecutive quarters; 12+ accolades in Winter 2025 G2 report; "Tech of the Future – Decision Making" at 2024 Banking Tech Awards USA [2].

**Unusually strong signal:** The combination of 3.5x ARR growth and 4x customer base expansion in the same year suggests both new logo acquisition and existing account expansion are working. The CEO voluntarily disclosed they had 2+ years of runway and didn't need to raise — suggesting the Series B was offensive (talent/market capture), not defensive [1]. This is a strong signal.

**Unusually weak signal:** Absolute ARR and NDR remain undisclosed, which is notable for a company at this stage with this growth rate. If NDR were above 150%, you'd expect them to say so.

## 9. Top 3 risks, ranked

**1. FICO's AI modernization succeeds and blocks displacement.** FICO was named Leader in the 2025 Forrester Wave for AI Decisioning Platforms [18]. FICO is actively building toward the same "AI-native decisioning" positioning that Taktile claims, and it starts with massive installed-base advantage at banks and credit unions. If FICO successfully ships LLM-agent capabilities on top of its existing platform within 12-18 months, the "rip and replace" argument for Taktile at traditional FIs weakens dramatically. Banks that are already on FICO will take the upgrade path rather than onboard a new vendor. **For the risk to materialize:** FICO's engineering org would need to ship agent capabilities without requiring a core platform rebuild — plausible given their cloud migration investments. **What kills it:** FICO's legacy architecture and enterprise sales cycle are slow; Taktile's iteration speed and self-service model may keep it 18-24 months ahead on product. The fintech segment (Taktile's stronghold) is largely not on FICO today, limiting direct displacement.

**2. Upmarket expansion stalls at the enterprise sales wall.** Taktile's strongest traction is with fintechs (Mercury, Zilch, Kueski, Pleo). Moving upmarket to banks and insurance companies (Allianz, Rakuten Bank are early signals) is a fundamentally different sale — 6-12 month cycles, RFPs, procurement committees, bank examiner scrutiny, SOC 2/ISO 27001 requirements, and on-prem deployment demands. G2 reviewers cite usability issues ("interface not user-friendly," "testing setup admin intensive," "steep learning curve without Python experience" [11]) that may be tolerable for fintech risk teams but are deal-breakers for traditional FI buyers who expect polished enterprise software. **For the risk to materialize:** Taktile would need to attempt enterprise deals and consistently lose to FICO/SAS/Provenir on compliance, deployment flexibility, or buyer comfort. **What kills it:** The fintech segment alone may be large enough to build a $200M+ ARR business without cracking enterprise banking; Taktile could be a generational fintech-infrastructure company without ever winning a top-50 bank.

**3. The "platform" positioning creates a thin-moat breadth trap.** Taktile covers onboarding, credit, fraud, AML, collections, and insurance underwriting on a single platform [3]. This breadth is attractive to buyers but means Taktile competes with specialized tools in every category — Alloy on identity [16], Sardine/Unit21 on fraud, dedicated AML platforms on compliance, and vertical underwriting tools on credit. If any one category develops a clearly superior AI-native specialist, Taktile's "good enough across all" positioning erodes. **For the risk to materialize:** A well-funded vertical competitor would need to demonstrate 2-3x better performance in a specific category (e.g., fraud detection accuracy) and win Taktile's multi-use-case customers by peeling off the highest-value workflow. **What kills it:** The switching cost of being on a single platform for 3+ workflows is high, and the case study evidence (Finom expanding from AML to credit to onboarding on Taktile [10]) suggests that once customers are on the platform, they consolidate rather than fragment.

## 10. Diligence plan

**Week one priorities:**

**Customer references to call:**
- **Finom** (expanded from AML to credit to onboarding [10]) — ask: How did the initial deployment go? What broke? How does Taktile's AML agent compare to the dedicated AML tools you evaluated? Would you move a workflow off Taktile?
- **Zilch** (reported 50% cost reduction [2]) — ask: What were the costs before Taktile? Were you replacing a vendor or an internal build? What does the contract look like (pricing model, decision volume tiers)?
- **Allianz or Rakuten Bank** (traditional FI logos [2]) — ask: What was the procurement process? How did Taktile handle compliance/regulatory requirements vs. FICO or SAS? Who internally championed the deal?
- **A churned or declining customer** — ask the Taktile team to provide one reference who reduced usage or considered leaving. If they refuse, that's a data point.

**CTO/CPTO questions for Maximilian Eber:**
- How is decision outcome data used across customers? Are you training cross-customer models, or is all data siloed per customer?
- What percentage of customers use the AI Agent Manager vs. rules-only decision flows? What's the adoption curve?
- What does your model evaluation and monitoring infrastructure look like? How do you handle model drift in production?
- What's the hardest document type your financial spreading agent still fails on? What's the error rate?
- How do you handle fair lending compliance — specifically, adverse action notices and disparate impact testing — when LLMs are in the decision flow?

**Open data points to close:**
- Absolute ARR and NDR. The 3.5x growth rate is impressive, but we need the base. A 3.5x on $2M is different from 3.5x on $8M.
- Pricing model structure (per-decision, platform fee + usage, annual contract value by tier).
- Logo retention rate and gross churn. The customer base "quadrupled" — how much of that is net new vs. existing expansion?

**Three items for the partner to weigh in on:**
1. **Valuation question:** Post-money was not disclosed. At $54M raised and 3.5x ARR growth, what multiple are we comfortable with? Need the absolute ARR number to assess.
2. **FICO timing question:** FICO's Forrester leadership position is real. Is the window for Taktile to lock in FI customers before FICO's AI upgrade ships narrowing or widening? Worth a call to a FICO enterprise rep to assess their AI agent roadmap timeline.
3. **Salesforce overlap question:** Taktile integrates into the same decisioning workflow that nCino (on Salesforce) partially addresses for bank lending. Is this complementary or competitive to the Salesforce ecosystem? Could this be an acquisition target for Salesforce's financial services vertical?

## 11. Rubric scoring

| Dimension | Score | Rationale |
|---|---|---|
| **AI centrality** | 4 | AI is core to the differentiated product (agents, LLM nodes, copilot), but the Decision Engine can technically function as a rules engine without it — strip the AI and you have a less valuable but functional tool. |
| **Workflow depth** | 5 | Owns multiple connected workflows end-to-end: onboarding, credit, fraud, AML, collections, insurance underwriting — and customers are consolidating across workflows on the platform (Finom is the proof point [10]). |
| **Data loop** | 3 | Decision outcome data exists and feeds back into policy tuning within customer accounts, but cross-customer model training is unclear and likely limited by data privacy constraints in regulated financial services. |
| **Founder-workflow fit** | 3 | Founders built ML decisioning tools for FIs at QuantCo — they understand the problem deeply from the engineering/tooling side — but neither has been a credit officer, risk analyst, or compliance investigator. Adjacent, not exact. |
| **Traction signal** | 4 | 3.5x ARR growth, 4x customer base expansion, strong logo diversity (Mercury, Allianz, Rakuten Bank, Zilch, Finom), G2 category leader — but absolute ARR and NDR undisclosed. |
| **SFV thesis fit** | 5 | Central to the thesis: AI-native credit decisioning, compliance/KYC/AML automation with agents, and increasingly AI-native back-office across the customer lifecycle. SFV must know this company. |

**Total: 24/30** ⭐

**Market map entry:**
| Taktile ⭐ | AI underwriting / credit decisioning + compliance automation | Series B | Yes | 24 | AI-native decisioning platform for FIs with 3.5x ARR growth and 18+ customer logos spanning fintech to traditional FIs; strongest breadth play at this stage; FICO's AI push is the key risk. |

## 12. Sources

[1] "Taktile helps fintechs build automated decision-making workflows." TechCrunch. https://techcrunch.com/2025/02/27/taktile-helps-fintechs-build-automated-decision-making-workflows/. Accessed: 2026-05-02.

[2] "Taktile raises $54M to enable risk experts to take control of AI adoption for decision-making in financial services." Taktile Blog. https://taktile.com/articles/taktile-raises-54m-series-b. Accessed: 2026-05-02.

[3] "Taktile — The Agentic Decision Platform for Financial Institutions." Taktile Product Page. https://taktile.com/taktile. Accessed: 2026-05-02.

[4] "Taktile Secures $54M to Enable AI Adoption for Decision-Making in Financial Services." Index Ventures. https://www.indexventures.com/perspectives/taktile-secures-54m-to-enable-ai-adoption-for-decision-making-in-financial-services/. Accessed: 2026-05-02.

[5] "Maik Taro Wehmeyer." Taktile. https://taktile.com/maik-taro-wehmeyer. Accessed: 2026-05-02.

[6] "Maximilian Eber." Taktile. https://taktile.com/maximilian-eber. Accessed: 2026-05-02.

[7] "Taktile raises $20M to help fintech companies test and deploy decision-making models." TechCrunch. https://techcrunch.com/2022/11/22/taktile-raises-20m-to-help-fintech-companies-test-and-deploy-decision-making-models/. Accessed: 2026-05-02.

[8] "Berlin's Taktile raises $4.7 million via Index Ventures, Y Combinator, and others." Tech.eu. https://tech.eu/2021/08/26/berlins-taktile-raises-4-7-million-via-index-ventures-y-combinator-and-others/. Accessed: 2026-05-02.

[9] "Customer Stories." Taktile. https://taktile.com/customer-stories. Accessed: 2026-05-02.

[10] "Smarter financial crime detection: How Finom reduced false positives by 75% with Taktile." Taktile. https://taktile.com/articles/finom-success-story. Accessed: 2026-05-02.

[11] "Taktile Reviews 2026." G2. https://www.g2.com/products/taktile/reviews. Accessed: 2026-05-02.

[12] "Taktile (Product Review)." Marc Abraham. https://marcabraham.com/2025/11/26/taktile-product-review/. Accessed: 2026-05-02.

[13] "Provenir Named a Strong Performer in 2025 AI Decisioning Platforms Report by Independent Research Firm." Yahoo Finance. https://finance.yahoo.com/news/provenir-named-strong-performer-2025-143200196.html. Accessed: 2026-05-02.

[14] "Credit Decisioning Platform Market Size." Market.us. https://market.us/report/credit-decisioning-platform-market/. Accessed: 2026-05-02.

[15] "QuantCo." QuantCo. https://www.quantco.com/. Accessed: 2026-05-02.

[16] "Alloy (company)." Wikipedia. https://en.wikipedia.org/wiki/Alloy_(company). Accessed: 2026-05-02.

[17] "Scienaptic — 2026 Company Profile." Tracxn. https://tracxn.com/d/companies/scienaptic/__SHbS57y3q0WsmNMTwLqD2hWvV6lPYTaXpSoz72u8bjc. Accessed: 2026-05-02.

[18] "FICO Recognized as a Leader in 2025 AI Decisioning Platforms Report by Independent Research Firm." FICO. https://www.fico.com/en/newsroom/fico-recognized-leader-2025-ai-decisioning-platforms-report-independent-research-firm. Accessed: 2026-05-02.
