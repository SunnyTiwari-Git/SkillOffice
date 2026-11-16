# 0006. Test on Claude Code only

Date: 2026-11-16
Status: Accepted. Replaces the "Primary test platforms" line of 0005.

## Context

Decision 0005 named Claude Code and Google Antigravity as the two test platforms. All 18 departments passed a full workflow test on Claude Code, checked against the files each run left behind. Antigravity testing had to be run by hand, its first trial produced claims that the files did not support, and it was put on hold. Keeping a second platform as a release requirement would block the first release with no end date.

## Decision

- Claude Code is the only platform SkillOffice tests and supports.
- The `.agents/skills` install option stays, labelled untested, because the skills use the open Agent Skills format and it costs nothing to keep. Antigravity, Gemini CLI, Codex, Cursor, GitHub Copilot and Windsurf may work with it.
- A department is ready for release once its main workflow passes on Claude Code.
- The Antigravity trial record stays in `tests/platforms/antigravity.md` as an archive.

## Consequences

- Version 0.1.0 can be released without further platform testing.
- Documentation says "tested on Claude Code; other tools may work but are not tested" everywhere.
- Skills must keep to the six standard frontmatter fields (decision 0002), so other tools stay possible.
- Adding a tested platform later needs a new decision record and a test run of every department on it.
