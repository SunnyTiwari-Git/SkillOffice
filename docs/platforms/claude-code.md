# Using SkillOffice in Claude Code

SkillOffice ships one Claude Code plugin per department, plus a Front Desk plugin that routes requests. Each plugin contains the shared `skilloffice-core` rules and one department manager. The manager's specialist skills are bundled inside it and load only when needed.

| Plugin | What it adds |
| --- | --- |
| `skilloffice-front-desk` | Sends a request to the right department |
| `skilloffice-marketing-content-pr` | Marketing manager (`mkt-manager`) and its specialists |
| `skilloffice-software-development` | Development manager (`dev-manager`) and its specialists |

## Install from GitHub

```bash
claude plugin marketplace add SunnyTiwari-Git/SkillOffice
claude plugin install skilloffice-marketing-content-pr@skilloffice
claude plugin install skilloffice-software-development@skilloffice
```

While the repository is private, only accounts with access to it can add the marketplace.

## Install from a local copy

```bash
claude plugin marketplace add /path/to/SkillOffice
claude plugin install skilloffice-marketing-content-pr@skilloffice
```

To try a plugin for one session without installing it:

```bash
claude --plugin-dir /path/to/SkillOffice/dist/claude-code/plugins/skilloffice-marketing-content-pr
```

## Set up your project (optional but recommended)

From your project folder:

```bash
node /path/to/SkillOffice/tools/skilloffice-cli/src/cli.ts init
```

Then fill in `.skilloffice/context/default/` with your company details. Without this step the skills still work, but they ask for details each time and cannot skip repeated work.

## Use it

Ask in plain words, for example "Use the mkt-manager skill to review our landing page", or let Claude pick the skill from your request.

## Known limits

- Tested status is recorded in each department README. A department is "pilot, not yet platform-tested" until its workflows pass on Claude Code and Antigravity.
- The specialist skills are bundled inside the manager. Install with `npm run build -- --layout full` from a local copy if you want each specialist as its own skill.
