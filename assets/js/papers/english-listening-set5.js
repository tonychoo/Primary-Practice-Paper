/* P3 English Listening Comprehension, Set 5 (general practice). Content only: the engine is
   assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set5",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"It was sunny all morning. By early afternoon, a light breeze picked up, and just before dinner, rain clouds gathered and it began to pour.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:1 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Siti's brother wanted a rabbit, but their father said the cage would take up too much space in the living room. He then suggested a hamster, but their mother worried it might escape easily. Finally, they agreed on a cat, since it could roam freely and keep itself clean.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet did Siti's family finally agree on?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:0 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"The badminton court booking started at ten o'clock. By the time Nora and her friends warmed up and waited for the previous group to finish, it was already quarter to eleven.",
       items:[ {id:"3", t:"picture-mcq", q:"What time did Nora and her friends finally start playing?", m:1, topic:"listening — time",
         o:["4 o'clock","Half past 4","10 o'clock","Quarter to 11"],
         oImg:[{src:"assets/img/listening/clock-4-00.svg",alt:"A clock showing 4 o'clock"},
               {src:"assets/img/listening/clock-4-30.svg",alt:"A clock showing half past 4"},
               {src:"assets/img/listening/clock-10-00.svg",alt:"A clock showing 10 o'clock"},
               {src:"assets/img/listening/clock-10-45.svg",alt:"A clock showing a quarter to 11"}], a:3 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Ethan first packed his kite for the park, thinking it would be a windy afternoon. He then considered bringing his football instead, since his cousins also wanted to play. In the end, he carried his umbrella, as the sky looked like it might rain later.",
       items:[ {id:"4", t:"picture-mcq", q:"What did Ethan finally carry to the park?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:0 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"The second-hand bicycle at the void deck sale was priced at ten dollars at first. The seller then lowered it to eight dollars since one wheel was slightly rusty. Because Nora's mother knew the seller, she got a further discount, paying only five dollars in the end.",
       items:[ {id:"5", t:"picture-mcq", q:"How much did Nora's mother finally pay for the bicycle?", m:1, topic:"listening — money",
         o:["$10","$8","$5","$7"],
         oImg:[{src:"assets/img/listening/price-10.svg",alt:"A price tag showing $10"},
               {src:"assets/img/listening/price-8.svg",alt:"A price tag showing $8"},
               {src:"assets/img/listening/price-5.svg",alt:"A price tag showing $5"},
               {src:"assets/img/listening/price-7.svg",alt:"A price tag showing $7"}], a:2 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"Grandfather was reading the newspaper in the living room just now. A moment ago, he got up and walked into the kitchen to make a cup of tea.",
       items:[ {id:"6", t:"picture-mcq", q:"Which room is Grandfather in right now?", m:1, topic:"listening — places",
         o:["Bedroom","Kitchen","Bathroom","Living room"],
         oImg:[{src:"assets/img/listening/room-bedroom.svg",alt:"A bed in a bedroom"},
               {src:"assets/img/listening/room-kitchen.svg",alt:"A pot on a stove in a kitchen"},
               {src:"assets/img/listening/room-bathroom.svg",alt:"A shower in a bathroom"},
               {src:"assets/img/listening/room-livingroom.svg",alt:"A sofa in a living room"}], a:1 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear an announcement, played twice. Fill in each blank with one word or number. Names, days and places start with a capital letter.", items:[
      {id:"B1", t:"listen", title:"Announcement", voiceLang:"en-GB", playLimit:2,
       script:"Good morning, residents. This is an announcement from the Residents' Committee. Our monthly community gathering at the void deck, originally planned for this Saturday, has been moved to Sunday instead, because the void deck is being used for a wedding dinner on Saturday. Please gather at the void deck by six o'clock in the evening. Light refreshments will be provided, and the cost per family is five dollars, which already includes a lucky draw ticket. The committee member in charge is Madam Teo — that is spelled T, E, O. We look forward to seeing you there.",
       items:[
         {id:"7", t:"key", q:"Which day has the gathering been moved to?", keys:["Sunday"], cs:true, model:"Sunday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"What time should residents gather at the void deck?", keys:["6","six","6 pm","six o'clock"], model:"6 p.m. (6 o'clock)", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"How much does it cost per family?", keys:["5","five"], model:"$5 (5)", m:1, topic:"listening — notes"},
         {id:"10", t:"key", q:"What is the surname of the committee member in charge?", keys:["Teo"], cs:true, model:"Teo", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"What will each family receive besides refreshments?", keys:["lucky draw ticket","ticket"], model:"A lucky draw ticket", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. Last weekend, Farhan and his neighbour, Wei Kiat, decided to build a blanket fort at the void deck. Halfway through, Farhan realised they did not have enough clothes pegs to hold the blanket corners up. Wei Kiat remembered that his grandmother kept a box of pegs in her storeroom, so he ran upstairs to borrow some. With the extra pegs, they finished the fort just before it started to drizzle outside.",
       items:[
         {id:"12", t:"mcq", q:"What problem did the boys face while building the fort?", o:["Not enough blankets","Not enough clothes pegs","It started to rain immediately","They had no space"], a:1, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"Why did Wei Kiat run upstairs?", o:["To ask his mother for help","To borrow pegs from his grandmother","To get an umbrella","To call Farhan's parents"], a:1, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"What happened just after the boys finished the fort?", o:["It started to drizzle","They went swimming","Their parents called them home","The fort collapsed"], a:0, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
