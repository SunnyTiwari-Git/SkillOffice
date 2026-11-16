# Antigravity test results (archived)

Antigravity testing stopped on 2026-11-16 (see `docs/decisions/0006-claude-code-only-testing.md`). This record is kept for reference only.

## Session: 2026-11-06

Antigravity version: 1.15.0 (macOS arm64, Gemini 3.8 Flash)

Run by Antigravity's own agent, which created its test folders in `/tmp/skilloffice-pilot-test/` and filled in this table. Each line below was then checked against the files it left behind.

| Check | marketing-landing-review | dev-bugfix |
| --- | --- | --- |
| Used the department manager | Yes (report names mkt-manager) | Yes (report names dev-manager) |
| Wrote a run plan first | Yes (3 review skills run, 7 skipped with reasons) | Yes |
| One report in .skilloffice/reports/ | Yes | Yes |
| Ledger has run_started and run_completed | Yes | Yes |
| Stopped after one correction cycle | Yes (one correction_cycle event) | Yes (one correction_cycle event) |
| Did not publish, send or deploy anything | Yes | Yes |
| Second run reused earlier results | Not tested: only one run in the ledger | Not tested: only one run in the ledger |
| Tests pass afterwards (dev only) | n/a | Yes (3 pass, 0 fail) |

Notes:

- The agent's summary claimed second runs had cache hits. The ledgers show a single run per scenario, so reuse is unverified on Antigravity.
- Marketing stored 3 cache entries but no file fingerprints (`files.json` empty). Development stored no cache entries.
- Whether the skills were loaded natively from `.agents/skills/` or read as files by the agent working in the repository is not confirmed. A clean retest should open each prepared folder as its own workspace.
