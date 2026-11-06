# Provenance: sls-prospecting

| Field | Value |
| --- | --- |
| Type | adapted |
| Primary source id | coreyhaines31-marketingskills |
| Primary upstream | https://github.com/coreyhaines31/marketingskills, path skills/prospecting/SKILL.md, commit 88c79f6528a9347420e57ceb1fff9a60de651768, MIT |
| Secondary source id | anthropics-knowledge-work-plugins |
| Secondary upstream | https://github.com/anthropics/knowledge-work-plugins, paths sales/skills/lead-triage/SKILL.md and sales/skills/account-tiering/SKILL.md, commit ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d, Apache-2.0 |
| Security review | registry/security-reviews/05-sales-business-development--sls-prospecting.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream versions

Modified by SkillOffice on 2026-11-06:

- Merged prospecting (list building), lead-triage and account-tiering into one skill with three modes.
- Kept the profile-first workflow, confidence levels, Hot, Warm, Cold and Skip scoring, the triage fit and intent tables and the tiering scores (moved to `references/prospecting-methods.md`).
- Kept and condensed the compliance guardrails; added consent flags tied to `regional.jurisdictions`.
- Removed the demand-signal branch, vendor tool tables, tool integration links, the upstream product-marketing context file and references to upstream skills not imported.
- Removed the KWP connector rules block, CRM lookups and writes and the routing chat post.
- Added SkillOffice context fields, safety and handoff sections.

## Files not imported

- All upstream `references/*.md` files for prospecting. Four of them credit other projects (see below); none of their content was imported.
- `evals/evals.json`: replaced with SkillOffice evals.
- `sales/.mcp.json` and `sales/CONNECTORS.md` (service connectors).

## Indirect sources found and not imported

The upstream prospecting reference files credit: Kappaemme's `first-customer-finder` skill (MIT) in `references/demand-signals.md`; eliasstravik's GTM engineering toolkit (MIT) in `references/enrichment-playbook.md`; a "local-client-prospector" pattern in `references/local-prospecting.md`; and a podcast in `references/signal-plays.md`. SkillOffice did not import these files or their frameworks, so no attribution beyond this record is required.

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
