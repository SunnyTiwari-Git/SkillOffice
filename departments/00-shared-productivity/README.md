# Shared Productivity

Everyday work that every employee does: meeting notes, emails, documents, research, summaries, task lists, slide outlines, translations and proofreading. Any department can call on these skills, and its manager, `sp-manager`, sends specialist work to the right department.

**Status:** pilot. Passed a full workflow test on Claude Code. Other AI tools that read Agent Skills may work but are not tested.

**Drafts only.** These skills never send emails or messages, schedule meetings or share documents. You review every draft and send it yourself. They also never invent facts, figures, owners or dates: anything missing is marked for you to fill in.

## What it can do

| Skill | What you get |
| --- | --- |
| sp-meeting-notes | Clean minutes with decisions, action items (owners and dates only if stated) and open questions |
| sp-email-draft | A clear work email or reply in your company's voice |
| sp-document-drafting | Memos, one-pagers, announcements and FAQs, outline first |
| sp-research-brief | An answer to a question where every claim cites its source |
| sp-task-planning | A prioritized task list that fits the time you have |
| sp-summarize | A summary at the length you need, numbers and caveats kept exactly |
| sp-presentation-outline | A slide-by-slide outline with speaker notes |
| sp-translate-localize | Translation with local date, number and unit formats |
| sp-writing-review | A review for clarity, tone, plain and inclusive language |

## Common workflows

- **After a meeting:** notes, then action list, then a follow-up email draft.
- **Research:** a sourced brief, then a short summary if needed.
- **Writing with review:** a draft, then a writing review and one round of fixes.
- **Presentations:** an outline whose slide titles tell the whole story.
- **Translation:** a translation, then a check of every number, date and name.
- **Weekly planning:** a prioritized list and follow-ups for anything stuck.

## When it hands work to another department

Contracts and legal letters go to Legal, money matters to Finance, people matters to HR, customer replies to Customer Support, campaigns to Marketing, and suspected phishing to Cybersecurity. Legal, medical and safety translations are flagged for a qualified human translator.

## Setup

Fill in `brand.voice` and `regional.*` (language, date format, time zone) in your company profile so drafts match your style and region. See `docs/getting-started.md`.

## Platforms

Tested on Claude Code. Other AI tools that read Agent Skills may work but are not tested.
