---
name: ops-infrastructure-as-code
description: "Designs, writes and reviews infrastructure as code (Terraform or OpenTofu, with notes for Pulumi and cloud-native templates): reusable modules, state and environments, tagging, provider pinning, policy checks and multi-cloud choices. Plans and reviews only; never applies changes to real infrastructure. Use when asked to write Terraform, build a module, review an infrastructure change or plan output, organize environments, or choose between cloud providers or services."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Infrastructure as Code

Infrastructure described in version-controlled code, reviewed like application code and changed only through a reviewed plan. This skill writes and reviews that code. Applying it to real accounts is always the user's decision.

Load only the context this skill declares: `company.name`, `technical.hosting`, `technical.stack`, `technical.standards`, `technical.deployment_process`, `operations.tools`, `operations.policies`, `regional.jurisdictions`.

## Inputs

- The goal: new resources, a reusable module, a change to existing code, a review of a plan, or a provider decision.
- The tool and cloud in use (`technical.hosting`, `operations.tools`), and the existing code layout.
- Environments and how state is stored.
- Constraints: data residency (`regional.jurisdictions`), budget, compliance policies.

## Steps

1. **Read before writing.** Find the existing module layout, naming, provider versions and state configuration. Match them.
2. **Module structure.** One purpose per module: `main.tf`, `variables.tf` (typed, described, validated), `outputs.tf`, `versions.tf` (pinned provider and tool versions), `README.md`, `examples/`. See [references/modules.md](references/modules.md).
3. **Environments and state.** Separate state per environment, remote state with locking and encryption, no state files in Git. Environments differ by variables, not by copied code.
4. **Safety defaults.** Encryption at rest, private networking by default, least-privilege identities, deletion protection on data stores, consistent tags (owner, environment, cost center, project, managed-by).
5. **Validate without touching real infrastructure.** Format and validate, static checks (for example tflint, Checkov or Trivy config scanning), policy as code where the team has it. Then produce a plan for the user to run.
6. **Review a plan.** For each change, classify: create, update in place, replace (destroy then create), destroy. Flag replacements and destroys of data stores, networks, identities and DNS as high risk; check for drift; confirm tags and encryption. Report findings in the shared format.
7. **Multi-cloud decisions.** Use the comparison and patterns in [references/multi-cloud.md](references/multi-cloud.md). Prefer one provider plus a disaster-recovery plan unless there is a concrete reason (data residency, a specific service, contractual) for more.

## Rules

- Never run `apply`, `destroy`, `import` against real accounts, state-changing state commands, or cloud CLI commands that change resources. `init`, `fmt`, `validate` and `plan` may be suggested; the user runs them with their own credentials.
- Module tests that create real resources run only in a disposable sandbox account, with the user's approval.
- No credentials, account secrets or private keys in code, variables files or outputs; mark sensitive outputs as sensitive.

## Output

The code change (or review findings for a plan), plus a note: what it creates or changes, risk of each change, validation steps, the commands the user should run, and the rollback approach (revert the code and re-plan; restore from backup for data).

## In a managed run

Return code and findings. Store review results with the cache step in the orchestration protocol (inputs: the code and plan files; requirements: policy files). Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).

## Handoff

End with a handoff (under 400 words): Done, Decisions (module boundaries, state layout, provider choices), Changed files, Tests and checks (format, validate, static scan results), Open issues (high-risk plan items, manual steps), Next (`ops-cloud-cost-review` for cost; Cybersecurity department for sensitive changes).
