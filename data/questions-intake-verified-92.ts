import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R608.5.4.1",
    "difficulty": "medium",
    "question": "Before placing concrete wall material, how must reinforcing steel be secured?",
    "questionUk": "Як потрібно закріпити арматуру перед укладанням бетону стіни?",
    "answers": [
      [
        "With tie wire or another bar-support system preventing displacement during placement",
        "В’язальним дротом або іншою опорною системою від зміщення під час бетонування"
      ],
      [
        "Only by leaning it against the form",
        "Лише притуливши до форми"
      ],
      [
        "Only by holding it until the first bucket",
        "Лише притримавши до першого ковша"
      ],
      [
        "No support until concrete hardens",
        "Без опори до твердіння"
      ],
      [
        "With finish paint instead of supports",
        "Оздоблювальною фарбою замість опор"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Bars must remain in their proper form locations during concrete placement; the rule allows tie wire or another effective bar-support system.",
    "explanationUk": "Арматура має залишатися в належному положенні у формах під час бетонування; дозволені в’язальний дріт або інша дієва система опор."
  },
  {
    "section": "R608.5.4.1",
    "difficulty": "exam",
    "question": "Where required wall-reinforcement cover is ¾ inch, what is the largest permitted minus tolerance under this section?",
    "questionUk": "Якщо потрібний захисний шар арматури стіни — ¾ дюйма, який найбільший мінусовий допуск дозволяє цей розділ?",
    "answers": [
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
      ],
      [
        "⅝ inch",
        "⅝ дюйма"
      ],
      [
        "¾ inch",
        "¾ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Take the smaller of one-third required cover and ⅜ inch: (¾)/3 = ¼ inch. This is a tolerance, not permission to specify a smaller design cover.",
    "explanationUk": "Беруть менше з третини потрібного шару та ⅜ дюйма: (¾)/3 = ¼ дюйма. Це допуск, а не дозвіл проєктувати менший шар."
  },
  {
    "section": "Table R608.5.4(1), tension lap, No. 4/Grade 60",
    "difficulty": "medium",
    "question": "What tension lap-splice length does the table require for a No. 4 bar with 60,000-psi yield strength?",
    "questionUk": "Яку довжину напуску в розтягнутому стику таблиця задає стрижню №4 з границею плинності 60 000 psi?",
    "answers": [
      [
        "30 inches",
        "30 дюймів"
      ],
      [
        "15 inches",
        "15 дюймів"
      ],
      [
        "20 inches",
        "20 дюймів"
      ],
      [
        "23 inches",
        "23 дюйми"
      ],
      [
        "45 inches",
        "45 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The tension-lap row for No. 4 and the 60,000-psi column intersect at 30 inches; 23 inches is its straight-bar development value, not lap length.",
    "explanationUk": "Рядок розтягнутого напуску №4 та колонка 60 000 psi дають 30 дюймів; 23 дюйми — анкерування прямого стрижня, а не напуск."
  },
  {
    "section": "Table R608.5.4(1), tension lap, No. 5",
    "difficulty": "exam",
    "question": "For a No. 5 tension lap, changing steel from 40,000 to 60,000 psi increases the table length by how much?",
    "questionUk": "На скільки таблиця збільшує розтягнутий напуск стрижня №5 за переходу зі сталі 40 000 на 60 000 psi?",
    "answers": [
      [
        "13 inches",
        "13 дюймів"
      ],
      [
        "5 inches",
        "5 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "10 inches",
        "10 дюймів"
      ],
      [
        "15 inches",
        "15 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The No. 5 tension lap changes from 25 to 38 inches: 38 − 25 = 13 inches. Higher steel grade does not mean a shorter development requirement.",
    "explanationUk": "Напуск №5 змінюється з 25 до 38 дюймів: 38 − 25 = 13. Вищий клас сталі не означає коротшого потрібного анкерування."
  },
  {
    "section": "Table R608.5.4(1), straight development, No. 6/Grade 60",
    "difficulty": "medium",
    "question": "A straight No. 6 bar must be developed in tension using the 60,000-psi column. Which minimum length is listed?",
    "questionUk": "Прямий стрижень №6 потрібно заанкерувати на розтяг за колонкою 60 000 psi. Яку мінімальну довжину вказано?",
    "answers": [
      [
        "34 inches",
        "34 дюйми"
      ],
      [
        "18 inches",
        "18 дюймів"
      ],
      [
        "23 inches",
        "23 дюйми"
      ],
      [
        "30 inches",
        "30 дюймів"
      ],
      [
        "45 inches",
        "45 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For straight tension development, No. 6/60,000 psi is 34 inches. Its tension lap is 45 inches, a different table block.",
    "explanationUk": "Для прямого анкерування №6/60 000 psi задано 34 дюйми. Його розтягнутий напуск — 45 дюймів в іншому блоці таблиці."
  },
  {
    "section": "Table R608.5.4(1), straight development, No. 5/Grade 40",
    "difficulty": "exam",
    "question": "A No. 5 Grade 40 straight tension bar has 18 inches of available development. Does it meet the table minimum?",
    "questionUk": "Для прямого розтягнутого стрижня №5 Grade 40 є 18 дюймів анкерування. Чи достатньо цього за таблицею?",
    "answers": [
      [
        "No; at least 19 inches is required",
        "Ні; потрібно щонайменше 19 дюймів"
      ],
      [
        "Yes; the requirement is 15 inches",
        "Так; потрібно 15 дюймів"
      ],
      [
        "Yes; the requirement is 18 inches",
        "Так; потрібно 18 дюймів"
      ],
      [
        "No; every straight bar needs 38 inches",
        "Ні; кожному прямому стрижню потрібно 38 дюймів"
      ],
      [
        "Yes; steel grade removes development requirements",
        "Так; клас сталі скасовує анкерування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The No. 5/40,000-psi straight-bar row is 19 inches, so 18 inches is short by 1 inch.",
    "explanationUk": "Рядок прямого стрижня №5/40 000 psi дає 19 дюймів, отже 18 дюймів бракує на 1 дюйм."
  },
  {
    "section": "Table R608.5.4(1), hook development, No. 4/Grade 60",
    "difficulty": "exam",
    "question": "A No. 4 Grade 60 bar has a standard 90° hook with at least 2½-inch side cover and 2-inch cover on its extension. What tension development length is listed?",
    "questionUk": "Стрижень №4 Grade 60 має стандартний гак 90°, бічний шар від 2½ дюйма та шар на продовженні від 2 дюймів. Яка таблична довжина анкерування на розтяг?",
    "answers": [
      [
        "9 inches",
        "9 дюймів"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "23 inches",
        "23 дюйми"
      ],
      [
        "30 inches",
        "30 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Meeting the hook-cover conditions selects the shorter hook block: No. 4/60,000 psi is 9 inches. Hook shape and other cover requirements still apply.",
    "explanationUk": "Виконані умови захисного шару дають коротший блок гаків: №4/60 000 psi — 9 дюймів. Форма гака й інші вимоги шару залишаються."
  },
  {
    "section": "Table R608.5.4(1), reduced-cover hook, No. 4/Grade 60",
    "difficulty": "exam",
    "question": "A No. 4 Grade 60 standard hook lacks the side cover needed for the shorter hook-development block. Which listed development length applies instead?",
    "questionUk": "Стандартний гак №4 Grade 60 не має бічного шару, потрібного коротшому блоку анкерування гаків. Яка таблична довжина застосовується натомість?",
    "answers": [
      [
        "12 inches",
        "12 дюймів"
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
        "9 inches",
        "9 дюймів"
      ],
      [
        "10 inches",
        "10 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The less-cover hook block gives 12 inches for No. 4/60,000 psi, rather than 9 inches. This table choice does not waive minimum concrete-cover requirements.",
    "explanationUk": "Блок гаків із меншим шаром дає 12 дюймів для №4/60 000 psi замість 9. Такий вибір не скасовує мінімального бетонного шару."
  },
  {
    "section": "Table R608.5.4(1), hook development, No. 6/Grade 40",
    "difficulty": "medium",
    "question": "For a No. 6 Grade 40 standard 180° hook meeting the table's 2½-inch side-cover condition, what tension development length is listed?",
    "questionUk": "Яка таблична довжина анкерування на розтяг стандартного гака 180° стрижня №6 Grade 40 за виконаного бічного шару 2½ дюйма?",
    "answers": [
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "13 inches",
        "13 дюймів"
      ],
      [
        "23 inches",
        "23 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The adequate-cover hook block lists 8 inches for No. 6/40,000 psi. The bar-extension condition concerns 90° hooks.",
    "explanationUk": "Блок гаків із належним шаром задає 8 дюймів для №6/40 000 psi. Умова шару на продовженні стосується гаків 90°."
  },
  {
    "section": "R608.5.4.4",
    "difficulty": "medium",
    "question": "Do the development lengths in Table R608.5.4(1) apply to bundled lintel bars installed under R608.8.2.2?",
    "questionUk": "Чи застосовуються довжини анкерування таблиці R608.5.4(1) до пакетів стрижнів перемички, установлених за R608.8.2.2?",
    "answers": [
      [
        "Yes; the section expressly applies them to those bundled bars",
        "Так; розділ прямо поширює їх на такі пакети"
      ],
      [
        "No; bundled bars never need development",
        "Ні; пакети ніколи не потребують анкерування"
      ],
      [
        "No; use any field-selected length",
        "Ні; беруть довільну довжину"
      ],
      [
        "Only the first bar needs development",
        "Анкерують лише перший стрижень"
      ],
      [
        "Only after removing all bundle ties",
        "Лише після зняття всіх в’язок пакета"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.5.4.4 expressly applies the table development lengths to bundled bars installed in lintels as specified in R608.8.2.2.",
    "explanationUk": "R608.5.4.4 прямо поширює табличні довжини на пакети стрижнів перемичок, установлені за R608.8.2.2."
  },
  {
    "section": "R608.5.4.2",
    "difficulty": "exam",
    "question": "Select the correct section pair for locating reinforcement in foundation walls versus above-grade concrete walls.",
    "questionUk": "Виберіть правильну пару розділів розташування арматури фундаментних і надземних бетонних стін.",
    "answers": [
      [
        "Foundation: R404.1.3.3.7.2; above-grade: R608.6.5",
        "Фундаментні: R404.1.3.3.7.2; надземні: R608.6.5"
      ],
      [
        "Foundation: R905.3.2; above-grade: R802.9",
        "Фундаментні: R905.3.2; надземні: R802.9"
      ],
      [
        "Foundation: R608.6.5; above-grade: R310.2.1",
        "Фундаментні: R608.6.5; надземні: R310.2.1"
      ],
      [
        "Both: R703.11 only",
        "Обидві: лише R703.11"
      ],
      [
        "Both: R301.8 only",
        "Обидві: лише R301.8"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.5.4.2 sends foundation-wall location to R404.1.3.3.7.2 and above-grade location to R608.6.5; they are not interchangeable.",
    "explanationUk": "R608.5.4.2 відсилає фундаментні стіни до R404.1.3.3.7.2, а надземні — до R608.6.5; це не взаємозамінні правила."
  },
  {
    "section": "R608.5.4.5",
    "difficulty": "easy",
    "question": "Which figure defines standard hooks when the code requires reinforcing bars to terminate with one?",
    "questionUk": "Який рисунок визначає стандартні гаки, коли код вимагає закінчувати ними арматуру?",
    "answers": [
      [
        "Figure R608.5.4(3)",
        "Рисунок R608.5.4(3)"
      ],
      [
        "Figure R403.1.7.1",
        "Рисунок R403.1.7.1"
      ],
      [
        "Figure R802.4.5",
        "Рисунок R802.4.5"
      ],
      [
        "Table R301.5",
        "Таблиця R301.5"
      ],
      [
        "Table R401.4.1",
        "Таблиця R401.4.1"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Standard-hook geometry is referred to Figure R608.5.4(3). Tension-development length is a separate table/figure check.",
    "explanationUk": "Геометрію стандартного гака відсилають до рисунка R608.5.4(3). Довжина анкерування на розтяг — окрема перевірка таблиці й рисунка."
  }
];
export const intakeVerified92 = verifiedBatch(1089, "Footings and Foundations", "Reinforcement", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf", seeds, "intake-series-91-96", true, "2026-10-15");

