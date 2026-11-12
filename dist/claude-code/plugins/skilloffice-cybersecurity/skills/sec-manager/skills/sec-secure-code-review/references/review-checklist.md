# Secure code review checklist

Language-neutral checks, grouped by area. Each line names the weakness and the safe pattern. Map findings to OWASP Top 10 categories where helpful; check the current OWASP Top 10 and ASVS versions before quoting category numbers.

## Input and injection

- Every input from requests, files, headers, cookies, webhooks and queues is validated server-side for type, length, range and format; allowlists preferred over blocklists.
- Database queries use parameterized statements or the ORM's safe API; no string building with user input (SQL and NoSQL, including operator injection through JSON objects).
- No shell commands built from user input; prefer library calls, or pass arguments as a list with no shell.
- No evaluation of strings as code (`eval`, `new Function`, dynamic imports of user paths, unsafe deserialization of untrusted data).
- Templates are never built from user-supplied template source.

## Output and the browser

- HTML output is auto-escaped by the template engine; "raw" or "safe" flags are used only for trusted content.
- No untrusted data written into the DOM with `innerHTML`-style APIs, `document.write`, inline event handler strings or `javascript:` URLs.
- URLs placed into `href`, `src` or redirects are checked against an allowlist of schemes and hosts.
- Content Security Policy is present for apps with user content; inline scripts avoided or protected with nonces or hashes.
- `postMessage` receivers check the sender's origin; senders set an explicit target origin.
- Secrets and long-lived tokens are not kept in browser storage that scripts can read.
- Third-party scripts are few, reviewed, and pinned with Subresource Integrity where possible.

## Authentication and sessions

- Passwords hashed with an adaptive algorithm (bcrypt, scrypt, Argon2id); never stored in plain text or with fast hashes.
- Login, password reset and MFA endpoints are rate limited and do not reveal which accounts exist.
- Reset and invitation tokens are random, single use and short lived.
- Session ids are regenerated at login; sessions expire; logout invalidates server-side state.
- Cookies carrying sessions set `HttpOnly`, `Secure` (in production over TLS) and an appropriate `SameSite` value.
- Cookie-authenticated state-changing requests are protected against CSRF (tokens, or strict origin checks plus SameSite).

## Authorization

- Every request that reads or changes an object checks that the caller may access that specific object (no IDOR).
- Role and permission checks happen on the server, not only by hiding buttons.
- Role or tenant claims from the client are never trusted without server verification.
- Admin and internal endpoints are not reachable by normal users or from the internet unless intended.
- Mass assignment is prevented: only allowlisted fields are written from request bodies.

## Files and outbound requests

- Download paths cannot escape the intended folder (path traversal); user-chosen filenames are never used directly.
- Uploads are size-limited, type-checked by content, stored outside the web root or in object storage, served with safe content types and download disposition.
- Archive extraction checks for path traversal and size bombs.
- Server-side requests to user-provided URLs are restricted by allowlist; internal and metadata addresses are blocked (SSRF).
- Outbound HTTP clients set timeouts and limit response size.

## Secrets, crypto and configuration

- No credentials, keys or tokens in source, tests, fixtures, logs or client bundles; configuration comes from the environment or a secrets manager.
- Cryptographic randomness comes from the platform's secure generator; no home-made crypto; modern algorithms only.
- Debug modes, stack traces and admin consoles are off in production.
- CORS is explicit and least-privilege; credentials are not allowed with a wildcard origin.
- Proxy and forwarded headers are trusted only from known proxies.
- Request body size, query complexity, timeouts and concurrency are bounded.

## Logging and errors

- Errors returned to users are generic; details go to server logs.
- Logs never contain passwords, tokens, full card numbers or unnecessary personal data.
- Security-relevant events (login, permission changes, payments, admin actions) are logged with who, what and when.

## Dependencies

- Lockfiles exist and are committed; dependencies are current enough to receive security fixes; known vulnerable versions are flagged. Deeper review: `sec-dependency-review`.
