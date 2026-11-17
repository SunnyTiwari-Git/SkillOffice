---
name: exe-board-update
description: Drafts a board, investor or lender update covering performance against plan, highlights, challenges, cash and runway, key metrics, decisions and asks of the board. Flags every forward-looking statement and every figure for finance and legal review and never sends anything. Use when a founder or CEO needs a monthly or quarterly board update, an investor letter or a lender report.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "01-executive-strategy"
---

# Board Update

Draft a clear, honest update that respects the board's time and tells them what they need to know and what is asked of them.

> **Draft for review.** Figures and forward-looking statements must be checked by finance and legal before this leaves the company. This is not financial, investment or legal advice.

## Inputs

- The audience (board, investors, lender), the period and the format they expect.
- Figures from the user or from `exe-kpi-review`: revenue, margin, cash, burn, runway, key metrics, against plan and prior period. Never invent a figure; mark gaps as "to be provided".
- Highlights, challenges, decisions made, decisions needed.

Context used from the active profile: `company.name`, `company.description`, `regional.currency`, `regional.date_format`, `regional.jurisdictions`.

## Ask first

Ask these in one round before drafting, skipping any that the request or the figures provided already answer.

1. **Who receives it?** a) the board of directors; b) investors; c) a lender or bank; d) other.
2. **What format?** a) a short monthly update, about one page; b) a full quarterly update with an appendix of figures; c) a memo for the board pack ahead of a meeting; d) other.
3. **How many metrics?** a) five to eight headline metrics; b) a full table against plan and prior period; c) other.
4. **What are you asking of the board?** a) nothing this period, information only; b) decisions to approve; c) help with introductions, hiring or fundraising; d) other.
5. **What voice?** a) brief and factual, numbers first; b) a narrative letter from the CEO with the figures in a table; c) other.

Whatever the voice, bad news stays in the first half. These answers apply to this request only.

## Steps

1. **Headline.** Run the [Ask first](#ask-first) questions, then write three sentences: how the period went against plan, the biggest win, the biggest concern.
2. **Key metrics.** A table: metric, this period, plan, prior period, change, short comment. Every figure has its source.
3. **Highlights.** Three to five, each with evidence.
4. **Challenges.** State bad news plainly and early, with what is being done. Boards lose trust when problems are buried.
5. **Cash and runway.** Cash at period end, monthly net burn, runway in months, showing the calculation (runway = cash / average monthly net burn). Mark any projection as forward-looking.
6. **Decisions made and decisions needed.** For each ask of the board: context, options, recommendation and deadline.
7. **Outlook.** Next period priorities. Mark every statement about the future as forward-looking and avoid promises.
8. **Review flags.** End with a list: each forward-looking statement, each figure needing finance confirmation, anything that may need legal review (for example statements to investors, material non-public information).

See [the board update guide](references/board-update-guide.md) for structure and tone.

## Output

The draft update, followed by the review flags list. Mark the top: "Draft. Not reviewed by finance or legal. Do not send."

## Quality checklist

- [ ] Every figure has a source or is marked "to be provided".
- [ ] Runway calculation shown.
- [ ] Bad news appears in the first half, not the last line.
- [ ] Every forward-looking statement is flagged.
- [ ] Asks of the board are explicit.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never send, post or share the update. Material non-public information is used only as needed and never stored in memory. Fundraising, debt and equity terms go to Legal (04) and Finance (03).

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): headline, asks and the review flags. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
