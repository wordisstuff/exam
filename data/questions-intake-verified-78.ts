import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.250(a)(2)(i)–(ii)",
    "difficulty": "exam",
    "question": "Materials are stored on an upper floor of a single-family residential construction project. Which statement correctly applies the posting exception?",
    "questionUk": "Матеріали зберігають на верхньому перекритті односімейного житлового будинку, що будується. Яке твердження правильно застосовує виняток щодо табличок навантаження?",
    "answers": [
      [
        "Posting is not required, but stored weight still must not exceed the floor's maximum safe load",
        "Табличка не потрібна, але вага не може перевищувати найбільше безпечне навантаження перекриття"
      ],
      [
        "No posting means stored weight is unlimited",
        "Без таблички вага не обмежена"
      ],
      [
        "Posting is required on every single-family floor without exception",
        "Табличка потрібна на кожному перекритті односімейного будинку без винятків"
      ],
      [
        "The exception applies only to detached garages",
        "Виняток діє лише для окремих гаражів"
      ],
      [
        "Only the material delivery receipt controls allowable load",
        "Допустиме навантаження визначає лише накладна доставки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Single-family storage areas are exempt from posting, not from the separate safe-load limit.",
    "explanationUk": "Зони зберігання в односімейних будинках звільнені від табличок, але не від окремої межі безпечного навантаження."
  },
  {
    "section": "29 CFR 1926.250(b)(1)",
    "difficulty": "medium",
    "question": "Inside a building under construction, what minimum distance separates stored materials from a hoistway or inside floor opening?",
    "questionUk": "Яка мінімальна відстань між складованими матеріалами та шахтою підйомника чи внутрішнім отвором перекриття в будівлі, що будується?",
    "answers": [
      [
        "6 feet",
        "6 футів"
      ],
      [
        "2 feet",
        "2 фути"
      ],
      [
        "3 feet",
        "3 фути"
      ],
      [
        "4 feet",
        "4 фути"
      ],
      [
        "5 feet",
        "5 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Materials cannot be stored within 6 feet of hoistways or inside floor openings.",
    "explanationUk": "Матеріали не можна зберігати ближче ніж 6 футів до шахт підйомників або внутрішніх отворів перекриття."
  },
  {
    "section": "29 CFR 1926.250(b)(1)",
    "difficulty": "exam",
    "question": "Stored materials inside a building under construction rise higher than an exterior wall. What minimum distance from that wall applies?",
    "questionUk": "Складовані всередині будівлі, що будується, матеріали вищі за зовнішню стіну. Яка мінімальна відстань від цієї стіни?",
    "answers": [
      [
        "10 feet",
        "10 футів"
      ],
      [
        "4 feet",
        "4 фути"
      ],
      [
        "6 feet",
        "6 футів"
      ],
      [
        "8 feet",
        "8 футів"
      ],
      [
        "9 feet",
        "9 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 10-foot restriction applies where the exterior wall does not extend above the stored material's top.",
    "explanationUk": "Обмеження 10 футів діє, коли зовнішня стіна не піднімається вище верху складованих матеріалів."
  },
  {
    "section": "29 CFR 1926.250(b)(6)",
    "difficulty": "easy",
    "question": "What is OSHA's maximum brick-stack height?",
    "questionUk": "Яка найбільша висота штабеля цегли за OSHA?",
    "answers": [
      [
        "7 feet",
        "7 футів"
      ],
      [
        "4 feet",
        "4 фути"
      ],
      [
        "6 feet",
        "6 футів"
      ],
      [
        "8 feet",
        "8 футів"
      ],
      [
        "10 feet",
        "10 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Brick stacks may be no more than 7 feet high; loose stacks also need the taper that begins at 4 feet.",
    "explanationUk": "Штабелі цегли мають бути не вищими за 7 футів; для незв’язаної цегли потрібне звуження, яке починається з 4 футів."
  },
  {
    "section": "29 CFR 1926.250(b)(6)",
    "difficulty": "exam",
    "question": "A loose brick stack reaches 6 feet high. What cumulative taper-back amount follows the rule above its 4-foot level?",
    "questionUk": "Штабель незв’язаної цегли сягає 6 футів. Яке сумарне відступання для звуження потрібне вище позначки 4 фути?",
    "answers": [
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Above 4 feet, taper back 2 inches per additional foot: (6−4)×2=4 inches.",
    "explanationUk": "Вище 4 футів відступають на 2 дюйми на кожен додатковий фут: (6−4)×2=4 дюйми."
  },
  {
    "section": "29 CFR 1926.250(b)(8)(iv)",
    "difficulty": "medium",
    "question": "Lumber in a pile will be handled manually. Which maximum stack height applies instead of the general 20-foot limit?",
    "questionUk": "Пиломатеріал зі штабеля переміщатимуть вручну. Яка найбільша висота діє замість загальної межі 20 футів?",
    "answers": [
      [
        "16 feet",
        "16 футів"
      ],
      [
        "8 feet",
        "8 футів"
      ],
      [
        "10 feet",
        "10 футів"
      ],
      [
        "12 feet",
        "12 футів"
      ],
      [
        "18 feet",
        "18 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The general lumber-pile limit is 20 feet, but lumber handled manually must not be stacked above 16 feet.",
    "explanationUk": "Загальна межа штабеля деревини — 20 футів, але для ручного переміщення штабель не може перевищувати 16 футів."
  },
  {
    "section": "29 CFR 1926.251(a)(1)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.251",
    "difficulty": "medium",
    "question": "Rigging was inspected yesterday and appears unchanged. What inspection timing is required before today's shift use?",
    "questionUk": "Такелаж оглянули вчора, видимих змін немає. Коли потрібний огляд перед використанням у сьогоднішню зміну?",
    "answers": [
      [
        "Before use on each shift, and as necessary during use",
        "Перед використанням у кожну зміну та за потреби під час роботи"
      ],
      [
        "Only once per calendar week",
        "Лише раз на календарний тиждень"
      ],
      [
        "Only after a load falls",
        "Лише після падіння вантажу"
      ],
      [
        "Only before first use after purchase",
        "Лише перед першим використанням після купівлі"
      ],
      [
        "Only at the annual chain-sling inspection",
        "Лише під час щорічного огляду ланцюгових стропів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Rigging is inspected before use each shift and as necessary during use; defective equipment is removed from service.",
    "explanationUk": "Такелаж оглядають перед використанням кожної зміни та за потреби під час роботи; несправне обладнання вилучають з експлуатації."
  },
  {
    "section": "29 CFR 1926.251(a)(2)(i)–(iii)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.251",
    "difficulty": "exam",
    "question": "A rigging item's safe-working-load identification is missing or illegible. The crew remembers its former rating. May it be used on that basis?",
    "questionUk": "Маркування безпечного робочого навантаження такелажу відсутнє або нерозбірливе. Бригада пам’ятає колишній номінал. Чи можна використовувати його на цій підставі?",
    "answers": [
      [
        "No; affixed legible identification is required",
        "Ні; потрібне закріплене читабельне маркування"
      ],
      [
        "Yes; memory replaces the marking",
        "Так; пам’ять замінює маркування"
      ],
      [
        "Yes; any load below half the remembered rating is allowed",
        "Так; дозволене навантаження нижче половини згаданого номіналу"
      ],
      [
        "Yes; paint color alone establishes capacity",
        "Так; колір фарби визначає вантажність"
      ],
      [
        "Yes; inspection removes the marking requirement",
        "Так; огляд скасовує вимогу маркування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Required markings must be permanently affixed and legible; rigging may not be used without them.",
    "explanationUk": "Обов’язкове маркування має бути постійно закріпленим і читабельним; без нього такелаж не використовують."
  },
  {
    "section": "29 CFR 1926.251(a)(4)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.251",
    "difficulty": "exam",
    "question": "A custom-designed lifting clamp for prefabricated panels has a rated load of 1,200 pounds. At what load must it be proof-tested before use?",
    "questionUk": "Спеціально спроєктований захват збірних панелей має номінальне навантаження 1 200 фунтів. Яке пробне навантаження потрібне до використання?",
    "answers": [
      [
        "1,500 pounds",
        "1 500 фунтів"
      ],
      [
        "1,200 pounds",
        "1 200 фунтів"
      ],
      [
        "1,320 pounds",
        "1 320 фунтів"
      ],
      [
        "1,800 pounds",
        "1 800 фунтів"
      ],
      [
        "2,400 pounds",
        "2 400 фунтів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Custom lifting accessories in this provision require proof testing at 125% of rated load: 1,200×1.25=1,500. Testing does not increase the working rating.",
    "explanationUk": "Спеціальні підйомні пристрої за цим положенням випробовують на 125% номіналу: 1 200×1,25=1 500. Випробування не збільшує робочий номінал."
  },
  {
    "section": "29 CFR 1926.251(b)(2)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.251",
    "difficulty": "medium",
    "question": "An alloy steel chain sling has a 4,000-pound rated chain capacity. What minimum rated capacity must its hook or coupling attachment have?",
    "questionUk": "Ланцюговий строп із легованої сталі має номінальну вантажність ланцюга 4 000 фунтів. Яка мінімальна номінальна вантажність потрібна його гаку чи з’єднанню?",
    "answers": [
      [
        "At least 4,000 pounds",
        "Щонайменше 4 000 фунтів"
      ],
      [
        "At least 2,000 pounds",
        "Щонайменше 2 000 фунтів"
      ],
      [
        "At least 3,000 pounds",
        "Щонайменше 3 000 фунтів"
      ],
      [
        "At least 3,200 pounds",
        "Щонайменше 3 200 фунтів"
      ],
      [
        "No rating if the hook fits the chain",
        "Без номіналу, якщо гак підходить до ланцюга"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Attachments used with alloy chains must have rated capacity at least equal to the chain.",
    "explanationUk": "Кріпильні деталі ланцюгів із легованої сталі мають мати номінальну вантажність не менше вантажності ланцюга."
  },
  {
    "section": "29 CFR 1926.251(b)(6)(i)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.251",
    "difficulty": "exam",
    "question": "Service conditions determine the periodic thorough inspection schedule for an alloy steel chain sling. What interval may never be exceeded?",
    "questionUk": "Умови роботи визначають графік періодичного ретельного огляду ланцюгового стропа з легованої сталі. Який інтервал не можна перевищувати?",
    "answers": [
      [
        "12 months",
        "12 місяців"
      ],
      [
        "18 months",
        "18 місяців"
      ],
      [
        "24 months",
        "24 місяці"
      ],
      [
        "36 months",
        "36 місяців"
      ],
      [
        "60 months",
        "60 місяців"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Thorough periodic inspections cannot be more than 12 months apart; conditions may require shorter intervals and routine pre-use inspections still apply.",
    "explanationUk": "Інтервал ретельних періодичних оглядів не може перевищувати 12 місяців; умови можуть вимагати коротшого інтервалу, а звичайні передробочі огляди залишаються обов’язковими."
  },
  {
    "section": "29 CFR 1926.251(e)(8)(i), (iii), (iv)",
    "sourceUrl": "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.251",
    "difficulty": "medium",
    "question": "Which THREE conditions require immediate removal of a synthetic web sling from service? Select THREE.",
    "questionUk": "Які ТРИ стани потребують негайного вилучення синтетичного стрічкового стропа з експлуатації? Оберіть ТРИ.",
    "answers": [
      [
        "Acid or caustic burns",
        "Опіки кислотою або лугом"
      ],
      [
        "Tears or cuts",
        "Розриви або порізи"
      ],
      [
        "Broken or worn stitches",
        "Розірвані або зношені шви"
      ],
      [
        "A legible manufacturer identification",
        "Читабельне маркування виробника"
      ],
      [
        "An undamaged fitting with no sharp edges",
        "Непошкоджена деталь без гострих країв"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "All three listed damage conditions require immediate removal. The complete rule also includes melting/charring, snags/punctures and distorted fittings.",
    "explanationUk": "Усі три зазначені пошкодження потребують негайного вилучення. Повне правило також охоплює плавлення чи обвуглення, зачепи й проколи та деформовані деталі."
  }
];
export const intakeVerified78 = verifiedBatch(921, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR Part 1926", "osha", "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.250", seeds, "intake-series-73-78", false);

