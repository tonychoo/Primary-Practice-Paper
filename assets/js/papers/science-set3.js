/* P3 Science Practice Paper, Set 3 (exam mock). Content only: the engine is assets/js/paper.js. Same
   syllabus as Sets 1-2 (Diversity, Cycles — excluding magnets), at real-exam difficulty, with no hints
   (exam conditions). Weighted (~35% of marks) towards the gaps a recent attempt showed: naming the
   CHANGED/KEPT-THE-SAME/MEASURED variable correctly in a fair test (not mixing them up), distinguishing
   a TEST for life from CARE of a living thing, plant life-cycle order using "before/after" wording, and
   naming a property for a stated purpose. */
"use strict";
window.PAPER = {
  id: "p3-science-set3",
  total: 80,
  durationMin: 75,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:40, inst:"Choose the correct answer. Each question is worth 2 marks.", items:[
      {id:"1", t:"mcq", q:"A pupil tests how fast sugar dissolves in three cups of water. Cup 1 has cold water, Cup 2 has warm water, and Cup 3 has hot water. She puts the same amount of sugar in each cup and stirs each one the same number of times. What was CHANGED between the three cups?", o:["Water temperature","Amount of sugar","Number of times stirred","Type of cup"], a:0, m:2, topic:"fair testing"},
      {id:"2", t:"mcq", q:"In the same test, what was KEPT THE SAME for every cup?", o:["The amount of sugar and number of stirs","The temperature of the water","How long she waited for it to dissolve","The colour of the water"], a:0, m:2, topic:"fair testing"},
      {id:"3", t:"mcq", q:"The graph shows how long the sugar took to dissolve in Cup 1 (cold), Cup 2 (warm) and Cup 3 (hot) water. Based on the graph, which cup dissolved the sugar FASTEST?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/bargraph-dissolve-set3.svg", alt:"A bar graph showing the time taken in seconds for sugar to fully dissolve in three cups of water, labelled Cup 1, Cup 2 and Cup 3, with different bar heights"},
        o:["Cup 1","Cup 2","All took the same time","Cup 3"], a:3},
      {id:"4", t:"mcq", q:"What does the bottom of this graph show was changed between the three cups?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/bargraph-dissolve-set3.svg", alt:"A bar graph showing the time taken in seconds for sugar to fully dissolve in three cups of water, labelled Cup 1, Cup 2 and Cup 3, with different bar heights"},
        o:["The temperature of the water","The amount of sugar used","The number of times stirred","The size of the cup"], a:0},
      {id:"5", t:"mcq", q:"Look at the stages of a bean plant's life cycle. Which stage comes right BEFORE the \"seedling\" stage?", m:2, topic:"plant life cycle",
        img:{src:"assets/img/science/life-cycle-plant.svg", alt:"Four unlabelled stages of a plant's life cycle, from a seed to a flowering adult plant, joined by arrows"},
        o:["Seed","Young plant","Adult plant with flowers","Fruit"], a:0},
      {id:"6", t:"mcq", q:"For a seed to germinate (start to grow), which of these does it need?", o:["Sunlight and soil only","Water and air","A flower pot","Fertiliser"], a:1, m:2, topic:"plant life cycle"},
      {id:"7", t:"mcq", q:"Which of these is a living thing?", o:["Statue","Mushroom","Raincoat","Bicycle"], a:1, m:2, topic:"living and non-living"},
      {id:"8", t:"mcq", q:"Which group of animals is usually covered in fur and feeds its young with milk?", o:["Birds","Fish","Insects","Mammals"], a:3, m:2, topic:"animal classification"},
      {id:"9", t:"mcq", q:"Which of these animals hatches from an egg?", o:["Guinea pig","Rabbit","Lizard","Cat"], a:2, m:2, topic:"animal classification"},
      {id:"10", t:"mcq", q:"Which of these is TRUE about bacteria?", o:["They can be seen easily without a microscope","All bacteria cause disease","Bacteria can make their own food using sunlight","Some bacteria are helpful, e.g. in making yoghurt"], a:3, m:2, topic:"fungi and bacteria"},
      {id:"11", t:"mcq", q:"Which of these animals' life cycle has NO pupa stage?", o:["Butterfly","Beetle","Mosquito","Cockroach"], a:3, m:2, topic:"animal life cycles"},
      {id:"12", t:"mcq", q:"A ladybird's life cycle has 4 stages: egg, larva, pupa, adult. Which other animal in this list also has 4 stages?", o:["Cockroach","Grasshopper","Mosquito","Chicken"], a:2, m:2, topic:"animal life cycles"},
      {id:"13", t:"mcq", q:"Which stage of a butterfly's life cycle is when it does NOT eat and its body changes completely?", o:["Egg","Caterpillar (larva)","Pupa","Adult"], a:2, m:2, topic:"animal life cycles"},
      {id:"14", t:"mcq", q:"Which body part does a tadpole lose as it grows into an adult frog?", o:["Tail","Legs","Eyes","Mouth"], a:0, m:2, topic:"animal life cycles"},
      {id:"15", t:"mcq", q:"Which material is flexible (can bend without breaking)?", o:["Glass","Ceramic","Rubber","Dry twig"], a:2, m:2, topic:"materials"},
      {id:"16", t:"mcq", q:"Which of these objects would float in water?", o:["A steel spoon","An empty plastic bottle","A stone","An iron nail"], a:1, m:2, topic:"materials"},
      {id:"17", t:"mcq", q:"Which material is see-through (transparent)?", o:["Wood","Cardboard","Cloth","Clear plastic"], a:3, m:2, topic:"materials"},
      {id:"18", t:"mcq", q:"Which of these is a non-living thing?", o:["Ant","Tree","Rainbow","Bird"], a:2, m:2, topic:"living and non-living"},
      {id:"19", t:"mcq", q:"Which animal is covered in scales and lives mostly in water?", o:["Frog","Fish","Duck","Rabbit"], a:1, m:2, topic:"animal classification"},
      {id:"20", t:"mcq", q:"Mushrooms get their food by...", o:["Making it using sunlight like plants","Breaking down dead or decaying matter","Absorbing it from the air directly as a gas","Photosynthesis in their roots"], a:1, m:2, topic:"fungi and bacteria"}
    ]},
    {id:"B", title:"Section B: Structured Questions", marks:16, inst:"Write a short answer, or tick True or False, for each question. Each question is worth 2 marks.", items:[
      {id:"21", t:"tf", q:"Tick True or False for each statement.", topic:"living things", parts:[
        {id:"21a", s:"(a) Giving a plant fertiliser is a way to TEST whether it is alive.", a:"F"},
        {id:"21b", s:"(b) Watching a plant's leaves slowly turn to face the sunlight is a way to TEST whether it is alive.", a:"T"}
      ]},
      {id:"22", t:"mcq", q:"A pupil tests how far three identical toy cars roll after being pushed with the same force, once on a tile floor, once on a carpet, and once on grass. What was CHANGED in this test?", o:["The surface the car rolls on","The toy car used","The force used to push it","The person doing the test"], a:0, m:2, topic:"fair testing"},
      {id:"23", t:"key", q:"Give one property that makes plastic suitable for making the handle of a cooking pot.", keys:["heat","hot","insulator","insulate","insulates"], model:"Does not get hot easily (it is a poor conductor of heat, or a good insulator).", m:2, topic:"materials"},
      {id:"24", t:"key", q:"Give one property that makes rubber suitable for making a rubber band.", keys:["flexible","elastic","stretchy","stretches"], model:"Flexible (elastic) — it can stretch and bend without breaking.", m:2, topic:"materials"},
      {id:"25", t:"mcq", q:"Which of these is a way fungi are DIFFERENT from green plants?", o:["Fungi can reproduce","Fungi need water","Fungi cannot make their own food using sunlight","Fungi can grow"], a:2, m:2, topic:"fungi and bacteria"},
      {id:"26", t:"tf", q:"Tick True or False for each statement.", topic:"animal life cycles", parts:[
        {id:"26a", s:"(a) A beetle's life cycle has 4 stages, including a pupa.", a:"T"},
        {id:"26b", s:"(b) A grasshopper's life cycle has a pupa stage.", a:"F"}
      ]},
      {id:"27", t:"tf", q:"Tick True or False for each statement.", topic:"materials", parts:[
        {id:"27a", s:"(a) A material that is strong does not tear or break easily.", a:"T"},
        {id:"27b", s:"(b) A material that is waterproof allows water to pass through it easily.", a:"F"}
      ]},
      {id:"28", t:"key", q:"Besides needing food, name ONE other characteristic shared by ALL living things.", keys:["grow","reproduce","breathe","respond","excrete","move"], model:"They grow (or they can reproduce / they respond to their surroundings / they breathe).", m:2, topic:"living things"}
    ]},
    {id:"C", title:"Section C: Open-Ended Questions", marks:24, inst:"Explain your answer in full sentences. Each question is worth 3 marks.", items:[
      {id:"29", t:"parent", m:3, topic:"fair testing",
        q:"A pupil wants to find out which cloth — cotton, paper towel or felt — absorbs the most water. She cuts each cloth to the same size, dips each one into the same amount of water for the same length of time, then weighs how much water each cloth has absorbed. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the type of cloth was changed. The size of each cloth, the amount of water, and the time each cloth was dipped in the water were kept the same. This makes it a fair test because any difference in how much water is absorbed is caused only by the type of cloth, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the type of cloth), 1 mark for correctly stating what was kept the same (size of cloth, amount of water, dipping time), 1 mark for explaining why this makes the test fair."},
      {id:"30", t:"parent", m:3, topic:"fair testing",
        q:"A pupil places identical ice cubes into three containers made of different materials — metal, plastic and styrofoam — and leaves them at the same room temperature. She records how long each ice cube takes to melt completely. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the material of the container was changed. The size of the ice cube and the room temperature were kept the same for every container. This makes it a fair test because any difference in how long the ice takes to melt is caused only by the container's material, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the material of the container), 1 mark for correctly stating what was kept the same (size of ice cube, room temperature), 1 mark for explaining why this makes the test fair."},
      {id:"31", t:"parent", m:3, topic:"living things",
        q:"Describe TWO tests you could carry out to find out whether a small animal you found in the garden is alive, without just looking at it.",
        model:"I could gently touch the animal to see if it responds or moves away, and I could watch closely to see if it is breathing, for example by looking for small movements near its breathing holes.",
        guide:"1 mark for a sensible test of response to touch/stimulus, 1 mark for a second sensible test (e.g. checking for breathing or other movement), 1 mark for a clear, complete explanation. Give 0 marks for actions that are CARE rather than a TEST (e.g. giving it food or water, or moving it somewhere safer) — these do not test whether it is alive."},
      {id:"32", t:"parent", m:3, topic:"fungi and bacteria",
        q:"In MacRitchie forest, mushrooms often grow on a fallen, rotting log. Explain how the mushrooms get their food from the log, and what eventually happens to the log because of this.",
        model:"The mushrooms are fungi, so they cannot make their own food using sunlight. Instead, they feed on the dead wood of the log, breaking it down bit by bit. Over time, this causes the log to rot away and break into smaller pieces.",
        guide:"1 mark for stating that fungi feed on the dead/decaying wood (cannot make their own food), 1 mark for describing that this breaks the wood down, 1 mark for the missing link — that this is why the log eventually rots away / disappears over time."},
      {id:"33", t:"parent", m:3, topic:"animal life cycles",
        q:"A cockroach's life cycle has only 3 stages (egg, nymph, adult), while a beetle's life cycle has 4 stages (egg, larva, pupa, adult). Explain ONE difference between these two life cycles.",
        model:"A cockroach has no pupa stage — its nymph already looks similar to the adult and simply grows bigger after each moult. A beetle, however, goes through a pupa stage, during which its body changes completely from a larva into an adult, which the cockroach never goes through.",
        guide:"1 mark for describing the cockroach nymph as already resembling the adult with no big body change, 1 mark for describing the beetle's pupa stage as a stage of major body change, 1 mark for a clear comparison between the two."},
      {id:"34", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to choose a material to make a raincoat. Explain why plastic would be a good choice, giving TWO properties of plastic that make it suitable.",
        model:"Plastic is a good choice because it is waterproof, so rain does not soak through and wet the person wearing it. It is also flexible, so it is comfortable to move around in and does not crack easily.",
        guide:"1 mark for stating plastic is waterproof, 1 mark for a second correct property (e.g. flexible, lightweight), 1 mark for a clear overall explanation linking the properties to why plastic suits a raincoat."},
      {id:"35", t:"parent", m:3, topic:"fungi and bacteria",
        q:"Hafiz says that mushrooms and the moss growing nearby are the same kind of living thing because both grow in damp, shady places. Explain the KEY difference between fungi (like mushrooms) and plants (like moss).",
        model:"Although both mushrooms and moss can be found growing in damp, shady places, the key difference is that moss, like other plants, can make its own food using sunlight, but mushrooms, which are fungi, cannot make their own food — they get their food by feeding on dead or decaying matter instead.",
        guide:"2 marks for stating the key difference clearly for BOTH sides — fungi like mushrooms cannot make their own food, but plants like moss can make their own food using sunlight (1 mark for each side). 1 mark for noting that growing in the same kind of place does not make them the same kind of living thing."},
      {id:"36", t:"parent", m:3, topic:"plant life cycle",
        q:"A pupil plants two identical seeds. She keeps Seed A moist but keeps Seed B completely dry. After a week, Seed A has sprouted but Seed B has not changed at all. Explain why this happened.",
        model:"A seed needs water (and air) to germinate and start growing. Seed A had water, so it was able to germinate and sprout. Seed B had no water, so it could not start growing even though it is a living seed, and it stayed the same.",
        guide:"1 mark for stating that a seed needs water to germinate, 1 mark for linking this to Seed A sprouting because it had water, 1 mark for the missing link — explaining that Seed B did not germinate because it had no water, even though it is alive."}
    ]}
  ]
};
