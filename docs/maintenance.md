# Maintaining SkillOffice

This is the owner's routine for keeping SkillOffice safe and current. Nothing in it changes skills automatically: every update goes through a human review.

## Monthly: check the upstream sources

A GitHub workflow runs on the first day of each month and lists which sources have changed since we pinned them. You can also run it any time:

```bash
node tools/skilloffice-cli/src/cli.ts upstream-check
```

It only reads each source's latest version number. It downloads and runs nothing.

For each source marked **changed**:

1. Decide whether the change matters. Look at the upstream commit history for the skills we adapted (listed in `registry/sources.yaml` under `used_for`).
2. If it is worth taking, download the new version into a temporary folder, never into this repository, and do not run anything from it.
3. Run the full intake review again with `registry/security-reviews/TEMPLATE.md`, including the license check and the indirect sources check. A license change to anything outside MIT, Apache-2.0, BSD or ISC stops the update.
4. Apply the useful changes to our adapted skill by hand, keeping our safety rules.
5. Update `pinned_commit` in `registry/sources.yaml`, the skill's `PROVENANCE.md` and `skill.yaml` `provenance.upstream_commit`, and raise the skill's `version` (see below).
6. Run `npm run check` and `npm run build`, then a Claude Code test of that department's sample project.

For a source marked **unreachable**, check whether the repository moved, was renamed or was deleted. If it was deleted, our adapted copies stay as they are; record the date in the source's `notes`.

## Versions

Each skill has its own version in `skill.yaml`:

| Change | Version step | Example |
| --- | --- | --- |
| Wording fixes, clearer examples | Patch | 0.1.0 to 0.1.1 |
| New capability, new input or output | Minor | 0.1.0 to 0.2.0 |
| Changed behavior users rely on, removed input | Major | 0.1.0 to 1.0.0 |

A new version never reuses an old cached result, because the version is part of the cache key.

## Every change

- Record it in `CHANGELOG.md` under "Unreleased".
- Commit messages follow Conventional Commits, for example `fix(finance): correct variance formula`.
- `npm run check` and `npm run build` must pass, and the committed `dist/` and `docs/departments.md` must match the build (CI checks this).

## Quarterly

- Re-test one sample project per department on each supported AI tool, and record the results with `skilloffice evidence`.
- Re-read the platform documentation for Claude Code, Antigravity and the other tools in `docs/platforms/`, because skill folders and limits change.
- Review `registry/skills.yaml` for skills that should move from `draft` to `released`.

## Releases

1. Move the "Unreleased" changelog entries under a new version number and date.
2. Tag the release in git and publish release notes on GitHub, built from the changelog.
3. Publishing the helper to npm and changing repository visibility are owner decisions, made separately each time.

## If a bad skill ships

Follow the incident plan in [SECURITY.md](../SECURITY.md): pull the release, publish a GitHub security advisory, tell users which skill and versions are affected, release a fix, and write a short incident note.
