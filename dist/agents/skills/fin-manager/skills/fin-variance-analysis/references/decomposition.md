# Decomposition methods

Every method below reconciles exactly: the drivers sum to the total variance. Always show that check.

Notation: A = actual, B = budget or other comparison, V = volume (units), P = price per unit, i = a product or segment, total V = sum of V_i, mix share m_i = V_i / total V.

## Price and volume (single product)

- Volume effect = (A_V minus B_V) times B_P
- Price effect = (A_P minus B_P) times A_V
- Check: volume effect plus price effect = A_V times A_P minus B_V times B_P

Worked example: budget 10,000 units at 50 = 500,000; actual 11,000 units at 48 = 528,000.

- Volume effect = (11,000 minus 10,000) times 50 = +50,000
- Price effect = (48 minus 50) times 11,000 = minus 22,000
- Total = +28,000, which equals 528,000 minus 500,000.

## Price, volume and mix (several products)

- Volume effect = (A total V minus B total V) times the sum over i of (B m_i times B_P_i)
- Mix effect = A total V times the sum over i of ((A m_i minus B m_i) times B_P_i)
- Price effect = the sum over i of A_V_i times (A_P_i minus B_P_i)
- Check: the three effects sum to the sum over i of (A_V_i times A_P_i) minus the sum over i of (B_V_i times B_P_i).

Worked example: two products, budget prices 60 and 40.

| Product | Budget units | Actual units | Budget price | Actual price |
| --- | --- | --- | --- | --- |
| X | 500 | 400 | 60 | 60 |
| Y | 500 | 600 | 40 | 41 |

- Budget revenue = 500 times 60 + 500 times 40 = 50,000. Actual revenue = 400 times 60 + 600 times 41 = 48,600. Total = minus 1,400.
- Volume effect: total units unchanged at 1,000, so 0.
- Mix effect = 1,000 times ((0.4 minus 0.5) times 60 + (0.6 minus 0.5) times 40) = 1,000 times (minus 6 + 4) = minus 2,000.
- Price effect = 400 times 0 + 600 times 1 = +600.
- Check: 0 minus 2,000 + 600 = minus 1,400.

## Headcount and rate (people costs)

- Headcount effect = (A average headcount minus B average headcount) times B average cost per head
- Rate effect = (A average cost per head minus B average cost per head) times A average headcount
- Check: the two effects sum to A total cost minus B total cost.
- Explain timing separately when hires happened earlier or later than planned (partial-period effect), and use totals only.

## Operating expense categories

Split the variance into: headcount-driven costs; volume-driven costs (hosting, transaction fees, commissions, shipping); discretionary spend; contractual or fixed costs; one-off items; timing between periods. The category amounts must sum to the total.

## Bridge format

```text
Comparison value               X
  + driver 1                   X
  - driver 2                  (X)
  ...
  unexplained (if any)         X
Actual value                   X
```

Keep 5 to 8 drivers; group small ones as "other", which must itself be explained if material.

## Forecast accuracy

- Accuracy for a period = 1 minus |actual minus forecast| divided by |actual|.
- Mean absolute percentage error = the average of |actual minus forecast| divided by |actual| across periods.
- Variances that are favorable every period suggest a conservative budget; unfavorable every period suggests an aggressive budget or an execution problem.
