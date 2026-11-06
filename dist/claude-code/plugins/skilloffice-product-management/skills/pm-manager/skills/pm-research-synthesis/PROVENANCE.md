# Provenance: pm-research-synthesis

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | product-management/skills/synthesize-research/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/08-product-management--pm-research-synthesis.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format as a numbered process; body about 80 lines.
- Removed all connector steps (knowledge base, user feedback, product analytics, meeting transcription) and the slash-command usage block. The skill works only from material the user provides.
- Added a personal-data step: participants are referred to by type, sensitive personal data is flagged and kept out of outputs and memory, with routing to Legal under GDPR or DPDP.
- Moved thematic analysis, affinity mapping, triangulation, interview and survey guidance, the persona template and opportunity sizing into `references/synthesis-methods.md`, condensed.
- Added an explicit rule against invented quotes, participants or numbers, a quality checklist, a safety note and a handoff section.

## Files not imported

- `product-management/.mcp.json`: connector configuration, never imported.
- `product-management/CONNECTORS.md` and `product-management/commands/`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
