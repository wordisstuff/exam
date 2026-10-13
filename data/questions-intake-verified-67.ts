import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R506.1",
    "difficulty": "easy",
    "question": "A prescriptive slab-on-ground detail specifies 3 inches of concrete. What minimum thickness must replace it?",
    "questionUk": "Приписаний розріз плити по ґрунту вказує 3 дюйми бетону. Яка мінімальна товщина має їх замінити?",
    "answers": [
      [
        "3½ inches",
        "3½ дюйма"
      ],
      [
        "3¼ inches",
        "3¼ дюйма"
      ],
      [
        "4½ inches",
        "4½ дюйма"
      ],
      [
        "5 inches",
        "5 дюймів"
      ],
      [
        "6 inches",
        "6 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R506 requires at least 3½ inches on the prescriptive route, without assuming an alternative ACI 332 design.",
    "explanationUk": "За приписами R506 потрібно щонайменше 3½ дюйма; альтернативне проєктування за ACI 332 тут не передбачене."
  },
  {
    "section": "R506.2",
    "difficulty": "medium",
    "question": "Which THREE materials must be removed inside the foundation walls before slab preparation? Select THREE.",
    "questionUk": "Які ТРИ матеріали треба прибрати всередині фундаментних стін перед підготовкою плити? Оберіть ТРИ.",
    "answers": [
      [
        "Vegetation",
        "Рослинність"
      ],
      [
        "Topsoil",
        "Родючий верхній шар"
      ],
      [
        "Foreign material",
        "Сторонні матеріали"
      ],
      [
        "All undisturbed mineral soil",
        "Увесь непорушений мінеральний ґрунт"
      ],
      [
        "Every existing gravel layer",
        "Кожен наявний шар гравію"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The required removals are vegetation, topsoil and foreign material.",
    "explanationUk": "Слід прибрати рослинність, родючий верхній шар ґрунту та сторонні матеріали."
  },
  {
    "section": "R506.2.1",
    "difficulty": "medium",
    "question": "Without special approval, what maximum depth applies to clean sand or gravel fill beneath a slab?",
    "questionUk": "Яка найбільша глибина засипки з чистого піску або гравію під плитою без окремого погодження?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
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
        "18 inches",
        "18 дюймів"
      ],
      [
        "36 inches",
        "36 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Clean sand or gravel fill is limited to 24 inches unless otherwise approved.",
    "explanationUk": "Для чистого піску або гравію встановлено межу 24 дюйми, якщо інше не погоджено."
  },
  {
    "section": "R506.2.1",
    "difficulty": "exam",
    "question": "Ten inches of earth fill is proposed below a slab, without approval to exceed the prescriptive limit. What is the finding?",
    "questionUk": "Під плитою пропонують 10 дюймів ґрунтової засипки без погодження перевищення приписаної межі. Який висновок правильний?",
    "answers": [
      [
        "It exceeds the 8-inch earth-fill limit",
        "Перевищено межу 8 дюймів для ґрунтової засипки"
      ],
      [
        "It complies with a 12-inch earth-fill limit",
        "Відповідає межі 12 дюймів"
      ],
      [
        "All fill is allowed to 24 inches",
        "Будь-яка засипка дозволена до 24 дюймів"
      ],
      [
        "Only clay fill has a depth limit",
        "Лише глиниста засипка має межу"
      ],
      [
        "A 4-inch slab removes the fill limit",
        "Плита 4 дюйми скасовує обмеження засипки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Earth fill is limited to 8 inches unless otherwise approved; 24 inches applies to clean sand or gravel.",
    "explanationUk": "Ґрунтова засипка обмежена 8 дюймами без іншого погодження; 24 дюйми стосуються чистого піску або гравію."
  },
  {
    "section": "R506.2.1",
    "difficulty": "medium",
    "question": "Slab fill is free of vegetation and foreign material. What additional preparation is required?",
    "questionUk": "Засипка під плитою не містить рослинності й сторонніх матеріалів. Яка додаткова підготовка потрібна?",
    "answers": [
      [
        "Compaction for uniform slab support",
        "Ущільнення для рівномірної опори плити"
      ],
      [
        "Saturation until water ponds",
        "Насичення до появи калюж"
      ],
      [
        "Leaving alternate strips uncompacted",
        "Залишення чергованих смуг неущільненими"
      ],
      [
        "Mixing topsoil into the fill",
        "Домішування родючого ґрунту"
      ],
      [
        "Compaction at the perimeter only",
        "Ущільнення лише по периметру"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Fill must be compacted to provide uniform support.",
    "explanationUk": "Засипку треба ущільнити для рівномірної опори плити."
  },
  {
    "section": "R506.2.2",
    "difficulty": "easy",
    "question": "A below-grade slab does not qualify for the base-course exception. What minimum base thickness applies?",
    "questionUk": "Плита нижче рівня землі не підпадає під виняток щодо підстильного шару. Яка його мінімальна товщина?",
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
        "3 inches",
        "3 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The base beneath a below-grade slab must be at least 4 inches thick.",
    "explanationUk": "Підстильний шар під плитою нижче рівня землі має бути завтовшки щонайменше 4 дюйми."
  },
  {
    "section": "R506.2.2",
    "difficulty": "medium",
    "question": "Which THREE are listed slab-base materials when clean, graded and passing the specified sieve? Select THREE.",
    "questionUk": "Які ТРИ матеріали перелічені для підстильного шару, якщо вони чисті, фракціоновані й проходять потрібне сито? Оберіть ТРИ.",
    "answers": [
      [
        "Crushed concrete",
        "Подрібнений бетон"
      ],
      [
        "Gravel",
        "Гравій"
      ],
      [
        "Crushed blast-furnace slag",
        "Подрібнений доменний шлак"
      ],
      [
        "Demolition wood chips",
        "Деревна тріска від демонтажу"
      ],
      [
        "Unsorted topsoil",
        "Несортований родючий ґрунт"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "These three materials are listed; material must pass a 2-inch sieve.",
    "explanationUk": "Усі три зазначені матеріали входять до переліку; вони мають проходити крізь сито 2 дюйми."
  },
  {
    "section": "R506.2.2 Exception; Table R405.1",
    "difficulty": "exam",
    "question": "A below-grade slab rests on well-drained sand-gravel soil in Table R405.1 Group I. What does the base-course exception permit?",
    "questionUk": "Плита нижче рівня землі лежить на добре дренованому піщано-гравійному ґрунті групи I таблиці R405.1. Що дозволяє виняток щодо підстильного шару?",
    "answers": [
      [
        "Omitting the R506.2.2 base course",
        "Не влаштовувати шар за R506.2.2"
      ],
      [
        "Reducing concrete thickness to 2 inches",
        "Зменшити товщину бетону до 2 дюймів"
      ],
      [
        "Leaving vegetation below the slab",
        "Залишити рослинність під плитою"
      ],
      [
        "Omitting all Minnesota radon measures",
        "Не виконувати жодних радонових заходів Міннесоти"
      ],
      [
        "Using earth fill of unlimited depth",
        "Використати ґрунтову засипку будь-якої глибини"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The specified Group I soils qualify for the base-course exception. Separate radon requirements remain applicable.",
    "explanationUk": "Зазначені ґрунти групи I підпадають під виняток щодо підстильного шару. Окремі радонові вимоги залишаються чинними."
  },
  {
    "section": "R506.2.3",
    "difficulty": "easy",
    "question": "Considering the R506 slab vapor-retarder rule alone, what polyethylene thickness is specified?",
    "questionUk": "Якщо розглядати лише вимогу R506 до пароізоляції під плитою, яка товщина поліетилену встановлена?",
    "answers": [
      [
        "6 mil (0.006 inch)",
        "6 mil (0,006 дюйма)"
      ],
      [
        "2 mil (0.002 inch)",
        "2 mil (0,002 дюйма)"
      ],
      [
        "4 mil (0.004 inch)",
        "4 mil (0,004 дюйма)"
      ],
      [
        "6 mm",
        "6 мм"
      ],
      [
        "¼ inch",
        "¼ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The adopted 2018 rule specifies 6-mil polyethylene or another approved vapor retarder.",
    "explanationUk": "Прийнята норма 2018 року встановлює поліетилен 6 mil або інший погоджений пароізоляційний матеріал."
  },
  {
    "section": "R506.2.3",
    "difficulty": "medium",
    "question": "Where does R506.2.3 place the vapor retarder when a slab base course is used?",
    "questionUk": "Де R506.2.3 розміщує пароізоляцію, якщо під плитою є підстильний шар?",
    "answers": [
      [
        "Between concrete and the base course",
        "Між бетоном і підстильним шаром"
      ],
      [
        "On the finished floor surface",
        "Поверх готової підлоги"
      ],
      [
        "Below all fill and base layers",
        "Під усіма шарами засипки й основи"
      ],
      [
        "Only around the perimeter",
        "Лише по периметру"
      ],
      [
        "At the middle of the concrete thickness",
        "Посередині товщини бетону"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The membrane is between slab and base, or above prepared subgrade when no base exists.",
    "explanationUk": "Мембрана лежить між плитою та підстильним шаром або на підготовленій ґрунтовій основі, якщо такого шару немає."
  },
  {
    "section": "R506.2.3 Exception 2",
    "difficulty": "exam",
    "question": "An unheated storage room is exactly 70 square feet. Does its area alone satisfy the unheated-storage vapor-retarder exception?",
    "questionUk": "Неопалювана комора має площу рівно 70 квадратних футів. Чи відповідає сама її площа винятку щодо пароізоляції для неопалюваних комор?",
    "answers": [
      [
        "No; the area must be less than 70 square feet",
        "Ні; площа має бути меншою за 70 квадратних футів"
      ],
      [
        "Yes; the limit includes 70",
        "Так; межа включає 70"
      ],
      [
        "Yes; the limit is 100",
        "Так; межа становить 100"
      ],
      [
        "No; storage rooms must be heated first",
        "Ні; комори спершу треба опалювати"
      ],
      [
        "Yes; all storage rooms qualify",
        "Так; усі комори підпадають під виняток"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception uses a strict less-than-70 threshold. This does not address separate radon obligations.",
    "explanationUk": "Виняток установлює площу саме менш як 70 квадратних футів. Окремі радонові обов’язки тут не розглядаються."
  },
  {
    "section": "R506.2.4",
    "difficulty": "medium",
    "question": "Provided slab reinforcement is resting on the base before the pour. What correction does R506.2.4 require?",
    "questionUk": "Передбачена арматура плити перед заливанням лежить на підстильному шарі. Яке виправлення потрібне за R506.2.4?",
    "answers": [
      [
        "Support it between the slab center and upper one-third throughout placement",
        "Підперти між серединою плити та верхньою третиною протягом бетонування"
      ],
      [
        "Leave it on the base",
        "Залишити на підстильному шарі"
      ],
      [
        "Hold it against the bottom face",
        "Розмістити біля нижньої грані"
      ],
      [
        "Place it above the concrete surface",
        "Розмістити над поверхнею бетону"
      ],
      [
        "Lift it once after finishing without supports",
        "Раз підняти після оздоблення без опор"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where provided, reinforcement must stay supported in the specified center-to-upper-third zone throughout placement.",
    "explanationUk": "Якщо арматура передбачена, вона має залишатися на опорах у зазначеній зоні від середини до верхньої третини протягом бетонування."
  }
];
export const intakeVerified67 = verifiedBatch(789, "Footings and Foundations", "Foundations", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018P7/chapter-5-floors", seeds, "intake-series-67-72", true);

