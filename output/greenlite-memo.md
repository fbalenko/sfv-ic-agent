# Greenlite AI (now Bretton AI) — IC Memo

**Date:** 2026-05-02
**Analyst:** sfv-ic-agent
**Stage / Round:** Series B
**Ask:** $75M Series B led by Sapphire Ventures; post-money valuation not disclosed [1]

## 1. Recommendation

**PURSUE.** Confidence: H. The strongest pure-play AI-native compliance agent company at this stage — regulated bank deployments, Tier 1 fintech logos, 8x ACV expansion since seed, and a $75M Series B from Sapphire less than nine months after a $15M Series A from Greylock signals extraordinary demand acceleration.

## 2. Thesis fit

**Subsegment:** Compliance and KYC/AML automation with agents — dead center of the SFV thesis.

**Workflow being replaced:** L1 and L2 financial crime investigations — the manual, repetitive work of gathering evidence across disconnected systems, applying internal policies and regulatory guidance, and writing audit-ready narratives for KYC onboarding, AML alert triage, sanctions screening, and enhanced due diligence reviews [2].

**Why now — and why this is specific, not generic:**

Between 2023 and 2025, LLMs crossed the accuracy threshold for two capabilities that matter enormously in financial crime compliance: (a) multi-source evidence synthesis across messy, unstructured data (corporate registries, news articles, social media, internal transaction data), and (b) policy-grounded narrative generation that can produce audit-ready output a regulator would accept. Before that threshold, "AI compliance" meant rules engines with better UIs. The false positive rate in legacy AML transaction monitoring systems exceeds 95% [3] — meaning compliance analysts spend the overwhelming majority of their time clearing noise, not investigating genuine risk. That was a known problem for a decade, but the remediation step — the actual investigation — could not be automated until language models could read, reason, and write at the level of a junior analyst.

Simultaneously, regulatory enforcement has not relaxed. The OCC's 2011-12 guidance on model risk management and NYDFS 504 on transaction monitoring create a compliance floor that institutions cannot ignore [4]. Hiring has gotten harder and more expensive: the $22B annual labor market for financial crime compliance is constrained by a talent shortage that worsened post-COVID [5]. The buyer — typically the BSA/AML officer or Chief Compliance Officer — is under simultaneous pressure to do more with less and to demonstrate to examiners that their program is robust. An AI agent that ships with regulatory guidance embedded and produces explainable, auditable output directly addresses both pressures.

The timing of UiPath's acquisition of WorkFusion in February 2026 [6] further validates the thesis: the largest RPA platform in the world chose financial crime compliance AI agents as its entry point into agentic AI for financial services.

## 3. Product

Bretton AI deploys AI agents that perform the end-to-end investigation workflow for financial crime compliance — specifically KYC/KYB reviews, AML alert triage, sanctions screening, enhanced due diligence, and ongoing monitoring [2][7].

The agents operate across L1 (data gathering and analysis) and L2 (decisioning and narrative writing) investigation phases [7]. They integrate into existing compliance stacks — connecting to AML software, KYC systems, and internal tools — and work across 200+ data sources including OpenCorporates, Refinitiv, Equifax, Alloy, ComplyAdvantage, and Thomson Reuters/LexisNexis [8][9]. The agents gather evidence from multiple disconnected systems, apply internal policies and external regulations to each case, auto-resolve low-risk cases, escalate complex matters with enriched investigation details, and generate audit-ready documentation with citations [3].

The platform runs on what the company calls "Trust Infrastructure" — a proprietary governance layer that embeds U.S. federal banking regulatory guidance (OCC 2011-12 and NYDFS 504), model risk management frameworks, continuous AI evaluation, and quality assurance into every agent [4][10]. The system is SOC 2 Type II certified, GDPR compliant, offers zero-data retention, and supports virtual private cloud deployment [7].

In February 2026, the company launched Bretton AI Horizon, an agentic workspace for complex investigations, and a Business Due Diligence product integrated with Alloy [2].

**AI core or cosmetic?** AI is core. Remove the AI and there is no product. The entire value proposition is that an AI agent performs the multi-source evidence gathering, policy application, reasoning, and narrative generation that a human L1/L2 analyst would otherwise perform manually. A deterministic rules engine cannot replicate the unstructured data synthesis, contextual policy interpretation, and natural-language narrative writing that the agents perform. The compliance officer quoted in the American Banker piece framed it precisely: the product functions "almost like a paralegal prepares a docket" [11] — that is generative, judgment-heavy work, not checkbox automation.

