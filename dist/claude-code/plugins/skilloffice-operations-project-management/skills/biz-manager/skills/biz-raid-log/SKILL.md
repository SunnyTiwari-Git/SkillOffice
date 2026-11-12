---
name: biz-raid-log
description: Creates or updates a RAID log of risks, assumptions, issues and dependencies, each with an owner, a rating, a next action and a review date. Use when the user starts a project, asks what could go wrong, needs to track blockers or dependencies on other teams and vendors, or wants a risk register kept current during a project.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# RAID Log

Keep everything that could stop the project in one place, with someone responsible for each item.

## Definitions

- **Risk**: something that might happen and would hurt the project. Has a likelihood.
- **Assumption**: something the plan treats as true without proof. If it turns out false, it becomes an issue.
- **Issue**: something that has already happened and needs action now.
- **Dependency**: something the project needs from outside the team (another team, a vendor, an approval).

## Inputs

- The project plan, status notes or a description of the project.
- An existing RAID log to update, if there is one.

Context used from the active profile: `operations.team_structure`, `regional.date_format`.

## Steps

1. **Collect.** Pull candidate items from the plan's assumptions, dependencies and schedule, and from what the user describes. Ask the user about the three areas most often missed: people availability, approvals, and external suppliers.
2. **Classify.** Put each item in exactly one category using the definitions above.
3. **Rate.** Risks: likelihood and impact, each low, medium or high, combined with [the rating guide](references/raid-template.md). Issues: severity and urgency. Assumptions: what breaks if wrong. Dependencies: what is needed, from whom, by when.
4. **Assign.** Every item gets one owner (a role) and a concrete next action with a review date. An item without an owner is a finding, not an entry.
5. **Plan responses.** For high risks: avoid, reduce, transfer or accept, with the reason. For assumptions: how and by when it will be confirmed.
6. **Update.** When updating an existing log, mark items that changed, close resolved items with a note, and promote failed assumptions and occurred risks to issues.

## Output

1. The RAID log as four tables (see [the template](references/raid-template.md)).
2. A short summary: the three items most likely to affect the schedule, items without owners, and items overdue for review.

## Quality checklist

- [ ] Every item has exactly one owner and a dated next action.
- [ ] Risks and issues are not confused.
- [ ] High risks have a stated response.
- [ ] Assumptions say how and when they will be confirmed.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Use roles, not personal details. Personnel issues (performance, health, conflict) do not belong in a shared log: suggest a private conversation with the manager or HR instead.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): counts by category, top three items and unowned items. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
