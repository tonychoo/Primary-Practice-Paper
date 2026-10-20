/* P3 English Paper 2, Practice Set 6 (general practice). Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set6",
  total: 50,
  durationMin: 75,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"The boy ______ broke the window apologised to the teacher.",o:["who","whose","which","whom"],a:0,topic:"relative pronouns"},
  {id:"2",t:"mcq",q:"I have a cousin ______ bicycle was stolen last week.",o:["who","whose","which","whom"],a:1,topic:"relative pronouns"},
  {id:"3",t:"mcq",q:"Mr Tan is ______ honest shopkeeper who never overcharges his customers.",o:["a","the","an","any"],a:2,topic:"articles"},
  {id:"4",t:"mcq",q:"She plays ______ violin every evening after dinner.",o:["a","an","some","the"],a:3,topic:"articles"},
  {id:"5",t:"mcq",q:"The nurse bandaged the wound ______ so that it wouldn't hurt.",o:["gently","quickly","loudly","roughly"],a:0,topic:"adverbs"},
  {id:"6",t:"mcq",q:"He solved the difficult puzzle ______, without needing any help.",o:["clumsily","easily","sadly","angrily"],a:1,topic:"adverbs"},
  {id:"7",t:"mcq",q:"Mdm Lee ______ visits the market before seven in the morning, to get the freshest vegetables.",o:["never","rarely","always","seldom"],a:2,topic:"adverbs"},
  {id:"8",t:"mcq",q:"Although the clinic is nearby, Grandpa ______ goes there unless it's truly necessary.",o:["always","often","usually","rarely"],a:3,topic:"adverbs"}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The coach praised the team for their ______ effort during the final match.",o:["outstanding","half-hearted","careless","ordinary"],a:0},
  {id:"10",t:"mcq",q:"The thick fog made it hard to see the road, so the bus driver drove ______.",o:["recklessly","cautiously","swiftly","noisily"],a:1},
  {id:"11",t:"mcq",q:"The customer complained that the fruit at the stall looked ______ and overripe.",o:["fresh","crisp","bruised","colourful"],a:2},
  {id:"12",t:"mcq",q:"Mother warned us not to ______ our allowance on snacks every single day.",o:["save","invest","donate","squander"],a:3},
  {id:"13",t:"mcq",q:"The puppy ______ at the postman every time he approached the gate.",o:["barked","purred","chirped","mooed"],a:0},
  {id:"14",t:"mcq",q:"The librarian spoke in a ______ voice so as not to disturb other readers.",o:["loud","hushed","harsh","cheerful"],a:1}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["on","in","at","of","for","about","with"],topic:"prepositions",
   text:"Jun is interested {15} building model aeroplanes out of recycled materials. He is particularly good {16} following the instructions step by step. Jun's father is proud {17} his son's patience and creativity. Whenever Jun finishes a new model, he waits {18} his father to come home so they can admire it together.",
   ans:{"15":["in"],"16":["at"],"17":["of"],"18":["for"]}},
  {t:"cloze",title:"Passage 2",box:["was","has","will","are","is","were","have"],topic:"tenses",
   text:"Nowadays, fewer hawker stalls {19} willing to use charcoal stoves because of the extra work involved. Years ago, almost every stall along this row {20} using a charcoal stove instead of gas. Food historians say this way of cooking {21} probably disappear completely within a decade. Right now, only a handful of elderly hawkers {22} kept up the tradition.",
   ans:{"19":["are"],"20":["was"],"21":["will"],"22":["have"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",
   text:"Every fortnight, Nurul visits the public library near her home {23} return her storybooks and borrow new ones. Last month, she discovered a shelf of mystery novels {24} she had never borrowed from before. She picked out three books and read {25} of them within a single week. Her mother was surprised {26} quickly Nurul finished such thick books. Nurul explained that she simply could not put {27} book down once the story became exciting.",
   ans:{"23":["to"],"24":["that","which"],"25":["all"],"26":["how"],"27":["the"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"Last month, Nurul's family visited the [28|national] library building in the city. Her brother [29|borowed] a stack of comic books, while Nurul [30|searchd] carefully for a mystery novel. On the bus ride home, Nurul [31|readed] the first chapter and could not wait to continue.",
   ans:{"28":{a:["National"],cs:true},"29":{a:["borrowed"]},"30":{a:["searched"]},"31":{a:["read"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Jun cleaned his room. He went out to play football. (before)",model:"Jun cleaned his room before he went out to play football.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"33",t:"parent",q:"The librarian smiled at Nurul. Nurul returned every book on time. (because)",model:"The librarian smiled at Nurul because she returned every book on time.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"34",t:"parent",q:"I know a boy. His kite flew higher than everyone else's. (whose)",model:"I know a boy whose kite flew higher than everyone else's.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"A Morning at the Market",p:[
  "Jun woke up early on Sunday to accompany his grandmother to the wet market near their flat. She needed fresh ingredients to cook her famous herbal chicken soup for a family gathering.",
  "At the vegetable stall, Grandmother carefully picked out the freshest ginger and goji berries, chatting with the stallholder she had known for many years.",
  "While they were choosing chicken at the poultry stall, Jun noticed an elderly man struggling to carry two heavy bags of rice. Without being asked, Jun ran over and offered to help carry one bag to the man's bicycle.",
  "The elderly man thanked Jun warmly and remarked that young people nowadays were rarely so considerate. Grandmother overheard this and beamed with pride at her grandson.",
  "On the way home, Grandmother told Jun that kindness shown to strangers often returns to you in unexpected ways. Jun smiled, feeling that the whole morning had been worth waking up early for."]}, items:[
  {id:"35",t:"mcq",q:"Why did Jun accompany his grandmother to the market?",o:["To help her buy ingredients for soup","To buy a kite","To meet his friends","To exercise"],a:0},
  {id:"36",t:"key",q:"Which word in paragraph 4 means “said something, often giving an opinion”?",keys:["remarked"],model:"remarked",m:1},
  {id:"37",t:"parent",q:"Why did the elderly man say young people nowadays were rarely so considerate?",model:"Because Jun had helped him carry his heavy bag of rice without being asked.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) Grandmother needed ingredients for herbal chicken soup.",a:"T"},{id:"38b",s:"(b) Jun was asked by the elderly man to help him.",a:"F"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"Grandmother picked out ginger and goji berries.",a:"1"},{id:"39b",s:"Jun helped carry a bag of rice.",a:"2"},{id:"39c",s:"The elderly man thanked Jun warmly.",a:"3"}],m:1},
  {id:"40",t:"key",q:"What was Grandmother cooking for the family gathering?",keys:["soup","herbal chicken soup","chicken soup"],model:"Herbal chicken soup",m:1},
  {id:"41",t:"parent",q:"What did Grandmother tell Jun on the way home?",model:"She told him that kindness shown to strangers often returns to you in unexpected ways.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The Overdue Book",p:[
  "Ryan borrowed a thick encyclopedia about dinosaurs from the school library for a project. He promised the librarian, Mrs Pillai, that he would return it within two weeks.",
  "Halfway through his project, Ryan accidentally spilled orange juice on one corner of the book. He panicked, imagining he would have to pay a huge fine or be banned from borrowing books.",
  "Instead of hiding the problem, Ryan decided to tell Mrs Pillai honestly what had happened as soon as he returned the book, even though he was nervous about her reaction.",
  "Mrs Pillai thanked him for being honest and explained that accidents happen sometimes. She only asked him to be more careful with library books in future, and waived the usual fine.",
  "Relieved, Ryan promised to always keep drinks away from borrowed books from then on. He also told his classmates how honesty had saved him from a much bigger problem."]}, items:[
  {id:"42",t:"key",q:"Which word in paragraph 3 means “truthfully”?",keys:["honestly"],model:"honestly",m:1},
  {id:"43a",t:"parent",q:"Why was Ryan afraid after spilling juice on the book? Give two reasons. (a)",model:"He thought he would have to pay a huge fine.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different reasons."},
  {id:"43b",t:"parent",q:"(b) Second reason",model:"He thought he might be banned from borrowing books.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different reasons."},
  {id:"44",t:"parent",q:"Why did Mrs Pillai waive the usual fine?",model:"Because Ryan was honest with her about what had happened to the book.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"45",t:"parent",q:"How do you know that Ryan learned from this experience?",model:"He promised to always keep drinks away from borrowed books in future.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"46",t:"key",q:"What subject was Ryan's encyclopedia about?",keys:["dinosaurs"],model:"Dinosaurs",m:1},
  {id:"47",t:"mcq",q:"How did Ryan feel after telling Mrs Pillai the truth?",o:["Angry","Relieved","Confused","Proud"],a:1},
  {id:"48",t:"parent",q:"What lesson did Ryan's classmates learn from his story?",model:"They learned that being honest about a mistake can lead to a better outcome than hiding it.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]}
]
};
