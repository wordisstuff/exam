import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R703.9.1, Item 1; R703.9.2, Item 1",
    "difficulty": "easy",
    "question": "Which ASTM system standard is required for both EIFS and EIFS with drainage?",
    "questionUk": "Який стандарт ASTM потрібен і звичайній EIFS, і EIFS із дренуванням?",
    "answers": [
      [
        "ASTM E2568",
        "Стандарт ASTM E2568"
      ],
      [
        "ASTM D3679",
        "Стандарт ASTM D3679"
      ],
      [
        "ASTM D7793",
        "Стандарт ASTM D7793"
      ],
      [
        "ASTM C1288",
        "Стандарт ASTM C1288"
      ],
      [
        "ASTM D7254",
        "Стандарт ASTM D7254"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Both EIFS subsections list ASTM E2568; the drainage-efficiency test is a separate reference.",
    "explanationUk": "Обидва підрозділи EIFS указують ASTM E2568; випробування ефективності дренування має окреме посилання."
  },
  {
    "section": "R703.9.1, Item 2; R703.9.2, Item 2",
    "difficulty": "medium",
    "question": "Which substrate is within the code's stated allowance for EIFS without the required drainage-system path?",
    "questionUk": "Яка основа входить до наведеного кодом дозволу EIFS без обов’язкового застосування шляху дренованої системи?",
    "answers": [
      [
        "Concrete or masonry wall assemblies",
        "Бетонні або муровані стінові системи"
      ],
      [
        "Wood structural-panel sheathing merely because it is painted",
        "Конструкційні деревні плити лише через їх фарбування"
      ],
      [
        "Untreated cardboard on studs",
        "Непросочений картон на стояках"
      ],
      [
        "Any gypsum sheathing without regard to the drainage rule",
        "Будь-яка гіпсова обшивка без урахування дренування"
      ],
      [
        "Any combustible substrate without system limitations",
        "Будь-яка горюча основа без обмежень системи"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "EIFS under R703.9.1 is limited to concrete or masonry substrates; R703.9.2 requires EIFS with drainage over other wall assemblies.",
    "explanationUk": "EIFS за R703.9.1 обмежена бетонними й мурованими основами; R703.9.2 вимагає дренованої EIFS для інших стінових систем."
  },
  {
    "section": "R703.9.1, Item 5",
    "difficulty": "medium",
    "question": "What minimum height above finished ground is required for the termination of EIFS governed by R703.9.1?",
    "questionUk": "Яка мінімальна висота завершення EIFS над готовою поверхнею ґрунту потрібна за R703.9.1?",
    "answers": [
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
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
        "4 inches",
        "4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.9.1 requires EIFS to terminate at least 6 inches above finished ground.",
    "explanationUk": "R703.9.1 вимагає завершувати EIFS щонайменше на 6 дюймів над готовим ґрунтом."
  },
  {
    "section": "R703.9.1, Item 6",
    "difficulty": "easy",
    "question": "A trim installer proposes face-nailing decorative trim through EIFS. What does R703.9.1 say?",
    "questionUk": "Монтажник пропонує прибити декоративні деталі цвяхами через лицьову поверхню EIFS. Що встановлює R703.9.1?",
    "answers": [
      [
        "Decorative trim must not be face-nailed through EIFS",
        "Декоративні деталі не прибивають через лицьову поверхню EIFS"
      ],
      [
        "Face-nailing is required at every trim joint",
        "Таке прибивання потрібне на кожному стику"
      ],
      [
        "Any face-nailing is allowed if nail heads are painted",
        "Будь-яке прибивання дозволено після фарбування головок"
      ],
      [
        "Only roofing nails may be face-nailed through EIFS",
        "Через EIFS дозволені лише покрівельні цвяхи"
      ],
      [
        "Face-nailing is mandatory below windows",
        "Таке прибивання обов’язкове під вікнами"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The subsection expressly prohibits face-nailing decorative trim through EIFS.",
    "explanationUk": "Підрозділ прямо забороняє прибивати декоративні деталі через лицьову поверхню EIFS."
  },
  {
    "section": "R703.9.2, Item 3",
    "difficulty": "medium",
    "question": "What average minimum drainage efficiency must EIFS with drainage achieve when tested under ASTM E2273?",
    "questionUk": "Якої середньої мінімальної ефективності дренування має досягти дренована EIFS при випробуванні за ASTM E2273?",
    "answers": [
      [
        "90 percent",
        "90 відсотків"
      ],
      [
        "50 percent",
        "50 відсотків"
      ],
      [
        "60 percent",
        "60 відсотків"
      ],
      [
        "75 percent",
        "75 відсотків"
      ],
      [
        "80 percent",
        "80 відсотків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The required average minimum drainage efficiency is 90 percent under ASTM E2273.",
    "explanationUk": "Потрібна середня мінімальна ефективність дренування — 90 відсотків за ASTM E2273."
  },
  {
    "section": "R703.9.2, Item 5",
    "difficulty": "easy",
    "question": "In EIFS with drainage, where is the water-resistive barrier applied relative to EIFS and wall sheathing?",
    "questionUk": "Де у дренованій EIFS розташовують водозахисний бар’єр відносно EIFS та стінової обшивки?",
    "answers": [
      [
        "Between EIFS and wall sheathing",
        "Між EIFS і стіновою обшивкою"
      ],
      [
        "Outside the finished EIFS surface only",
        "Лише зовні готової поверхні EIFS"
      ],
      [
        "Only beneath the footing",
        "Лише під фундаментною підошвою"
      ],
      [
        "Only over the interior drywall",
        "Лише поверх внутрішнього гіпсокартону"
      ],
      [
        "Above the roof shingles",
        "Над покрівельним ґонтом"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The barrier is applied between the EIFS and wall sheathing; material and flashing requirements also apply.",
    "explanationUk": "Бар’єр розташовують між EIFS та стіновою обшивкою; також діють вимоги до матеріалу й фартухів."
  },
  {
    "section": "R703.13",
    "difficulty": "easy",
    "question": "Which standard must the approved-agency certification and label identify for insulated vinyl siding?",
    "questionUk": "Який стандарт має підтверджувати сертифікація й етикетка схваленої організації для утепленого вінілового сайдингу?",
    "answers": [
      [
        "ASTM D7793",
        "Стандарт ASTM D7793"
      ],
      [
        "ASTM D3679 only",
        "Лише стандарт ASTM D3679"
      ],
      [
        "ASTM D7254",
        "Стандарт ASTM D7254"
      ],
      [
        "ASTM E2273",
        "Стандарт ASTM E2273"
      ],
      [
        "ASTM C150",
        "Стандарт ASTM C150"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Insulated vinyl siding must be certified and labeled to ASTM D7793 by an approved quality-control agency.",
    "explanationUk": "Утеплений вініловий сайдинг сертифікує й маркує схвалена організація контролю якості за ASTM D7793."
  },
  {
    "section": "R703.12.1",
    "difficulty": "exam",
    "question": "On exterior stud walls, which clearance set matches adhered masonry veneer above earth, ordinary paving, and an exterior walking surface supported by the SAME foundation as the wall?",
    "questionUk": "Які відстані для приклеєного кам’яного облицювання каркасних зовнішніх стін відповідають ґрунту, звичайному мощенню та зовнішній пішохідній поверхні на ТОМУ САМОМУ фундаменті, що й стіна?",
    "answers": [
      [
        "4 inches; 2 inches; 1/2 inch",
        "4 дюйми; 2 дюйми; 1/2 дюйма"
      ],
      [
        "2 inches; 1 inch; zero",
        "2 дюйми; 1 дюйм; нуль"
      ],
      [
        "6 inches; 4 inches; 2 inches",
        "6 дюймів; 4 дюйми; 2 дюйми"
      ],
      [
        "1 inch; 1 inch; 1 inch",
        "По 1 дюйму"
      ],
      [
        "4 inches; 4 inches; 4 inches",
        "По 4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The three minima are 4 inches above earth, 2 above paving, or 1/2 above an exterior walking surface supported by the wall's foundation.",
    "explanationUk": "Три мінімуми — 4 дюйми над ґрунтом, 2 над мощенням або 1/2 над зовнішньою пішохідною поверхнею на фундаменті стіни."
  },
  {
    "section": "R703.12.2",
    "difficulty": "exam",
    "question": "For adhered masonry veneer at an exterior stud-wall foundation, what minimum vertical attachment flange and extension below the foundation plate line are specified for the screed or flashing?",
    "questionUk": "Які мінімальні висота кріпильної полиці та виступ нижче лінії фундаментної обв’язки потрібні стартовому профілю чи фартуху приклеєного облицювання зовнішньої каркасної стіни?",
    "answers": [
      [
        "3.5-inch flange and 1-inch extension below the plate line",
        "Полиця 3,5 дюйма та виступ 1 дюйм нижче обв’язки"
      ],
      [
        "1-inch flange and no extension",
        "Полиця 1 дюйм без виступу"
      ],
      [
        "2-inch flange and 1/4-inch extension",
        "Полиця 2 дюйми та виступ 1/4 дюйма"
      ],
      [
        "6-inch flange and no extension",
        "Полиця 6 дюймів без виступу"
      ],
      [
        "1/2-inch flange and 4-inch extension",
        "Полиця 1/2 дюйма та виступ 4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.12.2 requires at least a 3.5-inch vertical flange and extension at least 1 inch below the foundation plate line; the specified corrosion-resistant or plastic material must also comply.",
    "explanationUk": "R703.12.2 вимагає вертикальної полиці не менше 3,5 дюйма та виступу не менше 1 дюйма нижче обв’язки; також застосовні вимоги до корозійностійкого чи пластикового матеріалу."
  },
  {
    "section": "R703.14.1.1",
    "difficulty": "medium",
    "question": "What minimum wood structural-panel sheathing thickness is specified for polypropylene siding's ordinary substrate option?",
    "questionUk": "Яка мінімальна товщина конструкційної деревної обшивки передбачена для звичайного варіанта основи поліпропіленового сайдингу?",
    "answers": [
      [
        "7/16 inch",
        "7/16 дюйма"
      ],
      [
        "1/8 inch",
        "1/8 дюйма"
      ],
      [
        "1/4 inch",
        "1/4 дюйма"
      ],
      [
        "3/8 inch",
        "3/8 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The ordinary option is structural-panel sheathing at least 7/16 inch thick. An alternative wood or wood-based substrate/fastener arrangement must provide equivalent withdrawal resistance.",
    "explanationUk": "Звичайний варіант — конструкційна плитна обшивка не тонша за 7/16 дюйма. Альтернатива з деревини чи деревного матеріалу та кріпленням має давати рівноцінний опір висмикуванню."
  },
  {
    "section": "R703.14.1.2",
    "difficulty": "medium",
    "question": "Under the prescriptive polypropylene-siding fastener provision, may staples be used?",
    "questionUk": "Чи дозволені скоби за нормативним положенням про кріплення поліпропіленового сайдингу?",
    "answers": [
      [
        "No; staples are not permitted",
        "Ні; скоби не дозволені"
      ],
      [
        "Yes, any staple size is allowed",
        "Так, будь-якого розміру"
      ],
      [
        "Yes, if the siding is painted",
        "Так, після фарбування"
      ],
      [
        "Yes, on the north wall only",
        "Так, лише на північній стіні"
      ],
      [
        "Yes, if no nails are available",
        "Так, якщо немає цвяхів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.14.1.2 expressly states that staples are not permitted.",
    "explanationUk": "R703.14.1.2 прямо встановлює, що скоби не дозволені."
  },
  {
    "section": "R703.14.1.2",
    "difficulty": "medium",
    "question": "Unless approved manufacturer instructions specify otherwise, which minimum nail shank and head diameters apply to polypropylene siding?",
    "questionUk": "Які мінімальні діаметри стрижня та головки цвяха потрібні поліпропіленовому сайдингу, якщо схвалена інструкція виробника не передбачає іншого?",
    "answers": [
      [
        "0.120-inch shank and 0.313-inch head",
        "Стрижень 0,120 дюйма та головка 0,313 дюйма"
      ],
      [
        "0.080-inch shank and 0.200-inch head",
        "Стрижень 0,080 дюйма та головка 0,200 дюйма"
      ],
      [
        "0.099-inch shank and 0.250-inch head",
        "Стрижень 0,099 дюйма та головка 0,250 дюйма"
      ],
      [
        "0.120-inch shank and 0.120-inch head",
        "Стрижень і головка по 0,120 дюйма"
      ],
      [
        "No minimum diameters",
        "Мінімальних діаметрів немає"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The default corrosion-resistant nail has at least a 0.120-inch shank and 0.313-inch head. Length, penetration and approved-instruction provisions must also be checked.",
    "explanationUk": "Стандартний корозійностійкий цвях має стрижень не менше 0,120 та головку 0,313 дюйма. Також перевіряють довжину, проникнення й схвалену інструкцію."
  }
];
export const intakeVerified112 = verifiedBatch(1329, "Exterior Finishes", "Exterior", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-109-114", true, "2026-10-22");

