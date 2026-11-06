# Instructions for AI agents working on this repository

You are helping maintain SkillOffice, an open-source library of business AI skills. Follow these rules.

## Hard rules

1. **Never import third-party code or skills without the intake review.** Complete `registry/security-reviews/TEMPLATE.md` first. Never run upstream scripts during review.
2. **SKILL.md frontmatter uses only the six Agent Skills fields:** `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. Everything else goes in `skill.yaml`.
3. **`name` must match the folder name**, use lowercase letters, digits and single hyphens, and be at most 64 characters. `description` is at most 1024 characters. Keep SKILL.md under 500 lines.
4. **Never pre-approve shell, network or delete tools** in `allowed-tools`.
5. **Never commit secrets, credentials, client data or personal data.**
6. **Do not push, publish or release.** The owner does that.
7. **Do not use em dashes** in any file.

## Before you finish any change

Run and make sure all pass:

```bash
node tools/skilloffice-cli/src/cli.ts validate core departments
node tools/skilloffice-cli/src/cli.ts scan core departments
npm test
```

## Conventions

- Commit messages: Conventional Commits, for example `feat(core): add retention setting`.
- Versions: semantic versioning in each `skill.yaml`.
- Record significant decisions in `docs/decisions/` as a new numbered ADR.
- Keep documentation for non-technical readers in plain English.
- Every skill folder needs `skill.yaml` and `PROVENANCE.md`.

## Layout

- `core/`: shared protocols, Front Desk, templates.
- `departments/`: one folder per department (created when its wave starts).
- `context-templates/`: copied into a user's `.skilloffice/context/`.
- `registry/`: departments, sources, skills, security reviews.
- `tools/skilloffice-cli/`: the helper tool.
- `docs/`: user docs and decision records.
