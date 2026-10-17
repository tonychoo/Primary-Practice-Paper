/* P3 English Paper 2, Practice Set 1. Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set1",
  total: 50,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"Neither Ali nor his brothers ______ able to swim.",o:["is","are","was","has"],a:1},
  {id:"2",t:"mcq",q:"Mother ______ dinner when the doorbell rang.",o:["cooks","is cooking","was cooking","has cooked"],a:2},
  {id:"3",t:"mcq",q:"There are not ______ apples left in the basket.",o:["much","many","a little","every"],a:1},
  {id:"4",t:"mcq",q:"The children hurt ______ when they fell off the slide.",o:["himself","herself","ourselves","themselves"],a:3},
  {id:"5",t:"mcq",q:"Every pupil in the class ______ a library card.",o:["have","has","having","are having"],a:1},
  {id:"6",t:"mcq",q:"The cat is hiding ______ the sofa.",o:["under","at","into","of"],a:0},
  {id:"7",t:"mcq",q:"“You like ice cream, ______ you?” asked Grandma.",o:["do","don't","didn't","aren't"],a:1},
  {id:"8",t:"mcq",q:"This is the ______ cake I have ever eaten!",o:["good","better","best","most good"],a:2}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The boy was ______ to cross the road alone because the traffic was very heavy.",o:["afraid","proud","eager","cheerful"],a:0},
  {id:"10",t:"mcq",q:"The fireman ______ the little girl from the burning building.",o:["rescued","received","refused","removed"],a:0},
  {id:"11",t:"mcq",q:"After running in the sun, the dog was ______ and drank a whole bowl of water.",o:["thirsty","greedy","clumsy","noisy"],a:0},
  {id:"12",t:"mcq",q:"Please ______ the lights before you leave the room.",o:["switch on","switch off","turn up","look after"],a:1},
  {id:"13",t:"mcq",q:"The teacher was pleased because Ravi always handed in his homework on ______.",o:["date","hour","time","day"],a:2},
  {id:"14",t:"mcq",q:"The ______ of the cake filled the whole kitchen.",o:["sound","smell","colour","shape"],a:1}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["her","its","their","them","she","they","us"],
   text:"My cousins, Ben and Lily, visited {15} last Sunday. My mother had baked a chocolate cake for {16}. Lily said that chocolate cake was {17} favourite dessert. After tea, we took our puppy for a walk. It wagged {18} tail happily the whole time.",
   ans:{"15":["us"],"16":["them"],"17":["her"],"18":["its"]}},
  {t:"cloze",title:"Passage 2",box:["is","are","was","were","has","have"],
   text:"Every Saturday morning, my father {19} breakfast at the hawker centre. Last Saturday, there {20} many people there because of a fun run. Today, my sister and I {21} going with him. Each of us {22} carrying a bottle of water in our bag.",
   ans:{"19":["has"],"20":["were"],"21":["are"],"22":["is"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",
   text:"Last June holidays, my family went to the beach. We brought a big basket {23} food and drinks. My brother and I built a sandcastle {24} my parents rested under a tree. Suddenly, a huge wave came and washed {25} our sandcastle! My brother was {26} upset that he started to cry. Father told him not to worry, {27} we built an even bigger one together.",
   ans:{"23":["of"],"24":["while","as"],"25":["away"],"26":["so"],"27":["so","and"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"On [28|saturday], Jia Hui went to the library with her friend. She [29|borrowd] three storybooks about animals. Her friend [30|choose] a book about dinosaurs. On the way home, they stopped at a [31|bakary] to buy some buns.",
   ans:{"28":{a:["Saturday"],cs:true},"29":{a:["borrowed"]},"30":{a:["chose"]},"31":{a:["bakery"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Wei Ling was hungry. She ate two bowls of noodles. (because)",model:"Wei Ling ate two bowls of noodles because she was hungry.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"33",t:"parent",q:"Ahmad finished his homework. He watched television. (after)",model:"Ahmad watched television after he (had) finished his homework. / After Ahmad finished his homework, he watched television.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"34",t:"parent",q:"I have a friend. She can speak three languages. (who)",model:"I have a friend who can speak three languages.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The Class Plant",p:[
  "At the start of the year, Mrs Lim gave Class 3C a small pot with a sunflower seed in it. “This plant belongs to all of you,” she said. “Take turns to look after it.”",
  "Every morning, one pupil watered the plant. Hafiz was in charge on Mondays. After a week, a tiny green shoot appeared. The class cheered.",
  "One Monday, Hafiz was in a hurry because he was late for school. He forgot to water the plant. By Wednesday, its leaves were drooping and brown. Hafiz felt terrible. He knew it was his fault.",
  "He told Mrs Lim what had happened. Instead of scolding him, she smiled and said, “Thank you for being honest. Let’s see if we can save it.” Hafiz moved the pot to a sunny spot near the window and gave it some water.",
  "Three days later, the leaves were green again. By the end of the term, the sunflower was taller than Hafiz! He never forgot to water it again."]}, items:[
  {id:"35",t:"mcq",q:"What did Mrs Lim give Class 3C?",o:["A sunflower","A pot with a seed","A green shoot","A watering can"],a:1},
  {id:"36",t:"key",q:"On which day of the week did Hafiz water the plant?",keys:["monday"],model:"Monday",m:1},
  {id:"37",t:"parent",q:"Why did Hafiz forget to water the plant?",model:"He was in a hurry because he was late for school.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) The shoot appeared after one week.",a:"T"},{id:"38b",s:"(b) Mrs Lim scolded Hafiz.",a:"F"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"Hafiz moved the pot near the window.",a:"3"},{id:"39b",s:"The leaves turned brown.",a:"2"},{id:"39c",s:"Hafiz forgot to water the plant.",a:"1"}],m:1},
  {id:"40",t:"key",q:"Which word in the passage means “hanging down because it is weak”?",keys:["drooping"],model:"drooping",m:1},
  {id:"41",t:"parent",q:"Why did Mrs Lim thank Hafiz?",model:"Because Hafiz was honest and told her what had happened.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"Grandma’s Birthday Surprise",p:[
  "Grandma’s seventieth birthday was coming. Mei and her younger brother, Kai, wanted to give her a special surprise. “Let’s bake her a cake!” said Kai. Mei was not sure. They had never baked a cake before, and Mother would be at work all afternoon.",
  "In the end, they asked their neighbour, Auntie Rosa, for help. She owned a small bakery and agreed at once. On Saturday afternoon, the children went to her flat with flour, eggs, butter and sugar.",
  "Auntie Rosa showed them how to measure everything carefully. Kai cracked the eggs, but one shell fell into the bowl. Mei patiently fished it out with a spoon. When the cake was in the oven, the whole flat smelled sweet. Forty minutes later, it came out golden brown.",
  "Mei decorated the top with strawberries, and Kai wrote “Happy 70th, Grandma!” in pink icing. The letters were a little crooked, but Auntie Rosa said that made it even more special.",
  "That evening, the family gathered for dinner. When the children carried in the cake, Grandma’s eyes filled with tears. “You made this yourselves?” she asked. Kai nodded proudly. “With a little help from Auntie Rosa,” Mei added.",
  "Grandma said it was the best present she had ever received. She even asked for a second slice."]}, items:[
  {id:"42",t:"key",q:"How old was Grandma turning?",keys:["70","seventy"],model:"Seventy (70)",m:1},
  {id:"43a",t:"parent",q:"Why was Mei not sure about baking a cake? Give two reasons. (a)",model:"They had never baked a cake before.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different reasons."},
  {id:"43b",t:"parent",q:"(b) Second reason",model:"Mother would be at work all afternoon.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different reasons."},
  {id:"44",t:"parent",q:"Why was Auntie Rosa a good person to ask for help?",model:"She owned a small bakery.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"45",t:"parent",q:"What problem happened when Kai cracked the eggs?",model:"One eggshell fell into the bowl.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"46",t:"key",q:"Which word in paragraph 4 tells you that Kai’s writing was not straight?",keys:["crooked"],model:"crooked",m:1},
  {id:"47",t:"mcq",q:"Grandma’s “eyes filled with tears”. How did she feel?",o:["Sad","Angry","Touched","Frightened"],a:2},
  {id:"48",t:"parent",q:"How do you know that Grandma really liked the cake?",model:"She said it was the best present she had ever received. / She asked for a second slice.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]}
]
};
