---
name: fin-tax-prep-organizer
description: Organizes tax-season material for the company's accountant or tax adviser. Confirms the books for the period are closed, builds a document checklist for the jurisdictions in the profile, lists payments to contractors and vendors that may need information returns, flags missing tax registration details, and writes the questions the adviser will ask. Use when preparing for a quarterly or annual tax deadline or handing books to an accountant. Gives no tax advice, calculates no tax due and files nothing.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "03-finance-accounting"
---

# Tax Preparation Organizer

Hand the accountant a complete, tidy pack built on closed books, with every gap named.

> **Not professional advice.** This skill prepares drafts and workpapers. It is not professional accounting, tax or investment advice. A qualified professional must review before anything is posted, paid, filed or reported.

Every output starts with the line: "Prepared for review by your tax adviser. Not tax advice."

## Inputs

- The tax period and the deadline the user is preparing for.
- Closed books for the period (or the months still open, to close first with `fin-month-end-close`).
- Payment detail by payee for the period, and the payee records the user keeps (tax registration numbers, forms on file).
- Prior year return or the adviser's checklist, if available.

Context used from the active profile: `company.name`, `company.business_model`, `company.markets`, `regional.jurisdictions`, `regional.currency`, `regional.date_format`.

## Steps

1. **Books first.** Check each month in scope is closed and reconciled. If not, list what is open and what it could change. Do not organize figures from unreconciled books without saying so at the top.
2. **Jurisdiction check.** Read `regional.jurisdictions`. Build the checklist only from the user's adviser checklist or prior return when given; otherwise list the general categories in [references/organizer-checklist.md](references/organizer-checklist.md) and ask the adviser to confirm what applies. Never state a rate, threshold or deadline as fact for a jurisdiction unless the user supplied it; mark it "confirm with adviser".
3. **Payee review.** From the payment detail, list payees who may need information returns (for example contractors), with total paid and whether registration details or forms are on file. Do not merge payees with similar names; flag them.
4. **Gaps.** Missing registration numbers, missing forms, missing receipts for large expenses, uncategorized transactions, and anything the books flagged.
5. **Adviser questions.** Write the questions the adviser will need answered (business structure changes, asset purchases and disposals, owner draws, related-party payments, foreign transactions).
6. **Pack summary.** What is included, what is missing, who must act and by when (dates the user gave).

## Output

The header line, books status, document checklist with status, payee table (masked registration numbers), gaps with owners, adviser questions and the pack summary.

## Quality checklist

- [ ] No tax amount, rate or filing position is stated as advice.
- [ ] Every total traces to the closed books or a provided file.
- [ ] Registration and identity numbers masked to the last 4 characters.
- [ ] Assumptions and open items listed so the adviser can adjust.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never file, submit, pay or contact a tax authority. Payee identity data (tax numbers, addresses) is regulated personal data: use it only as needed, mask it in outputs and never store it in memory.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): books status, checklist completion, gaps and adviser questions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); store counts and totals, never payee identity data.
