/* P3 Mathematics Quick Drill: times tables 6-9, Set 1. Content only: the engine is assets/js/paper.js
   30 facts (15 multiplication, 15 division), weighted towards the 7 and 8 tables (9 facts each) over
   6 and 9 (6 facts each), in a mixed order with no two consecutive questions from the same table. */
"use strict";
window.PAPER = {
  id: "p3-maths-drill-facts1",
  total: 30,
  durationMin: 10,
  sections: [
    {id:"A", title:"Quick Drill: Times Tables 6-9", marks:30, inst:"Work quickly. Write just the number — no working needed.", items:[
      {id:"1", t:"num", q:"7 × 2 = ?", ans:["14"], m:1, topic:"×7"},
      {id:"2", t:"num", q:"8 × 2 = ?", ans:["16"], m:1, topic:"×8"},
      {id:"3", t:"num", q:"28 ÷ 7 = ?", ans:["4"], m:1, topic:"×7"},
      {id:"4", t:"num", q:"16 ÷ 8 = ?", ans:["2"], m:1, topic:"×8"},
      {id:"5", t:"num", q:"7 × 3 = ?", ans:["21"], m:1, topic:"×7"},
      {id:"6", t:"num", q:"8 × 3 = ?", ans:["24"], m:1, topic:"×8"},
      {id:"7", t:"num", q:"6 × 4 = ?", ans:["24"], m:1, topic:"×6"},
      {id:"8", t:"num", q:"49 ÷ 7 = ?", ans:["7"], m:1, topic:"×7"},
      {id:"9", t:"num", q:"24 ÷ 8 = ?", ans:["3"], m:1, topic:"×8"},
      {id:"10", t:"num", q:"9 × 2 = ?", ans:["18"], m:1, topic:"×9"},
      {id:"11", t:"num", q:"48 ÷ 6 = ?", ans:["8"], m:1, topic:"×6"},
      {id:"12", t:"num", q:"7 × 5 = ?", ans:["35"], m:1, topic:"×7"},
      {id:"13", t:"num", q:"8 × 4 = ?", ans:["32"], m:1, topic:"×8"},
      {id:"14", t:"num", q:"18 ÷ 9 = ?", ans:["2"], m:1, topic:"×9"},
      {id:"15", t:"num", q:"6 × 7 = ?", ans:["42"], m:1, topic:"×6"},
      {id:"16", t:"num", q:"56 ÷ 7 = ?", ans:["8"], m:1, topic:"×7"},
      {id:"17", t:"num", q:"40 ÷ 8 = ?", ans:["5"], m:1, topic:"×8"},
      {id:"18", t:"num", q:"9 × 3 = ?", ans:["27"], m:1, topic:"×9"},
      {id:"19", t:"num", q:"36 ÷ 6 = ?", ans:["6"], m:1, topic:"×6"},
      {id:"20", t:"num", q:"7 × 8 = ?", ans:["56"], m:1, topic:"×7"},
      {id:"21", t:"num", q:"8 × 9 = ?", ans:["72"], m:1, topic:"×8"},
      {id:"22", t:"num", q:"45 ÷ 9 = ?", ans:["5"], m:1, topic:"×9"},
      {id:"23", t:"num", q:"6 × 9 = ?", ans:["54"], m:1, topic:"×6"},
      {id:"24", t:"num", q:"70 ÷ 7 = ?", ans:["10"], m:1, topic:"×7"},
      {id:"25", t:"num", q:"64 ÷ 8 = ?", ans:["8"], m:1, topic:"×8"},
      {id:"26", t:"num", q:"9 × 4 = ?", ans:["36"], m:1, topic:"×9"},
      {id:"27", t:"num", q:"54 ÷ 6 = ?", ans:["9"], m:1, topic:"×6"},
      {id:"28", t:"num", q:"7 × 9 = ?", ans:["63"], m:1, topic:"×7"},
      {id:"29", t:"num", q:"72 ÷ 8 = ?", ans:["9"], m:1, topic:"×8"},
      {id:"30", t:"num", q:"63 ÷ 9 = ?", ans:["7"], m:1, topic:"×9"}
    ]}
  ]
};
