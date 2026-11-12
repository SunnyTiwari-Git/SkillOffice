---
name: fin-reconciliation
description: Reviews account reconciliations and reports unreconciled items as findings. Covers bank reconciliations, ledger-to-subledger reconciliations (receivables, payables, fixed assets, prepaids, accruals), payment processor settlements and intercompany balances. Categorizes each reconciling item (timing, adjustment needed, needs investigation), ages it and proposes correcting entries for review. Use when reconciling an account, reviewing a prepared reconciliation, or finding why balances do not agree.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "03-finance-accounting"
---

# Reconciliation Review

Make the two sides agree, explain every difference, and say plainly what is still unexplained.

> **Not professional advice.** This skill prepares drafts and workpapers. It is not professional accounting, tax or investment advice. A qualified professional must review before anything is posted, paid, filed or reported.

## Inputs

- The account and the period end date.
- Both sides, as files the user provides: for example the ledger balance and detail, plus the bank statement, subledger aging, fixed asset register, processor settlement report or the counterparty's balance.
- Optional: last period's reconciliation and its open items.

Context used from the active profile: `regional.currency`, `regional.date_format`, `operations.policies`.

## Steps

1. **Confirm the balances** on both sides as of the same date. If dates differ, stop and ask.
2. **Match items** between the two sides. For processor settlements, compare net payout to net deposit, not gross sales to net deposit, or every line will look wrong by the fee.
3. **Categorize every difference** using [references/reconciling-items.md](references/reconciling-items.md): timing difference, adjustment needed, or needs investigation.
4. **Age open items** from their origin date and apply the escalation rules.
5. **Build the reconciliation** in the format below. The final difference must be zero, or the remaining amount must be named as unexplained.
6. **Report findings** in the core findings format (`references/protocols/findings.md` in the `skilloffice-core` skill) for every adjustment needed, every item needing investigation, every stale item and any unexplained difference.
7. **Propose correcting entries** for adjustment items as drafts for `fin-journal-entries` or the reviewer. Never post them.

## Output

```text
Reconciliation: <account>, as of <date>
Balance per <side A>                 X
  plus / minus reconciling items     X  (listed)
Adjusted balance A                   X
Balance per <side B>                 X
  plus / minus reconciling items     X  (listed)
Adjusted balance B                   X
Difference                           0.00  (or: X unexplained)
```

Then: the reconciling items table (item, amount, origin date, age in days, category, proposed action), findings by severity and proposed correcting entries.

## Severity guide

| Situation | Severity |
| --- | --- |
| Unexplained difference, any amount, at period end | high |
| Possible duplicate payment, missing deposit, or item above the user's escalation threshold | high |
| Item older than 90 days | high |
| Item 61 to 90 days old, or an adjustment needed | medium |
| Item 31 to 60 days old | low |
| Normal timing difference under 30 days | info |

Use thresholds from `operations.policies` when given.

## Quality checklist

- [ ] Both sides as of the same date; opening and closing balances tie to the source files.
- [ ] Every reconciling item has an amount, a date and a category.
- [ ] The arithmetic was recalculated, and the difference is zero or named.
- [ ] Recurring items are flagged as a process issue, not just carried forward.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never change, void or delete a ledger transaction; surface it and let the owner decide. Show suspected duplicates side by side and do not assume either is wrong. Mask bank account and card numbers to the last 4 digits. Signs of fraud go to a human immediately.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): adjusted balances, the difference, findings by severity and proposed correcting entries. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