## 4. Defensibility

**The real moat is workflow lock-in compounded by regulatory trust.**

In financial crime compliance, switching costs are not primarily about data migration or API integration — they are about regulatory trust. Once a compliance team has deployed Bretton's agents, validated them with internal model risk management, demonstrated their outputs to examiners, and built their standard operating procedures around the agent-generated documentation, ripping that out is a regulatory event. The BSA/AML officer who approved the deployment has personally vouched for it to the OCC or FDIC examiner. Switching vendors means re-validating a new system under OCC 2011-12, re-training staff, and re-establishing examiner confidence — a 12-18 month process at minimum in a regulated bank.

This is why the Trust Infrastructure matters beyond marketing. By embedding regulatory guidance directly into the agent framework and providing independent model validation and audit trails, Bretton reduces the compliance team's adoption risk — and once adopted, creates a lock-in dynamic that is not about technology but about institutional reputation with the regulator.

A well-funded competitor would need 18+ months to replicate not just the agent technology but the regulatory credibility: the track record of 1.2M+ completed investigations [2], the SOC 2 Type II certification, the examiner-tested outputs, and the customer references from OCC/FDIC/Fed-regulated institutions that de-risk the next sale.

## 5. Market

**Budget displacement framing:** The revenue comes from the compliance operations line — specifically, the headcount budget for L1/L2 financial crime analysts and the outsourcing budget for BPO providers who handle investigation overflow. When a $15B+ institution cuts $5.35M in BPO spend in Year 1 using Bretton [2], that is a direct line-item displacement. The budget owner is the BSA/AML officer, Chief Compliance Officer, or in larger institutions, the Head of Financial Crime Operations. This person reports to the General Counsel or Chief Risk Officer and has both the authority and the acute motivation to spend — they are personally liable if the program fails an exam.

This budget is actively moving toward AI-native solutions. Almost 80% of financial institutions expect to invest in AI for financial crime compliance by 2026, and more than 70% have already realized savings from existing AI deployments [12]. This is not future intent — it is current procurement.

**Sanity-check sizing:** Sapphire Ventures cites $60B+ in annual compliance spending in North America [3]. Greylock sizes the financial crime compliance labor market at $22B annually [5]. The global financial crime compliance market was valued at $28.6B in 2025 [13]. These are top-down numbers — the honest framing is that even a small share of the compliance labor budget represents a multi-billion-dollar opportunity.

**Realistic 5-year revenue ceiling:** If Bretton captures 1-2% of the $22B compliance labor market in North America, that is $220M-$440M in ARR. What would have to be true: (a) the product works reliably at Tier 1 bank scale (not yet proven publicly), (b) regulators do not issue guidance that constrains AI agent deployment in compliance, and (c) the ACV expansion from $201K continues into $500K+ enterprise contracts as the product covers more compliance workflows.

## 6. Team

**Founder-workflow fit: Strong.** Will Lawrence (CEO) led product for Meta's AML platform, combating financial crimes across payment, gaming, and e-commerce use cases, and then built core compliance infrastructure at Paxos, the stablecoin infrastructure company that powers over 10M crypto wallets globally [14][15]. He did not hold the BSA officer or analyst title himself, but he built the tooling those people used — at two companies operating at meaningful scale in exactly this problem domain. That is the right kind of founder-workflow fit: close enough to know the pain, technical enough to build the solution, product-oriented enough to sell it.

Alex Jin (CTO) was a product manager and iOS engineer at Dropbox, then product lead and first employee at Flixed where he drove a bootstrapped business to double annual revenue [16]. His background is generalist product-engineering, not financial crime domain — but that is the right complement to Lawrence's domain depth. He holds a dual Bachelor's in Computing and Commerce from Queen's University [16].

**Advisors/Board:** Tim Mayopoulos, former CEO of Fannie Mae, is an angel investor [11]. Rajeev Dham, Partner at Sapphire Ventures, joined the board at Series B [1]. Seth Rosenberg at Greylock led the seed and Series A [5].

