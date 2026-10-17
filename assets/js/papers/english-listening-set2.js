/* P3 English Listening Comprehension, Set 2 (harder than Set 1). Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-listening-set2",
  total: 14,
  durationMin: 35,
  sections: [
    {id:"A", title:"Part A: Picture Matching", marks:6, inst:"You will hear six short recordings, each played twice. Choose the picture that matches what you hear.", items:[
      {id:"A1", t:"listen", title:"Question 1", voiceLang:"en-GB", playLimit:2,
       script:"This morning the sky was clear and sunny. By noon, it had become windy, with leaves blowing across the playground. Then, just after lunch, dark clouds gathered and it began to rain heavily.",
       items:[ {id:"1", t:"picture-mcq", q:"What is the weather like now?", m:1, topic:"listening — weather",
         o:["Sunny","Rainy","Cloudy, no rain","Windy"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:1 } ]},
      {id:"A2", t:"listen", title:"Question 2", voiceLang:"en-GB", playLimit:2,
       script:"Kumar first asked for a dog, but his father said dogs need daily walks and their family is often busy. Then he asked for a cat, but his sister is allergic to cat fur. In the end, they agreed on a rabbit, since it is quiet and easy to care for.",
       items:[ {id:"2", t:"picture-mcq", q:"Which pet did Kumar's family finally decide to get?", m:1, topic:"listening — animals",
         o:["Cat","Dog","Rabbit","Hamster"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:2 } ]},
      {id:"A3", t:"listen", title:"Question 3", voiceLang:"en-GB", playLimit:2,
       script:"The library usually closes at ten o'clock at night. On public holidays, it closes earlier, at half past four. Today is a school day, though, so the library will stay open until a quarter to eleven instead.",
       items:[ {id:"3", t:"picture-mcq", q:"What time will the library close today?", m:1, topic:"listening — time",
         o:["4 o'clock","Half past 4","10 o'clock","Quarter to 11"],
         oImg:[{src:"assets/img/listening/clock-4-00.svg",alt:"A clock showing 4 o'clock"},
               {src:"assets/img/listening/clock-4-30.svg",alt:"A clock showing half past 4"},
               {src:"assets/img/listening/clock-10-00.svg",alt:"A clock showing 10 o'clock"},
               {src:"assets/img/listening/clock-10-45.svg",alt:"A clock showing a quarter to 11"}], a:3 } ]},
      {id:"A4", t:"listen", title:"Question 4", voiceLang:"en-GB", playLimit:2,
       script:"Mei Ling's mother was folding laundry in the bedroom just now. After that, she went to the living room to watch the news. A moment ago, however, she walked into the bathroom to wash some clothes by hand.",
       items:[ {id:"4", t:"picture-mcq", q:"Where is Mei Ling's mother right now?", m:1, topic:"listening — places",
         o:["Bedroom","Kitchen","Bathroom","Living room"],
         oImg:[{src:"assets/img/listening/room-bedroom.svg",alt:"A bed in a bedroom"},
               {src:"assets/img/listening/room-kitchen.svg",alt:"A pot on a stove in a kitchen"},
               {src:"assets/img/listening/room-bathroom.svg",alt:"A shower in a bathroom"},
               {src:"assets/img/listening/room-livingroom.svg",alt:"A sofa in a living room"}], a:2 } ]},
      {id:"A5", t:"listen", title:"Question 5", voiceLang:"en-GB", playLimit:2,
       script:"Farah first packed a kite to bring to Nora's birthday party, thinking they could fly it in the park. Then she thought of bringing a football instead, since most of her friends like to play games. Finally, she decided to bring her school bag, because it was full of small present boxes for everyone.",
       items:[ {id:"5", t:"picture-mcq", q:"What is Farah bringing to the party?", m:1, topic:"listening — objects",
         o:["Umbrella","School bag","Kite","Football"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:1 } ]},
      {id:"A6", t:"listen", title:"Question 6", voiceLang:"en-GB", playLimit:2,
       script:"The toy car was priced at ten dollars at first. The shopkeeper then said there was a small sale, so it became eight dollars. Because Kumar's mother is a regular customer, the shopkeeper gave her an extra three dollars off, making it just five dollars in the end.",
       items:[ {id:"6", t:"picture-mcq", q:"How much did the toy car cost in the end?", m:1, topic:"listening — money",
         o:["$10","$8","$5","$7"],
         oImg:[{src:"assets/img/listening/price-10.svg",alt:"A price tag showing $10"},
               {src:"assets/img/listening/price-8.svg",alt:"A price tag showing $8"},
               {src:"assets/img/listening/price-5.svg",alt:"A price tag showing $5"},
               {src:"assets/img/listening/price-7.svg",alt:"A price tag showing $7"}], a:2 } ]}
    ]},
    {id:"B", title:"Part B: Note-taking", marks:5, inst:"You will hear an announcement, played twice. Fill in each blank with one word or number.", items:[
      {id:"B1", t:"listen", title:"Announcement", voiceLang:"en-GB", playLimit:2,
       script:"Good morning, Primary 3 pupils. This is an announcement from the school office. The Learning Journey originally planned for Friday has been moved to Monday next week, because the museum is closed on Fridays for cleaning. Please gather at the school hall fifteen minutes earlier than usual. The cost of the trip is eighteen dollars, which already includes a two-dollar discount for pupils in the Nature Club. Please pass your money to your form teacher, Miss Wong — that is spelled W, O, N, G — by this Friday. We will be visiting the Singapore Botanic Gardens. Thank you.",
       items:[
         {id:"7", t:"key", q:"Which day has the Learning Journey been moved to?", keys:["Monday"], cs:true, model:"Monday", m:1, topic:"listening — notes"},
         {id:"8", t:"key", q:"How many minutes earlier should pupils gather than usual?", keys:["15","fifteen"], model:"15 minutes (15)", m:1, topic:"listening — notes"},
         {id:"9", t:"key", q:"How much does the trip cost, after the discount?", keys:["18","eighteen"], model:"$18 (18)", m:1, topic:"listening — notes"},
         {id:"10", t:"key", q:"What is the surname of the form teacher?", keys:["Wong"], cs:true, model:"Wong", m:1, topic:"listening — notes"},
         {id:"11", t:"key", q:"Which gardens will the class visit?", keys:["Botanic Gardens","Singapore Botanic Gardens"], cs:true, model:"Botanic Gardens (Singapore Botanic Gardens)", m:1, topic:"listening — notes"}
       ]}
    ]},
    {id:"C", title:"Part C: Listening Comprehension", marks:3, inst:"You will hear a short story, played twice. Choose the best answer.", items:[
      {id:"C1", t:"listen", title:"Story", voiceLang:"en-GB", playLimit:2,
       script:"Here is a short story. Listen carefully, then answer the questions. Yesterday after school, Farah and her brother Danial went to the NTUC supermarket near their block to buy ingredients for their mother's birthday cake. They found flour and sugar easily, but they could not find any eggs on the shelf. Danial asked a staff member for help, and she told them the eggs had just arrived and were still in the storeroom. She fetched a tray of eggs for them. Farah and Danial thanked her and hurried home so they would have enough time to bake the cake before their mother returned from work.",
       items:[
         {id:"12", t:"mcq", q:"What did Farah and Danial do first at the supermarket?", o:["Bought eggs","Found flour and sugar","Asked a staff member for help","Hurried home"], a:1, m:1, topic:"listening — sequence"},
         {id:"13", t:"mcq", q:"Why did Danial ask the staff member for help?", o:["He could not find the flour","He wanted to pay for the eggs","He could not find any eggs on the shelf","He was lost in the supermarket"], a:2, m:1, topic:"listening — reason"},
         {id:"14", t:"mcq", q:"Where were the eggs kept?", o:["In the storeroom","At the cashier","In Danial's bag","On a different shelf"], a:0, m:1, topic:"listening — detail"}
       ]}
    ]}
  ]
};
