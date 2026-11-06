# Getting started with SkillOffice

This guide is for anyone, technical or not. SkillOffice is in early preview, so some steps will get simpler over time.

## What you get

SkillOffice gives your AI assistant (such as Claude Code or Google Antigravity) a set of professional skills grouped by department. You ask for something in plain words, for example "review our landing page copy", and the right department manager plans the work, runs the needed skills, fixes problems once, and gives you a report.

## What you need

- An AI tool that supports Agent Skills. Claude Code and Google Antigravity are the first tools we test.
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

Department skills are not released yet. When they are, this section will show how to install them into Claude Code and Antigravity.

## Step 4: Ask for work

Ask your AI tool in plain language. If you are not sure which department fits, the Front Desk skill routes the request for you.

Every run ends with a report in `.skilloffice/reports/`. It lists what was checked, what was fixed, and anything that still needs your decision.

## Keeping things private

- Your `.skilloffice/` folder stays in your project and is not committed to git by default.
- Never put passwords, API keys or customer personal data in context files.
- To erase SkillOffice's memory for a project: `node tools/skilloffice-cli/src/cli.ts forget --all`.
