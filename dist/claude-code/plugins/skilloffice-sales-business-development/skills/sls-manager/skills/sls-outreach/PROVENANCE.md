# Provenance: sls-outreach

| Field | Value |
| --- | --- |
| Type | adapted |
| Primary source id | anthropics-knowledge-work-plugins |
| Primary upstream | https://github.com/anthropics/knowledge-work-plugins, path sales/skills/draft-outreach/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Secondary source id | coreyhaines31-marketingskills |
| Secondary upstream | https://github.com/coreyhaines31/marketingskills, path skills/cold-email/SKILL.md, commit 88c79f6528a9347420e57ceb1fff9a60de651768, MIT |
| Security review | registry/security-reviews/05-sales-business-development--sls-outreach.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream versions

Modified by SkillOffice on 2026-11-06:

- Merged draft-outreach and cold-email into one drafting skill.
- Removed all sending, email draft creation in a mail tool, adding contacts to sequence tools, CRM logging, the KWP connector rules block and tiers, vendor tool tables and integration links.
- Kept the relevance line, value bridge and one-ask structure, the short subject line rule, follow-up angle rotation, the avoid list and deliverability practices (as advice for the user, in `references/outreach-rules.md`).
- Added a rule that pricing, discounts, terms and delivery dates are never committed, consent and opt-out checks tied to `regional.jurisdictions`, SkillOffice context fields, safety and handoff sections.

## Files not imported

- All upstream cold-email `references/*.md` files (benchmarks, deliverability, LinkedIn, cadences, plays, reply handling and others). Essential rules are condensed into `references/outreach-rules.md`. No indirect source credits were found in the cold-email SKILL.md.
- `evals/evals.json`: replaced with SkillOffice evals.
- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Attribution

Portions derived from anthropics/knowledge-work-plugins, licensed under the Apache License, Version 2.0 (full text in `registry/licenses/anthropics-knowledge-work-plugins.txt`). Portions derived from coreyhaines31/marketingskills, used under the MIT License:

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
