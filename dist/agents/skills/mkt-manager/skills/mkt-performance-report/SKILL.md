---
name: mkt-performance-report
description: Turns marketing data the user provides into a performance report with an executive summary, key metrics against prior period and target, trend analysis, what worked and what did not, insights and prioritized recommendations for the next period. Covers campaign, channel (email, social, paid, SEO), content and overall marketing reports on a weekly, monthly or quarterly cadence. Use when the user asks for a marketing report, campaign results, a performance analysis, a metrics summary or a quarterly marketing review.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "06-marketing-content-pr"
---

# Performance Report

Turn marketing numbers into a clear report that says what happened, why, and what to do next.

## Inputs

- Report type: campaign, channel, content, overall marketing, or custom.
- Time period and, ideally, a comparison period.
- The data: pasted numbers, CSV or spreadsheet exports, or described dashboards. Ask the user to provide it; never invent it.
- Optional: targets, audience for the report (executive summary or analyst detail), events during the period (launches, outages, seasonality).

Context used from the active profile: `company.name`, `marketing.channels`, `marketing.campaign_preferences`, `regional.currency`, `regional.date_format`, `regional.output_language`.

## Steps

1. **Check the data.** Note the source, period and any gaps or inconsistencies (for example totals that do not add up, mismatched date ranges). Compute rates only from matching, complete time windows. Flag anything you cannot verify.
2. **Pick the metrics** for the report type. Definitions and rough benchmarks: [references/metrics-guide.md](references/metrics-guide.md). Lead with metrics tied to business goals, not vanity numbers.
3. **Build the metrics table**: metric, this period, prior period, change, target, status (on track, at risk, off track).
4. **Analyze trends**: direction over 4 or more periods, inflection points and what happened then, seasonality, one-off anomalies, leading indicators. With fewer than about 8 data points, call trends tentative.
5. **What worked and what did not**: top and bottom 3-5 items with data, a hypothesis for each, how to repeat or fix it. Label hypotheses as hypotheses.
6. **Attribution caution.** State which attribution model the data uses (last touch, first touch, other) and its blind spots; awareness channels look weak in last-touch data.
7. **Recommendations**: what to do, why (linked to a finding), expected impact, effort, priority. Place them on an impact versus effort grid: high impact and low effort first.
8. **Next period focus**: top 3 priorities, tests to run, targets.

## Output

1. Executive summary: 2-3 sentences, headline metric with direction, one win, one concern. Short enough to forward to leadership.
2. Key metrics table.
3. Trend analysis.
4. What worked; what needs improvement.
5. Insights and observations.
6. Recommendations with the impact and effort grid.
7. Next period focus.
8. Data notes: sources, gaps, assumptions. Appendix for detailed tables if the data is large.

Money in `regional.currency`, dates in `regional.date_format`. Forecasts, if any, are ranges with stated assumptions, never single precise numbers.

## Quality checklist

- [ ] Every number traces to the user's data; derived numbers show the calculation.
- [ ] Comparisons use matching periods.
- [ ] Hypotheses are labeled; correlation is not presented as causation.
- [ ] Recommendations link to specific findings.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Do not request analytics or ad account passwords; ask for exports. Remove or aggregate personal data (names, emails) found in exports before analysis, and do not repeat it in the report.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words) and follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`). Usual next step: mkt-marketing-plan to adjust the plan for the next period.
