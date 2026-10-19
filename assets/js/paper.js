/* Practice paper engine: builds the paper from window.PAPER, saves attempts in this browser, marks answers. */
"use strict";
/* Turn on only after an ad network is set up (see README). */
const SHOW_AD_SLOTS = false;
const PAPER = window.PAPER;
const STORE_KEY = PAPER.id;
const SECTIONS = PAPER.sections;
/* Exam mode ("no hints") is offered on any paper with at least one hint, ticked by default on
   full papers (90-min mocks) and unticked on short drills, so a drill still nudges with hints. */
const EXAM_DEFAULT = (PAPER.durationMin||0) >= 30;

const CATALOG = window.CATALOG||[];
const SUBJECTS = window.SUBJECTS||[];
const CAT = CATALOG.find(p=>p.id===PAPER.id) || {};
const SUBJ = SUBJECTS.find(s=>s.id===CAT.subject) || {name:"",color:"#2f6b4f"};

function el(tag, cls, text){ const e=document.createElement(tag); if(cls) e.className=cls; if(text!=null) e.textContent=text; return e; }
function fb(){ return el("div","fb"); }
function isMobile(){ return window.matchMedia("(max-width: 699px)").matches; }
function fmtTime(totalSec){ const s=Math.max(0,totalSec|0); const h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60;
  return h+":"+(m<10?"0":"")+m+":"+(sec<10?"0":"")+sec; }
function fmtDuration(min){ const h=Math.floor(min/60), m=min%60; return h ? (h+" h"+(m?" "+m+" min":"")) : (m+" min"); }
function fmtDateShort(iso){ try{ return new Date(iso).toLocaleDateString("en-SG",{day:"numeric",month:"short"}); }catch(e){ return ""; } }

/* Content files write image paths relative to the repo root (e.g. "assets/img/listening/apple.svg"), so
   they work the same regardless of a page's folder depth. BASE is read from this very <script> tag, and
   also used to link back to the home page and to catalog.js. */
const BASE = (()=>{
  const s=[...document.scripts].find(s=>/assets\/js\/paper\.js(\?.*)?$/.test(s.getAttribute("src")||""));
  const src = s ? s.getAttribute("src") : "assets/js/paper.js";
  return src.replace(/assets\/js\/paper\.js(\?.*)?$/,"");
})();
function resolveImg(src){ return /^(https?:|data:|\/)/.test(src) ? src : BASE+src; }
function appendImg(target, img, cls){ if(!img||!img.src) return; const im=document.createElement("img"); im.src=resolveImg(img.src); im.alt=img.alt||""; im.loading="lazy"; im.className=cls||"qimg"; target.append(im); }

