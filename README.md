# P3 Practice Papers

Free online practice papers for Singapore Primary 3 pupils, with instant marking.

- No sign-up, no cookies, no analytics. Answers are saved only in the pupil's own browser (`localStorage`).
- Several attempts per paper: start a new one, switch between them, delete one, or clear all.
- Back up attempts to a `.json` file on the device, and restore it on another device.
- Most questions mark themselves. Sentence answers (synthesis and comprehension) show a model answer, and a parent gives or withholds each mark.
- Works on phones, tablets and computers, in light and dark mode.
- **Print** buttons on every paper: a blank question paper (with Name, Class and Score lines), and a separate answer key for parents. The question paper never shows the pupil's on-screen answers.
- On the Chinese papers, hover (or tap-and-hold on a touch screen) a question or option word to see its pinyin.

## Folder layout

```
CLAUDE.md                         House rules every paper follows (content, format, verification)
index.html                        Home page shell; assets/js/home.js renders it from the catalog
english/paper-2/set-1.html        P3 English Paper 2, Set 1 (50 marks)
privacy.html                      Privacy notice (nothing is collected)
404.html                          Page-not-found page
assets/css/site.css               All styles
assets/js/catalog.js              The single list of every paper on the site (see "Add another paper")
assets/js/home.js                 Builds the home page (subject tabs, filters, progress) from the catalog
assets/js/paper.js                Paper engine: top bar, section navigation, saves attempts, marks, prints
assets/js/papers/*.js             Paper content: questions and answers, one file per set
assets/js/zh-pinyin.js            Hover-pinyin data for the Chinese papers (generated, see below)
assets/img/<area>/*.svg           Original diagrams and pictures, one subfolder per paper or area
scripts/check-site.mjs            Checks run before every deploy, including every content file and the catalog
scripts/build-pinyin.mjs          Regenerates assets/js/zh-pinyin.js from CC-CEDICT
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

This confirms that every page has a title, language and security policy, that no inline code was added (the security policy would block it), that every local link works, that every JavaScript file parses, and — for every file in `assets/js/papers/` — that section marks add up to the paper total, question numbers run in order with no gaps, every `mcq` answer index is in range, cloze/word-box answers are valid, and every image exists and has `alt` text. It also checks `assets/js/catalog.js` against those content files (matching `id`, `marks` and `questions`), checks that every paper page under `english/`, `maths/`, `chinese/` and `science/` has a catalog entry and vice versa, and checks that `index.html`'s `<noscript>` fallback list matches the catalog.

To try the site locally, run `python -m http.server 8000` in this folder and open http://localhost:8000.

## Add another paper

Read `CLAUDE.md` first — it has the house rules every paper must follow.

1. Copy an existing content file in `assets/js/papers/`, for example `english-paper2-set1.js`.
2. Give it a new `id` (this keeps its saved attempts separate from every other paper) and write the new
   questions and answers.
3. Copy an existing page, for example `english/paper-2/set-1.html`, to the new page. Change its `<title>`,
   `<meta name="description">` and the first `<script src>` to the new content file — the rest of the page
   is the same empty shell on every paper, since `assets/js/paper.js` builds the whole page from the content
   file and the catalog entry below. For a **Chinese** paper, copy a page from `chinese/` instead, so it
   keeps the extra `<script src="…/assets/js/zh-pinyin.js">` tag before `paper.js` — see "Hover pinyin"
   below.
4. Add one entry for it to `window.CATALOG` in `assets/js/catalog.js`: its `id` (matching the content file),
   `subject`, `kind` ("full", "listening" or "drill"), `title`, an optional `label`, its page's `href`,
   `marks` (matching `PAPER.total`), `minutes`, `questions` (the number of answerable items — count it, or
   run the check below and read the number it reports), and `added` (today's date). The home page needs no
   manual edit — it renders entirely from this list.
5. Run `node scripts/check-site.mjs`. It checks the catalog entry against the content file (id, marks,
   questions) and against the page, so a typo here is caught immediately.

Every question type appears automatically in both the printed question paper and the printed answer key,
so new papers need no extra print work.

### Hover pinyin (Chinese papers)

Every Chinese paper's question text, MCQ/picture-mcq options, cloze (including word-box) text and edit/tf/
order text get hover pinyin — not reading passages (`story.p`) or listening scripts, since those are read,
not quizzed vocabulary (see `scripts/build-pinyin.mjs` for the exact scope).

The data lives in `assets/js/zh-pinyin.js`, generated from [CC-CEDICT](https://www.mdbg.net/chinese/dictionary?page=cc-cedict)
(Copyright MDBG / the CC-CEDICT community, licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/);
this file is a derived, filtered excerpt — only the words this site's own content actually uses —
redistributed under the same license). A few dozen readings are manually overridden in the script itself
where CC-CEDICT's first-listed reading for a character isn't the one this content's sentences actually use
(checked by hand against every occurrence — see the script's comments) — segmentation is "best effort"
simple word matching, not full context-aware disambiguation, so re-check any new paper's hover pinyin
rather than assuming it's always right.

After adding or editing a Chinese paper, regenerate the data file:
```
curl -sL -o /tmp/cedict.txt.gz https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.txt.gz
gunzip -k /tmp/cedict.txt.gz
node scripts/build-pinyin.mjs /tmp/cedict.txt
```
It fails loudly (and lists exactly what's missing) if any harvested word has no CC-CEDICT entry and no
override — add one to the `CHAR_OVERRIDES`/`PHRASE_OVERRIDES` tables in the script rather than leaving a
word with no pinyin.

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

### Section fields

Alongside `id`, `title`, `marks`, `inst` and `items`, a section accepts two optional bilingual fields —
useful for Chinese papers, where parents reading along may not read Chinese:

```js
{ id:"一", title:"识字", titleEn:"Vocabulary (choose the correct character)",
  inst:"选出正确答案。", instEn:"Choose the correct answer.", marks:5, items:[ /* … */ ] }
