# Security review: {{source_id}} / {{skill_name}}

| Field | Value |
| --- | --- |
| Reviewer | {{name}} |
| Date | {{YYYY-MM-DD}} |
| Upstream URL | {{url}} |
| Pinned commit | {{full commit sha}} |
| Decision | Approved / Approved with changes / Rejected |
| Risk label | low / medium / high |

## 1. Verify the source

- [ ] Repository is the official one (owner, organization, links from official docs)
- [ ] Not a look-alike fork or renamed copy
- [ ] Maintainer identified: {{name or organization}}

## 2. Check the license

- [ ] License identified: {{SPDX id}}
- [ ] On the allow-list (MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC)
- [ ] If CC-BY or anything else: escalated to the owner (default: link only, do not import)
- [ ] Never: share-alike, proprietary, source-available or no license

## 3. Pin the version

- [ ] Exact commit recorded above and in `registry/sources.yaml`

## 4. Static scan (no execution)

- [ ] `skilloffice scan` run on the downloaded copy: {{result}}
- [ ] Cisco skill-scanner run in local-only mode, if available: {{result}}
- [ ] Checked for: remote downloads, curl or wget piped to a shell, Base64 or encoded blobs, hidden Unicode, oversized files, instructions to disable safety or read credentials, paste-site URLs <!-- skilloffice-scan: allow disable-safety -->

## 5. Human review

- [ ] Every line of SKILL.md read
- [ ] Every script read; scripts removed unless essential: {{list kept and why}}
- [ ] MCP or connector files (.mcp.json and similar) removed, or kept and labeled high risk
- [ ] Network access: {{none / describe}}
- [ ] Indirect sources: credits, "adapted from" notes or links to other projects inside the skill and its references checked. Each one's license verified, recorded in `registry/sources.yaml` and `NOTICE`, and its license text added to `PROVENANCE.md`: {{none / list}}
- [ ] File-system access: {{none / describe}}
- [ ] External dependencies: {{none / list with pinned versions}}

## 6. Risk label

- low: instructions only
- medium: reads or writes local files
- high: runs scripts, uses the network, touches credentials or takes external actions (owner approval required)

Chosen label and reason: {{label, reason}}

## 7. Record

- [ ] `PROVENANCE.md` written in the skill folder
- [ ] Changes from upstream listed
- [ ] Attribution added to the root `NOTICE` file if the upstream license requires it

## Notes

{{anything suspicious, removed, or worth re-checking on the next update}}
