# P3 Practice Papers

Free online practice papers for Singapore Primary 3 pupils, with instant marking.

- No sign-up, no cookies, no analytics. Answers are saved only in the pupil's own browser (`localStorage`).
- Several attempts per paper: start a new one, switch between them, delete one, or clear all.
- Back up attempts to a `.json` file on the device, and restore it on another device.
- Most questions mark themselves. Sentence answers (synthesis and comprehension) show a model answer, and a parent gives or withholds each mark.
- Works on phones, tablets and computers, in light and dark mode, and prints cleanly.

## Folder layout

```
index.html                        Home page listing the papers
english/paper-2/set-1.html        P3 English Paper 2, Set 1 (50 marks)
privacy.html                      Privacy notice (nothing is collected)
404.html                          Page-not-found page
assets/css/site.css               All styles
assets/js/paper.js                Paper engine: builds the paper, saves attempts, marks answers
assets/js/papers/*.js             Paper content: questions and answers, one file per set
scripts/check-site.mjs            Checks run before every deploy
.github/workflows/deploy.yml      Checks, then publishes to GitHub Pages
```

## Publish on GitHub Pages

1. Create a **public** repository on GitHub, for example `p3-practice-papers`. Do not add a README there, since this folder already has one.
2. Push this folder:
   ```
   git init -b main
   git add .
   git commit -m "First release: P3 English Paper 2 Set 1"
   git remote add origin https://github.com/<your-username>/p3-practice-papers.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**. Then open the **Actions** tab and re-run "Check and deploy to GitHub Pages" if it ran before you changed this setting.
4. The site is live at `https://<your-username>.github.io/p3-practice-papers/` within a minute or two. In **Settings → Pages**, tick **Enforce HTTPS**.

Every push to `main` runs the checks first, and nothing is published if a check fails.

## Check before you push

```
node scripts/check-site.mjs
```

This confirms that every page has a title, language and security policy, that no inline code was added (the security policy would block it), that every local link works, and that every JavaScript file parses.

To try the site locally, run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Add another paper

1. Copy `assets/js/papers/english-paper2-set1.js` to a new file, for example `english-paper2-set2.js`.
2. Give it a new `id` (this keeps its saved attempts separate) and write the new questions and answers.
3. Copy `english/paper-2/set-1.html` to `set-2.html`, then change its title, description, "Practice Set" line and the first `<script src>` to the new file.
4. Add a card for it on `index.html`, and run the check.

Question types available in the content file: `mcq`, `cloze` (with or without a word box), `edit`, `tf`, `order`, `key` (auto-marked by keyword) and `parent` (model answer, marked by a parent).

## Ads

The paper page has two ad spaces (`ad1` and `ad2`), hidden while `SHOW_AD_SLOTS = false` in `assets/js/paper.js`. Before turning them on:

- **Host terms.** Check GitHub's current terms for Pages. A host meant for commercial sites, such as Cloudflare Pages or Netlify with your own domain, may suit ads better.
- **Ad network rules.** Most networks need you to own the domain, and they treat a site used by children as child-directed, which allows only non-personalised ads.
- **Security policy.** Add the ad network's domains to the `Content-Security-Policy` line in each page, or its scripts will be blocked.
- **Privacy.** Ad networks usually set cookies. Update `privacy.html` first (Singapore PDPA), and ask for consent where the network requires it.

To see whether people use the site before adding ads, a cookie-free visitor counter is the gentler first step. It needs the same policy and privacy updates.

## Before sharing widely

- Ask another parent or a teacher to check every answer in each paper.
- Keep the footer line saying the material is original and not affiliated with MOE, SEAB or any school.
- Choose a licence if you want others to reuse the material, for example CC BY-NC 4.0 for the papers.
