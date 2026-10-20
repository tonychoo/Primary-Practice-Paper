/* P3 English Paper 2, Practice Set 5 (general practice). Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set5",
  total: 50,
  durationMin: 75,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"Farhan can swim very well, ______ he?",o:["doesn't","can't","isn't","won't"],a:1,topic:"question tags"},
  {id:"2",t:"mcq",q:"The pupils haven't finished their project, ______ they?",o:["have","haven't","didn't","don't"],a:0,topic:"question tags"},
  {id:"3",t:"mcq",q:"Grandma kept her sewing kit ______ a small wooden box under her bed.",o:["at","on","in","to"],a:2,topic:"prepositions"},
  {id:"4",t:"mcq",q:"The cat jumped ______ the table to reach the fish on the plate.",o:["under","into","across","onto"],a:3,topic:"prepositions"},
  {id:"5",t:"mcq",q:"There was only ______ space left in the carpark, so Father had to park further away.",o:["little","few","many","a few"],a:0,topic:"quantifiers"},
  {id:"6",t:"mcq",q:"______ pupils in the class own a pet at home.",o:["Much","Many","A little","Little"],a:1,topic:"quantifiers"},
  {id:"7",t:"mcq",q:"Xin Yi wanted to join the choir, ______ she was told the auditions had closed.",o:["so","and","but","because"],a:2,topic:"conjunctions"},
  {id:"8",t:"mcq",q:"Dev studied hard for the test, ______ he wanted to improve his grades.",o:["but","or","although","because"],a:3,topic:"conjunctions"}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The old bridge looked ______, so engineers closed it for repairs.",o:["unstable","sturdy","colourful","narrow"],a:0},
  {id:"10",t:"mcq",q:"The toddler was ______ to try the spicy noodles, since her tongue still remembered the sting from last time.",o:["eager","reluctant","bored","confident"],a:1},
  {id:"11",t:"mcq",q:"The crowd fell ______ as the principal began his speech.",o:["noisy","excited","silent","chatty"],a:2},
  {id:"12",t:"mcq",q:"The old man's hands ______ slightly as he tried to thread the needle.",o:["waved","clapped","rested","trembled"],a:3},
  {id:"13",t:"mcq",q:"The strong smell of durian ______ throughout the whole corridor long after Uncle Lim had left.",o:["vanished","whispered","lingered","floated"],a:2},
  {id:"14",t:"mcq",q:"Grandfather always ______ us about road safety before we cross any street.",o:["forgets","ignores","avoids","reminds"],a:3}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["because","although","but","so","since","when"],topic:"conjunctions",
   text:"Hafiz wanted to join the robotics club, {15} he was worried his grades might slip. His father told him not to worry {16} the club only met once a week. {17} Hafiz signed up, his teacher was pleased to see him trying something new. He found the sessions fun, {18} he decided to stay in the club for the whole year.",
   ans:{"15":["although"],"16":["because"],"17":["when"],"18":["so"]}},
  {t:"cloze",title:"Passage 2",box:["are","was","will","have","is","were","has"],topic:"tenses",
   text:"These days, more residents {19} cycling to work along the new park connector. Last year, the path {20} still under construction, so cyclists had to use the main road instead. The town council says more connectors {21} be built over the next two years. Right now, several families {22} already begun exploring the new route on weekends.",
   ans:{"19":["are"],"20":["was"],"21":["will"],"22":["have"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",
   text:"Every Saturday morning, Celeste helps out at her grandmother's provision shop near the market. She enjoys arranging the snacks {23} neat rows on the shelves. One day, a young boy came in and could not find enough coins {24} buy his favourite sweets. Celeste quietly topped up the difference {25} telling anyone. Her grandmother noticed {26} happened and praised her for being kind. From then on, Celeste looked forward {27} helping at the shop even more.",
   ans:{"23":["in"],"24":["to"],"25":["without"],"26":["what"],"27":["to"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"On [28|friday] evening, Timothy's family visited his grandmother's flat in Yishun. His cousin [29|runned] all the way from the lift lobby to greet them. Timothy's grandmother had [30|cuked] a big pot of herbal soup, and the sweet smell filled the whole flat. Everyone sat down and [31|enjoied] a hearty dinner together.",
   ans:{"28":{a:["Friday"],cs:true},"29":{a:["ran"]},"30":{a:["cooked"]},"31":{a:["enjoyed"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Celeste finished her chores early. She had time to read her favourite book. (since)",model:"Since Celeste finished her chores early, she had time to read her favourite book. / Celeste had time to read her favourite book since she finished her chores early.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"33",t:"parent",q:"Timothy brushed his teeth. He went to bed. (before)",model:"Timothy brushed his teeth before he went to bed.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"34",t:"parent",q:"I bought a storybook. It has won several awards. (which)",model:"I bought a storybook which has won several awards.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The New Member",p:[
  "Celeste had always loved watching the school dance CCA perform during assembly, but she was far too shy to join. In Primary 3, her best friend, Siti, finally convinced her to attend one trial session.",
  "At the first practice, Celeste kept making mistakes with the steps and wanted to quit immediately. The senior dancers, however, patiently showed her the moves again and again without any complaint.",
  "Over the next few weeks, Celeste practised every day after school, sometimes alone in front of her bedroom mirror. Slowly, the steps became easier, and she began to enjoy the music instead of fearing the mistakes.",
  "By the time of the CCA's year-end showcase, Celeste was confident enough to perform in the front row. Her parents, watching from the audience, could hardly recognise the once-shy girl dancing so freely.",
  "After the show, Siti hugged her tightly and said she was proud of how far Celeste had come. Celeste smiled and admitted that joining the CCA was the best decision she had made that year."]}, items:[
  {id:"35",t:"mcq",q:"Who convinced Celeste to attend her first dance trial session?",o:["Her mother","A senior dancer","Siti","Her teacher"],a:2},
  {id:"36",t:"key",q:"Which word in paragraph 2 means “without getting annoyed”?",keys:["patiently"],model:"patiently",m:1},
  {id:"37",t:"parent",q:"Why did Celeste want to quit at her first practice?",model:"Because she kept making mistakes with the dance steps.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) Celeste practised alone at home sometimes.",a:"T"},{id:"38b",s:"(b) Celeste's parents could not attend the showcase.",a:"F"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"Celeste attended her first dance trial session.",a:"1"},{id:"39b",s:"Celeste practised alone in front of her mirror.",a:"2"},{id:"39c",s:"Celeste performed in the front row at the showcase.",a:"3"}],m:1},
  {id:"40",t:"key",q:"Who showed Celeste the dance moves patiently at her first practice?",keys:["seniors","senior dancers"],model:"The senior dancers",m:1},
  {id:"41",t:"parent",q:"How did Celeste change from her first practice to the showcase?",model:"She went from being unsure and wanting to quit to feeling confident enough to perform in the front row.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"Uncle Hassan's Breakfast Stall",p:[
  "Uncle Hassan has sold economy rice at the hawker centre near Adam's block for over twenty years. Many elderly residents who live alone look forward to his cheerful greeting every morning.",
  "One rainy morning, Adam noticed that Madam Lily, an elderly widow, had forgotten her umbrella and was standing uncertainly at the stall, unable to walk home in the downpour.",
  "Uncle Hassan quickly wrapped up her breakfast, then asked his nephew to mind the stall for a few minutes while he walked Madam Lily home under his own umbrella.",
  "When he returned, a long queue of hungry customers had formed, but nobody complained. Several regulars said they admired how Uncle Hassan always looked out for his elderly customers.",
  "From that day on, Uncle Hassan kept a spare umbrella behind his stall, just in case another customer was ever caught in the rain without one."]}, items:[
  {id:"42",t:"key",q:"Which word in paragraph 2 means “not sure what to do”?",keys:["uncertainly"],model:"uncertainly",m:1},
  {id:"43a",t:"parent",q:"What did Uncle Hassan do to help Madam Lily? Give two things. (a)",model:"He wrapped up her breakfast quickly.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things he did."},
  {id:"43b",t:"parent",q:"(b) Second thing he did",model:"He walked her home under his own umbrella.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things he did."},
  {id:"44",t:"parent",q:"Why did a long queue form at Uncle Hassan's stall?",model:"Because he had left the stall for a while to walk Madam Lily home.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"45",t:"parent",q:"How do you know that Uncle Hassan's customers respected what he did?",model:"Nobody complained about the long queue, and several regulars said they admired him for looking out for his elderly customers.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"46",t:"key",q:"What did Uncle Hassan keep behind his stall from then on?",keys:["umbrella","spare umbrella"],model:"A spare umbrella",m:1},
  {id:"47",t:"mcq",q:"How did Madam Lily most likely feel when Uncle Hassan offered to walk her home?",o:["Annoyed","Embarrassed","Bored","Grateful"],a:3},
  {id:"48",t:"parent",q:"What lesson can we learn from Uncle Hassan's actions?",model:"We can learn that small acts of kindness, like helping a neighbour in need, make a real difference to others.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]}
]
};
