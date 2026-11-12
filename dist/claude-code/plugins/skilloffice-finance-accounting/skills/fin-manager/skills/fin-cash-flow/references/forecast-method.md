# Forecast method

## Placing receipts

For each open invoice: expected receipt date = due date + the customer's mean lag (days paid after due date; negative if they pay early). Use invoice date + mean days-to-pay if due dates are missing.

- Low case: expected receipt date + 1 standard deviation of that customer's lag.
- High case: expected receipt date minus 1 standard deviation, but never before today.
- Fewer than 3 payments for a customer: use the all-customer mean and spread, and list the customer under "thin data".
- Disputed or very old invoices (over 90 days past due): exclude from the expected case unless the user says otherwise, and list them.

Placing whole receipts in a later window, rather than scaling the net balance by a percentage, keeps every case traceable to named invoices.

## Placing payments

- Payables: on the due date, or the user's usual payment day.
- Fixed costs: on their schedule (payroll dates and totals, rent, loan and tax payments, subscriptions).
- Payments are the same in all three cases. Add a buffer the user chooses (for example two weeks of fixed costs) and flag any week the low case falls below it.

## Running balance

Balance at the end of week n = opening balance + sum of receipts to week n minus sum of payments to week n.

## Worked example (one window)

Opening balance 31,000 on 1 April. Payroll 22,000 on 15 April. Customer A owes 8,400 due 5 April and usually pays 18 days late (standard deviation 6 days), so the expected receipt is 23 April, low case 29 April. Other receipts by 14 April: 6,000. Other payments by 14 April: 18,000.

- Cash on 14 April before payroll: 31,000 + 6,000 minus 18,000 = 19,000.
- Payroll on 15 April needs 22,000, and Customer A's receipt arrives after it in every case.
- Shortfall at payroll: 19,000 minus 22,000 = minus 3,000. Risk: "Payroll on 15 April is short by 3,000 in all cases unless Customer A pays early or spend moves."

## Assumptions table (always include)

| Assumption | Value |
| --- | --- |
| Opening balance and date | |
| Sources used | |
| Timing method | Mean lag per customer, plus or minus 1 standard deviation |
| Thin-data customers | |
| Excluded items | |
| Buffer | |
