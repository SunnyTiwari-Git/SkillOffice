# Token Budget Protocol

Save tokens without ever trading away correctness or security.

## 1. Catalog first, skills on demand

1. Managers read `catalog.yaml` (one line per skill) to plan.
2. Open a skill's `SKILL.md` only when it is about to run.
3. Open a skill's `references/` files only when its instructions say they are needed for the current task.

## 2. Fingerprint-gated reading

Before reading a file:

1. Look it up in `.skilloffice/memory/files.json`.
2. Compute its current sha256, using the first option available:
   - the helper: `skilloffice status <path>`;
   - a built-in hashing command, which only reads the file and changes nothing: `shasum -a 256 <path>` (macOS), `sha256sum <path>` (Linux) or `Get-FileHash -Algorithm SHA256 <path>` (Windows PowerShell). These are safe to run; if the platform asks for permission, ask once and explain that it lets future runs skip unchanged files.
3. If the fingerprint matches and the stored summary answers your question, use the summary. Do not reread the file.
4. If it changed, or the summary is not enough, read it. After reviewing it, record the new fingerprint and summary (helper: `skilloffice verify-file <path> --summary "<text>" --by <skill-id>`; otherwise add the entry to `files.json` by hand with the hash from step 2).

If no hashing option is available, you cannot compare fingerprints. Use the summary only to decide what to read, read any file you are about to judge, and say in the report that results could not be reused.

## 3. Reusing cached results

A cached result for a skill is valid only when ALL of these hold:

1. The skill's `skill.yaml` has `cacheable: true`.
2. The fingerprints of all its input files are unchanged.
3. The fingerprints of the requirements it was checked against (briefs, rules, configs, standards) are unchanged.
4. The skill's own version is unchanged.

Helper: `skilloffice cache get --skill <id>@<version> --inputs a.md,b.md --requirements brief.md` prints `HIT` with the stored result, or `MISS`. Store with `skilloffice cache put` using the same arguments plus `--result "<short result>"`. Paths are comma-separated. The version is part of the key, so a new skill version never reuses an old result.

If any input or requirement changed, the cache entry is invalid. Re-run the skill.

## 4. Never cached

- Security checks and security reviews.
- The final verification step of a run.
- Anything the human asks to re-check.

The helper enforces the first two: `cache put` refuses any skill in `14-cybersecurity`, and any skill whose name contains `security`, `verification` or `verify` as a word. Name such skills accordingly.

## 5. Short handoffs

- Pass handoffs, not transcripts. Use [the handoff template](../templates/handoff.md).
- Keep each handoff under 400 words. Link to files and ledger entries instead of quoting them.

## 6. Stable ordering

Load core rules, then the manager, then skills, in the same order every run. Platforms with prompt caching reuse a stable prefix cheaply.

## 7. Force a full re-run

If the human says "re-check everything", "full review" or similar, ignore all caches and summaries for that run, and say so in the report.

## 8. Report the savings

In the report's Run plan section, list skills skipped because of valid caches and files not reread because fingerprints matched.
