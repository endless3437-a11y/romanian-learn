// Chapter Consolidation Readings
// Each reading corresponds to a learning phase, using vocabulary and grammar from that phase.

var CHAPTER_READINGS = [
  // ======================================================================
  // Phase 1: 发音入门 (Alphabet & Pronunciation)
  // Focus: simple words with special Romanian letters (ă, â, î, ș, ț)
  // ======================================================================
  {
    id: "cr1",
    phase: 1,
    phaseName: "第一阶段：发音入门",
    title: "O zi frumoasă",
    titleZh: "美好的一天",
    intro: "一篇非常简单的短文，帮助你练习ă、â、î、ș、ț等特殊字母的发音。",
    text: [
      "Azi este o zi frumoasă. Soarele strălucește pe cer. Eu mă numesc Ana. Am șapte ani. În mână am un trandafir roșu. El este foarte frumos. În grădină sunt păsări și flori. Păsările cântă frumos. Copiii se joacă în curte. Noi suntem fericiți.",
      "Trandafirul meu este roșu și mirositor. În grădină sunt și lalele galbene și albe. Frunzele copacilor sunt verzi. Ce zi minunată și însorită!"
    ],
    vocab: [
      { ro: "frumos / frumoasă", zh: "美丽的" },
      { ro: "soare", zh: "太阳" },
      { ro: "a străluci", zh: "闪耀" },
      { ro: "trandafir", zh: "玫瑰" },
      { ro: "grădină", zh: "花园" },
      { ro: "pasăre", zh: "鸟" },
      { ro: "a cânta", zh: "唱歌" },
      { ro: "minunat", zh: "精彩的" }
    ],
    quiz: [
      {
        question: "Câți ani are Ana?",
        options: ["Cinci ani", "Șase ani", "Șapte ani", "Opt ani"],
        answer: 2
      },
      {
        question: "Ce are Ana în mână?",
        options: ["O carte", "Un trandafir", "O floare", "O păsăre"],
        answer: 1
      }
    ]
  },

  // ======================================================================
  // Phase 2: 词根词缀 & 核心词汇 (Roots & Core Vocabulary)
  // Focus: body, family, food, colors, adjectives, simple SVO sentences
  // ======================================================================
  {
    id: "cr2",
    phase: 2,
    phaseName: "第二阶段：词根词缀 & 核心词汇",
    title: "Familia mea",
    titleZh: "我的家人",
    intro: "一篇介绍家人的短文，运用身体部位、颜色、食物等核心词汇，并用简单句描述。",
    text: [
      "Eu am o familie mică. Eu, mama, tata și sora mea. Mama are ochi verzi și păr brunet. Ea este înaltă și frumoasă. Tata are ochi albaștri și păr blond. El este puternic și bun. Sora mea are zece ani. Ea are ochi mari și un zâmbet frumos.",
      "Astăzi mănâncăm împreună. Mama gătește supă delicioasă și pâine caldă. Eu beau apă rece. Tata bea ceai negru. Sora mea mănâncă un măr verde. Toată familia este fericită."
    ],
    vocab: [
      { ro: "familie", zh: "家庭" },
      { ro: "ochi", zh: "眼睛" },
      { ro: "păr", zh: "头发" },
      { ro: "mama / tata", zh: "妈妈 / 爸爸" },
      { ro: "a găti", zh: "烹饪" },
      { ro: "supă", zh: "汤" },
      { ro: "delicios", zh: "美味的" },
      { ro: "fericit", zh: "幸福的" }
    ],
    quiz: [
      {
        question: "Câți membri are familia Anei?",
        options: ["Doi", "Trei", "Patru", "Cinci"],
        answer: 2
      },
      {
        question: "Ce culoare au ochii mamei?",
        options: ["Albastri", "Verzi", "Căprui", "Negri"],
        answer: 1
      },
      {
        question: "Ce mănâncă sora cea mică?",
        options: ["O supă", "O pâine", "Un măr", "Un ceai"],
        answer: 2
      }
    ]
  },

  // ======================================================================
  // Phase 3: 简单句与日常会话 (Simple Sentences & Daily Conversation)
  // Focus: shopping / restaurant scene, question words, definite articles
  // ======================================================================
  {
    id: "cr3",
    phase: 3,
    phaseName: "第三阶段：简单句与日常会话",
    title: "La piață",
    titleZh: "在菜市场",
    intro: "一段在市场购物的日常对话，练习疑问词、定冠词和购物用语。",
    text: [
      "Ana merge la piață cu mama ei. Piața este mare și aglomerată. Acolo sunt multe tarabe cu fructe, legume, brânză și pâine.",
      "— Bună ziua! Cât costă merele? întreabă Ana.",
      "— Merele costă cinci lei kilogramul. Vrei să cumperi? spune vânzătorul.",
      "— Da, vreau doi kilograme de mere, vă rog.",
      "— Poftiți. Zece lei, vă rog.",
      "Apoi ele cumpără roșii și brânză proaspătă. Mama plătește și pleacă acasă. Împreună vor găti o cină delicioasă."
    ],
    vocab: [
      { ro: "piață", zh: "市场" },
      { ro: "tarabă", zh: "摊位" },
      { ro: "a costa", zh: "价值、价格是" },
      { ro: "kilogram", zh: "公斤" },
      { ro: "vânzător", zh: "卖家、售货员" },
      { ro: "a cumpăra", zh: "购买" },
      { ro: "a plăti", zh: "付款" },
      { ro: "proaspăt", zh: "新鲜的" }
    ],
    quiz: [
      {
        question: "Cât costă un kilogram de mere?",
        options: ["Trei lei", "Patru lei", "Cinci lei", "Șase lei"],
        answer: 2
      },
      {
        question: "Câte kilograme de mere cumpără Ana?",
        options: ["Unul", "Două", "Trei", "Patru"],
        answer: 1
      },
      {
        question: "Ce cumpără ele în plus?",
        options: ["Pâine și lapte", "Roșii și brânză", "Struguri și miere", "Carne și ouă"],
        answer: 1
      }
    ]
  },

  // ======================================================================
  // Phase 4: 语法进阶 (Grammar Advanced)
  // Focus: past tense, future tense, weather, comparatives, family
  // ======================================================================
  {
    id: "cr4",
    phase: 4,
    phaseName: "第四阶段：语法进阶",
    title: "Vacanța de vară",
    titleZh: "暑假",
    intro: "讲述一次暑假旅行的经历，练习过去时、将来时、天气表达和比较级。",
    text: [
      "Anul trecut am fost în vacanță la bunici, în sat. Vremea a fost mai frumoasă decât în oraș. Soarele a strălucit în fiecare zi și cerul a fost albastru și senin.",
      "Dimineața mă plimbam prin grădină și culegeam flori. Bunica a gătit cele mai bune mâncăruri: plăcintă cu brânză și supă de pui. Am petrecut cel mai frumos timp cu familia.",
      "Anul viitor voi merge din nou la bunici. Voi sta două săptămâni și voi învăța să gătesc plăcintă. Cu siguranță va fi mai bine decât anul trecut!"
    ],
    vocab: [
      { ro: "vacanță", zh: "假期" },
      { ro: "bunic / bunica", zh: "爷爷/外公 / 奶奶/外婆" },
      { ro: "vremea", zh: "天气" },
      { ro: "senin", zh: "晴朗的" },
      { ro: "a petrece", zh: "度过" },
      { ro: "anul viitor", zh: "明年" },
      { ro: "săptămână", zh: "星期" },
      { ro: "cu siguranță", zh: "肯定、一定" }
    ],
    quiz: [
      {
        question: "Unde a fost autorul în vacanță anul trecut?",
        options: ["La mare", "La munte", "La bunici în sat", " În altă țară"],
        answer: 2
      },
      {
        question: "Cum a fost vremea în sat comparativ cu orașul?",
        options: ["La fel", "Mai frumoasă", "Mai rece", "Mai urâtă"],
        answer: 1
      },
      {
        question: "Ce va face autorul anul viitor?",
        options: ["Va sta o lună", "Va învăța să gătească", "Va merge la mare", "Va rămâne acasă"],
        answer: 1
      }
    ]
  },

  // ======================================================================
  // Phase 5: B1 综合应用 (B1 Comprehensive)
  // Focus: subjunctive, conditional, pronouns, Romanian culture / travel
  // ======================================================================
  {
    id: "cr5",
    phase: 5,
    phaseName: "第五阶段：B1 综合应用",
    title: "O călătorie prin România",
    titleZh: "罗马尼亚之旅",
    intro: "一篇介绍罗马尼亚文化和旅行的短文，运用虚拟式、条件式和代词等B1语法。",
    text: [
      "Dacă aș putea să călătoresc oriunde, aș alege din nou România. Știi că România are unele dintre cele mai frumoase peisaje din Europa? De la Munții Carpați până la Marea Neagră, țara aceasta oferă o diversitate uimitoare.",
      "Mi-ar plăcea să vizitez Castelul Bran, despre care se spune că a fost locuința lui Vlad Țepeș. Aș vrea să merg și în Delta Dunării, unde ai putea vedea păsări rare și peisaje spectaculoase. Turiștii care vin în România spun că mâncarea tradițională este delicioasă — sarmalele, mămăliga și cozonacul sunt cele mai populare.",
      "Poate că într-o zi vei avea ocazia să descoperi și tu această țară minunată. Până atunci, începe să înveți limba română și să citești despre cultura ei bogată!"
    ],
    vocab: [
      { ro: "a călători", zh: "旅行" },
      { ro: "peisaj", zh: "风景" },
      { ro: "diversitate", zh: "多样性" },
      { ro: "uimitor", zh: "令人惊叹的" },
      { ro: "castel", zh: "城堡" },
      { ro: "tradițional", zh: "传统的" },
      { ro: "sarmale", zh: "罗马尼亚菜卷" },
      { ro: "ocazie", zh: "机会" }
    ],
    quiz: [
      {
        question: "Ce spune textul despre peisajele României?",
        options: [
          "Sunt destul de obișnuite",
          "Sunt unele dintre cele mai frumoase din Europa",
          "Nu sunt spectaculoase",
          "Sunt mai puțin frumoase decât altele"
        ],
        answer: 1
      },
      {
        question: "Care dintre următoarele este o mâncare tradițională românească menționată în text?",
        options: ["Paella", "Sushi", "Sarmale", "Pizza"],
        answer: 2
      },
      {
        question: "Ce gramatică este folosită în fraza „Dacă aș putea să călătoresc”?",
        options: ["Trecutul simplu", "Viitorul", "Condiționalul-optativ", "Imperfectul"],
        answer: 2
      }
    ]
  }
];

// Export for browser
if (typeof window !== "undefined") {
  window.CHAPTER_READINGS = CHAPTER_READINGS;
}
