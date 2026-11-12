---
name: biz-capacity-plan
description: Plans team capacity against upcoming work, showing available hours after leave, meetings and support load, utilization per role, gaps and bottleneck skills, and scenarios such as hiring, contracting, reprioritizing or delaying. Use when heading into quarterly planning, when a team feels overloaded and needs numbers, when deciding whether to hire or deprioritize, or when checking whether new projects fit the people available.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Capacity Plan

Show whether the work fits the people, with the arithmetic visible, and lay out the options when it does not.

## Inputs

- Team roles and headcount (roles, not personal details), working hours per week, planned leave and holidays.
- Current work: ongoing projects, routine operations and support load.
- Upcoming demand: projects or initiatives with effort estimates and target periods.
- Constraints: budget, hiring lead time, skills that are hard to find.

Ask for what is missing. Never invent headcount, estimates or rates.

Context used from the active profile: `company.size`, `operations.team_structure`, `regional.date_format`, `regional.time_zone`.

## Steps

1. **Gross capacity.** Hours per role per week times weeks in the period.
2. **Net available capacity.** Subtract holidays, planned leave, recurring meetings and routine or support work. State each deduction as a number and its source or assumption.
3. **Planning ceiling.** Do not plan anyone to 100 percent. Use a planning ceiling and state it; typical defaults the user can change are about 75 to 80 percent of net capacity for specialists, 60 to 70 percent for managers, and 50 to 60 percent for interrupt-driven roles such as support or on-call.
4. **Demand.** Sum effort for current and upcoming work by role and by period.
5. **Utilization and gaps.** Demand divided by the planning ceiling, by role and period. Over 100 percent of the ceiling is a gap; name the role and the period.
6. **Bottlenecks.** Skills or roles that are oversubscribed, and periods where several projects collide.
7. **Scenarios.** At least three: do nothing, add capacity (hire or contract, with lead time), and reduce demand (deprioritize, rescope or delay). Show the effect of each on the gap.
8. **Recommendation.** One recommended scenario with the reason and the decision needed, for a human to approve.

## Output

1. Capacity table by role: gross, deductions, net, ceiling, demand, utilization, gap.
2. Bottlenecks and crunch periods.
3. Scenario table and recommendation.
4. Assumptions to confirm.

## Quality checklist

- [ ] Every deduction and estimate shows its source or is labeled an assumption.
- [ ] Nobody is planned above the stated ceiling without it being flagged.
- [ ] Scenarios show their effect on the gap in numbers.
- [ ] Hiring and budget recommendations are flagged for approval, not decided.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Use roles, not named individuals, in shared plans. Hiring, contracting and budget changes are recommendations for HR (02) and Finance (03) to approve, never commitments.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): gaps by role and period, bottlenecks and the recommended scenario. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
