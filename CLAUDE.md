# House rules for every P3 practice paper

This file applies to every paper added to this repo (English, Mathematics, Chinese, Science, and
anything added later). Read README.md and `assets/js/paper.js` first.

## Content

- **Original content only.** Never copy text, questions or passages from school papers, assessment
  books, textbooks or published stories. Write new material.
- Use Singapore settings and names (HDB, hawker centre, MRT, void deck, CCA, NTUC, $ and ¢) and keep
  everything age-appropriate and at the P3 level.
- Every question has exactly one defensible correct answer, unless the content file explicitly lists
  several accepted answers.
- In word-box cloze or word-bank sections: each word can be used only once, no two blanks in the same
  passage share an answer, and the box includes 2–3 extra words that fit none of the blanks.
- MCQ: exactly one correct option and three plausible wrong ones. Spread the correct answer across all
  four positions across a paper — don't let it fall on the same position every time.
- Section marks must add up to the paper's `total`, and question numbers must run in order with no gaps
  (a question split into two parts, e.g. "12a"/"12b", still counts as one number in the sequence).
- Tag items with an optional `topic` (e.g. `"fractions"`, `"life cycles"`) so results can group mistakes
  for revision.

## Technical

- No inline `<script>`, `<style>`, `style=""` or `on*=""` attributes in any HTML page — the
  Content-Security-Policy header blocks all of them. All behaviour lives in `assets/js/paper.js` plus the
  paper's own content file; all styling lives in `assets/css/site.css`.
- No third-party scripts, fonts, trackers, cookies or analytics. Everything the page loads is a file in
  this repo.
- Images are the site's own SVG or PNG files under `assets/img/<area>/`, never links to another site.
  Every image needs `alt` text that describes what to look at without giving the answer away.
- `localStorage` keys (`PAPER.id`) must never change for an existing paper — that would strand anyone's
  saved attempts. Give every new paper its own unique `id`.

## Before finishing any paper

1. Run `node scripts/check-site.mjs`. It must pass.
2. Write a short throwaway script (don't commit it) that loads the paper's content file and checks:
   section marks add up to the paper total, question numbers run in order with no gaps, every `mcq`
   answer index is in range, and cloze/word-box answers are unique within a passage.
3. Open the page in a browser and complete one full attempt that scores full marks, confirming every
   question type on the page marks correctly.
4. Re-read every question and answer as a P3 teacher would, and fix anything ambiguous.
5. Confirm the printed "Question paper" and "Answer key (for parents)" both look right for the paper
   (every item type must render in both — see `buildPrintDocs()` in `assets/js/paper.js`).

## Git

- `main` is protected (GitHub ruleset, applies to everyone including the repo owner): no direct pushes, no
  force-pushes, no deletion, and the `check` status check (`check-site.mjs`) must pass before a PR can merge.
  Required approvals are set to 0, because every `gh`/git action here runs as the repo owner's own GitHub
  login, so GitHub's self-review block would otherwise make every PR unmergeable by anyone — that 0 is a
  technical necessity, **not** an invitation to merge without a real review.
- Commit locally with a clear message. **Never push to `main`** — push to a new branch and open a pull
  request instead.
- **Never run `gh pr merge` / click merge on this repo, even if asked in a quick message.** The user reviews
  the diff and merges every PR themselves in the GitHub UI. If asked to merge, point to the open PR instead.
- Show an answer table so the user can check every answer before opening the PR.

## Content file reference

See the "Add another paper" section of README.md for every item type, its fields, and a worked example
of each (`mcq`, `cloze`, `edit`, `tf`, `order`, `key`, `parent`, `num`, `listen`).
