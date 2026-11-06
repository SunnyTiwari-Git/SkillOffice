---
name: dev-systematic-debugging
description: Finds the root cause of a bug, test failure, build failure, performance problem or unexpected behavior before any fix is proposed, then fixes it with a regression test. Use with an error message or stack trace, "this works in staging but not production", "it broke after the last change", or whenever behavior differs from what is expected.
license: Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md
metadata:
  project: "SkillOffice"
  version: "0.1.0"
---

# Systematic Debugging

**Core principle:** always find the root cause before attempting a fix. Symptom fixes are failures.

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

Use for any technical issue: test failures, production bugs, unexpected behavior, performance problems, build failures, integration issues. Use it especially under time pressure, when "one quick fix" seems obvious, or when a previous fix did not work.

Load only the context this skill declares: `technical.stack`, `technical.testing`, `technical.hosting`. Ask the person for what helps: the exact error text, steps to reproduce, what changed recently, logs, expected versus actual behavior. Never ask them to paste secrets; if logs contain keys or tokens, ask them to remove them first.

## The four phases

Complete each phase before the next.

### Phase 1: Root cause investigation

1. **Read error messages carefully.** Read the whole stack trace. Note line numbers, file paths and error codes. Errors often contain the answer.
2. **Reproduce consistently.** Exact steps, every time? If not reproducible, gather more data. Do not guess.
3. **Check recent changes.** Version history, recent commits, new dependencies, configuration changes, environment differences.
4. **Gather evidence across components.** When the system has several parts (client, API, service, database, or build, package, deploy), add temporary diagnostics at each boundary: what data enters, what exits, which configuration is present. Run once to see where it breaks, then investigate that part.

   Example for an order total that is wrong on the receipt:

   ```
   # Layer 1: API request
   log "request.items:", request.items
   # Layer 2: pricing service
   log "subtotal:", subtotal, "discount_code:", discount_code
   # Layer 3: tax calculation
   log "tax_region:", tax_region, "tax:", tax
   # Layer 4: receipt rendering
   log "rendered_total:", rendered_total
   ```

   This shows which layer first produces the wrong value. Log values and settings, never secrets, tokens or personal data. Remove temporary diagnostics after the fix.

5. **Trace the data flow.** When the error is deep in a call stack, trace backward: where does the bad value originate, what called this with it, and keep going until you find the source. Fix at the source. Technique: [references/root-cause-tracing.md](references/root-cause-tracing.md).

### Phase 2: Pattern analysis

1. Find similar working code in the same codebase.
2. If you are applying a known pattern, read the reference implementation completely.
3. List every difference between working and broken, however small.
4. Understand the dependencies: components, settings, environment, assumptions.

### Phase 3: Hypothesis and testing

1. State one hypothesis: "I think X is the root cause because Y." Write it down.
2. Test it with the smallest possible change, one variable at a time.
3. Worked? Go to Phase 4. Did not? Form a new hypothesis. Do not stack fixes.
4. If you do not understand something, say so and research or ask.

### Phase 4: Implementation

1. **Create a failing test** that reproduces the bug, using `dev-test-driven-development`. You must have it before fixing.
2. **Implement one fix** for the root cause. No "while I am here" changes.
3. **Verify** with `dev-verification`: the test passes, no other test broke, the original symptom is gone.
4. **If the fix does not work:** stop and count attempts. Under 3: return to Phase 1 with the new information. **3 or more failed fixes: stop and question the architecture.** Each fix revealing a new problem elsewhere signals a design problem, not a bad hypothesis. Discuss with the person before trying again.

After the root cause is fixed, consider validation at each layer the bad data passed through: [references/defense-in-depth.md](references/defense-in-depth.md). For flaky, timing-dependent tests see [references/condition-based-waiting.md](references/condition-based-waiting.md).

## When there is truly no root cause in your code

If the issue is environmental, timing-dependent or external: document what you investigated, add appropriate handling (retry, timeout, clear error message) and monitoring. Most "no root cause" conclusions are incomplete investigations, so be sure.

## Red flags: return to Phase 1

- "Quick fix for now, investigate later"
- "Let me just try changing X"
- Several changes at once, then running the tests
- "It is probably X" without evidence
- Proposing fixes before tracing the data flow
- "One more attempt" after 2 or more failures

## Output

```markdown
## Debug report: [issue summary]

### Reproduction
- Expected: [what should happen]
- Actual: [what happens]
- Steps: [how to reproduce]

### Root cause
[Why the bug occurs, with the evidence]

### Fix
[What changed, and the regression test that proves it]

### Prevention
- [Test or guard added]
```

Commands run only in the user's own project, through the platform's normal permission prompts. Never run destructive commands or touch production systems while debugging without the person's explicit approval.

## In a managed run

When `dev-manager` runs this skill, follow the `skilloffice-core` protocols (`references/protocols/memory.md`, `references/protocols/safety.md`): log the root cause as a `decision`, the regression test as a `test_result`, and record changed files.

## Handoff

End with a handoff (under 400 words): Done, Decisions (root cause), Changed files, Tests and checks, Open issues, Next (`dev-code-review`, then `dev-verification`).
