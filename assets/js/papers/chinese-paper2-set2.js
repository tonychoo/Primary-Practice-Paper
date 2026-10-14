/* P3 华文 试卷二：语文应用与阅读理解 Set 2. Content only: the engine is assets/js/paper.js
   Vocabulary source: content-sources/chinese/p3-wordlist.md is still a TEMPLATE (not filled in), so this
   paper uses conservative, high-frequency P3 vocabulary only — every tested 词语 is tagged topic:"通用词语"
   and listed in the build summary so it can be checked against the school's 欢乐伙伴 2.0 word list. */
"use strict";
window.PAPER = {
  id: "p3-chi-paper2-set2",
  total: 45,
  lang: "zh-SG",
  durationMin: 60,
  sections: [
    {id:"A", title:"一、识字", titleEn:"Vocabulary (choose the correct character)", marks:5,
     inst:"选出正确的字，填在句子的空格里。", instEn:"Choose the correct character to fill in each blank.", items:[
      {id:"1", t:"mcq", q:"你说错了，请____讲一次。", o:["在","再","到","给"], a:1, m:1, topic:"通用词语"},
      {id:"2", t:"mcq", q:"他正在写____文，题目是《我的家庭》。", o:["做","作","坐","座"], a:1, m:1, topic:"通用词语"},
      {id:"3", t:"mcq", q:"你要相信自____，才能做得更好。", o:["已","己","记","纪"], a:1, m:1, topic:"通用词语"},
      {id:"4", t:"mcq", q:"进来之前，____先敲门。", o:["请","清","情","晴"], a:0, m:1, topic:"通用词语"},
      {id:"5", t:"mcq", q:"这头大象长得很____，是森林里最大的动物。", o:["大","太","天","夫"], a:0, m:1, topic:"通用词语"}
    ]},
    {id:"B", title:"二、选词", titleEn:"Choose the word", marks:4,
     inst:"选出最适合句子意思的词语。", instEn:"Choose the word that best fits the meaning of the sentence.", items:[
      {id:"6", t:"mcq", q:"妹妹听到门铃声，____跑去开门。", o:["马上","突然","慢慢","渐渐"], a:0, m:1, topic:"通用词语"},
      {id:"7", t:"mcq", q:"过马路的时候，要____，看看左右有没有车。", o:["小心","担心","关心","开心"], a:0, m:1, topic:"通用词语"},
      {id:"8", t:"mcq", q:"星期天，我们一起去____生病的奶奶。", o:["看望","看见","看到","看看"], a:0, m:1, topic:"通用词语"},
      {id:"9", t:"mcq", q:"天气预报说会下雨，____，下午就开始下大雨了。", o:["果然","突然","忽然","居然"], a:0, m:1, topic:"通用词语"}
    ]},
    {id:"C", title:"三、看图选词", titleEn:"Look at the picture, choose the word", marks:4,
     inst:"看图，选出正确的词语。", instEn:"Look at the picture and choose the correct word.", items:[
      {id:"10", t:"mcq", q:"图中是什么动物？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/pet-dog.svg", alt:"A dog's face with floppy ears"},
        o:["猫","狗","兔子","仓鼠"], a:1},
      {id:"11", t:"mcq", q:"图中的天气怎么样？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/weather-sun.svg", alt:"A bright sun"},
        o:["晴天","下雨","多云","刮风"], a:0},
      {id:"12", t:"mcq", q:"这是什么水果？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/fruit-watermelon.svg", alt:"A slice of watermelon"},
        o:["苹果","香蕉","橙子","西瓜"], a:3},
      {id:"13", t:"mcq", q:"图中是家里的哪个地方？", m:1, topic:"通用词语",
        img:{src:"assets/img/listening/room-kitchen.svg", alt:"A pot on a stove in a kitchen"},
        o:["卧室","厨房","浴室","客厅"], a:1}
    ]},
    {id:"D", title:"四、词语搭配", titleEn:"Word collocation", marks:5,
     inst:"从词语箱中选出正确的词语，填在短文的空格里。每个词语只能用一次。", instEn:"Choose the correct word from the box for each blank. Each word is used only once.", items:[
      {t:"cloze", box:["辆","条","踢","弹","买","只","看"],
       text:"星期六，爸爸开车带我们去动物园。路上，我们看见一{14}巴士停在车站。到了动物园，我们看到一{15}长长的鳄鱼在水里游泳。下午，哥哥和朋友们在草场上{16}足球，玩得很开心。晚上回到家，姐姐在客厅里{17}钢琴，弹得真好听。妈妈则去巴刹{18}了一些新鲜的蔬菜。",
       ans:{"14":["辆"],"15":["条"],"16":["踢"],"17":["弹"],"18":["买"]}}
    ]},
    {id:"E", title:"五、仿写句子、扩写句子", titleEn:"Imitate and expand sentences", marks:10,
     inst:"仿照例句写一句话，或根据提示扩写句子。", instEn:"Write a new sentence following the pattern given, or expand the sentence as instructed.", items:[
      {id:"19", t:"parent", m:2, topic:"通用词语",
        q:"仿照例句，用“先……再……”写一句话。例句：我先吃早餐，再去上学。",
        model:"我先做完功课，再看电视。",
        guide:"用对句式（先……再……）1分；句子通顺、标点正确 1分。"},
      {id:"20", t:"parent", m:2, topic:"通用词语",
        q:"仿照例句，用“……得……”写一句话。例句：妹妹跑得很快。",
        model:"哥哥唱得很好听。",
        guide:"用对句式（……得……）1分；句子通顺、标点正确 1分。"},
      {id:"21", t:"parent", m:2, topic:"通用词语",
        q:"仿照例句，用“虽然……但是……”写一句话。例句：虽然下雨，但是我们还是去了公园。",
        model:"虽然很累，但是我还是把功课做完了。",
        guide:"用对句式（虽然……但是……）1分；句子通顺、标点正确 1分。"},
      {id:"22", t:"parent", m:2, topic:"通用词语",
        q:"根据提示，加上“什么时候”和“在哪里”，把句子写得更完整。原句：我们看书。",
        model:"星期天早上，我们在图书馆看书。",
        guide:"加对内容（时间、地点）1分；句子通顺、标点正确 1分。"},
      {id:"23", t:"parent", m:2, topic:"通用词语",
        q:"根据提示，加上“怎样”，把句子写得更完整。原句：小狗跑了过来。",
        model:"小狗开心地跑了过来。",
        guide:"加对内容（怎样）1分；句子通顺、标点正确 1分。"}
    ]},
    {id:"F", title:"六、组句成段", titleEn:"Arrange the sentences into a paragraph", marks:5,
     inst:"读下面的句子，把它们排成通顺的一段话（1至5）。", instEn:"Read the sentences below and number them 1 to 5 to form a sensible paragraph.", items:[
      {id:"24", t:"order", partial:true, topic:"通用词语", q:"把句子排成通顺的一段话：",
       ev:[
        {id:"24a", s:"我拿着图书证，到柜台把书借了出来。", a:"3"},
        {id:"24b", s:"星期六早上，我和妈妈一起去图书馆。", a:"1"},
        {id:"24c", s:"晚上，我已经把整本书看完了，觉得很满足。", a:"5"},
        {id:"24d", s:"我们先找到了喜欢的故事书。", a:"2"},
        {id:"24e", s:"回家的路上，我迫不及待地打开书看了起来。", a:"4"}
       ]}
    ]},
    {id:"G", title:"七、阅读理解（一）", titleEn:"Comprehension 1", marks:6,
     inst:"读短文，选出正确的答案。", instEn:"Read the passage and choose the correct answer.",
     story:{title:"大年初一", p:[
      "今天是大年初一，我们一家人穿上新衣服，去爷爷奶奶家拜年。",
      "一进门，我就对爷爷奶奶说：“爷爷奶奶，新年快乐！”他们笑眯眯地给了我一个红包。",
      "中午，大家围在一起吃团圆饭，桌上有鱼、鸡肉、虾，还有很多好吃的年菜，大人们一边吃饭一边聊天。",
      "吃饱以后，堂哥堂姐和我一起在客厅里玩游戏、猜灯谜，放鞭炮的声音从楼下传来，非常热闹，让我觉得很开心。"
     ]}, items:[
      {id:"25", t:"mcq", q:"“我”一进门对爷爷奶奶说了什么？", o:["新年快乐","谢谢你们","早安","再见"], a:0, m:2, topic:"通用词语"},
      {id:"26", t:"mcq", q:"文中“热闹”的意思最接近以下哪一个？", o:["人多、气氛活跃","安静、没有声音","又累又困","又冷又饿"], a:0, m:2, topic:"通用词语"},
      {id:"27", t:"mcq", q:"这段话主要讲的是什么？", o:["一家人热闹地过农历新年","爷爷奶奶生病了","“我”和堂哥吵架","妈妈教“我”做年菜"], a:0, m:2, topic:"通用词语"}
    ]},
    {id:"H", title:"八、阅读理解（二）", titleEn:"Comprehension 2", marks:6,
     inst:"读短文，回答问题。", instEn:"Read the passage and answer the questions in full sentences.",
     story:{title:"朗读比赛", p:[
      "下个星期，学校将举行华文朗读比赛，老师选了我代表班级参加。",
      "一开始，我很紧张，因为我从来没有在那么多人面前朗读过。",
      "于是，我每天放学后都留在课室里练习，反复朗读课文，老师也耐心地指导我的发音和语气，帮我纠正错误。",
      "比赛那天，我深呼吸，大声地朗读，台下响起了热烈的掌声。虽然我没有得到第一名，但是我已经尽力了，心里感到很骄傲，也更有自信了。"
     ]}, items:[
      {id:"28", t:"parent", m:2, topic:"通用词语", q:"“我”为什么一开始觉得紧张？",
        model:"因为“我”从来没有在那么多人面前朗读过，所以一开始觉得很紧张。",
        guide:"1分：提到从未在那么多人面前朗读；1分：句子完整、因果清楚。"},
      {id:"29", t:"parent", m:2, topic:"通用词语", q:"比赛结束后，“我”有什么感觉？为什么？",
        model:"“我”感到很骄傲，因为虽然没有得到第一名，但是“我”已经尽力了。",
        guide:"1分：说出骄傲的感觉；1分：说出原因（已经尽力）。"},
      {id:"30", t:"parent", m:2, topic:"通用词语", q:"从这次经历，“我”明白了什么道理？",
        model:"“我”明白了只要尽力去做，就算没有得第一名，也是值得骄傲的。",
        guide:"1分：说出努力比名次更重要的道理；1分：句子通顺完整。"}
    ]}
  ]
};
