/* Home page: renders the subject tabs, filters, grouped paper lists and the "continue" card from
   window.CATALOG and whatever this browser has saved. Nothing here is sent anywhere. */
"use strict";
const CATALOG = window.CATALOG || [];
const SUBJECTS = window.SUBJECTS || [];
const KIND_LABEL = { full: "Full papers", listening: "Listening", drill: "Quick drills" };
const KIND_BLURB = {
  full: "Exam format, timed", listening: "Recordings play twice", drill: "10–25 min, repeatable"
};
const KIND_ORDER = ["full", "listening", "drill"];
const SUBJECT_KEY = "p3-home-subject";

function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
function isMobile() { return window.matchMedia("(max-width: 699px)").matches; }
function fmtDuration(min, about) {
  const h = Math.floor(min / 60), m = min % 60;
  const core = h ? (h + " h" + (m ? " " + m + " min" : "")) : (m + " min");
  return (about ? "about " : "") + core;
}
function fmtClock(totalSec) {
  const m = Math.floor(totalSec / 60), s = totalSec % 60;
  return m + ":" + (s < 10 ? "0" : "") + s;
}
function fmtDate(iso) {
  try { return new Date(iso).toLocaleDateString("en-SG", { day: "numeric", month: "short" }); } catch (e) { return ""; }
}

/* ---------- Reading saved attempts (never throws; no storage => no data) ---------- */
function readPaperStore(id) {
  try {
    const raw = localStorage.getItem(id);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (s && typeof s === "object" && s.sessions && typeof s.sessions === "object") return s;
  } catch (e) { /* storage blocked or corrupt: treat as nothing saved */ }
  return null;
}
function answeredCount(session) {
  const a = session.answers || {};
  return Object.keys(a).filter((k) => String(a[k] || "").trim() !== "").length;
}
function sessionTime(s) { return s.finished || s.updated || s.created || ""; }

/* For one catalog entry: the in-progress session (if any, most recently updated), the best
   submitted session (highest score), and whether any attempt has been submitted at all. */
function paperStatus(entry) {
  const store = readPaperStore(entry.id);
  const sessions = store ? Object.values(store.sessions || {}) : [];
  let inProgress = null, best = null, anyDone = false;
  sessions.forEach((s) => {
    if (s.submitted) {
      anyDone = true;
      if (!best || (s.score || 0) > (best.score || 0)) best = s;
    } else if (answeredCount(s) > 0) {
      if (!inProgress || sessionTime(s) > sessionTime(inProgress)) inProgress = s;
    }
  });
  return { inProgress, best, anyDone };
}

/* ---------- "Continue where you left off" + "Recently finished" ---------- */
function buildContinueCard() {
  let bestContinue = null, bestEntry = null;
  const finished = [];
  CATALOG.forEach((entry) => {
    const store = readPaperStore(entry.id);
    if (!store) return;
    Object.values(store.sessions || {}).forEach((s) => {
      if (s.submitted) {
        finished.push({ entry, session: s });
      } else if (answeredCount(s) > 0) {
        if (!bestContinue || sessionTime(s) > sessionTime(bestContinue)) { bestContinue = s; bestEntry = entry; }
      }
    });
  });
  finished.sort((a, b) => (sessionTime(b.session) > sessionTime(a.session) ? 1 : -1));
  const topFinished = finished.slice(0, 3);
  if (!bestContinue && !topFinished.length) return null;

  const card = el("section", "continuecard");
  card.setAttribute("aria-label", "Continue where you left off");
  if (bestContinue) {
    const subj = SUBJECTS.find((s) => s.id === bestEntry.subject);
    card.append(el("h2", null, "Continue where you left off"));
    const row = el("div", "cc-row");
    const dot = el("span", "dot"); dot.style.background = subj ? subj.color : "#888";
    const info = el("div", "cc-info");
    info.append(el("div", "cc-title", (subj ? subj.name + " · " : "") + bestEntry.title));
    const answered = answeredCount(bestContinue), total = bestEntry.questions;
    const bar = el("div", "progressbar"); const fill = el("div", "progressfill");
    fill.style.width = Math.round(100 * Math.min(1, answered / total)) + "%"; bar.append(fill);
    info.append(bar);
    const metaLine = el("div", "cc-meta", answered + " of " + total + " answered");
    if (bestContinue.timerRemaining != null && bestContinue.timerRemaining > 0) metaLine.textContent += " · " + fmtClock(bestContinue.timerRemaining) + " left";
    info.append(metaLine);
    row.append(dot, info);
    const go = el("a", "btn btn-fill", "Continue"); go.href = bestEntry.href;
    row.append(go);
    card.append(row);
  }
  if (topFinished.length) {
    const div = el("div", "cc-divider");
    const line = el("div", "cc-recent-head", "Recently finished");
    const list = el("div", "cc-recent-list");
    topFinished.forEach(({ entry, session }) => {
      const d = el("div", "cc-recent-item");
      let txt = entry.title + " · " + session.score + "/" + entry.marks;
      if (session.pendingMarks) txt += " + " + session.pendingMarks + " to mark";
      d.textContent = txt;
      list.append(d);
    });
    if (card.children.length) card.append(div);
    card.append(line, list);
  }
  return card;
}

