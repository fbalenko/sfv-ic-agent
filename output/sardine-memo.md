# Sardine — IC Memo

**Date:** 2026-05-02
**Analyst:** sfv-ic-agent
**Stage / Round:** Series C
**Ask:** $70M at $660M post-money [1][2]

---

## 1. Recommendation

**PURSUE.** Confidence: M. Sardine is the most credible AI-native fraud and compliance platform at scale — 130% YoY ARR growth, 400+ enterprise customers, and a genuine data-loop moat via the Sonar consortium — but the co-founder departure and the question of whether credit underwriting is a real second act or a distraction deserve diligence before a term sheet.

---

## 2. Thesis fit

**Subsegment:** Compliance and KYC/AML automation with agents; secondary mapping to AI underwriting and credit decisioning.

Sardine is replacing the patchwork of point solutions that fraud and compliance teams at banks, fintechs, and payment processors currently operate: separate vendors for device fingerprinting, behavioral biometrics, transaction monitoring, KYC/KYB, AML screening, and chargeback management. The budget being displaced sits across compliance (BSA/AML ops) and fraud operations — typically owned by the Chief Risk Officer or Head of Financial Crime, with secondary budget authority from the COO and CFO.

**Why now — specifically:** Three forces converged between 2023 and 2025 that make this moment different from prior fraud-tech cycles:

1. **Real-time payments created a new attack surface.** The expansion of FedNow, RTP, and instant ACH pushed fraud from batch-detectable to must-be-caught-in-session. Legacy rule-based systems tuned for next-day review cannot operate at this speed. Sardine's behavioral biometrics and device intelligence — signals that evaluate the user *during the session*, not after — become load-bearing in a way they were not in the ACH/wire world.

2. **GenAI-powered fraud scaled the threat faster than headcount can follow.** Deepfake KYC documents, AI-generated synthetic identities, and LLM-written social engineering scripts created an 800% surge in alert volume for risk teams [3]. The response cannot be "hire more analysts" — it has to be agentic automation that triages, investigates, and resolves alerts with human oversight. Sardine's AI agents (KYC, sanctions screening, disputes, merchant risk) are a direct product response to this capacity gap.

3. **Bank-fintech consent order wave forced compliance upgrades.** The 2023–2025 cycle of consent orders against sponsor banks (Evolve, Cross River, Blue Ridge, Sutton) made BaaS compliance infrastructure a board-level priority. Sardine's Helix partnership for sponsor bank monitoring [4] and its Sonar consortium for cross-entity intelligence sharing are purpose-built for this regulatory moment.

This is not generic "AI got better." The fraud surface changed, the threat actor tooling changed, and the regulatory enforcement posture changed — all within 18 months.

---

## 3. Product

Sardine is a unified risk platform that consolidates fraud prevention, AML/BSA compliance, KYC/KYB identity verification, and credit underwriting into a single API and SDK integration.

**Core architecture:**

- **Single SDK** combining device intelligence and behavioral biometrics — captures 4,000+ engineered features per session including typing cadence, mouse movements, hesitation patterns, context-switching, copy-paste behavior, and device/browser fingerprinting [5][6].
- **Sonar consortium** — anonymized cross-industry fraud intelligence network. Members include FIS, GoDaddy, Deel, Ascensus, and X. When a fraudulent device or identity is flagged by one member, the signal propagates to all [1][7].
- **No-code rule builder** — fraud and compliance teams can create, test, and deploy rules without engineering support. GoDaddy reported cutting rule deployment time from days to hours [8].
- **AI agents** — five named agents (Finley for ops copilot, Max for chargeback disputes, Marley for merchant risk, Ruby for SAR generation, and a customer support agent) [7]. The KYC agent achieves 88% auto-resolution on onboarding edge cases; the disputes agent reduces evidence preparation time from 30+ minutes to near-zero (company-stated) [1].
- **Credit underwriting module** — combines bureau data, cashflow signals, identity verification, and behavioral anomalies into automated decisioning workflows with OSINT and rule suggestion agents [9].
- **40+ enrichment data sources** integrated for identity, email, phone, banking, and payment signals [5].

