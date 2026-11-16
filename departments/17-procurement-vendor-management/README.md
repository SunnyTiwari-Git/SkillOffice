# Procurement and Vendor Management

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

> **Drafts, not commitments.** This department never contacts vendors, signs, accepts terms, issues purchase orders or commits spend. Outputs are drafts, comparisons and recommendations for a person to approve within your company's approval limits.

This department helps a company buy well and fairly: planning a purchase, asking vendors for quotes or proposals, comparing them on total cost and risk (not just price), checking whether a vendor is safe to trust with your data, preparing purchase requests for the right approver, finding where money goes, keeping track of contract renewals and measuring how suppliers perform.

It works for a five-person business and a large company alike. It works only from information you provide, marks vendor claims as unverified until you have evidence, and never invents prices or vendor facts.

## How to use it

Ask the department manager, `proc-manager`, in plain words. For example:

- "We need a helpdesk tool for 15 agents. How should we buy it?"
- "Draft an RFP for a warehouse partner."
- "Compare these three shipping quotes and recommend one."
- "This vendor wants access to our customer data. Is that safe?"
- "Raise a purchase request for 20 laptops from the approved quote."
- "Here is our spend export. Where can we save?"
- "Which contracts renew in the next six months, and when must we give notice?"
- "How has our courier performed this quarter?"

The manager plans which skills to run, skips the ones you do not need, does one round of fixes and gives you one report.

Tell it your approval limits once (for example "CFO approval above 50,000 a year") and it will route every purchase to the right person.

## Skills

| Skill | What it does |
| --- | --- |
| proc-sourcing-plan | Plans a purchase: the need, whether to buy at all, the route and fair criteria |
| proc-rfp | Drafts requests for information, quotes or proposals |
| proc-vendor-evaluation | Compares bids on total cost over the same period, scoring and risk |
| proc-vendor-risk-review | Checks a vendor's financial, security, data, compliance and contract risk |
| proc-purchase-request | Drafts purchase requests and orders with the right approver |
| proc-spend-analysis | Shows where money goes and where to save, with savings ranges |
| proc-contract-renewal | Renewal calendar with notice deadlines and renewal plans |
| proc-supplier-scorecard | Measures supplier performance against targets |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| New purchase | Sourcing plan, RFP (if needed), vendor evaluation, vendor risk review, purchase request |
| Quick vendor comparison | Vendor evaluation, vendor risk review (if needed), purchase request (if asked) |
| Vendor risk review | Vendor risk review |
| Renewal preparation | Contract renewal, supplier scorecard, sourcing plan (if re-bidding) |
| Spend analysis | Spend analysis, sourcing plan (if asked) |
| Supplier performance review | Supplier scorecard |

## What it will not do

- Contact vendors, sign contracts, accept terms, issue purchase orders or commit spend.
- Invent vendor names, prices, market data or vendor facts.
- Split purchases to avoid approval limits, or skip required quotes.
- Decide legal or security questions. Contracts go to Legal and data access goes to Cybersecurity.
- Change vendor bank details from an email. Those go to Finance for verification.

## Sources

`proc-vendor-evaluation` is adapted from Anthropic's knowledge-work-plugins (Apache-2.0). The other skills are original SkillOffice work. See each skill's `PROVENANCE.md`.
