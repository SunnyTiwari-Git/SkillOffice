# Defense in depth

When you fix a bug caused by invalid data, one validation check feels like enough. But another code path, a refactor or a mock can bypass that single check.

**Core principle:** validate at every layer the data passes through, so the bug becomes structurally impossible.

## The four layers

1. **Entry point validation.** Reject clearly invalid input at the boundary (API handler, public function, form). Example: a project directory must be non-empty, must exist, and must be a directory.
2. **Business logic validation.** Check that data makes sense for this specific operation. Example: workspace initialization requires a project directory.
3. **Environment guards.** Prevent dangerous operations in specific contexts. Example: during tests, refuse to create files outside the temporary directory.
4. **Diagnostic logging.** Before a risky operation, log the context needed for later investigation: arguments, current directory, call stack. Never log secrets or personal data.

## Applying it

1. Trace the data flow: where the bad value starts and where it is used.
2. List every checkpoint the data passes through.
3. Add validation at each layer: entry, business logic, environment, logging.
4. Test each layer: try to get past layer 1 and confirm layer 2 catches it.

## Why all four

In practice each layer catches cases the others miss: different code paths skip the entry check, mocks skip business checks, platform differences need environment guards, and logging reveals misuse nobody predicted.
