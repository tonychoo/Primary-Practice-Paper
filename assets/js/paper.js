/* Practice paper engine: builds the paper from window.PAPER, saves attempts in this browser, marks answers. */
"use strict";
/* Turn on only after an ad network is set up (see README). */
const SHOW_AD_SLOTS = false;
const PAPER = window.PAPER;
const STORE_KEY = PAPER.id;
const SECTIONS = PAPER.sections;

/* ---------- Storage (this browser only) ---------- */
let storageOK = true;
function readStore(){
  try{ const raw = localStorage.getItem(STORE_KEY); if(!raw) return null;
    const s = JSON.parse(raw); if(s && typeof s==="object" && s.sessions) return s; }catch(e){ storageOK = false; }
  return null;
}
function writeStore(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(store)); }
  catch(e){ storageOK = false; document.getElementById("saveNote").textContent = "Saving is turned off in this browser (private browsing?). Answers will be lost when you close the page."; }
}
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
function makeSession(name){ const id=uid(); return {id, name:(name||"Pupil").slice(0,40), created:new Date().toISOString(), answers:{}, parent:{}, working:{}, plays:{}, submitted:false}; }

let store = readStore();
if(!store){ const s=makeSession(""); store={version:1,current:s.id,sessions:{[s.id]:s}}; }
if(!store.sessions[store.current]){ const ids=Object.keys(store.sessions); if(ids.length) store.current=ids[0]; else { const s=makeSession(""); store.sessions[s.id]=s; store.current=s.id; } }
const cur = ()=>{ const s=store.sessions[store.current]; if(!s.working) s.working={}; if(!s.plays) s.plays={}; return s; };

/* ---------- Build the paper (all text set with textContent) ---------- */
const paper = document.getElementById("paper");
const controls = [];        // every bound answer input, for enable/disable and the "blanks left" check
const workingControls = []; // "show your working" boxes: saved, never required, never marked
const markers = [];         // functions that mark one item: return {got,max,sec,topic,label,answer,pending}
function el(tag, cls, text){ const e=document.createElement(tag); if(cls) e.className=cls; if(text!=null) e.textContent=text; return e; }
function fb(){ return el("div","fb"); }

/* Content files write image paths relative to the repo root (e.g. "assets/img/listening/apple.svg"), so
   they work the same regardless of a page's folder depth. BASE is read from this very <script> tag. */
const BASE = (()=>{
  const s=[...document.scripts].find(s=>/assets\/js\/paper\.js(\?.*)?$/.test(s.getAttribute("src")||""));
  const src = s ? s.getAttribute("src") : "assets/js/paper.js";
  return src.replace(/assets\/js\/paper\.js(\?.*)?$/,"");
})();
function resolveImg(src){ return /^(https?:|data:|\/)/.test(src) ? src : BASE+src; }
function appendImg(target, img, cls){ if(!img||!img.src) return; const im=document.createElement("img"); im.src=resolveImg(img.src); im.alt=img.alt||""; im.loading="lazy"; im.className=cls||"qimg"; target.append(im); }

function bindValue(input, key){
  controls.push(input);
  input.dataset.key = key;
  const evt = (input.type==="radio") ? "change" : "input";
  input.addEventListener(evt, ()=>{ if(cur().submitted) return;
    cur().answers[key] = input.type==="radio" ? input.value : input.value; cur().updated=new Date().toISOString(); writeStore(); });
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

function mcq(sec,it){
  const m=it.m||1, topic=it.topic||sec.title;
  const fs=el("fieldset","q"); const lg=el("legend"); lg.append(el("span","qn",it.id+". "), document.createTextNode(it.q)); fs.append(lg);
  if(it.img) appendImg(fs,it.img);
  const opts=el("div","opts"+(it.oImg?" opts-img":""));
  it.o.forEach((txt,j)=>{ const lab=el("label"); const r=document.createElement("input"); r.type="radio"; r.name="q"+it.id; r.value=String(j); r.id="q"+it.id+"_"+j;
    bindValue(r,it.id); lab.htmlFor=r.id; lab.append(r);
    if(it.oImg && it.oImg[j]) appendImg(lab, it.oImg[j], "optimg");
    lab.append(document.createTextNode("("+(j+1)+") "+txt)); opts.append(lab); });
  const f=fb(); fs.append(opts,f);
  markers.push(()=>{ const v=cur().answers[it.id]; const ok=v===String(it.a);
    opts.querySelectorAll("label").forEach((l)=>{ l.classList.remove("right","wrong"); });
    setFb(f, ok, "Answer: ("+(it.a+1)+") "+it.o[it.a]);
    return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:"("+(it.a+1)+") "+it.o[it.a]}; });
  return fs;
}
function setFb(f, ok, msg){ f.textContent = ok ? "Correct" : msg; f.className = "fb "+(ok?"ok":"no"); }

