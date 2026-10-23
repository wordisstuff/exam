import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";

const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.405(a)(2)(i)",
    "difficulty": "easy",
    "question": "Construction is complete and the temporary wiring no longer serves its installation purpose. When must that wiring be removed?",
    "questionUk": "Будівництво завершено, і тимчасова проводка більше не потрібна для первісної мети. Коли її потрібно прибрати?",
    "answers": [
      [
        "Immediately upon completion of construction or its intended purpose",
        "Негайно після завершення будівництва або її призначення"
      ],
      [
        "At the next annual inspection",
        "Під час наступної щорічної перевірки"
      ],
      [
        "Only after the owner sells the building",
        "Лише після продажу будівлі власником"
      ],
      [
        "Within five years",
        "Протягом п’яти років"
      ],
      [
        "Only if insulation becomes visibly damaged",
        "Лише після видимого пошкодження ізоляції"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Temporary wiring must be removed immediately when construction or the purpose for which it was installed is complete.",
    "explanationUk": "Тимчасову проводку прибирають негайно після завершення будівництва або мети, для якої її встановлено."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(A)",
    "difficulty": "medium",
    "question": "Temporary feeder conductors run openly on insulators where they are not subject to physical damage. What is the maximum spacing between those insulators?",
    "questionUk": "Тимчасові фідерні провідники прокладено відкрито на ізоляторах у місці без загрози механічного пошкодження. Яка максимальна відстань між ізоляторами?",
    "answers": [
      [
        "10 ft",
        "10 футів"
      ],
      [
        "4 ft",
        "4 фути"
      ],
      [
        "6 ft",
        "6 футів"
      ],
      [
        "15 ft",
        "15 футів"
      ],
      [
        "20 ft",
        "20 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The open-conductor feeder option permits insulators not more than 10 feet apart where physical damage is not a hazard.",
    "explanationUk": "Для відкритих фідерних провідників за відсутності небезпеки пошкодження відстань між ізоляторами не перевищує 10 футів."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(B)",
    "difficulty": "medium",
    "question": "An installer lays temporary branch-circuit conductors directly on the floor, arguing that workers will step over them. What does the cited OSHA rule say?",
    "questionUk": "Монтажник кладе провідники тимчасового відгалужувального кола безпосередньо на підлогу, бо працівники нібито переступатимуть їх. Що встановлює зазначена норма OSHA?",
    "answers": [
      [
        "Branch-circuit conductors must not be laid on the floor",
        "Провідники відгалужувального кола не можна класти на підлогу"
      ],
      [
        "This is allowed if workers are warned",
        "Дозволено після попередження працівників"
      ],
      [
        "This is allowed for one work shift",
        "Дозволено на одну зміну"
      ],
      [
        "This is allowed whenever voltage is 120 volts",
        "Дозволено за будь-якого кола 120 вольт"
      ],
      [
        "Floor placement is required for temporary circuits",
        "Для тимчасових кіл проводи обов’язково кладуть на підлогу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (B) expressly prohibits laying branch-circuit conductors on the floor; a worker warning does not replace the wiring requirement.",
    "explanationUk": "Пункт (B) прямо забороняє укладати такі провідники на підлогу; попередження працівників не замінює вимог прокладання."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(C)",
    "difficulty": "exam",
    "question": "A crew wants to add a receptacle for a portable saw to a branch circuit that supplies temporary lighting. What is required by paragraph (C)?",
    "questionUk": "Бригада хоче додати розетку для переносної пилки до відгалужувального кола тимчасового освітлення. Що вимагає пункт (C)?",
    "answers": [
      [
        "Do not install a receptacle for this nonlighting use on that lighting branch circuit",
        "Не встановлювати розетку для такого неосвітлювального використання в колі освітлення"
      ],
      [
        "Add it if the saw runs for less than 15 minutes",
        "Додати, якщо пилка працює менше 15 хвилин"
      ],
      [
        "Add it if the light bulbs are removed while sawing",
        "Додати, якщо під час пиляння викрутити лампи"
      ],
      [
        "Add it whenever the receptacle is painted yellow",
        "Додати, якщо розетку пофарбовано жовтим"
      ],
      [
        "Add it because temporary circuits have no use restrictions",
        "Додати, бо тимчасові кола не мають обмежень використання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Receptacles for uses other than temporary lighting may not be installed on branch circuits supplying temporary lighting.",
    "explanationUk": "Розетки для інших цілей, крім тимчасового освітлення, не встановлюють у колах, які живлять тимчасове освітлення."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(D)",
    "difficulty": "medium",
    "question": "What must the disconnecting switch or plug connector for each temporary circuit permit workers to disconnect?",
    "questionUk": "Що має дозволяти від’єднати вимикач або штепсельний з’єднувач кожного тимчасового кола?",
    "answers": [
      [
        "All ungrounded conductors of that circuit",
        "Усі незаземлені робочі провідники цього кола"
      ],
      [
        "Only the equipment grounding conductor",
        "Лише захисний заземлювальний провідник"
      ],
      [
        "Only the neutral conductor",
        "Лише нейтральний провідник"
      ],
      [
        "Only one of several ungrounded conductors",
        "Лише один із кількох незаземлених провідників"
      ],
      [
        "Only the nearest lamp socket",
        "Лише найближчий патрон лампи"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (D) requires means to disconnect all ungrounded conductors of each temporary circuit.",
    "explanationUk": "Пункт (D) вимагає засобу від’єднання всіх незаземлених робочих провідників кожного тимчасового кола."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(E)",
    "difficulty": "exam",
    "question": "Which TWO protections apply to lamps used for general illumination on temporary wiring?",
    "questionUk": "Які ДВІ вимоги захисту діють для ламп загального освітлення на тимчасовій проводці?",
    "answers": [
      [
        "Protection against accidental contact or breakage",
        "Захист від випадкового дотику або розбиття"
      ],
      [
        "Grounding of metal-case sockets",
        "Заземлення патронів у металевому корпусі"
      ],
      [
        "Leaving exposed bulbs wherever workers can reach them",
        "Відкриті лампи в межах досяжності працівників"
      ],
      [
        "Using ungrounded metal-case sockets because installation is temporary",
        "Незаземлені металеві патрони через тимчасовість монтажу"
      ],
      [
        "Relying only on a warning sign instead of lamp protection",
        "Лише попереджувальний знак замість захисту ламп"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "General-illumination lamps must be protected from accidental contact or breakage, and metal-case sockets must be grounded.",
    "explanationUk": "Лампи загального освітлення захищають від випадкового дотику чи розбиття, а патрони в металевому корпусі заземлюють."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(F)",
    "difficulty": "medium",
    "question": "When may a temporary light be suspended by its electric cord under paragraph (F)?",
    "questionUk": "Коли за пунктом (F) тимчасовий світильник можна підвішувати за електричний шнур?",
    "answers": [
      [
        "Only when the cord and light are designed for that suspension method",
        "Лише якщо шнур і світильник спроєктовані для такого підвішування"
      ],
      [
        "Whenever the cord jacket looks thick",
        "Якщо оболонка шнура виглядає товстою"
      ],
      [
        "Whenever the light weighs less than 10 pounds",
        "Якщо світильник важить менше 10 фунтів"
      ],
      [
        "Whenever a knot is tied in the cord",
        "Якщо на шнурі зав’язано вузол"
      ],
      [
        "For any light used indoors",
        "Для будь-якого світильника всередині приміщення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Cord suspension is prohibited unless both the cord and the light are designed for that means of suspension.",
    "explanationUk": "Підвішування за шнур заборонене, якщо і шнур, і світильник не розраховані на такий спосіб."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(G)",
    "difficulty": "exam",
    "question": "Portable electric lighting is needed inside a wet conductive tank. Which arrangement is expressly permitted by paragraph (G)?",
    "questionUk": "Усередині мокрого електропровідного бака потрібне переносне електричне освітлення. Який варіант прямо дозволяє пункт (G)?",
    "answers": [
      [
        "120-volt lighting protected by a ground-fault circuit interrupter",
        "Освітлення 120 вольт із захистом GFCI"
      ],
      [
        "Unprotected 120-volt lighting because use is brief",
        "Освітлення 120 вольт без захисту через коротке використання"
      ],
      [
        "Unprotected 24-volt lighting merely because voltage is below 50",
        "Освітлення 24 вольти без захисту лише тому, що напруга нижча за 50"
      ],
      [
        "Any voltage if workers wear dry gloves",
        "Будь-яка напруга в сухих рукавичках"
      ],
      [
        "Any voltage if the metal tank is painted",
        "Будь-яка напруга, якщо металевий бак пофарбований"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The normal limit in wet or conductive locations is 12 volts or less; the express exception permits 120-volt lights with GFCI protection.",
    "explanationUk": "Загальна межа у мокрих або електропровідних місцях — 12 вольт або менше; прямий виняток дозволяє світильники 120 вольт із GFCI."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(H)",
    "difficulty": "easy",
    "question": "A change is made in a temporary metal-clad cable system. What item does paragraph (H) require at the change?",
    "questionUk": "У тимчасовій системі кабелю з металевою оболонкою змінюють з’єднання системи. Який елемент у місці зміни вимагає пункт (H)?",
    "answers": [
      [
        "A box",
        "Електричну коробку"
      ],
      [
        "Only loose electrical tape",
        "Лише вільно намотану ізоляційну стрічку"
      ],
      [
        "Only a warning ribbon",
        "Лише попереджувальну стрічку"
      ],
      [
        "A wood wedge",
        "Дерев’яний клин"
      ],
      [
        "No enclosure because wiring is temporary",
        "Оболонка не потрібна через тимчасовість проводки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A box is required wherever a change is made to a raceway system or a metal-clad or metal-sheathed cable system.",
    "explanationUk": "Коробка потрібна в кожному місці зміни системи кабельних каналів або кабелю з металевим покриттям чи оболонкою."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(I)",
    "difficulty": "medium",
    "question": "May a flexible cord for temporary wiring pass through a doorway or another pinch point?",
    "questionUk": "Чи може гнучкий шнур тимчасової проводки проходити через дверний проріз або інше місце защемлення?",
    "answers": [
      [
        "Yes, if protection is provided to prevent damage",
        "Так, якщо забезпечено захист від пошкодження"
      ],
      [
        "Yes, without protection if the door is used infrequently",
        "Так, без захисту за рідкого використання дверей"
      ],
      [
        "No, even with protective measures allowed by this paragraph",
        "Ні, навіть із дозволеним цим пунктом захистом"
      ],
      [
        "Yes, if the cord is hidden under a mat regardless of protection",
        "Так, якщо сховати під килимком незалежно від захисту"
      ],
      [
        "Only if the grounding conductor is removed",
        "Лише після видалення заземлювального провідника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The temporary-wiring paragraph permits passage through doorways or other pinch points if protection prevents damage; sharp corners and projections must be avoided.",
    "explanationUk": "Пункт про тимчасову проводку дозволяє прохід через двері чи місця защемлення за захисту від пошкодження; гострих кутів і виступів уникають."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(ii)(J)",
    "difficulty": "medium",
    "question": "Which extension-cord set meets the specified construction for temporary use with portable electric tools?",
    "questionUk": "Яка конструкція подовжувача відповідає зазначеним вимогам тимчасового використання з переносним електроінструментом?",
    "answers": [
      [
        "Three-wire type designed for hard or extra-hard usage",
        "Трипровідний тип для важких або особливо важких умов експлуатації"
      ],
      [
        "Two-wire household cord regardless of service rating",
        "Двопровідний побутовий шнур незалежно від класу"
      ],
      [
        "Any decorative lamp cord with a matching plug",
        "Будь-який декоративний шнур лампи з відповідною вилкою"
      ],
      [
        "A cord with the grounding wire deliberately removed",
        "Шнур із навмисно видаленим захисним провідником"
      ],
      [
        "Any two-wire cord if shorter than 6 feet",
        "Будь-який двопровідний шнур до 6 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Tool and appliance extension-cord sets must be three-wire and designed for hard or extra-hard usage.",
    "explanationUk": "Подовжувачі для переносних інструментів і приладів мають бути трипровідними та розрахованими на важкі або особливо важкі умови."
  },
  {
    "section": "29 CFR 1926.405(a)(2)(iii)",
    "difficulty": "medium",
    "question": "Temporary wiring operates at a nominal 720 volts. What access protection is required?",
    "questionUk": "Тимчасова проводка працює за номінальної напруги 720 вольт. Який захист доступу потрібен?",
    "answers": [
      [
        "Fencing, barriers or other effective means limiting access to authorized and qualified personnel",
        "Огорожа, бар’єри або інші дієві засоби доступу лише для уповноваженого кваліфікованого персоналу"
      ],
      [
        "A price tag on each conductor",
        "Цінник на кожному провіднику"
      ],
      [
        "Only a note in the job estimate",
        "Лише примітка в кошторисі"
      ],
      [
        "No access protection below 1,000 volts",
        "Захист не потрібен до 1 000 вольт"
      ],
      [
        "Open access for anyone wearing a hard hat",
        "Вільний доступ для кожного в касці"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Temporary wiring over 600 volts nominal must be guarded to prevent access by anyone other than authorized and qualified personnel.",
    "explanationUk": "Тимчасову проводку понад 600 вольт номінально огороджують так, щоб доступ мав лише уповноважений кваліфікований персонал."
  }
];

export const intakeVerified101 = verifiedBatch(1197, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926.405", "osha", "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XVII/part-1926/subpart-K/subject-group-ECFR224f679a3b57f3e/section-1926.405", seeds, "intake-series-97-102", false, "2026-10-22");

