/* P3 Mathematics Quick Drill: word problems step by step, Set 1. Content only: the engine is
   assets/js/paper.js. 5 long-answer problems, 3 marks each, each with a model answer, a marking
   guide, a final-answer check for the parent, a working box, and a hint that gives only the first
   step (so practising the method still takes real thinking). */
"use strict";
window.PAPER = {
  id: "p3-maths-drill-wordprob1",
  total: 15,
  durationMin: 20,
  sections: [
    {id:"A", title:"Quick Drill: Word Problems Step by Step", marks:15, inst:"Show your working clearly. Write your final answer with its unit.", items:[
      {id:"1", t:"parent", m:3, working:true, topic:"perimeter",
        q:"A community garden at a void deck is 16 m long and 9 m wide. The Residents' Committee fences it, leaving a 2 m gap for the gate. Fencing costs $6 per metre. How much will the fencing cost?",
        model:"Perimeter = 2 × (16 + 9) = 50 m. Fencing needed = 50 − 2 = 48 m. Cost = 48 × $6 = $288.",
        guide:"M1 for the perimeter 2 × (16 + 9) = 50, M1 for 50 − 2 = 48 m and 48 × 6, A1 for the final answer $288",
        final:{value:288, unit:"$"},
        hint:"Find the perimeter of the garden first."},
      {id:"2", t:"parent", m:3, working:true, topic:"money",
        q:"At the school carnival, Mei buys 5 cups of red bean soup at 90¢ each. She pays with a $10 note. How much change does she receive?",
        model:"Cost = 5 × 90¢ = $4.50. Change = $10.00 − $4.50 = $5.50.",
        guide:"M1 for 5 × 90¢ = $4.50, M1 for $10.00 − $4.50, A1 for the final answer $5.50",
        final:{value:5.5, unit:"$"},
        hint:"Work out the total cost of the red bean soup first."},
      {id:"3a", t:"parent", m:1, working:true, topic:"perimeter",
        q:"A rectangular HDB void deck notice board is 3 m long and 2 m wide. (a) What is its perimeter?",
        model:"Perimeter = 2 × (3 + 2) = 10 m.",
        guide:"A1 for the correct perimeter 2 × (3 + 2) = 10 m (correct unit)",
        final:{value:10, unit:"m"},
        hint:"Perimeter is all four sides added together."},
      {id:"3b", t:"parent", m:2, working:true, topic:"area",
        q:"(b) What is the area of the same notice board (3 m long, 2 m wide)?",
        model:"Area = 3 × 2 = 6 m².",
        guide:"M1 for 3 × 2, A1 for the area 6 m² (correct unit)",
        final:{value:6, unit:"m²"},
        hint:"Area is length × width, in m² this time, not m."},
      {id:"4", t:"parent", m:3, working:true, topic:"time",
        q:"MRT engineering works at a station start at 11:40 a.m. and end at 1:05 p.m. How long do the works take? Give your answer in hours and minutes.",
        model:"11:40 a.m. → 12:00 noon is 20 min. 12:00 noon → 1:05 p.m. is 1 h 5 min. Total = 20 min + 1 h 5 min = 1 h 25 min.",
        guide:"M1 for counting on to noon (20 min), M1 for the remaining time to 1:05 p.m. (1 h 5 min), A1 for the final answer 1 h 25 min",
        final:{value:25, unit:"min"},
        hint:"Count on to 12 noon first."},
      {id:"5", t:"parent", m:3, working:true, topic:"mixed topics",
        q:"A stall at a hawker centre bakes 6 boxes of 8 cupcakes each for a school event. The cupcakes are shared equally among 4 classes. How many cupcakes does each class get?",
        model:"Total cupcakes = 6 × 8 = 48. Each class gets 48 ÷ 4 = 12 cupcakes.",
        guide:"M1 for 6 × 8 = 48, M1 for 48 ÷ 4, A1 for the final answer 12 cupcakes",
        final:{value:12},
        hint:"Work out the total number of cupcakes first."}
    ]}
  ]
};
