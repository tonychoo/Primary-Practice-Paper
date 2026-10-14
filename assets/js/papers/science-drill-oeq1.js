/* P3 Science Quick Drill: explaining science answers, Set 1. Content only: the engine is
   assets/js/paper.js. 8 short open-ended questions, 3 marks each, two on each of: life cycles, fungi vs
   plants, fair tests, and materials. Each has a hint teaching the answer frame, and a guide that marks
   1 mark per keyword idea, for repeatable practice at writing a full P3 science answer. */
"use strict";
window.PAPER = {
  id: "p3-science-drill-oeq1",
  total: 24,
  durationMin: 25,
  sections: [
    {id:"A", title:"Quick Drill: Explaining Science Answers", marks:24, inst:"Explain your answer in full sentences. Each question is worth 3 marks.", items:[
      {id:"1", t:"parent", m:3, topic:"life cycles",
        q:"A butterfly's life cycle includes a pupa stage, but a grasshopper's life cycle does not. Explain what happens inside the pupa.",
        model:"Inside the pupa, the caterpillar's body changes completely into a butterfly. It does not eat or move around during this stage — it stays still while its body changes shape.",
        guide:"1 mark for describing a complete body change, 1 mark for noting it does not feed/move during this stage, 1 mark for a clear overall explanation.",
        hint:"Say what happens to its BODY, and whether it eats or moves during this stage."},
      {id:"2", t:"parent", m:3, topic:"life cycles",
        q:"A chick looks similar to a hen soon after hatching, but a tadpole looks very different from an adult frog. Explain this difference.",
        model:"A tadpole goes through big body changes as it grows — it loses its tail, grows legs, and its gills are replaced by lungs. A chick already has a body shape similar to a hen and mostly just grows bigger, without such big changes.",
        guide:"1 mark for describing a tadpole's body changes, 1 mark for noting the chick does not change shape much, 1 mark for a clear comparison.",
        hint:"Compare BOTH animals: say what happens to one, then what happens to the other."},
      {id:"3", t:"parent", m:3, topic:"fungi and bacteria",
        q:"A pupil says mushrooms must be plants because they grow from the ground. Explain why mushrooms are fungi, not plants.",
        model:"Mushrooms are fungi, not plants. Unlike green plants, which make their own food using sunlight, fungi cannot make their own food — they feed on dead or decaying matter instead.",
        guide:"1 mark for stating mushrooms are fungi, not plants, 1 mark for stating fungi cannot make their own food (unlike plants), 1 mark for a clear overall explanation.",
        hint:"Say what GROUP mushrooms belong to, and how they get their FOOD."},
      {id:"4", t:"parent", m:3, topic:"fungi and bacteria",
        q:"Both mushrooms and ferns can reproduce using spores. Explain why this does NOT make them the same kind of living thing.",
        model:"Even though both reproduce using spores, ferns are plants that can make their own food using sunlight, while mushrooms are fungi that cannot make their own food — they feed on dead or decaying matter instead. This is the key difference between them.",
        guide:"1 mark for noting spores alone do not make them the same, 1 mark for stating the food-making difference (plants use sunlight, fungi cannot), 1 mark for a clear overall explanation.",
        hint:"Spores are not the key difference — think about how each one gets its FOOD."},
      {id:"5", t:"parent", m:3, topic:"fair testing",
        q:"A pupil tests how high three different balls bounce by dropping each one from the same height onto the same floor. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the type of ball was changed. The height dropped from and the floor were kept the same for every ball. This makes it a fair test because any difference in how high the balls bounce is caused only by the type of ball, not by any other factor.",
        guide:"1 mark for stating what was changed (the ball), 1 mark for stating what was kept the same (height, floor), 1 mark for explaining why this makes the test fair.",
        hint:"Use the frame: Only the ___ was changed, so any difference in ___ is caused by ___."},
      {id:"6", t:"parent", m:3, topic:"fair testing",
        q:"A pupil grows three identical seedlings in the same type of soil and gives them the same amount of water, but places them in different amounts of sunlight. Describe what was changed, what was kept the same, and why this makes it a fair test.",
        model:"Only the amount of sunlight was changed. The type of soil and the amount of water were kept the same for every seedling. This makes it a fair test because any difference in how the seedlings grow is caused only by the amount of sunlight, not by any other factor.",
        guide:"1 mark for stating what was changed (sunlight), 1 mark for stating what was kept the same (soil, water), 1 mark for explaining why this makes the test fair.",
        hint:"Use the frame: Only the ___ was changed, so any difference in ___ is caused by ___."},
      {id:"7", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to choose a material to make a raincoat. Explain why plastic would be a good choice, giving its properties and the reason each one matters.",
        model:"Plastic is waterproof, so rain does not soak through and wet the person wearing it. It is also flexible, so it is comfortable to move around in. These properties make it suitable because a raincoat needs to keep a person dry and be comfortable to wear.",
        guide:"1 mark for a correct property (e.g. waterproof), 1 mark for a second correct property with its reason (e.g. flexible, so comfortable), 1 mark for a clear overall explanation linking properties to purpose.",
        hint:"Use the frame: ___ is suitable because it is ___, so ___."},
      {id:"8", t:"parent", m:3, topic:"materials",
        q:"A pupil wants to choose a material to make a drinking cup for a young child. Explain why plastic would be a good choice rather than glass, giving its properties and the reason each one matters.",
        model:"Plastic does not break easily (it is not brittle like glass), so it is safer for a young child to use. It is also light, so it is easy for a small child to hold. These properties make it suitable because a cup for a young child needs to be safe and easy to hold.",
        guide:"1 mark for a correct property (e.g. does not break easily, unlike glass), 1 mark for a second correct property with its reason (e.g. light, so easy to hold), 1 mark for a clear overall explanation linking properties to purpose.",
        hint:"Use the frame: ___ is suitable because it is ___, so ___."}
    ]}
  ]
};