**AI core or cosmetic?**

**AI is core.** Remove the machine learning models, the behavioral biometrics inference, and the AI agents — and what remains is a rule engine with a consortium database. The rule engine alone is table stakes (every fraud vendor has one). The differentiation — catching session-level behavioral anomalies, auto-resolving KYC edge cases, generating SAR narratives, detecting synthetic identities from behavioral signals that don't match stated identity — is fundamentally dependent on ML and LLM capabilities. The product does not function in its current form without AI. This is not a wrapper.

That said, the credit underwriting module is newer and thinner. The fraud and compliance AI is battle-tested at 300+ enterprises; the credit underwriting AI is earlier in its maturity cycle. The AI-core judgment applies to the primary product, not uniformly to every module.

---

## 4. Defensibility

**The real moat is the data loop via the Sonar consortium.**

Sardine has profiled 5.4 billion devices and screened $1.3 trillion in payments (company-stated) [10]. More critically, the Sonar consortium creates a network-effect data loop: every new customer contributing fraud signals makes the fraud detection better for all members. A fraudulent device blocked at GoDaddy is flagged when it appears at Deel. A synthetic identity caught at FIS is surfaced when it applies at a neobank.

This is the hardest moat to replicate because it requires *both* (a) a critical mass of customers sharing data and (b) the legal and compliance framework to do so without violating privacy regulations. A well-funded competitor starting today would need 18+ months to build the customer base, negotiate the data-sharing agreements, and accumulate enough signal density for the consortium to be useful.

The model advantage compounds on top: more sessions → more behavioral features → better ML models → lower false positive rates → easier customer retention → more sessions. This is a genuine flywheel, not a slide-deck assertion, because Sardine's reported fraud detection precision improvements (one remittance provider went from 15% to 70% precision [1]) are the kind of outcome that only emerges from model iteration on large, diverse datasets.

**What it is not:** Distribution lock-in. Sardine's integration is an SDK and API — meaningful switching cost, but not structural lock-in like being embedded in a core banking system. A sufficiently motivated buyer could rip it out in a quarter.

---

## 5. Market

**Budget displacement framing:**

Sardine's revenue comes from three budget lines:

1. **Fraud operations** — currently spent on a stack of 2–4 point solutions (device fingerprinting from a vendor like Iovation/TransUnion, behavioral biometrics from BioCatch, transaction monitoring from NICE Actimize or Featurespace, chargeback management from Chargebacks911 or similar). A mid-market bank might spend $500K–$2M/year across these tools. Sardine consolidates to one vendor. GoDaddy's case study — eliminating multi-vendor complexity and a 16+ person engineering dependency — is the canonical displacement story [8].

2. **Compliance operations** — BSA/AML transaction monitoring, KYC/KYB verification, SAR filing. This budget is partially allocated to legacy vendors (NICE Actimize, Verafin/Nasdaq, Hummingbird) and partially to headcount (compliance analysts reviewing alerts). Sardine's 88% auto-resolution on KYC and automated SAR generation directly displace analyst FTE costs.

3. **Credit underwriting** — newer and smaller for Sardine. This competes with LOS vendors (nCino, Abrigo) and decisioning platforms (Taktile, Alloy). The budget owner is the Chief Credit Officer or Head of Lending.

The primary buyer persona is the Chief Risk Officer or Head of Financial Crime at a bank or fintech. This budget is *actively moving* toward AI-native solutions — the consent order wave and the real-time payments shift are forcing upgrades, not discretionary.

**Sanity-check sizing (top-down, stated honestly):**

The fraud management market is sized at $29B in 2024, growing to $63B by 2029 at 17% CAGR [7]. Sardine's addressable slice — fintechs, mid-market banks, payment processors, and marketplaces wanting a unified platform — is a fraction of this. A realistic TAM for the unified risk platform category (not all fraud tools) is $5–8B, with Sardine positioned to capture share from both point-solution vendors and legacy incumbents.

