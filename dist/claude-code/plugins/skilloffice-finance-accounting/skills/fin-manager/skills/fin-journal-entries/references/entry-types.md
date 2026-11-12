# Entry types: calculation methods

Each type lists the usual entry, the calculation and what to check. Accounts and thresholds come from the user's chart of accounts and policies; the ones here are typical, not required.

## Payables accrual (goods or services received, not yet invoiced)

- Usual entry: debit the expense (or asset, if it qualifies for capitalization); credit accrued liabilities.
- Calculation: from confirmed receipts against purchase orders, contract terms for services delivered, or a documented run-rate for recurring vendors.
- Check: auto-reversal next period; the same estimation method as last period; actual invoices later compared with the accrual to refine estimates.

## Depreciation and amortization

- Usual entry: debit depreciation or amortization expense by cost center; credit accumulated depreciation or amortization.
- Straight-line: (cost minus salvage value) divided by useful life, then divided by the periods per year.
- Declining balance: fixed rate times net book value at the start of the period.
- Units of production: (cost minus salvage) times units this period divided by total expected units.
- Check: new additions have a useful life and method; disposals and impairments are removed; book and tax depreciation are tracked separately if the user does both.

## Prepaid expense amortization

- Usual entry: debit the expense; credit the prepaid asset.
- Calculation: total prepaid divided by months of benefit, starting from the benefit start date. Partial first and last months follow the user's policy (daily proration or full month).
- Check: cancelled contracts need accelerated amortization; new prepaids are on the schedule.

## Payroll accruals

- Salary accrual: gross pay for working days in the period not yet paid. Working days accrued divided by working days in the pay period, times the pay period gross.
- Bonus accrual: plan terms times the expected achievement, accrued evenly or by the plan's pattern.
- Employer taxes and benefits: apply the rates the user provides for their jurisdictions. Never assume a statutory rate.
- Check: totals only, never individual pay in the memo; leave accrual follows local rules and policy.

## Revenue recognition and deferred revenue

- Recognize previously deferred revenue: debit deferred revenue; credit revenue.
- Recognize with a new receivable: debit accounts receivable; credit revenue.
- Defer cash received in advance: debit cash or receivable; credit deferred revenue.
- Calculation follows the five steps common to ASC 606 and IFRS 15: identify the contract, the distinct performance obligations, the transaction price (including variable consideration), allocate it, and recognize as each obligation is satisfied.
- Check: contract-level support exists; judgment calls (variable consideration, principal versus agent) are flagged for the reviewer.

## Correcting entries from reconciliations

- Bank fees or interest not yet recorded: debit bank fees (or credit interest income); credit (or debit) cash.
- Misclassification: debit the correct account; credit the wrong account, same amount, with both account names in the memo.
- Check: link the entry to the reconciliation item it clears.

## Suggested approval matrix (example only)

| Entry type | Example threshold | Example approver |
| --- | --- | --- |
| Standard recurring | Any amount | Accounting manager |
| Manual, non-recurring | Below the user's lower limit | Accounting manager |
| Manual, non-recurring | Between the limits | Controller |
| Manual, non-recurring | Above the upper limit | Finance head |
| Consolidation or top-side | Any amount | Controller or above |
| Out-of-period adjustment | Any amount | Controller or above |

Use the limits in `operations.policies` when given. Otherwise ask; do not assume amounts.
