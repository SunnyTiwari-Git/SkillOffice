---
name: fin-cash-flow
description: Builds a short-term cash flow forecast (13 weeks, or 30, 60 and 90 days) from data the user provides, starting from a confirmed opening balance. Models customer payment timing from history, scheduled payables and fixed costs, shows a low, expected and high case, and names the specific risks, such as a payroll date the low case cannot cover. Use when asked about runway, a cash crunch, whether payroll is covered, or for a weekly cash view. Not investment or lending advice.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "03-finance-accounting"
---

# Cash Flow Forecast

Answer "will we have enough cash, and when could we run short?" with numbers the owner can check.

> **Not professional advice.** This skill prepares drafts and workpapers. It is not professional accounting, tax or investment advice. A qualified professional must review before anything is posted, paid, filed or reported.

## Inputs

- **Opening cash balance and its as-of date.** Never assume one. If nobody knows it, produce net change only and say so in the title.
- Receivables aging (customer, amount, invoice date, due date) and payment history (invoice date and paid date for recent payments).
- Payables due (vendor, amount, due date) and recurring fixed costs (rent, payroll dates and totals, subscriptions, loan payments, tax payments).
- Optional: expected new sales and their collection pattern, planned one-off spend.
- Preferably the closed books of the last month (see `fin-month-end-close`), so timing history is reconciled.

Context used from the active profile: `company.name`, `regional.currency`, `regional.date_format`, `regional.time_zone`.

## Steps

1. **Confirm the opening balance** and date, and which sources were provided. Fewer sources means a wider range.
2. **Measure payment timing** per customer: mean days from invoice to payment and its spread (standard deviation) over the last 6 to 12 payments. With fewer than 3 payments, use the average across all customers and say so.
3. **Place each cash movement** in its week or window: receipts on due date plus the customer's mean lag; payables on due date; fixed costs on their scheduled dates.
4. **Build three cases** with the method in [references/forecast-method.md](references/forecast-method.md): expected, low (customers pay one standard deviation later, so some receipts move out of the window) and high (one standard deviation earlier). Outflows stay on their dates in all cases.
5. **Running balance**: opening balance plus cumulative net movement, per week, for each case.
6. **Name risks**, up to five, largest amount first: a date where the low case goes below zero or below a buffer the user sets, payroll or tax dates at risk, late-payer concentration, thin data, missing sources.
7. **Recommend levers** without deciding: chase specific receivables (`fin-invoicing-collections`), move discretionary spend, talk to the bank early. The owner decides.

## Output

A summary line (lowest expected and low-case balance, and the date), the weekly or windowed table (receipts, payments, net, running balance for each case), the named risks and the assumptions table (sources, opening balance date, timing method, excluded items).

## Quality checklist

- [ ] The opening balance is sourced and dated, or the output says "net change only".
- [ ] Every receipt and payment traces to a provided line; totals per window recalculated.
- [ ] The low case is truly conservative (receipts later, outflows unchanged).
- [ ] Currency codes on every amount; dates in `regional.date_format`.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). This is a planning estimate, not lending, investment or solvency advice. Never move money or schedule payments. Customer and vendor names stay in the user's files and memory summaries use totals.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): opening balance, lowest balances by case and date, named risks and assumptions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
