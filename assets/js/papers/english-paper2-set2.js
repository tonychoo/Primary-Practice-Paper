/* P3 English Paper 2, Practice Set 2. Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set2",
  total: 50,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"While Siti ______ her bicycle, it began to rain.",o:["rides","rode","was riding","has ridden"],a:2},
  {id:"2",t:"mcq",q:"Each of the pupils ______ a packet of stickers.",o:["get","getting","have got","gets"],a:3},
  {id:"3",t:"mcq",q:"The ball rolled ______ the fence into the neighbour's garden.",o:["over","in","under","at"],a:0},
  {id:"4",t:"mcq",q:"Kumar and I shared ______ snacks during recess.",o:["his","her","our","their"],a:2},
  {id:"5",t:"mcq",q:"This durian is ______ than that one.",o:["sweet","sweeter","sweetest","more sweet"],a:1},
  {id:"6",t:"mcq",q:"There is ______ milk left in the bottle.",o:["many","few","little","a few"],a:2},
  {id:"7",t:"mcq",q:"Farah can play the violin, ______ she?",o:["does","can't","isn't","doesn't"],a:1},
  {id:"8",t:"mcq",q:"Wei Jie was tired, ______ he still finished his homework.",o:["so","but","or","because"],a:1}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The old man walked with a ______ because his leg hurt.",o:["limp","skip","jump","dance"],a:0},
  {id:"10",t:"mcq",q:"Nora felt ______ when she won first prize in the competition.",o:["jealous","nervous","delighted","bored"],a:2},
  {id:"11",t:"mcq",q:"Please ______ your voice; the baby is sleeping.",o:["raise","lower","clear","lose"],a:1},
  {id:"12",t:"mcq",q:"The students had to ______ their homework before the deadline.",o:["borrow","collect","waste","submit"],a:3},
  {id:"13",t:"mcq",q:"The soup was so ______ that Dev could not eat it.",o:["colourful","heavy","salty","soft"],a:2},
  {id:"14",t:"mcq",q:"A ______ of elephants walked slowly across the field.",o:["flock","swarm","herd","pack"],a:2}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["at","in","for","of","on","with","about"],
   text:"On Sports Day, Siti arrived {15} the school field early in the morning. She took part {16} the 100-metre race for the first time. Her classmates cheered {17} her loudly from the stands. After the race, she felt very proud {18} her silver medal.",
   ans:{"15":["at"],"16":["in"],"17":["for"],"18":["of"]}},
  {t:"cloze",title:"Passage 2",box:["was","has","will","are","is","were","have"],
   text:"Yesterday, the sky {19} very cloudy, so Mr Tan brought an umbrella to work. Today, the sun {20} been shining brightly since morning. The weather report says it {21} rain again tomorrow. Right now, two of my friends {22} waiting for the bus under a shady tree.",
   ans:{"19":["was"],"20":["has"],"21":["will"],"22":["are"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",
   text:"Last Saturday, Dev's family visited the zoo {23} the first time this year. They saw a baby elephant playing {24} its mother near the pond. Dev wanted to feed the giraffes, {25} the zookeeper said visitors were not allowed to do so. By the end of the day, he was {26} tired that he fell asleep in the car on the way home. He told his parents that it had been the {27} day of his holidays so far.",
   ans:{"23":["for"],"24":["with","beside"],"25":["but"],"26":["so"],"27":["best"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"On [28|monday] morning, Farah took the bus to the museum with her cousin, Nora. At the entrance, Nora [29|buyed] two tickets for them. Inside, they [30|runned] straight to the dinosaur hall. Before leaving, they visited the gift shop near the [31|librery].",
   ans:{"28":{a:["Monday"],cs:true},"29":{a:["bought"]},"30":{a:["ran"]},"31":{a:["library"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Wei Jie brushed his teeth. He went to bed. (before)",model:"Wei Jie brushed his teeth before he went to bed.",m:1},
  {id:"33",t:"parent",q:"Xin Yi worked very hard. She did not win the competition. (although)",model:"Although Xin Yi worked very hard, she did not win the competition. / Xin Yi worked very hard although she did not win the competition.",m:1},
  {id:"34",t:"parent",q:"I have a neighbour. His cat often sits on our doorstep. (whose)",model:"I have a neighbour whose cat often sits on our doorstep.",m:1}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"Helping Uncle Tan",p:[
  "Wei Jie lived in a block of HDB flats in Toa Payoh. Every afternoon after school, he liked to read comics at the void deck while waiting for his mother to come home from work.",
  "One hot afternoon, he noticed an elderly man, Uncle Tan, struggling to carry two heavy bags of groceries from the market. Just as Uncle Tan reached the lift, one of the bags tore and oranges rolled across the floor.",
  "Wei Jie quickly put down his comic and ran over to help. Together, they picked up every orange. Wei Jie then offered to carry the bags up to Uncle Tan's flat on the fifth floor.",
  "Uncle Tan was grateful and invited him in for a cup of barley water. Wei Jie noticed a chessboard on the table. Uncle Tan explained that he used to play chess every weekend before his wife passed away.",
  "Wei Jie had just joined the Chess Club as his CCA, so he asked eagerly if Uncle Tan could teach him a new move. From that day on, he visited Uncle Tan every Friday after his Chess Club meeting, and his game improved so much that he later won a bronze medal at the inter-school competition."]}, items:[
  {id:"35",t:"mcq",q:"Where did Wei Jie usually read his comics after school?",o:["In his bedroom","At the void deck","In the lift","At the market"],a:1},
  {id:"36",t:"key",q:"What rolled across the floor when the bag tore?",keys:["oranges"],model:"Oranges",m:1},
  {id:"37",t:"parent",q:"How did Wei Jie help Uncle Tan?",model:"He helped pick up the oranges and carried the bags up to Uncle Tan's flat. / He carried the groceries up to the fifth floor.",m:1},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) Uncle Tan's flat was on the fifth floor.",a:"T"},{id:"38b",s:"(b) Wei Jie had played chess with Uncle Tan many times before this day.",a:"F"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"Uncle Tan invited Wei Jie in for a cup of barley water.",a:"3"},{id:"39b",s:"One of the bags of groceries tore.",a:"1"},{id:"39c",s:"Wei Jie helped pick up the oranges.",a:"2"}],m:1},
  {id:"40",t:"key",q:"Which word in the passage means “thankful”?",keys:["grateful"],model:"grateful",m:1},
  {id:"41",t:"parent",q:"Why did Wei Jie ask Uncle Tan to teach him a new chess move?",model:"Because he had just joined the Chess Club as his CCA and wanted to learn more about chess.",m:1}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"Kumar's MRT Adventure",p:[
  "Kumar was excited because his mother finally agreed to let him travel alone to his Auntie Wong's house by MRT. Before he left, his mother repeated the instructions three times: take the North-South Line, change trains at the interchange station, and get off two stops later.",
  "At first, everything went smoothly. Kumar found a seat near the window and watched the stations go by.",
  "However, when the train reached the interchange, he was staring out of the window and did not notice the doors opening. By the time he looked up, the doors had already closed, and the train had left the station.",
  "Kumar felt his heart beat faster. He had missed his stop! An elderly woman sitting across from him noticed his worried face. “Are you lost, young man?” she asked kindly. Kumar explained what had happened.",
  "The woman smiled and told him not to worry. She showed him how to check the train map above the doors and helped him plan a new route back to the interchange. Kumar thanked her many times.",
  "When he finally arrived at his aunt's station, Auntie Wong was waiting with a wide smile. “You made it on your own!” she said proudly. That evening, Kumar called his mother to tell her everything. “I was scared for a while,” he admitted, “but I learned how to read the train map properly now.” His mother was proud of how calmly he had solved the problem."]}, items:[
  {id:"42",t:"key",q:"Who helped Kumar when he looked lost on the train?",keys:["woman"],model:"An elderly woman",m:1},
  {id:"43a",t:"parent",q:"What did the woman do to help Kumar? Give two things she did. (a)",model:"She showed him how to check the train map above the doors.",m:1},
  {id:"43b",t:"parent",q:"(b) Second thing she did",model:"She helped him plan a new route back to the interchange.",m:1},
  {id:"44",t:"parent",q:"Why did Kumar not notice the train doors opening at the interchange?",model:"He was staring out of the window and did not notice the doors opening.",m:1},
  {id:"45",t:"parent",q:"How do you know that Auntie Wong was happy to see Kumar?",model:"She was waiting with a wide smile and said, “You made it on your own!” proudly.",m:1},
  {id:"46",t:"key",q:"Which word in the last paragraph means “admitted or confessed”?",keys:["admitted"],model:"admitted",m:1},
  {id:"47",t:"mcq",q:"How did Kumar feel when he realised the train doors had closed without him?",o:["Excited","Proud","Worried","Bored"],a:2},
  {id:"48",t:"parent",q:"What lesson did Kumar learn from his MRT adventure?",model:"He learned to read the train map properly and pay attention so that he would not miss his stop again.",m:1}
 ]}
]
};
