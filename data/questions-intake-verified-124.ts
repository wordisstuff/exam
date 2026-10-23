import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.200(a)",
    "difficulty": "medium",
    "question": "A required jobsite warning sign is hidden behind stored plywood while work continues. Which requirement is violated?",
    "questionUk": "Обов’язковий попереджувальний знак на об’єкті закритий складеною фанерою, поки роботи тривають. Яку вимогу порушено?",
    "answers": [
      [
        "Required signs and symbols must remain visible whenever work is performed",
        "Обов’язкові знаки й символи мають бути видимими весь час виконання робіт"
      ],
      [
        "Signs need be visible only during the morning inspection",
        "Знаки повинні бути видимими лише під час ранкової перевірки"
      ],
      [
        "Signs need be visible only to the supervisor",
        "Знаки повинні бути видимими лише керівнику"
      ],
      [
        "Covered signs are allowed if workers remember them",
        "Закриті знаки дозволені, якщо працівники їх пам’ятають"
      ],
      [
        "Visibility is required only after an incident",
        "Видимість потрібна лише після інциденту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 1926.200(a) requires visibility at all times when work is being performed. Merely having a sign on site does not satisfy the rule if stored materials hide it.",
    "explanationUk": "1926.200(a) вимагає постійної видимості під час виконання робіт. Самої наявності знака на об’єкті недостатньо, якщо матеріали його закривають."
  },
  {
    "section": "29 CFR 1926.200(a)",
    "difficulty": "easy",
    "question": "A temporary hazard has been eliminated. What should happen to the corresponding accident-prevention sign?",
    "questionUk": "Тимчасову небезпеку усунуто. Що слід зробити з відповідним знаком запобігання нещасним випадкам?",
    "answers": [
      [
        "Promptly remove or cover it",
        "Негайно зняти або закрити"
      ],
      [
        "Leave it displayed until the next annual audit",
        "Залишити до наступного щорічного аудиту"
      ],
      [
        "Keep it uncovered until the entire project ends",
        "Тримати відкритим до завершення всього проєкту"
      ],
      [
        "Turn it into a permanent warning regardless of conditions",
        "Зробити постійним незалежно від умов"
      ],
      [
        "Remove it only after an employee complains",
        "Зняти лише після скарги працівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 1926.200(a) requires signs to be removed or covered promptly when the hazards no longer exist. Stale warnings should not remain active displays.",
    "explanationUk": "1926.200(a) вимагає швидко знімати або закривати знаки після зникнення небезпек. Неактуальне попередження не повинно залишатися діючим знаком."
  },
  {
    "section": "29 CFR 1926.200(b)(1)",
    "difficulty": "medium",
    "question": "Which condition warrants a DANGER sign under 1926.200(b)(1)?",
    "questionUk": "Яка умова відповідає використанню знака DANGER за 1926.200(b)(1)?",
    "answers": [
      [
        "An immediate hazard exists",
        "Існує безпосередня небезпека"
      ],
      [
        "Only a general reminder of good housekeeping",
        "Лише загальне нагадування про порядок"
      ],
      [
        "Only the location of a first-aid room",
        "Лише місце розташування медпункту"
      ],
      [
        "Only a direction to the employee parking lot",
        "Лише напрямок до стоянки працівників"
      ],
      [
        "Only an optional productivity instruction",
        "Лише необов’язкова виробнича вказівка"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Danger signs are reserved for immediate hazards under paragraph (b)(1). Potential hazards and unsafe-practice cautions are addressed by the caution-sign provision.",
    "explanationUk": "Пункт (b)(1) відводить знаки Danger для безпосередніх небезпек. Потенційні небезпеки й застереження щодо небезпечних прийомів охоплює правило Caution."
  },
  {
    "section": "29 CFR 1926.200(c)(1)",
    "difficulty": "medium",
    "question": "A warning addresses a potential hazard or an unsafe practice rather than an immediate hazard. Which sign category does 1926.200(c)(1) prescribe?",
    "questionUk": "Попередження стосується потенційної небезпеки чи небезпечного прийому, а не безпосередньої небезпеки. Яку категорію знака визначає 1926.200(c)(1)?",
    "answers": [
      [
        "CAUTION",
        "Знак CAUTION"
      ],
      [
        "EXIT",
        "Знак EXIT"
      ],
      [
        "Directional sign only",
        "Лише напрямний знак"
      ],
      [
        "Safety instruction sign only",
        "Лише знак інструкції безпеки"
      ],
      [
        "DANGER in every case",
        "Завжди знак DANGER"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Caution signs warn against potential hazards or unsafe practices. The code distinguishes their purpose from the immediate-hazard use of danger signs.",
    "explanationUk": "Знаки Caution застерігають від потенційних небезпек чи небезпечних прийомів. Їх призначення відрізняється від Danger для безпосередньої небезпеки."
  },
  {
    "section": "29 CFR 1926.200(b)(2)",
    "difficulty": "easy",
    "question": "Which color arrangement is expressly specified for a DANGER sign's upper and lower panels?",
    "questionUk": "Яке кольорове оформлення верхньої та нижньої панелей знака DANGER прямо задане?",
    "answers": [
      [
        "Predominantly red upper panel and white lower panel, with black border outlines",
        "Переважно червона верхня та біла нижня панель із чорними контурами меж"
      ],
      [
        "Green upper panel and yellow lower panel",
        "Зелена верхня та жовта нижня панель"
      ],
      [
        "Blue upper panel and green lower panel",
        "Синя верхня та зелена нижня панель"
      ],
      [
        "White upper panel and black lower panel",
        "Біла верхня та чорна нижня панель"
      ],
      [
        "Yellow upper panel and red lower panel",
        "Жовта верхня та червона нижня панель"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (b)(2) specifies a red-predominant upper panel, black border outlines and a white lower panel for additional wording.",
    "explanationUk": "Пункт (b)(2) задає переважно червону верхню панель, чорні контури меж і білу нижню панель для додаткового тексту."
  },
  {
    "section": "29 CFR 1926.200(c)(2)–(3)",
    "difficulty": "medium",
    "question": "Which CAUTION sign scheme matches OSHA's specified colors?",
    "questionUk": "Яке оформлення знака CAUTION відповідає кольорам, заданим OSHA?",
    "answers": [
      [
        "Yellow background, black upper panel, yellow CAUTION lettering and black additional wording on yellow",
        "Жовтий фон, чорна верхня панель, жовтий напис CAUTION та чорний додатковий текст на жовтому"
      ],
      [
        "Red background with green lettering throughout",
        "Червоний фон із зеленим текстом"
      ],
      [
        "White background with red CAUTION lettering only",
        "Білий фон лише з червоним написом CAUTION"
      ],
      [
        "Blue background with white letters throughout",
        "Синій фон із білим текстом"
      ],
      [
        "Green background with black CAUTION lettering",
        "Зелений фон із чорним написом CAUTION"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraphs (c)(2) and (3) specify yellow predominance with a black panel, yellow caution lettering on black and black additional wording on yellow.",
    "explanationUk": "Пункти (c)(2) і (3) задають переважно жовтий фон, чорну панель, жовтий напис Caution на чорному та чорний додатковий текст на жовтому."
  },
  {
    "section": "29 CFR 1926.200(d)",
    "difficulty": "exam",
    "question": "For an exit sign required under this construction-sign provision, which lettering dimensions and colors are specified?",
    "questionUk": "Які розміри й кольори літер задані для вихідного знака, потрібного за цим будівельним правилом знаків?",
    "answers": [
      [
        "Red letters at least 6 inches high on white, with principal strokes at least 3/4 inch wide",
        "Червоні літери не нижче 6 дюймів на білому, основний штрих не вужче 3/4 дюйма"
      ],
      [
        "Red letters 4 inches high with 1/4-inch strokes",
        "Червоні літери 4 дюйми зі штрихом 1/4 дюйма"
      ],
      [
        "Green letters 3 inches high on black",
        "Зелені літери 3 дюйми на чорному"
      ],
      [
        "Black letters 2 inches high on yellow",
        "Чорні літери 2 дюйми на жовтому"
      ],
      [
        "Any color and size if the supervisor approves",
        "Будь-які розмір і колір за згодою керівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 1926.200(d) specifies legible red letters at least 6 inches high on white with a principal stroke at least 3/4 inch wide. This question concerns that OSHA provision, not a separate building-code sign standard.",
    "explanationUk": "1926.200(d) задає читабельні червоні літери від 6 дюймів на білому з основним штрихом від 3/4 дюйма. Питання стосується саме OSHA, а не окремого стандарту знаків building code."
  },
  {
    "section": "29 CFR 1926.200(e)",
    "difficulty": "easy",
    "question": "When a safety instruction sign is used, which upper-panel scheme must convey its principal message?",
    "questionUk": "Яке оформлення верхньої панелі повинно передавати основне повідомлення знака інструкції безпеки?",
    "answers": [
      [
        "Green upper panel with white letters",
        "Зелена верхня панель із білими літерами"
      ],
      [
        "Red upper panel with black letters",
        "Червона верхня панель із чорними літерами"
      ],
      [
        "Yellow upper panel with red letters",
        "Жовта верхня панель із червоними літерами"
      ],
      [
        "Black upper panel with green letters",
        "Чорна верхня панель із зеленими літерами"
      ],
      [
        "Blue upper panel with yellow letters",
        "Синя верхня панель із жовтими літерами"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (e) specifies white signs with a green upper panel and white principal-message letters. Additional wording is black on white.",
    "explanationUk": "Пункт (e) задає білий знак із зеленою верхньою панеллю та білими літерами основного повідомлення. Додатковий текст — чорний на білому."
  },
  {
    "section": "29 CFR 1926.200(f)",
    "difficulty": "medium",
    "question": "Which design is specified for a directional sign that is NOT an automotive traffic sign?",
    "questionUk": "Яке оформлення задане для напрямного знака, що НЕ є автомобільним дорожнім знаком?",
    "answers": [
      [
        "White sign with a black panel and white directional symbol",
        "Білий знак із чорною панеллю та білим напрямним символом"
      ],
      [
        "Yellow sign with a red panel and blue arrow",
        "Жовтий знак із червоною панеллю й синьою стрілкою"
      ],
      [
        "Green sign with a yellow panel and red arrow",
        "Зелений знак із жовтою панеллю й червоною стрілкою"
      ],
      [
        "Red sign with a green panel and black arrow",
        "Червоний знак із зеленою панеллю й чорною стрілкою"
      ],
      [
        "Any design used for commercial advertising",
        "Будь-яке рекламне оформлення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (f) requires a white sign with a black panel and white directional symbol, with additional wording black on white. Automotive traffic signs fall under paragraph (g).",
    "explanationUk": "Пункт (f) вимагає білий знак із чорною панеллю й білим напрямним символом, додатковий текст — чорний на білому. Автомобільні знаки охоплює пункт (g)."
  },
  {
    "section": "29 CFR 1926.200(g)",
    "difficulty": "medium",
    "question": "At a traffic hazard in a construction area, what combination is required by 1926.200(g)?",
    "questionUk": "Яке поєднання потрібне за 1926.200(g) у місці дорожньої небезпеки будівельної зони?",
    "answers": [
      [
        "Legible traffic control signs and protective traffic control devices conforming to MUTCD Part 6",
        "Читабельні дорожні знаки та захисні засоби регулювання руху за MUTCD Part 6"
      ],
      [
        "Only a handwritten note inside the site office",
        "Лише рукописна записка в офісі"
      ],
      [
        "Only cones regardless of applicable MUTCD requirements",
        "Лише конуси незалежно від вимог MUTCD"
      ],
      [
        "Only a warning tag on one worker's belt",
        "Лише бирка на поясі одного працівника"
      ],
      [
        "No devices if work lasts less than a day",
        "Без засобів, якщо роботи тривають менше дня"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (g) requires legible traffic-control signs and traffic-control devices at hazard points. Device design and use must conform to MUTCD Part 6.",
    "explanationUk": "Пункт (g) вимагає читабельні дорожні знаки та засоби регулювання руху в місцях небезпеки. Їх проєктування й використання повинні відповідати MUTCD Part 6."
  },
  {
    "section": "29 CFR 1926.200(h)(1)",
    "difficulty": "medium",
    "question": "A defective tool is tagged, and the foreman proposes using that tag instead of a required accident-prevention sign. Is substitution allowed?",
    "questionUk": "Несправний інструмент позначено биркою, і бригадир пропонує замінити нею обов’язковий знак запобігання нещасним випадкам. Чи дозволена заміна?",
    "answers": [
      [
        "No; tags are temporary warnings and cannot substitute for required signs",
        "Ні; бирки є тимчасовими попередженнями й не замінюють потрібних знаків"
      ],
      [
        "Yes; any tag permanently replaces all signs",
        "Так; будь-яка бирка назавжди замінює всі знаки"
      ],
      [
        "Yes; if the tag is smaller than the sign",
        "Так; якщо бирка менша за знак"
      ],
      [
        "Yes; if only experienced workers are present",
        "Так; якщо присутні лише досвідчені працівники"
      ],
      [
        "Yes; once the defect has existed for one shift",
        "Так; після однієї зміни існування дефекту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (h)(1) permits tags as temporary warnings of existing hazards, including defective equipment, but expressly prohibits using them as substitutes for accident-prevention signs.",
    "explanationUk": "Пункт (h)(1) дозволяє бирки як тимчасове попередження про наявну небезпеку, зокрема несправне обладнання, але прямо забороняє замінювати ними знаки."
  },
  {
    "section": "29 CFR 1926.201(a)",
    "difficulty": "medium",
    "question": "Which referenced standard governs construction flagger signaling and use, including flagger warning garments?",
    "questionUk": "Який норматив за посиланням регулює сигнали й використання регулювальників руху на будівництві, включно з попереджувальним одягом?",
    "answers": [
      [
        "Part 6 of the MUTCD",
        "Частина 6 MUTCD"
      ],
      [
        "Only the contractor's vehicle-maintenance manual",
        "Лише інструкція техобслуговування автомобілів підрядника"
      ],
      [
        "Only the residential stair chapter",
        "Лише житловий розділ про сходи"
      ],
      [
        "Only the manufacturer's paint-color chart",
        "Лише палітра фарби виробника"
      ],
      [
        "Only the project accounting policy",
        "Лише облікова політика проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 1926.201(a) sends flagger signaling, flagger use and warning garments to MUTCD Part 6. It does not leave garment and signaling requirements solely to local preference.",
    "explanationUk": "1926.201(a) відсилає сигнали, використання регулювальників і попереджувальний одяг до MUTCD Part 6. Вимоги не залежать лише від місцевого вибору.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-G/section-1926.201"
  }
];
export const intakeVerified124 = verifiedBatch(1473, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926", "osha", "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-G/section-1926.200", seeds, "intake-series-121-126", false, "2026-10-22");
