# Writing good tests

Read this when writing or changing tests, adding mocks, or adding test helpers.

A test exists to catch a specific break. Two principles:

```
1. Every test names the break it catches
2. Every test exercises the real thing
```

## Principle 1: name the break

Before writing the test body, answer: what production change should make this test fail, and is that change a bug or a decision?

**Derive expected values independently.** Use literals and hand-checked fixtures. Table-driven tests with literal expected values are the preferred shape. An expected value computed by the code under test passes no matter what the code does.

```
# Bad: the same builder computes both sides, so it is always true
expected = build_search_query(tag = "urgent")
expect build_search_query(tag = "urgent") == expected

# Good: a hand-derived literal
expect build_search_query(tag = "urgent") == 'tag:"urgent"'
```

**No change detectors.** A test that only fails when a constant or exact message wording changes fires on redesign and sleeps through bugs. Test the behavior that depends on the decision: not "MAX_RETRIES equals 5" but "a failing call is retried 5 times and the 6th attempt never happens".

**Behavior, not text.** Asserting that a file contains an exact line proves only that the source is the source. Run the thing with controlled inputs and assert outputs, side effects or exit codes.

**Your code, not the framework.** Test the contract your code makes at its boundaries: the route you register, the query you emit, the payload you produce. Trivial getters and constants earn tests only when they validate, normalize, default or cause side effects.

Gate before writing a test body:

```
Name the production change that would make this test fail.
  Cannot name one           -> redesign around an observable behavior
  "The source text changed" -> run it and assert its effects
  Only intentional changes  -> change detector; test the dependent behavior
Confirm the expected value is derived without the code under test.
```

## Principle 2: exercise the real thing

**A mock earns no assertions.** Asserting that a mock exists or was rendered says nothing about the component. Assert the real behavior, or remove the assertion.

**Mock at the right level.** Learn every side effect of the real method before replacing it. Mock the slow or external operation and keep what the test depends on real.

**Make test doubles specific.** When arguments, call counts or ordering are part of the contract, assert them. Give each branch (success, error, malformed input) its own fixture.

**Mirror real data completely.** Mock the complete structure as it really exists, not only the fields your test reads. Partial mocks pass while integration breaks.

**Production code carries production methods only.** Cleanup that only tests need lives in test utilities.

**Prefer real components over complex mocks.** When mock setup outgrows the test logic, switch to an integration test with real components.

## The mutation check

Before finishing, imagine changing the production code. At least one test should fail for each realistic change:

- wrong constant or argument
- wrong branch
- missing state change or side effect
- empty or default return
- missing validation for zero, empty, null, unauthorized or malformed input

A change nothing catches marks the behavior as unprotected, or the test as meaningless.

## Warning signs

- Setup and assertion share the same object, guaranteeing equality
- The test fails on every intentional change but never on accidental breakage
- Expected values hidden behind loops, builders or helpers
- The test checks a mock's test id, or fails if you remove the mock
- A production method is called only from tests
- Mock setup is more than half the test
