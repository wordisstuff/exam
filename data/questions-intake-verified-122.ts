import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R609.4",
    "difficulty": "medium",
    "question": "Which TWO testing standards are permitted alternatives for garage doors under R609.4?",
    "questionUk": "Які ДВА стандарти випробувань є дозволеними альтернативами для гаражних воріт за R609.4?",
    "answers": [
      [
        "ASTM E330",
        "Стандарт ASTM E330"
      ],
      [
        "ANSI/DASMA 108",
        "Стандарт ANSI/DASMA 108"
      ],
      [
        "ASTM C150",
        "Стандарт ASTM C150"
      ],
      [
        "ASTM C90",
        "Стандарт ASTM C90"
      ],
      [
        "ASTM D226",
        "Стандарт ASTM D226"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R609.4 permits testing under ASTM E330 or ANSI/DASMA 108. The garage door must meet ANSI/DASMA 108 acceptance criteria regardless of which permitted test route is used.",
    "explanationUk": "R609.4 дозволяє випробування за ASTM E330 або ANSI/DASMA 108. За обох шляхів ворота мають відповідати критеріям прийнятності ANSI/DASMA 108."
  },
  {
    "section": "R609.5",
    "difficulty": "easy",
    "question": "Which test standard applies to exterior window and door assemblies outside the scope of both R609.3 and R609.4?",
    "questionUk": "Який стандарт випробувань діє для зовнішніх віконних і дверних конструкцій поза сферою обох розділів R609.3 та R609.4?",
    "answers": [
      [
        "ASTM E330",
        "Стандарт ASTM E330"
      ],
      [
        "ASTM C1396",
        "Стандарт ASTM C1396"
      ],
      [
        "ASTM C270",
        "Стандарт ASTM C270"
      ],
      [
        "ASTM D1970",
        "Стандарт ASTM D1970"
      ],
      [
        "ASTM C150",
        "Стандарт ASTM C150"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.5 directs these other exterior assemblies to ASTM E330 testing. It separately requires their glass to comply with R308.5.",
    "explanationUk": "R609.5 вимагає для цих інших зовнішніх конструкцій випробування ASTM E330. Скло окремо має відповідати R308.5."
  },
  {
    "section": "R609.3.1(1)",
    "difficulty": "exam",
    "question": "A smaller window is assigned a higher wind design pressure by accepted engineering analysis using a previously tested larger window. What component condition is required for that route?",
    "questionUk": "Меншому вікну за інженерним аналізом призначають більший розрахунковий вітровий тиск на основі випробуваного більшого вікна. Яка умова щодо компонентів потрібна для цього шляху?",
    "answers": [
      [
        "The smaller unit must have the same components as the tested unit",
        "Менша конструкція повинна мати ті самі компоненти, що й випробувана"
      ],
      [
        "Only the glass color must match",
        "Має збігатися лише колір скла"
      ],
      [
        "Components may differ without evaluation",
        "Компоненти можна змінювати без оцінки"
      ],
      [
        "Only the supplier's invoice must match",
        "Має збігатися лише рахунок постачальника"
      ],
      [
        "The smaller unit must use thinner framing",
        "Менша конструкція повинна мати тонший каркас"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.3.1(1) requires identical components for this smaller-unit comparative-analysis route. The route also requires engineering analysis and additional validation testing.",
    "explanationUk": "R609.3.1(1) вимагає тих самих компонентів для цього порівняльного аналізу меншої конструкції. Також потрібні інженерний аналіз і додаткове підтверджувальне випробування."
  },
  {
    "section": "R609.3.1(1)",
    "difficulty": "medium",
    "question": "When calculated higher wind pressures are used for smaller windows under R609.3.1(1), which unit must receive an additional validation test?",
    "questionUk": "Коли для менших вікон застосовують розраховані вищі вітрові тиски за R609.3.1(1), яка конструкція потребує додаткового підтверджувального випробування?",
    "answers": [
      [
        "The unit with the highest allowable design pressure",
        "Конструкція з найбільшим допустимим розрахунковим тиском"
      ],
      [
        "Only the unit with the lowest invoice price",
        "Лише конструкція з найнижчою ціною"
      ],
      [
        "Only a random unit with no pressure criterion",
        "Лише випадкова конструкція без критерію тиску"
      ],
      [
        "Only the original larger unit at the original pressure",
        "Лише початкове більше вікно за початкового тиску"
      ],
      [
        "No additional test is required",
        "Додаткове випробування не потрібне"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.3.1(1) requires validation by an additional test of the window or door unit having the highest allowable design pressure. Analysis alone does not complete this route.",
    "explanationUk": "R609.3.1(1) вимагає додаткового випробування віконної чи дверної конструкції з найбільшим допустимим розрахунковим тиском. Самого аналізу для цього шляху недостатньо."
  },
  {
    "section": "R609.7.2.1",
    "difficulty": "medium",
    "question": "A window in a concrete opening has a 1-inch-thick wood buck. Where must anchors through the jamb or jamb clip embed?",
    "questionUk": "Вікно в бетонному прорізі має дерев’яну обсаду завтовшки 1 дюйм. Куди повинні заглиблюватися анкери через раму чи кронштейн рами?",
    "answers": [
      [
        "Directly into the concrete or other substantial substrate",
        "Безпосередньо в бетон чи іншу міцну основу"
      ],
      [
        "Only into the 1-inch wood buck",
        "Лише в дерев’яну обсаду 1 дюйм"
      ],
      [
        "Only into the interior trim",
        "Лише у внутрішню лиштву"
      ],
      [
        "Only into the sealant joint",
        "Лише у шов герметика"
      ],
      [
        "Only into the window's removable screen",
        "Лише у знімну сітку вікна"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "With a wood shim or buck thinner than 1-1/2 inches, R609.7.2.1 requires anchor embedment directly into the masonry, concrete or other substantial substrate.",
    "explanationUk": "За прокладки чи обсади тоншої за 1-1/2 дюйма R609.7.2.1 вимагає безпосереднього анкерування в мурування, бетон або іншу міцну основу."
  },
  {
    "section": "R609.7.2.1",
    "difficulty": "exam",
    "question": "A wood buck is exactly 1-1/2 inches thick, securely fastened to concrete and extends beyond the frame's interior face. What anchorage route does R609.7.2.1 permit?",
    "questionUk": "Дерев’яна обсада має товщину рівно 1-1/2 дюйма, надійно прикріплена до бетону й виступає за внутрішню грань рами. Який шлях анкерування допускає R609.7.2.1?",
    "answers": [
      [
        "Embed anchors in the secured buck through the jamb, jamb clip or flange",
        "Заглибити анкери в закріплену обсаду через раму, кронштейн або фланець"
      ],
      [
        "Attach only to finish casing",
        "Кріпити лише до оздоблювальної лиштви"
      ],
      [
        "Use only adhesive without load-transfer verification",
        "Використати лише клей без перевірки передавання навантаження"
      ],
      [
        "Leave the buck unsecured if flange screws are used",
        "Не кріпити обсаду, якщо є фланцеві шурупи"
      ],
      [
        "Apply the less-than-1-1/2-inch rule exclusively",
        "Застосувати виключно правило товщини менше 1-1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The at-least-1-1/2-inch route permits anchorage into the securely fastened buck when it extends beyond the frame's interior face. The anchors must adequately transfer assembly loads.",
    "explanationUk": "Варіант від 1-1/2 дюйма включно допускає анкерування в надійно закріплену обсаду, яка виступає за внутрішню грань рами. Анкери повинні належно передавати навантаження конструкції."
  },
  {
    "section": "R609.7.2.2",
    "difficulty": "medium",
    "question": "For a window installed in approved wood framing, which anchorage locations does R609.7.2.2 identify?",
    "questionUk": "Які місця анкерування R609.7.2.2 визначає для вікна в дозволеному дерев’яному каркасі?",
    "answers": [
      [
        "Through the frame, by frame clip or through the flange, embedded in the framing",
        "Через раму, кронштейн рами або фланець із заглибленням у каркас"
      ],
      [
        "Only into gypsum board behind the flange",
        "Лише в гіпсокартон за фланцем"
      ],
      [
        "Only into interior casing regardless of framing",
        "Лише у внутрішню лиштву незалежно від каркаса"
      ],
      [
        "Only through the insect screen",
        "Лише через москітну сітку"
      ],
      [
        "Only into foam insulation surrounding the opening",
        "Лише в пінний утеплювач навколо прорізу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R609.7.2.2 allows the listed frame/clip/flange methods with anchors embedded in the frame construction to transfer loads. Finish layers are not the specified anchoring substrate.",
    "explanationUk": "R609.7.2.2 дозволяє зазначені методи через раму, кронштейн чи фланець із заглибленням анкерів у каркас для передавання навантажень. Оздоблення не є заданою основою анкерування."
  },
  {
    "section": "R607.5.1",
    "difficulty": "exam",
    "question": "A structural support for glass-unit masonry spans 120 inches. What maximum total deflection follows R607.5.1?",
    "questionUk": "Конструкційна опора мурування зі склоблоків має проліт 120 дюймів. Який максимальний сумарний прогин за R607.5.1?",
    "answers": [
      [
        "0.20 inch",
        "0,20 дюйма"
      ],
      [
        "0.33 inch",
        "0,33 дюйма"
      ],
      [
        "0.50 inch",
        "0,50 дюйма"
      ],
      [
        "0.67 inch",
        "0,67 дюйма"
      ],
      [
        "1.00 inch",
        "1,00 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The limit is span/600: 120 ÷ 600 = 0.20 inch. The glazing-mullion L/175 limit does not govern this glass-unit masonry support.",
    "explanationUk": "Межа — проліт/600: 120 ÷ 600 = 0,20 дюйма. Межа L/175 для віконних імпостів не стосується цієї опори склоблоків."
  },
  {
    "section": "R607.5.2",
    "difficulty": "exam",
    "question": "Actual lateral load on a glass-unit masonry panel support is 240 pounds per lineal foot. What minimum design load applies under R607.5.2?",
    "questionUk": "Фактичне бічне навантаження на опору панелі склоблоків — 240 фунтів на погонний фут. Яке мінімальне розрахункове навантаження діє за R607.5.2?",
    "answers": [
      [
        "240 pounds per lineal foot",
        "240 фунтів на погонний фут"
      ],
      [
        "200 pounds per lineal foot",
        "200 фунтів на погонний фут"
      ],
      [
        "120 pounds per lineal foot",
        "120 фунтів на погонний фут"
      ],
      [
        "100 pounds per lineal foot",
        "100 фунтів на погонний фут"
      ],
      [
        "40 pounds per lineal foot",
        "40 фунтів на погонний фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R607.5.2 requires at least 200 pounds per lineal foot or actual applied load, whichever is greater. Here 240 governs.",
    "explanationUk": "R607.5.2 вимагає не менше 200 фунтів на погонний фут або фактичне навантаження, залежно від більшого. Тут визначальним є 240."
  },
  {
    "section": "R607.5.2 Exceptions 1–2",
    "difficulty": "medium",
    "question": "Select TWO lateral-support exceptions for glass-unit masonry panels.",
    "questionUk": "Оберіть ДВА винятки щодо бічного закріплення панелей зі склоблоків.",
    "answers": [
      [
        "Top support is not required for a panel one unit wide",
        "Верхнє закріплення не потрібне для панелі завширшки один блок"
      ],
      [
        "Side support is not required for a panel one unit high",
        "Бічне закріплення не потрібне для панелі заввишки один блок"
      ],
      [
        "All support is waived for any interior panel",
        "Будь-яка внутрішня панель звільнена від усіх опор"
      ],
      [
        "Bottom bearing is waived for panels under 10 feet",
        "Для панелей нижче 10 футів не потрібне нижнє опирання"
      ],
      [
        "All panels may omit top and side restraints",
        "Усі панелі можуть не мати верхнього й бічних кріплень"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The exceptions address the top of one-unit-wide panels and sides of one-unit-high panels. Single-unit panels still require channel-type restraints under the main rule.",
    "explanationUk": "Винятки стосуються верху панелей завширшки один блок і боків панелей заввишки один блок. Для одиничних блоків основне правило все одно вимагає канального закріплення."
  },
  {
    "section": "R607.5.2.1",
    "difficulty": "medium",
    "question": "Which glass-unit masonry panel-anchor detail meets the specified spacing, embedment and fastener minimums?",
    "questionUk": "Який анкерний вузол панелі склоблоків відповідає заданим кроку, заглибленню та мінімуму кріплень?",
    "answers": [
      [
        "At most 16 inches on center, at least 12-inch embedment and two fasteners",
        "Крок не більше 16 дюймів, заглиблення не менше 12 дюймів і два кріплення"
      ],
      [
        "24 inches on center, 6-inch embedment and one fastener",
        "Крок 24 дюйми, заглиблення 6 дюймів і одне кріплення"
      ],
      [
        "32 inches on center, 12-inch embedment and one fastener",
        "Крок 32 дюйми, заглиблення 12 дюймів і одне кріплення"
      ],
      [
        "16 inches on center, 3-inch embedment and one fastener",
        "Крок 16 дюймів, заглиблення 3 дюйми й одне кріплення"
      ],
      [
        "48 inches on center, 4-inch embedment and two fasteners",
        "Крок 48 дюймів, заглиблення 4 дюйми й два кріплення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R607.5.2.1 limits anchor spacing along jambs and head to 16 inches, requires at least 12 inches of embedment, and specifies two fasteners to resist the required loads.",
    "explanationUk": "R607.5.2.1 обмежує крок анкерів уздовж боків і верху 16 дюймами, вимагає заглиблення щонайменше 12 дюймів та два кріплення для сприйняття навантажень."
  },
  {
    "section": "R607.5.2.2",
    "difficulty": "easy",
    "question": "What minimum recess into a channel or chase is required for channel-restrained glass-unit masonry panels?",
    "questionUk": "Яке мінімальне заведення у канал чи паз потрібне для канального закріплення панелей склоблоків?",
    "answers": [
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "1/8 inch",
        "1/8 дюйма"
      ],
      [
        "1/4 inch",
        "1/4 дюйма"
      ],
      [
        "3/8 inch",
        "3/8 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R607.5.2.2 requires at least a 1-inch recess. Restraints must also be oversized to accommodate expansion material, packing and sealant.",
    "explanationUk": "R607.5.2.2 вимагає заведення щонайменше на 1 дюйм. Розмір закріплення також має вміщувати компенсаційний матеріал, ущільнення й герметик."
  }
];
export const intakeVerified122 = verifiedBatch(1449, "Exterior Finishes", "Windows & Doors", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-121-126", true, "2026-10-22");
