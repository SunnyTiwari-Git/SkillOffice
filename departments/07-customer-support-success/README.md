# Customer Support and Customer Success

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

This department helps a business answer customers well, route problems to the right people, turn solved problems into self-service help, and keep customers successful over time. It works for any company with customers: software firms, online shops, agencies, service businesses or manufacturers. Your company details (products, policies, team structure, brand voice, currency, date format, legal jurisdictions) come from your SkillOffice context profile, so you only enter them once.

The skills draft and recommend. They never send replies, change or close tickets, apply refunds or credits, change billing, or promise anything your written policy does not cover. You stay in control of everything that reaches a customer. The skills work from what you paste or export, such as tickets, threads, usage exports and notes.

## How to use it

Ask the **support manager** (`sup-manager`) for what you need, in plain words. For example:

- "Here are this morning's tickets. Triage them and flag anything urgent."
- "Draft a reply to this angry customer and check it before I send it."
- "This bug has hit five customers. Write the escalation for engineering."
- "Turn this resolved ticket into a help article."
- "Plan onboarding for our new customer, Contoso."
- "Here's our account export. Which customers are at risk, and what should we do?"

The manager picks only the skills your request needs, runs them in order, checks the work, fixes problems once, and gives you one report listing anything that needs your approval.

## Skills

| Skill | What it does | Type |
| --- | --- | --- |
| sup-ticket-triage | Category, priority, routing, duplicates and a draft first reply | Creates |
| sup-draft-response | Customer replies matched to the situation and your brand voice, drafts only | Creates |
| sup-escalation | Clear escalation briefs with impact, reproduction steps and the decision needed | Creates |
| sup-kb-article | Help articles, FAQs and known-issue notices written for search | Creates |
| sup-customer-insights | Sourced answers to support questions and themes across tickets | Creates |
| sup-onboarding | Onboarding plans and success milestones for new customers | Creates |
| sup-churn-prevention | Fair retention plans, cancellation flows and payment recovery | Creates |
| sup-health-score | Transparent customer health scores with reasons for each account | Creates |
| sup-business-review | Quarterly business review preparation for an account | Creates |
| sup-response-review | Checks replies for accuracy, tone, policy and privacy | Reviews |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| Ticket queue triage | Triage, then escalation for urgent issues or patterns |
| Reply with review | Draft reply, then response review |
| Escalation | Escalation brief, interim customer update, response review |
| Knowledge base article | Research if needed, then the article |
| Onboarding plan | Onboarding plan |
| Churn risk review | Health score, churn prevention, then business reviews for the riskiest accounts |

## Context it uses

Company name, description, business model and products; brand voice and tone rules; ideal customers and content guidelines; your policies, processes, procedures and team structure (operations); regional currency, date format, time zone, output language and legal jurisdictions. Missing details are requested only when a skill needs them.

## Where the skills come from

Seven skills are adapted from two open-source collections: [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0) and [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT). Three skills (health score, business review, response review) and the manager are original SkillOffice work. Each skill's `PROVENANCE.md` lists the exact source version, what changed and the license notice. Each adapted skill has a security review in `registry/security-reviews/`. No scripts or service connectors were imported, and all helpdesk, CRM, chat and billing-tool actions were removed.

## Limits

- Not legal advice. Consumer protection, privacy and breach notification rules are flagged for your review, not decided.
- Health scores are prompts for a person to look, never automatic decisions about a customer.
- Answers and analyses are only as good as the tickets, policies and data you provide.
