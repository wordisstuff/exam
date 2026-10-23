import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.59; 1910.1200(e)(1)(i)",
    "difficulty": "medium",
    "question": "A contractor prepares its written hazard communication program. How must the hazardous-chemical list identify the products present?",
    "questionUk": "Підрядник готує письмову програму інформування про хімічні небезпеки. Як перелік наявних небезпечних речовин має ідентифікувати продукти?",
    "answers": [
      [
        "Use a product identifier referenced on the appropriate SDS",
        "Ідентифікатором продукту, зазначеним у відповідному SDS"
      ],
      [
        "Use only the purchase price",
        "Лише закупівельною ціною"
      ],
      [
        "Use only the delivery driver's name",
        "Лише ім’ям водія доставки"
      ],
      [
        "Use unrelated internal numbers with no SDS connection",
        "Внутрішніми номерами без зв’язку з SDS"
      ],
      [
        "List only chemicals that have already caused injuries",
        "Перелічувати лише речовини, які вже спричинили травми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The chemical list must use a product identifier referenced on the appropriate safety data sheet. This connects the inventory to hazard information; construction uses the same requirements through 1926.59.",
    "explanationUk": "Перелік повинен використовувати ідентифікатор продукту з відповідного паспорта безпеки SDS. Так інвентар пов’язують з інформацією про небезпеки; 1926.59 поширює ці вимоги на будівництво."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(e)(1)(ii)",
    "difficulty": "medium",
    "question": "Select TWO subjects for which the written hazard communication program must describe methods of informing employees.",
    "questionUk": "Оберіть ДВІ теми, для яких письмова програма хімічних небезпек має описувати способи інформування працівників.",
    "answers": [
      [
        "Hazards of non-routine tasks",
        "Небезпеки нерутинних завдань"
      ],
      [
        "Chemical hazards in unlabeled pipes in their work areas",
        "Небезпеки речовин у немаркованих трубах робочих зон"
      ],
      [
        "Only the contractor's logo colors",
        "Лише кольори логотипа підрядника"
      ],
      [
        "Only the client's mortgage terms",
        "Лише умови іпотеки клієнта"
      ],
      [
        "Only future employee vacation dates",
        "Лише дати майбутніх відпусток"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Paragraph (e)(1)(ii) specifically addresses non-routine tasks and chemicals in unlabeled pipes. A program limited to ordinary day-to-day container use would miss these required subjects.",
    "explanationUk": "Пункт (e)(1)(ii) прямо охоплює нерутинні завдання та речовини в немаркованих трубах. Програма лише для звичайного щоденного використання тари пропустить ці обов’язкові теми."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(e)(2)",
    "difficulty": "exam",
    "question": "A subcontractor's chemicals may expose another employer's crew. Which set of coordination methods must its hazard communication program include?",
    "questionUk": "Хімічні продукти субпідрядника можуть впливати на бригаду іншого роботодавця. Які способи координації повинна містити його програма хімічних небезпек?",
    "answers": [
      [
        "On-site SDS access, needed precautions, and explanation of the labeling system to the other employer",
        "Доступ іншого роботодавця до SDS на об’єкті, потрібні запобіжні заходи та пояснення системи маркування"
      ],
      [
        "Only a list of employee birthdays",
        "Лише перелік днів народження працівників"
      ],
      [
        "Only an agreement that each worker accepts the risk",
        "Лише згоду працівників прийняти ризик"
      ],
      [
        "Only an invoice showing chemical cost",
        "Лише рахунок із вартістю речовин"
      ],
      [
        "Only moving the SDS to an undisclosed off-site office",
        "Лише перенесення SDS у невідомий позаоб’єктний офіс"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For a multi-employer workplace with possible cross-employer exposure, (e)(2) requires methods for SDS access, communication of precautions for normal work and foreseeable emergencies, and explanation of the labeling system.",
    "explanationUk": "Для майданчика з можливим впливом на працівників іншого роботодавця (e)(2) вимагає способів доступу до SDS, повідомлення запобіжних заходів для звичайної роботи й передбачуваних аварій та пояснення маркування."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(f)(8)",
    "difficulty": "medium",
    "question": "A worker transfers a hazardous chemical from a labeled container into a portable container intended solely for that worker's immediate use. Which labeling exception may apply?",
    "questionUk": "Працівник переливає небезпечну речовину з маркованої тари в переносну ємність виключно для власного негайного використання. Який виняток із маркування може застосовуватися?",
    "answers": [
      [
        "The portable container need not be labeled under the immediate-use exception",
        "Переносну ємність можна не маркувати за винятком негайного використання"
      ],
      [
        "Every portable container is exempt even if shared next week",
        "Будь-яка переносна тара звільнена, навіть якщо її передадуть наступного тижня"
      ],
      [
        "All future containers of that chemical become exempt",
        "Уся майбутня тара цієї речовини стає звільненою"
      ],
      [
        "The original shipping label must be removed",
        "Початкову транспортну етикетку треба зняти"
      ],
      [
        "The SDS may permanently be discarded",
        "SDS можна назавжди викинути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (f)(8) allows this limited exception for transfer from a labeled container and immediate use by the employee who transfers it. It is not a blanket exemption for portable or shared containers.",
    "explanationUk": "Пункт (f)(8) дозволяє вузький виняток для переливання з маркованої тари та негайного використання тим самим працівником. Це не загальне звільнення переносної чи спільної тари."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(f)(9)",
    "difficulty": "medium",
    "question": "A supervisor wants to remove an incoming hazardous-chemical container's label. When does (f)(9) allow removal or defacement?",
    "questionUk": "Керівник хоче зняти етикетку з отриманої тари небезпечної речовини. Коли пункт (f)(9) допускає видалення чи пошкодження етикетки?",
    "answers": [
      [
        "When the container is immediately marked with the required information",
        "Коли тару негайно маркують потрібною інформацією"
      ],
      [
        "Whenever the product has been paid for",
        "Коли продукт оплачено"
      ],
      [
        "Whenever the foreman recognizes the liquid",
        "Коли бригадир упізнає рідину"
      ],
      [
        "Whenever the container is less than half full",
        "Коли тара заповнена менш ніж наполовину"
      ],
      [
        "Whenever the SDS is stored at corporate headquarters",
        "Коли SDS зберігається в головному офісі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Existing labels on incoming hazardous-chemical containers must not be removed or defaced unless the container is immediately marked with the required information. Familiarity with the product is not a substitute.",
    "explanationUk": "Чинні етикетки отриманої тари не можна знімати чи пошкоджувати, якщо тару негайно не маркують потрібною інформацією. Знання продукту не замінює маркування."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(f)(10)",
    "difficulty": "easy",
    "question": "A crew speaks Ukrainian. May the employer provide required workplace chemical warnings only in Ukrainian?",
    "questionUk": "Бригада розмовляє українською. Чи може роботодавець надати обов’язкові попередження про хімічні небезпеки на роботі лише українською?",
    "answers": [
      [
        "No; English is required, and Ukrainian may be added",
        "Ні; англійська обов’язкова, а українську можна додати"
      ],
      [
        "Yes; English is prohibited for multilingual crews",
        "Так; англійська заборонена для багатомовних бригад"
      ],
      [
        "Yes; any single language automatically suffices",
        "Так; будь-якої однієї мови автоматично достатньо"
      ],
      [
        "Only if the container is made of metal",
        "Лише якщо тара металева"
      ],
      [
        "Only if the chemical was purchased locally",
        "Лише якщо речовину придбано на місці"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (f)(10) requires legible workplace labels or warnings in English. Other languages may be added as long as the information is also presented in English.",
    "explanationUk": "Пункт (f)(10) вимагає читабельних робочих етикеток або попереджень англійською. Інші мови можна додавати, зберігаючи інформацію також англійською."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(g)(8)",
    "difficulty": "medium",
    "question": "A contractor keeps SDSs electronically, but only an absent manager has the password. Does this satisfy the employee-access requirement?",
    "questionUk": "Підрядник зберігає SDS електронно, але пароль має лише відсутній менеджер. Чи відповідає це вимозі доступу працівників?",
    "answers": [
      [
        "No; electronic access must not create barriers to immediate employee access",
        "Ні; електронний спосіб не повинен створювати перешкод негайному доступу працівників"
      ],
      [
        "Yes; merely owning the files is sufficient",
        "Так; достатньо просто мати файли"
      ],
      [
        "Yes; access is required only after an injury",
        "Так; доступ потрібен лише після травми"
      ],
      [
        "Yes; access can wait until the next payroll date",
        "Так; доступ може чекати наступної виплати зарплати"
      ],
      [
        "Yes; paper copies are prohibited",
        "Так; паперові копії заборонені"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (g)(8) permits electronic SDS access only without barriers to immediate access. Required SDSs must be readily accessible to employees in their work areas during each shift.",
    "explanationUk": "Пункт (g)(8) дозволяє електронні SDS лише без перешкод негайному доступу. Обов’язкові SDS мають бути доступні працівникам у робочих зонах протягом кожної зміни."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(g)(9)",
    "difficulty": "medium",
    "question": "Employees travel between several jobsites during one shift and SDSs are kept at the primary facility. What emergency-access condition applies?",
    "questionUk": "Працівники протягом зміни переміщуються між кількома об’єктами, а SDS зберігають на основній базі. Яка умова доступу діє в аварії?",
    "answers": [
      [
        "Employees must be able to obtain the required information immediately",
        "Працівники повинні мати можливість негайно отримати потрібну інформацію"
      ],
      [
        "Information may wait until employees return next week",
        "Інформація може чекати повернення наступного тижня"
      ],
      [
        "Only the client must have access",
        "Доступ потрібен лише клієнту"
      ],
      [
        "No emergency information is required for traveling crews",
        "Для виїзних бригад аварійна інформація не потрібна"
      ],
      [
        "Access may depend on buying a personal subscription",
        "Доступ може залежати від купівлі особистої передплати"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (g)(9) permits SDS storage at the primary facility for workers traveling between workplaces during a shift, but requires immediate availability of the needed information in an emergency.",
    "explanationUk": "Пункт (g)(9) дозволяє зберігати SDS на основній базі для працівників, які переміщуються між робочими місцями протягом зміни, але потрібна інформація в аварії має бути доступною негайно."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(g)(2)(iv), (viii)",
    "difficulty": "exam",
    "question": "A worker uses an SDS to find first-aid instructions and then exposure controls/personal protection. Which sections should the worker consult, in that order?",
    "questionUk": "Працівник шукає в SDS спершу вказівки першої допомоги, потім контроль впливу й особистий захист. До яких розділів потрібно звернутися в такому порядку?",
    "answers": [
      [
        "Section 4, then Section 8",
        "Спершу розділ 4, потім розділ 8"
      ],
      [
        "Section 1, then Section 3",
        "Спершу розділ 1, потім розділ 3"
      ],
      [
        "Section 5, then Section 9",
        "Спершу розділ 5, потім розділ 9"
      ],
      [
        "Section 7, then Section 10",
        "Спершу розділ 7, потім розділ 10"
      ],
      [
        "Section 11, then Section 16",
        "Спершу розділ 11, потім розділ 16"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The required SDS sequence places first-aid measures in Section 4 and exposure controls/personal protection in Section 8. This is SDS navigation, not Residential Code Book Practice.",
    "explanationUk": "У встановленій послідовності SDS перша допомога — розділ 4, контроль впливу й особистий захист — розділ 8. Це навігація SDS, а не практика Residential Code Book."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(h)(1)",
    "difficulty": "easy",
    "question": "When must a new employee receive effective hazard communication information and training for hazardous chemicals in the assigned work area?",
    "questionUk": "Коли новий працівник має отримати ефективне інформування й навчання щодо небезпечних речовин у призначеній робочій зоні?",
    "answers": [
      [
        "At the time of initial assignment",
        "Під час початкового призначення на роботу"
      ],
      [
        "Only after completing one year of work",
        "Лише після року роботи"
      ],
      [
        "Only after the first chemical injury",
        "Лише після першої хімічної травми"
      ],
      [
        "Only when the employee requests a raise",
        "Лише після прохання підвищити зарплату"
      ],
      [
        "Only at project closeout",
        "Лише під час закриття проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (h)(1) requires effective information and training at initial assignment. Waiting for an injury or an arbitrary service period does not satisfy that timing requirement.",
    "explanationUk": "Пункт (h)(1) вимагає ефективного інформування й навчання під час початкового призначення. Очікування травми чи довільного стажу не відповідає цьому строку."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(h)(1)",
    "difficulty": "medium",
    "question": "A new chemical hazard, not covered by the crew's previous training, is introduced into their work area. What additional training trigger applies under (h)(1)?",
    "questionUk": "У робочій зоні з’являється нова хімічна небезпека, якої попереднє навчання бригади не охоплювало. Яка вимога щодо додаткового навчання діє за (h)(1)?",
    "answers": [
      [
        "Provide effective information and training when that new hazard is introduced",
        "Надати ефективне інформування й навчання при введенні нової небезпеки"
      ],
      [
        "Wait until the chemical is completely used up",
        "Чекати повного витрачання речовини"
      ],
      [
        "Wait for the next building-permit renewal",
        "Чекати наступного поновлення будівельного дозволу"
      ],
      [
        "Train only if an employee becomes ill",
        "Навчати лише після захворювання працівника"
      ],
      [
        "No training is needed if the product has a label",
        "Навчання не потрібне, якщо продукт має етикетку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (h)(1) triggers training whenever a new chemical hazard not previously trained about is introduced into the work area. Labels and SDSs remain necessary but do not replace effective training.",
    "explanationUk": "Пункт (h)(1) вимагає навчання щоразу, коли в робочу зону вводять нову хімічну небезпеку, не охоплену попереднім навчанням. Етикетки й SDS потрібні, але не замінюють ефективного навчання."
  },
  {
    "section": "29 CFR 1926.59; 1910.1200(h)(3)(i), (iii)",
    "difficulty": "medium",
    "question": "Select TWO topics that must be included in employee hazard communication training.",
    "questionUk": "Оберіть ДВІ теми, які обов’язково входять до навчання працівників щодо хімічних небезпек.",
    "answers": [
      [
        "Methods or observations for detecting a hazardous-chemical release",
        "Методи чи спостереження для виявлення викиду небезпечної речовини"
      ],
      [
        "Protective measures, including applicable work practices, emergency procedures and PPE",
        "Захисні заходи, зокрема відповідні робочі практики, аварійні процедури та ЗІЗ"
      ],
      [
        "Only how to submit a material invoice",
        "Лише подання рахунку за матеріали"
      ],
      [
        "Only how to choose wall paint colors",
        "Лише вибір кольорів фарби"
      ],
      [
        "Only how to calculate a customer's loan payment",
        "Лише розрахунок кредитного платежу клієнта"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Paragraph (h)(3) includes detection of chemical presence or release and measures employees can use to protect themselves. Training also covers relevant hazards and the employer's hazard communication program.",
    "explanationUk": "Пункт (h)(3) охоплює виявлення наявності чи викиду речовин і заходи самозахисту працівників. Навчання також включає відповідні небезпеки та програму інформування роботодавця."
  }
];
export const intakeVerified119 = verifiedBatch(1413, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926.59 / 1910.1200", "osha", "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1910/section-1910.1200", seeds, "intake-series-115-120", false, "2026-10-22");
