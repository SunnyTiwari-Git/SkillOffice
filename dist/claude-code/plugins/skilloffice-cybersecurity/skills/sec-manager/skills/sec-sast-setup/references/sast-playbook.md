# SAST playbook

## Choosing a tool

Check each option's current documentation, license and pricing before recommending; capabilities change often.

| Option | Strengths | Watch out for |
| --- | --- | --- |
| Semgrep | Fast, many languages, simple custom rules in YAML, runs locally | Some rule sets and features need an account; pick community rules deliberately |
| CodeQL | Deep data-flow analysis, strong for variant hunting, native in GitHub | Slower; free terms differ for public and private repositories; query language takes time to learn |
| SonarQube or SonarCloud | Code quality and security together, quality gates, dashboards | Self-hosted server needs upkeep; hosted version sends code to a third party |
| Language-specific linters (for example Bandit for Python, gosec for Go, security plugins for ESLint) | Lightweight, easy to add | Narrow coverage; combine with a broader tool |

Questions that decide it: Which languages? Can code leave the company network? Which CI? Who will maintain custom rules?

## Rollout stages

| Stage | What blocks | Rules | Goal |
| --- | --- | --- | --- |
| 1. Observe | Nothing | Security-focused rule set | Learn the noise level; fix obvious issues |
| 2. Gate new issues | New high-confidence critical and high findings | Same, tuned | Stop new serious issues without blocking on old ones |
| 3. Expand | As stage 2 plus agreed medium rules | Broader sets plus custom rules | Raise the bar once trust exists |

## Configuration checklist

- Exclude: tests and fixtures (or scan them with a separate, lighter profile), generated code, vendored dependencies, build output.
- Baseline existing findings so pull requests only show new issues.
- Pin the scanner version and the CI action version.
- Results appear in pull requests (annotations or SARIF upload where supported).
- Tokens for hosted tools live in the CI secret store.
- Scheduled full scan of the main branch, for example weekly.

## Suppression policy

- Suppress inline at the exact line with a rule id and a reason.
- No blanket suppressions of whole files or rule sets without security owner approval.
- Review suppressions on a regular schedule; remove those that are no longer needed.

## Custom rule example (Semgrep style)

```yaml
rules:
  - id: no-raw-sql-outside-repository
    message: Build queries through the repository layer with parameters, not raw SQL strings.
    severity: ERROR
    languages: [python]
    patterns:
      - pattern: $DB.execute(f"...")
      - pattern-not-inside: |
          class $REPO(BaseRepository):
            ...
```

## CI job outline

```yaml
# Example outline only. Adapt to the chosen tool and CI, pin versions, and review before use.
security-scan:
  runs-on: the CI runner
  steps:
    - check out the code (pinned action)
    - run the scanner on changed files, security rule set, fail on new high-confidence critical or high
    - upload results to the code review tool
```

## Signs the setup is not working

- Developers routinely suppress findings without reasons.
- The scanner runs but never fails a build, or fails so often it is ignored.
- Findings have no owner and age without triage.
- Scans skip the languages where the riskiest code lives.
