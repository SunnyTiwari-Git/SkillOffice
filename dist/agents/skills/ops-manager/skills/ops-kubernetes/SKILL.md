---
name: ops-kubernetes
description: "Writes and reviews Kubernetes configuration: Deployments, Services, ConfigMaps, secret references, probes, resources, security contexts, Pod Security Standards, NetworkPolicies, RBAC, Helm charts and GitOps layouts (Argo CD or Flux). Validates with dry runs and linters; never applies to a real cluster without approval. Use when asked to write Kubernetes manifests or a Helm chart, harden a workload, set up GitOps, or debug why pods or services do not work."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Kubernetes

Production-ready Kubernetes configuration: right-sized, health-checked, locked down and delivered through Git. This skill writes and reviews files; changing a real cluster is the user's call.

Load only the context this skill declares: `technical.stack`, `technical.hosting`, `technical.deployment_process`, `technical.standards`, `operations.tools`.

## Inputs

- The workload: image and version, ports, configuration, secrets it needs (names only), storage, exposure (internal or public), scaling needs, health endpoints.
- Delivery method in use: plain manifests, Kustomize, Helm, Argo CD or Flux.
- Cluster facts that matter: version, ingress controller, whether the network plugin enforces NetworkPolicies.

Ask for missing items that change the output (for example the health endpoint). Do not invent image names or endpoints.

## Steps

1. **Workload manifest.** Deployment (or StatefulSet for stable identity and storage) with: specific image tag or digest (never `latest`), resource requests and limits, liveness and readiness probes (startup probe for slow starters), standard `app.kubernetes.io/*` labels, more than one replica for anything user facing, and a PodDisruptionBudget. Templates: [references/manifests.md](references/manifests.md).
2. **Configuration and secrets.** ConfigMaps for non-sensitive settings. Secrets are referenced by name and supplied by an external secrets operator, CSI driver or sealed secrets; never put real values in manifests or Git (see `ops-secrets-management`).
3. **Security.** Run as non-root, read-only root filesystem, drop all capabilities, no privilege escalation, a dedicated service account with least-privilege RBAC and no token mounted unless needed. Enforce Pod Security Standards (`restricted` where possible) with namespace labels. Default-deny NetworkPolicies, then allow only required traffic, including DNS. Details: [references/security.md](references/security.md).
4. **Packaging.** Helm when the workload is shared or heavily parameterized: documented `values.yaml`, helpers for names and labels, pinned dependency versions, `NOTES.txt`. Kustomize overlays for simple per-environment differences.
5. **GitOps.** One repository layout for apps and platform components, environments as folders or overlays, automated sync with pruning only where the team accepts it, and pinned versions for anything installed from upstream. Details: [references/gitops.md](references/gitops.md).
6. **Validate without changing the cluster.** `helm template` and `helm lint`, `kubectl apply --dry-run=client` (or `--dry-run=server` against a cluster the user chooses), schema validation (kubeconform) and linting (kube-linter or kube-score).

## Rules

- Never run `kubectl apply`, `delete`, `patch`, `scale`, `rollout undo`, `helm install`, `upgrade`, `uninstall` or GitOps sync against a real cluster without the user's explicit approval for that command and that cluster.
- Never read, decode or print Kubernetes Secret values, including bootstrap admin passwords. Point the user to their platform's documented login method instead.
- Never install components from a moving reference (a `stable` branch or `latest` tag); pin a released version.

## Output

The manifests, chart or GitOps files (or review findings in the shared format), with a short note: what each file does, validation commands and results, and the exact commands the user would run to deploy, plus how to roll back.

## In a managed run

Return files or findings. Store review results with the cache step in the orchestration protocol. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).

## Handoff

End with a handoff (under 400 words): Done, Decisions (strategy, security level, packaging), Changed files, Tests and checks (dry-run and lint results), Open issues (cluster facts still unknown), Next (`ops-observability` for monitoring; `ops-deploy-verification` before production).
