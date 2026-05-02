# Casca — IC Memo

**Date:** 2026-05-02
**Analyst:** sfv-ic-agent
**Stage / Round:** Series A
**Ask:** $29M Series A; post-money valuation not disclosed [1]

---

## 1. Recommendation

**PURSUE.** Confidence: **H.** Casca is the AI-native loan origination system that the #1 and #2 SBA 7(a) lenders chose to deploy in production — not as a pilot, but as core infrastructure for a new origination channel — and it landed a fourth top-10 SBA lender (Celtic Bank) eight months after closing the round.

---

## 2. Thesis fit

**Subsegment:** AI underwriting and credit decisioning — specifically, AI-native loan origination for FDIC-insured banks and SBA lenders in the small-dollar commercial segment ($50K–$350K).

**What changed in the last 18 months:** The economics of small-dollar SBA lending broke. Originating a $150K SBA 7(a) loan has historically required roughly the same underwriting labor as a $2M commercial loan — document collection, financial spreading, SBA compliance paperwork (Forms 1919, 413, 159), KYB checks, credit narrative. At those unit economics, most banks either declined sub-$350K deals or pushed borrowers toward merchant cash advances at 40–80% effective APR. Live Oak Bank publicly stated it had been turning away these loans until deploying Casca [3].

What unlocked the opportunity was not "LLMs got better" generically. It was three specific capability thresholds crossing in 2024–2025: (1) document understanding models became accurate enough on messy financial documents — hand-annotated tax returns, multi-entity bank statements, amendments — to clear the bar for human-in-the-loop production use; (2) conversational AI reached the quality needed to handle borrower intake without embarrassing the bank's brand; and (3) structured extraction from government forms (SBA-specific) became reliable enough to automate compliance workflows that previously required specialized staff.

