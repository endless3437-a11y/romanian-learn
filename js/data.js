// ============================================================
// 罗马尼亚语完整学习数据
// 覆盖零基础 → B1/B2 水平
// ============================================================

// ---- 字母表 (31个字母，含发音) ----
var ALPHABET = [
  { letter:"A a", sound:"/a/", like:"father 中的 a", example:"apă (水)", audio:"apa" },
  { letter:"Ă ă", sound:"/ə/", like:"about 中的 a", example:"măr (苹果)", audio:"mar" },
  { letter:"Â â", sound:"/ɨ/", like:"girl 中的 i（闭央元音）", example:"mână (手)", audio:"mana" },
  { letter:"B b", sound:"/b/", like:"boy 中的 b", example:"bun (好的)", audio:"bun" },
  { letter:"C c", sound:"/k/ /tʃ/", like:"cat 中的 k；在 e/i 前读 ch", example:"carte (书); ceai (茶)", audio:"carte" },
  { letter:"D d", sound:"/d/", like:"dog 中的 d", example:"drum (路)", audio:"drum" },
  { letter:"E e", sound:"/e/", like:"bed 中的 e", example:"elev (学生)", audio:"elev" },
  { letter:"F f", sound:"/f/", like:"fish 中的 f", example:"frate (兄弟)", audio:"frate" },
  { letter:"G g", sound:"/ɡ/ /dʒ/", like:"go 中的 g；在 e/i 前读 j", example:"gură (嘴); gem (果酱)", audio:"gura" },
  { letter:"H h", sound:"/h/", like:"house 中的 h", example:"hotel (酒店)", audio:"hotel" },
  { letter:"I i", sound:"/i/", like:"see 中的 ee", example:"inimă (心)", audio:"inima" },
  { letter:"Î î", sound:"/ɨ/", like:"girl 中的 i（同 Â）", example:"înger (天使)", audio:"inger" },
  { letter:"J j", sound:"/ʒ/", like:"measure 中的 s", example:"joc (游戏)", audio:"joc" },
  { letter:"K k", sound:"/k/", like:"kite 中的 k", example:"kilogram (公斤)", audio:"kilogram" },
  { letter:"L l", sound:"/l/", like:"love 中的 l", example:"lapte (牛奶)", audio:"lapte" },
  { letter:"M m", sound:"/m/", like:"moon 中的 m", example:"mamă (妈妈)", audio:"mama" },
  { letter:"N n", sound:"/n/", like:"nose 中的 n", example:"noapte (夜晚)", audio:"noapte" },
  { letter:"O o", sound:"/o/", like:"or 中的 o", example:"ochi (眼睛)", audio:"ochi" },
  { letter:"P p", sound:"/p/", like:"pen 中的 p", example:"pâine (面包)", audio:"paine" },
  { letter:"Q q", sound:"/k/", like:"queen 中的 q", example:"Quito (基多)", audio:"quito" },
  { letter:"R r", sound:"/r/", like:"rolled r（颤音）", example:"râu (河流)", audio:"rau" },
  { letter:"S s", sound:"/s/", like:"sun 中的 s", example:"soare (太阳)", audio:"soare" },
  { letter:"Ș ș", sound:"/ʃ/", like:"she 中的 sh", example:"școală (学校)", audio:"scoala" },
  { letter:"T t", sound:"/t/", like:"top 中的 t", example:"timp (时间)", audio:"timp" },
  { letter:"Ț ț", sound:"/ts/", like:"cats 中的 ts", example:"țară (国家)", audio:"tara" },
  { letter:"U u", sound:"/u/", like:"food 中的 oo", example:"urs (熊)", audio:"urs" },
  { letter:"V v", sound:"/v/", like:"voice 中的 v", example:"viață (生活)", audio:"viata" },
  { letter:"W w", sound:"/w/ /v/", like:"water 或 vase", example:"watt (瓦特)", audio:"watt" },
  { letter:"X x", sound:"/ks/", like:"box 中的 x", example:"taxi (出租车)", audio:"taxi" },
  { letter:"Y y", sound:"/j/", like:"yes 中的 y", example:"yoga (瑜伽)", audio:"yoga" },
  { letter:"Z z", sound:"/z/", like:"zebra 中的 z", example:"zi (天/日)", audio:"zi" },
];

// ---- 字母组合发音 ----
var LETTER_COMBOS = [
  { combo:"ce", sound:"/tʃe/", like:"check 中的 che", example:"ceai (茶)", note:"c + e 永远读 che" },
  { combo:"ci", sound:"/tʃi/", like:"cheese 中的 chee", example:"cinci (五)", note:"c + i 永远读 chi" },
  { combo:"che", sound:"/ke/", like:"kettle 中的 ke", example:"cheie (钥匙)", note:"ch + e 读 ke（h 让 c 回硬音）" },
  { combo:"chi", sound:"/ki/", like:"key 中的 kee", example:"chitară (吉他)", note:"ch + i 读 ki" },
  { combo:"ge", sound:"/dʒe/", like:"gem 中的 ge", example:"ger (霜冻)", note:"g + e 永远读 je" },
  { combo:"gi", sound:"/dʒi/", like:"gym 中的 gy", example:"gimnaziu (中学)", note:"g + i 永远读 ji" },
  { combo:"ghe", sound:"/ɡe/", like:"get 中的 ge", example:"gheață (冰)", note:"gh + e 读硬 ge" },
  { combo:"ghi", sound:"/ɡi/", like:"gift 中的 gi", example:"ghid (向导)", note:"gh + i 读硬 gi" },
  { combo:"ea", sound:"/e̯a/", like:"ya 但 e 很短", example:"seară (晚上)", note:"双元音，e 滑向 a" },
  { combo:"oa", sound:"/o̯a/", like:"wa 但 o 很短", example:"soare (太阳)", note:"双元音，o 滑向 a" },
  { combo:"ia", sound:"/ja/", like:"yard 中的 ya", example:"iarnă (冬天)", note:"" },
  { combo:"ie", sound:"/je/", like:"yes 中的 ye", example:"iepure (兔子)", note:"" },
  { combo:"io", sound:"/jo/", like:"yoga 中的 yo", example:"iod (碘)", note:"" },
  { combo:"iu", sound:"/ju/", like:"you", example:"iute (快的)", note:"" },
];

