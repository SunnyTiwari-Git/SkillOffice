---
name: fin-financial-statements
description: Drafts financial statements from closed books the user provides, an income statement, balance sheet and cash flow statement (indirect method), with prior period and budget comparisons, key ratios and a list of material variances to explain. Follows the presentation conventions of the framework the user names, such as US GAAP, IFRS or Ind AS. Use when preparing a monthly, quarterly or annual statement pack or a financial summary for leadership. Drafts only; not for filing.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "03-finance-accounting"
---

# Financial Statements

Turn a closed trial balance into statements a reviewer can tie out line by line.

> **Not professional advice.** This skill prepares drafts and workpapers. It is not professional accounting, tax or investment advice. A qualified professional must review before anything is posted, paid, filed or reported.

## Inputs

- Period type and period (month, quarter, year to date, year).
- A closed trial balance or account-level data for the period, plus comparison data (prior period, prior year, budget or forecast).
- The account grouping (which accounts roll into which statement lines), or the chart of accounts.
- The framework the user follows. If unknown, ask; do not assume.

Context used from the active profile: `company.name`, `company.business_model`, `regional.currency`, `regional.date_format`, `regional.jurisdictions`.

## Steps

1. **Confirm the books are closed** for the period (see `fin-month-end-close`). If not, say the statements are preliminary in the title.
2. **Map accounts to lines** using the user's grouping. List any account you could not map rather than guessing.
3. **Build the statements** using the formats in [references/statement-formats.md](references/statement-formats.md): income statement, balance sheet, and cash flow statement by the indirect method.
4. **Tie out**: assets equal liabilities plus equity; the cash flow statement's closing cash equals the balance sheet cash; net income agrees between the income statement and the cash flow statement; retained earnings roll forward. Show each check and its result.
5. **Compare**: amount and percentage change against each comparison, and margin changes in percentage points. Percentage change is (current minus comparison) divided by the absolute comparison value; show "n/m" (not meaningful) when the comparison is zero.
6. **List material variances** using the user's thresholds, or the example thresholds in the reference file if none are given, for explanation by `fin-variance-analysis`.
7. **Key metrics**: revenue growth, gross margin, operating margin, net margin, operating expenses as a share of revenue.

## Output

The statements with comparison columns, the tie-out checks, key metrics, the material variance list, unmapped accounts and open questions. State units (for example "in thousands of INR") at the top of each statement.

## Quality checklist

- [ ] Every line traces to accounts in the trial balance; totals recalculated.
- [ ] All tie-out checks pass, or the failure is the first finding.
- [ ] Presentation follows the named framework; differences from the user's prior statements are explained.
- [ ] Non-standard measures (for example adjusted earnings) are labeled and reconciled to the framework measure.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). These are internal drafts. Never present them as audited, and never submit or file them. Possible material misstatements go to a human immediately.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): headline figures, tie-out results, material variances and open questions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
