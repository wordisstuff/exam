import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R317.3.1",
    "difficulty": "exam",
    "question": "For preservative-treated wood, select the listed general-rule fastener materials without relying on an exception.",
    "questionUk": "Для деревини з консервувальним просоченням виберіть матеріали кріплень за загальним правилом, без застосування винятку.",
    "answers": [
      [
        "Hot-dipped zinc-coated galvanized steel",
        "Гарячеоцинкована сталь"
      ],
      [
        "Stainless steel",
        "Нержавіюча сталь"
      ],
      [
        "Silicon bronze",
        "Кремнієва бронза"
      ],
      [
        "Uncoated carbon-steel nails",
        "Необроблені вуглецеві сталеві цвяхи"
      ],
      [
        "Uncoated aluminum staples",
        "Необроблені алюмінієві скоби"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The general list includes hot-dipped galvanized steel, stainless steel, silicon bronze and copper. The listed plain nails and aluminum staples are not general-rule choices.",
    "explanationUk": "Загальний перелік охоплює гарячеоцинковану й нержавіючу сталь, кремнієву бронзу та мідь. Зазначені звичайні цвяхи й алюмінієві скоби до нього не належать."
  },
  {
    "section": "R317.3.1",
    "difficulty": "easy",
    "question": "What material does the preservative-treated-wood rule specifically require for staples?",
    "questionUk": "Який матеріал правило для консервувально просоченої деревини прямо вимагає для скоб?",
    "answers": [
      [
        "Stainless steel",
        "Нержавіючу сталь"
      ],
      [
        "Plain carbon steel",
        "Звичайну вуглецеву сталь"
      ],
      [
        "Aluminum",
        "Алюміній"
      ],
      [
        "Untreated iron",
        "Необроблене залізо"
      ],
      [
        "Copper-coated plastic",
        "Обміднений пластик"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Staples must be stainless steel; the broader list for other fasteners does not eliminate this specific requirement.",
    "explanationUk": "Скоби мають бути з нержавіючої сталі; ширший перелік інших кріплень не скасовує цю спеціальну вимогу."
  },
  {
    "section": "R317.3.1",
    "difficulty": "medium",
    "question": "No connector coating recommendation is available from the manufacturer for contact with preservative-treated wood. What zinc-coating fallback applies?",
    "questionUk": "Виробник не надав рекомендацій покриття з’єднувача, що контактує з просоченою деревиною. Який резервний рівень оцинкування діє?",
    "answers": [
      [
        "At least ASTM A653 G185 or equivalent",
        "Щонайменше ASTM A653 G185 або еквівалент"
      ],
      [
        "ASTM A653 G30 only",
        "Лише ASTM A653 G30"
      ],
      [
        "Any interior electroplating",
        "Будь-яке внутрішнє гальванічне покриття"
      ],
      [
        "Paint without a metallic coating",
        "Фарба без металевого покриття"
      ],
      [
        "No corrosion protection",
        "Захист від корозії не потрібний"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Follow the connector manufacturer's coating types and weights first; absent recommendations, use at least G185 galvanized steel or equivalent.",
    "explanationUk": "Спочатку виконують рекомендації виробника з’єднувача щодо типу й маси покриття; за їх відсутності — щонайменше G185 або еквівалент."
  },
  {
    "section": "R317.3.1 Exception 1",
    "difficulty": "medium",
    "question": "What minimum steel-bolt diameter is expressly listed in the first preservative-treated-fastener exception?",
    "questionUk": "Який мінімальний діаметр сталевого болта прямо зазначено в першому винятку для кріплень просоченої деревини?",
    "answers": [
      [
        "½ inch",
        "½ дюйма"
      ],
      [
        "¼ inch",
        "¼ дюйма"
      ],
      [
        "⅜ inch",
        "⅜ дюйма"
      ],
      [
        "3⁄16 inch",
        "3⁄16 дюйма"
      ],
      [
        "⅛ inch",
        "⅛ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception lists steel bolts ½ inch in diameter or greater. It does not change separate structural connection design requirements.",
    "explanationUk": "Виняток охоплює сталеві болти діаметром від ½ дюйма. Окремі конструктивні вимоги до з’єднання залишаються."
  },
  {
    "section": "R317.3.1 Exception 2",
    "difficulty": "exam",
    "question": "An eligible screw, not a nail, staple or timber rivet, uses mechanically deposited zinc under the exception. What minimum ASTM B695 class applies?",
    "questionUk": "Придатний шуруп, який не є цвяхом, скобою чи дерев’яною каркасною заклепкою, має механічно нанесений цинк за винятком. Який мінімальний клас ASTM B695?",
    "answers": [
      [
        "Class 55",
        "Клас 55"
      ],
      [
        "Class 5",
        "Клас 5"
      ],
      [
        "Class 10",
        "Клас 10"
      ],
      [
        "Class 25",
        "Клас 25"
      ],
      [
        "Class 35",
        "Клас 35"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Mechanically deposited zinc is permitted for fasteners other than nails, staples and timber rivets, at ASTM B695 Class 55 minimum.",
    "explanationUk": "Механічно нанесений цинк дозволений для кріплень, крім цвяхів, скоб і timber rivets, щонайменше за ASTM B695 Class 55."
  },
  {
    "section": "R317.3.1 Exception 3",
    "difficulty": "exam",
    "question": "Which installation qualifies for the plain carbon-steel fastener exception in preservative-treated wood?",
    "questionUk": "Який монтаж відповідає винятку для звичайних вуглецевих сталевих кріплень у просоченій деревині?",
    "answers": [
      [
        "SBX/DOT-treated wood in an interior dry environment",
        "Деревина з обробкою SBX/DOT у сухому внутрішньому середовищі"
      ],
      [
        "SBX/DOT-treated wood exposed to rain outdoors",
        "Деревина SBX/DOT під дощем надворі"
      ],
      [
        "Any treated wood touching soil",
        "Будь-яка просочена деревина в ґрунті"
      ],
      [
        "Any treatment in a wet basement",
        "Будь-яка обробка в мокрому підвалі"
      ],
      [
        "Any deck exposed to snow",
        "Будь-яка дека під снігом"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Plain carbon steel is allowed for SBX/DOT and zinc-borate treatments only in an interior dry environment under this exception.",
    "explanationUk": "За цим винятком звичайну вуглецеву сталь дозволено для SBX/DOT і борату цинку лише в сухому внутрішньому середовищі."
  },
  {
    "section": "R317.3.3",
    "difficulty": "medium",
    "question": "Which listed fastener material is expressly acceptable for fire-retardant-treated wood in an exterior wet location?",
    "questionUk": "Який із перелічених матеріалів кріплень прямо дозволений для вогнезахисно обробленої деревини в зовнішньому мокрому місці?",
    "answers": [
      [
        "Copper",
        "Мідь"
      ],
      [
        "Plain uncoated iron nails",
        "Звичайні необроблені залізні цвяхи"
      ],
      [
        "Interior drywall screws",
        "Внутрішні гіпсокартонні шурупи"
      ],
      [
        "Uncoated carbon-steel staples",
        "Необроблені вуглецеві сталеві скоби"
      ],
      [
        "Plastic finish pins",
        "Пластикові оздоблювальні штифти"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exterior/wet FRT list includes hot-dipped galvanized steel, stainless steel, silicon bronze and copper. This checks material suitability, not structural fastener sizing.",
    "explanationUk": "Перелік для зовнішньої чи мокрої вогнезахисно обробленої деревини містить гарячеоцинковану й нержавіючу сталь, кремнієву бронзу та мідь. Це перевірка матеріалу, а не конструктивного розміру."
  },
  {
    "section": "R317.3.4",
    "difficulty": "exam",
    "question": "For interior fire-retardant-treated wood, the manufacturer gives no fastener recommendation. Which fallback section applies?",
    "questionUk": "Для внутрішньої вогнезахисно обробленої деревини виробник не надав рекомендацій кріплень. Який розділ застосовують як резервний?",
    "answers": [
      [
        "R317.3.3",
        "Розділ R317.3.3"
      ],
      [
        "R802.9",
        "Розділ R802.9"
      ],
      [
        "R402.3.1",
        "Розділ R402.3.1"
      ],
      [
        "R905.3.2",
        "Розділ R905.3.2"
      ],
      [
        "R310.2.1",
        "Розділ R310.2.1"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Interior FRT fasteners follow manufacturer recommendations; without them, R317.3.3 applies.",
    "explanationUk": "Кріплення внутрішньої вогнезахисно обробленої деревини відповідають рекомендаціям виробника; без них застосовують R317.3.3."
  },
  {
    "section": "R317.3.2",
    "difficulty": "easy",
    "question": "Which referenced standard governs fastenings, including nuts and washers, for wood foundations?",
    "questionUk": "Який зазначений стандарт регулює кріплення дерев’яних фундаментів, включно з гайками й шайбами?",
    "answers": [
      [
        "AWC PWF",
        "Стандарт AWC PWF"
      ],
      [
        "ASTM C1107",
        "Стандарт ASTM C1107"
      ],
      [
        "ASTM C1167",
        "Стандарт ASTM C1167"
      ],
      [
        "NFRC 100",
        "Стандарт NFRC 100"
      ],
      [
        "SBCA BCSI only",
        "Лише SBCA BCSI"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R317.3.2 delegates wood-foundation fastening requirements to AWC PWF; this question tests code navigation, not an unreviewed standard detail.",
    "explanationUk": "R317.3.2 відсилає кріплення дерев’яних фундаментів до AWC PWF; питання перевіряє навігацію кодом, а не неперевірену деталь стандарту."
  },
  {
    "section": "R317.2.1, items 2–6",
    "difficulty": "exam",
    "question": "Select all listed information required in the quality mark for pressure-preservative-treated lumber or plywood.",
    "questionUk": "Виберіть усі наведені відомості, обов’язкові в маркуванні якості консервувально просочених пиломатеріалів чи фанери.",
    "answers": [
      [
        "Type of preservative",
        "Тип консерванту"
      ],
      [
        "Minimum preservative retention",
        "Мінімальне утримання консерванту"
      ],
      [
        "End use for which treated",
        "Кінцеве призначення обробки"
      ],
      [
        "Owner's insurance deductible",
        "Страхову франшизу власника"
      ],
      [
        "Retail sale price",
        "Роздрібну ціну"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Preservative type, minimum retention and intended end use are required quality-mark information; the complete list also includes other identification details.",
    "explanationUk": "Тип консерванту, мінімальне утримання та кінцеве призначення входять до маркування; повний перелік також має інші ідентифікаційні відомості."
  },
  {
    "section": "R317.2.1 Exception",
    "difficulty": "exam",
    "question": "A bundled unit contains 48 treated lumber pieces, each 30 inches long. Using the permitted end-labeling method, what minimum number must be labeled?",
    "questionUk": "Пакет містить 48 просочених дерев’яних деталей завдовжки 30 дюймів. Скільки мінімально слід маркувати за дозволеного способу торцевих етикеток?",
    "answers": [
      [
        "12 pieces",
        "12 деталей"
      ],
      [
        "4 pieces",
        "4 деталі"
      ],
      [
        "8 pieces",
        "8 деталей"
      ],
      [
        "10 pieces",
        "10 деталей"
      ],
      [
        "24 pieces",
        "24 деталі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Pieces no longer than 36 inches qualify for the bundled exception. End labeling covers at least 25%: 48 × .25 = 12 pieces.",
    "explanationUk": "Деталі не довші за 36 дюймів підпадають під пакетний виняток. Торцеві етикетки потрібні мінімум на 25%: 48 × 0,25 = 12 деталей."
  },
  {
    "section": "R317.1.1",
    "difficulty": "medium",
    "question": "After field-cutting and drilling preservative-treated lumber, which standard governs treatment of the exposed cuts and holes?",
    "questionUk": "Після різання й свердління просоченої деревини на об’єкті який стандарт регулює обробку відкритих зрізів та отворів?",
    "answers": [
      [
        "AWPA M4",
        "Стандарт AWPA M4"
      ],
      [
        "ASTM C143",
        "Стандарт ASTM C143"
      ],
      [
        "NFRC 200",
        "Стандарт NFRC 200"
      ],
      [
        "ASTM C1492",
        "Стандарт ASTM C1492"
      ],
      [
        "ASTM C665",
        "Стандарт ASTM C665"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Field-cut ends, notches and drilled holes of preservative-treated wood require field treatment according to AWPA M4.",
    "explanationUk": "Торці після різання, надрізи й просвердлені отвори просоченої деревини потребують обробки на об’єкті за AWPA M4."
  }
];
export const intakeVerified87 = verifiedBatch(1029, "Carpentry", "Structural Wood Products", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter3.pdf", seeds, "intake-series-85-90", true, "2026-10-14");

