import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "216D.04 subd. 1(a)",
    "difficulty": "medium",
    "question": "Outside an emergency, what is the minimum excavation-notice lead time, using the statute's excluded days?",
    "questionUk": "Який мінімальний строк попереднього повідомлення про земляні роботи поза аварійною ситуацією з урахуванням виключених законом днів?",
    "answers": [
      [
        "48 hours, excluding notification day, Saturdays, Sundays and holidays",
        "48 годин без дня повідомлення, субот, неділь і свят"
      ],
      [
        "24 hours with no excluded days",
        "24 години без виключення днів"
      ],
      [
        "48 hours including notification day and weekends",
        "48 годин із днем повідомлення й вихідними"
      ],
      [
        "72 calendar hours in every case",
        "72 календарні години в кожному випадку"
      ],
      [
        "Seven calendar days in every case",
        "Сім календарних днів у кожному випадку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The statute specifies at least 48 hours and expressly excludes the notice day, Saturdays, Sundays and holidays.",
    "explanationUk": "Закон вимагає щонайменше 48 годин і прямо виключає день повідомлення, суботи, неділі та свята."
  },
  {
    "section": "216D.04 subd. 1(a)",
    "difficulty": "medium",
    "question": "An excavator wants to send the ordinary notice 20 calendar days before starting. What maximum advance-notice interval does subdivision 1 establish?",
    "questionUk": "Виконавець хоче подати звичайне повідомлення за 20 календарних днів до початку. Який найбільший строк завчасного повідомлення встановлює частина 1?",
    "answers": [
      [
        "14 calendar days",
        "14 календарних днів"
      ],
      [
        "7 calendar days",
        "7 календарних днів"
      ],
      [
        "10 working days",
        "10 робочих днів"
      ],
      [
        "21 calendar days",
        "21 календарний день"
      ],
      [
        "30 calendar days",
        "30 календарних днів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Notice must be no more than 14 calendar days before beginning, alongside the minimum waiting rule.",
    "explanationUk": "Повідомлення подають не більш як за 14 календарних днів до початку, поряд із мінімальним строком очікування."
  },
  {
    "section": "216D.05(a)(2)",
    "difficulty": "medium",
    "question": "For physical marking of a proposed excavation, which color pair matches ordinary and wintery conditions?",
    "questionUk": "Яка пара кольорів фізичного позначення запланованих земляних робіт відповідає звичайним і зимовим умовам?",
    "answers": [
      [
        "White ordinarily; black in wintery conditions",
        "Білий за звичайних умов; чорний за зимових"
      ],
      [
        "Yellow ordinarily; red in wintery conditions",
        "Жовтий за звичайних; червоний за зимових"
      ],
      [
        "Blue ordinarily; green in wintery conditions",
        "Синій за звичайних; зелений за зимових"
      ],
      [
        "Red ordinarily; white in wintery conditions",
        "Червоний за звичайних; білий за зимових"
      ],
      [
        "Orange ordinarily; yellow in wintery conditions",
        "Помаранчевий за звичайних; жовтий за зимових"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The excavation-outline colors are white or black in wintery conditions; this is distinct from operator utility-color marking.",
    "explanationUk": "Контур земляних робіт позначають білим або чорним у зимових умовах; це відрізняється від кольорового маркування комунікацій оператором."
  },
  {
    "section": "216D.05(b)(1), (c)",
    "difficulty": "exam",
    "question": "In October 2026, an excavator submits electronic marking with as much information as equivalent physical marking. May an operator still require physical marking?",
    "questionUk": "У жовтні 2026 року виконавець подає електронне позначення з не меншою кількістю інформації, ніж відповідне фізичне. Чи може оператор усе ще вимагати фізичні позначки?",
    "answers": [
      [
        "Yes; the operator may require physical marking after electronic submission",
        "Так; оператор може вимагати фізичні позначки після електронного подання"
      ],
      [
        "No; electronic submission always overrides the operator",
        "Ні; електронне подання завжди переважає рішення оператора"
      ],
      [
        "Only before January 1, 2026",
        "Лише до 1 січня 2026 року"
      ],
      [
        "Only if the excavation exceeds one mile",
        "Лише за довжини робіт понад милю"
      ],
      [
        "Only when the excavator requests it",
        "Лише на прохання виконавця"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (c) preserves the operator's ability to require physical markings. The automatic dual-marking condition in (b)(2) concerned dates before January 1, 2026.",
    "explanationUk": "Пункт (c) зберігає право оператора вимагати фізичні позначки. Автоматична умова подвійного позначення в (b)(2) стосувалася дат до 1 січня 2026 року."
  },
  {
    "section": "216D.05(a)(1)",
    "difficulty": "medium",
    "question": "Which planning obligation applies to underground facilities both in and near the construction area?",
    "questionUk": "Який обов’язок планування стосується підземних комунікацій як усередині, так і поблизу будівельної зони?",
    "answers": [
      [
        "Avoid damage and minimize interference with facilities",
        "Уникати пошкоджень і мінімізувати втручання в роботу комунікацій"
      ],
      [
        "Protect only facilities directly inside the trench",
        "Захищати лише комунікації безпосередньо в траншеї"
      ],
      [
        "Plan only after a utility is struck",
        "Планувати лише після удару по комунікації"
      ],
      [
        "Ignore facilities outside the property boundary",
        "Ігнорувати комунікації за межею власності"
      ],
      [
        "Rely on eventual backfill to restore every facility",
        "Покладатися на засипку для відновлення будь-якої комунікації"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Excavation must be planned to avoid damage and minimize interference in and near the construction area.",
    "explanationUk": "Роботи планують так, щоб уникати пошкоджень і мінімізувати втручання в комунікації в будівельній зоні та поблизу неї."
  },
  {
    "section": "216D.05(a)(4)",
    "difficulty": "medium",
    "question": "An underground facility is temporarily exposed. When must the excavator's support obligation continue?",
    "questionUk": "Підземну комунікацію тимчасово оголено. До якого етапу має продовжуватися обов’язок виконавця забезпечувати її опору?",
    "answers": [
      [
        "Including during backfill operations",
        "Зокрема під час зворотної засипки"
      ],
      [
        "Only until excavation begins",
        "Лише до початку копання"
      ],
      [
        "Only until the first photograph is taken",
        "Лише до першого фотографування"
      ],
      [
        "Only until the operator receives the original notice",
        "Лише до отримання оператором початкового повідомлення"
      ],
      [
        "Only while mechanized digging is occurring",
        "Лише поки працює механізований копальний інструмент"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Support is required for facilities in and near the construction area, including during backfill.",
    "explanationUk": "Опору для комунікацій у зоні робіт і поблизу неї забезпечують зокрема під час зворотної засипки."
  },
  {
    "section": "216D.05(a)(3)",
    "difficulty": "exam",
    "question": "When maintaining clearance from a facility to a mechanized equipment cutting edge, what operational factor must the excavator consider?",
    "questionUk": "Який робочий чинник виконавець має врахувати, підтримуючи відстань між комунікацією та різальною кромкою механізованого обладнання?",
    "answers": [
      [
        "The known limit of control of the edge or point",
        "Відому межу керованості кромки або вістря"
      ],
      [
        "Only the machine's purchase price",
        "Лише ціну придбання машини"
      ],
      [
        "Only the operator's years of experience",
        "Лише стаж машиніста"
      ],
      [
        "Only the trench's final width",
        "Лише остаточну ширину траншеї"
      ],
      [
        "Only the utility pipe's color",
        "Лише колір комунікаційної труби"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "This clearance duty explicitly considers the known control limits of the cutting edge or point. It does not replace other locate/tolerance requirements.",
    "explanationUk": "Обов’язок щодо відстані прямо враховує відомі межі керованості кромки або вістря. Він не замінює інших вимог локалізації чи допусків."
  },
  {
    "section": "216D.06 subd. 1(a)",
    "difficulty": "medium",
    "question": "Excavation damages only a facility's protective covering, with no apparent leak. What notification duty applies?",
    "questionUk": "Під час копання пошкоджено лише захисне покриття комунікації, видимого витоку немає. Який обов’язок повідомлення діє?",
    "answers": [
      [
        "Promptly notify the facility operator",
        "Негайно без зволікання повідомити оператора комунікації"
      ],
      [
        "Notify only if the pipe wall is punctured",
        "Повідомляти лише за пробиття стінки труби"
      ],
      [
        "Wait until final inspection",
        "Чекати остаточного огляду"
      ],
      [
        "Tell the customer instead of the operator",
        "Повідомити клієнта замість оператора"
      ],
      [
        "Backfill first and notify at project completion",
        "Спершу засипати й повідомити після завершення проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The duty applies to any damage to the facility or its protective covering, not only visible leaks.",
    "explanationUk": "Обов’язок стосується будь-якого пошкодження комунікації або її захисного покриття, а не лише видимих витоків."
  },
  {
    "section": "216D.06 subd. 1(a)",
    "difficulty": "exam",
    "question": "A damaged gas line releases flammable gas. Which TWO parties must the responsible excavator immediately notify? Select TWO.",
    "questionUk": "Пошкоджений газопровід випускає займистий газ. Кого ДВОХ відповідальний виконавець має негайно повідомити? Оберіть ДВОХ.",
    "answers": [
      [
        "The facility operator",
        "Оператора комунікації"
      ],
      [
        "The 911 public safety answering point",
        "Диспетчерський центр екстреної допомоги 911"
      ],
      [
        "Only the homeowner's insurer",
        "Лише страховика власника"
      ],
      [
        "Only the building-material supplier",
        "Лише постачальника матеріалів"
      ],
      [
        "Only the next scheduled inspector",
        "Лише інспектора наступного запланованого огляду"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Dangerous releases require immediate notice to the operator and 911, plus immediate protection of the public and property and efforts to minimize the hazard.",
    "explanationUk": "Небезпечний витік вимагає негайного повідомлення оператора й 911, захисту людей і майна та зусиль для мінімізації небезпеки."
  },
  {
    "section": "216D.06 subd. 1(b)",
    "difficulty": "exam",
    "question": "A facility is damaged and the operator has not investigated or authorized backfill. What must happen in the immediate damage area?",
    "questionUk": "Комунікацію пошкоджено, оператор ще не дослідив пошкодження й не дозволив засипку. Що має відбутися безпосередньо в цій зоні?",
    "answers": [
      [
        "Delay backfilling until operator investigation, unless the operator authorizes otherwise",
        "Відкласти засипку до дослідження оператором, якщо він не дозволить інше"
      ],
      [
        "Backfill immediately to hide the damaged covering",
        "Одразу засипати для приховування пошкодженого покриття"
      ],
      [
        "Backfill after obtaining only the customer's permission",
        "Засипати лише за згодою клієнта"
      ],
      [
        "Backfill whenever the leak seems small",
        "Засипати, коли витік здається малим"
      ],
      [
        "Backfill as soon as the operator is telephoned",
        "Засипати відразу після телефонування оператору"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Backfill is delayed until the operator investigates, subject to the operator's authorization to do otherwise.",
    "explanationUk": "Засипку відкладають до дослідження оператором, якщо він не надасть дозволу на інший порядок."
  },
  {
    "section": "216D.06 subd. 1(b)",
    "difficulty": "medium",
    "question": "Who may perform repairs to excavation-damaged underground facilities under the damage statute?",
    "questionUk": "Хто за законом про пошкодження може ремонтувати підземні комунікації, пошкоджені земляними роботами?",
    "answers": [
      [
        "The operator or qualified personnel authorized by the operator",
        "Оператор або кваліфіковані особи, уповноважені оператором"
      ],
      [
        "Any excavator employee without authorization",
        "Будь-який працівник виконавця без уповноваження"
      ],
      [
        "Only the property owner",
        "Лише власник ділянки"
      ],
      [
        "Any person who witnessed the damage",
        "Будь-який свідок пошкодження"
      ],
      [
        "Only the notification-center dispatcher",
        "Лише диспетчер центру повідомлень"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Repairs are restricted to the operator or qualified personnel the operator authorizes.",
    "explanationUk": "Ремонт виконують оператор або кваліфіковані особи, яких він уповноважив."
  },
  {
    "section": "216D.06 subd. 2(a)–(b)",
    "difficulty": "exam",
    "question": "Assume no statutory reimbursement exception applies. Besides necessary pipeline repairs, what additional loss must the damaging excavator reimburse?",
    "questionUk": "Припустімо, жоден законний виняток із відшкодування не діє. Який додатковий збиток, крім потрібного ремонту трубопроводу, має відшкодувати виконавець, який його пошкодив?",
    "answers": [
      [
        "The cost of pipeline product lost directly because of the damage",
        "Вартість продукту трубопроводу, втраченого безпосередньо через пошкодження"
      ],
      [
        "Every future product shipment through the pipeline",
        "Усі майбутні поставки продукту цим трубопроводом"
      ],
      [
        "All unrelated utility-system upgrades",
        "Усі сторонні модернізації комунальної системи"
      ],
      [
        "Only the excavator's own equipment damage",
        "Лише пошкодження власного обладнання виконавця"
      ],
      [
        "Only the original marking cost",
        "Лише початкову вартість маркування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The default reimbursement includes necessary repairs and pipeline product directly lost. Subdivision 2(b) separately provides exceptions for sole operator negligence or failure to comply with the locating provision.",
    "explanationUk": "За загальним правилом відшкодовують потрібний ремонт і безпосередньо втрачений продукт. Частина 2(b) окремо встановлює винятки щодо виключної недбалості оператора або невиконання ним вимоги локалізації."
  }
];
export const intakeVerified72 = verifiedBatch(849, "Sitework", "Sitework / Soils", "Minnesota Statutes Chapter 216D", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/216D/full", seeds, "intake-series-67-72", false);

