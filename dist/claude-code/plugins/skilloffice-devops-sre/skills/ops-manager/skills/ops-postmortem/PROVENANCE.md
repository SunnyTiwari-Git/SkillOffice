# Provenance: ops-postmortem

## Primary source

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | wshobson-agents |
| Upstream repository | https://github.com/wshobson/agents |
| Upstream path | plugins/incident-response/skills/postmortem-writing/SKILL.md |
| Upstream commit | 4bde3168b43c0655c4d00ea2726e631719908a6d |
| Upstream license | MIT |

| Field | Value |
| --- | --- |
| Security review | registry/security-reviews/13-devops-sre--ops-postmortem.md |
| Imported on | 2026-11-07 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-07:

- Kept the blameless culture comparison, postmortem triggers, the 5 whys method, the quick postmortem format and the meeting agenda; rewrote them in our own words.
- Added: never invent timeline entries or causes, impact stated in numbers or marked unknown, "human error" never a root cause, a "where we got lucky" section, typed action items linked to causes, proposed (not committed) dates, a blameless language table and a pattern check across postmortems.
- Replaced the detailed worked example (a named pull request and developer) with neutral templates.
- Added rules for drafts only and for security incidents, declared context, the managed-run section and the handoff.

## Files not imported

- references/details.md: skimmed, not imported.

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

The SkillOffice modifications are licensed under the Apache License, Version 2.0, as described in the LICENSE file at the root of this repository.
