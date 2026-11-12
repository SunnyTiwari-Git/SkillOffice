# Business case calculations

Show every calculation so a reader can check it. Use the profile's currency.

## Payback period

Payback is when cumulative net cash turns positive.

Worked example (amounts in thousands):

| Year | Cost | Benefit | Net | Cumulative |
| --- | --- | --- | --- | --- |
| 0 | 120 | 0 | -120 | -120 |
| 1 | 20 | 70 | 50 | -70 |
| 2 | 20 | 90 | 70 | 0 |
| 3 | 20 | 90 | 70 | 70 |

Payback is at the end of year 2.

## Net present value (only if the user gives a rate)

NPV = sum over years of Net / (1 + r)^year.

With r = 10% and the table above:

- Year 0: -120 / 1.000 = -120.00
- Year 1: 50 / 1.100 = 45.45
- Year 2: 70 / 1.210 = 57.85
- Year 3: 70 / 1.331 = 52.59
- NPV = -120.00 + 45.45 + 57.85 + 52.59 = 35.89

A positive NPV means the initiative beats the company's rate. If the user has no rate, report payback and simple return and say NPV was not calculated.

## Sensitivity

Vary one key assumption at a time and recompute:

| Assumption | Low | Base | High | Payback (low / base / high) |
| --- | --- | --- | --- | --- |

Name the assumption whose low case turns the recommendation negative. That is the one to test first.

## Common errors to check

- The same benefit counted in two lines (for example "time saved" and "headcount avoided").
- One-off costs only, with ongoing costs missing.
- Benefits starting on day one when adoption takes months.
- Percentages applied to the wrong base.
