# Test fixtures: deliberately flawed samples

Each folder here is a small, made-up project used to test one department in a real AI run (see `../scenarios.json`). Many contain **planted problems on purpose**, so the test can check that the skills find them. Do not fix them.

Examples:

- `security-code-review/src/orders.js`: SQL injection and cross-site scripting, for the Cybersecurity department to find.
- `devops-deploy-review/Dockerfile` and `k8s/`: an unpinned `node:latest` image and other deployment risks, for the DevOps department to find.
- Other folders hold sample data with known answers, such as a bank reconciliation that must total exactly $43,657.72.

All company names, people and figures are fictional (Northwind Running Co.).

GitHub code scanning (CodeQL and Scorecard) reports these planted problems as alerts. They are dismissed as "used in tests". When a new fixture adds a planted problem, dismiss its alert the same way rather than changing the fixture.

This README sits outside the fixture folders on purpose: a test copies only one fixture folder, so this note never reaches the AI being tested.
