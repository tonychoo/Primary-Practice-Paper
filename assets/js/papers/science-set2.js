/* P3 Science Practice Paper, Set 2 (focus practice on open-ended answers). Content only: the engine is
   assets/js/paper.js. Same syllabus as Set 1 (Diversity, Cycles and Interactions, excluding magnets), at
   the same Section A difficulty, with different contexts. Sections B and C are weighted at the gap Set 1
   attempts showed: life cycles (pupa stage, 3- vs 4-stage, tadpole/chick, mosquito/dengue), the key
   difference between fungi and plants, fair-test explanations using a full answer frame, materials
   properties+reason, and distinguishing a test for life from simply caring for an animal. */
"use strict";
window.PAPER = {
  id: "p3-science-set2",
  total: 80,
  durationMin: 75,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:40, inst:"Choose the correct answer. Each question is worth 2 marks.", items:[
      {id:"1", t:"mcq", q:"Which of these is a non-living thing?", o:["Dog","Chair","Ant","Fish"], a:1, m:2, topic:"living and non-living"},
      {id:"2", t:"mcq", q:"Which is a characteristic shared by ALL living things?", o:["Having fur","Being able to fly","Needing air, food and water","Living in water"], a:2, m:2, topic:"living things"},
      {id:"3", t:"mcq", q:"Which part of a plant takes in water and nutrients from the soil?", o:["Leaf","Flower","Root","Stem"], a:2, m:2, topic:"plants"},
      {id:"4", t:"mcq", q:"Which group of animals is usually covered in scales?", o:["Mammals","Birds","Fish","Insects"], a:2, m:2, topic:"animal classification"},
      {id:"5", t:"mcq", q:"Which of these animals gives birth to live young (does not hatch from an egg)?", o:["Chicken","Frog","Cat","Butterfly"], a:2, m:2, topic:"animal classification"},
      {id:"6", t:"mcq", q:"Which of these is NOT true about fungi?", o:["They can reproduce using spores","They can make their own food using sunlight","They feed on dead or decaying matter","Mushrooms are an example of fungi"], a:1, m:2, topic:"fungi and bacteria"},
      {id:"7", t:"mcq", q:"Which material is the best choice for making an umbrella canopy?", o:["Paper","Cotton","Plastic","Wood"], a:2, m:2, topic:"materials"},
      {id:"8", t:"mcq", q:"Which material is most likely to shatter when dropped?", o:["Rubber","Glass","Cloth","Foam"], a:1, m:2, topic:"materials"},
      {id:"9", t:"mcq", q:"Which of these will sink in water?", o:["A plastic bottle cap","A metal spoon","A wooden block","An empty balloon"], a:1, m:2, topic:"materials"},
      {id:"10", t:"mcq", q:"Which stage comes right before the \"young plant\" stage in a bean plant's life cycle?", o:["Adult plant","Flower","Seedling","Fruit"], a:2, m:2, topic:"plant life cycle"},
      {id:"11", t:"mcq", q:"Which animal's life cycle has 4 stages, including a pupa?", o:["Cockroach","Grasshopper","Mosquito","Chicken"], a:2, m:2, topic:"animal life cycles"},
      {id:"12", t:"mcq", q:"Which stage of a frog's life cycle comes right after the egg?", o:["Adult frog","Tadpole","Tadpole with legs","Froglet without a tail"], a:1, m:2, topic:"animal life cycles"},
      {id:"13", t:"mcq", q:"A pupil tests how far three toy cars roll after being pushed with the same force. What is she finding out?", o:["Which car design rolls the farthest","Which car is the heaviest","Which car is the most colourful","Which car was made first"], a:0, m:2, topic:"fair testing"},
      {id:"14", t:"mcq", q:"In a fair test, what does it mean to \"keep a variable the same\"?", o:["Make sure that factor does not change between tests","Change that factor every time","Ignore that factor completely","Only test it once"], a:0, m:2, topic:"fair testing"},
      {id:"15", t:"mcq", q:"The graph shows the height of four bean plants after two weeks. Which plant grew the LEAST?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/bargraph-growth.svg", alt:"A bar graph showing the height after two weeks of four bean plants, A to D, with different bar heights"},
        o:["Plant A","Plant B","Plant C","Plant D"], a:0},
      {id:"16", t:"mcq", q:"Which material would NOT be suitable for making a window, because it is not transparent?", o:["Glass","Clear plastic","Wood","Clear film"], a:2, m:2, topic:"materials"},
      {id:"17", t:"mcq", q:"Which of these does NOT need food to survive?", o:["A tree","A rock","A bird","A fish"], a:1, m:2, topic:"living and non-living"},
      {id:"18", t:"mcq", q:"Which of these animals is covered in fur and feeds its young with milk?", o:["Chicken","Fish","Rabbit","Lizard"], a:2, m:2, topic:"animal classification"},
      {id:"19", t:"mcq", q:"Which of these is a fungus, not a plant?", o:["Fern","Mushroom","Grass","Moss"], a:1, m:2, topic:"fungi and bacteria"},
      {id:"20", t:"mcq", q:"Which pair correctly matches an animal with its number of life-cycle stages?", o:["Cockroach — 4 stages","Butterfly — 3 stages","Mosquito — 4 stages","Chicken — 4 stages"], a:2, m:2, topic:"animal life cycles"}
    ]},
    {id:"B", title:"Section B: Structured Questions", marks:16, inst:"Write a short answer, or tick True or False, for each question. Each question is worth 2 marks.", items:[
      {id:"21", t:"tf", q:"Tick True or False for each statement.", topic:"living things", parts:[
        {id:"21a", s:"(a) Giving an animal food is a way to TEST whether it is alive.", a:"F"},
        {id:"21b", s:"(b) Watching an animal respond when gently touched is a way to TEST whether it is alive.", a:"T"}
      ]},
      {id:"22", t:"tf", q:"Tick True or False for each statement.", topic:"animal life cycles", parts:[
        {id:"22a", s:"(a) A mosquito's life cycle includes a pupa stage.", a:"T"},
        {id:"22b", s:"(b) A cockroach's life cycle includes a pupa stage.", a:"F"}
      ]},
      {id:"23", t:"key", q:"Name ONE place where mosquitoes commonly lay their eggs around a home.", keys:["water"], model:"Stagnant water (e.g. in a flower pot tray or an open container)", m:2, topic:"animal life cycles"},
      {id:"24", t:"key", q:"Give one property that makes rubber suitable for making the soles of shoes.", keys:["waterproof","flexible","grip","slip","strong","durable","tough","hard-wearing","hardwearing"], model:"Waterproof (or flexible / has good grip / strong / durable / hard-wearing)", m:2, topic:"materials"},
      {id:"25", t:"mcq", q:"To find out which type of soil holds the most water, three pots are each filled with the same amount of water. What else should stay the same for every pot?", o:["The amount of soil in each pot","The type of soil in each pot","The colour of the pot","The time of day"], a:0, m:2, topic:"fair testing"},
      {id:"26", t:"mcq", q:"Why is it important to repeat an experiment several times?", o:["To use up more materials","To check that the results are similar each time (reliable)","To make the experiment take longer","To make it harder for other pupils"], a:1, m:2, topic:"fair testing"},
      {id:"27", t:"key", q:"Give one way fungi get their food that is different from how green plants get their food.", keys:["decaying","dead","break down","absorb"], model:"By feeding on dead or decaying matter (not by using sunlight)", m:2, topic:"fungi and bacteria"},
      {id:"28", t:"tf", q:"Tick True or False for each statement.", topic:"materials", parts:[
        {id:"28a", s:"(a) A material that is waterproof lets water pass through it easily.", a:"F"},
        {id:"28b", s:"(b) A material that is flexible can bend without breaking.", a:"T"}
      ]}
    ]},
    {id:"C", title:"Section C: Open-Ended Questions", marks:24, inst:"Explain your answer in full sentences. Each question is worth 3 marks.", items:[
      {id:"29", t:"parent", m:3, topic:"life cycles",
        q:"A caterpillar enters a pupa (chrysalis) before becoming a butterfly. Explain what happens to its body during the pupa stage, and whether it eats or lays eggs during this time.",
        model:"During the pupa stage, the caterpillar's body changes completely into a butterfly — this is a complete change in body shape. While inside the pupa, it does not eat and it does not lay eggs; it stays still while its body changes.",
        guide:"1 mark for describing the complete body change inside the pupa, 1 mark for saying it does not feed during this stage, 1 mark for saying it does not lay eggs during this stage.",
        hint:"Say what changes about its BODY, and whether it eats or lays eggs."},
      {id:"30", t:"parent", m:3, topic:"life cycles",
        q:"A cockroach's life cycle has only 3 stages (egg, nymph, adult), while a mosquito's life cycle has 4 stages (egg, larva, pupa, adult). Explain one difference between the cockroach's nymph stage and the mosquito's stages before it becomes an adult.",
        model:"A cockroach nymph already looks like a small adult cockroach and does not change shape very much as it grows — it has no pupa stage. A mosquito, however, goes through a pupa stage where its body changes completely from a larva into an adult, which the cockroach never goes through.",
        guide:"1 mark for describing the cockroach nymph as already resembling the adult with no big body change, 1 mark for describing the mosquito's pupa stage as a stage of major body change, 1 mark for a clear comparison between the two.",
        hint:"Compare BOTH animals: say what happens to one, then what happens to the other."},
      {id:"31", t:"parent", m:3, topic:"life cycles",
        q:"A tadpole changes a great deal as it grows into an adult frog, but a chick changes very little as it grows into a hen. Describe ONE body change a tadpole goes through that a chick does not.",
        model:"A tadpole starts life breathing through gills and swimming with a tail. As it grows into a frog, it grows four legs, loses its tail, and its gills are replaced by lungs for breathing air. A chick already looks similar to a hen and mostly just grows bigger, without losing a tail or changing how it breathes.",
        guide:"1 mark for describing a specific tadpole body change (e.g. gills to lungs, losing the tail, or growing legs), 1 mark for noting the chick does not go through this kind of change, 1 mark for a clear comparison.",
        hint:"Compare BOTH animals: say what happens to one, then what happens to the other."},
      {id:"32", t:"parent", m:3, topic:"life cycles",
        q:"In Singapore, mosquitoes often lay their eggs in small amounts of stagnant water, such as in flower pot trays. Explain why removing stagnant water around the house helps to prevent dengue fever.",
        model:"Mosquito eggs hatch into larvae that live in water, and the larvae become pupae, also in water, before becoming adult mosquitoes. Without stagnant water for the eggs to be laid in, or for the larvae and pupae to develop in, fewer mosquitoes can grow into adults, so there is less chance of mosquitoes spreading dengue fever.",
        guide:"1 mark for noting that mosquito eggs/larvae/pupae need water to develop, 1 mark for linking removing water to fewer mosquitoes growing into adults, 1 mark for a clear overall explanation connecting this to preventing dengue.",
        hint:"Think about which stages of the mosquito's life cycle happen in water."},
      {id:"33", t:"parent", m:3, topic:"fungi and bacteria",
        q:"Siti says mushrooms and ferns are the same kind of living thing because both can reproduce using spores. Explain the KEY difference between fungi (like mushrooms) and plants (like ferns).",
        model:"Although both mushrooms and ferns can reproduce using spores, the key difference is that plants like ferns can make their own food using sunlight, but fungi like mushrooms cannot make their own food — they get their food by feeding on dead or decaying matter instead.",
        guide:"2 marks for stating the key difference clearly for BOTH sides — fungi like mushrooms cannot make their own food, but plants like ferns can make their own food using sunlight (1 mark for each side). 1 mark for noting that having spores alone does not make them the same kind of living thing (ferns are plants, mushrooms are fungi).",
        hint:"Spores are not the key difference — think about how each one gets its FOOD."},
      {id:"34", t:"parent", m:3, topic:"fair testing",
        q:"A pupil wants to find out which type of paper, thin or thick, is the strongest. She hangs the same weights on strips of each type of paper, of the same length and width, until they tear. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the type of paper (thin or thick) was changed. The length, width and the weights used were kept the same for every strip. This makes it a fair test because any difference in how much weight a strip holds before tearing is caused only by the type of paper, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the type of paper), 1 mark for correctly stating what was kept the same (length, width, weights used), 1 mark for explaining why this makes the test fair.",
        hint:"Use the frame: Only the ___ was changed, so any difference in ___ is caused by ___.",
        explain:"Changed: the type of paper (thin or thick). Kept the same: the length, width and weights used. Measured: how much weight each strip held before it tore. Don't mix these up — the weights are part of what was kept the same (every strip was tested the same way), not the thing that was changed."},
      {id:"35", t:"parent", m:3, topic:"fair testing",
        q:"A pupil wants to find out which material — foam, cloth or plastic — keeps a cup of hot water warm the longest. She wraps each material around an identical cup filled with the same amount of hot water at the same starting temperature, and checks the temperature after 10 minutes. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the material wrapped around the cup was changed. The amount of water, the starting temperature, the cup, and the time waited were all kept the same. This makes it a fair test because any difference in temperature after 10 minutes is caused only by the material used, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the material), 1 mark for correctly stating what was kept the same (amount of water, starting temperature, cup, time), 1 mark for explaining why this makes the test fair.",
        hint:"Use the frame: Only the ___ was changed, so any difference in ___ is caused by ___.",
        explain:"Changed: the material wrapped around the cup (foam, cloth or plastic). Kept the same: the amount of water, the starting temperature, the cup, and the time waited. Measured: the temperature of the water after 10 minutes. Don't mix these up — temperature is what was MEASURED at the end, not what was changed."},
      {id:"36", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to choose a material to make a school bag. Explain why canvas fabric would be a good choice, giving its properties and the reason each one matters.",
        model:"Canvas fabric is strong, so it does not tear easily even when carrying heavy books. It is also flexible, so it is comfortable to carry and can bend without cracking. These properties make it suitable because a school bag needs to hold weight and be comfortable to use every day.",
        guide:"1 mark for a correct property (e.g. strong, does not tear), 1 mark for a second correct property with its reason (e.g. flexible, so comfortable or does not crack), 1 mark for a clear overall explanation linking the properties to the purpose.",
        hint:"Use the frame: ___ is suitable because it is ___, so ___."}
    ]}
  ]
};
