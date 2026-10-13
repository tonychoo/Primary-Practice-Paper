/* P3 Science Practice Paper, Set 1 (Diversity, Cycles and Interactions — excluding magnets). Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-science-set1",
  total: 80,
  durationMin: 75,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:40, inst:"Choose the correct answer. Each question is worth 2 marks.", items:[
      {id:"1", t:"mcq", q:"Which of these is a living thing?", o:["Rock","Table","Plant","Chair"], a:2, m:2, topic:"living and non-living"},
      {id:"2", t:"mcq", q:"Which of these is NOT a characteristic shared by all living things?", o:["They grow","They need food or nutrients","They have wheels","They can reproduce"], a:2, m:2, topic:"living things"},
      {id:"3", t:"mcq", q:"Which plant is a non-flowering plant?", m:2, topic:"plants",
        o:["Fern","Sunflower","Hibiscus","Moss"],
        oImg:[{src:"assets/img/science/plant-fern.svg",alt:"A fern with many small leaflets along a stem, no flower"},
              {src:"assets/img/science/plant-sunflower.svg",alt:"A plant with a large yellow flower"},
              {src:"assets/img/science/plant-hibiscus.svg",alt:"A plant with a five-petalled flower"},
              {src:"assets/img/science/plant-moss.svg",alt:"A low, bumpy green patch with no visible stem or flower"}], a:0},
      {id:"4", t:"mcq", q:"Which group of animals is usually covered in feathers?", o:["Mammals","Birds","Fish","Reptiles"], a:1, m:2, topic:"animal classification"},
      {id:"5", t:"mcq", q:"Which of these animals hatches from an egg?", o:["Dog","Cat","Chicken","Rabbit"], a:2, m:2, topic:"animal classification"},
      {id:"6", t:"mcq", q:"Mushrooms belong to which group of living things?", o:["Plants","Animals","Fungi","Bacteria"], a:2, m:2, topic:"fungi and bacteria"},
      {id:"7", t:"mcq", q:"Which material would be the best choice for making a raincoat?", o:["Cotton","Paper","Plastic","Wool"], a:2, m:2, topic:"materials"},
      {id:"8", t:"mcq", q:"Which material bends easily without breaking?", o:["Glass","A rubber band","Wood","A ceramic plate"], a:1, m:2, topic:"materials"},
      {id:"9", t:"mcq", q:"Which object will float in water?", o:["An iron nail","A stone","A wooden block","A metal coin"], a:2, m:2, topic:"materials"},
      {id:"10", t:"mcq", q:"Look at the stages of a bean plant's life cycle. Which stage comes right after the seed germinates?", m:2, topic:"plant life cycle",
        img:{src:"assets/img/science/life-cycle-plant.svg", alt:"Four unlabelled stages of a plant's life cycle, from a seed to a flowering adult plant, joined by arrows"},
        o:["Seedling","Adult plant with flowers","Fruit","Seed again"], a:0},
      {id:"11", t:"mcq", q:"Which animal has a life cycle with only 3 stages (egg, nymph, adult — no pupa stage)?", o:["Butterfly","Mosquito","Cockroach","Beetle"], a:2, m:2, topic:"animal life cycles"},
      {id:"12", t:"mcq", q:"Look at the stages of a frog's life cycle. Which of these is NOT actually one of its stages?", m:2, topic:"animal life cycles",
        img:{src:"assets/img/science/life-cycle-frog.svg", alt:"Four unlabelled stages of a frog's life cycle, from egg to adult frog, joined by arrows"},
        o:["Egg","Tadpole","Pupa","Adult frog"], a:2},
      {id:"13", t:"mcq", q:"Which animal's life cycle includes a pupa stage?", o:["Frog","Cockroach","Butterfly","Chicken"], a:2, m:2, topic:"animal life cycles"},
      {id:"14", t:"mcq", q:"Which material is transparent?", o:["Wood","Glass","Metal","Cloth"], a:1, m:2, topic:"materials"},
      {id:"15", t:"mcq", q:"Which of these is a non-living thing?", o:["Tree","Bird","Cloud","Fish"], a:2, m:2, topic:"living and non-living"},
      {id:"16", t:"mcq", q:"Which part of a flowering plant usually produces its seeds?", o:["Root","Stem","Flower","Leaf"], a:2, m:2, topic:"plants"},
      {id:"17", t:"mcq", q:"Three strips of material are tested for strength by hanging weights on them. To make this a fair test, what must stay the same for every strip?", o:["The colour of the material","The length and width of each strip","The time of day","The name of the person testing it"], a:1, m:2, topic:"fair testing"},
      {id:"18", t:"mcq", q:"A pupil wants to find out which material is the most waterproof. What should she keep the same for every material tested?", o:["The amount of water dripped and the time waited","The type of material","The colour of the water","The name of the material"], a:0, m:2, topic:"fair testing"},
      {id:"19", t:"mcq", q:"The graph shows how tall four bean plants grew in two weeks, each given a different amount of sunlight. Which plant most likely received the most sunlight?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/bargraph-growth.svg", alt:"A bar graph showing the height after two weeks of four bean plants, A to D, with different bar heights"},
        o:["Plant A","Plant B","Plant C","Plant D"], a:2},
      {id:"20", t:"mcq", q:"Which material is most suitable for making a window pane?", o:["Wood","Glass","Fabric","Cardboard"], a:1, m:2, topic:"materials"}
    ]},
    {id:"B", title:"Section B: Structured Questions", marks:16, inst:"Write a short answer, or tick True or False, for each question. Each question is worth 2 marks.", items:[
      {id:"21", t:"tf", q:"Tick True or False for each statement.", topic:"living things", parts:[
        {id:"21a", s:"(a) All living things need food or nutrients to survive.", a:"T"},
        {id:"21b", s:"(b) All living things are big enough to see without a microscope.", a:"F"}
      ]},
      {id:"22", t:"tf", q:"Tick True or False for each statement.", topic:"plants", parts:[
        {id:"22a", s:"(a) A fern reproduces using spores, not seeds.", a:"T"},
        {id:"22b", s:"(b) All plants produce flowers.", a:"F"}
      ]},
      {id:"23", t:"key", q:"Give one property that makes a material suitable for making a raincoat.", keys:["waterproof"], model:"Waterproof", m:2, topic:"materials"},
      {id:"24", t:"key", q:"Give one property that makes a material suitable for making a window.", keys:["transparent","clear","see"], model:"Transparent (clear / see-through)", m:2, topic:"materials"},
      {id:"25", t:"mcq", q:"In an experiment to find out which of three cloths absorbs the most water, each cloth is dipped into the same amount of water for the same length of time. What should the pupils measure?", o:["The colour change of the cloth","The weight or amount of water absorbed","The smell of the cloth afterwards","The size of the cloth"], a:1, m:2, topic:"fair testing"},
      {id:"26", t:"mcq", q:"Why should a science experiment be repeated more than once?", o:["To use up more time","To make the results more reliable","To make the experiment harder","To use up more materials"], a:1, m:2, topic:"fair testing"},
      {id:"27", t:"key", q:"Name the stage of a butterfly's life cycle between the larva (caterpillar) and the adult butterfly.", keys:["pupa","chrysalis"], model:"Pupa (chrysalis)", m:2, topic:"animal life cycles"},
      {id:"28", t:"tf", q:"Tick True or False for each statement.", topic:"animal life cycles", parts:[
        {id:"28a", s:"(a) A cockroach's life cycle has 3 stages: egg, nymph and adult.", a:"T"},
        {id:"28b", s:"(b) A chicken's life cycle includes a pupa stage.", a:"F"}
      ]}
    ]},
    {id:"C", title:"Section C: Open-Ended Questions", marks:24, inst:"Explain your answer in a full sentence. Each question is worth 3 marks.", items:[
      {id:"29", t:"parent", m:3, topic:"plants",
        q:"A plant kept in a dark cupboard for two weeks grew tall and thin, with pale yellow leaves instead of green ones. Explain why this happened.",
        model:"The plant did not get enough sunlight. Without light, a plant cannot make its own food properly, and its leaves cannot make the green colouring (chlorophyll), so the leaves turned pale and the plant grew weak and thin as it stretched to search for light.",
        guide:"1 mark for mentioning the lack of sunlight/light, 1 mark for linking this to the plant being unable to make food or green colouring (chlorophyll) without light, 1 mark for describing the effect (pale/yellow leaves, weak or thin growth). Full marks for a clear, complete explanation."},
      {id:"30", t:"parent", m:3, topic:"living things",
        q:"A pupil found a snail that is not moving and does not respond when touched gently. Describe two other ways she could test whether the snail is alive, other than just looking at it.",
        model:"She could gently touch the snail's body again, perhaps near its head, to see if it responds or pulls back, and she could watch closely for any slow movement, such as breathing near its breathing hole, or place a small piece of food nearby to see if it reacts.",
        guide:"1 mark for a sensible test of response to touch/stimulus, 1 mark for a second sensible test (e.g. checking for breathing, reaction to food), 1 mark for a clear, complete explanation. Accept other reasonable tests of a sign of life."},
      {id:"31", t:"parent", m:3, topic:"fungi and bacteria",
        q:"Siti says, \"Mushrooms are plants because they grow in soil.\" Explain why Siti is incorrect.",
        model:"Mushrooms are not plants. They belong to a different group of living things called fungi. Unlike green plants, fungi cannot make their own food using sunlight — they get their food by breaking down dead or living things instead.",
        guide:"1 mark for stating mushrooms are fungi, not plants, 1 mark for stating fungi cannot make their own food from sunlight (or do not have chlorophyll), 1 mark for a clear overall explanation."},
      {id:"32", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to make a bag to carry heavy books. Explain why a bag made of thin paper would not be a good choice, and suggest a better material.",
        model:"Thin paper is not strong, so it would tear easily under the weight of heavy books. A better material would be something strong and flexible, such as canvas fabric or thick plastic, which can hold the weight without tearing.",
        guide:"1 mark for identifying that paper is weak or tears easily, 1 mark for suggesting a suitable alternative material, 1 mark for explaining why the alternative is better (e.g. strong, does not tear)."},
      {id:"33", t:"parent", m:3, topic:"animal life cycles",
        q:"A caterpillar changes into a butterfly through a pupa stage, but a cockroach nymph already looks similar to an adult cockroach. Explain one difference between these two life cycles.",
        model:"A butterfly's life cycle includes a pupa stage, during which its body changes completely from a caterpillar into a butterfly. A cockroach's life cycle has no pupa stage — the nymph already looks like a small adult and simply grows bigger after each moult, without such a big change in body shape.",
        guide:"1 mark for mentioning the pupa stage in the butterfly's cycle, 1 mark for noting the cockroach has no pupa stage and the nymph resembles the adult, 1 mark for a clear comparison."},
      {id:"34", t:"parent", m:3, topic:"plants",
        q:"Some farmers in Singapore grow vegetables using layers of foam that float on water instead of soil. Suggest one advantage of this method, and one problem that could occur if the water is not changed regularly.",
        model:"One advantage is that the plants' roots can easily take in water and nutrients that are dissolved in it, so the plants may grow well without soil. One problem is that if the water is not changed, it could run out of nutrients, become dirty, or let algae and bacteria grow, which could harm the plant roots.",
        guide:"1 mark for a sensible advantage (e.g. easy access to water and nutrients, no soil needed), 1 mark for a sensible problem from not changing the water, 1 mark for clear reasoning."},
      {id:"35", t:"parent", m:3, topic:"fair testing",
        q:"A pupil tested three balls — a rubber ball, a glass marble and a foam ball — by dropping each from the same height onto the floor and observing how high it bounced. Explain why dropping them from the same height was important for this experiment.",
        model:"Dropping all three balls from the same height makes the test fair, because the height they are dropped from stays the same for every ball. This means any difference in how high they bounce must be caused by the material of the ball, not by a difference in drop height.",
        guide:"1 mark for identifying that it keeps the test fair, 1 mark for explaining that only the ball's material should differ, 1 mark for a clear overall explanation."},
      {id:"36", t:"parent", m:3, topic:"animal life cycles",
        q:"A tadpole looks very different from an adult frog, while a chick looks quite similar to an adult chicken. Explain this difference.",
        model:"A tadpole undergoes a big change in body shape as it grows into an adult frog — it starts with no legs and a tail for swimming, then slowly grows legs and loses its tail. A chick, however, already has a body shape similar to an adult chicken from a young age and mainly just grows bigger as it matures, without such a big change.",
        guide:"1 mark for describing the tadpole's major body changes, 1 mark for noting the chick already resembles the adult chicken, 1 mark for a clear comparison."}
    ]}
  ]
};
