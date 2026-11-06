# Review output template

```markdown
## Code review: [change title]

### Summary
[1 to 2 sentences on what changed and its overall quality]

### Findings

- id: F-001
  severity: high
  title: Search date filter silently returns no results for invalid dates
  location: src/search.ext:25
  evidence: "parse_date returns null for '2026-13-01' and the query runs with no filter error"
  recommendation: Validate the date format at the boundary and return a clear error with an example
  source_skill: 10-software-development/dev-code-review
  status: open

- id: F-002
  severity: low
  title: Magic number for the progress reporting interval
  location: src/indexer.ext:130
  evidence: "if count % 100 == 0"
  recommendation: Name the constant
  source_skill: 10-software-development/dev-code-review
  status: open

### Strengths
- Clear separation between parsing and storage (src/db.ext:15-42)
- Tests cover the empty and malformed input cases

### Declined to judge
- Visual styling of the CLI output: not part of the requirements

### Verdict
Approve with fixes. The core logic is sound; F-001 must be fixed before merge.
```