**5-year revenue ceiling:** $200–400M ARR is achievable if Sardine (a) maintains 60%+ growth for 2–3 more years, (b) successfully expands into credit underwriting as a real revenue driver, and (c) wins 3–5 Tier 1 bank deployments. What would have to be true: the credit underwriting module would need to mature to the point where a lender buys Sardine for underwriting alone, not just as a fraud add-on.

---

## 6. Team

**Founder-workflow fit: Strong — these founders have done the exact job.**

- **Soups Ranjan (CEO, Co-founder):** Head of Risk at Coinbase (2015, scaled fraud/compliance/identity systems through 1000x customer growth during crypto boom), then Head of Financial Crime at Revolut (2019). PhD in Electrical and Computer Engineering from Rice, thesis on scaling web services against cyber threats. Founded Risk Salon, a 4,000+ member think tank for fintech risk leaders. 15 years building ML-based fraud systems [11][12]. This is a founder who has sat in the chair — not adjacent experience, but the actual job of building and running a fraud detection operation at scale.

- **Zahid Shaikh (CPO, Co-founder):** Created the Device Intelligence product at PayPal that reduced fraud losses by $40M+/year; recognized as PayPal's Top Inventor in 2016 with 5 patents. Led Trusted Identity at Uber (device intelligence + login security). Senior Product Owner for Revolut's US crypto product [13][14]. The device intelligence core of Sardine's product traces directly to Zahid's PayPal work — this is a founder rebuilding the thing he invented.

- **Aditya Goel (Co-founder, former COO):** Wharton MBA, IIT Delhi. Head of Product and Operations for Revolut US, prior roles at Deutsche Börse and Samsung [15]. **Departed operational role in April 2026** to join the board as strategic advisor and launch a new venture [16]. This is a significant signal that warrants diligence — a co-founder leaving an operational role at the Series C stage, while the company is scaling, needs explanation beyond the standard "pursuing new opportunities" framing.

**Key hires:**

- **Mike Lemberger (COO, April 2026):** Former EVP and Chief Risk Officer for North America at Visa. Left Visa December 2024 [16][17]. This is a strong replacement signal — Visa's NA CRO brings both enterprise credibility and deep relationships with the exact buyer persona (bank CROs). The question is whether an executive from a card network can operate at startup pace.

- **Kazuki Nishiura (CTO):** Limited public background available. Needs diligence.

- **Matt Vega (Chief Fraud Strategist):** Former Fifth Third Bank and Early Warning Systems [7]. Operator credibility for the bank sales motion.

**Gaps:** The CTO's background is thin in public sources. For a company whose core differentiation is ML model quality, this matters. Also, Aditya Goel's departure creates a gap in the product-operations nexus — Zahid covers product, Mike covers operations, but the two functions need to be tightly coupled at this stage.

---

## 7. Competition

**AI-native entrants:**

- **Unit21** ($92M raised, 200+ institutions, Series C) [18]: No-code fraud and AML platform. Competes directly on the "unified platform" pitch. Unit21's strength is flexibility for compliance teams to build custom workflows. Sardine wins on data depth (Sonar consortium, behavioral biometrics) but Unit21 is a real contender in the mid-market fintech segment.

- **Alloy** ($42.4M revenue, $1.55B valuation, but growth has flattened in 2024) [19]: Identity decisioning platform. Stronger in KYC/onboarding, weaker in transaction-level fraud. Sardine's behavioral signals and real-time session analysis are differentiated against Alloy's identity-verification-first approach. Alloy's flat growth is a competitive opening.

- **Socure** ($744M funded) [20]: Identity verification and fraud prevention. Largest funded competitor. Eliminated 204K synthetic identities in 2023. Strongest in identity graph quality. Sardine differentiates on behavioral biometrics and the unified platform breadth (Socure does not do AML transaction monitoring or credit underwriting).

- **SentiLink** ($84M funded) [20]: Focused specifically on synthetic identity fraud. Point solution, not a platform. Sardine competes on breadth.

