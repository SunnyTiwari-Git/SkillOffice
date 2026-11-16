# Using SkillOffice in other AI tools (untested)

SkillOffice is tested on Claude Code only. Google Antigravity, Gemini CLI, OpenAI Codex, Cursor, GitHub Copilot and Windsurf read the same open Agent Skills format from a project's `.agents/skills/` folder, so SkillOffice may work in them, but we do not test them and cannot promise results. See [decision 0006](../decisions/0006-claude-code-only-testing.md).

## Install

From a copy of the SkillOffice repository:

```bash
node tools/skilloffice-cli/src/cli.ts install /path/to/your-project --platform agents --departments marketing,sales
```

This copies the departments you chose, the shared SkillOffice rules and the Front Desk router into `.agents/skills/` in your project, and sets up `.skilloffice/`. Restart your AI tool afterwards.

## What to watch for

- Check results against the files a run leaves behind, not the assistant's summary. `node tools/skilloffice-cli/src/cli.ts evidence /path/to/your-project` prints what the run actually did: the plan, the report, the memory entries and the correction cycles.
- An early trial on Antigravity in November 2026 is recorded in [tests/platforms/antigravity.md](../../tests/platforms/antigravity.md). Its agent claimed results the files did not support, which is why we check evidence.
- Bug reports from these tools are welcome as GitHub issues. Say which tool and version you used.