**Team size:** 34 employees as of the YC profile [8], with 7 active job listings including software engineers, analysts, and account executives.

**Key departures since founding:** None identified in research.

**Gap to flag:** The team is still small relative to the fundraise. Scaling from 34 to a team that can serve Tier 1 bank deployments requires rapid hiring in compliance domain expertise, enterprise sales, and customer success. The CTO's background is not in compliance or AI/ML research — the technical leadership layer below the founders will matter as the product moves upmarket.

## 7. Competition

**AI-native entrants:**
- **WorkFusion** was the most direct competitor — purpose-built AI agents for financial crime compliance, 1M+ alert hits processed daily, used at 10 of the top 20 banks, 60% YoY growth in AI agent solutions [6]. UiPath acquired WorkFusion in February 2026, removing it as an independent competitor but potentially making it more dangerous inside UiPath's enterprise distribution. This is the competitive dynamic to watch.
- **Unit21** ($92M raised) offers a no-code platform for fraud and AML operations with an AI agent that has reviewed 300,000+ alerts with 99% claimed accuracy [17]. Broader fraud focus, less compliance-investigation-specific than Bretton.
- **Sardine** ($146M raised) is an AI risk platform focused on fraud prevention, device intelligence, and behavior biometrics [18]. More fraud-detection than compliance-investigation — different buyer, adjacent budget.

**Incumbents bolting on AI:**
- **Oracle** launched agentic AI for AML in March 2025 [11]. Oracle has enterprise distribution but a track record of slow product iteration in compliance.
- **NICE Actimize, SymphonyAI, Feedzai, ComplyAdvantage, Quantexa** — all have AI roadmaps, but their core architectures are pre-LLM rules engines and ML models for detection, not generative agents for investigation [11]. Adding agent capabilities to a legacy detection platform is a different engineering challenge than building agents from scratch.

**Compliance workflow platforms:**
- **Hummingbird** ($38.1M raised) is a compliance operations platform covering the full AML lifecycle. Recognized in Forrester's Q1 2026 landscape report [19]. More workflow tooling than AI agent — a potential integration partner or acquisition target, not a direct competitor on the agent layer.

**In-house builds:** Large banks (JPM, Citi) will always build some compliance AI internally. The risk is not that they build Bretton — it is that they conclude they do not need a third-party agent. Greylock's Seth Rosenberg argues the counter: "banks can benefit from third-party compliance visibility across entire industries" [20] — a single bank's internal data is a fraction of the signal available to a platform serving many institutions.

**Where Bretton wins:** Against fintech and mid-market bank buyers who do not have the engineering resources to build in-house and need production-ready, regulator-tested AI agents. The named customer base — Robinhood, Mercury, Ramp, Gusto — confirms this [2].

**Where Bretton is vulnerable:** Against UiPath/WorkFusion at the largest banks, where WorkFusion's pre-existing relationships (10 of top 20 banks) and UiPath's enterprise sales motion could be decisive. And against the in-house build decision at any bank with $50B+ in assets and a strong internal AI team.

## 8. Traction

**ARR:** Not disclosed.

**Growth rate:** Not disclosed. However, the pace from $15M Series A (May 2025) to $75M Series B (February 2026) — less than nine months — is an unusually strong signal that the company crossed revenue thresholds quickly [1][10].

**NDR:** Not disclosed.

**ACV expansion:** Average customer contract value of $201,000 at Series B, up from $85,000 at Series A and $25,000 at Seed [1]. This 8x expansion from seed to Series B is a strong signal of deepening usage and multi-product adoption within accounts.

**Logo quality:** Robinhood, Mercury, Ramp, Gusto, Betterment (fintechs); Grasshopper Bank, Lead Bank, Coastal Community Bank, First Internet Bank (regulated banks); RSM UK (professional services) [2][11][21]. OCC-, FDIC-, and Federal Reserve-regulated institutions [2]. Five new publicly traded companies signed as customers in 2025 [1].

**Customer market cap:** Total market capitalization of companies relying on the platform grew from $150B to $1T+ in the past year [1].

**Volume:** 1.2M+ L1 and L2 financial crime investigations completed; 195,000+ hours of manual work eliminated; $10M+ in customer savings [2][3].

