# Dependency review checklist

## Severity guide

| Situation | Severity |
| --- | --- |
| Known critical or high vulnerability in a runtime dependency, reachable from user input, with a fix available | critical or high |
| Package that is known to be malicious, or a name that imitates a popular package and is installed | critical |
| Internal package name not reserved on the public registry, with the build able to fall back to it | high |
| No lockfile for a deployed application, or CI not installing from the lockfile | high |
| Vulnerability in a dev-only or build-only dependency, not shipped | medium or low, unless the build system is exposed |
| Unmaintained package in a security-sensitive role (auth, crypto, parsing) | medium |
| End-of-life runtime or base image | medium or high, depending on exposure |
| License that may conflict with how the software is used | flag for legal (info or medium) |
| Outdated but healthy package with no known issues | low or info |

## Hygiene checks

- Lockfile present, committed, and matching the manifest.
- CI uses the lockfile-respecting install command for the ecosystem.
- Dependency update tool or process exists (automated pull requests or a regular review).
- Registries are explicit; private scopes are bound to the private registry.
- Install scripts are reviewed or disabled where the ecosystem allows it.
- An SBOM can be produced for releases if customers or regulators ask for one.

## Reading audit output

- Separate advisories by runtime versus development dependency.
- Group duplicates: one vulnerable package pulled in by many parents is one finding with several paths.
- Note when a fix needs a major version upgrade of a parent package.
- Treat "no fix available" findings with a mitigation (configuration, input restriction) or a replacement plan.
- Record the date the audit was run; advisories change daily.

## Imitation signals

- Name one or two characters away from a popular package, or with swapped words or hyphens.
- Very new package with very few downloads, used in place of a well-known one.
- Repository link missing or pointing to an unrelated project.
- Recent ownership transfer followed by a new release with install scripts.

## Upgrade plan buckets

1. Patch and minor upgrades with fixes: low effort, run the test suite.
2. Major upgrades: read release notes for breaking changes, plan testing.
3. Replacements: abandoned or risky packages swapped for maintained alternatives.
4. Accepted risks: documented with reason, owner and review date chosen by the team.
