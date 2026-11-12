# Secrets patterns

All examples use placeholder names. None contain or retrieve a real value.

## Choosing a store

| Option | Good for | Notes |
| --- | --- | --- |
| Cloud secret manager (AWS Secrets Manager, Azure Key Vault, Google Secret Manager, OCI Vault) | Workloads on one cloud | Native identity integration, managed rotation for some databases |
| HashiCorp Vault or OpenBao | Several clouds, on-premises, dynamic short-lived credentials | Needs operating and securing the store itself |
| CI encrypted variables (protected and masked) | Values used only by pipelines | Restrict to protected branches; never expose to fork pull requests |
| Sealed or encrypted secrets in Git (for example Sealed Secrets, SOPS) | GitOps teams that must keep everything in Git | Encryption keys still need careful custody |

## Short-lived credentials for pipelines

Use OIDC federation so the CI job exchanges its identity token for temporary cloud credentials. Nothing long-lived is stored in the CI system.

```yaml
# GitHub Actions: request an identity token, assume a narrowly scoped role
permissions:
  id-token: write
  contents: read
steps:
  - uses: aws-actions/configure-aws-credentials@<pinned-sha>
    with:
      role-to-assume: arn:aws:iam::<account-id>:role/<deploy-role>
      aws-region: <region>
```

## Injecting into Kubernetes without Git holding values

```yaml
# External Secrets Operator: syncs a value from the store into a Kubernetes Secret
apiVersion: external-secrets.io/v1
kind: ExternalSecret
metadata:
  name: app-database
  namespace: <namespace>
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: <secret-store>
    kind: SecretStore
  target:
    name: app-database
  data:
    - secretKey: password
      remoteRef:
        key: <path-in-store>
        property: password
```

Check the operator's current API version for your cluster before use.

## Using secrets safely in pipelines

- Pass secrets as environment variables to the step that needs them, not to the whole job.
- Check that a required secret exists without printing it: `test -n "$API_KEY" || { echo "API_KEY is not set"; exit 1; }`
- Never `echo` a secret, never enable shell tracing (`set -x`) in steps that handle secrets.

## Rotation procedure

1. Create the new credential at the source.
2. Store it as a new version in the secret store.
3. Roll consumers to the new version and verify they work.
4. Revoke the old credential.
5. Record the rotation date (not the value).

## Scanning

Run a secret scanner (for example Gitleaks or TruffleHog, pinned to a version) in pre-commit hooks and CI, and enable the code host's push protection. Treat every finding as leaked until proven otherwise.

## Leak response

1. Revoke or disable the credential at its source immediately.
2. Issue a replacement and update consumers.
3. Review the provider's access logs for use between leak and revocation.
4. Remove the value from code and history; force-pushing history needs team agreement.
5. Write a short incident note: how it leaked and what prevents it next time.
