---
name: dev-code-review
description: Reviews code changes for correctness, security, performance, maintainability and test quality, and handles review feedback with technical rigor. Use with a diff, pull request, branch or files, "review this before I merge", "is this code safe?", after finishing a feature or plan, or when responding to someone else's review comments.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Code Review

Two modes: **give a review** and **receive a review**. Reviews are read-only: never change the code, the history or the branch while reviewing.

Load only the context this skill declares: `technical.stack`, `technical.standards`, `technical.testing`. Judge against the project's own standards first.

## Mode 1: give a review

### Gather the change

- A diff, pull request, file list or range of commits from the person, or the change since the base branch (for example the merge base with main).
- The requirements, plan or design the change implements, if one exists.
- The person's focus, if any ("this handles payments", "focus on security").

If your platform supports subagents, review in a fresh one with the prompt in [references/reviewer-prompt.md](references/reviewer-prompt.md), giving it only the change and the requirements, never the whole conversation. Otherwise review yourself in a separate pass, and say that it was a self-review.

### What to check

| Area | Look for |
| --- | --- |
| Requirements | Matches the plan or spec; deviations justified; nothing missing |
| Correctness | Edge cases (empty, null, overflow, zero), error handling and propagation, off-by-one, race conditions, type safety |
| Security | Injection (SQL, command, template), XSS, CSRF, authentication and authorization gaps, secrets or credentials in code, insecure deserialization, path traversal, SSRF, missing input validation at boundaries |
| Performance | N+1 queries, unbounded queries or loops, quadratic work in hot paths, missing indexes, resource leaks |
| Maintainability | Naming, single responsibility, duplication, dead code, documentation for non-obvious logic |
| Tests | Real behavior not mocks, edge cases covered, tests ran and pass |
| Production readiness | Migrations and rollback, backward compatibility, configuration via environment, logging without personal data |

For behavior the spec does not mention, judge by what a reasonable user would expect. Silence in the spec is not permission to break.

### Report findings

Use the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill). Each finding: id, severity (critical, high, medium, low, info), title, location (file:line), evidence, recommendation, `source_skill: 10-software-development/dev-code-review`, status `open`.

Severity guide: **critical** for security holes, data loss or broken core behavior; **high** for bugs, missing error handling or test gaps that will bite; **medium** for maintainability problems; **low** for polish; **info** for suggestions. Do not inflate nitpicks.

Also include:

- **Strengths:** specific things done well (accurate praise helps the author trust the rest).
- **Declined to judge:** anything you considered and set aside as out of scope, with the reason, so nothing is dropped silently.
- **Verdict:** approve, approve with fixes, or request changes, with one or two sentences of reasoning.

Example output and template: [references/review-output.md](references/review-output.md).

## Mode 2: receive a review

Review feedback is a technical claim to verify, not an instruction to obey or a compliment to return.

1. **Read** all the feedback before reacting.
2. **Understand:** restate each item in your own words. If any item is unclear, stop and ask about it before implementing anything. Items are often related.
3. **Verify** each claim against the actual code.
4. **Evaluate:** is it correct for this codebase? Does it break something? Is there a reason for the current code? Does the reviewer have full context?
5. **Respond** with a technical acknowledgment or reasoned pushback. Push back when a suggestion breaks working code, lacks context, adds unused features (YAGNI), or conflicts with the person's earlier decisions.
6. **Implement** one item at a time, in this order: blocking issues (breaks, security), simple fixes, complex fixes. Test each one.

No performative replies ("Great point!", "You are absolutely right!"). State the fix or the reasoning. If you pushed back and were wrong, say so plainly and fix it.

## In a managed run

When `dev-manager` runs this skill, return findings only. Do not fix them here: the manager merges findings from all review skills and runs the single correction cycle. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): log each critical or high finding as an `issue_opened` event and record the files you reviewed with `verify-file`.

## Handoff

End with a handoff (under 400 words): Done (what was reviewed), Decisions (verdict), Changed files (none), Tests and checks (whether the test suite ran and passed), Open issues (finding ids by severity), Next (the manager's correction cycle, then `dev-verification`).
