import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";

const seeds: VerifiedSeed[] = [
  {
    "section": "R403.4.1",
    "difficulty": "exam",
    "question": "Which TWO aggregate characteristics are required for the prescribed crushed-stone footing beneath a precast foundation?",
    "questionUk": "Які ДВІ характеристики заповнювача потрібні для передбаченої нормою щебеневої основи під збірний фундамент?",
    "answers": [
      [
        "Clean stone free of organic, clayey or silty soils",
        "Чистий щебінь без органічного, глинистого чи пилуватого ґрунту"
      ],
      [
        "Angular stone meeting ASTM C33",
        "Кутастий щебінь за ASTM C33"
      ],
      [
        "Rounded landscaping pebbles regardless of grading",
        "Округла декоративна галька незалежно від зернового складу"
      ],
      [
        "Stone intentionally mixed with topsoil",
        "Щебінь, навмисно змішаний із рослинним ґрунтом"
      ],
      [
        "Clay fines added to bind the stone",
        "Глинисті домішки для зв’язування щебеню"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R403.4.1 calls for clean angular crushed stone meeting ASTM C33 and excludes organic, clayey and silty soils.",
    "explanationUk": "R403.4.1 вимагає чистого кутастого щебеню за ASTM C33 без органічного, глинистого й пилуватого ґрунту."
  },
  {
    "section": "R403.4.1",
    "difficulty": "medium",
    "question": "What stone-size range is prescribed for crushed-stone footings for precast foundations?",
    "questionUk": "Який діапазон розмірів щебеню передбачено для основ збірних фундаментів?",
    "answers": [
      [
        "Not smaller than 1/16 inch and not larger than 1/2 inch",
        "Не менше 1/16 і не більше 1/2 дюйма"
      ],
      [
        "1/2 inch to 2 inches",
        "Від 1/2 до 2 дюймів"
      ],
      [
        "1 inch to 3 inches",
        "Від 1 до 3 дюймів"
      ],
      [
        "Any size below 3 inches",
        "Будь-який розмір до 3 дюймів"
      ],
      [
        "Only stone larger than 3/4 inch",
        "Лише щебінь понад 3/4 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The prescribed limits are a 1/16-inch minimum and 1/2-inch maximum stone size.",
    "explanationUk": "Передбачено мінімальний розмір 1/16 дюйма та максимальний 1/2 дюйма."
  },
  {
    "section": "R403.4.1",
    "difficulty": "medium",
    "question": "A crew plans to consolidate a 12-inch lift of crushed stone beneath a precast foundation using only a hand tamper. What revision matches R403.4.1?",
    "questionUk": "Бригада планує ущільнити під збірним фундаментом шар щебеню 12 дюймів лише ручною трамбівкою. Яке виправлення відповідає R403.4.1?",
    "answers": [
      [
        "Use a vibratory plate and lifts no greater than 8 inches",
        "Використати віброплиту й шари не товщі за 8 дюймів"
      ],
      [
        "Keep 12-inch lifts and wet the surface",
        "Залишити шари 12 дюймів і змочити поверхню"
      ],
      [
        "Use 16-inch lifts with the hand tamper",
        "Ущільнювати вручну шарами 16 дюймів"
      ],
      [
        "Compact only after the wall panels are installed",
        "Ущільнювати лише після монтажу панелей"
      ],
      [
        "Do not compact clean stone",
        "Чистий щебінь не ущільнювати"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The stone must be consolidated with a vibratory plate in lifts not greater than 8 inches.",
    "explanationUk": "Щебінь ущільнюють віброплитою шарами не більше 8 дюймів."
  },
  {
    "section": "R403.4.1",
    "difficulty": "easy",
    "question": "Which seismic design category is within the stated A-through-C limitation for the prescribed crushed-stone precast-foundation footing?",
    "questionUk": "Яка сейсмічна категорія входить у встановлене обмеження A–C для нормативної щебеневої основи збірного фундаменту?",
    "answers": [
      [
        "Category C",
        "Категорія C"
      ],
      [
        "Category D0",
        "Категорія D0"
      ],
      [
        "Category D1",
        "Категорія D1"
      ],
      [
        "Category D2",
        "Категорія D2"
      ],
      [
        "Category E",
        "Категорія E"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Crushed-stone footings under this provision are limited to Seismic Design Categories A, B and C.",
    "explanationUk": "Щебеневі основи за цим положенням обмежені сейсмічними категоріями A, B і C."
  },
  {
    "section": "Table R403.4",
    "difficulty": "exam",
    "question": "Use the conventional light-frame, one-story, 1,100-plf row of Table R403.4. For an 8-inch wall on 1,500-psf bearing soil, what minimum stone depth D and width W are listed?",
    "questionUk": "Використайте рядок таблиці R403.4 для одноповерхової звичайної легкої каркасної конструкції, 1 100 фунтів/пог. фут. Які мінімальні глибина D і ширина W щебеню для стіни 8 дюймів і ґрунту 1 500 фунтів/кв. фут?",
    "answers": [
      [
        "D = 4 in.; W = 13 in.",
        "D = 4 дюйми; W = 13 дюймів"
      ],
      [
        "D = 4 in.; W = 8 in.",
        "D = 4 дюйми; W = 8 дюймів"
      ],
      [
        "D = 6 in.; W = 15 in.",
        "D = 6 дюймів; W = 15 дюймів"
      ],
      [
        "D = 14 in.; W = 25 in.",
        "D = 14 дюймів; W = 25 дюймів"
      ],
      [
        "D = 8 in.; W = 24 in.",
        "D = 8 дюймів; W = 24 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "At the stated row, soil bearing and wall width, the table gives a 4-inch depth and 13-inch width; this is the stone-footing table, not a concrete-footing schedule.",
    "explanationUk": "У заданому рядку й колонці таблиця дає глибину 4 дюйми та ширину 13 дюймів. Це таблиця щебеневих, а не бетонних основ."
  },
  {
    "section": "Table R403.4",
    "difficulty": "exam",
    "question": "For conventional light-frame construction, three stories and a 2,900-plf uniform wall load, Table R403.4 is used with an 8-inch wall and 1,500-psf bearing soil. What minimum D and W are listed?",
    "questionUk": "Для звичайної легкої каркасної конструкції у три поверхи з рівномірним навантаженням стіни 2 900 фунтів/пог. фут за таблицею R403.4 прийнято стіну 8 дюймів і ґрунт 1 500 фунтів/кв. фут. Які мінімальні D та W?",
    "answers": [
      [
        "D = 14 in.; W = 25 in.",
        "D = 14 дюймів; W = 25 дюймів"
      ],
      [
        "D = 4 in.; W = 13 in.",
        "D = 4 дюйми; W = 13 дюймів"
      ],
      [
        "D = 6 in.; W = 15 in.",
        "D = 6 дюймів; W = 15 дюймів"
      ],
      [
        "D = 9 in.; W = 19 in.",
        "D = 9 дюймів; W = 19 дюймів"
      ],
      [
        "D = 12 in.; W = 24 in.",
        "D = 12 дюймів; W = 24 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The specified three-story/2,900-plf row at 1,500 psf and 8-inch wall width gives D = 14 inches and W = 25 inches.",
    "explanationUk": "У рядку для трьох поверхів і 2 900 фунтів/пог. фут за заданих ґрунту й ширини стіни наведено D = 14 та W = 25 дюймів."
  },
  {
    "section": "Table R403.4, Footnote a",
    "difficulty": "medium",
    "question": "Which interpolation is expressly permitted by footnote a of the crushed-stone footing table?",
    "questionUk": "Яку інтерполяцію прямо дозволяє примітка a таблиці щебеневих основ?",
    "answers": [
      [
        "Linear interpolation of stone depth between wall widths within a soil-bearing-value category",
        "Лінійну інтерполяцію глибини щебеню між ширинами стіни в межах однієї несучої здатності ґрунту"
      ],
      [
        "Extrapolation to any number of stories",
        "Екстраполяцію на будь-яку кількість поверхів"
      ],
      [
        "Interpolation of seismic category",
        "Інтерполяцію сейсмічної категорії"
      ],
      [
        "Eliminating stone width by averaging wall loads",
        "Скасування ширини основи усередненням навантажень"
      ],
      [
        "Substituting concrete strength for soil bearing",
        "Заміну несучої здатності ґрунту міцністю бетону"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The footnote allows linear interpolation of stone depth between wall widths within each load-bearing value of soil.",
    "explanationUk": "Примітка дозволяє лінійно інтерполювати глибину щебеню між ширинами стін у межах кожної категорії несучої здатності ґрунту."
  },
  {
    "section": "R404.4",
    "difficulty": "medium",
    "question": "A freestanding retaining wall has no lateral support at its top and retains 60 inches of unbalanced fill. It does not support a building. What does R404.4 require?",
    "questionUk": "Окрема підпірна стіна без бічного закріплення зверху утримує перепад засипки 60 дюймів і не підтримує будівлю. Що вимагає R404.4?",
    "answers": [
      [
        "Design in accordance with accepted engineering practice",
        "Розрахунок за прийнятою інженерною практикою"
      ],
      [
        "No design because the fill is less than 8 feet",
        "Розрахунок не потрібен, бо засипка нижче 8 футів"
      ],
      [
        "Use only the nonbearing-wall header table",
        "Застосувати лише таблицю перемичок ненесучих стін"
      ],
      [
        "Treat the wall as ordinary landscape edging",
        "Вважати стіну звичайним садовим бордюром"
      ],
      [
        "Reduce the design load to zero if drainage is installed",
        "Прийняти нульове навантаження за наявності дренажу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "An unsupported-at-top retaining wall with more than 48 inches of unbalanced fill requires engineered design under R404.4.",
    "explanationUk": "Підпірна стіна без закріплення зверху з перепадом засипки понад 48 дюймів потребує розрахунку за R404.4."
  },
  {
    "section": "R404.4",
    "difficulty": "exam",
    "question": "A 30-inch-high retaining wall resists an additional lateral load from a nearby driveway as well as soil pressure. Which conclusion follows from R404.4?",
    "questionUk": "Підпірна стіна заввишки 30 дюймів, крім тиску ґрунту, сприймає додаткове бічне навантаження від під’їзної доріжки. Який висновок випливає з R404.4?",
    "answers": [
      [
        "Accepted engineering design is required because height exceeds 24 inches and additional lateral load is present",
        "Потрібен інженерний розрахунок, бо висота перевищує 24 дюйми й є додаткове бічне навантаження"
      ],
      [
        "No design is required until the wall exceeds 48 inches",
        "Розрахунок не потрібен до перевищення 48 дюймів"
      ],
      [
        "Additional lateral loads may be ignored below 36 inches",
        "До 36 дюймів додаткові бічні навантаження можна ігнорувати"
      ],
      [
        "The rule applies only to wood walls",
        "Правило стосується лише дерев’яних стін"
      ],
      [
        "The driveway load automatically qualifies the wall for a prescriptive exception",
        "Навантаження від доріжки автоматично дає нормативний виняток"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The separate additional-load trigger applies to retaining walls exceeding 24 inches in height; the 48-inch unbalanced-fill threshold is not the only trigger.",
    "explanationUk": "Окрема умова діє для стін вище 24 дюймів із додатковими бічними навантаженнями; межа засипки 48 дюймів — не єдина підстава."
  },
  {
    "section": "R404.4",
    "difficulty": "medium",
    "question": "What safety factor does R404.4 prescribe against both lateral sliding and overturning of retaining walls?",
    "questionUk": "Який коефіцієнт запасу R404.4 передбачає проти бічного зсуву та перекидання підпірних стін?",
    "answers": [
      [
        "1.5",
        "1,5"
      ],
      [
        "1.0",
        "1,0"
      ],
      [
        "1.1",
        "1,1"
      ],
      [
        "2.5",
        "2,5"
      ],
      [
        "4.0",
        "4,0"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The section prescribes a safety factor of 1.5 against lateral sliding and overturning and excludes foundation walls supporting buildings from this section.",
    "explanationUk": "У розділі встановлено коефіцієнт 1,5 проти бічного зсуву та перекидання; фундаментні стіни, що підтримують будівлі, виключено зі сфери цього розділу."
  },
  {
    "section": "R404.5.2",
    "difficulty": "medium",
    "question": "When must the precast concrete foundation wall design drawings be submitted to and approved by the building official?",
    "questionUk": "Коли проєктні креслення збірних бетонних фундаментних стін потрібно подати будівельному інспектору та отримати схвалення?",
    "answers": [
      [
        "Before installation",
        "До монтажу"
      ],
      [
        "Only after the basement is occupied",
        "Лише після заселення підвалу"
      ],
      [
        "Within one year after installation",
        "Протягом року після монтажу"
      ],
      [
        "Only if a panel cracks",
        "Лише якщо панель трісне"
      ],
      [
        "After backfill conceals the panels",
        "Після приховування панелей засипкою"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R404.5.2 requires submission and approval before installation, including the listed design and load information.",
    "explanationUk": "R404.5.2 вимагає подання та схвалення до монтажу з наведенням установлених проєктних даних і навантажень."
  },
  {
    "section": "R404.5.3",
    "difficulty": "easy",
    "question": "How must precast concrete foundation wall panels be identified under R404.5.3?",
    "questionUk": "Як за R404.5.3 мають бути ідентифіковані збірні бетонні панелі фундаментних стін?",
    "answers": [
      [
        "By a certificate-of-inspection label from an approved third-party inspection agency",
        "Етикеткою сертифіката інспекції від схваленої незалежної інспекційної організації"
      ],
      [
        "By the installer’s handwritten initials alone",
        "Лише рукописними ініціалами монтажника"
      ],
      [
        "By a retail price sticker",
        "Цінником магазину"
      ],
      [
        "By any unverified manufacturer brochure",
        "Будь-яким неперевіреним буклетом виробника"
      ],
      [
        "No identification is required after delivery",
        "Після доставки ідентифікація не потрібна"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The required identification is a certificate-of-inspection label issued by an approved third-party inspection agency.",
    "explanationUk": "Потрібна етикетка сертифіката інспекції, видана схваленою незалежною інспекційною організацією."
  }
];

export const intakeVerified99 = verifiedBatch(1173, "Footings and Foundations", "Foundations", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-97-102", true, "2026-10-22");

