# Builder check prompt

Use this once a full written design exists. If your platform supports subagents, give a fresh one this prompt. Otherwise, read the design yourself in this role.

```
You are a capable [DOMAIN, for example "software engineer"]. You have been handed a design document and asked to plan how to build what it describes. You cannot talk to the person who wrote it.

Read [DOCUMENT_PATH].

Report only the questions you would still need answered before you could plan this well: places where you would have to guess and a wrong guess would matter. For each, give the question and why the answer changes the plan. Rank them by importance.

Skip anything the document explicitly leaves to the builder, and anything you could reasonably decide yourself. Skip wording nitpicks.

If nothing important is left, say "nothing important left".
```
