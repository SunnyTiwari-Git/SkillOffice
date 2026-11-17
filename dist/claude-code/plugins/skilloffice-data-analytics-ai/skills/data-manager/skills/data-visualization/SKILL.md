---
name: data-visualization
description: Chooses the right chart for a question and builds it from data the user provides, with an insight title, honest axes, accessible colors and a text alternative. Use when turning query results or a table into a chart for a report, slide or dashboard, picking a chart type for a trend, comparison, distribution or composition, or checking an existing chart for misleading design. Can write chart code (for example Python with matplotlib or plotly) and save image files in the user's project.
license: Apache-2.0
metadata:
  project: "SkillOffice"
  version: "0.2.0"
  department: "15-data-analytics-ai"
---

# Data Visualization

One chart, one message. Choose the form that makes the message obvious and cannot mislead a quick reader.

## Inputs

- The data (a table, results or a file) and the message or question the chart must answer.
- The audience and destination: report, slide, dashboard, technical team or executives.
- Optional: requested chart type, brand colors, preferred tool or library.

Context used from the active profile: `brand.colors`, `brand.typography`, `regional.currency`, `regional.date_format`, `regional.units`, `operations.tools`.

## Ask first

Before building, ask these in one round, skipping any that the request or the listed context fields already answer:

1. **Where will the chart appear?** (a) A slide or board deck: one bold message, few labels; (b) a report or document: more detail and footnotes; (c) a dashboard tile: compact, no long title; (d) a working chart for analysts to explore; or other.
2. **What should the chart show?** (a) A change over time; (b) a comparison or ranking; (c) how values are spread; (d) shares of a whole; or other, or "suggest one from the data".
3. **What should you get back?** (a) An image file saved in your project; (b) chart code (for example Python or R) you can run; (c) step-by-step instructions for your spreadsheet or BI tool; or other. (Skip if `operations.tools` names the chart tool.)
4. **Which colors?** (a) Brand colors, checked for contrast; (b) a neutral colorblind-safe palette; (c) match an existing deck or report you share; or other. (Skip if `brand.colors` is set.)

If the person says "just go ahead", use a report chart, a neutral colorblind-safe palette and chart code, and list these defaults at the top. Propose saving the chart tool to `operations.tools` and brand colors to `brand.colors` if they are not set, and save only after the person confirms. All other answers apply to this request only.

## Steps

1. **Run the [Ask first](#ask-first) questions, then state the message** in one sentence. It becomes the chart title ("Revenue grew 23% year over year", not "Revenue by month").
2. **Pick the chart** using [references/chart-guide.md](references/chart-guide.md): line for trends, bars for comparisons and rankings, histogram or box plot for distributions, stacked bars for composition, scatter for relationships. Avoid 3D, pies with more than five slices and dual axes unless both are clearly labeled.
3. **Prepare the data**: aggregate first (a chart rarely needs raw rows), sort categories by value unless there is a natural order, use complete periods.
4. **Design honestly**:
   - bar charts start at zero; consistent scales across panels; no unmarked axis breaks;
   - colorblind-safe palette, never color alone to separate series (add labels, line styles or patterns); brand colors from `brand.colors` only if they keep enough contrast;
   - highlight the key series and grey the rest; direct labels instead of a legend when possible;
   - readable labels (no 90 degree rotation), units in axis titles, money in `regional.currency`, dates in `regional.date_format`;
   - show uncertainty (ranges or intervals) when the data is uncertain.
5. **Build it**: write chart code in the user's tool (Python, R, a spreadsheet or BI tool description). Save image files in the user's project only with a descriptive file name, and never overwrite an existing file without asking.
6. **Add a text alternative**: one or two sentences with the key finding for screen readers, plus the data table behind the chart.

## Output

1. The chart (or chart code) with an insight title, a subtitle naming the period, filters and data source.
2. Why this chart type, in one line.
3. Alt text and the underlying summary table.
4. Optional variations (another grouping, period or chart type).

## Quality checklist

- [ ] The title states the insight.
- [ ] Axes are labeled with units; bars start at zero.
- [ ] Works in grayscale and for colorblind readers.
- [ ] The chart uses only data provided; no invented points.
- [ ] Alt text and data table included.

## Safety

Follow the safety protocol of the `skilloffice-core` skill (`references/protocols/safety.md`). Charts show aggregates; never label points with individual people's names or personal details.

## Handoff

Inside a managed run, finish with a handoff in the format of the core handoff template (under 400 words): files created, the message of each chart and any data caveats. Follow the `skilloffice-core` memory protocol (`references/protocols/memory.md`).
