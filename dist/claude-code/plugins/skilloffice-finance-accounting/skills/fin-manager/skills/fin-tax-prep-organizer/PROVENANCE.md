# Provenance: fin-tax-prep-organizer

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | small-business/skills/tax-prep/SKILL.md, small-business/skills/tax-season-organizer/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-tax-prep-organizer.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged tax-prep (books-first chain) and tax-season-organizer into one jurisdiction-neutral organizer.
- Removed the US federal estimated-tax calculation (self-employment tax and bracket math), US-specific form thresholds and all connectors. The skill calculates no tax due; the adviser does.
- Kept the books-first rule, the "Prepared for review by your tax adviser. Not tax advice." header, the rule against merging similar payee names and the rule never to file.
- Added masking of tax registration numbers, a rule never to store payee identity data in memory, and a general checklist in `references/organizer-checklist.md` where every rate, threshold and deadline is "confirm with adviser".
- Added the not-professional-advice notice and a handoff section.

## Files not imported

- `tax-season-organizer/reference/` (calculation assumptions, connector queries, output formats, US examples that link to a government site): not imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
