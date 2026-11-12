# Statistics guide

## Center and spread

| Situation | Report |
| --- | --- |
| Symmetric, no outliers | Mean and standard deviation |
| Skewed (revenue, session length) | Median and IQR, plus the mean so readers see the skew |
| Categories or ranks | Mode, counts and shares |
| Comparing variability across metrics | Coefficient of variation (standard deviation divided by mean) |

Useful percentiles: p5, p25, p50, p75, p90, p95, p99. A sentence such as "the median order is 1,200 but the top 10% exceed 6,500" tells more than an average.

## Growth and trend

- Simple growth: (current minus previous) divided by previous.
- Compound annual growth: (ending divided by beginning) to the power of (1 divided by years), minus 1.
- Smooth daily data with a 7-day moving average (removes weekday effects) or 28-day (also smooths monthly effects).
- Seasonal businesses: compare year over year.

## Forecasting (simple methods only)

Naive (next equals last), seasonal naive (next equals the same period last year or week), linear trend for clearly linear series, moving average. Always give a range, for example "10,000 to 12,000 signups", never a single precise number. Escalate to a data scientist for multiple seasonalities, external drivers or forecasts that drive spending or staffing.

## Outliers and anomalies

- Z-score beyond 3 for roughly normal data.
- IQR rule: below Q1 minus 1.5 IQR or above Q3 plus 1.5 IQR, robust to skew.
- Time series: deviation from a moving baseline beyond 2 to 3 standard deviations of past deviations. Separate one-off spikes from sustained level shifts.

Never delete outliers automatically. Decide whether each is a data error (fix or exclude), a genuine extreme (keep, use robust statistics) or a different population (segment it). Report what was excluded and how many records.

## Choosing a test

| Question | Test |
| --- | --- |
| Two group means, roughly normal | Independent t-test (Welch's version when variances differ) |
| Two proportions (conversion rates) | Two-proportion z-test or chi-squared |
| Same items before and after | Paired t-test |
| Three or more group means | ANOVA, then pairwise comparisons |
| Skewed data, two groups | Mann-Whitney U |
| Two categorical variables | Chi-squared test of independence |

Report the effect size, a 95% confidence interval and the business impact. Statistical significance with a tiny effect is often not worth acting on.

## Sample size

- Small samples give unreliable answers even with a "significant" p-value.
- For proportions, at least about 30 events per group for basic reliability; small effects (a fraction of a percentage point) usually need thousands of observations per group.
- When the sample is small, say what size of effect it could and could not detect.

## Traps to name explicitly

- Correlation is not causation: consider reverse causation, confounders and coincidence.
- Multiple comparisons: test 20 metrics at 0.05 and about one will look significant by chance. Say how many were tested, or adjust (for example divide alpha by the number of tests).
- Simpson's paradox: an overall trend can reverse inside every segment because the mix changed.
- Survivorship bias: who is missing from the data (churned users, failed orders)?
- Selection bias: segments defined by the outcome itself ("users who completed onboarding retain better").
- Incomplete periods, shifted denominators, averages of averages, mixed time zones.
- False precision: "about 5%" is more honest than "4.73%".