The buyer signal is unambiguous: Live Oak (#1 SBA 7(a) by dollar volume) and Huntington (#2 by origination count) both invested in and deployed the product [1][3]. That is not a market looking for a solution — that is a market that found one and is moving.

**SFV thesis alignment:** Central. This is the canonical example of what "AI-native financial infrastructure" means: a company that could not exist without LLMs, selling to regulated financial institutions, replacing back-office and middle-office labor with AI agents that do the load-bearing work.

---

## 3. Product

Casca is an end-to-end loan origination system for commercial and SBA lending. The product replaces or displaces the bank's existing LOS for small-dollar origination. The workflow:

1. **Borrower intake:** An AI loan assistant ("Sarah" / "Leo") handles the initial application, asks follow-up questions, pre-qualifies borrowers, and follows up on incomplete applications — delivering responses in minutes rather than the 24–72 hours typical of manual loan officer follow-up [5][9].

2. **Document collection and processing:** The platform ingests 100+ document types (tax returns, bank statements, financial statements, rent rolls, SBA forms) and can process up to 10,000 pages in five minutes [company-stated, 7]. Automated extraction feeds structured data into the underwriting workflow.

3. **Credit analysis and financial spreading:** Automated financial ratio calculations, cash flow analysis, and credit narrative generation. The system runs 40+ KYB checks and integrates with 30+ third-party data providers [11].

4. **Compliance automation:** SBA-specific form automation (1919, 413, 159) converted into step-by-step digital workflows [6]. Compliance policies are integrated at the platform level with human-in-the-loop review.

5. **Post-origination monitoring:** Risk rating adjustments, annual/quarterly reviews, and ongoing borrower performance tracking [3].

**AI core or cosmetic? — AI is core.** Remove the AI and nothing is left. There is no traditional rules engine underneath. The document understanding is neural — it handles the messy, unstructured financial documents that deterministic OCR cannot reliably parse (hand-annotated tax returns, foreign-language statements, multi-entity structures). The conversational intake agent is generative — it cannot be replaced by a decision tree. The credit analysis automates judgment tasks (narrative generation, ratio interpretation in context) that require language understanding. Bankwell's CIO explicitly noted that human review is still required on every decision due to hallucination risk [9] — which is honest and appropriate. The AI is doing the heavy lifting; the human is the check, not the engine.

---

## 4. Defensibility

**The real moat: distribution lock-in via customer-investors.**

The conventional moat analysis would point to a "proprietary data loop" — more loans processed means better models means more loans processed. That loop exists in principle, but it is too early to verify whether model retraining is actually happening on customer data (as opposed to data sitting in a warehouse). The over-claimed moat in this space is exactly this kind of loop; I am skeptical until diligence confirms the mechanism.

The actual moat — the thing a well-funded competitor would need 18 months to replicate — is the distribution lock-in Casca has built by converting its flagship customers into investors. Live Oak, Huntington, and Bankwell are not just customers; they are Series A investors [1]. Celtic Bank, the newest deployment, is a top-10 SBA lender [6]. This creates three compounding effects:

1. **Switching cost is economic and political.** A bank that invested in Casca's round has board-level visibility into the relationship. Ripping it out requires explaining the write-off to stakeholders.

2. **Co-development advantage.** Casca is co-designing the Live Oak Express product with Live Oak [4]. That joint development creates product-market fit at a depth that a cold-start competitor cannot match.

3. **Reference lock.** When the next top-25 SBA lender evaluates AI origination, Casca's reference list is Live Oak, Huntington, Celtic, and Bankwell. A competitor would need to land a comparably credible first logo — and the best logos are already taken.

A well-funded entrant could replicate the technology in 12 months. They cannot replicate the customer roster or the co-development relationships.

---

## 5. Market

**Budget displacement, not TAM multiplication.** Where does this revenue come from in the buyer's P&L?

The immediate budget being displaced is **manual underwriting labor cost on small-dollar commercial and SBA loans.** At a community bank or mid-size lender, the SBA lending team consists of loan officers, credit analysts, and compliance staff. A $150K SBA 7(a) loan requires the same credit memo, the same document chase, the same SBA form preparation as a much larger deal. The cost-per-loan on sub-$350K originations is often $3K–$8K in fully-loaded labor — making the unit economics negative for many lenders. The budget owner is the **head of SBA lending or the chief lending officer**, reporting to the COO or CEO at a community bank, or a business-line head at a larger institution.

The second budget line is **revenue recovery on loans the bank was declining.** Live Oak explicitly stated it was not originating sub-$350K SBA loans prior to Casca because the underwriting cost couldn't be justified [3]. If Casca enables origination of loans the bank was turning away, the ROI math is not "cost reduction" — it is "new revenue line."

Live Oak's stated target for the Express program is $750M in annual originations "over the next few years," and the program generated $56M in Q1 2026, up from $38M in Q4 2025 [4]. The secondary-market premium on these smaller-dollar SBA loans is 9–13% [4], meaning $750M in originations could produce $67M–$97M in gain-on-sale revenue for Live Oak alone. Casca captures a fraction of that value through SaaS fees.

**Sanity-check sizing (top-down, stated honestly):** There are approximately 4,500 FDIC-insured commercial banks and 5,000 credit unions in the U.S. If the addressable set is the ~500 institutions actively originating SBA loans at scale, and a reasonable ACV ranges from low six figures to mid-six figures depending on volume, the revenue ceiling is $50M–$250M ARR. To hit the high end, Casca would need to: (a) expand beyond SBA into conventional commercial lending, (b) serve as the primary LOS (not a supplemental channel), and (c) move up-market into larger regional and national banks. The Live Oak and Huntington deployments suggest (b) and (c) are in motion.

---

## 6. Team

**Founder-workflow fit: Strong on infrastructure, adjacent on lending operations.**

**Lukas Haffer (CEO, co-founder):** Stanford GSB, Arjay-Miller Scholar (top 10%) [2]. Chief of Staff for Europe at Avaloq, a core banking software provider ($2.2B exit) [2]. Prior: VC scout at Peterson Ventures, VC fellow at Bee Partners, banking IT consultant at Senacor Technologies [14]. Met co-founder at Stanford while conducting ML research. Haffer has deep banking infrastructure experience — he has seen core banking systems from the inside, understands the integration pain, and knows how bank IT procurement works. He has not, however, been a loan officer or run a credit team. The infrastructure fit is strong; the lending-operations fit is adjacent, not exact.

**Isaiah Williams (CTO, co-founder):** Stanford CS with AI specialization [2]. Senior ML Engineer at EliseAI (conversational AI company, $1B+ valuation) where he orchestrated ML systems for 20,000+ daily active users [2][14]. Prior: ML Engineer at EdgeTheory (document summarization, NLP). Williams brings production conversational AI experience — not academic, not demo-stage. Building production-grade, high-reliability ML systems at EliseAI scale is directly relevant to building an AI-native LOS that banks trust.

**Key hires:** Adlon Adams (COO), Blake Dunson (Head of Security & Reliability), Serhii Nechyporchuk (Founding ML Engineer), Raghav Ramasamy (Founding AI Engineer) [11]. The engineering team skews heavily ML/AI, which is the right allocation at this stage.

**Team size:** 28 as of the YC listing [2].

**Gaps:** No named Chief Revenue Officer or VP Sales. The go-to-market appears founder-led with two account executives [11]. At 28 people with $29M in Series A capital, this is a hiring-intensive phase. The absence of a seasoned enterprise sales leader is a gap worth probing — SBA lending is a small, relationship-driven market where the right seller with existing bank relationships can compress sales cycles dramatically.

**Departures:** No publicly reported executive departures since founding.

---

## 7. Competition

**AI-native entrants:**
- No direct AI-native LOS competitor has achieved comparable logo quality. The closest are early-stage startups targeting adjacent segments (consumer lending, embedded finance) rather than SBA/commercial origination for FDIC-insured banks. Biz2X has AI capabilities in small business lending and SBA workflows, but positions as a broader lending platform rather than an AI-native rebuild [Biz2X website].

**Incumbents bolting on AI:**
- **nCino** (public, built on Salesforce): The dominant commercial LOS at mid-size and large banks. Announced AI features in 2025 for mortgage (AUS Smart Tasks, Mortgage Advisor chatbot) but has not shipped comparable AI-native commercial lending automation [nCino press releases]. nCino's core data model was architected pre-LLM. Adding AI features to the existing workflow is fundamentally different from rebuilding the workflow around AI. The Salesforce dependency constrains architectural flexibility.
- **Numerated / Moody's Analytics Lending Suite:** Numerated (acquired by Moody's, January 2024 partnership announcement) has processed $50B+ in lending volume and serves 500+ institutions [BusinessWire]. This is the most credible incumbent threat — Moody's distribution into bank risk departments is real. However, the product is a digitized traditional workflow with AI features added, not an AI-native rearchitecture.

