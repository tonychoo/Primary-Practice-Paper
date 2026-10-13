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
function makeSession(name){ const id=uid(); return {id, name:(name||"Pupil").slice(0,40), created:new Date().toISOString(), answers:{}, parent:{}, submitted:false}; }

let store = readStore();
if(!store){ const s=makeSession(""); store={version:1,current:s.id,sessions:{[s.id]:s}}; }
if(!store.sessions[store.current]){ const ids=Object.keys(store.sessions); if(ids.length) store.current=ids[0]; else { const s=makeSession(""); store.sessions[s.id]=s; store.current=s.id; } }
const cur = ()=>store.sessions[store.current];

/* ---------- Build the paper (all text set with textContent) ---------- */
const paper = document.getElementById("paper");
const controls = [];        // every input, for enable/disable
const markers = [];         // functions that mark one item: return {got,max,sec}
function el(tag, cls, text){ const e=document.createElement(tag); if(cls) e.className=cls; if(text!=null) e.textContent=text; return e; }
function fb(){ return el("div","fb"); }

function bindValue(input, key){
  controls.push(input);
  input.dataset.key = key;
  const evt = (input.type==="radio") ? "change" : "input";
  input.addEventListener(evt, ()=>{ if(cur().submitted) return;
    cur().answers[key] = input.type==="radio" ? input.value : input.value; cur().updated=new Date().toISOString(); writeStore(); });
}
function norm(v){ return String(v||"").trim().replace(/[.!]+$/,"").replace(/\s+/g," "); }

function mcq(sec,it){
  const fs=el("fieldset","q"); const lg=el("legend"); lg.append(el("span","qn",it.id+". "), document.createTextNode(it.q)); fs.append(lg);
  const opts=el("div","opts");
  it.o.forEach((txt,j)=>{ const lab=el("label"); const r=document.createElement("input"); r.type="radio"; r.name="q"+it.id; r.value=String(j); r.id="q"+it.id+"_"+j;
    bindValue(r,it.id); lab.htmlFor=r.id; lab.append(r, document.createTextNode("("+(j+1)+") "+txt)); opts.append(lab); });
  const f=fb(); fs.append(opts,f);
  markers.push(()=>{ const v=cur().answers[it.id]; const ok=v===String(it.a);
    opts.querySelectorAll("label").forEach((l,j)=>{ l.classList.remove("right","wrong"); });
    setFb(f, ok, "Answer: ("+(it.a+1)+") "+it.o[it.a]); return {got:ok?1:0,max:1,sec:sec.id}; });
  return fs;
}
function setFb(f, ok, msg){ f.textContent = ok ? "Correct" : msg; f.className = "fb "+(ok?"ok":"no"); }

function clozeBlock(sec,it){
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
      return {got:ok?1:0,max:1,sec:sec.id,label:n,answer:it.ans[n][0],ok}; });
  });
  const f=fb(); wrap.append(p,f);
  markers.push(()=>{ const wrongs=Object.keys(it.ans).filter(n=>!it.ans[n].includes(norm(cur().answers[n]).toLowerCase()));
    if(wrongs.length){ f.textContent="Answers: "+wrongs.map(n=>n+". "+it.ans[n][0]).join(" · "); f.className="fb no"; }
    else { f.textContent="All correct"; f.className="fb ok"; }
    return {got:0,max:0,sec:sec.id}; });
  return wrap;
}
function editBlock(sec,it){
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
      return {got:ok?1:0,max:1,sec:sec.id}; });
  });
  const f=fb(); wrap.append(g,f);
  markers.push(()=>{ const wrong=Object.keys(it.ans).filter(n=>{const s=it.ans[n];const v=norm(cur().answers[n]);return !(s.cs?s.a.includes(v):s.a.map(x=>x.toLowerCase()).includes(v.toLowerCase()));});
    if(wrong.length){ f.textContent="Answers: "+wrong.map(n=>n+". "+it.ans[n].a[0]+(it.ans[n].cs?" (capital letter)":"")).join(" · "); f.className="fb no"; }
    else { f.textContent="All correct"; f.className="fb ok"; }
    return {got:0,max:0,sec:sec.id}; });
  return wrap;
}
function textQ(sec,it){
  const wrap=el("div","q"); const lab=el("label"); lab.append(el("span","qn",it.id+". "), document.createTextNode(it.q));
  const ta=document.createElement("textarea"); ta.id="q"+it.id; ta.rows=2; lab.htmlFor=ta.id; bindValue(ta,it.id);
  wrap.append(lab,ta);
  if(it.t==="key"){
    const f=fb(); wrap.append(f);
    markers.push(()=>{ const v=norm(cur().answers[it.id]).toLowerCase(); const ok=it.keys.some(k=>new RegExp("\\b"+k+"\\b").test(v));
      ta.classList.toggle("right",ok); ta.classList.toggle("wrong",!ok); setFb(f,ok,"Answer: "+it.model); return {got:ok?1:0,max:1,sec:sec.id}; });
  } else {
    const pm=el("div","pmark noprint"); pm.hidden=true;
    const ma=el("div"); ma.append(el("b",null,"Model answer: "), document.createTextNode(it.model));
    const r=el("div","row"); const yes=el("button",null,"Give the mark"); yes.type="button"; const no=el("button",null,"No mark"); no.type="button";
    r.append(el("span",null,"Parent marks:"),yes,no); pm.append(ma,r); wrap.append(pm);
    const setP=(val)=>{ cur().parent[it.id]=val; writeStore(); renderResults(); };
    yes.addEventListener("click",()=>setP(1)); no.addEventListener("click",()=>setP(0));
    markers.push(()=>{ pm.hidden=false; const v=cur().parent[it.id];
      yes.setAttribute("aria-pressed",String(v===1)); no.setAttribute("aria-pressed",String(v===0));
      ta.classList.toggle("right",v===1); ta.classList.toggle("wrong",v===0);
      return {got:v===1?1:0,max:1,sec:sec.id,pending:v==null}; });
  }
  return wrap;
}
function tfQ(sec,it){
  const wrap=el("div","q"); wrap.append(el("div",null,it.id+". "+it.q));
  it.parts.forEach(pt=>{
    const fs=el("fieldset"); const lg=el("legend",null,pt.s); lg.style.fontWeight="400"; fs.append(lg);
    const opts=el("div","opts");
    [["T","True"],["F","False"]].forEach(([v,txt])=>{ const lab=el("label"); const r=document.createElement("input"); r.type="radio"; r.name="q"+pt.id; r.value=v; r.id="q"+pt.id+v; bindValue(r,pt.id); lab.htmlFor=r.id; lab.append(r,document.createTextNode(txt)); opts.append(lab); });
    const f=fb(); fs.append(opts,f); wrap.append(fs);
    markers.push(()=>{ const ok=cur().answers[pt.id]===pt.a; setFb(f,ok,"Answer: "+(pt.a==="T"?"True":"False")); return {got:ok?1:0,max:1,sec:sec.id}; });
  });
  return wrap;
}
function orderQ(sec,it){
  const wrap=el("div","q"); wrap.append(el("div",null,it.id+". "+it.q));
  const g=el("div","ord");
  it.ev.forEach(e=>{ const lab=el("label",null,e.s); const s=document.createElement("select"); s.id="q"+e.id; lab.htmlFor=s.id;
    ["","1","2","3"].forEach(v=>{ const o=el("option",null,v||"–"); o.value=v; s.append(o); }); bindValue(s,e.id); g.append(lab,s); });
  const f=fb(); wrap.append(g,f);
  markers.push(()=>{ const ok=it.ev.every(e=>cur().answers[e.id]===e.a); setFb(f,ok,"Answer: "+it.ev.map(e=>e.a+" – "+e.s).sort().join(" · ")); return {got:ok?1:0,max:1,sec:sec.id}; });
  return wrap;
}

