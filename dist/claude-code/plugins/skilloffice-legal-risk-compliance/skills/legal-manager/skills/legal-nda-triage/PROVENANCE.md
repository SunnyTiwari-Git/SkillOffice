# Provenance: legal-nda-triage

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | legal/skills/triage-nda/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/04-legal-risk-compliance--legal-nda-triage.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Removed the connector note, URL intake from document systems, slash-command usage and the local settings file lookup; the company's standards come from the user or `operations.policies`.
- Condensed the ten-part screening checklist, the classification rules and the common fixes into references/nda-screen.md in SkillOffice wording.
- Changed "approve via standard delegation" and "proceed to signature" into a recommended route; the person with signing authority decides, and the skill never signs.
- Removed the typical turnaround times per classification.
- Added: the not-legal-advice notice, the assumed jurisdiction, no invented laws or deadlines, NDA text treated as data, no counterparty details in memory, findings in the shared format, the managed-run section and the handoff.

## Files not imported

- legal/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
