import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R703.15.1",
    "question": "Which table gives minimum fastening to support cladding weight when cladding is attached DIRECTLY through foam sheathing to wood framing without furring?",
    "questionUk": "Яка таблиця задає мінімальне кріплення для ваги облицювання при ПРЯМОМУ кріпленні через пінний утеплювач до дерев’яного каркаса без обрешітки?",
    "answers": [
      [
        "Table R703.15.1",
        "Таблиця R703.15.1"
      ],
      [
        "Table R703.15.2",
        "Таблиця R703.15.2"
      ],
      [
        "Table R703.16.2",
        "Таблиця R703.16.2"
      ],
      [
        "Table R603.7(1)",
        "Таблиця R603.7(1)"
      ],
      [
        "Table R608.8(1)",
        "Таблиця R608.8(1)"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Direct wood-framing attachment is covered by Table R703.15.1; furred and steel-framed assemblies have different references.",
    "explanationUk": "Пряме кріплення до дерева охоплює R703.15.1; для обрешітки й сталевого каркаса діють інші посилання."
  },
  {
    "section": "R703.15.2",
    "question": "Select TWO permitted durability choices for horizontal wood furring used over foam sheathing.",
    "questionUk": "Оберіть ДВА дозволені варіанти довговічності горизонтальної дерев’яної обрешітки поверх піни.",
    "answers": [
      [
        "Preservative-treated wood complying with R317.1",
        "Захисно оброблена деревина за R317.1"
      ],
      [
        "Naturally durable wood",
        "Природно довговічна деревина"
      ],
      [
        "Any untreated nondurable wood regardless of exposure",
        "Будь-яка необроблена недовговічна деревина незалежно від впливів"
      ],
      [
        "Gypsum board strips substituted as wood",
        "Гіпсові смуги замість дерева"
      ],
      [
        "Interior-only fiberboard without approval",
        "Лише внутрішня ДВП без схвалення"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "difficulty": "medium",
    "explanation": "Horizontal wood furring must be treated or naturally durable, and its fasteners must meet the corrosion-resistance provision.",
    "explanationUk": "Горизонтальна дерев’яна обрешітка має бути обробленою чи природно довговічною, а кріплення — відповідати вимозі корозійної стійкості."
  },
  {
    "section": "R703.16.2",
    "question": "What minimum galvanized coating is specified for steel furring used to attach cladding over foam to steel framing?",
    "questionUk": "Яке мінімальне оцинковане покриття задано для сталевої обрешітки кріплення облицювання поверх піни до сталевого каркаса?",
    "answers": [
      [
        "G60",
        "Покриття G60"
      ],
      [
        "G10",
        "Покриття G10"
      ],
      [
        "G20",
        "Покриття G20"
      ],
      [
        "G30",
        "Покриття G30"
      ],
      [
        "No coating is required",
        "Покриття не потрібне"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R703.16.2 requires steel furring to have at least G60 galvanized coating.",
    "explanationUk": "R703.16.2 вимагає оцинковане покриття сталевої обрешітки щонайменше G60."
  },
  {
    "section": "R703.17",
    "question": "Furring runs through foam into a concrete wall. What loads must its design resist?",
    "questionUk": "Обрешітку кріплять крізь піну до бетонної стіни. Яким навантаженням має протидіяти її проєкт?",
    "answers": [
      [
        "R301 design loads, including applicable cladding weight",
        "Розрахунковим навантаженням R301, включно з вагою облицювання, коли застосовно"
      ],
      [
        "Only the weight of the foam",
        "Лише вазі піни"
      ],
      [
        "Only the weight of the paint",
        "Лише вазі фарби"
      ],
      [
        "Only fastener installation torque",
        "Лише монтажному моменту кріплення"
      ],
      [
        "Only a nominal load chosen by the installer",
        "Лише умовному навантаженню монтажника"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R703.17 requires furring and its attachments to resist R301 design loads, including support of cladding weight as applicable.",
    "explanationUk": "R703.17 вимагає для обрешітки й кріплень навантаження R301, включно з підтримкою ваги облицювання, коли застосовно."
  },
  {
    "section": "R703.17",
    "question": "Which requirement applies to fasteners attaching cladding or furring through foam into masonry or concrete?",
    "questionUk": "Яка вимога діє для кріплень облицювання чи обрешітки через піну до мурування або бетону?",
    "answers": [
      [
        "Approved for that substrate and installed to the fastener manufacturer's instructions",
        "Схвалені для цієї основи й встановлені за інструкцією виробника кріплення"
      ],
      [
        "Any wood nail is automatically acceptable",
        "Будь-який цвях для дерева автоматично підходить"
      ],
      [
        "Approval only for gypsum board is sufficient",
        "Достатньо схвалення лише для гіпсу"
      ],
      [
        "Only screw color determines suitability",
        "Придатність визначає лише колір шурупа"
      ],
      [
        "Installation instructions never apply through foam",
        "Через піну інструкції ніколи не діють"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The fastener must be approved for masonry/concrete use and installed according to its manufacturer's instructions.",
    "explanationUk": "Кріплення має бути схвалене для мурування/бетону та встановлене за інструкцією свого виробника."
  },
  {
    "section": "R703.15, Exception 1",
    "question": "A cladding manufacturer supplies approved instructions specifically for installation over foam sheathing. Which requirement applies under the stated exception?",
    "questionUk": "Виробник облицювання надає схвалену інструкцію саме для монтажу поверх пінного утеплювача. Які вимоги застосовуються за заданим винятком?",
    "answers": [
      [
        "Those approved foam-application instructions",
        "Ці схвалені інструкції застосування поверх піни"
      ],
      [
        "Only instructions for direct installation on bare studs",
        "Лише інструкції прямого монтажу на голі стійки"
      ],
      [
        "Only the foam's color chart",
        "Лише палітра кольорів піни"
      ],
      [
        "Only a supplier's verbal assurance",
        "Лише усне запевнення постачальника"
      ],
      [
        "No fastening requirements at all",
        "Жодних вимог кріплення"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Exception 1 directs use of approved manufacturer instructions for foam-sheathing application; unrelated instructions do not establish that route.",
    "explanationUk": "Виняток 1 направляє до схвалених інструкцій виробника для застосування поверх піни; сторонні інструкції не підтверджують цей шлях."
  },
  {
    "section": "Table R703.15.1, Footnote a",
    "question": "Besides Spruce-pine-fir, what minimum specific gravity qualifies a wood species for Table R703.15.1?",
    "questionUk": "Крім Spruce-pine-fir, яка мінімальна питома густина допускає породу деревини за таблицею R703.15.1?",
    "answers": [
      [
        "0.42",
        "Питома густина 0,42"
      ],
      [
        "0.20",
        "Питома густина 0,20"
      ],
      [
        "0.25",
        "Питома густина 0,25"
      ],
      [
        "0.30",
        "Питома густина 0,30"
      ],
      [
        "0.35",
        "Питома густина 0,35"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Footnote a allows Spruce-pine-fir or species with specific gravity at least 0.42 under AWC NDS.",
    "explanationUk": "Примітка a дозволяє Spruce-pine-fir або породи з питомою густиною щонайменше 0,42 за AWC NDS."
  },
  {
    "section": "Table R703.15.1, Footnote c",
    "question": "What minimum compressive strength must the foam have for use of Table R703.15.1?",
    "questionUk": "Яка мінімальна міцність піни на стиск потрібна для застосування таблиці R703.15.1?",
    "answers": [
      [
        "15 psi",
        "15 фунтів на квадратний дюйм"
      ],
      [
        "5 psi",
        "5 фунтів на квадратний дюйм"
      ],
      [
        "7 psi",
        "7 фунтів на квадратний дюйм"
      ],
      [
        "10 psi",
        "10 фунтів на квадратний дюйм"
      ],
      [
        "12 psi",
        "12 фунтів на квадратний дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Footnote c requires at least 15 psi in accordance with ASTM C578 or ASTM C1289.",
    "explanationUk": "Примітка c вимагає щонайменше 15 psi за ASTM C578 або ASTM C1289."
  },
  {
    "section": "Table R703.15.1",
    "question": "What minimum nail penetration into wood framing is shown for the direct-attachment table, excluding foam and cladding thickness?",
    "questionUk": "Яке мінімальне заглиблення цвяха в дерев’яний каркас задає таблиця прямого кріплення без урахування піни й облицювання?",
    "answers": [
      [
        "1-1/4 inches",
        "1-1/4 дюйма"
      ],
      [
        "1/4 inch",
        "1/4 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "3/4 inch",
        "3/4 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The table's wood-framing condition is at least 1-1/4 inches of penetration into framing; total fastener length must accommodate the intervening layers.",
    "explanationUk": "Умова таблиці — заглиблення в каркас не менше 1-1/4 дюйма; повна довжина кріплення має враховувати проміжні шари."
  },
  {
    "section": "Table R703.15.1",
    "question": "Using the 0.120-inch-diameter nail row, 6-inch vertical and 16-inch horizontal spacing, and 11 psf cladding, what maximum foam thickness is listed? Assume all table footnotes are met.",
    "questionUk": "За цвяха діаметром 0,120 дюйма, вертикального кроку 6, горизонтального 16 дюймів і облицювання 11 psf яка максимальна товщина піни в таблиці? Усі примітки виконані.",
    "answers": [
      [
        "1.70 inches",
        "1,70 дюйма"
      ],
      [
        "0.70 inch",
        "0,70 дюйма"
      ],
      [
        "0.90 inch",
        "0,90 дюйма"
      ],
      [
        "1.05 inches",
        "1,05 дюйма"
      ],
      [
        "3.00 inches",
        "3,00 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The specified row and 16-inch-spacing/11-psf column intersect at 1.70 inches. This table addresses support of cladding weight.",
    "explanationUk": "Перетин заданого рядка й колонки 16 дюймів/11 psf дає 1,70 дюйма. Таблиця стосується підтримки ваги облицювання."
  },
  {
    "section": "Table R703.15.1",
    "question": "For 0.113-inch nails at 8-inch vertical and 16-inch horizontal spacing with 18 psf cladding, the entry is DR. What does it mean?",
    "questionUk": "Для цвяхів 0,113 дюйма за кроку 8 дюймів вертикально й 16 горизонтально та облицювання 18 psf записано DR. Що це означає?",
    "answers": [
      [
        "Design Required",
        "Потрібне проєктування"
      ],
      [
        "Drywall Required",
        "Потрібен гіпсокартон"
      ],
      [
        "Double Rows automatically approved",
        "Автоматично дозволені подвійні ряди"
      ],
      [
        "Delete Reinforcement",
        "Прибрати армування"
      ],
      [
        "Any foam thickness is allowed",
        "Дозволена будь-яка товщина піни"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "DR means Design Required; it is not an allowable numerical foam thickness or automatic approval.",
    "explanationUk": "DR означає Design Required; це не допустима числова товщина піни чи автоматичне схвалення."
  },
  {
    "section": "Table R703.15.1",
    "question": "With 0.162-inch nails at 6-inch vertical spacing and 25 psf cladding, the maximum foam is 1.40 inches at 16-inch horizontal spacing and 0.80 inch at 24 inches. Which spacing supports a 1-inch foam layer under this weight table?",
    "questionUk": "За цвяхів 0,162 дюйма, вертикального кроку 6 дюймів та облицювання 25 psf максимум піни — 1,40 дюйма при горизонтальному кроці 16 і 0,80 при 24. Який крок підходить для піни 1 дюйм за цією ваговою таблицею?",
    "answers": [
      [
        "16 inches, but not 24 inches",
        "16 дюймів, але не 24"
      ],
      [
        "24 inches, but not 16 inches",
        "24 дюйми, але не 16"
      ],
      [
        "Both spacings",
        "Обидва кроки"
      ],
      [
        "Neither spacing",
        "Жоден крок"
      ],
      [
        "Only spacing greater than 24 inches",
        "Лише крок понад 24 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "One inch is within 1.40 but exceeds 0.80. Other fastening and wind-load requirements still apply.",
    "explanationUk": "Один дюйм не перевищує 1,40, але перевищує 0,80. Інші вимоги кріплення й вітрового навантаження також чинні."
  }
];
export const intakeVerified135 = verifiedBatch(1605, "Exterior Finishes", "Exterior", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-133-138", true, "2026-11-02");
