# Provenance: ops-kubernetes

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream paths | plugins/kubernetes-operations/skills/k8s-manifest-generator/ (SKILL.md, references/details.md); plugins/kubernetes-operations/skills/helm-chart-scaffolding/SKILL.md; plugins/kubernetes-operations/skills/k8s-security-policies/SKILL.md; plugins/kubernetes-operations/skills/gitops-workflow/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-kubernetes.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Merged four upstream skills (manifest generator, Helm scaffolding, security policies, GitOps workflow) into one skill with three reference files written in our own words.
- Kept the requirements questions, deployment and service structure, best practices summary, Helm conventions, Pod Security Standards levels, default-deny network policies, RBAC guidance, OpenGitOps principles and repository layout.
- Corrected outdated content: PodSecurityPolicy was removed in Kubernetes 1.25, so the skill uses Pod Security Admission and policy engines instead.
- Removed the gitops-workflow line that decodes and prints the Argo CD initial admin password from a Kubernetes Secret, and the install command that applies a manifest from a moving `stable` branch.
- Removed secret-creation examples with literal values; secrets come from an external secrets operator, CSI driver or encrypted files.
- Added stop rules (no apply, delete, install or sync against real clusters without approval; never read secret values), read-only troubleshooting, declared context, the managed-run section and the handoff.

## Files not imported

- plugins/kubernetes-operations/skills/helm-chart-scaffolding/scripts/validate-chart.sh: shell script; not imported. Its checks are described as commands in prose.
- assets/ template files: replaced by templates in our references.
- gitops-workflow references (argocd-setup.md, sync-policies.md) and other reference files: skimmed, not imported.

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
