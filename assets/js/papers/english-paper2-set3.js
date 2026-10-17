/* P3 English Paper 2, Practice Set 3 (focus practice). Content only: the engine is assets/js/paper.js
   Weighted at weak spots shown by Set 2 attempts: prepositions and fixed phrases, countable/uncountable
   quantifiers, connectors and fixed sentence patterns in cloze, and answering comprehension questions
   in the pupil's own words instead of copying a passage sentence. */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set3",
  total: 50,
  durationMin: 75,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"Zhi Hao lives ______ Block 128, Bedok North Street 2.",o:["at","in","on","to"],a:0,topic:"prepositions"},
  {id:"2",t:"mcq",q:"Mei Ling's family has lived ______ Tampines for ten years.",o:["on","in","at","to"],a:1,topic:"prepositions"},
  {id:"3",t:"mcq",q:"The dentist's clinic opens ______ nine o'clock every morning.",o:["on","to","at","in"],a:2,topic:"prepositions"},
  {id:"4",t:"mcq",q:"The inter-class quiz will be held ______ Friday.",o:["at","in","to","on"],a:3,topic:"prepositions"},
  {id:"5",t:"mcq",q:"The kitten squeezed ______ the small gap under the gate to get into the garden.",o:["through","over","under","across"],a:0,topic:"prepositions"},
  {id:"6",t:"mcq",q:"The ball flew ______ the high wall, missing the rooftop by inches, and landed in the next-door garden.",o:["under","over","through","across"],a:1,topic:"prepositions"},
  {id:"7",t:"mcq",q:"There is only ______ flour left in the tin, so Mother needs to buy more before baking.",o:["few","many","little","a few"],a:2,topic:"quantifiers"},
  {id:"8",t:"mcq",q:"There are ______ eggs left in the carton, so we should buy another dozen.",o:["much","many","little","few"],a:3,topic:"quantifiers"}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The durian's smell was so ______ that Mei had to leave the room.",o:["strong","sweet","mild","fresh"],a:0},
  {id:"10",t:"mcq",q:"The kind old man gave the lost child a ______ smile to make her feel safe.",o:["fierce","gentle","blank","sudden"],a:1},
  {id:"11",t:"mcq",q:"The football match was postponed because of the ______ rain.",o:["light","dry","heavy","clear"],a:2},
  {id:"12",t:"mcq",q:"Nora felt ______ when she saw a cockroach scuttle across the kitchen floor.",o:["delighted","calm","proud","disgusted"],a:3},
  {id:"13",t:"mcq",q:"The librarian asked the pupils to ______ their voices in the reading room.",o:["lower","raise","clear","lose"],a:0},
  {id:"14",t:"mcq",q:"The injured hiker could only ______ slowly down the hill with a stick.",o:["run","limp","skip","jump"],a:1}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["at","of","in","for","on","about","with"],topic:"prepositions",
   text:"Hui Ling is good {15} drawing cartoons of her classmates. She is very proud {16} the sketchbook she has filled since Primary 1. Every Thursday after school, Hui Ling takes part {17} the art club at the CCA room. Her younger brother likes to wait {18} her outside the room so that they can walk home together.",
   ans:{"15":["at"],"16":["of"],"17":["in"],"18":["for"]}},
  {t:"cloze",title:"Passage 2",box:["was","has","will","are","is","were","have"],topic:"tenses",
   text:"Last month, the weather {19} very hot and dry across the island. This week, however, it {20} rained every afternoon without fail. The forecast says showers {21} continue until the weekend. Right now, several farmers {22} hoping for a dry spell so they can harvest their vegetables.",
   ans:{"19":["was"],"20":["has"],"21":["will"],"22":["are"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",topic:"connectors",
   text:"Last Saturday, Arif's class visited the Singapore Science Centre {23} the first time. He wanted to touch the giant tesla coil, {24} the guide said visitors were not allowed to get too close. {25} he felt disappointed about this, Arif still enjoyed the rest of the exhibits. He ran {26} quickly from one display to another that he felt tired by the end of the visit. He only stopped exploring the exhibits {27} he did not want to miss the bus home.",
   ans:{"23":["for"],"24":["but"],"25":["although","though"],"26":["so"],"27":["because"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"On [28|tuesday], the Primary 3 pupils went for a walking trail near Bishan Park. They walked [29|carefuly] across the road after looking both ways. When a stray cat ran across their path, a few pupils [30|screammed] in surprise. Their teacher calmly [31|telled] them it was safe to continue.",
   ans:{"28":{a:["Tuesday"],cs:true},"29":{a:["carefully"]},"30":{a:["screamed"]},"31":{a:["told"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Mei finished her science project. She joined her friends for badminton. (after)",model:"Mei joined her friends for badminton after she finished her science project. / After Mei finished her science project, she joined her friends for badminton.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"33",t:"parent",q:"Danial trained every day for the swimming meet. He did not qualify for the finals. (although)",model:"Although Danial trained every day for the swimming meet, he did not qualify for the finals. / Danial trained every day for the swimming meet although he did not qualify for the finals.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"34",t:"parent",q:"I have a classmate. Her drawings always win prizes at the art competition. (whose)",model:"I have a classmate whose drawings always win prizes at the art competition.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"Clearing the Corridor",p:[
  "Jun Wei lived in a block of HDB flats in Bedok. Every day after school, he noticed old newspapers and empty tins piling up along the corridor outside his flat, left there by residents who forgot to throw them away.",
  "One Saturday morning, Jun Wei decided to do something about it. He borrowed a trolley from the void deck and went from door to door, collecting old newspapers and tins from neighbours who wished to recycle.",
  "His neighbour, Madam Ong, was delighted to see him. She had been meaning to clear out a stack of old magazines, but her bad back made it difficult to carry them downstairs. Jun Wei happily carried the heavy stack for her.",
  "By noon, the trolley was overflowing, and Jun Wei felt exhausted. Still, he pushed it all the way to the recycling bin near the playground and sorted the items carefully into paper and metal.",
  "When his mother saw the empty corridor that evening, she was astonished. Jun Wei explained what he had done, and from then on, he started a small recycling round every weekend, with a few of his friends joining in to help."]}, items:[
  {id:"35",t:"mcq",q:"Where did Jun Wei notice newspapers and tins piling up?",o:["In the lift","At the playground","Along the corridor","Inside his flat"],a:2},
  {id:"36",t:"key",q:"Which word in paragraph 3 means “happy”?",keys:["delighted"],model:"delighted",m:1,hint:"Find the word that could replace '___' in the sentence.",topic:"vocabulary in context"},
  {id:"37",t:"parent",q:"Why did Jun Wei carry the stack of magazines for Madam Ong?",model:"Because her bad back made it difficult for her to carry them downstairs.",m:1,hint:"Start with 'Because…' and answer only what is asked.",guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) Jun Wei felt energetic, not tired, by the end of the morning.",a:"F"},{id:"38b",s:"(b) Jun Wei's mother was astonished when she saw the empty corridor.",a:"T"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"Jun Wei pushed the trolley to the recycling bin.",a:"3"},{id:"39b",s:"Jun Wei borrowed a trolley from the void deck.",a:"1"},{id:"39c",s:"Madam Ong let Jun Wei carry her stack of old magazines.",a:"2"}],m:1},
  {id:"40",t:"key",q:"What did Jun Wei use to collect the items from his neighbours?",keys:["trolley"],model:"A trolley",m:1},
  {id:"41",t:"parent",q:"What did Jun Wei do with the newspapers and tins once he reached the recycling bin?",model:"He sorted them carefully into paper and metal.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The Science Fair Mishap",p:[
  "Aisha had been looking forward to the school's Science Fair for weeks. She and her project partner, Farid, had built a small model volcano that could “erupt” using baking soda and vinegar.",
  "On the morning of the fair, Aisha rushed to school with the volcano model balanced carefully on a tray. Just as she reached the school gate, she tripped over an uneven tile and the model crashed to the ground, breaking into several pieces.",
  "Aisha felt her heart sink. She wanted to cry, but there was no time. Farid, who had just arrived, knelt down immediately and began gathering the broken pieces without saying a word of blame.",
  "Together, they hurried to the Art room and borrowed some glue and cardboard from Mr Rajoo, the art teacher. Working quickly, they managed to patch the volcano back together before the judges began their rounds.",
  "When their turn came, the volcano erupted successfully, and the judges were impressed by how well the pupils explained the chemical reaction. That evening, Aisha told her mother all about what had happened that morning, from the fall to the final success."]}, items:[
  {id:"42",t:"key",q:"Which word in paragraph 2 means “moved quickly”?",keys:["rushed"],model:"rushed",m:1,hint:"Find the word that could replace '___' in the sentence.",topic:"vocabulary in context"},
  {id:"43a",t:"parent",q:"What did Farid do when he saw the broken volcano? Give two things he did. (a)",model:"He knelt down immediately and began gathering the broken pieces.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things he did."},
  {id:"43b",t:"parent",q:"(b) Second thing he did",model:"He hurried with Aisha to borrow glue and cardboard so they could patch the volcano back together.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things he did."},
  {id:"44",t:"parent",q:"Why did Aisha and Farid hurry to the Art room?",model:"Because they needed to borrow glue and cardboard to patch the broken volcano before the judges arrived.",m:1,hint:"Start with 'Because…' and answer only what is asked.",guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"45",t:"parent",q:"How do you know that the judges were impressed with Aisha and Farid's project?",model:"They were impressed by how well the pupils explained the chemical reaction, and the volcano erupted successfully.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"46",t:"key",q:"On the morning of the fair, what did Aisha carry the volcano model on?",keys:["tray"],model:"A tray",m:1},
  {id:"47",t:"mcq",q:"How did Aisha feel right after the volcano model broke?",o:["Relieved","Proud","Bored","Upset"],a:3},
  {id:"48",t:"parent",q:"What lesson did Aisha learn from the accident?",model:"Aisha learned that even when something goes wrong, staying calm and working with a friend can still help her succeed.",m:1,hint:"Say the lesson in your own words: '___ learned that ___.'",guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]}
]
};
