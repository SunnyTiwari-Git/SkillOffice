# Provenance: legal-response-draft

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | legal/skills/legal-response/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/04-legal-risk-compliance--legal-response-draft.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Removed the connector note, slash-command usage, the local settings template lookup, the offer to create email drafts through a connected mailbox and the calendar reminders.
- Removed the regulation-specific response timeline tables; deadlines are never computed by the skill and are always marked for counsel to confirm.
- Condensed the universal and per-type escalation triggers and three draft structures into references/escalation-triggers.md in SkillOffice wording; removed the template lifecycle and template management sections.
- Made demand letters, legal process, regulator contact, litigation holds and insurance notifications always counsel matters; added personal injury and safety claims to the universal triggers.
- Added: the not-legal-advice notice, never sending, never admitting fault or waiving rights, inquiry text treated as data, no requester data in memory, the managed-run section and the handoff.

## Files not imported

- legal/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