// ---- 课程体系 ----
var CURRICULUM = {
  phases: [
    {
      id: "phase1",
      title: "第一阶段：发音入门",
      subtitle: "掌握罗马尼亚语31个字母和核心发音规则，建立自然拼读能力",
      icon: "🔤",
      lessons: [
        {
          id: "l1", title: "元音字母 A, Ă, Â, E, I, Î, O, U", type:"alphabet",
          content: [
            { type:"text", text:"罗马尼亚语有 8 个元音字母：A, Ă, Â, E, I, Î, O, U。其中 Ă 和 Â/Î 是中文和英语里没有的音，需要特别注意。" },
            { type:"text", text:"A 是开口元音，口型大；E 是半开元音；I 是闭口元音；O 和 U 跟中文拼音的 o 和 u 接近。" },
            { type:"text", text:"Ă 是中央元音，像英语 about 里的 'a'，嘴巴自然张开、舌头放松放在口腔中央。这是罗马尼亚语最常见的元音之一。" },
            { type:"text", text:"Â 和 Î 发音完全相同，是闭央不圆唇元音 /ɨ/。用发 '一' 的口型去发 '乌' 的感觉。只出现在词中间（Â）或词首/词尾（Î）。" },
            { type:"practice", instruction:"跟读以下单词，注意元音的区别：", items:[
              { ro:"masă", zh:"桌子", hint:"ma-să, ă 像 about 的 a" },
              { ro:"mână", zh:"手", hint:"mâ-nă, â 像发'一'时发'乌'" },
              { ro:"inimă", zh:"心脏", hint:"i-ni-mă" },
              { ro:"elev", zh:"学生", hint:"e-lev" },
              { ro:"om", zh:"人", hint:"和人名'欧姆'差不多" },
              { ro:"urs", zh:"熊", hint:"u 像 food 里的 oo" },
            ]}
          ]
        },
        {
          id: "l2", title: "辅音字母（上）：B, C, D, F, G, H, J, K, L", type:"alphabet",
          content: [
            { type:"text", text:"大部分辅音跟英语拼音接近，但有几个需要特别注意的：C 和 G 在 e/i 前面会变音，J 的发音很特殊。" },
            { type:"text", text:"C 在 a/o/u/辅音前读 /k/（如 carte），在 e/i 前读 /tʃ/ 即 'ch' 音（如 ceai）。这是罗马尼亚语最重要的发音规则之一。" },
            { type:"text", text:"G 在 a/o/u/辅音前读 /ɡ/（如 gură），在 e/i 前读 /dʒ/ 即 'j' 音（如 gem）。" },
            { type:"text", text:"J 读 /ʒ/，像英语 measure 里的 s，中文'日'的声母。" },
            { type:"text", text:"R 是颤音，舌尖抵住上牙龈快速震动。初学者可以先发 d 或 l 代替来过渡。" },
            { type:"practice", instruction:"跟读以下单词：", items:[
              { ro:"bun", zh:"好的" },
              { ro:"carte", zh:"书", hint:"car-te, c 读 k" },
              { ro:"ceai", zh:"茶", hint:"ce-ai, ce 读 che" },
              { ro:"drum", zh:"路" },
              { ro:"frate", zh:"兄弟" },
              { ro:"gură", zh:"嘴", hint:"g 读硬 g" },
              { ro:"gem", zh:"果酱", hint:"g 读 j" },
              { ro:"hotel", zh:"酒店" },
              { ro:"joc", zh:"游戏", hint:"j 读 /ʒ/" },
              { ro:"lapte", zh:"牛奶" },
            ]}
          ]
        },
        {
          id: "l3", title: "辅音字母（下）：M, N, P, R, S, Ș, T, Ț, V, Z", type:"alphabet",
          content: [
            { type:"text", text:"罗马尼亚语独有的辅音字母：Ș（带逗号的 S）读 /ʃ/ 即 'sh'，Ț（带逗号的 T）读 /ts/ 即 'c'。" },
            { type:"text", text:"Ș 和 J 是一对清浊辅音：Ș 声带不振动（sh），J 声带振动（/ʒ/）。" },
            { type:"text", text:"Ț 和 D 虽然写法不同但没关系，Ț 就是 ts 的音。" },
            { type:"text", text:"Z 读 /z/，像英语 zebra 的 z。S 永远读 /s/，不存在英语里 s 读 z 的情况。" },
            { type:"text", text:"N 在词尾时前面的元音要鼻化一点，比如 'bun' 末尾的 n 会让 u 有点鼻音。" },
            { type:"practice", instruction:"跟读以下单词：", items:[
              { ro:"mamă", zh:"妈妈" },
              { ro:"noapte", zh:"夜晚" },
              { ro:"pâine", zh:"面包", hint:"pâi-ne" },
              { ro:"râu", zh:"河流", hint:"r 颤音" },
              { ro:"soare", zh:"太阳" },
              { ro:"școală", zh:"学校", hint:"ș 读 sh → shcoa-lă" },
              { ro:"timp", zh:"时间" },
              { ro:"țară", zh:"国家", hint:"ț 读 ts → tsa-ră" },
              { ro:"viață", zh:"生活", hint:"vi-a-ță" },
              { ro:"zi", zh:"天/日" },
            ]}
          ]
        },
        {
          id: "l4", title: "核心字母组合：CE/CI/CHE/CHI & GE/GI/GHE/GHI", type:"alphabet",
          content: [
            { type:"text", text:"这是罗马尼亚语最重要的拼读规则，掌握了就能正确读出 90% 的单词。" },
            { type:"text", text:"规则很简单：ce/ci → 读 che/chi；ge/gi → 读 je/ji。如果想让 c/g 在 e/i 前保持硬音，就加 h：che/chi → ke/ki；ghe/ghi → ge/gi（硬 g）。" },
            { type:"text", text:"简单记忆口诀：'C见E和I，变CH笑嘻嘻；G见E和I，声音像Jay。要想硬回来，后面加个H。'" },
            { type:"practice", instruction:"对比练习——注意每组中 c/g 的发音变化：", items:[
              { ro:"ca → ce", zh:"ca(ka) vs ce(che)", hint:"加了 e 后 c 变音" },
              { ro:"ga → ge", zh:"ga vs ge(je)", hint:"加了 e 后 g 变音" },
              { ro:"che ← ce", zh:"che(ke) vs ce(che)", hint:"加了 h 后 c 变回硬音" },
              { ro:"ghe ← ge", zh:"ghe(ge) vs ge(je)", hint:"加了 h 后 g 变回硬音" },
              { ro:"cinci", zh:"五", hint:"cin-ci, 两个 c 都在 i 前→都读 chi" },
              { ro:"cheie", zh:"钥匙", hint:"che-ie, ch+e 读 ke" },
              { ro:"gheață", zh:"冰", hint:"ghea-ță, gh+e 读硬 ge" },
              { ro:"unghi", zh:"角度", hint:"un-ghi, gh+i 读硬 gi" },
            ]}
          ]
        },
        {
          id: "l5", title: "双元音与重音规则", type:"alphabet",
          content: [
            { type:"text", text:"罗马尼亚语的双元音（diftong）是两个元音连在一起快速滑动：ea, oa, ia, ie, io, iu, ai, au, ău, ei, oi, ui。" },
            { type:"text", text:"重音（accent）通常落在单词倒数第二个音节。但有很多例外，会随着变位变化。初学阶段遇到一个记一个就行。" },
            { type:"text", text:"最常用的 ea 读 /e̯a/，像英语 'ya' 但 e 非常短；oa 读 /o̯a/，像 'wa' 但 o 非常短。" },
            { type:"practice", instruction:"跟读以下单词，感受双元音的滑动：", items:[
              { ro:"seară", zh:"晚上", hint:"sea-ră, ea 双元音" },
              { ro:"soare", zh:"太阳", hint:"soa-re, oa 双元音" },
              { ro:"iarnă", zh:"冬天", hint:"iar-nă, ia 双元音" },
              { ro:"iepure", zh:"兔子", hint:"ie-pu-re" },
              { ro:"iute", zh:"快的", hint:"iu-te" },
              { ro:"mai", zh:"五月/更", hint:"ma-i, ai 双元音" },
              { ro:"aur", zh:"金子", hint:"a-ur, au 双元音" },
              { ro:"pleu", zh:"我走了（口语）", hint:"pleu, eu 双元音" },
            ]}
          ]
        },
      ]
    },
    {
      id: "phase2",
      title: "第二阶段：词根词缀 & 核心词汇",
      subtitle: "用自然拼读法学习高频词根和常见词缀，建立词汇网络",
      icon: "📚",
      lessons: [
        {
          id: "l6", title: "名词词根：人体与家庭", type:"vocab",
          content: [
            { type:"text", text:"罗马尼亚语名词有性别（阳/阴/中），但初学者不需要死记语法，先通过词根模式来感知。大多数以 -ă/-e/-a 结尾是阴性，以辅音结尾是阳性。中性词单数像阳性、复数像阴性。" },
            { type:"vocab_list", category:"人体部位", words:[
              { ro:"cap", zh:"头", root:"cap-" },
              { ro:"ochi", zh:"眼睛", root:"ochi-" },
              { ro:"nas", zh:"鼻子", root:"nas-" },
              { ro:"gură", zh:"嘴", root:"gur-" },
              { ro:"ureche", zh:"耳朵", root:"urech-" },
              { ro:"mână", zh:"手", root:"mân-" },
              { ro:"picior", zh:"腿/脚", root:"picior-" },
              { ro:"inimă", zh:"心脏", root:"inim-" },
              { ro:"față", zh:"脸", root:"faț-" },
              { ro:"spate", zh:"背", root:"spat-" },
            ]},
            { type:"vocab_list", category:"家庭成员", words:[
              { ro:"mamă", zh:"妈妈" },
              { ro:"tată", zh:"爸爸" },
              { ro:"frate", zh:"兄弟" },
              { ro:"soră", zh:"姐妹" },
              { ro:"bunic", zh:"爷爷/姥爷" },
              { ro:"bunică", zh:"奶奶/姥姥" },
              { ro:"fiu", zh:"儿子" },
              { ro:"fiică", zh:"女儿" },
              { ro:"soț", zh:"丈夫" },
              { ro:"soție", zh:"妻子" },
            ]}
          ]
        },
        {
          id: "l7", title: "高频动词（一）：ESSERE 和 AVERE 类", type:"vocab",
          content: [
            { type:"text", text:"罗马尼亚语中 'a fi'（是）和 'a avea'（有）是最核心的两个动词，几乎所有时态都依赖它们。现在先学这两个动词的现在时变位。" },
            { type:"text", text:"a fi（是）现在时：eu sunt (我是), tu ești (你是), el/ea este (他/她是), noi suntem (我们是), voi sunteți (你们是), ei/ele sunt (他们是)" },
            { type:"text", text:"a avea（有）现在时：eu am (我有), tu ai (你有), el/ea are (他/她有), noi avem (我们有), voi aveți (你们有), ei/ele au (他们有)" },
            { type:"text", text:"变位看起来复杂但很有规律。初期先记住 eu/tu/el 三个人称单数就够了。" },
            { type:"practice", instruction:"翻译练习——尝试读出以下句子：", items:[
              { ro:"Eu sunt student.", zh:"我是学生。" },
              { ro:"Tu ești doctor.", zh:"你是医生。" },
              { ro:"Ea este profesoară.", zh:"她是老师（女性）。" },
              { ro:"Noi suntem prieteni.", zh:"我们是朋友。" },
              { ro:"Eu am o carte.", zh:"我有一本书。" },
              { ro:"Tu ai un câine.", zh:"你有一只狗。" },
              { ro:"El are o mașină.", zh:"他有一辆车。" },
            ]}
          ]
        },
        {
          id: "l8", title: "高频动词（二）：常用动作词", type:"vocab",
          content: [
            { type:"text", text:"掌握以下 15 个高频动词，就能表达大多数日常动作。罗马尼亚语动词按结尾分四组：-a, -ea, -e, -i。现在不展开讲变位规则，先记住第一人称和不定式。" },
            { type:"vocab_list", category:"核心动作动词", words:[
              { ro:"a face", zh:"做", conj:"eu fac" },
              { ro:"a spune", zh:"说", conj:"eu spun" },
              { ro:"a merge", zh:"走/去", conj:"eu merg" },
              { ro:"a veni", zh:"来", conj:"eu vin" },
              { ro:"a vedea", zh:"看见", conj:"eu văd" },
              { ro:"a ști", zh:"知道", conj:"eu știu" },
              { ro:"a vrea", zh:"想要", conj:"eu vreau" },
              { ro:"a putea", zh:"能/可以", conj:"eu pot" },
              { ro:"a lua", zh:"拿/取", conj:"eu iau" },
              { ro:"a da", zh:"给", conj:"eu dau" },
              { ro:"a mânca", zh:"吃", conj:"eu mănânc" },
              { ro:"a bea", zh:"喝", conj:"eu beau" },
              { ro:"a dormi", zh:"睡觉", conj:"eu dorm" },
              { ro:"a citi", zh:"阅读", conj:"eu citesc" },
              { ro:"a scrie", zh:"写", conj:"eu scriu" },
            ]}
          ]
        },
        {
          id: "l9", title: "常见前缀与词缀模式", type:"vocab",
          content: [
            { type:"text", text:"罗马尼亚语跟其他罗曼语（法语、西班牙语）一样，大量单词可以拆成 前缀+词根+后缀。学会识别这些部件，背单词效率翻倍。" },
            { type:"text", text:"常见前缀：re-/ră-（重新、再次）；des-/dez-（去除、相反）；în-/im-（进入、使...）；pre-（在...之前）；sub-（在...之下）。" },
            { type:"text", text:"常见后缀：-re（把动词变成名词，类似英语 -ing）；-tor（做...的人/物，类似英语 -er）；-ție/-țiune（...的行为/状态，类似英语 -tion）；-bil（可...的）。" },
            { type:"text", text:"常见名词结尾规律：-tate（...性、...质）、-ism（...主义）、-ist（...者）、-ie（...的状态/性质）。" },
            { type:"practice", instruction:"拆解以下单词，找到词根+词缀：", items:[
              { ro:"refacere", zh:"重建", hint:"re（重新）+ face（做）+ re（名词化）= 重新做→重建" },
              { ro:"deschidere", zh:"开放/开启", hint:"des（去除）+ chid（关）+ re = 去掉关→开" },
              { ro:"vorbitor", zh:"说话者", hint:"vorbi（说）+ tor（...者）= 说话者" },
              { ro:"posibil", zh:"可能的", hint:"pos（能）+ ibil（可...的）= 可能的" },
              { ro:"libertate", zh:"自由", hint:"liber（自由的）+ tate（...性）= 自由" },
            ]}
          ]
        },
        {
          id: "l10", title: "主题词汇：数字、时间、颜色", type:"vocab",
          content: [
            { type:"text", text:"这些都是日常会话必不可少的高频词。" },
            { type:"vocab_list", category:"数字 1-20", words:[
              { ro:"unu", zh:"1" },{ ro:"doi", zh:"2" },{ ro:"trei", zh:"3" },
              { ro:"patru", zh:"4" },{ ro:"cinci", zh:"5" },{ ro:"șase", zh:"6" },
              { ro:"șapte", zh:"7" },{ ro:"opt", zh:"8" },{ ro:"nouă", zh:"9" },
              { ro:"zece", zh:"10" },{ ro:"unsprezece", zh:"11" },{ ro:"doisprezece", zh:"12" },
              { ro:"treisprezece", zh:"13" },{ ro:"paisprezece", zh:"14" },{ ro:"cincisprezece", zh:"15" },
              { ro:"douăzeci", zh:"20" },
            ]},
            { type:"vocab_list", category:"时间表达", words:[
              { ro:"azi", zh:"今天" },{ ro:"mâine", zh:"明天" },{ ro:"ieri", zh:"昨天" },
              { ro:"acum", zh:"现在" },{ ro:"mai târziu", zh:"稍后" },{ ro:"dimineață", zh:"早上" },
              { ro:"prânz", zh:"中午" },{ ro:"seară", zh:"晚上" },{ ro:"noapte", zh:"夜晚" },
              { ro:"săptămână", zh:"星期" },{ ro:"lună", zh:"月" },{ ro:"an", zh:"年" },
            ]},
            { type:"vocab_list", category:"颜色", words:[
              { ro:"alb", zh:"白色" },{ ro:"negru", zh:"黑色" },{ ro:"roșu", zh:"红色" },
              { ro:"albastru", zh:"蓝色" },{ ro:"verde", zh:"绿色" },{ ro:"galben", zh:"黄色" },
              { ro:"portocaliu", zh:"橙色" },{ ro:"mov", zh:"紫色" },{ ro:"gri", zh:"灰色" },
              { ro:"maro", zh:"棕色" },
            ]}
          ]
        },
        {
          id: "l11", title: "主题词汇：食物、衣物、地点", type:"vocab",
          content: [
            { type:"vocab_list", category:"食物饮料", words:[
              { ro:"pâine", zh:"面包" },{ ro:"brânză", zh:"奶酪" },{ ro:"carne", zh:"肉" },
              { ro:"ou", zh:"鸡蛋" },{ ro:"supă", zh:"汤" },{ ro:"salată", zh:"沙拉" },
              { ro:"fructe", zh:"水果" },{ ro:"legume", zh:"蔬菜" },{ ro:"prăjitură", zh:"蛋糕" },
              { ro:"apă", zh:"水" },{ ro:"cafea", zh:"咖啡" },{ ro:"bere", zh:"啤酒" },
              { ro:"vin", zh:"葡萄酒" },{ ro:"suc", zh:"果汁" },
            ]},
            { type:"vocab_list", category:"衣物", words:[
              { ro:"cămașă", zh:"衬衫" },{ ro:"pantaloni", zh:"裤子" },{ ro:"rochie", zh:"连衣裙" },
              { ro:"pantofi", zh:"鞋子" },{ ro:"geacă", zh:"夹克" },{ ro:"pălărie", zh:"帽子" },
            ]},
            { type:"vocab_list", category:"城市地点", words:[
              { ro:"școală", zh:"学校" },{ ro:"spital", zh:"医院" },{ ro:"magazin", zh:"商店" },
              { ro:"piață", zh:"市场/广场" },{ ro:"bancă", zh:"银行" },{ ro:"gară", zh:"火车站" },
              { ro:"aeroport", zh:"机场" },{ ro:"hotel", zh:"酒店" },{ ro:"restaurant", zh:"餐厅" },
              { ro:"stradă", zh:"街道" },{ ro:"parc", zh:"公园" },{ ro:"biserică", zh:"教堂" },
            ]}
          ]
        },
        {
          id: "l12", title: "高频形容词与副词", type:"vocab",
          content: [
            { type:"text", text:"形容词在罗马尼亚语中通常放在名词后面，跟法语一样。形容词要与名词的性和数一致：阳性加 -(无)、阴性加 -ă、复数阳性加 -i、复数阴性加 -e。" },
            { type:"vocab_list", category:"常用形容词", words:[
              { ro:"bun / bună", zh:"好的" },{ ro:"rău / rea", zh:"坏的" },
              { ro:"mare", zh:"大的" },{ ro:"mic / mică", zh:"小的" },
              { ro:"frumos / frumoasă", zh:"美丽的" },{ ro:"urât / urâtă", zh:"丑的" },
              { ro:"nou / nouă", zh:"新的" },{ ro:"vechi / veche", zh:"旧的" },
              { ro:"tânăr / tânără", zh:"年轻的" },{ ro:"bătrân / bătrână", zh:"年老的" },
              { ro:"cald / caldă", zh:"热的" },{ ro:"rece", zh:"冷的" },
              { ro:"scump / scumpă", zh:"贵的" },{ ro:"ieftin / ieftină", zh:"便宜的" },
              { ro:"ușor / ușoară", zh:"容易的/轻的" },{ ro:"greu / grea", zh:"难的/重的" },
              { ro:"fericit / fericită", zh:"幸福的" },{ ro:"trist / tristă", zh:"悲伤的" },
            ]},
            { type:"vocab_list", category:"常用副词", words:[
              { ro:"bine", zh:"好地" },{ ro:"rău", zh:"坏地" },{ ro:"foarte", zh:"非常" },
              { ro:"mult", zh:"多" },{ ro:"puțin", zh:"少" },{ ro:"întotdeauna", zh:"总是" },
              { ro:"niciodată", zh:"从不" },{ ro:"adesea", zh:"经常" },{ ro:"uneori", zh:"有时" },
              { ro:"repede", zh:"快地" },{ ro:"încet", zh:"慢地" },{ ro:"aici", zh:"这里" },
              { ro:"acolo", zh:"那里" },{ ro:"acum", zh:"现在" },{ ro:"deja", zh:"已经" },
            ]}
          ]
        },
      ]
    },
    {
      id: "phase3",
      title: "第三阶段：简单句与日常会话",
      subtitle: "从单词过渡到句子，学习基本句式和日常对话场景",
      icon: "💬",
      lessons: [
        {
          id: "l13", title: "基本句式：主语+动词+宾语", type:"sentence",
          content: [
            { type:"text", text:"罗马尼亚语句子基本语序是 SVO（主-动-宾），跟中英文一样。好消息是罗马尼亚语经常省略主语代词，因为动词变位已经表明了人称。" },
            { type:"text", text:"比如 'Eu văd o casă'（我看见一栋房子）和 'Văd o casă' 意思一样，后者更自然。" },
            { type:"text", text:"不定冠词：un（阳性/中性单数）、o（阴性单数）。定冠词不是单独的词，而是加在名词末尾！比如 'un băiat'（一个男孩）→ 'băiatul'（这个男孩）。我们会后面的课专门学。" },
            { type:"practice", instruction:"朗读并理解以下句子：", items:[
              { ro:"Eu văd un câine.", zh:"我看见一只狗。" },
              { ro:"Ea mănâncă o pâine.", zh:"她吃一个面包。" },
              { ro:"Noi bem apă.", zh:"我们喝水。" },
              { ro:"El citește o carte.", zh:"他读一本书。" },
              { ro:"Copilul doarme.", zh:"孩子在睡觉。" },
              { ro:"Fata scrie o scrisoare.", zh:"女孩在写一封信。" },
            ]}
          ]
        },
        {
          id: "l14", title: "疑问句：用 Ce, Cine, Unde, Când, Cum, De ce", type:"sentence",
          content: [
            { type:"text", text:"罗马尼亚语的疑问词：Ce（什么）、Cine（谁）、Unde（哪里）、Când（什么时候）、Cum（怎么）、De ce（为什么）、Cât（多少）。" },
            { type:"text", text:"造疑问句很简单：疑问词 + 动词 + (主语) + ...。也可以直接用陈述句升调来提问。" },
            { type:"practice", instruction:"练习下列问答：", items:[
              { ro:"Ce faci?", zh:"你在做什么？" },
              { ro:"Cine ești?", zh:"你是谁？" },
              { ro:"Unde locuiești?", zh:"你住在哪里？" },
              { ro:"Când pleci?", zh:"你什么时候出发？" },
              { ro:"Cum te cheamă?", zh:"你叫什么名字？", hint:"cheamă 的核心意思是'叫/称呼'" },
              { ro:"De ce înveți româna?", zh:"你为什么学罗马尼亚语？" },
              { ro:"Cât costă?", zh:"多少钱？" },
            ]}
          ]
        },
        {
          id: "l15", title: "自我介绍与问候", type:"sentence",
          content: [
            { type:"text", text:"学会基本的问候和自我介绍。罗马尼亚人比较热情，常用 'Bună ziua'（日安）而不仅仅是 'Bună'（嗨）。" },
            { type:"practice", instruction:"日常对话场景：", items:[
              { ro:"Bună ziua!", zh:"你好！（正式/日安）" },
              { ro:"Bună!", zh:"嗨！（非正式）" },
              { ro:"Ce mai faci?", zh:"你最近怎么样？" },
              { ro:"Bine, mulțumesc. Și tu?", zh:"很好，谢谢。你呢？" },
              { ro:"Mă numesc Andrei.", zh:"我叫 Andrei。" },
              { ro:"Îmi pare bine.", zh:"很高兴认识你。" },
              { ro:"La revedere!", zh:"再见！" },
              { ro:"Pe curând!", zh:"回头见！" },
              { ro:"Noapte bună!", zh:"晚安！" },
              { ro:"Scuzați-mă.", zh:"对不起/打扰一下。" },
              { ro:"Nu înțeleg.", zh:"我不明白。" },
              { ro:"Puteți repeta, vă rog?", zh:"请再说一遍？" },
            ]}
          ]
        },
        {
          id: "l16", title: "名词定冠词入门", type:"grammar",
          content: [
            { type:"text", text:"罗马尼亚语最独特的语法特点：定冠词（the）不是单独的词，而是粘在名词后面。" },
            { type:"text", text:"阳性/中性单数：+ -(u)l 或 + -le → băiat → băiatul（这个男孩），câine → câinele（这只狗）" },
            { type:"text", text:"阴性单数：+ -(u)a → fată → fata（这个女孩），carte → cartea（这本书）" },
            { type:"text", text:"阳性复数：+ -i → băieți → băieții（这些男孩）" },
            { type:"text", text:"阴性/中性复数：+ -le → fete → fetele（这些女孩）" },
            { type:"text", text:"初学阶段先记住最常见的几个。实际上用多了耳朵会自然记住。" },
            { type:"practice", instruction:"将下列不定指变为定指：", items:[
              { ro:"un om → omul", zh:"一个人 → 这个人" },
              { ro:"o casă → casa", zh:"一栋房子 → 这栋房子" },
              { ro:"un tren → trenul", zh:"一列火车 → 这列火车" },
              { ro:"o mașină → mașina", zh:"一辆车 → 这辆车" },
              { ro:"un student → studentul", zh:"一个学生 → 这个学生" },
              { ro:"o școală → școala", zh:"一所学校 → 这所学校" },
            ]}
          ]
        },
        {
          id: "l17", title: "购物与点餐场景", type:"sentence",
          content: [
            { type:"text", text:"在罗马尼亚旅游或生活最常用的场景之一。" },
            { type:"practice", instruction:"实用句型：", items:[
              { ro:"Aș dori...", zh:"我想要..." },
              { ro:"Cât costă asta?", zh:"这个多少钱？" },
              { ro:"Aveți ...?", zh:"你们有...吗？" },
              { ro:"Nota de plată, vă rog.", zh:"请买单。" },
              { ro:"Unde este toaleta?", zh:"洗手间在哪里？" },
              { ro:"Un suc, vă rog.", zh:"请来一杯果汁。" },
              { ro:"O cafea cu lapte.", zh:"一杯加奶的咖啡。" },
              { ro:"Este prea scump.", zh:"太贵了。" },
              { ro:"Acceptați cardul?", zh:"能刷卡吗？" },
              { ro:"Poftă bună!", zh:"祝你好胃口！" },
            ]}
          ]
        },
        {
          id: "l18", title: "问路与交通", type:"sentence",
          content: [
            { type:"practice", instruction:"出行必备句型：", items:[
              { ro:"Unde este gara?", zh:"火车站在哪里？" },
              { ro:"Cum ajung la centru?", zh:"怎么去市中心？" },
              { ro:"La dreapta.", zh:"向右。" },
              { ro:"La stânga.", zh:"向左。" },
              { ro:"Drept înainte.", zh:"直走。" },
              { ro:"Este departe?", zh:"远吗？" },
              { ro:"Este aproape.", zh:"很近。" },
              { ro:"Cât durează?", zh:"需要多长时间？" },
              { ro:"Unde este stația de autobuz?", zh:"公交站在哪里？" },
              { ro:"Un bilet, vă rog.", zh:"请给我一张票。" },
            ]}
          ]
        },
      ]
    },
    {
      id: "phase4",
      title: "第四阶段：语法进阶与日常会话",
      subtitle: "在句子中自然融入语法知识，同时扩展会话能力",
      icon: "📖",
      lessons: [
        {
          id: "l19", title: "名词复数变化规则", type:"grammar",
          content: [
            { type:"text", text:"罗马尼亚语名词有三种性：阳性、阴性、中性。复数形式因性和词尾而异。" },
            { type:"text", text:"阳性复数：通常加 -i → băiat → băieți（男孩们），prieten → prieteni（朋友们）" },
            { type:"text", text:"阴性复数：通常变 -ă→-e 或加 -le → fată → fete（女孩们），carte → cărți（书们）" },
            { type:"text", text:"中性复数：加 -e 或 -uri → tren → trenuri（火车们），lucru → lucruri（东西们）" },
            { type:"practice", instruction:"将单数变为复数：", items:[
              { ro:"un student → doi studenți", zh:"一个学生 → 两个学生" },
              { ro:"o fată → două fete", zh:"一个女孩 → 两个女孩" },
              { ro:"un tren → două trenuri", zh:"一列火车 → 两列火车" },
              { ro:"o mașină → două mașini", zh:"一辆车 → 两辆车" },
            ]}
          ]
        },
        {
          id: "l20", title: "过去时入门（复合过去时）", type:"grammar",
          content: [
            { type:"text", text:"罗马尼亚语最常用的过去时是 'perfect compus'（复合过去时）：助动词（am/ai/a/am/ați/au）+ 过去分词。" },
            { type:"text", text:"过去分词构成：-a 动词变 -at（cânta→cântat），-ea 动词变 -ut（vedea→văzut），-e 动词变 -ut（merge→mers），-i 动词变 -it（dormi→dormit）。" },
            { type:"practice", instruction:"理解以下过去时句子：", items:[
              { ro:"Am mâncat o pizza.", zh:"我吃了一个披萨。" },
              { ro:"Ai văzut filmul?", zh:"你看了那部电影吗？" },
              { ro:"El a plecat ieri.", zh:"他昨天离开了。" },
              { ro:"Am fost la mare.", zh:"我去了海边。" },
              { ro:"Nu am înțeles.", zh:"我没明白。（过去时）" },
            ]}
          ]
        },
        {
          id: "l21", title: "将来时：用 'o să' 表达未来", type:"grammar",
          content: [
            { type:"text", text:"口语中最常用的将来时是 'o să + 现在时动词'，非常简洁。" },
            { type:"text", text:"还有更正式的 'voi + 不定式' 形式，但日常对话中 'o să' 更常用。" },
            { type:"practice", instruction:"练习将来时句子：", items:[
              { ro:"O să plec mâine.", zh:"我明天出发。" },
              { ro:"O să te sun.", zh:"我会给你打电话。" },
              { ro:"O să fie bine.", zh:"会好的。" },
              { ro:"O să ne vedem mai târziu?", zh:"我们晚点见？" },
              { ro:"Ce o să faci?", zh:"你打算做什么？" },
            ]}
          ]
        },
        {
          id: "l22", title: "日常话题：天气与季节", type:"sentence",
          content: [
            { type:"practice", instruction:"谈论天气：", items:[
              { ro:"Cum este vremea?", zh:"天气怎么样？" },
              { ro:"Este cald/frig.", zh:"很热/很冷。" },
              { ro:"Plouă.", zh:"下雨了。" },
              { ro:"Ninge.", zh:"下雪了。" },
              { ro:"Este soare.", zh:"出太阳了。" },
              { ro:"primăvară", zh:"春天" },
              { ro:"vară", zh:"夏天" },
              { ro:"toamnă", zh:"秋天" },
              { ro:"iarnă", zh:"冬天" },
            ]}
          ]
        },
        {
          id: "l23", title: "日常话题：家人与朋友", type:"sentence",
          content: [
            { type:"practice", instruction:"描述你认识的人：", items:[
              { ro:"Fratele meu este înalt.", zh:"我兄弟很高。" },
              { ro:"Sora mea are 20 de ani.", zh:"我姐妹20岁。" },
              { ro:"Părinții mei locuiesc în China.", zh:"我的父母住在中国。" },
              { ro:"Am doi frați și o soră.", zh:"我有两个兄弟和一个姐妹。" },
              { ro:"Cel mai bun prieten al meu se numește...", zh:"我最好的朋友叫..." },
            ]}
          ]
        },
        {
          id: "l24", title: "比较级与最高级", type:"grammar",
          content: [
            { type:"text", text:"比较级：mai + 形容词 + decât → 'mai bun decât'（比...更好）" },
            { type:"text", text:"最高级：cel mai + 形容词 → 'cel mai bun'（最好的）" },
            { type:"practice", instruction:"练习比较句：", items:[
              { ro:"Această carte este mai bună decât aceea.", zh:"这本书比那本好。" },
              { ro:"Ea este mai înaltă decât mine.", zh:"她比我高。" },
              { ro:"Acesta este cel mai bun restaurant.", zh:"这是最好的餐厅。" },
              { ro:"România este mai mică decât China.", zh:"罗马尼亚比中国小。" },
            ]}
          ]
        },
      ]
    },
    {
      id: "phase5",
      title: "第五阶段：B1 水平综合应用",
      subtitle: "复杂句式、中级语法、长对话和短文阅读",
      icon: "🎯",
      lessons: [
        {
          id: "l25", title: "人称代词（宾格与与格）", type:"grammar",
          content: [
            { type:"text", text:"直接宾语代词（宾格）：mă (我), te (你), îl (他), o (她), ne (我们), vă (你们), îi (他们-阳), le (他们-阴)" },
            { type:"text", text:"间接宾语代词（与格）：îmi (给我), îți (给你), îi (给他/她), ne (给我们), vă (给你们), le (给他们)" },
            { type:"text", text:"代词通常放在动词前面：'Te iubesc'（我爱你），'Îmi place'（我喜欢）。" },
            { type:"practice", instruction:"练习代词位置：", items:[
              { ro:"Te iubesc.", zh:"我爱你。" },
              { ro:"Îmi place muzica.", zh:"我喜欢音乐。" },
              { ro:"O văd.", zh:"我看见她/它（女性名词）。" },
              { ro:"Le dau o carte.", zh:"我给他们一本书。" },
              { ro:"Mă ajuți?", zh:"你能帮我吗？" },
            ]}
          ]
        },
        {
          id: "l26", title: "虚拟式（Conjunctiv）入门", type:"grammar",
          content: [
            { type:"text", text:"罗马尼亚语的虚拟式（ conjunctiv ）很常用，在 'vreau să...'（我想要...）、'trebuie să...'（必须...）后面都要用虚拟式。" },
            { type:"text", text:"虚拟式标志是 'să' + 动词（通常与现在时相同或略有变化）。" },
            { type:"practice", instruction:"练习虚拟式句型：", items:[
              { ro:"Vreau să învăț româna.", zh:"我想学罗马尼亚语。" },
              { ro:"Trebuie să plec.", zh:"我必须走了。" },
              { ro:"E important să citești.", zh:"阅读很重要（你要阅读）。" },
              { ro:"Pot să intru?", zh:"我可以进来吗？" },
              { ro:"Sper să vii.", zh:"我希望你能来。" },
            ]}
          ]
        },
        {
          id: "l27", title: "条件句：如果...", type:"grammar",
          content: [
            { type:"text", text:"条件句用 'dacă'（如果）+ 动词。现实条件用现在时，假设条件用过去时。" },
            { type:"practice", instruction:"练习条件句：", items:[
              { ro:"Dacă plouă, stau acasă.", zh:"如果下雨，我就待在家。" },
              { ro:"Dacă ai timp, vino cu mine.", zh:"如果你有时间，跟我来。" },
              { ro:"Dacă aș fi bogat, aș călători.", zh:"如果我有钱（假设），我会去旅行。" },
              { ro:"Spune-mi dacă ai nevoie de ajutor.", zh:"如果你需要帮助就告诉我。" },
            ]}
          ]
        },
        {
          id: "l28", title: "短文阅读：O zi obișnuită（普通的一天）", type:"reading",
          content: [
            { type:"text", text:"请尝试阅读以下短文，尽量用学过的拼读规则读出每个单词：" },
            { type:"reading", title:"O zi obișnuită", text:[
              "Mă numesc Andrei și am 25 de ani. Locuiesc în București, capitala României.",
              "În fiecare dimineață, mă trezesc la ora 7. Beau o cafea și mănânc o pâine cu unt și gem.",
              "După aceea, merg la muncă cu autobuzul. Lucrez într-un birou în centrul orașului.",
              "La prânz, mănânc la un restaurant lângă birou. De obicei, aleg o supă și o salată.",
              "După-masă, continui să lucrez până la ora 5. Seara, mă întâlnesc cu prietenii sau stau acasă.",
              "Îmi place să citesc și să mă uit la filme. Uneori gătesc sau ascult muzică.",
              "În weekend, merg la piață să cumpăr fructe și legume proaspete. Duminica merg la plimbare în parc.",
            ]},
            { type:"quiz", question:"Andrei locuiește în...?", options:["Cluj", "București", "Timișoara", "Iași"], answer:1 },
            { type:"quiz", question:"La ce oră se trezește Andrei?", options:["ora 6", "ora 7", "ora 8", "ora 9"], answer:1 },
            { type:"quiz", question:"Ce mănâncă dimineața?", options:["ouă", "pâine cu unt și gem", "pizza", "supă"], answer:1 },
          ]
        },
        {
          id: "l29", title: "短文阅读：La restaurant（在餐厅）", type:"reading",
          content: [
            { type:"reading", title:"La restaurant", text:[
              "Andrei și Maria au intrat într-un restaurant tradițional românesc.",
              "Chelnerul i-a întrebat: 'Ce doriți să comandați?'",
              "Andrei a răspuns: 'Aș dori o ciorbă de burtă și sarmale cu mămăligă.'",
              "Maria a spus: 'Eu vreau o salată de vinete și un pește la grătar.'",
              "Au băut și un pahar de vin roșu. Mâncarea a fost foarte gustoasă.",
              "După masă, au cerut nota de plată. Chelnerul a adus nota și a spus: 'Poftiți!'",
              "Andrei a plătit cu cardul și au lăsat un bacșiș de 10%.",
              "Au plecat fericiți și au spus că sigur vor reveni la acest restaurant.",
            ]},
            { type:"quiz", question:"Ce fel de restaurant au ales?", options:["italian", "chinezesc", "tradițional românesc", "franțuzesc"], answer:2 },
            { type:"quiz", question:"Ce a comandat Andrei?", options:["pizza", "ciorbă de burtă și sarmale", "pește", "salată"], answer:1 },
          ]
        },
        {
          id: "l30", title: "总复习与B1自测", type:"review",
          content: [
            { type:"text", text:"恭喜你完成了所有课程！以下是对所学内容的综合测试，覆盖发音、词汇、语法和阅读理解。" },
            { type:"quiz", question:"'școală' 的正确发音是？", options:["skoa-lă", "shcoa-lă", "soa-lă", "stoa-lă"], answer:1 },
            { type:"quiz", question:"'câine'（狗）的定指形式是？", options:["câinele", "câinel", "câinii", "câineul"], answer:0 },
            { type:"quiz", question:"'Eu am...' 是什么意思？", options:["我是...", "我有...", "我做...", "我去..."], answer:1 },
            { type:"quiz", question:"'Cum te cheamă?' 的意思是？", options:["你多大了？", "你住在哪里？", "你叫什么名字？", "你好吗？"], answer:2 },
            { type:"quiz", question:"罗马尼亚语的定冠词放在名词的...？", options:["前面", "后面", "上面", "不显示"], answer:1 },
            { type:"quiz", question:"'O să plec mâine' 是什么时态？", options:["现在时", "过去时", "将来时", "虚拟式"], answer:2 },
            { type:"quiz", question:"'Vreau să învăț' 中 'să învăț' 是什么语法结构？", options:["过去时", "将来时", "虚拟式", "条件式"], answer:2 },
            { type:"quiz", question:"'La revedere' 的意思是？", options:["你好", "谢谢", "再见", "对不起"], answer:2 },
          ]
        },
      ]
    },
  ]
};

// ---- 学习速度预设 ----
var PACE_PRESETS = {
  relaxed: { name:"轻松模式", desc:"每天 1 课，约 30 天完成", lessonsPerDay:1 },
  normal:   { name:"正常模式", desc:"每天 2 课，约 15 天完成", lessonsPerDay:2 },
  intensive:{ name:"强化模式", desc:"每天 4 课，约 8 天完成", lessonsPerDay:4 },
};

// 导出到全局
window.ALPHABET = ALPHABET;
window.LETTER_COMBOS = LETTER_COMBOS;
window.CURRICULUM = CURRICULUM;
window.PACE_PRESETS = PACE_PRESETS;
