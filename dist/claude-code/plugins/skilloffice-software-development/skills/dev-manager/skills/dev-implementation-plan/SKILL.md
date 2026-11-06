---
name: dev-implementation-plan
description: Writes a step-by-step implementation plan from an approved design or requirements, then executes it task by task with tests and a progress record. Use when there is a spec or design for a multi-step coding task, before touching code, or when asked to "plan the implementation", "break this into tasks" or "execute the plan".
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Implementation Plan

Two parts: **write the plan**, then **execute it**. The plan is the set of decisions the implementer cannot make alone. Execution follows it exactly, proves each step with a test, and keeps a record that survives context loss.

Load only the context this skill declares: `technical.stack`, `technical.testing`, `technical.standards`, `technical.deployment_process`.

## Part 1: Write the plan

Write for an engineer who has not seen this codebase or spec but writes idiomatic code in the project's language. Document what they cannot know: which files, which names and signatures, which values from the spec, which tests prove each task. Follow DRY, YAGNI and test-driven development.

**Save to:** the project's convention if `technical.standards` names one, otherwise `docs/plans/YYYY-MM-DD-<feature>.md`.

1. **Scope check.** If the spec covers several independent subsystems, suggest one plan per subsystem. Each plan must produce working, testable software on its own.
2. **File structure first.** Map which files will be created or changed and what each is responsible for. One clear responsibility per file. Files that change together live together. In existing code, follow established patterns.
3. **Right-size tasks.** A task is the smallest unit that carries its own test cycle and is worth a separate review. Fold setup and docs into the task that needs them. Each task ends with an independently testable deliverable.
4. **One action per step**, each with a checkable result: write the failing test, run it and see it fail, implement the minimum, run and see it pass, commit.
5. **Use the template** in [references/plan-template.md](references/plan-template.md): header, global constraints, review focus, then tasks with Files, Interfaces and steps.

**What a step contains:** exactly enough that the implementer can write one reasonable thing. A test step gives the test name and assertions with the spec's exact values. A code step gives the exact signature, the file, and pinned values; the implementer writes the body. A verification step gives the command and the output that means it passed. Lines that decide nothing ("handle edge cases", "TBD") are gaps. A plan longer than the code it describes has written the code instead.

**Self-review before handing over:**

1. Spec coverage: every requirement maps to a task.
2. Step scan: no step decides nothing, and no step contains a full body the signature and tests already determine.
3. Type consistency: names and signatures match across tasks.
4. Review focus: the inputs or failure modes the spec implies but no test covers are listed, each with a test added to its task.
5. Proportion: the plan is not several times longer than the spec.

Then ask the person to review the plan. Do not start executing until they confirm it captures what they want.

## Part 2: Execute the plan

Full detail: [references/executing.md](references/executing.md). Summary:

1. **Setup.** Work on a separate branch, never directly on the main branch without the person's consent. Read the plan and spec once. Create a progress record at `.skilloffice/memory/handoffs/<run-id>/plan-progress.md` (or next to the plan if SkillOffice memory is not set up). Its first line names the plan file.
2. **Resume, never redo.** If the progress record already marks a task complete, it is done. Trust the record and version history over your recollection after a long session.
3. **Per task:** read the task in full, then follow its steps in red-green order using `dev-test-driven-development`. Every command step has an expected output: run it, read it, compare. If the code is wrong, use `dev-systematic-debugging`. If the plan is wrong, make the smallest change that satisfies the spec and record it as `Ruling: <what you decided> because <why>; cost if wrong: <cost>`.
4. **Completion contract per task:** every named test exists and ran, the final test run passed and you read the output, every expected output was compared, every deviation has a ruling. Only then add `Task N: complete (tests: <command> -> <result>)` to the progress record.
5. **Keep going** between tasks without asking for permission. Stop and ask only for: an irreversible or destructive operation, a security-sensitive action, a side effect outside the project (merge, push to a shared branch, publish, deploy), or a plan so broken that every path is a guess.
6. **After the last task**, hand off to `dev-code-review` for a whole-change review, then `dev-verification`.

Commands such as tests and builds run only in the user's own project, through the platform's normal permission prompts.

## In a managed run

When `dev-manager` runs this skill, follow the `skilloffice-core` protocols (`references/protocols/memory.md`, `references/protocols/safety.md`): log `skill_completed` per finished task, log each ruling as a `decision`, and record changed files. Fixes found by the later code review belong to the manager's single correction cycle, not to a new execution pass.

## Handoff

End with a handoff (under 400 words): Done (tasks completed), Decisions (rulings), Changed files, Tests and checks (commands and results), Open issues, Next (`dev-code-review`).
