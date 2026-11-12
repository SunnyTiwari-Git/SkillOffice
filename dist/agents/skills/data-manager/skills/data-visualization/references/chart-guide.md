# Chart guide

## Choose by what you are showing

| Showing | Best chart | Alternatives |
| --- | --- | --- |
| Trend over time | Line | Area for cumulative totals |
| Comparison across categories | Vertical bars | Horizontal bars for many or long labels, dot plot |
| Ranking | Horizontal bars, sorted | Dot plot; slope chart for two periods |
| Part of a whole | Stacked bar | Treemap for hierarchies, waffle chart |
| Composition over time | Stacked area | 100% stacked bars to focus on shares |
| Distribution | Histogram | Box plot to compare groups, violin, strip plot |
| Relationship of two variables | Scatter | Bubble for a third variable |
| Many correlations | Heatmap | Pair plot |
| Performance against target | Bullet chart | A single KPI card with the target |
| Several KPIs | Small multiples | Separate charts on a dashboard |
| Flow through steps | Funnel | Sankey |
| Geography | Choropleth map | Bubble map |

## Charts to avoid

- Pie or donut with more than five slices: people compare angles badly. Use bars.
- 3D effects of any kind: they distort size.
- Dual axes: they suggest a relationship that may not exist. If used, label both axes clearly.
- Stacked bars with many segments: middle segments cannot be compared. Use small multiples.

## Color

- Encode data with color, do not decorate.
- Sequential data: one hue from light to dark. Diverging data: two hues with a neutral middle.
- Categories: at most six to eight distinct hues.
- Avoid red and green as the only pair; blue and orange work for most color vision types.
- A colorblind-safe categorical palette: #4C72B0, #DD8452, #55A868, #C44E52, #8172B3, #937860.

## Accuracy

- Bars start at zero. A bar from 95 to 100 exaggerates a 5% difference.
- Line charts may use a non-zero baseline when the variation is the point; say so.
- Same scales across panels that are compared.
- Show error bars or ranges when values are estimates.

## Layout

- Time series wider than tall (about 2:1 to 3:1).
- White space between charts; remove gridlines and borders that carry no information.
- Annotate key events directly on the chart.
- Text at least 10 pt for labels and 12 pt for titles.

## Accessibility checklist

- [ ] Series can be told apart without color.
- [ ] Contrast between marks and background is sufficient.
- [ ] Alt text states the main finding.
- [ ] The data table is available alongside the chart.
- [ ] The chart still reads when printed in black and white.
