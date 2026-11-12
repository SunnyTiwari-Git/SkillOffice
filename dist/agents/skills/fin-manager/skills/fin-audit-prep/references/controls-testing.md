# Controls testing reference

## Assertions by account

| Account | Key assertions |
| --- | --- |
| Revenue | Occurrence, completeness, accuracy, cut-off |
| Receivables | Existence, valuation (allowance), rights |
| Inventory | Existence, valuation, completeness |
| Fixed assets | Existence, valuation, completeness, rights |
| Payables and accruals | Completeness, accuracy, valuation |
| Equity | Completeness, accuracy, presentation |
| Close and reporting | Presentation, accuracy, completeness |

Design effectiveness asks whether a control, as designed, would prevent or detect a material misstatement (tested by a walkthrough). Operating effectiveness asks whether it actually worked throughout the period (tested on a sample).

## Sample sizes (common practice; the user's auditor may require different sizes)

| Frequency | Population | Lower risk | Moderate risk | Higher risk |
| --- | --- | --- | --- | --- |
| Annual | 1 | 1 | 1 | 1 |
| Quarterly | 4 | 2 | 2 | 3 |
| Monthly | 12 | 2 | 3 | 4 |
| Weekly | 52 | 5 | 8 | 15 |
| Daily | about 250 | 20 | 30 | 40 |
| Per transaction | more than 250 | 25 | 40 | 60 |

Automated controls: one test is usually enough if IT change controls over the system were effective for the period.

## Selection methods

- Random: number the population, select with a random generator, record the seed.
- Systematic: interval = population size divided by sample size; random start within the first interval; every interval-th item after it. Example: 1,000 items, sample 25, interval 40, start 17: items 17, 57, 97 and so on.
- Targeted: items with risk features (large, unusual, period end, manual, related party, new counterparty). Document why each was chosen. Supplements, not replaces, random selection.

## Evidence

Sufficient: system logs or screenshots with dates, signed or system approvals with identifiable approver and date, re-performed calculations, dated observation notes.
Not sufficient alone: verbal confirmation, undated documents, evidence without an identifiable performer.

## Deficiency indicators

- Deficiency: a control does not prevent or detect misstatements on a timely basis.
- Significant deficiency: less severe than a material weakness but important enough for those charged with governance.
- Material weakness candidates: fraud by senior management of any size; a restatement to correct a material error; a material misstatement the controls did not catch; ineffective oversight by the audit committee or board; a failed pervasive control (entity-level or IT general control).
- Aggregate related deficiencies in the same process or assertion before concluding.

## Common control examples

- Purchase to pay: purchase order approval within limits; three-way match; vendor master changes approved; payment approval separated from bill entry; duplicate payment checks.
- Revenue: order approval, delivery evidence, recognition timing against contract, pricing accuracy, credit note approval.
- Close: reconciliations complete and reviewed on time; journal entry approval and separation of duties; management review of statements.
- IT general controls: access provisioning and removal, privileged access reviews, change approval and testing, job monitoring, backup and restore tests.

## Workpaper sign-off

Leave "Tested by" and "Reviewed by" with name and date blank for people to complete.
