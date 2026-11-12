# Reconciling items: categories, aging and escalation

## Reconciliation types

| Type | Side A | Side B | Common causes of differences |
| --- | --- | --- | --- |
| Bank | Ledger cash account | Bank statement | Outstanding payments, deposits in transit, unrecorded fees or interest, errors |
| Ledger to subledger | Control account (receivables, payables, fixed assets, prepaids, accruals) | Subledger or schedule | Manual entries posted to the control account only, interface failures, timing of batch posting, reclassifications |
| Processor settlement | Ledger bank deposit | Processor net payout report | Comparing gross to net, fees, refunds and chargebacks, payout timing across month end |
| Intercompany | Entity A receivable | Entity B payable | One side not recorded, different exchange rates, misclassification, different cut-off |

## Categories

1. **Timing difference**: recorded on one side, will clear in the normal cycle without action. Examples: payments issued but not yet cleared, deposits in transit, settlements paid out after month end. Expected to clear within about 5 business days.
2. **Adjustment needed**: requires a correcting entry. Examples: bank fees or interest not recorded, wrong amount, duplicate, missing entry, wrong account.
3. **Needs investigation**: cannot be explained yet. Examples: unidentified differences, disputed amounts, aged items, the same unexplained difference every period.

## Matching rules (examples; use the user's tolerances when given)

- Match when amount and date agree within 2 days.
- A difference below a small rounding tolerance (for example 0.50 in the business currency) is noted, not flagged.
- A larger difference is flagged with the delta.
- Present on one side only: flag as "missing on side B" or "missing on side A".
- Suspected duplicate: same amount, same counterparty, within 5 days. The window is a filter, not proof; say what was scanned and widen it if the user suspects a vendor.

## Aging and escalation (example thresholds)

| Age | Status | Action |
| --- | --- | --- |
| 0 to 30 days | Current | Monitor |
| 31 to 60 days | Aging | Investigate why it has not cleared |
| 61 to 90 days | Overdue | Escalate to a supervisor, document the investigation |
| Over 90 days | Stale | Escalate to management; possible write-off or adjustment |

Any unexplained difference at period end blocks sign-off until it is resolved or documented.

## Good practice

- The person who reconciles should not be the person who processes transactions in that account.
- Every reconciliation shows preparer, reviewer and dates.
- Track open items to resolution; do not carry them forward indefinitely.
- Investigate recurring items as a process problem.
