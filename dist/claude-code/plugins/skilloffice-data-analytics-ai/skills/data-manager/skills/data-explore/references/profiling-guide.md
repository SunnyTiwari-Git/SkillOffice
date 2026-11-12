# Profiling guide

## Column classes

| Class | Examples | What to profile |
| --- | --- | --- |
| Identifier | order_id, user_id | Uniqueness, null rate, format |
| Dimension | status, region, plan | Distinct count, top values, unexpected values |
| Metric | revenue, duration, score | Range, mean and median, percentiles, zeros, negatives |
| Date | created_at, event_date | Range, future dates, gaps, time zone |
| Text | notes, description | Length, empty strings, personal data |
| Boolean | is_active | True rate, null rate |
| Nested | JSON, arrays | Structure, presence of keys |

## Completeness

| Non-null share | Rating | Action |
| --- | --- | --- |
| Over 99% | Complete | None |
| 95 to 99% | Mostly complete | Check why values are missing |
| 80 to 95% | Incomplete | Decide whether the gap affects the question |
| Under 80% | Sparse | Usually unusable without a clear handling rule |

## Red flags

- Placeholder values: 0, -1, 999999, "N/A", "TBD", "test", "xxx".
- One value far more frequent than the rest: likely a default.
- Impossible values: ages over 150, negative durations, end dates before start dates, percentages over 100.
- Round number bias: values ending only in 0 or 5 suggest estimates.
- Stale data: no recent updates in a system that should be active.
- Same concept written several ways: "USA", "US", "United States".
- Numbers or dates stored as text.
- A status that says "completed" with no completion date.

## Distribution shapes

- Normal: mean close to median.
- Right-skewed (revenue, session length): report the median alongside the mean.
- Bimodal: probably two populations; segment them.
- Power law: a few very large values; report percentiles.
- Uniform: often synthetic or randomly generated; ask about the source.

## Time series checks

Trend, weekly and yearly seasonality, holiday effects, change points (sudden level shifts) and single-point anomalies. Compare like periods (week to same week, year over year) before calling a change real.

## Personal data

Columns with names, emails, phone numbers, addresses, government IDs, health, financial or location details are personal data. Report counts and formats only. Never print example values. Note which regulations may apply based on `regional.jurisdictions`.
