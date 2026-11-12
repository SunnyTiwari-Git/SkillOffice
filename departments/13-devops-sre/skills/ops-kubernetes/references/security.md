# Kubernetes security

## Pod Security Standards

PodSecurityPolicy was removed in Kubernetes 1.25. Use Pod Security Admission with namespace labels:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: <namespace>
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/warn: restricted
    pod-security.kubernetes.io/audit: restricted
```

| Level | Use for |
| --- | --- |
| privileged | System components that truly need it, isolated in their own namespace |
| baseline | Workloads that cannot yet meet restricted |
| restricted | Default target for application workloads |

For rules beyond these levels, use a policy engine such as Kyverno or OPA Gatekeeper.

## NetworkPolicies

Policies only work if the cluster's network plugin enforces them. Start with default deny, then allow what is needed.

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny
  namespace: <namespace>
spec:
  podSelector: {}
  policyTypes: [Ingress, Egress]
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-dns
  namespace: <namespace>
spec:
  podSelector: {}
  policyTypes: [Egress]
  egress:
    - to:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: kube-system
      ports:
        - protocol: UDP
          port: 53
        - protocol: TCP
          port: 53
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-api
  namespace: <namespace>
spec:
  podSelector:
    matchLabels:
      app.kubernetes.io/name: <api>
  policyTypes: [Ingress]
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app.kubernetes.io/name: <frontend>
      ports:
        - protocol: TCP
          port: <api-port>
```

## RBAC

- One service account per workload; no workload uses `default`.
- Grant verbs on named resources in one namespace (Role and RoleBinding). Use ClusterRoles only for genuinely cluster-wide needs.
- Avoid wildcards (`*`) in verbs and resources. Avoid granting `secrets` read access unless the workload must read them.
- Check effective permissions read-only: `kubectl auth can-i --list --as=system:serviceaccount:<namespace>:<sa>`.

## Container hardening checklist

- [ ] Non-root user, `runAsNonRoot: true`
- [ ] `allowPrivilegeEscalation: false`
- [ ] `readOnlyRootFilesystem: true` (writable `emptyDir` only where needed)
- [ ] `capabilities.drop: ["ALL"]`
- [ ] `seccompProfile: RuntimeDefault`
- [ ] Image pinned by tag and preferably digest, scanned for vulnerabilities
- [ ] Resource requests and memory limits set
- [ ] Service account token not mounted unless needed

## Cluster-level checks

Encryption of secrets at rest, audit logging, RBAC authorization, restricted API server access, and regular benchmark checks (for example the CIS Kubernetes Benchmark) are platform responsibilities. Note gaps for the platform owner; do not change cluster settings from an application change.
