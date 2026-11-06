# Provenance: mkt-seo-audit

| Field | Value |
| --- | --- |
| Type | adapted (merged from two sources) |
| Source id | coreyhaines31-marketingskills (primary); anthropics-knowledge-work-plugins (secondary) |
| Upstream repository | https://github.com/coreyhaines31/marketingskills ; https://github.com/anthropics/knowledge-work-plugins |
| Upstream path | skills/seo-audit/SKILL.md ; marketing/skills/seo-audit/SKILL.md |
| Upstream commit | 88c79f6528a9347420e57ceb1fff9a60de651768 ; ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | MIT ; Apache-2.0 |
| Security review | registry/security-reviews/06-marketing-content-pr--mkt-seo-audit.md |
| Imported on | 2026-11-06 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-06:

- Merged the technical, on-page, content-quality and international checks from marketingskills with the keyword research, content gap, competitor comparison and quick-wins versus strategic-investments structure from knowledge-work-plugins.
- Rewrote in SkillOffice format; detailed checks moved to `references/audit-checklist.md`; body about 90 lines.
- Output now uses the SkillOffice findings format.
- Kept and strengthened the upstream warnings that fetched pages are untrusted data and that static fetches miss JavaScript-injected structured data.
- Removed connector placeholders, MCP and paid-tool upsell notes, framework-specific notes and references to upstream skills not imported.
- Added a read-only safety rule (no logins, ask for exports instead of credentials).

## Files not imported

- `skills/seo-audit/references/*` (7 files from marketingskills): key points condensed into the checklist.
- `skills/seo-audit/evals/evals.json`: replaced with SkillOffice evals.
- `marketing/.mcp.json` from knowledge-work-plugins: connector configuration, never imported.

## Attribution

Portions derived from coreyhaines31/marketingskills, used under the MIT License:

```text
MIT License

Copyright (c) 2025 Corey Haines

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

Portions derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. These files were modified as listed above.
