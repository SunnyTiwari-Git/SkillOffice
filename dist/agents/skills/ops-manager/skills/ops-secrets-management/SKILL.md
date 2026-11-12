---
name: ops-secrets-management
description: "Designs how an application and its CI/CD pipeline store, inject, rotate and audit secrets (API keys, database passwords, certificates) using a secret manager such as Vault, a cloud secret manager or the CI system's encrypted variables. Guidance and configuration only; never reads, prints, copies or moves real secret values. Use when asked how to handle credentials, \"stop hardcoding keys\", set up secret rotation, inject secrets into Kubernetes or a pipeline, or after a secret leaked."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Secrets Management

Secrets belong in a secret store, reach the workload at runtime, are scoped to the least privilege, rotate on a schedule and never appear in code, logs, tickets or chat. This skill designs that setup. It never handles real secret values.

Load only the context this skill declares: `technical.stack`, `technical.hosting`, `technical.deployment_process`, `operations.tools`, `operations.policies`, `regional.jurisdictions`.

## Hard rules

- Never ask the user for a secret value, never print one, never write one to a file, memory, report or handoff. Refer to secrets by name only (for example `DB_PASSWORD`).
- Never run commands that read secret values (secret manager "get" or "read" commands, decoding Kubernetes secrets, printing environment variables).
- If a real secret appears in files or chat, stop, do not repeat it, and tell the user it must be treated as leaked: revoke and rotate it at the source first, then remove it from history.

## Inputs

- Where the app runs (`technical.hosting`) and which CI system deploys it.
- The secrets it needs, by name and purpose only (for example "payments API key, read-only").
- Existing tools: a secret manager in use, if any (`operations.tools`).
- Policies that apply (`operations.policies`), for example rotation periods.

## Steps

1. **Inventory by name.** List each secret: name, purpose, owner, which workloads use it, environments, current location. Flag any that live in code, config files, container images or plain CI variables.
2. **Choose the store.** Prefer what the platform already offers: the cloud provider's secret manager, HashiCorp Vault or OpenBao for multi-cloud or dynamic secrets, the CI system's protected and masked variables for pipeline-only values. See [references/patterns.md](references/patterns.md).
3. **Design injection.** Runtime injection over build-time: workload identity or OIDC federation so pipelines and services get short-lived credentials without stored keys; in Kubernetes, an external secrets operator or CSI driver instead of secrets committed to Git (or sealed or encrypted secrets if Git must hold them).
4. **Least privilege and separation.** One secret per environment; each workload reads only its own; production secrets unavailable to pull requests and forks.
5. **Rotation.** Rotation period per secret type, automated where the store supports it, with a tested procedure: create new, update consumers, verify, revoke old.
6. **Detection and audit.** Secret scanning in pre-commit and CI, push protection where available, audit logging on the store, alerts on unusual access.
7. **Leak response.** A short runbook: revoke at the source, rotate, check access logs for use, remove from history, review how it leaked.

## Output

A secrets plan: inventory table (names only), chosen store and why, injection design per environment, access policy, rotation schedule, scanning setup, leak runbook, and configuration snippets with placeholders only.

## In a managed run

Return the plan. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); memory may record secret names and decisions, never values. If a leaked value was found, log an `issue_opened` event describing the location, not the value.

## Handoff

End with a handoff (under 400 words): Done, Decisions (store, injection, rotation), Changed files (configuration with placeholders, if written), Tests and checks (none run), Open issues (secrets to rotate, manual setup), Next (`ops-cicd-pipeline` or `ops-kubernetes` to wire it in; Cybersecurity department for a leak).
