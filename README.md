# SkillOffice

**A free, open-source library of professional AI skills, organized like a company.** Each department (Marketing, Design, Engineering, Sales, HR, Finance and more) has its own manager that picks the right skills for your task, runs them in order, and gives you one clear report.

> Status: **pre-release, Phase 1 (foundations).** The shared core is being built. No department skills are released yet. See [CHANGELOG.md](CHANGELOG.md).

## Who it is for

Software companies first, then any business: agencies, startups, freelancers, e-commerce and traditional companies with an online presence. You install only the departments you need and describe your company once.

## How it works

- **Departments.** Skills are grouped by business department, each with a manager that acts as team lead.
- **Managers plan, skills do.** A manager reads a one-line list of its skills, chooses only the ones your request needs, and runs them in the right order.
- **Your company, your context.** You fill in your company, brand and regional details once in a private `.skilloffice/` folder in your own project. Skills reuse it and never share it.
- **Memory that saves time.** SkillOffice remembers finished work, decisions and file fingerprints, so it does not redo work that has not changed.
- **One fix, then you decide.** Every run collects all problems, removes duplicates, makes one round of fixes, checks them, and hands the result back to you. It never loops endlessly.

## Departments

| # | Department | Status |
| --- | --- | --- |
| 00 | Shared Productivity | Planned |
| 01 | Executive Management and Strategy | Planned |
| 02 | Human Resources and People Operations | Planned |
| 03 | Finance and Accounting | Planned |
| 04 | Legal, Risk and Compliance | Planned |
| 05 | Sales and Business Development | Planned |
| 06 | Marketing, Content and PR | **Pilot** |
| 07 | Customer Support and Customer Success | Planned |
| 08 | Product Management and Research | Planned |
| 09 | UI/UX, Graphic Design and Branding | Planned |
| 10 | Software Development and Engineering | **Pilot** |
| 11 | Quality Assurance and Testing | Planned |
| 12 | IT Operations and Technical Support | Planned |
| 13 | Cloud Infrastructure, DevOps and SRE | Planned |
| 14 | Cybersecurity | Planned |
| 15 | Data, Analytics and AI | Planned |
| 16 | Business Operations and Project Management | Planned |
| 17 | Procurement and Vendor Management | Planned |
| 18 | E-commerce and Retail Operations | Later |
| 19 | Supply Chain, Logistics and Manufacturing | Later |

Industry packs (healthcare administration, education, hospitality and more) will follow.

## Quick start (helper tool, early preview)

The optional `skilloffice` helper sets up your project. It needs Node.js 22 or newer. Until it is published, run it from a copy of this repository:

```bash
# Set up the private .skilloffice/ folder in your project
node tools/skilloffice-cli/src/cli.ts init /path/to/your-project

# Check skills for format and safety problems
node tools/skilloffice-cli/src/cli.ts validate departments
node tools/skilloffice-cli/src/cli.ts scan departments
```

Then fill in `.skilloffice/context/default/` in your project. See [docs/getting-started.md](docs/getting-started.md).

## Supported AI tools

SkillOffice uses the open [Agent Skills](https://agentskills.io/specification) format.

| Tool | Status |
| --- | --- |
| Claude Code | Primary test platform |
| Google Antigravity | Primary test platform |
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
