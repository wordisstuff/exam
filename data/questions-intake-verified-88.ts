import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R905.3.1",
    "difficulty": "exam",
    "question": "Select the roof-deck arrangements expressly permitted for clay or concrete tile.",
    "questionUk": "Виберіть конструкції настилу, прямо дозволені для глиняної чи бетонної черепиці.",
    "answers": [
      [
        "Solid sheathing",
        "Суцільний настил"
      ],
      [
        "Spaced structural sheathing boards",
        "Розріджені конструкційні дошки настилу"
      ],
      [
        "Only unsupported roofing felt",
        "Лише покрівельний картон без опори"
      ],
      [
        "Gypsum ceiling board used as exterior decking",
        "Стельовий гіпсокартон як зовнішній настил"
      ],
      [
        "No deck or supports",
        "Без настилу й опор"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R905.3.1 permits solid sheathing or spaced structural sheathing boards, subject to other structural and installation requirements.",
    "explanationUk": "R905.3.1 дозволяє суцільний настил або розріджені конструкційні дошки з дотриманням інших конструктивних і монтажних вимог."
  },
  {
    "section": "R905.3.2",
    "difficulty": "exam",
    "question": "At the minimum clay/concrete tile slope, what rise is required over 12 horizontal feet?",
    "questionUk": "Який підйом потрібний на 12 горизонтальних футів за мінімального ухилу глиняної чи бетонної черепиці?",
    "answers": [
      [
        "30 inches",
        "30 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "18 inches",
        "18 дюймів"
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
    "explanation": "The minimum slope is 2½:12, or 2½ inches per horizontal foot: 12 × 2.5 = 30 inches.",
    "explanationUk": "Мінімальний ухил — 2½:12, тобто 2½ дюйма на горизонтальний фут: 12 × 2,5 = 30 дюймів."
  },
  {
    "section": "R905.3.2; Table R905.1.1(2)",
    "difficulty": "medium",
    "question": "A clay-tile roof has a 3:12 slope and uses the prescribed felt-underlayment application rather than an approved alternative. How many layers are required?",
    "questionUk": "Глиняна черепиця має ухил 3:12 і передбачену кодом повстяну підкладку без схваленої альтернативи. Скільки шарів потрібно?",
    "answers": [
      [
        "At least two layers",
        "Щонайменше два шари"
      ],
      [
        "No underlayment",
        "Підкладка не потрібна"
      ],
      [
        "Only one layer",
        "Лише один шар"
      ],
      [
        "Exactly three layers in every case",
        "Завжди рівно три шари"
      ],
      [
        "Only narrow strips at the ridge",
        "Лише вузькі смуги на коньку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 3:12 slope falls between 2½:12 and 4:12, where the prescribed tile underlayment is doubled.",
    "explanationUk": "Ухил 3:12 лежить між 2½:12 та 4:12, де передбачена підкладка черепиці є двошаровою."
  },
  {
    "section": "R905.3.4–R905.3.5",
    "difficulty": "medium",
    "question": "Which material-standard pairing correctly distinguishes clay and concrete roof tile?",
    "questionUk": "Яка пара стандартів правильно розрізняє глиняну й бетонну покрівельну черепицю?",
    "answers": [
      [
        "Clay: ASTM C1167; concrete: ASTM C1492",
        "Глиняна: ASTM C1167; бетонна: ASTM C1492"
      ],
      [
        "Clay: ASTM C1492; concrete: ASTM C1167",
        "Глиняна: ASTM C1492; бетонна: ASTM C1167"
      ],
      [
        "Both: ASTM C1107",
        "Обидві: ASTM C1107"
      ],
      [
        "Both: ASTM C665",
        "Обидві: ASTM C665"
      ],
      [
        "Clay: ASTM C143; concrete: ASTM C1116",
        "Глиняна: ASTM C143; бетонна: ASTM C1116"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Clay tile must meet C1167 and concrete tile C1492; the standards are not interchangeable.",
    "explanationUk": "Глиняна черепиця відповідає C1167, бетонна — C1492; ці стандарти не взаємозамінні."
  },
  {
    "section": "R905.3.6",
    "difficulty": "medium",
    "question": "Which nail gauge is the specified minimum-size designation for fastening clay or concrete tile?",
    "questionUk": "Який калібр указано як мінімальне позначення розміру цвяха для глиняної чи бетонної черепиці?",
    "answers": [
      [
        "11-gage",
        "Калібр 11"
      ],
      [
        "18-gage",
        "Калібр 18"
      ],
      [
        "20-gage",
        "Калібр 20"
      ],
      [
        "22-gage",
        "Калібр 22"
      ],
      [
        "24-gage",
        "Калібр 24"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Tile nails must be corrosion resistant and at least 11-gage, with the separately required head and penetration dimensions. Higher gage numbers in the distractors are thinner.",
    "explanationUk": "Цвяхи черепиці мають бути корозійностійкими, не тоншими за калібр 11, із окремо заданими головкою й заглибленням. Більші номери в інших варіантах означають тонші цвяхи."
  },
  {
    "section": "R905.3.6",
    "difficulty": "exam",
    "question": "Tile is fastened over a ⅝-inch roof deck. Under the nail-penetration rule, which is sufficient for penetration into that deck?",
    "questionUk": "Черепицю кріплять до настилу завтовшки ⅝ дюйма. Яке заглиблення відповідає правилу проникнення цвяха в цей настил?",
    "answers": [
      [
        "Through the full ⅝-inch deck thickness",
        "Крізь усю товщину настилу ⅝ дюйма"
      ],
      [
        "Only ¼ inch into the deck",
        "Лише ¼ дюйма в настил"
      ],
      [
        "Only ⅜ inch into the deck",
        "Лише ⅜ дюйма в настил"
      ],
      [
        "Only ½ inch into the deck",
        "Лише ½ дюйма в настил"
      ],
      [
        "No penetration if the head is wide",
        "Заглиблення не потрібне за широкої головки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Required penetration is at least ¾ inch or through the deck thickness, whichever is less. For a ⅝-inch deck, penetration through the full thickness satisfies this requirement.",
    "explanationUk": "Потрібно щонайменше ¾ дюйма або крізь товщину настилу — що менше. Для настилу ⅝ дюйма наскрізне проникнення виконує цю вимогу."
  },
  {
    "section": "R905.3.6",
    "difficulty": "easy",
    "question": "What is the minimum diameter of attaching wire for clay or concrete roof tile?",
    "questionUk": "Який мінімальний діаметр кріпильного дроту для глиняної чи бетонної черепиці?",
    "answers": [
      [
        "0.083 inch",
        "0,083 дюйма"
      ],
      [
        "0.020 inch",
        "0,020 дюйма"
      ],
      [
        "0.032 inch",
        "0,032 дюйма"
      ],
      [
        "0.040 inch",
        "0,040 дюйма"
      ],
      [
        "0.060 inch",
        "0,060 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Attaching wire may not be smaller than 0.083 inch; nails have their own separate requirements.",
    "explanationUk": "Кріпильний дріт не може бути тоншим за 0,083 дюйма; цвяхи мають окремі вимоги."
  },
  {
    "section": "R905.3.6",
    "difficulty": "exam",
    "question": "At an eave, three tile courses cover only 30 inches measured inward. What minimum perimeter-fastening width still applies?",
    "questionUk": "Біля карниза три ряди черепиці охоплюють лише 30 дюймів углиб. Яка мінімальна ширина зони периметрового кріплення все одно діє?",
    "answers": [
      [
        "36 inches",
        "36 дюймів"
      ],
      [
        "30 inches",
        "30 дюймів"
      ],
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "18 inches",
        "18 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Perimeter fastening includes three courses but not less than 36 inches from the specified roof edges and either side of hips/ridges; three short courses alone are insufficient.",
    "explanationUk": "Периметрове кріплення охоплює три ряди, але щонайменше 36 дюймів від зазначених країв і по обидва боки ребер чи коньків; трьох коротких рядів недостатньо."
  },
  {
    "section": "R905.3.7",
    "difficulty": "medium",
    "question": "In an area subject to snow, what minimum fastener count does the tile rule specify per clay or concrete roof tile?",
    "questionUk": "Скільки мінімально кріплень на кожну глиняну чи бетонну черепицю вимагає правило в місцевості зі снігом?",
    "answers": [
      [
        "Two fasteners per tile",
        "Два кріплення на черепицю"
      ],
      [
        "One fastener per every other row",
        "Одне кріплення через ряд"
      ],
      [
        "One fastener per tile",
        "Одне кріплення на черепицю"
      ],
      [
        "One fastener per three tiles",
        "Одне кріплення на три черепиці"
      ],
      [
        "No fasteners below 5:12",
        "Без кріплень за ухилу менше 5:12"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Snow areas require at least two fasteners per tile. Do not use the lower nonsnow table allowances as an exemption; manufacturer instructions also apply.",
    "explanationUk": "У снігових місцевостях потрібно щонайменше два кріплення на черепицю. Нижчі допуски таблиці для інших місцевостей не є винятком; інструкції виробника також діють."
  },
  {
    "section": "R905.3.8",
    "difficulty": "exam",
    "question": "What minimum overall valley-flashing width results from the tile-roof requirement to extend 11 inches to each side of the centerline?",
    "questionUk": "Яка мінімальна загальна ширина металевого фартуха єндови випливає з вимоги по 11 дюймів по обидва боки осі?",
    "answers": [
      [
        "22 inches",
        "22 дюйми"
      ],
      [
        "11 inches",
        "11 дюймів"
      ],
      [
        "15 inches",
        "15 дюймів"
      ],
      [
        "18 inches",
        "18 дюймів"
      ],
      [
        "20 inches",
        "20 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "11 + 11 = 22 inches total minimum. The tile valley also needs a formed splash-diverter rib at least 1 inch high at the flow line.",
    "explanationUk": "11 + 11 = 22 дюйми мінімально. Єндова черепиці також потребує сформованого водовідбійного ребра заввишки щонайменше 1 дюйм на лінії потоку."
  },
  {
    "section": "R905.3.8",
    "difficulty": "easy",
    "question": "What minimum end lap is required between sections of clay/concrete tile roof flashing?",
    "questionUk": "Який мінімальний торцевий напуск потрібний між секціями фартуха глиняної чи бетонної черепичної покрівлі?",
    "answers": [
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "1½ inches",
        "1½ дюйма"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Flashing sections must overlap at ends at least 4 inches under the tile-flashing rule.",
    "explanationUk": "За правилом фартухів черепиці торці секцій перекриваються щонайменше на 4 дюйми."
  },
  {
    "section": "R905.3.8",
    "difficulty": "exam",
    "question": "A tile valley has 6:12 slope where January average daily temperature is 20°F. Select the permitted metal-valley-underlayment treatments.",
    "questionUk": "Черепична єндова має ухил 6:12, а середньодобова температура січня — 20°F. Виберіть дозволену обробку підкладки металевої єндови.",
    "answers": [
      [
        "Solid-cement the valley underlayment to the roofing underlayment",
        "Суцільно приклеїти підкладку єндови до покрівельної підкладки"
      ],
      [
        "Use self-adhering polymer-modified bitumen sheet",
        "Використати самоклейний полімерно-модифікований бітумний лист"
      ],
      [
        "Leave it loose solely because slope exceeds 3:12",
        "Залишити вільною лише через ухил понад 3:12"
      ],
      [
        "Omit it because snow fasteners are installed",
        "Прибрати через наявність снігових кріплень"
      ],
      [
        "Replace it with interior polyethylene only",
        "Замінити лише внутрішнім поліетиленом"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "At January averages of 25°F or less, slopes below 7:12 require solid-cemented valley underlayment or self-adhering polymer-modified bitumen sheet. The scenario meets both triggers.",
    "explanationUk": "За середньої січневої температури до 25°F і ухилу нижче 7:12 потрібна суцільно приклеєна підкладка або самоклейний полімерно-модифікований бітумний лист. Сценарій відповідає обом умовам."
  }
];
export const intakeVerified88 = verifiedBatch(1041, "Roofing", "Roofing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018/chapter-9-roof-assemblies", seeds, "intake-series-85-90", true, "2026-10-14");

