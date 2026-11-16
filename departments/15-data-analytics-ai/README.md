# Data, Analytics and AI

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

This department helps founders, analysts, managers and product teams get trustworthy answers from their data. It profiles datasets, writes SQL, analyzes results with sound statistics, builds honest charts and KPI dashboards, checks analyses before they are shared, turns results into a clear story, documents what the data means, and reviews AI features for privacy, safety and cost.

It works only from data you provide. It writes queries for you to run and never connects to or changes a database itself. It never invents numbers, keeps personal data out of outputs, and never shares anything on your behalf.

## How to use it

Ask the department manager, `data-manager`, in plain words. For example:

- "Why did repeat purchases drop last quarter? Here is the orders export."
- "Design a monthly KPI dashboard for leadership."
- "Can we trust this customers table?"
- "Document our analytics database so new analysts use it correctly."
- "Review our plan for an AI support chatbot before we build it."
- "Check this revenue analysis before it goes to the board."

The manager plans which skills to run, skips the ones you do not need, does one round of fixes and gives you one report.

## Skills

| Skill | What it does |
| --- | --- |
| data-explore | Profiles a dataset: grain, columns, quality issues and what to analyze next |
| data-sql | Writes read-only SQL for your database dialect, for you to run |
| data-analysis | Answers questions with sound statistics, stated assumptions and uncertainty |
| data-visualization | Picks and builds the right chart, honest and accessible |
| data-dashboard-design | Chooses KPIs, defines them and lays out a dashboard; can build an HTML dashboard |
| data-validation | Checks an analysis, query, chart or dataset before you rely on it |
| data-storytelling | Turns results into a summary, memo or slide outline with a clear ask |
| data-dictionary | Documents entities, tables, metric definitions and standard filters |
| data-ai-feature-review | Reviews an AI feature for privacy, unsafe inputs and actions, evaluation, cost and lock-in |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| Answer a business question | Explore (if new data), SQL (if needed), analysis, visualization, storytelling (if needed), validation |
| KPI dashboard | Dashboard design, SQL, visualization, validation |
| Data quality audit | Explore, validation |
| Document a dataset | Data dictionary, SQL sample queries |
| AI feature review | AI feature review |

## Company details it uses

From your `.skilloffice/context/` profile, only when a skill needs them: company name, industry, business model, products and description, brand voice, colors and typography, tools, technical stack and hosting, and regional settings (currency, date format, units, time zone, language, jurisdictions).

## Sources

Six skills are adapted from Anthropic's knowledge-work-plugins (Apache-2.0); data-dashboard-design and data-validation also include material from wshobson/agents (MIT), and data-storytelling is adapted from wshobson/agents. `data-ai-feature-review` and `data-manager` are original SkillOffice work. Each skill's `PROVENANCE.md` lists what changed. Connector configurations, scripts and code templates from the upstream sources were not imported.
