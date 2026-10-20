/* P3 English Paper 2, Practice Set 4 (general practice). Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set4",
  total: 50,
  durationMin: 75,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"While Ryan ______ his model aeroplane, the glue spilled onto the table.",o:["was building","built","builds","has built"],a:0,topic:"tenses"},
  {id:"2",t:"mcq",q:"Natasha ______ her science project already, so she can relax this weekend.",o:["finishes","has finished","finished","is finishing"],a:1,topic:"tenses"},
  {id:"3",t:"mcq",q:"Neither the teacher nor the pupils ______ aware of the fire drill.",o:["was","is","were","am"],a:2,topic:"subject-verb agreement"},
  {id:"4",t:"mcq",q:"Each of the twins ______ a different hobby.",o:["have","having","are having","has"],a:3,topic:"subject-verb agreement"},
  {id:"5",t:"mcq",q:"Mei Lin and I shared ______ lunch at the canteen.",o:["our","her","his","their"],a:0,topic:"pronouns"},
  {id:"6",t:"mcq",q:"The toddlers hurt ______ while playing at the playground.",o:["himself","themselves","herself","itself"],a:1,topic:"pronouns"},
  {id:"7",t:"mcq",q:"This durian cake is ______ than the one we had last week.",o:["sweet","sweetest","sweeter","more sweet"],a:2,topic:"comparatives"},
  {id:"8",t:"mcq",q:"Of all the hawker stalls here, this one serves the ______ laksa.",o:["good","better","goodest","best"],a:3,topic:"comparatives"}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The librarian looked ______ when she found the torn pages in the book.",o:["upset","delighted","bored","calm"],a:0},
  {id:"10",t:"mcq",q:"A sudden ______ of rain forced the picnic indoors.",o:["drought","downpour","breeze","drizzle"],a:1},
  {id:"11",t:"mcq",q:"The toddler started to ______ when she couldn't find her mother.",o:["giggle","shout","whimper","whisper"],a:2},
  {id:"12",t:"mcq",q:"Visitors must ______ their belongings at the museum counter before entering.",o:["donate","discard","distribute","deposit"],a:3},
  {id:"13",t:"mcq",q:"The detective gave the suspect a ______ look before asking the question.",o:["suspicious","joyful","careless","friendly"],a:0},
  {id:"14",t:"mcq",q:"After the long hike, the scouts were ______ and went straight to bed.",o:["energetic","exhausted","curious","cheerful"],a:1}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["us","it","its","he","them","she","they"],topic:"pronouns",
   text:"My uncle, Mr Ong, visited {15} last weekend with his new puppy. He let {16} play in the garden while we had tea. The puppy wagged {17} tail happily whenever someone called its name. Uncle Ong said {18} would come again next month.",
   ans:{"15":["us"],"16":["it"],"17":["its"],"18":["he"]}},
  {t:"cloze",title:"Passage 2",box:["was","has","will","are","is","were","have"],topic:"tenses",
   text:"Last week, the haze over Singapore {19} quite bad, so many schools cancelled outdoor activities. This week, the air quality {20} improved a lot since the wind changed direction. The weather report says conditions {21} stay clear for the next few days. Right now, many families {22} enjoying picnics in the park again.",
   ans:{"19":["was"],"20":["has"],"21":["will"],"22":["are"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",
   text:"Last Friday, Adam's class went on a Learning Journey to the Singapore Discovery Centre {23} the first time this term. He was excited {24} he had heard many interesting stories about the exhibits from his elder brother. The highlight {25} the simulator ride, which spun gently from side to side. Adam wanted to try it twice, {26} the teacher explained that each pupil could only ride once. He still had a wonderful day and told his parents it was {27} best school trip he had been on.",
   ans:{"23":["for"],"24":["because"],"25":["was"],"26":["but"],"27":["the"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"Last [28|wednesday], Priya's class visited the community library to return their books. The librarian, Mr Tan, [29|helpped] them find new storybooks about animals. Priya [30|choosed] a book about dolphins, while her friend picked one about [31|eagels].",
   ans:{"28":{a:["Wednesday"],cs:true},"29":{a:["helped"]},"30":{a:["chose"]},"31":{a:["eagles"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Ryan was late for school. He missed the school bus. (because)",model:"Ryan was late for school because he missed the school bus.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"33",t:"parent",q:"Natasha finished her homework. She watched her favourite cartoon. (after)",model:"Natasha watched her favourite cartoon after she finished her homework. / After Natasha finished her homework, she watched her favourite cartoon.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"34",t:"parent",q:"I have a teacher. She always encourages us to try our best. (who)",model:"I have a teacher who always encourages us to try our best.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"Natasha's Big Day",p:[
  "Natasha had been practising her recorder piece for the school's National Day concert for three months. Her CCA teacher, Mr Lim, had chosen her to play a short solo before the whole school choir began.",
  "On the morning of the concert, Natasha's hands felt cold and shaky backstage. She peeked through the curtain and saw hundreds of pupils and parents already seated in the hall.",
  "Just before her turn, her recorder slipped from her sweaty palms and rolled under a chair. Her friend, Haikal, quickly crawled under the chair and passed it back to her with a reassuring smile.",
  "When Natasha finally stepped onto the stage, she took a deep breath and played the piece from memory, without a single mistake. The audience clapped warmly as she bowed and hurried off stage.",
  "Afterwards, Mr Lim told her how proud he was, and Natasha realised that practising often was what had given her the confidence to recover from the little mishap."]}, items:[
  {id:"35",t:"mcq",q:"What was Natasha preparing to play at the concert?",o:["A recorder solo","A choir song","A dance","A speech"],a:0},
  {id:"36",t:"key",q:"Which word in paragraph 3 means “comforting”?",keys:["reassuring"],model:"reassuring",m:1},
  {id:"37",t:"parent",q:"Why did Natasha's hands feel cold and shaky backstage?",model:"Because she was nervous about performing her solo in front of the whole school.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) Haikal passed Natasha's recorder back to her.",a:"T"},{id:"38b",s:"(b) Natasha made several mistakes while playing on stage.",a:"F"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"Natasha's recorder rolled under a chair.",a:"1"},{id:"39b",s:"Natasha played her piece without a mistake.",a:"2"},{id:"39c",s:"Mr Lim told Natasha he was proud of her.",a:"3"}],m:1},
  {id:"40",t:"key",q:"What object rolled under a chair just before Natasha's turn?",keys:["recorder"],model:"Her recorder",m:1},
  {id:"41",t:"parent",q:"How did Natasha recover after her recorder nearly caused a problem?",model:"She calmed down, took a deep breath, and played the piece from memory without a mistake.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The Picnic Surprise",p:[
  "Ryan's family planned a picnic at East Coast Park on Saturday afternoon. His mother packed sandwiches, fruit and a large flask of barley water into a picnic basket.",
  "When they arrived, Ryan's younger sister, Mei Xin, realised she had left her favourite stuffed rabbit at home. She started to sob loudly, and nothing seemed to comfort her.",
  "Ryan remembered that their neighbour, Mrs Choo, had a spare key to their flat. He called his father's phone and asked him to ring Mrs Choo for help.",
  "Mrs Choo kindly found the stuffed rabbit on Mei Xin's bed and passed it to a family friend who was driving to the park anyway. Within an hour, the rabbit arrived safely.",
  "Mei Xin hugged her rabbit tightly and finally smiled. The family spread out their picnic mat, and everyone enjoyed the rest of the afternoon by the sea, grateful that a small problem had been solved so quickly."]}, items:[
  {id:"42",t:"key",q:"Which word in paragraph 2 means “cried”?",keys:["sob"],model:"sob",m:1},
  {id:"43a",t:"parent",q:"What did Ryan do to help solve the problem? Give two things. (a)",model:"He remembered that their neighbour, Mrs Choo, had a spare key to their flat.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things he did."},
  {id:"43b",t:"parent",q:"(b) Second thing he did",model:"He asked his father to call Mrs Choo for help.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things he did."},
  {id:"44",t:"parent",q:"Why did Mei Xin start to cry at the park?",model:"Because she had left her favourite stuffed rabbit at home.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"45",t:"parent",q:"How was the stuffed rabbit brought to the park?",model:"Mrs Choo found it at home and passed it to a family friend who was driving to the park.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"46",t:"key",q:"What did Ryan's mother pack the food into?",keys:["basket","picnic basket"],model:"A picnic basket",m:1},
  {id:"47",t:"mcq",q:"How did Mei Xin feel when her rabbit finally arrived?",o:["Angry","Relieved","Bored","Jealous"],a:1},
  {id:"48",t:"parent",q:"What does this story show about Ryan's family?",model:"It shows that they help each other and stay calm to solve problems when something goes wrong.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]}
]
};
