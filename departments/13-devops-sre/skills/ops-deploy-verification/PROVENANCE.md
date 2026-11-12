# Provenance: ops-deploy-verification

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | engineering/skills/deploy-checklist/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-deploy-verification.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Kept the pre-deploy, deploy and post-deploy checklist, the rollback triggers decided in advance, and the customizations for migrations, feature flags and breaking API changes.
- Turned the checklist into an evidence-based verification: every item is pass, fail or missing with the evidence used, and the skill recommends go, go with conditions or no-go.
- Added rules: always run fresh and never from cache, recommend only and never deploy, missing evidence counts as a finding; plus infrastructure and security fix cases.
- Removed the slash-command usage block and connector instructions (source control, CI/CD, monitoring connectors).
- Added declared context, the managed-run section and the handoff.

## Files not imported

- engineering/.mcp.json and CONNECTORS.md: connector settings; not imported.

## Attribution

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). Copyright Anthropic. The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
