---
name: biz-project-plan
description: Builds a project plan with scope and out-of-scope, a work breakdown, milestones, dependencies and the critical path, roles in a RACI matrix, and the assumptions behind every date. Works for waterfall, agile or hybrid teams. Use when the user starts a project, needs a plan or timeline, wants to break work into phases or sprints, or asks who does what. Dates are drafts for team confirmation, never commitments.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Project Plan

Turn a goal into a plan the team can run: what is in scope, what gets done, in what order, by whom, and what has to be true for the dates to hold.

> **Drafts, not promises.** Every date and budget in this plan is a draft with stated assumptions. Nothing here is committed to a client, a manager or the team until the right person confirms it.

## Inputs

- The project goal and the problem it solves.
- What the user knows about scope, deadline, budget, team and constraints. Ask for what is missing; do not invent team members, rates or deadlines.
- Methodology preference (waterfall, agile, hybrid). If none is given, pick the lighter fit and say why.

Context used from the active profile: `company.name`, `operations.team_structure`, `operations.tools`, `regional.date_format`, `regional.time_zone`, `regional.currency`.

## Steps

1. **Objective and success.** One sentence for the goal. Two to four measurable success criteria, each with a target and how it will be checked.
2. **Scope.** In scope, out of scope and open questions. Out of scope is as important as in scope.
3. **Work breakdown.** Break the work into deliverables, then into tasks small enough to estimate (one to five days of effort for waterfall; stories or tasks sized for one sprint for agile). Keep each item a noun phrase with a clear done condition.
4. **Estimates.** Use ranges (best, likely, worst) when uncertainty is high. Name who gave each estimate, or mark it as an assumption.
5. **Dependencies and sequence.** List what must finish before what. Identify the critical path: the longest chain of dependent work. Note external dependencies (vendors, approvals, other teams).
6. **Milestones.** Three to eight milestones, each a verifiable event (for example "design approved by product lead"), not an activity.
7. **Draft schedule.** Place work against working time. Account for holidays, leave and the share of each person's time that is actually available (people are rarely fully available for project work). Add a visible buffer before key milestones rather than hiding padding inside tasks.
8. **Roles (RACI).** For each deliverable: Responsible, Accountable (exactly one), Consulted, Informed. Use roles, not personal details.
9. **Assumptions and constraints.** List every assumption the dates rest on (for example "API access granted by week 2"). These feed the RAID log.
10. **Governance.** How status will be reported, who decides on changes, and when the plan is reviewed.

Templates and an example: [the plan template](references/plan-template.md).

## Output

1. One-page summary: goal, scope, key milestones with draft dates, team, top three risks.
2. The full plan: work breakdown, dependencies, critical path, schedule, RACI, assumptions.
3. Open questions the user must answer before the plan can be confirmed.

## Quality checklist

- [ ] Every milestone is verifiable and has an owner.
- [ ] Every deliverable has exactly one Accountable role.
- [ ] Every date traces to an estimate and stated assumptions.
- [ ] Out of scope is written down.
- [ ] Buffer is visible, not hidden.
- [ ] Nothing is presented as committed.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Drafts only: never send the plan to clients or staff, and never present a date or budget as agreed. Use roles rather than personal details.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): goal, milestones, critical path, assumptions and open questions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
