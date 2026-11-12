# Threat model output format

Before the final model, post an assumption check: three to six key assumptions as bullets, then one to three questions. Wait for the answer (or a clear "no answer") before writing the final document.

Final document sections, in this order:

1. **Summary**: one short paragraph on the main risk themes and the riskiest areas.
2. **Scope and assumptions**: in-scope paths or components, out of scope, assumptions, open questions that would change the ranking.
3. **System model**
   - Components
   - Data flows and trust boundaries, as arrow bullets (`Browser -> API`), each with data types, channel, protections and validation.
   - Optional diagram: one compact Mermaid `flowchart LR` or `flowchart TD`, simple node ids, short labels, `-->` arrows only.
4. **Assets and security objectives**: table `Asset | Why it matters | Objective (C, I, A)`.
5. **Attacker model**: capabilities and non-capabilities.
6. **Entry points**: table `Surface | How reached | Trust boundary | Evidence`.
7. **Top abuse paths**: five to ten, each as goal, steps, impact.
8. **Threat table**:

| Id | Source | Prerequisites | Threat | Impact | Assets | Existing controls (evidence) | Gaps | Mitigations | Detection | Likelihood | Impact level | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TM-001 | Remote unauthenticated user | Public signup | ... | ... | ... | ... | ... | ... | ... | high | high | critical |

Ids are stable (`TM-001`, `TM-002`, ...). Priority is one of critical, high, medium, low.

9. **Criticality calibration**: what counts as critical, high, medium and low for this system, with two examples each.
10. **Focus paths for manual review**: table `Path | Why | Related threat ids`.
11. **Coverage limits**: what was not examined (for example infrastructure not in the repository, third-party services, runtime configuration).

Security hygiene:

- Never print a secret. Show the first 4 characters then `****`, plus the file and line.
- Do not paste large blocks of code or documentation; point to the evidence.
- Separate production behavior from CI, build, development and test code.
