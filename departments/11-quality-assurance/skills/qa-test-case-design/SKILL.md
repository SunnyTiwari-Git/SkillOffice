---
name: qa-test-case-design
description: "Designs test cases from requirements using proven techniques: equivalence partitioning, boundary value analysis, decision tables, state transition testing and pairwise combinations. Produces numbered test cases with preconditions, steps, test data and expected results, traced to requirements. Use when asked to \"write test cases\", \"what should we test for this field or rule\", \"design tests for this feature\", or to find gaps in existing cases."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Test Case Design

Good test cases come from techniques, not inspiration. Each technique finds a different kind of bug while keeping the number of cases small. Tool agnostic: the cases can be run by hand or automated in any framework.

Load only the context this skill declares: `technical.testing`, `regional.currency`, `regional.date_format`, `regional.units`.

## Inputs

- Requirements, user stories or acceptance criteria for the feature.
- Business rules, field definitions, limits and states.
- Existing test cases, if the task is to find gaps.

If a rule is ambiguous (for example "orders over 100 get free shipping": is 100 included?), list it as an open question and design cases for both readings, marked clearly.

## Pick techniques by what you are testing

| You are testing | Use | Finds |
| --- | --- | --- |
| An input with valid and invalid ranges or types | Equivalence partitioning | Wrong handling of whole classes of input |
| Limits, lengths, dates, amounts | Boundary value analysis | Off-by-one, inclusive or exclusive errors |
| Rules that combine several conditions | Decision tables | Missing or conflicting rule combinations |
| Something with states (order, account, ticket) | State transition testing | Illegal transitions, missing states |
| Many options that interact (browser, plan, role) | Pairwise combinations | Interaction bugs without testing every combination |
| A user goal end to end | Use-case or scenario testing | Broken flows between steps |

How to apply each one, with worked examples: [references/techniques.md](references/techniques.md).

## Steps

1. **Break the requirement into testable conditions.** One condition per rule, field limit or state.
2. **Apply the matching technique** to each condition. Always include negative cases (invalid input, unauthorized user, missing data), not just valid ones.
3. **Use regional formats.** Amounts in `regional.currency`, dates in `regional.date_format`, measurements in `regional.units`. Include format edge cases that matter in that region (decimal separators, time zones around midnight, leap days).
4. **Write each case** with: id, title, requirement traced, priority, preconditions, steps, test data, expected result. One expected result per behavior; "works correctly" is not an expected result.
5. **Remove duplicates** that test the same partition or boundary.
6. **Mark automation candidates:** stable, repeated, data-driven cases.
7. **Report coverage:** which requirements have cases, which do not, and the open questions.

## Output

A test case table (or the format of the user's test management tool) plus a short coverage summary:

| ID | Title | Requirement | Priority | Preconditions | Steps | Test data | Expected result | Automate? |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

Test data is synthetic. Never use real customer names, emails, card numbers or IDs; use clearly fake values (for example the reserved `example.com` domain and published test card numbers from the payment provider's documentation).

## In a managed run

When `qa-manager` runs this skill, return the cases and coverage summary. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); record uncovered requirements as `issue_opened` events in the stage batch.

## Handoff

End with a handoff (under 400 words): Done (number of cases, techniques used), Decisions (assumptions for ambiguous rules), Changed files (case files, if saved), Tests and checks (none run), Open issues (uncovered requirements, open questions), Next (execution via `qa-web-ui-testing`, `qa-api-testing` or manual runs).
