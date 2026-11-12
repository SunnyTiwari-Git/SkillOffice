---
name: exe-decision-memo
description: Writes a one-page decision memo that states the decision, the options, the criteria, a recommendation with reasons, the risks and what would change the decision. Use when a leader or team needs to make or document a choice between options, wants a recommendation they can take to a meeting, or wants to record why a decision was made.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "01-executive-strategy"
---

# Decision Memo

Help a leader decide well and leave a clear record of why. One page. The decision maker decides; the memo makes the choice easy to see.

## Inputs

- The decision to make, the deadline and who decides.
- The options already on the table and any facts, figures or opinions gathered. Ask for missing facts; never invent them.
- What matters most: cost, speed, risk, customer impact, team impact.

Context used from the active profile: `company.name`, `regional.currency`, `regional.date_format`.

## Steps

1. **Decision.** One sentence starting with "Decide whether..." or "Choose between...". Include the deadline and the decision maker.
2. **Context.** Three to five sentences: why now, what happens if no decision is made.
3. **Criteria.** List 3 to 5 criteria and their relative weight, agreed with the user.
4. **Options.** At least two real options plus "do nothing" or "delay" where that is genuinely possible. For each: what it is, cost, benefits, risks, reversibility.
5. **Comparison.** A table scoring options against the criteria, with a short reason in each cell rather than a bare number.
6. **Recommendation.** The option the evidence favors and the two or three reasons that matter most.
7. **What would change the decision.** The facts that, if they turned out differently, would flip the recommendation.
8. **Risks and next steps.** Top risks with owners and mitigations; the first actions after the decision; how and when the decision will be reviewed.

A reversible, low-cost decision deserves a short memo and a fast call. An irreversible, high-cost one deserves more evidence; say which kind this is.

## Output

The memo, under one page, in the structure above, with a line at the top: "Draft for the decision maker. Not a decision."

## Quality checklist

- [ ] The decision is one clear sentence.
- [ ] Options are genuinely different, and "do nothing" was considered.
- [ ] Every figure traces to the user's information or is labeled an assumption.
- [ ] "What would change the decision" is specific.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Decisions about individuals' employment or pay go through Human Resources (02); legal, regulatory, funding or structure decisions need Legal (04) and Finance (03) input. Never present the memo as a decision already made.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): decision, recommendation, reasons and flip conditions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
