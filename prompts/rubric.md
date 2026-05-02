# Market Map Scoring Rubric

Each company in the market map is scored on six dimensions, 1–5 each. Total score out of 30.

| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| **AI centrality** | AI is a feature label on a traditional SaaS product | AI handles a meaningful but optional workflow | AI is the product; remove it and nothing is left |
| **Workflow depth** | Surface-level tool (notifications, summaries) | Owns one full workflow end-to-end | Owns multiple connected workflows; replaces a role |
| **Data loop** | No proprietary data accumulating | Some proprietary data, weak loop | Strong loop: more usage → better model → more usage |
| **Founder-workflow fit** | Founders have no domain background | Founders have adjacent domain experience | Founders have done the exact job being automated |
| **Traction signal** | Pre-revenue or pilots only | Real ARR, mixed retention | Real ARR with strong NDR and logo quality |
| **SFV thesis fit** | Tangential to the thesis | Clearly within the thesis | Central to the thesis; SFV should know this company |

## Output format

Each entry in the market map is a single row:
cat > prompts/rubric.md << 'EOF'
# Market Map Scoring Rubric

Each company in the market map is scored on six dimensions, 1–5 each. Total score out of 30.

| Dimension | 1 | 3 | 5 |
|---|---|---|---|
| **AI centrality** | AI is a feature label on a traditional SaaS product | AI handles a meaningful but optional workflow | AI is the product; remove it and nothing is left |
| **Workflow depth** | Surface-level tool (notifications, summaries) | Owns one full workflow end-to-end | Owns multiple connected workflows; replaces a role |
| **Data loop** | No proprietary data accumulating | Some proprietary data, weak loop | Strong loop: more usage → better model → more usage |
| **Founder-workflow fit** | Founders have no domain background | Founders have adjacent domain experience | Founders have done the exact job being automated |
| **Traction signal** | Pre-revenue or pilots only | Real ARR, mixed retention | Real ARR with strong NDR and logo quality |
| **SFV thesis fit** | Tangential to the thesis | Clearly within the thesis | Central to the thesis; SFV should know this company |

## Output format

Each entry in the market map is a single row:| Company | Subsegment | Stage | AI-core? | Score | One-line take | Sort the table by Score descending, then by Stage. Companies scoring 22+ get a star (⭐) — these are the ones to push the partner toward.
