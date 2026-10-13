// Pre-deploy checks. Run with: node scripts/check-site.mjs
// Fails (exit 1) if a page could break or weaken the site's security rules.
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
}

if (errors.length) { console.error(errors.map((e) => "✗ " + e).join("\n")); process.exit(1); }
console.log(`✓ ${files.length} files checked, no problems found`);
