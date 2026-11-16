# Business Operations and Project Management

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

> **Drafts, not promises.** Dates, budgets and resource plans from this department are drafts with stated assumptions. Nothing is committed to clients, managers or staff until the right person confirms it.

This department helps teams run work well: planning projects, tracking risks and dependencies, reporting status honestly, checking whether the team has enough capacity, handling scope changes, writing down how processes work, making slow processes faster, checking project health and keeping the office running.

It works the way your team works (waterfall, agile or a mix). It works from information you provide, never invents estimates or progress, and never sends, approves or commits anything.

## How to use it

Ask the department manager, `biz-manager`, in plain words. For example:

- "We are starting a CRM migration next month. Set the project up."
- "Write this week's status report from these notes."
- "The client wants three extra reports. What does that do to our plan?"
- "Do we have enough people for next quarter's projects?"
- "Write down how we approve supplier invoices."
- "Our quote process takes six days. How can we speed it up?"
- "Is this project plan realistic?"
- "We are moving office in March. Make the plan."

The manager plans which skills to run, skips the ones you do not need, does one round of fixes and gives you one report.

## Skills

| Skill | What it does |
| --- | --- |
| biz-project-plan | Scope, work breakdown, milestones, critical path, roles and draft dates |
| biz-raid-log | Risks, assumptions, issues and dependencies, each with an owner |
| biz-status-report | Clear project status with defined red, amber and green rules |
| biz-capacity-plan | Whether the work fits the people, with options when it does not |
| biz-change-request | Impact and options for a change, ready for approval |
| biz-process-documentation | Step-by-step procedures with owners, exceptions and controls |
| biz-process-improvement | Finds bottlenecks and waste and designs a faster, safer process |
| biz-project-review | Health check of a plan or a running project |
| biz-facilities-admin | Office moves, safety basics, supplies and visitor routines |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| New project kickoff | Project plan, RAID log, capacity plan, status template, project review |
| Weekly status | RAID log update, status report, project review if amber or red |
| Scope change | Change request, RAID log update, project review |
| Process documentation | Process documentation |
| Process improvement | Process documentation (if needed), process improvement, project review |
| Project health check | Project review |
| Office and admin | Facilities and administration, project plan for large moves |

## What it will not do

- Send, post, approve or publish anything.
- Commit dates, budgets, resources or scope to clients, managers or staff.
- Invent estimates, progress, measurements or headcount.
- Give legal or safety certification. Safety, fire, accessibility and local rules are flagged for a qualified person.
- Put individual performance or health matters in shared documents.

## Sources

Five skills are adapted from Anthropic's knowledge-work-plugins (Apache-2.0); the rest are original SkillOffice work. See each skill's `PROVENANCE.md`.
