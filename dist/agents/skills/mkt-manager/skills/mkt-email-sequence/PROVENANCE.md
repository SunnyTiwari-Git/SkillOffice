# Provenance: mkt-email-sequence

| Field | Value |
| --- | --- |
| Type | adapted (merged from two sources) |
| Source id | anthropics-knowledge-work-plugins (primary); coreyhaines31-marketingskills (secondary) |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins ; https://github.com/coreyhaines31/marketingskills |
| Upstream path | marketing/skills/email-sequence/SKILL.md ; skills/emails/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d ; 88c79f6528a9347420e57ceb1fff9a60de651768 |
| Upstream license | Apache-2.0 ; MIT |
| Security review | registry/security-reviews/06-marketing-content-pr--mkt-email-sequence.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged the sequence architecture, branching, exit and suppression logic, flow diagram and benchmarks from knowledge-work-plugins with the core principles, timing, subject-line and copy guidance from marketingskills.
- Rewrote in SkillOffice format; templates and benchmarks moved to `references/sequence-templates.md`.
- Removed connector placeholders and email or CRM tool integration sections, a vendor tools table with external links, and references to upstream skills and files not imported.
- Added a compliance step (unsubscribe, sender address, regional consent), a rule against handling credentials or subscriber lists, regional time zone handling and a handoff section.
- Benchmarks labeled as rough and secondary to the company's own data.

## Files not imported

- `skills/emails/references/*` (3 files from marketingskills): key points condensed.
- `skills/emails/evals/evals.json`: replaced with SkillOffice evals.
- `marketing/.mcp.json` from knowledge-work-plugins: connector configuration, never imported.

## Attribution

Portions derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. These files were modified as listed above.

Portions derived from coreyhaines31/marketingskills, used under the MIT License:

```text
MIT License

Copyright (c) 2025 Corey Haines

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
