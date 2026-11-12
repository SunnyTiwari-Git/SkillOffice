---
name: data-sql
description: Writes correct, readable and efficient SQL for the user's dialect (PostgreSQL, MySQL, SQL Server, SQLite, DuckDB, Snowflake, BigQuery, Redshift, Databricks and others), read-only by default. Use when turning a data question into a query, building CTEs with joins, window functions or aggregations, optimizing a slow query, translating between dialects or debugging a query error. Produces queries for the user to run; it never runs queries against a database itself.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "15-data-analytics-ai"
---

# Data SQL

Turn a data question into a query the user can run with confidence: correct first, then readable, then fast. Read-only by default.

## Inputs

- The question or data need, in plain words.
- The SQL dialect. If unknown, ask before writing dialect-specific syntax.
- Table and column names, a schema description or a sample of the data. If missing, ask, or give schema discovery queries from [references/dialects.md](references/dialects.md).
- Optional: an existing query to fix or optimize, and the error message.

Context used from the active profile: `technical.stack`, `regional.time_zone`, `regional.jurisdictions`.

## Steps

1. **Parse the need**: output columns, filters, time range, grain, aggregations, joins, sort order and size of the result.
2. **Confirm the dialect and schema.** Never guess column names; mark any assumed name clearly as an assumption.
3. **Write the query** following these rules:
   - `SELECT` only. Never write `INSERT`, `UPDATE`, `DELETE`, `MERGE`, `DROP`, `ALTER`, `TRUNCATE` or `GRANT` unless the user explicitly asks; then mark it destructive, wrap it in a transaction where the dialect allows, and tell the user to run it first on a copy.
   - Add a `LIMIT` (or the dialect's equivalent) to exploratory queries.
   - Name only the columns needed; never `SELECT *` in a final query.
   - One CTE per logical step, with descriptive names; filter early; use date partition filters on large tables.
   - Qualify columns with table aliases in joins; check that joins cannot multiply rows (count before and after).
   - Use `NULLIF` or safe division for every rate; aggregate from raw rows, never average averages.
   - Use complete periods and one time zone, stated in a comment (`regional.time_zone` unless the data says otherwise).
   - Return aggregated results rather than rows about individual people. If personal data columns are needed, select only what the question requires and suggest masking.
   - Comment the why of non-obvious logic.
4. **Explain** each CTE in one line, list assumptions, and add performance notes (partitions, expected scan size, likely bottlenecks).
5. **Suggest variations**: a different period, grain or filter.
6. **Debugging**: when a query fails, check dialect syntax, column names and case, types and casts, division by zero, ambiguous columns and `GROUP BY` completeness, in that order.

Dialect functions, common patterns (cohort retention, funnels, deduplication, running totals) and schema discovery: [references/dialects.md](references/dialects.md).

## Output

1. The query in a fenced SQL block, with the dialect named.
2. What each part does, assumptions and performance notes.
3. A short checklist for the user to sanity-check the results (row count, totals versus a known figure).

## Quality checklist

- [ ] Read-only unless the user explicitly asked otherwise, and destructive statements are marked.
- [ ] No guessed column names presented as fact.
- [ ] Rates guard against division by zero; periods are complete; the time zone is stated.
- [ ] No unnecessary personal data in the result.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never ask for or include database passwords, connection strings or keys in queries or outputs. Never run a query against a production database or write to any database without the user's explicit approval; this skill writes queries, the user runs them.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): the query, its assumptions and what the results should be checked against. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); store the query text, never result rows.
