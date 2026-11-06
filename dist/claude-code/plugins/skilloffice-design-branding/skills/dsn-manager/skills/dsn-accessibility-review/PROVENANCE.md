# Provenance: dsn-accessibility-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | design/skills/accessibility-review/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/09-design-branding--dsn-accessibility-review.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Updated the standard from WCAG 2.1 AA to WCAG 2.2 AA and added the criteria new in 2.2 (2.4.11, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8); noted that 4.1.1 Parsing was removed.
- Corrected the target size rule: upstream listed 2.5.5 (44 by 44 pixels) as an AA criterion, but 2.5.5 is level AAA; the AA requirement is 2.5.8 (24 by 24 pixels).
- Moved the criterion reference into `references/wcag-22-aa.md`, expanded it with Level A criteria AA conformance depends on, written in our own words with a pointer to the official W3C text.
- Rewrote the review as numbered steps that state what can and cannot be checked from the material provided.
- Output uses the SkillOffice findings format with defined severities; critical findings block ready status.
- Added jurisdiction context (ADA, Section 508, European Accessibility Act, India's Rights of Persons with Disabilities Act) as information only, a not-legal-advice note and a rule never to claim full compliance.
- Removed the slash-command usage block, the Figma and project-tracker connector instructions, the connectors note and link, and emoji severity markers.
- Added quality checklist, safety and handoff sections.

## Files not imported

- `design/.mcp.json`: connector configuration, never imported.
- `design/CONNECTORS.md`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
