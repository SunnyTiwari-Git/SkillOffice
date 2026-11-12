---
name: ops-cicd-pipeline
description: "Designs or improves a CI/CD pipeline: stages, quality and security gates, environment promotion, deployment strategy (rolling, blue-green, canary, feature flags), caching, artifact promotion and rollback. Vendor neutral, with examples for GitHub Actions, GitLab CI and others. Use when asked to set up CI/CD, \"build a pipeline\", add approval gates, speed up slow builds, add canary or blue-green deploys, or fix a pipeline whose stages pass but production misbehaves."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# CI/CD Pipeline

Design pipelines that are fast for developers and safe for production: fail fast, build once, promote the same artifact, gate production, and always know how to roll back. Works with any CI system; the shape matters more than the vendor.

Load only the context this skill declares: `company.name`, `technical.stack`, `technical.languages`, `technical.hosting`, `technical.deployment_process`, `technical.testing`, `technical.standards`, `operations.tools`.

## Inputs

- What is built and deployed: language and runtime, containerized or not, monolith or services.
- Where it runs: Kubernetes, containers service, virtual machines, serverless or a platform service (`technical.hosting`).
- Environments (for example dev, staging, production), regions, and who must approve production.
- Rollout needs: acceptable downtime, rollback time, traffic splitting.
- The current pipeline file, if one exists, and the CI system in use.

If the CI system or deployment target is unknown, ask one question. Do not assume a vendor.

## Steps

1. **Map the stages.** Source, build (compile, package, sign), test (unit, integration, security scans), deploy to staging with smoke tests, end-to-end or contract tests, approval gate, production deploy, post-deploy verification, automatic rollback on failure.
2. **Order for fast feedback.** Lint and unit tests first; slow suites and scans after. Run independent jobs in parallel. Cache dependencies, with manifests copied before source so the cache survives code changes.
3. **Build once, promote the artifact.** Tag images or packages with the commit identifier; never rebuild per environment.
4. **Choose the deployment strategy** with the decision table in [references/strategies.md](references/strategies.md): rolling for most stateless services, blue-green for risky changes, canary for high-traffic metric-driven rollouts, feature flags to separate deploy from release.
5. **Define gates.** Required reviewers on the production environment, automated metric gates (error rate, latency) and compliance scans. A gate that waits for a reviewer must name a real person or team.
6. **Health checks.** Deep readiness checks that verify real dependencies, not a shallow ping. Bounded post-deploy verification with a timeout.
7. **Rollback plan.** Automatic rollback trigger on failed verification, plus manual steps. Database migrations must be backward compatible (additive first, destructive only after the old version is retired) so a code rollback never breaks on the schema.
8. **Pipeline security.** Least-privilege job permissions; short-lived cloud credentials (OIDC federation) instead of long-lived keys; third-party actions and images pinned to exact versions or digests, never a moving tag or `latest`; secrets from the CI secret store, masked, never printed (see `ops-secrets-management`); pull requests from forks get no secrets.
9. **Write the pipeline file** in the project's CI system, with comments. Examples for several systems: [references/ci-examples.md](references/ci-examples.md).

## Rules

- Write or change pipeline files in the user's project only. Never push, merge, trigger a production run or change CI settings yourself; show the change and let the user apply it.
- Deploy steps you write target staging automatically and production only behind a gate.
- No secrets, tokens or real hostnames of private systems in files or reports.

## Output

The pipeline file (or a diff to the existing one), plus a short design note: stages and their order, gates, deployment strategy and why, rollback plan, caching, security choices, and what still needs the user (for example creating the production environment and its reviewers).

## In a managed run

Return the pipeline change and design note. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): record choices such as "canary with 10/25/50/100 steps" as `decision` events in the stage batch.

## Handoff

End with a handoff (under 400 words): Done, Decisions (strategy, gates), Changed files (pipeline files), Tests and checks (syntax or lint checks run, if any), Open issues (manual setup the user must do), Next (`ops-deploy-verification` before the first production run).
