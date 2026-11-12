# Retention playbook

## Exit survey reasons

| Reason | What it suggests |
| --- | --- |
| Too expensive | Price sensitivity: a lower plan or a temporary discount, if approved |
| Not using it enough | Low engagement: a pause or an onboarding session |
| Missing a feature | Product gap: a workaround or share the request with product (no promised dates) |
| Switching to another provider | Competitive pressure: learn what they need |
| Technical problems | Quality: send to support right away |
| Temporary or seasonal need | A pause |
| Business closed or changed | No offer: let them go gracefully and learn |
| Other | Free text |

Survey rules: one question, single choice plus optional text, 5 to 8 options, most common first, no guilt.

## Matching offers to reasons

Only offer what the company has approved. Typical options:

- **Temporary discount**: modest and time-limited. Very deep discounts teach customers to cancel for deals.
- **Pause**: 1 to 3 months, data kept, advance notice before reactivation.
- **Lower plan**: show what they keep and what changes; easy path back.
- **Help session or personal outreach**: for low usage or important accounts.

One primary offer and one fallback. Never show a wall of offers.

## Fair flow rules

- "Continue cancelling" is visible on every screen.
- Cancellation is as easy as signing up. Several jurisdictions require this (for example rules on easy online cancellation for subscriptions in the United States and in the European Union). Check `regional.jurisdictions` and flag for legal review.
- No guilt-trip wording, hidden links, phone-only cancellation for online sign-ups, or surprise fees.
- Confirm the end date of access and how to come back.

## Risk signals

| Signal | Typical lead time |
| --- | --- |
| Logins drop by half or more | 2 to 4 weeks |
| Key feature stops being used | 1 to 3 weeks |
| Support tickets spike then stop | 1 to 2 weeks |
| Seats removed | 1 to 2 weeks |
| Billing page visits rise | Days |
| Data export started | Days |
| Low satisfaction rating | 1 to 3 months |

These are common patterns, not validated predictions for any one business.

## Failed payments

| Decline type | Example | Approach |
| --- | --- | --- |
| Soft (temporary) | Insufficient funds, timeout | Retry a few times over 7 to 10 days |
| Hard (permanent) | Card closed or reported stolen | Do not retry; ask for a new payment method |
| Authentication needed | Strong customer authentication | Send the customer to confirm payment |

Prevention: expiry reminders before the card expires, a backup payment method, notice before annual renewals.

Reminder sequence (drafts only): friendly alert on the day of failure, helpful reminder, notice before access is paused, final notice. Link straight to the payment update page, never blame the customer, include a support contact.

## Metrics

| Metric | Formula |
| --- | --- |
| Customer churn rate | Customers lost in period / customers at start |
| Net revenue churn | (Lost recurring revenue - expansion) / starting recurring revenue |
| Save rate | Customers saved / cancellation attempts |
| Offer acceptance | Offers accepted / offers shown |
| Pause return rate | Reactivated / paused |
| Payment recovery rate | Recovered / failed payments |

Track whether saved customers are still active 60 to 90 days later; a save that churns a month later was not a save.

## Experiments

Test one variable at a time (offer type, pause length, survey position, wording) and judge by retention after the save, not only by save rate.
