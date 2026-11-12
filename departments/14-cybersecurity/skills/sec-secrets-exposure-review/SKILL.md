---
name: sec-secrets-exposure-review
description: "Finds credentials and risky secret handling in the user's own code and configuration: hardcoded API keys, passwords, tokens and private keys, secrets in config files, CI files, container files, logs, test fixtures and client-side bundles, and weak secret management. Shows only masked values, recommends rotation and safer storage, and never tests whether a found credential works. Read-only. Use when asked to check for leaked secrets, hardcoded passwords or keys, review environment and config files, or after a suspected secret leak."
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "14-cybersecurity"
---

# Secrets Exposure Review

A leaked secret is a live key to someone's systems. This review finds secrets that should not be where they are, and treats every one it finds with care: masked, never used, rotated by the owner.

Load only the context this skill declares: `technical.stack`, `technical.hosting`, `technical.deployment_process`, `operations.tools`.

## Rules that always apply

- **Mask every value.** Show only the first 4 characters followed by `****`, plus file and line. Never print, copy, store in memory or include in a report the full value, even in a code block.
- **Never use a found secret.** Do not call any service, log in, or "check if it works". Treat every found secret as live and compromised.
- **Defensive scope only.** Review code and configuration the user owns. Searching other people's repositories or public sites for their secrets is out of scope; decline and offer to review the user's own exposure instead.
- **Version history matters.** A secret deleted in the latest commit is still in the history and any clones; removal alone is not a fix. Rotation is.

## Where to look

Source code and constants; configuration files (`.env` files committed by mistake, YAML, JSON, INI, properties); CI and deployment files; container and infrastructure files; test fixtures and seed data; documentation and examples; logs and error output saved in the repository; frontend source and build output (anything shipped to browsers is public); notebooks; scripts in the repository. Also check `.gitignore` covers environment files, and whether a secret scanning tool or push protection is in place.

Patterns and false-positive guidance: [references/secret-patterns.md](references/secret-patterns.md).

## Steps

1. **Search** the in-scope files for credential patterns: provider key formats, private key blocks, connection strings with embedded passwords, `password=`, `secret=`, `token=` style assignments, bearer tokens, and high-entropy strings in suspicious places.
2. **Confirm** each candidate by context: is it a real value, a placeholder, a documented test key from a provider's sandbox, or a public identifier? Public identifiers (for example publishable keys meant for browsers) are noted, not treated as leaks, but check that their permissions are limited.
3. **Assess** each real secret: what system it unlocks (from its format or variable name), its likely privilege, where it is exposed (private repository, public repository, client bundle, logs), and whether it appears in version history.
4. **Review secret management:** how the application loads secrets (environment, secrets manager), whether different environments use different secrets, rotation practice, who can read them, and whether logs could print them.
5. **Recommend fixes** per finding: rotate or revoke at the provider first, then remove from code, move to the environment or a secrets manager, add a pre-commit or CI secret scanner and push protection, and purge history only if the team agrees (history rewrites affect everyone).

## Report findings

Use the SkillOffice findings format (`references/protocols/findings.md` in the `skilloffice-core` skill), `source_skill: 14-cybersecurity/sec-secrets-exposure-review`, status `open`. Evidence shows the masked value and variable name only.

Severity guide: **critical** for a live-looking production credential in a public repository or client bundle, or any private key; **high** for production credentials in a private repository or logs; **medium** for non-production credentials, or secrets in history only; **low** for weak practices without an exposed value (for example missing `.gitignore` entry); **info** for public identifiers with suitable restrictions.

State coverage: which paths were searched, whether history was examined, and that pattern search can miss secrets with unusual formats.

## In a managed run

When `sec-manager` runs this skill, return findings only. Rotation is an action at outside providers: the user does it, the skill never does. Code changes happen in the manager's single correction cycle. Results are never cached, and memory entries must contain only masked values. Batch memory events at the end of the stage.

## Handoff

End with a handoff (under 400 words): Done (paths searched, history checked or not), Decisions (which candidates were judged false positives and why), Changed files (none), Tests and checks (none), Open issues (finding ids; rotations the user must do), Next (rotation by the user, code fixes through `dev-manager`, scanner setup through `sec-sast-setup` or devops).
