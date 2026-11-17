---
name: data-dashboard-design
description: Designs KPI dashboards that drive decisions, choosing a few meaningful metrics with clear definitions, targets and owners, a layout that leads with headline numbers, and the right chart for each. Can also build a self-contained HTML dashboard from data the user provides. Use when planning an executive, department or operational dashboard, selecting KPIs, fixing a cluttered or contradictory dashboard, or turning results into a shareable snapshot.
license: "Apache-2.0. Includes MIT-licensed material, see PROVENANCE.md"
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "15-data-analytics-ai"
---

# Data Dashboard Design

A dashboard is a decision tool, not a data dump. Five to seven KPIs, each with a definition, a comparison and an owner.

## Inputs

- Purpose and audience: executive overview, department view, operational monitoring or a one-off snapshot.
- The decisions the dashboard should support.
- Metric definitions and data (query results, exports or files). If the user only wants a design, data can come later.
- Optional: existing dashboard to improve, brand colors, the tool it will live in (BI tool, spreadsheet, HTML file).

Context used from the active profile: `company.business_model`, `company.products_and_services`, `brand.colors`, `brand.typography`, `regional.currency`, `regional.date_format`, `regional.time_zone`, `operations.tools`.

## Ask first

Before designing, ask these in one round, skipping any that the request or the listed context fields already answer:

1. **Who uses it, and how often?** (a) Executives, monthly or quarterly: a few strategic KPIs against targets; (b) managers, weekly: trends and breakdowns to steer the team; (c) a team, daily or live: operational numbers with alerts; (d) a one-off snapshot to share; or other.
2. **What decision should it help them make?** (a) Where to invest or cut; (b) whether targets are on track and where to step in; (c) what needs fixing today; or other.
3. **Where will it live?** (a) A spec for your BI tool; (b) a spreadsheet; (c) a single self-contained HTML file; (d) a design only, no build; or other. (Skip if `operations.tools` names the dashboard tool.)
4. **What data is there?** (a) Real data now, so the build uses it; (b) design now, data later; (c) a template with values labeled "example data"; or other.
5. **What should each number be compared against?** (a) A target; (b) the previous period; (c) both; or other.

If the person says "just go ahead", use executives monthly, compare against target and previous period, and design only, and list these defaults at the top. Propose saving the dashboard tool to `operations.tools` if it is not set, and save only after the person confirms. All other answers apply to this request only.

## Steps

1. **Ask first, then start from decisions.** Run the [Ask first](#ask-first) questions. Then, for each decision, name the metric that informs it. Drop vanity metrics that no one acts on.
2. **Define each KPI** in a metric table: name, plain definition, exact formula, source, grain, update frequency, comparison (previous period or target), owner, and threshold for attention. Specific, measurable, relevant and time-bound. Example KPI sets by function: [references/kpi-library.md](references/kpi-library.md).
3. **Pick the level**: strategic (monthly or quarterly, executives), tactical (weekly, managers) or operational (daily or real time, teams). Do not mix levels on one screen.
4. **Lay it out**: headline KPI cards at the top (value, change, status against target), one to three charts for trends and breakdowns in the middle, an optional detail table at the bottom, filters in the header. Chart choice follows `data-visualization` rules.
5. **Resolve conflicts**: when a number disagrees with finance or another report, align on one formula and show it on the card (for example how annual plans convert to monthly revenue). Pair system metrics with what customers experience.
6. **Plan freshness and load**: pre-aggregate rather than embedding raw rows; never point a frequently refreshing dashboard at a production database; alert on deviation from a rolling baseline rather than fixed thresholds that cause alert fatigue.
7. **Build, if asked**: produce the spec for the user's BI tool, or a single self-contained HTML file with the aggregated data embedded. Prefer no external scripts. If a charting library is loaded from a CDN, pin the exact version with an integrity hash and tell the user the file needs internet access when opened. Save it in the user's project with a descriptive name and never overwrite without asking.

Layout patterns, HTML build guidance and data size limits: [references/build-guide.md](references/build-guide.md).

## Output

1. Purpose, audience and the decisions supported.
2. KPI definition table.
3. Layout sketch with chart choices and filters.
4. Data and freshness plan, alert rules.
5. The built dashboard file or BI spec, if requested.

## Quality checklist

- [ ] Every KPI has a definition, formula, comparison and owner.
- [ ] Five to seven headline KPIs at most.
- [ ] Every number shown comes from the user's data. If the user asks for a template, placeholder values are labeled "example data" on the dashboard itself.
- [ ] No personal data on the dashboard; aggregates only.
- [ ] Charts are honest and accessible.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Never embed credentials, connection strings or API keys in a dashboard file. Do not publish or share the dashboard; the user decides where it goes.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): KPI list with definitions, files created and open definition questions. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