/* ---------- Storage (this browser only) ---------- */
let storageOK = true;
function readStore(){
  try{ const raw = localStorage.getItem(STORE_KEY); if(!raw) return null;
    const s = JSON.parse(raw); if(s && typeof s==="object" && s.sessions) return s; }catch(e){ storageOK = false; }
  return null;
}
function writeStore(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
  catch(e){ storageOK = false; setSaveNote("Saving is turned off in this browser (private browsing?). Answers will be lost when you close the page."); }
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
function makeSession(name){ const id=uid(); const s={id, name:(name||"Pupil").slice(0,40), created:new Date().toISOString(), answers:{}, parent:{}, working:{}, plays:{}, hints:{}, pendingMarks:0, submitted:false, examMode:EXAM_DEFAULT, showAll:false};
  if(PAPER.durationMin) s.timerRemaining = PAPER.durationMin*60;
  return s; }

let store = readStore();
if(!store){ const s=makeSession(""); store={version:1,current:s.id,sessions:{[s.id]:s}}; }
if(!store.sessions[store.current]){ const ids=Object.keys(store.sessions); if(ids.length) store.current=ids[0]; else { const s=makeSession(""); store.sessions[s.id]=s; store.current=s.id; } }
const cur = ()=>{ const s=store.sessions[store.current]; if(!s.working) s.working={}; if(!s.plays) s.plays={}; if(!s.hints) s.hints={}; if(s.pendingMarks==null) s.pendingMarks=0; if(s.examMode==null) s.examMode=EXAM_DEFAULT; if(s.showAll==null) s.showAll=false;
  if(s.timerRemaining==null && PAPER.durationMin) s.timerRemaining=PAPER.durationMin*60; return s; };

/* ---------- Page shell: everything is built here so every paper page's HTML can stay identical ---------- */
const app = document.getElementById("app");
const topbar = el("div","topbar");
const backLink = el("a","backlink"); backLink.href = BASE+"index.html#"+(CAT.subject||"");
backLink.setAttribute("aria-label","Back to "+(SUBJ.name||"")+" papers");
backLink.append(el("span","backicon","‹"), el("span","backtext",SUBJ.name||"Home"));
const titleBlock = el("div","topbar-title");
const paperTitleEl = el("h1",null, CAT.title || document.title);
const subDesktop = el("p","topbar-sub topbar-sub-desktop");
const subPhone = el("p","topbar-sub topbar-sub-phone");
titleBlock.append(paperTitleEl, subDesktop, subPhone);
const progressWrap = el("div","topbar-progress");
const progressBar = el("div","progressbar"); const progressFill = el("div","progressfill"); progressBar.append(progressFill);
const progressText = el("span","progresstext");
progressWrap.append(progressBar, progressText);
const timerBtn = el("button","timerbtn"); timerBtn.type="button"; timerBtn.hidden=true;
const moreBtn = el("button","morebtn"); moreBtn.type="button"; moreBtn.setAttribute("aria-haspopup","true"); moreBtn.setAttribute("aria-expanded","false"); moreBtn.setAttribute("aria-label","More options");
moreBtn.append(el("span","more-desktop","More ▾"), el("span","more-phone","⋯"));
const finishTopBtn = el("button","btn-fill finishbtn","Finish and mark"); finishTopBtn.type="button";
const topbarBottomline = el("div","topbar-bottomline"); const topbarBottomfill = el("div","topbar-bottomfill"); topbarBottomline.append(topbarBottomfill);
topbar.append(backLink, titleBlock, progressWrap, timerBtn, moreBtn, finishTopBtn, topbarBottomline);

const papercontent = el("div","papercontent");
const sectionNavDesktop = el("nav","sectionnav-desktop"); sectionNavDesktop.setAttribute("aria-label","Sections");
const papermain = el("div","papermain");
const ad1 = el("aside","ad"); ad1.id="ad1"; ad1.setAttribute("aria-label","Advertisement"); ad1.textContent="Advertisement";
const results = el("div","results"); results.id="results"; results.hidden=true; results.tabIndex=-1; results.setAttribute("aria-live","polite");
const paper = el("main","paper"); paper.id="paper";
const sectionFoot = el("div","sectionfoot");
const ad2 = el("aside","ad"); ad2.id="ad2"; ad2.setAttribute("aria-label","Advertisement"); ad2.textContent="Advertisement";
papermain.append(ad1, results, paper, sectionFoot, ad2);
papercontent.append(sectionNavDesktop, papermain);

const sectionNavPhone = el("nav","sectionnav-phone"); sectionNavPhone.setAttribute("aria-label","Sections");
const phoneNavButtons = el("div","phonenav-buttons");
const phoneNavRow = el("div","phonenav-row");
const phoneNextBtn = el("button",null,"Next unanswered ↓"); phoneNextBtn.type="button";
const phoneFinishBtn = el("button","btn-fill","Finish and mark"); phoneFinishBtn.type="button";
phoneNavRow.append(phoneNextBtn, phoneFinishBtn);
sectionNavPhone.append(phoneNavButtons, phoneNavRow);

const backdrop = el("div","backdrop"); backdrop.hidden=true;
const moreMenu = el("div","moremenu"); moreMenu.hidden=true; moreMenu.setAttribute("role","dialog"); moreMenu.setAttribute("aria-label","More options");
const footer = el("footer");
footer.append(
  el("div",null,"Your answers are stored only in this browser on this device. Clearing your browser data also removes them. Use “Back up attempts” to keep a copy."),
  (()=>{ const d=el("div"); d.append(document.createTextNode("Original practice material written for home revision. Not affiliated with MOE, SEAB or any school. ")); const a=el("a",null,"Privacy"); a.href=BASE+"privacy.html"; d.append(a); return d; })()
);

app.append(topbar, papercontent, sectionNavPhone, backdrop, moreMenu, footer);

function setSaveNote(text){ saveNoteEl.textContent = text; }

const controls = [];        // every bound answer input, for enable/disable and the "blanks left" check
const workingControls = []; // "show your working" boxes: saved, never required, never marked
const numNotes = [];         // {inp,note} for every `num` item: a live "numbers only" check
const markers = [];         // functions that mark one item: return {got,max,sec,topic,label,answer,pending}
const hintBoxes = [];        // every hintBox() div, hidden while exam mode is on
let HAS_HINTS = false, examCb = null;

function bindValue(input, key, secId){
  controls.push(input);
  input.dataset.key = key;
  input.dataset.sec = secId;
  const evt = (input.type==="radio") ? "change" : "input";
  input.addEventListener(evt, ()=>{ if(cur().submitted) return;
    cur().answers[key] = input.type==="radio" ? input.value : input.value; cur().updated=new Date().toISOString(); writeStore(); updateProgress(); });
}
function bindWorking(ta, key){
  workingControls.push(ta);
  ta.dataset.key = key;
  ta.addEventListener("input", ()=>{ if(cur().submitted) return;
    cur().working[key] = ta.value; cur().updated=new Date().toISOString(); writeStore(); });
}
function workingBox(it){
  const d=el("div","work"); const lab=el("label",null,"Show your working (optional — not auto-marked)");
  const ta=document.createElement("textarea"); ta.rows=4; const key="w"+it.id; ta.id="q"+key; lab.htmlFor=ta.id;
  bindWorking(ta,key); d.append(lab,ta); return d;
}
function norm(v){ return String(v||"").trim().replace(/[.!]+$/,"").replace(/\s+/g," "); }

/* An optional "Show hint" disclosure on any item. Records in the attempt whether it was opened
   (never whether it was re-hidden), so it can show as "hint used" in the results. Hints never
   appear in the printed question paper; the answer key prints them (see printItem). */
function hintBox(it){
  if(!it.hint) return null;
  const d=el("div","hintbox noprint");
  const btn=el("button",null,"Show hint"); btn.type="button";
  const p=el("p","hinttext"); p.hidden=true; p.textContent=it.hint;
  btn.addEventListener("click", ()=>{
    p.hidden=!p.hidden; btn.textContent = p.hidden ? "Show hint" : "Hide hint";
    if(!p.hidden && !cur().hints[it.id]){ cur().hints[it.id]=true; writeStore(); }
  });
  d.append(btn,p);
  hintBoxes.push(d);
  return d;
}
function updateHintVisibility(){ const on=!!cur().examMode; hintBoxes.forEach(d=>{ d.hidden=on; }); }

/* An optional `explain` field on any item: after Finish, if the pupil got the item wrong (or, for a
   `parent` item, didn't get full marks), the explanation shows under the correct answer. Hidden
   otherwise. The answer key prints it too (see printItem). */
function explainBox(it){
  if(!it.explain) return null;
  const d=el("div","explain"); d.hidden=true; d.textContent=it.explain;
  return d;
}

/* Parses a numeric answer, accepting "1 200", "1,200", "1200", "0.5", ".5", "$3.50", "3.5" and fractions "3/4". */
function parseNum(str){
  if(str==null) return null;
  let s=String(str).trim().toLowerCase();
  if(!s) return null;
  s = s.replace(/^\$/,"");
  const frac = s.match(/^(\d+)\s*\/\s*(\d+)$/);
  if(frac){ const d=Number(frac[2]); return d ? Number(frac[1])/d : null; }
  s = s.replace(/,/g,"").replace(/\s+/g,"");
  if(!/^-?(\d+)?\.?\d+$/.test(s)) return null;
  const v = parseFloat(s);
  return Number.isFinite(v) ? v : null;
}
/* Live check for a `num` box: flags text that has extra letters mixed in with the number
   (e.g. "3/5v"), without changing how the answer is actually marked (parseNum still decides that). */
function updateNumNote(inp, note){ const raw=inp.value; note.hidden = !(raw.trim() && parseNum(raw)==null); }

/* A `parent` item's optional `final` field ({value, unit}) lets the engine read the last number
   (and unit, if any) in the pupil's answer box and show the parent a comparison with the model's
   final answer, next to the mark buttons. It never changes the mark itself — the parent still decides. */
const UNIT_ALIAS = {m2:"m²", cm2:"cm²", km2:"km²", cm3:"cm³", m3:"m³"};
function extractFinal(text){
  const s=String(text||"");
  const re=/(\$?\d[\d,]*\.?\d*)\s*(m²|cm²|km²|cm³|m³|cm2|km2|m2|cm3|m3|mℓ|min|ℓ|kg|g|km|cm|m|h|¢|%)?/g;
  let m, last=null;
  while((m=re.exec(s))){ if(m[0].trim()) last=m; }
  if(!last) return null;
  const numPart=last[1];
  const value=parseNum(numPart.replace(/^\$/,""));
  if(value==null) return null;
  let unit = last[2] || (/^\$/.test(numPart) ? "$" : null);
  if(unit && UNIT_ALIAS[unit]) unit = UNIT_ALIAS[unit];
  return {value,unit};
}
function fmtFinal(f){
  if(!f) return "";
  if(f.unit==="$") return "$"+f.value;
  return f.value + (f.unit ? " "+f.unit : "");
}
function finalCheckMsg(it, rawAnswer){
  const got=extractFinal(rawAnswer), modelTxt=fmtFinal(it.final);
  if(!got) return {text:"No final answer found in the answer box. Model: "+modelTxt+".", state:"none"};
  const gotTxt=fmtFinal(got);
  const valOk = Math.abs(got.value-it.final.value) < 1e-9;
  if(!valOk) return {text:"Final answer: "+gotTxt+". Model: "+modelTxt+". Doesn't match.", state:"mismatch"};
  if(it.final.unit){
    const gu=(got.unit||"").toLowerCase(), mu=it.final.unit.toLowerCase();
    if(gu!==mu) return {text:"Final answer: "+gotTxt+". Model: "+modelTxt+". Matches, but the unit should be "+it.final.unit+".", state:"unit"};
  }
  return {text:"Final answer: "+gotTxt+". Model: "+modelTxt+". Matches.", state:"match"};
}

function mcq(sec,it){
  const m=it.m||1, topic=it.topic||sec.title;
  const fs=el("fieldset","q"); const lg=el("legend"); lg.append(el("span","qn",it.id+". "), document.createTextNode(it.q)); fs.append(lg);
  const ansPill = el("span","answeredpill"); fs.append(ansPill);
  const hb=hintBox(it); if(hb) fs.append(hb);
  if(it.img) appendImg(fs,it.img);
  const opts=el("div","opts"+(it.oImg?" opts-img":""));
  it.o.forEach((txt,j)=>{ const lab=el("label"); const r=document.createElement("input"); r.type="radio"; r.name="q"+it.id; r.value=String(j); r.id="q"+it.id+"_"+j;
    bindValue(r,it.id,sec.id); lab.htmlFor=r.id; lab.append(r);
    if(it.oImg && it.oImg[j]) appendImg(lab, it.oImg[j], "optimg");
    lab.append(document.createTextNode("("+(j+1)+") "+txt)); opts.append(lab); });
  const f=fb(); fs.append(opts,f);
  markers.push(()=>{ const v=cur().answers[it.id]; const ok=v===String(it.a);
    opts.querySelectorAll("label").forEach((l)=>{ l.classList.remove("right","wrong"); });
    setFb(f, ok, "Answer: ("+(it.a+1)+") "+it.o[it.a]);
    return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:"("+(it.a+1)+") "+it.o[it.a]}; });
  markQuestionCard(fs, it.id, ansPill);
  return fs;
}
function setFb(f, ok, msg){ f.textContent = ok ? "Correct" : msg; f.className = "fb "+(ok?"ok":"no"); }

/* An unanswered question gets an amber border; desktop also shows an "Answered"/"Not answered" pill.
   `keys` is one key (most items) or an array of keys (tf parts, order events, cloze/edit blanks) —
   the card counts as answered once every one of them has a value. */
function markQuestionCard(cardEl, keys, pill){
  const list = Array.isArray(keys) ? keys : [keys];
  cardEl.classList.add("qcard");
  function refresh(){
    const done = list.every(k=>norm(cur().answers[k]));
    cardEl.classList.toggle("unanswered", !done && !cur().submitted);
    if(pill){ pill.textContent = done ? "Answered" : "Not answered"; pill.className = "answeredpill "+(done?"done":"pending"); pill.hidden = !!cur().submitted; }
  }
  cardQuestionRefreshers.push(refresh);
}
const cardQuestionRefreshers = [];

