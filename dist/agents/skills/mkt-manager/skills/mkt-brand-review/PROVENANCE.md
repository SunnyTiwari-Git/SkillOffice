# Provenance: mkt-brand-review

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | marketing/skills/brand-review/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/06-marketing-content-pr--mkt-brand-review.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format as a numbered review process; body about 80 lines.
- Brand standards now come from the SkillOffice context profile (`brand.*`, `marketing.content_guidelines`, regional settings) instead of "local settings" or a knowledge-base connector.
- Output uses the SkillOffice findings format; legal and compliance flags kept as a separate list.
- Moved the voice documentation framework, tone tables, style decisions and terminology guidance into `references/brand-voice-framework.md`, condensed.
- Removed connector placeholders and the link to the upstream connectors file.
- Added regional date, currency and jurisdiction checks, a not-legal-advice note and a handoff section.

## Files not imported

- `marketing/.mcp.json`: connector configuration (Slack, Canva, Figma, HubSpot, Amplitude and others), never imported.
- `marketing/CONNECTORS.md`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
