import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.306(b)(1)",
    "difficulty": "medium",
    "question": "A stationary construction air receiver is proposed underground where its drains and access openings would be inaccessible. What does the air-receiver rule require?",
    "questionUk": "Стаціонарний будівельний повітрозбірник пропонують закопати, зробивши зливи й оглядові отвори недоступними. Що вимагає правило повітрозбірників?",
    "answers": [
      [
        "Do not bury it or put it in an inaccessible place; drains and access openings must be easily accessible",
        "Не закопувати й не ставити в недоступному місці; зливи й оглядові отвори мають бути легкодоступними"
      ],
      [
        "Bury it if the tank is painted",
        "Закопати після фарбування"
      ],
      [
        "Bury it if pressure is below 200 psi",
        "Закопати за тиску до 200 фунтів/кв. дюйм"
      ],
      [
        "Leave access only to the pressure switch",
        "Залишити доступ лише до реле тиску"
      ],
      [
        "Provide access only after the tank fails",
        "Забезпечити доступ лише після відмови"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Air receivers may not be buried or placed in inaccessible locations; drains, handholes and manholes must be easily accessible.",
    "explanationUk": "Повітрозбірники не закопують і не розміщують недоступно; зливи, ручні оглядові отвори й люки мають бути легкодоступними."
  },
  {
    "section": "29 CFR 1926.306(b)(2)",
    "difficulty": "easy",
    "question": "Where must the drain pipe and valve be installed on every air receiver?",
    "questionUk": "Де на кожному повітрозбірнику встановлюють зливну трубу й клапан?",
    "answers": [
      [
        "At the lowest point",
        "У найнижчій точці"
      ],
      [
        "Only at the highest point",
        "Лише в найвищій точці"
      ],
      [
        "At any point above the pressure gauge",
        "Будь-де вище манометра"
      ],
      [
        "Only on the compressor motor",
        "Лише на двигуні компресора"
      ],
      [
        "Only at the tool connection",
        "Лише біля інструмента"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The drain pipe and valve belong at the receiver's lowest point to remove accumulated oil and water.",
    "explanationUk": "Зливну трубу й клапан розташовують у найнижчій точці для видалення накопичених оливи й води."
  },
  {
    "section": "29 CFR 1926.306(b)(2)",
    "difficulty": "medium",
    "question": "An automatic trap is fitted to an air receiver. May it replace the required drain valve under the cited provision?",
    "questionUk": "На повітрозбірнику встановлено автоматичний конденсатовідвідник. Чи може він замінити обов’язковий зливний клапан за зазначеним положенням?",
    "answers": [
      [
        "No; adequate automatic traps may be added in addition to drain valves",
        "Ні; належні автоматичні відвідники дозволені додатково до зливних клапанів"
      ],
      [
        "Yes; every automatic trap eliminates the drain-valve requirement",
        "Так; будь-який автоматичний відвідник скасовує клапан"
      ],
      [
        "Yes, if no oil is visible",
        "Так, якщо оливи не видно"
      ],
      [
        "Yes, if the receiver is indoors",
        "Так, якщо бак у приміщенні"
      ],
      [
        "No drain is needed on any painted receiver",
        "На пофарбованому баку злив не потрібен"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The rule permits automatic traps in addition to drain valves and requires frequent complete draining to avoid excessive liquid accumulation.",
    "explanationUk": "Правило дозволяє автоматичні відвідники додатково до зливних клапанів і вимагає досить частого повного зливання проти надмірного накопичення рідини."
  },
  {
    "section": "29 CFR 1926.306(b)(3)(i)",
    "difficulty": "exam",
    "question": "Which TWO devices are required on each air receiver?",
    "questionUk": "Які ДВА пристрої потрібні кожному повітрозбірнику?",
    "answers": [
      [
        "A readily visible indicating pressure gauge",
        "Легко видимий манометр"
      ],
      [
        "One or more spring-loaded safety valves",
        "Один або кілька пружинних запобіжних клапанів"
      ],
      [
        "Only a temperature sticker with no pressure gauge",
        "Лише температурна наклейка без манометра"
      ],
      [
        "An isolating valve between receiver and every safety valve",
        "Відсічний клапан між баком і кожним запобіжним клапаном"
      ],
      [
        "A permanently plugged relief connection",
        "Постійно заглушений отвір скидання"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Each receiver requires a visible indicating pressure gauge and at least one spring-loaded safety valve.",
    "explanationUk": "Кожен повітрозбірник має видимий манометр і щонайменше один пружинний запобіжний клапан."
  },
  {
    "section": "29 CFR 1926.306(b)(3)(i)",
    "difficulty": "exam",
    "question": "An air receiver has a maximum allowable working pressure of 150 psi. The safety-valve relieving-capacity requirement must prevent pressure from exceeding that value by more than 10 percent. What is that calculated upper bound?",
    "questionUk": "Максимальний допустимий робочий тиск повітрозбірника — 150 фунтів/кв. дюйм. Пропускна здатність запобіжних клапанів має не допускати перевищення більш як на 10%. Яка розрахункова верхня межа?",
    "answers": [
      [
        "165 psi",
        "165 фунтів/кв. дюйм"
      ],
      [
        "150 psi",
        "150 фунтів/кв. дюйм"
      ],
      [
        "155 psi",
        "155 фунтів/кв. дюйм"
      ],
      [
        "175 psi",
        "175 фунтів/кв. дюйм"
      ],
      [
        "300 psi",
        "300 фунтів/кв. дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "150×1.10 = 165 psi for the specified relieving-capacity limit. This is not permission to use 165 psi as normal operating pressure or a valve setting.",
    "explanationUk": "150×1,10 = 165 фунтів/кв. дюйм для визначеної межі пропускної здатності. Це не дозвіл прийняти 165 як звичайний робочий тиск чи налаштування клапана."
  },
  {
    "section": "29 CFR 1926.306(b)(3)(ii)",
    "difficulty": "medium",
    "question": "A contractor proposes an isolation valve between an air receiver and its safety valve for easier servicing. Is that placement permitted?",
    "questionUk": "Для зручності обслуговування підрядник пропонує відсічний клапан між повітрозбірником і запобіжним клапаном. Чи дозволене таке розташування?",
    "answers": [
      [
        "No valve of any type may be placed between the receiver and its safety valve",
        "Між баком і запобіжним клапаном не ставлять жодного клапана"
      ],
      [
        "Yes, if the handle is painted red",
        "Так, якщо руків’я червоне"
      ],
      [
        "Yes, if the owner promises to leave it open",
        "Так, якщо власник обіцяє не закривати"
      ],
      [
        "Yes, for valves smaller than 1 inch",
        "Так, для клапанів менше 1 дюйма"
      ],
      [
        "Yes, if a pressure gauge is installed",
        "Так, якщо є манометр"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (ii) prohibits any valve between the receiver and its safety valve or valves.",
    "explanationUk": "Пункт (ii) забороняє будь-який клапан між повітрозбірником і його запобіжними клапанами."
  },
  {
    "section": "29 CFR 1926.306(b)(3)(iii)",
    "difficulty": "medium",
    "question": "How must air-receiver safety appliances be constructed, located and installed regarding weather and other disabling influences?",
    "questionUk": "Як установлюють і розміщують захисні пристрої повітрозбірника щодо погоди та інших чинників відмови?",
    "answers": [
      [
        "So they cannot readily be rendered inoperative, including by the elements",
        "Так, щоб їх не можна було легко вивести з дії, зокрема погодою"
      ],
      [
        "Where rain can routinely disable them",
        "Там, де дощ регулярно спричиняє відмову"
      ],
      [
        "With removable protection that always blocks operation",
        "Із захистом, що завжди блокує роботу"
      ],
      [
        "So operators can easily bypass all protection",
        "Для легкого обходу всього захисту оператором"
      ],
      [
        "Only where hidden from inspection",
        "Лише приховано від огляду"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Safety valves and indicating/controlling devices must resist being readily rendered inoperative by any means, including the elements.",
    "explanationUk": "Запобіжні клапани, показувальні й керувальні пристрої розміщують так, щоб їх не можна було легко вивести з дії, зокрема погодними чинниками."
  },
  {
    "section": "29 CFR 1926.306(b)(3)(iv)",
    "difficulty": "easy",
    "question": "What testing frequency does the cited air-receiver rule require for safety valves?",
    "questionUk": "Яку частоту випробувань запобіжних клапанів вимагає зазначене правило повітрозбірників?",
    "answers": [
      [
        "Frequently and at regular intervals to confirm good operating condition",
        "Часто й через регулярні інтервали для перевірки справності"
      ],
      [
        "Only when first purchased",
        "Лише під час купівлі"
      ],
      [
        "Only after a tank rupture",
        "Лише після розриву бака"
      ],
      [
        "Exactly once every 10 years regardless of conditions",
        "Рівно раз на 10 років незалежно від умов"
      ],
      [
        "No testing if the valve is new",
        "Новий клапан не випробовують"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "All safety valves must be tested frequently and at regular intervals; the regulation does not supply a universal numeric interval here.",
    "explanationUk": "Усі запобіжні клапани випробовують часто й регулярно; універсального числового інтервалу цей пункт не встановлює."
  },
  {
    "section": "29 CFR 1926.56(a), Table D-3, concrete placement row",
    "difficulty": "medium",
    "question": "What minimum illumination does Table D-3 list for concrete placement while work is in progress?",
    "questionUk": "Яку мінімальну освітленість таблиця D-3 установлює для укладання бетону під час робіт?",
    "answers": [
      [
        "3 foot-candles",
        "3 фут-свічки"
      ],
      [
        "1 foot-candle",
        "1 фут-свічка"
      ],
      [
        "5 foot-candles",
        "5 фут-свічок"
      ],
      [
        "10 foot-candles",
        "10 фут-свічок"
      ],
      [
        "30 foot-candles",
        "30 фут-свічок"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Concrete placement is listed in the 3-foot-candle row of Table D-3.",
    "explanationUk": "Укладання бетону внесено до рядка 3 фут-свічок таблиці D-3.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-D/section-1926.56"
  },
  {
    "section": "29 CFR 1926.56(a), Table D-3, indoor warehouse row",
    "difficulty": "medium",
    "question": "What minimum illumination is listed for indoor warehouses, corridors, hallways and exitways during work?",
    "questionUk": "Яка мінімальна освітленість наведена для внутрішніх складів, коридорів, проходів і виходів під час робіт?",
    "answers": [
      [
        "5 foot-candles",
        "5 фут-свічок"
      ],
      [
        "1 foot-candle",
        "1 фут-свічка"
      ],
      [
        "3 foot-candles",
        "3 фут-свічки"
      ],
      [
        "10 foot-candles",
        "10 фут-свічок"
      ],
      [
        "30 foot-candles",
        "30 фут-свічок"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The indoor warehouse/corridor/hallway/exitway row requires at least 5 foot-candles.",
    "explanationUk": "Рядок внутрішніх складів, коридорів, проходів і виходів вимагає щонайменше 5 фут-свічок.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-D/section-1926.56"
  },
  {
    "section": "29 CFR 1926.56(a), Table D-3, shops row",
    "difficulty": "medium",
    "question": "A carpenter shop is operating on a construction project. What minimum illumination does Table D-3 list for that shop?",
    "questionUk": "На будівельному об’єкті працює столярна майстерня. Яку мінімальну освітленість для неї дає таблиця D-3?",
    "answers": [
      [
        "10 foot-candles",
        "10 фут-свічок"
      ],
      [
        "1 foot-candle",
        "1 фут-свічка"
      ],
      [
        "3 foot-candles",
        "3 фут-свічки"
      ],
      [
        "5 foot-candles",
        "5 фут-свічок"
      ],
      [
        "30 foot-candles",
        "30 фут-свічок"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Carpenter shops are among the construction shops listed at 10 foot-candles.",
    "explanationUk": "Столярні майстерні входять до будівельних майстерень із мінімумом 10 фут-свічок.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-D/section-1926.56"
  },
  {
    "section": "29 CFR 1926.56(a), Table D-3, first aid and offices row",
    "difficulty": "medium",
    "question": "Which minimum illumination applies to construction first-aid stations, infirmaries and offices?",
    "questionUk": "Яка мінімальна освітленість діє для пунктів першої допомоги, медичних пунктів і офісів на будівництві?",
    "answers": [
      [
        "30 foot-candles",
        "30 фут-свічок"
      ],
      [
        "3 foot-candles",
        "3 фут-свічки"
      ],
      [
        "5 foot-candles",
        "5 фут-свічок"
      ],
      [
        "10 foot-candles",
        "10 фут-свічок"
      ],
      [
        "20 foot-candles",
        "20 фут-свічок"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Table D-3 assigns these areas 30 foot-candles minimum while work is in progress.",
    "explanationUk": "Таблиця D-3 установлює для цих місць щонайменше 30 фут-свічок під час робіт.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-D/section-1926.56"
  }
];
export const intakeVerified113 = verifiedBatch(1341, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926.306 and 1926.56", "osha", "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-I/section-1926.306", seeds, "intake-series-109-114", false, "2026-10-22");

