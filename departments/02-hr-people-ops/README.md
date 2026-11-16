# Human Resources and People Operations

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

> **Not legal or employment advice.** HR decisions affecting a person need human review and, where required, legal review in the relevant jurisdiction. This department prepares drafts, plans and checks; people make every hiring, pay and employment decision.

This department helps you hire fairly, welcome new people well, run clear performance reviews, keep pay consistent, explain and write HR policies, and plan your team structure. Your details (company, policies, where you operate) come from your SkillOffice company context, so its work reflects the countries you operate in.

## How it works

You talk to the **HR manager** (`hr-manager`). It picks only the skills your request needs, runs them in order, collects the problems found, improves its own drafts in **one** correction round, checks the result, and gives you one report.

It never decides about a person: it does not hire, reject, set pay, promote, discipline or dismiss anyone, and it never sends messages, posts ads or updates HR systems. It never uses or guesses protected characteristics such as age, gender, race, religion, disability, caste, pregnancy, marital status or nationality, and it checks job ads, interview questions and reviews for biased wording. Terminations, investigations, harassment or discrimination complaints and immigration questions are sent straight to HR and legal.

People data stays in your own files. Reports use codes instead of names, small groups are hidden, and the department's memory keeps only short records of what was done, never personal details.

## Skills

| Skill | What it does | Changes files? |
| --- | --- | --- |
| `hr-job-description` | Writes an inclusive job ad and a screening rubric; checks ads for biased wording | No |
| `hr-recruiting-pipeline` | Scores applications against the rubric only, by code, with reply drafts and pipeline numbers | No |
| `hr-interview-kit` | Builds a structured, lawful interview plan with scoring and a debrief | No |
| `hr-offer-letter` | Drafts an offer letter from the terms you approved, with points for legal review | No |
| `hr-onboarding` | Plans the new hire's first days, weeks and 90 days | No |
| `hr-performance-review` | Templates, review drafts from evidence, calibration prep and a bias check | No |
| `hr-compensation-analysis` | Checks pay against bands and for unexplained gaps, without naming anyone | No |
| `hr-policy-handbook` | Explains your policies with citations and drafts new ones for legal review | No |
| `hr-org-planning` | Headcount and team structure options, and people numbers in aggregate | No |

The manager writes its run history and the final report into your project's `.skilloffice/` folder. Payroll processing is not part of this department; payroll questions go to Finance and Accounting.

## Common requests and what happens

| You ask | Playbook |
| --- | --- |
| "We're hiring a support lead" | Job ad and rubric, interview kit, screening when applications arrive, offer draft once you choose |
| "Someone starts next month" | Onboarding plan |
| "Review season is starting" | Self-assessment template, manager drafts with a language check, calibration prep |
| "Is our pay consistent?" | Compensation analysis, policy update if needed |
| "What does our leave policy say?" or "Write a remote work policy" | Policy handbook |
| "How should we grow the team?" | Org planning |

## Sources

All nine skills are adapted from Anthropic's open-source knowledge-work-plugins (Apache-2.0). The manager is original SkillOffice work. Each skill's `PROVENANCE.md` lists exactly what changed.
