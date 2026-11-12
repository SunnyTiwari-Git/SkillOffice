# Cloud Infrastructure, DevOps and SRE playbooks

Each playbook is a default order. Adjust it to the request: drop skills the request does not need, and skip skills whose cached result is still valid (same inputs, same requirements, same skill version; see `token-budget.md` in `skilloffice-core`). `ops-deploy-verification` and `ops-incident-response` are never served from cache.

## 1. New CI/CD pipeline

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `ops-cicd-pipeline` | Never for this playbook |
| 2 | `ops-secrets-management` | The pipeline needs no credentials beyond the CI system's own token |
| 3 | Correction cycle | No findings on the pipeline files |
| 4 | `ops-deploy-verification` | The user is not about to run production yet |

Example: "Set up CI/CD for our API on Kubernetes." The pipeline skill writes the workflow with gated production and verification; secrets management switches the deploy job to OIDC; verification lists the manual setup still missing (production reviewers).

## 2. Infrastructure change review

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `ops-infrastructure-as-code` | Review mode: code and plan; destroys and replacements of data stores are high severity |
| 2 | `ops-cloud-cost-review` | When resources are added or resized |
| 3 | Correction cycle | Fix the code; the user runs plan again |

## 3. Kubernetes deployment

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `ops-kubernetes` | Manifests or chart; dry-run and lint |
| 2 | `ops-secrets-management` | When the workload needs secrets |
| 3 | `ops-observability` | Metrics, alerts and dashboard for the workload |
| 4 | Correction cycle | One pass over all files |
| 5 | `ops-deploy-verification` | Before the user deploys to production |

## 4. Observability and SLOs

1. `ops-observability`: signals, symptom alerts, dashboards, tracing.
2. `ops-slo`: SLIs, targets proposed for team agreement, burn-rate alerts that replace noisy thresholds.

## 5. Incident then postmortem

1. `ops-incident-response` in live mode. Keep the plan to one line; speed matters. Every production-changing action needs the responder's approval.
2. After resolution, `ops-postmortem` from the incident record. Action items become `issue_opened` events and handoffs to the right department.

If a security breach or personal data exposure is possible, hand off to Cybersecurity (14) immediately and flag the legal contact.

## 6. Cost review

1. `ops-cloud-cost-review` from cost exports (read-only findings).
2. Only for changes the user approves: `ops-infrastructure-as-code` writes the code change; the user applies it.

## 7. Deploy readiness

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | Missing reviews | Run `ops-infrastructure-as-code` or `ops-kubernetes` review only if evidence for those changes is missing |
| 2 | `ops-deploy-verification` | Always last, always fresh, recommends only |

## Department-wide rules

- Plan, diff and dry-run are fine to propose; anything that changes real infrastructure is the user's action after explicit approval.
- Secrets are referred to by name; values are never read, printed or stored.
- Commands for the user are listed in the report with the expected result and the rollback.
