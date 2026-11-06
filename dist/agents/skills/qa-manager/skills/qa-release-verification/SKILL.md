---
name: qa-release-verification
description: "Checks release readiness from fresh evidence and gives a go, go with conditions, or no-go recommendation. Verifies exit criteria, test results, open defects, regression and smoke checks, non-functional checks in scope, rollback readiness and known risks. Always runs fresh, never reuses earlier results, and only recommends: the release decision belongs to a person. Use when asked \"are we ready to release\", \"go or no-go\", \"release checklist\", \"can we ship\", or as the final step of every QA run."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Release Verification

The last check before a release. Its rule is simple: evidence before claims. A result counts only if it was produced for this build, in this run, and you can point to it. Earlier runs, cached results and "it passed yesterday" do not count.

Load only the context this skill declares: `technical.testing`, `technical.deployment_process`, `operations.team_structure`, `regional.date_format`.

This skill **recommends**. It never approves, tags, deploys or announces a release, and never marks tickets as done on anyone's behalf. The release decision belongs to the person or role named in `operations.team_structure` or the test plan.

## Inputs

- The build or version being released, and the environment it was tested in.
- Exit criteria from the test plan or strategy (or the default criteria below).
- Test results, defect list and change list for this release.

## Steps

1. **Identify the build.** Record the exact version or commit. Every piece of evidence must refer to this build; anything older is marked "stale" and does not count.
2. **Run or collect fresh evidence** for each check in the checklist: [references/release-checklist.md](references/release-checklist.md). Run the project's test commands through the platform's normal permission prompts, in the test environment only. Never run checks against production unless the user explicitly approves a read-only smoke test there.
3. **Check exit criteria** one by one: met, not met, or not verifiable (with the reason).
4. **Review open defects.** Any open critical defect means no-go. Open high defects need a named owner and an explicit, documented acceptance by the decision maker; otherwise no-go.
5. **Confirm rollback readiness:** the previous version can be restored, data migrations are reversible or backed up, and someone knows how.
6. **List known risks and untested areas** honestly.
7. **Recommend:**
   - **Go:** every exit criterion met with fresh evidence, no open critical or unaccepted high defects.
   - **Go with conditions:** criteria met except named, low-impact items with owners and dates set by the team (do not set dates yourself).
   - **No-go:** any critical defect, any failing critical-path test, missing evidence for a critical check, or no rollback path.

Failing critical tests always block "ready". Do not soften a no-go because of schedule pressure; state the facts and let the decision maker decide.

## Output

A release readiness summary:

- Build, environment, date (in `regional.date_format`).
- Checklist table: check, evidence (command, result, link or file), status (pass, fail, stale, not verifiable).
- Exit criteria table: criterion, status.
- Open defects by severity with owners.
- Rollback readiness.
- Known risks and untested areas.
- Recommendation with two or three sentences of reasoning, and who makes the final decision.

Failures and blockers also go out as findings in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 11-quality-assurance/qa-release-verification`.

## In a managed run

This is the last step of every `qa-manager` playbook that ends in a readiness question, and it is never skipped or served from cache (`cacheable: false`; see `references/protocols/token-budget.md` in `skilloffice-core`). Record each check as a `test_result` event in one batch at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (checks run on which build), Decisions (recommendation), Changed files (none), Tests and checks (pass, fail and stale counts), Open issues (blockers and conditions), Next (the release decision maker).
