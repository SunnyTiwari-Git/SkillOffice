# AI feature review checklist

## 1. Data flow and privacy

- [ ] Every data type sent to the model is listed with its purpose.
- [ ] Only the data needed for the task is sent; identifiers are masked or removed where possible.
- [ ] Personal and regulated data has a legal basis and, where required, consent.
- [ ] Provider settings confirmed: retention period, whether inputs are used for training, processing region.
- [ ] Logs and traces do not keep full prompts or responses with personal data longer than needed.
- [ ] Users can have their data deleted, including from retrieval indexes and logs.
- [ ] Data processing agreements are in place where the law requires them.

## 2. Manipulated inputs and unsafe actions

- [ ] Every source of untrusted text is listed: user messages, uploaded files, retrieved documents, web pages, emails, tool and API results.
- [ ] System instructions tell the model to treat that text as content, and the application does not rely on that instruction alone.
- [ ] The model has the fewest tools and permissions it needs; read and write tools are separated.
- [ ] Actions with real-world effects (sending, paying, deleting, changing records) require user confirmation or strict server-side validation.
- [ ] Model output is escaped before being shown as HTML or used in queries, commands or file paths.
- [ ] No API keys, passwords or internal URLs appear in prompts.
- [ ] Rate limits and abuse monitoring are in place.

## 3. Evaluation

- [ ] A test set of realistic cases exists, including hard and adversarial ones and cases where the right answer is "I don't know".
- [ ] A measurable quality bar is set before launch (for example accuracy, groundedness, refusal correctness).
- [ ] The test set re-runs whenever the prompt, model or retrieval changes.
- [ ] Production quality is monitored with sampled human review and user feedback.

## 4. Wrong or made-up answers

- [ ] Answers are grounded in trusted sources where facts matter; sources are cited.
- [ ] The feature says when it does not know.
- [ ] High-stakes topics (health, legal, financial, safety) have stricter rules or route to a human.
- [ ] AI-generated content is labeled as such where users could mistake it for human advice.

## 5. Human oversight and fairness

- [ ] Decisions about people (hiring, credit, pricing, access, moderation) have human review before taking effect.
- [ ] Affected people have a way to contest a decision.
- [ ] Outcomes are compared across groups to detect bias.

## 6. Cost, latency and reliability

- [ ] Cost estimated: tokens per request times expected volume, with a monthly budget and alert.
- [ ] The smallest model that meets the quality bar is used; caching is used for repeated content.
- [ ] Timeouts, retries with backoff and a fallback (another model, a simpler path or a clear error) exist.
- [ ] Latency targets are set and measured.

## 7. Lock-in and change management

- [ ] Provider calls sit behind one internal interface.
- [ ] Prompts and model versions are versioned and reviewed like code.
- [ ] A plan exists to switch providers or models if pricing, terms or quality change.

## Severity guidance

| Severity | Examples |
| --- | --- |
| critical | Health or payment data sent to a provider with no agreement; untrusted email text can trigger payments; API key in the system prompt |
| high | No evaluation before launch; automated rejection of job applicants without human review; medical answers with no grounding |
| medium | No cost alert; no fallback when the provider is down; AI content not labeled |
| low | Prompts not versioned; minor latency issues |
| info | Suggestions such as a smaller model or caching |
