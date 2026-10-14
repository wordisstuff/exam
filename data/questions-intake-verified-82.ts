import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "1322.0303 subp. 1 (IECC R303.1)",
    "difficulty": "exam",
    "question": "Select the requirements Minnesota expressly adds for materials under energy-code identification.",
    "questionUk": "Виберіть вимоги, які Minnesota прямо додає для матеріалів у правилі ідентифікації енергетичного коду.",
    "answers": [
      [
        "Listing for intended use",
        "Визнання для призначеного застосування"
      ],
      [
        "Installation following manufacturer instructions",
        "Монтаж за інструкцією виробника"
      ],
      [
        "Manufacturer-certified installer when that certification exists",
        "Сертифікований виробником монтажник, якщо така сертифікація існує"
      ],
      [
        "Certification by the owner instead of the manufacturer",
        "Сертифікація власником замість виробника"
      ],
      [
        "Any product with the lowest bid",
        "Будь-який найдешевший продукт"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Minnesota lists intended-use listing, manufacturer instructions and product-specific installer certification if available.",
    "explanationUk": "Minnesota вимагає визнання для призначення, інструкцій виробника та сертифікації монтажника для конкретного продукту, якщо вона існує."
  },
  {
    "section": "1322.0303 subp. 1 (IECC R303.1)",
    "difficulty": "medium",
    "question": "A product manufacturer offers no installer certification for that product. What does the Minnesota certification clause require?",
    "questionUk": "Виробник не пропонує сертифікацію монтажників цього продукту. Що вимагає відповідне положення Minnesota?",
    "answers": [
      [
        "It does not require a nonexistent certification; other material requirements still apply",
        "Не вимагає неіснуючої сертифікації; інші вимоги залишаються"
      ],
      [
        "The product is automatically prohibited",
        "Продукт автоматично заборонений"
      ],
      [
        "The owner must create a certification",
        "Власник має створити сертифікацію"
      ],
      [
        "Any unrelated certification is mandatory",
        "Обов’язкова будь-яка стороння сертифікація"
      ],
      [
        "All installation instructions are waived",
        "Усі інструкції монтажу скасовані"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Installer certification is conditional on such certification existing; listing and instructions remain mandatory.",
    "explanationUk": "Сертифікація монтажника потрібна, якщо вона існує; визнання застосування та інструкції залишаються обов’язковими."
  },
  {
    "section": "1322.0303 subp. 2 (IECC R303.1.5)",
    "difficulty": "easy",
    "question": "Which Minnesota Rules chapter is expressly incorporated for thermal insulation standards?",
    "questionUk": "Яку главу Minnesota Rules прямо включено для стандартів теплоізоляції?",
    "answers": [
      [
        "Chapter 7640",
        "Главу 7640"
      ],
      [
        "Chapter 1300 only",
        "Лише главу 1300"
      ],
      [
        "Chapter 4714 only",
        "Лише главу 4714"
      ],
      [
        "Chapter 1800 only",
        "Лише главу 1800"
      ],
      [
        "Chapter 5200 only",
        "Лише главу 5200"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R303.1.5 directs thermal insulation to Chapter 7640, administered by Commerce.",
    "explanationUk": "R303.1.5 відсилає теплоізоляцію до глави 7640, яку адмініструє Department of Commerce."
  },
  {
    "section": "7640.0110 subp. 2C",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0110/",
    "difficulty": "medium",
    "question": "A board is sold for interior above-grade use only. What is missing before using it outside a foundation below grade?",
    "questionUk": "Плиту продають лише для внутрішнього надземного застосування. Чого бракує для монтажу зовні фундаменту нижче рівня землі?",
    "answers": [
      [
        "Manufacturer recommendation for exterior below-grade application",
        "Рекомендації виробника для зовнішнього підземного застосування"
      ],
      [
        "Owner preference for the color",
        "Побажання власника щодо кольору"
      ],
      [
        "A higher purchase price",
        "Вищої ціни"
      ],
      [
        "A thicker paint finish",
        "Товстішої фарби"
      ],
      [
        "An interior drywall label",
        "Маркування внутрішнього гіпсокартону"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Exterior below-grade insulation must be manufacturer-recommended for that application; generic insulation status is insufficient.",
    "explanationUk": "Виробник має рекомендувати ізоляцію саме для зовнішнього підземного застосування; загального статусу теплоізоляції недостатньо."
  },
  {
    "section": "7640.0110 subp. 3",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0110/",
    "difficulty": "exam",
    "question": "Which retail methods can make manufacturer DIY insulation instructions available to purchasers? Select all listed compliant methods.",
    "questionUk": "Які способи продажу забезпечують покупцям доступ до інструкції самостійного монтажу ізоляції? Виберіть усі належні способи.",
    "answers": [
      [
        "Provide the written instructions",
        "Надати письмову інструкцію"
      ],
      [
        "Conspicuously post that instructions are immediately available on request where customers procure products",
        "Наочно зазначити в місці отримання товару, що інструкція негайно доступна на запит"
      ],
      [
        "Identify a website containing the instructions",
        "Указати вебсайт з інструкцією"
      ],
      [
        "Offer only a verbal sales pitch",
        "Лише усно прорекламувати товар"
      ],
      [
        "Wait until the buyer reports damage",
        "Чекати повідомлення покупця про пошкодження"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The rule permits providing materials, the specified conspicuous posting, or identifying the instruction website.",
    "explanationUk": "Правило дозволяє надати матеріали, розмістити передбачене наочне повідомлення або вказати сайт з інструкцією."
  },
  {
    "section": "7640.0110 subp. 2A",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0110/",
    "difficulty": "medium",
    "question": "What must establish that residential insulation sold, distributed or installed in Minnesota conforms to 7640.0130?",
    "questionUk": "Що має підтвердити відповідність житлової ізоляції, яку продають, розповсюджують або монтують у Minnesota, правилу 7640.0130?",
    "answers": [
      [
        "Testing demonstrating conformity",
        "Випробування, що доводить відповідність"
      ],
      [
        "A contractor's unsupported opinion",
        "Необґрунтована думка підрядника"
      ],
      [
        "A customer's favorable review",
        "Позитивний відгук покупця"
      ],
      [
        "The package's attractive artwork",
        "Привабливий дизайн упаковки"
      ],
      [
        "A discount invoice",
        "Рахунок зі знижкою"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The conduct rule requires demonstrated conformity by test, not unsupported marketing claims.",
    "explanationUk": "Правило вимагає підтвердження відповідності випробуванням, а не бездоказовими рекламними заявами."
  },
  {
    "section": "7640.0110 subp. 2D",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0110/",
    "difficulty": "easy",
    "question": "Which federal regulation does Minnesota's insulation conduct rule require industry members to follow?",
    "questionUk": "Якого федерального нормативного акта правило Minnesota про ізоляцію вимагає дотримуватися учасникам галузі?",
    "answers": [
      [
        "16 CFR Part 460",
        "16 CFR, частини 460"
      ],
      [
        "29 CFR 1926.852",
        "Положення 29 CFR 1926.852"
      ],
      [
        "24 CFR Part 3280 only",
        "Лише 24 CFR, частини 3280"
      ],
      [
        "40 CFR Part 745 only",
        "Лише 40 CFR, частини 745"
      ],
      [
        "49 CFR Part 393",
        "49 CFR, частини 393"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subpart 2D incorporates the FTC requirements in 16 CFR Part 460. This question tests that cross-reference, not unverified federal details.",
    "explanationUk": "Підпункт 2D включає вимоги FTC за 16 CFR Part 460. Питання перевіряє це посилання, а не неперевірені федеральні деталі."
  },
  {
    "section": "7640.0130 subp. 3F",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0130/",
    "difficulty": "medium",
    "question": "A mobile rig simultaneously produces and installs cellulose insulation onsite as one mechanical manufacturing process. Is that allowed by Chapter 7640?",
    "questionUk": "Мобільна установка одночасно виготовляє й монтує целюлозну ізоляцію на об’єкті як єдиний механічний виробничий процес. Чи дозволяє це глава 7640?",
    "answers": [
      [
        "No; the defined mobile manufacture is prohibited",
        "Ні; визначене мобільне виготовлення заборонене"
      ],
      [
        "Yes; if the truck has a ladder",
        "Так; якщо вантажівка має драбину"
      ],
      [
        "Yes; if the owner supplies electricity",
        "Так; якщо власник забезпечує електрику"
      ],
      [
        "Yes; if production occurs outdoors",
        "Так; якщо виготовлення надворі"
      ],
      [
        "Yes; if the bags are recycled",
        "Так; якщо мішки повторно використані"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The prohibition concerns simultaneous onsite production and installation of cellulose as an integral process, not ordinary installation of factory-made insulation.",
    "explanationUk": "Заборона стосується одночасного виготовлення й монтажу целюлози як єдиного процесу, а не звичайного монтажу заводської ізоляції."
  },
  {
    "section": "7640.0130 subp. 4A(1)",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0130/",
    "difficulty": "medium",
    "question": "At what conditions must mineral-fiber loose fill achieve at least its stated performance under the Minnesota rule?",
    "questionUk": "За яких умов засипна мінеральноволокниста ізоляція має забезпечувати щонайменше заявлені показники?",
    "answers": [
      [
        "Winter design conditions",
        "За зимових розрахункових умов"
      ],
      [
        "Only summer outdoor conditions",
        "Лише за літніх зовнішніх умов"
      ],
      [
        "Only room-temperature packaging conditions",
        "Лише за кімнатних умов упаковки"
      ],
      [
        "Only during transport",
        "Лише під час перевезення"
      ],
      [
        "Only before attic installation",
        "Лише до монтажу на горищі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The rule requires at least stated performance at winter design conditions, demonstrated under ASTM C1373/C1373M-11.",
    "explanationUk": "Правило вимагає щонайменше заявлених показників за зимових розрахункових умов, підтверджених за ASTM C1373/C1373M-11."
  },
  {
    "section": "7640.0130 subp. 4B",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0130/",
    "difficulty": "exam",
    "question": "For mineral-fiber batts and blankets, which standard governs installation rather than product specification?",
    "questionUk": "Який стандарт для мінеральноволокнистих матів і рулонів регулює монтаж, а не характеристики продукту?",
    "answers": [
      [
        "ASTM C1320-10",
        "Стандарт ASTM C1320-10"
      ],
      [
        "ASTM C665-12",
        "Стандарт ASTM C665-12"
      ],
      [
        "ASTM C612-10",
        "Стандарт ASTM C612-10"
      ],
      [
        "ASTM C578-12b",
        "Стандарт ASTM C578-12b"
      ],
      [
        "ASTM C1289-14a",
        "Стандарт ASTM C1289-14a"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subpart 4B assigns C665-12 to product conformity and C1320-10 to installation; they serve different functions.",
    "explanationUk": "Підпункт 4B відносить C665-12 до відповідності продукту, а C1320-10 — до монтажу; їхні функції різні."
  },
  {
    "section": "7640.0130 subp. 5",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0130/",
    "difficulty": "medium",
    "question": "At what mean temperature must foam-plastic insulation achieve its stated performance under Chapter 7640?",
    "questionUk": "За якої середньої температури пінопластова ізоляція має забезпечувати заявлені показники за главою 7640?",
    "answers": [
      [
        "75°F",
        "75°F (приблизно 24°C)"
      ],
      [
        "32°F",
        "32°F (0°C)"
      ],
      [
        "50°F",
        "50°F (10°C)"
      ],
      [
        "100°F",
        "100°F (приблизно 38°C)"
      ],
      [
        "140°F",
        "140°F (60°C)"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subpart 5 specifies a 75°F mean temperature. Certain blowing agents additionally require aging-reflective R-value testing.",
    "explanationUk": "Підпункт 5 указує середню температуру 75°F. Для певних спінювачів додатково потрібні випробування R-значення з урахуванням старіння."
  },
  {
    "section": "7640.0130 subp. 5F",
    "sourceUrl": "https://www.revisor.mn.gov/rules/7640.0130/",
    "difficulty": "exam",
    "question": "Select the two evaluation-report paths that deem foam-plastic products to meet this subpart's requirements.",
    "questionUk": "Виберіть два шляхи оцінювальних звітів, за якими пінопластовий продукт вважають відповідним цьому підпункту.",
    "answers": [
      [
        "Current ICC-ES report under AC12 or AC377",
        "Чинний звіт ICC-ES за AC12 або AC377"
      ],
      [
        "Comparable independent report certifying compliance with applicable Minnesota building codes",
        "Порівнянний незалежний звіт про відповідність застосовним будівельним кодам Minnesota"
      ],
      [
        "An expired report for another product",
        "Прострочений звіт іншого продукту"
      ],
      [
        "An owner's signed preference",
        "Підписане побажання власника"
      ],
      [
        "A manufacturer's price list without evaluation",
        "Прайс виробника без оцінювання"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Subpart 5F allows the current specified ICC-ES report or the comparable independent Minnesota-code compliance report.",
    "explanationUk": "Підпункт 5F дозволяє чинний зазначений звіт ICC-ES або порівнянний незалежний звіт про відповідність кодам Minnesota."
  }
];
export const intakeVerified82 = verifiedBatch(969, "Energy Code", "Insulation / Energy", "Minnesota Rules Chapters 1322 and 7640", "mn-energy-code", "https://www.revisor.mn.gov/rules/1322.0303/", seeds, "intake-series-79-84", false);

