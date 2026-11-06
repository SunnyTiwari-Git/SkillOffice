# SEO audit checklist

## Crawlability

- Robots rules: no accidental blocks of important pages; sitemap referenced.
- XML sitemap: exists, contains only canonical indexable URLs, kept up to date.
- Architecture: important pages within 3 clicks of the homepage; logical hierarchy; no orphan pages.
- Large sites: parameter URLs and faceted navigation controlled; session IDs not in URLs; paginated fallbacks for infinite scroll.

## Indexation

- Indexed versus expected page count (site search operator or Search Console export).
- No noindex on important pages; canonicals point the right way; no redirect chains or loops; no soft 404s.
- Canonical consistency: HTTPS, www or non-www, trailing slash.

## Speed and Core Web Vitals

- LCP under 2.5 s, INP under 200 ms, CLS under 0.1.
- Common causes: slow server response, large images, heavy JavaScript, render-blocking CSS, missing caching or CDN, font loading.

## Mobile, security, URLs

- Responsive layout, readable text, adequate tap targets, same content as desktop.
- HTTPS everywhere, valid certificate, no mixed content, HTTP redirects to HTTPS.
- Readable, lowercase, hyphenated URLs without unnecessary parameters.

## On-page

| Element | Check |
| --- | --- |
| Title tag | Unique, about 50-60 characters, main query near the front, matches the H1, gives a reason to click |
| Meta description | Unique, about 150-160 characters, value and a call to action |
| Headings | One H1 with the main topic; H2 and H3 in logical order; not used just for styling |
| Content | Main keyword in the first 100 words, related terms used naturally, answers the search intent |
| Images | Descriptive file names, alt text, compressed, modern formats, lazy loading |
| Internal links | Important pages well linked, descriptive anchor text, no broken links |
| Targeting | One clear primary query per page; no two pages competing for the same query |

## Content quality

- Experience: first-hand examples, original data.
- Expertise: author information, accurate and sourced claims.
- Authority: cited or linked by others.
- Trust: business details, contact information, privacy policy, HTTPS.
- Freshness: pages not updated in over 12 months on changing topics.
- Thin content: very short or duplicate pages, empty tag or category pages.

## International (multi-language or multi-region sites)

- Every page lists itself in its hreflang set; links are reciprocal; codes are valid (for example `en-GB`, never `en-UK`); targets return 200 and are canonical.
- Each locale page canonicals to itself; never canonical one language to another.
- Main content is translated, not only navigation; currency, phone and address formats localized.
- Locales in subdirectories or subdomains, not URL parameters; no automatic redirects by IP that hide content from crawlers.
- An `x-default` fallback is recommended for unmatched users.

## Common issues by site type

- Product or software sites: thin feature pages, no comparison pages, blog not linked to product pages.
- E-commerce: thin category pages, duplicate manufacturer descriptions, missing product structured data, faceted navigation duplicates, out-of-stock handling.
- Content sites: outdated posts, pages competing for the same query, weak internal linking, no author pages.
- Local businesses: inconsistent name, address and phone; missing local structured data; no location pages; unmanaged business profile.

## Useful free tools (examples, not requirements)

Search engine webmaster consoles, page speed testers, rich results testers and mobile testers. Prefer exports the user provides over live account access.