**In-house builds at the buyer:**
- The largest banks (JPM, Wells, BofA) will build internally. Casca is not competing for those accounts. The risk is that a top-20 bank builds an internal tool and then the vendor it used to build it (Palantir, Accenture, etc.) productizes the result. This is a 3–5 year risk, not a 12-month risk.

**Where Casca wins:** Against nCino and Numerated on small-dollar SBA origination, where the incumbent products require the same manual effort as larger loans. Casca's speed advantage (application-to-funding in 7 days vs. 90+ days industry average [4][10]) is not incremental — it is structural.

**Where Casca could lose:** On large-dollar conventional commercial lending where the bank already has nCino deployed and the switching cost is high. Casca's beachhead is SBA; the question is whether it can expand into the broader commercial LOS market where nCino is entrenched.

---

## 8. Traction

**Funding:** $3.9M pre-seed (February 2024, led by Peterson Ventures) [5]. $29M Series A (August 2025, led by Canapi Ventures) [1]. Total raised: $33M [1].

**ARR:** Not disclosed.

**Growth rate:** Not disclosed.

**NDR:** Not disclosed.

**Named customers:**
- **Live Oak Bank** — #1 SBA 7(a) lender by dollar volume. Co-designing Live Oak Express for sub-$350K SBA loans. Q1 2026 originations: $56M, up from $38M in Q4 2025. Target: $750M annual originations [4]. Investor.
- **Huntington National Bank** — #2 SBA 7(a) originator by volume. Deploying Casca in 2026 for SBA 7(a) origination [3]. Investor.
- **Bankwell Bank** — First customer (Connecticut, $3.5B assets). Conversion rates increased from below 10% to as high as 81% [3]. Investor.
- **Celtic Bank** — Top-10 SBA lender ($4.8B assets). Selected Casca April 2026 for SBA lending program. Application-to-funding target: ~7 days [6][10].
- **Alliance Funding Group** — Investor; deployment details not disclosed [1].

