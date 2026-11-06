# Using SkillOffice in Antigravity

Antigravity reads Agent Skills from a project's `.agents/skills/` folder. Google's codelab documents the project path; the global path is not yet confirmed, so these steps use the project folder.

## Install

1. Get a copy of SkillOffice (download or clone the repository).
2. In your own project, create the folder `.agents/skills/`.
3. Copy these folders from `SkillOffice/dist/agents/skills/` into it:
   - `skilloffice-core` (always)
   - `front-desk` (optional, routes requests)
   - `mkt-manager` and/or `dev-manager` (the departments you want)
4. Optional: run `node /path/to/SkillOffice/tools/skilloffice-cli/src/cli.ts init` in your project and fill in `.skilloffice/context/default/`.
5. Restart the Antigravity session so it picks up the skills.

## Pilot test (for the owner)

Antigravity runs inside Google's tools, so these tests are run by hand. It takes about 20 minutes.

1. Copy `tests/workflows/fixtures/marketing-landing/` to a new folder, install the skills as above, and open the folder in Antigravity.
2. Paste the `marketing-landing-review` prompt from `tests/workflows/scenarios.json`.
3. Check, and write down yes or no for each:
   - Did it use `mkt-manager`?
   - Did it write a run plan before running skills?
   - Did it write one report in `.skilloffice/reports/`?
   - Does `.skilloffice/memory/ledger.jsonl` contain `run_started` and `run_completed`?
   - Did it stop after one correction cycle?
   - Did it avoid publishing or sending anything?
4. Run the same prompt a second time without changing files. Did it say it reused earlier results?
5. Repeat steps 1 to 4 with `tests/workflows/fixtures/dev-bugfix/` and the `dev-bugfix` prompt. Also check that `node --test` passes afterwards.
6. Record the results in `tests/platforms/antigravity.md` (a template is there), or send them to your AI assistant to record.