function clozeBlock(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q");
  const ansPill = el("span","answeredpill"); wrap.append(ansPill);
  if(it.title) wrap.append(el("h3",null,it.title));
  if(it.box){ const b=el("div","box"); b.setAttribute("aria-label","Helping words"); it.box.forEach(w=>b.append(el("span",null,w))); wrap.append(b); }
  const p=el("p","passage");
  const keys=[];
  it.text.split(/(\{\d+\})/).forEach(part=>{
    const m=part.match(/^\{(\d+)\}$/);
    if(!m){ p.append(document.createTextNode(part)); return; }
    const n=m[1]; keys.push(n); const inp=document.createElement("input"); inp.type="text"; inp.id="q"+n; inp.autocomplete="off"; inp.spellcheck=false; inp.setAttribute("autocapitalize","off");
    inp.setAttribute("aria-label","Blank "+n); bindValue(inp,n,sec.id);
    p.append(el("span","num","("+n+") "), inp);
    markers.push(()=>{ const ok=it.ans[n].includes(norm(cur().answers[n]).toLowerCase());
      inp.classList.toggle("right",ok); inp.classList.toggle("wrong",!ok);
      if(!ok) inp.title="Answer: "+it.ans[n][0];
      return {got:ok?1:0,max:1,sec:sec.id,topic,label:n,answer:it.ans[n][0],ok}; });
  });
  const f=fb(); wrap.append(p,f);
  markers.push(()=>{ const wrongs=Object.keys(it.ans).filter(n=>!it.ans[n].includes(norm(cur().answers[n]).toLowerCase()));
    if(wrongs.length){ f.textContent="Answers: "+wrongs.map(n=>n+". "+it.ans[n][0]).join(" · "); f.className="fb no"; }
    else { f.textContent="All correct"; f.className="fb ok"; }
    return {got:0,max:0,sec:sec.id}; });
  markQuestionCard(wrap, keys, ansPill);
  return wrap;
}
function editBlock(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q");
  const ansPill = el("span","answeredpill"); wrap.append(ansPill);
  const p=el("p",null); p.style.margin="0";
  it.text.split(/(\[\d+\|[^\]]+\])/).forEach(part=>{
    const m=part.match(/^\[(\d+)\|([^\]]+)\]$/);
    if(!m){ p.append(document.createTextNode(part)); return; }
    const u=el("u"); u.append(el("b",null,"("+m[1]+") "+m[2])); p.append(u); });
  wrap.append(p);
  const g=el("div","grid2");
  const keys=Object.keys(it.ans);
  keys.forEach(n=>{
    const lab=el("label",null,n+"."); const inp=document.createElement("input"); inp.type="text"; inp.id="q"+n; inp.autocomplete="off"; inp.spellcheck=false; inp.setAttribute("autocapitalize","off");
    lab.htmlFor=inp.id; bindValue(inp,n,sec.id); g.append(lab,inp);
    markers.push(()=>{ const spec=it.ans[n]; const v=norm(cur().answers[n]);
      const ok = spec.cs ? spec.a.includes(v) : spec.a.map(x=>x.toLowerCase()).includes(v.toLowerCase());
      inp.classList.toggle("right",ok); inp.classList.toggle("wrong",!ok);
      return {got:ok?1:0,max:1,sec:sec.id,topic,label:n,answer:spec.a[0]+(spec.cs?" (capital letter)":"")}; });
  });
  const f=fb(); wrap.append(g,f);
  markers.push(()=>{ const wrong=Object.keys(it.ans).filter(n=>{const s=it.ans[n];const v=norm(cur().answers[n]);return !(s.cs?s.a.includes(v):s.a.map(x=>x.toLowerCase()).includes(v.toLowerCase()));});
    if(wrong.length){ f.textContent="Answers: "+wrong.map(n=>n+". "+it.ans[n].a[0]+(it.ans[n].cs?" (capital letter)":"")).join(" · "); f.className="fb no"; }
    else { f.textContent="All correct"; f.className="fb ok"; }
    return {got:0,max:0,sec:sec.id}; });
  markQuestionCard(wrap, keys, ansPill);
  return wrap;
}
function numQ(sec,it){
  const m=it.m||1, topic=it.topic||sec.title;
  const wrap=el("div","q"); const ansPill = el("span","answeredpill"); wrap.append(ansPill);
  const lab=el("label"); lab.append(el("span","qn",it.id+". "), document.createTextNode(it.q));
  wrap.append(lab);
  const hb=hintBox(it); if(hb) wrap.append(hb);
  if(it.img) appendImg(wrap,it.img);
  const row=el("div","numrow");
  const inp=document.createElement("input"); inp.type="text"; inp.id="q"+it.id; inp.inputMode="decimal"; inp.autocomplete="off"; lab.htmlFor=inp.id; bindValue(inp,it.id,sec.id);
  row.append(inp); if(it.unit) row.append(el("span","unit",it.unit));
  wrap.append(row);
  const note=el("div","numnote"); note.hidden=true; note.textContent="Check: numbers only";
  inp.addEventListener("input", ()=>updateNumNote(inp,note));
  numNotes.push({inp,note});
  wrap.append(note);
  const f=fb(); wrap.append(f);
  const exp=explainBox(it); if(exp) wrap.append(exp);
  if(it.working) wrap.append(workingBox(it));
  markers.push(()=>{ const uv=parseNum(cur().answers[it.id]);
    const ok = uv!=null && it.ans.some(a=>{ const av=parseNum(a); return av!=null && Math.abs(av-uv)<1e-9; });
    inp.classList.toggle("right",ok); inp.classList.toggle("wrong",!ok);
    const ans = it.ans[0]+(it.unit?" "+it.unit:"");
    setFb(f, ok, "Answer: "+ans);
    if(exp) exp.hidden=ok;
    return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:ans}; });
  markQuestionCard(wrap, it.id, ansPill);
  return wrap;
}
function textQ(sec,it){
  const m=it.m||1, topic=it.topic||sec.title;
  const wrap=el("div","q"); const ansPill = el("span","answeredpill"); wrap.append(ansPill);
  const lab=el("label"); lab.append(el("span","qn",it.id+". "), document.createTextNode(it.q));
  wrap.append(lab);
  const hb=hintBox(it); if(hb) wrap.append(hb);
  if(it.img) appendImg(wrap,it.img);
  const ta=document.createElement("textarea"); ta.id="q"+it.id; ta.rows=2; lab.htmlFor=ta.id; bindValue(ta,it.id,sec.id);
  wrap.append(ta);
  if(it.t==="key"){
    const f=fb(); wrap.append(f);
    const exp=explainBox(it); if(exp) wrap.append(exp);
    const escRe=(s)=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    markers.push(()=>{ const raw=norm(cur().answers[it.id]); const v=it.cs?raw:raw.toLowerCase();
      const ok=it.keys.some(k=>new RegExp("\\b"+escRe(k)+"\\b").test(v));
      /* For a case-sensitive key: if the word is right but the case is wrong, say so specifically
         (rather than just "wrong") and flag it so the results can tally capital-letter slips. */
      const capsLost = !ok && it.cs && it.keys.some(k=>new RegExp("\\b"+escRe(k.toLowerCase())+"\\b").test(raw.toLowerCase()));
      /* A 24-hour-clock key item (model is "HH:MM") where the pupil typed a bare number (e.g. "7"
         instead of "08:40") gets a format nudge instead of just the model answer. */
      const bareNumber = !ok && !capsLost && /^\d+$/.test(raw) && /^\d{1,2}:\d{2}$/.test(it.model);
      ta.classList.toggle("right",ok); ta.classList.toggle("wrong",!ok);
      const msg = capsLost ? "Right word, but it needs a capital letter: "+it.model
        : bareNumber ? "Write it in 24-hour clock, e.g. "+it.model+"."
        : "Answer: "+it.model;
      setFb(f, ok, msg);
      if(exp) exp.hidden=ok;
      return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:it.model,capsLost}; });
  } else {
    if(it.working) wrap.append(workingBox(it));
    const pm=el("div","pmark noprint"); pm.hidden=true;
    const ma=el("div"); ma.append(el("b",null,"Model answer: "), document.createTextNode(it.model));
    pm.append(ma);
    const expEl=explainBox(it); if(expEl) pm.append(expEl);
    if(it.guide){ const gd=el("div","muted"); gd.append(el("b",null,"Marking guide: "), document.createTextNode(it.guide)); pm.append(gd); }
    const finalNote = it.final ? el("div","finalcheck") : null; if(finalNote) pm.append(finalNote);
    const r=el("div","row");
    const buttons=[];
    if(m<=1){
      const yes=el("button",null,"Give the mark"); yes.type="button"; const no=el("button",null,"No mark"); no.type="button";
      r.append(el("span",null,"Parent marks:"),yes,no); buttons.push([0,no],[1,yes]);
    } else {
      r.append(el("span",null,"Parent marks (0–"+m+"):"));
      for(let v=0; v<=m; v++){ const b=el("button",null,String(v)); b.type="button"; r.append(b); buttons.push([v,b]); }
    }
    pm.append(r); wrap.append(pm);
    const setP=(val)=>{ cur().parent[it.id]=val; writeStore(); renderResults(); };
    buttons.forEach(([v,b])=>b.addEventListener("click",()=>setP(v)));
    markers.push(()=>{ pm.hidden=false; const v=cur().parent[it.id];
      buttons.forEach(([val,b])=>b.setAttribute("aria-pressed",String(v===val)));
      ta.classList.toggle("right",v===m); ta.classList.toggle("wrong",v!=null && v<m);
      if(expEl) expEl.hidden = (v==null || v>=m);
      if(finalNote){ const res=finalCheckMsg(it, cur().answers[it.id]); finalNote.textContent=res.text; finalNote.className="finalcheck "+res.state; }
      return {got:v==null?0:v,max:m,sec:sec.id,topic,label:it.id,answer:it.model,pending:v==null}; });
  }
  markQuestionCard(wrap, it.id, ansPill);
  return wrap;
}
function tfQ(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q"); const ansPill = el("span","answeredpill"); wrap.append(ansPill);
  wrap.append(el("div",null,it.id+". "+it.q));
  const keys=[];
  it.parts.forEach(pt=>{
    keys.push(pt.id);
    const fs=el("fieldset"); const lg=el("legend",null,pt.s); lg.style.fontWeight="400"; fs.append(lg);
    const opts=el("div","opts");
    [["T","True"],["F","False"]].forEach(([v,txt])=>{ const lab=el("label"); const r=document.createElement("input"); r.type="radio"; r.name="q"+pt.id; r.value=v; r.id="q"+pt.id+v; bindValue(r,pt.id,sec.id); lab.htmlFor=r.id; lab.append(r,document.createTextNode(txt)); opts.append(lab); });
    const f=fb(); fs.append(opts,f); wrap.append(fs);
    markers.push(()=>{ const ok=cur().answers[pt.id]===pt.a; setFb(f,ok,"Answer: "+(pt.a==="T"?"True":"False"));
      return {got:ok?1:0,max:1,sec:sec.id,topic,label:pt.id,answer:pt.a==="T"?"True":"False"}; });
  });
  markQuestionCard(wrap, keys, ansPill);
  return wrap;
}
function orderQ(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q"); const ansPill = el("span","answeredpill"); wrap.append(ansPill);
  wrap.append(el("div",null,it.id+". "+it.q));
  const g=el("div","ord"); const n=it.ev.length;
  const selects=[]; const keys=it.ev.map(e=>e.id);
  it.ev.forEach(e=>{ const lab=el("label",null,e.s); const s=document.createElement("select"); s.id="q"+e.id; lab.htmlFor=s.id;
    const opts=[""]; for(let v=1;v<=n;v++) opts.push(String(v));
    opts.forEach(v=>{ const o=el("option",null,v||"–"); o.value=v; s.append(o); }); bindValue(s,e.id,sec.id); g.append(lab,s); selects.push([e,s]); });
  const f=fb(); wrap.append(g,f);
  const answerMsg = "Answer: "+it.ev.map(e=>e.a+" – "+e.s).sort().join(" · ");
  if(it.partial){
    // Partial credit: 1 mark per sentence placed in its correct position (ignores `m`).
    markers.push(()=>{ let got=0;
      selects.forEach(([e,s])=>{ const ok=cur().answers[e.id]===e.a; s.classList.toggle("right",ok); s.classList.toggle("wrong",!ok); if(ok) got++; });
      setFb(f, got===n, got+" of "+n+" correct. "+answerMsg);
      return {got,max:n,sec:sec.id,topic,label:it.id,answer:it.ev.map(e=>e.a+"-"+e.s).join(", ")}; });
  } else {
    const m=it.m||1;
    markers.push(()=>{ const ok=it.ev.every(e=>cur().answers[e.id]===e.a); setFb(f,ok,answerMsg);
      return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:it.ev.map(e=>e.a+"-"+e.s).join(", ")}; });
  }
  markQuestionCard(wrap, keys, ansPill);
  return wrap;
}

