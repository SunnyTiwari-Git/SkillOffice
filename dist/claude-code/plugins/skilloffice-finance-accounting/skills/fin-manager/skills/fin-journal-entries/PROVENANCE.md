# Provenance: fin-journal-entries

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | finance/skills/journal-entry/SKILL.md, finance/skills/journal-entry-prep/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-journal-entries.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged journal-entry (workflow) and journal-entry-prep (entry types, documentation and review practice) into one skill.
- Removed the ERP and data warehouse connector path, the CONNECTORS.md reference, the slash-command usage block and the "instructions for posting" output. The skill drafts only.
- Added a period-open check, shown formulas for every calculation, and "never invent an account code or amount".
- Made the framework neutral: the user names US GAAP, IFRS, Ind AS or another framework; revenue guidance cites the five steps common to ASC 606 and IFRS 15.
- Payroll accrual guidance no longer lists US-specific payroll taxes; rates come from the user for their jurisdictions. Payroll memos carry totals only.
- Moved entry-type methods and the example approval matrix (thresholds now from the user's policies, not fixed dollar amounts) into `references/entry-types.md`.
- Added the not-professional-advice notice, safety rules (fraud indicators to a human) and a handoff section.

## Files not imported

- `finance/.mcp.json` and `finance/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
