---
name: qa-test-strategy
description: "Designs a test strategy for a product, feature or system: which risks matter, which test levels cover them (unit, integration, contract, end-to-end, non-functional), what to automate, which environments and data to use, and the entry and exit criteria. Use when asked \"how should we test this\", \"what tests do we need\", \"test strategy for\", \"is our testing approach right\", before a new project or major feature, or when test effort feels unfocused."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "11-quality-assurance"
---

# Test Strategy

A test strategy says where testing effort goes and why. It is driven by risk: test hardest where failure would hurt most, and test lightest where failure is cheap and unlikely. Tool and framework agnostic.

Load only the context this skill declares: `company.industry`, `technical.stack`, `technical.languages`, `technical.website_architecture`, `technical.testing`, `technical.deployment_process`, `regional.jurisdictions`, `regional.output_language`.

## Inputs

- What is being tested: product, feature, service or change, and who uses it.
- Requirements or acceptance criteria, if they exist.
- Current state: existing tests, tools, CI, known problem areas, past incidents.
- Constraints: team size, time pressure, compliance obligations.

If the scope is unclear, ask about it in the Ask first round below. Do not invent features.

## Ask first

Ask these in one round before writing, skipping any the request or the listed context fields already answer. Do not invent features.

1. **What is being tested?** (skip if the request names it)
   - A new feature.
   - A whole product or new project.
   - A change to an existing system, such as a migration or refactor.
   - Our current testing approach (a review).
   - Other.
2. **What would hurt most if it failed?**
   - Money or payments.
   - Personal or regulated data.
   - A core user journey going down.
   - Mostly cosmetic or internal issues.
   - Other.
3. **What testing exists today?** (skip if `technical.testing` is set)
   - None or very little.
   - Unit tests only.
   - A mix of levels running in CI.
   - Other.
4. **How often do you release?** (skip if `technical.deployment_process` is set)
   - Several times a week through CI/CD.
   - On a schedule every few weeks.
   - Rarely, in big releases.
   - Other.
5. **How detailed should the strategy be?**
   - One page: top risks, levels and exit criteria.
   - A full strategy document from the template.
   - Other.

Propose saving current testing as `technical.testing` and release practice as `technical.deployment_process`, only after the person confirms. Other answers apply to this request only.

## Steps

1. **List the risks,** starting from the Ask first answers. For each area of the system, rate likelihood of failure (complexity, change frequency, past bugs, new technology) and impact (money, data, safety, legal, reputation, number of users). Rank them. See [references/risk-and-levels.md](references/risk-and-levels.md) for the scoring grid.
2. **Choose test levels per risk.** Use the test pyramid as a starting shape, not a rule:

   ```
           /  E2E  \          few, slow, highest confidence per test
         / Integration \      some, medium speed
        /  Unit tests   \     many, fast, focused
   ```

   Push each check to the lowest level that can catch the failure. Add contract tests where services or teams meet. Add non-functional testing (performance, security, accessibility, compatibility, resilience) only where a listed risk calls for it.
3. **Decide what to automate.** Automate what is repeated, stable and high value: regression of critical paths, calculations, API contracts, data transformations. Keep manual and exploratory testing for new, changing or judgment-heavy areas (usability, visual polish, unusual user behavior).
4. **Define environments and data.** Which environment each level runs in; how test data is created and cleaned up; never real customer data (use synthetic or properly anonymized data); how external services are stubbed.
5. **Set entry and exit criteria.** Entry: what must be true before a test phase starts (build passes, environment ready, acceptance criteria agreed). Exit: what must be true to stop (critical-path tests pass, no open critical or high defects, agreed coverage of top risks). Coverage percentages are a signal, not a goal.
6. **Name gaps and trade-offs.** What is deliberately not tested and why; where current coverage falls short of the risk ranking.

## Strategy by component type

- **APIs:** unit tests for business logic, integration tests for the HTTP layer, contract tests for consumers, negative tests for validation and authorization.
- **Data pipelines:** input validation, transformation correctness, idempotency, late or duplicate data, schema changes.
- **Web and mobile front ends:** component tests, interaction tests, accessibility checks, cross-browser or device coverage for the supported set, visual checks where layout matters.
- **Infrastructure and deployment:** smoke tests after deploy, rollback tests, configuration checks, load tests where capacity is a risk.

Focus on business-critical paths, error handling, edge cases, security boundaries and data integrity. Skip trivial getters and setters, framework code you do not own, and one-off scripts.

## Output

A strategy document with these sections: Scope, Risk ranking (table), Test levels per risk (table), Automation approach, Environments and test data, Entry and exit criteria, Not tested and why, Gaps in current coverage, Next steps. Template: [references/strategy-template.md](references/strategy-template.md).

Use `regional.output_language` style if the company context sets it, and note any compliance obligations from `regional.jurisdictions` (for example accessibility or data protection testing) as risks, not as legal conclusions.

## In a managed run

When `qa-manager` runs this skill, return the strategy only. Do not write test cases here; `qa-test-plan` and `qa-test-case-design` do that. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`) and record decisions such as "no load testing this release" as `decision` events in the stage batch.

## Handoff

End with a handoff (under 400 words): Done (strategy written), Decisions (top risks, levels chosen, what is not tested), Changed files (the strategy document, if saved), Tests and checks (none run), Open issues (gaps found), Next (`qa-test-plan`).
