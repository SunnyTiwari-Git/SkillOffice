# Provenance: fin-invoicing-collections

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | small-business/skills/invoice-chase/SKILL.md, small-business/skills/ap-processor/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/03-finance-accounting--fin-invoicing-collections.md |
| Imported on | 2026-11-12 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-12:

- Merged invoice-chase (receivables reminders) and ap-processor (bill intake, coding, matching, payment run) into one skill.
- Removed every ledger, email, payment link, card and expense connector, the send and queue steps, bill entry into a ledger and vendor portal reads. The skill drafts reminders and proposals only; the user sends, enters and pays.
- Kept the strongest upstream rules: exclude customers who paid in the last 14 days, one reminder per customer, never guess an unreadable amount, separate coding and payment approvals, surface vendor credits instead of netting them, never auto-pay.
- Added bank-detail change requests as a fraud signal, masking of account numbers, and a debt-collection caution tied to the user's jurisdictions.
- Wrote new tone guidance in `references/reminder-tone.md`; upstream tone examples were not imported.
- Added the not-professional-advice notice and a handoff section.

## Files not imported

- `invoice-chase/reference/` and `ap-processor/reference/` (connector notes, gotchas, tone examples, coding and payment run guides): not imported; this skill's guidance is rewritten.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
