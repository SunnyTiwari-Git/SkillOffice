# Cybersecurity playbooks

Each playbook is a default order. Adjust it to the request: drop skills the request does not need. Security results are never cached, so every skill that is needed runs fresh. Confirm authorization before any assessment.

## 1. Threat model a new feature

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `sec-threat-model` | A current threat model exists and the feature does not change trust boundaries |
| 2 | `sec-security-requirements` | The user only wants the model |
| 3 | `sec-threat-mitigation` | No critical or high threats remain without controls |
| 4 | Correction cycle | Fix gaps in the security artifacts; hand code work to development |

Example: "Threat model our new file upload feature." The model finds that uploads are served from the main domain (stored XSS risk) and lack size limits; requirements SR-001 to SR-004 cover content-type checks, separate storage domain, size limits and malware scanning; the plan puts the separate domain in "now".

## 2. Secure code review

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `sec-secure-code-review` | Scope: the change or the paths named by the user or a threat model |
| 2 | `sec-secrets-exposure-review` | Skip if a secrets review ran on the same files in this run |
| 3 | Correction cycle | Only if the user asks; fixes go through `dev-manager` |
| 4 | Verification | Re-check fixed findings against the new code |

## 3. Dependency and secrets review

1. `sec-dependency-review` on manifests, lockfiles and audit output the user provides.
2. `sec-secrets-exposure-review` across code, config, CI and history if requested.
3. `sec-threat-mitigation` to turn findings into an ordered plan.

## 4. Security policy drafting

1. If policies exist, `sec-security-policy` in review mode: report gaps first.
2. Then draft or revise policies. New commitments go to leadership; legal and compliance statements go to legal.

## 5. Incident triage

Always first when an incident is active or suspected.

1. `sec-incident-triage`: log, assess, preserve evidence, recommend containment, scope, legal questions.
2. `sec-secrets-exposure-review` if a credential leak is involved or suspected.
3. After containment, `sec-threat-mitigation` for lasting fixes.

The manager never performs containment itself and never contacts outside parties.

## 6. Pre-release security check

1. `sec-secure-code-review` on the release diff.
2. `sec-dependency-review` on lockfile changes in the release.
3. `sec-secrets-exposure-review` on the release diff and new config.
4. One correction cycle through development, then verify fixed findings.
5. Recommendation: ready, ready with accepted risks (listed, owner named by the user), or not ready. Any open critical finding means not ready.

## 7. Scanning setup

1. `sec-sast-setup`: tool choice, proposed config, rollout stages. Files written only after approval.
2. `sec-secure-code-review` for any high or critical baseline findings the user wants examined.