**Pipeline:** Not disclosed, but CEO noted "incredible demand" [4].

**Awards:** Best of Show at FinovateSpring 2024 [8]. Banking and Financial Services Winner, 2026 BIG Innovation Awards [13].

**Unusually strong signals:**
- Landing the #1 and #2 SBA 7(a) lenders as both customers and investors within 15 months of the pre-seed is exceptional. These are not community banks experimenting — they are the market-defining institutions in SBA lending.
- Bankwell's conversion rate improvement (sub-10% to 81%) is a transformative metric if it holds at scale [3].
- Live Oak Express Q1 2026 originations growing 47% quarter-over-quarter ($38M to $56M) is strong early traction for a new channel [4].
- Celtic Bank signed post-Series A (April 2026), indicating continued momentum [6].

**Unusually weak signals:**
- No disclosed ARR or revenue metrics. For a $29M Series A, this is notable — either the company is pre-scale revenue (which the customer deployments suggest is unlikely) or chose not to disclose.
- Team of 28 with only two named account executives [11]. Enterprise sales capacity may constrain growth.

---

## 9. Top 3 risks, ranked

**1. Customer-investor entanglement creates a captive distribution ceiling.**

Live Oak, Huntington, and Bankwell are customers, investors, and in Live Oak's case, co-development partners. This is the strongest traction signal in the memo — but it is also the most dangerous structural risk. If Casca's revenue is concentrated in customer-investors who negotiated favorable terms as part of their investment, the company may have high logo quality but thin margins. The risk materializes if: (a) Casca's pricing to investor-customers is substantially below market; (b) these customers represent >70% of revenue; or (c) expansion beyond the investor-customer base proves significantly harder (i.e., the product was co-designed so tightly for Live Oak's workflow that it doesn't generalize). The kill shot: a competitive bank evaluating Casca may hesitate if they view it as "Live Oak's tool."

**Diligence question:** What percentage of revenue comes from investor-customers? What are the pricing terms relative to non-investor customers?

**2. Fair lending and regulatory risk in AI-assisted credit decisions.**

Casca's AI is in the origination workflow — not making final credit decisions (humans retain authority [3][9]), but automating pre-qualification, document analysis, and credit narrative generation. The regulatory surface area is real. The CFPB, OCC, and FDIC have all issued guidance on AI in credit decisions. A bank examiner can fail a deployment over fair lending concerns even if the AI is only used for document processing, because the document-processing outputs influence credit decisions downstream. Bankwell's CIO flagged hallucination risk as the key concern "at scale" [9]. The risk materializes if: (a) a regulator examines a Casca-originated loan and finds the AI output influenced an adverse action without adequate adverse-action explanation; or (b) a disparate-impact analysis reveals that AI-assisted origination produces different approval rates across protected classes. Casca emphasizes "responsible AI" and human-in-the-loop [5][11], but the regulatory bar is rising, not falling.

**Diligence question:** Has any bank examiner reviewed a Casca deployment? What does the model risk management (MRM) documentation look like?

**3. nCino wakes up and ships an AI-native commercial lending module.**

nCino is a $3B+ public company with 1,800+ bank customers. Its commercial LOS is the market standard at mid-size and large banks. Today, nCino's AI efforts are focused on mortgage (Mortgage Advisor, AUS Smart Tasks) — not commercial/SBA. But nCino has the distribution, the bank relationships, and the capital to build or acquire an AI-native commercial origination module. The risk materializes if: (a) nCino ships a credible AI-native SBA module within 18 months; or (b) nCino acquires a company like Casca (which would be a fine outcome for investors, but a different thesis than independent scale). The counter-argument: nCino is built on Salesforce, and its core data model was not designed for AI-native workflows. Rebuilding the commercial lending module on a new architecture while maintaining backward compatibility with 1,800 customers is a multi-year project. Casca's window is real, but it is not infinite.

