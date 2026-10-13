import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R609.2",
    "difficulty": "exam",
    "question": "A window tested under R609.3 has an ASCE 7 ultimate-strength design pressure of 50 psf. Using the permitted conversion, what required test-design pressure results?",
    "questionUk": "Вікно, випробуване за R609.3, має тиск 50 psf за методом граничної міцності ASCE 7. Який потрібний розрахунковий тиск отримують після дозволеного перерахунку?",
    "answers": [
      [
        "30 psf",
        "30 фунтів на квадратний фут"
      ],
      [
        "20 psf",
        "20 фунтів на квадратний фут"
      ],
      [
        "40 psf",
        "40 фунтів на квадратний фут"
      ],
      [
        "50 psf",
        "50 фунтів на квадратний фут"
      ],
      [
        "83⅓ psf",
        "83⅓ фунта на квадратний фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For the specified tested assemblies, USD wind pressures may be multiplied by 0.6: 50 × 0.6 = 30 psf.",
    "explanationUk": "Для зазначених випробуваних конструкцій тиск USD можна помножити на 0,6: 50 × 0,6 = 30 psf."
  },
  {
    "section": "R609.3",
    "difficulty": "medium",
    "question": "Which THREE items must the exterior-window/sliding-door label identify under R609.3? Select THREE.",
    "questionUk": "Які ТРИ відомості має містити маркування зовнішнього вікна або розсувних дверей за R609.3? Оберіть ТРИ.",
    "answers": [
      [
        "Manufacturer",
        "Виробника"
      ],
      [
        "Performance characteristics",
        "Експлуатаційні характеристики"
      ],
      [
        "Approved inspection agency",
        "Погоджену організацію контролю"
      ],
      [
        "Installer's hourly rate",
        "Погодинну ставку монтажника"
      ],
      [
        "The home's assessed value",
        "Оціночну вартість будинку"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "R609.3 names manufacturer, performance characteristics and approved inspection agency on the label.",
    "explanationUk": "R609.3 вимагає зазначити виробника, експлуатаційні характеристики й погоджену організацію контролю."
  },
  {
    "section": "R609.3",
    "difficulty": "medium",
    "question": "An exterior side-hinged door uses the alternative named testing-and-labeling standard rather than the joint AAMA/WDMA/CSA standard. Which named standard is permitted?",
    "questionUk": "Зовнішні двері на бічних завісах використовують інший названий стандарт випробування й маркування замість спільного AAMA/WDMA/CSA. Який стандарт дозволений?",
    "answers": [
      [
        "AMD 100",
        "Стандарт AMD 100"
      ],
      [
        "ASTM C1178",
        "Стандарт ASTM C1178"
      ],
      [
        "APA E30",
        "Посібник APA E30"
      ],
      [
        "ASTM C926",
        "Стандарт ASTM C926"
      ],
      [
        "DOC PS 2",
        "Стандарт DOC PS 2"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Side-hinged exterior doors may follow AMD 100, the joint fenestration standard, or the R609.5 compliance route.",
    "explanationUk": "Зовнішні двері на бічних завісах можуть відповідати AMD 100, спільному стандарту світлопрозорих конструкцій або вимогам R609.5."
  },
  {
    "section": "R609.2",
    "difficulty": "exam",
    "question": "Exterior glazing is not part of a labeled assembly. Which alternative code chapter may determine its design wind loads?",
    "questionUk": "Зовнішнє скління не входить до маркованої конструкції. За якою альтернативною главою можна визначати його розрахункові вітрові навантаження?",
    "answers": [
      [
        "International Building Code Chapter 24",
        "Глава 24 International Building Code"
      ],
      [
        "IRC Chapter 7 only",
        "Лише глава 7 IRC"
      ],
      [
        "International Plumbing Code Chapter 11",
        "Глава 11 International Plumbing Code"
      ],
      [
        "IRC Chapter 10 only",
        "Лише глава 10 IRC"
      ],
      [
        "Minnesota Energy Code duct table",
        "Таблиця повітропроводів Minnesota Energy Code"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.2 permits Chapter 24 of the IBC for exterior glazing outside a labeled assembly.",
    "explanationUk": "R609.2 дозволяє використати главу 24 IBC для зовнішнього скління поза маркованою конструкцією."
  },
  {
    "section": "R609.7.1",
    "difficulty": "medium",
    "question": "What controls the anchoring of window and glass-door assemblies to achieve their specified design pressure?",
    "questionUk": "Що визначає кріплення вікон і скляних дверей для досягнення зазначеного розрахункового тиску?",
    "answers": [
      [
        "The manufacturer's published anchoring recommendations",
        "Опубліковані рекомендації виробника щодо кріплення"
      ],
      [
        "Any fastener schedule for interior paneling",
        "Будь-який графік кріплень внутрішньої обшивки"
      ],
      [
        "The installer's usual nail pattern without verification",
        "Звичний крок цвяхів монтажника без перевірки"
      ],
      [
        "The glazing safety mark alone",
        "Лише маркування безпечного скла"
      ],
      [
        "The window color schedule",
        "Відомість кольорів вікон"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.7.1 ties anchoring to published manufacturer recommendations for the specified pressure.",
    "explanationUk": "R609.7.1 пов’язує кріплення з опублікованими рекомендаціями виробника для зазначеного тиску."
  },
  {
    "section": "R609.7.1",
    "difficulty": "exam",
    "question": "A window manufacturer has no anchoring detail for the project's substrate. What must a substitute anchoring system demonstrate?",
    "questionUk": "Виробник вікна не має вузла кріплення для основи цього проєкту. Що має довести альтернативна система кріплення?",
    "answers": [
      [
        "Equal or greater anchoring performance by accepted engineering practice",
        "Рівні або вищі характеристики кріплення за визнаними інженерними методами"
      ],
      [
        "Only that its fasteners are less expensive",
        "Лише нижчу вартість кріплень"
      ],
      [
        "Only that the window fits the opening",
        "Лише відповідність вікна розміру отвору"
      ],
      [
        "Only that its screws are longer than the frame",
        "Лише більшу довжину шурупів за раму"
      ],
      [
        "Any performance if the owner signs a waiver",
        "Будь-які характеристики за згоди власника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For an unspecified substrate, substitute anchoring must provide at least equivalent performance demonstrated by accepted engineering practice.",
    "explanationUk": "Для неописаної основи альтернативне кріплення має забезпечувати щонайменше рівні характеристики, доведені визнаними інженерними методами."
  },
  {
    "section": "R609.8",
    "difficulty": "medium",
    "question": "Which TWO routes qualify a fenestration mullion under R609.8? Select TWO.",
    "questionUk": "Які ДВА способи підтверджують придатність з’єднувальної стійки віконного блока за R609.8? Оберіть ДВА.",
    "answers": [
      [
        "Approved laboratory testing under AAMA 450",
        "Випробування погодженою лабораторією за AAMA 450"
      ],
      [
        "Engineering under accepted engineering practice",
        "Проєктування за визнаними інженерними методами"
      ],
      [
        "Matching the adjacent window's paint",
        "Однакове фарбування із сусіднім вікном"
      ],
      [
        "Using a mullion of any material without analysis",
        "Будь-який матеріал стійки без розрахунку"
      ],
      [
        "Copying an unrelated interior partition detail",
        "Копіювання стороннього вузла внутрішньої перегородки"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The code permits approved AAMA 450 testing or accepted engineering design.",
    "explanationUk": "Код дозволяє погоджене випробування за AAMA 450 або визнане інженерне проєктування."
  },
  {
    "section": "R609.8",
    "difficulty": "exam",
    "question": "A mullion is qualified by testing an entire assembly. Which TWO cited performance sections does R609.8 expressly require for that route? Select TWO.",
    "questionUk": "Стійку підтверджено випробуванням усієї конструкції. Які ДВА положення щодо характеристик R609.8 прямо вимагає для цього способу? Оберіть ДВА.",
    "answers": [
      [
        "R609.8.1 load transfer",
        "R609.8.1 — передавання навантажень"
      ],
      [
        "R609.8.3 structural safety factor",
        "R609.8.3 — коефіцієнт конструкційної безпеки"
      ],
      [
        "R609.8.2 deflection as a separate cited condition for this route",
        "R609.8.2 — прогин як окрема зазначена умова цього способу"
      ],
      [
        "R506.2.4 slab reinforcement",
        "R506.2.4 — арматура плити"
      ],
      [
        "R702.2.3 lath support",
        "R702.2.3 — опори штукатурної основи"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Whole-assembly tests must meet .1 and .3; stand-alone tests or engineering use .1, .2 and .3.",
    "explanationUk": "Випробування всього блока мають відповідати .1 і .3; для окремої стійки або інженерного підтвердження застосовують .1, .2 і .3."
  },
  {
    "section": "R609.8.1",
    "difficulty": "medium",
    "question": "Where must a mullion transfer the design-pressure loads applied by its supported window and door assemblies?",
    "questionUk": "Куди стійка має передавати навантаження від розрахункового тиску на віконні й дверні конструкції, які вона підтримує?",
    "answers": [
      [
        "To the rough-opening substrate",
        "На конструкційну основу чорнового отвору"
      ],
      [
        "Only to the adjacent glazing pane",
        "Лише на сусіднє скло"
      ],
      [
        "To the weatherstripping",
        "На ущільнювач"
      ],
      [
        "To interior trim alone",
        "Лише на внутрішню лиштву"
      ],
      [
        "To the insect screen",
        "На москітну сітку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.8.1 requires transfer to the rough-opening substrate.",
    "explanationUk": "R609.8.1 вимагає передати навантаження на конструкційну основу чорнового отвору."
  },
  {
    "section": "R609.8.2",
    "difficulty": "exam",
    "question": "An engineered mullion has a 70-inch span. Under the L/175 limit, what is its maximum deflection at design pressure?",
    "questionUk": "Інженерно розрахована стійка має проліт 70 дюймів. Який найбільший прогин під розрахунковим тиском за межею L/175?",
    "answers": [
      [
        "0.40 inch",
        "0,40 дюйма"
      ],
      [
        "0.20 inch",
        "0,20 дюйма"
      ],
      [
        "0.28 inch",
        "0,28 дюйма"
      ],
      [
        "0.50 inch",
        "0,50 дюйма"
      ],
      [
        "0.70 inch",
        "0,70 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "70 ÷ 175 = 0.40 inch; the question uses the engineering route to which .2 applies.",
    "explanationUk": "70 ÷ 175 = 0,40 дюйма; тут використано інженерний спосіб, до якого застосовується .2."
  },
  {
    "section": "R609.8.3",
    "difficulty": "exam",
    "question": "A mullion supports assemblies with a 40-psf design-pressure load. What pressure multiplier level must it resist without exceeding appropriate material stresses?",
    "questionUk": "Стійка підтримує конструкції з розрахунковим тиском 40 psf. Якому рівню тиску вона має протистояти без перевищення допустимих напружень матеріалу?",
    "answers": [
      [
        "60 psf",
        "60 фунтів на квадратний фут"
      ],
      [
        "40 psf",
        "40 фунтів на квадратний фут"
      ],
      [
        "44 psf",
        "44 фунти на квадратний фут"
      ],
      [
        "50 psf",
        "50 фунтів на квадратний фут"
      ],
      [
        "80 psf",
        "80 фунтів на квадратний фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The structural safety factor is 1.5 times design pressure: 40 × 1.5 = 60 psf.",
    "explanationUk": "Коефіцієнт конструкційної безпеки становить 1,5 розрахункового тиску: 40 × 1,5 = 60 psf."
  },
  {
    "section": "R609.8.3",
    "difficulty": "exam",
    "question": "For an approved laboratory test of a 50-inch mullion, which pair gives the required overload hold time and maximum permanent deformation after removal?",
    "questionUk": "Для випробування стійки прольотом 50 дюймів погодженою лабораторією яка пара визначає час витримки під перевантаженням і найбільшу залишкову деформацію після зняття?",
    "answers": [
      [
        "10 seconds and 0.20 inch",
        "10 секунд і 0,20 дюйма"
      ],
      [
        "5 seconds and 0.20 inch",
        "5 секунд і 0,20 дюйма"
      ],
      [
        "10 seconds and 0.40 inch",
        "10 секунд і 0,40 дюйма"
      ],
      [
        "30 seconds and 0.50 inch",
        "30 секунд і 0,50 дюйма"
      ],
      [
        "60 seconds and 1.00 inch",
        "60 секунд і 1,00 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 1.5-times load is held 10 seconds; permanent deformation is limited to 0.4% of span: 50 × 0.004 = 0.20 inch.",
    "explanationUk": "Навантаження 1,5 розрахункового витримують 10 секунд; залишкова деформація обмежена 0,4% прольоту: 50 × 0,004 = 0,20 дюйма."
  }
];
export const intakeVerified70 = verifiedBatch(825, "Associated Issues", "Windows & Doors", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.fema.gov/sites/default/files/2020-08/2018_IRC_Compliation_of_wind_resist_provisions_20191211.pdf", seeds, "intake-series-67-72", true);

