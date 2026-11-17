# Provenance: dev-system-design

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | engineering/skills/system-design/SKILL.md, engineering/skills/architecture/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/10-software-development--dev-system-design.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged the system-design and architecture (ADR) skills into one skill with three modes.
- Removed slash-command usage, argument hints and connector (CONNECTORS.md, ~~knowledge base) references.
- Added a security and regulated-data step with a handoff to Legal.
- Moved the ADR template to references/adr-template.md.
- Added findings output in the SkillOffice format for evaluations, declared context, memory logging and the handoff section.

Modified by SkillOffice on 2026-11-17 (version 0.2.0): added an "Ask first" section (original SkillOffice content).

## Files not imported

- engineering/.mcp.json and CONNECTORS.md: connector settings for outside services; not imported.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). Copyright Anthropic. The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
