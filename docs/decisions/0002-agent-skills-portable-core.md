# 0002. Agent Skills as the portable core format

Date: 2026-11-06
Status: Accepted

## Context

SkillOffice must work across AI platforms. As of November 2026, Claude Code, OpenAI Codex, Gemini CLI and Antigravity, Cursor, GitHub Copilot, Windsurf/Devin and Lovable all load skills in the open Agent Skills format. The standard allows six frontmatter fields. Claude Code accepts more, but claude.ai and the Skills API reject unknown fields with an error.

## Decision

- Every skill is a folder in the Agent Skills format, with SKILL.md frontmatter limited to the six standard fields: name, description, license, compatibility, metadata, allowed-tools.
- SkillOffice planning data (inputs, outputs, dependencies, context needs, risk, side effects, test results, provenance) lives in a sidecar `skill.yaml`.
- Platform differences are handled by generated adapter packages, not by editing skills per platform. The two main install targets are `.agents/skills/` and `.claude/skills/`.

## Consequences

- One canonical copy per skill works on all supporting platforms.
- Platform-specific features (such as Claude Code's extra frontmatter fields) are not used in the core.
- `skilloffice validate` enforces the six-field rule.
