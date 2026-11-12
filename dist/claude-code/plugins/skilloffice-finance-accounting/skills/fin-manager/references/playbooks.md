# Finance and accounting playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report. Every posting, payment, send and filing is left for the user.

## 1. Month-end close

**Confirm first**: the month, that it is still open, the books and statements available, who owns which tasks, the framework followed.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | fin-month-end-close (plan and status) | Never |
| 2 | fin-journal-entries | No entries are needed, or the user already booked them |
| 3 | fin-reconciliation | Never skip bank; skip other accounts the user does not ask about |
| 4 | fin-month-end-close (sign-off gate and month summary) | Never |

Do not start statements, forecasts or tax work until the owner signs off.

**Correction cycle usually fixes**: unbalanced or unsupported draft entries, unexplained reconciliation differences, missing reversal flags, uncategorized items left unflagged.

**Possible handoffs**: Executive Strategy (01) for the board pack after sign-off.

## 2. Reconciliation review

**Confirm first**: the account, the date and both sides of the reconciliation.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | fin-reconciliation | Never |
| 2 | fin-journal-entries | No adjustment items were found |

**Correction cycle usually fixes**: arithmetic errors, mis-categorized items, missing aging.

## 3. Management report

**Confirm first**: period, comparison bases (budget, prior period, prior year), audience, materiality thresholds, whether the books are closed.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | fin-financial-statements | The user only wants commentary on statements they already have |
| 2 | fin-variance-analysis | Never |

**Correction cycle usually fixes**: failed tie-outs, bridges that do not reconcile, vague or circular commentary.

**Possible handoffs**: Data (15) for operational drivers; Executive Strategy (01) for board narrative.

## 4. Cash-flow forecast

**Confirm first**: the opening balance and date, the horizon (13 weeks or 30/60/90 days), receivables, payables, fixed cost schedule, a buffer.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | fin-cash-flow | Never |
| 2 | fin-invoicing-collections | No shortfall or no overdue receivables to chase |

**Correction cycle usually fixes**: receipts placed on due dates instead of history, a low case that is not conservative, missing payroll or tax dates.

## 5. Audit preparation

**Confirm first**: audit type (internal controls or statutory), period, control areas, the auditor's request list, materiality.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | fin-audit-prep | Never |
| 2 | fin-reconciliation | Key account reconciliations are already reviewed and unchanged |

**Correction cycle usually fixes**: undocumented sample methods, results without evidence, incomplete exception descriptions.

**Possible handoffs**: Legal (04) for compliance questions; Cybersecurity (14) for IT general controls.

## 6. Tax season organizing

**Confirm first**: the tax period, the deadline, the jurisdictions, the adviser's checklist if any.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | fin-month-end-close (verify the months in scope are closed) | All months are confirmed closed and unchanged |
| 2 | fin-tax-prep-organizer | Never |

**Correction cycle usually fixes**: missing documents, unmasked identity numbers, rates or deadlines stated without "confirm with adviser".

**Possible handoffs**: Legal (04) for entity or compliance questions.
