---
name: dev-verification
description: Requires fresh evidence before any claim that work is complete, fixed or passing. Use right before saying something is done, fixed, working or passing, before committing, opening a pull request or handing over, and as the final step of every software development run. Runs the proving commands and reports the actual result.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Verification Before Completion

**Core principle:** evidence before claims, always.

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you have not run the verification command in this step, you cannot claim it passes. A cached or earlier result is not fresh evidence. This skill is never served from a cache.

Load only the context this skill declares: `technical.testing` and `technical.stack` (the project's test, lint and build commands).

## The gate

Before claiming any status or expressing satisfaction:

1. **Identify** the command that proves the claim.
2. **Run** the full command, fresh and complete.
3. **Read** the full output: exit code, number of failures, warnings.
4. **Verify:** does the output confirm the claim?
   - No: state the actual status, with the evidence.
   - Yes: state the claim, with the evidence.
5. Only then make the claim.

## What proves what

| Claim | Requires | Not enough |
| --- | --- | --- |
| Tests pass | Test command output with 0 failures | An earlier run, "should pass" |
| Linter is clean | Linter output with 0 errors | A partial check |
| Build succeeds | Build command with exit code 0 | The linter passing |
| Bug is fixed | The original symptom tested and gone | Code changed, assumed fixed |
| Regression test works | Seen failing without the fix and passing with it | Passing once |
| Delegated work is done | The actual file changes inspected | The agent said "success" |
| Requirements are met | A line-by-line checklist against the spec or plan | Tests passing |

## Red flags

- Words like "should", "probably", "seems to"
- Satisfaction before evidence ("Done!", "Perfect!")
- About to commit, push or open a pull request without running checks
- Trusting another agent's success report
- "Just this once" or "partial check is enough"

## Patterns

```
Good: [run test command] [see: 34 of 34 pass] "All 34 tests pass."
Bad:  "Should pass now."

Good: re-read the plan, make a checklist, verify each item, report gaps or completion.
Bad:  "Tests pass, so the phase is complete."
```

## Report

```markdown
## Verification
| Check | Command | Result |
| --- | --- | --- |
| Tests | <command> | 34 passed, 0 failed |
| Lint | <command> | 0 errors |
| Build | <command> | exit 0 |
| Requirements | checklist against <plan or spec> | 7 of 7 met |

Status: verified | not verified (with what failed)
```

Commands run only in the user's own project, through the platform's normal permission prompts. This skill does not fix anything: if a check fails, report it and hand back.

## In a managed run

This is the final step of every `dev-manager` playbook. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): log each check as a `test_result` event. Never store or reuse a cached verification result. If checks fail after the manager's single correction cycle, report the failures and stop; the person decides what happens next.

## Handoff

End with a handoff (under 400 words): Done, Decisions, Changed files (none), Tests and checks (the table above), Open issues (anything that failed), Next (the manager's final report).
