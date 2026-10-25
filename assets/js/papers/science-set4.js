/* P3 Science Practice Paper, Set 4 (focus practice). Content only: the engine is assets/js/paper.js. Same
   syllabus as Sets 1-3 (Diversity, Cycles — excluding magnets), with a hint on every Section C item (the
   answer frame, never the answer). Weighted (~35% of marks) towards the gaps a recent attempt showed:
   naming the CHANGED/KEPT-THE-SAME/MEASURED variable correctly in a fair test, distinguishing a TEST for
   life from CARE of a living thing, plant life-cycle order using "before/after" wording, and naming a
   property for a stated purpose. */
"use strict";
window.PAPER = {
  id: "p3-science-set4",
  total: 80,
  durationMin: 75,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:40, inst:"Choose the correct answer. Each question is worth 2 marks.", items:[
      {id:"1", t:"mcq", q:"A pupil grows three identical bean plants, giving Plant 1 a little water, Plant 2 a medium amount of water, and Plant 3 a lot of water each day. She gives all three plants the same amount of sunlight and the same type of soil. What was CHANGED in this test?", o:["The amount of water given","The amount of sunlight given","The type of soil used","The size of the pot"], a:0, m:2, topic:"fair testing"},
      {id:"2", t:"mcq", q:"What was KEPT THE SAME in this test?", o:["The amount of sunlight and the type of soil","The amount of water given","The colour of the pot","How tall each plant grew"], a:0, m:2, topic:"fair testing"},
      {id:"3", t:"mcq", q:"The graph shows the height of the three plants after two weeks. Based on the graph, which plant grew the TALLEST?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/bargraph-water-set4.svg", alt:"A bar graph showing the height in centimetres of three bean plants after two weeks, labelled Plant 1, Plant 2 and Plant 3, with different bar heights"},
        o:["Plant 1 (little water)","Plant 2 (medium water)","Plant 3 (lots of water)","All grew the same height"], a:1},
      {id:"4", t:"mcq", q:"What does the bottom of this graph show was changed between the three plants?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/bargraph-water-set4.svg", alt:"A bar graph showing the height in centimetres of three bean plants after two weeks, labelled Plant 1, Plant 2 and Plant 3, with different bar heights"},
        o:["The amount of water given to each plant","The amount of sunlight given","The type of soil used","The size of the pot"], a:0},
      {id:"5", t:"mcq", q:"Look at the stages of a bean plant's life cycle. Which stage comes right AFTER the \"young plant\" stage?", m:2, topic:"plant life cycle",
        img:{src:"assets/img/science/life-cycle-plant.svg", alt:"Four unlabelled stages of a plant's life cycle, from a seed to a flowering adult plant, joined by arrows"},
        o:["Seed","Seedling","Adult plant with flowers and fruits","Nothing — the plant stops growing"], a:2},
      {id:"6", t:"mcq", q:"Which condition is NOT needed for a seed to germinate?", o:["Water","Air","Sunlight","A suitable temperature"], a:2, m:2, topic:"plant life cycle"},
      {id:"7", t:"mcq", q:"Which of these is a non-living thing?", o:["Seaweed","Bacteria","Butterfly","Icicle"], a:3, m:2, topic:"living and non-living"},
      {id:"8", t:"mcq", q:"Which group of animals usually lays eggs and is covered in feathers?", o:["Mammals","Fish","Reptiles","Birds"], a:3, m:2, topic:"animal classification"},
      {id:"9", t:"mcq", q:"Which of these animals gives birth to live young?", o:["Hen","Frog","Butterfly","Dog"], a:3, m:2, topic:"animal classification"},
      {id:"10", t:"mcq", q:"Which of these is an example of a fungus?", o:["Yeast","Fern","Grass","Pigeon"], a:0, m:2, topic:"fungi and bacteria"},
      {id:"11", t:"mcq", q:"Which animal's life cycle includes the stages egg, nymph, adult (no pupa)?", o:["Butterfly","Mosquito","Beetle","Cockroach"], a:3, m:2, topic:"animal life cycles"},
      {id:"12", t:"mcq", q:"How many main stages are there in a mosquito's life cycle?", o:["2","3","4","5"], a:2, m:2, topic:"animal life cycles"},
      {id:"13", t:"mcq", q:"Which stage of a mosquito's life cycle comes right after the larva stage?", o:["Egg","Pupa","Adult","Nymph"], a:1, m:2, topic:"animal life cycles"},
      {id:"14", t:"mcq", q:"Which of these best describes a tadpole with legs, just before it becomes a froglet?", o:["It has no tail and breathes with lungs only","It still has a tail and is starting to breathe air","It has turned back into an egg","It has grown wings"], a:1, m:2, topic:"animal life cycles"},
      {id:"15", t:"mcq", q:"Which material would be most suitable for making the lens of a pair of spectacles?", o:["Wood","Cloth","Cardboard","Clear glass or plastic"], a:3, m:2, topic:"materials"},
      {id:"16", t:"mcq", q:"Which of these objects is most likely to sink in water?", o:["A piece of cork","An inflated balloon","A small iron key","A dry leaf"], a:2, m:2, topic:"materials"},
      {id:"17", t:"mcq", q:"Which material bends easily and returns to its original shape?", o:["Glass","A rubber band","A ceramic bowl","A dry twig"], a:1, m:2, topic:"materials"},
      {id:"18", t:"mcq", q:"Which of these is a living thing?", o:["Candle","Cactus","Clock","Cushion"], a:1, m:2, topic:"living and non-living"},
      {id:"19", t:"mcq", q:"Which animal is covered in smooth, moist skin (no scales, fur or feathers) and can live both on land and in water?", o:["Frog","Fish","Lizard","Duck"], a:0, m:2, topic:"animal classification"},
      {id:"20", t:"mcq", q:"Which of these statements about fungi is TRUE?", o:["Fungi make their own food through photosynthesis","Fungi reproduce only by seeds","Fungi can reproduce using spores","Fungi are a type of plant"], a:2, m:2, topic:"fungi and bacteria"}
    ]},
    {id:"B", title:"Section B: Structured Questions", marks:16, inst:"Write a short answer, or tick True or False, for each question. Each question is worth 2 marks.", items:[
      {id:"21", t:"tf", q:"Tick True or False for each statement.", topic:"living things", parts:[
        {id:"21a", s:"(a) Moving a sick bird to a warmer, sheltered spot is a way to TEST whether it is alive.", a:"F"},
        {id:"21b", s:"(b) Checking whether an animal's chest rises and falls (breathing) is a way to TEST whether it is alive.", a:"T"}
      ]},
      {id:"22", t:"mcq", q:"A pupil drops a rubber ball, a tennis ball and a foam ball from the same height onto the same floor, one at a time. What should she measure to compare them fairly?", o:["How high each ball bounces","The colour of each ball","The weight of each ball","The time of day she drops them"], a:0, m:2, topic:"fair testing"},
      {id:"23", t:"key", q:"Give one property that makes plastic suitable for making a pail (bucket) for carrying water.", keys:["waterproof","strong","durable"], model:"Waterproof (it does not let water leak or soak through) — and strong enough to hold the weight of the water.", m:2, topic:"materials"},
      {id:"24", t:"key", q:"Give one property that makes glass or clear plastic suitable for the screen placed over food at a hawker stall.", keys:["transparent","clear","see"], model:"Transparent (clear / see-through), so customers can see the food through it.", m:2, topic:"materials"},
      {id:"25", t:"mcq", q:"Which of these would be the BEST place to find mushrooms growing?", o:["A sunny, dry rooftop","A patch of damp, decaying leaves","Inside a clean, dry cupboard","On a smooth glass window"], a:1, m:2, topic:"fungi and bacteria"},
      {id:"26", t:"tf", q:"Tick True or False for each statement.", topic:"animal life cycles", parts:[
        {id:"26a", s:"(a) A chicken's life cycle has 4 stages, including a pupa.", a:"F"},
        {id:"26b", s:"(b) A cockroach nymph looks similar to the adult cockroach.", a:"T"}
      ]},
      {id:"27", t:"tf", q:"Tick True or False for each statement.", topic:"materials", parts:[
        {id:"27a", s:"(a) A transparent material lets you see through it clearly.", a:"T"},
        {id:"27b", s:"(b) A flexible material breaks easily when you try to bend it.", a:"F"}
      ]},
      {id:"28", t:"key", q:"Besides needing air, name ONE other thing all living things need to survive.", keys:["food","water","nutrient"], model:"Food (or nutrients) and water.", m:2, topic:"living things"}
    ]},
    {id:"C", title:"Section C: Open-Ended Questions", marks:24, inst:"Explain your answer in full sentences. Each question is worth 3 marks. A hint is available for every question — try the question first.", items:[
      {id:"29", t:"parent", m:3, topic:"fair testing",
        q:"A pupil wants to find out whether stirring more makes sugar dissolve faster. She adds the same amount of sugar to the same amount of water at the same temperature, then stirs one cup 5 times, another cup 20 times, and a third cup 50 times, timing how long the sugar takes to fully dissolve each time. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the number of times the water was stirred was changed. The amount of sugar, the amount of water, and the water's starting temperature were kept the same for every cup. This makes it a fair test because any difference in how fast the sugar dissolves is caused only by the amount of stirring, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the number of stirs), 1 mark for correctly stating what was kept the same (amount of sugar, amount of water, starting temperature), 1 mark for explaining why this makes the test fair.",
        hint:"Use the frame: Only the ___ was changed, so any difference in ___ is caused by ___."},
      {id:"30", t:"parent", m:3, topic:"fair testing",
        q:"A pupil releases the same toy car from the top of a ramp set at three different heights, letting it roll onto the same flat floor each time, and measures how far it rolls before stopping. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the height of the ramp was changed. The toy car used and the floor it rolled onto were kept the same for every release. This makes it a fair test because any difference in how far the car rolls is caused only by the height of the ramp, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the height of the ramp), 1 mark for correctly stating what was kept the same (the toy car, the floor), 1 mark for explaining why this makes the test fair.",
        hint:"Use the frame: Only the ___ was changed, so any difference in ___ is caused by ___."},
      {id:"31", t:"parent", m:3, topic:"living things",
        q:"A pupil finds a caterpillar that is not moving. Describe TWO tests she could do to find out whether it is alive, other than just looking at it.",
        model:"She could gently touch the caterpillar to see if it curls up or moves away, and she could watch closely to see if it is breathing or slowly moving any part of its body.",
        guide:"1 mark for a sensible test of response to touch/stimulus, 1 mark for a second sensible test (e.g. checking for breathing or slow movement), 1 mark for a clear, complete explanation. Give 0 marks for actions that are CARE rather than a TEST (e.g. giving it a leaf to eat, or moving it to a safer spot).",
        hint:"Think of two things you could DO to the caterpillar or WATCH it do, not ways of caring for it."},
      {id:"32", t:"parent", m:3, topic:"animal life cycles",
        q:"NEA posters remind Singaporeans to clear stagnant water around the home to prevent dengue fever. Explain why removing stagnant water helps to reduce the number of mosquitoes.",
        model:"Mosquito eggs hatch into larvae that live in water, and the larvae grow into pupae, which also stay in the water, before becoming adult mosquitoes. Without stagnant water for the eggs, larvae and pupae to develop in, fewer mosquitoes can grow into adults, so there is less chance of dengue spreading.",
        guide:"1 mark for noting that mosquito eggs/larvae/pupae need water to develop, 1 mark for linking removing water to fewer mosquitoes growing into adults, 1 mark for a clear overall explanation connecting this to preventing dengue.",
        hint:"Think about which stages of the mosquito's life cycle happen in water."},
      {id:"33", t:"parent", m:3, topic:"animal life cycles",
        q:"A tadpole changes a great deal as it grows into an adult frog, but a chick changes very little as it grows into a hen. Describe ONE body change a tadpole goes through that a chick does not.",
        model:"A tadpole starts life breathing through gills and swimming with a tail. As it grows into a frog, it grows four legs, loses its tail, and its gills are replaced by lungs for breathing air. A chick already looks similar to a hen and mostly just grows bigger, without losing a tail or changing how it breathes.",
        guide:"1 mark for describing a specific tadpole body change (e.g. gills to lungs, losing the tail, or growing legs), 1 mark for noting the chick does not go through this kind of change, 1 mark for a clear comparison.",
        hint:"Compare BOTH animals: say what happens to one, then what happens to the other."},
      {id:"34", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to choose a material for the handle of an umbrella. Explain why wood would be a good choice, giving TWO properties of wood that make it suitable.",
        model:"Wood is a good choice because it is strong, so it does not snap easily when gripped firmly. It also does not get slippery when wet, so it is comfortable and safe to hold even in the rain.",
        guide:"1 mark for stating wood is strong, 1 mark for a second correct property (e.g. does not get slippery, comfortable grip), 1 mark for a clear overall explanation linking the properties to why wood suits an umbrella handle.",
        hint:"Use the frame: ___ is suitable because it is ___, so ___."},
      {id:"35", t:"parent", m:3, topic:"fungi and bacteria",
        q:"Mei says that mushrooms and grass are the same kind of living thing because both can be found growing on the ground at a park. Explain the KEY difference between fungi (like mushrooms) and plants (like grass).",
        model:"Although both mushrooms and grass can be found growing on the ground, the key difference is that grass, like other plants, can make its own food using sunlight, but mushrooms, which are fungi, cannot make their own food — they get their food by feeding on dead or decaying matter instead.",
        guide:"2 marks for stating the key difference clearly for BOTH sides — fungi like mushrooms cannot make their own food, but plants like grass can make their own food using sunlight (1 mark for each side). 1 mark for noting that growing in the same place does not make them the same kind of living thing.",
        hint:"Where they grow is not the key difference — think about how each one gets its FOOD."},
      {id:"36", t:"parent", m:3, topic:"plant life cycle",
        q:"A pupil plants two identical seeds in pots of soil. She places Pot A near a window and Pot B inside a dark, sealed box, but gives both pots the same amount of water. After a week, both seeds have germinated and sprouted small shoots. Explain why Seed B was still able to germinate even without light.",
        model:"A seed needs water and air to germinate, but it does not need light to germinate. Since Pot B still received water and air, Seed B was able to germinate and sprout even though it was kept in the dark. Light only becomes important later, for the young plant to grow well and make its own food.",
        guide:"1 mark for stating that germination needs water and air, not light, 1 mark for linking this to Seed B still germinating because it had water and air, 1 mark for the missing link — noting that light only matters later for growth, not for germination itself.",
        hint:"Germination and growing afterwards need different things — which one needs light?"}
    ]}
  ]
};
