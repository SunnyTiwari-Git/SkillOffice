# Provenance: ops-observability

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream paths | plugins/observability-monitoring/skills/prometheus-configuration/ (SKILL.md, references/details.md); plugins/observability-monitoring/skills/grafana-dashboards/SKILL.md; plugins/observability-monitoring/skills/distributed-tracing/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-observability.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged three upstream skills (Prometheus configuration, Grafana dashboards, distributed tracing) into one observability skill.
- Kept the RED and USE methods, metric naming and scrape interval guidance, recording and alert rule patterns, dashboard hierarchy and panel types, sampling, context propagation and log correlation; rewrote and condensed them.
- Added symptom-based paging versus cause-based tickets, an alert quality checklist, label cardinality rules, OpenTelemetry as the vendor-neutral default, and a privacy rule: no personal data or secrets in labels, span attributes or logs (upstream suggested adding user IDs as trace tags).
- Removed installation steps for specific Helm charts and Docker Compose files, and commands that query live monitoring APIs without approval.
- Added declared context, rules, the managed-run section and the handoff.

## Files not imported

- references/details.md files of the three skills: skimmed; examples rewritten in our own references.

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
