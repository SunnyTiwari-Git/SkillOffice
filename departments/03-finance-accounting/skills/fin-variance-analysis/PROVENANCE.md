# Provenance: fin-variance-analysis

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | finance/skills/variance-analysis/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-variance-analysis.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Turned the technique guide into a review skill that reports unexplained or poorly explained variances as findings in the shared format.
- Corrected the price, volume and mix decomposition: the upstream three-way formulas did not reconcile to the total variance. The new formulas in `references/decomposition.md` sum exactly, with two worked examples that were checked by hand.
- Required every bridge to reconcile and any residual to be labeled "unexplained".
- Kept the narrative structure and anti-patterns, the headcount and spend decompositions and forecast accuracy measures; default thresholds are labeled as defaults.
- Added the not-professional-advice notice, safety rules (people costs as totals) and a handoff section.

## Files not imported

- `finance/.mcp.json` and `finance/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
