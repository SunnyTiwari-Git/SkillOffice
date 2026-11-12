# Security review: wshobson-agents / ops-kubernetes

| Field | Value |
| --- | --- |
| Reviewer | Claude (AI agent), pending owner sign-off |
| Date | 2026-11-07 |
| Upstream URL | https://github.com/wshobson/agents (plugins/kubernetes-operations/skills/k8s-manifest-generator, helm-chart-scaffolding, k8s-security-policies, gitops-workflow) |
| Pinned commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Decision | Approved with changes |
| Risk label | medium |

## 1. Verify the source

- [x] Repository is the official one: https://github.com/wshobson/agents
- [x] Not a look-alike fork or renamed copy (cloned directly from the owner's GitHub account)
- [x] Maintainer identified: Seth Hobson

## 2. Check the license

- [x] License identified: MIT
- [x] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [x] No CC-BY, share-alike, proprietary or unlicensed material used

## 3. Pin the version

- [x] Exact commit recorded above and in the skill's `skill.yaml` and `PROVENANCE.md`

## 4. Static scan (no execution)

- [x] `skilloffice scan` run on the downloaded copy: one high `base64-decode` finding at `kubernetes-operations/skills/gitops-workflow/SKILL.md:42`, a command that decodes and prints the Argo CD initial admin password from a Kubernetes Secret. Not imported (credential exposure).
- [ ] Cisco skill-scanner run in local-only mode, if available: not run (not installed)
- [x] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [x] Every line of the upstream SKILL.md files used was read; references were read or skimmed and rewritten in our own words
- [x] Scripts: `helm-chart-scaffolding/scripts/validate-chart.sh` not imported; asset templates replaced by our own
- [x] MCP or connector files: none imported
- [x] Network access: none by the skill
- [x] File-system access: reads the project; writes Kubernetes, Helm and GitOps files in the user's project only
- [x] External dependencies: none
- [x] Indirect sources: none found

## 6. Risk label

Chosen label and reason: medium. Instructions only; writes configuration files. Removed: the admin password decode command, an install command applying a manifest from a moving `stable` branch, and secret-creation examples with literal values. Corrected the outdated PodSecurityPolicy guidance (removed in Kubernetes 1.25). The skill validates with dry runs and never applies to a real cluster without explicit approval. No pre-approved tools.

## 7. Record

- [x] `PROVENANCE.md` written in the skill folder
- [x] Changes from upstream listed
- [x] Attribution added to the root `NOTICE` file (2026-11-07)

## Notes

Re-check on the next upstream update: compare the pinned commit with the new one and repeat steps 4 and 5.
