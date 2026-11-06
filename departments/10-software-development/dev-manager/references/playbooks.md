# Software Development playbooks

Each playbook is a default order. Adjust it to the request: drop skills the request does not need, and skip skills whose cached result is still valid (same inputs, same requirements, same skill version; see `token-budget.md` in `skilloffice-core`). `dev-verification` is never skipped and never cached.

## 1. New feature

| Step | Skill | Skip when |
| --- | --- | --- |
| 1 | `dev-requirements-brainstorm` | The request is already complete and small ("make the button blue"), or an approved design exists |
| 2 | `dev-system-design` | No new components, services, data models or external integrations |
| 3 | `dev-implementation-plan` | A single-file change: go straight to `dev-test-driven-development` |
| 4 | `dev-code-review` | Never for a feature |
| 5 | Correction cycle | No critical or high findings |
| 6 | `dev-verification` | Never |

Example: "Add CSV export for invoices." Brainstorm confirms columns, filters and who uses it; system design is skipped (no new components); the plan has 3 tasks; review finds one high finding (unescaped commas); one correction cycle fixes it with a test; verification runs the suite and build.

## 2. Bug fix

| Step | Skill | Notes |
| --- | --- | --- |
| 1 | `dev-systematic-debugging` | Root cause first. Its Phase 4 writes the regression test with `dev-test-driven-development`. |
| 2 | `dev-code-review` | Review the fix and the test |
| 3 | Correction cycle | Only if review found problems |
| 4 | `dev-verification` | Original symptom gone, suite green |

If debugging reaches three failed fixes, stop the playbook and ask the user about the architecture. That is not a correction cycle.

## 3. Code review only

1. `dev-code-review` in give-a-review mode. Report findings and the verdict.
2. Fix nothing unless the user asks. If they ask, that is the one correction cycle: fix with tests, then `dev-verification`.

When the user brings review comments from someone else, use `dev-code-review` in receive mode instead.

## 4. Documentation

1. `dev-documentation` for the requested documents.
2. `dev-verification` with a requirements checklist: commands in the docs were checked, links resolve, no secrets or personal data.

## 5. Tech debt assessment

1. `dev-tech-debt` for the agreed scope. Report findings and the phased plan.
2. Stop and ask. Only if the user approves, run `dev-implementation-plan` for the first remediation phase as a new run.

## Choosing between playbooks

- A bug report inside a feature request: run the bug fix first, then the feature, as two runs.
- A request that spans design and code ("design and build the signup page"): hand the visual design to the Design department if it is available, then run the new feature playbook.
- A request touching production infrastructure: hand off to DevOps if available; otherwise stop and ask before any deploy step.
