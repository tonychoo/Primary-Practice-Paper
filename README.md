# P3 Practice Papers

Free online practice papers for Singapore Primary 3 pupils, with instant marking.

- No sign-up, no cookies, no analytics. Answers are saved only in the pupil's own browser (`localStorage`).
- Several attempts per paper: start a new one, switch between them, delete one, or clear all.
- Back up attempts to a `.json` file on the device, and restore it on another device.
- Most questions mark themselves. Sentence answers (synthesis and comprehension) show a model answer, and a parent gives or withholds each mark.
- Works on phones, tablets and computers, in light and dark mode.
- **Print** buttons on every paper: a blank question paper (with Name, Class and Score lines), and a separate answer key for parents. The question paper never shows the pupil's on-screen answers.

## Folder layout

```
CLAUDE.md                         House rules every paper follows (content, format, verification)
index.html                        Home page, papers grouped by subject
english/paper-2/set-1.html        P3 English Paper 2, Set 1 (50 marks)
privacy.html                      Privacy notice (nothing is collected)
404.html                          Page-not-found page
assets/css/site.css               All styles
assets/js/paper.js                Paper engine: builds the paper, saves attempts, marks answers, prints
assets/js/papers/*.js             Paper content: questions and answers, one file per set
assets/img/<area>/*.svg           Original diagrams and pictures, one subfolder per paper or area
scripts/check-site.mjs            Checks run before every deploy, including every content file
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

This confirms that every page has a title, language and security policy, that no inline code was added (the security policy would block it), that every local link works, that every JavaScript file parses, and — for every file in `assets/js/papers/` — that section marks add up to the paper total, question numbers run in order with no gaps, every `mcq` answer index is in range, cloze/word-box answers are valid, and every image exists and has `alt` text.

To try the site locally, run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Add another paper

Read `CLAUDE.md` first — it has the house rules every paper must follow.

1. Copy an existing content file in `assets/js/papers/`, for example `english-paper2-set1.js`.
2. Give it a new `id` (this keeps its saved attempts separate from every other paper) and write the new
   questions and answers.
3. Copy an existing page, for example `english/paper-2/set-1.html`, to the new page. Change its title,
   description, "Practice Set" line and the first `<script src>` to the new content file.
4. Add a card for it on `index.html`, under the right subject group (English, Mathematics, Chinese or
   Science). Each group shows "Coming soon" until it has a paper.
5. Run `node scripts/check-site.mjs`.

Every question type appears automatically in both the printed question paper and the printed answer key,
so new papers need no extra print work.

### Paper-level fields

```js
window.PAPER = {
  id: "p3-eng-paper2-set1",   // unique across the whole site — never change this once published
  total: 50,                 // must equal the sum of every section's `marks`
  lang: "zh-SG",              // optional: sets the paper content's language and a CJK font stack
  durationMin: 90,            // optional: shows a duration in the header and an optional countdown timer
  sections: [ /* … */ ]
};
```

### Item fields (every type)

Every item accepts these optional fields, on top of the fields its type needs:

| Field | Meaning |
|---|---|
| `m` | Marks this item is worth. Defaults to 1. For `parent` items with `m > 1`, a parent gets buttons `0…m` instead of yes/no. |
| `topic` | A short revision tag (e.g. `"fractions"`, `"life cycles"`). Groups the "Questions to revisit" list in the results. Defaults to the section title. |
| `img` | `{src, alt}`. Shows an image above the question. `src` is written relative to the repo root (e.g. `"assets/img/maths/clock-1.svg"`) and resolves correctly regardless of the page's folder depth. `alt` is required. |
| `working` | `true` adds a "Show your working" box (saved, never auto-marked). Only meaningful on `parent` and `num` items. |

### Item types

**`mcq`** — one correct option, three plausible wrong ones.
```js
{ id:"1", t:"mcq", q:"Neither Ali nor his brothers ______ able to swim.",
  o:["is","are","was","has"], a:1, m:1, topic:"subject-verb agreement" }
```
Add `oImg:[{src,alt}, null, {src,alt}, {src,alt}]` (same length as `o`, `null` for an option with no image) to show a
picture next to any option — used for `picture-mcq`, an alias of `mcq` for listening papers.

**`cloze`** — one or more blanks in a passage, written as `{15}` in `text`, each with a lowercase `ans` list.
With a `box`, it's a word bank: each word is used once, no two blanks share an answer, and the box has
2–3 extra words that fit none of the blanks. Without a `box`, blanks may each accept more than one answer.
```js
{ t:"cloze", title:"Passage 1", box:["her","its","their","them","she","they","us"],
  text:"My cousins visited {15} last Sunday. ... It wagged {18} tail happily.",
  ans:{ "15":["us"], "18":["its"] } }
```

**`edit`** — underlined mistakes marked `[28|monday]` in `text`; `ans` gives the correction, `cs:true` for a
capital-letter mistake.
```js
{ t:"edit", text:"On [28|monday] morning, Farah ...",
  ans:{ "28":{ a:["Monday"], cs:true } } }
```

**`key`** — auto-marked by keyword, for one-word or number answers only.
```js
{ id:"36", t:"key", q:"On which day did Hafiz water the plant?", keys:["monday"], model:"Monday" }
```

**`parent`** — a written answer with a model answer; a parent gives the mark(s).
```js
{ id:"43a", t:"parent", q:"Why was Mei not sure about baking a cake? (a)",
  model:"They had never baked a cake before.", m:1 }
```

**`tf`** — one or more true/false parts, each worth 1 mark.
```js
{ id:"38", t:"tf", q:"Is each sentence true or false?",
  parts:[ {id:"38a", s:"(a) The shoot appeared after one week.", a:"T"}, {id:"38b", s:"(b) Mrs Lim scolded Hafiz.", a:"F"} ] }
```

**`order`** — put events in the right order; one mark per event by default, or `m` for the whole item.
```js
{ id:"39", t:"order", q:"Number the events from 1 to 3.",
  ev:[ {id:"39a", s:"Hafiz moved the pot near the window.", a:"3"}, {id:"39b", s:"The leaves turned brown.", a:"2"}, {id:"39c", s:"Hafiz forgot to water the plant.", a:"1"} ] }
```

**`num`** — a numeric answer with an optional unit, compared as a number (not text). Accepts "1 200",
"1,200" and "1200"; "0.5" and ".5"; "$3.50" and "3.5"; and fractions like "3/4". List any other accepted
value in `ans`.
```js
{ id:"12", t:"num", q:"A pencil costs 45¢. How much do 3 pencils cost?", unit:"$", ans:["1.35"], m:2, working:true, topic:"money" }
```

**`listen`** — a listening passage: a `script` read aloud (or shown to a parent), and child questions
(`mcq`, `key` or `picture-mcq`) that score like any other item.
```js
{ id:"L1", t:"listen", title:"Part A, Question 1", script:"The boy is wearing a red cap and holding a kite.",
  voiceLang:"en-GB", playLimit:2,
  items:[ { id:"1", t:"picture-mcq", q:"Which picture is correct?", o:["Red cap, kite","Blue cap, kite","Red cap, ball","Blue cap, ball"],
            oImg:[{src:"assets/img/listening/boy-redcap-kite.svg",alt:"Boy in a red cap holding a kite"}, /* … */], a:0 } ] }
```
The page shows a play button (with a play limit, a practice-mode toggle and a slower-voice toggle) and a
"Script for parent" disclosure, closed by default, for when the device has no matching voice.

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
