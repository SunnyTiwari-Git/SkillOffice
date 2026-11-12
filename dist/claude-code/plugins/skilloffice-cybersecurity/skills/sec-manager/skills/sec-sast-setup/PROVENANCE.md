# Provenance: sec-sast-setup

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/security-scanning/skills/sast-configuration/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |
| Security review | registry/security-reviews/14-cybersecurity--sec-sast-setup.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Kept the core guidance: assess languages, choose a tool, baseline scan, incremental adoption, false-positive management, custom rules, CI and pre-commit integration, tool comparison.
- Removed the ready-to-run install and launch commands (package installs, a Docker server started with host safety checks turned off, CLI extension installs); installing tools now requires the user's approval.
- Added an approval gate before writing configuration files, a rule that tokens live in the CI secret store, a check on whether code may leave the company, a three-stage rollout, a suppression policy and a developer hand-over note.
- Rewrote the tool comparison to tell the agent to check current licenses and pricing instead of stating them.
- Added declared context, findings output, the managed-run section (never cached) and the handoff.

## Files not imported

- Plugin manifests, agents and commands (including commands/security-sast.md).

## Attribution

Portions of this skill are adapted from wshobson/agents and are covered by the following license:

```text
MIT License

Copyright (c) 2024 Seth Hobson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
