---
name: ops-deploy-verification
description: "Checks whether a deployment is ready to go to production and gives a go or no-go recommendation from fresh evidence: CI status, reviews, tests, migrations, feature flags, rollback plan and triggers, monitoring and on-call readiness, plus post-deploy checks. Always runs fresh, never from cached results, and only recommends; it never deploys. Use before shipping a release, \"can we deploy\", \"deploy checklist\", for changes with database migrations or feature flags, or to define rollback triggers in advance."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Deploy Verification

The last check before production. It gathers current evidence, compares it with the readiness criteria, and recommends go, go with conditions, or no-go. A person makes the final call and runs the deploy.

Load only the context this skill declares: `technical.deployment_process`, `technical.hosting`, `technical.testing`, `operations.team_structure`, `operations.sops`, `regional.time_zone`.

## Inputs

- The release: version or commit, list of changes, services affected.
- Evidence: CI results for that exact commit, review approvals, test reports, migration plan, flag plan, monitoring links.
- The deploy method and rollback method (`technical.deployment_process`).
- Timing: planned window, known traffic peaks, change freezes.

Evidence must be for the exact build being deployed and recent. Anything older or for a different commit counts as missing.

## Steps

1. **Pre-deploy checks.** CI green for the exact commit; code reviewed and approved; no open critical defects; tests relevant to the change passed; migrations tested and backward compatible; feature flags configured with a safe default; rollback plan written and tried in staging; on-call aware and available; monitoring and alerts in place for the changed parts.
2. **Special cases.** Database migration: backup confirmed, migration runs before or after code as planned, undo script exists, destructive steps deferred. Breaking API change: consumers notified, versioning in place. Infrastructure change: plan reviewed. High-traffic window or freeze: flag it.
3. **Rollback triggers, decided now.** Concrete thresholds, for example error rate above the normal level by an agreed margin for 5 minutes, p95 latency above a threshold, a critical journey failing, or a key business metric dropping. Base thresholds on current baselines.
4. **Deploy and post-deploy plan.** Staging first with smoke tests; production with canary or gradual rollout if available; watch error rate and latency for an agreed period (often 15 to 30 minutes); verify key user journeys; then update release notes and notify stakeholders.
5. **Recommendation.** Go, go with conditions (listing them), or no-go (listing blockers). Any failing critical check means no-go.

Checklist template: [references/checklist.md](references/checklist.md).

## Rules

- Always run fresh. Never reuse an earlier verification result; evidence changes with every build.
- Recommend only. Never deploy, merge, approve a pipeline gate or change flags.
- Missing evidence is a finding, never assumed to be fine.

## Output

The filled checklist with each item marked pass, fail or missing (with the evidence used), the rollback triggers, the post-deploy plan and the recommendation with reasons. Findings in the shared format for every fail or missing item.

## In a managed run

This is the last step of the deploy readiness playbook. Never cached. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`) and log each check as a `test_result` in one batch.

## Handoff

End with a handoff (under 400 words): Done, Decisions (recommendation), Changed files (none, or the checklist), Tests and checks (each check with result), Open issues (blockers and conditions), Next (the user decides and deploys; `ops-incident-response` if post-deploy checks fail).
