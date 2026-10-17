/* P3 Mathematics Practice Paper, Set 3 (exam mock). Content only: the engine is assets/js/paper.js
   Real-exam balance across all P3 topics, with about a third of the marks on the weak spots shown by
   Set 1/2 attempts: subtraction with regrouping across zeros (no MCQ), duration across the hour and a
   24-hour-clock "what time will it be", and multi-step word problems with units that matter. No hints —
   this is a timed mock. */
"use strict";
window.PAPER = {
  id: "p3-maths-set3",
  total: 50,
  durationMin: 90,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:10, inst:"Choose the correct answer. Each question is worth 1 mark.", items:[
      {id:"1", t:"mcq", q:"Which of these numbers is the smallest?", o:["5 219","5 129","5 291","5 192"], a:1, m:1, topic:"whole numbers"},
      {id:"2", t:"mcq", q:"9 × 7 = ?", o:["56","72","54","63"], a:3, m:1, topic:"multiplication facts"},
      {id:"3", t:"mcq", q:"81 ÷ 9 = ?", o:["9","8","7","11"], a:0, m:1, topic:"division facts"},
      {id:"4", t:"mcq", q:"Which fraction is equivalent to 2/3?", o:["3/4","2/5","4/6","5/6"], a:2, m:1, topic:"fractions"},
      {id:"5", t:"mcq", q:"How many degrees are there in a right angle?", o:["45°","90°","180°","360°"], a:1, m:1, topic:"angles"},
      {id:"6", t:"mcq", q:"Which pair of lines are perpendicular?", m:1, topic:"lines",
        o:["Line pair 1","Line pair 2","Line pair 3","Line pair 4"],
        oImg:[{src:"assets/img/maths/lines-perpendicular.svg",alt:"Two straight lines crossing to form an L-shaped corner"},
              {src:"assets/img/maths/lines-parallel.svg",alt:"Two straight lines running side by side, the same distance apart all the way"},
              {src:"assets/img/maths/lines-intersecting.svg",alt:"Two straight lines crossing at a slanted angle"},
              {src:"assets/img/maths/lines-diverging.svg",alt:"Two straight lines meeting at a point and spreading apart"}], a:0},
      {id:"7", t:"mcq", q:"80¢ + 30¢ + 20¢ + 5¢ = ?", o:["$1.30","$1.25","$1.45","$1.35"], a:3, m:1, topic:"money"},
      {id:"8", t:"mcq", q:"A football match starts at 15:30 and lasts 1 hour 45 minutes. What time does it end?", o:["16:15","17:45","17:15","16:45"], a:2, m:1, topic:"time"},
      {id:"9", t:"mcq", q:"Which unit is used to measure the area of a classroom floor?", o:["m","m²","cm","km"], a:1, m:1, topic:"area"},
      {id:"10", t:"mcq", q:"Look at the bar graph. How many pupils chose Grapes?", m:1, topic:"data",
        img:{src:"assets/img/maths/bargraph-fruit.svg", alt:"A bar graph showing how many pupils chose each of four fruits: apple, orange, banana and grapes"},
        o:["3","5","7","4"], a:3}
    ]},
    {id:"B", title:"Section B: Short Answer", marks:27, inst:"Write your answer in the box. Show the unit where one is given.", items:[
      {id:"11", t:"num", q:"6 003 − 2 486 = ?", ans:["3517"], m:2, topic:"subtraction across zeros",
        explain:"6 003 = 5 thousands, 9 hundreds, 9 tens, 13 ones, so 6 003 − 2 486 = 3 517."},
      {id:"12", t:"num", q:"$20.00 − $7.35 = ?", unit:"$", ans:["12.65"], m:2, topic:"subtraction across zeros",
        explain:"$20.00 = 19 dollars and 100 cents, so $20.00 − $7.35 = $12.65."},
      {id:"13", t:"num", q:"A bus leaves the interchange at 07:35 and arrives at 08:10. How many minutes does the journey take?", unit:"min", ans:["35"], m:2, topic:"time",
        explain:"07:35 → 08:00 is 25 min, 08:00 → 08:10 is 10 min, so 35 min."},
      {id:"14", t:"num", q:"A cooking class starts at 13:50 and ends at 14:30. How many minutes does the class last?", unit:"min", ans:["40"], m:2, topic:"time",
        explain:"13:50 → 14:00 is 10 min, 14:00 → 14:30 is 30 min, so 40 min."},
      {id:"15", t:"key", q:"A plane departs at 6:35 a.m. and the flight takes 2 h 50 min. What time does it land? Use the 24-hour clock (e.g. 08:40).",
        keys:["09:25","9:25","0925","9.25"], model:"09:25", m:2, topic:"time",
        explain:"6:35 → 9:35 is 3 h, but the flight is 2 h 50 min, which is 10 min less than 3 h, so 9:35 − 10 min = 09:25."},
      {id:"16", t:"num", q:"Each tray holds 9 muffins. How many muffins are there in 7 trays?", unit:"muffins", ans:["63"], m:2, topic:"multiplication facts"},
      {id:"17", t:"num", q:"72 sweets are shared equally among 8 children. How many sweets does each child get?", unit:"sweets", ans:["9"], m:2, topic:"division facts"},
      {id:"18", t:"num", q:"A toy costs $6.20. Mdm Lee pays with a $10 note. How much change does she get?", unit:"$", ans:["3.80"], m:2, topic:"money"},
      {id:"19", t:"num", q:"Convert 2 km 50 m to metres.", unit:"m", ans:["2050"], m:1, topic:"length"},
      {id:"20", t:"num", q:"Which is greater, 3/8 or 5/8? Write the greater fraction.", ans:["5/8"], m:1, topic:"fractions"},
      {id:"21", t:"num", q:"A rectangle is 14 cm long and 7 cm wide. What is its perimeter?", unit:"cm", ans:["42"], m:2, topic:"perimeter"},
      {id:"22", t:"num", q:"A rectangle is 12 cm long and 5 cm wide. What is its area?", unit:"cm²", ans:["60"], m:2, topic:"area"},
      {id:"23", t:"num", q:"How many right angles are there in a square?", ans:["4"], m:1, topic:"angles"},
      {id:"24", t:"num", q:"Look at the bar graph. How many pupils chose Apple and Grapes altogether?", m:2, topic:"data",
        img:{src:"assets/img/maths/bargraph-fruit.svg", alt:"A bar graph showing how many pupils chose each of four fruits: apple, orange, banana and grapes"},
        ans:["7"]},
      {id:"25", t:"num", q:"A packet of flour weighs 1 kg 150 g. What is its mass in grams?", unit:"g", ans:["1150"], m:2, topic:"mass"}
    ]},
    {id:"C", title:"Section C: Long Answer", marks:13, inst:"Show your working clearly. Write your final answer with its unit.", items:[
      {id:"26", t:"parent", m:4, working:true, topic:"mixed topics",
        q:"A rectangular playground is 30 m long and 18 m wide. Mr Rahman wants to put a fence around it, leaving a 3 m gap for the gate. Fencing costs $9 per metre. How much will the fencing cost?",
        model:"Perimeter = 2 × (30 + 18) = 96 m. Fencing needed = 96 − 3 = 93 m (leaving a gap for the gate). Cost = 93 × $9 = $837.",
        guide:"M1 for the perimeter 2 × (30 + 18) = 96, M1 for 96 − 3 = 93 m, M1 for 93 × 9, A1 for the final answer $837",
        final:{value:837, unit:"$"},
        explain:"The gate doesn't need fencing, so subtract its width from the perimeter before multiplying by the cost per metre."},
      {id:"27", t:"parent", m:3, working:true, topic:"money",
        q:"Mrs Ong buys 4 kg of prawns at $14 per kg at the market. She pays with three $20 notes. How much change does she receive?",
        model:"Cost = 4 × $14 = $56. Change = $60 − $56 = $4.",
        guide:"M1 for 4 × $14 = $56, M1 for $60 − $56, A1 for the final answer $4",
        final:{value:4, unit:"$"},
        explain:"Work out the total cost first, then subtract it from the total amount paid."},
      {id:"28a", t:"parent", m:2, working:true, topic:"perimeter",
        q:"A rectangular school garden is 20 m long and 13 m wide. (a) What is the perimeter of the garden?",
        model:"Perimeter = 2 × (20 + 13) = 2 × 33 = 66 m.",
        guide:"M1 for 20 + 13 = 33, A1 for the perimeter 2 × 33 = 66 m (correct unit)",
        final:{value:66, unit:"m"},
        explain:"Perimeter is the total length around all four sides, in m: 2 × (length + width)."},
      {id:"28b", t:"parent", m:2, working:true, topic:"area",
        q:"(b) What is the area of the same garden (20 m long, 13 m wide)?",
        model:"Area = 20 × 13 = 260 m².",
        guide:"M1 for 20 × 13, A1 for the area 260 m² (correct unit)",
        final:{value:260, unit:"m²"},
        explain:"Area is length × width, in m² — not the same unit as perimeter."},
      {id:"29", t:"parent", m:2, working:true, topic:"time",
        q:"A school book fair opens at 11:15 a.m. and closes at 1:40 p.m. the same day. How long is the book fair open? Give your answer in hours and minutes.",
        model:"11:15 a.m. → 12:00 noon is 45 min. 12:00 noon → 1:40 p.m. is 1 h 40 min. Total = 45 min + 1 h 40 min = 2 h 25 min.",
        guide:"M1 for counting on to noon (45 min) and the remaining time to 1:40 p.m. (1 h 40 min), A1 for the final answer 2 h 25 min",
        final:{value:25, unit:"min"},
        explain:"Count on to the next o'clock (or noon) first, then add the remaining hours and minutes."}
    ]}
  ]
};
