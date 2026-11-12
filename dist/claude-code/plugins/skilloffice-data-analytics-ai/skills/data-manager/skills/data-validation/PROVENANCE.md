# Provenance: data-validation

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/validate-data/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |

## Additional source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/data-engineering/skills/data-quality-frameworks/SKILL.md, plugins/data-engineering/skills/data-quality-frameworks/references/details.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/15-data-analytics-ai--data-validation.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged the Anthropic validate-data review with the wshobson data quality dimensions, testing layers and data contract guidance into one review skill.
- Output changed to the SkillOffice findings format with critical to info severities and a three-level verdict; added a spot-check table.
- Removed the slash-command usage block and connector references.
- Removed tool installation and setup commands (`pip install`, project initialization) and the Great Expectations, dbt and Python code; tools are named only as examples.
- Added a privacy check for personal and regulated data.
- Condensed the checklist, dimensions, testing layers, contract fields, pitfalls and red flags into `references/checks.md`.
- In managed runs the skill reports only; fixes belong to the manager's single correction cycle.

## Files not imported

- `data/.mcp.json` and `data/CONNECTORS.md` (knowledge-work-plugins): connector configuration, never imported.
- wshobson data-engineering plugin agents, commands and manifests: not needed.

## Attribution

Portions of this skill are adapted from wshobson/agents and are covered by the following license:

```text
MIT License

Copyright (c) 2024 Seth Hobson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Portions of this skill are adapted from anthropics/knowledge-work-plugins.

Licensed under the Apache License, Version 2.0 (the "License"). Copyright Anthropic. The upstream repository has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.