/* ---------- Listening: speechSynthesis with a parent-readable script fallback ---------- */
function getVoices(){
  return new Promise(res=>{
    if(!("speechSynthesis" in window)) return res([]);
    const v = speechSynthesis.getVoices(); if(v.length) return res(v);
    speechSynthesis.onvoiceschanged = ()=>res(speechSynthesis.getVoices());
    setTimeout(()=>res(speechSynthesis.getVoices()), 1000);
  });
}
async function speak(text, lang, slow){
  if(!("speechSynthesis" in window)) return false;
  try{
    speechSynthesis.cancel();
    const voices = await getVoices();
    const want = (lang||"en-GB").toLowerCase();
    const voice = voices.find(v=>v.lang.toLowerCase()===want) || voices.find(v=>v.lang.toLowerCase().startsWith(want.split("-")[0])) || null;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang; if(voice) u.voice = voice; u.rate = slow ? 0.75 : 1;
    speechSynthesis.speak(u);
    return true;
  }catch(e){ return false; }
}
function listenBlock(sec,it){
  const wrap=el("div","q listen");
  if(it.title) wrap.append(el("h3",null,it.title));
  const bar=el("div","listen-controls noprint");
  const playBtn=el("button",null,"▶ Play recording"); playBtn.type="button";
  const practiceLab=el("label",null,""); const practiceCb=document.createElement("input"); practiceCb.type="checkbox";
  practiceLab.append(practiceCb, document.createTextNode(" Practice mode (unlimited plays)"));
  const slowLab=el("label",null,""); const slowCb=document.createElement("input"); slowCb.type="checkbox";
  slowLab.append(slowCb, document.createTextNode(" Slower voice"));
  const playsSpan=el("span","muted");
  bar.append(playBtn, practiceLab, slowLab, playsSpan);
  const details=el("details","noprint"); const sum=el("summary",null,"Script for parent"); const scriptP=el("p",null,it.script);
  details.append(sum,scriptP);
  wrap.append(bar, details);
  const childWrap=el("div","listen-items");
  (it.items||[]).forEach(child=>childWrap.append(renderItem(sec,child)));
  wrap.append(childWrap);
  const limit = it.playLimit||2;
  function updateUI(){
    const used = cur().plays[it.id]||0;
    playsSpan.textContent = practiceCb.checked ? "Practice mode: unlimited plays" : (Math.max(0,limit-used))+" of "+limit+" plays left";
    playBtn.disabled = !!cur().submitted || (!practiceCb.checked && used>=limit);
  }
  playBtn.addEventListener("click", ()=>{
    if(!practiceCb.checked){ cur().plays[it.id]=(cur().plays[it.id]||0)+1; writeStore(); }
    updateUI();
    speak(it.script, it.voiceLang, slowCb.checked);
  });
  practiceCb.addEventListener("change", updateUI);
  wrap._listenUpdate = updateUI;
  updateUI();
  return wrap;
}

/* ---------- Dispatch one item to its renderer (used for sections and for a listen item's children) ---------- */
function renderItem(sec,it){
  switch(it.t){
    case "mcq": case "picture-mcq": return mcq(sec,it);
    case "cloze": return clozeBlock(sec,it);
    case "edit": return editBlock(sec,it);
    case "tf": return tfQ(sec,it);
    case "order": return orderQ(sec,it);
    case "num": return numQ(sec,it);
    case "listen": return listenBlock(sec,it);
    default: return textQ(sec,it); // key, parent
  }
}

if(PAPER.lang){ paper.lang = PAPER.lang; if(/^zh/i.test(PAPER.lang)) paper.classList.add("cjk"); }

/* ---------- Build every section (all are in the DOM; only the current one is shown — see showSection) ---------- */
const sectionMeta = []; // {sec, el, letter}
SECTIONS.forEach((sec,i)=>{
  const s=el("section"); s.setAttribute("aria-labelledby","h"+sec.id); s.dataset.sec=sec.id; s.style.cssText="display:flex;flex-direction:column;gap:22px";
  const head=el("div","sec-head"); const h=el("h2",null,sec.title); h.id="h"+sec.id; head.append(h, el("span","marks",sec.marks+" marks")); s.append(head);
  if(sec.titleEn) s.append(el("p","inst",sec.titleEn));
  s.append(el("p","inst",sec.inst));
  if(sec.instEn) s.append(el("p","inst",sec.instEn));
  if(sec.story){ const st=el("article","story"); st.append(el("h3",null,sec.story.title)); sec.story.p.forEach(t=>st.append(el("p",null,t))); s.append(st); }
  sec.items.forEach(it=>s.append(renderItem(sec,it)));
  paper.append(s);
  sectionMeta.push({sec, el:s, letter:String.fromCharCode(65+i)});
});

