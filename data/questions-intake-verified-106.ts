import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R802.4.5",
    "difficulty": "medium",
    "question": "A purlin supports rafters whose required size is 2×8. What minimum purlin size follows R802.4.5's size comparison?",
    "questionUk": "Прогін підпирає крокви, потрібний розмір яких 2×8. Який мінімальний розмір прогону випливає з порівняння в R802.4.5?",
    "answers": [
      [
        "Not smaller than the required 2×8 rafters",
        "Не менший за потрібні крокви 2×8"
      ],
      [
        "Always 1×4",
        "Завжди 1×4"
      ],
      [
        "Always 2×4 regardless of rafter size",
        "Завжди 2×4 незалежно від крокв"
      ],
      [
        "Half the required rafter depth",
        "Половина потрібної висоти крокви"
      ],
      [
        "Any size if the purlin is painted",
        "Будь-який після фарбування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Purlins must be sized no smaller than the required size of the rafters they support; bracing and continuity requirements also apply.",
    "explanationUk": "Розмір прогону не менший за потрібний розмір крокв, які він підпирає; також діють вимоги до підкосів і безперервності."
  },
  {
    "section": "R802.4.5",
    "difficulty": "easy",
    "question": "Which continuity requirement applies to prescriptive purlins used to reduce rafter span?",
    "questionUk": "Яка вимога безперервності діє для нормативних прогонів, що зменшують проліт крокв?",
    "answers": [
      [
        "Purlins must be continuous",
        "Прогони мають бути безперервними"
      ],
      [
        "Every purlin must stop midway between braces",
        "Кожен прогін має закінчуватися посередині між підкосами"
      ],
      [
        "Purlins may consist of loose unconnected blocks",
        "Прогони можуть складатися з вільних нез’єднаних брусків"
      ],
      [
        "Only the roof underlayment must be continuous",
        "Безперервність потрібна лише підкладковому шару покрівлі"
      ],
      [
        "Continuity is required only for gutters",
        "Безперервність потрібна лише ринвам"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R802.4.5 expressly requires continuous purlins supported by the specified braces.",
    "explanationUk": "R802.4.5 прямо вимагає безперервних прогонів із передбаченими підкосами."
  },
  {
    "section": "R802.4.5",
    "difficulty": "medium",
    "question": "Which brace detail is specified for purlins under the prescriptive roof-framing provision?",
    "questionUk": "Які підкоси прогонів передбачено нормативним положенням про каркас даху?",
    "answers": [
      [
        "Nominal 2×4 braces installed to bearing walls",
        "Номінальні підкоси 2×4 з опиранням на несучі стіни"
      ],
      [
        "Nominal 1×2 braces attached only to ceiling drywall",
        "Номінальні 1×2 лише до гіпсокартону стелі"
      ],
      [
        "Loose metal straps resting on insulation",
        "Вільні металеві стрічки на утеплювачі"
      ],
      [
        "Nominal 1×3 braces supported by nonbearing trim",
        "Номінальні 1×3 на ненесучому оздобленні"
      ],
      [
        "No braces if the roof has shingles",
        "Без підкосів для даху з ґонтом"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The prescribed purlin braces are nominal 2×4 members installed to bearing walls.",
    "explanationUk": "Передбачені підкоси прогонів — номінальні елементи 2×4, установлені до несучих стін."
  },
  {
    "section": "R802.4.5",
    "difficulty": "medium",
    "question": "A purlin brace slopes 35 degrees above horizontal. Which correction meets the minimum brace-slope rule?",
    "questionUk": "Підкіс прогону нахилений на 35 градусів над горизонталлю. Яке виправлення відповідає мінімальному нахилу?",
    "answers": [
      [
        "Increase the slope to at least 45 degrees from horizontal",
        "Збільшити нахил щонайменше до 45 градусів від горизонталі"
      ],
      [
        "Reduce the slope to 20 degrees",
        "Зменшити нахил до 20 градусів"
      ],
      [
        "Measure from vertical and accept 35 degrees above horizontal",
        "Виміряти від вертикалі й прийняти 35 градусів над горизонталлю"
      ],
      [
        "Leave it because any positive slope is allowed",
        "Залишити, бо дозволений будь-який додатний нахил"
      ],
      [
        "Make it horizontal",
        "Зробити горизонтальним"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Purlin braces must slope at least 45 degrees from horizontal; 35 degrees does not meet that minimum.",
    "explanationUk": "Підкоси прогонів мають нахил щонайменше 45 градусів до горизонталі; 35 градусів недостатньо."
  },
  {
    "section": "R802.4.5",
    "difficulty": "easy",
    "question": "What maximum on-center spacing is permitted between purlin braces?",
    "questionUk": "Який максимальний крок між осями підкосів прогону дозволено?",
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
    "explanation": "Purlin braces may be spaced no more than 4 feet on center.",
    "explanationUk": "Підкоси прогонів установлюють із кроком між осями не більше 4 футів."
  },
  {
    "section": "R802.4.5",
    "difficulty": "easy",
    "question": "What is the maximum unbraced length of a purlin brace under R802.4.5?",
    "questionUk": "Яка максимальна незакріплена довжина підкосу прогону за R802.4.5?",
    "answers": [
      [
        "8 ft",
        "8 футів"
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
        "10 ft",
        "10 футів"
      ],
      [
        "12 ft",
        "12 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The unbraced length of purlin braces must not exceed 8 feet.",
    "explanationUk": "Незакріплена довжина підкосів прогону не перевищує 8 футів."
  },
  {
    "section": "R802.4.6",
    "difficulty": "medium",
    "question": "When collar ties connect opposing rafters, where must they be located vertically?",
    "questionUk": "Де по висоті мають бути розташовані верхні затяжки, що з’єднують протилежні крокви?",
    "answers": [
      [
        "In the upper third of the attic space",
        "У верхній третині горищного простору"
      ],
      [
        "Only at floor level",
        "Лише на рівні підлоги"
      ],
      [
        "In the bottom third only",
        "Лише в нижній третині"
      ],
      [
        "Anywhere below the basement ceiling",
        "Будь-де нижче стелі підвалу"
      ],
      [
        "Only outside the exterior walls",
        "Лише за зовнішніми стінами"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Collar ties are located in the upper third of the attic space and fastened as specified; they are distinct from lower rafter ties resisting wall spread.",
    "explanationUk": "Верхні затяжки розміщують у верхній третині горища й закріплюють за нормою; вони відрізняються від нижніх затяжок, що стримують розпирання стін."
  },
  {
    "section": "R802.5.2",
    "difficulty": "medium",
    "question": "Ceiling joists serving the roof-framing arrangement are installed above the bottom third of rafter height. What must be done to the ridge?",
    "questionUk": "Балки стелі в системі каркаса даху встановлено вище нижньої третини висоти крокв. Що потрібно для коника?",
    "answers": [
      [
        "Design it as a beam",
        "Розрахувати його як балку"
      ],
      [
        "Use a thinner ridge board without design",
        "Використати тоншу коникову дошку без розрахунку"
      ],
      [
        "Omit the ridge member entirely",
        "Повністю прибрати кониковий елемент"
      ],
      [
        "Treat ceiling drywall as the ridge support",
        "Вважати гіпсокартон стелі опорою коника"
      ],
      [
        "Ignore rafter thrust because the joists are raised",
        "Ігнорувати розпір через підняті балки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R802.5.2 requires the ridge to be designed as a beam when ceiling joists are above the bottom third of rafter height.",
    "explanationUk": "R802.5.2 вимагає розрахувати коник як балку, якщо балки стелі розміщені вище нижньої третини висоти крокв."
  },
  {
    "section": "R802.5.2",
    "difficulty": "exam",
    "question": "Ceiling joists do not run parallel to the rafters. Which TWO provisions describe the required connections and rafter restraint?",
    "questionUk": "Балки стелі не паралельні кроквам. Які ДВА положення описують потрібні з’єднання та стримування крокв?",
    "answers": [
      [
        "Connect ceiling joists to top plates in accordance with Table R602.3(1)",
        "З’єднати балки стелі з верхніми обв’язками за таблицею R602.3(1)"
      ],
      [
        "Tie each rafter across the structure with a rafter tie or a 2×4 kicker connected to the ceiling diaphragm with the required nail capacity",
        "Стримати кожну крокву затяжкою поперек будівлі або підкосом 2×4 до диска стелі з потрібною несучою здатністю цвяхів"
      ],
      [
        "Leave joists unattached because their direction differs",
        "Не кріпити балки через інший напрямок"
      ],
      [
        "Use collar ties alone as an automatic substitute for all lower restraint",
        "Автоматично замінити все нижнє стримування лише верхніми затяжками"
      ],
      [
        "Let the ceiling finish alone resist thrust without the required connection",
        "Передати розпір лише оздобленню стелі без потрібного з’єднання"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The joists connect to top plates; each rafter also needs the specified cross-structure tie or 2×4 kicker connected to the ceiling diaphragm with nail capacity equivalent to Table R802.5.2.",
    "explanationUk": "Балки приєднують до верхніх обв’язок; кожній крокві потрібна затяжка або підкіс 2×4 до диска стелі з цвяховим з’єднанням еквівалентної таблиці R802.5.2 здатності."
  },
  {
    "section": "R802.5.2.3",
    "difficulty": "easy",
    "question": "What minimum lumber grade is specified for blocking in the ceiling-joist and rafter connection provisions?",
    "questionUk": "Яка мінімальна сортність пиломатеріалу потрібна для блокування в положеннях про з’єднання балок стелі та крокв?",
    "answers": [
      [
        "Utility grade",
        "Сорт Utility"
      ],
      [
        "Any ungraded scrap",
        "Будь-які несортовані обрізки"
      ],
      [
        "Appearance grade only, with no structural designation",
        "Лише декоративний сорт без конструкційного позначення"
      ],
      [
        "Cabinet veneer only",
        "Лише меблевий шпон"
      ],
      [
        "No lumber grade requirement",
        "Вимог до сорту немає"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R802.5.2.3 requires blocking to be not less than utility-grade lumber.",
    "explanationUk": "R802.5.2.3 вимагає для блокування пиломатеріал не нижче сорту Utility."
  },
  {
    "section": "R802.6.1",
    "difficulty": "medium",
    "question": "A factory-installed ceiling finish is in place before the ceiling is attached to the walls, and it cannot withstand the required compression. What compression-strip thickness is required above bearing-wall top plates?",
    "questionUk": "Заводське оздоблення стелі змонтовано до приєднання стелі до стін і воно не витримує потрібного стиску. Яка товщина компенсаційної опорної смуги потрібна над верхніми обв’язками несучих стін?",
    "answers": [
      [
        "The same thickness as the finished ceiling material",
        "Така сама, як товщина оздоблення стелі"
      ],
      [
        "Half the finish thickness in all cases",
        "Завжди половина товщини оздоблення"
      ],
      [
        "Exactly 1/8 inch regardless of finish",
        "Рівно 1/8 дюйма незалежно від оздоблення"
      ],
      [
        "Twice the rafter depth",
        "Подвійна висота крокви"
      ],
      [
        "No strip if the ceiling is painted",
        "Смуга не потрібна після фарбування стелі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where the stated installation sequence and inadequate compressive strength occur, the strip above bearing-wall top plates matches the finish thickness and must transmit the transferred loads.",
    "explanationUk": "За заданої послідовності монтажу й недостатньої міцності на стиск смуга над обв’язкою має товщину оздоблення та здатність передавати навантаження."
  },
  {
    "section": "R802.6.1",
    "difficulty": "exam",
    "question": "A compression strip is required above a bearing-wall top plate that is 6 inches wide. What minimum strip width and length follow R802.6.1?",
    "questionUk": "Над верхньою обв’язкою несучої стіни завширшки 6 дюймів потрібна опорна смуга. Які її мінімальні ширина й довжина за R802.6.1?",
    "answers": [
      [
        "At least 3 inches wide and covering the entire plate length",
        "Не менше 3 дюймів завширшки й на всю довжину обв’язки"
      ],
      [
        "At least 1 inch wide at isolated points only",
        "Не менше 1 дюйма завширшки лише в окремих точках"
      ],
      [
        "Exactly 6 inches long regardless of plate length",
        "Рівно 6 дюймів завдовжки незалежно від обв’язки"
      ],
      [
        "At least 2 inches wide over only the first stud",
        "Не менше 2 дюймів завширшки лише над першим стояком"
      ],
      [
        "Any width if strips are spaced 8 feet apart",
        "Будь-яка ширина з інтервалом смуг 8 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The strip covers the entire top-plate length and is at least half its width: 6/2 = 3 inches. It must also be capable of transmitting the loads.",
    "explanationUk": "Смуга перекриває всю довжину обв’язки та має не менше половини її ширини: 6/2 = 3 дюйми. Вона також повинна передавати навантаження."
  }
];
export const intakeVerified106 = verifiedBatch(1257, "Carpentry", "Roof Framing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-103-108", true, "2026-10-22");

