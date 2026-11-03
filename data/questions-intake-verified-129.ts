import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R607.4.3",
    "question": "Which maximum interior glass-unit panel areas apply to standard and thin units, respectively?",
    "questionUk": "Які максимальні площі внутрішніх панелей склоблоків діють відповідно для стандартних і тонких блоків?",
    "answers": [
      [
        "250 and 150 square feet",
        "250 та 150 квадратних футів"
      ],
      [
        "150 and 250 square feet",
        "150 та 250 квадратних футів"
      ],
      [
        "144 and 85 square feet",
        "144 та 85 квадратних футів"
      ],
      [
        "100 and 100 square feet",
        "100 та 100 квадратних футів"
      ],
      [
        "300 and 200 square feet",
        "300 та 200 квадратних футів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Interior standard-unit panels are limited to 250 square feet and thin-unit panels to 150; exterior limits are different.",
    "explanationUk": "Внутрішні стандартні панелі обмежені 250 квадратними футами, тонкі — 150; зовнішні межі інші."
  },
  {
    "section": "R607.4.3",
    "question": "An interior glass-unit panel is 26 feet wide between structural supports, with height and area otherwise compliant. What does the dimensional limit require?",
    "questionUk": "Внутрішня панель склоблоків має ширину 26 футів між опорами; висота й площа відповідають нормам. Що вимагає габаритне обмеження?",
    "answers": [
      [
        "Reduce unsupported width to no more than 25 feet",
        "Зменшити ширину між опорами до максимуму 25 футів"
      ],
      [
        "Accept it because area alone controls",
        "Прийняти, бо важлива лише площа"
      ],
      [
        "Accept widths up to 30 feet",
        "Дозволити ширину до 30 футів"
      ],
      [
        "Check only the mortar color",
        "Перевірити лише колір розчину"
      ],
      [
        "Accept any width below 40 feet",
        "Дозволити будь-яку ширину нижче 40 футів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R607.4.3 sets separate maxima of 25 feet width and 20 feet height between supports, in addition to area limits.",
    "explanationUk": "R607.4.3 задає окремі максимуми 25 футів ширини й 20 футів висоти між опорами додатково до площі."
  },
  {
    "section": "R607.4.4",
    "question": "Where does a curved glass-unit masonry panel require additional structural supports?",
    "questionUk": "Де криволінійна панель склоблоків потребує додаткових конструкційних опор?",
    "answers": [
      [
        "At curved-to-straight junctions and inflection points in multiple curves",
        "На переходах кривої в пряму й у точках перегину складних кривих"
      ],
      [
        "Only at the center of every block",
        "Лише посередині кожного блока"
      ],
      [
        "Only where paint changes color",
        "Лише при зміні кольору фарби"
      ],
      [
        "Only at the lowest mortar joint",
        "Лише в найнижчому шві"
      ],
      [
        "Nowhere if the panel is curved",
        "Ніде, якщо панель вигнута"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R607.4.4 adds support at the specified geometric transitions while retaining the applicable panel requirements.",
    "explanationUk": "R607.4.4 додає опори на зазначених геометричних переходах зі збереженням застосовних вимог до панелей."
  },
  {
    "section": "R607.9",
    "question": "What maximum vertical spacing applies to horizontal joint reinforcement in glass-unit masonry panels?",
    "questionUk": "Який найбільший вертикальний крок горизонтального армування швів панелей склоблоків?",
    "answers": [
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "20 inches",
        "20 дюймів"
      ],
      [
        "24 inches",
        "24 дюйми"
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
    "difficulty": "medium",
    "explanation": "Horizontal reinforcement is placed in mortar bed joints at no more than 16 inches on center.",
    "explanationUk": "Горизонтальне армування розміщують у горизонтальних швах із кроком осей не більше 16 дюймів."
  },
  {
    "section": "R607.9",
    "question": "What minimum splice lap applies to longitudinal wires in glass-unit panel reinforcement?",
    "questionUk": "Який мінімальний напуск поздовжніх дротів армування панелей склоблоків?",
    "answers": [
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "4 inches",
        "4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R607.9 requires longitudinal wire overlaps of at least 6 inches at splices.",
    "explanationUk": "R607.9 вимагає напуск поздовжніх дротів у стиках щонайменше 6 дюймів."
  },
  {
    "section": "R607.9",
    "question": "Which minimum wire arrangement is specified for glass-unit masonry joint reinforcement?",
    "questionUk": "Яке мінімальне розташування дротів задано для армування швів мурування зі склоблоків?",
    "answers": [
      [
        "Two parallel longitudinal wires at least W1.7, with welded cross wires at least W1.7",
        "Два паралельні поздовжні дроти від W1.7 зі звареними поперечними дротами від W1.7"
      ],
      [
        "One longitudinal W0.5 wire without cross wires",
        "Один поздовжній W0.5 без поперечних"
      ],
      [
        "Two longitudinal W0.5 wires with unwelded cross wires",
        "Два поздовжні W0.5 з незвареними поперечними"
      ],
      [
        "Only loose tie wire",
        "Лише вільний в’язальний дріт"
      ],
      [
        "One cross wire per panel without longitudinal wires",
        "Один поперечний дріт на панель без поздовжніх"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "At least two parallel W1.7 longitudinal wires and welded W1.7 cross wires are required.",
    "explanationUk": "Потрібні щонайменше два паралельні поздовжні дроти W1.7 та зварені поперечні W1.7."
  },
  {
    "section": "R607.9",
    "question": "Where must joint reinforcement be placed relative to openings within a glass-unit panel?",
    "questionUk": "Де потрібно розміщувати армування швів відносно отворів у панелі склоблоків?",
    "answers": [
      [
        "In bed joints immediately above and below the openings",
        "У горизонтальних швах безпосередньо над і під отворами"
      ],
      [
        "Only at the panel's top",
        "Лише вгорі панелі"
      ],
      [
        "Only at the panel's bottom",
        "Лише внизу панелі"
      ],
      [
        "Only three courses above openings",
        "Лише за три ряди над отворами"
      ],
      [
        "Only within vertical joints at the corners",
        "Лише у вертикальних кутових швах"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R607.9 specifies reinforcement immediately below and above panel openings.",
    "explanationUk": "R607.9 задає армування безпосередньо під і над отворами панелі."
  },
  {
    "section": "R607.10",
    "question": "Select TWO required practices when bedding glass masonry units.",
    "questionUk": "Оберіть ДВІ обов’язкові практики укладання склоблоків.",
    "answers": [
      [
        "Fill head and bed joints solidly",
        "Суцільно заповнювати вертикальні й горизонтальні шви"
      ],
      [
        "Do not furrow the mortar",
        "Не робити борозен у розчині"
      ],
      [
        "Leave a continuous empty groove through the bed",
        "Залишати суцільну порожню борозну в постелі"
      ],
      [
        "Fill only every second head joint",
        "Заповнювати лише кожен другий вертикальний шов"
      ],
      [
        "Use dry contact without mortar",
        "Укладати насухо без розчину"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "difficulty": "medium",
    "explanation": "R607.10 requires solidly filled joints and prohibits furrowing the mortar.",
    "explanationUk": "R607.10 вимагає суцільного заповнення швів і забороняє борозни в розчині."
  },
  {
    "section": "R607.10",
    "question": "Before tolerances are applied, what nominal head- and bed-joint thickness applies to ordinary nonradial glass-unit panels?",
    "questionUk": "Яка номінальна товщина вертикальних і горизонтальних швів звичайних некриволінійних панелей склоблоків до застосування допусків?",
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
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "3/4 inch",
        "3/4 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The nominal head and bed joints are 1/4 inch; radial-panel vertical joints and placement tolerances have separate provisions.",
    "explanationUk": "Номінальні вертикальні й горизонтальні шви — 1/4 дюйма; вертикальні шви радіальних панелей і допуски задані окремо."
  },
  {
    "section": "R607.10",
    "question": "Which vertical-joint thickness range is expressly allowed for radial glass-unit panels?",
    "questionUk": "Який діапазон товщини вертикальних швів прямо дозволений для радіальних панелей склоблоків?",
    "answers": [
      [
        "1/8 through 5/8 inch",
        "Від 1/8 до 5/8 дюйма"
      ],
      [
        "1/16 through 1/4 inch",
        "Від 1/16 до 1/4 дюйма"
      ],
      [
        "1/4 through 1 inch",
        "Від 1/4 до 1 дюйма"
      ],
      [
        "1/2 through 1 inch",
        "Від 1/2 до 1 дюйма"
      ],
      [
        "3/4 through 1-1/2 inches",
        "Від 3/4 до 1-1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The radial-panel exception permits vertical joints at least 1/8 inch and at most 5/8 inch.",
    "explanationUk": "Виняток радіальних панелей дозволяє вертикальні шви від 1/8 до 5/8 дюйма."
  },
  {
    "section": "R607.10",
    "question": "What bed-joint tolerance is specified around the nominal thickness for glass-unit masonry?",
    "questionUk": "Який допуск товщини горизонтального шва склоблоків задано відносно номіналу?",
    "answers": [
      [
        "Minus 1/16 inch and plus 1/8 inch",
        "Мінус 1/16 та плюс 1/8 дюйма"
      ],
      [
        "Plus or minus 1/4 inch",
        "Плюс-мінус 1/4 дюйма"
      ],
      [
        "Minus 1/8 inch and plus 1/16 inch",
        "Мінус 1/8 та плюс 1/16 дюйма"
      ],
      [
        "Plus or minus 1/2 inch",
        "Плюс-мінус 1/2 дюйма"
      ],
      [
        "No tolerance whatsoever",
        "Жодного допуску"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The bed-joint tolerance is asymmetric: minus 1/16 and plus 1/8 inch.",
    "explanationUk": "Допуск горизонтального шва асиметричний: мінус 1/16 та плюс 1/8 дюйма."
  },
  {
    "section": "R607.10",
    "question": "What head-joint thickness tolerance does R607.10 specify for glass-unit masonry?",
    "questionUk": "Який допуск товщини вертикального шва склоблоків задає R607.10?",
    "answers": [
      [
        "Plus or minus 1/8 inch",
        "Плюс-мінус 1/8 дюйма"
      ],
      [
        "Plus or minus 1/16 inch",
        "Плюс-мінус 1/16 дюйма"
      ],
      [
        "Plus or minus 1/4 inch",
        "Плюс-мінус 1/4 дюйма"
      ],
      [
        "Minus 1/16 and plus 1/2 inch",
        "Мінус 1/16 та плюс 1/2 дюйма"
      ],
      [
        "Plus or minus 1/2 inch",
        "Плюс-мінус 1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Head joints have a plus-or-minus-1/8-inch tolerance, distinct from the asymmetric bed-joint tolerance.",
    "explanationUk": "Вертикальний шов має допуск плюс-мінус 1/8 дюйма, відмінний від асиметричного допуску горизонтального."
  }
];
export const intakeVerified129 = verifiedBatch(1533, "Interior Finishes", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-127-132", true, "2026-11-02");
