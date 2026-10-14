import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R606.2.1",
    "difficulty": "medium",
    "question": "Which standard is named for load-bearing concrete masonry units?",
    "questionUk": "Який стандарт зазначений для несучих бетонних блоків?",
    "answers": [
      [
        "ASTM C90",
        "Стандарт ASTM C90"
      ],
      [
        "ASTM C55",
        "Стандарт ASTM C55"
      ],
      [
        "ASTM C73",
        "Стандарт ASTM C73"
      ],
      [
        "ASTM C216",
        "Стандарт ASTM C216"
      ],
      [
        "ASTM C652",
        "Стандарт ASTM C652"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.2.1 assigns ASTM C90 to load-bearing concrete masonry units.",
    "explanationUk": "R606.2.1 визначає ASTM C90 для несучих бетонних блоків."
  },
  {
    "section": "R606.2.2",
    "difficulty": "medium",
    "question": "Which standard should a solid clay-or-shale facing-brick specification identify?",
    "questionUk": "Який стандарт має вказувати специфікація повнотілої облицювальної цегли з глини або сланцю?",
    "answers": [
      [
        "ASTM C216",
        "Стандарт ASTM C216"
      ],
      [
        "ASTM C90",
        "Стандарт ASTM C90"
      ],
      [
        "ASTM C55",
        "Стандарт ASTM C55"
      ],
      [
        "ASTM C73",
        "Стандарт ASTM C73"
      ],
      [
        "ASTM C1288",
        "Стандарт ASTM C1288"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "ASTM C216 is named for solid facing brick made from clay or shale.",
    "explanationUk": "ASTM C216 зазначений для повнотілої облицювальної цегли з глини або сланцю."
  },
  {
    "section": "R606.3.1",
    "difficulty": "easy",
    "question": "No drawing or other rule specifies different joint dimensions. What default thickness applies to ordinary masonry head and bed joints?",
    "questionUk": "Креслення чи інші норми не визначають інших розмірів швів. Яка стандартна товщина звичайних вертикальних і горизонтальних швів мурування?",
    "answers": [
      [
        "⅜ inch",
        "⅜ дюйма"
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
    "explanation": "The default is ⅜ inch unless otherwise required or indicated. Starting-course bed joints are treated separately.",
    "explanationUk": "Стандарт — ⅜ дюйма, якщо інше не встановлено чи не показано. Горизонтальні шви першого ряду регулюються окремо."
  },
  {
    "section": "R606.3.1",
    "difficulty": "medium",
    "question": "What thickness range is allowed for the starting-course bed joint over a foundation?",
    "questionUk": "Який діапазон товщини горизонтального шва першого ряду над фундаментом дозволений?",
    "answers": [
      [
        "¼–¾ inch",
        "¼–¾ дюйма"
      ],
      [
        "⅛–⅜ inch",
        "⅛–⅜ дюйма"
      ],
      [
        "⅜–½ inch",
        "⅜–½ дюйма"
      ],
      [
        "½–1 inch",
        "½–1 дюйм"
      ],
      [
        "¾–1¼ inches",
        "¾–1¼ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The starting-course bed joint must be at least ¼ inch and no more than ¾ inch.",
    "explanationUk": "Горизонтальний шов першого ряду має бути щонайменше ¼ і не більш як ¾ дюйма."
  },
  {
    "section": "R606.3.1, item 2",
    "difficulty": "exam",
    "question": "A load-bearing head joint is specified as ⅜ inch. What actual range follows the stated head-joint tolerances?",
    "questionUk": "Вертикальний шов несучого мурування задано ⅜ дюйма. Який фактичний діапазон випливає із зазначених допусків?",
    "answers": [
      [
        "⅛–¾ inch",
        "⅛–¾ дюйма"
      ],
      [
        "¼–½ inch",
        "¼–½ дюйма"
      ],
      [
        "⅜–½ inch",
        "⅜–½ дюйма"
      ],
      [
        "⅛–½ inch",
        "⅛–½ дюйма"
      ],
      [
        "¼–¾ inch",
        "¼–¾ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Head-joint tolerance is −¼ and +⅜ inch: ⅜−¼=⅛; ⅜+⅜=¾.",
    "explanationUk": "Допуск вертикального шва — −¼ і +⅜ дюйма: ⅜−¼=⅛; ⅜+⅜=¾."
  },
  {
    "section": "R606.3.1, item 1",
    "difficulty": "exam",
    "question": "An ordinary load-bearing bed joint is specified as ⅜ inch. What maximum thickness results from its positive tolerance?",
    "questionUk": "Звичайний горизонтальний шов несучого мурування задано ⅜ дюйма. Яка найбільша товщина за додатним допуском?",
    "answers": [
      [
        "½ inch",
        "½ дюйма"
      ],
      [
        "7/16 inch",
        "7/16 дюйма"
      ],
      [
        "⅝ inch",
        "⅝ дюйма"
      ],
      [
        "¾ inch",
        "¾ дюйма"
      ],
      [
        "⅞ inch",
        "⅞ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The positive bed-joint tolerance is ⅛ inch: ⅜+⅛=½. This is not the starting-course provision.",
    "explanationUk": "Додатний допуск — ⅛ дюйма: ⅜+⅛=½. Це не окрема вимога першого ряду."
  },
  {
    "section": "R606.3.2",
    "difficulty": "medium",
    "question": "Deep furrows in bed-joint mortar leave voids beneath masonry units. How does the placement rule treat this practice?",
    "questionUk": "Глибокі борозни в розчині залишають порожнини під блоками. Як вимога укладання оцінює цю практику?",
    "answers": [
      [
        "It prohibits deep furrowing that creates voids",
        "Забороняє глибокі борозни, що створюють порожнини"
      ],
      [
        "It requires voids beneath every unit",
        "Вимагає порожнин під кожним блоком"
      ],
      [
        "It permits voids whenever work is indoors",
        "Дозволяє порожнини всередині будівлі"
      ],
      [
        "It prohibits voids only for painted units",
        "Забороняє їх лише для фарбованих блоків"
      ],
      [
        "It permits voids if the joint is ⅜ inch",
        "Дозволяє їх за шва ⅜ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Deep bed-joint furrowing that produces voids is expressly prohibited.",
    "explanationUk": "Глибокі борозни горизонтального шва, що створюють порожнини, прямо заборонені."
  },
  {
    "section": "R606.3.2",
    "difficulty": "medium",
    "question": "A placed brick is disturbed enough to break its initial bond. What correction is required?",
    "questionUk": "Укладену цеглу зрушили настільки, що початкове зчеплення порушене. Яке виправлення потрібне?",
    "answers": [
      [
        "Remove and relay it in fresh mortar",
        "Вийняти й повторно укласти у свіжий розчин"
      ],
      [
        "Push it back into the old mortar",
        "Втиснути назад у старий розчин"
      ],
      [
        "Wet only the exposed face",
        "Змочити лише відкриту грань"
      ],
      [
        "Grout the adjacent brick only",
        "Залити лише сусідню цеглу"
      ],
      [
        "Leave it if it aligns with the string",
        "Залишити, якщо вона вирівняна зі шнуром"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Units whose initial bond is broken must be removed and relaid in fresh mortar.",
    "explanationUk": "Вироби з порушеним початковим зчепленням виймають і повторно укладають у свіжий розчин."
  },
  {
    "section": "R606.3.2.1",
    "difficulty": "medium",
    "question": "Which THREE mortar-joint requirements apply to solid masonry units? Select THREE.",
    "questionUk": "Які ТРИ вимоги до розчинних швів діють для повнотілих мурувальних виробів? Оберіть ТРИ.",
    "answers": [
      [
        "Full head joints",
        "Повне заповнення вертикальних швів"
      ],
      [
        "Full bed joints",
        "Повне заповнення горизонтальних швів"
      ],
      [
        "Filled interior vertical joints designed to receive mortar",
        "Заповнення внутрішніх вертикальних швів, призначених для розчину"
      ],
      [
        "Every interior vertical joint left empty",
        "Усі внутрішні вертикальні шви порожні"
      ],
      [
        "Mortar only at outer face corners",
        "Розчин лише в кутах зовнішньої грані"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Solid units need full head and bed joints and filled interior vertical joints where designed to receive mortar.",
    "explanationUk": "Повнотілі вироби потребують заповнених вертикальних і горизонтальних швів та розчину у внутрішніх вертикальних швах, призначених для нього."
  },
  {
    "section": "R606.3.2.2",
    "difficulty": "medium",
    "question": "For hollow masonry, how far inward from the face must head and bed joints be filled solidly?",
    "questionUk": "Для пустотілого мурування на яку глибину від грані вертикальні й горизонтальні шви мають бути повністю заповнені?",
    "answers": [
      [
        "At least the face-shell thickness",
        "Щонайменше на товщину лицьової стінки"
      ],
      [
        "Exactly ¼ inch for every unit",
        "Рівно ¼ дюйма для кожного блока"
      ],
      [
        "Half the face-shell thickness",
        "На половину товщини лицьової стінки"
      ],
      [
        "Only a paint-stripe width",
        "Лише на ширину смуги фарби"
      ],
      [
        "The full unit depth in every case",
        "На всю глибину блока в кожному випадку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The solid mortar width inward from the face must be no less than the face-shell thickness.",
    "explanationUk": "Ширина повного розчинного заповнення від грані має бути не менше товщини лицьової стінки."
  },
  {
    "section": "Table R606.2.12",
    "difficulty": "exam",
    "question": "Coarse masonry grout uses 2 cubic feet total cementitious materials. What coarse-aggregate range follows the table?",
    "questionUk": "Крупнозерниста заливка мурування містить сумарно 2 кубічні фути в’яжучих. Який діапазон крупного заповнювача випливає з таблиці?",
    "answers": [
      [
        "2–4 cubic feet",
        "2–4 кубічні фути"
      ],
      [
        "1–2 cubic feet",
        "1–2 кубічні фути"
      ],
      [
        "4½–6 cubic feet",
        "4½–6 кубічних футів"
      ],
      [
        "6–8 cubic feet",
        "6–8 кубічних футів"
      ],
      [
        "8–10 cubic feet",
        "8–10 кубічних футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Coarse aggregate is 1–2 times total cementitious volumes: 2×1 to 2×2 = 2–4 cubic feet.",
    "explanationUk": "Крупний заповнювач становить 1–2 сумарних об’єми в’яжучих: 2×1 до 2×2 = 2–4 кубічні фути."
  },
  {
    "section": "Table R606.2.12",
    "difficulty": "exam",
    "question": "For either listed grout type, what maximum hydrated-lime or lime-putty volume applies per one cement volume?",
    "questionUk": "Для обох перелічених типів заливки який найбільший об’єм гідратного вапна або вапняного тіста на один об’єм цементу?",
    "answers": [
      [
        "1/10 volume",
        "1/10 об’єму"
      ],
      [
        "¼ volume",
        "¼ об’єму"
      ],
      [
        "½ volume",
        "½ об’єму"
      ],
      [
        "One volume",
        "Один об’єм"
      ],
      [
        "Two volumes",
        "Два об’єми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table gives lime from zero to 1/10 for both fine and coarse grout.",
    "explanationUk": "Таблиця встановлює вапно від нуля до 1/10 для дрібнозернистої й крупнозернистої заливки."
  }
];
export const intakeVerified73 = verifiedBatch(861, "Footings and Foundations", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf", seeds, "intake-series-73-78", true);

