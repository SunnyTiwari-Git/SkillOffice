# Provenance: qa-web-ui-testing

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-skills |
| Upstream repository | https://github.com/anthropics/skills |
| Upstream path | skills/webapp-testing/SKILL.md |
| Upstream commit | ca45fc496a3436251f191354091d557da31c15b5 |
| Upstream license | Apache-2.0 (skills/webapp-testing/LICENSE.txt) |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/11-quality-assurance--qa-web-ui-testing.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Kept the decision tree (static HTML or dynamic app, server running or not), the reconnaissance-then-action pattern, the wait-before-inspecting rule and the selector and waiting advice.
- Made it tool agnostic: use the project's existing browser tool, propose Playwright only when none exists and ask before adding a dependency. Python-only instructions removed.
- Removed the bundled-script workflow (`scripts/with_server.py`, run as a black box) and the `examples/` files; server start and stop is now described in prose with user confirmation.
- Added safety rules: local targets only, synthetic test data, no real credentials in test files, stop servers you start, screenshots saved in the project.
- Added journey checks, results table, findings output, declared context, the managed-run section and the handoff.

## Files not imported

- skills/webapp-testing/scripts/with_server.py: starts the given server commands with `shell=True` and polls localhost ports. Read; not malicious, but unnecessary and replaced by prose.
- skills/webapp-testing/examples/console_logging.py, element_discovery.py, static_html_automation.py: Playwright examples against localhost or local files. Read; replaced by references/patterns.md.
- skills/webapp-testing/LICENSE.txt: the license is recorded in registry/licenses/anthropics-skills.txt.

## Attribution

Portions of this skill are adapted from anthropics/skills (skills/webapp-testing).

Licensed under the Apache License, Version 2.0 (the "License"). Copyright Anthropic. A copy of the License is in the LICENSE file at the root of this repository and at https://www.apache.org/licenses/LICENSE-2.0. The repository's THIRD_PARTY_NOTICES.md covers fonts and code in other skills, not this one. This file was modified by SkillOffice; the changes are listed above.
