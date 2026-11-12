# SQL dialect notes and common patterns

## Dialect differences that most often break queries

| Need | PostgreSQL | Snowflake | BigQuery | Redshift | Databricks | MySQL | SQL Server |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Truncate to month | `DATE_TRUNC('month', ts)` | `DATE_TRUNC('month', ts)` | `DATE_TRUNC(d, MONTH)` / `TIMESTAMP_TRUNC(ts, MONTH)` | `DATE_TRUNC('month', ts)` | `DATE_TRUNC('MONTH', ts)` | `DATE_FORMAT(ts, '%Y-%m-01')` | `DATETRUNC(month, ts)` (2022+) |
| Add days | `d + INTERVAL '7 days'` | `DATEADD(day, 7, d)` | `DATE_ADD(d, INTERVAL 7 DAY)` | `DATEADD(day, 7, d)` | `DATE_ADD(d, 7)` | `DATE_ADD(d, INTERVAL 7 DAY)` | `DATEADD(day, 7, d)` |
| Difference in days | `d2 - d1` | `DATEDIFF(day, d1, d2)` | `DATE_DIFF(d2, d1, DAY)` | `DATEDIFF(day, d1, d2)` | `DATEDIFF(d2, d1)` | `DATEDIFF(d2, d1)` | `DATEDIFF(day, d1, d2)` |
| Case-insensitive match | `ILIKE` | `ILIKE` | `LOWER(x) LIKE` | `ILIKE` | `ILIKE` | `LIKE` (collation) | `LIKE` (collation) |
| Safe division | `x / NULLIF(y, 0)` | `DIV0(x, y)` or NULLIF | `SAFE_DIVIDE(x, y)` | NULLIF | `try_divide(x, y)` or NULLIF | NULLIF | NULLIF |
| Row limit | `LIMIT n` | `LIMIT n` | `LIMIT n` | `LIMIT n` | `LIMIT n` | `LIMIT n` | `TOP (n)` |
| JSON field | `data->>'key'` | `data:key::string` | `JSON_VALUE(data, '$.key')` | `JSON_EXTRACT_PATH_TEXT(data, 'key')` | `data:key` | `data->>'$.key'` | `JSON_VALUE(data, '$.key')` |

Performance notes:

- BigQuery bills per byte scanned: always filter on the partition column and avoid unused columns. Use a dry run to preview cost.
- Snowflake and BigQuery use clustering, not indexes; filter on clustering columns.
- Redshift: distribution and sort keys decide join and filter speed; check `EXPLAIN`.
- PostgreSQL and MySQL: check `EXPLAIN` (or `EXPLAIN ANALYZE` on a copy, since it executes the query) and index frequently filtered or joined columns.

## Schema discovery (read-only)

```sql
-- PostgreSQL, Redshift, MySQL, SQL Server, Snowflake (information_schema)
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'orders'
ORDER BY ordinal_position;

-- BigQuery
SELECT table_name FROM `project.dataset.INFORMATION_SCHEMA.TABLES`;
```

## Common patterns

### Running totals and moving averages

```sql
SUM(revenue) OVER (ORDER BY day ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_revenue,
AVG(revenue) OVER (ORDER BY day ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS revenue_7d_avg
```

### Latest record per key (deduplication)

```sql
WITH ranked AS (
  SELECT id, status, updated_at,
         ROW_NUMBER() OVER (PARTITION BY id ORDER BY updated_at DESC) AS rn
  FROM source_table
)
SELECT id, status, updated_at FROM ranked WHERE rn = 1;
```

### Monthly cohort retention (PostgreSQL syntax)

```sql
WITH cohorts AS (
  SELECT user_id, DATE_TRUNC('month', first_seen_at) AS cohort_month
  FROM users
),
activity AS (
  SELECT DISTINCT user_id, DATE_TRUNC('month', event_at) AS active_month
  FROM events
)
SELECT c.cohort_month,
       COUNT(DISTINCT c.user_id) AS cohort_size,
       COUNT(DISTINCT a.user_id) FILTER (WHERE a.active_month = c.cohort_month + INTERVAL '1 month') AS active_month_1,
       COUNT(DISTINCT a.user_id) FILTER (WHERE a.active_month = c.cohort_month + INTERVAL '3 months') AS active_month_3
FROM cohorts c
LEFT JOIN activity a ON a.user_id = c.user_id
GROUP BY c.cohort_month
ORDER BY c.cohort_month;
```

### Funnel conversion

```sql
WITH steps AS (
  SELECT user_id,
         MAX(CASE WHEN event = 'view' THEN 1 ELSE 0 END) AS viewed,
         MAX(CASE WHEN event = 'signup' THEN 1 ELSE 0 END) AS signed_up,
         MAX(CASE WHEN event = 'purchase' THEN 1 ELSE 0 END) AS purchased
  FROM events
  WHERE event_at >= CURRENT_DATE - INTERVAL '30 days'
  GROUP BY user_id
)
SELECT SUM(viewed) AS viewed,
       SUM(signed_up) AS signed_up,
       SUM(purchased) AS purchased,
       ROUND(100.0 * SUM(signed_up) / NULLIF(SUM(viewed), 0), 1) AS view_to_signup_pct,
       ROUND(100.0 * SUM(purchased) / NULLIF(SUM(signed_up), 0), 1) AS signup_to_purchase_pct
FROM steps;
```

## Join safety check

Count rows before and after every join. If the count grows unexpectedly, the relationship is one-to-many or many-to-many; aggregate first or count `DISTINCT` keys.
