# Security Policy

## Reporting a vulnerability

Please report security problems privately. Do not open a public issue.

1. Go to the repository's **Security** tab.
2. Choose **Report a vulnerability** (GitHub private vulnerability reporting).
3. Describe the problem, the affected skill or file, and how to reproduce it.

You will get an acknowledgement within 7 days. Please allow time for a fix before sharing details publicly.

Examples of what to report:

- A skill that downloads or runs code it should not, or reads credentials.
- Hidden instructions in a skill (prompt injection).
- A helper-tool bug that could leak `.skilloffice/` context or memory.
- A license or provenance problem in an imported skill.

## Supported versions

SkillOffice is pre-release. Only the latest version on the `main` branch receives security fixes until version 1.0.

## How we respond to an incident

If a harmful skill or file is ever released:

1. Pull the affected release and remove or disable the skill on `main`.
2. Publish a GitHub security advisory.
3. Pin a notice to the README and release notes naming the affected skill and versions and telling users what to do.
4. Release a fixed version.
5. Publish a short incident note covering what went wrong and what changed.

## How we keep skills safe

- Every third-party skill passes a seven-step intake review recorded in `registry/security-reviews/`.
- Sources are pinned to exact commits. Nothing updates automatically.
- Scripts are removed unless essential. High-risk skills need the owner's approval.
- Automated checks run on every change: skill validation, a local safety scan, and GitHub secret scanning.
