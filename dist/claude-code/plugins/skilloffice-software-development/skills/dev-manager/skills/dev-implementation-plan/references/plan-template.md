# Plan template

## Header (every plan starts with this)

```markdown
# [Feature name] Implementation Plan

**Goal:** [One sentence describing what this builds]
**Architecture:** [2 to 3 sentences about the approach]
**Tech stack:** [Key technologies and libraries]
**Spec:** [Path to the design or spec this plan implements. Executors read both.]

## Global constraints

[Project-wide requirements from the spec, one per line, with exact values copied from the spec: version floors, dependency limits, naming rules, platform requirements. Every task implicitly includes this section.]

## Review focus

[Up to five inputs or failure modes the spec implies but no task's tests exercise, most likely first. One line each: the input or condition, and what a reasonable user would expect. For each line, add the test that pins it to the task that owns the code.]
```

## Task structure

````markdown
### Task N: [Component name]

**Files:**
- Create: `exact/path/to/file.ext`
- Modify: `exact/path/to/existing.ext:123-145`
- Test: `tests/exact/path/to/test.ext`

**Interfaces:**
- Consumes: [what this task uses from earlier tasks, with exact signatures]
- Produces: [what later tasks rely on: exact names, parameter and return types]

- [ ] **Step 1: Write the failing test**

```
test "rejects an empty email address":
    result = submit_form(email = "")
    expect result.error == "Email required"
```

- [ ] **Step 2: Run the test and confirm it fails**

Run: `<project test command> <test path>`
Expected: FAIL because `submit_form` does not validate email yet

- [ ] **Step 3: Implement `submit_form(data) -> Result` in `exact/path/to/file.ext`**

One line on the approach when the signature and test leave a choice.

- [ ] **Step 4: Run the test and confirm it passes**

Run: `<project test command> <test path>`
Expected: PASS

- [ ] **Step 5: Commit**

Commit message following the project's convention (for example Conventional Commits: `feat: validate email on form submit`).
````

Use the project's real language and test command from `technical.stack` and `technical.testing`. The pseudocode above is only a shape.
