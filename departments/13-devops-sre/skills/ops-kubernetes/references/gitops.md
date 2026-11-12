# GitOps

## Principles

1. Declarative: the whole desired state is described in files.
2. Versioned: the desired state lives in Git, with history and review.
3. Pulled: an agent in the cluster pulls changes; pipelines do not push into the cluster.
4. Reconciled: the agent keeps the cluster matching Git and reports drift.

## Repository layout

```
gitops/
  apps/
    staging/<app>/kustomization.yaml
    production/<app>/kustomization.yaml
  platform/
    ingress/
    cert-manager/
    monitoring/
  clusters/
    staging/
    production/
```

Promotion between environments is a reviewed change (pull request) that updates the image tag or chart version in the next environment's folder.

## Argo CD application (example)

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: <app>-production
  namespace: argocd
spec:
  project: <project>          # a dedicated project, not "default", for real workloads
  source:
    repoURL: <git-url>
    targetRevision: main
    path: apps/production/<app>
  destination:
    server: https://kubernetes.default.svc
    namespace: <namespace>
  syncPolicy:
    automated:
      prune: false            # turn on pruning only when the team accepts automatic deletes
      selfHeal: true
    syncOptions:
      - CreateNamespace=false
```

## Flux (example)

```yaml
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata:
  name: <app>
  namespace: flux-system
spec:
  interval: 1m
  url: <git-url>
  ref:
    branch: main
---
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata:
  name: <app>-production
  namespace: flux-system
spec:
  interval: 5m
  sourceRef:
    kind: GitRepository
    name: <app>
  path: ./apps/production/<app>
  prune: false
```

Check the current API versions for your installed Argo CD or Flux release.

## Installing the GitOps controller

Install a pinned release from the project's official documentation, not a moving `stable` branch. Use the platform's documented login method (for example single sign-on). Never retrieve or print bootstrap admin passwords from Kubernetes secrets in a shared session; rotate or disable bootstrap credentials after first login.

## Secrets in GitOps

Git never holds plain secret values. Use an external secrets operator, a CSI secrets driver, or encrypted files (Sealed Secrets, SOPS) with keys held outside the repository.
