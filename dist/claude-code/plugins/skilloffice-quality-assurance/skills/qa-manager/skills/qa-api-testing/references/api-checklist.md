# API testing checklist and examples

## Status code expectations

| Situation | Expected |
| --- | --- |
| Read succeeds | 200 |
| Create succeeds | 201 with the new resource or a Location header |
| Delete or update with no body | 204 |
| Malformed request or failed validation | 400 or 422, consistently |
| No or invalid authentication | 401 |
| Authenticated but not allowed | 403 (or 404 to avoid revealing existence) |
| Resource missing | 404 |
| Conflict or duplicate | 409 |
| Too many requests | 429 with a retry hint |
| Server fault | 500 range, with a generic message and no internals |

A 200 with `{"error": ...}` in the body is a contract smell; report it.

## Authorization matrix

For each endpoint that touches user or tenant data, build a small matrix and test every cell:

| Actor | Own resource | Other user's resource | Other tenant's resource |
| --- | --- | --- | --- |
| Anonymous | 401 | 401 | 401 |
| Regular user | allowed | 403 or 404 | 403 or 404 |
| Admin of same tenant | allowed | allowed if documented | 403 or 404 |

Changing an id in the URL or body to someone else's is the most common real-world access bug (insecure direct object reference). Always try it.

## Validation inputs worth trying

- Missing each required field, one at a time.
- Wrong type (string for number, object for array).
- Boundary values for every limit (min minus 1, min, max, max plus 1).
- Empty string versus null versus absent.
- Very long strings, Unicode, emoji, leading and trailing spaces.
- Unknown extra fields: rejected or ignored, but consistently and as documented.

## Pagination

- Request page 1, the last page and one past the last.
- Page size 0, 1, the maximum, and above the maximum.
- Insert or delete records between page requests and check for duplicates or gaps (cursor pagination should handle this; offset pagination often does not).

## Contract drift

Compare the specification with real responses: field names, types, nullability, enums, date formats. Every difference is a finding even when tests pass, because clients rely on the documented contract.

## Error body consistency

Pick one error from each category (validation, auth, not found, server) and compare shapes. They should share one structure, for example `{ "error": { "code", "message", "details" } }`, and never include stack traces, SQL, file paths or secrets.
