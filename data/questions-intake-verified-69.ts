import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Table R803.1",
    "difficulty": "easy",
    "question": "With roof rafters 24 inches on center, what minimum net thickness does the lumber-sheathing table specify?",
    "questionUk": "За кроку крокв 24 дюйми яка мінімальна фактична товщина дощатої обшивки потрібна за таблицею?",
    "answers": [
      [
        "⅝ inch",
        "⅝ дюйма"
      ],
      [
        "⅜ inch",
        "⅜ дюйма"
      ],
      [
        "7/16 inch",
        "7/16 дюйма"
      ],
      [
        "½ inch",
        "½ дюйма"
      ],
      [
        "¾ inch",
        "¾ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 24-inch spacing row requires ⅝-inch net lumber thickness; this is not the structural-panel table.",
    "explanationUk": "Для кроку 24 дюйми потрібна фактична товщина дощок ⅝ дюйма; це не таблиця плитної обшивки."
  },
  {
    "section": "Table R803.1, footnote a",
    "difficulty": "medium",
    "question": "A roof uses the 48-inch spacing row and meets its lumber-property footnote. What sheathing thickness and edge form are specified?",
    "questionUk": "Дах використовує рядок кроку 48 дюймів і відповідає примітці щодо властивостей деревини. Яка товщина й форма країв обшивки потрібні?",
    "answers": [
      [
        "1½-inch net tongue-and-groove",
        "Фактичні 1½ дюйма, шпунтовані краї"
      ],
      [
        "¾-inch net square-edge",
        "Фактичні ¾ дюйма, прямі краї"
      ],
      [
        "1-inch net square-edge",
        "Фактичний 1 дюйм, прямі краї"
      ],
      [
        "1¼-inch net tongue-and-groove",
        "Фактичні 1¼ дюйма, шпунтовані краї"
      ],
      [
        "2-inch nominal square-edge",
        "Номінальні 2 дюйми, прямі краї"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 48-, 60- and 72-inch rows specify 1½-inch net tongue-and-groove lumber with different property footnotes.",
    "explanationUk": "Рядки 48, 60 і 72 дюйми встановлюють фактичні 1½ дюйма та шпунтовані краї, але різні примітки щодо властивостей."
  },
  {
    "section": "Table R803.1, footnote b",
    "difficulty": "exam",
    "question": "When checking the 60-inch lumber roof-sheathing row, which minimum bending value Fb appears in its footnote?",
    "questionUk": "Під час перевірки рядка дощатої обшивки з кроком 60 дюймів яке мінімальне значення згину Fb наведене в примітці?",
    "answers": [
      [
        "420 psi",
        "420 psi"
      ],
      [
        "270 psi",
        "270 psi"
      ],
      [
        "340 psi",
        "340 psi"
      ],
      [
        "600 psi",
        "600 psi"
      ],
      [
        "660 psi",
        "660 psi"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote b for 60 inches specifies minimum Fb 420 and E 660,000.",
    "explanationUk": "Примітка b для 60 дюймів установлює мінімум Fb 420 та E 660 000."
  },
  {
    "section": "Table R803.1, footnote c",
    "difficulty": "exam",
    "question": "The 72-inch lumber-sheathing row is proposed. What minimum modulus E must be checked in addition to Fb?",
    "questionUk": "Запропоновано рядок дощатої обшивки для кроку 72 дюйми. Який мінімальний модуль E слід перевірити додатково до Fb?",
    "answers": [
      [
        "1,150,000 psi",
        "1 150 000 psi"
      ],
      [
        "340,000 psi",
        "340 000 psi"
      ],
      [
        "420,000 psi",
        "420 000 psi"
      ],
      [
        "600,000 psi",
        "600 000 psi"
      ],
      [
        "660,000 psi",
        "660 000 psi"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote c requires minimum Fb 600 and E 1,150,000; thickness alone is not enough.",
    "explanationUk": "Примітка c вимагає мінімум Fb 600 та E 1 150 000; самої товщини недостатньо."
  },
  {
    "section": "R803.2.1",
    "difficulty": "medium",
    "question": "Which THREE characteristics must an approved grade mark or inspection certificate identify for wood structural roof panels? Select THREE.",
    "questionUk": "Які ТРИ характеристики має визначати погоджене маркування сорту або акт перевірки деревинних конструкційних плит даху? Оберіть ТРИ.",
    "answers": [
      [
        "Grade",
        "Сорт"
      ],
      [
        "Bond classification",
        "Клас склеювання"
      ],
      [
        "Performance category",
        "Категорію експлуатаційних характеристик"
      ],
      [
        "Roof pitch for every installation",
        "Ухил кожного конкретного даху"
      ],
      [
        "Required shingle color",
        "Обов’язковий колір черепиці"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The identification requirement covers grade, bond classification and performance category, through an approved agency.",
    "explanationUk": "Погоджена організація має засвідчити сорт, клас склеювання та категорію експлуатаційних характеристик."
  },
  {
    "section": "R803.2.1.1",
    "difficulty": "medium",
    "question": "A wood structural panel is designed for permanent outdoor exposure. Which exposure durability must it have?",
    "questionUk": "Деревинну конструкційну плиту проєктують для постійного впливу зовнішнього середовища. Яка стійкість до такого впливу потрібна?",
    "answers": [
      [
        "Exterior",
        "Exterior — для зовнішнього застосування"
      ],
      [
        "Interior only",
        "Лише Interior — для внутрішнього застосування"
      ],
      [
        "Exposure 1 solely because it is roof sheathing",
        "Exposure 1 лише тому, що це обшивка даху"
      ],
      [
        "Any classification if painted",
        "Будь-яка класифікація за наявності фарби"
      ],
      [
        "No classification if thicker than ½ inch",
        "Без класифікації за товщини понад ½ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Permanent outdoor applications require exterior exposure durability.",
    "explanationUk": "Для постійного зовнішнього застосування потрібна стійкість класу Exterior."
  },
  {
    "section": "R803.2.1.1",
    "difficulty": "exam",
    "question": "Roof sheathing is exposed only on its underside at an eave. Which panel option is expressly permitted by R803.2.1.1?",
    "questionUk": "Обшивка даху відкрита лише з нижнього боку карниза. Який варіант плити прямо дозволений R803.2.1.1?",
    "answers": [
      [
        "Interior-type panel with exterior glue, identified as Exposure 1",
        "Плита внутрішнього типу із зовнішнім клеєм, маркована Exposure 1"
      ],
      [
        "Interior panel with interior glue and no exposure identification",
        "Внутрішня плита з внутрішнім клеєм без позначення впливу"
      ],
      [
        "Any unmarked interior panel",
        "Будь-яка немаркована внутрішня плита"
      ],
      [
        "Only preservative-treated boards",
        "Лише дошки з антисептичним просоченням"
      ],
      [
        "Only panels carrying an Exterior classification",
        "Лише плити з класифікацією Exterior"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For underside exposure, the code expressly permits interior type bonded with exterior glue and marked Exposure 1.",
    "explanationUk": "За відкритого нижнього боку код прямо дозволяє внутрішній тип із зовнішнім клеєм та маркуванням Exposure 1."
  },
  {
    "section": "R803.2.1.2",
    "difficulty": "exam",
    "question": "Which THREE factors must an approved investigation consider when developing allowable stresses for fire-retardant-treated plywood? Select THREE.",
    "questionUk": "Які ТРИ чинники має враховувати погоджене дослідження допустимих напружень вогнезахисно обробленої фанери? Оберіть ТРИ.",
    "answers": [
      [
        "Anticipated temperature and humidity",
        "Очікувані температура й вологість"
      ],
      [
        "Type of treatment",
        "Тип обробки"
      ],
      [
        "Redrying process",
        "Процес повторного сушіння"
      ],
      [
        "Roofing color alone",
        "Лише колір покрівлі"
      ],
      [
        "The untreated plywood price",
        "Ціна необробленої фанери"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The investigation includes those conditions and processes, and must address fastener values as well as unit stresses.",
    "explanationUk": "Дослідження враховує ці умови й процеси та має охоплювати характеристики кріплень поряд із допустимими напруженнями."
  },
  {
    "section": "R803.2.2; Table R503.2.1.1(1)",
    "difficulty": "medium",
    "question": "For wood structural roof panels, which reference does R803.2.2 direct you to for allowable spans, besides APA E30?",
    "questionUk": "До якого джерела, крім APA E30, R803.2.2 відсилає для допустимих прольотів деревинних конструкційних плит даху?",
    "answers": [
      [
        "Table R503.2.1.1(1)",
        "Таблиця R503.2.1.1(1)"
      ],
      [
        "Table R803.1 only",
        "Лише таблиця R803.1"
      ],
      [
        "Table R702.1(2)",
        "Таблиця R702.1(2)"
      ],
      [
        "Table R405.1",
        "Таблиця R405.1"
      ],
      [
        "Table R301.5 only",
        "Лише таблиця R301.5"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Panel spans are governed by Table R503.2.1.1(1) or APA E30; lumber sheathing has a different table.",
    "explanationUk": "Прольоти плит визначають за таблицею R503.2.1.1(1) або APA E30; дощата обшивка має іншу таблицю."
  },
  {
    "section": "R803.2.3",
    "difficulty": "medium",
    "question": "Under R803.2.3, which table governs roof-panel installation on cold-formed steel framing?",
    "questionUk": "За R803.2.3 яка таблиця регулює монтаж плитної обшивки даху на холодногнутому сталевому каркасі?",
    "answers": [
      [
        "Table R804.3",
        "Таблиця R804.3"
      ],
      [
        "Table R602.3(1) only",
        "Лише таблиця R602.3(1)"
      ],
      [
        "Table R803.1",
        "Таблиця R803.1"
      ],
      [
        "Table R702.3.5",
        "Таблиця R702.3.5"
      ],
      [
        "Table R507.5",
        "Таблиця R507.5"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The installation clause refers to Table R804.3 for cold-formed steel; wood framing has the separate Table R602.3(1)/APA E30 route.",
    "explanationUk": "Положення монтажу відсилає до таблиці R804.3 для холодногнутої сталі; для деревини є окремий шлях за R602.3(1)/APA E30."
  },
  {
    "section": "R803.2.3",
    "difficulty": "easy",
    "question": "For structural-panel sheathing following Table R503.2.1.1(1), what maximum gable-end cantilever is allowed without supporting overhang framing?",
    "questionUk": "Який найбільший консольний виступ плитної обшивки за таблицею R503.2.1.1(1) дозволений за фронтонною стіною без опорного каркаса звису?",
    "answers": [
      [
        "9 inches",
        "9 дюймів"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "16 inches",
        "16 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Without gable overhang framing support, the cantilever limit is 9 inches.",
    "explanationUk": "Без підтримання каркасом фронтонного звису межа консолі становить 9 дюймів."
  },
  {
    "section": "R803.2.3",
    "difficulty": "exam",
    "question": "A Table R503.2.1.1(1) roof panel projects 12 inches beyond the gable endwall. What is needed to use the stated overhang exception?",
    "questionUk": "Плита даху за таблицею R503.2.1.1(1) виступає на 12 дюймів за фронтонну стіну. Що потрібне для застосування зазначеного винятку щодо звису?",
    "answers": [
      [
        "Support from gable overhang framing",
        "Підтримання каркасом фронтонного звису"
      ],
      [
        "Only painting the underside",
        "Лише фарбування нижнього боку"
      ],
      [
        "Only using an Exposure 1 label",
        "Лише маркування Exposure 1"
      ],
      [
        "Only increasing shingle nail length",
        "Лише збільшення довжини покрівельних цвяхів"
      ],
      [
        "Only staggering the neighboring panel joints",
        "Лише зміщення стиків сусідніх плит"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A projection beyond 9 inches needs supporting gable-overhang framing under this provision; these other measures do not supply that support.",
    "explanationUk": "Виступ понад 9 дюймів за цим положенням потребує опорного каркаса фронтонного звису; інші перелічені заходи такої опори не дають."
  }
];
export const intakeVerified69 = verifiedBatch(813, "Roofing", "Roof Framing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/CRC2019P3/chapter-8-roof-ceiling-construction", seeds, "intake-series-67-72", true);

