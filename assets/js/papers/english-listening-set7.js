/* P3 English Listening Comprehension, Set 7 (general practice, hardest of Sets 4-7 — two distractors
   per Part A recording, like Set 2). Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set7",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"Early this morning, it was foggy with low visibility. By mid-morning, the fog cleared and the sun came out. Just after lunch, however, dark clouds rolled in quickly and heavy rain began to fall.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:1 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Grandma first suggested a parrot for the new family pet, but Father said birds are too noisy for the flat. Mother then thought of a fish tank, but nobody wanted the hassle of cleaning it weekly. In the end, the family agreed on a rabbit, since it is quiet and the children could help look after it.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet did the family finally agree on?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:2 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"The family dinner reservation was originally for ten o'clock. The restaurant then called to say it would have to be half past four instead, before finally confirming quarter to eleven once a table became free.",
       items:[ {id:"3", t:"picture-mcq", q:"What time was the family's dinner reservation finally confirmed for?", m:1, topic:"listening — time",
         o:["4 o'clock","Half past 4","10 o'clock","Quarter to 11"],
         oImg:[{src:"assets/img/listening/clock-4-00.svg",alt:"A clock showing 4 o'clock"},
               {src:"assets/img/listening/clock-4-30.svg",alt:"A clock showing half past 4"},
               {src:"assets/img/listening/clock-10-00.svg",alt:"A clock showing 10 o'clock"},
               {src:"assets/img/listening/clock-10-45.svg",alt:"A clock showing a quarter to 11"}], a:3 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Ryan wanted to bring his kite to his cousin's birthday party at the park, thinking they could fly it together. He then thought about a football instead, since more cousins enjoy group games. Finally, he decided to bring his school bag, since it had the wrapped present inside.",
       items:[ {id:"4", t:"picture-mcq", q:"What did Ryan finally bring to the party?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:1 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"At the celebration dinner, Aunty first set out a tray of watermelon, but half the guests were already full from the mains. She then brought out bananas, but the children said they preferred something juicier. In the end, she served oranges, which were refreshing after the big meal.",
       items:[ {id:"5", t:"picture-mcq", q:"What fruit did Aunty finally serve?", m:1, topic:"listening — food",
         o:["Apple","Orange","Banana","Watermelon"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:1 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"The florist first quoted the celebration flowers at ten dollars for a small bunch. Aunty then asked for a bigger bunch, which would have cost eight dollars instead. Because she is a regular customer, the florist gave her a special price of five dollars for the bigger bunch after all.",
       items:[ {id:"6", t:"picture-mcq", q:"How much did Aunty finally pay for the flowers?", m:1, topic:"listening — money",
         o:["$10","$8","$5","$7"],
         oImg:[{src:"assets/img/listening/price-10.svg",alt:"A price tag showing $10"},
               {src:"assets/img/listening/price-8.svg",alt:"A price tag showing $8"},
               {src:"assets/img/listening/price-5.svg",alt:"A price tag showing $5"},
               {src:"assets/img/listening/price-7.svg",alt:"A price tag showing $7"}], a:2 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear an announcement, played twice. Fill in each blank with one word or number. Names, days and places start with a capital letter.", items:[
      {id:"B1", t:"listen", title:"Announcement", voiceLang:"en-GB", playLimit:2,
       script:"Good evening, everyone. This is a reminder about Grandfather's eightieth birthday celebration this weekend. The dinner, originally booked for Saturday, has been moved to Sunday instead, because more relatives from Malaysia can only arrive on Sunday. Please arrive at the restaurant half an hour earlier than usual, at six o'clock, so we can take a big family photo before dinner starts. The set menu costs thirty-eight dollars per person, which already includes a three-dollar discount for every child below twelve. The relative organising the event is Auntie Shirley — that is spelled S, H, I, R, L, E, Y. Please confirm your attendance with her by Friday.",
       items:[
         {id:"7", t:"key", q:"Which day has the dinner been moved to?", keys:["Sunday"], cs:true, model:"Sunday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"What time should everyone arrive at the restaurant?", keys:["6","six","6 pm","six o'clock"], model:"6 p.m. (6 o'clock)", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"How much does the set menu cost per person?", keys:["38","thirty-eight","thirty eight"], model:"$38 (38)", m:1, topic:"listening — notes"},
         {id:"10", t:"key", q:"What is the name of the relative organising the event?", keys:["Shirley"], cs:true, model:"Shirley", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"By when should attendance be confirmed with her?", keys:["Friday"], cs:true, model:"Friday", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. At Grandfather's birthday dinner, Ryan was asked to give a short speech. He had prepared notes on a piece of paper, but could not find it in his pocket when his turn came. Panicking, he almost ran to the car to search for it, but his sister reminded him that he had practised the speech so many times that he could probably remember most of it. Taking a deep breath, Ryan stood up and gave the speech from memory, forgetting only one small joke he had planned to include. Everyone clapped warmly, and Grandfather said it was the best gift he could have asked for.",
       items:[
         {id:"12", t:"mcq", q:"What problem did Ryan face just before his speech?", o:["He forgot Grandfather's age","He could not find his notes","He felt too shy to speak","He arrived late"], a:1, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"Why did Ryan's sister tell him not to worry?", o:["She had a copy of his notes","He had practised the speech many times","She would give the speech instead","The dinner was running late anyway"], a:1, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"What did Ryan forget to include in his speech?", o:["Grandfather's name","A small joke","A thank-you to the chef","The date of the dinner"], a:1, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
