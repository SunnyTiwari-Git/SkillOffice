---
name: ops-cloud-cost-review
description: "Reviews cloud spend and infrastructure configuration for waste and savings: idle and oversized resources, missing tags, storage tiers and lifecycle rules, data transfer, commitment and spot opportunities, budgets and anomaly alerts. Works from billing exports, cost reports or infrastructure code the user provides, and returns findings with estimated impact and risk. Use when asked to cut cloud costs, review a bill, find waste, set up cost governance or check the cost of a planned change."
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.1.0"
  department: "13-devops-sre"
---

# Cloud Cost Review

A review skill: it finds where money is wasted and what could be saved, with the risk of each change. It never changes resources or buys commitments; those are business decisions.

Load only the context this skill declares: `company.name`, `company.size`, `technical.hosting`, `technical.stack`, `operations.tools`, `regional.currency`.

## Inputs

Data the user provides, any of:

- Billing or cost exports (CSV), cost explorer screenshots or reports.
- Infrastructure code (Terraform, Kubernetes manifests) or a resource inventory.
- Utilization data (CPU, memory, storage use) if available.
- Business context: which workloads are critical, which can tolerate interruptions.

If no data is provided, ask for a cost export by service and by tag for the last 30 to 90 days. Do not guess spend.

## Steps

1. **Visibility.** What share of spend is tagged by owner, environment and project? Untagged spend is a finding on its own.
2. **Biggest items first.** Rank services and accounts by spend; review the top items that together make up most of the bill.
3. **Waste.** Idle or unattached resources (stopped instances still billed for disks, unattached volumes and addresses, old snapshots, idle load balancers, forgotten test environments).
4. **Right-sizing.** Resources with consistently low utilization; overprovisioned Kubernetes requests; non-production environments running around the clock.
5. **Storage and data.** Storage classes and lifecycle rules for aging data; log retention; data transfer between regions, zones and the internet.
6. **Pricing models.** Steady workloads that suit committed or reserved capacity; interruptible (spot or preemptible) capacity for batch jobs, CI runners and stateless workers with fallback. Note commitment terms as a business decision with lock-in risk.
7. **Governance.** Budgets with alerts, cost anomaly detection, tag enforcement in CI, a regular review cadence.
8. **Planned change (optional).** For infrastructure code under review, estimate the cost delta of new or resized resources.

Checklist and examples: [references/checklist.md](references/checklist.md).

## Findings

Use the shared findings format (`references/protocols/findings.md` in `skilloffice-core`). For each finding add: estimated monthly saving in `regional.currency` with its basis (from the user's data or "estimate, verify with the provider's calculator"), effort, and risk (performance, availability, lock-in). Severity reflects money and risk: high for large, safe savings or uncontrolled spend; low for small polish.

## Rules

- Read-only. Never stop, delete, resize, tag or purchase anything, and never run cloud commands that change resources.
- Discount levels change; do not quote fixed percentages as fact. Cite the user's data or point to the provider's current pricing.
- Billing data may include account names or personal information; summarize, do not copy it into reports or memory.

## Output

A findings list sorted by estimated saving, a short summary (total identified savings range, top three actions), governance gaps, and assumptions.

## In a managed run

Store the findings with the cache step in the orchestration protocol (inputs: the cost exports and code reviewed). Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).

## Handoff

End with a handoff (under 400 words): Done, Decisions (none; recommendations only), Changed files (none, or the report), Tests and checks (data reviewed and its period), Open issues (data missing), Next (`ops-infrastructure-as-code` to implement approved changes).
