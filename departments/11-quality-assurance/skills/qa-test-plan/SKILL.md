---
name: qa-test-plan
description: "Writes a test plan for a release, feature or project: scope, features in and out, approach per area, environments and data, roles, risks and mitigations, entry and exit criteria, and deliverables. Uses placeholders for dates instead of committing to a schedule. Use when asked for a \"test plan\", \"QA plan\", \"how will we test this release\", or after a test strategy is agreed and work needs to be organized."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Test Plan

A test plan turns a strategy into an organized piece of work for one release, feature or project: what will be tested, how, by whom, with what, and when testing is finished. Keep it short enough that people read it.

Load only the context this skill declares: `company.name`, `technical.testing`, `technical.deployment_process`, `operations.team_structure`, `operations.tools`, `regional.date_format`, `regional.output_language`.

## Inputs

- The test strategy (from `qa-test-strategy`), or enough detail to infer the approach.
- The release or feature scope: user stories, requirements, acceptance criteria, change list.
- People and tools available.

If there is no strategy and the work is large or risky, recommend running `qa-test-strategy` first, then continue with clearly stated assumptions if the user wants to proceed.

## Steps

1. **Scope.** List features in scope and out of scope, each with a reason. Out-of-scope items are as important as in-scope ones: they prevent false confidence.
2. **Approach per area.** For each in-scope area: test types (functional, regression, exploratory, API, UI, accessibility, performance, security, compatibility), automated or manual, and which skill or person covers it.
3. **Environments and data.** Environment per test type, configuration needed, how test data is created and reset. Synthetic or anonymized data only; never real customer data.
4. **Roles.** Who designs tests, who runs them, who triages defects, who decides go or no-go. Use roles from `operations.team_structure`; do not invent names.
5. **Schedule as placeholders.** Phases in order (preparation, execution, regression, sign-off) with `{{date}}` placeholders and dependencies. Never commit dates or durations on the team's behalf; the team fills them in.
6. **Risks and mitigations.** Testing risks such as late builds, unstable environments, missing data or unclear requirements, each with a mitigation and an owner role.
7. **Entry and exit criteria.** Copy them from the strategy or define them: what must be true to start, and what must be true to finish.
8. **Deliverables.** Test cases, automated suites, defect reports, test summary report, release recommendation.
9. **Defect process.** How defects are logged (format from `qa-bug-report`), severity and priority definitions, and who triages.

Template: [references/test-plan-template.md](references/test-plan-template.md).

## Output

A test plan document in the template's structure. Dates appear as placeholders in the `regional.date_format` style. Mark assumptions clearly.

## In a managed run

When `qa-manager` runs this skill, return the plan only. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`); record scope decisions as `decision` events in the stage batch.

## Handoff

End with a handoff (under 400 words): Done (plan written), Decisions (scope in and out, approach), Changed files (the plan document, if saved), Tests and checks (none run), Open issues (assumptions, missing inputs), Next (`qa-test-case-design`).