function clozeBlock(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q");
  if(it.title) wrap.append(el("h3",null,it.title));
  if(it.box){ const b=el("div","box"); b.setAttribute("aria-label","Helping words"); it.box.forEach(w=>b.append(el("span",null,w))); wrap.append(b); }
  const p=el("p","passage");
  it.text.split(/(\{\d+\})/).forEach(part=>{
    const m=part.match(/^\{(\d+)\}$/);
    if(!m){ p.append(document.createTextNode(part)); return; }
    const n=m[1]; const inp=document.createElement("input"); inp.type="text"; inp.id="q"+n; inp.autocomplete="off"; inp.spellcheck=false; inp.setAttribute("autocapitalize","off");
    inp.setAttribute("aria-label","Blank "+n); bindValue(inp,n);
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
  return wrap;
}
function editBlock(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q");
  const p=el("p",null); p.style.margin="0";
  it.text.split(/(\[\d+\|[^\]]+\])/).forEach(part=>{
    const m=part.match(/^\[(\d+)\|([^\]]+)\]$/);
    if(!m){ p.append(document.createTextNode(part)); return; }
    const u=el("u"); u.append(el("b",null,"("+m[1]+") "+m[2])); p.append(u); });
  wrap.append(p);
  const g=el("div","grid2");
  Object.keys(it.ans).forEach(n=>{
    const lab=el("label",null,n+"."); const inp=document.createElement("input"); inp.type="text"; inp.id="q"+n; inp.autocomplete="off"; inp.spellcheck=false; inp.setAttribute("autocapitalize","off");
    lab.htmlFor=inp.id; bindValue(inp,n); g.append(lab,inp);
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
  return wrap;
}
function numQ(sec,it){
  const m=it.m||1, topic=it.topic||sec.title;
  const wrap=el("div","q"); const lab=el("label"); lab.append(el("span","qn",it.id+". "), document.createTextNode(it.q));
  wrap.append(lab);
  if(it.img) appendImg(wrap,it.img);
  const row=el("div","numrow");
  const inp=document.createElement("input"); inp.type="text"; inp.id="q"+it.id; inp.inputMode="decimal"; inp.autocomplete="off"; lab.htmlFor=inp.id; bindValue(inp,it.id);
  row.append(inp); if(it.unit) row.append(el("span","unit",it.unit));
  wrap.append(row);
  const f=fb(); wrap.append(f);
  if(it.working) wrap.append(workingBox(it));
  markers.push(()=>{ const uv=parseNum(cur().answers[it.id]);
    const ok = uv!=null && it.ans.some(a=>{ const av=parseNum(a); return av!=null && Math.abs(av-uv)<1e-9; });
    inp.classList.toggle("right",ok); inp.classList.toggle("wrong",!ok);
    const ans = it.ans[0]+(it.unit?" "+it.unit:"");
    setFb(f, ok, "Answer: "+ans);
    return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:ans}; });
  return wrap;
}
function textQ(sec,it){
  const m=it.m||1, topic=it.topic||sec.title;
  const wrap=el("div","q"); const lab=el("label"); lab.append(el("span","qn",it.id+". "), document.createTextNode(it.q));
  if(it.img) appendImg(wrap,it.img);
  const ta=document.createElement("textarea"); ta.id="q"+it.id; ta.rows=2; lab.htmlFor=ta.id; bindValue(ta,it.id);
  wrap.append(lab,ta);
  if(it.t==="key"){
    const f=fb(); wrap.append(f);
    const escRe=(s)=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    markers.push(()=>{ const raw=norm(cur().answers[it.id]); const v=it.cs?raw:raw.toLowerCase();
      const ok=it.keys.some(k=>new RegExp("\\b"+escRe(k)+"\\b").test(v));
      ta.classList.toggle("right",ok); ta.classList.toggle("wrong",!ok); setFb(f,ok,"Answer: "+it.model);
      return {got:ok?m:0,max:m,sec:sec.id,topic,label:it.id,answer:it.model}; });
  } else {
    if(it.working) wrap.append(workingBox(it));
    const pm=el("div","pmark noprint"); pm.hidden=true;
    const ma=el("div"); ma.append(el("b",null,"Model answer: "), document.createTextNode(it.model));
    const r=el("div","row");
    const buttons=[];
    if(m<=1){
      const yes=el("button",null,"Give the mark"); yes.type="button"; const no=el("button",null,"No mark"); no.type="button";
      r.append(el("span",null,"Parent marks:"),yes,no); buttons.push([0,no],[1,yes]);
    } else {
      r.append(el("span",null,"Parent marks (0–"+m+"):"));
      for(let v=0; v<=m; v++){ const b=el("button",null,String(v)); b.type="button"; r.append(b); buttons.push([v,b]); }
    }
    pm.append(ma,r); wrap.append(pm);
    const setP=(val)=>{ cur().parent[it.id]=val; writeStore(); renderResults(); };
    buttons.forEach(([v,b])=>b.addEventListener("click",()=>setP(v)));
    markers.push(()=>{ pm.hidden=false; const v=cur().parent[it.id];
      buttons.forEach(([val,b])=>b.setAttribute("aria-pressed",String(v===val)));
      ta.classList.toggle("right",v===m); ta.classList.toggle("wrong",v!=null && v<m);
      return {got:v==null?0:v,max:m,sec:sec.id,topic,label:it.id,answer:it.model,pending:v==null}; });
  }
  return wrap;
}
function tfQ(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q"); wrap.append(el("div",null,it.id+". "+it.q));
  it.parts.forEach(pt=>{
    const fs=el("fieldset"); const lg=el("legend",null,pt.s); lg.style.fontWeight="400"; fs.append(lg);
    const opts=el("div","opts");
    [["T","True"],["F","False"]].forEach(([v,txt])=>{ const lab=el("label"); const r=document.createElement("input"); r.type="radio"; r.name="q"+pt.id; r.value=v; r.id="q"+pt.id+v; bindValue(r,pt.id); lab.htmlFor=r.id; lab.append(r,document.createTextNode(txt)); opts.append(lab); });
    const f=fb(); fs.append(opts,f); wrap.append(fs);
    markers.push(()=>{ const ok=cur().answers[pt.id]===pt.a; setFb(f,ok,"Answer: "+(pt.a==="T"?"True":"False"));
      return {got:ok?1:0,max:1,sec:sec.id,topic,label:pt.id,answer:pt.a==="T"?"True":"False"}; });
  });
  return wrap;
}
function orderQ(sec,it){
  const topic=it.topic||sec.title;
  const wrap=el("div","q"); wrap.append(el("div",null,it.id+". "+it.q));
  const g=el("div","ord"); const n=it.ev.length;
  const selects=[];
  it.ev.forEach(e=>{ const lab=el("label",null,e.s); const s=document.createElement("select"); s.id="q"+e.id; lab.htmlFor=s.id;
    const opts=[""]; for(let v=1;v<=n;v++) opts.push(String(v));
    opts.forEach(v=>{ const o=el("option",null,v||"–"); o.value=v; s.append(o); }); bindValue(s,e.id); g.append(lab,s); selects.push([e,s]); });
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

SECTIONS.forEach(sec=>{
  const s=el("section"); s.setAttribute("aria-labelledby","h"+sec.id); s.style.cssText="display:flex;flex-direction:column;gap:14px";
  const head=el("div","sec-head"); const h=el("h2",null,sec.title); h.id="h"+sec.id; head.append(h, el("span","marks",sec.marks+" marks")); s.append(head);
  if(sec.titleEn) s.append(el("p","inst",sec.titleEn));
  s.append(el("p","inst",sec.inst));
  if(sec.instEn) s.append(el("p","inst",sec.instEn));
  if(sec.story){ const st=el("article","story"); st.append(el("h3",null,sec.story.title)); sec.story.p.forEach(t=>st.append(el("p",null,t))); s.append(st); }
  sec.items.forEach(it=>s.append(renderItem(sec,it)));
  paper.append(s);
});

/* ---------- Apply a session to the page ---------- */
function applySession(){
  const s=cur();
  controls.forEach(c=>{ const v=s.answers[c.dataset.key];
    if(c.type==="radio") c.checked = (v===c.value); else c.value = v==null?"":v;
    c.disabled = !!s.submitted; c.classList.remove("right","wrong"); });
  workingControls.forEach(c=>{ const v=s.working[c.dataset.key]; c.value=v==null?"":v; c.disabled=!!s.submitted; });
  document.querySelectorAll(".fb").forEach(f=>{f.textContent="";f.className="fb";});
  document.querySelectorAll(".pmark").forEach(p=>p.hidden=true);
  document.querySelectorAll(".listen").forEach(w=>{ if(w._listenUpdate) w._listenUpdate(); });
  document.getElementById("finishBox").hidden = !!s.submitted;
  document.getElementById("finishConfirm").hidden = true;
  renderResults();
  renderSelect();
}
function renderSelect(){
  const sel=document.getElementById("sessionSelect"); sel.textContent="";
  Object.values(store.sessions).sort((a,b)=>a.created<b.created?1:-1).forEach(s=>{
    const d=new Date(s.created); const label=s.name+" · "+d.toLocaleDateString("en-SG",{day:"numeric",month:"short"})+" "+d.toLocaleTimeString("en-SG",{hour:"numeric",minute:"2-digit"})+(s.submitted?" · "+(s.score!=null?s.score+"/"+PAPER.total:"marked"):" · in progress");
    const o=el("option",null,label); o.value=s.id; if(s.id===store.current) o.selected=true; sel.append(o); });
}
function renderResults(){
  const box=document.getElementById("results"); const s=cur();
  if(!s.submitted){ box.hidden=true; return; }
  const per={}; let total=0, pending=0; const revisit={};
  SECTIONS.forEach(sec=>per[sec.id]={got:0,max:sec.marks,title:sec.title});
  markers.forEach(m=>{ const r=m(); if(r.max){ per[r.sec].got+=r.got; total+=r.got;
      if(r.got<r.max && !r.pending && r.label){ const t=r.topic||per[r.sec].title; (revisit[t]=revisit[t]||[]).push(r.label); } }
    if(r.pending) pending++; });
  s.score = total; writeStore(); renderSelectLabelsOnly();
  box.textContent="";
  box.append(el("div","eyebrow","Results for "+s.name));
  box.append(el("div","total",total+" / "+PAPER.total));
  if(pending) box.append(el("div","muted",pending+" written answers are waiting for a parent to mark. Scroll to each one and choose “Give the mark” or “No mark”."));
  const tw=el("div","tablewrap"); const t=el("table"); const th=el("tr"); th.append(el("th",null,"Section"), el("th","n","Score")); t.append(th);
  Object.values(per).forEach(p=>{ const tr=el("tr"); tr.append(el("td",null,p.title), el("td","n",p.got+" / "+p.max)); t.append(tr); });
  tw.append(t); box.append(tw);
  const revisitKeys=Object.keys(revisit);
  if(revisitKeys.length){
    const rv=el("div","revisit"); rv.append(el("h3",null,"Questions to revisit"));
    revisitKeys.forEach(k=>{ const d=el("div"); d.append(el("b",null,k+": "), document.createTextNode(revisit[k].join(", "))); rv.append(d); });
    box.append(rv);
  }
  const r=el("div","row"); const again=el("button","primary","Start a new attempt"); again.type="button";
  again.addEventListener("click",()=>openNew(s.name)); r.append(again); box.append(r);
  box.hidden=false;
}
function renderSelectLabelsOnly(){ /* refresh scores in the attempt list without stealing focus */
  const sel=document.getElementById("sessionSelect"); if(document.activeElement===sel) return; renderSelect(); }

/* ---------- Session controls ---------- */
const newBox=document.getElementById("newBox"), newName=document.getElementById("newName");
function openNew(pref){ newBox.hidden=false; newName.value=pref||""; newName.focus(); }
document.getElementById("newBtn").addEventListener("click",()=>openNew(cur().name==="Pupil"?"":cur().name));
document.getElementById("newCancel").addEventListener("click",()=>{ newBox.hidden=true; });
function startNew(){ const s=makeSession(newName.value.trim()); store.sessions[s.id]=s; store.current=s.id; writeStore(); newBox.hidden=true; applySession(); window.scrollTo({top:0}); }
document.getElementById("newOk").addEventListener("click",startNew);
newName.addEventListener("keydown",e=>{ if(e.key==="Enter") startNew(); });
document.getElementById("sessionSelect").addEventListener("change",e=>{ store.current=e.target.value; writeStore(); applySession(); });

let pendingConfirm=null;
const cBox=document.getElementById("confirmBox");
function ask(text,fn){ document.getElementById("confirmText").textContent=text; pendingConfirm=fn; cBox.hidden=false; document.getElementById("confirmNo").focus(); }
document.getElementById("confirmNo").addEventListener("click",()=>{ cBox.hidden=true; pendingConfirm=null; });
document.getElementById("confirmYes").addEventListener("click",()=>{ cBox.hidden=true; if(pendingConfirm) pendingConfirm(); pendingConfirm=null; });
document.getElementById("delBtn").addEventListener("click",()=>ask("Delete this attempt by "+cur().name+"? This cannot be undone.",()=>{
  delete store.sessions[store.current]; const ids=Object.keys(store.sessions);
  if(ids.length) store.current=ids[0]; else { const s=makeSession(""); store.sessions[s.id]=s; store.current=s.id; }
  writeStore(); applySession(); }));
document.getElementById("clearBtn").addEventListener("click",()=>ask("Delete ALL saved attempts in this browser? This cannot be undone.",()=>{
  try{ localStorage.removeItem(STORE_KEY); }catch(e){}
  const s=makeSession(""); store={version:1,current:s.id,sessions:{[s.id]:s}}; writeStore(); applySession(); }));

/* Backup / restore as a file on this device */
document.getElementById("exportBtn").addEventListener("click",()=>{
  const blob=new Blob([JSON.stringify(store,null,2)],{type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=PAPER.id+"-attempts.json";
  document.body.append(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},1000);
});
document.getElementById("importFile").addEventListener("change",e=>{
  const file=e.target.files&&e.target.files[0]; if(!file) return;
  if(file.size>2_000_000){ document.getElementById("saveNote").textContent="That file is too large to be a backup from this page."; return; }
  const rd=new FileReader();
  rd.onload=()=>{ try{
      const data=JSON.parse(rd.result); if(!data||typeof data.sessions!=="object") throw 0;
      let n=0;
      Object.values(data.sessions).forEach(s=>{ if(!s||typeof s!=="object") return;
        const clean={id:uid(),name:String(s.name||"Pupil").slice(0,40),created:String(s.created||new Date().toISOString()),
          answers:{},parent:{},working:{},plays:{},submitted:!!s.submitted};
        if(s.answers&&typeof s.answers==="object") Object.keys(s.answers).forEach(k=>{ if(/^w?\d{1,2}[abc]?$/.test(k)) clean.answers[k]=String(s.answers[k]).slice(0,500); });
        if(s.parent&&typeof s.parent==="object") Object.keys(s.parent).forEach(k=>{ if(/^\d{1,2}[ab]?$/.test(k)){ const v=Number(s.parent[k]); clean.parent[k]=Number.isFinite(v)&&v>=0?v:0; } });
        if(s.working&&typeof s.working==="object") Object.keys(s.working).forEach(k=>{ if(/^w\d{1,2}[ab]?$/.test(k)) clean.working[k]=String(s.working[k]).slice(0,2000); });
        if(s.plays&&typeof s.plays==="object") Object.keys(s.plays).forEach(k=>{ const v=Number(s.plays[k]); if(Number.isFinite(v)) clean.plays[k]=v; });
        store.sessions[clean.id]=clean; n++; });
      writeStore(); applySession(); document.getElementById("saveNote").textContent="Restored "+n+" attempt"+(n===1?"":"s")+".";
    }catch(err){ document.getElementById("saveNote").textContent="That file is not a backup from this page."; }
    e.target.value=""; };
  rd.readAsText(file);
});

/* ---------- Finish ---------- */
const answerKeys = controls.reduce((set,c)=>set.add(c.dataset.key),new Set());
document.getElementById("finishBtn").addEventListener("click",()=>{
  const blanks=[...answerKeys].filter(k=>!norm(cur().answers[k])).length;
  if(blanks){ document.getElementById("finishText").textContent="You left "+blanks+" answer"+(blanks===1?"":"s")+" blank. Mark the paper anyway?"; document.getElementById("finishConfirm").hidden=false; }
  else submit();
});
document.getElementById("finishNo").addEventListener("click",()=>{ document.getElementById("finishConfirm").hidden=true; });
document.getElementById("finishYes").addEventListener("click",submit);
function submit(){ const s=cur(); s.submitted=true; s.finished=new Date().toISOString(); writeStore(); applySession();
  const r=document.getElementById("results"); r.focus(); r.scrollIntoView({behavior:"smooth",block:"start"}); }

/* ---------- Optional countdown timer (never auto-submits) ---------- */
if(PAPER.durationMin){
  const header=document.querySelector("header");
  if(header){
    function fmt(sec){ const m=Math.floor(sec/60), s=sec%60; return (m<10?"0":"")+m+":"+(s<10?"0":"")+s; }
    const box=el("div","timerbox noprint");
    box.append(el("span","muted","Timer ("+PAPER.durationMin+" min): "));
    const display=el("span","timerdisplay",fmt(PAPER.durationMin*60));
    const startBtn=el("button",null,"Start"); startBtn.type="button";
    const pauseBtn=el("button",null,"Pause"); pauseBtn.type="button"; pauseBtn.hidden=true;
    box.append(display,startBtn,pauseBtn);
    header.append(box);
    let remaining=PAPER.durationMin*60, timerId=null;
    startBtn.addEventListener("click",()=>{ if(timerId) return; timerId=setInterval(()=>{
        if(remaining>0){ remaining--; display.textContent=fmt(remaining); if(remaining===0){ clearInterval(timerId); timerId=null; display.classList.add("timeup"); pauseBtn.hidden=true; startBtn.hidden=true; } }
      },1000); startBtn.hidden=true; pauseBtn.hidden=false; });
    pauseBtn.addEventListener("click",()=>{ clearInterval(timerId); timerId=null; pauseBtn.hidden=true; startBtn.hidden=false; startBtn.textContent="Resume"; });
  }
}

/* ---------- Printing: blank question paper and a separate answer key ---------- */
function printLines(n){ const d=el("div","lines"); for(let i=0;i<n;i++) d.append(el("span")); return d; }
function printTable(heads, rows){ const t=el("table"); const tr=el("tr"); heads.forEach(h=>tr.append(el("th",null,h))); t.append(tr);
  rows.forEach(r=>{ const row=el("tr"); r.forEach((c)=>{ const td=el("td",c==="__fill"?"fill":null,c==="__fill"?"":c); row.append(td); }); t.append(row); }); return t; }
function printItem(it, paperDoc, keyRows){
  const m = it.m||1;
  if(it.t==="mcq" || it.t==="picture-mcq"){
    const q=el("div","pq"); const p=el("p"); p.append(el("b",null,it.id+". "), document.createTextNode(it.q+" "), el("span","bracket","(    )"));
    q.append(p); if(it.img) appendImg(q,it.img,"pimg");
    const o=el("div","opts"); it.o.forEach((t,j)=>{ const sp=el("span",null,"("+(j+1)+") "+t); if(it.oImg&&it.oImg[j]) appendImg(sp,it.oImg[j],"poptimg"); o.append(sp); }); q.append(o); paperDoc.append(q);
    keyRows.push([it.id,"("+(it.a+1)+") "+it.o[it.a], String(m)]);
  } else if(it.t==="num"){
    const q=el("div","pq"); const p=el("p"); p.append(el("b",null,it.id+". "), document.createTextNode(it.q+" ("+m+" mark"+(m>1?"s":"")+")"));
    q.append(p); if(it.img) appendImg(q,it.img,"pimg");
    const row=el("div","numline"); row.append(el("span","blank"," "), document.createTextNode(it.unit?" "+it.unit:""));
    q.append(row); if(it.working) q.append(el("div","work")); paperDoc.append(q);
    keyRows.push([it.id, it.ans[0]+(it.unit?" "+it.unit:""), String(m)]);
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
    const guide = (it.t==="parent" && m>1) ? " — Marking guide: "+(it.guide||("award part marks for a partly correct answer; "+m+" marks for a full, accurate answer")) : "";
    keyRows.push([it.id, it.model+guide, String(m)]);
  }
}
function buildPrintDocs(){
  const title = (document.querySelector("header h1")||{}).textContent || document.title;
  const eyebrow = (document.querySelector("header .eyebrow")||{}).textContent || "";
  const sub = (document.querySelector("header .sub")||{}).textContent || "";
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
(function(){
  const bar=document.getElementById("printBar"); if(!bar || typeof window.print!=="function") return;
  bar.hidden=false;
  document.getElementById("printPaperBtn").addEventListener("click",()=>printDoc("paper"));
  document.getElementById("printKeyBtn").addEventListener("click",()=>printDoc("key"));
})();

if(!SHOW_AD_SLOTS){ document.getElementById("ad1").hidden=true; document.getElementById("ad2").hidden=true; }
applySession();
if(!storageOK) document.getElementById("saveNote").textContent="Saving is turned off in this browser (private browsing?). Answers will be lost when you close the page.";
