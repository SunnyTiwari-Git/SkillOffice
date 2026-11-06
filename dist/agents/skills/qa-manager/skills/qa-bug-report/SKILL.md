---
name: qa-bug-report
description: "Turns an observed problem into a clear, reproducible bug report: title, environment, minimal steps to reproduce, expected versus actual result, severity and priority set separately, frequency, and evidence. Strips secrets and personal data. Can also triage a list of reports for duplicates and missing information. Use when asked to \"write up this bug\", \"file a bug\", \"log a defect\", \"triage these bugs\", or after a failed test or exploratory session."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "11-quality-assurance"
---

# Bug Report

A bug report has one job: let someone else reproduce and fix the problem without asking you anything. Short, factual, reproducible.

Load only the context this skill declares: `technical.stack`, `technical.website_architecture`, `operations.tools`, `regional.date_format`.

## Inputs

- What was observed: test failure output, session notes, screenshots, user complaint.
- Environment details: build or version, browser or device, environment name, account type.

If key facts are missing (for example the exact steps or the build), ask for them or reproduce the problem first in the user's test environment. A bug that cannot be reproduced is reported as "not yet reproduced" with everything known, never padded with guesses.

## Steps

1. **Reproduce** in a clean state if possible, and find the **minimal** steps: remove every step that is not needed to trigger the problem.
2. **Isolate**: does it happen in other browsers, accounts, data or environments? Record what changes the outcome. This often points to the cause.
3. **Write the report** using the structure below. One bug per report.
4. **Set severity and priority separately.** Severity is impact on users; priority is how soon to fix. A typo on the home page can be low severity and high priority; a crash in a rarely used admin tool can be high severity and lower priority. Severity is a fact about impact; priority is a team decision, so suggest both and let the product owner confirm priority.

   | Severity | Meaning |
   | --- | --- |
   | Critical | Data loss, security or privacy breach, payments wrong, or a core journey blocked for most users with no workaround |
   | High | A major feature broken or wrong results, with a hard workaround or affecting many users |
   | Medium | A feature partly broken, with an easy workaround or limited users |
   | Low | Cosmetic or minor inconvenience |

   | Priority | Meaning |
   | --- | --- |
   | P1 | Fix now: blocks release or hurts customers today |
   | P2 | Fix in the current cycle |
   | P3 | Fix when convenient |
   | P4 | Backlog |
5. **Attach evidence:** screenshot or recording, console errors, request and response (with secrets removed), log lines with timestamps.
6. **Remove sensitive data.** Never paste real customer data into a report, even internally. Replace:

   | Data | With |
   | --- | --- |
   | Tokens, keys, cookies, passwords | `<redacted-token>` |
   | Email addresses | `user@example.com` |
   | Names | `Test User` |
   | Phone numbers, addresses, ID numbers | `<redacted>` |
   | Card numbers | Last four digits only, or the provider's published test number |

## Report structure

- **Title:** what is wrong, where, under which condition. "Checkout total ignores discount when the cart has more than 10 items", not "Checkout broken".
- **Environment:** build, environment, browser or device, account role, date in `regional.date_format`.
- **Steps to reproduce:** numbered, minimal, with test data used.
- **Expected result** and **actual result**, each specific.
- **Frequency:** always, sometimes (for example 3 of 10 tries), once.
- **Severity** and **priority**, each with one line of reasoning.
- **Evidence.**
- **Notes:** isolation results, workaround, suspected area (clearly marked as a guess).

Format the report for the team's tracker if `operations.tools` names one (for example as a ready-to-paste issue body). Do not create tickets in external tools yourself; give the user the text, or ask before using any connected tool.

## Triage mode

Given several reports: group duplicates (same root cause or same symptom and location), ask for missing information on incomplete ones, and suggest an order based on severity and priority.

## In a managed run

When `qa-manager` runs this skill, it also emits each bug in the SkillOffice findings format (`references/protocols/findings.md` in `skilloffice-core`), `source_skill: 11-quality-assurance/qa-bug-report`, so the manager can merge them with other findings. Follow the memory protocol: batch `issue_opened` events at the end of the stage, with no sensitive data in summaries.

## Handoff

End with a handoff (under 400 words): Done (reports written), Decisions (severity and priority choices), Changed files (none, or saved report files), Tests and checks (reproduction attempts), Open issues (bug ids, not-yet-reproduced items), Next (software development through the manager, or the user's tracker).
