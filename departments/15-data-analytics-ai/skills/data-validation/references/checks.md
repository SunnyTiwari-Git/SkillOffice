# Validation checks

## Pre-delivery checklist

### Data

- [ ] Right sources for the question; "as of" date noted.
- [ ] No unexpected gaps in time series or missing segments.
- [ ] Null rates in key columns checked and handling stated.
- [ ] No double counting from joins or duplicate records.
- [ ] Every filter correct; no unintended exclusions (test accounts excluded on purpose, real users not).

### Calculations

- [ ] Aggregation level matches the grain of the question.
- [ ] Denominators correct and non-zero.
- [ ] Compared periods have the same length; partial periods excluded or labeled.
- [ ] Join types appropriate; many-to-many joins controlled.
- [ ] Metric definitions match what stakeholders mean; differences noted.
- [ ] Parts add up to the whole, or the overlap is explained.

### Reasonableness

- [ ] Magnitudes plausible (no negative revenue, percentages within 0 to 100).
- [ ] Key numbers match other trusted sources within an explained margin.
- [ ] Edge cases checked: empty segments, zero-activity periods, new entities.

### Presentation

- [ ] Charts honest (zero baselines for bars, consistent scales, no 3D).
- [ ] Number formats and precision consistent.
- [ ] Titles describe the finding and the period.
- [ ] Limitations and assumptions stated.
- [ ] Reproducible from the documentation given.

## Data quality dimensions

| Dimension | Question | Example check |
| --- | --- | --- |
| Completeness | Are required values present? | Key columns have no nulls |
| Uniqueness | Are records duplicated? | Primary key is unique |
| Validity | Are values allowed? | Status is in an accepted list; amounts are 0 or more |
| Accuracy | Does data match reality? | Totals reconcile with finance or a source system |
| Consistency | Do values contradict each other? | End date after start date; "completed" rows have a completion date |
| Timeliness | Is data fresh enough? | Latest record within the expected delay |

## Testing layers for pipelines

1. Schema tests: expected columns and types exist.
2. Column tests: not null, unique, accepted values, ranges, formats.
3. Cross-table tests: foreign keys resolve, row counts reconcile between stages, totals match.

Tools such as dbt tests, Great Expectations or Soda can express these checks; use whatever the team already has. Test critical columns first, add a test whenever a data bug escapes, and alert on failures.

## Data contracts

A data contract between a producer and consumers records: owner and contact, purpose and allowed use, schema with types and required fields, which fields are personal data, quality checks (row count above zero, no missing or duplicate keys, valid values, freshness), and service levels (freshness, availability). Version the contract and review it when the schema changes.

## Common pitfalls with examples

- Join fan-out: 1,000 orders joined to 3,500 line items, then counting rows as orders.
- Survivorship: analyzing only current customers to explain churn.
- Incomplete period: a half-finished month compared with a full month.
- Shifted denominator: conversion "improves" because the definition of eligible visitors changed.
- Average of averages: group A has 100 users averaging 50, group B has 10 users averaging 200; the true average is about 63.6, not 125.
- Time zones: UTC events grouped with local business days.
- Selection bias: "users who finished onboarding retain better" when finishing onboarding is itself a sign of engagement.

## Red flags

- A metric changes more than 50% between periods with no known cause.
- Exact round numbers or identical values across periods or segments.
- Rates at exactly 0% or 100%.
- Results that confirm the hypothesis perfectly.
