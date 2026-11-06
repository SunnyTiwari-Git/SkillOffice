# Security reviews

Every third-party skill gets one review file here before it is imported. Copy [TEMPLATE.md](TEMPLATE.md) to `<source-id>--<skill-name>.md` and complete every step.

Rules:

- No third-party file enters `departments/` without a completed review marked "Approved".
- High-risk skills (scripts, network access, credentials, external actions) need separate written approval from the owner.
- Upstream updates repeat the full review. Nothing is updated automatically.
- Never run upstream scripts during review. Inspection is read-only.
