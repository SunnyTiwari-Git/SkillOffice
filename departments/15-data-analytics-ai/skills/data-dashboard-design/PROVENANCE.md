# Provenance: data-dashboard-design

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | data/skills/build-dashboard/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |

## Additional source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/business-analytics/skills/kpi-dashboard-design/SKILL.md, plugins/business-analytics/skills/kpi-dashboard-design/references/details.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/15-data-analytics-ai--data-dashboard-design.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged the Anthropic build-dashboard workflow with the wshobson KPI design guidance into one decision-first design skill with an optional build step.
- Removed the warehouse connector path, the slash-command usage block, the roughly 800 lines of HTML, CSS and Chart.js templates, and the Streamlit and Python code.
- Removed the upstream instruction to generate realistic sample data when none is provided; placeholder values are allowed only for templates and must be labeled "example data" on the dashboard.
- Added CDN rules: prefer no external scripts; if used, pin version with an integrity hash and tell the user about the network dependency.
- Added: never embed credentials or personal data, never overwrite files without asking, never point a refreshing dashboard at a production database.
- Condensed KPI levels, KPI sets by function and definition conflicts into `references/kpi-library.md`, and layouts, HTML build rules, size limits and alerting into `references/build-guide.md`. The upstream customer acquisition cost SQL example was not carried over because it double-counted spend per customer row.
- Added declared context, a quality checklist, a safety note and a handoff section.

Modified by SkillOffice on 2026-11-17 (version 0.2.0): added an "Ask first" section (original SkillOffice content).

## Files not imported

- `data/.mcp.json` and `data/CONNECTORS.md` (knowledge-work-plugins): connector configuration, never imported.
- `plugins/business-analytics/agents/` and the plugin manifests (wshobson-agents): not needed.

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
