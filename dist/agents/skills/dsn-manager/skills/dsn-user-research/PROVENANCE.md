# Provenance: dsn-user-research

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream paths | design/skills/user-research/SKILL.md, design/skills/research-synthesis/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/09-design-branding--dsn-user-research.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged the two upstream skills (research planning and research synthesis) into one skill with a plan mode and a synthesis mode.
- Rewrote both modes as numbered steps; moved the methods table, interview structure and analysis frameworks into `references/methods.md` and added tree testing and good-practice notes.
- Added consent, privacy and anonymization steps tied to `regional.jurisdictions`, and a rule that participant data never enters memory or reports.
- Audience comes from the SkillOffice context profile (`company.target_audience`).
- Removed the slash-command usage block, the connectors note, the link to the upstream connectors file and the "if connectors available" section.
- Removed the decorative output template header fields (researcher name) to avoid storing personal data.
- Added a quality checklist, a safety section and a handoff section.

## Files not imported

- `design/.mcp.json`: connector configuration, never imported.
- `design/CONNECTORS.md`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
