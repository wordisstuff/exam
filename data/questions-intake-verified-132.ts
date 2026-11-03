import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.302(b)(2)",
    "question": "What prevents attachments from being accidentally expelled from pneumatic impact tools?",
    "questionUk": "Що запобігає випадковому вильоту насадок із пневматичного ударного інструмента?",
    "answers": [
      [
        "Securely installed and maintained safety clips or retainers",
        "Надійно встановлені й справні запобіжні фіксатори чи утримувачі"
      ],
      [
        "Only extra hose length",
        "Лише довший шланг"
      ],
      [
        "Only reducing the handle size",
        "Лише менше руків’я"
      ],
      [
        "Only an operator's verbal promise",
        "Лише усна обіцянка оператора"
      ],
      [
        "Only painting the attachment",
        "Лише фарбування насадки"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Pneumatic percussion tools require maintained safety clips or retainers to prevent attachment expulsion.",
    "explanationUk": "Пневматичні ударні інструменти потребують справних фіксаторів чи утримувачів проти вильоту насадок."
  },
  {
    "section": "29 CFR 1926.302(b)(5)",
    "question": "A pneumatic hose is rated for 150 psi, but a crew proposes 175 psi. What rule controls?",
    "questionUk": "Пневматичний шланг розрахований на 150 psi, але бригада пропонує 175 psi. Яке правило визначальне?",
    "answers": [
      [
        "Do not exceed the manufacturer's safe operating pressure",
        "Не перевищувати безпечний робочий тиск виробника"
      ],
      [
        "Use any pressure below the compressor maximum",
        "Будь-який тиск нижче максимуму компресора"
      ],
      [
        "Allow 25 psi above every hose rating",
        "Дозволити перевищення кожного номіналу на 25 psi"
      ],
      [
        "Use the pressure of the largest nearby tool",
        "Взяти тиск найбільшого інструмента поруч"
      ],
      [
        "Ignore ratings for short-duration work",
        "Ігнорувати номінал для коротких робіт"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The manufacturer's safe operating pressure limits hoses, pipes, valves, filters and other fittings.",
    "explanationUk": "Безпечний робочий тиск виробника обмежує шланги, труби, клапани, фільтри та інші фітинги."
  },
  {
    "section": "29 CFR 1926.302(b)(7)",
    "question": "A pneumatic tool hose has a 3/4-inch inside diameter. What hose-failure protection is required at the supply or branch line?",
    "questionUk": "Внутрішній діаметр пневматичного шланга — 3/4 дюйма. Який захист від розриву потрібен біля подачі чи відгалуження?",
    "answers": [
      [
        "A safety device to reduce pressure if the hose fails",
        "Запобіжний пристрій зменшення тиску при пошкодженні шланга"
      ],
      [
        "Only a larger paint marking",
        "Лише більша фарбована позначка"
      ],
      [
        "Only a check of outside color",
        "Лише перевірка зовнішнього кольору"
      ],
      [
        "No protection above 1/2 inch",
        "Без захисту понад 1/2 дюйма"
      ],
      [
        "Only a device at the tool that cannot affect supply pressure",
        "Лише пристрій на інструменті без впливу на подачу"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Hoses exceeding 1/2-inch inside diameter require the pressure-reducing failure safety device at the supply or branch line.",
    "explanationUk": "Шланги з внутрішнім діаметром понад 1/2 дюйма потребують пристрою зниження тиску при пошкодженні біля подачі чи відгалуження."
  },
  {
    "section": "29 CFR 1926.302(b)(8)",
    "question": "An airless spray gun atomizes paint at 1,200 psi. Under paragraph (b)(8), what must its safety device prevent until manually released?",
    "questionUk": "Безповітряний пістолет розпилює фарбу при 1 200 psi. Що має блокувати запобіжний пристрій за (b)(8) до ручного розблокування?",
    "answers": [
      [
        "Pulling the trigger and releasing paint or fluid",
        "Натискання курка та випуск фарби чи рідини"
      ],
      [
        "Only changing the paint color",
        "Лише зміну кольору фарби"
      ],
      [
        "Only coiling the hose",
        "Лише змотування шланга"
      ],
      [
        "Only opening the storage cabinet",
        "Лише відкривання шафи"
      ],
      [
        "Only reading the pressure gauge",
        "Лише читання манометра"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The stated trigger-prevention rule covers high-pressure airless guns at 1,000 psi or more. Paragraph (b)(9) separately permits specified equivalent protection.",
    "explanationUk": "Правило блокування курка охоплює безповітряні пістолети від 1 000 psi. Пункт (b)(9) окремо дозволяє зазначений рівноцінний захист."
  },
  {
    "section": "29 CFR 1926.302(b)(10)",
    "question": "What operating control must an abrasive blast-cleaning nozzle have?",
    "questionUk": "Який робочий орган керування потрібен соплу абразивного очищення?",
    "answers": [
      [
        "A valve that must be held open manually",
        "Клапан, який потрібно вручну утримувати відкритим"
      ],
      [
        "A valve permanently wired open",
        "Клапан, назавжди зафіксований відкритим"
      ],
      [
        "Only a remote timer with no manual hold",
        "Лише дистанційний таймер без ручного утримання"
      ],
      [
        "Only an unrestricted open hose",
        "Лише відкритий шланг без обмеження"
      ],
      [
        "Only a decorative cap",
        "Лише декоративна кришка"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The nozzle requires a manually held-open operating valve and a support for mounting it when not in use.",
    "explanationUk": "Сопло потребує клапана з ручним утриманням у відкритому стані та опори для розміщення між використаннями."
  },
  {
    "section": "29 CFR 1926.302(c)(1)",
    "question": "A fuel-powered hand tool needs refueling. What operating condition is required during refueling?",
    "questionUk": "Ручний інструмент із паливним двигуном потрібно заправити. Який його стан потрібен під час заправлення?",
    "answers": [
      [
        "Stopped",
        "Зупинений"
      ],
      [
        "Running at idle",
        "Працює на холостому ходу"
      ],
      [
        "Running at full throttle",
        "Працює на повних обертах"
      ],
      [
        "Running with the cutting guard removed",
        "Працює без захисного кожуха"
      ],
      [
        "Running if the tank is nearly empty",
        "Працює, якщо бак майже порожній"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Fuel-powered tools must be stopped for refueling, servicing or maintenance.",
    "explanationUk": "Інструмент із паливним двигуном зупиняють для заправлення, обслуговування чи ремонту."
  },
  {
    "section": "29 CFR 1926.302(d)(1)",
    "question": "Which combination is required of hydraulic-tool fluid under the specified rule?",
    "questionUk": "Яке поєднання властивостей вимагає задане правило від рідини гідравлічного інструмента?",
    "answers": [
      [
        "Approved fire-resistant fluid retaining operating characteristics at the expected extreme temperatures",
        "Схвалена вогнестійка рідина зі збереженням робочих властивостей за очікуваних крайніх температур"
      ],
      [
        "Any flammable solvent regardless of temperature",
        "Будь-який легкозаймистий розчинник незалежно від температури"
      ],
      [
        "Only the cheapest available liquid",
        "Лише найдешевша рідина"
      ],
      [
        "Any fluid that matches the paint color",
        "Будь-яка рідина кольору фарби"
      ],
      [
        "Water alone regardless of tool requirements",
        "Лише вода незалежно від вимог інструмента"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (d)(1) specifies fire-resistant fluid approved under the referenced Schedule 30 and adequate extreme-temperature performance.",
    "explanationUk": "Пункт (d)(1) задає вогнестійку рідину, схвалену за згаданим Schedule 30, та збереження властивостей за крайніх температур."
  },
  {
    "section": "29 CFR 1926.302(e)(3)",
    "question": "A powder-actuated tool develops a defect during use. What is required?",
    "questionUk": "У порохового монтажного інструмента під час роботи з’являється дефект. Що потрібно?",
    "answers": [
      [
        "Immediately remove it from service until properly repaired",
        "Негайно вилучити з експлуатації до належного ремонту"
      ],
      [
        "Finish the shift before reporting it",
        "Завершити зміну перед повідомленням"
      ],
      [
        "Use a stronger charge to compensate",
        "Компенсувати сильнішим зарядом"
      ],
      [
        "Keep using it if no fastener has missed yet",
        "Продовжити, якщо ще не було промаху"
      ],
      [
        "Only place tape over the defect",
        "Лише заклеїти дефект стрічкою"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "A defective powder-actuated tool must be removed immediately and not used until properly repaired.",
    "explanationUk": "Несправний пороховий інструмент негайно вилучають і не використовують до належного ремонту."
  },
  {
    "section": "29 CFR 1926.302(e)(5)",
    "question": "When may a powder-actuated tool be loaded for a planned fastening?",
    "questionUk": "Коли можна заряджати пороховий інструмент для запланованого кріплення?",
    "answers": [
      [
        "Just prior to intended firing",
        "Безпосередньо перед запланованим пострілом"
      ],
      [
        "At the start of the week for later use",
        "На початку тижня для подальшої роботи"
      ],
      [
        "Before transporting it to the jobsite",
        "Перед перевезенням на об’єкт"
      ],
      [
        "At the start of the shift regardless of use time",
        "На початку зміни незалежно від використання"
      ],
      [
        "Before storing it overnight",
        "Перед нічним зберіганням"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Tools must not be loaded until just before intended firing; loaded and empty tools alike must not be pointed at employees.",
    "explanationUk": "Інструмент заряджають лише безпосередньо перед пострілом; ані заряджений, ані порожній не спрямовують на працівників."
  },
  {
    "section": "29 CFR 1926.302(e)(7)",
    "question": "Select THREE expressly listed hard or brittle materials into which powder-actuated fasteners must not be driven.",
    "questionUk": "Оберіть ТРИ прямо перелічені тверді чи крихкі матеріали, в які заборонено забивати порохові кріплення.",
    "answers": [
      [
        "Cast iron",
        "Чавун"
      ],
      [
        "Glazed tile",
        "Глазурована плитка"
      ],
      [
        "Glass block",
        "Склоблок"
      ],
      [
        "A suitable substrate approved for that fastening",
        "Придатна основа, дозволена для такого кріплення"
      ],
      [
        "A properly evaluated nonbrittle receiving material",
        "Належно оцінений некрихкий приймальний матеріал"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "difficulty": "medium",
    "explanation": "The prohibited list includes cast iron, glazed tile and glass block, among other hard or brittle materials.",
    "explanationUk": "Перелік заборонених матеріалів включає чавун, глазуровану плитку та склоблок серед інших твердих чи крихких матеріалів."
  },
  {
    "section": "29 CFR 1926.302(e)(8)",
    "question": "A proposed powder-actuated fastening could pass through an easily penetrated material and become a missile on the far side. What must the backing accomplish?",
    "questionUk": "Порохове кріплення може наскрізь пробити легкопроникний матеріал і вилетіти з іншого боку. Що має забезпечувати підкладка?",
    "answers": [
      [
        "Prevent the fastener passing completely through and creating that hazard",
        "Не допустити наскрізного проходження кріплення й цієї небезпеки"
      ],
      [
        "Only conceal the exit hole",
        "Лише приховати вихідний отвір"
      ],
      [
        "Only reduce noise",
        "Лише зменшити шум"
      ],
      [
        "Only collect paint chips",
        "Лише збирати фарбові крихти"
      ],
      [
        "Only support a warning label",
        "Лише тримати етикетку"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Driving into easily penetrated materials is to be avoided unless suitable backing prevents complete penetration and the flying-missile hazard.",
    "explanationUk": "Кріплення легкопроникних матеріалів уникають, якщо відповідна підкладка не запобігає наскрізному проходженню й небезпечному вильоту."
  },
  {
    "section": "29 CFR 1926.302(e)(9)",
    "question": "An unsuccessful powder-actuated fastening leaves a spalled area. May the next fastener be driven into that damaged spot?",
    "questionUk": "Невдале порохове кріплення залишило викришену ділянку. Чи можна забити наступне кріплення в це пошкоджене місце?",
    "answers": [
      [
        "No; fastening into that spalled area is prohibited",
        "Ні; кріплення в цю викришену ділянку заборонено"
      ],
      [
        "Yes; always reuse the same crater",
        "Так; завжди повторно використовуйте кратер"
      ],
      [
        "Yes; use two charges together",
        "Так; використайте два заряди разом"
      ],
      [
        "Yes; fill it with paint first",
        "Так; спочатку залийте фарбою"
      ],
      [
        "Yes; the prohibition applies only to wood",
        "Так; заборона стосується лише деревини"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (e)(9) prohibits driving a fastener into a spalled area caused by an unsatisfactory fastening.",
    "explanationUk": "Пункт (e)(9) забороняє забивати кріплення у викришену ділянку, спричинену невдалим кріпленням."
  }
];
export const intakeVerified132 = verifiedBatch(1569, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926", "osha", "https://www.ecfr.gov/current/title-29/section-1926.302", seeds, "intake-series-127-132", false, "2026-11-02");
