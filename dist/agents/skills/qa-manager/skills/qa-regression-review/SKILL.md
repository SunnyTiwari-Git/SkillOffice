---
name: qa-regression-review
description: "Reviews an existing automated test suite and reports problems as findings: coverage gaps against top risks and critical journeys, flaky patterns, brittle selectors, weak or missing assertions, test interdependence, slow tests and poor test data hygiene. Read-only. Use when asked to \"review our tests\", \"why are our tests flaky\", \"is our regression suite any good\", \"what is missing from our tests\", or before relying on a suite for a release."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Regression Suite Review

A regression suite is only worth what it reliably catches. This review judges a suite on two questions: does it protect what matters, and can its results be trusted? It is read-only: it never edits tests or application code.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.testing`, `technical.standards`.

## Inputs

- The test suite (folders or files) and how it runs.
- Optional: the risk ranking from `qa-test-strategy`, a list of critical user journeys, recent escaped bugs, CI history of failures and durations.

If you can run the suite through the platform's normal permission prompts, a run (or a few repeated runs) gives evidence on duration and flakiness. If not, review statically and say so.

## What to check

| Area | Look for |
| --- | --- |
| Coverage of what matters | Top risks and critical journeys with no test; escaped bugs with no regression test; tests concentrated on easy code instead of risky code |
| Assertions | Tests that assert nothing, only that no error was thrown, or only a status code; snapshot tests nobody reads; assertions on implementation details instead of behavior |
| Flakiness | Fixed sleeps; reliance on wall-clock time, random values or test order; shared mutable state; real network or third-party calls; race conditions in async waits; retries hiding failures |
| Brittle UI tests | Long CSS or XPath selectors, positional selectors, text that changes often; prefer role, label and test-id selectors |
| Independence | Tests that only pass after another test ran; data left behind; tests that cannot run alone or in parallel |
| Speed and shape | Slowest tests and why; too many end-to-end tests for things a unit test could check; duplicated tests |
| Test data | Real customer data or real credentials in fixtures (always critical); hard-coded secrets; data that expires |
| Maintainability | Copy-pasted setup, unclear names, no helpers for common steps, commented-out or skipped tests with no reason |
| Signal | Tests marked skipped or quarantined indefinitely; known failures ignored in CI |

Examples of each smell and the usual fix: [references/test-smells.md](references/test-smells.md).

## Report findings

Use the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 11-quality-assurance/qa-regression-review`, status `open`, with file and line locations.

Severity guide: **critical** for real customer data or secrets in tests, or a top-risk area with no tests at all; **high** for flaky tests in the release gate, assertion-free tests on critical paths, missing regression tests for escaped bugs; **medium** for brittle selectors, interdependence and slow tests; **low** for naming and duplication; **info** for suggestions.

Also include:

- **Strengths:** what the suite does well.
- **Coverage map:** critical journeys and top risks, each marked covered, partly covered or not covered.
- **Verdict:** can this suite be trusted as a release gate today? Yes, yes with fixes, or no, with one or two sentences of reasoning.

## In a managed run

When `qa-manager` runs this skill, return findings only; fixes happen in the manager's single correction cycle (usually through the software development department). This skill is cacheable: store its result with the suite files as inputs and the strategy or risk list as requirements, per `references/protocols/orchestration.md` in `skilloffice-core`. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (files reviewed, whether the suite was run), Decisions (verdict), Changed files (none), Tests and checks (run results if any), Open issues (finding ids by severity), Next (correction cycle through `qa-manager`).
