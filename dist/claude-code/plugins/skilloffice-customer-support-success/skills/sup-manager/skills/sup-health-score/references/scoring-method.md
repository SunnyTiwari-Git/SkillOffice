# Scoring method

## 1. Signal mappings

Write a mapping for every signal before weighting. Examples:

| Signal | Raw measure | Mapping to 0 to 100 |
| --- | --- | --- |
| Usage | Logins per active seat per week | 0 logins = 0, 5 or more = 100, linear between |
| Key feature adoption | Share of seats using the core feature in the last 30 days | 0% = 0, 80% or more = 100 |
| Support experience | Open high-priority tickets older than SLA | 0 = 100, 1 = 50, 2 or more = 0 |
| Billing health | Payment status | Current = 100, one failed payment = 40, overdue more than 30 days = 0 |
| Sentiment | Latest satisfaction rating (0 to 10) | rating × 10 |

A single 0 to 6 rating from one person is a detractor response; an aggregate score across many respondents is a different measure. Do not mix them.

## 2. Weights

Weights sum to 1. Illustrative starting point: usage 0.30, key feature adoption 0.25, support 0.15, billing 0.15, sentiment 0.15. Adjust only with evidence and record why.

## 3. Freshness and coverage

- Each signal has a freshness window (for example usage: last 30 days; sentiment: last 120 days).
- A signal outside its window is unavailable.
- Coverage = sum of the weights of available signals.
- Agree a minimum coverage (for example 0.6). Below it, the result is "insufficient data".

## 4. Formula with missing data

```text
score = sum(weight × signal score, over available signals) / sum(weights of available signals)
```

Worked example: only usage (80) and key feature adoption (60) are available.

```text
score    = (0.30 × 80 + 0.25 × 60) / (0.30 + 0.25) = 39 / 0.55 = 70.9
coverage = 0.55
```

With a minimum coverage of 0.6, this account is "insufficient data", not "needs attention". Report the partial score for information only.

## 5. Tiers (illustrative until validated)

| Score | Tier | Suggested human action |
| --- | --- | --- |
| 80 to 100 | Healthy | Normal rhythm; look for expansion only if the customer's goals support it |
| 60 to 79 | Needs attention | Proactive check-in |
| 40 to 59 | At risk | Success review with the account owner |
| 0 to 39 | Critical | Personal outreach and an escalation review |

## 6. Validation

With past outcomes: take scores from an earlier date, compare with renewals and churn since, and report churn rate per tier and how many churned accounts were rated healthy. With fewer than about 30 outcomes, say the result is indicative only. Recalibrate at least twice a year, and record every change to the model.
