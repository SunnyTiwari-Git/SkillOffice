# Secret patterns and false positives

## What to search for

| Kind | Typical signs |
| --- | --- |
| Cloud provider access keys | Fixed prefixes followed by 16 to 40 uppercase letters and digits; paired "secret" values near them |
| Source control and CI tokens | Provider-specific prefixes (for example personal access token prefixes), long random strings in CI variables committed to files |
| AI and SaaS API keys | Prefixes such as `sk-` followed by long random strings; variables named `*_API_KEY` |
| Chat and webhook tokens | Prefixed bot tokens; webhook URLs that contain a secret path segment |
| Private keys | `BEGIN ... PRIVATE KEY` blocks, `.pem` and `.key` files, keystores |
| Database and queue credentials | Connection strings with `user:password@host`; `DB_PASSWORD`, `DATABASE_URL` values |
| Session and signing secrets | `SECRET_KEY`, `JWT_SECRET`, `SESSION_SECRET` with literal values |
| Passwords in code | `password = "..."`, default admin passwords, credentials in test fixtures copied from real systems |
| JSON Web Tokens | Three dot-separated base64url segments starting with `eyJ` |

High-entropy strings deserve a second look only in suspicious places (assignments, config values, headers), not everywhere: hashes, ids and test vectors are often random-looking.

## Usually not a leak (still note it)

- Clear placeholders: `changeme`, `your-api-key-here`, `xxxx`, `<SECRET>`, empty values.
- Provider-documented sandbox or test keys that cannot reach real data (confirm by the provider's documented test format).
- Publishable or public keys meant for browsers or mobile apps; check that they are restricted (allowed domains, limited permissions).
- Hashes of passwords (still check the hashing algorithm).

## Masking

Show the first 4 characters and `****`: `sk-a****`, `AKIA****`. Never include the rest in findings, logs, memory, screenshots or handoffs.

## Fix order for a real secret

1. Revoke or rotate at the provider (the user does this).
2. Check the provider's access logs for misuse since the exposure (the user does this; flag possible incident to `sec-incident-triage`).
3. Remove the value from code and load it from the environment or a secrets manager.
4. Add prevention: pre-commit secret scanning, CI scanning, repository push protection, `.gitignore` for environment files.
5. Decide with the team whether to rewrite version history; rotation is required either way.
