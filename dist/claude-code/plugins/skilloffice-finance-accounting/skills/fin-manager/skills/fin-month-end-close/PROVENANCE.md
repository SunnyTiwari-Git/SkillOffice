# Provenance: fin-month-end-close

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | finance/skills/close-management/SKILL.md, small-business/skills/close-month/SKILL.md, small-business/skills/month-end-prep/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-month-end-close.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged the enterprise close checklist (close-management) with the small-business close flow (close-month, month-end-prep) into one skill that scales to the company size.
- Removed every ledger, payment processor, payroll and storage connector, the XLSX, PDF and HTML packet outputs, scheduling, and the automatic distribution step. The skill works from files the user provides and drafts only.
- Kept the sign-off gate before any summary or downstream step, the "flag, never fix" rule for ledger items and the plain-English month summary.
- Moved the checklist, dependency levels and calendar into `references/close-checklist.md`; period lock is left to a person.
- Added the not-professional-advice notice, safety rules and a handoff section.

## Files not imported

- `finance/.mcp.json`, `finance/CONNECTORS.md`, and month-end-prep's `reference/` files (ledger-specific reconcile guides, settlement mappings, packet format, examples): connector-specific, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
