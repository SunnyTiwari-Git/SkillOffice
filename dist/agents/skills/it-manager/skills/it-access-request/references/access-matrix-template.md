# Example role access matrix

An example to adapt, not a standard. Replace roles and systems with the company's own, and keep it in `operations.policies` once agreed.

| System | Support agent | Marketing | Engineer | Finance | IT admin |
| --- | --- | --- | --- | --- | --- |
| Email and calendar | User | User | User | User | Admin (separate admin account) |
| Chat | User | User | User | User | Admin (separate admin account) |
| Helpdesk tool | Agent | None | Viewer | None | Admin |
| Store admin | Orders viewer, refunds below limit | Content editor | None | Reports viewer | Admin (break-glass only) |
| Payments dashboard | None | None | None | Viewer, refunds with approval | None by default |
| Code repository | None | None | Write on team repos | None | Org owner (two named people) |
| Password manager | Personal vault, team vault | Personal vault, team vault | Personal vault, team vault | Personal vault, finance vault | Admin |

## Rules that go with the matrix

- Admins use a separate admin account for admin work and a normal account for daily work.
- Owner or super-admin rights are held by at least two named people and reviewed every quarter.
- Access outside a role's column needs the manager and the system owner to approve, with an expiry date.
- Access to another person's data needs documented HR or legal approval.
- Leavers lose all access on their last working day, at the agreed time.
