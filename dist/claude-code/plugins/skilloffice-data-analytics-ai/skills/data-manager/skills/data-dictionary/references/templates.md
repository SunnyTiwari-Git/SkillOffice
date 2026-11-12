# Data dictionary templates

## File layout

```text
docs/data-dictionary.md          (one file for small setups)
docs/data/
  README.md                      overview, entities, standard filters, glossary
  metrics.md                     metric definitions
  <domain>.md                    one file per domain: sales, product, finance
```

## Entity

```markdown
### Entity: <name>

- Definition: <what it represents in the business>
- Primary table: <schema.table>
- ID field(s): <column>, and any legacy IDs
- Relationships: <one account has many users; one user belongs to one account>
- Standard filters: <exclude is_test = true; exclude internal domains>
```

## Table

```markdown
### Table: <schema.table_name>

- Purpose: <what it contains and when to use it>
- Grain: one row per <...>
- Primary key: <column(s)>
- Update frequency: <real time, hourly, daily>
- Owner: <team>

| Column | Type | Description | Personal data | Notes |
| --- | --- | --- | --- | --- |
| user_id | string | Unique user identifier | Indirect | Joins to users.user_id |
| event_type | string | Type of event | No | 15 distinct values |
| amount_cents | integer | Order total in minor currency units | No | Null for non-purchase events |
| created_at | timestamp | When the event happened | No | Stored in UTC |

Relationships:
- Joins to users on user_id (many to one).

Sample queries (read-only):
- <query 1 with a comment on what it answers>
```

## Metric

```markdown
### Metric: <name>

- Definition: <plain words>
- Formula: <exact calculation with column names>
- Source: <tables>
- Grain and period: <daily, calendar month, trailing 28 days; time zone>
- Owner: <team or person role, no personal contact details>
- Caveats: <exclusions, edge cases, known differences from other reports>
- Status: agreed on <date> / open question
```

## Standard filters

| Filter | Why | Applies to |
| --- | --- | --- |
| is_test = false | Test accounts inflate counts | All user and order tables |
| email domain not in internal list | Staff usage is not customer usage | User activity |
| status <> 'deleted' | Soft-deleted rows remain in the table | Orders |

## Interview questions

1. When people here say "user" or "customer", what exactly do they mean? Are there several types?
2. What is the main identifier for each entity? Are there several IDs for the same thing?
3. What are the two or three metrics people ask about most, and how is each calculated?
4. What should always be filtered out of queries?
5. What mistakes do new analysts usually make with this data?
6. Which tables are current state and which keep history?
7. Which time zone are timestamps stored in, and which does the business report in?
