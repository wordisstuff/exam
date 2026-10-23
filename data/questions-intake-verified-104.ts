import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R606.6.3",
    "difficulty": "medium",
    "question": "A concentrated beam load bears directly on solid masonry under R606.6.3. Which minimum bearing-length and masonry-thickness pair is specified?",
    "questionUk": "Зосереджене навантаження балки передається прямо на суцільне мурування за R606.6.3. Яку мінімальну пару довжини опирання та товщини суцільного мурування передбачено?",
    "answers": [
      [
        "3-inch bearing on at least 4-inch-thick solid masonry",
        "Опирання 3 дюйми на суцільне мурування завтовшки не менше 4 дюймів"
      ],
      [
        "1-inch bearing on 2-inch-thick masonry",
        "Опирання 1 дюйм на мурування 2 дюйми"
      ],
      [
        "1.5-inch bearing on any hollow face shell",
        "Опирання 1,5 дюйма на будь-яку порожнисту оболонку"
      ],
      [
        "2-inch bearing on 3-inch-thick masonry",
        "Опирання 2 дюйми на мурування 3 дюйми"
      ],
      [
        "No minimum bearing length",
        "Без мінімальної довжини опирання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For this direct solid-masonry option, bearing is at least 3 inches measured parallel to the beam on solid masonry at least 4 inches thick. The section separately permits designed bearing plates and reinforced masonry members.",
    "explanationUk": "Для прямого опирання потрібно не менше 3 дюймів уздовж балки на суцільне мурування завтовшки не менше 4 дюймів. Окремо дозволені розраховані опорні пластини й армовані елементи."
  },
  {
    "section": "R606.7",
    "difficulty": "exam",
    "question": "A fully grouted masonry pier has a least dimension of 12 inches. Considering only R606.7's general unsupported-height ratio, what is the maximum height?",
    "questionUk": "Повністю залитий розчином мурований стовп має найменший розмір 12 дюймів. Яка максимальна незакріплена висота лише за загальним співвідношенням R606.7?",
    "answers": [
      [
        "10 ft",
        "10 футів"
      ],
      [
        "4 ft",
        "4 фути"
      ],
      [
        "6 ft",
        "6 футів"
      ],
      [
        "12 ft",
        "12 футів"
      ],
      [
        "20 ft",
        "20 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Unsupported pier height is limited to 10 times the least dimension: 10×12 = 120 inches, or 10 feet. This ratio alone does not establish load capacity.",
    "explanationUk": "Незакріплена висота обмежена десятьма найменшими розмірами: 10×12 = 120 дюймів, тобто 10 футів. Саме співвідношення не визначає несучу здатність."
  },
  {
    "section": "R606.7",
    "difficulty": "exam",
    "question": "An isolated hollow masonry pier supporting a girder will remain unfilled. Its least dimension is 8 inches. What maximum unsupported height does the unfilled-pier allowance permit?",
    "questionUk": "Окремий стовп із порожнистих блоків під прогоном залишають незаповненим. Найменший розмір — 8 дюймів. Яка найбільша незакріплена висота за дозволом для незаповнених стовпів?",
    "answers": [
      [
        "32 inches",
        "32 дюйми"
      ],
      [
        "48 inches",
        "48 дюймів"
      ],
      [
        "64 inches",
        "64 дюйми"
      ],
      [
        "80 inches",
        "80 дюймів"
      ],
      [
        "96 inches",
        "96 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Unfilled hollow piers are permitted only where unsupported height is no more than four times the least dimension: 4×8 = 32 inches.",
    "explanationUk": "Незаповнені порожнисті стовпи дозволені за незакріпленої висоти не більше чотирьох найменших розмірів: 4×8 = 32 дюйми."
  },
  {
    "section": "R606.7.1",
    "difficulty": "exam",
    "question": "Which TWO details are expressly permitted as hollow masonry pier caps?",
    "questionUk": "Які ДВІ деталі прямо дозволені для завершення верху порожнистого мурованого стовпа?",
    "answers": [
      [
        "A masonry cap block",
        "Мурований накривний блок"
      ],
      [
        "Top-course cavities filled with concrete or grout",
        "Порожнини верхнього ряду, заповнені бетоном або розчином для заливки"
      ],
      [
        "A loose wood shim alone",
        "Лише незакріплена дерев’яна підкладка"
      ],
      [
        "Open top-course cells without a cap",
        "Відкриті комірки верхнього ряду без накриття"
      ],
      [
        "Thin roofing felt alone",
        "Лише тонкий покрівельний картон"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R606.7.1 permits a masonry cap block, filled top-course cavities, or a 4-inch cap of solid masonry or concrete.",
    "explanationUk": "R606.7.1 дозволяє накривний блок, заповнені порожнини верхнього ряду або 4-дюймове завершення із суцільного мурування чи бетону."
  },
  {
    "section": "R606.8",
    "difficulty": "exam",
    "question": "A masonry wall is 12 inches thick. What maximum chase depth follows the one-third-thickness limit, before checking the other strength and clearance requirements?",
    "questionUk": "Мурована стіна має товщину 12 дюймів. Яка максимальна глибина штраби за обмеженням однією третиною товщини, до перевірки інших вимог міцності й відступів?",
    "answers": [
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "2 inches",
        "2 дюйми"
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
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A chase may not be deeper than one-third of wall thickness: 12/3 = 4 inches. Other limits still apply, including remaining masonry and required strength.",
    "explanationUk": "Глибина штраби не перевищує третини товщини: 12/3 = 4 дюйми. Зберігаються інші обмеження, зокрема залишок мурування та потрібна міцність."
  },
  {
    "section": "R606.8",
    "difficulty": "easy",
    "question": "What maximum horizontal chase length is specified for masonry walls?",
    "questionUk": "Яку найбільшу довжину горизонтальної штраби передбачено для мурованих стін?",
    "answers": [
      [
        "4 ft",
        "4 фути"
      ],
      [
        "2 ft",
        "2 фути"
      ],
      [
        "6 ft",
        "6 футів"
      ],
      [
        "8 ft",
        "8 футів"
      ],
      [
        "12 ft",
        "12 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.8 limits horizontal chase length or horizontal projection to 4 feet.",
    "explanationUk": "R606.8 обмежує довжину горизонтальної штраби або горизонтальну проєкцію 4 футами."
  },
  {
    "section": "R606.8",
    "difficulty": "medium",
    "question": "What minimum masonry thickness must remain behind a chase or recess under R606.8?",
    "questionUk": "Яка мінімальна товщина мурування має залишатися позаду штраби чи ніші за R606.8?",
    "answers": [
      [
        "8 inches",
        "8 дюймів"
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
      ],
      [
        "6 inches",
        "6 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The section requires at least 8 inches of masonry behind chases and recesses; it also specifies separation from adjacent chases/recesses and opening jambs.",
    "explanationUk": "Розділ вимагає не менше 8 дюймів мурування позаду штраб і ніш та встановлює відстані до сусідніх штраб/ніш і одвірків."
  },
  {
    "section": "R606.8",
    "difficulty": "medium",
    "question": "A proposed service recess would cut into the required structural area of a masonry pier. What does R606.8 permit?",
    "questionUk": "Запропонована інженерна ніша заходить у необхідну несучу площу мурованого стовпа. Що дозволяє R606.8?",
    "answers": [
      [
        "The recess is not permitted within the required pier area",
        "Нішу в межах необхідної площі стовпа не дозволено"
      ],
      [
        "Any recess is allowed if hidden by trim",
        "Будь-яка ніша дозволена під лиштвою"
      ],
      [
        "Remove half the required area if the pier is grouted",
        "Можна прибрати половину потрібної площі залитого стовпа"
      ],
      [
        "Allow it whenever the opening is narrower than 12 inches",
        "Дозволено за ширини отвору менше 12 дюймів"
      ],
      [
        "Allow it if no paint is damaged",
        "Дозволено, якщо не пошкоджується фарба"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Chases and recesses are prohibited within the required area of a pier and may not reduce required wall strength or fire resistance.",
    "explanationUk": "Штраби й ніші заборонені в межах потрібної площі стовпа та не можуть зменшувати необхідну міцність чи вогнестійкість стіни."
  },
  {
    "section": "R606.8",
    "difficulty": "medium",
    "question": "A masonry recess is 14 inches wide. What must support the masonry directly above it?",
    "questionUk": "Ніша в мурованій стіні має ширину 14 дюймів. Що має підтримувати мурування безпосередньо над нею?",
    "answers": [
      [
        "A noncombustible lintel",
        "Негорюча перемичка"
      ],
      [
        "An unsupported mortar bed",
        "Непідпертий розчинний шов"
      ],
      [
        "Wood trim alone",
        "Лише дерев’яна лиштва"
      ],
      [
        "Plastic conduit alone",
        "Лише пластикова труба"
      ],
      [
        "Nothing because the recess is less than 4 feet wide",
        "Нічого, бо ніша вужча за 4 фути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Masonry above chases or recesses wider than 12 inches requires support on noncombustible lintels.",
    "explanationUk": "Мурування над штрабами чи нішами ширше 12 дюймів спирають на негорючі перемички."
  },
  {
    "section": "Table R606.6.4",
    "difficulty": "exam",
    "question": "For a noncantilevered solid masonry bearing wall 8 inches nominally thick, what maximum lateral-support spacing follows the table's 20-to-1 ratio, with no gable allowance?",
    "questionUk": "Який максимальний крок бічних опор для неконсольної суцільної несучої мурованої стіни номінальною товщиною 8 дюймів за співвідношенням таблиці 20:1 без допуску для фронтону?",
    "answers": [
      [
        "13 ft 4 in.",
        "13 футів 4 дюйми"
      ],
      [
        "8 ft",
        "8 футів"
      ],
      [
        "10 ft",
        "10 футів"
      ],
      [
        "12 ft",
        "12 футів"
      ],
      [
        "24 ft",
        "24 фути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The solid or solid-grouted bearing-wall ratio is 20. Thus 8×20 = 160 inches, or 13 feet 4 inches, between lateral supports.",
    "explanationUk": "Для суцільної або повністю залитої несучої стіни співвідношення становить 20. Отже, 8×20 = 160 дюймів, або 13 футів 4 дюйми."
  },
  {
    "section": "Table R606.6.4, Footnote a",
    "difficulty": "medium",
    "question": "When using the lateral-support table for a cavity masonry wall, how is wall thickness determined?",
    "questionUk": "Як визначають товщину порожнинної багатошарової мурованої стіни для таблиці кроку бічних опор?",
    "answers": [
      [
        "Sum the nominal thicknesses of the individual wythes",
        "Додають номінальні товщини окремих шарів мурування"
      ],
      [
        "Include the full air-cavity width as solid masonry",
        "Повністю зараховують повітряну порожнину як суцільне мурування"
      ],
      [
        "Use only the exterior wythe regardless of the others",
        "Беруть лише зовнішній шар незалежно від інших"
      ],
      [
        "Use twice the cavity width",
        "Беруть подвійну ширину порожнини"
      ],
      [
        "Use the total floor-to-floor height",
        "Беруть повну висоту поверху"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote a defines cavity-wall thickness as the sum of the nominal thicknesses of the individual wythes, excluding the air space.",
    "explanationUk": "Примітка a визначає товщину порожнинної стіни як суму номінальних товщин окремих шарів мурування без повітряного проміжку."
  },
  {
    "section": "R606.9.1",
    "difficulty": "medium",
    "question": "A masonry structural member combines units and mortar of different grades. Which component governs the maximum allowable compressive stress?",
    "questionUk": "Мурований несучий елемент містить блоки й розчин різних марок. Який складник визначає найбільше допустиме напруження стиску?",
    "answers": [
      [
        "The weakest combination of units, materials and mortars",
        "Найслабша комбінація блоків, матеріалів і розчинів"
      ],
      [
        "The strongest individual unit only",
        "Лише найміцніший окремий блок"
      ],
      [
        "The most expensive material",
        "Найдорожчий матеріал"
      ],
      [
        "The average retail price of all materials",
        "Середня роздрібна ціна матеріалів"
      ],
      [
        "The color of the exterior facing",
        "Колір зовнішнього облицювання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Maximum stress may not exceed the allowable stress for the weakest combination of units, materials and mortars composing the member.",
    "explanationUk": "Максимальне напруження не перевищує допустимого для найслабшої комбінації блоків, матеріалів і розчинів у складі елемента."
  }
];
export const intakeVerified104 = verifiedBatch(1233, "Footings and Foundations", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-103-108", true, "2026-10-22");