**Named case studies:**
- $15B+ institution: $5.35M BPO spend reduction in Year 1 [2]
- Fortune 500: 50% reduction in institutional client onboarding time [2]
- FDIC-regulated bank: 90% reduction in loan origination time [2]
- Grasshopper Bank: ~70% reduction in enhanced due diligence review time [11]
- Coastal Community Bank: "meaningfully reduced L1 investigation times" [21]
- Meso: 90% reduction in alert processing times, 95% reduction in false positives, 10x capacity scaling without additional headcount [5]

**Unusually strong signals:** The ACV expansion from $25K to $201K in ~2 years is exceptional — it implies the product is landing and expanding within accounts, not just adding new logos. The sub-9-month cadence from Series A to Series B with a 5x step-up in round size ($15M → $75M) is top-decile pacing.

**Unusually weak signals:** Zero disclosed revenue or retention metrics. For a company that has raised $95M, the absence of any ARR or NDR disclosure — even a directional claim — is notable.

## 9. Top 3 risks, ranked

**1. UiPath/WorkFusion consolidation creates a formidable competitor at the top of the market.**

UiPath acquired WorkFusion in February 2026 [6]. WorkFusion was already deployed at 10 of the top 20 global banks, processing 1M+ alerts daily [6]. UiPath adds a 10,000+ enterprise customer base and one of the strongest enterprise sales motions in software. If UiPath invests aggressively in WorkFusion's product — rather than letting it languish as acqui-hires often do — Bretton could find the Tier 1 bank market locked out.

*What would have to be true for this to materialize:* UiPath treats WorkFusion as a strategic priority, not a tuck-in. UiPath's sales team actively cross-sells WorkFusion into existing accounts.
*What would kill it:* UiPath's integration stumbles (large company, complex integration). WorkFusion's product stagnates post-acquisition. Bretton locks in enough regulated bank references before UiPath's distribution ramps. The buyer (BSA officer) prefers a specialist over a platform.

**2. Regulatory backlash against AI in compliance investigation — specifically, examiner pushback on AI-generated SARs or AI-driven decisioning.**

Financial crime compliance is one of the most regulator-sensitive domains in banking. If an OCC or FDIC examiner concludes that AI-generated investigation narratives do not meet the standard for a "reasonably designed" BSA/AML program, the entire category takes a hit. This is not hypothetical — bank examiners have historically been conservative about automation in BSA.

*What would have to be true:* A high-profile enforcement action where AI-generated compliance outputs are cited as a failure. Or a formal guidance document from the OCC/Fed/FDIC that restricts or creates burdensome requirements for AI in compliance decisioning.
*What would kill it:* Bretton's Trust Infrastructure actually works as advertised — producing outputs that examiners trust. Early adopter banks pass exams with Bretton-generated documentation. FinCEN or OCC issues affirming guidance (as the industry is lobbying for).

**3. ACV growth disguises fragile unit economics or excessive implementation costs.**

An ACV that grew from $25K to $201K could reflect genuine product-led expansion — or it could reflect increasingly complex, high-touch implementations that do not scale. If each $201K contract requires 6 months of onboarding, custom policy configuration, and dedicated customer success, gross margins could be worse than they appear. At 34 people, the team is thin; if 30-40% of headcount is consumed by customer success and implementation, the company is not yet a software business.

*What would have to be true:* Implementation timelines exceed 90 days for most customers. Customer success load is 1 CS per 5-8 accounts. Gross margins are below 70%.
*What would kill it:* Standardized onboarding that leverages the Trust Infrastructure to reduce custom configuration. Self-serve policy configuration tools. Gross margins above 80%. Evidence that the ACV growth is driven by automated expansion (more agents, more workflows) rather than professional services.

## 10. Diligence plan

**Week one calls:**

1. **Grasshopper Bank CCO (Christopher Mastrangelo)** — cited by name in American Banker [11]. Ask: How long did implementation take? What did the examiner say about AI-generated outputs? Would you expand to more workflows? What broke during deployment?

2. **Coastal Community Bank President (Brian Hamilton)** — quoted in Series B PR [21]. Ask: Same questions. Specifically: has your FDIC examiner reviewed Bretton-generated work product? What was the reaction?

