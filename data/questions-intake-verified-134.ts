import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R608.9.1.1",
    "question": "For the prescriptive concrete-wall connection figures R608.9(1)–(12), which anchor form is prohibited?",
    "questionUk": "Яка форма анкера заборонена для приписових з’єднань бетонних стін на схемах R608.9(1)–(12)?",
    "answers": [
      [
        "J- or L-hook anchor bolts",
        "Анкери з J- чи L-подібним гаком"
      ],
      [
        "Headed anchor bolts",
        "Анкерні болти з головкою"
      ],
      [
        "Rods threaded at both ends with an embedded hex nut",
        "Стрижні з різьбою на обох кінцях і заглибленою шестигранною гайкою"
      ],
      [
        "Rods threaded at both ends with an embedded square nut",
        "Стрижні з різьбою на обох кінцях і заглибленою квадратною гайкою"
      ],
      [
        "A headed bolt meeting the referenced material requirements",
        "Болт із головкою за згаданими вимогами матеріалу"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "These specific prescriptive figures require headed bolts or threaded rods with an embedded hex or square nut; J/L hooks are excluded.",
    "explanationUk": "Ці конкретні приписові схеми вимагають болтів із головкою або різьбових стрижнів із заглибленою шестигранною чи квадратною гайкою; J/L гаки виключені."
  },
  {
    "section": "R608.9.1.2",
    "question": "A face-mounted wood ledger is attached through stay-in-place forms 1-1/2 inches thick. What minimum circular hole diameter is required at bolt locations?",
    "questionUk": "Дерев’яну бічну опорну дошку кріплять через незнімну опалубку 1-1/2 дюйма. Який мінімальний діаметр круглого отвору потрібен біля болтів?",
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
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "3-1/2 inches",
        "3-1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "For forms not thicker than 1-1/2 inches, the specified wood-ledger holes are at least 4 inches in diameter.",
    "explanationUk": "Для опалубки не товщої за 1-1/2 дюйма задані отвори дерев’яної дошки мають діаметр щонайменше 4 дюйми."
  },
  {
    "section": "R608.9.1.2",
    "question": "Stay-in-place forms behind a face-mounted wood ledger are 2-1/2 inches thick. What minimum hole diameter follows the incremental rule?",
    "questionUk": "Незнімна опалубка за бічною дерев’яною опорною дошкою має товщину 2-1/2 дюйма. Який мінімальний діаметр отвору за правилом приросту?",
    "answers": [
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "4-1/2 inches",
        "4-1/2 дюйма"
      ],
      [
        "5 inches",
        "5 дюймів"
      ],
      [
        "5-1/2 inches",
        "5-1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Start at 4 inches for 1-1/2-inch forms. Two additional half-inch thickness increments each add 1 inch: 4 + 2 = 6 inches.",
    "explanationUk": "Початок — 4 дюйми для товщини 1-1/2. Два додаткові прирости товщини по 1/2 додають по дюйму: 4 + 2 = 6 дюймів."
  },
  {
    "section": "R608.9.1.2",
    "question": "What minimum opening shape and size are specified in stay-in-place forms for bolts attaching face-mounted cold-formed steel tracks?",
    "questionUk": "Які мінімальні форма й розмір отвору в незнімній опалубці задані для болтів бічних холодногнутих сталевих напрямних?",
    "answers": [
      [
        "A 4-inch square opening",
        "Квадратний отвір 4 на 4 дюйми"
      ],
      [
        "A 1-inch round opening",
        "Круглий отвір діаметром 1 дюйм"
      ],
      [
        "A 2-inch square opening",
        "Квадратний отвір 2 на 2 дюйми"
      ],
      [
        "A 3-inch round opening",
        "Круглий отвір діаметром 3 дюйми"
      ],
      [
        "Only a slit the width of the bolt",
        "Лише проріз завширшки з болт"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Steel-track bolt installation requires openings at least 4 inches square.",
    "explanationUk": "Для встановлення болтів сталевої напрямної потрібні отвори щонайменше 4 на 4 дюйми."
  },
  {
    "section": "R608.9.1.2, Exception",
    "question": "A 1/16-inch vapor retarder remains between the concrete and a ledger at a bolt location. Does the direct-contact exception permit that layer?",
    "questionUk": "Парообмежувальний шар 1/16 дюйма залишається між бетоном і опорною дошкою біля болта. Чи допускає його виняток безпосереднього контакту?",
    "answers": [
      [
        "Yes; material at most 1/16 inch thick is permitted",
        "Так; дозволено матеріал завтовшки максимум 1/16 дюйма"
      ],
      [
        "No; the exception requires at least 1/8 inch",
        "Ні; виняток вимагає мінімум 1/8 дюйма"
      ],
      [
        "No; all vapor retarders are prohibited",
        "Ні; усі парообмежувачі заборонені"
      ],
      [
        "Yes; the exception permits any foam thickness",
        "Так; виняток дозволяє будь-яку товщину піни"
      ],
      [
        "Only if the layer is at least 1 inch thick",
        "Лише якщо шар не тонший за 1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The ledger or track normally contacts concrete directly, but the exception permits a vapor retarder or other material no thicker than 1/16 inch.",
    "explanationUk": "Дошка чи напрямна зазвичай контактує з бетоном безпосередньо, але виняток дозволяє парообмежувач чи інший матеріал не товщий за 1/16 дюйма."
  },
  {
    "section": "R608.9.2(1)",
    "question": "For the prescriptive wood-floor-to-concrete-wall connection route, what minimum wood species specific gravity is required?",
    "questionUk": "Яка мінімальна питома густина породи деревини потрібна для приписового з’єднання дерев’яної підлоги з бетонною стіною?",
    "answers": [
      [
        "0.42",
        "Питома густина 0,42"
      ],
      [
        "0.20",
        "Питома густина 0,20"
      ],
      [
        "0.25",
        "Питома густина 0,25"
      ],
      [
        "0.30",
        "Питома густина 0,30"
      ],
      [
        "0.35",
        "Питома густина 0,35"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R608.9.2(1) requires wood framing of species with specific gravity at least 0.42.",
    "explanationUk": "R608.9.2(1) вимагає породи деревини каркаса з питомою густиною щонайменше 0,42."
  },
  {
    "section": "R608.9.2(1)–(2)",
    "question": "Which figure groups cover the prescriptive wood-floor and steel-floor connections to concrete walls, respectively?",
    "questionUk": "Які групи схем охоплюють відповідно приписові з’єднання дерев’яних і сталевих підлог із бетонними стінами?",
    "answers": [
      [
        "R608.9(1)–(4) and R608.9(5)–(8)",
        "Схеми R608.9(1)–(4) і R608.9(5)–(8)"
      ],
      [
        "R608.9(9)–(10) and R608.9(11)–(12)",
        "Схеми R608.9(9)–(10) і R608.9(11)–(12)"
      ],
      [
        "R603.6(1) and R603.6(2)",
        "Схеми R603.6(1) і R603.6(2)"
      ],
      [
        "R610.8 and R607.4.1",
        "Схеми R610.8 і R607.4.1"
      ],
      [
        "R802.7 and R310.1",
        "Розділи R802.7 і R310.1"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Wood-floor details are figures (1)–(4), steel-floor details (5)–(8), subject to each figure's accompanying table limits.",
    "explanationUk": "Дерев’яні підлоги охоплені схемами (1)–(4), сталеві — (5)–(8), з урахуванням меж супровідних таблиць."
  },
  {
    "section": "R608.9.2(3)–(5)",
    "question": "Does R608.9.2 limit concrete-wall floor connections exclusively to its prescriptive figures?",
    "questionUk": "Чи обмежує R608.9.2 з’єднання підлог із бетонними стінами лише приписовими схемами?",
    "answers": [
      [
        "No; it also permits specified proprietary-connector and engineered-design routes",
        "Ні; також дозволені задані шляхи фірмових з’єднувачів та інженерного проєкту"
      ],
      [
        "Yes; engineering is always prohibited",
        "Так; інженерне проєктування завжди заборонено"
      ],
      [
        "Yes; proprietary connectors can never be used",
        "Так; фірмові з’єднувачі ніколи не дозволені"
      ],
      [
        "Yes; only wood floors may connect",
        "Так; з’єднувати можна лише дерев’яні підлоги"
      ],
      [
        "No; any untested fastener automatically qualifies",
        "Ні; будь-яке невипробуване кріплення автоматично підходить"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The alternatives include proprietary connectors selected for specified loads and engineered designs using the cited design standards. These are conditional routes.",
    "explanationUk": "Альтернативи включають фірмові з’єднувачі під задані навантаження та інженерні проєкти за згаданими стандартами. Ці шляхи мають умови."
  },
  {
    "section": "R608.9.3(1)",
    "question": "For wood ceiling/roof connections to concrete walls, which section governs framing portions not detailed in the connection figures, apart from an applicable AWC WFCM route?",
    "questionUk": "Який розділ регулює не показані на схемах частини дерев’яних з’єднань стелі/даху з бетонною стіною, крім застосовного шляху AWC WFCM?",
    "answers": [
      [
        "R802",
        "Розділ R802"
      ],
      [
        "R502",
        "Розділ R502"
      ],
      [
        "R310",
        "Розділ R310"
      ],
      [
        "R607",
        "Розділ R607"
      ],
      [
        "R703.11",
        "Розділ R703.11"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R608.9.3(1) refers undetailed wood ceiling and roof framing portions to R802 or applicable AWC WFCM.",
    "explanationUk": "R608.9.3(1) відсилає не показані частини дерев’яних стель і дахів до R802 або застосовного AWC WFCM."
  },
  {
    "section": "R608.9.3(2)",
    "question": "Which roof-framing section is cited for cold-formed steel ceiling/roof connection portions not shown in the concrete-wall figures, besides applicable AISI S230?",
    "questionUk": "Який розділ каркаса даху згадано для не показаних на схемах частин сталевих з’єднань стелі/даху з бетонною стіною, крім застосовного AISI S230?",
    "answers": [
      [
        "R804",
        "Розділ R804"
      ],
      [
        "R505",
        "Розділ R505"
      ],
      [
        "R603.2.6",
        "Розділ R603.2.6"
      ],
      [
        "R608.8",
        "Розділ R608.8"
      ],
      [
        "R703.15",
        "Розділ R703.15"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The ceiling/roof steel route cites R804; R505 is the steel-floor route.",
    "explanationUk": "Сталевий шлях стелі/даху посилається на R804; R505 стосується сталевих підлог."
  },
  {
    "section": "R608.10",
    "question": "In a building with exterior concrete walls, which assemblies must be designed and constructed as diaphragms under R608.10?",
    "questionUk": "Які конструкції будівлі із зовнішніми бетонними стінами потрібно проєктувати й виконувати як діафрагми за R608.10?",
    "answers": [
      [
        "Floors and roofs",
        "Підлоги та дахи"
      ],
      [
        "Only nonbearing interior partitions",
        "Лише внутрішні ненесучі перегородки"
      ],
      [
        "Only stair treads",
        "Лише проступи сходів"
      ],
      [
        "Only window frames",
        "Лише віконні рами"
      ],
      [
        "Only exterior siding",
        "Лише зовнішнє облицювання"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R608.10 requires floors and roofs to act as diaphragms, using its applicable design/construction requirements.",
    "explanationUk": "R608.10 вимагає підлоги й дахи як діафрагми з виконанням відповідних вимог проєктування й конструкції."
  },
  {
    "section": "R608.10",
    "question": "What condition expressly triggers ceiling diaphragms under R608.10?",
    "questionUk": "Яка умова прямо вимагає стельові діафрагми за R608.10?",
    "answers": [
      [
        "The occurrence of gable-end walls",
        "Наявність фронтонних стін"
      ],
      [
        "Any change in interior paint",
        "Будь-яка зміна внутрішньої фарби"
      ],
      [
        "Only the presence of a garage door",
        "Лише наявність гаражних воріт"
      ],
      [
        "Only a roof without sheathing",
        "Лише дах без обшивки"
      ],
      [
        "Only floor carpet installation",
        "Лише настилання килима"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Where gable-end walls occur, ceilings must also be designed and constructed as diaphragms.",
    "explanationUk": "За наявності фронтонних стін стелі також потрібно проєктувати й виконувати як діафрагми."
  }
];
export const intakeVerified134 = verifiedBatch(1593, "Footings and Foundations", "Foundation Anchorage", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-133-138", true, "2026-11-02");
