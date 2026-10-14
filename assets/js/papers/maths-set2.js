/* P3 Mathematics Practice Paper, Set 2 (focus practice). Content only: the engine is assets/js/paper.js
   Weighted at weak spots shown by Set 1 attempts: times tables for 6-9, subtraction with regrouping
   across zeros, duration across the hour, and perimeter vs area. See the build summary for the exact
   marks achieved per focus area. */
"use strict";
window.PAPER = {
  id: "p3-maths-set2",
  total: 50,
  durationMin: 90,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:10, inst:"Choose the correct answer. Each question is worth 1 mark.", items:[
      {id:"1", t:"mcq", q:"7 × 8 = ?", o:["54","56","63","64"], a:1, m:1, topic:"multiplication facts"},
      {id:"2", t:"mcq", q:"72 ÷ 8 = ?", o:["7","8","9","10"], a:2, m:1, topic:"division facts"},
      {id:"3", t:"mcq", q:"5 000 − 2 367 = ?", o:["2 633","2 733","3 633","2 367"], a:0, m:1, topic:"subtraction"},
      {id:"4", t:"mcq", q:"A show starts at 10:50 and lasts 25 minutes. What time does it end?", o:["11:05","11:15","11:25","10:15"], a:1, m:1, topic:"time"},
      {id:"5", t:"mcq", q:"Which measurement would you use to find out how much fencing is needed around a garden?", o:["Area","Perimeter","Volume","Mass"], a:1, m:1, topic:"perimeter"},
      {id:"6", t:"mcq", q:"Which unit is used to measure area?", o:["cm","cm²","cm³","ℓ"], a:1, m:1, topic:"area"},
      {id:"7", t:"mcq", q:"Which fraction is equivalent to 3/4?", o:["6/8","2/3","4/5","5/6"], a:0, m:1, topic:"fractions"},
      {id:"8", t:"mcq", q:"A right angle measures how many degrees?", o:["45°","90°","180°","360°"], a:1, m:1, topic:"angles"},
      {id:"9", t:"mcq", q:"50¢ + 20¢ + 20¢ + 10¢ = ?", o:["$1.00","$0.90","$1.10","$0.80"], a:0, m:1, topic:"money"},
      {id:"10", t:"mcq", q:"Look at the bar graph. How many more pupils chose Banana than Apple?", m:1, topic:"data",
        img:{src:"assets/img/maths/bargraph-fruit.svg", alt:"A bar graph showing how many pupils chose each of four fruits: apple, orange, banana and grapes"},
        o:["2","3","4","5"], a:2}
    ]},
    {id:"B", title:"Section B: Short Answer", marks:27, inst:"Write your answer in the box. Show the unit where one is given.", items:[
      {id:"11", t:"num", q:"9 × 6 = ?", ans:["54"], m:1, topic:"multiplication facts"},
      {id:"12", t:"num", q:"8 × 8 = ?", ans:["64"], m:1, topic:"multiplication facts"},
      {id:"13", t:"num", q:"54 ÷ 9 = ?", ans:["6"], m:1, topic:"division facts"},
      {id:"14", t:"num", q:"Mdm Tan has 56 pencils. She puts them into groups of 7. How many groups does she make?", unit:"groups", ans:["8"], m:2, topic:"division facts"},
      {id:"15", t:"num", q:"Each box has 7 buns. How many buns are there in 8 boxes?", unit:"buns", ans:["56"], m:2, topic:"multiplication facts"},
      {id:"16", t:"num", q:"63 ÷ 7 = ?", ans:["9"], m:2, topic:"division facts"},
      {id:"17", t:"num", q:"8 004 − 1 758 = ?", ans:["6246"], m:2, topic:"subtraction"},
      {id:"18", t:"num", q:"$10.00 − $3.65 = ?", unit:"$", ans:["6.35"], m:2, topic:"subtraction"},
      {id:"19", t:"num", q:"A bus journey starts at 08:50 and ends at 09:35. How many minutes does the journey take?", unit:"min", ans:["45"], m:2, topic:"time"},
      {id:"20", t:"key", q:"A train leaves at 7:50 a.m. and the journey takes 50 minutes. What time does it arrive? Use the 24-hour clock (e.g. 08:40).", keys:["08:40","8:40"], model:"08:40", m:2, topic:"time"},
      {id:"21", t:"num", q:"A rectangle is 11 cm long and 6 cm wide. What is its perimeter?", unit:"cm", ans:["34"], m:2, topic:"perimeter"},
      {id:"22", t:"num", q:"A rectangle is 10 cm long and 4 cm wide. What is its area?", unit:"cm²", ans:["40"], m:2, topic:"area"},
      {id:"23", t:"num", q:"Which is greater, 2/3 or 1/3? Write the greater fraction.", ans:["2/3"], m:2, topic:"fractions"},
      {id:"24", t:"num", q:"How many right angles are there in a rectangle?", ans:["4"], m:2, topic:"angles"},
      {id:"25", t:"num", q:"Look at the bar graph. How many pupils chose Orange?", m:2, topic:"data",
        img:{src:"assets/img/maths/bargraph-fruit.svg", alt:"A bar graph showing how many pupils chose each of four fruits: apple, orange, banana and grapes"},
        ans:["5"]}
    ]},
    {id:"C", title:"Section C: Long Answer", marks:13, inst:"Show your working clearly. Write your final answer with its unit.", items:[
      {id:"26", t:"parent", m:3, working:true, topic:"time",
        q:"A library opens at 8:45 a.m. and closes at 12:20 p.m. How long is it open for? Give your answer in hours and minutes.",
        model:"8:45 → 9:00 is 15 min. 9:00 → 12:00 is 3 h. 12:00 → 12:20 is 20 min. Total = 15 min + 3 h + 20 min = 3 h 35 min.",
        guide:"M1 for counting on to the next hour (15 min), M1 for the hours in between (3 h) plus the remaining minutes (20 min), A1 for the final answer 3 h 35 min",
        hint:"Count on to the next o'clock first, then add the full hours, then add the leftover minutes."},
      {id:"27", t:"parent", m:3, working:true, topic:"perimeter",
        q:"A rectangular garden is 15 m long and 9 m wide. (a) What is the perimeter of the garden? (b) What is the area of the garden? Show your working clearly, using the correct unit for each answer.",
        model:"Perimeter = 2 × (15 + 9) = 2 × 24 = 48 m. Area = 15 × 9 = 135 m².",
        guide:"M1 for 15 + 9 = 24, M1 for 2 × 24 = 48 m (perimeter, correct unit), A1 for the area 15 × 9 = 135 m² (correct unit)",
        hint:"Perimeter = all the sides added together, in m. Area = length × width, in m²."},
      {id:"28", t:"parent", m:3, working:true, topic:"money",
        q:"Kumar buys 6 packets of sweets at 75¢ each. He pays with a $5 note. How much change does he receive?",
        model:"Cost = 6 × $0.75 = $4.50. Change = $5.00 − $4.50 = $0.50.",
        guide:"M1 for 6 × $0.75 = $4.50, M1 for $5.00 − $4.50, A1 for the final answer $0.50",
        hint:"Work out the total cost first, then subtract it from $5."},
      {id:"29", t:"parent", m:4, working:true, topic:"mixed topics",
        q:"A rectangular swimming pool is 25 m long and 10 m wide. Mr Lim wants to put a fence around the pool, leaving a 2 m gap for the gate. Fencing costs $8 per metre. How much will the fencing cost?",
        model:"Perimeter = 2 × (25 + 10) = 70 m. Fencing needed = 70 − 2 = 68 m (leaving a gap for the gate). Cost = 68 × $8 = $544.",
        guide:"M1 for the perimeter 2 × (25 + 10) = 70, M1 for 70 − 2 = 68 m, M1 for 68 × 8, A1 for the final answer $544",
        hint:"Find the perimeter first, then subtract the gate gap, then multiply by the cost per metre."}
    ]}
  ]
};
