# skilloffice

The helper for [SkillOffice](https://github.com/SunnyTiwari-Git/SkillOffice), a free, open-source library of professional AI skills organized like a company. Each department (Marketing, Sales, Design, Finance, HR and more) has a manager skill that picks the right specialist skills for your request, runs them in order, and gives you one report.

This package installs those departments into your project and sets up the private `.skilloffice/` folder where your company details and memory live.

Tested on Claude Code. Other tools that read Agent Skills (Antigravity, Gemini CLI, Codex, Cursor, Copilot, Windsurf) may work but are not tested.

## Requirements

Node.js 22.18 or newer.

## Quick start

From your project folder:

```bash
# See the departments you can install
npx skilloffice install --list

# Install the ones you need for Claude Code
npx skilloffice install --platform claude-code --departments marketing,sales
```

Then fill in `.skilloffice/context/default/` with your company details and restart Claude Code. Ask in plain words, for example "Use the mkt-manager skill to review our landing page".

## Commands

| Command | What it does |
| --- | --- |
| `install --list` | Show departments ready to install |
| `install [dir] --platform claude-code\|agents --departments <list>\|all` | Copy departments into a project and set up `.skilloffice/` |
| `uninstall [dir] --platform <p> --departments <list>\|all` | Remove departments; your context and memory are kept |
| `init [dir]` | Set up `.skilloffice/` only (safe to re-run) |
| `context <field...>` | Print requested company context fields |
| `status`, `verify-file`, `cache`, `log`, `forget` | Memory and reuse helpers the skills call |
| `evidence [dir]` | Show what a run actually did, from the files it left behind |
| `--version`, `--help` | Version and full usage |

## Privacy

Your company details, memory and reports stay in `.skilloffice/` in your own project. `init` adds them to `.gitignore`. This helper makes no network calls during install.

## License

Apache-2.0. Includes skills adapted from MIT and Apache-2.0 sources; attributions are in `NOTICE` and the bundled third-party licenses.

Security problems: please report privately, see [SECURITY.md](https://github.com/SunnyTiwari-Git/SkillOffice/blob/main/SECURITY.md).
