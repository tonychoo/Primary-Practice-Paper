/* P3 华文 试卷二：语文应用与阅读理解 Set 1. Content only: the engine is assets/js/paper.js
   Vocabulary source: content-sources/chinese/p3-wordlist.md is still a TEMPLATE (not filled in), so this
   paper uses conservative, high-frequency P3 vocabulary only — every tested 词语 is tagged topic:"通用词语"
   and listed in the build summary so it can be checked against the school's 欢乐伙伴 2.0 word list. */
"use strict";
window.PAPER = {
  id: "p3-chi-paper2-set1",
  total: 45,
  lang: "zh-SG",
  durationMin: 60,
  sections: [
    {id:"A", title:"一、识字", titleEn:"Vocabulary (choose the correct character)", marks:5,
     inst:"选出正确的字，填在句子的空格里。", instEn:"Choose the correct character to fill in each blank.", items:[
      {id:"1", t:"mcq", q:"我们____公园里玩。", o:["再","在","到","给"], a:1, m:1, topic:"通用词语"},
      {id:"2", t:"mcq", q:"他每天都要____作业。", o:["做","作","坐","座"], a:0, m:1, topic:"通用词语"},
      {id:"3", t:"mcq", q:"妹妹____经吃过晚饭了。", o:["已","己","记","纪"], a:0, m:1, topic:"通用词语"},
      {id:"4", t:"mcq", q:"今天天气很____，我们去公园野餐。", o:["请","清","情","晴"], a:3, m:1, topic:"通用词语"},
      {id:"5", t:"mcq", q:"这件衣服____大了，不合身。", o:["大","太","天","夫"], a:1, m:1, topic:"通用词语"}
    ]},
    {id:"B", title:"二、选词", titleEn:"Choose the word", marks:4,
     inst:"选出最适合句子意思的词语。", instEn:"Choose the word that best fits the meaning of the sentence.", items:[
      {id:"6", t:"mcq", q:"弟弟对画画很有____。", o:["兴趣","高兴","快乐","开心"], a:0, m:1, topic:"通用词语"},
      {id:"7", t:"mcq", q:"他____地完成了作业。", o:["认真","真心","高兴","马虎"], a:0, m:1, topic:"通用词语"},
      {id:"8", t:"mcq", q:"老师提问时，他马上____了问题。", o:["回答","回复","回去","回来"], a:0, m:1, topic:"通用词语"},
      {id:"9", t:"mcq", q:"图书馆里很____，大家都在看书。", o:["安静","平静","冷静","干净"], a:0, m:1, topic:"通用词语"}
    ]},
    {id:"C", title:"三、看图选词", titleEn:"Look at the picture, choose the word", marks:4,
     inst:"看图，选出正确的词语。", instEn:"Look at the picture and choose the correct word.", items:[
      {id:"10", t:"mcq", q:"图中是什么动物？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/pet-cat.svg", alt:"A cat's face with pointed ears"},
        o:["猫","狗","兔子","仓鼠"], a:0},
      {id:"11", t:"mcq", q:"图中的天气怎么样？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/weather-rain.svg", alt:"A cloud with rain falling"},
        o:["晴天","下雨","多云","刮风"], a:1},
      {id:"12", t:"mcq", q:"这是什么水果？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/fruit-banana.svg", alt:"A banana"},
        o:["苹果","香蕉","橙子","西瓜"], a:1},
      {id:"13", t:"mcq", q:"图中的男孩手里拿着什么？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/carry-umbrella.svg", alt:"An open umbrella"},
        o:["雨伞","书包","风筝","球"], a:0}
    ]},
    {id:"D", title:"四、词语搭配", titleEn:"Word collocation", marks:5,
     inst:"从词语箱中选出正确的词语，填在短文的空格里。每个词语只能用一次。", instEn:"Choose the correct word from the box for each blank. Each word is used only once.", items:[
      {t:"cloze", box:["本","只","看","画","点","条","弹"],
       text:"今天是星期六。我拿着一{14}故事书，坐巴士去图书馆。路上，我看见邻居牵着一{15}可爱的小狗散步。到了图书馆，我安静地{16}了半个小时的书，还{17}了一幅美丽的画。中午，我和爸爸一起去小贩中心，{18}了一碗美味的叻沙。",
       ans:{"14":["本"],"15":["只"],"16":["看"],"17":["画"],"18":["点"]}}
    ]},
    {id:"E", title:"五、仿写句子、扩写句子", titleEn:"Imitate and expand sentences", marks:10,
     inst:"仿照例句写一句话，或根据提示扩写句子。", instEn:"Write a new sentence following the pattern given, or expand the sentence as instructed.", items:[
      {id:"19", t:"parent", m:2, topic:"通用词语",
        q:"仿照例句，用“一边……一边……”写一句话。例句：妹妹一边唱歌，一边跳舞。",
        model:"弟弟一边吃饭，一边看电视。",
        guide:"用对句式（一边……一边……）1分；句子通顺、标点正确 1分。"},
      {id:"20", t:"parent", m:2, topic:"通用词语",
        q:"仿照例句，用“因为……所以……”写一句话。例句：因为下雨，所以我们没有去公园。",
        model:"因为我生病了，所以没有去上学。",
        guide:"用对句式（因为……所以……）1分；句子通顺、标点正确 1分。"},
      {id:"21", t:"parent", m:2, topic:"通用词语",
        q:"仿照例句，用“……又……又……”写一句话。例句：这个苹果又大又甜。",
        model:"这只小狗又可爱又活泼。",
        guide:"用对句式（……又……又……）1分；句子通顺、标点正确 1分。"},
      {id:"22", t:"parent", m:2, topic:"通用词语",
        q:"根据提示，加上“什么时候”和“在哪里”，把句子写得更完整。原句：我和朋友玩游戏。",
        model:"星期六下午，我和朋友在公园里玩游戏。",
        guide:"加对内容（时间、地点）1分；句子通顺、标点正确 1分。"},
      {id:"23", t:"parent", m:2, topic:"通用词语",
        q:"根据提示，加上“怎样”，把句子写得更完整。原句：妹妹笑了。",
        model:"妹妹开心地笑了。",
        guide:"加对内容（怎样）1分；句子通顺、标点正确 1分。"}
    ]},
    {id:"F", title:"六、组句成段", titleEn:"Arrange the sentences into a paragraph", marks:5,
     inst:"读下面的句子，把它们排成通顺的一段话（1至5）。", instEn:"Read the sentences below and number them 1 to 5 to form a sensible paragraph.", items:[
      {id:"24", t:"order", partial:true, topic:"通用词语", q:"把句子排成通顺的一段话：",
       ev:[
        {id:"24a", s:"吃完以后，我们把餐盘拿去回收处。", a:"4"},
        {id:"24b", s:"我们找到了一个空位坐下来。", a:"2"},
        {id:"24c", s:"我们高高兴兴地回家了。", a:"5"},
        {id:"24d", s:"妈妈和我一起去巴刹附近的小贩中心。", a:"1"},
        {id:"24e", s:"我点了一碗美味的叻沙。", a:"3"}
       ]}
    ]},
    {id:"G", title:"七、阅读理解（一）", titleEn:"Comprehension 1", marks:6,
     inst:"读短文，选出正确的答案。", instEn:"Read the passage and choose the correct answer.",
     story:{title:"中秋节的晚上", p:[
      "星期五晚上，是中秋节。妈妈买了几个又大又甜的月饼，还买了一个漂亮的灯笼给我。",
      "吃过晚饭后，爸爸带着我和弟弟到组屋楼下的空地赏月。那里已经有很多邻居带着孩子提着灯笼，开开心心地玩耍。",
      "我们一边吃月饼，一边看天上又圆又亮的月亮。弟弟提着灯笼，跑来跑去，笑得很开心。",
      "妈妈说，中秋节是一家人团圆的日子，大家聚在一起才是最重要的。那个晚上，我觉得特别幸福。"
     ]}, items:[
      {id:"25", t:"mcq", q:"妈妈买了什么东西给“我”？", o:["月饼和灯笼","月饼和鞭炮","灯笼和鲜花","月饼和贺卡"], a:0, m:2, topic:"通用词语"},
      {id:"26", t:"mcq", q:"文中“团圆”的意思最接近以下哪一个？", o:["一家人聚在一起","去很远的地方旅行","买很多好吃的东西","邻居们一起打扫"], a:0, m:2, topic:"通用词语"},
      {id:"27", t:"mcq", q:"这段话主要讲的是什么？", o:["一家人开心地过中秋节","弟弟去买灯笼","妈妈教“我”做月饼","邻居搬到新组屋"], a:0, m:2, topic:"通用词语"}
    ]},
    {id:"H", title:"八、阅读理解（二）", titleEn:"Comprehension 2", marks:6,
     inst:"读短文，回答问题。", instEn:"Read the passage and answer the questions in full sentences.",
     story:{title:"谢谢你，小华", p:[
      "今天上体育课的时候，我们在操场上跑步，我一不小心跌倒，膝盖受伤了，流了一点血，很痛。",
      "我的同学小华马上跑过来扶我起来，还陪我去找校医护理伤口。",
      "校医帮我清洗伤口，贴上了药布，叮嘱我要小心走路。小华一直陪在我身边，直到我回到教室。",
      "我很感激小华的帮助，也谢谢校医的细心照顾。我明白了，朋友之间应该互相关心，互相照顾，才能成为真正的好朋友。"
     ]}, items:[
      {id:"28", t:"parent", m:2, topic:"通用词语", q:"为什么“我”要去找校医？",
        model:"因为“我”在体育课跌倒，膝盖受伤了，很痛，所以要去找校医。",
        guide:"1分：提到跌倒、膝盖受伤；1分：句子完整、因果清楚。"},
      {id:"29", t:"parent", m:2, topic:"通用词语", q:"“我”对小华有什么感觉？为什么？",
        model:"“我”很感激小华，因为小华马上过来扶“我”，还一直陪着“我”去看校医。",
        guide:"1分：说出感激/感谢的感觉；1分：说出原因（小华的帮助）。"},
      {id:"30", t:"parent", m:2, topic:"通用词语", q:"从这件事，“我”明白了什么道理？",
        model:"“我”明白了朋友之间应该互相关心，互相照顾。",
        guide:"1分：说出关心/照顾朋友的道理；1分：句子通顺完整。"}
    ]}
  ]
};
