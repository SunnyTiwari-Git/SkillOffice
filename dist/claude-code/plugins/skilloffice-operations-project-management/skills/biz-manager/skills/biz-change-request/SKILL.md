---
name: biz-change-request
description: Prepares a change request for a scope, process or system change, with the reason, options, impact on time, cost, quality and people, risks, a rollback plan, a communication plan and who must approve. Use when scope is growing, a client or stakeholder asks for something new, a process or tool is about to change, or a change needs approval from a sponsor or change board.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Change Request

Make every change a visible decision: what changes, what it costs, what it risks, and who agrees.

## Inputs

- The requested change and who asked for it.
- The current plan or baseline (scope, schedule, budget), if there is one.
- Known constraints and deadlines. Ask for estimates rather than inventing them.

Context used from the active profile: `company.name`, `operations.team_structure`, `operations.processes`, `regional.date_format`, `regional.currency`.

## Steps

1. **Describe the change.** What changes, why, who requested it, and what happens if it is not made.
2. **Options.** At least two: make the change as requested, and an alternative (smaller version, later phase, swap for something else). "Do nothing" is also an option when it is realistic.
3. **Impact analysis** for each option against the baseline:
   - Scope: what is added, removed or altered.
   - Schedule: effect on milestones and the critical path, in days, with assumptions.
   - Cost: effort and spend in the profile's currency, with assumptions.
   - Quality and risk: what could break, and new risks.
   - People: who is affected (roles and numbers, not "everyone"), training and support needed.
4. **Risks.** Likelihood, impact and mitigation for each new risk.
5. **Rollback plan.** The trigger for rolling back, the steps, and how to verify the rollback worked.
6. **Communication plan.** Audience, message, channel and timing. Explain the reason before the change, and acknowledge what people lose as well as gain.
7. **Approvals.** Who must approve (roles), by when, and what happens to the baseline once approved.
8. **Recommendation** with the reason, for the approver to decide.

## Output

The change request as a draft with status "Draft, pending approval", ready for the approver. Use the layout in [the template](references/change-template.md).

## Quality checklist

- [ ] Impact is quantified in days, money and people affected, with assumptions.
- [ ] At least two options are compared.
- [ ] A rollback plan exists with a trigger and verification.
- [ ] Approvers are named by role.
- [ ] Nothing is presented as approved.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Drafts only: never submit, approve or announce the change. Changes that alter what a client receives, or its dates or price, go to a human before anything is shared with the client. System changes to production go through the owning team (IT Operations 12 or DevOps 13).

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): options, impact summary, recommendation and approvers. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
