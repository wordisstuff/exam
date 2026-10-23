import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.304(b)",
    "difficulty": "exam",
    "question": "Which TWO circular-saw examples trigger the permanent operating-speed marking requirement? Speeds shown are peripheral feet per minute, not rpm.",
    "questionUk": "Які ДВА приклади круглих пил запускають вимогу постійного позначення робочої швидкості? Швидкості наведено у футах за хвилину по периферії, а не в обертах.",
    "answers": [
      [
        "21-inch diameter at 9,000 peripheral ft/min",
        "Діаметр 21 дюйм за периферійної швидкості 9 000 футів/хв"
      ],
      [
        "18-inch diameter at 11,000 peripheral ft/min",
        "Діаметр 18 дюймів за периферійної швидкості 11 000 футів/хв"
      ],
      [
        "20-inch diameter at 10,000 peripheral ft/min",
        "Діаметр 20 дюймів за периферійної швидкості 10 000 футів/хв"
      ],
      [
        "18-inch diameter at 9,000 peripheral ft/min",
        "Діаметр 18 дюймів за периферійної швидкості 9 000 футів/хв"
      ],
      [
        "20-inch diameter at 9,500 peripheral ft/min",
        "Діаметр 20 дюймів за периферійної швидкості 9 500 футів/хв"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Marking is required when diameter is over 20 inches OR peripheral speed is over 10,000 feet per minute. Exactly 20 inches and 10,000 does not exceed either threshold.",
    "explanationUk": "Позначення потрібне за діаметра понад 20 дюймів АБО периферійної швидкості понад 10 000 футів/хв. Рівно 20 і 10 000 не перевищують меж."
  },
  {
    "section": "29 CFR 1926.304(b)",
    "difficulty": "medium",
    "question": "A marked circular-saw blade is retensioned for a different operating speed. What must happen to its speed marking?",
    "questionUk": "Диск круглої пили з позначенням швидкості перенатягнули для іншої робочої швидкості. Що потрібно зробити з позначенням?",
    "answers": [
      [
        "Correct it to show the new operating speed",
        "Виправити на нову робочу швидкість"
      ],
      [
        "Leave the old marking unchanged",
        "Залишити старе позначення"
      ],
      [
        "Erase all speed information permanently",
        "Назавжди стерти всі дані швидкості"
      ],
      [
        "Use any speed between the old and new values",
        "Працювати за будь-якої швидкості між старою й новою"
      ],
      [
        "Replace the marking with the purchase date only",
        "Замінити позначення лише датою купівлі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The marking must be corrected after retensioning for a different speed; a marked saw may not operate at a speed other than its marking.",
    "explanationUk": "Після перенатягування для іншої швидкості позначення виправляють; пила з позначенням не працює за іншої, ніж указана, швидкості."
  },
  {
    "section": "29 CFR 1926.304(d)",
    "difficulty": "medium",
    "question": "For a portable power-driven circular saw, what upper-guard opening is allowed for bevel adjustment?",
    "questionUk": "Який отвір у верхньому захисті переносної електричної круглої пили дозволено для регулювання косого різу?",
    "answers": [
      [
        "Only the minimum arc needed to let the base tilt for bevel cuts",
        "Лише мінімальна дуга, потрібна для нахилу основи при косому різі"
      ],
      [
        "The entire upper half of the blade may be exposed",
        "Можна відкрити всю верхню половину диска"
      ],
      [
        "Any opening selected by the operator",
        "Будь-який отвір за вибором оператора"
      ],
      [
        "No upper guard is needed during bevel cutting",
        "Під час косого різу верхній захист не потрібен"
      ],
      [
        "A permanently open 180-degree arc",
        "Постійно відкрита дуга 180 градусів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The upper guard covers the saw to the tooth depth except for the minimum arc necessary to permit the base to tilt for bevel cuts.",
    "explanationUk": "Верхній захист закриває диск до глибини зубців, крім мінімальної дуги для нахилу основи при косому різі."
  },
  {
    "section": "29 CFR 1926.304(g)(1)",
    "difficulty": "medium",
    "question": "How far must the radial saw's upper hood enclose the upper portion of its blade?",
    "questionUk": "Наскільки верхній кожух радіально-консольної пили має закривати верхню частину диска?",
    "answers": [
      [
        "Down to a point that includes the end of the saw arbor",
        "До точки, що охоплює кінець пильного вала"
      ],
      [
        "Only to the topmost tooth",
        "Лише до найвищого зубця"
      ],
      [
        "Only above the center of the motor",
        "Лише над центром двигуна"
      ],
      [
        "Only over the rear quarter of the blade",
        "Лише над задньою чвертю диска"
      ],
      [
        "No hood is required if sawdust is collected",
        "Кожух не потрібен за відсмоктування тирси"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The upper hood fully encloses the upper blade portion down to include the arbor end and protects against splinters and broken teeth while deflecting sawdust.",
    "explanationUk": "Верхній кожух повністю закриває верхню частину диска включно з кінцем вала, захищає від скалок і уламків зубців та відводить тирсу."
  },
  {
    "section": "29 CFR 1926.304(g)(1)",
    "difficulty": "medium",
    "question": "Which lower-blade guarding action is required for a radial saw?",
    "questionUk": "Яка робота нижнього захисту диска потрібна радіально-консольній пилі?",
    "answers": [
      [
        "Guard the exposed sides to the full blade diameter and automatically adjust to and remain in contact with stock",
        "Закривати відкриті боки на весь діаметр, автоматично пристосовуючись до товщини та торкаючись заготовки"
      ],
      [
        "Lock the guard permanently above every workpiece",
        "Назавжди зафіксувати захист над усіма заготовками"
      ],
      [
        "Guard only the arbor while leaving both blade sides open",
        "Захистити лише вал, залишивши обидва боки диска відкритими"
      ],
      [
        "Remove the guard whenever stock thickness changes",
        "Знімати захист при зміні товщини"
      ],
      [
        "Use a fixed cardboard screen beside the operator",
        "Використати нерухомий картонний екран біля оператора"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The radial-saw rule requires full-diameter side guarding of the lower exposed blade with automatic stock-thickness adjustment and continued contact.",
    "explanationUk": "Правило вимагає бокового захисту нижньої відкритої частини на весь діаметр із автоматичним пристосуванням до товщини та постійним контактом із заготовкою."
  },
  {
    "section": "29 CFR 1926.304(h)(1)",
    "difficulty": "easy",
    "question": "Which hood requirements are expressly applied to a hand-fed circular crosscut table saw?",
    "questionUk": "Які вимоги до кожуха прямо поширено на круглопильний стіл поперечного різання з ручним подаванням?",
    "answers": [
      [
        "The circular-ripsaw hood requirements of paragraph (i)(1)",
        "Вимоги пункту (i)(1) до кожуха круглої поздовжньої пили"
      ],
      [
        "Only the portable-lamp requirements",
        "Лише вимоги до переносних ламп"
      ],
      [
        "Only the air-receiver pressure rule",
        "Лише правило тиску повітрозбірника"
      ],
      [
        "No hood requirements if cuts are short",
        "Без вимог до кожуха за коротких різів"
      ],
      [
        "Only a warning label on the fence",
        "Лише попередження на напрямній"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (h)(1) requires the crosscut-table-saw hood to meet all paragraph (i)(1) circular-ripsaw hood requirements.",
    "explanationUk": "Пункт (h)(1) вимагає, щоб кожух поперечної настільної пили відповідав усім вимогам (i)(1) до поздовжньої круглої пили."
  },
  {
    "section": "29 CFR 1926.305(a)(1)",
    "difficulty": "medium",
    "question": "Which statement describes OSHA's jack-capacity requirement?",
    "questionUk": "Яке твердження описує вимогу OSHA до вантажопідйомності домкрата?",
    "answers": [
      [
        "Manufacturer-rated capacity must be legibly marked and must not be exceeded",
        "Паспортна вантажопідйомність виробника має бути читабельно позначена й не перевищуватися"
      ],
      [
        "Capacity may be estimated from the jack's color",
        "Вантажопідйомність визначають за кольором"
      ],
      [
        "Rated capacity may be exceeded for less than one minute",
        "Паспортну межу можна перевищити до однієї хвилини"
      ],
      [
        "Only the shipping carton needs a capacity label",
        "Позначення потрібне лише на коробці"
      ],
      [
        "Capacity matters only for hydraulic jacks",
        "Межа стосується лише гідравлічних домкратів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "All jacks must carry a legible manufacturer's rated capacity, and that capacity must not be exceeded.",
    "explanationUk": "На всіх домкратах читабельно позначають паспортну вантажопідйомність виробника та не перевищують її.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.305"
  },
  {
    "section": "29 CFR 1926.305(a)(2)",
    "difficulty": "easy",
    "question": "What device must all jacks have to prevent overtravel?",
    "questionUk": "Який пристрій потрібен усім домкратам для запобігання надмірному ходу?",
    "answers": [
      [
        "A positive stop",
        "Механічний обмежувач ходу"
      ],
      [
        "Only a painted line",
        "Лише намальована риска"
      ],
      [
        "Only a loose warning tag",
        "Лише вільна попереджувальна бирка"
      ],
      [
        "An operator's handwritten estimate",
        "Рукописна оцінка оператора"
      ],
      [
        "A removable rag tied to the handle",
        "Ганчірка на руків’ї"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Every jack must have a positive stop preventing overtravel.",
    "explanationUk": "Кожен домкрат має обмежувач, що запобігає надмірному ходу.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.305"
  },
  {
    "section": "29 CFR 1926.305(c)",
    "difficulty": "medium",
    "question": "A jack's metal cap could slip against the load. What must be placed between the cap and load?",
    "questionUk": "Металева головка домкрата може ковзати по вантажу. Що потрібно помістити між головкою та вантажем?",
    "answers": [
      [
        "A wood block",
        "Дерев’яний блок"
      ],
      [
        "A sheet of lubricated plastic",
        "Лист змащеного пластику"
      ],
      [
        "Loose gravel",
        "Сипкий гравій"
      ],
      [
        "A wet cloth only",
        "Лише мокру тканину"
      ],
      [
        "Nothing if the operator watches closely",
        "Нічого за уважного нагляду"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where metal-cap slippage is possible, a wood block is required between the cap and load. The base must also be blocked or cribbed where needed for a firm foundation.",
    "explanationUk": "За ризику ковзання металевої головки між нею й вантажем потрібен дерев’яний блок. Під основу також ставлять блоки чи кліть за потреби міцного опирання.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.305"
  },
  {
    "section": "29 CFR 1926.305(d)(1)(i)",
    "difficulty": "medium",
    "question": "A jack has raised a building member to the required height. What must happen immediately?",
    "questionUk": "Домкрат підняв елемент будівлі на потрібну висоту. Що потрібно зробити негайно?",
    "answers": [
      [
        "Crib, block or otherwise secure the load",
        "Підперти вантаж кліттю, блоками або іншим способом закріпити"
      ],
      [
        "Leave the load supported only by the jack until the next shift",
        "Залишити лише на домкраті до наступної зміни"
      ],
      [
        "Remove the jack's positive stop",
        "Зняти обмежувач ходу"
      ],
      [
        "Increase the load above rated capacity",
        "Збільшити вантаж понад паспортну межу"
      ],
      [
        "Wait until workers finish beneath the load",
        "Чекати завершення робіт під вантажем"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "After raising, the load must be cribbed, blocked or otherwise secured at once.",
    "explanationUk": "Після підняття вантаж негайно підпирають кліттю, блоками або іншим способом надійно закріплюють.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.305"
  },
  {
    "section": "29 CFR 1926.305(d)(1)(iv)(a)",
    "difficulty": "medium",
    "question": "A jack is used constantly or intermittently at one locality without an abnormal-load event. What is the least frequent regular inspection interval allowed by the cited provision?",
    "questionUk": "Домкрат постійно або періодично використовують в одному місці без випадку надмірного навантаження. Який найдовший інтервал регулярної перевірки дозволяє зазначений пункт?",
    "answers": [
      [
        "Once every 6 months",
        "Один раз на 6 місяців"
      ],
      [
        "Once every 12 months",
        "Один раз на 12 місяців"
      ],
      [
        "Once every 2 years",
        "Один раз на 2 роки"
      ],
      [
        "Only at initial purchase",
        "Лише після купівлі"
      ],
      [
        "Only after a visible fracture",
        "Лише після видимого руйнування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For use at one locality, thorough inspections may be no less frequent than every 6 months; service conditions and other specified events may require more frequent checks.",
    "explanationUk": "Для використання в одному місці ретельний огляд проводять не рідше ніж раз на 6 місяців; умови експлуатації та окремі події можуть вимагати частіших перевірок.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.305"
  },
  {
    "section": "29 CFR 1926.305(d)(1)(iv)(c)",
    "difficulty": "exam",
    "question": "Which TWO inspection times does OSHA specify for a jack subjected to abnormal load or shock?",
    "questionUk": "Які ДВА моменти перевірки OSHA встановлює для домкрата, що зазнає ненормального навантаження або удару?",
    "answers": [
      [
        "Immediately before the abnormal load or shock",
        "Безпосередньо перед таким навантаженням або ударом"
      ],
      [
        "Immediately after the abnormal load or shock",
        "Безпосередньо після такого навантаження або удару"
      ],
      [
        "Only at the next 6-month inspection",
        "Лише під час наступного піврічного огляду"
      ],
      [
        "Only when returned to the manufacturer",
        "Лише після повернення виробнику"
      ],
      [
        "Only after repainting the jack",
        "Лише після перефарбування"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The specific inspection rule says immediately before and immediately thereafter; the regular six-month interval does not replace these event-based inspections.",
    "explanationUk": "Спеціальне правило вимагає огляду безпосередньо перед подією й одразу після неї; звичайний піврічний інтервал їх не замінює.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.305"
  }
];
export const intakeVerified107 = verifiedBatch(1269, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926.304 and 1926.305", "osha", "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.304", seeds, "intake-series-103-108", false, "2026-10-22");

