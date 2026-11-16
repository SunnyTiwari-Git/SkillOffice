# Quality Assurance and Testing

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

This department helps you test software properly: decide where testing matters most, plan it, design good test cases, test web pages and APIs, explore for problems scripts miss, check whether your existing tests can be trusted, write bug reports developers can act on, and decide with evidence whether a release is ready. It works with any language, framework or testing tool. Your project details (stack, testing tools, deployment process) come from your SkillOffice company context.

## How it works

You talk to the **Quality Assurance manager** (`qa-manager`). It picks only the skills your request needs, runs them in order, collects any problems found, fixes its own test work in **one** correction round, checks the result, and gives you one report. QA does not change your application code: bugs it finds are handed to the Software Development department, or to you.

It always asks you before risky steps: testing against live or shared systems, using real customer data, deleting test data, installing tools, or creating tickets in other systems.

## Skills

| Skill | What it does | Changes files? |
| --- | --- | --- |
| `qa-test-strategy` | Decides where testing effort goes, based on risk | No |
| `qa-test-plan` | Organizes testing for a release: scope, approach, roles, risks | No |
| `qa-test-case-design` | Writes clear, traceable test cases using proven techniques | No |
| `qa-exploratory-testing` | Runs focused, time-boxed sessions to find unexpected problems | No |
| `qa-web-ui-testing` | Tests your local web app in a real browser, with screenshots as evidence | Writes test scripts if you want them |
| `qa-api-testing` | Tests your APIs: responses, validation, permissions, errors | Writes test files if you want them |
| `qa-regression-review` | Reviews your existing tests for gaps and flakiness | No |
| `qa-bug-report` | Writes bug reports anyone can reproduce, with sensitive data removed | No |
| `qa-release-verification` | Gives a go or no-go recommendation from fresh evidence | No |

## Playbooks

| You ask for | The manager runs |
| --- | --- |
| Test planning | strategy (if needed), plan, test cases |
| Testing a page or app | test cases (if needed), browser testing, bug reports |
| Testing an API | test cases (if needed), API testing, bug reports |
| A bug bash | exploratory sessions, bug reports |
| A review of your tests | suite review, then fixes only if you ask |
| Bugs to write up or sort | bug reports or triage |
| "Can we ship?" | any missing test runs, then release verification (always last) |

## Context it uses

Fill these in your company context (`.skilloffice/context/<profile>/`): `technical.stack`, `technical.languages`, `technical.testing`, `technical.standards`, `technical.website_architecture`, `technical.deployment_process`, `operations.team_structure`, `operations.tools`, and `regional.date_format`, `regional.currency`, `regional.units` and `regional.output_language` for test data and documents.

## Where the skills come from

Most skills are original SkillOffice work, because open-source QA skills are scarce. Two are adapted from Anthropic's Apache-2.0 collections, reviewed line by line, with all scripts and connector settings removed:

- [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins): `qa-test-strategy`
- [anthropics/skills](https://github.com/anthropics/skills): `qa-web-ui-testing`

Each skill's `PROVENANCE.md` lists its origin and changes. Security reviews for the adapted skills are in `registry/security-reviews/`.

## Not professional advice

These skills assist testers and developers. A release decision always belongs to a person on your team; the release check only recommends.
