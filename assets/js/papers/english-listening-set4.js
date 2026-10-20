/* P3 English Listening Comprehension, Set 4 (general practice). Content only: the engine is
   assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set4",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"This morning was windy. By noon, grey clouds rolled in and it looked like rain, but by evening, the sky had cleared completely and the sun came out.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:0 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Ethan wanted a cat, but his father said cats make him sneeze. He then considered a hamster, but his mother felt it was too much upkeep for such a small cage. In the end, they decided on a dog, since the whole family could take it for walks together.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet did Ethan's family decide to get?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:1 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"The school canteen opens for recess at nine o'clock. By the time Dilys queued for her food and found a seat, it was already quarter past nine.",
       items:[ {id:"3", t:"picture-mcq", q:"What time did Dilys finally sit down to eat?", m:1, topic:"listening — time",
         o:["3 o'clock","Half past 3","9 o'clock","Quarter past 9"],
         oImg:[{src:"assets/img/listening/clock-3-00.svg",alt:"A clock showing 3 o'clock"},
               {src:"assets/img/listening/clock-3-30.svg",alt:"A clock showing half past 3"},
               {src:"assets/img/listening/clock-9-00.svg",alt:"A clock showing 9 o'clock"},
               {src:"assets/img/listening/clock-9-15.svg",alt:"A clock showing quarter past 9"}], a:3 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Hafiz planned to bring his football to Sports Day, but changed his mind and thought about his water bottle instead, since he needed to stay hydrated under the hot sun. At the last minute, however, he grabbed his school bag instead, remembering he needed his house T-shirt inside it.",
       items:[ {id:"4", t:"picture-mcq", q:"What did Hafiz finally bring to Sports Day?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:1 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"At the canteen, Priya first reached for a watermelon slice, but the queue was too long. She then thought about getting an orange, but all of them looked a little dried out. In the end, she picked a banana, since it was quick to eat before her race.",
       items:[ {id:"5", t:"picture-mcq", q:"What fruit did Priya finally pick?", m:1, topic:"listening — food",
         o:["Apple","Orange","Banana","Watermelon"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:2 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"Mother was folding laundry in the bedroom a while ago. Then she moved to the living room to watch the news. Just now, she went into the kitchen to start preparing dinner.",
       items:[ {id:"6", t:"picture-mcq", q:"Which room is Mother in right now?", m:1, topic:"listening — places",
         o:["Bedroom","Kitchen","Bathroom","Living room"],
         oImg:[{src:"assets/img/listening/room-bedroom.svg",alt:"A bed in a bedroom"},
               {src:"assets/img/listening/room-kitchen.svg",alt:"A pot on a stove in a kitchen"},
               {src:"assets/img/listening/room-bathroom.svg",alt:"A shower in a bathroom"},
               {src:"assets/img/listening/room-livingroom.svg",alt:"A sofa in a living room"}], a:1 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear an announcement, played twice. Fill in each blank with one word or number. Names, days and places start with a capital letter.", items:[
      {id:"B1", t:"listen", title:"Announcement", voiceLang:"en-GB", playLimit:2,
       script:"Good morning, Primary 3 pupils. This is an announcement from the PE department. Our school's Sports Day, originally planned for Wednesday, will now be held on Thursday instead, because of the expected thunderstorms earlier in the week. Please report to the field by seven thirty in the morning. The entrance fee for family members is ten dollars, which already includes a two-dollar early-bird discount. The teacher-in-charge is Mr Farid — that is spelled F, A, R, I, D. Bring your house T-shirt and a water bottle.",
       items:[
         {id:"7", t:"key", q:"Which day will Sports Day now be held?", keys:["Thursday"], cs:true, model:"Thursday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"What time should pupils report to the field?", keys:["7.30","7:30","seven thirty"], model:"7.30 a.m. (7:30)", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"How much is the entrance fee for family members?", keys:["10","ten"], model:"$10 (10)", m:1, topic:"listening — notes"},
         {id:"10", t:"key", q:"What is the surname of the teacher-in-charge?", keys:["Farid"], cs:true, model:"Farid", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"Besides a water bottle, what else should pupils bring?", keys:["T-shirt","shirt"], model:"Their house T-shirt", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. During the sports day relay race, Marcus was the last runner for his team. Just before his turn, he realised his shoelace had come undone. Instead of panicking, he quickly knelt down and retied it, even though his teammates were shouting at him to hurry. When he finally ran, his team was in third place, but Marcus sprinted so fast that he overtook two other runners and crossed the finish line in first place.",
       items:[
         {id:"12", t:"mcq", q:"What did Marcus do just before his turn in the relay?", o:["Started running","Retied his shoelace","Shouted at his teammates","Dropped the baton"], a:1, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"Why did Marcus kneel down before his turn?", o:["He was tired","His shoelace had come undone","He dropped something","He wanted to rest"], a:1, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"In which position did Marcus's team finish?", o:["Third","Second","First","Last"], a:2, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
