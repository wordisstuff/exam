import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R703.5",
    "difficulty": "medium",
    "question": "Which standards distinguish ordinary hardboard siding from hardboard used as architectural trim?",
    "questionUk": "Які стандарти розрізняють звичайне облицювання з деревноволокнистих плит і такі плити для архітектурного декору?",
    "answers": [
      [
        "CPA/ANSI A135.6 for siding; CPA/ANSI A135.7 for trim",
        "CPA/ANSI A135.6 для облицювання; CPA/ANSI A135.7 для декору"
      ],
      [
        "ASTM D3679 for both",
        "ASTM D3679 для обох"
      ],
      [
        "ASTM D7793 for siding; ASTM D7254 for trim",
        "ASTM D7793 для облицювання; ASTM D7254 для декору"
      ],
      [
        "ASTM E2273 for both",
        "ASTM E2273 для обох"
      ],
      [
        "ACI 318 for siding; AWC PWF for trim",
        "ACI 318 для облицювання; AWC PWF для декору"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.5 names CPA/ANSI A135.6 for hardboard siding and A135.7 for architectural trim.",
    "explanationUk": "R703.5 називає CPA/ANSI A135.6 для облицювання з твердих деревноволокнистих плит і A135.7 для архітектурного декору."
  },
  {
    "section": "R703.5.1",
    "difficulty": "easy",
    "question": "What maximum spacing is permitted for the horizontal nailing strips or blocking supporting vertical wood siding?",
    "questionUk": "Який найбільший крок горизонтальних рейок для прибивання або перемичок під вертикальне дерев’яне облицювання?",
    "answers": [
      [
        "24 inches on center",
        "24 дюйми між осями"
      ],
      [
        "12 inches on center",
        "12 дюймів між осями"
      ],
      [
        "16 inches on center",
        "16 дюймів між осями"
      ],
      [
        "32 inches on center",
        "32 дюйми між осями"
      ],
      [
        "48 inches on center",
        "48 дюймів між осями"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Vertical wood siding is nailed to horizontal strips or blocking set no more than 24 inches on center.",
    "explanationUk": "Вертикальне дерев’яне облицювання прибивають до горизонтальних рейок або перемичок із кроком не більше 24 дюймів."
  },
  {
    "section": "R703.5.2",
    "difficulty": "medium",
    "question": "A 3/8-inch structural-panel siding sheet is attached directly to studs with its long dimension parallel to them. What maximum stud spacing does this specific limit permit?",
    "questionUk": "Плиту конструкційного облицювання 3/8 дюйма кріплять прямо до стояків довгим напрямком паралельно їм. Який найбільший крок стояків дозволяє це спеціальне обмеження?",
    "answers": [
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
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
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For 3/8-inch panels with the long dimension parallel to studs, direct attachment is not permitted over stud spacing greater than 16 inches; panel rating conditions also apply.",
    "explanationUk": "Для плит 3/8 дюйма довгим напрямком уздовж стояків пряме кріплення не дозволено за кроку понад 16 дюймів; також враховують рейтинг плити."
  },
  {
    "section": "R703.5.2",
    "difficulty": "medium",
    "question": "What general direct-to-stud spacing ceiling applies to wood structural panel siding 7/16 inch thick or thinner, while any stricter orientation or panel-rating limits still apply?",
    "questionUk": "Яка загальна верхня межа кроку стояків для прямого кріплення деревних конструкційних плит облицювання 7/16 дюйма або тонших, зі збереженням суворіших обмежень орієнтації та рейтингу?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "16 inches for every panel and orientation",
        "16 дюймів для всіх плит та орієнтацій"
      ],
      [
        "32 inches",
        "32 дюйми"
      ],
      [
        "48 inches",
        "48 дюймів"
      ],
      [
        "No spacing ceiling",
        "Без верхньої межі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Such panels may not be applied directly to studs more than 24 inches apart. The special 3/8-inch parallel rule and manufacturer span rating can require closer spacing.",
    "explanationUk": "Такі плити не кріплять прямо до стояків із кроком понад 24 дюйми. Спеціальне правило для паралельних плит 3/8 дюйма та рейтинг виробника можуть вимагати меншого кроку."
  },
  {
    "section": "R703.5.2",
    "difficulty": "exam",
    "question": "No alternative joint detail is approved and no wood or structural-panel sheathing is behind the siding. Which TWO details apply to vertical panel-siding joints?",
    "questionUk": "Іншого вузла не схвалено, а за облицюванням немає дощатої чи конструкційної плитної обшивки. Які ДВІ вимоги діють до вертикальних стиків плитного облицювання?",
    "answers": [
      [
        "Locate joints over framing members",
        "Розташувати стики над елементами каркаса"
      ],
      [
        "Use shiplap joints or cover them with a batten",
        "Виконати з’єднання в чверть або накрити нащільником"
      ],
      [
        "Let all joints float between studs",
        "Залишити всі стики вільно між стояками"
      ],
      [
        "Leave every joint open without a cover or shiplap",
        "Залишити всі стики відкритими без перекриття"
      ],
      [
        "Support joints only with loose insulation",
        "Підперти стики лише сипким утеплювачем"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Without the stated sheathing exception, vertical joints occur over framing and are shiplapped or covered with a batten unless otherwise approved.",
    "explanationUk": "Без зазначеного винятку обшивки вертикальні стики розташовують над каркасом і перекривають з’єднанням у чверть або нащільником, якщо інше не схвалено."
  },
  {
    "section": "R703.5.2",
    "difficulty": "medium",
    "question": "Which horizontal panel-siding joint detail is expressly permitted, assuming it occurs over the required solid backing?",
    "questionUk": "Який горизонтальний стик плитного облицювання прямо дозволено за наявності потрібної суцільної опори?",
    "answers": [
      [
        "A lap of at least 1 inch, or a shiplap or Z-flashed joint",
        "Нахлист щонайменше 1 дюйм або стик у чверть чи з Z-фартухом"
      ],
      [
        "An unsupported open butt joint",
        "Непідпертий відкритий стик упритул"
      ],
      [
        "A 1/8-inch lap with no flashing",
        "Нахлист 1/8 дюйма без фартуха"
      ],
      [
        "A strip of paint over an open seam",
        "Смуга фарби поверх відкритого шва"
      ],
      [
        "A joint supported only by housewrap",
        "Стик з опорою лише на вітрозахисну плівку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Horizontal joints lap at least 1 inch, are shiplapped or use Z-flashing, and occur over solid blocking, wood or structural-panel sheathing.",
    "explanationUk": "Горизонтальні стики перекривають щонайменше на 1 дюйм, виконують у чверть або з Z-фартухом над суцільними перемичками чи обшивкою."
  },
  {
    "section": "R703.5.3",
    "difficulty": "medium",
    "question": "No manufacturer recommendation is available for UNRABBETED horizontal wood lap siding. What minimum lap does the fallback rule specify?",
    "questionUk": "Для горизонтального дерев’яного облицювання БЕЗ ВИБРАНОЇ ЧВЕРТІ немає рекомендацій виробника. Який мінімальний нахлист передбачає резервне правило?",
    "answers": [
      [
        "1 inch",
        "1 дюйм"
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
        "2 inches",
        "2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The fallback lap is at least 1 inch for ordinary unrabbeted siding; the separate 1/2-inch allowance is for rabbeted siding. End-joint treatment also applies.",
    "explanationUk": "Для звичайного облицювання без чверті мінімальний нахлист 1 дюйм; окремий допуск 1/2 дюйма стосується облицювання з чвертю. Також діють вимоги торцевих стиків."
  },
  {
    "section": "Table R703.3.3",
    "difficulty": "exam",
    "question": "Which proposed use is expressly outside the optional siding-attachment table that permits fastening without stud penetration?",
    "questionUk": "Яке застосування прямо виключено з додаткової таблиці кріплення облицювання без проникнення в стояки?",
    "answers": [
      [
        "Vertical siding",
        "Вертикальне облицювання"
      ],
      [
        "A qualifying horizontal covering weighing 3 psf",
        "Відповідне горизонтальне облицювання масою 3 фунти/кв. фут"
      ],
      [
        "A qualifying horizontal covering over 1-inch foam",
        "Відповідне горизонтальне облицювання над пінопластом 1 дюйм"
      ],
      [
        "A qualifying horizontal covering attached directly to compliant structural sheathing",
        "Відповідне горизонтальне облицювання прямо до належної конструкційної обшивки"
      ],
      [
        "A qualifying horizontal covering using the listed No. 8 screw",
        "Відповідне горизонтальне облицювання з указаним шурупом №8"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table expressly excludes vertical siding. Its other scope limits include covering weight at most 3 psf and foam thickness at most 2 inches.",
    "explanationUk": "Таблиця прямо виключає вертикальне облицювання. Інші межі — маса не більше 3 фунтів/кв. фут і пінопласт не товщий за 2 дюйми."
  },
  {
    "section": "Table R703.3.3",
    "difficulty": "exam",
    "question": "For qualifying siding 12 inches wide, what maximum spacing does the optional table list for No. 8 screws of at least 0.164-inch diameter, before any tighter manufacturer limit?",
    "questionUk": "Який максимальний крок додаткова таблиця дає для відповідного облицювання завширшки 12 дюймів із шурупами №8 діаметром не менше 0,164 дюйма до застосування суворішої межі виробника?",
    "answers": [
      [
        "16 inches on center",
        "16 дюймів між осями"
      ],
      [
        "8 inches on center",
        "8 дюймів між осями"
      ],
      [
        "12 inches on center",
        "12 дюймів між осями"
      ],
      [
        "15 inches on center",
        "15 дюймів між осями"
      ],
      [
        "24 inches on center",
        "24 дюйми між осями"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The No. 8 screw row lists 16 inches for 12-inch-wide siding. Scope, penetration and manufacturer limits remain applicable.",
    "explanationUk": "Рядок шурупів №8 дає крок 16 дюймів для облицювання шириною 12 дюймів. Зберігаються умови застосування, проникнення й обмеження виробника."
  },
  {
    "section": "Table R703.3.3, Footnote b",
    "difficulty": "exam",
    "question": "Qualifying siding is 8 inches wide and uses the listed No. 6 screws. The base spacing is 12 inches for 12-inch siding, and the manufacturer permits up to 24 inches. What spacing results from the table's 12/s adjustment?",
    "questionUk": "Відповідне облицювання завширшки 8 дюймів кріплять указаними шурупами №6. Базовий крок — 12 дюймів для ширини 12; виробник допускає до 24. Який крок дає множник таблиці 12/s?",
    "answers": [
      [
        "18 inches",
        "18 дюймів"
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
        "24 inches",
        "24 дюйми"
      ],
      [
        "36 inches",
        "36 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Multiply 12 inches by 12/8: 18 inches, which is within the stated manufacturer maximum of 24 inches.",
    "explanationUk": "Множимо 12 дюймів на 12/8: отримуємо 18 дюймів, що не перевищує заданої виробником межі 24."
  },
  {
    "section": "Table R703.3.3, Footnote a",
    "difficulty": "medium",
    "question": "For the optional no-stud-penetration siding table, which sheathing-thickness and fastener-projection pair is required?",
    "questionUk": "Яка пара товщини обшивки та виступу кріплення потрібна для додаткової таблиці без проникнення в стояки?",
    "answers": [
      [
        "At least 7/16-inch structural sheathing and at least 1/4-inch projection through its back",
        "Конструкційна обшивка щонайменше 7/16 дюйма та виступ зі звороту щонайменше 1/4 дюйма"
      ],
      [
        "1/4-inch sheathing and no projection",
        "Обшивка 1/4 дюйма без виступу"
      ],
      [
        "3/8-inch sheathing and 1/16-inch projection",
        "Обшивка 3/8 дюйма та виступ 1/16 дюйма"
      ],
      [
        "Any sheathing thickness with a flush fastener tip",
        "Будь-яка товщина з кінцем кріплення врівень"
      ],
      [
        "Foam alone with no structural sheathing",
        "Лише пінопласт без конструкційної обшивки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote a requires structural panels at least 7/16 inch thick and fasteners extending at least 1/4 inch beyond the back.",
    "explanationUk": "Примітка a вимагає конструкційних плит не тонших за 7/16 дюйма й виступу кріплення щонайменше на 1/4 дюйма зі звороту."
  },
  {
    "section": "R703.3.4, Item 4",
    "difficulty": "medium",
    "question": "Under the ordinary penetration rule for vertical or horizontal wood siding, what minimum fastener penetration is required into studs, combined studs and wood sheathing, or blocking?",
    "questionUk": "Яке мінімальне проникнення кріплення у стояки, стояки разом із дерев’яною обшивкою або перемички потрібне за звичайним правилом для вертикального чи горизонтального дерев’яного облицювання?",
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
        "1 inch",
        "1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Item 4 requires at least 1.5 inches of penetration into the specified supporting wood. Minimum fastener length and applicable alternative attachment provisions must also be checked.",
    "explanationUk": "Пункт 4 вимагає щонайменше 1,5 дюйма проникнення в зазначену дерев’яну опору. Також перевіряють мінімальну довжину й застосовні альтернативні способи кріплення."
  }
];
export const intakeVerified111 = verifiedBatch(1317, "Exterior Finishes", "Exterior", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-109-114", true, "2026-10-22");

