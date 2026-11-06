# Test smells and fixes

| Smell | Example | Why it hurts | Usual fix |
| --- | --- | --- | --- |
| Fixed sleep | wait 3 seconds, then click | Slow when the app is fast, flaky when it is slow | Wait for a condition: element visible, response received |
| No assertion | Test calls the function and ends | Passes whatever the code does | Assert the observable outcome |
| Status-only API assertion | Checks 200 and stops | Wrong body, missing fields go unnoticed | Assert key fields and types |
| Assert on internals | Checks a private method was called | Breaks on refactors that keep behavior | Assert behavior the user or caller sees |
| Order dependence | Test B uses the user created in test A | Fails when run alone or in parallel | Each test creates its own data |
| Shared mutable state | Global object changed by several tests | Random failures depending on order | Reset state per test or use fresh instances |
| Real network call | Test calls a live third-party API | Fails on outages and rate limits; may leak data | Stub at the boundary; keep a few contract tests |
| Clock dependence | Expects today's date | Fails near midnight, month end, other time zones | Inject or freeze the clock |
| Random data without a seed | Random names or amounts | Failures cannot be reproduced | Seed the generator and log the seed |
| Brittle selector | div > div:nth-child(3) > button | Breaks on any layout change | Role and accessible name, label, or test id |
| Retry to green | Test retried three times in CI | Hides real intermittent bugs | Find the cause; quarantine with an owner and a date |
| Permanent skip | Skipped test with no reason | Silent loss of coverage | Fix, delete with a reason, or track as an issue |
| Real customer data | Fixture copied from production | Privacy breach, possibly illegal | Synthetic or properly anonymized data |
| Hard-coded secret | API key in a test file | Leaks credentials | Environment variable; rotate the leaked key |
| Giant end-to-end test | One test walks through 20 screens | Slow, hard to diagnose | Split by journey; push rules down to unit tests |

## Measuring flakiness

If running the suite is possible, run it several times without code changes (for example 3 to 5 runs). Any test that changes result is flaky. Record the test name, failure rate and failure message. Do not mark a test flaky on a single failure without evidence; it may be a real bug.
