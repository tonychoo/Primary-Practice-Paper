/* P3 Science Practice Paper, Set 5 (challenge). Content only: the engine is assets/js/paper.js. Same
   syllabus as Sets 1-4 (Diversity, Cycles — excluding magnets), with harder applied contexts (a results
   table, unfamiliar animals and materials, two-step reasoning), still within the P3 syllabus, and no
   hints. Weighted (~35% of marks) towards the gaps a recent attempt showed: naming the CHANGED/KEPT-THE-
   SAME/MEASURED variable correctly in a fair test, distinguishing a TEST for life from CARE of a living
   thing, plant life-cycle order using "before/after" wording, and naming a property for a stated purpose. */
"use strict";
window.PAPER = {
  id: "p3-science-set5",
  total: 80,
  durationMin: 75,
  sections: [
    {id:"A", title:"Section A: Multiple-Choice Questions", marks:40, inst:"Choose the correct answer. Each question is worth 2 marks.", items:[
      {id:"1", t:"mcq", q:"A pupil pours the same amount of water into three identical pots, each filled with a different type of soil — sandy soil, clay soil, and loamy soil — and times how long the water takes to fully drain through each pot. What was CHANGED in this test?", o:["The type of soil","The amount of water poured","The size of the pot","The person pouring the water"], a:0, m:2, topic:"fair testing"},
      {id:"2", t:"mcq", q:"What was KEPT THE SAME in this test?", o:["The amount of water poured and the size of the pot","The type of soil","How long the water took to drain","The colour of the soil"], a:0, m:2, topic:"fair testing"},
      {id:"3", t:"mcq", q:"The table shows how long the water took to drain through each type of soil. Based on the table, which soil drained the water FASTEST?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/table-soil-set5.svg", alt:"A results table showing the time in seconds for water to drain through three types of soil, labelled Soil A, Soil B and Soil C"},
        o:["Soil A","Soil B","Soil C","All drained at the same speed"], a:0},
      {id:"4", t:"mcq", q:"What is the one thing in this table that was changed between Soil A, Soil B and Soil C?", m:2, topic:"fair testing",
        img:{src:"assets/img/science/table-soil-set5.svg", alt:"A results table showing the time in seconds for water to drain through three types of soil, labelled Soil A, Soil B and Soil C"},
        o:["The amount of water used","The size of the pot","The time of day","The type of soil"], a:3},
      {id:"5", t:"mcq", q:"Look at the stages of a bean plant's life cycle. Which of these happens right after the adult plant produces flowers and fruits, starting the cycle again?", m:2, topic:"plant life cycle",
        img:{src:"assets/img/science/life-cycle-plant.svg", alt:"Four unlabelled stages of a plant's life cycle, from a seed to a flowering adult plant, joined by arrows"},
        o:["Seedling","Young plant","New seeds","Roots"], a:2},
      {id:"6", t:"mcq", q:"Two identical seeds are both given water and air, but Seed X is kept at a warm room temperature while Seed Y is kept inside a freezer. Which seed is most likely to germinate?", o:["Seed X","Seed Y","Both will germinate equally well","Neither will germinate"], a:0, m:2, topic:"plant life cycle"},
      {id:"7", t:"mcq", q:"Which of these is a living thing?", o:["A dried flower in a vase","A stuffed toy animal","A photograph of a dog","A pot of basil growing on a windowsill"], a:3, m:2, topic:"living and non-living"},
      {id:"8", t:"mcq", q:"A bat is covered in fur and feeds its young with milk. Which group of animals does it belong to?", o:["Birds","Insects","Mammals","Reptiles"], a:2, m:2, topic:"animal classification"},
      {id:"9", t:"mcq", q:"Which of these animals does NOT hatch from an egg?", o:["Chicken","Butterfly","Guinea pig","Lizard"], a:2, m:2, topic:"animal classification"},
      {id:"10", t:"mcq", q:"A pupil notices that a damp towel left bunched up in a gym bag for a week starts to smell and develops mould. Which condition most likely helped the mould to grow?", o:["The towel was kept completely dry","The towel was left in direct sunlight","The towel was frozen","The towel was kept damp and in the dark"], a:3, m:2, topic:"fungi and bacteria"},
      {id:"11", t:"mcq", q:"Which TWO animals in this list both have a life cycle with a pupa stage?", o:["Cockroach and grasshopper","Chicken and frog","Mosquito and beetle","Cockroach and chicken"], a:2, m:2, topic:"animal life cycles"},
      {id:"12", t:"mcq", q:"A dragonfly's life cycle (egg, nymph, adult) is most similar to which of these animals?", o:["Butterfly","Mosquito","Cockroach","Beetle"], a:2, m:2, topic:"animal life cycles"},
      {id:"13", t:"mcq", q:"Which of these is the correct order of a frog's life cycle, starting from the egg?", o:["Egg → Froglet → Tadpole → Adult frog","Egg → Adult frog → Tadpole","Tadpole → Egg → Adult frog","Egg → Tadpole → Tadpole with legs → Adult frog"], a:3, m:2, topic:"animal life cycles"},
      {id:"14", t:"mcq", q:"Which stage of a beetle's life cycle looks most different from the adult beetle?", o:["Egg","Larva","Pupa","Adult"], a:1, m:2, topic:"animal life cycles"},
      {id:"15", t:"mcq", q:"A canvas awning at a market stall needs to keep rain off the stalls below. Which property is MOST important for the awning's material?", o:["Transparent","Waterproof","Magnetic","Edible"], a:1, m:2, topic:"materials"},
      {id:"16", t:"mcq", q:"Which of these would be the best choice for making a flask to keep a drink cold or hot for several hours?", o:["Thin paper cup","Double-walled insulated steel","Clear plastic cup","Open ceramic bowl"], a:1, m:2, topic:"materials"},
      {id:"17", t:"mcq", q:"Which object would float on water due to trapped air inside it, even though it is made of a material that can sink?", o:["A solid metal cube","A wet paper towel","A smooth pebble","A closed empty plastic bottle"], a:3, m:2, topic:"materials"},
      {id:"18", t:"mcq", q:"Which of these is a non-living thing?", o:["A growing crystal","A growing seedling","A growing puppy","A growing colony of bacteria"], a:0, m:2, topic:"living and non-living"},
      {id:"19", t:"mcq", q:"Which of these is TRUE about both birds and fish?", o:["Both are covered in scales","Both hatch from eggs","Both can fly","Both live only in water"], a:1, m:2, topic:"animal classification"},
      {id:"20", t:"mcq", q:"Bread dough rises when yeast is added because the yeast...", o:["Absorbs water and swells up like a sponge","Is a living fungus that feeds and produces gas as it grows","Reacts chemically like baking soda","Is heated and expands like a balloon"], a:1, m:2, topic:"fungi and bacteria"}
    ]},
    {id:"B", title:"Section B: Structured Questions", marks:16, inst:"Write a short answer, or tick True or False, for each question. Each question is worth 2 marks.", items:[
      {id:"21", t:"tf", q:"Tick True or False for each statement.", topic:"living things", parts:[
        {id:"21a", s:"(a) Spraying water on a wilting plant to perk it up is a way to TEST whether it is alive.", a:"F"},
        {id:"21b", s:"(b) Checking whether a plant's stem slowly bends towards a light source over a few days is a way to TEST whether it is alive.", a:"T"}
      ]},
      {id:"22", t:"mcq", q:"A pupil pushes the same toy car on the same flat floor three times, using a gentle push, a medium push, and a hard push, and measures how far it rolls each time. What was CHANGED in this test?", o:["The force used to push the car","The toy car used","The floor the car rolled on","The distance the car rolled"], a:0, m:2, topic:"fair testing"},
      {id:"23", t:"key", q:"Give one property that makes thick cloth suitable for making an oven mitt.", keys:["heat","hot","insulator","insulate","insulates"], model:"Does not get hot easily (it is a poor conductor of heat / a good insulator), protecting the hand from the hot pan.", m:2, topic:"materials"},
      {id:"24", t:"key", q:"Give one property that makes silicone suitable for making an ice cube tray that is easy to pop the ice cubes out of.", keys:["flexible","bend","elastic"], model:"Flexible — it can bend easily, so the ice cubes pop out without cracking the tray.", m:2, topic:"materials"},
      {id:"25", t:"mcq", q:"A pupil notices mould growing on an orange left in a fruit bowl for two weeks. Which condition most likely helped the mould grow?", o:["The orange was kept in a freezer the whole time","The orange's skin slowly broke down and stayed moist","The orange was completely sealed in an airtight dry jar","The orange was kept under strong, direct sunlight"], a:1, m:2, topic:"fungi and bacteria"},
      {id:"26", t:"tf", q:"Tick True or False for each statement.", topic:"animal life cycles", parts:[
        {id:"26a", s:"(a) All insects go through a pupa stage in their life cycle.", a:"F"},
        {id:"26b", s:"(b) A mosquito's larva and pupa stages both live in water.", a:"T"}
      ]},
      {id:"27", t:"tf", q:"Tick True or False for each statement.", topic:"materials", parts:[
        {id:"27a", s:"(a) An object that traps air inside it is more likely to float.", a:"T"},
        {id:"27b", s:"(b) A material cannot be both strong and flexible at the same time.", a:"F"}
      ]},
      {id:"28", t:"key", q:"Name ONE characteristic of living things that a growing crystal does NOT have.", keys:["reproduce","feed","eat","breathe","respond","excrete","move"], model:"It cannot feed, breathe, respond to its surroundings, or reproduce, the way a living thing can (accept any one).", m:2, topic:"living things"}
    ]},
    {id:"C", title:"Section C: Open-Ended Questions", marks:24, inst:"Explain your answer in full sentences. Each question is worth 3 marks.", items:[
      {id:"29", t:"parent", m:3, topic:"fair testing",
        q:"A pupil wants to find out which material — a sponge, a kitchen cloth, or a plastic sheet — absorbs the most water. She cuts each material to the same size, dips each one into the same amount of water for the same length of time, then weighs how much water each one has absorbed. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the type of material was changed. The size of each material, the amount of water, and the time each one was dipped in the water were kept the same. This makes it a fair test because any difference in how much water is absorbed is caused only by the type of material, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the type of material), 1 mark for correctly stating what was kept the same (size of material, amount of water, dipping time), 1 mark for explaining why this makes the test fair."},
      {id:"30", t:"parent", m:3, topic:"fair testing",
        q:"A pupil wraps identical ice cubes in newspaper, foam, and cling film, and leaves them at the same room temperature. She records how long each ice cube takes to melt completely. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the material the ice cube was wrapped in was changed. The size of the ice cube and the room temperature were kept the same for every ice cube. This makes it a fair test because any difference in how long the ice takes to melt is caused only by the wrapping material, not by any other factor.",
        guide:"1 mark for correctly stating what was changed (the wrapping material), 1 mark for correctly stating what was kept the same (size of ice cube, room temperature), 1 mark for explaining why this makes the test fair."},
      {id:"31", t:"parent", m:3, topic:"living things",
        q:"A pupil finds a snail stuck to the inside of a flower pot, not moving. Describe TWO tests she could do to find out whether it is alive, other than just looking at it.",
        model:"She could gently touch the snail's body to see if it pulls back into its shell or responds, and she could watch closely over a few minutes to see if it slowly moves or if its breathing hole opens and closes.",
        guide:"1 mark for a sensible test of response to touch/stimulus, 1 mark for a second sensible test (e.g. checking for slow movement or breathing), 1 mark for a clear, complete explanation. Give 0 marks for actions that are CARE rather than a TEST (e.g. giving it food, or moving it to a damp spot)."},
      {id:"32", t:"parent", m:3, topic:"fungi and bacteria",
        q:"A pupil leaves a damp sponge in a closed, dark container for a week. She finds mould growing on it. Explain where the mould's food comes from, and why keeping food covered and dry at home helps to stop mould from growing.",
        model:"Mould is a fungus, so it cannot make its own food using sunlight. Instead, it feeds on the damp sponge as a source of food. Keeping food covered and dry removes the moisture and food source that mould needs to grow, so mould is much less likely to grow on it.",
        guide:"1 mark for stating that mould (a fungus) feeds on the damp material rather than making its own food, 1 mark for linking mould's growth to needing moisture and a food source, 1 mark for the missing link — explaining why keeping food covered and dry stops mould from growing."},
      {id:"33", t:"parent", m:3, topic:"animal life cycles",
        q:"A dragonfly's life cycle has 3 stages: egg, nymph, adult. A beetle's life cycle has 4 stages: egg, larva, pupa, adult. Explain ONE difference between these two life cycles.",
        model:"A dragonfly has no pupa stage — its nymph already looks somewhat similar to the adult and gradually grows bigger and develops wings after each moult. A beetle, however, goes through a pupa stage, during which its body changes completely from a larva into an adult, which the dragonfly never goes through.",
        guide:"1 mark for describing the dragonfly nymph as gradually developing (no pupa, no big sudden body change), 1 mark for describing the beetle's pupa stage as a stage of major body change, 1 mark for a clear comparison between the two."},
      {id:"34", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to choose a material to make a flask that keeps a drink hot for many hours. Explain why a double-walled steel flask would be a good choice, giving TWO properties that make it suitable.",
        model:"A double-walled steel flask is a good choice because the trapped air between its two walls does not let heat escape easily, keeping the drink hot for longer. It is also strong and does not crack or break easily, unlike materials such as thin plastic or glass, so it can be carried around safely.",
        guide:"1 mark for explaining that the trapped air/double wall keeps heat in (slows heat loss), 1 mark for a second correct property (e.g. strong, does not break easily), 1 mark for a clear overall explanation linking the properties to why it suits a flask."},
      {id:"35", t:"parent", m:3, topic:"fungi and bacteria",
        q:"Farid says that the mould growing on his bread and the green algae growing in his fish tank are the same kind of living thing because both appear without being planted. Explain the KEY difference between fungi (like mould) and plants (like algae).",
        model:"Although both mould and algae can appear and grow without being deliberately planted, the key difference is that algae, like other plants, can make their own food using sunlight, but mould, which is a fungus, cannot make its own food — it gets its food by feeding on the bread as it decays instead.",
        guide:"2 marks for stating the key difference clearly for BOTH sides — fungi like mould cannot make their own food, but plants like algae can make their own food using sunlight (1 mark for each side). 1 mark for noting that appearing without being planted does not make them the same kind of living thing."},
      {id:"36", t:"parent", m:3, topic:"plant life cycle",
        q:"A pupil plants two identical seeds, giving both the same amount of water and air. She keeps Pot X at room temperature and places Pot Y inside a refrigerator. After a week, the seed in Pot X has germinated, but the seed in Pot Y has not. Explain why this happened.",
        model:"A seed needs a suitable (warm enough) temperature to germinate, as well as water and air. Pot X was kept at room temperature, which was suitable, so the seed was able to germinate. Pot Y was too cold inside the refrigerator, so even though it had water and air, the seed could not germinate.",
        guide:"1 mark for stating that a seed needs a suitable temperature to germinate (besides water and air), 1 mark for linking Pot X's germination to its suitable room temperature, 1 mark for the missing link — explaining that Pot Y's seed did not germinate because the refrigerator was too cold, even though it had water and air."}
    ]}
  ]
};
