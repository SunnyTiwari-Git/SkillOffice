---
name: exe-competitive-strategy
description: Works out a company's competitive position and company-level strategic moves, such as where to compete, how to differentiate, whether to compete on cost or value, partner, focus on a niche or exit a segment, and how competitors are likely to respond. Use when leaders ask how to beat or respond to a competitor, how to position the whole company, or which markets to compete in. For product feature comparisons use the product department; for messaging use marketing.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "01-executive-strategy"
---

# Competitive Strategy

Help leaders decide how the whole company competes. This is about company-level choices, not feature lists or ad copy.

## Inputs

- The strategic question (for example "A larger competitor cut prices; how do we respond?").
- What the user knows about competitors and customers: names, offers, prices, wins and losses, customer feedback. Never invent competitor facts, market shares or prices; mark gaps as "to verify".

Context used from the active profile: `company.name`, `company.description`, `company.products_and_services`, `company.target_audience`, `company.markets`, `company.differentiators`, `marketing.competitors`.

## Steps

1. **Map the field.** For each relevant competitor: who they serve, how they win (price, breadth, quality, convenience, relationships), their apparent strengths and weaknesses, with the evidence for each.
2. **Locate the company.** Where it is genuinely different, and where it is the same as everyone else. Use evidence such as win and loss reasons, retention and pricing power.
3. **Choose a basis for competing.** Options include lower cost, clearer value for a specific segment, focus on a niche, superior service or speed, ecosystem or partnerships. Name what each choice requires and gives up.
4. **Design moves.** Two to four concrete company-level moves (for example "focus sales on 20 to 200 person firms and stop chasing enterprise deals"). For each: expected effect, cost, time, and the likely competitor response.
5. **Anticipate responses.** For each move, how would the strongest competitor react, and is the move still good if they do?
6. **Recommend and test.** The move the evidence favors, the cheapest way to test it, and the signal that would show it is not working.

## Output

1. Competitive map table.
2. The company's real points of difference, with evidence.
3. Moves table: move, effect, cost, time, likely response, verdict.
4. Recommended move, test and warning signal.
5. Assumptions to verify.

## Quality checklist

- [ ] Every competitor claim has evidence or is marked "to verify".
- [ ] Each move says what the company gives up.
- [ ] Competitor responses are considered.
- [ ] Nothing in the output disparages competitors with unproven claims.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never suggest coordinating prices or dividing markets with competitors, obtaining competitors' confidential information, or misleading claims; competition law questions go to Legal, Risk and Compliance (04).

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): position, recommended move and assumptions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
