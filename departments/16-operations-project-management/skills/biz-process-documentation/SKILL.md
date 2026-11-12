---
name: biz-process-documentation
description: Documents a business process as a standard operating procedure with purpose, scope, trigger, a RACI matrix, step-by-step instructions with inputs, outputs and owners, exceptions and edge cases, controls, metrics and a review date. Use when a process lives in someone's head, a task is being handed over, an SOP is needed for training or an audit, or the user wants to know who owns which step.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Process Documentation

Write the process down the way it actually works, including the exceptions, so someone new can follow it.

## Inputs

- A description of the process (messy is fine), existing documents, or just its name. Ask the questions needed to fill gaps.
- Who does each part today (roles).

Context used from the active profile: `company.name`, `operations.team_structure`, `operations.processes`, `operations.sops`, `operations.tools`, `regional.date_format`.

## Steps

1. **Purpose and scope.** Why the process exists, where it starts and ends, and what is excluded.
2. **Trigger and frequency.** What starts it and how often it runs.
3. **Steps.** For each step: name, who (role), when, how (clear instructions), inputs, outputs and the tool used. Number the steps; use a simple text flow for branches.
4. **RACI.** For each step: Responsible, Accountable (exactly one), Consulted, Informed.
5. **Exceptions and edge cases.** "Usually X, but if Y then Z." Ask about these explicitly; they are the most valuable part.
6. **Controls.** Approvals, checks and segregation of duties where errors or fraud are possible (payments, access, data deletion). Flag missing controls.
7. **Metrics.** Two or three measures of the process (cycle time, error rate, volume), with targets if known.
8. **Ownership and review.** Process owner (role), last updated date and next review date.

Layout: [the SOP template](references/sop-template.md).

## Output

1. The SOP in the layout above.
2. Gaps found while documenting: steps without owners, missing controls, unclear handoffs. These can feed `biz-process-improvement`.

## Quality checklist

- [ ] A new person could follow every step without asking.
- [ ] Every step has an owner role and exactly one accountable role in the RACI.
- [ ] Exceptions are documented.
- [ ] Controls are present where money, access or data is involved.
- [ ] A review date is set.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Use roles rather than personal details. Never include passwords, keys or access codes in an SOP; refer to where credentials are managed instead. Do not publish the SOP; it is a draft for the process owner to approve.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): process name, step count, gaps found and owner. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
