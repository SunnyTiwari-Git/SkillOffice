# Spend analysis method

## Data check
| Check | Result |
| --- | --- |
| Rows and period | |
| Total amount (input) | |
| Missing vendor, amount or date | |
| Duplicates removed | |
| Credits and refunds | |
| Currencies (converted at stated rates, if any) | |

## Vendor normalization
Group name variants (for example "ACME Inc", "Acme", "ACME INC.") under one vendor. List any mapping you are not sure of.

## Category rule
Use the user's categories if given. Otherwise use a short, stated list (for example software, logistics, marketing services, office and facilities, professional services, travel, hardware) and assign by vendor and description.

## Opportunity levers
| Lever | Signal in the data | Typical evidence |
| --- | --- | --- |
| Consolidate vendors | Several vendors in one category | Count and spend per vendor |
| Contract the uncontracted | High spend with no contract | Spend with contract flag empty |
| Remove duplicates | Overlapping tools | Same category, similar descriptions |
| Fix price drift | Same item, rising price | Unit price over time |
| Tame tail spend | Many small vendors | Vendors below a stated cut-off |

Savings estimates are ranges with assumptions and need validation by sourcing and finance.
