---
name: biz-status-report
description: Writes a project or team status report with a headline summary, overall red, amber or green status using defined rules, milestone progress, key metrics, accomplishments, work in progress, risks and issues with owners, and decisions needed. Use when the user needs a weekly or monthly project update, a steering committee report, or wants scattered updates turned into a clear status for stakeholders.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "16-operations-project-management"
---

# Status Report

Tell stakeholders, in the first three lines, whether the project is on track and what they need to do.

## Inputs

- Updates the user provides: progress notes, the plan, the RAID log, metrics, milestone dates.
- The audience (team, sponsor, steering committee, client) and the period.
- Never invent progress, percentages or dates. If something is unknown, say so.

Context used from the active profile: `company.name`, `operations.team_structure`, `regional.date_format`.

## Status rules

Use these unless the project already defines its own. State which rules were used.

| Status | Meaning |
| --- | --- |
| Green | On track for the agreed scope, schedule and budget; no action needed from the audience |
| Amber | At risk: a milestone, budget line or scope item may be missed, and the team has a recovery plan |
| Red | Off track: a milestone, budget line or scope item will be missed without a decision or help from the audience |

Status is set by the evidence, not by optimism. If two areas differ, report the worst one overall and explain.

## Steps

1. **Headline.** Three to four sentences: overall status and why, the key win, and what is needed from the audience.
2. **Status by area.** Scope, schedule, budget and quality, each with a status and one line of evidence.
3. **Milestones.** Table: milestone, baseline date, current forecast, status. A changed forecast always shows the old and new date.
4. **Key metrics.** Table: metric, target, actual, trend.
5. **Accomplishments** this period, each with evidence.
6. **In progress.** Item, owner, status, expected date as given by the owner.
7. **Risks and issues.** The top items from the RAID log with owners and next actions.
8. **Decisions needed.** Decision, why it matters, deadline, recommendation.
9. **Next period.** Up to three priorities.

### Layout

```markdown
## Status: [project or team], [period]
Prepared by: [role] | Date: [date] | Status rules: [default or project-defined]

### Headline
[Three to four sentences.]

### Overall status: [Green / Amber / Red]
| Area | Status | Evidence |
| Scope | Schedule | Budget | Quality rows |

### Milestones
| Milestone | Baseline | Current forecast | Status |

### Key metrics
| Metric | Target | Actual | Trend |

### Accomplishments this period
- [accomplishment and evidence]

### In progress
| Item | Owner | Status | Expected date (owner's estimate) |

### Risks and issues
| Item | Impact | Next action | Owner |

### Decisions needed
| Decision | Why it matters | Deadline | Recommendation |

### Next period priorities
1. [priority]
```

## Output

The status report in the structure above, as a draft for the user to review and share.

## Quality checklist

- [ ] The headline can be read alone.
- [ ] Status follows the stated rules and the evidence.
- [ ] Forecast changes show old and new dates.
- [ ] Every risk and decision has an owner.
- [ ] Bad news is stated plainly.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Drafts only: never send or post the report. A forecast is not a commitment: client-facing reports with changed dates go to a human for approval first. Keep individual performance out of shared reports.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): overall status, milestone changes and decisions needed. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
