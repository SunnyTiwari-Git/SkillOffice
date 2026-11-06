# Provenance: dev-code-review

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | obra-superpowers |
| Upstream repository | https://github.com/obra/superpowers |
| Upstream path | skills/requesting-code-review/SKILL.md, skills/requesting-code-review/code-reviewer.md, skills/receiving-code-review/SKILL.md |
| Upstream commit | 22f0b463e7a5e579904dd6211a520321035526f7 |
| Upstream license | MIT |

## Additional source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | engineering/skills/code-review/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/10-software-development--dev-code-review.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged the Anthropic code-review dimensions with superpowers requesting and receiving code review into one skill with two modes.
- Output changed to the SkillOffice findings format with critical to info severities.
- Reviewer prompt made platform-neutral: subagent if available, otherwise a separate self-review pass.
- Removed git-worktree, GitHub API reply and plugin references, connector sections and emoji severity markers.
- In managed runs the skill reports only; fixes belong to the manager's single correction cycle.
- Added declared context, memory logging and the handoff section.

## Files not imported

- engineering/.mcp.json and CONNECTORS.md: connector settings; not imported.

## Attribution

Portions of this skill are adapted from obra/superpowers and are covered by the following license:

```text
MIT License

Copyright (c) 2025 Jesse Vincent

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
