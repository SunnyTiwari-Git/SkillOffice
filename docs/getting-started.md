# Getting started with SkillOffice

This guide is for anyone, technical or not. SkillOffice is in early preview: all 18 departments are built and tested on Claude Code. Some steps will get simpler over time.

## What you get

SkillOffice gives your AI assistant (Claude Code) a set of professional skills grouped by department. You ask for something in plain words, for example "review our landing page copy", and the right department manager plans the work, runs the needed skills, fixes problems once, and gives you a report.

## What you need

- Claude Code. SkillOffice is tested on Claude Code only. Other AI tools that read Agent Skills may work but are not tested; see [other tools](platforms/other-tools.md).
- Node.js 22 or newer, only if you want to use the optional helper tool. Download it from [nodejs.org](https://nodejs.org).

## Step 1: Set up your project

Your "project" is the folder where you work with your AI tool, for example your website's code or a folder of marketing documents.

With the helper tool, from a copy of the SkillOffice repository:

```bash
node tools/skilloffice-cli/src/cli.ts init /path/to/your-project
```

This creates a private `.skilloffice/` folder in your project and keeps it out of git so your details stay private.

Without the helper, copy the `context-templates/` folder into your project as `.skilloffice/context/default/`.

## Step 2: Describe your company once

Open `.skilloffice/context/default/` in your project and fill in what applies:

| File | What to put in it |
| --- | --- |
| `company.yaml` | Name, industry, products, customers, markets |
| `brand.yaml` | Brand voice, colors, fonts, logo file names |
| `marketing.yaml` | Customers, channels, competitors, content rules |
| `operations.yaml` | Tools you use and your processes (no passwords) |
| `technical.yaml` | Tech stack and standards (no passwords) |
| `regional.yaml` | Currency, date format, units, language, legal region |

Put logo files in `brand-assets/`. Leave anything you do not know empty. Skills ask only when they truly need a missing detail, and save your answer so you are not asked again.

## Step 3: Install department skills

Pick the departments you need. You do not have to install all 18.

See what is available:

```bash
node tools/skilloffice-cli/src/cli.ts install --list
```

Install into your project. Use plain department words or the short codes from the list:

```bash
# For Claude Code
node tools/skilloffice-cli/src/cli.ts install /path/to/your-project --platform claude-code --departments marketing,sales

# Untested: Antigravity, Gemini CLI, Codex, Cursor, GitHub Copilot or Windsurf
node tools/skilloffice-cli/src/cli.ts install /path/to/your-project --platform agents --departments finance,legal
```

This copies each department's manager into your project (its specialist skills travel inside it), plus the shared SkillOffice rules and the Front Desk router. It also does Step 1 for you if you skipped it. Restart your AI tool afterwards so it notices the new skills.

Good to know:

- Running the same install again updates those departments to the latest version.
- If a word fits more than one department (for example "operations"), the installer lists the options instead of guessing.
- The installer never overwrites a skill folder you created yourself.
- To remove a department: `node tools/skilloffice-cli/src/cli.ts uninstall /path/to/your-project --platform claude-code --departments sales`. Your company details and memory are kept.

Claude Code users can also install departments as plugins; see [Claude Code](platforms/claude-code.md).

## Step 4: Ask for work

Ask your AI tool in plain language. If you are not sure which department fits, the Front Desk skill routes the request for you.

Every run ends with a report in `.skilloffice/reports/`. It lists what was checked, what was fixed, and anything that still needs your decision.

## Keeping things private

- Your `.skilloffice/` folder stays in your project and is not committed to git by default.
- Never put passwords, API keys or customer personal data in context files.
- To erase SkillOffice's memory for a project: `node tools/skilloffice-cli/src/cli.ts forget --all`.