**Incumbents bolting on AI:**

- **NICE Actimize:** The 800-pound gorilla. Recently launched Xceed AI agents for FRAML automation [21]. Positioned as leading Luminary in Celent's 2025 Anti-Fraud Solutionscape. The risk is real — NICE has the enterprise bank installed base. But their architecture is pre-cloud, pre-real-time. Xceed agents are being added to a legacy transaction monitoring platform, not built from the data model up. Sardine wins on speed-to-deploy and on behavioral signal depth. NICE wins on enterprise procurement comfort.

- **Featurespace:** Adaptive behavioral analytics, 70+ major FIs, ARIC Risk Hub [21]. Strong in card fraud at tier-1 banks. Less presence in the fintech/BaaS segment where Sardine dominates. Claims 75% fraud blocking rates.

- **ComplyAdvantage:** Compliance-integrated, API-first. Strong with digital banks. Narrower than Sardine (no device intelligence, no behavioral biometrics, no credit underwriting).

**In-house builds:** Large banks (JPM, BofA, Wells) build internally. This is not a competitive threat for Sardine's ICP — Sardine sells to mid-market banks, fintechs, and payment processors that cannot afford to build. It becomes a threat only if Sardine tries to move upmarket to Tier 1 banks.

**Where Sardine wins:** Against point solutions — the consolidation value proposition is real. Against legacy incumbents in the fintech/BaaS segment — speed, modern architecture, and the Sonar consortium.

**Where Sardine loses:** Enterprise bank RFPs where NICE Actimize or Featurespace have an installed base and the procurement team values vendor tenure over product quality. Also loses when the buyer only needs one capability (e.g., identity verification alone → Socure; synthetic identity alone → SentiLink).

---

## 8. Traction

- **Revenue:** $23M as of October 2024, per Latka [22]. This is a third-party aggregation source; treat with appropriate caution.
- **ARR growth:** 130% year-over-year in 2024 [1][3].
- **Customer count:** 300+ enterprises at Series C announcement (February 2025) [1]; 400+ enterprises on the current about page [10]. Customer base "nearly doubled" in 2024 [1].
- **NDR:** Not disclosed.
- **Gross margin:** Not disclosed.
- **Devices profiled:** 5.4 billion (company-stated) [10].
- **Payments screened:** $1.3 trillion (company-stated) [10].
- **Geographic reach:** 70+ countries [1].
- **G2 rating:** 4.9/5 (company-stated) [10].
- **Team size:** 163 as of October 2024 [22].

**Named customers:** FIS, Ascensus, Deel, GoDaddy, X (formerly Twitter), Brex, Ramp, Airbase, Blockchain.com, Wealthsimple, Digit, Stearns Bank, Mattel, Moov, Novo, Edward Jones, Nubank, Intuit [1][7][9][20].

**Customer results (all company-stated from Series C blog and Geodesic investor memo):**
- Tier-1 bank: 42% wire fraud prevention [1]
- Neobank: 93.75% dispute reduction, 70% chargeback loss reduction [1]
- Expense platform: 60% ACH fraud reduction [1]
- Remittance provider: fraud detection precision improved from 15% to 70% [1]
- Consumer lender: 7.2x ROI [7]
- GoDaddy: vendor consolidation, rule deployment cut from days to hours [8]

**Unusually strong:** The logo quality is exceptional for a Series C company. FIS is the world's largest financial technology company. GoDaddy, Brex, Ramp, Deel, and Intuit are category leaders in their segments. The Sonar consortium membership list doubles as a customer reference list.

**Unusually weak:** No disclosed NDR, no disclosed gross margin, and the Latka revenue figure ($23M) implies the company is not yet at the ~$30M+ ARR threshold that would typically support a $660M valuation at top-decile multiples. The 130% growth rate partially explains the premium, but the unit economics remain opaque.

---

## 9. Top 3 risks, ranked

**1. Co-founder departure at a scaling inflection.**

