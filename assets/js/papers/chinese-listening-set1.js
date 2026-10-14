/* P3 华文听力理解 Set 1. Content only: the engine is assets/js/paper.js
   Vocabulary source: content-sources/chinese/p3-wordlist.md is still a TEMPLATE (not filled in), so this
   paper uses conservative, high-frequency P3 vocabulary only — every tested 词语 is tagged topic:"通用词语"
   and listed in the build summary so it can be checked against the school's 欢乐伙伴 2.0 word list. */
"use strict";
window.PAPER = {
  id: "p3-chi-listening-set1",
  total: 10,
  lang: "zh-SG",
  durationMin: 30,
  sections: [
    {id:"A", title:"一、听音选拼音", titleEn:"Listen and choose the correct pinyin", marks:2,
     inst:"你将听到一个词语，读两次。选出正确的拼音。", instEn:"You will hear a word, read twice. Choose its correct pinyin.", items:[
      {id:"L1", t:"listen", title:"第1题", voiceLang:"zh-CN", playLimit:2, script:"请听：书包。书包。",
       items:[ {id:"1", t:"mcq", q:"你听到的词语，正确的拼音是哪一个？", o:["shūbāo","sūbāo","shūbáo","xūbāo"], a:0, m:1, topic:"通用词语"} ]},
      {id:"L2", t:"listen", title:"第2题", voiceLang:"zh-CN", playLimit:2, script:"请听：身体。身体。",
       items:[ {id:"2", t:"mcq", q:"你听到的词语，正确的拼音是哪一个？", o:["shēntǐ","shēngtǐ","shēntí","sēntǐ"], a:0, m:1, topic:"通用词语"} ]}
    ]},
    {id:"B", title:"二、听音选图", titleEn:"Listen and choose the picture", marks:4,
     inst:"你将听到一句话，读两次。选出正确的图片。", instEn:"You will hear a sentence, read twice. Choose the matching picture.", items:[
      {id:"L3", t:"listen", title:"第3题", voiceLang:"zh-CN", playLimit:2,
       script:"妹妹本来想要一只小狗，后来爸爸买了一只小兔子给她。",
       items:[ {id:"3", t:"picture-mcq", q:"妹妹得到了什么小动物？", m:1, topic:"通用词语",
         o:["猫","狗","兔子","仓鼠"],
         oImg:[{src:"assets/img/listening/pet-cat.svg",alt:"A cat's face with pointed ears"},
               {src:"assets/img/listening/pet-dog.svg",alt:"A dog's face with floppy ears"},
               {src:"assets/img/listening/pet-rabbit.svg",alt:"A rabbit's face with long ears"},
               {src:"assets/img/listening/pet-hamster.svg",alt:"A hamster's face with round cheeks"}], a:2 } ]},
      {id:"L4", t:"listen", title:"第4题", voiceLang:"zh-CN", playLimit:2,
       script:"今天的天气不是晴天，而是刮风天。",
       items:[ {id:"4", t:"picture-mcq", q:"今天的天气怎么样？", m:1, topic:"通用词语",
         o:["晴天","下雨","多云","刮风"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:3 } ]},
      {id:"L5", t:"listen", title:"第5题", voiceLang:"zh-CN", playLimit:2,
       script:"哥哥本来想买香蕉，后来改买了一个西瓜。",
       items:[ {id:"5", t:"picture-mcq", q:"哥哥买了什么水果？", m:1, topic:"通用词语",
         o:["苹果","香蕉","橙子","西瓜"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:3 } ]},
      {id:"L6", t:"listen", title:"第6题", voiceLang:"zh-CN", playLimit:2,
       script:"弟弟出门的时候，不是拿着雨伞，而是拿着风筝。",
       items:[ {id:"6", t:"picture-mcq", q:"弟弟手里拿着什么？", m:1, topic:"通用词语",
         o:["雨伞","书包","风筝","球"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:2 } ]}
    ]},
    {id:"C", title:"三、听短文", titleEn:"Listen to the passages", marks:4,
     inst:"你将听到两段短文，各读两次。选出正确的答案。", instEn:"You will hear two short passages, each read twice. Choose the correct answer.", items:[
      {id:"L7", t:"listen", title:"短文一", voiceLang:"zh-CN", playLimit:2,
       script:"星期天早上，爸爸带着小明去附近的小贩中心吃早餐。小明点了一碗热腾腾的云吞面，爸爸则点了咖啡和烤面包。他们一边吃早餐，一边聊天，窗外的阳光很温暖，度过了一个愉快的早晨。",
       items:[
        {id:"7", t:"mcq", q:"小明点了什么？", o:["云吞面","烤面包","咖啡","炒饭"], a:0, m:1, topic:"通用词语"},
        {id:"8", t:"mcq", q:"他们是在哪里吃早餐？", o:["家里","小贩中心","快餐店","学校"], a:1, m:1, topic:"通用词语"}
       ]},
      {id:"L8", t:"listen", title:"短文二", voiceLang:"zh-CN", playLimit:2,
       script:"放学后，小玲和妈妈一起去住家附近的图书馆还书。还书以后，小玲又仔细挑选，借了两本新的故事书，开心地带回家。晚上做完功课，她迫不及待地打开书，津津有味地看了起来。",
       items:[
        {id:"9", t:"mcq", q:"小玲放学后先去了哪里？", o:["图书馆","小贩中心","公园","补习中心"], a:0, m:1, topic:"通用词语"},
        {id:"10", t:"mcq", q:"小玲借了几本故事书？", o:["一本","两本","三本","四本"], a:1, m:1, topic:"通用词语"}
       ]}
    ]}
  ]
};
