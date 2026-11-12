# Provenance: ops-infrastructure-as-code

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream paths | plugins/cloud-infrastructure/skills/terraform-module-library/SKILL.md; plugins/cloud-infrastructure/skills/multi-cloud-architecture/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-infrastructure-as-code.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged the Terraform module library and multi-cloud architecture skills into one write-and-review skill.
- Kept the standard module layout, best practices (versioning, validation, pinned providers, consistent tags, composition), the service comparison table, multi-cloud patterns and migration phases; rewrote and condensed them.
- Added: read the existing layout first, remote state with locking per environment, safe defaults, a validation ladder that never touches real infrastructure, a plan review checklist with findings, and questions to answer before going multi-cloud.
- Removed fixed discount percentages and the module test example that applies real infrastructure by default; module tests now run only in a disposable sandbox with approval.
- Added stop rules (never apply, destroy or import), declared context, the managed-run section and the handoff.

## Files not imported

- references/aws-modules.md, references/oci-modules.md, references/multi-cloud-patterns.md, references/service-comparison.md: provider-specific module code and long comparisons; summarized in our own words instead.

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