/* ---------- Progress: every bound control's distinct answer key, in build (document) order ---------- */
const answerKeys = controls.reduce((set,c)=>set.add(c.dataset.key),new Set());
const orderedAnswerItems = []; // [{key, sec, el}] — first control for each distinct key, in order
(()=>{ const seen=new Set();
  controls.forEach(c=>{ if(seen.has(c.dataset.key)) return; seen.add(c.dataset.key); orderedAnswerItems.push({key:c.dataset.key, sec:c.dataset.sec, el:c}); }); })();
const sectionKeys = new Map(); // sec.id -> Set of answer keys in that section
sectionMeta.forEach(({sec})=>sectionKeys.set(sec.id, new Set(controls.filter(c=>c.dataset.sec===sec.id).map(c=>c.dataset.key))));

/* An "Exam mode (no hints)" option, offered only on a paper that actually has hints. Ticked by
   default on a full paper, unticked on a drill (see EXAM_DEFAULT); saved with the attempt. */
HAS_HINTS = hintBoxes.length>0;

/* ---------- Section navigation: one section shown at a time, desktop sidebar / phone bottom bar ---------- */
let currentSectionId = SECTIONS[0] ? SECTIONS[0].id : null;
const letterToSec = new Map(sectionMeta.map(m=>[m.letter.toLowerCase(), m.sec.id]));
(()=>{ const h=(location.hash||"").match(/^#section-([a-z])$/i); if(h){ const id=letterToSec.get(h[1].toLowerCase()); if(id) currentSectionId=id; } })();

function sectionProgress(secId){
  const keys=sectionKeys.get(secId); const answered=[...keys].filter(k=>norm(cur().answers[k])).length;
  return {answered, total:keys.size};
}
function sectionScore(secId){
  return lastSectionScores[secId] || {got:0,max:0}; // populated by renderResults() after Finish
}
let lastSectionScores = {};

function buildNavButton(meta, compact){
  const btn=el("button","secnavbtn"+(compact?" secnavbtn-compact":"")); btn.type="button";
  btn.dataset.sec=meta.sec.id;
  const tile=el("span","lettertile",meta.letter);
  btn.append(tile);
  const info=el("span","secnavinfo");
  if(!compact) info.append(el("span","secname",meta.sec.title));
  const count=el("span","seccount");
  info.append(count);
  btn.append(info);
  const tick=el("span","sectick"); tick.hidden=true; tick.setAttribute("aria-hidden","true"); btn.append(tick);
  btn.addEventListener("click",()=>showSection(meta.sec.id));
  return {btn, tile, count, tick};
}
sectionMeta.forEach(meta=>{
  meta.desktop = buildNavButton(meta, false);
  meta.phone = buildNavButton(meta, true);
  sectionNavDesktop.append(meta.desktop.btn);
  phoneNavButtons.append(meta.phone.btn);
});
const jumpDesktop = el("button","jumpbtn","Jump to next unanswered ↓"); jumpDesktop.type="button";
const jumpNote = el("p","muted jumpnote","Answers save as you go. You can leave and come back.");
sectionNavDesktop.append(jumpDesktop, jumpNote);

const prevBtn = el("button","prevsection","← Previous section"); prevBtn.type="button";
const nextBtn = el("button","nextsection","Next section →"); nextBtn.type="button";
sectionFoot.append(prevBtn, nextBtn);

function findNextUnanswered(){
  for(const item of orderedAnswerItems){ if(!norm(cur().answers[item.key])) return item; }
  return null;
}
function goToItem(item){
  if(!item) return;
  const switchNeeded = item.sec !== currentSectionId;
  if(switchNeeded || cur().showAll) showSection(item.sec);
  requestAnimationFrame(()=>{ item.el.scrollIntoView({behavior:"smooth",block:"center"}); item.el.focus({preventScroll:true}); });
}
jumpDesktop.addEventListener("click", ()=>goToItem(findNextUnanswered()));
phoneNextBtn.addEventListener("click", ()=>goToItem(findNextUnanswered()));
prevBtn.addEventListener("click", ()=>{ const i=SECTIONS.findIndex(s=>s.id===currentSectionId); if(i>0) showSection(SECTIONS[i-1].id); });
nextBtn.addEventListener("click", ()=>{ const i=SECTIONS.findIndex(s=>s.id===currentSectionId); if(i<SECTIONS.length-1) showSection(SECTIONS[i+1].id); });

function showSection(id, opts){
  currentSectionId = id;
  const showAll = cur().showAll;
  sectionMeta.forEach(meta=>{ meta.el.hidden = !showAll && meta.sec.id!==id; });
  if(!showAll) history.replaceState(null,"","#section-"+letterFor(id));
  updateSectionNavUI();
  const i=SECTIONS.findIndex(s=>s.id===id);
  prevBtn.hidden = showAll || i<=0;
  nextBtn.hidden = showAll || i>=SECTIONS.length-1;
  sectionFoot.hidden = showAll;
  if(!(opts&&opts.noScroll)) papermain.scrollIntoView({behavior:"smooth",block:"start"});
}
function letterFor(id){ const m=sectionMeta.find(m=>m.sec.id===id); return m?m.letter.toLowerCase():"a"; }

function updateSectionNavUI(){
  const submitted = cur().submitted;
  sectionMeta.forEach(meta=>{
    const isCurrent = meta.sec.id===currentSectionId && !cur().showAll;
    [meta.desktop, meta.phone].forEach(ui=>{
      ui.btn.classList.toggle("current", isCurrent);
      ui.btn.setAttribute("aria-current", isCurrent? "true":"false");
      if(submitted){
        const sc=sectionScore(meta.sec.id);
        ui.count.textContent = sc.got+"/"+sc.max;
        ui.tile.classList.toggle("filled", isCurrent);
        ui.tick.hidden=true;
      } else {
        const p=sectionProgress(meta.sec.id);
        ui.count.textContent = p.answered+"/"+p.total;
        const complete = p.total>0 && p.answered===p.total;
        ui.tick.hidden = !complete;
        ui.tile.classList.toggle("filled", isCurrent);
        ui.btn.classList.toggle("complete", complete);
      }
    });
  });
}

/* ---------- Progress bar in the top bar + phone subtitle + bottom edge strip ---------- */
function updateProgress(){
  const answered=[...answerKeys].filter(k=>norm(cur().answers[k])).length, total=answerKeys.size;
  const pct = total ? Math.round(100*answered/total) : 0;
  progressFill.style.width = pct+"%";
  progressText.textContent = answered+" / "+total;
  topbarBottomfill.style.width = pct+"%";
  const s=cur();
  let desktopSub = s.name+" · started "+fmtDateShort(s.created);
  if(HAS_HINTS && s.examMode) desktopSub += " · exam mode on";
  subDesktop.textContent = desktopSub;
  let phoneSub = answered+" of "+total+" answered";
  if(s.timerRemaining!=null) phoneSub += " · "+fmtTime(s.timerRemaining)+" left";
  subPhone.textContent = phoneSub;
  cardQuestionRefreshers.forEach(r=>r());
  updateSectionNavUI();
}

/* ---------- Apply a session to the page ---------- */
function applySession(){
  const s=cur();
  controls.forEach(c=>{ const v=s.answers[c.dataset.key];
    if(c.type==="radio") c.checked = (v===c.value); else c.value = v==null?"":v;
    c.disabled = !!s.submitted; c.classList.remove("right","wrong"); });
  workingControls.forEach(c=>{ const v=s.working[c.dataset.key]; c.value=v==null?"":v; c.disabled=!!s.submitted; });
  numNotes.forEach(({inp,note})=>updateNumNote(inp,note));
  document.querySelectorAll(".fb").forEach(f=>{f.textContent="";f.className="fb";});
  document.querySelectorAll(".pmark").forEach(p=>p.hidden=true);
  document.querySelectorAll(".listen").forEach(w=>{ if(w._listenUpdate) w._listenUpdate(); });
  finishTopBtn.hidden = !!s.submitted; phoneFinishBtn.hidden = !!s.submitted;
  if(examCb) examCb.checked = !!s.examMode;
  if(showAllCb) showAllCb.checked = !!s.showAll;
  updateHintVisibility();
  applyShowAll();
  showSection(currentSectionId, {noScroll:true});
  updateTimerUI();
  renderResults();
  renderAttemptList();
  updateProgress();
}
function applyShowAll(){
  const showAll = cur().showAll;
  sectionNavDesktop.classList.toggle("showall", showAll);
  sectionFoot.hidden = showAll;
  sectionMeta.forEach(meta=>{ meta.el.hidden = !showAll && meta.sec.id!==currentSectionId; });
}

/* ---------- Results ---------- */
function renderResults(){
  const box=results; const s=cur();
  if(!s.submitted){ box.hidden=true; return; }
  const per={}; let total=0, pending=0, pendingMarks=0, firstPendingId=null, capsLost=0; const revisit={};
  const wrongList=[];
  SECTIONS.forEach(sec=>per[sec.id]={got:0,max:sec.marks,title:sec.title});
  markers.forEach(m=>{ const r=m(); if(r.max){ per[r.sec].got+=r.got; total+=r.got;
      if(r.got<r.max && !r.pending && r.label){ const t=r.topic||per[r.sec].title; (revisit[t]=revisit[t]||[]).push(r.label);
        wrongList.push({sec:r.sec, label:r.label}); } }
    if(r.pending){ pending++; pendingMarks+=r.max; if(firstPendingId==null) firstPendingId=r.label; }
    if(r.capsLost) capsLost++; });
  lastSectionScores = per;
  window._wrongList = wrongList; window._reviewIndex = -1;
  s.score = total; s.pendingMarks = pending ? pendingMarks : 0; writeStore(); renderAttemptList();
  box.textContent="";
  box.append(el("div","eyebrow","Results for "+s.name));
  if(pending){
    box.append(el("div","total","Score so far: "+total+" / "+PAPER.total+" ("+pendingMarks+" mark"+(pendingMarks===1?"":"s")+" waiting for a parent to mark)"));
    const goBtn=el("button",null,"Go to first unmarked answer"); goBtn.type="button";
    goBtn.addEventListener("click",()=>{ const item=orderedAnswerItems.find(o=>o.key===firstPendingId);
      if(item){ goToItem(item); const markBtn = item.el.closest(".q").querySelector(".pmark button"); if(markBtn) requestAnimationFrame(()=>markBtn.focus()); } });
    box.append(goBtn);
  } else {
    box.append(el("div","total",total+" / "+PAPER.total));
  }
  const hintIds=Object.keys(s.hints||{}).filter(k=>s.hints[k]);
  if(HAS_HINTS) box.append(el("div","muted", s.examMode ? "Done in exam mode" : "Hints used: "+hintIds.length+(hintIds.length?" ("+hintIds.join(", ")+")":"")));
  if(capsLost) box.append(el("div","muted","Marks lost to capital letters: "+capsLost));
  const tw=el("div","tablewrap"); const t=el("table"); const th=el("tr"); th.append(el("th",null,"Section"), el("th","n","Score")); t.append(th);
  Object.values(per).forEach(p=>{ const tr=el("tr"); tr.append(el("td",null,p.title), el("td","n",p.got+" / "+p.max)); t.append(tr); });
  tw.append(t); box.append(tw);
  const revisitKeys=Object.keys(revisit);
  if(revisitKeys.length){
    const rv=el("div","revisit"); rv.append(el("h3",null,"Questions to revisit"));
    revisitKeys.forEach(k=>{ const d=el("div"); d.append(el("b",null,k+": "), document.createTextNode(revisit[k].join(", "))); rv.append(d); });
    box.append(rv);
  }
  if(wrongList.length){
    const reviewBtn=el("button",null,"Review mistakes ("+wrongList.length+")"); reviewBtn.type="button";
    reviewBtn.addEventListener("click", ()=>{
      window._reviewIndex = (window._reviewIndex+1) % wrongList.length;
      const w = wrongList[window._reviewIndex];
      const item = orderedAnswerItems.find(o=>o.key===w.label) || orderedAnswerItems.find(o=>o.key.startsWith(w.label));
      goToItem(item);
      reviewBtn.textContent = "Review mistakes ("+(window._reviewIndex+1)+" of "+wrongList.length+")";
    });
    box.append(reviewBtn);
  }
  const r=el("div","row"); const again=el("button","btn-fill","Start a new attempt"); again.type="button";
  again.addEventListener("click",()=>openNew(s.name)); r.append(again); box.append(r);
  box.hidden=false;
  updateSectionNavUI();
}
/* ---------- More menu ---------- */
const moreHeader = el("div","moremenu-head");
const moreCloseBtn = el("button","moreclose","Close"); moreCloseBtn.type="button";
moreHeader.append(el("h2",null,"More"), moreCloseBtn);
const attemptListEl = el("div","attemptlist");
const newBtn = el("button",null,"+ New attempt"); newBtn.type="button";
const newBox = el("div","confirm newbox"); newBox.hidden=true;
const newNameLab = el("label",null,"Pupil's name for this attempt"); const newName=document.createElement("input"); newName.type="text"; newName.maxLength=40; newName.autocomplete="off"; newName.id="newNameInput"; newNameLab.htmlFor=newName.id;
const newRow=el("div","row"); const newOk=el("button","btn-fill","Start"); newOk.type="button"; const newCancel=el("button",null,"Cancel"); newCancel.type="button";
newRow.append(newOk,newCancel); newBox.append(newNameLab,newName,newRow);

const menuDivider = ()=>el("div","menudivider");
const timerMenuRow = el("div","menurow timer-menu-row"); timerMenuRow.hidden=true;
const timerMenuBtn = el("button",null,"Pause timer"); timerMenuBtn.type="button";
timerMenuRow.append(timerMenuBtn);

const examRow = el("label","menurow examrow"); examRow.hidden=true;
examCb = document.createElement("input"); examCb.type="checkbox";
examRow.append(examCb, document.createTextNode(" Exam mode (no hints)"));

const showAllRow = el("label","menurow");
const showAllCb = document.createElement("input"); showAllCb.type="checkbox";
showAllRow.append(showAllCb, document.createTextNode(" Show all sections (booklet view)"));

const printPaperBtn = el("button",null,"Print question paper"); printPaperBtn.type="button";
const printKeyBtn = el("button",null,"Print answer key (parents)"); printKeyBtn.type="button";
const exportBtn = el("button",null,"Back up attempts"); exportBtn.type="button";
const importLabel = el("label","filepick"); importLabel.append(el("span",null,"Restore backup"));
const importFile = document.createElement("input"); importFile.type="file"; importFile.id="importFile"; importFile.accept="application/json,.json";
importLabel.append(importFile);
const delBtn = el("button","danger","Delete this attempt…"); delBtn.type="button";

const confirmBox = el("div","confirm"); confirmBox.hidden=true; confirmBox.setAttribute("role","alertdialog"); confirmBox.setAttribute("aria-labelledby","confirmText");
const confirmText = el("span",null,""); confirmText.id="confirmText";
const confirmRow = el("div","row"); const confirmYes=el("button","danger",""); confirmYes.type="button"; const confirmNo=el("button",null,"Cancel"); confirmNo.type="button";
confirmRow.append(confirmYes,confirmNo); confirmBox.append(confirmText,confirmRow);

const saveNoteEl = el("div","notice","Answers save automatically in this browser. Nothing is sent anywhere.");

moreMenu.append(moreHeader,
  el("h3","menu-sub","Attempt"), attemptListEl, newBtn, newBox,
  menuDivider(), timerMenuRow, examRow, showAllRow,
  menuDivider(), printPaperBtn, printKeyBtn,
  menuDivider(), exportBtn, importLabel,
  menuDivider(), delBtn,
  saveNoteEl, confirmBox);

let moreOpenerFocus=null;
function openMore(){
  moreOpenerFocus = document.activeElement;
  moreMenu.hidden=false; backdrop.hidden=false; moreBtn.setAttribute("aria-expanded","true");
  const first = moreMenu.querySelector("button, input, a"); if(first) first.focus();
  document.addEventListener("keydown", onMoreKeydown);
}
function closeMore(){
  moreMenu.hidden=true; backdrop.hidden=true; moreBtn.setAttribute("aria-expanded","false");
  document.removeEventListener("keydown", onMoreKeydown);
  if(moreOpenerFocus) moreOpenerFocus.focus();
}
function onMoreKeydown(e){
  if(e.key==="Escape"){ closeMore(); return; }
  if(e.key!=="Tab") return;
  const focusable=[...moreMenu.querySelectorAll("button, input, a, select, textarea")].filter(x=>!x.disabled && x.offsetParent!==null);
  if(!focusable.length) return;
  const first=focusable[0], last=focusable[focusable.length-1];
  if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
  else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
}
moreBtn.addEventListener("click", ()=> moreMenu.hidden ? openMore() : closeMore());
moreCloseBtn.addEventListener("click", closeMore);
backdrop.addEventListener("click", closeMore);

function renderAttemptList(){
  attemptListEl.textContent="";
  Object.values(store.sessions).sort((a,b)=>a.created<b.created?1:-1).forEach(s=>{
    const d=new Date(s.created);
    const scoreLabel = s.score!=null ? (s.score+"/"+PAPER.total+(s.pendingMarks?" + "+s.pendingMarks+" to mark":"")) : "marked";
    const label=s.name+" · "+d.toLocaleDateString("en-SG",{day:"numeric",month:"short"})+" "+d.toLocaleTimeString("en-SG",{hour:"numeric",minute:"2-digit"})+(s.submitted?" · "+scoreLabel:" · in progress");
    const btn=el("button","attemptitem"+(s.id===store.current?" current":""), label); btn.type="button";
    btn.setAttribute("aria-current", String(s.id===store.current));
    btn.addEventListener("click", ()=>{ store.current=s.id; writeStore(); applySession(); closeMore(); });
    attemptListEl.append(btn);
  });
}

function openNew(pref){ if(moreMenu.hidden) openMore(); newBox.hidden=false; newName.value=pref||""; newName.focus(); }
newBtn.addEventListener("click",()=>openNew(cur().name==="Pupil"?"":cur().name));
newCancel.addEventListener("click",()=>{ newBox.hidden=true; });
function startNew(){ const s=makeSession(newName.value.trim()); store.sessions[s.id]=s; store.current=s.id; writeStore(); newBox.hidden=true; currentSectionId=SECTIONS[0]?SECTIONS[0].id:null; applySession(); closeMore(); papermain.scrollIntoView({behavior:"smooth",block:"start"}); }
newOk.addEventListener("click",startNew);
newName.addEventListener("keydown",e=>{ if(e.key==="Enter") startNew(); });

let pendingConfirm=null;
function ask(text,fn){ confirmText.textContent=text; pendingConfirm=fn; confirmBox.hidden=false; confirmYes.textContent="Yes, delete"; confirmNo.textContent="Cancel"; confirmNo.focus(); }
confirmNo.addEventListener("click",()=>{ confirmBox.hidden=true; pendingConfirm=null; });
confirmYes.addEventListener("click",()=>{ confirmBox.hidden=true; if(pendingConfirm) pendingConfirm(); pendingConfirm=null; });
delBtn.addEventListener("click",()=>ask("Delete this attempt by "+cur().name+"? This cannot be undone.",()=>{
  delete store.sessions[store.current]; const ids=Object.keys(store.sessions);
  if(ids.length) store.current=ids[0]; else { const s=makeSession(""); store.sessions[s.id]=s; store.current=s.id; }
  writeStore(); applySession(); }));

/* Backup / restore as a file on this device */
exportBtn.addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(store,null,2)],{type:"application/json"});
  const stamp=new Date().toISOString().replace(/[:.]/g,"-");
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=PAPER.id+"-attempts-"+stamp+".json";
  document.body.append(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1000);
});
importFile.addEventListener("change",e=>{
  const file=e.target.files&&e.target.files[0]; if(!file) return;
  if(file.size>2_000_000){ setSaveNote("That file is too large to be a backup from this page."); return; }
  const rd=new FileReader();
  rd.onload=()=>{ try{
      const data=JSON.parse(rd.result); if(!data||typeof data.sessions!=="object") throw 0;
      let n=0;
      Object.values(data.sessions).forEach(s=>{ if(!s||typeof s!=="object") return;
        const clean={id:uid(),name:String(s.name||"Pupil").slice(0,40),created:String(s.created||new Date().toISOString()),
          answers:{},parent:{},working:{},plays:{},hints:{},pendingMarks:0,submitted:!!s.submitted};
        if(s.answers&&typeof s.answers==="object") Object.keys(s.answers).forEach(k=>{ if(/^w?\d{1,2}[abc]?$/.test(k)) clean.answers[k]=String(s.answers[k]).slice(0,500); });
        if(s.parent&&typeof s.parent==="object") Object.keys(s.parent).forEach(k=>{ if(/^\d{1,2}[ab]?$/.test(k)){ const v=Number(s.parent[k]); clean.parent[k]=Number.isFinite(v)&&v>=0?v:0; } });
        if(s.working&&typeof s.working==="object") Object.keys(s.working).forEach(k=>{ if(/^w\d{1,2}[ab]?$/.test(k)) clean.working[k]=String(s.working[k]).slice(0,2000); });
        if(s.plays&&typeof s.plays==="object") Object.keys(s.plays).forEach(k=>{ const v=Number(s.plays[k]); if(Number.isFinite(v)) clean.plays[k]=v; });
        if(s.hints&&typeof s.hints==="object") Object.keys(s.hints).forEach(k=>{ if(/^\d{1,2}[ab]?$/.test(k) && s.hints[k]) clean.hints[k]=true; });
        if(Number.isFinite(Number(s.pendingMarks))) clean.pendingMarks=Math.max(0,Number(s.pendingMarks));
        if(typeof s.score==="number") clean.score=s.score;
        if(typeof s.examMode==="boolean") clean.examMode=s.examMode;
        if(Number.isFinite(Number(s.timerRemaining))) clean.timerRemaining=Number(s.timerRemaining);
        store.sessions[clean.id]=clean; n++; });
      writeStore(); applySession(); setSaveNote("Restored "+n+" attempt"+(n===1?"":"s")+".");
    }catch(err){ setSaveNote("That file is not a backup from this page."); }
    e.target.value=""; };
  rd.readAsText(file);
});

