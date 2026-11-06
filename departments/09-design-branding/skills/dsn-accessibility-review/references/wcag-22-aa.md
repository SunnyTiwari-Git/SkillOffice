# WCAG 2.2 level AA quick reference

A working checklist of the success criteria most often relevant to design and front-end reviews. It is a summary in our own words; the official source is the W3C WCAG 2.2 Recommendation (https://www.w3.org/TR/WCAG22/). Level A criteria are included because AA conformance requires them.

## Perceivable

| Criterion | Level | Check |
| --- | --- | --- |
| 1.1.1 Non-text Content | A | Meaningful images have text alternatives; decorative ones are hidden from assistive technology |
| 1.2.2 Captions (Prerecorded) | A | Videos with audio have captions |
| 1.3.1 Info and Relationships | A | Headings, lists, tables, labels and groups are marked up, not only styled |
| 1.3.2 Meaningful Sequence | A | Reading order in code matches the visual order where it matters |
| 1.3.5 Identify Input Purpose | AA | Personal data fields use autocomplete attributes |
| 1.4.1 Use of Color | A | Color is not the only way to show meaning (errors, links, status) |
| 1.4.3 Contrast (Minimum) | AA | Text 4.5:1; large text 3:1 |
| 1.4.4 Resize Text | AA | Text resizes to 200 percent without loss |
| 1.4.10 Reflow | AA | No horizontal scrolling at 320 CSS pixels wide (except maps, tables and similar) |
| 1.4.11 Non-text Contrast | AA | Interface components, states and meaningful graphics 3:1 |
| 1.4.12 Text Spacing | AA | No loss when users increase line, letter and word spacing |
| 1.4.13 Content on Hover or Focus | AA | Tooltips and popovers are dismissible, hoverable and persistent |

## Operable

| Criterion | Level | Check |
| --- | --- | --- |
| 2.1.1 Keyboard | A | Everything works with a keyboard |
| 2.1.2 No Keyboard Trap | A | Focus can always move away |
| 2.2.1 Timing Adjustable | A | Time limits can be turned off, adjusted or extended |
| 2.2.2 Pause, Stop, Hide | A | Moving or auto-updating content can be paused |
| 2.3.1 Three Flashes or Below Threshold | A | Nothing flashes more than three times a second |
| 2.4.1 Bypass Blocks | A | A skip link or landmarks let users skip repeated content |
| 2.4.2 Page Titled | A | Each page has a descriptive title |
| 2.4.3 Focus Order | A | Focus order is logical |
| 2.4.4 Link Purpose (In Context) | A | Link text says where it goes ("Read the pricing guide", not "Click here") |
| 2.4.6 Headings and Labels | AA | Headings and labels describe their content |
| 2.4.7 Focus Visible | AA | Keyboard focus is visible |
| 2.4.11 Focus Not Obscured (Minimum) | AA | Focused element is not fully hidden by sticky headers, banners or overlays (new in 2.2) |
| 2.5.3 Label in Name | A | The accessible name contains the visible label text |
| 2.5.7 Dragging Movements | AA | Anything done by dragging can also be done with single clicks or taps (new in 2.2) |
| 2.5.8 Target Size (Minimum) | AA | Targets at least 24 by 24 CSS pixels, or enough spacing (new in 2.2). 44 by 44 is the stricter AAA criterion 2.5.5 and a good goal for touch |

## Understandable

| Criterion | Level | Check |
| --- | --- | --- |
| 3.1.1 Language of Page | A | The page language is set |
| 3.2.1 On Focus / 3.2.2 On Input | A | Focus or input alone does not cause unexpected changes |
| 3.2.6 Consistent Help | A | Help options appear in the same place across pages (new in 2.2) |
| 3.3.1 Error Identification | A | Errors are described in text |
| 3.3.2 Labels or Instructions | A | Inputs have labels or instructions |
| 3.3.3 Error Suggestion | AA | Errors say how to fix them |
| 3.3.4 Error Prevention (Legal, Financial, Data) | AA | Important submissions can be reviewed, corrected or reversed |
| 3.3.7 Redundant Entry | A | Users are not asked again for information already given in the same process (new in 2.2) |
| 3.3.8 Accessible Authentication (Minimum) | AA | Sign-in does not depend on memory or puzzle tests without an alternative such as password managers or copy and paste (new in 2.2) |

## Robust

| Criterion | Level | Check |
| --- | --- | --- |
| 4.1.2 Name, Role, Value | A | Custom controls expose name, role, state and value |
| 4.1.3 Status Messages | AA | Status messages are announced without moving focus |

Note: 4.1.1 Parsing was removed in WCAG 2.2 and is no longer checked.

## Common problems, most frequent first

1. Low text contrast.
2. Form fields without labels.
3. Controls not reachable or usable by keyboard.
4. Missing or unhelpful alternative text.
5. Focus not visible, or hidden behind sticky headers.
6. Modals that trap focus or do not return it.
7. Links and buttons with vague names.
8. Autoplaying media without controls.
