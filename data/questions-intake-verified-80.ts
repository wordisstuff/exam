import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R505.3.2",
    "difficulty": "medium",
    "question": "For a prescriptive cold-formed steel floor, what minimum bearing-length pair applies at exterior and interior wall supports?",
    "questionUk": "Яка пара мінімальних довжин опори на зовнішні й внутрішні стіни діє для приписаного холодногнутого сталевого перекриття?",
    "answers": [
      [
        "1½ inches exterior; 3½ inches interior",
        "1½ дюйма зовні; 3½ дюйма всередині"
      ],
      [
        "1½ inches at both",
        "1½ дюйма на обох"
      ],
      [
        "3½ inches exterior; 1½ inches interior",
        "3½ дюйма зовні; 1½ дюйма всередині"
      ],
      [
        "2 inches at both",
        "2 дюйми на обох"
      ],
      [
        "3 inches at both",
        "3 дюйми на обох"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R505.3.2 requires at least 1½ inches at exterior wall supports and 3½ inches at interior wall supports.",
    "explanationUk": "R505.3.2 вимагає щонайменше 1½ дюйма на зовнішніх і 3½ дюйма на внутрішніх опорах стін."
  },
  {
    "section": "R505.3.2",
    "difficulty": "medium",
    "question": "For continuous cold-formed steel floor joists, how close to midspan must the interior bearing support be located?",
    "questionUk": "Наскільки близько до середини прольоту має бути внутрішня опора безперервних холодногнутих сталевих балок перекриття?",
    "answers": [
      [
        "Within 2 feet of midspan",
        "У межах 2 футів від середини"
      ],
      [
        "Within 4 feet of midspan",
        "У межах 4 футів від середини"
      ],
      [
        "Within 6 feet of midspan",
        "У межах 6 футів від середини"
      ],
      [
        "At any point in the middle half",
        "Будь-де в середній половині"
      ],
      [
        "At any position if the joist is continuous",
        "Будь-де за безперервної балки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The support is within 2 feet of midspan and each individual span must still meet the span table.",
    "explanationUk": "Опора розташована в межах 2 футів від середини, і кожен окремий проліт також має відповідати таблиці."
  },
  {
    "section": "Table R505.3.2, footnote b",
    "difficulty": "easy",
    "question": "What floor dead-load assumption is stated for the cold-formed steel joist span table?",
    "questionUk": "Яке постійне навантаження підлоги прийняте в таблиці прольотів холодногнутих сталевих балок?",
    "answers": [
      [
        "10 psf",
        "10 фунтів на квадратний фут"
      ],
      [
        "5 psf",
        "5 фунтів на квадратний фут"
      ],
      [
        "15 psf",
        "15 фунтів на квадратний фут"
      ],
      [
        "20 psf",
        "20 фунтів на квадратний фут"
      ],
      [
        "30 psf",
        "30 фунтів на квадратний фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table's floor dead-load assumption is 10 psf, not the selected live-load column value.",
    "explanationUk": "Постійне навантаження таблиці — 10 psf, а не значення вибраного стовпця тимчасового навантаження."
  },
  {
    "section": "Table R505.3.2, footnote a",
    "difficulty": "exam",
    "question": "For a 240-inch span, which live-load and total-load deflection-limit pair follows the table footnote?",
    "questionUk": "Для прольоту 240 дюймів яка пара меж прогину від тимчасового й повного навантаження випливає з примітки таблиці?",
    "answers": [
      [
        "½ inch live; 1 inch total",
        "½ дюйма тимчасове; 1 дюйм повне"
      ],
      [
        "1 inch live; ½ inch total",
        "1 дюйм тимчасове; ½ дюйма повне"
      ],
      [
        "⅔ inch live; 1 inch total",
        "⅔ дюйма тимчасове; 1 дюйм повне"
      ],
      [
        "1 inch for both",
        "1 дюйм для обох"
      ],
      [
        "½ inch for both",
        "½ дюйма для обох"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The criteria are L/480 live and L/240 total: 240÷480=½ inch; 240÷240=1 inch.",
    "explanationUk": "Критерії — L/480 для тимчасового й L/240 для повного: 240÷480=½ дюйма; 240÷240=1 дюйм."
  },
  {
    "section": "Table R505.3.2, 550S162-54 row; footnotes a–f",
    "difficulty": "exam",
    "question": "Using the span table within its scope and footnote conditions, what maximum clear span is listed for a 550S162-54 joist at 16 inches on center and 40-psf live load?",
    "questionUk": "За таблицею прольотів у межах її застосування й умов приміток який найбільший чистий проліт балки 550S162-54 з кроком 16 дюймів за тимчасового навантаження 40 psf?",
    "answers": [
      [
        "11 feet 3 inches",
        "11 футів 3 дюйми"
      ],
      [
        "10 feet 7 inches",
        "10 футів 7 дюймів"
      ],
      [
        "9 feet 10 inches",
        "9 футів 10 дюймів"
      ],
      [
        "12 feet 4 inches",
        "12 футів 4 дюйми"
      ],
      [
        "13 feet 7 inches",
        "13 футів 7 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Read the 550S162-54 row under 40 psf and 16-inch spacing: 11 feet 3 inches clear span.",
    "explanationUk": "Читаємо рядок 550S162-54 у стовпці 40 psf та кроку 16 дюймів: чистий проліт 11 футів 3 дюйми."
  },
  {
    "section": "Table R505.3.2, footnote f",
    "difficulty": "exam",
    "question": "Which TWO continuous joist designations are explicitly excluded from this span table? Select TWO.",
    "questionUk": "Які ДВА позначення безперервних балок прямо виключені з цієї таблиці прольотів? Оберіть ДВА.",
    "answers": [
      [
        "800S162-33",
        "Балка 800S162-33"
      ],
      [
        "1000S162-43",
        "Балка 1000S162-43"
      ],
      [
        "550S162-54",
        "Балка 550S162-54"
      ],
      [
        "1200S162-68",
        "Балка 1200S162-68"
      ],
      [
        "1000S162-68",
        "Балка 1000S162-68"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Footnote f excludes 800S162-33 and 1000S162-43 continuous joist members; it is not an exclusion of every single-span use.",
    "explanationUk": "Примітка f виключає безперервні балки 800S162-33 і 1000S162-43; це не виключення кожного однопролітного застосування."
  },
  {
    "section": "Table R505.3.2, footnote e",
    "difficulty": "medium",
    "question": "A joist uses the table's 54-mil thickness. What minimum steel grade must accompany that thickness?",
    "questionUk": "Балка використовує табличну товщину 54 mil. Яка мінімальна марка міцності сталі потрібна з цією товщиною?",
    "answers": [
      [
        "Grade 50 ksi",
        "Марка 50 ksi"
      ],
      [
        "Grade 25 ksi",
        "Марка 25 ksi"
      ],
      [
        "Grade 30 ksi",
        "Марка 30 ksi"
      ],
      [
        "Grade 33 ksi",
        "Марка 33 ksi"
      ],
      [
        "Grade 40 ksi",
        "Марка 40 ksi"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table requires minimum Grade 50 ksi for 54- and 68-mil thicknesses; 33 ksi applies to 33/43 mil.",
    "explanationUk": "Таблиця вимагає щонайменше Grade 50 ksi для 54 і 68 mil; 33 ksi стосуються 33/43 mil."
  },
  {
    "section": "Table R505.3.2, footnote d",
    "difficulty": "medium",
    "question": "Where does the span-table footnote require bearing stiffeners?",
    "questionUk": "Де примітка таблиці прольотів вимагає ребер жорсткості опор?",
    "answers": [
      [
        "At all support points and concentrated loads",
        "На всіх опорах і в місцях зосереджених навантажень"
      ],
      [
        "Only at the first exterior wall",
        "Лише біля першої зовнішньої стіни"
      ],
      [
        "Only at openings wider than 6 feet",
        "Лише в отворах ширше 6 футів"
      ],
      [
        "Only where finish flooring is omitted",
        "Лише без чистової підлоги"
      ],
      [
        "Only at the center of every span",
        "Лише посередині кожного прольоту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote d requires bearing stiffeners at all support points and concentrated loads.",
    "explanationUk": "Примітка d вимагає ребер жорсткості на всіх опорах і в місцях зосереджених навантажень."
  },
  {
    "section": "R505.3.3.2",
    "difficulty": "medium",
    "question": "A cold-formed steel floor joist spans 13 feet. What additional flange support is triggered by the greater-than-12-foot threshold?",
    "questionUk": "Холодногнута сталева балка перекриття має проліт 13 футів. Яку додаткову опору полиці зумовлює межа понад 12 футів?",
    "answers": [
      [
        "Lateral bracing of the bottom flange by a listed method",
        "Бокове розкріплення нижньої полиці зазначеним способом"
      ],
      [
        "Removing the floor sheathing",
        "Видалення настилу перекриття"
      ],
      [
        "Bracing only the outer wall's finish trim",
        "Розкріплення лише оздоблення зовнішньої стіни"
      ],
      [
        "Replacing every bearing stiffener with insulation",
        "Заміна всіх опорних ребер утеплювачем"
      ],
      [
        "No additional flange bracing under this threshold",
        "Жодне додаткове розкріплення за цією межею"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Spans exceeding 12 feet require bottom-flange lateral bracing by one of the specified methods.",
    "explanationUk": "Прольоти понад 12 футів потребують бокового розкріплення нижньої полиці одним із зазначених способів."
  },
  {
    "section": "R505.3.3.2, item 2",
    "difficulty": "exam",
    "question": "Which dimensions and maximum spacing match the continuous steel-strap bottom-flange bracing option?",
    "questionUk": "Які розміри та найбільший крок відповідають варіанту розкріплення нижніх полиць безперервною сталевою смугою?",
    "answers": [
      [
        "At least 1½ inches wide and 33 mil thick; no more than 12 feet on center",
        "Щонайменше 1½ дюйма завширшки й 33 mil завтовшки; крок не більш як 12 футів"
      ],
      [
        "At least 1 inch wide and 20 mil thick; 16 feet on center",
        "Щонайменше 1 дюйм і 20 mil; крок 16 футів"
      ],
      [
        "At least 1½ inches wide and 20 mil thick; 12 feet on center",
        "Щонайменше 1½ дюйма і 20 mil; крок 12 футів"
      ],
      [
        "At least 1 inch wide and 33 mil thick; 12 feet on center",
        "Щонайменше 1 дюйм і 33 mil; крок 12 футів"
      ],
      [
        "At least 1½ inches wide and 33 mil thick; 16 feet on center",
        "Щонайменше 1½ дюйма і 33 mil; крок 16 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The strap option specifies minimum 1½-inch width, 33-mil thickness and maximum 12-foot spacing, with its required blocking and fastening.",
    "explanationUk": "Смуговий варіант установлює мінімум 1½ дюйма ширини, 33 mil товщини й максимум 12 футів кроку з потрібними перемичками та кріпленнями."
  },
  {
    "section": "R505.3.3.2, item 2",
    "difficulty": "medium",
    "question": "For that continuous steel strap, which No. 8 screw counts apply at each joist and at blocking/end attachments?",
    "questionUk": "Для цієї безперервної сталевої смуги яка кількість шурупів No. 8 потрібна біля кожної балки та на перемичках/кінцевих кріпленнях?",
    "answers": [
      [
        "One at each joist; two at blocking and each strap end",
        "Один біля кожної балки; два на перемичках і кожному кінці смуги"
      ],
      [
        "Two at each joist; one at blocking and each end",
        "Два біля кожної балки; один на перемичках і кожному кінці"
      ],
      [
        "One at every location",
        "Один у кожному місці"
      ],
      [
        "Three at every location",
        "Три в кожному місці"
      ],
      [
        "One at each joist; none at strap ends",
        "Один біля кожної балки; жодного на кінцях"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The strap uses one No. 8 screw at each bottom flange, two at blocking, and two at each end.",
    "explanationUk": "Для смуги потрібний один No. 8 біля кожної нижньої полиці, два на перемичках і два на кожному кінці."
  },
  {
    "section": "R505.3.3.3",
    "difficulty": "exam",
    "question": "Which TWO interior-bearing blocking statements are correct? Select TWO.",
    "questionUk": "Які ДВА твердження щодо перемичок на внутрішніх опорах правильні? Оберіть ДВА.",
    "answers": [
      [
        "Continuous back-to-back joists do not require blocking there",
        "Парні безперервні балки спинками одна до одної не потребують там перемичок"
      ],
      [
        "Single continuous joists require blocking between every other joist there",
        "Одиночні безперервні балки потребують там перемичок між кожною другою балкою"
      ],
      [
        "All continuous joists are exempt from blocking everywhere",
        "Усі безперервні балки звільнені від перемичок усюди"
      ],
      [
        "Single continuous joists require blocking only at every fifth joist",
        "Одиночні безперервні балки потребують перемичок лише біля кожної п’ятої"
      ],
      [
        "This rule requires wood-only blocking",
        "Це правило вимагає лише дерев’яні перемички"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The exception is for continuous back-to-back joists at bearing supports; single continuous joists have the every-other-joist blocking requirement.",
    "explanationUk": "Виняток діє для парних безперервних балок спинками одна до одної на опорах; одиночні безперервні балки мають вимогу перемичок між кожною другою."
  }
];
export const intakeVerified80 = verifiedBatch(945, "Carpentry", "Floor Framing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018P7/chapter-5-floors", seeds, "intake-series-79-84", true);