/* ---------- Finish ---------- */
function handleFinishClick(){
  const blanks=[...answerKeys].filter(k=>!norm(cur().answers[k])).length;
  const stray=numNotes.filter(({inp})=>inp.value.trim() && parseNum(inp.value)==null).length;
  const msgs=[];
  if(blanks) msgs.push("You left "+blanks+" answer"+(blanks===1?"":"s")+" blank.");
  if(stray) msgs.push(stray+" answer"+(stray===1?" has":"s have")+" extra letters – fix "+(stray===1?"it":"them")+"?");
  if(msgs.length){ confirmText.textContent=msgs.join(" ")+" Mark the paper anyway?"; confirmYes.textContent="Mark it now"; confirmNo.textContent="Keep working";
    pendingConfirm=submit; confirmBox.hidden=false;
    if(moreMenu.hidden) openMore();
  } else submit();
}
finishTopBtn.addEventListener("click", handleFinishClick);
phoneFinishBtn.addEventListener("click", handleFinishClick);
function submit(){ const s=cur(); s.submitted=true; s.finished=new Date().toISOString(); writeStore(); applySession();
  results.focus(); results.scrollIntoView({behavior:"smooth",block:"start"}); }

/* ---------- Show all sections (booklet view) ---------- */
showAllCb.addEventListener("change", ()=>{ cur().showAll=showAllCb.checked; writeStore(); applyShowAll(); updateSectionNavUI(); });

