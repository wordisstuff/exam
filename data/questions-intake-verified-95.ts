import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "1926.601(a)",
    "difficulty": "medium",
    "question": "Which operating setting is within this motor-vehicle section's stated coverage, excluding equipment governed by 1926.602?",
    "questionUk": "Яке середовище роботи охоплене цим розділом транспортних засобів, крім обладнання за 1926.602?",
    "answers": [
      [
        "An off-highway jobsite not open to public traffic",
        "Позашляховий будмайданчик, закритий для громадського руху"
      ],
      [
        "Only interstate highways",
        "Лише міжштатні автомагістралі"
      ],
      [
        "Only public shopping-center traffic lanes",
        "Лише відкриті смуги торгового центру"
      ],
      [
        "Only passenger vehicles at home",
        "Лише легкові авто вдома"
      ],
      [
        "Only vehicles in a dealership showroom",
        "Лише авто в салоні дилера"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "1926.601 covers motor vehicles operating within an off-highway jobsite closed to public traffic; equipment specifically governed by 1926.602 is excluded.",
    "explanationUk": "1926.601 охоплює транспорт на позашляховому будмайданчику без громадського руху; обладнання, прямо охоплене 1926.602, виключене."
  },
  {
    "section": "1926.601(b)(1)",
    "difficulty": "exam",
    "question": "Select the brake systems required in operable condition on a covered jobsite vehicle.",
    "questionUk": "Виберіть гальмівні системи, які мають бути справні на охопленому транспорті будмайданчика.",
    "answers": [
      [
        "Service brakes",
        "Робочі гальма"
      ],
      [
        "Emergency brakes",
        "Аварійні гальма"
      ],
      [
        "Parking brakes",
        "Стоянкові гальма"
      ],
      [
        "Only engine compression in place of all brakes",
        "Лише гальмування двигуном замість усіх гальм"
      ],
      [
        "Only a loose wheel chock as the complete brake system",
        "Лише незакріплений упор як повна гальмівна система"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Service, emergency and parking brake systems are required and operable. They may share components; the rule does not demand three entirely independent sets of hardware.",
    "explanationUk": "Робоча, аварійна й стоянкова системи потрібні та мають працювати. Вони можуть мати спільні компоненти; трьох повністю незалежних комплектів механізмів правило не вимагає."
  },
  {
    "section": "1926.601(b)(2)(i)",
    "difficulty": "medium",
    "question": "Visibility warrants additional light on a covered jobsite vehicle. What minimum operating headlight/taillight count is required?",
    "questionUk": "Видимість потребує додаткового світла на охопленому транспорті будмайданчика. Яка мінімальна кількість справних передніх і задніх вогнів потрібна?",
    "answers": [
      [
        "Two headlights and two taillights",
        "Дві передні фари та два задні вогні"
      ],
      [
        "One headlight and no taillights",
        "Одна фара й жодного заднього вогню"
      ],
      [
        "Two headlights and one taillight",
        "Дві фари й один задній вогонь"
      ],
      [
        "One of each",
        "По одному"
      ],
      [
        "Only a handheld flashlight",
        "Лише ручний ліхтар"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "When conditions warrant additional light, at least two operating headlights and two operating taillights are required on vehicles or vehicle combinations in use.",
    "explanationUk": "За умов, що потребують додаткового світла, використовуваний транспорт або його комбінація має щонайменше дві справні фари та два задні вогні."
  },
  {
    "section": "1926.601(b)(2)(ii)",
    "difficulty": "easy",
    "question": "Does daylight remove the brake-light requirement for covered jobsite vehicles?",
    "questionUk": "Чи скасовує денне світло вимогу стоп-сигналів охопленого транспорту будмайданчика?",
    "answers": [
      [
        "No; brake lights must operate regardless of lighting conditions",
        "Ні; стоп-сигнали мають працювати незалежно від освітлення"
      ],
      [
        "Yes; brake lights are needed only after sunset",
        "Так; потрібні лише після заходу сонця"
      ],
      [
        "Yes; if the horn works",
        "Так; якщо працює клаксон"
      ],
      [
        "Yes; if the vehicle is unloaded",
        "Так; якщо транспорт порожній"
      ],
      [
        "Yes; on all unpaved routes",
        "Так; на всіх ґрунтових шляхах"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Operable brake lights are required regardless of light conditions, unlike the conditional additional-headlight provision.",
    "explanationUk": "Справні стоп-сигнали потрібні незалежно від освітлення, на відміну від умовної вимоги додаткових фар."
  },
  {
    "section": "1926.601(b)(4)",
    "difficulty": "exam",
    "question": "A covered vehicle has an obstructed rear view. Select the permitted alternative safeguards for backing.",
    "questionUk": "Охоплений транспорт має перекритий огляд назад. Виберіть дозволені альтернативні заходи руху заднім ходом.",
    "answers": [
      [
        "A reverse alarm audible above surrounding noise",
        "Сигнал заднього ходу, чутний понад навколишній шум"
      ],
      [
        "Back only when an observer signals it is safe",
        "Рухатися назад лише за сигналом спостерігача про безпечність"
      ],
      [
        "Use the ordinary horn once and reverse without observation",
        "Один раз подати клаксон і їхати без спостереження"
      ],
      [
        "Rely solely on the driver's memory of the route",
        "Покладатися лише на пам’ять водія"
      ],
      [
        "Back faster to shorten exposure",
        "Їхати швидше для скорочення впливу"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The section permits either the audible reverse alarm or backing only when an observer signals safety; it does not require both alternatives simultaneously.",
    "explanationUk": "Розділ дозволяє або чутний сигнал заднього ходу, або рух лише за сигналом спостерігача; обидві альтернативи одночасно не вимагаються."
  },
  {
    "section": "1926.601(b)(5)",
    "difficulty": "medium",
    "question": "A covered cab vehicle operates where its windshield frosts. Which equipment and condition are required?",
    "questionUk": "Охоплений транспорт із кабіною працює там, де лобове скло обмерзає. Яке оснащення й стан потрібні?",
    "answers": [
      [
        "Windshield, powered wipers, replaced broken/cracked glass and operable defrosting equipment",
        "Лобове скло, привідні двірники, замінене розбите/тріснуте скло та справне розморожування"
      ],
      [
        "Only a hand scraper instead of all glass",
        "Лише ручний скребок замість усього скла"
      ],
      [
        "No powered wipers if the driver wears goggles",
        "Без привідних двірників за захисних окулярів"
      ],
      [
        "A cracked windshield if taped at the edge",
        "Тріснуте скло, якщо край заклеєний"
      ],
      [
        "Only an open side window",
        "Лише відкрите бокове вікно"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Cab vehicles need windshields and powered wipers; damaged glass is replaced. Fogging/frosting conditions additionally trigger operable defogging/defrosting devices.",
    "explanationUk": "Кабіни потребують лобового скла й привідних двірників; пошкоджене скло замінюють. Запотівання чи обмерзання додатково потребує справних засобів усунення цих явищ."
  },
  {
    "section": "1926.601(b)(6)",
    "difficulty": "medium",
    "question": "A loader fills a covered haulage truck. What protection must the truck provide its operator from shifting or falling material?",
    "questionUk": "Навантажувач завантажує охоплену вантажівку. Який захист водія від зміщення чи падіння матеріалу має бути?",
    "answers": [
      [
        "An adequate cab shield and/or canopy",
        "Належний щит кабіни та/або навіс"
      ],
      [
        "Only a painted warning stripe",
        "Лише намальована попереджувальна смуга"
      ],
      [
        "Only a seat cushion",
        "Лише подушка сидіння"
      ],
      [
        "Only the operator's hard hat instead of the vehicle protection",
        "Лише каска замість захисту транспорту"
      ],
      [
        "No protection if loading is brief",
        "Захист не потрібний за короткого завантаження"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Haulage vehicles loaded by cranes, shovels, loaders or similar equipment need a protective cab shield and/or canopy adequate for shifting/falling material.",
    "explanationUk": "Вантажівки, які завантажують кранами, екскаваторами, навантажувачами чи подібним обладнанням, потребують належного щита кабіни та/або навісу від зміщення й падіння матеріалу."
  },
  {
    "section": "1926.601(b)(7)",
    "difficulty": "medium",
    "question": "Tools ride in the same compartment as employees in a covered jobsite vehicle. What must be done?",
    "questionUk": "Інструменти перевозять в одному відсіку з працівниками охопленого транспорту будмайданчика. Що потрібно зробити?",
    "answers": [
      [
        "Secure the tools and materials against movement",
        "Закріпити інструменти й матеріали від руху"
      ],
      [
        "Ask workers to catch them during turns",
        "Просити працівників ловити їх на поворотах"
      ],
      [
        "Stack them loosely above seat height",
        "Вільно скласти вище сидінь"
      ],
      [
        "Leave them unsecured if the route is short",
        "Не закріплювати на короткому маршруті"
      ],
      [
        "Only label them with the owner's name",
        "Лише підписати ім’ям власника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Tools and materials transported with employees in the same compartment must be secured so they cannot move.",
    "explanationUk": "Інструменти й матеріали в одному відсіку з працівниками закріплюють так, щоб вони не рухалися."
  },
  {
    "section": "1926.601(b)(8)",
    "difficulty": "exam",
    "question": "A covered crew vehicle has four firmly secured seats but must carry six employees. Does its seating meet this subsection?",
    "questionUk": "Охоплений транспорт бригади має чотири міцно закріплені сидіння, але має перевезти шістьох працівників. Чи відповідає він цьому підпункту?",
    "answers": [
      [
        "No; seating must also be adequate for the number carried",
        "Ні; сидінь також має бути достатньо за кількістю людей"
      ],
      [
        "Yes; secure seats remove the capacity requirement",
        "Так; надійне кріплення скасовує вимогу місткості"
      ],
      [
        "Yes; two workers may stand",
        "Так; двоє можуть стояти"
      ],
      [
        "Yes; cargo boxes count automatically as seats",
        "Так; ящики автоматично вважаються сидіннями"
      ],
      [
        "Yes; if the trip stays onsite",
        "Так; якщо поїздка лише на майданчику"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Seats must be both firmly secured and adequate for the employee count. Four seats are insufficient for six employees.",
    "explanationUk": "Сидіння мають бути і міцно закріпленими, і достатніми для кількості працівників. Чотирьох для шістьох недостатньо."
  },
  {
    "section": "1926.601(b)(10)",
    "difficulty": "exam",
    "question": "Select the required characteristics of a dump body's support used during maintenance or inspection.",
    "questionUk": "Виберіть потрібні характеристики опори самоскидного кузова під час обслуговування чи огляду.",
    "answers": [
      [
        "Positive support",
        "Примусово утримувальна опора"
      ],
      [
        "Permanently attached",
        "Постійно прикріплена"
      ],
      [
        "Capable of locking in position against accidental lowering",
        "Здатна фіксуватися від випадкового опускання"
      ],
      [
        "Only a loose scrap board",
        "Лише вільний обрізок дошки"
      ],
      [
        "Only the hydraulic control held by hand",
        "Лише утримуваний рукою гідравлічний важіль"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The support must be positive, permanently attached and lockable to prevent accidental lowering during maintenance/inspection.",
    "explanationUk": "Опора має надійно утримувати кузов, бути постійно прикріпленою та фіксуватися від випадкового опускання під час обслуговування чи огляду."
  },
  {
    "section": "1926.601(b)(12)",
    "difficulty": "easy",
    "question": "How must dump-truck tailgate trip handles be arranged for dumping?",
    "questionUk": "Як мають бути розташовані рукоятки відмикання заднього борту самоскида для вивантаження?",
    "answers": [
      [
        "So the operator remains in the clear",
        "Так, щоб оператор залишався поза небезпечною зоною"
      ],
      [
        "So the operator must stand under the load",
        "Так, щоб оператор стояв під вантажем"
      ],
      [
        "So the operator must reach into the falling-material path",
        "Так, щоб оператор тягнувся в потік матеріалу"
      ],
      [
        "So they are inaccessible from a safe position",
        "Так, щоб безпечне керування було неможливим"
      ],
      [
        "Only according to paint color",
        "Лише за кольором фарби"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The trip-handle arrangement must keep the operator clear during dumping.",
    "explanationUk": "Розташування рукояток має залишати оператора поза небезпечною зоною під час вивантаження."
  },
  {
    "section": "1926.601(b)(14)",
    "difficulty": "exam",
    "question": "When must covered vehicles in use be checked, and when must discovered defects be corrected?",
    "questionUk": "Коли перевіряють використовуваний охоплений транспорт і коли усувають виявлені дефекти?",
    "answers": [
      [
        "At each shift's beginning; correct defects before placing the vehicle in service",
        "На початку кожної зміни; дефекти усувають до введення в роботу"
      ],
      [
        "Once a year; repairs may wait indefinitely",
        "Раз на рік; ремонт можна відкладати безстроково"
      ],
      [
        "Only after a collision; repairs after the project",
        "Лише після зіткнення; ремонт після проєкту"
      ],
      [
        "Only when the owner asks; repairs after the next shift",
        "Лише на прохання власника; ремонт після наступної зміни"
      ],
      [
        "At month's end; defects need only be photographed",
        "Наприкінці місяця; дефекти лише фотографують"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Shift-start checks cover brakes, tires, horn, steering, coupling, belts, controls and safety devices, plus necessary equipment. All defects must be corrected before service.",
    "explanationUk": "На початку зміни перевіряють гальма, шини, сигнал, кермо, зчеплення, ремені, керування, захисні засоби й потрібне обладнання. Усі дефекти усувають до роботи."
  }
];
export const intakeVerified95 = verifiedBatch(1125, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926.601", "osha", "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.601", seeds, "intake-series-91-96", false, "2026-10-15");

