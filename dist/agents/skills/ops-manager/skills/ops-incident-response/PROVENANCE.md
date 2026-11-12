# Provenance: ops-incident-response

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream paths | plugins/incident-response/skills/incident-runbook-templates/SKILL.md; plugins/incident-response/skills/on-call-handoff-patterns/SKILL.md; plugins/incident-response/skills/connectivity-triage/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

## Secondary source

| Field | Value |
| --- | --- |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | engineering/skills/incident-response/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-incident-response.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream versions

Modified by SkillOffice on 2026-11-07:

- Merged runbook templates, on-call handoff patterns and connectivity triage (wshobson) with the incident workflow, severity table and status update format (Anthropic) into one skill with three modes: live incident, runbook, handoff.
- Kept severity levels, roles, the runbook structure and "write for a tired responder" guidance, handoff components, the evidence rules (observed, inferred, unknown) and the fault-domain approach; rewrote them in our own words.
- Made connectivity triage cross-platform (macOS, Linux and Windows equivalents) instead of macOS only, and kept it read-only and bounded.
- Added rules: propose but never run production-changing commands without approval; flag possible security or personal-data incidents to the Cybersecurity department and legal contact; never include secrets or personal data in records.
- Removed connector instructions (paging tools, chat channels, monitoring connectors), the slash-command usage block, vendor-specific tool references and the postmortem section (moved to `ops-postmortem`).
- Added declared context, the managed-run section and the handoff.

## Files not imported

- wshobson references/details.md files: skimmed, not imported.
- Anthropic engineering/.mcp.json and CONNECTORS.md: connector settings; not imported.

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
