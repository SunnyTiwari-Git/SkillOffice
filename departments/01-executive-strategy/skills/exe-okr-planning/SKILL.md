---
name: exe-okr-planning
description: Writes objectives and key results for a company or team, checks alignment with strategy, makes key results measurable with baselines and targets, and sets up mid-period and end-of-period scoring. Use when the user asks to set OKRs or quarterly goals, turn a strategy into measurable goals, align team goals with company goals, or score OKRs at the end of a period.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "01-executive-strategy"
---

# OKR Planning

Turn a strategy into a small set of objectives and measurable key results that teams can act on, and score them honestly at the end of the period.

## Inputs

- The strategy or priorities the OKRs serve (from `exe-strategy-review` or the user).
- The period and level: company, department or team.
- Baselines for the metrics the user cares about. Ask for missing baselines; never invent them.
- For scoring: the OKRs and the actual results.

Context used from the active profile: `company.name`, `company.size`, `operations.team_structure`.

## Steps

1. **Start from the strategy.** List the 2 to 4 priorities for the period. Each objective must serve one of them.
2. **Write objectives.** Qualitative, inspiring and clear about direction (for example "Make onboarding effortless for small teams"). At most 3 to 5 per level.
3. **Write key results.** 2 to 4 per objective. Each one is an outcome, not a task:
   - Metric, baseline, target and date ("Raise 30-day activation from 32% to 45% by 31 Mar").
   - Measurable from data the company actually has.
   - Not a list of activities. Move tasks into an initiatives list under the key result.
4. **Set ambition.** Mark each key result as committed (expected to hit fully) or aspirational (stretch, around 70% is good). Say which.
5. **Check alignment.** Show how team key results roll up to company objectives. Flag orphans and overlaps.
6. **Assign owners.** One owner per objective and per key result.
7. **Set the rhythm.** Weekly or fortnightly check-ins, a mid-period review and end-of-period scoring.
8. **Score (end of period).** Score each key result from 0.0 to 1.0 as achieved divided by targeted progress from the baseline. Average to the objective. Add one line on what was learned and what carries forward.

See [the OKR guide](references/okr-guide.md) for examples, scoring rules and common mistakes.

## Output

1. OKR table: objective, key result, baseline, target, date, committed or aspirational, owner.
2. Alignment map: which company objective each team key result supports.
3. Check-in rhythm and how progress will be measured.
4. For scoring: scores, short reasons and lessons.

## Quality checklist

- [ ] Every key result has a metric, baseline, target and date.
- [ ] No key result is a task.
- [ ] No more objectives than the team can carry.
- [ ] Every key result has one owner.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). OKRs are not performance reviews; do not tie individual pay or employment decisions to scores without Human Resources (02) involvement.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): objectives, key results and missing baselines. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