3. **One of the five unnamed publicly traded companies** signed in 2025 [1]. Ask: Why Bretton over WorkFusion or in-house? What was the procurement process? Who owned the budget decision?

4. **Robinhood compliance team** — the largest, most sophisticated fintech customer [2]. Ask: Is this a production deployment or pilot? What volume of investigations? How does it integrate with your existing compliance stack?

**CTO questions for Alex Jin:**

- Walk me through the model architecture. Is the core agent built on a foundation model (GPT-4, Claude, etc.) with fine-tuning, or is there a proprietary model? What is the marginal cost per investigation?
- How does Trust Infrastructure enforce regulatory guidance at inference time? Is it prompt engineering, retrieval-augmented generation, fine-tuning, or something else?
- What is the false positive rate of agent-generated decisions vs. human analysts? How do you measure accuracy?
- What is the customer onboarding timeline from contract signature to production deployment?
- How do you handle model updates? When the underlying LLM changes, how do you ensure the agent's regulatory compliance does not regress?

**Specific open data points to close:**

- ARR and ARR growth rate — the absence of disclosure is unusual for this stage
- Gross margins — the ACV growth is meaningless without understanding the cost to deliver
- NDR — is the ACV expansion happening within existing accounts or is this just larger new logos?

**Three items for the partner:**

1. **Competitive timing:** The UiPath/WorkFusion combination could close the Tier 1 bank market within 12-18 months. Does Bretton need to be at $500K+ ACV with 3-5 top-20 bank logos before that happens? If so, is the current team and GTM motion fast enough?

2. **Regulatory posture:** Should we commission an independent view from a former OCC examiner on the viability of AI-generated compliance outputs surviving a BSA exam? This is a category-level risk, not just a Bretton risk.

3. **Valuation context:** $75M Series B with no disclosed ARR. Is this a bet on the category and team, or did Sapphire see numbers that justify this at a conventional multiple? What did the term sheet look like?

## 11. Rubric scoring

| Dimension | Score | Rationale |
|---|---|---|
| **AI centrality** | 5 | AI is the product — the agents perform the investigation work; remove the AI and nothing is left. |
| **Workflow depth** | 4 | Owns L1 and L2 investigations end-to-end across KYC, AML, sanctions, and EDD; Horizon expands into complex investigations; approaching role replacement for junior analysts but not yet fully replacing a headcount line. |
| **Data loop** | 3 | Investigation outcomes, policy interpretations, and accuracy feedback accumulate across customers; Trust Infrastructure could create a compounding loop, but no evidence yet that this data is feeding back into model improvement in a way that creates winner-take-all dynamics. |
| **Founder-workflow fit** | 4 | Will Lawrence built AML tooling at Meta and compliance infrastructure at Paxos — strong domain proximity but not the analyst/BSA officer himself; Alex Jin is a generalist technologist, strong complement but not domain-deep. |
| **Traction signal** | 4 | Elite logo quality (Robinhood, Mercury, Ramp), 8x ACV expansion, 1.2M+ investigations, regulated bank deployments; but ARR, NDR, and growth rate are all undisclosed — strong signals surrounded by meaningful gaps. |
| **SFV thesis fit** | 5 | Central to the compliance and KYC/AML automation with agents subsegment; this is the exact company the thesis was designed to find. |

**Total: 25/30** ⭐

**Market map entry:**

| Company | Subsegment | Stage | AI-core? | Score | One-line take |
|---|---|---|---|---|---|
| Bretton AI (fka Greenlite) ⭐ | Compliance / KYC/AML automation with agents | Series B | Yes | 25 | AI-native compliance agents deployed at regulated banks and Tier 1 fintechs; 8x ACV expansion since seed; UiPath/WorkFusion combination and zero disclosed ARR are the key questions. |

## 12. Sources

[1] "Bretton AI Raises $75M Series B, Rebrands from Greenlite AI to Build the AI Standard for Financial Crime." BusinessWire. https://www.businesswire.com/news/home/20260209387593/en/Bretton-AI-Raises-$75M-Series-B-Rebrands-from-Greenlite-AI-to-Build-the-AI-Standard-for-Financial-Crime. Accessed: 2026-05-02.

[2] "Bretton AI Raises $75M Series B to Modernize AML & KYC Staffing." Bretton AI Blog. https://www.bretton.com/blog/bretton-raises-75m-series-b-to-modernize-aml-kyc-staffing. Accessed: 2026-05-02.

