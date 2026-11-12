# Provenance: fin-financial-statements

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | finance/skills/financial-statements/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-financial-statements.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Removed the ERP and data warehouse connector path, CONNECTORS.md reference and slash-command usage.
- Extended from an income-statement workflow to all three statements, with explicit tie-out checks (balance sheet balances, cash ties, net income agrees, retained earnings roll forward).
- Made presentation framework-neutral (the user names US GAAP, IFRS, Ind AS or another); kept the common format notes in `references/statement-formats.md`.
- Replaced fixed dollar materiality thresholds with the user's thresholds, or example thresholds expressed as a share of revenue and labeled as examples.
- Added the "n/m" rule for percentage change against zero, the not-professional-advice notice, safety rules and a handoff section.

## Files not imported

- `finance/.mcp.json` and `finance/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