/* ---------- Exam mode ---------- */
if(HAS_HINTS){ examRow.hidden=false; examCb.addEventListener("change", ()=>{ cur().examMode=examCb.checked; writeStore(); updateHintVisibility(); updateProgress(); }); }

/* ---------- Optional countdown timer (persists across reloads; never auto-submits) ---------- */
let timerId=null, timerRunningUI=false;
function updateTimerUI(){
  if(!PAPER.durationMin) return;
  const s=cur();
  timerBtn.hidden=false; timerMenuRow.hidden=false;
  timerBtn.textContent=fmtTime(s.timerRemaining);
  timerBtn.setAttribute("aria-label", "Timer, "+fmtTime(s.timerRemaining)+" left. Press to "+(timerRunningUI?"pause":"resume")+".");
  timerBtn.classList.toggle("running", timerRunningUI);
  timerMenuBtn.textContent = timerRunningUI ? "Pause timer" : "Resume timer";
  if(s.timerRemaining<=0) timerBtn.classList.add("timeup");
}
function stopTimerInterval(){ if(timerId){ clearInterval(timerId); timerId=null; } timerRunningUI=false; }
function startTimerInterval(){
  if(timerId || cur().submitted) return;
  timerRunningUI=true;
  timerId=setInterval(()=>{ const s=cur(); if(s.timerRemaining>0){ s.timerRemaining--; writeStore(); updateTimerUI(); updateProgress();
      if(s.timerRemaining===0){ stopTimerInterval(); updateTimerUI(); } } else { stopTimerInterval(); } },1000);
  updateTimerUI();
}
function toggleTimer(){ if(timerRunningUI) stopTimerInterval(); else startTimerInterval(); updateTimerUI(); }
timerBtn.addEventListener("click", toggleTimer);
timerMenuBtn.addEventListener("click", toggleTimer);

/* ---------- Printing: blank question paper and a separate answer key ---------- */
function printLines(n){ const d=el("div","lines"); for(let i=0;i<n;i++) d.append(el("span")); return d; }
function printTable(heads, rows){ const t=el("table"); const tr=el("tr"); heads.forEach(h=>tr.append(el("th",null,h))); t.append(tr);
  rows.forEach(r=>{ const row=el("tr"); r.forEach((c)=>{ const td=el("td",c==="__fill"?"fill":null,c==="__fill"?"":c); row.append(td); }); t.append(row); }); return t; }
