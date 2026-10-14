import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R905.10.2(1)",
    "difficulty": "medium",
    "question": "A lapped, nonsoldered metal roof has no lap sealant. Which proposed slope meets its code minimum?",
    "questionUk": "Металева покрівля з напускними непаяними швами не має герметика напусків. Який ухил відповідає мінімуму?",
    "answers": [
      [
        "3:12",
        "Ухил 3:12"
      ],
      [
        "2:12",
        "Ухил 2:12"
      ],
      [
        "1:12",
        "Ухил 1:12"
      ],
      [
        "½:12",
        "Ухил ½:12"
      ],
      [
        "¼:12",
        "Ухил ¼:12"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Without lap sealant, this seam configuration requires at least 3:12; the lower limits for other metal systems do not apply.",
    "explanationUk": "Без герметика для таких швів потрібно щонайменше 3:12; нижчі межі інших металевих систем не діють."
  },
  {
    "section": "R905.10.2(2)",
    "difficulty": "exam",
    "question": "A nonsoldered, lapped metal roof is proposed at ½:12. Which detail is essential to use that code slope allowance?",
    "questionUk": "Непаяну металеву покрівлю з напусками проєктують з ухилом ½:12. Яка деталь необхідна для цього дозволу?",
    "answers": [
      [
        "Approved lap sealant applied following manufacturer instructions",
        "Схвалений герметик напусків за інструкцією виробника"
      ],
      [
        "Paint only on panel faces",
        "Лише фарба на поверхні панелей"
      ],
      [
        "Unsealed overlaps twice as wide",
        "Удвічі ширші негерметизовані напуски"
      ],
      [
        "Asphalt shingles below the panels",
        "Бітумна черепиця під панелями"
      ],
      [
        "A ridge vent",
        "Конькова вентиляція"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The ½:12 minimum is conditional on applied lap sealant approved for the application and installed according to manufacturer instructions.",
    "explanationUk": "Мінімум ½:12 діє за використання герметика, схваленого для цього застосування та нанесеного за інструкцією виробника."
  },
  {
    "section": "R905.10.2(3)",
    "difficulty": "exam",
    "question": "For a standing-seam roof at the code minimum, what vertical rise is needed over 24 feet of horizontal run?",
    "questionUk": "Який підйом потрібен на 24 фути горизонтальної довжини фальцевої покрівлі за мінімального кодового ухилу?",
    "answers": [
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "3 inches",
        "3 дюйми"
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
        "72 inches",
        "72 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Standing seam minimum is ¼:12, or ¼ inch per horizontal foot. Thus 24 × ¼ = 6 inches. Manufacturer requirements may be stricter.",
    "explanationUk": "Мінімум фальцевої системи — ¼:12, тобто ¼ дюйма на горизонтальний фут: 24 × ¼ = 6 дюймів. Виробник може вимагати більше."
  },
  {
    "section": "R905.10.1",
    "difficulty": "medium",
    "question": "Which metal-panel covering may be installed directly on spaced supports under the deck exception?",
    "questionUk": "Яке покриття з металевих панелей дозволено монтувати безпосередньо на розріджені опори за винятком щодо настилу?",
    "answers": [
      [
        "A covering specifically designed for spaced supports",
        "Покриття, спеціально розроблене для розріджених опор"
      ],
      [
        "Any panel thicker than paint",
        "Будь-яка панель товща за фарбу"
      ],
      [
        "Any panel with sealed seams",
        "Будь-яка панель із герметичними швами"
      ],
      [
        "Any panel on a roof above 3:12",
        "Будь-яка панель на ухилі понад 3:12"
      ],
      [
        "Any panel with stainless fasteners",
        "Будь-яка панель із нержавіючими кріпленнями"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Solid or spaced sheathing is the general rule. Direct application to spaced supports requires a covering specifically designed for that arrangement.",
    "explanationUk": "Загальне правило — суцільний або розріджений настил. Безпосередній монтаж на розріджені опори потребує спеціально розробленого покриття."
  },
  {
    "section": "R905.10.4(1)",
    "difficulty": "easy",
    "question": "With no manufacturer installation instructions, which fastener treatment does the metal-panel rule specify for a steel roof?",
    "questionUk": "Яку обробку кріплень правило металевих панелей указує для сталевої покрівлі за відсутності інструкції виробника?",
    "answers": [
      [
        "Galvanizing",
        "Оцинкування"
      ],
      [
        "Untreated bare steel",
        "Необроблена сталь"
      ],
      [
        "Wax coating only",
        "Лише воскове покриття"
      ],
      [
        "Interior drywall finish",
        "Покриття для внутрішнього гіпсокартону"
      ],
      [
        "No treatment requirement",
        "Обробка не потрібна"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The fallback specifies galvanized fasteners for steel roofs; stainless steel is separately acceptable for metal roofs.",
    "explanationUk": "За відсутності інструкції вказано оцинковані кріплення для сталі; нержавіюча сталь окремо дозволена для металевих покрівель."
  },
  {
    "section": "R905.10.4(2)–(3)",
    "difficulty": "exam",
    "question": "Without manufacturer instructions, select all listed fastener materials acceptable for a copper metal-panel roof.",
    "questionUk": "За відсутності інструкції виробника виберіть усі перелічені матеріали кріплень, дозволені для мідної покрівлі з панелей.",
    "answers": [
      [
        "Brass",
        "Латунь"
      ],
      [
        "Bronze",
        "Бронза"
      ],
      [
        "300-series stainless steel",
        "Нержавіюча сталь серії 300"
      ],
      [
        "Plain carbon steel",
        "Звичайна вуглецева сталь"
      ],
      [
        "Aluminum",
        "Алюміній"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The copper-roof list includes copper, brass, bronze, copper alloy and 300-series stainless steel; stainless is also generally acceptable.",
    "explanationUk": "Перелік для міді охоплює мідь, латунь, бронзу, мідні сплави та нержавіючу сталь серії 300; нержавіюча сталь також дозволена загалом."
  },
  {
    "section": "R905.10.5",
    "difficulty": "easy",
    "question": "Where does the metal-roof-panel section direct you to check underlayment requirements?",
    "questionUk": "До якого розділу правило металевих покрівельних панелей відсилає для перевірки підкладки?",
    "answers": [
      [
        "R905.1.1",
        "Розділ R905.1.1"
      ],
      [
        "R505.3.2",
        "Розділ R505.3.2"
      ],
      [
        "R606.4.4",
        "Розділ R606.4.4"
      ],
      [
        "R403.1.6",
        "Розділ R403.1.6"
      ],
      [
        "R702.3",
        "Розділ R702.3"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R905.10.5 points to R905.1.1. Fastener provisions are not a substitute for the underlayment requirements.",
    "explanationUk": "R905.10.5 відсилає до R905.1.1. Правила кріплень не замінюють вимоги до підкладки."
  },
  {
    "section": "Table R905.9.2",
    "difficulty": "medium",
    "question": "Which standard is listed for asphalt used in built-up roofing?",
    "questionUk": "Який стандарт таблиця вказує для бітуму, застосованого в багатошаровій рулонній покрівлі?",
    "answers": [
      [
        "ASTM D312",
        "Стандарт ASTM D312"
      ],
      [
        "ASTM D41",
        "Стандарт ASTM D41"
      ],
      [
        "ASTM D43",
        "Стандарт ASTM D43"
      ],
      [
        "ASTM D6083",
        "Стандарт ASTM D6083"
      ],
      [
        "ASTM D4601",
        "Стандарт ASTM D4601"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The asphalt row lists ASTM D312. D41 is the asphalt-primer row, a different material.",
    "explanationUk": "Для бітуму вказано ASTM D312. D41 стосується бітумної ґрунтовки — іншого матеріалу."
  },
  {
    "section": "R905.11.1",
    "difficulty": "exam",
    "question": "A modified-bitumen roof runs 36 horizontal feet at the minimum design drainage slope. What rise is required?",
    "questionUk": "Модифікована бітумна покрівля має 36 горизонтальних футів за мінімального проєктного ухилу для стоку. Який потрібен підйом?",
    "answers": [
      [
        "9 inches",
        "9 дюймів"
      ],
      [
        "4½ inches",
        "4½ дюйма"
      ],
      [
        "18 inches",
        "18 дюймів"
      ],
      [
        "36 inches",
        "36 дюймів"
      ],
      [
        "108 inches",
        "108 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The design slope is at least ¼:12. At ¼ inch per horizontal foot, 36 × ¼ = 9 inches.",
    "explanationUk": "Проєктний ухил — щонайменше ¼:12. За ¼ дюйма на горизонтальний фут: 36 × ¼ = 9 дюймів."
  },
  {
    "section": "Table R905.11.2",
    "difficulty": "medium",
    "question": "An acrylic roof coating is being checked against the modified-bitumen material table. Which standard belongs to that row?",
    "questionUk": "Акрилове покрівельне покриття перевіряють за таблицею матеріалів модифікованої бітумної покрівлі. Який стандарт відповідає цьому рядку?",
    "answers": [
      [
        "ASTM D6083",
        "Стандарт ASTM D6083"
      ],
      [
        "ASTM D312",
        "Стандарт ASTM D312"
      ],
      [
        "ASTM D450",
        "Стандарт ASTM D450"
      ],
      [
        "ASTM D226",
        "Стандарт ASTM D226"
      ],
      [
        "ASTM D227",
        "Стандарт ASTM D227"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The acrylic-coating row specifies ASTM D6083; the other choices relate to other roofing materials.",
    "explanationUk": "Рядок акрилового покриття вказує ASTM D6083; інші варіанти стосуються інших покрівельних матеріалів."
  },
  {
    "section": "R905.11.2.1",
    "difficulty": "exam",
    "question": "Which two ASTM compliance paths expressly allow a base sheet beneath a modified-bitumen cap sheet?",
    "questionUk": "Які два шляхи відповідності ASTM прямо дозволяють нижній лист під верхнім листом модифікованої бітумної покрівлі?",
    "answers": [
      [
        "ASTM D1970",
        "Стандарт ASTM D1970"
      ],
      [
        "ASTM D4601",
        "Стандарт ASTM D4601"
      ],
      [
        "ASTM D312",
        "Стандарт ASTM D312"
      ],
      [
        "ASTM D41",
        "Стандарт ASTM D41"
      ],
      [
        "ASTM D6083",
        "Стандарт ASTM D6083"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R905.11.2.1 permits D1970 or D4601 base sheets, or a sheet complying with IBC 1507.11.2.",
    "explanationUk": "R905.11.2.1 дозволяє нижні листи за D1970 чи D4601 або за IBC 1507.11.2."
  },
  {
    "section": "R905.11.3",
    "difficulty": "medium",
    "question": "The crew follows the code chapter but disregards the manufacturer's modified-bitumen installation instructions. Is that enough?",
    "questionUk": "Бригада виконує вимоги кодового розділу, але ігнорує інструкцію виробника модифікованої бітумної покрівлі. Чи достатньо цього?",
    "answers": [
      [
        "No; both the chapter and manufacturer instructions apply",
        "Ні; діють і розділ, і інструкція виробника"
      ],
      [
        "Yes; code compliance cancels all instructions",
        "Так; відповідність коду скасовує всі інструкції"
      ],
      [
        "Yes; only membrane color matters",
        "Так; важливий лише колір мембрани"
      ],
      [
        "Yes; if the roof is over a garage",
        "Так; якщо покрівля над гаражем"
      ],
      [
        "Yes; if the owner signs a waiver",
        "Так; якщо власник підпише відмову"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Application must satisfy the chapter and manufacturer instructions; satisfying one does not excuse the other.",
    "explanationUk": "Монтаж має відповідати розділу й інструкції виробника; виконання одного не звільняє від іншого."
  }
];
export const intakeVerified81 = verifiedBatch(957, "Roofing", "Roofing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018/chapter-9-roof-assemblies", seeds, "intake-series-79-84", true);

