---
name: qa-web-ui-testing
description: "Tests a web application through a real browser in the user's own local project: discovers what is on the page, drives user journeys, checks results, and captures screenshots and console errors as evidence. Uses Playwright or the browser automation tool the project already has. Use when asked to \"test the UI\", \"check this page works\", \"click through the signup flow\", \"why does the button do nothing\", or to write or run browser tests for a local web app."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Web UI Testing

Test a web app the way a user meets it: in a browser. This skill works only against the user's own local app (for example `http://localhost:5173` or a local HTML file). It never points at production or shared environments without the user's explicit approval.

Load only the context this skill declares: `technical.stack`, `technical.languages`, `technical.testing`, `technical.website_architecture`.

## Before you start

1. **Use the project's tool.** Check `technical.testing` and the project's dependencies. If the project already uses a browser automation tool (Playwright, Cypress, Selenium, WebdriverIO), use it and follow its existing test layout. If none is installed, propose Playwright and ask before adding a dependency.
2. **Confirm the target.** Get the local URL or file path, and how the app is started (for example `npm run dev`). Starting servers and installing browsers run through the platform's normal permission prompts. Stop any server you started when finished.
3. **Test data.** Use synthetic accounts and data only. Never type real customer data or real credentials into forms. If a login is needed, ask the user for a test account and do not write its password into test files; read it from an environment variable.

## Choose the approach

```
Is the target static HTML?
  Yes: read the HTML to find selectors, then script against the file
  No (dynamic app): is the server running?
    No: start it (with the user's permission) and wait until the port answers
    Yes: reconnaissance, then action (below)
```

## Reconnaissance, then action

Dynamic apps render with JavaScript, so inspect what is actually on screen before acting:

1. Open the page and wait until it has finished loading (for Playwright, wait for the network to go idle or for a known element to appear). Inspecting too early is the most common mistake.
2. Look at the rendered page: take a full-page screenshot, list buttons, links and inputs, and read their accessible names.
3. Pick selectors from what you found, preferring user-facing ones: role and accessible name, label text, visible text, then test ids. Avoid long CSS paths and positional selectors; they break on small layout changes.
4. Act: fill, click, navigate, the way a user would.
5. Assert outcomes the user can see: text, URL, an element appearing or disappearing, a saved record. Wait for conditions, never for fixed time; a fixed sleep is a flaky test waiting to happen.

Patterns and examples in prose: [references/patterns.md](references/patterns.md).

## What to check on each journey

- The happy path completes and the visible result is correct.
- Validation: empty, too long, wrong format and boundary inputs show clear messages.
- Error states: what the user sees when the server fails or is slow.
- Console errors and failed network requests during the journey (capture them as evidence).
- Basic accessibility signals: every control has a name, focus moves logically with the keyboard. Deeper accessibility review belongs to the design department.
- Responsive layout at the breakpoints the project supports, if layout is in scope.

## Output

- Test scripts saved in the project's existing test folder and style, if the user wants automated tests.
- A results table: journey, steps, expected, actual, pass or fail, evidence (screenshot path, console errors).
- Findings for every failure, in the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), with `source_skill: 11-quality-assurance/qa-web-ui-testing`. Severity follows user impact: a blocked core journey is critical, a broken secondary feature is high.

## In a managed run

When `qa-manager` runs this skill, report results and findings; do not fix application code. Fixes go to software development through the manager. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`): record test results in the stage batch, and record the test files you wrote with `verify-file`.

## Handoff

End with a handoff (under 400 words): Done (journeys tested, tool used), Decisions (selectors approach, anything not tested), Changed files (test scripts written), Tests and checks (pass and fail counts, evidence paths), Open issues (finding ids), Next (`qa-bug-report` for failures, or the manager).
