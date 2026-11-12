---
name: fin-month-end-close
description: Plans and tracks the month-end close. Builds the close checklist and calendar in dependency order (entries, reconciliations, review, statements), tracks status and blockers, runs the owner sign-off gate before reporting, and writes a plain-English summary of the month for the owner or accountant. Use when planning a close, checking close progress, finding blockers, or preparing the close packet for review. Never posts entries or locks periods.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "03-finance-accounting"
---

# Month-End Close

Close the month in the right order, so every later number rests on reconciled books.

> **Not professional advice.** This skill prepares drafts and workpapers. It is not professional accounting, tax or investment advice. A qualified professional must review before anything is posted, paid, filed or reported.

## Inputs

- The month to close (default: the previous calendar month; confirm before starting).
- What the user has: trial balance or profit and loss, the transaction register, bank and settlement statements, schedules, last month's close packet.
- Team size and who owns what, if more than one person closes.

Context used from the active profile: `company.name`, `company.size`, `regional.currency`, `regional.date_format`, `operations.processes`, `operations.team_structure`.

## Steps

1. **Confirm the month is still open.** If books for that month were already filed or locked, stop and ask.
2. **Build the checklist** from [references/close-checklist.md](references/close-checklist.md), trimmed to the business: a small business needs bank, settlements, payables, receivables and a profit and loss summary; a larger one adds accruals, depreciation, intercompany, tax provision and consolidation.
3. **Sequence by dependency**: entries first, then reconciliations, then review, then statements. Nothing in a later level starts until its inputs are done.
4. **Track status** in the table below. Mark blockers with what is missing and who can unblock it.
5. **Flag what needs attention** from the register: uncategorized transactions, suspected duplicates, missing receipts above the user's threshold, reconciliation differences. List them; never fix them in the ledger.
6. **Sign-off gate**: present the summary of resolved and open items. Do not write the month summary or the close packet until the owner confirms or explicitly skips each open item.
7. **Write the month summary** (150 to 250 words, plain English): headline result, what drove revenue, whether gross margin held, expense lines that moved more than 10% month over month, net result against the prior month, and a watch list of up to three items.
8. **Run a short retrospective** for the next close: what was late, what was blocked, what to automate.

## Output

```text
Close status: <month>
| Task | Level | Owner | Due (business day after month end) | Status | Blocker |
Needs attention: X of Y resolved
Reconciliation differences: X flagged, Y resolved
Suspected duplicates: X flagged, Y cleared
Missing receipts: X outstanding
```

Then, after sign-off: the month summary, the list of anything skipped rather than resolved, and retrospective notes.

## Quality checklist

- [ ] No downstream step (forecast, statements, tax) started before sign-off.
- [ ] Every number in the summary comes from the closed books the user provided.
- [ ] Currency codes on every amount, never a bare symbol.
- [ ] Every skipped item is listed so the owner can return to it.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never post, void or delete a transaction, and never lock a period. Never send the close packet to an accountant or anyone else; draft the message and wait. Payroll appears only as totals.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): close status, open and skipped items, the month summary and what the next skills may rely on. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
