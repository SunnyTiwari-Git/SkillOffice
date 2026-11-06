# Governance

## Ownership

SkillOffice is owned and maintained by [@SunnyTiwari-Git](https://github.com/SunnyTiwari-Git). The owner has final authority over architecture, security, licensing, releases and what enters the library.

- Only the owner can push to the official repository. No collaborators have write access.
- Nothing merges automatically. Auto-merge is disabled.
- External contributions are not accepted at this time (see [CONTRIBUTING.md](CONTRIBUTING.md)).

## Decisions

Significant decisions are recorded as Architecture Decision Records in [docs/decisions/](docs/decisions/). Each record states the context, the decision, its consequences and the date. A decision changes only through a new record that supersedes the old one.

Before a significant change, the change is described with: what changes, why, which departments or components are affected, and the risks.

## Review rules

- Every skill passes `skilloffice validate`, `skilloffice scan` and its evals before release.
- Every third-party skill has a completed security review in `registry/security-reviews/`.
- High-risk skills (scripts, network, credentials, external actions) need explicit owner approval.
- A department is released only after its main workflows pass on two AI platforms.

## Versioning and commits

- Releases follow [Semantic Versioning](https://semver.org/). Each skill also has its own version in `skill.yaml`.
- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/), for example `feat(marketing): add copy-review skill`.
- Release notes are kept in [CHANGELOG.md](CHANGELOG.md).
