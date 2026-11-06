# Provenance: pm-write-spec

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | product-management/skills/write-spec/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/08-product-management--pm-write-spec.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format as a numbered process; body about 80 lines.
- Removed connector steps (project tracker, knowledge base, design tool) and the slash-command usage block.
- Added an evidence step (no invented research), cross-cutting requirements (accessibility, privacy, security, performance, localization, analytics) and a rule that timelines are proposals, never customer commitments.
- Moved section guidance, user story rules, MoSCoW, metric definitions, acceptance criteria formats and scope-creep guidance into `references/prd-guide.md`, condensed.
- Product, team and technical context comes from the SkillOffice context profile.
- Added a quality checklist, a safety note and a handoff section pointing to `pm-spec-review`.

## Files not imported

- `product-management/.mcp.json`: connector configuration, never imported.
- `product-management/CONNECTORS.md` and `product-management/commands/`: not needed.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
