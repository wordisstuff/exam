import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R702.2.1",
    "difficulty": "easy",
    "question": "For ordinary gypsum plaster over metal lath, excluding veneer plaster, what minimum coat count applies?",
    "questionUk": "Скільки щонайменше шарів потрібно для звичайної гіпсової штукатурки на металевій сітці, крім тонкошарової штукатурки?",
    "answers": [
      [
        "Three",
        "Три"
      ],
      [
        "One",
        "Один"
      ],
      [
        "Two",
        "Два"
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
    "explanation": "Ordinary gypsum plaster over metal lath requires at least three coats.",
    "explanationUk": "Звичайну гіпсову штукатурку на металевій сітці наносять щонайменше у три шари."
  },
  {
    "section": "R702.2.1",
    "difficulty": "medium",
    "question": "A permitted nonmetal base will receive ordinary gypsum plaster, rather than veneer plaster. What is the minimum number of coats?",
    "questionUk": "На дозволену неметалеву основу наносять звичайну гіпсову штукатурку, а не тонкошарову. Яка мінімальна кількість шарів?",
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
    "explanation": "The general rule requires at least two coats over the other permitted bases.",
    "explanationUk": "Загальна вимога для інших дозволених основ — щонайменше два шари."
  },
  {
    "section": "R702.2.1",
    "difficulty": "exam",
    "question": "A one-coat veneer-plaster system meets the table's total-thickness requirement. What maximum thickness applies to that single veneer coat?",
    "questionUk": "Тонкошарова штукатурна система в один шар відповідає табличній вимозі загальної товщини. Яка найбільша товщина цього шару?",
    "answers": [
      [
        "3/16 inch",
        "3/16 дюйма"
      ],
      [
        "⅛ inch",
        "⅛ дюйма"
      ],
      [
        "¼ inch",
        "¼ дюйма"
      ],
      [
        "⅜ inch",
        "⅜ дюйма"
      ],
      [
        "½ inch",
        "½ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The veneer exception allows one coat up to 3/16 inch, while still requiring the table's total thickness.",
    "explanationUk": "Виняток для тонкошарової штукатурки дозволяє один шар до 3/16 дюйма за дотримання табличної загальної товщини."
  },
  {
    "section": "R702.2.2",
    "difficulty": "medium",
    "question": "Which TWO ordinary interior cement-plaster schedules meet the minimum coat counts? Select TWO.",
    "questionUk": "Які ДВА графіки звичайної внутрішньої цементної штукатурки відповідають мінімальній кількості шарів? Оберіть ДВА.",
    "answers": [
      [
        "Three coats over metal lath",
        "Три шари на металевій сітці"
      ],
      [
        "Two coats over another permitted base",
        "Два шари на іншій дозволеній основі"
      ],
      [
        "One coat over metal lath",
        "Один шар на металевій сітці"
      ],
      [
        "Two coats over metal lath",
        "Два шари на металевій сітці"
      ],
      [
        "One coat over another permitted base",
        "Один шар на іншій дозволеній основі"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Cement plaster needs three coats on metal lath and two on other permitted bases.",
    "explanationUk": "Цементна штукатурка потребує трьох шарів на металевій сітці та двох на інших дозволених основах."
  },
  {
    "section": "R702.2.2.1",
    "difficulty": "medium",
    "question": "For interior cement plaster not using the ASTM C926 exception, how long must each coat be maintained moist before the next coat?",
    "questionUk": "Для внутрішньої цементної штукатурки без винятку ASTM C926 як довго кожен шар треба утримувати вологим перед наступним?",
    "answers": [
      [
        "At least 24 hours",
        "Щонайменше 24 години"
      ],
      [
        "At least 6 hours",
        "Щонайменше 6 годин"
      ],
      [
        "At least 12 hours",
        "Щонайменше 12 годин"
      ],
      [
        "At least 18 hours",
        "Щонайменше 18 годин"
      ],
      [
        "Exactly 48 hours in every case",
        "Рівно 48 годин у кожному випадку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The default moist-condition period is not less than 24 hours; separate curing intervals must also be met.",
    "explanationUk": "За замовчуванням вологий стан підтримують не менш як 24 години; окремі строки тверднення також слід виконати."
  },
  {
    "section": "R702.2.2.1 Exception",
    "difficulty": "exam",
    "question": "Which installation route is expressly excepted from the default 24-hour moist-condition provision for interior cement plaster?",
    "questionUk": "Який спосіб монтажу прямо виключений із загальної вимоги 24-годинного зволоження внутрішньої цементної штукатурки?",
    "answers": [
      [
        "Installation in accordance with ASTM C926",
        "Монтаж відповідно до ASTM C926"
      ],
      [
        "Installation on any gypsum base",
        "Монтаж на будь-якій гіпсовій основі"
      ],
      [
        "Any application below ¼ inch",
        "Будь-який шар тонший за ¼ дюйма"
      ],
      [
        "Any work completed indoors",
        "Будь-яка робота всередині будівлі"
      ],
      [
        "Installation under ASTM C1178 alone",
        "Монтаж лише за ASTM C1178"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The named exception is compliance with ASTM C926, not a general indoor-work exemption.",
    "explanationUk": "Зазначений виняток стосується виконання за ASTM C926, а не будь-якої роботи всередині будівлі."
  },
  {
    "section": "R702.2.2.2",
    "difficulty": "medium",
    "question": "The first coat of a two-coat interior cement-plaster system was applied at 9 a.m. Monday. Under the stated curing interval, when is the finish coat first permitted?",
    "questionUk": "Перший шар двошарової внутрішньої цементної штукатурки нанесено в понеділок о 9:00. Коли за встановленим строком тверднення вперше дозволений фінішний шар?",
    "answers": [
      [
        "9 a.m. Wednesday",
        "У середу о 9:00"
      ],
      [
        "9 p.m. Monday",
        "У понеділок о 21:00"
      ],
      [
        "9 a.m. Tuesday",
        "У вівторок о 9:00"
      ],
      [
        "9 p.m. Tuesday",
        "У вівторок о 21:00"
      ],
      [
        "9 a.m. Thursday",
        "У четвер о 9:00"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A two-coat finish cannot be applied earlier than 48 hours after the first coat.",
    "explanationUk": "Фінішний шар двошарової системи наносять не раніше ніж через 48 годин після першого."
  },
  {
    "section": "R702.2.2.2",
    "difficulty": "exam",
    "question": "Ignoring delays beyond required curing, how many hours separate the first coat and earliest finish coat in a three-coat interior cement-plaster system?",
    "questionUk": "Якщо немає затримок понад обов’язкове тверднення, скільки годин минає від першого шару до найранішого фінішного шару тришарової внутрішньої цементної штукатурки?",
    "answers": [
      [
        "72 hours",
        "72 години"
      ],
      [
        "24 hours",
        "24 години"
      ],
      [
        "36 hours",
        "36 годин"
      ],
      [
        "48 hours",
        "48 годин"
      ],
      [
        "96 hours",
        "96 годин"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Wait at least 24 hours from first to second coat, then at least 48 hours from second to finish: 72 hours total.",
    "explanationUk": "Від першого до другого шару чекають щонайменше 24 години, від другого до фінішного — 48; разом 72 години."
  },
  {
    "section": "R702.2.3",
    "difficulty": "medium",
    "question": "Which TWO plain gypsum-lath support arrangements meet the maximum spacings? Select TWO.",
    "questionUk": "Які ДВА варіанти опор звичайної гіпсової штукатурної основи відповідають найбільшому кроку? Оберіть ДВА.",
    "answers": [
      [
        "⅜-inch lath at 16 inches on center",
        "Основа ⅜ дюйма, крок 16 дюймів"
      ],
      [
        "½-inch lath at 24 inches on center",
        "Основа ½ дюйма, крок 24 дюйми"
      ],
      [
        "⅜-inch lath at 24 inches on center",
        "Основа ⅜ дюйма, крок 24 дюйми"
      ],
      [
        "½-inch lath at 32 inches on center",
        "Основа ½ дюйма, крок 32 дюйми"
      ],
      [
        "⅜-inch lath at 20 inches on center",
        "Основа ⅜ дюйма, крок 20 дюймів"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Maximum spacing is 16 inches for ⅜-inch lath and 24 inches for ½-inch plain gypsum lath.",
    "explanationUk": "Найбільший крок для основи ⅜ дюйма — 16 дюймів, для звичайної гіпсової основи ½ дюйма — 24 дюйми."
  },
  {
    "section": "R702.2.3",
    "difficulty": "medium",
    "question": "What layout is required for gypsum lath relative to framing and adjacent-course end joints?",
    "questionUk": "Яке розташування гіпсової штукатурної основи потрібне відносно каркаса й торцевих стиків сусідніх рядів?",
    "answers": [
      [
        "Perpendicular to framing, with end joints offset at least one framing space",
        "Перпендикулярно каркасу, зі зміщенням торцевих стиків щонайменше на один проміжок каркаса"
      ],
      [
        "Parallel to framing, with all end joints aligned",
        "Паралельно каркасу, з усіма стиками на одній лінії"
      ],
      [
        "Perpendicular, with every end joint aligned",
        "Перпендикулярно, з усіма стиками на одній лінії"
      ],
      [
        "At 45 degrees, with no joint offset",
        "Під 45 градусів без зміщення стиків"
      ],
      [
        "Either orientation, with a maximum 1-inch offset",
        "У будь-якому напрямку зі зміщенням не більш як 1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Gypsum lath runs at right angles to support framing; adjacent-course end joints are staggered by at least one framing space.",
    "explanationUk": "Гіпсову основу монтують під прямим кутом до опор каркаса; торцеві стики сусідніх рядів зміщують щонайменше на один проміжок каркаса."
  },
  {
    "section": "Table R702.1(2), footnote a",
    "difficulty": "exam",
    "question": "A masonry application uses 200 pounds of wood-fibered gypsum plaster. What maximum sand volume follows the table footnote?",
    "questionUk": "Для нанесення на мурування використовують 200 фунтів гіпсової штукатурки з деревними волокнами. Який найбільший об’єм піску за приміткою таблиці?",
    "answers": [
      [
        "2 cubic feet",
        "2 кубічні фути"
      ],
      [
        "1 cubic foot",
        "1 кубічний фут"
      ],
      [
        "3 cubic feet",
        "3 кубічні фути"
      ],
      [
        "4 cubic feet",
        "4 кубічні фути"
      ],
      [
        "5 cubic feet",
        "5 кубічних футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The footnote limits sand to 1 cubic foot per 100 pounds of this plaster on masonry or concrete; 200 pounds permits 2 cubic feet.",
    "explanationUk": "Для такої штукатурки на муруванні або бетоні дозволено до 1 кубічного фута піску на 100 фунтів; для 200 фунтів — 2 кубічні фути."
  },
  {
    "section": "Table R702.1(2), footnote e",
    "difficulty": "exam",
    "question": "Three-coat gypsum plaster will total at least 1 inch thick. What increased perlite-or-vermiculite volume may be used in the second coat per 100 pounds of neat plaster?",
    "questionUk": "Загальна товщина тришарової гіпсової штукатурки буде щонайменше 1 дюйм. До якого об’єму перліту або вермикуліту дозволено збільшити другий шар на 100 фунтів чистої штукатурки?",
    "answers": [
      [
        "3 cubic feet",
        "3 кубічні фути"
      ],
      [
        "1 cubic foot",
        "1 кубічний фут"
      ],
      [
        "1½ cubic feet",
        "1½ кубічного фута"
      ],
      [
        "2 cubic feet",
        "2 кубічні фути"
      ],
      [
        "4 cubic feet",
        "4 кубічні фути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote e permits the second-coat proportion to increase to 3 cubic feet when total plaster thickness is at least 1 inch.",
    "explanationUk": "Примітка e дозволяє збільшити пропорцію другого шару до 3 кубічних футів за загальної товщини штукатурки щонайменше 1 дюйм."
  }
];
export const intakeVerified68 = verifiedBatch(801, "Interior Finishes", "Drywall", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter7.pdf", seeds, "intake-series-67-72", true);

