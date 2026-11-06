# Product Management and Research

Status: **pilot, not yet platform-tested.** Planned platforms: Claude Code and Antigravity.

This department helps product managers, founders and team leads decide what to build and why. It explores ideas, makes sense of research, compares competitors, writes and reviews specs, keeps the roadmap realistic, plans sprints, reviews metrics and drafts updates for different audiences.

It works only from information you provide. It never invents research, quotes or numbers, never sends anything, and never promises dates or features to customers without your approval.

## How to use it

Ask the department manager, `pm-manager`, in plain words. For example:

- "Take this customer request from idea to a reviewed spec."
- "Is this PRD ready to build?"
- "Reprioritize our roadmap for next quarter. Here is the current one and our team size."
- "Plan our next two-week sprint."
- "Review last month's product metrics against targets."
- "Write a weekly update for leadership."

The manager plans which skills to run, skips the ones you do not need, does one round of fixes and gives you one report.

## Skills

| Skill | What it does |
| --- | --- |
| pm-product-brainstorm | A thinking partner that frames a problem, explores options and finds the riskiest assumption |
| pm-research-synthesis | Turns interview notes, surveys and feedback into ranked findings with evidence |
| pm-competitive-brief | Compares competitors' features and positioning and recommends what to build or differentiate on |
| pm-write-spec | Writes a requirements document with goals, user stories, acceptance criteria and success metrics |
| pm-spec-review | Checks a spec for gaps before design and engineering start |
| pm-roadmap | Creates or updates a roadmap, with priorities, dependencies and a capacity check |
| pm-sprint-planning | Plans a sprint with one goal, realistic capacity and a prioritized backlog |
| pm-metrics-review | Builds a scorecard from your metrics and flags what needs attention |
| pm-stakeholder-update | Drafts status updates for leadership, engineering, partners or customers |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| Discovery to spec | Research synthesis, brainstorm, competitive brief (each only if needed), write spec, spec review |
| Spec review | Spec review |
| Quarterly roadmap | Metrics review (if data provided), roadmap, stakeholder update (if needed) |
| Sprint planning | Sprint planning |
| Metrics review | Metrics review, then roadmap only if you want priorities adjusted |
| Stakeholder update | Stakeholder update |

## Company details it uses

From your `.skilloffice/context/` profile, only when a skill needs them: company name, products and services, target audience, markets, differentiators, competitors, team structure and processes, technical stack and standards, and regional settings (currency, date format, time zone, language, jurisdictions).

## Sources

Eight skills are adapted from Anthropic's knowledge-work-plugins (Apache-2.0); `pm-spec-review` and `pm-manager` are original SkillOffice work. Each skill's `PROVENANCE.md` lists what changed. Connector configurations from the upstream plugin were not imported.
