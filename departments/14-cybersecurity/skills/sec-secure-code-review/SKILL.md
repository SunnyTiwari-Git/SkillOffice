---
name: sec-secure-code-review
description: "Reviews source code the user owns for security weaknesses and reports evidence-based findings with file and line locations: untrusted input reaching dangerous sinks, broken authentication and authorization, injection, XSS, SSRF, unsafe file handling, insecure sessions and cookies, CSRF, secrets in code, weak crypto, verbose errors and missing security headers, aligned with OWASP Top 10 and ASVS-style checks. Read-only. Use when asked for a security review, security audit or secure coding check of code, or before releasing security-sensitive changes."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Secure Code Review

Find the security weaknesses that matter most in the user's code, prove each one with evidence, and explain a safe fix. This is a review skill: it reads code and reports findings. It never edits code; fixes happen in the manager's correction cycle through the software development department.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.standards`, `technical.website_architecture`, `technical.hosting`.

## Scope and ethics

Defensive review of code the user owns or is authorized to assess. Report weaknesses with safe fixes; never write working exploit code or payloads aimed at a live system. If asked to attack someone else's system, decline that part and offer a review of the user's own code instead. Secrets found in code are shown only as their first 4 characters followed by `****`, with file and line.

## Steps

1. **Identify the stack.** List every language and framework in scope, frontend and backend, with evidence (manifest files, imports). Note which parts run in production and which are build, test or example code.
2. **Map untrusted input.** Request parameters, bodies, headers, cookies, uploaded files and their names, webhooks, messages from queues, third-party API responses, and stored user content.
3. **Map dangerous sinks.** HTML rendering and DOM writes, template rendering, SQL and NoSQL queries, shell and subprocess calls, file paths, redirects, outbound HTTP requests, deserialization, dynamic code evaluation, logging.
4. **Trace input to sinks.** For each sink, check whether untrusted data reaches it and what validation, encoding or allowlisting sits in between.
5. **Check controls by area.** Authentication, session and cookie flags, CSRF for cookie-authenticated state changes, authorization on every object and function (not only in the UI), input validation and size limits, output encoding, file upload and download, outbound requests, secrets handling, cryptography and randomness, error handling and logging, security headers and CORS, rate limits on sensitive endpoints, dependency hygiene. Checklist: [references/review-checklist.md](references/review-checklist.md). Framework hotspots: [references/stack-notes.md](references/stack-notes.md).
6. **Respect the project's documented exceptions.** If the project deliberately departs from a practice and documents why, note it as info rather than fighting it, and suggest documenting the reason if it is missing.
7. **Be careful with environment-dependent advice.** Missing TLS or `Secure` cookie flags in local development is not a finding by itself; report it only for production configuration, and recommend an environment switch. Recommend long-lived HSTS only with a warning about its lasting effect.
8. **Calibrate severity** in plain words: who can trigger it (anonymous, any user, admin only), what they gain, how hard it is, and whether an existing control blocks it. When protection might exist outside the code (proxy, gateway, firewall), say "not visible in code; verify in configuration".

## Report findings

Use the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-secure-code-review`, status `open`. Each finding includes: location (file and line), evidence (a short snippet, secrets masked), impact (who can do what), fix (smallest safe change), defense in depth if the fix is hard, and what to verify if uncertain.

Severity guide: **critical** for anonymous access to data or code execution, authentication bypass, cross-tenant access, exposed live secrets; **high** for authenticated privilege escalation, stored XSS, SQL injection behind login, SSRF to internal services; **medium** for CSRF on non-critical actions, missing rate limits on login, verbose errors; **low** for hardening headers and fingerprinting; **info** for suggestions.

Also include:

- **Strengths:** controls that are done well.
- **Coverage limits:** files, languages or runtime configuration not reviewed. Never imply the code is "secure"; say what was checked.

## In a managed run

When `sec-manager` runs this skill, return findings only; fixes go through the manager's single correction cycle. Security results are never cached: run fresh every time. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (scope reviewed, stack identified), Decisions (exceptions accepted), Changed files (none), Tests and checks (none run, or which), Open issues (finding ids by severity), Next (correction cycle through `sec-manager`, usually handed to `dev-manager`).