[3] "The AI Workforce for Financial Crime Operations: Why We're Excited to Lead Bretton AI's Series B." Sapphire Ventures. https://sapphireventures.com/blog/bretton-ai-series-b-ai-financial-crime-operations/. Accessed: 2026-05-02.

[4] "Greenlite AI Raises $15 Million Series A." Bretton AI Blog (originally Greenlite AI Blog). https://www.bretton.com/blog/greenlite-ai-raises-15-million-series-a. Accessed: 2026-05-02.

[5] "Introducing Greenlite AI." Greylock. https://greylock.com/portfolio-news/introducing-greenlite-ai/. Accessed: 2026-05-02.

[6] "UiPath Acquires WorkFusion to Expand AI Agent Portfolio for Financial Crime Compliance." AlleyWatch. https://www.alleywatch.com/2026/02/uipath-acquisition-workfusion-financial-crime-compliance-ai-agents-aml-kycuipath-acquires-workfusion-to-expand-ai-agent-portfolio-for-financial-crime-compliance/. Accessed: 2026-05-02.

[7] "Bretton AI Products." Bretton AI. https://www.bretton.com/products. Accessed: 2026-05-02.

[8] "Bretton AI." Y Combinator. https://www.ycombinator.com/companies/bretton-ai. Accessed: 2026-05-02.

[9] "Greenlite AI raises $4.8M to bring AI coworkers to bank and fintech compliance teams." Bretton AI Blog (originally Greenlite AI Blog). https://www.bretton.com/blog/greenlite-seed-round. Accessed: 2026-05-02.

[10] "Greenlite AI Raises $15M Series A to Help Banks and Fintechs Fight Financial Crime with Trusted AI Workforce." BusinessWire. https://www.businesswire.com/news/home/20250521200064/en/Greenlite-AI-Raises-$15M-Series-A-to-Help-Banks-and-Fintechs-Fight-Financial-Crime-with-Trusted-AI-Workforce. Accessed: 2026-05-02.

[11] "Greenlite AI raises $15M for financial crime AI assistant." American Banker. https://www.americanbanker.com/news/greenlite-ai-raises-15m-for-financial-crime-ai-assistant. Accessed: 2026-05-02.

[12] "How banks and fintechs are scaling AI in financial crime." Fintech Global. https://fintech.global/2025/12/24/how-banks-and-fintechs-are-scaling-ai-in-financial-crime/. Accessed: 2026-05-02.

[13] "Financial Crime Compliance Market Size, Share | Growth [2034]." Fortune Business Insights. https://www.fortunebusinessinsights.com/financial-crime-compliance-market-113535. Accessed: 2026-05-02.

[14] "Bretton AI raises $75 million to use AI to combat financial crime." Fortune. https://fortune.com/2026/02/10/bretton-ai-money-laundering-compliance-financial-services-venture-sapphire-greylock/. Accessed: 2026-05-02.

[15] "Greenlite AI rebrands as Bretton AI, secures $75m Series B." Fintech Futures. https://www.fintechfutures.com/venture-capital-funding/greenlite-ai-rebrands-as-bretton-ai-secures-75m-series-b. Accessed: 2026-05-02.

[16] "Alex Jin — About." alexjin.me. https://alexjin.me/. Accessed: 2026-05-02.

[17] "Unit21 AI Agent — Agentic AI Platform for Fraud & AML Operations." Unit21. https://www.unit21.ai/. Accessed: 2026-05-02.

[18] "Sardine's $70M Funding: Innovating Financial Fraud Protection." Sardine. https://www.sardine.ai/blog/series-c-announcement. Accessed: 2026-05-02.

[19] "Hummingbird — Unified Risk & Compliance Operations." Hummingbird. https://www.hummingbird.co/. Accessed: 2026-05-02.

[20] "Canvas Portfolio — Bretton AI." Canvas Ventures. https://www.canvas.vc/companies/greenlite-ai. Accessed: 2026-05-02.

[21] "Financial crime platform Bretton AI secures $75m." RegTech Analyst. https://regtechanalyst.com/financial-crime-platform-bretton-ai-secures-75m/. Accessed: 2026-05-02.
