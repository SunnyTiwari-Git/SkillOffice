# Provenance: legal-vendor-terms-check

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | legal/skills/vendor-check/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/04-legal-risk-compliance--legal-vendor-terms-check.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Removed every connector search (CLM, CRM, email, document storage, chat) and the slash-command usage. The skill works only from documents and records the user provides, and states which sources were and were not reviewed.
- Kept and reworded: entity matching, the per-agreement fields, the coverage gap list, flags for expiring agreements and surviving obligations, and the completeness statement.
- Added: the not-legal-advice notice, a rule against invented dates or terms, never signing or sending notices, no vendor contact details in memory, gaps reported as shared-format findings, the managed-run section and the handoff.

## Files not imported

- legal/CONNECTORS.md and the plugin's .mcp.json.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
