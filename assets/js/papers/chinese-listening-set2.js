/* P3 华文听力理解 Set 2. Content only: the engine is assets/js/paper.js
   Vocabulary source: content-sources/chinese/p3-wordlist.md is still a TEMPLATE (not filled in), so this
   paper uses conservative, high-frequency P3 vocabulary only — every tested 词语 is tagged topic:"通用词语"
   and listed in the build summary so it can be checked against the school's 欢乐伙伴 2.0 word list. */
"use strict";
window.PAPER = {
  id: "p3-chi-listening-set2",
  total: 10,
  lang: "zh-SG",
  durationMin: 30,
  sections: [
    {id:"A", title:"一、听音选拼音", titleEn:"Listen and choose the correct pinyin", marks:2,
     inst:"你将听到一个词语，读两次。选出正确的拼音。", instEn:"You will hear a word, read twice. Choose its correct pinyin.", items:[
      {id:"L1", t:"listen", title:"第1题", voiceLang:"zh-CN", playLimit:2, script:"请听：桌子。桌子。",
       items:[ {id:"1", t:"mcq", q:"你听到的词语，正确的拼音是哪一个？", o:["zhuōzi","zuōzi","zhuózi","zhuōzǐ"], a:0, m:1, topic:"通用词语"} ]},
      {id:"L2", t:"listen", title:"第2题", voiceLang:"zh-CN", playLimit:2, script:"请听：新闻。新闻。",
       items:[ {id:"2", t:"mcq", q:"你听到的词语，正确的拼音是哪一个？", o:["xīnwén","xīngwén","xīnwèn","shīnwén"], a:0, m:1, topic:"通用词语"} ]}
    ]},
    {id:"B", title:"二、听音选图", titleEn:"Listen and choose the picture", marks:4,
     inst:"你将听到一句话，读两次。选出正确的图片。", instEn:"You will hear a sentence, read twice. Choose the matching picture.", items:[
      {id:"L3", t:"listen", title:"第3题", voiceLang:"zh-CN", playLimit:2,
       script:"妈妈本来想买橙子，后来选了几个又大又红的苹果。",
       items:[ {id:"3", t:"picture-mcq", q:"妈妈买了什么水果？", m:1, topic:"通用词语",
         o:["苹果","香蕉","橙子","西瓜"],
         oImg:[{src:"assets/img/listening/fruit-apple.svg",alt:"A red apple"},
               {src:"assets/img/listening/fruit-banana.svg",alt:"A banana"},
               {src:"assets/img/listening/fruit-orange.svg",alt:"An orange"},
               {src:"assets/img/listening/fruit-watermelon.svg",alt:"A slice of watermelon"}], a:0 } ]},
      {id:"L4", t:"listen", title:"第4题", voiceLang:"zh-CN", playLimit:2,
       script:"今天不是刮风天，而是晴天，很适合去公园。",
       items:[ {id:"4", t:"picture-mcq", q:"今天的天气怎么样？", m:1, topic:"通用词语",
         o:["晴天","下雨","多云","刮风"],
         oImg:[{src:"assets/img/listening/weather-sun.svg",alt:"A bright sun"},
               {src:"assets/img/listening/weather-rain.svg",alt:"A cloud with rain falling"},
               {src:"assets/img/listening/weather-cloud.svg",alt:"A plain grey cloud"},
               {src:"assets/img/listening/weather-wind.svg",alt:"A cloud with wind lines"}], a:0 } ]},
      {id:"L5", t:"listen", title:"第5题", voiceLang:"zh-CN", playLimit:2,
       script:"弟弟本来在卧室看书，后来跑到厨房找妈妈。",
       items:[ {id:"5", t:"picture-mcq", q:"弟弟现在在哪里？", m:1, topic:"通用词语",
         o:["卧室","厨房","浴室","客厅"],
         oImg:[{src:"assets/img/listening/room-bedroom.svg",alt:"A bed in a bedroom"},
               {src:"assets/img/listening/room-kitchen.svg",alt:"A pot on a stove in a kitchen"},
               {src:"assets/img/listening/room-bathroom.svg",alt:"A shower in a bathroom"},
               {src:"assets/img/listening/room-livingroom.svg",alt:"A sofa in a living room"}], a:1 } ]},
      {id:"L6", t:"listen", title:"第6题", voiceLang:"zh-CN", playLimit:2,
       script:"姐姐本来想带雨伞，后来改带了一个书包就出门了。",
       items:[ {id:"6", t:"picture-mcq", q:"姐姐带了什么出门？", m:1, topic:"通用词语",
         o:["雨伞","书包","风筝","球"],
         oImg:[{src:"assets/img/listening/carry-umbrella.svg",alt:"An open umbrella"},
               {src:"assets/img/listening/carry-bag.svg",alt:"A school bag"},
               {src:"assets/img/listening/carry-kite.svg",alt:"A diamond-shaped kite"},
               {src:"assets/img/listening/carry-ball.svg",alt:"A football"}], a:1 } ]}
    ]},
    {id:"C", title:"三、听短文", titleEn:"Listen to the passages", marks:4,
     inst:"你将听到两段短文，各读两次。选出正确的答案。", instEn:"You will hear two short passages, each read twice. Choose the correct answer.", items:[
      {id:"L7", t:"listen", title:"短文一", voiceLang:"zh-CN", playLimit:2,
       script:"星期六下午，天气晴朗，小华和哥哥一起去住家附近的公园踢足球。踢了大约一个小时后，他们觉得又热又渴，满头大汗，就到公园旁边的小贩中心买了两杯冰凉的饮料，坐下来好好解渴。",
       items:[
        {id:"7", t:"mcq", q:"小华和哥哥在公园做什么？", o:["踢足球","放风筝","骑脚踏车","钓鱼"], a:0, m:1, topic:"通用词语"},
        {id:"8", t:"mcq", q:"他们后来去哪里买饮料？", o:["超市","小贩中心","便利店","果汁店"], a:1, m:1, topic:"通用词语"}
       ]},
      {id:"L8", t:"listen", title:"短文二", voiceLang:"zh-CN", playLimit:2,
       script:"吃过晚餐后，奶奶牵着妹妹的手，一起慢慢走到组屋楼下的小公园散步。今晚的夜空很晴朗，她们一边走，一边数天上一闪一闪的星星，有说有笑，度过了一个温馨又难忘的美好夜晚。",
       items:[
        {id:"9", t:"mcq", q:"晚餐后，奶奶带妹妹去哪里？", o:["楼下的公园","图书馆","巴刹","学校"], a:0, m:1, topic:"通用词语"},
        {id:"10", t:"mcq", q:"她们在公园做什么？", o:["数星星","买东西","打球","睡觉"], a:0, m:1, topic:"通用词语"}
       ]}
    ]}
  ]
};
