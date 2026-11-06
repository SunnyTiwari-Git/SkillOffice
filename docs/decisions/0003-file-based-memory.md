# 0003. File-based shared memory

Date: 2026-11-06
Status: Accepted

## Context

Managers run several skills in sequence and must avoid repeating work. External memory tools (Mem0, Letta, Graphiti, claude-mem and others) need servers, databases or API keys, and some send data off the machine. SkillOffice must work on every platform and keep client data local.

## Decision

Build a simple file-based memory in the user's project at `.skilloffice/memory/`:

- `state.json` for the current run, plan, decisions, open issues and the correction-cycle counter.
- `ledger.jsonl`, append-only, one event per line.
- `files.json` with sha256 fingerprints and short summaries.
- `cache/` for reusable results keyed by input and requirement fingerprints.
- `handoffs/` for short summaries between skills.
- A `.lock` file for safe concurrent writes.

The optional `skilloffice` helper automates fingerprints, caching, redaction and locking. Without it, agents maintain the files by hand. External tools (Beads, Repomix, Graphify, Serena, Basic Memory) may be supported later as optional integrations only.

## Consequences

- No server, database or API key is needed, and data stays on the user's machine.
- Humans can read and audit memory.
- Without the helper, fingerprint checks are less exact, so agents re-read files they are about to judge.
- Security checks and final verification are never cached.
