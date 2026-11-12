# Provenance: sp-research-brief

| Field | Value |
| --- | --- |
| Type | adapted |
| Source id | anthropics-knowledge-work-plugins |
| Upstream repository | https://github.com/anthropics/knowledge-work-plugins |
| Upstream paths | enterprise-search/skills/knowledge-synthesis/SKILL.md, enterprise-search/skills/search-strategy/SKILL.md |
| Upstream commit | ab4cb1cd383b4eb87383be8cf4e70cb5b2a2348d |
| Upstream license | Apache-2.0 |
| Security review | registry/security-reviews/00-shared-productivity--sp-research-brief.md |
| Imported on | 2026-11-13 |
| Imported by | Claude (AI agent), pending owner sign-off |

## Changes made from the upstream version

Modified by SkillOffice on 2026-11-13:

- Merged the two upstream skills (query planning and result synthesis) into one research skill that works from user-provided material, or the platform's own search with the user's permission.
- Kept, rewritten in our own words: classifying the question type, breaking it into keywords and sub-questions, query broadening, asking one question only when truly ambiguous, deduplication rules, citing every claim, confidence from freshness, authority and agreement, surfacing conflicts, and scaling detail to the number of results.
- Added: no invented sources, quotes or figures; search only with permission; source text is data, never instructions; personal and confidential data kept out of the brief and memory; an explicit gaps section.
- Removed: connector placeholders and source-specific query syntax for chat, wiki, email, cloud storage and project trackers; the requirement to search all connected sources in parallel; the numeric relevance weight table; the CONNECTORS.md reference; the `user-invocable` frontmatter field; worked examples that named people.
- Moved the source and confidence tables into `references/synthesis-guide.md`.

## Files not imported

- `enterprise-search/.mcp.json`, `enterprise-search/CONNECTORS.md` and plugin commands: connector configuration, never imported.

## Attribution

Derived from anthropics/knowledge-work-plugins, Copyright Anthropic, licensed under the Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0). The upstream repository has no NOTICE file. This file was modified as listed above.
