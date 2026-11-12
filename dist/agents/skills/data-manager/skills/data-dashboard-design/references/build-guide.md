# Dashboard build guide

## Standard layout

```text
+---------------------------------------------------------+
| Title, period and data "as of" date        [Filters]    |
+-------------+-------------+-------------+---------------+
| KPI card    | KPI card    | KPI card    | KPI card      |
| value       | value       | value       | value         |
| change, vs  | change, vs  | change, vs  | change, vs    |
| target      | target      | target      | target        |
+-------------+-------------+-------------+---------------+
| Primary chart (largest)    | Secondary chart            |
|                            |                            |
+----------------------------+----------------------------+
| Detail table (sortable, paginated)                      |
+---------------------------------------------------------+
| Definitions and data notes                              |
+---------------------------------------------------------+
```

Variations:

- Executive summary: four to six headline KPIs, one trend, one breakdown, a short "needs attention" list.
- Subscription metrics: recurring revenue and growth, unit economics (acquisition cost, lifetime value, payback), cohort retention, churn split into gross, net and expansion.
- Operations: service status, throughput, error rate against threshold, recent alerts with times.

## Self-contained HTML dashboard

- One HTML file with inline CSS and JavaScript; data embedded as JSON; works offline when no external library is used.
- Semantic structure: header, main, sections, tables with header cells; sufficient color contrast; keyboard-usable filters.
- Responsive grid; print-friendly styles.
- Filters (drop-downs, date range) update every chart and the table together.
- Number formatting with thousands separators, currency from `regional.currency`, percentages with sensible precision.
- If a charting library is needed and the user agrees to load it from a CDN: pin the exact version, include the subresource integrity hash and `crossorigin` attribute, and tell the user the file needs internet access when opened. Otherwise draw simple charts with inline SVG.
- Never embed credentials, keys, connection strings or personal data.

## Data size limits for a browser file

| Rows | Approach |
| --- | --- |
| Under 1,000 | Embed directly |
| 1,000 to 10,000 | Embed, pre-aggregate for charts |
| 10,000 to 100,000 | Pre-aggregate before embedding |
| Over 100,000 | Not suitable for a single file; use a BI tool or pagination |

Keep line series under about 500 points, bar charts under about 50 categories, tables paginated at 50 to 200 rows.

## Refresh and alerts

- Point dashboards at summary tables refreshed on a schedule, not at the production database.
- Alert when a metric moves beyond about two standard deviations from its own rolling baseline; review thresholds regularly to avoid alert fatigue.
- Show the "as of" time on every dashboard.
