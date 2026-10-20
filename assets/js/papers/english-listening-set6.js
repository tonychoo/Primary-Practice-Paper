/* P3 English Listening Comprehension, Set 6 (general practice). Content only: the engine is
   assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set6",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"The sky was clear and sunny when the class set off. By midday, it had become cloudy with no rain. Just before the bus ride home, strong winds started blowing litter across the carpark.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:3 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Celeste's family first thought about a dog, but their flat does not allow large pets. They then considered a rabbit, but her brother is afraid of its sudden movements. In the end, they chose a hamster, since it is small and easy to care for.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet did Celeste's family choose?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:3 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"The museum tour was supposed to start at nine o'clock. Because the bus arrived late, the tour only began at quarter past nine instead.",
       items:[ {id:"3", t:"picture-mcq", q:"What time did the museum tour actually begin?", m:1, topic:"listening — time",
         o:["3 o'clock","Half past 3","9 o'clock","Quarter past 9"],
         oImg:[{src:"assets/img/listening/clock-3-00.svg",alt:"A clock showing 3 o'clock"},
               {src:"assets/img/listening/clock-3-30.svg",alt:"A clock showing half past 3"},
               {src:"assets/img/listening/clock-9-00.svg",alt:"A clock showing 9 o'clock"},
               {src:"assets/img/listening/clock-9-15.svg",alt:"A clock showing quarter past 9"}], a:3 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Timothy wanted to bring his comic book to read on the bus to the museum, but his teacher reminded pupils to bring their worksheet booklets instead. At the last minute, he also grabbed his umbrella, since the forecast mentioned afternoon showers.",
       items:[ {id:"4", t:"picture-mcq", q:"What did Timothy grab at the last minute?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:0 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"At the museum cafe, Adam first looked at the watermelon slices, but they were sold out. He then considered an orange, but found it too sour the last time. In the end, he chose an apple, since it was fresh and not too messy to eat.",
       items:[ {id:"5", t:"picture-mcq", q:"What fruit did Adam finally choose?", m:1, topic:"listening — food",
         o:["Apple","Orange","Banana","Watermelon"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:0 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"The souvenir keychain was priced at eight dollars at first. Because the museum was having a members' day, the price dropped to seven dollars. Adam's mother showed her staff discount card, bringing the final price down to five dollars.",
       items:[ {id:"6", t:"picture-mcq", q:"What was the final price of the keychain?", m:1, topic:"listening — money",
         o:["$10","$8","$5","$7"],
         oImg:[{src:"assets/img/listening/price-10.svg",alt:"A price tag showing $10"},
               {src:"assets/img/listening/price-8.svg",alt:"A price tag showing $8"},
               {src:"assets/img/listening/price-5.svg",alt:"A price tag showing $5"},
               {src:"assets/img/listening/price-7.svg",alt:"A price tag showing $7"}], a:2 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear an announcement, played twice. Fill in each blank with one word or number. Names, days and places start with a capital letter.", items:[
      {id:"B1", t:"listen", title:"Announcement", voiceLang:"en-GB", playLimit:2,
       script:"Good morning, Primary 3 pupils. This is an announcement from the school office. Our Learning Journey to the Science Centre, originally planned for Thursday, has been moved to Monday instead, because the centre is closed for a private event on Thursday. Please gather at the school hall by eight fifteen in the morning. The entrance fee is twelve dollars, which already includes a one-dollar discount for pupils who bring their own water bottle. The teacher-in-charge is Mr Krishnan — that is spelled K, R, I, S, H, N, A, N. Remember to bring a hat and sunblock.",
       items:[
         {id:"7", t:"key", q:"Which day has the Learning Journey been moved to?", keys:["Monday"], cs:true, model:"Monday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"What time should pupils gather at the school hall?", keys:["8.15","8:15","eight fifteen"], model:"8.15 a.m. (8:15)", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"How much is the entrance fee?", keys:["12","twelve"], model:"$12 (12)", m:1, topic:"listening — notes"},
         {id:"10", t:"key", q:"What is the surname of the teacher-in-charge?", keys:["Krishnan"], cs:true, model:"Krishnan", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"Besides a hat, what else should pupils bring?", keys:["sunblock","sun block"], model:"Sunblock", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. At the library, Mei Xin wanted to borrow a graphic novel, but all the copies were already checked out. The librarian suggested she add her name to a waiting list instead. While waiting, Mei Xin picked up a book about ocean animals, and found it so interesting that she forgot all about the graphic novel. By the time the librarian called to say the graphic novel was ready, Mei Xin had already finished reading two books about the ocean.",
       items:[
         {id:"12", t:"mcq", q:"Why couldn't Mei Xin borrow the graphic novel immediately?", o:["It was too expensive","All the copies were checked out","She forgot her library card","It was damaged"], a:1, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"What did the librarian suggest Mei Xin do?", o:["Buy the book instead","Add her name to a waiting list","Borrow a different graphic novel","Come back the next day"], a:1, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"What had Mei Xin done by the time the librarian called her?", o:["Left the library","Finished two books about the ocean","Lost interest in reading","Returned all her books"], a:1, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