**Diligence question:** What is nCino's commercial lending AI roadmap? Have any Casca customers evaluated nCino's AI features and rejected them?

---

## 10. Diligence plan

**Week one calls:**

1. **Ryan Hildebrand, Chief Innovation Officer, Bankwell Bank.** Bankwell is the first customer and longest-tenured deployment. Key questions: What does the 81% conversion rate look like 12+ months in? Has it sustained? What are the failure modes at scale — where does the AI break? What is the hallucination rate in practice? Would you deploy Casca for non-SBA commercial lending?

2. **BJ Losch, President, Live Oak Bank.** Key questions: How is Live Oak Express performing vs. internal projections? What percentage of Express originations required manual intervention? What did the bank examiner say about the AI-assisted workflow? How integrated is Casca into Live Oak's core systems vs. running as a standalone channel?

3. **Todd Boren, President/COO, Celtic Bank.** Celtic signed post-Series A and post-deployment at Live Oak/Huntington. Key questions: Why Casca over nCino or Numerated/Moody's? What was the competitive evaluation process? How long did deployment actually take? What are the contract terms (pricing model, commitment)?

4. **David O'Connell, O'Connell Lending Insights (industry analyst).** Quoted in American Banker on AI in business lending [4]. Key questions: How does Casca compare to what he sees from nCino and Moody's/Numerated? Is the SBA niche defensible or a stepping stone? Which banks are building internally?

**CTO diligence questions for Isaiah Williams:**
- Walk through the model architecture for document understanding. Which document types still require human fallback? What is the accuracy rate on tax returns with amendments?
- How is customer data used for model improvement? Is there a shared model across customers, or per-customer fine-tuning? What is the MRM framework?
- What is the latency profile for the credit analysis workflow end-to-end?
- How does the platform handle edge cases — multi-entity structures, foreign-language documents, incomplete financials?

**Three open items for partner discussion:**
1. **Valuation question.** Post-money was not disclosed. At $29M Series A with this logo quality, the valuation is likely aggressive. Need to size the opportunity relative to the ask.
2. **Expansion vs. niche question.** SBA lending is a strong beachhead but a narrow market. The investment thesis requires Casca to expand into broader commercial lending. How confident are we in that expansion given the product is heavily SBA-optimized?
3. **Customer-investor dynamics.** The customer-investor overlap is a strength for traction but a question mark for independence. Should we be concerned about governance influence or pricing distortion?

---

## 11. Rubric scoring

| Dimension | Score | Rationale |
|---|---|---|
| **AI centrality** | 5 | AI is the product — document understanding, conversational intake, credit analysis, and compliance automation are all neural; remove the AI and the platform ceases to function. |
| **Workflow depth** | 4 | Owns the full origination workflow end-to-end (intake through post-origination monitoring), but has not yet expanded into adjacent workflows like servicing, collections, or portfolio management at scale. |
| **Data loop** | 3 | Processes real loan data across multiple institutions, which should enable model improvement — but no public evidence that a feedback loop is operationalized. Claim is plausible, not proven. |
| **Founder-workflow fit** | 4 | Haffer has deep banking infrastructure experience (Avaloq, Senacor) and Williams built production conversational AI at EliseAI. Neither has been a loan officer or run a credit team, but the infrastructure-plus-ML combination is the right founding DNA for a platform company. One point short of 5 because neither founder has done the exact job being automated. |
| **Traction signal** | 5 | Four named customers including the #1 and #2 SBA 7(a) lenders. Customer-investors. Bankwell conversion rate data. Live Oak Express origination volume growing QoQ. Celtic Bank signed post-round. Best of Show at Finovate. This is exceptional traction for a Series A. |
| **SFV thesis fit** | 5 | Central to the AI-native financial infrastructure thesis. SFV should know this company — it is the clearest example of AI replacing back-office lending labor at FDIC-insured banks. |

**Total: 26/30**

**Market map entry:**

