# Root cause tracing

Bugs often show up deep in a call stack: a file created in the wrong folder, a database opened with the wrong path, a command run in the wrong directory. The instinct is to fix where the error appears. That treats a symptom.

**Core principle:** trace backward through the call chain until you find the original trigger, then fix it there.

## When to use

- The error happens deep in execution, not at the entry point
- The stack trace shows a long call chain
- It is unclear where the invalid data came from
- You need to find which test or code path triggers the problem

## The tracing process

1. **Observe the symptom.** Example: `Error: initializing repository failed in project/packages/core`.
2. **Find the immediate cause.** Which code directly does this? For example, a call that runs an init command with a working-directory argument.
3. **Ask what called it.** Walk up: `WorkspaceManager.create(dir)` is called by `Session.initialize()`, called by `Session.create()`, called by a test.
4. **Keep tracing the value.** What was passed? Here, `dir` was an empty string, and an empty working directory resolves to the current directory, which was the source folder.
5. **Find the original trigger.** The test read a temporary-directory value before the setup step had assigned it.

## Adding a stack trace when you cannot trace by reading

Log just before the problematic operation, with context: the arguments, the current directory, the relevant non-secret settings, and the call stack. In many languages, creating an error object and printing its stack gives the full call chain. In tests, print to standard error, because a logger may be silenced.

Then run the tests and filter the output for your marker to see which test and which line trigger the call.

## Finding which test causes pollution

If something appears during the test run (a stray file or folder) and you do not know which test creates it, run the test files one at a time and check after each whether the artifact appeared. Stop at the first one that creates it. Bisecting the list (run half, then half of that) is faster for large suites.

## Example

Symptom: a repository folder created inside the source tree.

1. The init command ran in the current directory because the directory argument was empty.
2. The workspace manager was called with an empty directory.
3. The session passed an empty string.
4. The test read the temporary-directory value before setup assigned it.

Root cause: a value read before initialization. Fix: make the value fail loudly if read before setup. Then add validation at each layer (see `defense-in-depth.md`).

## Key rule

Never fix only where the error appears. Trace back to the original trigger, fix it there, and then make the bug impossible with validation at the layers in between.
