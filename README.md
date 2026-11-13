# SkillOffice

**A free, open-source library of professional AI skills, organized like a company.** Each department (Marketing, Design, Engineering, Sales, HR, Finance and more) has its own manager that picks the right skills for your task, runs them in order, and gives you one clear report.

> Status: **pre-release preview.** All 18 departments (168 skills) are built and each has passed a test run on Claude Code. Testing on a second AI tool is still to come, so nothing is production-ready yet. See [CHANGELOG.md](CHANGELOG.md).

## Who it is for

Software companies first, then any business: agencies, startups, freelancers, e-commerce and traditional companies with an online presence. You install only the departments you need and describe your company once.

## How it works

- **Departments.** Skills are grouped by business department, each with a manager that acts as team lead.
- **Managers plan, skills do.** A manager reads a one-line list of its skills, chooses only the ones your request needs, and runs them in the right order.
- **Your company, your context.** You fill in your company, brand and regional details once in a private `.skilloffice/` folder in your own project. Skills reuse it and never share it.
- **Memory that saves time.** SkillOffice remembers finished work, decisions and file fingerprints, so it does not redo work that has not changed.
- **One fix, then you decide.** Every run collects all problems, removes duplicates, makes one round of fixes, checks them, and hands the result back to you. It never loops endlessly.

## Departments

18 departments are ready to try, each with a manager and 8 to 11 specialist skills. The full list, with what each skill does, is in [docs/departments.md](docs/departments.md).

| Code | Department | Code | Department |
| --- | --- | --- | --- |
| `sp` | Shared Productivity | `pm` | Product Management and Research |
| `exe` | Executive Management and Strategy | `dsn` | UI/UX, Graphic Design and Branding |
| `hr` | Human Resources and People Operations | `dev` | Software Development and Engineering |
| `fin` | Finance and Accounting | `qa` | Quality Assurance and Testing |
| `legal` | Legal, Risk and Compliance | `it` | IT Operations and Technical Support |
| `sls` | Sales and Business Development | `ops` | Cloud Infrastructure, DevOps and SRE |
| `mkt` | Marketing, Content and PR | `sec` | Cybersecurity |
| `sup` | Customer Support and Customer Success | `data` | Data, Analytics and AI |
| `biz` | Business Operations and Project Management | `proc` | Procurement and Vendor Management |

Coming later: E-commerce and Retail Operations, Supply Chain and Manufacturing, and industry packs (healthcare administration, education, hospitality and more).

## Quick start (early preview)

The `skilloffice` helper needs Node.js 22 or newer. Until it is published, run it from a copy of this repository:

```bash
# See the departments you can install
node tools/skilloffice-cli/src/cli.ts install --list

# Install the ones you need into your project (use --platform agents for Antigravity, Gemini CLI, Codex, Cursor, Copilot or Windsurf)
node tools/skilloffice-cli/src/cli.ts install /path/to/your-project --platform claude-code --departments marketing,sales
```

Then fill in `.skilloffice/context/default/` in your project and restart your AI tool. Claude Code users can also install departments as plugins. See [docs/getting-started.md](docs/getting-started.md).

## Supported AI tools

SkillOffice uses the open [Agent Skills](https://agentskills.io/specification) format.

| Tool | Status |
| --- | --- |
| Claude Code | All 18 departments passed a test run |
| Google Antigravity | First runs of 2 departments passed; full testing on hold |
| OpenAI Codex, Cursor, GitHub Copilot, Windsurf/Devin, Lovable | Planned; support the same format, not yet tested |

A tool is listed as supported only after a department's main workflows pass on it.

## Security

Every third-party skill goes through a seven-step review before it is included, and every source is pinned to an exact version. See [SECURITY.md](SECURITY.md) to report a problem privately, and [registry/security-reviews/](registry/security-reviews/) for review records.

Skills treat documents, emails and web pages as data, never as instructions, and ask before any action outside the conversation.

## Contributing

Bug reports and skill requests are welcome as GitHub issues. Pull requests are not accepted yet. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[Apache License 2.0](LICENSE). Third-party attributions are in [NOTICE](NOTICE).

SkillOffice output is AI-generated. Legal, financial and HR output is not professional advice.