SECTIONS.forEach(sec=>{
  const s=el("section"); s.setAttribute("aria-labelledby","h"+sec.id); s.style.cssText="display:flex;flex-direction:column;gap:14px";
  const head=el("div","sec-head"); const h=el("h2",null,sec.title); h.id="h"+sec.id; head.append(h, el("span","marks",sec.marks+" marks")); s.append(head, el("p","inst",sec.inst));
  if(sec.story){ const st=el("article","story"); st.append(el("h3",null,sec.story.title)); sec.story.p.forEach(t=>st.append(el("p",null,t))); s.append(st); }
  sec.items.forEach(it=>{
    const node = it.t==="mcq"?mcq(sec,it): it.t==="cloze"?clozeBlock(sec,it): it.t==="edit"?editBlock(sec,it): it.t==="tf"?tfQ(sec,it): it.t==="order"?orderQ(sec,it): textQ(sec,it);
    s.append(node); });
  paper.append(s);
});

/* ---------- Apply a session to the page ---------- */
function applySession(){
  const s=cur();
  controls.forEach(c=>{ const v=s.answers[c.dataset.key];
    if(c.type==="radio") c.checked = (v===c.value); else c.value = v==null?"":v;
    c.disabled = !!s.submitted; c.classList.remove("right","wrong"); });
  document.querySelectorAll(".fb").forEach(f=>{f.textContent="";f.className="fb";});
  document.querySelectorAll(".pmark").forEach(p=>p.hidden=true);
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
  const per={}; let total=0, pending=0;
  SECTIONS.forEach(sec=>per[sec.id]={got:0,max:sec.marks,title:sec.title});
  markers.forEach(m=>{ const r=m(); if(r.max){ per[r.sec].got+=r.got; total+=r.got; } if(r.pending) pending++; });
  s.score = total; writeStore(); renderSelectLabelsOnly();
  box.textContent="";
  box.append(el("div","eyebrow","Results for "+s.name));
  box.append(el("div","total",total+" / "+PAPER.total));
  if(pending) box.append(el("div","muted",pending+" written answers are waiting for a parent to mark. Scroll to each one and choose “Give the mark” or “No mark”."));
  const tw=el("div","tablewrap"); const t=el("table"); const th=el("tr"); th.append(el("th",null,"Section"), el("th","n","Score")); t.append(th);
  Object.values(per).forEach(p=>{ const tr=el("tr"); tr.append(el("td",null,p.title), el("td","n",p.got+" / "+p.max)); t.append(tr); });
  tw.append(t); box.append(tw);
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
          answers:{},parent:{},submitted:!!s.submitted};
        if(s.answers&&typeof s.answers==="object") Object.keys(s.answers).forEach(k=>{ if(/^\d{1,2}[abc]?$/.test(k)) clean.answers[k]=String(s.answers[k]).slice(0,500); });
        if(s.parent&&typeof s.parent==="object") Object.keys(s.parent).forEach(k=>{ if(/^\d{1,2}[ab]?$/.test(k)) clean.parent[k]=s.parent[k]===1?1:0; });
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

if(!SHOW_AD_SLOTS){ document.getElementById("ad1").hidden=true; document.getElementById("ad2").hidden=true; }
applySession();
if(!storageOK) document.getElementById("saveNote").textContent="Saving is turned off in this browser (private browsing?). Answers will be lost when you close the page.";
