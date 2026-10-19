// Pre-deploy checks. Run with: node scripts/check-site.mjs
// Fails (exit 1) if a page could break or weaken the site's security rules, or a content file is malformed.
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import vm from "node:vm";

const root = process.cwd();
const skip = new Set([".git", "node_modules", ".github", "scripts"]);
const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    if (skip.has(n)) continue;
    const p = join(d, n);
    statSync(p).isDirectory() ? walk(p) : files.push(p);
  }
})(root);

const errors = [];
const rel = (p) => p.slice(root.length + 1);

for (const f of files.filter((f) => extname(f) === ".js")) {
  try { new vm.Script(readFileSync(f, "utf8"), { filename: rel(f) }); }
  catch (e) { errors.push(`${rel(f)}: JavaScript does not parse (${e.message})`); }
}

for (const f of files.filter((f) => extname(f) === ".html")) {
  const html = readFileSync(f, "utf8");
  const name = rel(f);
  if (!/^<!doctype html>/i.test(html)) errors.push(`${name}: missing <!doctype html>`);
  if (!/<html lang="/.test(html)) errors.push(`${name}: missing lang on <html>`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${name}: missing <title>`);
  if (!/http-equiv="Content-Security-Policy"/.test(html)) errors.push(`${name}: missing Content-Security-Policy`);
  if (/<script(?![^>]*\bsrc=)[^>]*>/i.test(html)) errors.push(`${name}: inline <script> (blocked by the security policy)`);
  if (/<style[\s>]/i.test(html)) errors.push(`${name}: inline <style> (blocked by the security policy)`);
  if (/\sstyle="/i.test(html)) errors.push(`${name}: inline style="" attribute (blocked by the security policy)`);
  if (/\son[a-z]+="/i.test(html)) errors.push(`${name}: inline event handler (blocked by the security policy)`);
  for (const [, url] of html.matchAll(/\s(?:src|href)="([^"#]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    let target = join(dirname(f), url.split("?")[0]);
    if (url.endsWith("/")) target = join(target, "index.html");
    if (!existsSync(target)) errors.push(`${name}: broken link ${url}`);
  }
  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]*"/.test(tag[0]) || /\balt=""/.test(tag[0])) errors.push(`${name}: <img> missing alt text`);
  }
}

// Counts the answerable items in one item (recursing into a `listen` item's children) — the same
// count the paper engine uses for "N of M answered" and the catalog's `questions` field.
function countAnswerable(it) {
  switch (it.t) {
    case "tf": return it.parts.length;
    case "order": return (it.ev || []).length;
    case "cloze": return Object.keys(it.ans).length;
    case "edit": return Object.keys(it.ans).length;
    case "listen": return (it.items || []).reduce((sum, child) => sum + countAnswerable(child), 0);
    default: return 1;
  }
}

// ---- Content files (assets/js/papers/*.js): load each and validate its PAPER object ----
const paperFiles = files.filter((f) => rel(f).replace(/\\/g, "/").startsWith("assets/js/papers/"));
const paperDataByFile = new Map(); // "papers/xxx.js" basename -> {id, total, questions}
for (const f of paperFiles) {
  const name = rel(f);
  let PAPER;
  try {
    const sandbox = { window: {} };
    vm.runInNewContext(readFileSync(f, "utf8"), sandbox, { filename: name });
    PAPER = sandbox.window.PAPER;
    if (!PAPER) throw new Error("window.PAPER was not set");
  } catch (e) {
    errors.push(`${name}: could not load as a content file (${e.message})`);
    continue;
  }

  const numbers = new Map(); // base number -> count of times seen
  const addNumber = (n) => { const base = String(n).replace(/[a-c]$/, ""); numbers.set(base, (numbers.get(base) || 0) + 1); };
  const imgRefs = []; // {src, alt, where}

  const checkImg = (img, where) => { if (img) imgRefs.push({ ...img, where }); };

  // Returns the marks this item is worth (recursing into listen children), and records question numbers / images.
  function itemMarks(it, where) {
    const m = it.m || 1;
    checkImg(it.img, where);
    if (it.oImg) it.oImg.forEach((im) => checkImg(im, where));
    switch (it.t) {
      case "mcq":
      case "picture-mcq":
        addNumber(it.id);
        if (!(Number.isInteger(it.a) && it.a >= 0 && it.a < it.o.length)) errors.push(`${name} ${where}: mcq ${it.id} has "a"=${it.a}, out of range for ${it.o.length} options`);
        return m;
      case "key":
      case "num":
        addNumber(it.id);
        return m;
      case "parent":
        addNumber(it.id);
        return m;
      case "tf":
        it.parts.forEach((pt) => addNumber(pt.id));
        return it.parts.length;
      case "order":
        addNumber(it.id);
        return it.partial ? (it.ev || []).length : m;
      case "cloze": {
        Object.keys(it.ans).forEach(addNumber);
        if (it.box) {
          // Word-box cloze: each word used once, so no two blanks may share an intended answer.
          const firstAnswers = Object.entries(it.ans).map(([, v]) => v[0]);
          const dupes = firstAnswers.filter((a, i) => firstAnswers.indexOf(a) !== i);
          if (dupes.length) errors.push(`${name} ${where}: cloze "${it.title || ""}" has two blanks sharing an answer (${dupes.join(",")})`);
          Object.entries(it.ans).forEach(([n, ansList]) => ansList.forEach((a) => {
            if (!it.box.includes(a)) errors.push(`${name} ${where}: cloze blank ${n} answer "${a}" is not in its word box`);
          }));
          const extra = it.box.length - Object.keys(it.ans).length;
          if (extra < 2 || extra > 3) errors.push(`${name} ${where}: cloze "${it.title || ""}" word box has ${extra} extra words, expected 2-3`);
        }
        return Object.keys(it.ans).length;
      }
      case "edit": {
        const markerNums = [...it.text.matchAll(/\[(\d+)\|[^\]]+\]/g)].map((mm) => mm[1]);
        const ansNums = Object.keys(it.ans);
        markerNums.forEach(addNumber);
        const a = new Set(markerNums), b = new Set(ansNums);
        markerNums.filter((n) => !b.has(n)).forEach((n) => errors.push(`${name} ${where}: edit marker [${n}|...] has no matching ans key`));
        ansNums.filter((n) => !a.has(n)).forEach((n) => errors.push(`${name} ${where}: edit ans key ${n} has no matching [n|word] marker`));
        return ansNums.length;
      }
      case "listen":
        return (it.items || []).reduce((sum, child) => sum + itemMarks(child, where + " > " + (it.id || it.title || "listen")), 0);
      default:
        addNumber(it.id);
        return m;
    }
  }

  let paperTotal = 0;
  (PAPER.sections || []).forEach((sec) => {
    const secTotal = (sec.items || []).reduce((sum, it) => sum + itemMarks(it, `section ${sec.id}`), 0);
    if (secTotal !== sec.marks) errors.push(`${name}: section ${sec.id} items total ${secTotal} marks, but sec.marks is ${sec.marks}`);
    paperTotal += sec.marks;
  });
  if (paperTotal !== PAPER.total) errors.push(`${name}: sections add up to ${paperTotal}, but PAPER.total is ${PAPER.total}`);

  const questionCount = (PAPER.sections || []).reduce((sum, sec) => sum + (sec.items || []).reduce((s, it) => s + countAnswerable(it), 0), 0);
  paperDataByFile.set(f.replace(/\\/g, "/").split("/").pop(), { id: PAPER.id, total: PAPER.total, questions: questionCount });

  const nums = [...numbers.keys()].map(Number).filter((n) => Number.isFinite(n));
  const maxN = nums.length ? Math.max(...nums) : 0;
  for (let n = 1; n <= maxN; n++) if (!numbers.has(String(n))) errors.push(`${name}: question number ${n} is missing`);
  [...numbers.entries()].forEach(([n, count]) => { if (!/^\d+$/.test(n)) errors.push(`${name}: unexpected question id "${n}"`); });

  imgRefs.forEach(({ src, alt, where }) => {
    if (!src) { errors.push(`${name} ${where}: an img entry has no src`); return; }
    if (/^(https?:|data:)/.test(src)) { errors.push(`${name} ${where}: img src "${src}" must be the site's own file, not an external link`); return; }
    if (!existsSync(join(root, src))) errors.push(`${name} ${where}: img src "${src}" does not exist`);
    if (!alt) errors.push(`${name} ${where}: img src "${src}" has no alt text`);
  });
}

// ---- Catalog (assets/js/catalog.js): every paper page is listed, every listed page exists,
// and each entry's id/marks/questions match its content file. ----
const catalogFile = files.find((f) => rel(f).replace(/\\/g, "/") === "assets/js/catalog.js");
let CATALOG = [];
if (!catalogFile) {
  errors.push("assets/js/catalog.js is missing");
} else {
  try {
    const sandbox = { window: {} };
    vm.runInNewContext(readFileSync(catalogFile, "utf8"), sandbox, { filename: "assets/js/catalog.js" });
    CATALOG = sandbox.window.CATALOG || [];
    if (!Array.isArray(CATALOG) || !CATALOG.length) throw new Error("window.CATALOG was not set");
  } catch (e) {
    errors.push(`assets/js/catalog.js: could not load (${e.message})`);
  }
}

const catalogHrefs = new Set();
for (const entry of CATALOG) {
  catalogHrefs.add(entry.href);
  const pagePath = join(root, entry.href);
  if (!existsSync(pagePath)) { errors.push(`catalog entry "${entry.id}": page ${entry.href} does not exist`); continue; }
  const html = readFileSync(pagePath, "utf8");
  const scriptSrcs = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map((m) => m[1]);
  const contentSrc = scriptSrcs.find((s) => /\/papers\/[^/]+\.js$/.test(s));
  if (!contentSrc) { errors.push(`catalog entry "${entry.id}": ${entry.href} has no assets/js/papers/*.js content script`); continue; }
  const basename = contentSrc.split("/").pop();
  const data = paperDataByFile.get(basename);
  if (!data) { errors.push(`catalog entry "${entry.id}": content file ${basename} was not found/validated`); continue; }
  if (data.id !== entry.id) errors.push(`catalog entry "${entry.id}": ${entry.href}'s content file has PAPER.id "${data.id}"`);
  if (data.total !== entry.marks) errors.push(`catalog entry "${entry.id}": marks is ${entry.marks}, but PAPER.total is ${data.total}`);
  if (data.questions !== entry.questions) errors.push(`catalog entry "${entry.id}": questions is ${entry.questions}, but the content file has ${data.questions} answerable items`);
}

// Every *.html page under a subject folder that is itself a paper (has a papers/*.js content script)
// must be reachable from the catalog.
const subjectDirs = ["english", "maths", "chinese", "science"];
for (const f of files.filter((f) => extname(f) === ".html")) {
  const name = rel(f).replace(/\\/g, "/");
  if (!subjectDirs.some((d) => name.startsWith(d + "/"))) continue;
  const html = readFileSync(f, "utf8");
  if (!/\/papers\/[^/]+\.js"/.test(html)) continue; // not a paper page (shouldn't occur, but be safe)
  if (!catalogHrefs.has(name)) errors.push(`${name}: is a paper page but has no catalog entry`);
}

// index.html's <noscript> fallback list must match the catalog, so the site still works with JS off.
const indexFile = files.find((f) => rel(f).replace(/\\/g, "/") === "index.html");
if (indexFile) {
  const html = readFileSync(indexFile, "utf8");
  const m = html.match(/<noscript>([\s\S]*?)<\/noscript>/);
  if (!m) {
    errors.push("index.html: missing a <noscript> fallback list of every paper");
  } else {
    const noscriptHrefs = new Set([...m[1].matchAll(/href="([^"]+)"/g)].map((mm) => mm[1]));
    for (const href of catalogHrefs) if (!noscriptHrefs.has(href)) errors.push(`index.html <noscript>: missing a link to ${href}`);
    for (const href of noscriptHrefs) if (!catalogHrefs.has(href)) errors.push(`index.html <noscript>: links to ${href}, which is not in the catalog`);
  }
}

if (errors.length) { console.error(errors.map((e) => "✗ " + e).join("\n")); process.exit(1); }
console.log(`✓ ${files.length} files checked (${paperFiles.length} content files, ${CATALOG.length} catalog entries validated), no problems found`);
