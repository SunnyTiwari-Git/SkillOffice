# Provenance: ops-secrets-management

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/cicd-automation/skills/secrets-management/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-secrets-management.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Kept the store options, CI and Kubernetes injection patterns, best practices, rotation process and secret scanning advice; rewrote them in our own words.
- Added hard rules: never ask for, print, store or move a secret value; never run commands that read secret values; treat any exposed value as leaked.
- Removed examples that store or read real values (a `vault kv put` with a literal password, the development server root token, commands that read secret values into environment files, the rotation function) and replaced them with placeholder-only patterns.
- Replaced long-lived CI cloud keys with OIDC federation; the External Secrets example uses placeholders with a note to check the current API version.
- Added an inventory step, separation per environment, a leak response runbook, declared context, the managed-run section and the handoff.

## Files not imported

- No scripts existed in this skill. Other files in the upstream plugin were not imported.

## Attribution

Portions of this skill are adapted from wshobson/agents and are covered by the following license:

```text
MIT License

Copyright (c) 2024 Seth Hobson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

The SkillOffice modifications are licensed under the Apache License, Version 2.0, as described in the LICENSE file at the root of this repository.
