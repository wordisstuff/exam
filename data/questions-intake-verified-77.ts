import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "1300.0220 subp. 1",
    "difficulty": "medium",
    "question": "A newly constructed principal dwelling is ready for move-in. Under the occupancy rule, what must occur before it is used or occupied?",
    "questionUk": "Новий основний житловий будинок готовий до заселення. Що має відбутися до його використання чи заселення за правилом щодо occupancy?",
    "answers": [
      [
        "The building official issues a certificate of occupancy",
        "Будівельний інспектор видає certificate of occupancy"
      ],
      [
        "The contractor announces completion without official issuance",
        "Підрядник оголошує завершення без видачі документа інспектором"
      ],
      [
        "The owner pays the final invoice only",
        "Власник лише сплачує кінцевий рахунок"
      ],
      [
        "The lender releases funds only",
        "Кредитор лише перераховує кошти"
      ],
      [
        "The permit application alone is accepted",
        "Лише приймають заяву на дозвіл"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The rule requires the official's occupancy certificate before use or occupancy; accessory-structure exceptions do not apply to this principal dwelling.",
    "explanationUk": "Правило вимагає документа про дозволене використання від інспектора до використання чи заселення; винятки для допоміжних споруд не стосуються цього основного житла."
  },
  {
    "section": "1300.0220 subp. 1",
    "difficulty": "exam",
    "question": "An occupancy certificate purports to authorize a known code violation. What legal effect does that purported permission have?",
    "questionUk": "Документ про дозволене використання нібито дозволяє відоме порушення коду. Який правовий ефект має такий дозвіл?",
    "answers": [
      [
        "It is not valid authority to violate or cancel the code",
        "Він не є чинним дозволом порушувати або скасовувати код"
      ],
      [
        "It permanently replaces every applicable code provision",
        "Він назавжди замінює всі чинні норми"
      ],
      [
        "It is valid whenever the contractor requested it",
        "Він чинний, якщо підрядник його попросив"
      ],
      [
        "It binds every future inspector to accept the violation",
        "Він зобов’язує майбутніх інспекторів прийняти порушення"
      ],
      [
        "It becomes valid after 30 days without complaint",
        "Він стає чинним після 30 днів без скарги"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Issuing the certificate does not approve code violations; certificates purporting to cancel or violate the code are not valid.",
    "explanationUk": "Видача документа не погоджує порушень; документи, які нібито скасовують код чи дозволяють його порушення, не чинні."
  },
  {
    "section": "1300.0220 subp. 1, exception B",
    "difficulty": "medium",
    "question": "For an accessory structure built under the IRC, who has the option of requiring an occupancy certificate under the stated exception?",
    "questionUk": "Хто за зазначеним винятком може вирішувати, чи потрібний документ про дозволене використання допоміжної споруди, збудованої за IRC?",
    "answers": [
      [
        "The municipality",
        "Муніципалітет"
      ],
      [
        "Only the property insurer",
        "Лише страховик майна"
      ],
      [
        "Only the material manufacturer",
        "Лише виробник матеріалів"
      ],
      [
        "Only the owner's lender",
        "Лише кредитор власника"
      ],
      [
        "The contractor alone",
        "Лише підрядник"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The municipality may choose to require certificates for IRC accessory structures; the exception is not an automatic statewide ban on requiring them.",
    "explanationUk": "Муніципалітет може вимагати документи для допоміжних споруд за IRC; виняток не забороняє таку вимогу в усьому штаті."
  },
  {
    "section": "1300.0220 subp. 2",
    "difficulty": "medium",
    "question": "A structure's occupancy was legal when the code was adopted, and no change is proposed. What does the existing-structure provision permit?",
    "questionUk": "Використання споруди було законним на момент прийняття коду, змін не планують. Що дозволяє положення щодо наявних споруд?",
    "answers": [
      [
        "Continued legal occupancy without change",
        "Продовження законного використання без змін"
      ],
      [
        "Automatic closure until rebuilt as new",
        "Автоматичне закриття до перебудови як нового"
      ],
      [
        "Automatic reclassification to residential",
        "Автоматичне переведення до житлової класифікації"
      ],
      [
        "Automatic exemption from all future change-in-use rules",
        "Автоматичне звільнення від усіх майбутніх правил зміни використання"
      ],
      [
        "Occupancy only if the structure is moved",
        "Використання лише після перенесення споруди"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Legal occupancy existing at adoption is permitted to continue unchanged; a later change in use is a separate issue.",
    "explanationUk": "Законне використання, наявне при прийнятті коду, може тривати без змін; подальша зміна використання є окремим питанням."
  },
  {
    "section": "1300.0220 subp. 3",
    "difficulty": "medium",
    "question": "Which TWO Minnesota Rules chapters are named for changes in the character or use of an existing structure? Select TWO.",
    "questionUk": "Які ДВІ глави Minnesota Rules зазначені для зміни характеру або використання наявної споруди? Оберіть ДВІ.",
    "answers": [
      [
        "Chapter 1305",
        "Глава 1305"
      ],
      [
        "Chapter 1311",
        "Глава 1311"
      ],
      [
        "Chapter 1322 only",
        "Лише глава 1322"
      ],
      [
        "Chapter 1303 only",
        "Лише глава 1303"
      ],
      [
        "Chapter 4714 only",
        "Лише глава 4714"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Changes in character or use must comply with Chapter 1305 or 1311 under subpart 3.",
    "explanationUk": "Зміни характеру або використання мають відповідати главі 1305 або 1311 за підпунктом 3."
  },
  {
    "section": "1300.0220 subp. 4",
    "difficulty": "exam",
    "question": "A nonresidential structure is moved into a jurisdiction and does not use the Chapter 1311 exception. What general code standard applies?",
    "questionUk": "Нежитлову споруду переносять у юрисдикцію, виняток глави 1311 не застосовано. Який загальний нормативний стандарт діє?",
    "answers": [
      [
        "The provisions for new buildings or structures",
        "Положення для нових будівель або споруд"
      ],
      [
        "Only its original construction-year code regardless of relocation",
        "Лише код року первинного будівництва незалежно від перенесення"
      ],
      [
        "Only the new owner's lease terms",
        "Лише умови оренди нового власника"
      ],
      [
        "Only exterior paint requirements",
        "Лише вимоги до зовнішньої фарби"
      ],
      [
        "No building-code provisions after relocation",
        "Жодні будівельні норми після перенесення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Moved structures generally follow new-construction code provisions, subject to the specific listed exceptions.",
    "explanationUk": "Перенесені споруди загалом виконують норми нового будівництва з урахуванням конкретних перелічених винятків."
  },
  {
    "section": "1300.0220 subp. 4, exception B",
    "difficulty": "exam",
    "question": "A residential building is relocated within or into a municipality. Which energy-code statement follows the express moved-building exception?",
    "questionUk": "Житлову будівлю переносять у межах муніципалітету або в нього. Яке твердження щодо енергетичного коду випливає з прямого винятку?",
    "answers": [
      [
        "It need not comply with the Minnesota Energy Code under this relocation exception",
        "За цим винятком перенесення вона не зобов’язана відповідати Minnesota Energy Code"
      ],
      [
        "It must always be rebuilt to every current energy requirement",
        "Її завжди слід перебудувати за всіма чинними енергетичними вимогами"
      ],
      [
        "It is exempt from every building and safety code",
        "Вона звільнена від усіх будівельних і безпекових кодів"
      ],
      [
        "The exception applies only to nonresidential warehouses",
        "Виняток діє лише для нежитлових складів"
      ],
      [
        "The exception removes every later alteration obligation",
        "Виняток скасовує всі подальші обов’язки щодо змін"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The express residential-relocation exception names the Minnesota Energy Code and section 326B.439; it is not a blanket waiver of all building requirements.",
    "explanationUk": "Прямий виняток для перенесення житла називає Minnesota Energy Code і статтю 326B.439; це не загальне звільнення від усіх будівельних вимог."
  },
  {
    "section": "1300.0220 subp. 5(A), (C), (F)",
    "difficulty": "medium",
    "question": "Which THREE items are expressly required on the occupancy certificate? Select THREE.",
    "questionUk": "Які ТРИ відомості прямо потрібні в документі про дозволене використання? Оберіть ТРИ.",
    "answers": [
      [
        "Building permit number",
        "Номер будівельного дозволу"
      ],
      [
        "Owner's name and address",
        "Ім’я та адреса власника"
      ],
      [
        "Code edition under which the permit was issued",
        "Редакція коду, за якою видано дозвіл"
      ],
      [
        "Contractor's profit margin",
        "Маржа прибутку підрядника"
      ],
      [
        "Appraised resale value",
        "Оціночна ціна перепродажу"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Subpart 5 lists the permit number, owner identification and code edition among the required certificate information.",
    "explanationUk": "Підпункт 5 включає номер дозволу, відомості власника та редакцію коду до обов’язкової інформації документа."
  },
  {
    "section": "1300.0220 subp. 5(J)",
    "difficulty": "medium",
    "question": "The building permit has special stipulations and conditions. How must the final occupancy certificate treat them?",
    "questionUk": "Будівельний дозвіл містить особливі застереження й умови. Як має врахувати їх кінцевий документ про дозволене використання?",
    "answers": [
      [
        "Include them in the certificate",
        "Включити їх до документа"
      ],
      [
        "Omit them because issuance cancels all conditions",
        "Пропустити, бо видача скасовує всі умови"
      ],
      [
        "Replace them with the contractor's verbal assurance",
        "Замінити усною обіцянкою підрядника"
      ],
      [
        "List them only on a supplier invoice",
        "Указати лише в рахунку постачальника"
      ],
      [
        "Include them only if the owner requests it",
        "Включити лише на прохання власника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Required certificate content includes any special stipulations and conditions of the building permit.",
    "explanationUk": "Обов’язковий зміст документа включає особливі застереження й умови будівельного дозволу."
  },
  {
    "section": "1300.0220 subp. 6",
    "difficulty": "exam",
    "question": "A permit's entire scope is unfinished, but a portion is proposed for occupancy. What condition supports a temporary occupancy certificate?",
    "questionUk": "Увесь обсяг робіт за дозволом не завершено, але частину хочуть використовувати. Яка умова дозволяє тимчасовий документ про використання?",
    "answers": [
      [
        "The proposed portions can be occupied safely",
        "Запропоновані частини можна безпечно використовувати"
      ],
      [
        "The contractor merely promises later completion",
        "Підрядник лише обіцяє завершити пізніше"
      ],
      [
        "The owner has already moved furniture inside",
        "Власник уже заніс меблі"
      ],
      [
        "The final invoice has been paid",
        "Сплачено кінцевий рахунок"
      ],
      [
        "The permit automatically becomes temporary after 90 days",
        "Дозвіл автоматично стає тимчасовим через 90 днів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The official may issue a temporary certificate before all permitted work is complete if the occupied portions are safe.",
    "explanationUk": "Інспектор може видати тимчасовий документ до завершення всіх робіт, якщо використовувані частини безпечні."
  },
  {
    "section": "1300.0220 subp. 6",
    "difficulty": "medium",
    "question": "Who establishes the validity period of a temporary occupancy certificate under the rule?",
    "questionUk": "Хто за правилом визначає строк чинності тимчасового документа про використання?",
    "answers": [
      [
        "The building official",
        "Будівельний інспектор"
      ],
      [
        "The contractor unilaterally",
        "Підрядник одноосібно"
      ],
      [
        "The homeowner's insurer",
        "Страховик власника"
      ],
      [
        "The mortgage lender",
        "Іпотечний кредитор"
      ],
      [
        "The rule always fixes exactly one year",
        "Правило завжди визначає рівно один рік"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The building official sets the temporary certificate's valid time period; this rule does not fix a universal number of days.",
    "explanationUk": "Інспектор установлює строк чинності тимчасового документа; правило не визначає єдину кількість днів."
  },
  {
    "section": "1300.0220 subp. 7",
    "difficulty": "exam",
    "question": "An occupancy certificate was issued using incorrect supplied information. What action is the building official authorized to take?",
    "questionUk": "Документ про використання видано на основі неправильних наданих відомостей. Яку дію інспектор має право виконати?",
    "answers": [
      [
        "Issue a written suspension or revocation",
        "Письмово призупинити або відкликати документ"
      ],
      [
        "Allow the certificate to remain irrevocable",
        "Залишити документ таким, що не підлягає відкликанню"
      ],
      [
        "Revoke it only by an undocumented verbal comment",
        "Відкликати лише недокументованим усним зауваженням"
      ],
      [
        "Require the owner alone to cancel it",
        "Вимагати скасування лише від власника"
      ],
      [
        "Treat incorrect information as irrelevant after issuance",
        "Ігнорувати неправильні відомості після видачі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subpart 7 allows written suspension or revocation for error, incorrect supplied information or specified code/regulatory violations.",
    "explanationUk": "Підпункт 7 дозволяє письмове призупинення чи відкликання через помилку, неправильні надані відомості або зазначені нормативні порушення."
  }
];
export const intakeVerified77 = verifiedBatch(909, "Plans and Specifications", "Plans", "Minnesota Rules 1300.0220", "mn-rule", "https://www.revisor.mn.gov/rules/1300.0220/", seeds, "intake-series-73-78", false);

