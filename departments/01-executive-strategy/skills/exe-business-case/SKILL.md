---
name: exe-business-case
description: Builds a business case for an investment or initiative with costs, benefits, risks, payback and a sensitivity range, using figures the user provides or clearly labeled assumptions. In review mode it checks an existing business case and returns findings. Use when the user needs to justify a project, hire, tool, expansion or investment, compare it with doing nothing, or check a business case before approval.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "01-executive-strategy"
---

# Business Case

Help leaders decide whether an initiative is worth it. Show the money, the risks and how sure we are. Two modes: **build** a new case, or **review** an existing one.

> Figures here support a decision. They are not professional financial or investment advice. Finance should check the numbers before approval.

## Inputs

- The initiative, the decision maker and the decision deadline.
- Cost and benefit estimates from the user, the time horizon, and the company's hurdle rate or payback rule if it has one.
- Review mode: the existing business case document.

Context used from the active profile: `company.name`, `company.size`, `regional.currency`, `regional.date_format`.

## Build mode

1. **State the decision** in one line and the alternatives, always including "do nothing".
2. **List costs**: one-off (purchase, build, setup) and ongoing (licenses, people, maintenance), by period.
3. **List benefits**: revenue gained, costs avoided, risk reduced. Count each benefit once. Show how each is estimated.
4. **Label every figure**: "from user data" or "assumption to verify". Never invent market sizes, prices or conversion rates.
5. **Calculate**: net benefit per period, cumulative cash, payback period and, if the user wants it, net present value at their rate. Show the working. See [the calculation guide](references/calculations.md).
6. **Sensitivity**: low, base and high cases for the two or three assumptions that matter most. Say which assumption flips the decision.
7. **Risks and dependencies**: what could go wrong, how likely, impact, mitigation and owner.
8. **Recommendation**: proceed, proceed with conditions, pilot first, or do not proceed, with reasons. The decision maker decides.

## Review mode

Check the existing case and report findings in the shared format of the `skilloffice-core` findings protocol (`references/protocols/findings.md`), source_skill `01-executive-strategy/exe-business-case`:

- critical: arithmetic errors that change the decision, benefits counted twice, a commitment made without approval.
- high: no "do nothing" baseline, missing ongoing costs, unlabeled assumptions driving the result, no sensitivity range.
- medium: unclear timing, missing risk owners, optimistic adoption without evidence.
- low and info: presentation and clarity.

Recalculate the key figures and show where they differ.

## Output

Build mode: decision, options, cost and benefit table, calculations with working, sensitivity table, risks, recommendation. Review mode: verdict, findings, recalculated figures, passed checks.

## Quality checklist

- [ ] Totals recalculated and correct.
- [ ] Every figure labeled as user data or assumption.
- [ ] "Do nothing" included.
- [ ] The assumption that flips the decision is named.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Funding, debt, equity and acquisition cases need Finance (03) and Legal (04) review.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): result, payback, key assumptions and findings by severity. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