Aditya Goel, co-founder and former COO, departed his operational role in April 2026 to launch a new venture [16]. At a company that just raised a $70M Series C and is scaling from ~$23M to $50M+ ARR, losing a co-founder is not cosmetic. Goel covered product operations and the US launch at Revolut — he was the operational backbone. The Mike Lemberger hire (Visa CRO) is a strong replacement signal, but Lemberger has been in the role for weeks, not months.

*What would have to be true for this to materialize:* Lemberger struggles with startup pace, internal teams lose cohesion during the transition, or Goel's departure signals deeper strategic disagreements among the founding team.

*What would kill it:* Lemberger demonstrates operational competence within 6 months, team retention remains stable, and Goel's departure was genuinely a planned succession.

**2. Incumbent counterattack from NICE Actimize.**

NICE Actimize launched Xceed AI agents in 2025 for FRAML automation [21] and was recognized as a leading Luminary in Celent's 2025 Anti-Fraud Solutionscape. They have the enterprise bank installed base, the procurement relationships, and the budget to invest in AI. If NICE ships agents that are "good enough" for the risk team and the procurement committee says "why take vendor risk on a startup?", Sardine's upmarket expansion stalls.

*What would have to be true:* NICE's Xceed agents reach parity on auto-resolution rates and false-positive reduction within 12–18 months. NICE successfully re-architects its data model for real-time behavioral signals.

*What would kill it:* NICE's legacy architecture prevents real-time behavioral analytics at session level (likely — this is a fundamental re-architecture, not a feature add). Sardine continues winning in fintech/BaaS where NICE has no presence, and uses those wins to build references for bank procurement committees.

**3. Credit underwriting as a distracting adjacency.**

Sardine's credit underwriting module competes with Taktile, Alloy, nCino, and Abrigo — each purpose-built for the lending workflow. Sardine's underwriting capability is thinner and newer. If the company splits focus between "world-class fraud platform" and "also a credit decisioning engine," it risks being mediocre at both instead of dominant in one.

*What would have to be true:* The credit underwriting module fails to gain standalone traction, absorbs disproportionate R&D, and confuses the sales narrative (is Sardine a fraud company or a risk platform?).

*What would kill it:* The credit underwriting module is positioned as a natural extension of fraud detection (screen the application for fraud → if clean, underwrite) and sold as a cross-sell to existing customers rather than requiring a separate sales motion. If NDR is strong (which would indicate cross-module expansion within existing accounts), this risk fades.

---

## 10. Diligence plan

**Week 1 calls:**

1. **GoDaddy (Arjun Ramakrishnan, Head of Risk for GoDaddy Payments):** Ask about vendor consolidation ROI, integration timeline, ongoing support quality, and whether they use the credit underwriting module.
2. **FIS or Ascensus Sonar consortium member:** Ask about data-sharing value — is the consortium actually improving their fraud detection, or is it a marketing feature? What data do they contribute, and what do they get back?
3. **A churned or declined customer:** Ask why they chose a competitor (Unit21, Socure, or in-house build) over Sardine. What was the deciding factor?
4. **Stearns Bank (first sponsor bank customer):** Ask about the compliance workflow — does Sardine satisfy examiner requirements? Has a bank examiner reviewed Sardine's output?

**CTO questions for Kazuki Nishiura:**

- How are the ML models retrained, and on what cadence? Is customer-specific data feeding back into model updates, or is the consortium model separate from individual customer models?
- What is the model architecture for behavioral biometrics — is it a proprietary model or fine-tuned foundation model? What happens when browsers/OS updates change the fingerprinting surface area?
- How does the credit underwriting module share signal with the fraud module, and vice versa? Is there a unified feature store, or are they separate ML pipelines?

**Open items for partner discussion:**

1. **Valuation question:** $660M post-money on ~$23M revenue (if the Latka figure is accurate) implies ~29x revenue. The 130% growth rate justifies a premium, but this is expensive for a company with undisclosed unit economics. What is the growth rate *today* (Q1 2026), and has it sustained or decelerated?

