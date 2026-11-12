# Provenance: sec-security-requirements

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/security-scanning/skills/security-requirement-extraction/SKILL.md and references/details.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |
| Security review | registry/security-reviews/14-cybersecurity--sec-security-requirements.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Kept the core ideas: business need to requirement to control, requirement types, traceability, testability, priority, security user stories and compliance mapping.
- Replaced the Python code templates (requirement model, extractor, compliance mapper, story generator) with plain Markdown templates and a worked example in `references/requirement-templates.md`.
- Did not copy the upstream table of specific compliance control numbers; the skill now tells the agent to confirm the current framework version before quoting numbers, and to mark compliance conclusions for legal or compliance confirmation.
- Added declared context, ids and traceability matrix, negative acceptance criteria, findings output, the managed-run section (never cached) and the handoff.

## Files not imported

- Python code templates in references/details.md; plugin manifests, agents and commands.

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
