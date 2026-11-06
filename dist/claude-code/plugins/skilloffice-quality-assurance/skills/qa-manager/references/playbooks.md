# Quality Assurance playbooks

Each playbook is a default order. Adjust it to the request: drop skills the request does not need, and skip skills whose cached result is still valid (same inputs, same requirements, same skill version; see `token-budget.md` in `skilloffice-core`). `qa-release-verification` is never skipped when readiness is asked and never cached.

## 1. Test planning

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `qa-test-strategy` | An agreed strategy exists and the scope is small |
| 2 | `qa-test-plan` | The user only wants test cases for one feature |
| 3 | `qa-test-case-design` | The user only wants the plan |
| 4 | Correction cycle | No review findings on the artifacts |

Example: "Plan testing for the new invoicing module." Strategy ranks tax calculation and PDF generation as top risks; the plan scopes them in and puts data import out of scope with a reason; case design produces boundary and decision-table cases for tax rules.

## 2. UI test pass

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `qa-test-case-design` | Only if there are no cases for the journeys |
| 2 | `qa-web-ui-testing` | Local app only; synthetic data |
| 3 | `qa-bug-report` | One report per failure |
| 4 | Correction cycle | Fix QA artifacts (test scripts, cases); application defects go to development |

## 3. API test pass

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `qa-test-case-design` | When endpoints have validation or business rules |
| 2 | `qa-api-testing` | Local or approved test environment |
| 3 | `qa-bug-report` | Authorization failures and data leaks are critical |

## 4. Exploratory session

1. `qa-exploratory-testing`: write charters by risk, run time-boxed sessions, debrief.
2. `qa-bug-report` for confirmed bugs; questions go to the report's open questions.

## 5. Suite review

1. `qa-regression-review` (read-only). Report findings, coverage map and release-gate verdict.
2. Fix nothing unless the user asks. If they ask, that is the one correction cycle: improve the tests (not application code), then re-run the changed tests.

## 6. Bug triage

1. `qa-bug-report` in write mode (one observation) or triage mode (a list): duplicates grouped, missing information requested, order suggested.

## 7. Release readiness

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `qa-web-ui-testing` and/or `qa-api-testing` | Only for areas where fresh evidence on the release build is missing |
| 2 | `qa-bug-report` | For new failures |
| 3 | `qa-release-verification` | Always last, always fresh; recommends go, go with conditions or no-go |

The recommendation names who makes the final decision. QA never approves, tags, deploys or announces a release.

## Cross-department example

"Our checkout is broken in Safari, fix it and tell me if we can ship." QA runs `qa-web-ui-testing` on the checkout journey and writes a `qa-bug-report`. The fix is handed to `dev-manager` (one level). After the fix, QA re-runs the checkout journey and finishes with `qa-release-verification` on the new build.
