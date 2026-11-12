# Provenance: sec-threat-mitigation

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/security-scanning/skills/threat-mitigation-mapping/SKILL.md and references/details.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |
| Security review | registry/security-reviews/14-cybersecurity--sec-threat-mitigation.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Kept the core ideas: preventive, detective and corrective controls, control layers, defense in depth, mapping every threat, gap analysis, prioritized roadmap and control testing.
- Replaced the Python code templates (mitigation model, control library classes, analysis and effectiveness testing code) with a plain Markdown control library, threat-to-control pairs and a plan template in `references/control-library.md`.
- Replaced calendar-based roadmap phases with now, next and later buckets, and cost figures with relative effort sizes, so no dates or prices are committed.
- Added declared context, findings output for unmitigated threats, the managed-run section (never cached) and the handoff.

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
