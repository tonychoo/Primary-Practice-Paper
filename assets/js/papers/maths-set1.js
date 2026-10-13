/* P3 Mathematics Practice Paper, Set 1. Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-maths-set1",
  total: 50,
  durationMin: 90,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:10, inst:"Choose the correct answer. Each question is worth 1 mark.", items:[
      {id:"1", t:"mcq", q:"What is the value of the digit 7 in 5 782?", o:["7","70","700","7000"], a:2, m:1, topic:"place value"},
      {id:"2", t:"mcq", q:"Which of these numbers is the largest?", o:["2 894","2 948","2 489","2 498"], a:1, m:1, topic:"whole numbers"},
      {id:"3", t:"mcq", q:"6 × 7 = ?", o:["36","42","48","49"], a:1, m:1, topic:"multiplication"},
      {id:"4", t:"mcq", q:"56 ÷ 8 = ?", o:["6","7","8","9"], a:1, m:1, topic:"division"},
      {id:"5", t:"mcq", q:"Which fraction is equivalent to 1/2?", o:["2/4","1/3","3/5","2/3"], a:0, m:1, topic:"fractions"},
      {id:"6", t:"mcq", q:"Which angle is smaller than a right angle?", m:1, topic:"angles",
        o:["Angle P","Angle Q","Angle R","Angle S"],
        oImg:[{src:"assets/img/maths/angle-30.svg",alt:"Angle P: two straight rays forming a narrow opening"},
              {src:"assets/img/maths/angle-90.svg",alt:"Angle Q: two straight rays forming an L-shaped opening"},
              {src:"assets/img/maths/angle-120.svg",alt:"Angle R: two straight rays forming a wide opening"},
              {src:"assets/img/maths/angle-160.svg",alt:"Angle S: two straight rays forming a very wide, almost straight opening"}], a:0},
      {id:"7", t:"mcq", q:"Which pair of lines are parallel?", m:1, topic:"lines",
        o:["Line pair 1","Line pair 2","Line pair 3","Line pair 4"],
        oImg:[{src:"assets/img/maths/lines-parallel.svg",alt:"Two straight lines running side by side, the same distance apart all the way"},
              {src:"assets/img/maths/lines-perpendicular.svg",alt:"Two straight lines crossing to form an L-shaped corner"},
              {src:"assets/img/maths/lines-intersecting.svg",alt:"Two straight lines crossing at a slanted angle"},
              {src:"assets/img/maths/lines-diverging.svg",alt:"Two straight lines meeting at a point and spreading apart"}], a:0},
      {id:"8", t:"mcq", q:"A movie starts at 14:45 and lasts 1 hour 30 minutes. What time does it end?", o:["15:15","16:15","16:45","17:15"], a:1, m:1, topic:"time"},
      {id:"9", t:"mcq", q:"Kumar has $5. He buys a pencil for 85¢. How much change does he get?", o:["$4.05","$4.15","$4.25","$4.85"], a:1, m:1, topic:"money"},
      {id:"10", t:"mcq", q:"Look at the bar graph. Which fruit did the most pupils choose?", m:1, topic:"data",
        img:{src:"assets/img/maths/bargraph-fruit.svg", alt:"A bar graph showing how many pupils chose each of four fruits: apple, orange, banana and grapes"},
        o:["Apple","Orange","Banana","Grapes"], a:2}
    ]},
    {id:"B", title:"Section B: Short Answer", marks:27, inst:"Write your answer in the box. Show the unit where one is given.", items:[
      {id:"11", t:"num", q:"What is the next number in the pattern? 1 200, 1 400, 1 600, ____", ans:["1800"], m:1, topic:"patterns"},
      {id:"12", t:"num", q:"3 456 + 2 378 = ____", ans:["5834"], m:1, topic:"addition"},
      {id:"13", t:"num", q:"7 002 − 3 549 = ____", ans:["3453"], m:1, topic:"subtraction"},
      {id:"14", t:"num", q:"Each box has 8 oranges. How many oranges are there in 9 boxes?", unit:"oranges", ans:["72"], m:2, topic:"multiplication"},
      {id:"15", t:"num", q:"63 sweets are shared equally among 7 children. How many sweets does each child get?", unit:"sweets", ans:["9"], m:2, topic:"division"},
      {id:"16", t:"num", q:"A storybook costs $8.90. Mrs Lee pays with a $10 note. How much change does she receive?", unit:"$", ans:["1.10"], m:2, topic:"money"},
      {id:"17", t:"num", q:"Convert 3 km 250 m to metres.", unit:"m", ans:["3250"], m:2, topic:"length"},
      {id:"18", t:"num", q:"A bag of rice weighs 2 kg 400 g. What is its mass in grams?", unit:"g", ans:["2400"], m:2, topic:"mass"},
      {id:"19", t:"num", q:"A bottle holds 1 ℓ 650 mℓ of juice. What is this volume in millilitres?", unit:"mℓ", ans:["1650"], m:2, topic:"volume"},
      {id:"20", t:"num", q:"A bus journey starts at 09:40 and ends at 10:25. How many minutes does the journey take?", unit:"min", ans:["45"], m:2, topic:"time"},
      {id:"21", t:"num", q:"How many seconds are there in 4 minutes?", unit:"s", ans:["240"], m:2, topic:"time"},
      {id:"22", t:"num", q:"Which is greater, 3/5 or 2/5? Write the greater fraction.", ans:["3/5"], m:2, topic:"fractions"},
      {id:"23", t:"num", q:"1/8 + 4/8 = ____ (give your answer as a fraction)", ans:["5/8"], m:2, topic:"fractions"},
      {id:"24", t:"num", q:"A rectangle is 9 cm long and 5 cm wide. What is its area?", unit:"cm²", ans:["45"], m:2, topic:"area"},
      {id:"25", t:"num", q:"A square has sides of 7 cm each. What is its perimeter?", unit:"cm", ans:["28"], m:2, topic:"perimeter"}
    ]},
    {id:"C", title:"Section C: Long Answer", marks:13, inst:"Show your working clearly. Write your final answer with its unit.", items:[
      {id:"26", t:"parent", m:3, working:true, topic:"money",
        q:"Mrs Tan bought 3 kg of chicken at $6 per kg and 2 kg of fish at $9 per kg at the market. She paid with two $20 notes. How much change did she receive?",
        model:"Chicken: 3 × $6 = $18. Fish: 2 × $9 = $18. Total cost = $18 + $18 = $36. Change = $40 − $36 = $4.",
        guide:"M1 for 3×$6=$18 and 2×$9=$18 (or combined $36 total), M1 for $40−$36, A1 for the final answer $4"},
      {id:"27", t:"parent", m:3, working:true, topic:"fractions",
        q:"Siti has a 1-metre ribbon. She uses 3/10 of it to tie a present and 2/10 of it for a bookmark. What fraction of the ribbon is left?",
        model:"Used = 3/10 + 2/10 = 5/10. Left = 1 − 5/10 = 5/10, which is the same as 1/2 of the ribbon.",
        guide:"M1 for 3/10+2/10=5/10, M1 for 1−5/10, A1 for 5/10 (or 1/2, or an equivalent fraction)"},
      {id:"28", t:"parent", m:3, working:true, topic:"time",
        q:"A school carnival opens at 9:15 a.m. and closes at 1:45 p.m. the same day. Ahmad arrives 20 minutes after it opens and leaves 30 minutes before it closes. How long was Ahmad at the carnival? Give your answer in hours and minutes.",
        model:"Ahmad arrived at 9:15 + 0:20 = 9:35 a.m. He left at 1:45 p.m. − 0:30 = 1:15 p.m. Time at the carnival = 1:15 p.m. − 9:35 a.m. = 3 h 40 min.",
        guide:"M1 for the arrival time 9:35, M1 for the leaving time 1:15 p.m., A1 for the final duration 3 h 40 min"},
      {id:"29", t:"parent", m:4, working:true, topic:"area",
        q:"The diagram shows a rectangular garden 12 m by 8 m. A square flower bed with sides of 4 m is built inside one corner of the garden. What is the area of the garden NOT covered by the flower bed?",
        img:{src:"assets/img/maths/garden-composite.svg", alt:"A rectangle 12 metres by 8 metres, with a 4 metre square flower bed in one corner"},
        model:"Area of garden = 12 × 8 = 96 m². Area of flower bed = 4 × 4 = 16 m². Area not covered = 96 − 16 = 80 m².",
        guide:"M1 for garden area 12×8=96, M1 for flower bed area 4×4=16, M1 for 96−16, A1 for the final answer 80 m²"}
    ]}
  ]
};
