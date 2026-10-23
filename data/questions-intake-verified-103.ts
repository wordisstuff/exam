import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Table R503.2.1.1(1)",
    "difficulty": "medium",
    "question": "For sheathing rated 32/16 used as a subfloor, what listed maximum joist spacing applies without a qualifying finish-floor or concrete-topping span extension?",
    "questionUk": "Який табличний максимальний крок балок для чорнової підлоги з плит рейтингом 32/16 без збільшення прольоту завдяки належній чистовій підлозі чи бетонному шару?",
    "answers": [
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "28 inches",
        "28 дюймів"
      ],
      [
        "32 inches",
        "32 дюйми"
      ],
      [
        "48 inches",
        "48 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The subfloor column gives 16 inches for 32/16 sheathing. The roof-span number and special floor-span footnotes must not be substituted for that ordinary floor value.",
    "explanationUk": "Колонка чорнової підлоги дає для 32/16 крок 16 дюймів. Число для покрівлі та спеціальні винятки не замінюють звичайного значення для підлоги."
  },
  {
    "section": "Table R503.2.1.1(1)",
    "difficulty": "medium",
    "question": "What maximum subfloor span is listed for 48/24 sheathing when all table conditions are met?",
    "questionUk": "Який максимальний проліт чорнової підлоги наведено для обшивки 48/24 за виконання всіх умов таблиці?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "20 inches",
        "20 дюймів"
      ],
      [
        "36 inches",
        "36 дюймів"
      ],
      [
        "48 inches",
        "48 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 48/24 sheathing row lists 24 inches in the subfloor span column; 48 inches refers to a roof application.",
    "explanationUk": "У рядку обшивки 48/24 колонка чорнової підлоги вказує 24 дюйми; 48 дюймів стосується покрівлі."
  },
  {
    "section": "Table R503.2.1.1(1), combination subfloor underlayment",
    "difficulty": "exam",
    "question": "In the combination subfloor-underlayment group, which nominal panel thicknesses are listed for a 24-o.c. rating?",
    "questionUk": "Які номінальні товщини плит наведено для рейтингу 24 o.c. у групі суміщеної чорнової підлоги та підоснови?",
    "answers": [
      [
        "23/32 inch or 3/4 inch",
        "23/32 або 3/4 дюйма"
      ],
      [
        "3/8 inch only",
        "Лише 3/8 дюйма"
      ],
      [
        "7/16 inch only",
        "Лише 7/16 дюйма"
      ],
      [
        "15/32 inch or 1/2 inch",
        "15/32 або 1/2 дюйма"
      ],
      [
        "19/32 inch or 5/8 inch",
        "19/32 або 5/8 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 24-o.c. combination-panel row specifies 23/32-inch or 3/4-inch nominal thickness.",
    "explanationUk": "У рядку суміщених плит рейтингу 24 o.c. указано номінальну товщину 23/32 або 3/4 дюйма."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote k",
    "difficulty": "exam",
    "question": "At its maximum span, what special total uniform-load limit applies to combination subfloor-underlayment panels rated 48 o.c.?",
    "questionUk": "Яке спеціальне обмеження повного рівномірного навантаження діє за максимального прольоту для суміщених плит підлоги рейтингу 48 o.c.?",
    "answers": [
      [
        "65 psf total uniform load",
        "65 фунтів/кв. фут повного рівномірного навантаження"
      ],
      [
        "100 psf live load with no total-load limit",
        "100 фунтів/кв. фут тимчасового без обмеження повного"
      ],
      [
        "150 psf total uniform load",
        "150 фунтів/кв. фут повного рівномірного навантаження"
      ],
      [
        "40 psf total uniform load",
        "40 фунтів/кв. фут повного рівномірного навантаження"
      ],
      [
        "No load limitation",
        "Без обмеження навантаження"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote k limits 48-o.c. combination panels to 65 psf total uniform load at maximum span, rather than the general 100-psf live-load statement.",
    "explanationUk": "Примітка k обмежує суміщені плити 48 o.c. повним рівномірним навантаженням 65 фунтів/кв. фут за максимального прольоту."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote j",
    "difficulty": "exam",
    "question": "No listed edge-support exception is used for structural-panel subflooring. Which TWO treatments satisfy the unsupported-edge requirement?",
    "questionUk": "Для плит чорнової підлоги не застосовано жодного наведеного винятку щодо країв. Які ДВА способи відповідають вимозі до непідпертих країв?",
    "answers": [
      [
        "Tongue-and-groove joints",
        "Шпунтові з’єднання"
      ],
      [
        "Blocking beneath the edges",
        "Опорні перемички під краями"
      ],
      [
        "Loose butt joints without support",
        "Вільні стики впритул без опори"
      ],
      [
        "Paint over the joint",
        "Фарба поверх стику"
      ],
      [
        "Roofing felt alone",
        "Лише покрівельний картон"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Unsupported subfloor edges must have tongue-and-groove joints or blocking unless a listed overlay or finish-floor exception applies.",
    "explanationUk": "Непідперті краї чорнової підлоги мають бути шпунтованими або підтриманими перемичками, якщо не діє перелічений виняток."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote j",
    "difficulty": "medium",
    "question": "Which wood panel-type underlayment thickness is the listed minimum for the subfloor unsupported-edge exception?",
    "questionUk": "Яка мінімальна номінальна товщина деревної плитної підоснови наведена у винятку щодо непідпертих країв чорнової підлоги?",
    "answers": [
      [
        "1/4 inch",
        "1/4 дюйма"
      ],
      [
        "1/16 inch",
        "1/16 дюйма"
      ],
      [
        "1/8 inch",
        "1/8 дюйма"
      ],
      [
        "3/16 inch",
        "3/16 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception lists minimum nominal 1/4-inch-thick wood panel-type underlayment; it does not waive other table conditions.",
    "explanationUk": "Виняток передбачає деревну плитну підоснову номінальною товщиною не менше 1/4 дюйма; інші умови таблиці зберігаються."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote j",
    "difficulty": "medium",
    "question": "Fiber-cement underlayment is used for the subfloor edge-support exception. What minimum offset is required for its end and edge joints?",
    "questionUk": "Для винятку щодо опори країв чорнової підлоги використовують фіброцементну підоснову. Який мінімальний зсув її торцевих і крайових стиків потрібен?",
    "answers": [
      [
        "2 inches",
        "2 дюйми"
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
        "1 inch",
        "1 дюйм"
      ],
      [
        "12 inches",
        "12 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The fiber-cement option requires end and edge joints offset at least 2 inches, and the material must meet ASTM C1288 or ISO 8336 Category C.",
    "explanationUk": "Для фіброцементного варіанта стики зміщують щонайменше на 2 дюйми; матеріал має відповідати ASTM C1288 або ISO 8336, категорія C."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote j",
    "difficulty": "medium",
    "question": "For the subfloor sheathing edge-support exception, what thickness of lightweight concrete or approved cellular concrete is listed?",
    "questionUk": "Яку товщину легкого або схваленого ніздрюватого бетону наведено для винятку щодо опори країв плит чорнової підлоги?",
    "answers": [
      [
        "1.5 inches",
        "1,5 дюйма"
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
        "4 inches",
        "4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote j lists 1.5 inches of lightweight concrete or approved cellular concrete over the subfloor among the edge-support alternatives.",
    "explanationUk": "Примітка j серед альтернатив опорі країв називає шар легкого або схваленого ніздрюватого бетону 1,5 дюйма над чорновою підлогою."
  },
  {
    "section": "Table R503.2.1.1(2)",
    "difficulty": "exam",
    "question": "Sanded exterior-type plywood combination subfloor underlayment is Species Group 1 and spans joists at 24 inches. What minimum listed nominal thickness applies, with the table footnotes satisfied?",
    "questionUk": "Суміщена підоснова з шліфованої вологостійкої фанери групи порід 1 спирається на балки з кроком 24 дюйми. Яка мінімальна таблична номінальна товщина за виконання приміток?",
    "answers": [
      [
        "3/4 inch",
        "3/4 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "5/8 inch",
        "5/8 дюйма"
      ],
      [
        "7/8 inch",
        "7/8 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "At Species Group 1 and 24-inch joist spacing, the sanded-plywood table lists 3/4 inch.",
    "explanationUk": "Для групи порід 1 і кроку балок 24 дюйми таблиця шліфованої фанери вказує 3/4 дюйма."
  },
  {
    "section": "Table R503.2.1.1(2)",
    "difficulty": "exam",
    "question": "For sanded exterior-type plywood combination subfloor underlayment in Species Group 4 at 20-inch joist spacing, what nominal thickness is listed?",
    "questionUk": "Яку номінальну товщину суміщеної підоснови зі шліфованої вологостійкої фанери групи порід 4 наведено за кроку балок 20 дюймів?",
    "answers": [
      [
        "7/8 inch",
        "7/8 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "5/8 inch",
        "5/8 дюйма"
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
    "explanation": "The Species Group 4 row and 20-inch spacing column intersect at 7/8 inch.",
    "explanationUk": "Перетин рядка групи порід 4 з колонкою кроку 20 дюймів дає 7/8 дюйма."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote b",
    "difficulty": "exam",
    "question": "Which TWO panel-layout conditions underlie the structural-panel span table?",
    "questionUk": "Які ДВІ умови розкладки плит покладено в основу таблиці прольотів конструкційних деревних плит?",
    "answers": [
      [
        "Panels continuous over two or more spans",
        "Плити безперервні над двома або більше прольотами"
      ],
      [
        "Long dimension or strength axis perpendicular to supports",
        "Довгий напрямок або вісь міцності перпендикулярні опорам"
      ],
      [
        "Every panel spans only one space between supports",
        "Кожна плита перекриває лише один проміжок"
      ],
      [
        "Strength axis parallel to supports in every case",
        "Вісь міцності завжди паралельна опорам"
      ],
      [
        "All end joints may hang free without an applicable detail",
        "Усі торцеві стики можна лишати без опори й належного вузла"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Footnote b assumes continuity over at least two spans and the long dimension/strength axis perpendicular to supports.",
    "explanationUk": "Примітка b виходить із безперервності щонайменше над двома прольотами та перпендикулярності довгого напрямку/осі міцності до опор."
  },
  {
    "section": "Table R503.2.1.1(1), Footnote c",
    "difficulty": "easy",
    "question": "What minimum panel width is within the stated applicability of Table R503.2.1.1(1)?",
    "questionUk": "Яка мінімальна ширина плити відповідає зазначеній сфері застосування таблиці R503.2.1.1(1)?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
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
    "explanation": "Footnote c applies the table to panels 24 inches wide or wider.",
    "explanationUk": "Примітка c поширює таблицю на плити завширшки 24 дюйми або більше."
  }
];
export const intakeVerified103 = verifiedBatch(1221, "Carpentry", "Floors", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-103-108", true, "2026-10-22");

