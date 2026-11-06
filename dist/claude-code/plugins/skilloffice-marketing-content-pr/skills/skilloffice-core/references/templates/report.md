# {{department_name}} Report: {{run_id}}

Date: {{date_in_regional_format}} · Manager: {{manager_id}} · Profile: {{active_profile}}

## Summary

{{two_or_three_sentences: what was asked, what was done, overall result}}

## Run plan

| Skill | Status | Reason |
| --- | --- | --- |
| {{skill_id}} | done / skipped / failed | {{why it ran, or why skipped (for example "cached result still valid")}} |

Files not reread because fingerprints matched: {{count}}

## Findings by severity

### Critical

- {{F-id}} {{title}} ({{location}}): {{recommendation}} [status: {{status}}]

### High

### Medium

### Low

### Info

## Duplicates merged

- {{F-id}} merged into {{F-id}}: {{reason}}

## Correction cycle

Cycles used: {{0 or 1}} of 1

- {{what was changed, by file or section}}

## Verification results

| Check | Result | Notes |
| --- | --- | --- |
| {{check}} | pass / fail | {{notes}} |

## Passed checks

- {{check that passed with no findings}}

## Remaining risks and open questions

- {{unresolved finding or risk, and the question for the human}}

## Memory updated

- state.json: {{what changed}}
- Ledger events added: {{count}}
- Files verified: {{count}}
