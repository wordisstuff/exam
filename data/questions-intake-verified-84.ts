import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "1926.851(a)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.851",
    "difficulty": "medium",
    "question": "During demolition, an undesignated stair is still physically usable. What must happen to that access route?",
    "questionUk": "Під час демонтажу непризначені для доступу сходи фізично придатні. Що слід зробити з цим шляхом?",
    "answers": [
      [
        "Keep it entirely closed; use only designated access routes",
        "Повністю закрити; використовувати лише призначені шляхи"
      ],
      [
        "Use it whenever the designated stair is busy",
        "Використовувати, коли основні сходи зайняті"
      ],
      [
        "Use it if employees walk slowly",
        "Використовувати за повільного руху"
      ],
      [
        "Open it during lunch only",
        "Відкривати лише на обід"
      ],
      [
        "Leave it open with no sign",
        "Залишити відкритим без знака"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Only designated stairs, passageways and ladders may provide access. Other access ways must remain entirely closed.",
    "explanationUk": "Доступ дозволений лише призначеними сходами, проходами та драбинами. Інші шляхи мають залишатися повністю закритими."
  },
  {
    "section": "1926.851(b)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.851",
    "difficulty": "exam",
    "question": "Select the required ongoing measures for demolition access stairs, passageways, ladders and related equipment.",
    "questionUk": "Виберіть постійні обов’язкові заходи для сходів, проходів, драбин та пов’язаного обладнання доступу під час демонтажу.",
    "answers": [
      [
        "Periodic inspections",
        "Періодичні огляди"
      ],
      [
        "Maintenance in clean, safe condition",
        "Підтримання чистого й безпечного стану"
      ],
      [
        "Inspection only after demolition ends",
        "Огляд лише після завершення демонтажу"
      ],
      [
        "Allowing debris buildup until final cleanup",
        "Накопичення сміття до фінального прибирання"
      ],
      [
        "Relying solely on employee familiarity",
        "Покладання лише на досвід працівників"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The rule requires periodic inspection and clean, safe maintenance rather than a one-time access designation.",
    "explanationUk": "Правило вимагає періодичних оглядів та підтримання чистоти й безпеки, а не лише одноразового призначення шляху."
  },
  {
    "section": "1926.851(c)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.851",
    "difficulty": "medium",
    "question": "What lighting is permitted for a stairwell used during demolition of a multistory building?",
    "questionUk": "Яке освітлення дозволене для використовуваної сходової клітки під час демонтажу багатоповерхової будівлі?",
    "answers": [
      [
        "Proper illumination by natural or artificial means",
        "Належне природне або штучне освітлення"
      ],
      [
        "Natural light only",
        "Лише природне світло"
      ],
      [
        "Artificial light only",
        "Лише штучне світло"
      ],
      [
        "No light if employees know the route",
        "Без світла, якщо маршрут знайомий"
      ],
      [
        "Light only on the top landing",
        "Світло лише на верхньому майданчику"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Either natural or artificial illumination is allowed, provided the used stairwell is properly illuminated.",
    "explanationUk": "Дозволене природне або штучне освітлення за умови належної освітленості використовуваної сходової клітки."
  },
  {
    "section": "1926.851(c)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.851",
    "difficulty": "exam",
    "question": "Demolition occurs on floor 8 while a stairwell is used below. Which proposed cover location satisfies the minimum two-floor separation?",
    "questionUk": "Демонтаж ведуть на 8-му поверсі, а нижче використовують сходову клітку. Яке розташування покриття відповідає мінімальному розділенню у два поверхи?",
    "answers": [
      [
        "At floor 6",
        "На 6-му поверсі"
      ],
      [
        "At floor 7",
        "На 7-му поверсі"
      ],
      [
        "At floor 8",
        "На 8-му поверсі"
      ],
      [
        "Above floor 8",
        "Вище 8-го поверху"
      ],
      [
        "No covering is required",
        "Покриття не потрібне"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The used stairwell must be completely and substantially covered at a point at least two floors below the work floor: 8 − 2 = 6.",
    "explanationUk": "Використовувану клітку повністю й міцно перекривають у точці щонайменше на два поверхи нижче робочого: 8 − 2 = 6."
  },
  {
    "section": "1926.851(c)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.851",
    "difficulty": "exam",
    "question": "Select the characteristics required for the passageway to the active demolition floor from a used stairwell.",
    "questionUk": "Виберіть обов’язкові характеристики проходу зі сходової клітки до поверху активного демонтажу.",
    "answers": [
      [
        "Properly lighted",
        "Належно освітлений"
      ],
      [
        "Protected",
        "Захищений"
      ],
      [
        "Separate",
        "Окремий"
      ],
      [
        "Shared with an unprotected debris-drop route",
        "Спільний із незахищеним шляхом скидання сміття"
      ],
      [
        "Optional whenever daylight is present",
        "Необов’язковий за денного світла"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The passageway to the work floor must be lighted, protected and separate; daylight does not eliminate the other requirements.",
    "explanationUk": "Прохід до робочого поверху має бути освітленим, захищеним та окремим; денне світло не скасовує інших вимог."
  },
  {
    "section": "1926.852(a)",
    "difficulty": "medium",
    "question": "A demolition crew proposes dropping material outside the building's exterior walls. What prerequisite applies?",
    "questionUk": "Бригада планує скидати матеріал за зовнішні стіни будівлі. Яка попередня умова діє?",
    "answers": [
      [
        "The receiving area must be effectively protected",
        "Зона приймання має бути ефективно захищена"
      ],
      [
        "Only the truck's parking brake matters",
        "Важливе лише стоянкове гальмо вантажівки"
      ],
      [
        "No protection is needed for light debris",
        "Легке сміття не потребує захисту"
      ],
      [
        "An owner's verbal consent is sufficient",
        "Достатньо усної згоди власника"
      ],
      [
        "Protection is required only after an injury",
        "Захист потрібний лише після травми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Material may not be dropped outside exterior walls unless the area is effectively protected.",
    "explanationUk": "Матеріал не можна скидати за зовнішні стіни без ефективного захисту відповідної зони."
  },
  {
    "section": "1926.852(b)",
    "difficulty": "medium",
    "question": "A debris chute section is 60° above horizontal. What enclosure rule applies?",
    "questionUk": "Секція жолоба для сміття має кут 60° до горизонталі. Яка вимога до закриття діє?",
    "answers": [
      [
        "Entire enclosure, except permitted floor-level insertion openings with closures",
        "Повне закриття, крім дозволених завантажувальних отворів біля рівня поверху із затворами"
      ],
      [
        "Open sides are allowed at any angle",
        "Відкриті боки дозволені за будь-якого кута"
      ],
      [
        "Only the bottom ten feet need enclosure",
        "Закривають лише нижні десять футів"
      ],
      [
        "Only angles above 90° require enclosure",
        "Закриття потрібне лише за кута понад 90°"
      ],
      [
        "A handrail replaces enclosure",
        "Поручень замінює закриття"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Chutes or sections more than 45° from horizontal must be entirely enclosed except the specified insertion openings.",
    "explanationUk": "Жолоби або секції з кутом понад 45° до горизонталі повністю закривають, крім передбачених завантажувальних отворів."
  },
  {
    "section": "1926.852(b)",
    "difficulty": "exam",
    "question": "Which two details comply for an insertion opening in an enclosed demolition chute below the top floor?",
    "questionUk": "Які дві деталі відповідають вимогам для завантажувального отвору закритого жолоба нижче верхнього поверху?",
    "answers": [
      [
        "Height no more than 48 inches measured along the chute wall",
        "Висота не більше 48 дюймів уздовж стінки жолоба"
      ],
      [
        "Closed when not in use",
        "Закритий, коли не використовується"
      ],
      [
        "Height measured horizontally instead of along the wall",
        "Висота виміряна горизонтально замість уздовж стінки"
      ],
      [
        "Left open overnight",
        "Відкритий на ніч"
      ],
      [
        "No closure because the chute is enclosed",
        "Без затвора, бо жолоб закритий"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Openings may not exceed 48 inches along the chute wall. Below the top floor they must be closed when unused.",
    "explanationUk": "Отвори не перевищують 48 дюймів уздовж стінки. Нижче верхнього поверху їх закривають, коли не використовують."
  },
  {
    "section": "1926.852(c)",
    "difficulty": "exam",
    "question": "Select the required discharge controls for a demolition debris chute.",
    "questionUk": "Виберіть обов’язкові засоби контролю виходу демонтажного жолоба.",
    "answers": [
      [
        "A substantial gate at or near the discharge end",
        "Міцний затвор на виході або біля нього"
      ],
      [
        "A competent employee assigned to control the gate and truck backing/loading",
        "Компетентний працівник для контролю затвора та руху назад і завантаження вантажівок"
      ],
      [
        "An unattended opening instead of a gate",
        "Нагляд відсутній, замість затвора відкритий отвір"
      ],
      [
        "Gate placement only at the roof",
        "Затвор лише на даху"
      ],
      [
        "Control only by untrained visitors",
        "Контроль лише ненавченими відвідувачами"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The gate controls discharge; an assigned competent employee controls both its operation and truck backing/loading.",
    "explanationUk": "Затвор контролює вихід; призначений компетентний працівник контролює його роботу та рух назад і завантаження вантажівок."
  },
  {
    "section": "1926.852(d)",
    "difficulty": "easy",
    "question": "What must happen around the chute discharge when operations are not in progress?",
    "questionUk": "Що потрібно зробити довкола виходу жолоба, коли роботи не ведуть?",
    "answers": [
      [
        "Securely close off the surrounding area",
        "Надійно закрити доступ до навколишньої зони"
      ],
      [
        "Open it for public shortcuts",
        "Відкрити для проходу сторонніх"
      ],
      [
        "Remove every barrier",
        "Зняти всі огородження"
      ],
      [
        "Leave the gate open for ventilation",
        "Відкрити затвор для вентиляції"
      ],
      [
        "Allow parking directly under discharge",
        "Дозволити паркування просто під виходом"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The surrounding discharge area must be securely closed off during inactive periods.",
    "explanationUk": "Під час перерв доступ до зони довкола виходу має бути надійно закритий."
  },
  {
    "section": "1926.852(e)",
    "difficulty": "exam",
    "question": "Workers dump debris into a chute. Select the required opening protections.",
    "questionUk": "Працівники завантажують сміття у жолоб. Виберіть обов’язковий захист отворів.",
    "answers": [
      [
        "Substantial guardrail approximately 42 inches above their standing surface",
        "Міцне огородження приблизно 42 дюйми над поверхнею стояння"
      ],
      [
        "Solid covering of space between chute and floor-opening edge",
        "Суцільне закриття проміжку між жолобом і краєм отвору перекриття"
      ],
      [
        "A rope at ankle height instead of the guardrail",
        "Мотузка на рівні щиколоток замість огородження"
      ],
      [
        "Leaving the gap open for inspection",
        "Відкритий проміжок для огляду"
      ],
      [
        "Guardrail only at the discharge truck",
        "Огородження лише біля вантажівки на виході"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The dumping opening needs the specified substantial guardrail, and the gap where the chute passes through the floor must be solidly covered.",
    "explanationUk": "Завантажувальний отвір потребує зазначеного міцного огородження; проміжок у місці проходження жолоба через перекриття закривають суцільно."
  },
  {
    "section": "1926.852(f)–(g)",
    "difficulty": "exam",
    "question": "Wheelbarrows dump debris at a chute opening. Which minimum securely attached bumper dimensions apply?",
    "questionUk": "Тачки вивантажують сміття в отвір жолоба. Які мінімальні розміри надійно закріпленого упора діють?",
    "answers": [
      [
        "4 inches thick and 6 inches high",
        "Товщина 4 дюйми, висота 6 дюймів"
      ],
      [
        "2 inches thick and 4 inches high",
        "Товщина 2 дюйми, висота 4 дюйми"
      ],
      [
        "1 inch thick and 6 inches high",
        "Товщина 1 дюйм, висота 6 дюймів"
      ],
      [
        "4 inches thick and 4 inches high",
        "Товщина 4 дюйми, висота 4 дюйми"
      ],
      [
        "6 inches thick and 2 inches high",
        "Товщина 6 дюймів, висота 2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Mechanical equipment or wheelbarrow dumping requires a securely attached toeboard or bumper at least 4 inches thick and 6 inches high at each opening. Chute strength must also prevent impact failure.",
    "explanationUk": "За вивантаження механізмами чи тачками кожен отвір потребує надійного бортового упора завтовшки щонайменше 4 дюйми й заввишки 6 дюймів. Міцність жолоба також має запобігати руйнуванню від ударів."
  }
];
export const intakeVerified84 = verifiedBatch(993, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926 Subpart T", "osha", "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.852", seeds, "intake-series-79-84", false);

