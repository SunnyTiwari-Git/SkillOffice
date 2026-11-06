# Executing a plan

## Why a progress record

Conversation memory does not survive long sessions or context compaction. An executor that loses its place re-implements tasks that are already done. The progress record is the source of truth; your memory is not.

## Setup

1. Confirm you are not on the main branch. If you are, create a feature branch, unless the person explicitly said to work on main.
2. Read the plan once. If it names a spec, read that too. The spec is the authority; the plan is its argument. If the spec is missing, note it in the progress record: rulings made without a spec are provisional.
3. Create or open the progress record. First line: `# Progress: <plan file path>`. A record that names a different plan belongs to another plan: leave it alone.
4. Pre-flight: for every task that consumes what an earlier task produces, compare the two Interfaces blocks. Record any conflict and your ruling. If tasks share nothing, write `Pre-flight: no shared interfaces`.

## The task loop

1. Read the task in full, even if you remember it. A memory is a summary; the task has the exact values.
2. Work the steps in order under `dev-test-driven-development`. Watching a test fail is a step, not a formality. A test that passes before the code exists is a finding about the test.
3. For each command step, compare real output with `Expected:`.
   - Matches: next step.
   - Code is wrong: use `dev-systematic-debugging`. Find the cause. Never patch the symptom to match the expected output.
   - Plan is wrong: make the smallest change that satisfies the spec and record `Task N: Ruling: <finding>; decided <what and why>; cost if wrong: <cost>`.
4. Commit as the plan says.
5. Check the completion contract (below), then record `Task N: complete (tests: <command> -> <result>)` in the same step as the final commit.

Keep long command output out of the conversation: save it to a file and read the last lines.

## Completion contract

All true, with evidence from this session:

- Every test the task names exists, ran in this task, and you read its output.
- The final test run for the task passed.
- Every `Expected:` line was compared against real output.
- Every deviation from the plan has a ruling line.

If anything is missing, the task is not complete. Use `dev-verification` for the claim.

## When to stop and ask

Only for:

- an irreversible or destructive operation (deleting data, dropping tables, rewriting history);
- a security-sensitive action (credentials, permissions, access control changes);
- a side effect outside the project (merge, push to a shared branch, publish, deploy);
- a plan so broken that every path forward is a guess.

Everything else: decide, record the ruling, continue.

## Finish

1. Collect every `Ruling:` line into your final message under "Rulings I made", each with its cost if wrong. The person must see the decisions you made on their behalf.
2. Hand off to `dev-code-review` for a review of the whole change, then `dev-verification`.

## Common rationalizations

| Excuse | Reality |
| --- | --- |
| "I remember what Task N says" | You remember a summary. Read the task. |
| "The plan's code is right, skip watching the test fail" | A test you never saw fail proves nothing. |
| "I will run the full suite at the end" | Per-step runs show which step broke it. The end run is the contract, not a substitute. |
| "The plan is wrong, I will just do the right thing" | Do it and record the ruling. An unrecorded deviation is a hidden decision. |
| "I will update the progress record later" | Context loss does not wait. One line per task, with the commit. |