2. **Goel departure dynamics:** Was this a planned succession or a surprise? What is Goel's new venture — is it competitive? What does his continued board presence signal?

3. **Thesis positioning:** Is Sardine a compliance/fraud play (strong thesis fit) or is it becoming a horizontal risk platform (broader but less differentiated)? The credit underwriting adjacency matters for how we categorize the investment within the AI-native financial infrastructure thesis.

---

## 11. Rubric scoring

| Dimension | Score | Rationale |
|---|---|---|
| **AI centrality** | 5 | AI is the product — behavioral biometrics inference, ML-based fraud scoring, LLM-powered agents for KYC/SAR/disputes are load-bearing; remove the AI and nothing differentiating remains. |
| **Workflow depth** | 4 | Owns fraud detection, AML monitoring, KYC/KYB, chargeback management, and credit underwriting end-to-end — effectively replaces the role of multiple fraud analysts and compliance reviewers. Not a 5 because credit underwriting is still maturing. |
| **Data loop** | 5 | Sonar consortium creates a genuine network-effect data loop: more customers → more fraud signals → better models → more customers. 5.4B devices profiled and $1.3T in payments screened represent real data density. |
| **Founder-workflow fit** | 5 | All three co-founders built and ran fraud/risk operations at Coinbase, Revolut, PayPal, and Uber. Zahid literally invented the device intelligence product category at PayPal. This is the strongest founder-workflow fit in the market map. |
| **Traction signal** | 4 | $23M revenue (Latka, Oct 2024), 130% YoY growth, 400+ enterprise customers with elite logos (FIS, Intuit, GoDaddy, Brex, Deel). Not a 5 because NDR and gross margin are undisclosed, and the revenue figure is third-party sourced. |
| **SFV thesis fit** | 4 | Core product (fraud + compliance automation with AI agents) is squarely within the thesis. Credit underwriting adds a second thesis subsegment. Not a 5 because fraud prevention is adjacent to the deepest thesis conviction area (AI underwriting/back-office); it is infrastructure *for* financial services, but the financial workflow itself is risk/compliance rather than accounting, treasury, or lending. |

**Total: 27/30**

**Market map entry:**

| Company | Subsegment | Stage | AI-core? | Score | One-line take |
|---|---|---|---|---|---|
| Sardine ⭐ | Compliance / KYC/AML automation with agents | Series C | Yes | 27 | AI-native fraud and compliance platform with strongest data loop (Sonar consortium, 5.4B devices) and founder-workflow fit in the category; $660M valuation, 130% YoY growth, elite logos; co-founder departure and credit underwriting distraction risk warrant diligence. |

---

## 12. Sources

[1] "Sardine's $70M Funding: Innovating Financial Fraud Protection." https://www.sardine.ai/blog/series-c-announcement. Accessed: 2026-05-02.

[2] "Sardine AI valuation Series C — web search results citing $660M post-money." Multiple sources including Crunchbase and PitchBook references. Accessed: 2026-05-02.

[3] "Fraud Detection Startup Sardine AI Wraps Up $70M Series C." https://news.crunchbase.com/cybersecurity/fraud-detection-startup-sardine-ai-fundraise/. Accessed: 2026-05-02.

[4] "Sardine and Helix Partner to Deliver Real-Time Fraud Monitoring and Compliance Capabilities to Sponsor Banks." https://www.businesswire.com/news/home/20251217509767/en/Sardine-and-Helix-Partner-to-Deliver-Real-Time-Fraud-Monitoring-and-Compliance-Capabilities-to-Sponsor-Banks. Accessed: 2026-05-02.

[5] "Device and Behavior Intelligence for Smarter Fraud Detection." https://www.sardine.ai/device-and-behavior. Accessed: 2026-05-02.

[6] "How can Behavioral Biometrics prevent fraud?" https://www.sardine.ai/blog/how-can-behavioral-biometrics-prevent-fraud. Accessed: 2026-05-02.

[7] "A New Era in Fraud Prevention and Compliance: Sardine's Unified Data Fabric Tackles Evolving Threats." https://geodesiccap.com/insight/sardine-a-new-era-in-fraud-prevention-and-compliance/. Accessed: 2026-05-02.

