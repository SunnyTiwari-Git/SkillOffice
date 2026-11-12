# Framework hotspots

Short pointers to where common weaknesses hide in popular stacks. Read only the sections for the stack in scope. For any stack not listed, apply the general checklist and say that no stack-specific notes were used.

## Node.js with Express

- Security headers middleware (for example Helmet) present; `x-powered-by` disabled.
- Body parsers set size and depth limits.
- `trust proxy` set only to the real proxy chain; logic using client IP, protocol or host is checked.
- Session middleware uses a production store (not the in-memory store), a secret from configuration, and secure cookie flags.
- Redirects never take a raw query parameter as the target.
- `res.sendFile` and `res.download` paths never come from the request; uploads are not served by the static middleware as active content.
- `child_process.exec` or `shell: true` with user input; queries built with template literals.
- The Node inspector and insecure HTTP parser options are never enabled in production scripts.

## Next.js

- Server actions and API routes check authentication and authorization themselves; middleware alone is not trusted for authorization.
- Secrets are only in server-side environment variables; nothing sensitive uses the public browser prefix.
- `dangerouslySetInnerHTML` only with sanitized content; image and redirect configuration does not allow arbitrary hosts.

## React and Vue (frontend)

- `dangerouslySetInnerHTML` (React) and `v-html` (Vue) only with sanitized, trusted content.
- User-controlled URLs in links checked for `javascript:` and other unsafe schemes.
- Tokens not stored in `localStorage`; authorization enforced on the server, never only in the UI.

## Django

- `DEBUG` off in production; `SECRET_KEY` from configuration; `ALLOWED_HOSTS` strict.
- CSRF middleware on; `csrf_exempt` used only with an alternative defense.
- `mark_safe`, `|safe` and `raw()` or `extra()` queries reviewed for untrusted data.
- Security middleware and clickjacking protection enabled; secure cookie settings in production.
- Admin site protected (non-default path is not a defense by itself; require strong auth).

## Flask

- `debug=True` never in production; secret key from configuration.
- Jinja autoescape on for HTML; `Markup` and `|safe` reviewed.
- CSRF protection added for cookie-authenticated forms (Flask has none by default).
- `send_file` paths and `render_template_string` with user input reviewed.

## FastAPI

- Request models validate types and limits; responses use response models so internal fields are not leaked.
- Dependencies enforce authentication and per-object authorization.
- CORS middleware is explicit; no wildcard with credentials.
- Docs endpoints restricted in production if the API is private.

## Go (net/http)

- Servers set read, write and idle timeouts and a maximum header size; bodies are size-limited.
- `html/template` used for HTML (not `text/template`); no `template.HTML` with user data.
- `database/sql` with placeholders; `exec.Command` without a shell and without user-chosen binaries.
- Randomness from `crypto/rand`; `pprof` and debug endpoints not exposed publicly.
- Module checksum verification not disabled for public modules.