function printItem(it, paperDoc, keyRows){
  const m = it.m||1;
  const hintNote = it.hint ? " | Hint: "+it.hint : ""; // hints are answer-key only, never on the question paper
  const explainNote = it.explain ? " | Explain: "+it.explain : "";
  if(it.t==="mcq" || it.t==="picture-mcq"){
    const q=el("div","pq"); const p=el("p"); p.append(el("b",null,it.id+". "), document.createTextNode(it.q+" "), el("span","bracket","(    )"));
    q.append(p); if(it.img) appendImg(q,it.img,"pimg");
    const o=el("div","opts"); it.o.forEach((t,j)=>{ const sp=el("span",null,"("+(j+1)+") "+t); if(it.oImg&&it.oImg[j]) appendImg(sp,it.oImg[j],"poptimg"); o.append(sp); }); q.append(o); paperDoc.append(q);
    keyRows.push([it.id,"("+(it.a+1)+") "+it.o[it.a]+hintNote, String(m)]);
  } else if(it.t==="num"){
    const q=el("div","pq"); const p=el("p"); p.append(el("b",null,it.id+". "), document.createTextNode(it.q+" ("+m+" mark"+(m>1?"s":"")+")"));
    q.append(p); if(it.img) appendImg(q,it.img,"pimg");
    const row=el("div","numline"); row.append(el("span","blank"," "), document.createTextNode(it.unit?" "+it.unit:""));
    q.append(row); if(it.working) q.append(el("div","work")); paperDoc.append(q);
    keyRows.push([it.id, it.ans[0]+(it.unit?" "+it.unit:"")+hintNote+explainNote, String(m)]);
  } else if(it.t==="cloze"){
    const q=el("div","pq"); if(it.title) q.append(el("h3",null,it.title));
    if(it.box){ const b=el("div","pbox"); it.box.forEach(w=>b.append(el("span",null,w))); q.append(b); }
    const p=el("p","ppassage"); it.text.split(/(\{\d+\})/).forEach(part=>{ const mm=part.match(/^\{(\d+)\}$/);
      if(mm){ p.append(el("b",null,"("+mm[1]+") ")); p.append(el("span","blank"," ")); } else p.append(document.createTextNode(part)); });
    q.append(p); paperDoc.append(q);
    Object.keys(it.ans).forEach(n=>keyRows.push([n, it.ans[n].join(" / "), "1"]));
  } else if(it.t==="edit"){
    const q=el("div","pq"); const p=el("p","ppassage");
    it.text.split(/(\[\d+\|[^\]]+\])/).forEach(part=>{ const mm=part.match(/^\[(\d+)\|([^\]]+)\]$/);
      if(mm){ const u=el("u"); u.append(el("b",null,"("+mm[1]+") "+mm[2])); p.append(u); } else p.append(document.createTextNode(part)); });
    q.append(p, printTable(["No.","Correction"], Object.keys(it.ans).map(n=>[n,"__fill"]))); paperDoc.append(q);
    Object.keys(it.ans).forEach(n=>keyRows.push([n, it.ans[n].a[0]+(it.ans[n].cs?" (capital letter)":""), "1"]));
  } else if(it.t==="tf"){
    const q=el("div","pq"); q.append(el("p",null,it.id+". "+it.q+" Write True or False."));
    q.append(printTable(["Sentence","True / False"], it.parts.map(pt=>[pt.s,"__fill"]))); paperDoc.append(q);
    it.parts.forEach(pt=>keyRows.push([pt.s.replace(/^\((\w)\).*/,it.id+"($1)"), pt.a==="T"?"True":"False", "1"]));
  } else if(it.t==="order"){
    const om = it.partial ? it.ev.length : m;
    const q=el("div","pq"); q.append(el("p",null,it.id+". "+it.q));
    q.append(printTable(["Event","Order"], it.ev.map(e=>[e.s,"__fill"]))); paperDoc.append(q);
    const note = it.partial ? " (1 mark per sentence in the correct position)" : "";
    keyRows.push([it.id, it.ev.slice().sort((a,b)=>a.a-b.a).map(e=>e.a+". "+e.s).join("  ")+note, String(om)]);
  } else if(it.t==="listen"){
    const q=el("div","pq"); if(it.title) q.append(el("h3",null,it.title));
    q.append(el("p","inst","(Listening passage. See the answer key for the script to read aloud.)")); paperDoc.append(q);
    keyRows.push(["Script ("+(it.title||it.id||"")+")", it.script, ""]);
    (it.items||[]).forEach(child=>printItem(child, paperDoc, keyRows));
  } else { /* key and parent: written answers */
    const q=el("div","pq"); const p=el("p"); p.append(el("b",null,it.id+". "), document.createTextNode(it.q+" ("+m+" mark"+(m>1?"s":"")+")"));
    q.append(p); if(it.img) appendImg(q,it.img,"pimg");
    q.append(printLines(it.t==="key"?1:2)); if(it.working) q.append(el("div","work")); paperDoc.append(q);
    const guide = it.guide ? " — Marking guide: "+it.guide
      : (it.t==="parent" && m>1) ? " — Marking guide: award part marks for a partly correct answer; "+m+" marks for a full, accurate answer" : "";
    keyRows.push([it.id, it.model+guide+hintNote+explainNote, String(m)]);
  }
}
function buildPrintDocs(){
  const title = CAT.title || document.title;
  const eyebrow = "Primary 3 · " + (SUBJ.name||"");
  const sub = (CAT.marks? CAT.marks+" marks":"") + (CAT.minutes? " · "+fmtDuration(CAT.minutes):"") + (CAT.label? " · "+CAT.label:"");
  const paperDoc = el("div","print-doc"); paperDoc.id="printPaper";
  const keyDoc = el("div","print-doc"); keyDoc.id="printKey";
  const head = (doc, suffix)=>{ doc.append(el("div",null,eyebrow), el("h1",null,title+suffix), el("p","meta",sub)); };
  head(paperDoc,"");
  const pupil=el("div","pupil"); ["Name","Class","Score"].forEach((l,i)=>{ const d=el("div"); d.append(document.createTextNode(l+": "), el("span",null, i===2?" ".repeat(10)+"/ "+PAPER.total:" ")); pupil.append(d); });
  paperDoc.append(pupil);
  head(keyDoc," — Answer Key");
  keyDoc.append(el("p","keynote","For parents. Give this to the pupil only after the paper is finished. Written answers: accept any answer with the same meaning, in a complete sentence with correct tense."));

  SECTIONS.forEach(sec=>{
    const h=el("h2"); h.append(el("span",null,sec.title), el("span",null,"("+sec.marks+" marks)"));
    paperDoc.append(h);
    if(sec.titleEn) paperDoc.append(el("p","inst",sec.titleEn));
    paperDoc.append(el("p","inst",sec.inst));
    if(sec.instEn) paperDoc.append(el("p","inst",sec.instEn));
    keyDoc.append(h.cloneNode(true));
    const keyRows=[];
    if(sec.story){ const st=el("div","story"); st.append(el("h3",null,sec.story.title)); sec.story.p.forEach(t=>st.append(el("p",null,t))); paperDoc.append(st); }
    sec.items.forEach(it=>printItem(it, paperDoc, keyRows));
    keyDoc.append(printTable(["No.","Answer","Marks"], keyRows));
  });
  paperDoc.append(el("p","end","End of paper. Check your answers."));
  document.body.append(paperDoc, keyDoc);
}
function printDoc(which){
  document.documentElement.classList.toggle("print-key", which==="key");
  window.print();
}
window.addEventListener("afterprint",()=>document.documentElement.classList.remove("print-key"));
buildPrintDocs();
if(typeof window.print==="function"){
  printPaperBtn.addEventListener("click",()=>printDoc("paper"));
  printKeyBtn.addEventListener("click",()=>printDoc("key"));
}

if(!SHOW_AD_SLOTS){ ad1.hidden=true; ad2.hidden=true; }

/* ---------- Opening with #new starts a fresh attempt, using the current name (editable) ---------- */
if(location.hash==="#new"){
  history.replaceState(null,"",location.pathname+location.search);
  openNew(cur().name==="Pupil"?"":cur().name);
}

applySession();
if(!storageOK) setSaveNote("Saving is turned off in this browser (private browsing?). Answers will be lost when you close the page.");

let resizeTimer=null;
window.matchMedia("(max-width: 699px)").addEventListener("change", ()=>{ clearTimeout(resizeTimer); resizeTimer=setTimeout(updateProgress,50); });
