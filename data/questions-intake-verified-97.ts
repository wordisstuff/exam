import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";

const seeds: VerifiedSeed[] = [
  {
    "section": "R408.1",
    "difficulty": "medium",
    "question": "A vented crawl space has 1,800 square feet of floor area and no qualifying ground vapor retarder. What minimum net ventilation area is required?",
    "questionUk": "Вентильоване підпілля має площу 1 800 кв. футів без належної пароізоляції ґрунту. Яка мінімальна чиста площа вентиляційних отворів?",
    "answers": [
      [
        "12 sq ft",
        "12 кв. футів"
      ],
      [
        "1.2 sq ft",
        "1,2 кв. фута"
      ],
      [
        "6 sq ft",
        "6 кв. футів"
      ],
      [
        "18 sq ft",
        "18 кв. футів"
      ],
      [
        "180 sq ft",
        "180 кв. футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Without the qualifying ground-cover exception, net vent area is floor area divided by 150: 1,800/150 = 12 square feet.",
    "explanationUk": "Без винятку для пароізоляції чиста площа отворів становить 1/150 площі підпілля: 1 800/150 = 12 кв. футів."
  },
  {
    "section": "R408.2, Exception",
    "difficulty": "medium",
    "question": "An approved Class I ground vapor retarder covers a 1,800-square-foot crawl space, and the vents provide cross ventilation. What reduced minimum net vent area is permitted?",
    "questionUk": "Ґрунт підпілля площею 1 800 кв. футів покрито схваленою пароізоляцією класу I; отвори забезпечують наскрізну вентиляцію. Яка зменшена мінімальна чиста площа отворів дозволена?",
    "answers": [
      [
        "1.2 sq ft",
        "1,2 кв. фута"
      ],
      [
        "12 sq ft",
        "12 кв. футів"
      ],
      [
        "18 sq ft",
        "18 кв. футів"
      ],
      [
        "0.12 sq ft",
        "0,12 кв. фута"
      ],
      [
        "3.6 sq ft",
        "3,6 кв. фута"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception permits 1/1,500 where the ground covering and cross-ventilation conditions are met: 1,800/1,500 = 1.2 square feet.",
    "explanationUk": "За умов винятку дозволено 1/1 500: 1 800/1 500 = 1,2 кв. фута чистої площі."
  },
  {
    "section": "R408.1",
    "difficulty": "exam",
    "question": "A crawl space requires 8 square feet of net ventilation. The selected vent has a rated free area equal to 50 percent of its gross opening. What total gross opening area provides the required net area?",
    "questionUk": "Підпіллю потрібно 8 кв. футів чистої вентиляційної площі. Вільна площа обраних решіток становить 50% загальної площі прорізів. Яка загальна площа прорізів потрібна?",
    "answers": [
      [
        "16 sq ft",
        "16 кв. футів"
      ],
      [
        "4 sq ft",
        "4 кв. фути"
      ],
      [
        "8 sq ft",
        "8 кв. футів"
      ],
      [
        "12 sq ft",
        "12 кв. футів"
      ],
      [
        "24 sq ft",
        "24 кв. фути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The code requirement is net area. With the stated 50-percent free-area rating, gross area must be 8/0.50 = 16 square feet.",
    "explanationUk": "Норма стосується чистої площі. За заданої частки 50% потрібно 8/0,50 = 16 кв. футів загальної площі."
  },
  {
    "section": "R408.1",
    "difficulty": "easy",
    "question": "In a conventionally vented under-floor space, how close must a ventilation opening be to each building corner?",
    "questionUk": "На якій максимальній відстані від кожного кута будівлі має бути вентиляційний отвір звичайного вентильованого підпілля?",
    "answers": [
      [
        "Within 3 ft",
        "У межах 3 футів"
      ],
      [
        "Within 6 ft",
        "У межах 6 футів"
      ],
      [
        "Within 10 ft",
        "У межах 10 футів"
      ],
      [
        "Within 12 ft",
        "У межах 12 футів"
      ],
      [
        "Only at the midpoint of each wall",
        "Лише посередині кожної стіни"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "At least one ventilation opening must be within 3 feet of each corner.",
    "explanationUk": "Щонайменше один вентиляційний отвір потрібен у межах 3 футів від кожного кута."
  },
  {
    "section": "R408.2",
    "difficulty": "exam",
    "question": "Which TWO coverings meet the listed minimum metal-thickness requirements for crawl-space vents, assuming all other opening requirements are satisfied?",
    "questionUk": "Які ДВА покриття вентиляційних отворів підпілля відповідають указаній мінімальній товщині металу, якщо інші вимоги виконано?",
    "answers": [
      [
        "Perforated sheet metal 0.070 inch thick",
        "Перфорований лист завтовшки 0,070 дюйма"
      ],
      [
        "Expanded sheet metal 0.047 inch thick",
        "Просічно-витяжний лист завтовшки 0,047 дюйма"
      ],
      [
        "Perforated sheet metal 0.040 inch thick",
        "Перфорований лист завтовшки 0,040 дюйма"
      ],
      [
        "Expanded sheet metal 0.025 inch thick",
        "Просічно-витяжний лист завтовшки 0,025 дюйма"
      ],
      [
        "Hardware cloth made of 0.020-inch wire",
        "Металева сітка з дроту 0,020 дюйма"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The listed minima are 0.070 inch for perforated sheet and 0.047 inch for expanded sheet; hardware cloth requires at least 0.035-inch wire.",
    "explanationUk": "Мінімуми: 0,070 дюйма для перфорованого листа та 0,047 дюйма для просічно-витяжного. Для дротяної сітки потрібно щонайменше 0,035 дюйма."
  },
  {
    "section": "R408.2, Exception",
    "difficulty": "medium",
    "question": "A vented crawl space qualifies for the 1/1,500 ground-cover exception. Does that exception prohibit operable louvers?",
    "questionUk": "Підпілля відповідає умовам зменшення вентиляційної площі до 1/1 500 завдяки покриттю ґрунту. Чи забороняє цей виняток регульовані жалюзі?",
    "answers": [
      [
        "No; operable louvers are not prohibited",
        "Ні; регульовані жалюзі не заборонено"
      ],
      [
        "Yes; all vents must be permanently open",
        "Так; усі отвори мають бути постійно відкриті"
      ],
      [
        "Yes; only cast-iron grilles are allowed",
        "Так; дозволені лише чавунні решітки"
      ],
      [
        "No vents are needed under this exception",
        "За цим винятком отвори взагалі не потрібні"
      ],
      [
        "Louvers are allowed only in basement windows",
        "Жалюзі дозволені лише у вікнах підвалу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception expressly does not prohibit operable louvers; it still requires cross ventilation and the qualifying ground covering.",
    "explanationUk": "Виняток прямо не забороняє регульованих жалюзі, але зберігає вимоги до покриття ґрунту й наскрізної вентиляції."
  },
  {
    "section": "R408.3, Item 1",
    "difficulty": "medium",
    "question": "For the ground vapor retarder in an unvented crawl space, what joint detail is required between adjacent sheets?",
    "questionUk": "Як потрібно виконати стики сусідніх полотен пароізоляції ґрунту в невентильованому підпіллі?",
    "answers": [
      [
        "Overlap at least 6 inches and seal or tape the seams",
        "Нахлист щонайменше 6 дюймів із герметизацією або проклеюванням швів"
      ],
      [
        "Butt the sheets without sealing",
        "Стикувати впритул без герметизації"
      ],
      [
        "Overlap 2 inches with no tape",
        "Нахлист 2 дюйми без стрічки"
      ],
      [
        "Overlap 6 inches but leave seams open",
        "Нахлист 6 дюймів із відкритими швами"
      ],
      [
        "Fasten only the four room corners",
        "Закріпити лише в чотирьох кутах приміщення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A continuous Class I vapor retarder is required over exposed earth, with seams overlapped at least 6 inches and sealed or taped.",
    "explanationUk": "Відкритий ґрунт покривають суцільною пароізоляцією класу I; стики перекривають щонайменше на 6 дюймів і герметизують або проклеюють."
  },
  {
    "section": "R408.3, Item 1",
    "difficulty": "medium",
    "question": "How must the ground vapor retarder terminate at the stem wall in an unvented crawl space?",
    "questionUk": "Як слід завершити пароізоляцію ґрунту біля фундаментної стінки невентильованого підпілля?",
    "answers": [
      [
        "Extend at least 6 inches up and attach and seal to the wall or insulation",
        "Підняти щонайменше на 6 дюймів, закріпити й герметизувати до стіни або утеплювача"
      ],
      [
        "Stop 6 inches short of the wall",
        "Закінчити за 6 дюймів до стіни"
      ],
      [
        "Turn up 2 inches without sealing",
        "Підняти на 2 дюйми без герметизації"
      ],
      [
        "Leave it loose against the sill plate",
        "Вільно притулити до нижньої дерев’яної обв’язки"
      ],
      [
        "Attach it only to floor joists",
        "Прикріпити лише до балок перекриття"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The retarder edges must extend at least 6 inches up the stem wall and be attached and sealed to the stem wall or insulation.",
    "explanationUk": "Краї піднімають щонайменше на 6 дюймів по фундаментній стінці та закріплюють і герметизують до неї або утеплювача."
  },
  {
    "section": "R408.5",
    "difficulty": "easy",
    "question": "Concrete forms and scraps of construction lumber remain in a crawl space when occupancy is requested. What does R408.5 require?",
    "questionUk": "Перед заселенням у підпіллі залишилися опалубка й обрізки будівельної деревини. Що вимагає R408.5?",
    "answers": [
      [
        "Remove the wood forms and construction materials before occupancy or use",
        "Прибрати дерев’яну опалубку та будівельні матеріали до заселення або використання"
      ],
      [
        "Cover them with loose soil",
        "Засипати їх пухким ґрунтом"
      ],
      [
        "Leave them if treated with preservative",
        "Залишити після обробки антисептиком"
      ],
      [
        "Remove only pieces longer than 4 feet",
        "Прибрати лише шматки довші за 4 фути"
      ],
      [
        "Keep them until the first annual inspection",
        "Залишити до першої щорічної перевірки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R408.5 requires removal of vegetation, organic material, wood concrete forms and construction materials before occupancy or use.",
    "explanationUk": "R408.5 вимагає прибрати рослинність, органічні рештки, дерев’яну опалубку та будівельні матеріали до заселення або використання."
  },
  {
    "section": "R408.6",
    "difficulty": "exam",
    "question": "Surface water does not readily drain from the building site, and no approved drainage system is provided. Where must the under-floor finished grade be relative to outside finished grade?",
    "questionUk": "Поверхнева вода погано відводиться з ділянки; схваленої дренажної системи немає. Де має бути кінцева відмітка ґрунту під підлогою відносно зовнішньої?",
    "answers": [
      [
        "At least as high as outside finished grade",
        "Не нижче зовнішньої кінцевої відмітки"
      ],
      [
        "At least 12 inches below outside grade",
        "Щонайменше на 12 дюймів нижче зовнішньої"
      ],
      [
        "Always at the bottom of the footing",
        "Завжди на рівні низу підошви"
      ],
      [
        "Anywhere if covered by polyethylene",
        "На будь-якому рівні під поліетиленом"
      ],
      [
        "Exactly 6 inches below outside grade",
        "Рівно на 6 дюймів нижче зовнішньої"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Poor surface drainage triggers the requirement that under-floor grade be at least outside finished grade unless an approved drainage system is provided.",
    "explanationUk": "За поганого поверхневого водовідведення ґрунт під підлогою має бути не нижче зовнішньої відмітки, якщо немає схваленого дренажу."
  },
  {
    "section": "R408.6",
    "difficulty": "medium",
    "question": "Which evidence triggers R408.6's higher under-floor grade requirement unless an approved drainage system is provided?",
    "questionUk": "Яка обставина запускає вимогу R408.6 щодо підвищеної відмітки ґрунту під підлогою, якщо немає схваленого дренажу?",
    "answers": [
      [
        "Groundwater can rise to within 6 inches of finished floor at the building perimeter",
        "Ґрунтові води можуть підніматися в межі 6 дюймів від чистої підлоги по периметру будівлі"
      ],
      [
        "The roof pitch exceeds 6:12",
        "Ухил даху перевищує 6:12"
      ],
      [
        "The crawl space contains treated lumber",
        "У підпіллі є просочена деревина"
      ],
      [
        "The exterior wall is brick veneer",
        "Зовнішня стіна має цегляне облицювання"
      ],
      [
        "The vent grilles have operable louvers",
        "Вентиляційні решітки мають регульовані жалюзі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Evidence that groundwater can rise within 6 inches of finished floor at the perimeter is one trigger; inadequate surface drainage is another.",
    "explanationUk": "Однією з підстав є можливе підняття ґрунтових вод у межі 6 дюймів від чистої підлоги по периметру; інша — недостатнє поверхневе водовідведення."
  },
  {
    "section": "R408.4",
    "difficulty": "exam",
    "question": "Which TWO details are required for a crawl-space through-wall access opening that is below grade?",
    "questionUk": "Які ДВІ деталі обов’язкові для розташованого нижче ґрунту доступу в підпілля через стіну?",
    "answers": [
      [
        "The areaway bottom is below the opening threshold",
        "Дно приямка нижче порога отвору"
      ],
      [
        "The opening is not under a door to the residence",
        "Отвір не розташовано під дверима до житла"
      ],
      [
        "The areaway bottom is above the threshold",
        "Дно приямка вище порога"
      ],
      [
        "A residence door may cover the access opening",
        "Двері житла можуть перекривати отвір доступу"
      ],
      [
        "No areaway is required merely because the opening is below grade",
        "Розташування нижче ґрунту не потребує приямка"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Below-grade through-wall access requires an areaway with its bottom below the threshold; through-wall access may not be under a residence door.",
    "explanationUk": "Для доступу нижче ґрунту потрібен приямок із дном нижче порога; отвір крізь стіну не може бути під дверима житла."
  }
];

export const intakeVerified97 = verifiedBatch(1149, "Footings and Foundations", "Crawl Spaces", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018P7/chapter-4-foundations", seeds, "intake-series-97-102", true, "2026-10-22");

