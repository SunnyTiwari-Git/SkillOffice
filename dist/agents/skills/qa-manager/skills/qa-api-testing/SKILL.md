---
name: qa-api-testing
description: "Tests HTTP APIs against their contract: request and response shapes, status codes, input validation, authentication and authorization, pagination, error format, idempotency and basic performance signals. Tool agnostic (works with the project's test framework, an API client or plain HTTP calls) and runs only against local or approved test environments. Use when asked to \"test this API\", \"check the endpoints\", \"write API tests\", or to verify a backend change."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# API Testing

Test an API the way its clients depend on it: the contract. Clients break when status codes, field names, types, error formats or pagination change without warning, so those get as much attention as business logic.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.testing`, `technical.website_architecture`, `regional.date_format`.

## Before you start

1. **Find the contract.** An OpenAPI or similar specification, API docs, or, failing that, the route handlers and existing tests. Note mismatches between docs and code as findings.
2. **Confirm the target.** Local or an approved test environment only. Never call production APIs, payment providers' live modes or endpoints that send real messages without explicit approval.
3. **Use the project's tools.** Add tests in the project's existing framework and folder. If calling endpoints ad hoc, use whatever HTTP client is available through the platform's normal permission prompts.
4. **Credentials.** Use test accounts and tokens supplied by the user through environment variables. Never print tokens in output, write them into test files or store them in memory.

## What to check per endpoint

| Area | Checks |
| --- | --- |
| Happy path | Correct status (200, 201, 204), body shape and types match the contract, required fields present, location headers on create |
| Validation | Missing required fields, wrong types, out-of-range values, extra unknown fields, oversized payloads: expect 400 or 422 with a useful, consistent error body |
| Authentication | No token, expired token, malformed token: expect 401 |
| Authorization | Valid user acting on another user's or tenant's resource, wrong role: expect 403 or 404, and no data leaked in the error |
| Not found and conflicts | Unknown ids (404), duplicates or version conflicts (409) |
| Pagination and filtering | First, middle, last and empty pages; page size limits; stable ordering; filters and sorting combined |
| Idempotency | Repeating a PUT or DELETE gives the same result; retrying a POST with an idempotency key does not create duplicates (where supported) |
| Error format | Same structure for all errors; no stack traces, SQL or internal paths in responses |
| Dates, money, encoding | Date and time formats and time zones as documented; money as integers or decimal strings, never floating point surprises; Unicode round trips |
| Rate limits | 429 with a retry hint where rate limiting is documented |
| Basic performance | Note unusually slow responses and unbounded list endpoints as findings; load testing is a separate decision |

Design the inputs with `qa-test-case-design` techniques (partitions and boundaries) when the endpoint has rules. More detail and examples: [references/api-checklist.md](references/api-checklist.md).

## Output

- API tests saved in the project's existing framework, if the user wants automated tests.
- A results table: endpoint, case, request summary, expected status and body, actual, pass or fail.
- Findings for failures and contract mismatches in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 11-quality-assurance/qa-api-testing`. Authorization failures and data leaks are critical.

## In a managed run

When `qa-manager` runs this skill, report results and findings; do not fix application code. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): batch test results at the end of the stage and record test files you wrote with `verify-file`.

## Handoff

End with a handoff (under 400 words): Done (endpoints and cases tested), Decisions (what was out of scope, environment used), Changed files (test files written), Tests and checks (pass and fail counts), Open issues (finding ids, contract mismatches), Next (`qa-bug-report` for failures, or the manager).
