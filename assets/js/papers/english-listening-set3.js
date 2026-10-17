/* P3 English Listening Comprehension, Set 3 (note-taking focus). Content only: the engine is
   assets/js/paper.js. Weighted at the weak spot shown by Set 1-2 attempts: capital letters on proper
   nouns in Part B note-taking, and number traps where the script already states the final amount. */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set3",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"This morning it was windy with grey clouds, and it looked like it might rain. By afternoon, the clouds cleared and the sun came out, but just before dinner, dark clouds rolled back in and rain began to fall.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:1 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Aini wanted a parrot, but her father said birds need a lot of attention. She then asked for a dog, but their flat is too small for a large pet. In the end, they decided on a rabbit, since it is quiet and does not need much space.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet did Aini's family finally decide to get?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:2 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"Art lesson started at four o'clock. The pupils were enjoying painting so much that by the time they cleaned their brushes and packed up, it was already half past four.",
       items:[ {id:"3", t:"picture-mcq", q:"What time did art lesson end?", m:1, topic:"listening — time",
         o:["4 o'clock","Half past 4","10 o'clock","Quarter to 11"],
         oImg:[{src:"assets/img/listening/clock-4-00.svg",alt:"A clock showing 4 o'clock"},
               {src:"assets/img/listening/clock-4-30.svg",alt:"A clock showing half past 4"},
               {src:"assets/img/listening/clock-10-00.svg",alt:"A clock showing 10 o'clock"},
               {src:"assets/img/listening/clock-10-45.svg",alt:"A clock showing a quarter to 11"}], a:1 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Zi Xuan planned to bring her kite to the park, thinking the wind would be strong. Then she considered bringing a football instead, since her friends enjoy playing games. Finally, she decided to bring her umbrella, because the weather forecast showed rain later in the afternoon.",
       items:[ {id:"4", t:"picture-mcq", q:"What is Zi Xuan bringing to the park?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:0 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"At the market, Mdm Tan first looked at the watermelons, but they were too heavy to carry home. She then checked the bananas, but they looked a little too ripe. In the end, she bought a bag of apples, since they were fresh and crunchy.",
       items:[ {id:"5", t:"picture-mcq", q:"What fruit did Mdm Tan buy at the market?", m:1, topic:"listening — food",
         o:["Apple","Orange","Banana","Watermelon"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:0 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"Dad was watching the news in the living room a while ago. After that, he went to the kitchen to wash the dishes. Just now, he walked into the bedroom to get a jacket before leaving for his evening walk.",
       items:[ {id:"6", t:"picture-mcq", q:"Which room is Dad in right now?", m:1, topic:"listening — places",
         o:["Bedroom","Kitchen","Bathroom","Living room"],
         oImg:[{src:"assets/img/listening/room-bedroom.svg",alt:"A bed in a bedroom"},
               {src:"assets/img/listening/room-kitchen.svg",alt:"A pot on a stove in a kitchen"},
               {src:"assets/img/listening/room-bathroom.svg",alt:"A shower in a bathroom"},
               {src:"assets/img/listening/room-livingroom.svg",alt:"A sofa in a living room"}], a:0 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear two announcements, each played twice. Fill in each blank with one word or number. Days, months, names and places start with a capital letter.", items:[
      {id:"B1", t:"listen", title:"Announcement 1", voiceLang:"en-GB", playLimit:2,
       script:"Good morning, Primary 3 pupils. This is an announcement from the school office. Our Learning Journey to the Science Centre, originally planned for Wednesday, has been moved to Friday because the centre is closed for maintenance on Wednesdays. The fee for the trip is sixteen dollars, which already includes a two-dollar discount for Nature Club members. Please pass the money to the teacher-in-charge, Mr Koh — that is spelled K, O, H — by this Thursday. We will be visiting the Singapore Science Centre.",
       items:[
         {id:"7", t:"key", q:"Which day has the Learning Journey been moved to?", keys:["Friday"], cs:true, model:"Friday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"What is the surname of the teacher-in-charge?", keys:["Koh"], cs:true, model:"Koh", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"Which place will the class visit?", keys:["Science Centre","Singapore Science Centre"], cs:true, model:"Science Centre (Singapore Science Centre)", m:1, topic:"listening — notes"}
       ]},
      {id:"B2", t:"listen", title:"Announcement 2", voiceLang:"en-GB", playLimit:2,
       script:"Attention, Primary 3 pupils. The cycling outing to East Coast Park will now take place in July instead of June, because of the school holidays. The rental for a bicycle was originally twenty dollars, but with the early-bird booking, it is now fifteen dollars. Please book your bicycle by Friday if you wish to take part.",
       items:[
         {id:"10", t:"key", q:"In which month will the cycling outing take place?", keys:["July"], cs:true, model:"July", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"How much does the bicycle rental cost with the early-bird booking?", keys:["15","fifteen"], model:"$15 (15)", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. Yesterday evening, Dev and his sister Priya walked to the hawker centre near their block for dinner. Dev wanted to order chicken rice, but the stall had already sold out, so he chose fried noodles instead. While they were eating, Priya noticed she had left her water bottle at home and asked the drink stall uncle for a cup of plain water. The uncle kindly gave her a cup for free. After dinner, the two of them walked home together, feeling full and happy.",
       items:[
         {id:"12", t:"mcq", q:"What happened first at the hawker centre?", o:["Dev chose fried noodles","Priya lost her water bottle","The uncle gave Priya water","They walked home"], a:0, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"Why did Dev order fried noodles instead of chicken rice?", o:["He did not like chicken rice","The chicken rice stall had sold out","He wanted to try something new","Priya wanted fried noodles"], a:1, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"Who gave Priya a cup of water?", o:["Dev","Her mother","The drink stall uncle","A stranger"], a:2, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
