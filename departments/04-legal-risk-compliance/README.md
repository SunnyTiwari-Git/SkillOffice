# Legal, Risk and Compliance

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

> **Not legal advice.** This department prepares drafts, issue lists, redlines, risk registers and briefs to help you and your lawyers move faster. A qualified lawyer licensed in the relevant jurisdiction must review its work before anyone signs, sends, files, publishes or relies on it.

This department helps you understand contracts before you sign them, screen NDAs, see what you have agreed with each vendor, check whether a plan raises legal or privacy issues, keep a clear list of legal risks, draft policies and privacy notices, prepare replies to legal letters, and explain legal matters to leadership in plain English. Your details (company, policies, where you operate) come from your SkillOffice company context, so the advice reflects the countries you work in.

## How it works

You talk to the **Legal manager** (`legal-manager`). It says which country's rules it is assuming, picks only the skills your request needs, runs them in order, collects the problems found, improves its own drafts in **one** correction round, checks the result, and gives you one report with a list of the points your lawyer should look at.

It never signs, sends, files or publishes anything, and it never agrees to terms on your behalf. It does not give final legal conclusions such as "this is enforceable" or "you must notify the regulator": those go to your lawyer. Threatened lawsuits, letters from regulators or the police, injury claims and data breaches are flagged for your lawyer immediately.

It does not keep copies of your contracts or matter details in its memory, only short records of what was done.

## Skills

| Skill | What it does | Changes files? |
| --- | --- | --- |
| `legal-contract-review` | Reviews a contract clause by clause and suggests changes | No |
| `legal-nda-triage` | Screens an NDA: fine to sign, needs a lawyer's look, or needs full review | No |
| `legal-vendor-terms-check` | Shows what is signed with a vendor, key dates and what is missing | No |
| `legal-compliance-check` | Checks a plan for legal and compliance issues before you act | No |
| `legal-risk-assessment` | Scores legal and business risks and keeps a risk list | No |
| `legal-privacy-review` | Checks how you handle personal data against privacy laws | No |
| `legal-policy-drafting` | Drafts policies and privacy notices for your lawyer to approve | No |
| `legal-response-draft` | Drafts replies to legal letters and requests, after checking if a lawyer is needed first | No |
| `legal-matter-brief` | Explains a legal matter or prepares a meeting in plain English | No |

The manager writes its run history and the final report into your project's `.skilloffice/` folder.

## Common requests and what happens

| You ask | Playbook |
| --- | --- |
| "Review this contract before we sign" | Contract review, privacy review if personal data is involved, improved redlines, optional summary for leadership |
| "Can sales sign this NDA?" | NDA triage |
| "What do we have in place with this vendor?" | Vendor terms check, then contract and privacy review if needed |
| "Is this new feature OK from a privacy point of view?" | Compliance check, privacy review, notice update draft |
| "What are our biggest legal risks?" | Risk assessment and a brief for leadership |
| "How do we reply to this letter?" | Escalation check, then a draft reply or an urgent brief for your lawyer |

## Privacy laws it knows by name

GDPR and UK GDPR, India's Digital Personal Data Protection Act, California's CCPA and CPRA, HIPAA for health data in the United States, and the PCI DSS standard for payment card data. It names other laws when they may apply, and it always marks details for your lawyer to confirm.

## Sources

Seven skills are adapted from Anthropic's open-source knowledge-work-plugins (Apache-2.0). `legal-privacy-review`, `legal-policy-drafting` and the manager are original SkillOffice work. Each skill's `PROVENANCE.md` lists exactly what changed.
