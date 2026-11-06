# Provenance: dev-requirements-brainstorm

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | obra-superpowers |
| Upstream repository | https://github.com/obra/superpowers |
| Upstream path | skills/brainstorming/SKILL.md, skills/brainstorming/builder-check-prompt.md |
| Upstream commit | 22f0b463e7a5e579904dd6211a520321035526f7 |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/10-software-development--dev-requirements-brainstorm.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Rewrote in SkillOffice format with the six standard frontmatter fields and a skill.yaml sidecar.
- Removed the browser visual companion and its local web server; mockups are sketched in text instead.
- Removed references to other superpowers skills and plugin names; handoff now goes to dev-implementation-plan.
- Made the builder check work with or without subagents.
- Changed the default design location to docs/specs/ and tied it to the company context.
- Added declared company context, managed-run memory logging and the SkillOffice handoff section.

## Files not imported

- skills/brainstorming/scripts/ (start-server.sh, stop-server.sh, helper.js, server.cjs, frame-template.html): a local web server for visual mockups; not needed and not imported.
- skills/brainstorming/visual-companion.md: documentation for the removed server.

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
