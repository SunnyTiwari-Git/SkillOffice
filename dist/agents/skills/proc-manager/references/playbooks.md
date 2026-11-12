# Procurement playbooks

Each playbook lists inputs to confirm, the default skill order, when to skip a skill, and what the correction cycle usually fixes. Always follow the core orchestration protocol: plan first, run only what is needed, one correction cycle, one report. Nothing is sent, signed, issued or committed.

## 1. New purchase

**Confirm first**: what is needed and why, estimated value, needed-by date, approval thresholds, and any data or system access the vendor would need.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | proc-sourcing-plan | A sourcing plan already exists |
| 2 | proc-rfp | The route is a direct buy or written quotes without a formal request |
| 3 | proc-vendor-evaluation | Never once bids exist; otherwise stop after the RFP draft |
| 4 | proc-vendor-risk-review | The vendor has no data or system access and the value is low |
| 5 | proc-purchase-request | The user only wants a recommendation |

**Correction cycle usually fixes**: criteria set after bids were read, vendors compared over different periods, missing exit costs, the wrong approver for the total commitment.

**Possible handoffs**: Legal (04) for terms; Cybersecurity (14) for data access; Finance (03) for budget.

## 2. Quick vendor comparison

**Confirm first**: the quotes or proposals, the period to compare, and whether criteria already exist.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | proc-vendor-evaluation | Never |
| 2 | proc-vendor-risk-review | No vendor gets data or system access and the value is low |
| 3 | proc-purchase-request | Not asked for |

**Correction cycle usually fixes**: lowest price chosen without TCO or risk, unverified vendor claims scored as proven, missing costs filled in by assumption.

## 3. Vendor risk review

**Confirm first**: what the vendor will do, what data and systems it will access, how critical the service is, and what evidence exists.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | proc-vendor-risk-review | Never |

**Correction cycle usually fixes**: claims treated as evidence, data access not compared with need, legal questions answered instead of routed.

**Possible handoffs**: Cybersecurity (14), Legal (04).

## 4. Renewal preparation

**Confirm first**: the contracts or contract list, usage data, and performance data.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | proc-contract-renewal | Never |
| 2 | proc-supplier-scorecard | No performance data exists |
| 3 | proc-sourcing-plan | The decision is to renew or renegotiate, not re-bid |

**Correction cycle usually fixes**: notice deadline arithmetic, missing terms guessed instead of flagged, decisions based on price only.

## 5. Spend analysis

**Confirm first**: the spend data, the period, known contracts, and categories the user prefers.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | proc-spend-analysis | Never |
| 2 | proc-sourcing-plan | The user did not ask to act on the top category |

**Correction cycle usually fixes**: totals that do not reconcile, savings stated as promises, personal names from card data repeated.

## 6. Supplier performance review

**Confirm first**: targets or SLAs, the period, and the performance data and its source.

| Order | Skill | Skip when |
| --- | --- | --- |
| 1 | proc-supplier-scorecard | Never |

**Correction cycle usually fixes**: supplier-reported figures presented as verified, areas scored without data, missing calculations.

**Possible handoffs**: Legal (04) for service credits; Operations (16) for an improvement or transition plan.