```
Both render in a small muted line under the section heading/instructions, on screen and in the printed
question paper. Page controls (Attempt, Finish, Print…) always stay in English regardless.

### Item fields (every type)

Every item accepts these optional fields, on top of the fields its type needs:

| Field | Meaning |
|---|---|
| `m` | Marks this item is worth. Defaults to 1. For `parent` items with `m > 1`, a parent gets buttons `0…m` instead of yes/no. |
| `topic` | A short revision tag (e.g. `"fractions"`, `"life cycles"`). Groups the "Questions to revisit" list in the results. Defaults to the section title. |
| `hint` | A string shown behind a "Show hint" button, on `mcq`/`picture-mcq`, `num`, `key` and `parent` items. Teach the *approach*, not the answer (e.g. `"Count on to the next o'clock first."`). Recorded in the attempt once opened, and shown as "N hints used" in the results. Hints never print on the question paper; the answer key prints them after the model answer. |
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

**`order`** — put events in the right order. By default this is all-or-nothing, worth `m` (1 unless set).
With `partial:true`, each event placed in its correct position earns 1 mark instead (so a 5-sentence item
is worth 5, with part marks) — `m` is ignored in this mode.
```js
{ id:"39", t:"order", q:"Number the events from 1 to 3.",
  ev:[ {id:"39a", s:"Hafiz moved the pot near the window.", a:"3"}, {id:"39b", s:"The leaves turned brown.", a:"2"}, {id:"39c", s:"Hafiz forgot to water the plant.", a:"1"} ] }
```
```js
{ id:"24", t:"order", partial:true, q:"Number the sentences 1 to 5 to form a paragraph.",
  ev:[ {id:"24a", s:"...", a:"3"}, {id:"24b", s:"...", a:"1"}, /* …5 sentences, 1 mark each */ ] }
```

**`num`** — a numeric answer with an optional unit, compared as a number (not text). Accepts "1 200",
"1,200" and "1200"; "0.5" and ".5"; "$3.50" and "3.5"; and fractions like "3/4". List any other accepted
value in `ans`. If the box holds anything with extra letters mixed in (e.g. "3/5v"), a small inline note
appears as the pupil types ("Check: numbers only"), and the Finish confirmation lists how many answers
still have one — this is a nudge only and never changes how the answer is marked.
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
