import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.353(a)(1)",
    "question": "Select TWO system types recognized as mechanical ventilation for welding, cutting and heating.",
    "questionUk": "Оберіть ДВА типи систем, визнаних механічною вентиляцією зварювання, різання та нагрівання.",
    "answers": [
      [
        "General mechanical ventilation",
        "Загальнообмінна механічна вентиляція"
      ],
      [
        "Local exhaust ventilation",
        "Місцева витяжна вентиляція"
      ],
      [
        "Oxygen released from a cylinder for room cooling",
        "Випуск кисню з балона для охолодження кімнати"
      ],
      [
        "Only opening a toolbox",
        "Лише відкривання ящика інструментів"
      ],
      [
        "Only posting a warning sign",
        "Лише попереджувальний знак"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (a)(1) recognizes general mechanical systems and local exhaust systems; subsequent requirements govern their capacity and arrangement.",
    "explanationUk": "Пункт (a)(1) визнає загальнообмінні механічні та місцеві витяжні системи; далі задані їх продуктивність і розташування."
  },
  {
    "section": "29 CFR 1926.353(a)(3)",
    "question": "Where should a movable local-exhaust hood be placed during welding?",
    "questionUk": "Де під час зварювання слід розміщувати рухомий зонт місцевої витяжки?",
    "answers": [
      [
        "As close as practicable to the work to capture fumes at the source",
        "Якомога ближче до роботи для захоплення диму біля джерела"
      ],
      [
        "At the farthest corner regardless of capture",
        "У найдальшому куті незалежно від захоплення"
      ],
      [
        "Only outside the building with no duct",
        "Лише зовні без повітропроводу"
      ],
      [
        "Only behind the supply-air intake",
        "Лише за припливним отвором"
      ],
      [
        "Only near stored clean tools",
        "Лише біля чистих інструментів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The hood must be freely movable, close to the work and effective at removing fumes at their source while protecting the breathing zone.",
    "explanationUk": "Зонт має бути рухомим, близьким до роботи й ефективно відводити дим біля джерела із захистом зони дихання."
  },
  {
    "section": "29 CFR 1926.353(a)(4)",
    "question": "A welding exhaust outlet discharges contaminated air beside the fresh-air intake. What correction does the rule require?",
    "questionUk": "Вихід зварювальної витяжки викидає забруднене повітря поруч зі свіжим припливом. Яке виправлення вимагає правило?",
    "answers": [
      [
        "Discharge into open air or otherwise clear of the intake-air source",
        "Викидати у відкрите повітря або іншим способом подалі від джерела припливу"
      ],
      [
        "Direct more exhaust into the intake",
        "Спрямувати більше вихлопу в приплив"
      ],
      [
        "Use the intake grille as the exhaust outlet",
        "Використати припливну решітку як вихід"
      ],
      [
        "Reduce the warning-sign size",
        "Зменшити попереджувальний знак"
      ],
      [
        "Recirculate all exhaust without regard to contamination",
        "Повертати весь вихлоп без урахування забруднення"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Contaminated exhaust must be discharged to open air or otherwise clear of intake air; it must not simply contaminate the replacement supply.",
    "explanationUk": "Забруднений вихлоп відводять у відкрите повітря чи подалі від припливу; він не повинен просто забруднювати замінне повітря."
  },
  {
    "section": "29 CFR 1926.353(a)(5)",
    "question": "What quality must the air replacing exhausted welding-workspace air have?",
    "questionUk": "Яку якість повинно мати повітря, що замінює видалене зі зварювальної зони?",
    "answers": [
      [
        "Clean and respirable",
        "Чисте та придатне для дихання"
      ],
      [
        "Any air warmer than outside",
        "Будь-яке тепліше за зовнішнє"
      ],
      [
        "Any air with a strong masking odor",
        "Будь-яке з сильним маскувальним запахом"
      ],
      [
        "Air drawn from another contaminated process",
        "Повітря іншого забрудненого процесу"
      ],
      [
        "Pure oxygen from a welding cylinder",
        "Чистий кисень зі зварювального балона"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (a)(5) requires all replacement air to be clean and respirable.",
    "explanationUk": "Пункт (a)(5) вимагає, щоб усе замінне повітря було чистим і придатним для дихання."
  },
  {
    "section": "29 CFR 1926.353(a)(6)",
    "question": "May oxygen from the welding supply be used for comfort cooling or blowing dust from clothing?",
    "questionUk": "Чи можна використовувати кисень зі зварювальної системи для охолодження людини чи здування пилу з одягу?",
    "answers": [
      [
        "No; both uses are prohibited",
        "Ні; обидва використання заборонені"
      ],
      [
        "Yes; if the cylinder is half empty",
        "Так; якщо балон напівпорожній"
      ],
      [
        "Yes; if no flame is visible",
        "Так; якщо не видно полум’я"
      ],
      [
        "Yes; oxygen is a permitted ventilation substitute",
        "Так; кисень замінює вентиляцію"
      ],
      [
        "Yes; whenever compressed air is unavailable",
        "Так; коли немає стисненого повітря"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Oxygen cannot be used for ventilation, comfort cooling, dust removal from clothing or work-area cleaning.",
    "explanationUk": "Кисень не використовують для вентиляції, охолодження, здування пилу з одягу чи очищення робочої зони."
  },
  {
    "section": "29 CFR 1926.353(b)(1)",
    "question": "Subject to the stated respirator and toxic-metal exceptions, what ventilation is required for welding in a confined space?",
    "questionUk": "Яка вентиляція потрібна для зварювання в обмеженому просторі з урахуванням заданих винятків щодо респіраторів і токсичних металів?",
    "answers": [
      [
        "General mechanical or local exhaust ventilation meeting paragraph (a)",
        "Загальнообмінна механічна чи місцева витяжна вентиляція за пунктом (a)"
      ],
      [
        "Only a sign saying confined space",
        "Лише знак обмеженого простору"
      ],
      [
        "Only a handheld room thermometer",
        "Лише ручний термометр"
      ],
      [
        "No ventilation if the welder is experienced",
        "Без вентиляції для досвідченого зварювальника"
      ],
      [
        "Only oxygen released into the space",
        "Лише випуск кисню всередину"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (b)(1) establishes mechanical/local-exhaust ventilation, subject to its explicit cross-referenced exceptions.",
    "explanationUk": "Пункт (b)(1) задає механічну чи місцеву витяжну вентиляцію з прямо згаданими винятками."
  },
  {
    "section": "29 CFR 1926.353(b)(2)",
    "question": "Adequate confined-space welding ventilation cannot be obtained without blocking access. Which protection combination is required by this provision?",
    "questionUk": "Достатню вентиляцію зварювання в обмеженому просторі неможливо забезпечити без блокування доступу. Яке поєднання захисту вимагає це положення?",
    "answers": [
      [
        "Air-line respirators and an outside employee maintaining communication and aiding in emergencies",
        "Респіратори з подачею повітря та працівник зовні для зв’язку й допомоги в аварії"
      ],
      [
        "Only a disposable dust mask and no attendant",
        "Лише одноразова пилова маска без спостерігача"
      ],
      [
        "Only closing the access hatch",
        "Лише закрити люк"
      ],
      [
        "Only working faster",
        "Лише працювати швидше"
      ],
      [
        "Only an oxygen hose near the welder",
        "Лише кисневий шланг біля зварювальника"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (b)(2) requires compliant air-line respirators plus an outside employee assigned communication and emergency assistance duties.",
    "explanationUk": "Пункт (b)(2) вимагає відповідні респіратори з подачею повітря та працівника зовні для зв’язку й аварійної допомоги."
  },
  {
    "section": "29 CFR 1926.353(b)(3)",
    "question": "A welder enters through a small manhole. What rescue arrangement must be available under the welding-specific rule?",
    "questionUk": "Зварювальник входить через малий люк. Яка рятувальна організація потрібна за спеціальним зварювальним правилом?",
    "answers": [
      [
        "Quick removal means and an outside attendant with a preplanned rescue procedure",
        "Засоби швидкого витягування та спостерігач зовні з попереднім планом порятунку"
      ],
      [
        "Only a phone number posted inside",
        "Лише номер телефону всередині"
      ],
      [
        "Only a coworker elsewhere on site with no observation",
        "Лише колега десь на об’єкті без спостереження"
      ],
      [
        "Only a warning label on the hatch",
        "Лише етикетка на люку"
      ],
      [
        "No rescue arrangement if entry lasts less than an hour",
        "Без організації порятунку для входу менше години"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (b)(3) requires means of quick removal and an attendant outside observing the welder and capable of initiating the preplanned rescue.",
    "explanationUk": "Пункт (b)(3) вимагає засоби швидкого витягування та зовнішнього спостерігача, який бачить зварювальника й здатний почати запланований порятунок."
  },
  {
    "section": "29 CFR 1926.353(c)(1)(i)",
    "question": "Welding zinc-coated metal occurs in an enclosed space. What ventilation choice is specified for that listed metal category?",
    "questionUk": "Оцинкований метал зварюють у замкненому просторі. Який вибір вентиляції заданий для цієї категорії металу?",
    "answers": [
      [
        "General mechanical or local exhaust ventilation meeting paragraph (a)",
        "Загальнообмінна механічна або місцева витяжна вентиляція за пунктом (a)"
      ],
      [
        "Only an open paint container",
        "Лише відкрита банка фарби"
      ],
      [
        "No ventilation because the coating is metallic",
        "Без вентиляції, бо покриття металеве"
      ],
      [
        "Only a warning vest",
        "Лише сигнальний жилет"
      ],
      [
        "Only cooling the cylinder",
        "Лише охолодження балона"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Zinc-bearing base/filler metals and zinc-coated metals are included in paragraph (c)(1)'s enclosed-space ventilation requirement.",
    "explanationUk": "Основні й присадні метали з цинком та оцинковані метали входять до вимоги вентиляції замкненого простору за (c)(1)."
  },
  {
    "section": "29 CFR 1926.353(c)(2)(iv)",
    "question": "For enclosed-space hot work involving beryllium-containing base or filler metals, which protection is required?",
    "questionUk": "Який захист потрібен для гарячих робіт у замкненому просторі з основними чи присадними металами, що містять берилій?",
    "answers": [
      [
        "Both local exhaust ventilation and air-line respirators",
        "І місцева витяжка, і респіратори з подачею повітря"
      ],
      [
        "Either a room fan or no respirator",
        "Або кімнатний вентилятор, або без респіратора"
      ],
      [
        "Only general ventilation without a respirator",
        "Лише загальна вентиляція без респіратора"
      ],
      [
        "Only a particulate mask with no exhaust",
        "Лише пилова маска без витяжки"
      ],
      [
        "No protection if no visible smoke appears",
        "Без захисту за відсутності видимого диму"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Because of high beryllium toxicity, this provision requires both controls, unlike the ordinary either/or wording for other listed metals.",
    "explanationUk": "Через високу токсичність берилію це положення вимагає обидва заходи, на відміну від звичайного вибору одного для інших перелічених металів."
  },
  {
    "section": "29 CFR 1926.353(c)(4)",
    "question": "Other employees breathe the same atmosphere as workers welding metals covered by paragraph (c). How must those other employees be protected?",
    "questionUk": "Інші працівники дихають тим самим повітрям, що й зварювальники металів за пунктом (c). Як їх потрібно захищати?",
    "answers": [
      [
        "In the same manner as the welder or burner",
        "Так само, як зварювальника чи різальника"
      ],
      [
        "Only with ordinary work clothes",
        "Лише звичайним робочим одягом"
      ],
      [
        "No protection unless they hold the torch",
        "Без захисту, якщо не тримають пальник"
      ],
      [
        "Only if they are employed by the same subcontractor",
        "Лише за роботи в того самого субпідрядника"
      ],
      [
        "Only after they report symptoms",
        "Лише після повідомлення симптомів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (c)(4) extends the same protection to others exposed to that atmosphere.",
    "explanationUk": "Пункт (c)(4) поширює той самий захист на інших осіб у цій атмосфері."
  },
  {
    "section": "29 CFR 1926.353(d)(1)(i)",
    "question": "Unshielded chlorinated-solvent use is planned 150 feet from an exposed inert-gas metal arc. What minimum separation does the stated rule require?",
    "questionUk": "Незахищене використання хлорованого розчинника планують за 150 футів від відкритої дуги зварювання в інертному газі. Яку мінімальну відстань вимагає задане правило?",
    "answers": [
      [
        "200 feet, unless shielded",
        "200 футів, якщо немає екранування"
      ],
      [
        "25 feet without exception",
        "25 футів без винятків"
      ],
      [
        "50 feet without exception",
        "50 футів без винятків"
      ],
      [
        "100 feet in every case",
        "100 футів у кожному випадку"
      ],
      [
        "150 feet is always sufficient",
        "150 футів завжди достатньо"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Keep chlorinated-solvent use at least 200 feet away unless shielded. Solvent-prepared surfaces must also be thoroughly dry before welding.",
    "explanationUk": "Використання хлорованих розчинників віддаляють щонайменше на 200 футів без екранування. Підготовлені ними поверхні також мають повністю висохнути до зварювання."
  }
];
export const intakeVerified137 = verifiedBatch(1629, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926", "osha", "https://www.ecfr.gov/current/title-29/section-1926.353", seeds, "intake-series-133-138", false, "2026-11-02");
