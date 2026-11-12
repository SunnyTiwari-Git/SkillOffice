# Provenance: fin-cash-flow

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | small-business/skills/cash-flow-snapshot/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-cash-flow.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Removed every ledger, payment processor, payroll and storage connector, the XLSX and HTML outputs and scheduling. The skill works from files the user provides.
- Kept the rule never to assume an opening balance, per-customer payment timing from history, named risks and the payroll-date check.
- Replaced the upstream confidence band (a percentage applied to net cash, which misbehaves when net cash is negative) with low and high cases that move named receipts later or earlier by one standard deviation of the customer's lag; payments stay fixed. Added a weekly view and a buffer check.
- Added a worked example (checked by hand), the assumptions table, the not-professional-advice notice, safety rules and a handoff section.

## Files not imported

- `reference/gotchas.md`, `reference/v2_sources.md` and `reference/examples/worked-example.md`: connector-specific notes and examples, not imported; the worked example in this skill is new.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