/* ---------- Subject tabs ---------- */
function subjectCounts(subjectId) {
  const entries = CATALOG.filter((e) => e.subject === subjectId);
  const done = entries.filter((e) => paperStatus(e).anyDone).length;
  return { total: entries.length, done };
}
function readSavedSubject() {
  try { const v = localStorage.getItem(SUBJECT_KEY); if (SUBJECTS.some((s) => s.id === v)) return v; } catch (e) {}
  return null;
}
function saveSubject(id) { try { localStorage.setItem(SUBJECT_KEY, id); } catch (e) {} }

function currentSubjectFromHash() {
  const h = (location.hash || "").replace("#", "");
  if (SUBJECTS.some((s) => s.id === h)) return h;
  return null;
}

let currentSubject = currentSubjectFromHash() || readSavedSubject() || "english";
let currentKind = "all";

function buildTabs() {
  const wrap = el("div", "subjecttabs"); wrap.setAttribute("role", "tablist"); wrap.setAttribute("aria-label", "Subject");
  SUBJECTS.forEach((subj, i) => {
    const { total, done } = subjectCounts(subj.id);
    const tab = el("button", "tab"); tab.type = "button";
    tab.setAttribute("role", "tab");
    tab.id = "tab-" + subj.id;
    tab.setAttribute("aria-controls", "subjectpanel");
    const selected = subj.id === currentSubject;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
    if (selected) tab.style.borderColor = subj.color;
    const dot = el("span", "dot"); dot.style.background = subj.color;
    const name = el("span", "tabname", subj.name);
    const count = el("span", "tabcount", isMobile() ? (done + " of " + total + " done") : (total + " paper" + (total === 1 ? "" : "s") + " · " + done + " done"));
    tab.append(dot, name, count);
    tab.addEventListener("click", () => { setSubject(subj.id); });
    tab.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      const dir = e.key === "ArrowLeft" ? -1 : 1;
      const next = SUBJECTS[(i + dir + SUBJECTS.length) % SUBJECTS.length];
      setSubject(next.id);
      const btn = document.getElementById("tab-" + next.id); if (btn) btn.focus();
    });
    wrap.append(tab);
  });
  return wrap;
}
function setSubject(id) {
  if (id === currentSubject) return;
  currentSubject = id; currentKind = "all";
  saveSubject(id);
  history.replaceState(null, "", "#" + id);
  render();
}

/* ---------- Filter pills + grouped lists ---------- */
function availableKinds(subjectId) {
  const kinds = new Set(CATALOG.filter((e) => e.subject === subjectId).map((e) => e.kind));
  return KIND_ORDER.filter((k) => kinds.has(k));
}
function buildFilterPills(kinds) {
  const wrap = el("div", "filterpills");
  const opts = [["all", "All"]].concat(kinds.map((k) => [k, KIND_LABEL[k]]));
  opts.forEach(([val, label]) => {
    const btn = el("button", "pill-filter", label); btn.type = "button";
    const pressed = val === currentKind;
    btn.setAttribute("aria-pressed", String(pressed));
    btn.addEventListener("click", () => { currentKind = val; render(); });
    wrap.append(btn);
  });
  return wrap;
}

