# Condition-based waiting

Flaky tests often guess at timing with fixed delays. They pass on fast machines and fail under load or in CI.

**Core principle:** wait for the condition you care about, not for a guessed amount of time.

## When to use

- Tests contain fixed sleeps or delays
- Tests are flaky: pass sometimes, fail under load
- Tests time out when run in parallel
- Tests wait for asynchronous work to finish

Do not use it when you are testing timing itself (debounce or throttle intervals). If a fixed delay is truly needed, document why.

## Pattern

```
# Before: guessing
sleep(50 milliseconds)
result = get_result()
expect result is defined

# After: waiting for the condition
wait_for(condition = get_result() is defined, description = "result", timeout = 5 seconds)
result = get_result()
expect result is defined
```

A generic `wait_for` helper:

```
function wait_for(condition, description, timeout):
    start = now()
    loop:
        value = condition()
        if value: return value
        if now() - start > timeout:
            fail("Timed out waiting for " + description + " after " + timeout)
        sleep(10 milliseconds)
```

Many test frameworks already include an equivalent. Prefer the built-in one.

## Common mistakes

- Polling too fast (every 1 millisecond) wastes CPU. Poll about every 10 milliseconds.
- No timeout: the test hangs forever. Always time out with a clear message.
- Stale data: reading state once before the loop. Read it inside the loop.

## When a fixed delay is correct

First wait for the triggering condition, then wait a documented, known duration, for example "the tool reports every 100 milliseconds, so wait 200 milliseconds to see two reports". Write the reason in a comment.
