/* P3 English Listening Comprehension, Set 1. Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set1",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"Look outside the window. It was very sunny this morning, but now dark clouds have rolled in and it has started to rain.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:1 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Siti wanted a rabbit for her birthday, but her mother said rabbits need too much space in their HDB flat. In the end, Siti's family got her a hamster instead.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet does Siti have at home?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:3 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"The class ended at three o'clock. The pupils packed their bags, said goodbye to their teacher, and by the time they reached the school gate, it was already half past three.",
       items:[ {id:"3", t:"picture-mcq", q:"What time is it now?", m:1, topic:"listening — time",
         o:["3 o'clock","Half past 3","9 o'clock","Quarter past 9"],
         oImg:[{src:"assets/img/listening/clock-3-00.svg",alt:"A clock showing 3 o'clock"},
               {src:"assets/img/listening/clock-3-30.svg",alt:"A clock showing half past 3"},
               {src:"assets/img/listening/clock-9-00.svg",alt:"A clock showing 9 o'clock"},
               {src:"assets/img/listening/clock-9-15.svg",alt:"A clock showing quarter past 9"}], a:1 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Ethan usually carries a football to school on Fridays for his CCA. Today, though, it started to rain, so he picked up his umbrella instead before leaving the house.",
       items:[ {id:"4", t:"picture-mcq", q:"What is Ethan carrying to school today?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:0 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"Mother walked past the apple stall first, but the apples looked a bit soft. She decided to buy a bunch of bananas instead, since they were fresh and cheap today.",
       items:[ {id:"5", t:"picture-mcq", q:"What fruit did Mother buy at the market?", m:1, topic:"listening — food",
         o:["Apple","Orange","Banana","Watermelon"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:2 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"Grandfather was watching television in the living room just now. A moment ago, he got up and walked into the kitchen to boil some water for tea.",
       items:[ {id:"6", t:"picture-mcq", q:"Which room is Grandfather in right now?", m:1, topic:"listening — places",
         o:["Bedroom","Kitchen","Bathroom","Living room"],
         oImg:[{src:"assets/img/listening/room-bedroom.svg",alt:"A bed in a bedroom"},
               {src:"assets/img/listening/room-kitchen.svg",alt:"A pot on a stove in a kitchen"},
               {src:"assets/img/listening/room-bathroom.svg",alt:"A shower in a bathroom"},
               {src:"assets/img/listening/room-livingroom.svg",alt:"A sofa in a living room"}], a:1 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear an announcement, played twice. Fill in each blank with one word or number.", items:[
      {id:"B1", t:"listen", title:"Announcement", voiceLang:"en-GB", playLimit:2,
       script:"Good morning, Primary 3 pupils. This is an announcement from the school office. Our class's Learning Journey to the Singapore Zoo has been moved from Wednesday to Thursday next week. Please gather at the school hall at eight o'clock sharp. Remember to bring twelve dollars for the entrance ticket, and wear your house T-shirt. The teacher-in-charge is Mr Rajan — that is spelled R, A, J, A, N. Thank you.",
       items:[
         {id:"7", t:"key", q:"Which day will the Learning Journey be held?", keys:["Thursday"], cs:true, model:"Thursday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"What time should pupils gather at the school hall?", keys:["8","eight"], model:"8 o'clock (8)", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"How much money should pupils bring for the ticket?", keys:["12","twelve"], model:"$12 (12)", m:1, topic:"listening — notes"},
         {id:"10", t:"key", q:"What is the surname of the teacher-in-charge?", keys:["Rajan"], cs:true, model:"Rajan", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"Which animal park will the class visit?", keys:["zoo","singapore zoo"], model:"Zoo (Singapore Zoo)", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. Last Saturday, Marcus went to the void deck to play badminton with his neighbour, Wei Ming. After playing for half an hour, Marcus suddenly felt thirsty and his throat felt dry. He told Wei Ming he wanted to rest for a while. Wei Ming went up to his flat and brought down a bottle of cold water for Marcus. Marcus thanked him and drank the whole bottle. Feeling much better, the two boys continued playing badminton until it was time for dinner.",
       items:[
         {id:"12", t:"mcq", q:"What did Marcus and Wei Ming do first?", o:["Had dinner","Played badminton","Drank water","Went up to the flat"], a:1, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"Why did Marcus want to rest?", o:["He was hungry","He felt thirsty","He hurt his leg","It started to rain"], a:1, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"Who brought the bottle of water?", o:["Marcus","Marcus's mother","Wei Ming","The neighbour's mother"], a:2, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
