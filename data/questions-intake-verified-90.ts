import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "1926.52(a)",
    "difficulty": "medium",
    "question": "Which sound-level-meter setting corresponds to the construction noise exposure table?",
    "questionUk": "Яке налаштування шумоміра відповідає таблиці будівельної шумової експозиції?",
    "answers": [
      [
        "A-weighting with slow response",
        "Частотне зважування A, повільний відгук"
      ],
      [
        "C-weighting with fast response only",
        "Лише зважування C, швидкий відгук"
      ],
      [
        "Unweighted peak reading only",
        "Лише незважений піковий показник"
      ],
      [
        "Any scale with no response setting",
        "Будь-яка шкала без налаштування відгуку"
      ],
      [
        "Only a phone's volume setting",
        "Лише гучність телефона"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Table D-2 levels are measured on the A-scale of a standard sound level meter at slow response; peak impulse levels are a separate concept.",
    "explanationUk": "Рівні таблиці D-2 вимірюють стандартним шумоміром зі шкалою A й повільним відгуком; піковий імпульсний рівень — окреме поняття."
  },
  {
    "section": "1926.52(b)",
    "difficulty": "exam",
    "question": "Employees exceed Table D-2 levels. Select the required control sequence elements.",
    "questionUk": "Працівники зазнають рівнів понад таблицю D-2. Виберіть обов’язкові елементи послідовності контролю.",
    "answers": [
      [
        "Use feasible administrative or engineering controls",
        "Використати здійсненні адміністративні чи інженерні заходи"
      ],
      [
        "Provide and use PPE if those controls do not reduce exposure within table limits",
        "Надати й використовувати ЗІЗ, якщо ці заходи не знижують вплив до меж таблиці"
      ],
      [
        "Skip all feasible controls because cotton is available",
        "Пропустити всі здійсненні заходи через наявність вати"
      ],
      [
        "Treat posted warnings as a complete substitute",
        "Вважати знаки повною заміною заходів"
      ],
      [
        "Allow exposure without controls if workers agree",
        "Дозволити вплив без заходів за згодою працівників"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Feasible administrative/engineering controls are required; where insufficient, PPE must be provided and used to bring levels within table limits.",
    "explanationUk": "Потрібні здійсненні адміністративні чи інженерні заходи; якщо їх недостатньо, надають і використовують ЗІЗ для зниження до меж таблиці."
  },
  {
    "section": "1926.52(d)(1)",
    "difficulty": "medium",
    "question": "What ongoing program does the construction rule require whenever its stated noise values are exceeded?",
    "questionUk": "Якої постійної програми будівельне правило вимагає за перевищення зазначених ним значень шуму?",
    "answers": [
      [
        "A continuing, effective hearing conservation program",
        "Постійної дієвої програми збереження слуху"
      ],
      [
        "Only an annual purchase of earplugs",
        "Лише щорічної закупівлі берушів"
      ],
      [
        "Only a sign on the gate",
        "Лише знака на воротах"
      ],
      [
        "Only a worker's waiver",
        "Лише відмови працівника від претензій"
      ],
      [
        "No program for construction work",
        "Для будівництва програма не потрібна"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 1926.52(d)(1) requires a continuing effective hearing conservation program when its listed values are exceeded; this is not a question about the separate general-industry trigger.",
    "explanationUk": "1926.52(d)(1) вимагає постійної дієвої програми збереження слуху за перевищення наведених значень; це не питання про окремий поріг загальнопромислового правила."
  },
  {
    "section": "1926.52(c)",
    "difficulty": "medium",
    "question": "A tool's varying noise has maxima every 0.8 second. How does the construction standard classify that variation?",
    "questionUk": "Змінний шум інструмента має максимуми кожні 0,8 секунди. Як будівельний стандарт класифікує таку зміну?",
    "answers": [
      [
        "As continuous noise",
        "Як безперервний шум"
      ],
      [
        "As silence between unrelated events",
        "Як тишу між непов’язаними подіями"
      ],
      [
        "As automatically exempt from the table",
        "Як автоматично звільнений від таблиці"
      ],
      [
        "As noise that needs no measurement",
        "Як шум, що не потребує вимірювання"
      ],
      [
        "As an emergency-only exposure",
        "Як вплив лише для аварій"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Maxima at intervals of 1 second or less are considered continuous; 0.8 second falls within that definition.",
    "explanationUk": "Максимуми з інтервалом 1 секунда або менше вважаються безперервним шумом; 0,8 секунди підпадає під визначення."
  },
  {
    "section": "1926.52 Table D-2, 95-dBA row",
    "difficulty": "medium",
    "question": "With no other daily noise periods, what exposure duration does Table D-2 list at 95 dBA slow response?",
    "questionUk": "Яку тривалість впливу вказує таблиця D-2 для 95 dBA з повільним відгуком за відсутності інших шумових періодів дня?",
    "answers": [
      [
        "4 hours",
        "4 години"
      ],
      [
        "8 hours",
        "8 годин"
      ],
      [
        "6 hours",
        "6 годин"
      ],
      [
        "2 hours",
        "2 години"
      ],
      [
        "30 minutes",
        "30 хвилин"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 95-dBA row pairs that level with 4 hours per day. Mixed-level exposures must instead account for their combined effect.",
    "explanationUk": "Рядок 95 dBA відповідає 4 годинам на день. Для різних рівнів протягом дня враховують їхній сумарний вплив."
  },
  {
    "section": "1926.52 Table D-2, 110-dBA row",
    "difficulty": "exam",
    "question": "A task produces 110 dBA slow response. What single-level daily duration is listed in Table D-2?",
    "questionUk": "Робота створює 110 dBA з повільним відгуком. Яка денна тривалість цього єдиного рівня зазначена в таблиці D-2?",
    "answers": [
      [
        "30 minutes",
        "30 хвилин"
      ],
      [
        "15 minutes",
        "15 хвилин"
      ],
      [
        "60 minutes",
        "60 хвилин"
      ],
      [
        "90 minutes",
        "90 хвилин"
      ],
      [
        "120 minutes",
        "120 хвилин"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table allows ½ hour at 110 dBA, which is 30 minutes; it is not the 1-hour duration for 105 dBA.",
    "explanationUk": "Таблиця задає ½ години за 110 dBA, тобто 30 хвилин; це не година, указана для 105 dBA."
  },
  {
    "section": "1926.52(d)(2)(ii); Table D-2",
    "difficulty": "exam",
    "question": "A worker has 2 hours at 90 dBA and 1 hour at 100 dBA, with no other noise periods. What equivalent exposure factor results?",
    "questionUk": "Працівник перебуває 2 години за 90 dBA та 1 годину за 100 dBA, без інших шумових періодів. Який еквівалентний коефіцієнт впливу?",
    "answers": [
      [
        "0.75",
        "Коефіцієнт 0,75"
      ],
      [
        "0.25",
        "Коефіцієнт 0,25"
      ],
      [
        "0.50",
        "Коефіцієнт 0,50"
      ],
      [
        "1.25",
        "Коефіцієнт 1,25"
      ],
      [
        "1.50",
        "Коефіцієнт 1,50"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Using table durations of 8 hours at 90 dBA and 2 at 100: Fe = 2/8 + 1/2 = .25 + .50 = .75.",
    "explanationUk": "За табличних 8 годин для 90 dBA та 2 годин для 100: Fe = 2/8 + 1/2 = 0,25 + 0,50 = 0,75."
  },
  {
    "section": "1926.52(d)(2)(i)–(ii); Table D-2",
    "difficulty": "exam",
    "question": "A day includes 3 hours at 95 dBA and 1 hour at 100 dBA only. Each period is below its separate table duration. What is the combined result?",
    "questionUk": "День містить лише 3 години за 95 dBA та 1 годину за 100 dBA. Кожен період коротший за окрему табличну тривалість. Який сумарний результат?",
    "answers": [
      [
        "Fe = 1.25, exceeding permissible levels",
        "Fe = 1,25, допустимий рівень перевищено"
      ],
      [
        "Fe = 0.75, below the limit",
        "Fe = 0,75, нижче межі"
      ],
      [
        "Fe = 1.00 exactly",
        "Fe = 1,00 точно"
      ],
      [
        "No calculation is needed because both periods separately fit",
        "Розрахунок не потрібний, бо окремі періоди вкладаються"
      ],
      [
        "Fe = 0.25",
        "Fe = 0,25"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Combined exposure matters: 3/4 + 1/2 = 1.25, exceeding unity. Separate compliance of individual periods does not establish daily compliance.",
    "explanationUk": "Важливий сумарний вплив: 3/4 + 1/2 = 1,25, що більше одиниці. Окрема відповідність періодів не доводить відповідність усього дня."
  },
  {
    "section": "1926.52(d)(2)(ii)",
    "difficulty": "medium",
    "question": "In the mixed-noise formula Σ(T/L), what does L represent?",
    "questionUk": "Що означає L у формулі змішаного шумового впливу Σ(T/L)?",
    "answers": [
      [
        "Permissible duration at that constant level from Table D-2",
        "Допустиму тривалість за цього сталого рівня з таблиці D-2"
      ],
      [
        "The sound level number in decibels",
        "Число рівня звуку в децибелах"
      ],
      [
        "The worker's age",
        "Вік працівника"
      ],
      [
        "The number of earplug pairs",
        "Кількість пар берушів"
      ],
      [
        "The tool's horsepower",
        "Потужність інструмента в кінських силах"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "T is actual exposure time; L is permissible exposure duration at that level. Both must use consistent time units, not divide hours by dBA.",
    "explanationUk": "T — фактична тривалість; L — допустима тривалість за цього рівня. Одиниці часу мають збігатися; години не ділять на dBA."
  },
  {
    "section": "1926.52(e)",
    "difficulty": "medium",
    "question": "What peak sound-pressure level does 1926.52(e) say impulsive or impact noise should not exceed?",
    "questionUk": "Який піковий рівень звукового тиску імпульсного чи ударного шуму 1926.52(e) рекомендує не перевищувати?",
    "answers": [
      [
        "140 dB peak",
        "Піковий 140 dB"
      ],
      [
        "90 dB peak",
        "Піковий 90 dB"
      ],
      [
        "100 dB peak",
        "Піковий 100 dB"
      ],
      [
        "110 dB peak",
        "Піковий 110 dB"
      ],
      [
        "115 dB peak",
        "Піковий 115 dB"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The paragraph uses 'should not exceed' 140 dB peak. It is a peak-sound-pressure statement, not a Table D-2 slow-response duration row.",
    "explanationUk": "Положення використовує формулювання «не слід перевищувати» 140 dB пікового тиску. Це пікове значення, а не рядок тривалості з повільним відгуком таблиці D-2."
  },
  {
    "section": "1926.101(b)",
    "difficulty": "medium",
    "question": "How must hearing protectors inserted into the ear be fitted or determined?",
    "questionUk": "Як мають підбирати або припасовувати засоби захисту, що вставляються у вухо?",
    "answers": [
      [
        "Individually by competent persons",
        "Індивідуально компетентними особами"
      ],
      [
        "Only by matching the package color",
        "Лише за кольором упаковки"
      ],
      [
        "Identically for every employee without assessment",
        "Однаково всім без оцінки"
      ],
      [
        "Only by the newest worker",
        "Лише найновішим працівником"
      ],
      [
        "Only after hearing loss occurs",
        "Лише після втрати слуху"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Inserted ear protectors must be fitted or determined individually by competent persons; one-size distribution alone does not meet that fitting requirement.",
    "explanationUk": "Вставні засоби захисту слуху індивідуально припасовують або підбирають компетентні особи; сама однакова роздача не виконує вимоги підбору.",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.101"
  },
  {
    "section": "1926.101(c)",
    "difficulty": "easy",
    "question": "Which proposed hearing-protection substitute is expressly unacceptable?",
    "questionUk": "Який запропонований замінник захисту слуху прямо неприпустимий?",
    "answers": [
      [
        "Plain cotton placed in the ears",
        "Звичайна вата у вухах"
      ],
      [
        "Properly selected earmuffs",
        "Правильно підібрані навушники"
      ],
      [
        "Individually fitted earplugs",
        "Індивідуально припасовані беруші"
      ],
      [
        "An appropriate approved ear-protection device",
        "Належний схвалений засіб захисту вух"
      ],
      [
        "Suitable purpose-made hearing protectors",
        "Придатні спеціальні засоби захисту слуху"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "OSHA explicitly states that plain cotton is not an acceptable protective device; it is not a substitute for suitable hearing protection.",
    "explanationUk": "OSHA прямо зазначає, що звичайна вата не є прийнятним засобом захисту; вона не замінює належного захисту слуху.",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.101"
  }
];
export const intakeVerified90 = verifiedBatch(1065, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926.52 and 1926.101", "osha", "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.52", seeds, "intake-series-85-90", false, "2026-10-14");

