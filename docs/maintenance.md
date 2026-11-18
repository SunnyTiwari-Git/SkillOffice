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

## Code scanning alerts

- Alerts in `tests/workflows/fixtures/` are planted on purpose for tests. Dismiss them as "used in tests" (see `tests/workflows/fixtures/README.md`).
- Scorecard alerts for Code-Review, Branch-Protection and Fuzzing are dismissed as "won't fix" while SkillOffice has a single maintainer. Revisit them if collaborators join.
- Any other new alert is real until proven otherwise: fix it, or record why not.

## Quarterly

- Re-test one sample project per department on Claude Code, and record the results with `skilloffice evidence`.
- Re-read the Claude Code skills and plugins documentation, because skill folders and limits change.
- Review `registry/skills.yaml` for skills that should move from `draft` to `released`.

## Releases

1. Move the "Unreleased" changelog entries under a new version number and date.
2. Set the same version in `tools/skilloffice-cli/package.json`. The release tag must be `v` plus that version, or the npm publish stops.
3. Write release notes in `docs/releases/vX.Y.Z.md` from the changelog (use full GitHub links, because the release page cannot follow relative links).
4. Publish the release on GitHub with the tag `vX.Y.Z`. **This also publishes the helper to npm** through `.github/workflows/publish.yml`, after it re-runs the tests, validation and security scan. A version number can never be reused on npm, so check the version before publishing the release.
5. Changing repository visibility stays an owner decision, made separately each time.

## Publishing to npm

The helper is published as the `skilloffice` package using npm trusted publishing: no npm token is stored anywhere, and npm shows provenance linking each version to the GitHub workflow that built it.

**What is in the package:** the compiled helper (`lib/`), the built skills from `dist/agents/skills`, the department list, the company profile templates, the AGENTS.md template, LICENSE, NOTICE and the third-party licenses. `scripts/prepack.ts` assembles it and `scripts/postpack.ts` cleans up. CI packs and test-installs it on every change.

**Check what would be published** (from `tools/skilloffice-cli`): `npm pack --pack-destination /tmp` and look inside the `.tgz` file.

**One-time setup (owner):**

1. On npmjs.com, sign in with two-factor login turned on.
2. If npm does not let you configure trusted publishing before the package exists, publish the first version by hand from `tools/skilloffice-cli`: `npm publish`, and enter the two-factor code. This is the only manual publish.
3. On the package's page on npmjs.com, open Settings, then Trusted publishing, and add GitHub Actions with: owner `SunnyTiwari-Git`, repository `SkillOffice`, workflow `publish.yml`.
4. In the same settings, set publishing access to require two-factor authentication and disallow tokens, so only the workflow (or you with 2FA) can publish.

After that, every published GitHub release publishes to npm automatically.

## If a bad skill ships

Follow the incident plan in [SECURITY.md](../SECURITY.md): pull the release, publish a GitHub security advisory, tell users which skill and versions are affected, release a fix, and write a short incident note.
