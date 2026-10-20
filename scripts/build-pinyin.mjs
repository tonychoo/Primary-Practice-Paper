// Rebuilds assets/js/zh-pinyin.js: hover-pinyin for the Chinese papers' questions, options, cloze/word-box
// text and edit/tf/order text (NOT reading passages or listening scripts — see CLAUDE.md "Content").
//
// Needs a local copy of CC-CEDICT (https://www.mdbg.net/chinese/dictionary?page=cc-cedict), since the
// site itself may load no third-party data at runtime — this script only runs at content-authoring time.
// Usage:
//   curl -sL -o /tmp/cedict.txt.gz https://www.mdbg.net/chinese/export/cedict/cedict_1_0_ts_utf-8_mdbg.txt.gz
//   gunzip -k /tmp/cedict.txt.gz
//   node scripts/build-pinyin.mjs /tmp/cedict.txt
//
// Run this again whenever a Chinese content file's in-scope text changes (new words, new papers) — it
// re-harvests every chinese-*.js file in assets/js/papers/ from scratch each time.
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import vm from "node:vm";

const root = process.cwd();
const cedictPath = process.argv[2];
if (!cedictPath) { console.error("Usage: node scripts/build-pinyin.mjs <path to cedict_ts.u8>"); process.exit(1); }

// ---- 1. Harvest in-scope Chinese text from every chinese-*.js content file ----
// In scope: question text, MCQ/picture-mcq options, cloze box words and passage text, edit markers,
// tf part text, order event text (recursing into a `listen` item's children).
// Out of scope: `sec.story.p` (reading-comprehension passages), `it.script` (listening scripts), and
// model answers/marking guides — these are read, not quizzed vocabulary.
const papersDir = join(root, "assets/js/papers");
const files = readdirSync(papersDir).filter((f) => f.startsWith("chinese-"));
const texts = new Set();
const add = (s) => { if (s) texts.add(s); };
function walkItem(it) {
  if (it.t === "listen") { (it.items || []).forEach(walkItem); return; }
  add(it.q);
  if (it.o) it.o.forEach(add);
  if (it.t === "cloze") { if (it.box) it.box.forEach(add); if (it.text) add(it.text.replace(/\{\d+\}/g, "")); }
  if (it.t === "edit" && it.text) add(it.text.replace(/\[\d+\|([^\]]+)\]/g, "$1"));
  if (it.t === "tf" && it.parts) it.parts.forEach((pt) => add(pt.s));
  if (it.t === "order" && it.ev) it.ev.forEach((e) => add(e.s));
}
for (const f of files) {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(join(papersDir, f), "utf8"), sandbox, { filename: f });
  for (const sec of sandbox.window.PAPER.sections || []) for (const it of sec.items || []) walkItem(it);
}
console.error(`Harvested ${texts.size} in-scope strings from ${files.length} Chinese content files`);

// ---- 2. Parse CC-CEDICT ("Trad Simp [pinyin] /defs/", CRLF line endings) ----
function addTone(syl, tone) {
  syl = syl.replace(/u:/g, "ü").replace(/v/g, "ü");
  if (!tone || Number(tone) === 5) return syl;
  const t = Number(tone);
  let idx = -1;
  if (syl.includes("a")) idx = syl.indexOf("a");
  else if (syl.includes("e")) idx = syl.indexOf("e");
  else if (syl.includes("ou")) idx = syl.indexOf("ou");
  else { const m = [...syl.matchAll(/[aeiouü]/g)]; if (m.length) idx = m[m.length - 1].index; }
  if (idx < 0) return syl;
  const marks = { a: "āáǎà", e: "ēéěè", i: "īíǐì", o: "ōóǒò", u: "ūúǔù", "ü": "ǖǘǚǜ" };
  const ch = syl[idx];
  if (!marks[ch]) return syl;
  return syl.slice(0, idx) + marks[ch][t - 1] + syl.slice(idx + 1);
}
function convertPinyin(numbered) {
  return numbered.split(/\s+/).map((syl) => {
    const m = syl.match(/^([a-zA-Z:]+)([1-5])$/);
    return m ? addTone(m[1].toLowerCase(), m[2]) : syl.toLowerCase();
  }).join(" ");
}
const lines = readFileSync(cedictPath, "utf8").split(/\r?\n/).filter((l) => l && !l.startsWith("#"));
const dict = new Map(); // simplified word -> pinyin (diacritics), first CEDICT entry wins
const lineRe = /^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+\/(.*)\/$/;
for (const line of lines) {
  const m = line.match(lineRe);
  if (!m) continue;
  if (!dict.has(m[2])) dict.set(m[2], convertPinyin(m[3]));
}
console.error(`Indexed ${dict.size} distinct simplified words from CC-CEDICT`);

