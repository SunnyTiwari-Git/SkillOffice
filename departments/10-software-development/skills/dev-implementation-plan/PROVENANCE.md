# Provenance: dev-implementation-plan

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | obra-superpowers |
| Upstream repository | https://github.com/obra/superpowers |
| Upstream path | skills/writing-plans/SKILL.md, skills/executing-plans/SKILL.md |
| Upstream commit | 22f0b463e7a5e579904dd6211a520321035526f7 |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/10-software-development--dev-implementation-plan.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged writing-plans and executing-plans into one skill with two parts.
- Removed the required plan header that named other superpowers skills, the worktree requirement (now: work on a separate branch) and the subagent-driven-development dependency.
- Replaced the task-start and task-done shell scripts with plain instructions and a progress record in SkillOffice memory.
- Made code examples language-agnostic pseudocode.
- Aligned the final review fix pass with the SkillOffice single correction cycle owned by the manager.
- Added declared context, memory logging and the handoff section.

## Files not imported

- skills/executing-plans/scripts/task-start and task-done: shell helpers that call another skill's scripts; replaced by instructions.
- References to subagent-driven-development scripts (sdd-workspace, review-package): not part of this skill.

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