function statusOf(entry) {
  const { inProgress, best, anyDone } = paperStatus(entry);
  if (inProgress) {
    const answered = answeredCount(inProgress);
    return { kind: "progress", text: "In progress · " + answered + "/" + entry.questions, action: "continue", label: "Continue" };
  }
  if (anyDone && best) {
    let text = "Best " + best.score + "/" + entry.marks;
    if (best.pendingMarks) text += " + " + best.pendingMarks + " to mark";
    text += " · " + fmtDate(sessionTime(best));
    return { kind: "done", text, action: "tryagain", label: "Try again" };
  }
  return { kind: "none", text: "Not started", action: "start", label: "Start" };
}

function buildRow(entry, status) {
  const mobile = isMobile();
  const href = status.action === "tryagain" ? entry.href + "#new" : entry.href;
  const li = el("li", "prow");
  const metaText = entry.marks + " marks · " + fmtDuration(entry.minutes, entry.kind === "listening");

  if (mobile) {
    const a = el("a", "prow-link"); a.href = href;
    const top = el("div", "prow-top");
    top.append(el("span", "rowtitle-txt", entry.title));
    if (entry.label) top.append(el("span", "labelpill", entry.label));
    const mid = el("div", "rowmeta", metaText);
    const pill = el("span", "statuspill statuspill-" + status.kind, status.text);
    a.append(top, mid, pill);
    li.append(a);
  } else {
    const row = el("div", "prow-desktop");
    const main = el("div", "prow-main");
    const titleLine = el("div", "prow-titleline");
    const titleA = el("a", "rowtitle", entry.title); titleA.href = entry.href;
    titleLine.append(titleA);
    if (entry.label) titleLine.append(el("span", "labelpill", entry.label));
    main.append(titleLine, el("div", "rowmeta", metaText));
    const pill = el("span", "statuspill statuspill-" + status.kind, status.text);
    const action = el("a", "btn " + (status.action === "tryagain" ? "btn-outline" : "btn-fill"), status.label);
    action.href = href;
    row.append(main, pill, action);
    li.append(row);
  }
  return li;
}

function buildGroups() {
  const wrap = el("div", "panelgroups");
  const kinds = availableKinds(currentSubject);
  const visibleKinds = kinds.filter((k) => currentKind === "all" || currentKind === k);
  visibleKinds.forEach((kind) => {
    const entries = CATALOG.filter((e) => e.subject === currentSubject && e.kind === kind);
    if (!entries.length) return;
    const panel = el("section", "kindpanel");
    const head = el("div", "kindhead");
    head.append(el("h3", null, KIND_LABEL[kind] + ":"), el("span", "muted", KIND_BLURB[kind]));
    panel.append(head);
    const list = el("ul", "prowlist");
    entries.forEach((entry) => list.append(buildRow(entry, statusOf(entry))));
    panel.append(list);
    wrap.append(panel);
  });
  return wrap;
}

/* ---------- Top-level render ---------- */
function render() {
  const home = document.getElementById("home");
  home.textContent = "";
  const cc = buildContinueCard();
  if (cc) home.append(cc);
  home.append(buildTabs());
  const panel = el("div", null); panel.id = "subjectpanel"; panel.setAttribute("role", "tabpanel");
  panel.setAttribute("aria-labelledby", "tab-" + currentSubject);
  const kinds = availableKinds(currentSubject);
  panel.append(buildFilterPills(kinds));
  panel.append(buildGroups());
  home.append(panel);
}

render();
let resizeTimer = null;
window.matchMedia("(max-width: 699px)").addEventListener("change", () => {
  clearTimeout(resizeTimer); resizeTimer = setTimeout(render, 50);
});