// ---- 3. Manual overrides, checked by hand against this content's actual sentences ----
// CC-CEDICT's FIRST-listed reading for a character is sometimes a rarer one than the reading this
// content's sentences actually use. Each one below was verified against every harvested occurrence —
// see the PR that introduced this file for the full context review.
const PHRASE_OVERRIDES = {
  "长长": "cháng cháng", // "一长长的鳄鱼" — reduplicated adjective "long"
  "长得": "zhǎng de",    // "这头大象长得很____" — "长" as the verb "to grow"
};
const CHAR_OVERRIDES = {
  "上": "shàng", "作": "zuò", "句": "jù", "看": "kàn", "着": "zhe", "说": "shuō", "过": "guò",
  "都": "dōu", "骑": "qí", "累": "lèi", "更": "gèng", "还": "hái", "校": "xiào", "要": "yào",
  "处": "chù", "得": "de", "教": "jiāo", "几": "jǐ", "跑": "pǎo",
  "长": "cháng", // bare fallback; see the 长长/长得 phrase overrides for this content's actual uses
};
for (const [phrase, pinyin] of Object.entries(PHRASE_OVERRIDES)) dict.set(phrase, pinyin);
for (const [ch, pinyin] of Object.entries(CHAR_OVERRIDES)) dict.set(ch, pinyin);

// Real CC-CEDICT headwords that greedy longest-match segmentation picks up across a grammatical
// boundary where they don't belong in this content (found by printing every harvested string's full
// segmentation and reading it end to end) — removed so segmentation falls through to the correct
// smaller pieces on either side.
const BLOCKED_PHRASES = [
  "到了", // "到了图书馆/动物园" needs 到(dào) + 了(le), not the idiom "dàoliǎo" (finally)
  "次经", // "从这次经历" needs 这次(zhè cì) + 经历(jīng lì)
  "中的", // "图中的天气" needs 中(zhōng) + 的(de), not the archery idiom "zhòngdì" (hit the target)
  "头大", // "这头大象" needs 头(tóu, measure word) + 大象(dà xiàng, elephant)
];
for (const p of BLOCKED_PHRASES) dict.delete(p);

// ---- 4. Maximum-match segmentation of each harvested string, longest word first ----
const MAXLEN = 6;
function segmentRun(run) {
  const out = [];
  let i = 0;
  while (i < run.length) {
    let matched = null;
    for (let len = Math.min(MAXLEN, run.length - i); len >= 1; len--) {
      const cand = run.slice(i, i + len);
      if (dict.has(cand)) { matched = cand; break; }
    }
    if (matched) { out.push(matched); i += matched.length; } else { out.push(run[i]); i += 1; }
  }
  return out;
}
const wordPinyin = {};
const missing = new Set();
for (const t of texts) {
  for (const run of t.match(/[\u4e00-\u9fff]+|[^\u4e00-\u9fff]+/g) || []) {
    if (!/[\u4e00-\u9fff]/.test(run)) continue;
    for (const word of segmentRun(run)) {
      if (dict.has(word)) wordPinyin[word] = dict.get(word); else missing.add(word);
    }
  }
}
console.error(`Resolved pinyin for ${Object.keys(wordPinyin).length} words; ${missing.size} missing`);
if (missing.size) { console.error("MISSING (no CEDICT entry — add an override): " + [...missing].join(" ")); process.exit(1); }

// ---- 5. Write the data file the site actually loads ----
const out = `/* Hover pinyin for the Chinese papers' questions, options and word-box text (not reading passages
   or listening scripts). Generated by scripts/build-pinyin.mjs from CC-CEDICT — re-run it whenever a
   Chinese content file's in-scope text changes.
   CC-CEDICT: Copyright (C) MDBG / the CC-CEDICT community, licensed under CC BY-SA 4.0
   (https://creativecommons.org/licenses/by-sa/4.0/). This file is a derived, filtered excerpt (only the
   words this site's own content actually uses), redistributed under the same license. */
"use strict";
window.ZH_PINYIN = ${JSON.stringify(wordPinyin, Object.keys(wordPinyin).sort(), 1)};
`;
writeFileSync(join(root, "assets/js/zh-pinyin.js"), out);
console.error("Wrote assets/js/zh-pinyin.js");
