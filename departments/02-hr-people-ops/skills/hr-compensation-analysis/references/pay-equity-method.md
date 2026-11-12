# Pay analysis method

## Terms

- **Total compensation:** base pay plus bonus plus the annualized value of equity, plus benefits where a value is known. Always say which parts are included.
- **Band:** minimum, midpoint and maximum pay for a role and level, sometimes by location.
- **Compa-ratio:** pay divided by the band midpoint. 1.00 is at midpoint; below 0.90 or above 1.10 usually deserves a look, but use the company's own thresholds if it has them.
- **Range penetration:** (pay minus minimum) divided by (maximum minus minimum).

Worked example: band 900,000 to 1,300,000, midpoint 1,100,000. Pay 990,000 gives a compa-ratio of 990,000 / 1,100,000 = 0.90 and a range penetration of (990,000 minus 900,000) / (1,300,000 minus 900,000) = 0.225.

## Checks

| Check | How | Finding when |
| --- | --- | --- |
| Below band minimum | Pay < minimum | Any case |
| Above band maximum | Pay > maximum | Any case |
| Spread in a role | Same role, level and location: compare highest and lowest | Spread wider than the company's tolerance, without a documented reason |
| Compression | Level N+1 pay close to or below level N | Overlap the pay philosophy does not intend |
| New hire inversion | New hires above tenured people in the same role and level | Any case, for review |
| Legal minimums | Pay against minimum wage rules in the jurisdiction | Only if the user provides the applicable minimum; otherwise flag for HR to confirm |

## Aggregate pay equity check

Only when the user asks and supplies lawfully collected group data.

1. Compare like for like: same role, level and location.
2. Suppress any group with fewer than five people, so individuals cannot be identified.
3. Report the median gap between groups within each comparable set, in currency and percent.
4. Separate gaps explained by documented, job-related factors (level, location, time in role, performance rating under a consistent process) from unexplained gaps.
5. Unexplained gaps are findings for HR and legal to investigate. Methods such as regression analysis need a qualified analyst and legal guidance; recommend them rather than presenting a statistical conclusion here.

## Equity grant modeling

Value = units x price or valuation per unit, under the assumptions the user gives. Show vesting by year. Say clearly that private company equity values are estimates and not guaranteed.
