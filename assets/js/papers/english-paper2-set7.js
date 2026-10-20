/* P3 English Paper 2, Practice Set 7 (general practice, hardest of Sets 4-7 — closest to a full exam mock).
   Content only: the engine is assets/js/paper.js */
"use strict";
window.PAPER = {
  id: "p3-eng-paper2-set7",
  total: 50,
  durationMin: 75,
  sections: [
 {id:"A", title:"Section A: Grammar MCQ", marks:8, inst:"Choose the correct answer.", items:[
  {id:"1",t:"mcq",q:"By the time the ambulance arrived, the paramedics ______ already treated the injured cyclist.",o:["had","have","has","having"],a:0,topic:"tenses"},
  {id:"2",t:"mcq",q:"The committee ______ meeting every Tuesday to plan the carnival.",o:["are","is","has","were"],a:1,topic:"subject-verb agreement"},
  {id:"3",t:"mcq",q:"Somebody left ______ umbrella in the hall; does it belong to you?",o:["his","her","their","its"],a:2,topic:"pronouns"},
  {id:"4",t:"mcq",q:"Of the two routes, the one through the park is ______ far.",o:["fewer","least","lesser","less"],a:3,topic:"comparatives"},
  {id:"5",t:"mcq",q:"You've never tried durian before, ______ you?",o:["have","haven't","did","didn't"],a:0,topic:"question tags"},
  {id:"6",t:"mcq",q:"The charity event aimed ______ raising funds for underprivileged families.",o:["for","at","to","on"],a:1,topic:"prepositions"},
  {id:"7",t:"mcq",q:"Despite the heavy rain, ______ progress was made on the new playground.",o:["many","few","much","a few"],a:2,topic:"quantifiers"},
  {id:"8",t:"mcq",q:"Dev refused to give up, ______ he was clearly exhausted.",o:["so","and","because","even though"],a:3,topic:"conjunctions"}
 ]},
 {id:"B", title:"Section B: Vocabulary MCQ", marks:6, inst:"Choose the correct answer.", items:[
  {id:"9",t:"mcq",q:"The witness gave a ______ account of the accident, including every small detail.",o:["detailed","vague","brief","careless"],a:0},
  {id:"10",t:"mcq",q:"The spoilt milk had a ______ smell that made everyone wrinkle their noses.",o:["fragrant","sour","sweet","fresh"],a:1},
  {id:"11",t:"mcq",q:"The marathon runner felt a surge of ______ as she crossed the finish line first.",o:["despair","confusion","triumph","boredom"],a:2},
  {id:"12",t:"mcq",q:"The teacher had to ______ the noisy class before the principal walked past.",o:["encourage","praise","dismiss","silence"],a:3},
  {id:"13",t:"mcq",q:"The old wooden bridge ______ dangerously whenever more than two people crossed it.",o:["glowed","floated","creaked","whistled"],a:2},
  {id:"14",t:"mcq",q:"The manager ______ the new intern's hard work during the meeting.",o:["criticised","ignored","doubted","commended"],a:3}
 ]},
 {id:"C", title:"Section C: Grammar Cloze", marks:8, inst:"Fill in each blank with a word from the box. Each word can be used only once.", items:[
  {t:"cloze",title:"Passage 1",box:["of","at","in","for","with","about","on"],topic:"prepositions",
   text:"Many young swimmers are afraid {15} the deep end of the pool at first. Coach Lim always tells them to arrive {16} the pool early so there is time to warm up properly. He believes {17} practising the basics again and again until they become natural. Pupils who follow his advice often qualify {18} inter-school swimming meets within a year.",
   ans:{"15":["of"],"16":["at"],"17":["in"],"18":["for"]}},
  {t:"cloze",title:"Passage 2",box:["was","has","will","are","is","were","have"],topic:"tenses",
   text:"By next year, the new community club {19} be completed, after almost two years of construction. Workers say the foundation work {20} the most challenging part of the whole project. Residents {21} hoping the club will open before the next school holidays. For now, the construction site {22} still fenced off for safety.",
   ans:{"19":["will"],"20":["was"],"21":["are"],"22":["is"]}}
 ]},
 {id:"D", title:"Section D: Comprehension Cloze", marks:5, inst:"Fill in each blank with ONE suitable word. No helping words are given.", items:[
  {t:"cloze",
   text:"Last term, Haikal's class organised a charity carnival to raise funds for a children's hospital {23} the first time. Although the weather forecast predicted rain, the pupils decided to proceed {24} the event as planned, hoping for the best. Fortunately, the sky remained clear {25} the whole afternoon, and hundreds of visitors turned up to support the stalls. Haikal was in charge of the ring-toss game, {26} he had helped design himself. By the end of the day, the class had raised {27} much money that the school decided to make the carnival an annual event.",
   ans:{"23":["for"],"24":["with"],"25":["throughout","during"],"26":["which"],"27":["so"]}}
 ]},
 {id:"E", title:"Section E: Editing", marks:4, inst:"Each underlined word has one mistake in spelling, punctuation or grammar. Write the correct word.", items:[
  {t:"edit",
   text:"On [28|saturday], the whole school gathered at the field for the charity carnival. Pupils from every class [29|setted] up their game stalls early in the morning. The emcee, Mr Rajoo, [30|annouced] the start of the carnival over the loudspeaker. By noon, the stalls were [31|busyer] than anyone had expected.",
   ans:{"28":{a:["Saturday"],cs:true},"29":{a:["set"]},"30":{a:["announced"]},"31":{a:["busier"]}}}
 ]},
 {id:"F", title:"Section F: Synthesis", marks:3, inst:"Join each pair of sentences into one sentence using the word in the brackets. Keep the meaning the same.", items:[
  {id:"32",t:"parent",q:"Haikal designed the ring-toss game. He helped set it up on the carnival day. (after)",model:"Haikal helped set up the ring-toss game after he designed it. / After Haikal designed the ring-toss game, he helped set it up on the carnival day.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"33",t:"parent",q:"The weather forecast predicted rain. The pupils still proceeded with the carnival. (even though)",model:"Even though the weather forecast predicted rain, the pupils still proceeded with the carnival. / The pupils still proceeded with the carnival even though the weather forecast predicted rain.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."},
  {id:"34",t:"parent",q:"The class organised a charity carnival. It raised a large sum of money for the children's hospital. (which)",model:"The class organised a charity carnival, which raised a large sum of money for the children's hospital.",m:1,guide:"No comma before before/after/because when the clause comes second; names need capitals."}
 ]},
 {id:"G", title:"Section G: Comprehension 1", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The Clean-Up Challenge",p:[
  "Every class in the school was assigned a different part of the neighbourhood to clean up as part of the annual 'Clean and Green' campaign. Haikal's class was assigned the stretch of park connector behind their housing estate.",
  "At first, many pupils grumbled about picking up other people's litter under the hot sun. Their form teacher, Mdm Yusof, reminded them that a cleaner neighbourhood benefited everyone, including themselves.",
  "Halfway through the clean-up, the class discovered an unusually large pile of rubbish dumped behind some bushes, far more than they could carry in their small bags. Haikal suggested they split into two groups: one to keep collecting smaller litter, and another to fetch extra bags from the community centre.",
  "By working in this way, the class finished clearing the entire stretch before the two-hour deadline, earning praise from the grassroots volunteers supervising the event.",
  "On the bus back to school, Haikal realised that the pupils who had grumbled loudest at the start were now the proudest of how much they had achieved together."]}, items:[
  {id:"35",t:"mcq",q:"Which part of the neighbourhood was Haikal's class assigned to clean?",o:["A playground","A carpark","The park connector","The market"],a:2},
  {id:"36",t:"key",q:"Which word in paragraph 2 means “complained in a low voice”?",keys:["grumbled"],model:"grumbled",m:1},
  {id:"37",t:"parent",q:"Why did Haikal suggest splitting the class into two groups?",model:"Because they found a large pile of rubbish that was far more than they could carry in their small bags.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"38",t:"tf",q:"Is each sentence true or false?",parts:[{id:"38a",s:"(a) Mdm Yusof reminded the pupils that cleaning up benefited everyone.",a:"T"},{id:"38b",s:"(b) The class failed to finish clearing their stretch before the deadline.",a:"F"}]},
  {id:"39",t:"order",q:"Number the events from 1 to 3 in the order they happened.",ev:[{id:"39a",s:"The class grumbled about picking up litter.",a:"1"},{id:"39b",s:"The class found a large pile of rubbish behind some bushes.",a:"2"},{id:"39c",s:"The class finished clearing their stretch before the deadline.",a:"3"}],m:1},
  {id:"40",t:"key",q:"What caused the class to split into two groups halfway through the clean-up?",keys:["rubbish","litter"],model:"A large pile of rubbish behind some bushes",m:1},
  {id:"41",t:"parent",q:"What did Haikal realise on the bus back to school?",model:"He realised that the pupils who had grumbled the most at the start ended up feeling the proudest of what they had achieved together.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]},
 {id:"H", title:"Section H: Comprehension 2", marks:8, inst:"Read the passage and answer the questions.", story:{title:"The Science Project Blackout",p:[
  "Shu Hui and her project partner, Timothy, had spent weeks building a working model of a simple electrical circuit for the school's Science Fair, complete with a tiny light bulb that lit up when a switch was pressed.",
  "On the morning of the fair, as they were setting up their display table, Timothy accidentally knocked over a cup of water, soaking the circuit board and short-circuiting the whole model.",
  "Shu Hui felt a wave of panic, since the judges were due to arrive within the hour and their only working model was now ruined. Timothy quickly dried what he could with tissue paper while Shu Hui ran to borrow spare wires and a battery from another class's leftover supplies.",
  "Working together under pressure, the pair rebuilt a simpler version of the circuit just in time, though it lacked some of the original decorations they had planned. When the judges arrived, Shu Hui and Timothy explained clearly how the circuit worked, and the judges seemed impressed by their calm explanation despite the mishap.",
  "Later, their teacher told them that although their model was not as polished as some others, their teamwork under pressure was exactly the kind of problem-solving the Science Fair hoped to encourage."]}, items:[
  {id:"42",t:"key",q:"Which word in paragraph 3 means “destroyed or spoiled”?",keys:["ruined"],model:"ruined",m:1},
  {id:"43a",t:"parent",q:"What did Shu Hui and Timothy each do to fix the problem? Give two things. (a)",model:"Timothy dried what he could of the circuit board with tissue paper.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things."},
  {id:"43b",t:"parent",q:"(b) Second thing",model:"Shu Hui ran to borrow spare wires and a battery from another class.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark. (a) and (b) must be two different things."},
  {id:"44",t:"parent",q:"Why did Shu Hui feel a wave of panic?",model:"Because the judges were due to arrive within the hour and their only working model had been ruined.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"45",t:"parent",q:"How do you know that the judges were not put off by the mishap?",model:"They seemed impressed by how calmly Shu Hui and Timothy explained the circuit despite what had happened.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."},
  {id:"46",t:"key",q:"What had soaked and short-circuited the model?",keys:["water"],model:"Water",m:1},
  {id:"47",t:"mcq",q:"How did the final circuit compare to the pair's original plan?",o:["Exactly the same","More advanced","Not finished at all","Simpler and less decorated"],a:3},
  {id:"48",t:"parent",q:"What lesson did the teacher suggest Shu Hui and Timothy's experience taught?",model:"That staying calm and working well together to solve a problem under pressure matters more than having a perfect, polished model.",m:1,guide:"Answer the question in your own sentence. Copying a whole passage sentence that doesn't answer the question gets no mark."}
 ]}
]
};
