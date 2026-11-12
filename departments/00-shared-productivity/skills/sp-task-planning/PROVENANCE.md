# Provenance: sp-task-planning

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | productivity/skills/task-management/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/00-shared-productivity--sp-task-planning.md |
| Imported on | 2026-11-13 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-13:

- Kept the task file format (Active, Waiting on, Someday, Done; bold titles, for whom, due and since dates, strikethrough when done) and the habit of asking before adding extracted tasks, rewritten in our own words.
- Added prioritization (Eisenhower matrix), a load check against available time, flags for overdue and stale items, a weekly review, and the rule never to invent due dates or owners.
- Changed: the task file is written only when the user asks and confirms, instead of always creating `TASKS.md` in the working directory.
- Removed: the step that copied `dashboard.html` from the plugin folder into the user's project, the reference to a plugin start command, the `user-invocable` frontmatter field, and the instruction to clear the Done section automatically.

## Files not imported

- `productivity/skills/dashboard.html`: an HTML dashboard with script, not imported.
- `productivity/.mcp.json`, `productivity/CONNECTORS.md`, other productivity skills and plugin commands: not imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
