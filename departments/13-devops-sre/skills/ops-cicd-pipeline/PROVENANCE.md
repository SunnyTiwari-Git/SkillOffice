# Provenance: ops-cicd-pipeline

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream paths | plugins/cicd-automation/skills/deployment-pipeline-design/ (SKILL.md, references/details.md); plugins/cicd-automation/skills/github-actions-templates/SKILL.md; plugins/cicd-automation/skills/gitlab-ci-patterns/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-cicd-pipeline.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged three upstream skills (pipeline design, GitHub Actions templates, GitLab CI patterns) into one vendor-neutral skill with step-by-step instructions.
- Kept the stage model, gate patterns, deployment strategy decision table, deep health check guidance, migration-safe rollback and troubleshooting cases; rewrote them in our own words and condensed the examples into two reference files.
- Added pipeline security rules: least-privilege job permissions, OIDC short-lived credentials, actions and images pinned to exact versions or digests (upstream suggested major-version tags such as `@v4`), no secrets for fork pull requests.
- Removed ungated production deploys, chat webhook notifications, the feature-flag vendor SDK example and fixed "elite" delivery targets.
- Added stop rules (never push, merge or trigger production), declared context, the managed-run section and the handoff.

## Files not imported

- references/advanced-strategies.md: skimmed, not imported. No scripts existed in these skills; other files in the upstream plugin were not imported.

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
