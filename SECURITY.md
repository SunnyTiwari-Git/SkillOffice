# Security Policy

## Reporting a vulnerability

Please report security problems privately. Do not open a public issue.

1. Open the private report form: https://github.com/SunnyTiwari-Git/SkillOffice/security/advisories/new (or go to the repository's **Security** tab and choose **Report a vulnerability**).
2. Describe the problem, the affected skill or file, and how to reproduce it.

You will get an acknowledgement within 7 days. We aim to confirm the problem within 14 days and publish a fix or a mitigation within 90 days of your report. Please do not disclose the vulnerability publicly before the fix is released, or before 90 days have passed, whichever comes first. We credit reporters in the security advisory unless you ask us not to.

GitHub documentation on private reporting: https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability

Examples of what to report:

- A skill that downloads or runs code it should not, or reads credentials.
- Hidden instructions in a skill (prompt injection).
- A helper-tool bug that could leak `.skilloffice/` context or memory.
- A license or provenance problem in an imported skill.

## Supported versions

SkillOffice is in early preview (0.x). Only the latest release and the `main` branch receive security fixes until version 1.0.

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
