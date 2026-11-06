# GitHub security checklist for SkillOffice

Follow these steps once, in order, for the personal account **SunnyTiwari-Git** and the repository **SunnyTiwari-Git/SkillOffice**. Menu names may shift slightly as GitHub updates its interface. Tick each box when done.

## Part 1: Protect your account (do this first)

Your account is the single key to the whole project. If someone takes it over, every SkillOffice user is at risk.

- [ ] **Two-factor login with a passkey or security key.** Profile picture > Settings > Password and authentication > Passkeys > Add a passkey. Also add a hardware security key if you have one. Avoid SMS codes.
- [ ] **Recovery codes offline.** On the same page, download your recovery codes. Print them or store them in a password manager, not in a file on your desktop.
- [ ] **Review sessions.** Settings > Sessions. Sign out any device you do not recognize.
- [ ] **Tokens.** Settings > Developer settings > Personal access tokens. Delete classic tokens you do not need. If you need a token, create a **fine-grained** token limited to the SkillOffice repository, with the fewest permissions and an expiry date (90 days or less).
- [ ] **SSH keys.** Settings > SSH and GPG keys. Remove keys you do not recognize.

## Part 2: Create the repository

- [ ] Create the repository **SkillOffice** under your account. Do not add a README, license or .gitignore on GitHub (they already exist locally).
- [ ] **No collaborators.** Settings > Collaborators: keep this empty. On a personal account, only you and invited collaborators can push, so an empty list means only you can change the official repository.

## Part 3: Protect the main branch

Settings > Rules > Rulesets > New ruleset > New branch ruleset.

- [ ] Name: `protect-main`. Enforcement status: **Active**.
- [ ] Target branches: **Include default branch**.
- [ ] Bypass list: add only **Repository admin** (that is you). Without it, the status-check rule below would block your own pushes to main, because checks only run after a push.
- [ ] **Restrict deletions:** on.
- [ ] **Block force pushes:** on.
- [ ] **Require linear history:** on.
- [ ] **Require status checks to pass:** on, and add the check named **ci** after the first workflow run.
- [ ] **Require signed commits:** optional. It proves commits really came from you, but you must first set up commit signing on your computer. Turn it on once signing works.
- [ ] Save.

## Part 4: Pull requests and merging

Settings > General > Pull Requests.

- [ ] **Allow auto-merge:** off.
- [ ] Keep "Allow squash merging" on; the others are optional.

## Part 5: GitHub Actions safety

Settings > Actions > General.

- [ ] **Fork pull request workflows from outside collaborators:** choose **Require approval for all external contributors**.
- [ ] **Workflow permissions:** choose **Read repository contents and packages permissions**.
- [ ] **Allow GitHub Actions to create and approve pull requests:** off.

## Part 6: Security features

Settings > Security (Advanced Security / Code security).

- [ ] **Private vulnerability reporting:** enable.
- [ ] **Dependabot alerts:** enable.
- [ ] **Dependabot security updates:** enable.
- [ ] **Secret scanning:** enable.
- [ ] **Push protection:** enable. It blocks pushes that contain passwords or keys.
- [ ] **Code scanning (CodeQL):** Set up > Default.

## Part 7: Optional

- [ ] **Interaction limits:** Settings > Moderation options > Interaction limits. Use temporarily (for example "Limit to prior contributors" for 24 hours) if the repository receives spam.
- Issue templates are already included in `.github/ISSUE_TEMPLATE/`. Nothing to do.

## Part 8: Before reserving the npm name

Publishing to npm is public, so do this only when you approve it.

- [ ] Create or sign in to your npm account at npmjs.com.
- [ ] Turn on two-factor authentication for **authorization and writes**, using a passkey or authenticator app.
- [ ] Then reserve the package name `skilloffice`. Later releases should use npm trusted publishing from GitHub Actions with provenance, not a stored token.

## When you are done

Tell your AI assistant "GitHub checklist complete". It can then help verify the settings and prepare the first push, which still needs your explicit approval.
