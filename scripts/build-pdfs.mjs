// Builds the downloadable PDFs: for every paper in assets/js/catalog.js, a blank question paper and a
// parents' answer key, written to downloads/<paper id>-question-paper.pdf and downloads/<paper id>-answer-key.pdf.
//
// They are made by opening the real paper page in headless Chromium at #question-paper / #answer-key and
// printing it, so a PDF is always exactly what "Print" shows on the site.
//
// Run:  node scripts/build-pdfs.mjs            (only papers whose content changed since the last run)
//       node scripts/build-pdfs.mjs --force    (rebuild everything)
//       node scripts/build-pdfs.mjs p3-science-set3 p3-maths-set1   (only these papers)
//
// One-time setup (not part of the site, nothing is added to the repo):
//       npm install --no-save playwright && npx playwright install chromium
//
// downloads/manifest.json records a fingerprint of each paper's content file and catalog entry.
// scripts/check-site.mjs fails if a PDF is missing or out of date, so a changed answer can never be left
// behind in an old PDF. Re-run this script and commit the downloads/ folder whenever it says so.
import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { join, extname, normalize, resolve } from "node:path";
import vm from "node:vm";

const root = process.cwd();
const outDir = join(root, "downloads");
const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));

function fingerprint(entry) {
  const html = readFileSync(join(root, entry.href), "utf8");
  const src = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map((m) => m[1]).find((s) => /\/papers\/[^/]+\.js$/.test(s));
  const contentPath = join(root, entry.href, "..", src);
  const h = createHash("sha1");
  h.update(readFileSync(contentPath));
  h.update(JSON.stringify(entry));
  return h.digest("hex").slice(0, 16);
}

async function loadPlaywright() {
  try { return await import("playwright"); } catch (e) { /* try below */ }
  try { return createRequire(join(root, "package.json"))("playwright"); } catch (e) { /* fall through */ }
  console.error("Playwright is not installed. Run:  npm install --no-save playwright && npx playwright install chromium");
  process.exit(1);
}

function loadCatalog() {
  const sandbox = { window: {} };
  vm.runInNewContext(readFileSync(join(root, "assets/js/catalog.js"), "utf8"), sandbox);
  return sandbox.window.CATALOG;
}

const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".json": "application/json" };
function serve() {
  const server = createServer((req, res) => {
    const path = normalize(decodeURIComponent(req.url.split("?")[0])).replace(/^([/\\])+/, "");
    const file = resolve(root, path || "index.html");
    if (!file.startsWith(root) || !existsSync(file) || statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
    res.end(readFileSync(file));
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok(server)));
}

const catalog = loadCatalog();
mkdirSync(outDir, { recursive: true });
const manifestPath = join(outDir, "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : {};

const todo = catalog.filter((e) => (!only.length || only.includes(e.id)) &&
  (force || only.length || manifest[e.id] !== fingerprint(e) ||
    !existsSync(join(outDir, `${e.id}-answer-key.pdf`)) || !existsSync(join(outDir, `${e.id}-question-paper.pdf`))));

if (!todo.length) { console.log("All PDFs are up to date."); process.exit(0); }

const { chromium } = await loadPlaywright();
const server = await serve();
const base = `http://127.0.0.1:${server.address().port}/`;
const browser = await chromium.launch();

for (const entry of todo) {
  for (const [hash, name, label] of [["#question-paper", "question-paper", "Question paper"], ["#answer-key", "answer-key", "Answer key"]]) {
    const page = await browser.newPage();
    await page.goto(base + entry.href + hash, { waitUntil: "load" });
    await page.waitForSelector("html.docview", { state: "attached" });
    await page.evaluate(() => Promise.all([...document.querySelectorAll(".print-doc img")].map((i) => i.complete ? 1 : new Promise((r) => { i.onload = i.onerror = r; }))));
    await page.evaluate(async () => { if (document.fonts && document.fonts.ready) await document.fonts.ready; });
    await page.emulateMedia({ media: "print", colorScheme: "light" });
    const shown = await page.evaluate(() => {
      const d = document.querySelector(document.documentElement.classList.contains("print-key") ? "#printKey" : "#printPaper");
      return d && getComputedStyle(d).display !== "none" && d.textContent.length > 200;
    });
    if (!shown) throw new Error(`${entry.id}: ${label} did not render`);
    await page.pdf({
      path: join(outDir, `${entry.id}-${name}.pdf`),
      preferCSSPageSize: true,
      printBackground: false,
      displayHeaderFooter: true,
      headerTemplate: "<span></span>",
      footerTemplate: `<div style="font-size:8px;width:100%;text-align:center;color:#444;font-family:Arial,sans-serif">${entry.title.replace(/&/g, "&amp;").replace(/</g, "&lt;")} · ${label} · page <span class="pageNumber"></span> of <span class="totalPages"></span></div>`
    });
    await page.close();
  }
  manifest[entry.id] = fingerprint(entry);
  console.log("built", entry.id);
}
// Keep only papers that still exist in the catalog.
for (const id of Object.keys(manifest)) if (!catalog.some((e) => e.id === id)) delete manifest[id];
writeFileSync(manifestPath, JSON.stringify(Object.fromEntries(Object.entries(manifest).sort()), null, 2) + "\n");
await browser.close();
server.close();
