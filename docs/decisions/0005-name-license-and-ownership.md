# 0005. Name, license and ownership

Date: 2026-11-06
Status: Accepted

## Context

The working name "SkillMaster" and the alternative "SkillHub" were already used by other projects in the AI skills space, including an npm package for installing agent skills. The project needs a distinct public name, a license compatible with its main upstream sources, and a clear owner.

## Decision

- **Name:** SkillOffice. The npm name `skilloffice` was free on 2026-11-06, and only one empty GitHub repository used the name. The user folder is `.skilloffice/` and the helper tool is `skilloffice`.
- **License:** Apache-2.0, matching the main upstream sources and including an explicit patent grant.
- **Ownership:** the owner's personal GitHub account, SunnyTiwari-Git, repository `SunnyTiwari-Git/SkillOffice`. No collaborators have write access.
- **Contributions:** issues only until at least version 1.0.
- **Scope order:** software-company departments (00 to 17) first; E-commerce, Supply Chain and industry packs later.
- **Primary test platforms:** Claude Code and Google Antigravity.

## Consequences

- Imported Apache-2.0 and MIT skills can be included with attribution in NOTICE and PROVENANCE.md files.
- Share-alike, proprietary and unlicensed skills are linked, never imported.
- The domain skilloffice.com is registered by someone else; the project lives on GitHub without its own domain for now.
- The owner should confirm their employment agreement permits personal open-source projects before public release.
