# Provenance: data-dictionary

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/data-context-extractor/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/15-data-analytics-ai--data-dictionary.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Changed the output from a generated, zipped company-specific AI skill to a plain data dictionary document in the user's project, readable by people and agents alike.
- Removed the data warehouse connector steps, MCP tool placeholders and the packaging step; schema information comes from exports or discovery queries the user runs.
- Kept the bootstrap and iteration modes, the interview questions and the entity, table and metric documentation standards, rewritten.
- Added: mark personal data columns, never record credentials or connection details, never overwrite files without asking, confirm formulas before marking them agreed, open questions instead of guesses.
- Wrote new templates in `references/templates.md`.
- Added declared context, a quality checklist, a safety note and a handoff section.

## Files not imported

- `data/skills/data-context-extractor/scripts/package_data_skill.py`: packaging script, not imported (the adapted skill writes plain documents).
- `data/skills/data-context-extractor/references/` (skill-template.md, domain-template.md, sql-dialects.md, example-output.md): not imported; replaced by new templates.
- `data/.mcp.json` and `data/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
