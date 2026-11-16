# Marketing, Content and PR

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

This department helps a business plan its marketing, create content, get press coverage and check that everything it publishes is on-brand, accurate and measurable. It works for any kind of company: software firms, agencies, shops, clinics, manufacturers or freelancers. Your company details (name, brand voice, ideal customers, currency, date format) come from your SkillOffice context profile, so you only enter them once.

The skills draft and review. They never publish, send, schedule or spend money on their own. You stay in control of everything that goes out.

## How to use it

Ask the **marketing manager** (`mkt-manager`) for what you need, in plain words. For example:

- "Plan a launch campaign for our new service in March."
- "Write a blog post about choosing a payroll provider."
- "Check our pricing page for SEO problems."
- "Build a welcome email sequence for new customers."
- "Here is last month's data. Write the marketing report."

The manager picks only the skills your request needs, runs them in order, has the review skills check the work, fixes problems once, and gives you one report with anything left for you to decide.

## Skills

| Skill | What it does | Type |
| --- | --- | --- |
| mkt-marketing-plan | Campaign briefs and full marketing plans with roadmap, budget and metrics | Creates |
| mkt-content-strategy | Content pillars, prioritized topics, editorial calendar, distribution plan | Creates |
| mkt-copywriting | Website and page copy, headlines, calls to action | Creates |
| mkt-copy-editing | Line-by-line improvements to existing copy | Reviews |
| mkt-seo-audit | Search engine visibility check of a site or page | Reviews |
| mkt-email-sequence | Automated email flows with full copy and logic | Creates |
| mkt-social-content | Social posts, carousels, short video scripts, posting calendar | Creates |
| mkt-public-relations | Story angles, pitches, press releases, crisis statements | Creates |
| mkt-brand-review | Brand voice, terminology and compliance check | Reviews |
| mkt-performance-report | Marketing reports from your data | Creates |

## Playbooks

| Playbook | Skills, in order |
| --- | --- |
| Campaign launch | Marketing plan, then the needed assets (copy, emails, social, PR), then copy editing and brand review |
| Content piece | Content strategy (if needed), copywriting, copy editing, SEO audit, brand review |
| SEO review | SEO audit, then copywriting for titles and descriptions, then brand review |
| Email nurture | Email sequence, copy editing, brand review |
| Monthly performance review | Performance report, then optionally an adjusted plan |

## Context it uses

Company description, products, differentiators, website and markets; brand voice and tone rules; ideal customers, channels, competitors, keywords and content guidelines; regional currency, date format, language, time zone and jurisdictions. Missing details are requested only when a skill needs them.

## Where the skills come from

Eight skills are adapted from two open-source collections: [anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins) (Apache-2.0) and [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT). The manager is original SkillOffice work. Each skill's `PROVENANCE.md` lists the exact source version, what changed and the license notice. Each adapted skill has a security review in `registry/security-reviews/`. No scripts or service connectors were imported.

## Limits

- Not legal, financial or medical advice. Regulated claims are flagged for review.
- Benchmarks in the skills are rough starting points, not facts about your business.
- Reports are only as good as the data you provide.
