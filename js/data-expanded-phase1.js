// ============================================================
// 第一阶段扩展版：发音入门 - 逐字母精讲
// 覆盖所有 31 个罗马尼亚语字母 + 核心字母组合 + 双元音
// ============================================================

var CURRICULUM_PHASE1 = {
  phases: [
    {
      id: "phase1",
      title: "第一阶段：发音入门",
      subtitle: "逐字母掌握罗马尼亚语31个字母和核心发音规则，建立自然拼读能力",
      icon: "🔤",
      lessons: [
        // ================================================================
        // Lesson 1: Vowels A, Ă, Â (3 letters)
        // ================================================================
        {
          id: "l1",
          title: "元音（一）：A, Ă, Â",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "罗马尼亚语有 8 个元音字母。这一课我们先学前三个：A, Ă, Â。其中 Ă 和 Â 是中文和英语里没有的音，需要特别练习。"
            },
            {
              type: "text",
              text: "【A a】大写 A，小写 a。国际音标 /a/。发音类似英语 father 中的 a，或者中文"阿"的发音。嘴巴张大，舌位放低，口型开合最大。这是罗马尼亚语最常见的元音，几乎每个单词都有它。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 A 的发音：",
              items: [
                { ro: "apă", zh: "水", hint: "a-pă，a 像 father 的 a" },
                { ro: "animal", zh: "动物", hint: "a-ni-mal，两个 a 都读 /a/" },
                { ro: "acasă", zh: "在家", hint: "a-ca-să，注意 a 的开口音" }
              ]
            },
            {
              type: "text",
              text: "【Ă ă】大写 Ă，小写 ă。国际音标 /ə/（中央元音）。发音类似英语 about 中的 a，或者中文轻声"了"(le) 中的 e。嘴巴自然微张，舌头平放放松，不刻意用力。这个音在罗马尼亚语中出现的频率极高——几乎所有名词和形容词的阴性结尾都是 ă。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，感受 Ă 的松弛发音：",
              items: [
                { ro: "măr", zh: "苹果", hint: "măr，ă 像 about 的 a，短而轻" },
                { ro: "masă", zh: "桌子", hint: "ma-să，词尾 ă 弱读" },
                { ro: "băiat", zh: "男孩", hint: "bă-iat，ă 在词中也是中央元音" }
              ]
            },
            {
              type: "text",
              text: "【Â â】大写 Â，小写 â。国际音标 /ɨ/（闭央不圆唇元音）。发音方法：用发中文"一"的口型（舌头抬起来、嘴唇不圆），但发"乌"的声音（声带位置靠后）。简单说就是"嘴里说乌，嘴上不撅嘴"。Â 只出现在单词中间（词首和词尾用 Î，但发音完全相同）。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，体会 Â 的独特音色：",
              items: [
                { ro: "mână", zh: "手", hint: "mâ-nă，â 像发'一'时发'乌'" },
                { ro: "cânt", zh: "我唱歌", hint: "cânt，â 在辅音 m 和 n 之间" },
                { ro: "român", zh: "罗马尼亚人", hint: "ro-mân，â 在词中" }
              ]
            },
            {
              type: "practice",
              instruction: "对比练习——区分 A, Ă, Â 三个元音：",
              items: [
                { ro: "car vs. căr", zh: "车 vs. 书（骨架）", hint: "a 开口 / ă 中央" },
                { ro: "masă vs. mâna", zh: "桌子 vs. 手（acc.）", hint: "a→ă→â 逐步变化" },
                { ro: "ban vs. băn vs. cân", zh: "禁令 vs. 长凳 vs. 唱", hint: "注意元音音色区别" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 2: Vowels E, I, Î, O, U (5 letters)
        // ================================================================
        {
          id: "l2",
          title: "元音（二）：E, I, Î, O, U",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "这一课继续学习剩下的 5 个元音。E, I, O, U 和中文/英语的发音比较接近，但 Î 是罗马尼亚语的标志性元音。注意 Î 和 Â 发音完全相同——Î 只出现在词首和词尾，Â 出现在词中。"
            },
            {
              type: "text",
              text: "【E e】大写 E，小写 e。国际音标 /e/（半开元音）。发音类似英语 bed 中的 e，或者中文"诶"的发音。嘴巴半开，嘴角向两边拉开。注意罗马尼亚语的 e 较紧凑，不像英语中那么松。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 E 的发音：",
              items: [
                { ro: "elev", zh: "学生", hint: "e-lev，开头 e 读 /e/" },
                { ro: "femee", zh: "女人", hint: "fe-me-ie，三个 e 音" },
                { ro: "verde", zh: "绿色的", hint: "ver-de，末尾 e 保持 /e/ 不弱化" }
              ]
            },
            {
              type: "text",
              text: "【I i】大写 I，小写 i。国际音标 /i/（闭口元音）。发音类似英语 see 中的 ee，或者中文"一"的发音。嘴角往两边拉开，舌头抬到最高。注意：i 在词尾时有时读得非常轻，几乎不发音（尤其在动词后），但书写时必须保留。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 I 的发音：",
              items: [
                { ro: "inimă", zh: "心脏", hint: "i-ni-mă，两个 i 都读 /i/" },
                { ro: "iarnă", zh: "冬天", hint: "iar-nă，i 后面快速滑向后" },
                { ro: "prieten", zh: "朋友", hint: "pri-e-ten，i 在辅音后" }
              ]
            },
            {
              type: "text",
              text: "【Î î】大写 Î，小写 î。国际音标 /ɨ/。发音和 Â 完全相同——用发"一"的口型去发"乌"。区别在于位置：Î 只出现在单词开头或末尾。例如 început（开始）以 î 开头，而 mână（手）中的 â 在词中。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 Î 的发音和位置：",
              items: [
                { ro: "înger", zh: "天使", hint: "în-ger，î 在词首，闭口元音" },
                { ro: "început", zh: "开始", hint: "în-ce-put，î 在开头" },
                { ro: "înot", zh: "游泳", hint: "î-not，î 在开头，像'一'的口型发'乌'" }
              ]
            },
            {
              type: "text",
              text: "【O o】大写 O，小写 o。国际音标 /o/（半闭圆唇元音）。发音类似英语 or 中的 o，或者中文"哦"的发音。嘴唇收圆，舌位在半高位置。罗马尼亚语的 o 比英语更圆润、保持口型到最后。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 O 的圆唇发音：",
              items: [
                { ro: "om", zh: "人", hint: "om，o 圆唇，像"哦"的发音" },
                { ro: "ochi", zh: "眼睛", hint: "ochi，o 在开头圆唇" },
                { ro: "oraș", zh: "城市", hint: "o-raș，o 圆润饱满" }
              ]
            },
            {
              type: "text",
              text: "【U u】大写 U，小写 u。国际音标 /u/（闭口圆唇元音）。发音类似英语 food 中的 oo，或者中文"乌"的发音。嘴唇用力收圆并向前突出，舌位最高最靠后。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 U 的圆唇突出：",
              items: [
                { ro: "urs", zh: "熊", hint: "urs，u 像 food 的 oo，嘴唇突出" },
                { ro: "ultim", zh: "最后的", hint: "ul-tim，u 在开头" },
                { ro: "dulce", zh: "甜的", hint: "dul-ce，u 在辅音后保持圆唇" }
              ]
            },
            {
              type: "practice",
              instruction: "对比练习——区分 E, I, Î, O, U 五个元音：",
              items: [
                { ro: "el vs. il vs. ul", zh: "他 vs. 他（宾格）vs. 带-u的", hint: "e/i/u 口型逐步缩小并圆唇" },
                { ro: "în vs. un", zh: "在...里 vs. 一个", hint: "î 不圆唇 vs. u 圆唇" },
                { ro: "om vs. umbră", zh: "人 vs. 阴影", hint: "o 半闭 vs. u 闭口" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 3: Consonants B, C, D, F (4 letters)
        // ================================================================
        {
          id: "l3",
          title: "辅音（一）：B, C, D, F",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "这一课开始学习辅音。大多数罗马尼亚语辅音与英语或中文拼音接近，但 C 有一个极其重要的特殊规则——它在不同的字母前发音不同，这是罗马尼亚语拼读的核心规则之一。"
            },
            {
              type: "text",
              text: "【B b】大写 B，小写 b。国际音标 /b/（双唇浊塞音）。发音类似英语 boy 中的 b，或者中文"波"(bo) 的声母。双唇紧闭后突然放开，声带振动（浊音）。和中文的不送气 p 很相似。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 B 的发音：",
              items: [
                { ro: "bun", zh: "好的", hint: "bun，b 像 boy 的 b，声带振动" },
                { ro: "băiat", zh: "男孩", hint: "bă-iat，b 在开头" },
                { ro: "alb", zh: "白色", hint: "alb，b 在词尾，声带仍振动" }
              ]
            },
            {
              type: "text",
              text: "【C c】大写 C，小写 c。国际音标 /k/ 或 /tʃ/（视位置而定）。这是罗马尼亚语最重要的发音规则之一：C 在 a, o, u 和辅音前读 /k/（像英语 cat 的 c，中文"科"的声母）；C 在 e, i 前读 /tʃ/（像英语 check 的 ch，中文"车"的声母）。记住口诀：'C 见 A/O/U 读 K，C 见 E/I 读 CH'。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，对比 C 的两种发音：",
              items: [
                { ro: "carte", zh: "书", hint: "car-te，c 在 a 前读 k" },
                { ro: "ceai", zh: "茶", hint: "ceai，ce 读 che，像"拆"" },
                { ro: "copil", zh: "孩子", hint: "co-pil，c 在 o 前读 k" },
                { ro: "cinci", zh: "五", hint: "cin-ci，两个 c 都在 i 前都读 chi" }
              ]
            },
            {
              type: "text",
              text: "【D d】大写 D，小写 d。国际音标 /d/（齿龈浊塞音）。发音类似英语 dog 中的 d，或者中文"得"(de) 的声母。舌尖抵住上牙龈后放开，声带振动。和中文的不送气 t 相似。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 D 的发音：",
              items: [
                { ro: "drum", zh: "路", hint: "drum，d 像 dog 的 d" },
                { ro: "dor", zh: "渴望/疼痛", hint: "dor，d 在开头" },
                { ro: "unde", zh: "哪里", hint: "un-de，d 在词中" }
              ]
            },
            {
              type: "text",
              text: "【F f】大写 F，小写 f。国际音标 /f/（唇齿清擦音）。发音类似英语 fish 中的 f，或者中文"发"(fa) 的声母。上牙轻轻咬住下唇内侧，气流从唇齿间摩擦而出，声带不振动。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 F 的发音：",
              items: [
                { ro: "frate", zh: "兄弟", hint: "fra-te，f 像 fish 的 f，上牙咬下唇" },
                { ro: "foc", zh: "火", hint: "foc，f 在开头" },
                { ro: "floare", zh: "花", hint: "floa-re，f 后接 l 辅音丛" }
              ]
            },
            {
              type: "practice",
              instruction: "综合练习——B, C, D, F 混合对比：",
              items: [
                { ro: "bună ziua", zh: "你好", hint: "bu-nă，练习 b" },
                { ro: "carte și ceai", zh: "书和茶", hint: "对比 c 的两种发音" },
                { ro: "dor de frate", zh: "想兄弟", hint: "dor 的 d + frate 的 f" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 4: Consonants G, H, J, K, L (5 letters)
        // ================================================================
        {
          id: "l4",
          title: "辅音（二）：G, H, J, K, L",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "这一课的重点是 G 的特殊发音规则（和 C 类似，在 e/i 前要变音），以及 J——这个字母在罗马尼亚语中的发音和中文/英语完全不同，一定要注意。"
            },
            {
              type: "text",
              text: "【G g】大写 G，小写 g。国际音标 /ɡ/ 或 /dʒ/（视位置而定）。规则和 C 一模一样：G 在 a, o, u 和辅音前读 /ɡ/（像英语 go 的 g，中文"哥"的声母）；G 在 e, i 前读 /dʒ/（像英语 gym 的 g，中文"知"的声母但声带振动）。记住：'G 见 A/O/U 读哥，G 见 E/I 读知'。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，对比 G 的两种发音：",
              items: [
                { ro: "gură", zh: "嘴", hint: "gu-ră，g 在 u 前读硬 g" },
                { ro: "gem", zh: "果酱", hint: "gem，ge 读 je，像"杰"" },
                { ro: "frig", zh: "冷", hint: "frig，g 在词尾读硬 g" },
                { ro: "gimnaziu", zh: "中学", hint: "gim-na-ziu，gi 读 ji" }
              ]
            },
            {
              type: "text",
              text: "【H h】大写 H，小写 h。国际音标 /h/（声门清擦音）。发音类似英语 house 中的 h，或者中文"喝"(he) 的声母。气流从喉咙呼出，声带不振动。罗马尼亚语的 h 比英语略强一些。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 H 的发音：",
              items: [
                { ro: "hotel", zh: "酒店", hint: "ho-tel，h 像中文"喝"的声母" },
                { ro: "hartă", zh: "地图", hint: "har-tă，h 在开头" },
                { ro: "doh", zh: "曲调", hint: "do-h，h 在词尾" }
              ]
            },
            {
              type: "text",
              text: "【J j】大写 J，小写 j。国际音标 /ʒ/（龈腭浊擦音）。发音类似英语 measure 中的 s，或者中文"日"(ri) 的声母。声带振动，舌头接近上颚发出摩擦声。中文和英语都没有单独的 /ʒ/ 字母——它既不是 zh（知），也不是 r（日），而是介于两者之间的浊音。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 J 的独特发音：",
              items: [
                { ro: "joc", zh: "游戏", hint: "joc，j 像 measure 的 s，声带振动" },
                { ro: "jos", zh: "下面", hint: "jos，j 在开头，像"日"但声带更振" },
                { ro: "ajutor", zh: "帮助", hint: "a-ju-tor，j 在词中" }
              ]
            },
            {
              type: "text",
              text: "【K k】大写 K，小写 k。国际音标 /k/（软腭清塞音）。发音和 C 的硬音完全一样，像英语 kite 中的 k，或者中文"科"(ke) 的声母。K 只出现在外来词和缩写中，日常单词中用 C 代替。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 K 只在外来词中出现：",
              items: [
                { ro: "kilogram", zh: "公斤", hint: "ki-lo-gram，k 读 k" },
                { ro: "kiwi", zh: "猕猴桃", hint: "ki-wi，外来词" },
                { ro: "campion", zh: "冠军", hint: "注意：这个词用 c 不用 k" }
              ]
            },
            {
              type: "text",
              text: "【L l】大写 L，小写 l。国际音标 /l/（齿龈边音）。发音类似英语 love 中的 l，或者中文"了"(le) 的声母。舌尖抵住上牙龈，气流从舌头两侧通过。注意罗马尼亚语的 l 是"亮 l"（像英语 light 的 l），没有"暗 l"（像英语 ball 的 l）。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 L 的发音：",
              items: [
                { ro: "lapte", zh: "牛奶", hint: "lap-te，l 像 love 的 l" },
                { ro: "lună", zh: "月亮/月", hint: "lu-nă，l 在开头" },
                { ro: "lumină", zh: "光", hint: "lu-mi-nă，l 保持亮 l" }
              ]
            },
            {
              type: "practice",
              instruction: "综合练习——G, H, J, K, L 混合对比：",
              items: [
                { ro: "gem și gură", zh: "果酱和嘴", hint: "对比 g 在 e 前和 u 前的发音" },
                { ro: "joc cu ajutor", zh: "和帮助一起游戏", hint: "练习 j 音" },
                { ro: "kilogram de lapte", zh: "一公斤牛奶", hint: "练习 k 和 l" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 5: Consonants M, N, P, R, S (5 letters)
        // ================================================================
        {
          id: "l5",
          title: "辅音（三）：M, N, P, R, S",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "这一课包括罗马尼亚语的鼻音、爆破音和独特的颤音 R。其中 R 是中文和英语母语者最难掌握的，需要特别练习。S 则有一个好消息：它永远读 /s/，不会像英语中有时变成 z。"
            },
            {
              type: "text",
              text: "【M m】大写 M，小写 m。国际音标 /m/（双唇鼻音）。发音类似英语 moon 中的 m，或者中文"妈"(ma) 的声母。双唇紧闭，气流从鼻腔通过，声带振动。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 M 的发音：",
              items: [
                { ro: "mamă", zh: "妈妈", hint: "ma-mă，m 像 moon 的 m" },
                { ro: "măr", zh: "苹果", hint: "măr，m 在开头" },
                { ro: "nume", zh: "名字", hint: "nu-me，m 在词中" }
              ]
            },
            {
              type: "text",
              text: "【N n】大写 N，小写 n。国际音标 /n/（齿龈鼻音）。发音类似英语 nose 中的 n，或者中文"那"(na) 的声母。舌尖抵住上牙龈，气流从鼻腔通过，声带振动。注意：在词尾时（如 bun），前面的元音会带一点鼻音色彩，但不要过度鼻化。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 N 的发音：",
              items: [
                { ro: "noapte", zh: "夜晚", hint: "noap-te，n 在开头" },
                { ro: "nume", zh: "名字", hint: "nu-me，n 在开头" },
                { ro: "bine", zh: "好地", hint: "bi-ne，n 在词中" },
                { ro: "bun", zh: "好的", hint: "bun，n 在词尾，u 略鼻化" }
              ]
            },
            {
              type: "text",
              text: "【P p】大写 P，小写 p。国际音标 /p/（双唇清塞音）。发音类似英语 pen 中的 p，或者中文"坡"(po) 的声母。双唇紧闭后突然放开，气流冲出（送气），声带不振动。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 P 的送气发音：",
              items: [
                { ro: "pâine", zh: "面包", hint: "pâi-ne，p 送气" },
                { ro: "pădure", zh: "森林", hint: "pă-du-re，p 在开头" },
                { ro: "pas", zh: "步", hint: "pas，p 送气爆破" }
              ]
            },
            {
              type: "text",
              text: "【R r】大写 R，小写 r。国际音标 /r/（齿龈颤音）。这是罗马尼亚语中最有特色的音之一——舌尖抵住上牙龈前端，让气流使舌尖快速弹动（振动 2-3 下）。中文和英语的 r 都不是颤音，需要专门练习。入门技巧：先练说"了了了"（lalalala）加快速度，直到舌尖自然弹动；或者模仿摩托车"突突突"的声音。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，练习 R 的颤音：",
              items: [
                { ro: "râu", zh: "河流", hint: "râu，r 舌尖颤音，像舌头弹动" },
                { ro: "roșu", zh: "红色的", hint: "ro-șu，r 在开头颤音" },
                { ro: "prieten", zh: "朋友", hint: "pri-e-ten，r 在辅音后颤音" },
                { ro: "tare", zh: "硬的/很", hint: "ta-re，词尾 r 也颤音" }
              ]
            },
            {
              type: "text",
              text: "【S s】大写 S，小写 s。国际音标 /s/（齿龈清擦音）。发音类似英语 sun 中的 s，或者中文"思"(si) 的声母。注意：罗马尼亚语的 S 永远读 /s/，绝对不存在英语中 s 变成 z 的情况（如英语 is 的 s 读 z）。这是一个重要的稳定规则。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 S 永远读 /s/：",
              items: [
                { ro: "soare", zh: "太阳", hint: "soa-re，s 读 s，不读 z" },
                { ro: "sare", zh: "盐", hint: "sa-re，s 保持清音" },
                { ro: "masă", zh: "桌子", hint: "ma-să，s 在词中也读 /s/" }
              ]
            },
            {
              type: "practice",
              instruction: "综合练习——M, N, P, R, S 混合对比：",
              items: [
                { ro: "mamă și nume", zh: "妈妈和名字", hint: "练习 m 和 n" },
                { ro: "pâine cu sare", zh: "带盐的面包", hint: "练习 p 和 s" },
                { ro: "râu roșu", zh: "红色的河流", hint: "练习颤音 r" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 6: Consonants Ș, T, Ț, V (4 letters)
        // ================================================================
        {
          id: "l6",
          title: "辅音（四）：Ș, T, Ț, V",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "这一课学习罗马尼亚语最有特色的字母——带逗号的 Ș 和 Ț。这两个字母是罗马尼亚语独有的，在其他语言中很少见。正确区分 S/Ș（s/sh）、T/Ț（t/ts）是发音纯正的关键。"
            },
            {
              type: "text",
              text: "【Ș ș】大写 Ș（S 下面带逗号），小写 ș。国际音标 /ʃ/（龈腭清擦音）。发音类似英语 she 中的 sh，或者中文"是"(shi) 的声母。声带不振动，舌头靠近上颚，气流摩擦而出。Ș 和 J (/ʒ/) 是一对清浊辅音——Ș 声带不振动，J 声带振动。记住：Ș 就是 sh 的音。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 Ș 的 sh 发音：",
              items: [
                { ro: "școală", zh: "学校", hint: "școa-lă，ș 读 sh，像"是"的声母" },
                { ro: "șarpe", zh: "蛇", hint: "șar-pe，ș 在开头像 sh" },
                { ro: "pește", zh: "鱼", hint: "peș-te，ș 在词中读 sh" },
                { ro: "așa", zh: "这样", hint: "a-șa，ș 在词中" }
              ]
            },
            {
              type: "text",
              text: "【T t】大写 T，小写 t。国际音标 /t/（齿龈清塞音）。发音类似英语 top 中的 t，或者中文"特"(te) 的声母。舌尖抵住上牙龈后突然放开，气流冲出（送气），声带不振动。注意不要和下一课的 Ț (ts) 混淆。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 T 的发音：",
              items: [
                { ro: "timp", zh: "时间", hint: "timp，t 送气" },
                { ro: "fată", zh: "女孩", hint: "fa-tă，t 在词中" },
                { ro: "carte", zh: "书", hint: "car-te，t 在词尾" }
              ]
            },
            {
              type: "text",
              text: "【Ț ț】大写 Ț（T 下面带逗号），小写 ț。国际音标 /ts/（齿龈清塞擦音）。发音类似英语 cats 中的 ts，或者中文"次"(ci) 的声母。舌尖先抵住上牙龈（像 t），然后突然放开让气流摩擦出去（像 s），合起来就是 ts。注意：Ț 永远读 ts，和 T 完全不同！很多初学者容易把 ț 误读成 t，一定要区分。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 Ț 的 ts 发音：",
              items: [
                { ro: "țară", zh: "国家", hint: "ța-ră，ț 读 ts，像"擦"的声母" },
                { ro: "țintă", zh: "目标", hint: "țin-tă，ț 在开头读 ts" },
                { ro: "braț", zh: "手臂", hint: "braț，ț 在词尾读 ts" },
                { ro: "viit", zh: "未来", hint: "vii-ț-ă，ț 在词中" }
              ]
            },
            {
              type: "text",
              text: "【V v】大写 V，小写 v。国际音标 /v/（唇齿浊擦音）。发音类似英语 voice 中的 v。中文没有 /v/ 这个音——上牙轻咬下唇内侧，气流从唇齿间通过，声带振动（浊音）。很多中文母语者容易读成 w，但关键区别是 V 上牙要碰到下唇。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 V 的唇齿咬音：",
              items: [
                { ro: "viață", zh: "生活", hint: "vi-a-ță，v 上牙咬下唇" },
                { ro: "vin", zh: "葡萄酒", hint: "vin，v 在开头，唇齿音" },
                { ro: "verde", zh: "绿色的", hint: "ver-de，v 在开头" }
              ]
            },
            {
              type: "practice",
              instruction: "对比练习——区分 T/Ț 和 S/Ș：",
              items: [
                { ro: "tată vs. țară", zh: "爸爸 vs. 国家", hint: "t 送气 vs. ț 读 ts" },
                { ro: "soare vs. școală", zh: "太阳 vs. 学校", hint: "s 读 s vs. ș 读 sh" },
                { ro: "vita vs. viață", zh: "奶牛 vs. 生活", hint: "练习 v 的唇齿音" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 7: Consonants W, X, Y, Z, Q (5 letters)
        // ================================================================
        {
          id: "l7",
          title: "辅音（五）：W, X, Y, Z, Q（外来词字母）",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "这一课学习罗马尼亚语中出现频率较低的字母——它们几乎只出现在外来词（借词）、专有名词和科学术语中。学好它们主要是为了能正确读出国际通用词汇和品牌名称。好消息是这些字母的发音规则简单，基本按英语读法来就行。"
            },
            {
              type: "text",
              text: "【W w】大写 W，小写 w。国际音标 /w/ 或 /v/（视来源词而定）。W 只出现在外来词中：从英语来的词通常读 /w/（像 water 的 w）；从德语来的词通常读 /v/（像 vase 的 v）。遇到不熟悉的词，先试 w 音。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 W 的两种读法：",
              items: [
                { ro: "watt", zh: "瓦特", hint: "watt，通常读 vatt（来自德语）" },
                { ro: "weekend", zh: "周末", hint: "week-end，读 w（来自英语）" },
                { ro: "web", zh: "网络", hint: "web，读 w（来自英语）" }
              ]
            },
            {
              type: "text",
              text: "【X x】大写 X，小写 x。国际音标 /ks/（两个辅音的组合）。发音类似英语 box 中的 x，或者中文"科斯"(kesi) 的合并。X 就是 k + s 两个音连在一起快速读完。注意：罗马尼亚语的 X 不会像英语在某些词中读 gz（如 exam 在英语中读 gz，但在罗马尼亚语中读 ks）。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 X 读 /ks/：",
              items: [
                { ro: "taxi", zh: "出租车", hint: "ta-xi，x 读 ks" },
                { ro: "examen", zh: "考试", hint: "e-xa-men，x 始终读 ks 不读 gz" },
                { ro: "text", zh: "文本", hint: "text，x 读 ks" }
              ]
            },
            {
              type: "text",
              text: "【Y y】大写 Y，小写 y。国际音标 /j/ 或 /i/（视来源词而定）。Y 只出现在外来词中，通常读 /j/（像英语 yes 的 y，中文"耶"的声母）。在少数科学术语和地名中可能读 /i/（纯粹作为元音）。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 Y 的发音：",
              items: [
                { ro: "yoga", zh: "瑜伽", hint: "yo-ga，y 读 y，像"哟"的声母" },
                { ro: "yacht", zh: "游艇", hint: "yacht，y 读 y" },
                { ro: "yuan", zh: "元（货币）", hint: "yu-an，y 读 y" }
              ]
            },
            {
              type: "text",
              text: "【Z z】大写 Z，小写 z。国际音标 /z/（齿龈浊擦音）。发音类似英语 zebra 中的 z，或者中文"资"(zi) 的声母但声带振动。注意区分 Z 和 S：S 是清音（声带不振动），Z 是浊音（声带振动）。罗马尼亚语中 Z 出现的频率还不错，不是罕见字母。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 Z 的声带振动：",
              items: [
                { ro: "zi", zh: "天/日", hint: "zi，z 声带振动，像"资"但嗡嗡响" },
                { ro: "zebră", zh: "斑马", hint: "ze-bră，z 在开头浊音" },
                { ro: "zero", zh: "零", hint: "ze-ro，z 声带振动" }
              ]
            },
            {
              type: "text",
              text: "【Q q】大写 Q，小写 q。国际音标 /k/。发音和 K 以及 C 的硬音完全一样。Q 在罗马尼亚语中极少出现，总是和 u 连写成 qu，读作 /kw/ 或 /k/（取决于来源词）。主要用于地名和人名。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 Q 读 /k/：",
              items: [
                { ro: "Quito", zh: "基多（厄瓜多尔首都）", hint: "Qui-to，Qu 读 kwi" },
                { ro: "quiz", zh: "小测验", hint: "quiz，qu 读 kwi" },
                { ro: "quota", zh: "配额", hint: "quo-ta，qu 读 kwo" }
              ]
            },
            {
              type: "practice",
              instruction: "综合练习——W, X, Y, Z, Q 混合对比：",
              items: [
                { ro: "weekend taxi", zh: "周末出租车", hint: "练习 w 和 x" },
                { ro: "yoga zero", zh: "瑜伽零", hint: "练习 y 和 z" },
                { ro: "Quito quiz", zh: "基多小测验", hint: "练习 q（外来词）" }
              ]
            }
          ]
        },

        // ================================================================
        // Lesson 8: Letter combinations + Diphthongs + Alphabet Review
        // ================================================================
        {
          id: "l8",
          title: "字母组合、双元音与字母表总复习",
          type: "alphabet",
          content: [
            {
              type: "text",
              text: "最后一课，我们要把所有学过的发音规则串联起来！首先学习两组最重要的字母组合（CE/CI/CHE/CHI 和 GE/GI/GHE/GHI），然后学习双元音（diftong）的读法，最后做一个字母表总测验。掌握了这些，你就能流畅地读出几乎所有罗马尼亚语单词了。"
            },
            {
              type: "text",
              text: "【CE / CI 组合】C 在 e 和 i 前读 /tʃ/（ch）。所以 ce 组合读 /tʃe/（像英语 check 的 che），ci 组合读 /tʃi/（像英语 cheese 的 chee）。这是罗马尼亚语中最常见的拼读模式之一——单词 ce（什么）、cinci（五）都是日常高频词。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 CE/CI 的 ch 发音：",
              items: [
                { ro: "ce", zh: "什么", hint: "ce，ce 读 che，像"车"" },
                { ro: "ceai", zh: "茶", hint: "ceai，ce 读 che" },
                { ro: "cinci", zh: "五", hint: "cin-ci，两个 ci 都读 chi" },
                { ro: "cer", zh: "天空", hint: "cer，ce 读 che" }
              ]
            },
            {
              type: "text",
              text: "【CHE / CHI 组合】如果想让 C 在 e, i 前保持 /k/ 音（硬音），就在 c 和 e/i 之间加一个 h。che 读 /ke/（像英语 kettle 的 ke），chi 读 /ki/（像英语 key 的 kee）。记住口诀：'C 见 E 和 I，变 CH 笑嘻嘻；要想硬回来，后面加个 H。'"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，对比 CHE/CHI 的 k 发音：",
              items: [
                { ro: "cheie", zh: "钥匙", hint: "che-ie，che 读 ke" },
                { ro: "chitară", zh: "吉他", hint: "chi-ta-ră，chi 读 ki" },
                { ro: "ochi", zh: "眼睛", hint: "ochi，chi 读 ki" },
                { ro: "chema", zh: "叫/称呼", hint: "che-ma，che 读 ke" }
              ]
            },
            {
              type: "practice",
              instruction: "对比练习——CE/CI vs. CHE/CHI：",
              items: [
                { ro: "ce vs. che", zh: "什么 vs. 凯（姓）", hint: "ce(che) vs che(ke)" },
                { ro: "ci vs. chi", zh: "你（宾格）vs. 怎么（口语）", hint: "ci(chi) vs chi(ki)" },
                { ro: "face vs. fachir", zh: "做 vs. 苦行僧", hint: "ce(che) vs chi(ki)" }
              ]
            },
            {
              type: "text",
              text: "【GE / GI 组合】G 在 e 和 i 前读 /dʒ/（j）。ge 组合读 /dʒe/（像英语 gem 的 ge，中文"杰"的声母带浊音），gi 组合读 /dʒi/（像英语 gym 的 gy，中文"基"的声母带浊音）。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，注意 GE/GI 的 j 发音：",
              items: [
                { ro: "gem", zh: "果酱", hint: "gem，ge 读 je，像"杰"" },
                { ro: "ger", zh: "霜冻", hint: "ger，ge 读 je" },
                { ro: "gimnaziu", zh: "中学", hint: "gim-na-ziu，gi 读 ji" },
                { ro: "ginere", zh: "女婿", hint: "gi-ne-re，gi 读 ji" }
              ]
            },
            {
              type: "text",
              text: "【GHE / GHI 组合】和 C 加 h 同理——gh 让 g 在 e/i 前保持 /ɡ/ 硬音。ghe 读 /ɡe/（像英语 get 的 ge），ghi 读 /ɡi/（像英语 gift 的 gi）。这样罗马尼亚语就有了完整的四组对立：ce/che, ci/chi, ge/ghe, gi/ghi。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，对比 GE/GI vs. GHE/GHI：",
              items: [
                { ro: "gheață", zh: "冰", hint: "ghea-ță，ghe 读硬 ge" },
                { ro: "ghid", zh: "向导", hint: "ghid，ghi 读硬 gi" },
                { ro: "unghi", zh: "角度", hint: "un-ghi，ghi 读硬 gi" },
                { ro: "înger", zh: "天使", hint: "注意 ge 读 je vs. ghe 读硬 ge" }
              ]
            },
            {
              type: "text",
              text: "【双元音 Diftong】罗马尼亚语的双元音是两个元音连在一起快速滑动——第一个元音快速滑向第二个。常见双元音：ea (/e̯a/，像 ya 但 e 很短)，oa (/o̯a/，像 wa 但 o 很短)，ia (/ja/，像 yard 的 ya)，ie (/je/，像 yes 的 ye)，io (/jo/，像 yoga 的 yo)，iu (/ju/，像 you)。双元音的关键是'滑过去'不要断开。"
            },
            {
              type: "practice",
              instruction: "跟读以下单词，感受双元音的滑动：",
              items: [
                { ro: "seară", zh: "晚上", hint: "sea-ră，ea 从 e 滑向 a" },
                { ro: "soare", zh: "太阳", hint: "soa-re，oa 从 o 滑向 a" },
                { ro: "iarnă", zh: "冬天", hint: "iar-nă，ia 像 ya" },
                { ro: "iepure", zh: "兔子", hint: "ie-pu-re，ie 像 ye" },
                { ro: "iute", zh: "快的", hint: "iu-te，iu 像 you" },
                { ro: "cafea", zh: "咖啡", hint: "ca-fea，ea 双元音" }
              ]
            },
            {
              type: "text",
              text: "【总复习】恭喜你学完了全部 31 个罗马尼亚语字母和核心发音规则！罗马尼亚语的拼读非常规则——每个字母在特定位置下只有一种读法，不像英语那么多例外。掌握了以上规则，你就能正确读出任何一个罗马尼亚语单词。下面来检验一下你的学习成果吧！"
            },
            {
              type: "quiz",
              question: "罗马尼亚语一共有多少个字母？",
              options: ["26", "28", "31", "33"],
              answer: 2
            },
            {
              type: "quiz",
              question: "字母 Ă 的发音类似英语哪个词中的音？",
              options: ["father 的 a", "about 的 a", "bed 的 e", "girl 的 i"],
              answer: 1
            },
            {
              type: "quiz",
              question: "C 在字母 e 和 i 前应该读什么音？",
              options: ["/k/（k 音）", "/tʃ/（ch 音）", "/s/（s 音）", "/ʃ/（sh 音）"],
              answer: 1
            },
            {
              type: "quiz",
              question: "以下哪个字母是罗马尼亚语独有的（其他语言中极少出现）？",
              options: ["K", "W", "Ț", "Q"],
              answer: 2
            },
            {
              type: "quiz",
              question: "Â 和 Î 的发音是什么关系？",
              options: ["完全不同", "Â 更长", "完全相同", "Î 更短"],
              answer: 2
            },
            {
              type: "quiz",
              question: "字母 J 在罗马尼亚语中读作什么？",
              options: ["/dʒ/（j 音）", "/ʒ/（像 measure 的 s）", "/j/（y 音）", "/x/（h 音）"],
              answer: 1
            },
            {
              type: "quiz",
              question: "字母 Ș 的发音类似中文的什么声母？",
              options: ["s（思）", "sh（是）", "ts（次）", "ch（车）"],
              answer: 1
            },
            {
              type: "quiz",
              question: "为了让 C 在 e 前保持 /k/ 音，应该写成什么组合？",
              options: ["ce", "ke", "che", "que"],
              answer: 2
            },
            {
              type: "quiz",
              question: "双元音 ea 的正确读法是？",
              options: ["a 快速滑向 e", "e 快速滑向 a", "ea 分开读", "只读 e"],
              answer: 1
            },
            {
              type: "quiz",
              question: "字母 R 在罗马尼亚语中的正确发音是？",
              options: ["英语的 r 音", "舌尖颤音", "德语的小舌音", "不发音"],
              answer: 1
            },
            {
              type: "practice",
              instruction: "🎉 恭喜完成所有发音课程！最后挑战——试读以下罗马尼亚语句子，用上你学到的全部拼读知识：",
              items: [
                { ro: "Bună ziua! Ce faci?", zh: "你好！你好吗？", hint: "Bu-nă zi-ua! Ce faci?" },
                { ro: "Îmi place să învăț limba română.", zh: "我喜欢学罗马尼亚语。", hint: "Îmi pla-ce să în-văț lim-ba ro-mâ-nă." },
                { ro: "România este o țară frumoasă.", zh: "罗马尼亚是一个美丽的国家。", hint: "Ro-mâ-ni-a es-te o ța-ră fru-moa-să." }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// 导出到全局
window.CURRICULUM_PHASE1 = CURRICULUM_PHASE1;