[8] "Sardine AI Raises $70M to Make Fraud and Compliance Teams More Productive" (BusinessWire). https://www.businesswire.com/news/home/20250211169372/en/Sardine-AI-Raises-%2470M-to-Make-Fraud-and-Compliance-Teams-More-Productive. Accessed: 2026-05-02.

[9] "Credit Underwriting Platform for Real-Time Risk Decisions." https://www.sardine.ai/credit-underwriting. Accessed: 2026-05-02.

[10] "About Sardine." https://www.sardine.ai/about. Accessed: 2026-05-02.

[11] "Soups Ranjan, CEO at Sardine Biography." https://www.rblt.com/fintech-summit-biography/soups-ranjan. Accessed: 2026-05-02.

[12] "Talking with Soups Ranjan, cofounder and CEO of SardineAI." https://www.mckinsey.com/industries/financial-services/our-insights/talking-with-soups-ranjan-cofounder-and-ceo-of-sardineai. Accessed: 2026-05-02.

[13] "Zahid Shaikh — Co-Founder @ Sardine | Ex-PayPal, Uber." https://www.linkedin.com/in/zahidshaikh/. Accessed: 2026-05-02.

[14] "Zahid Shaikh — Head of Risk Products at Sardine." https://theorg.com/org/sardine/org-chart/zahid-shaikh. Accessed: 2026-05-02.

[15] "Adi G. — Cofounder @ Sardine | Early Revolut & PIMCO." https://www.linkedin.com/in/goeladitya/. Accessed: 2026-05-02.

[16] "Sardine Appoints Former Visa Executive Mike Lemberger as New Chief Operating Officer." https://www.thekeyexecutives.com/2026/04/23/sardine-appoints-former-visa-executive-mike-lemberger-as-new-chief-operating-officer/. Accessed: 2026-05-02.

[17] "Sardine hires former Visa exec Mike Lemberger as COO." https://www.fintechfutures.com/job-cuts-new-hires/sardine-hires-former-visa-exec-mike-lemberger-as-coo. Accessed: 2026-05-02.

[18] "Risk and compliance fintech Unit21 bags $45m Series C." https://www.fintechfutures.com/regulations-compliance/risk-and-compliance-fintech-unit21-bags-45m-series-c. Accessed: 2026-05-02.

[19] "How Alloy hit $42.4M revenue and 200 customers in 2024." https://getlatka.com/companies/alloy. Accessed: 2026-05-02.

[20] "Report: Sardine Business Breakdown & Founding Story." https://research.contrary.com/company/sardine. Accessed: 2026-05-02.

[21] "NICE Actimize Introduces Xceed AI Agents for Faster, Smarter Fraud and FinCrime Prevention." https://www.niceactimize.com/press-releases/nice-actimize-introduces-xceed-ai-agents-for-faster-smarter-fraud-and-fincrime-prevention-477. Accessed: 2026-05-02.

[22] "How Sardine hit $23M revenue with a 163 person team in 2024." https://getlatka.com/companies/sardine.ai. Accessed: 2026-05-02.

[23] "Sardine Partners with Modulr to Bring Real-Time, AI-Enabled Fraud Detection to Automated Payments." https://www.businesswire.com/news/home/20260429879311/en/Sardine-Partners-with-Modulr-to-Bring-Real-Time-AI-Enabled-Fraud-Detection-to-Automated-Payments. Accessed: 2026-05-02.

[24] "Sardine Raises $70 Million to Expand AI Risk Platform." https://www.pymnts.com/news/investment-tracker/2025/sardine-raises-70-million-dollars-expand-artificial-intelligence-risk-platform/. Accessed: 2026-05-02.

[25] "Ask a fintech founder: Soups Ranjan, Sardine." https://corporate.visa.com/en/sites/visa-perspectives/trends-insights/fintech-founder-soups-ranjan-sardine.html. Accessed: 2026-05-02.