| Company | Subsegment | Stage | AI-core? | Score | One-line take |
|---|---|---|---|---|---|
| Casca ⭐ | AI underwriting / credit decisioning (SMB/SBA) | Series A | Yes | 26 | AI-native LOS deployed at the #1 and #2 SBA 7(a) lenders; strongest logo quality at Series A in the market; expansion beyond SBA is the key question. |

---

## 12. Sources

[1] "AI-Native Loan Origination Platform Casca Raises $29 Million to Replace Legacy Lending." PR Newswire. https://www.prnewswire.com/news-releases/ai-native-loan-origination-platform-casca-raises-29-million-to-replace-legacy-lending-302533000.html. Accessed: 2026-05-02.

[2] "Casca: Make Banking Magical." Y Combinator. https://www.ycombinator.com/companies/casca. Accessed: 2026-05-02.

[3] "Huntington, Live Oak to invest in, deploy gen AI-based lending." American Banker. https://www.americanbanker.com/news/huntington-live-oak-to-invest-in-deploy-gen-ai-based-lending. Accessed: 2026-05-02.

[4] "How AI is quickly overhauling one segment of SBA lending." American Banker. https://www.americanbanker.com/news/how-ai-is-quickly-overhauling-one-segment-of-sba-lending. Accessed: 2026-05-02.

[5] "Cascading AI Secures $3.9 Million in Pre-Seed Funding to Revolutionize the Banking Industry with its AI-native Loan Origination System." PR Newswire. https://www.prnewswire.com/news-releases/cascading-ai-secures-3-9-million-in-pre-seed-funding-to-revolutionize-the-banking-industry-with-its-ai-native-loan-origination-system-302058481.html. Accessed: 2026-05-02.

[6] "Casca Selected by Celtic Bank to Power Its SBA Lending Program." PR Newswire. https://www.prnewswire.com/news-releases/casca-selected-by-celtic-bank-to-power-its-sba-lending-program-302757486.html. Accessed: 2026-05-02.

[7] "Casca raises $29M to scale AI lending platform." SiliconANGLE. https://siliconangle.com/2025/08/19/casca-gets-29m-bring-ai-native-loan-origination-tech-local-banks/. Accessed: 2026-05-02.

[8] "Casca Raises $29 Million Series A for AI Loan Origination." Finovate. https://finovate.com/casca-raises-29-million-series-a-for-ai-loan-origination/. Accessed: 2026-05-02.

[9] "AI-Native Loan Origination." Fintech Takes. https://fintechtakes.com/articles/2024-02-12/ai-native-loan-origination/. Accessed: 2026-05-02.

[10] "Celtic Bank Taps Casca AI to Cut SBA Loan Origination to 7 Days." Self Employed. https://www.selfemployed.com/news/casca-celtic-bank-sba-ai-lending-2026/. Accessed: 2026-05-02.

[11] "About Us — Leading AI Lending Technology." Casca. https://www.cascading.ai/company/company. Accessed: 2026-05-02.

[12] "Casca Series A Announcement." Casca. https://www.cascading.ai/company/series-a-announcement. Accessed: 2026-05-02.

[13] "Casca Named Banking and Financial Services Winner in the 2026 BIG Innovation Awards." PR Newswire. https://www.prnewswire.com/news-releases/casca-named-banking-and-financial-services-winner-in-the-2026-big-innovation-awards-302662845.html. Accessed: 2026-05-02.

[14] "Casca." Unicorner Newsletter. https://read.unicorner.news/p/casca. Accessed: 2026-05-02.

[15] "AI lender Casca secures $29m Series A funding." Fintech Global. https://fintech.global/2025/08/20/ai-lender-casca-secures-29m-series-a-funding/. Accessed: 2026-05-02.

[16] "Moody's Analytics Taps Numerated to Deliver AI-powered, Commercial End-to-End Loan Origination System." BusinessWire. https://www.businesswire.com/news/home/20240123062274/en/Moodys-Analytics-Taps-Numerated-to-Deliver-AI-powered-Commercial-End-to-End-Loan-Origination-System. Accessed: 2026-05-02.
