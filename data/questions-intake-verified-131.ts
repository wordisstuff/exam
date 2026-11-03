import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Minn. Stat. 337.01, subd. 2",
    "question": "Which contract falls within Chapter 337's building-and-construction definition rather than its production-equipment exclusion?",
    "questionUk": "Який договір входить до визначення будівельного договору глави 337, а не винятку виробничого обладнання?",
    "answers": [
      [
        "Repairing a residential building's real property",
        "Ремонт нерухомої конструкції житлової будівлі"
      ],
      [
        "Repairing machinery used in a manufacturing process",
        "Ремонт машин виробничого процесу"
      ],
      [
        "Maintaining converting-process machinery",
        "Обслуговування машин переробного процесу"
      ],
      [
        "Repairing production-process equipment",
        "Ремонт обладнання виробничого процесу"
      ],
      [
        "Maintaining utility equipment used for production or distribution",
        "Обслуговування комунального обладнання виробництва чи розподілу"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The definition covers real-property repair and maintenance but excludes the specified production machinery/equipment contracts.",
    "explanationUk": "Визначення охоплює ремонт і обслуговування нерухомості, але виключає зазначені договори виробничих машин та обладнання."
  },
  {
    "section": "Minn. Stat. 337.10, subd. 1",
    "question": "A construction contract to be performed in Minnesota requires all arbitration to occur in another state. What is the statutory effect of that provision?",
    "questionUk": "Будівельний договір, який виконують у Minnesota, вимагає проводити весь арбітраж в іншому штаті. Який законний наслідок такого положення?",
    "answers": [
      [
        "It is void and unenforceable",
        "Воно недійсне й не підлягає виконанню"
      ],
      [
        "It is automatically binding because arbitration is private",
        "Воно автоматично обов’язкове через приватність арбітражу"
      ],
      [
        "It is valid whenever printed in bold",
        "Воно чинне за жирного шрифту"
      ],
      [
        "It becomes valid after a progress payment",
        "Воно стає чинним після проміжного платежу"
      ],
      [
        "It is valid only because the project is residential",
        "Воно чинне лише через житловий характер проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Subdivision 1 voids provisions requiring out-of-state litigation, arbitration or other dispute resolution for Minnesota construction contracts.",
    "explanationUk": "Subd. 1 визнає недійсними вимоги суду, арбітражу чи іншого вирішення спорів в іншому штаті для будівельних договорів, виконуваних у Minnesota."
  },
  {
    "section": "Minn. Stat. 337.02",
    "question": "To what extent does the ordinary construction-indemnity rule permit indemnification based on the promisor's conduct?",
    "questionUk": "У яких межах звичайне правило будівельного відшкодування допускає indemnification за дії сторони, яка його обіцяє?",
    "answers": [
      [
        "To the extent injury or damage is attributable to its or its listed representatives' negligent or otherwise wrongful acts or omissions",
        "У межах шкоди від недбалих чи інших неправомірних дій або бездіяльності цієї сторони чи її перелічених представників"
      ],
      [
        "For all losses regardless of whose conduct caused them",
        "Для всіх збитків незалежно від причини"
      ],
      [
        "Only for losses unrelated to the work",
        "Лише для збитків поза роботами"
      ],
      [
        "Never for employees' wrongful conduct",
        "Ніколи за неправомірні дії працівників"
      ],
      [
        "Only if the claim exceeds one million dollars",
        "Лише за вимоги понад мільйон доларів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Section 337.02 links ordinary enforceability to attributable wrongful conduct, including breach of a specific contractual duty; it separately addresses environmental strict liability.",
    "explanationUk": "337.02 пов’язує звичайну чинність із неправомірними діями, включно з порушенням конкретного договірного обов’язку; окремо охоплює екологічну сувору відповідальність."
  },
  {
    "section": "Minn. Stat. 337.02",
    "question": "Outside the environmental strict-liability exception, a clause makes a subcontractor indemnify a prime for injury caused solely by the prime's negligence. Is that allocation enforceable under the ordinary rule?",
    "questionUk": "Поза винятком екологічної суворої відповідальності пункт змушує субпідрядника відшкодовувати травму, спричинену виключно недбалістю генпідрядника. Чи чинний такий розподіл за звичайним правилом?",
    "answers": [
      [
        "No; the stated injury is not attributable to the indemnifying party or its listed representatives",
        "Ні; зазначена травма не спричинена стороною-відшкодувачем чи її представниками"
      ],
      [
        "Yes; any signed indemnity is enforceable",
        "Так; будь-яке підписане відшкодування чинне"
      ],
      [
        "Yes; primes may shift all negligence by a standard form",
        "Так; стандартна форма переносить усю недбалість"
      ],
      [
        "Yes; subcontractors always insure every prime's acts",
        "Так; субпідрядники завжди страхують усі дії генпідрядника"
      ],
      [
        "Yes; only oral clauses are restricted",
        "Так; обмежені лише усні пункти"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The ordinary exception to unenforceability extends only to attributable conduct of the promisor and its listed representatives. The scenario excludes the separate environmental exception.",
    "explanationUk": "Звичайний виняток із нечинності охоплює лише дії сторони-відшкодувача та її перелічених представників. Сценарій виключає окремий екологічний виняток."
  },
  {
    "section": "Minn. Stat. 337.03",
    "question": "A neighbor, for whose account no construction is performed, permits a contractor onto adjacent property as an accommodation. Which indemnity category is excluded from sections 337.01–337.05?",
    "questionUk": "Сусід, для якого роботи не виконують, як послугу допускає підрядника на суміжну ділянку. Яка категорія відшкодування виключена з 337.01–337.05?",
    "answers": [
      [
        "An indemnity benefiting that accommodating property owner for the permitted access",
        "Відшкодування на користь такого власника за дозволений доступ"
      ],
      [
        "Every indemnity benefiting the project's owner",
        "Будь-яке відшкодування власнику проєкту"
      ],
      [
        "Every insurance policy regardless of context",
        "Будь-який страховий поліс незалежно від контексту"
      ],
      [
        "Only agreements signed after completion",
        "Лише угоди після завершення"
      ],
      [
        "Only agreements involving public roads",
        "Лише угоди публічних доріг"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Section 337.03 excludes the specified accommodation-access arrangement where construction is not performed for that property's owner.",
    "explanationUk": "337.03 виключає зазначену домовленість доступу як послуги, коли роботи не виконуються для власника такої ділянки."
  },
  {
    "section": "Minn. Stat. 337.03",
    "question": "Which set of conditions supports the settlement-related exception from sections 337.01–337.05?",
    "questionUk": "Який набір умов відповідає винятку мирової угоди з 337.01–337.05?",
    "answers": [
      [
        "Consideration, a disputed past construction-related event, and indemnity limited to claims from that event",
        "Зустрічне надання, спірна минула будівельна подія та відшкодування лише вимог із неї"
      ],
      [
        "No consideration and indemnity for all future unrelated projects",
        "Без зустрічного надання та всі майбутні сторонні проєкти"
      ],
      [
        "Only a verbal promise covering unspecified future events",
        "Лише усна обіцянка невизначених майбутніх подій"
      ],
      [
        "Only the promisee's signature without a past dispute",
        "Лише підпис одержувача без минулого спору"
      ],
      [
        "Only an advance waiver before any event occurs",
        "Лише попередня відмова до будь-якої події"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The settlement exception requires all listed elements; indemnity may cover claims arising or potentially arising from that past event.",
    "explanationUk": "Виняток мирової угоди потребує всіх перелічених умов; відшкодування може охоплювати наявні чи можливі вимоги з цієї минулої події."
  },
  {
    "section": "Minn. Stat. 337.05, subd. 1(b)–(e)",
    "question": "On an ordinary residential project outside the railroad exception, a clause requires a party to insure another party's own negligence, with none of the preserved coverage categories applicable. What is its status?",
    "questionUk": "На звичайному житловому проєкті поза залізничним винятком пункт вимагає страхувати власну недбалість іншої сторони; жодна збережена категорія покриття не діє. Який його статус?",
    "answers": [
      [
        "Against public policy, void and unenforceable",
        "Суперечить публічному порядку, недійсний і невиконуваний"
      ],
      [
        "Always valid because it uses the word insurance",
        "Завжди чинний через слово страхування"
      ],
      [
        "Valid if placed in a subcontract",
        "Чинний як частина субпідряду"
      ],
      [
        "Valid without any exceptions or restrictions",
        "Чинний без жодних винятків чи обмежень"
      ],
      [
        "Automatically converted to workers' compensation",
        "Автоматично перетворюється на workers’ compensation"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Subdivision 1(b) prohibits that insurance requirement; paragraphs (c)–(e) preserve specified categories and the railroad exception, excluded by this scenario.",
    "explanationUk": "Subd. 1(b) забороняє таку вимогу страхування; пункти (c)–(e) зберігають певні категорії та залізничний виняток, виключені сценарієм."
  },
  {
    "section": "Minn. Stat. 337.05, subd. 1(d)",
    "question": "Does the prohibition in subdivision 1(b) invalidate a requirement to insure the promisee's vicarious liability arising from the promisor's acts or omissions?",
    "questionUk": "Чи скасовує заборона subd. 1(b) вимогу страхувати вікарну відповідальність одержувача за дії чи бездіяльність сторони, яка обіцяє покриття?",
    "answers": [
      [
        "No; subdivision 1(d) expressly preserves that category",
        "Ні; subd. 1(d) прямо зберігає цю категорію"
      ],
      [
        "Yes; every additional-party coverage requirement is void",
        "Так; усе покриття інших сторін недійсне"
      ],
      [
        "Yes; vicarious liability is never insurable",
        "Так; вікарна відповідальність ніколи не страхується"
      ],
      [
        "Yes; only the promisee's own negligence may be covered",
        "Так; можна страхувати лише власну недбалість одержувача"
      ],
      [
        "Yes; only homeowners may obtain coverage",
        "Так; покриття можуть отримати лише домовласники"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (d) preserves coverage for the promisee's vicarious liability, or warranty liability, arising from the promisor's acts or omissions.",
    "explanationUk": "Пункт (d) зберігає покриття вікарної чи гарантійної відповідальності одержувача, що виникає з дій чи бездіяльності сторони, яка обіцяє покриття."
  },
  {
    "section": "Minn. Stat. 337.05, subd. 2",
    "question": "A party promises specified insurance but fails to keep it in force. A claim falls within that promised coverage, and no statutory unavailability defense applies. What indemnity follows?",
    "questionUk": "Сторона обіцяє конкретне страхування, але не підтримує його чинним. Вимога входить до обіцяного покриття, а захист через недоступність не діє. Яке відшкодування виникає?",
    "answers": [
      [
        "Indemnification to the same extent as the specified insurance",
        "Відшкодування в тих самих межах, що й зазначене страхування"
      ],
      [
        "No obligation because no insurer issued payment",
        "Жодного обов’язку без виплати страховика"
      ],
      [
        "Only reimbursement of the application fee",
        "Лише повернення плати за заяву"
      ],
      [
        "Only half of the promised coverage",
        "Лише половина обіцяного покриття"
      ],
      [
        "Only the cost of printing an insurance certificate",
        "Лише вартість друку сертифіката"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Subdivision 2 imposes indemnification to the extent of specified insurance when its three conditions are met, subject to subdivision 3.",
    "explanationUk": "Subd. 2 задає відшкодування в межах зазначеного страхування за трьох умов з урахуванням subd. 3."
  },
  {
    "section": "Minn. Stat. 337.05, subd. 3",
    "question": "Specified insurance was not reasonably available in the market. What additional condition is required for the statutory exception to failure-to-procure indemnity?",
    "questionUk": "Зазначене страхування не було розумно доступне на ринку. Яка додаткова умова потрібна для законного винятку відшкодування за неотримання покриття?",
    "answers": [
      [
        "Inform the other party before signing, or sign subject to a written exception for that unavailable insurance",
        "Повідомити іншу сторону до підписання або підписати з письмовим винятком щодо недоступного страхування"
      ],
      [
        "Say nothing until a claim occurs",
        "Мовчати до виникнення вимоги"
      ],
      [
        "Only tell a coworker after signing",
        "Лише повідомити колегу після підписання"
      ],
      [
        "Only discard the insurance request",
        "Лише викинути запит страхування"
      ],
      [
        "Only reduce the contract price without explanation",
        "Лише знизити ціну без пояснення"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Both market unavailability and the prescribed pre-signing disclosure or written exception are required.",
    "explanationUk": "Потрібні і ринкова недоступність, і задане повідомлення до підписання або письмовий виняток."
  },
  {
    "section": "Minn. Stat. 337.05, subd. 4",
    "question": "A claim within promised insurance coverage involves a $5,000 deductible. Under subdivision 4, to what extent does the promisor owe deductible indemnity to the promisee?",
    "questionUk": "Вимога в межах обіцяного покриття має франшизу 5 000 доларів. У яких межах subd. 4 вимагає від сторони відшкодувати її одержувачу?",
    "answers": [
      [
        "The full $5,000 deductible",
        "Повні 5 000 доларів франшизи"
      ],
      [
        "Only $500",
        "Лише 500 доларів"
      ],
      [
        "Only half, $2,500",
        "Лише половину — 2 500 доларів"
      ],
      [
        "Nothing merely because coverage has a deductible",
        "Нічого лише через наявність франшизи"
      ],
      [
        "Only the insurance premium",
        "Лише страхову премію"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "When the subdivision's conditions hold, indemnification extends to the full deductible or self-insured retention.",
    "explanationUk": "За виконання умов підрозділу відшкодування охоплює повну франшизу чи self-insured retention."
  },
  {
    "section": "Minn. Stat. 337.05, subd. 5",
    "question": "Select TWO actions that do NOT waive a promisor's obligation to provide specified insurance.",
    "questionUk": "Оберіть ДВІ дії, які НЕ скасовують обов’язок надати зазначене страхування.",
    "answers": [
      [
        "The promisee does not insist on an insurance certificate",
        "Одержувач не наполягає на страховому сертифікаті"
      ],
      [
        "The promisee accepts a certificate showing different coverage",
        "Одержувач приймає сертифікат з іншим покриттям"
      ],
      [
        "An express valid amendment deleting the obligation",
        "Пряма чинна зміна, яка вилучає обов’язок"
      ],
      [
        "Full performance of the specified insurance obligation",
        "Повне виконання зазначеного страхового обов’язку"
      ],
      [
        "A valid contract termination removing future duties",
        "Чинне розірвання з припиненням майбутніх обов’язків"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "difficulty": "medium",
    "explanation": "Subdivision 5 expressly says neither failure to insist on evidence nor acceptance of varying evidence waives the insurance obligation.",
    "explanationUk": "Subd. 5 прямо визначає, що ані відсутність вимоги доказу, ані прийняття доказу відмінного покриття не скасовують страховий обов’язок."
  }
];
export const intakeVerified131 = verifiedBatch(1557, "Minnesota Contractor Law / Business", "Business / Licensing", "Minnesota Statutes", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/337/full", seeds, "intake-series-127-132", false, "2026-11-02");
