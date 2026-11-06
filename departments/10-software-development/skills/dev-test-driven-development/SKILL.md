---
name: dev-test-driven-development
description: Enforces test-driven development (red, green, refactor) for any feature, bug fix, refactor or behavior change. Use before writing implementation code, when fixing a bug, or when asked to "add tests", "write it test-first" or "use TDD". Language and framework agnostic.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Test-Driven Development

Write the test first. Watch it fail. Write the minimum code to pass.

**Core principle:** if you did not watch the test fail, you do not know if it tests the right thing.

Load only the context this skill declares: `technical.stack` and `technical.testing` (test framework and the project's test command). If the test command is unknown, find it in the project (package scripts, makefile, CI config) before asking.

## When to use

Always for new features, bug fixes, refactoring and behavior changes.

Exceptions, only with the person's agreement: throwaway prototypes, generated code, configuration files.

## The rule

```
NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST
```

Wrote code before the test? Set it aside and start from the test. Do not keep it as a "reference" and adapt it: that is testing after.

## Red, green, refactor

### Red: write one failing test

One behavior, a clear name, real code (mocks only when unavoidable).

```
test "retries a failed operation 3 times":
    attempts = 0
    operation = fails on attempts 1 and 2, returns "success" on attempt 3
    result = retry_operation(operation)
    expect result == "success"
    expect attempts == 3
```

A name like "retry works" with assertions on a mock is the bad version: vague, and it tests the mock instead of the code.

### Verify red: watch it fail (mandatory)

Run the test. Confirm it **fails** (not errors), with the expected message, because the feature is missing (not because of a typo). If it passes, you are testing existing behavior: fix the test. If it errors, fix the error and re-run until it fails correctly.

### Green: minimal code

Write the simplest code that passes. Do not add options, features or refactors the test does not need (YAGNI).

### Verify green: watch it pass (mandatory)

Run the test, then the **project's whole test suite**, not just your file. Output must be clean (no errors or warnings). If anything fails, including a failure you did not cause, fix it or report it by name. A red test you saw and did not mention is a false report.

### Refactor

Only after green: remove duplication, improve names, extract helpers. Stay green. Add no behavior.

### Repeat

Next failing test for the next behavior.

## Good tests

| Quality | Good | Bad |
| --- | --- | --- |
| Minimal | One thing. "and" in the name? Split it. | "validates email and domain and whitespace" |
| Clear | Name describes behavior | "test1" |
| Shows intent | Demonstrates the desired interface | Obscures what the code should do |

Before writing or changing any test, read [references/writing-good-tests.md](references/writing-good-tests.md): name the break each test catches, assert on real behavior not mocks, keep test-only code out of production code.

## Bug fixes

Bug found? Write a failing test that reproduces it, then follow the cycle. The test proves the fix and prevents regression. Never fix a bug without a test.

## Red flags: stop and start over from a test

- Code before test, or tests added "later"
- Test passes immediately
- You cannot explain why the test failed
- "I already tested it manually"
- "Just this once" or "this case is different"

| Excuse | Reality |
| --- | --- |
| "Too simple to test" | Simple code breaks. The test takes a minute. |
| "I will test after" | Tests written after pass immediately, which proves nothing. |
| "Deleting this work is wasteful" | Sunk cost. Keeping code you cannot trust is the waste. |
| "Existing code has no tests" | You are improving it. Add tests for the part you touch. |
| "This is hard to test" | Hard to test means hard to use. Simplify the design. |

## Checklist before calling it done

- [ ] Every new function or behavior has a test
- [ ] Each test was seen failing for the expected reason
- [ ] Minimal code was written to pass each test
- [ ] The whole project suite passes with clean output
- [ ] Edge cases and errors are covered
- [ ] Mocks only where unavoidable

Test commands run only in the user's own project, through the platform's normal permission prompts.

## In a managed run

When `dev-manager` runs this skill, follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): log each suite run as a `test_result` event with the command and the pass and fail counts.

## Handoff

End with a handoff (under 400 words): Done, Decisions, Changed files (code and tests), Tests and checks (commands and results), Open issues (any failing or skipped tests), Next (`dev-code-review` or the next plan task).
