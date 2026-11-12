# Provenance: sec-threat-model

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | openai-skills |
| Upstream repository | https://github.com/openai/skills |
| Upstream path | skills/.curated/security-threat-model/SKILL.md, references/prompt-template.md, references/security-controls-and-assets.md |
| Upstream commit | 49f948faa9258a0c61caceaf225e179651397431 |
| Upstream license | Apache-2.0 (skill-level LICENSE.txt) |

## Additional source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/security-scanning/skills/stride-analysis-patterns/ and plugins/security-scanning/skills/attack-tree-construction/ (SKILL.md and references/details.md) |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/14-cybersecurity--sec-threat-model.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged the OpenAI repository threat-modeling workflow with the STRIDE matrix and attack-tree method from wshobson/agents into one skill.
- Widened scope from code repositories to features, designs and architectures; kept the evidence-first rule.
- Added an explicit defensive-only and authorization scope, and secret masking to the first 4 characters.
- Condensed the output contract into `references/output-format.md` and the STRIDE and attack-tree guidance into `references/stride-and-attack-trees.md`, rewritten in SkillOffice wording. The upstream Python code templates (data models, builders, Mermaid generators) were not imported.
- Removed the upstream instruction to write the model to a fixed file name; output goes into the managed report or the user's chosen location.
- Added declared context, regulated-data handoff to legal, coverage limits, findings output, the managed-run section (never cached) and the handoff.

## Files not imported

- openai: skills/.curated/security-threat-model/agents/openai.yaml (platform interface metadata) and LICENSE.txt (license recorded in registry/licenses/openai-skills.txt).
- wshobson: Python code templates in references/details.md; plugin manifests, agents and commands.

## Attribution

Portions of this skill are adapted from openai/skills.

Licensed under the Apache License, Version 2.0 (the "License"). The upstream skill has no NOTICE file. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. This file was modified by SkillOffice; the changes are listed above.

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
