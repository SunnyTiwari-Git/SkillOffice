# Provenance: it-runbook

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | operations/skills/runbook/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/12-it-operations--it-runbook.md |
| Imported on | 2026-11-13 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-13:

- Focused on internal IT procedures for staff systems, devices and SaaS.
- Kept the runbook structure (purpose, prerequisites, steps with expected results and failure handling, verification, troubleshooting, rollback, escalation, history) and the "be specific" and "test the runbook" tips, rewritten in our own words.
- Added: when not to use the runbook, approval and identity verification as prerequisites, no secrets in runbooks, confirmation and data preservation for destructive steps, escalation by role instead of personal contacts.
- Removed the connector section (knowledge base, ITSM), publishing to a wiki, auto-populated on-call contacts, the slash-command usage block, the non-standard `argument-hint` field and the CONNECTORS.md reference.
- Moved the layout into `references/runbook-template.md`.

## Files not imported

- `operations/.mcp.json` and `operations/CONNECTORS.md`: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
