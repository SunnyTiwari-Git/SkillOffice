# Sales and Business Development

Status: **pilot, not yet platform-tested.** Planned test platforms: Claude Code and Antigravity.

This department helps a business find the right customers, prepare for and follow up on conversations, handle objections, keep deals and the forecast honest, and give sellers material they can trust. It works for any company that sells: software firms, agencies, manufacturers, distributors, service businesses or freelancers. Your company details (products, differentiators, ideal customers, sales process, currency, date format, legal jurisdictions) come from your SkillOffice context profile, so you only enter them once.

The skills draft and analyze. They never send emails, update your CRM, add people to sequences, book meetings or promise prices, discounts, contract terms or delivery dates. You stay in control of everything that reaches a customer. The skills work from what you paste or export, such as notes, transcripts and CRM exports.

## How to use it

Ask the **sales manager** (`sls-manager`) for what you need, in plain words. For example:

- "Research Northwind Logistics and draft a first email to their head of operations."
- "Prep me for my call with Tailspin tomorrow. Here are my notes."
- "Here's the transcript from today's demo. Write the follow-up."
- "Review the Woodgrove deal. Is it going to close this quarter?"
- "Here's my pipeline export. Prep me for the forecast call."
- "A competitor is in the Contoso deal. How do we win?"

The manager picks only the skills your request needs, runs them in order, checks the work, fixes problems once, and gives you one report listing anything that needs your approval.

## Skills

| Skill | What it does | Type |
| --- | --- | --- |
| sls-account-research | Sourced brief on a prospect or existing account, with fit and hooks | Creates |
| sls-prospecting | Prospect lists, lead triage and account tiering with compliance rules | Creates |
| sls-outreach | Outreach emails and sequences, drafts only | Creates |
| sls-call-prep | Meeting brief with stakeholder map and call plan | Creates |
| sls-call-summary | Call recap, follow-up draft and record update checklist | Creates |
| sls-objection-handling | Grounded response to a live objection | Creates |
| sls-deal-review | Deal health, gaps to close, business case and action plan | Reviews |
| sls-pipeline-forecast | Pipeline health, forecast narrative and slip scenarios | Reviews |
| sls-competitive-battlecard | In-deal competitive play, battlecards and competitor patterns | Creates |
| sls-win-loss-review | Why deals are won and lost, with sample sizes | Creates |
| sls-sales-enablement | Decks, one-pagers, scripts, proposals and persona cards | Creates |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| New account pursuit | Account research (or prospecting for a list), then outreach |
| Meeting prep and follow-up | Call prep before; call summary after |
| Deal review | Deal review, then objection handling or competitive play if needed |
| Pipeline and forecast review | Pipeline and forecast, then deal review for the riskiest deals if asked |
| Competitive deal | Competitive play, objection handling, then a written reply |
| Win-loss and enablement | Win-loss review, battlecard refresh, then updated collateral |

## Context it uses

Company name, description, products, differentiators, target audience and markets; brand voice and tone rules; ideal customers and competitors; your sales process and stages (operations processes); regional currency, date format, time zone, output language and legal jurisdictions. Missing details are requested only when a skill needs them.

## Where the skills come from

Eleven skills are adapted from two open-source collections: [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0) and [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT). The manager is original SkillOffice work. Each skill's `PROVENANCE.md` lists the exact source version, what changed and the license notice. Each adapted skill has a security review in `registry/security-reviews/`. No scripts or service connectors were imported, and all CRM, email, calendar and sequence-tool actions were removed.

## Limits

- Not legal advice. Consent and privacy rules are flagged for your review, not decided.
- Research is only as current as its sources; check dates before relying on a signal.
- Forecasts and reviews are only as good as the data you provide.
