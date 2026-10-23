import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";

const seeds: VerifiedSeed[] = [
  {
    "section": "R602.7.1",
    "difficulty": "medium",
    "question": "A single-member header is installed in a conventional 2×6 stud wall. Which flat-member arrangement meets R602.7.1?",
    "questionUk": "Одноелементну перемичку монтують у звичайній стіні зі стояків 2×6. Яке розташування пласких елементів відповідає R602.7.1?",
    "answers": [
      [
        "Flat nominal 2-inch members or wall plates at both top and bottom, at least as wide as the studs",
        "Пласкі елементи номінальною товщиною 2 дюйми або обв’язки зверху й знизу, не вужчі за стояки"
      ],
      [
        "A flat 2×4 only below the header",
        "Лише пласка дошка 2×4 під перемичкою"
      ],
      [
        "A flat member only above the header",
        "Плаский елемент лише зверху"
      ],
      [
        "One layer of wall sheathing instead of both flat members",
        "Один шар обшивки замість обох пласких елементів"
      ],
      [
        "Flat members narrower than the studs at both faces",
        "Пласкі елементи зверху й знизу, вужчі за стояки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Single-member headers require flat nominal 2-inch members or plates on top and bottom, no narrower than the wall studs.",
    "explanationUk": "Для одноелементної перемички зверху й знизу потрібні пласкі елементи номінальною товщиною 2 дюйми або обв’язки, не вужчі за стояки."
  },
  {
    "section": "R602.7.1",
    "difficulty": "easy",
    "question": "What is the prescribed on-center spacing of the face nails fastening the top and bottom flat members to a single-member header?",
    "questionUk": "Який крок цвяхів, забитих у пласть, передбачений для кріплення верхнього й нижнього пласких елементів до одноелементної перемички?",
    "answers": [
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "24 inches",
        "24 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The prescribed face nailing is at 12 inches on center.",
    "explanationUk": "Передбачено цвяхи з кроком 12 дюймів між осями."
  },
  {
    "section": "R602.7.1",
    "difficulty": "medium",
    "question": "Which specified fastener matches the face-nailing schedule for the flat members of a single-member header?",
    "questionUk": "Яке кріплення відповідає вказаній схемі прибивання пласких елементів одноелементної перемички?",
    "answers": [
      [
        "10d box nail, 3 inches × 0.128 inch",
        "Цвях 10d box, 3 × 0,128 дюйма"
      ],
      [
        "8d common nail, 2.5 inches × 0.131 inch",
        "Цвях 8d common, 2,5 × 0,131 дюйма"
      ],
      [
        "16d sinker nail, 3.25 inches × 0.148 inch",
        "Цвях 16d sinker, 3,25 × 0,148 дюйма"
      ],
      [
        "6d box nail, 2 inches × 0.099 inch",
        "Цвях 6d box, 2 × 0,099 дюйма"
      ],
      [
        "Roofing nail, 1 inch × 0.120 inch",
        "Покрівельний цвях, 1 × 0,120 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R602.7.1 specifies 10d box nails measuring 3 inches by 0.128 inch.",
    "explanationUk": "R602.7.1 указує цвяхи 10d box розміром 3 × 0,128 дюйма."
  },
  {
    "section": "R602.7.2",
    "difficulty": "medium",
    "question": "A post above delivers a concentrated load to a proposed rim-board header. What design approach is required?",
    "questionUk": "Стовп зверху передає зосереджене навантаження на перемичку з крайової дошки перекриття. Який підхід до розрахунку потрібен?",
    "answers": [
      [
        "Design in accordance with accepted engineering practice",
        "Розрахунок за прийнятою інженерною практикою"
      ],
      [
        "Use any uniform-load span without further analysis",
        "Будь-який табличний проліт для рівномірного навантаження без аналізу"
      ],
      [
        "Double the nail count and omit design",
        "Подвоїти цвяхи й не робити розрахунку"
      ],
      [
        "Treat the post load as zero",
        "Вважати навантаження від стовпа нульовим"
      ],
      [
        "Use the nonbearing flat-2×4 provision",
        "Застосувати правило пласкої 2×4 для ненесучої стіни"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Rim-board headers supporting concentrated loads must be designed in accordance with accepted engineering practice.",
    "explanationUk": "Перемички з крайової дошки, що сприймають зосереджені навантаження, потребують розрахунку за прийнятою інженерною практикою."
  },
  {
    "section": "R602.7.2",
    "difficulty": "medium",
    "question": "For a rim-board header, half the header span displaces three studs when evaluated using the maximum spacing permitted by Table R602.3(5). What minimum end support does R602.7.2 require?",
    "questionUk": "Для перемички з крайової дошки половина прольоту замінює три стояки за максимальним кроком таблиці R602.3(5). Яке мінімальне опирання на кінцях вимагає R602.7.2?",
    "answers": [
      [
        "Three full-height studs at each end",
        "По три повновисотні стояки на кожному кінці"
      ],
      [
        "Three short jack studs total",
        "Разом три короткі підперемичкові стояки"
      ],
      [
        "One full-height stud at each end",
        "По одному повновисотному стояку на кінці"
      ],
      [
        "Two full-height studs total",
        "Разом два повновисотні стояки"
      ],
      [
        "One full-height stud at one end only",
        "Один повновисотний стояк лише з одного кінця"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Each end needs at least the number of full-height studs displaced by half the span using the prescribed maximum stud spacing.",
    "explanationUk": "На кожному кінці потрібно не менше повновисотних стояків, ніж замінює половина прольоту за визначеним нормою максимальним кроком."
  },
  {
    "section": "R602.7.2",
    "difficulty": "easy",
    "question": "Which table does R602.7.2 identify for rim-board header size, material and span?",
    "questionUk": "На яку таблицю R602.7.2 посилається щодо розміру, матеріалу та прольоту перемички з крайової дошки?",
    "answers": [
      [
        "Table R602.7(1)",
        "Таблиця R602.7(1)"
      ],
      [
        "Table R403.4",
        "Таблиця R403.4"
      ],
      [
        "Table R502.3.3(1)",
        "Таблиця R502.3.3(1)"
      ],
      [
        "Table R802.5.2",
        "Таблиця R802.5.2"
      ],
      [
        "Table R602.3.2",
        "Таблиця R602.3.2"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R602.7.2 directs the user to Table R602.7(1) for these rim-board header properties.",
    "explanationUk": "Щодо цих параметрів перемички R602.7.2 направляє до таблиці R602.7(1)."
  },
  {
    "section": "R602.7.5",
    "difficulty": "exam",
    "question": "Which TWO end-support methods are recognized for headers by R602.7.5 when used in accordance with the applicable header table?",
    "questionUk": "Які ДВА способи опирання кінців перемички визнає R602.7.5 за умови виконання відповідної таблиці?",
    "answers": [
      [
        "One or more jack studs",
        "Один або кілька підперемичкових стояків"
      ],
      [
        "Approved framing anchors",
        "Схвалені каркасні опорні з’єднувачі"
      ],
      [
        "Loose shims without supporting studs",
        "Вільні підкладки без опорних стояків"
      ],
      [
        "End nails alone with no bearing or approved anchor",
        "Лише цвяхи в торець без опирання або схваленого з’єднувача"
      ],
      [
        "Unsupported wall sheathing edges",
        "Непідперті краї стінової обшивки"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The section allows jack studs or approved framing anchors in accordance with Table R602.7(1) or R602.7(2).",
    "explanationUk": "Розділ дозволяє підперемичкові стояки або схвалені опорні з’єднувачі згідно з таблицею R602.7(1) чи R602.7(2)."
  },
  {
    "section": "R602.7.5",
    "difficulty": "medium",
    "question": "What end-nailing connection is specified between the full-height stud adjacent to a header end and that header end?",
    "questionUk": "Яке торцеве прибивання передбачено між повновисотним стояком біля кінця перемички та цим кінцем?",
    "answers": [
      [
        "Four 16d nails, 3.5 inches × 0.135 inch",
        "Чотири цвяхи 16d, 3,5 × 0,135 дюйма"
      ],
      [
        "Two 8d nails, 2.5 inches × 0.131 inch",
        "Два цвяхи 8d, 2,5 × 0,131 дюйма"
      ],
      [
        "One 10d box nail",
        "Один цвях 10d box"
      ],
      [
        "Six roofing nails",
        "Шість покрівельних цвяхів"
      ],
      [
        "No connection if jack studs are present",
        "З’єднання не потрібне за наявності підперемичкових стояків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R602.7.5 specifies four 16d nails, 3.5 by 0.135 inch, into each header end from the adjacent full-height stud.",
    "explanationUk": "R602.7.5 передбачає по чотири цвяхи 16d розміром 3,5 × 0,135 дюйма в кожний кінець перемички з прилеглого повновисотного стояка."
  },
  {
    "section": "Table R602.7.5, Footnotes a and b",
    "difficulty": "exam",
    "question": "For an ordinary exterior wall at 115 mph or less, Exposure B, a 9-foot header has jack studs at both ends per Table R602.7(1). How many full-height studs are required at EACH end by Table R602.7.5?",
    "questionUk": "У звичайній зовнішній стіні за швидкості вітру до 115 миль/год включно, категорія B, перемичка прольотом 9 футів має підперемичкові стояки на обох кінцях за R602.7(1). Скільки повновисотних стояків потрібно НА КОЖНОМУ кінці за R602.7.5?",
    "answers": [
      [
        "Two",
        "Два"
      ],
      [
        "One",
        "Один"
      ],
      [
        "Three",
        "Три"
      ],
      [
        "Four",
        "Чотири"
      ],
      [
        "Five",
        "П’ять"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote a requires the next larger listed span: 10 feet. In the 115-mph-or-less Exposure B column, that row requires two at each end; footnote b's jack-stud condition is satisfied.",
    "explanationUk": "Примітка a вимагає наступний більший табличний проліт — 10 футів. У відповідній колонці потрібно по два стояки; умову примітки b щодо підперемичкових стояків виконано."
  },
  {
    "section": "Table R602.7.5, Footnote b",
    "difficulty": "exam",
    "question": "At 115 mph or less in Exposure B, an ordinary exterior-wall 6-foot header uses a permitted framing anchor instead of a jack stud at each end. What minimum full-height stud count applies at EACH end?",
    "questionUk": "За вітру до 115 миль/год включно, категорія B, у звичайній зовнішній стіні перемичку прольотом 6 футів підтримують дозволені з’єднувачі замість підперемичкових стояків. Який мінімум повновисотних стояків НА КОЖНОМУ кінці?",
    "answers": [
      [
        "Two, using the less-than-140-mph Exposure B column",
        "Два, за колонкою для менш як 140 миль/год і категорії B"
      ],
      [
        "One, using the reduced column regardless of support type",
        "Один, за зменшеною колонкою незалежно від опори"
      ],
      [
        "Zero because anchors replace all studs",
        "Нуль, бо з’єднувачі замінюють усі стояки"
      ],
      [
        "Three for every header span",
        "Три для будь-якого прольоту"
      ],
      [
        "Four because the span exceeds 4 feet",
        "Чотири, бо проліт перевищує 4 фути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote b disallows the reduced stud count when an anchor replaces a jack stud and directs use of the less-than-140-mph Exposure B requirements. The 6-foot row gives two.",
    "explanationUk": "Коли з’єднувач замінює підперемичковий стояк, примітка b направляє до колонки для менш як 140 миль/год і категорії B. Для 6 футів це два стояки."
  },
  {
    "section": "Table R602.7.3",
    "difficulty": "exam",
    "question": "Within Table R602.7.3's building assumptions, what maximum span is listed for a 9-inch-deep box header with wood structural panels on BOTH sides and a 28-foot house depth?",
    "questionUk": "За виконання умов таблиці R602.7.3 який максимальний проліт коробчастої перемички заввишки 9 дюймів з конструкційними деревними плитами З ОБОХ боків для глибини будинку 28 футів?",
    "answers": [
      [
        "5 ft",
        "5 футів"
      ],
      [
        "3 ft",
        "3 фути"
      ],
      [
        "4 ft",
        "4 фути"
      ],
      [
        "7 ft",
        "7 футів"
      ],
      [
        "8 ft",
        "8 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The both-sides, 9-inch-depth row and 28-foot house-depth column intersect at 5 feet. Figure R602.7.3 construction details also apply.",
    "explanationUk": "Перетин рядка для обшивки з обох боків і висоти 9 дюймів з колонкою глибини будинку 28 футів дає 5 футів. Також діють деталі рисунка R602.7.3."
  },
  {
    "section": "Table R602.7.3, Footnote a",
    "difficulty": "medium",
    "question": "Which proposed building falls outside the stated building assumptions of the box-header span table R602.7.3?",
    "questionUk": "Який із будинків виходить за наведені в примітці умови таблиці прольотів коробчастих перемичок R602.7.3?",
    "answers": [
      [
        "A three-story building",
        "Триповерховий будинок"
      ],
      [
        "A single-story building with a clear-span trussed roof",
        "Одноповерховий будинок із фермовим дахом без проміжного опирання"
      ],
      [
        "A two-story building with floor and roof supported by interior bearing walls",
        "Двоповерховий будинок, де перекриття й дах підтримують внутрішні несучі стіни"
      ],
      [
        "A qualifying single-story building using panels on both sides",
        "Відповідний одноповерховий будинок з обшивкою перемички з обох боків"
      ],
      [
        "A qualifying two-story building using a 15-inch-deep box header",
        "Відповідний двоповерховий будинок із коробчастою перемичкою заввишки 15 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote a bases the spans on a single story with clear-span trussed roof or two stories with floor and roof supported by interior bearing walls; it does not cover three stories.",
    "explanationUk": "Примітка a обмежує таблицю одним поверхом із безпроміжними фермами або двома поверхами з опиранням перекриття й даху на внутрішні несучі стіни; три поверхи не охоплено."
  }
];

export const intakeVerified98 = verifiedBatch(1161, "Carpentry", "Headers", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-97-102", true, "2026-10-22");

