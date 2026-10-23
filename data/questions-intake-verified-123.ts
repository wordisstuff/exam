import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R804.1.1",
    "difficulty": "medium",
    "question": "Which roof-slope range is within the applicability limits of the prescriptive cold-formed steel roof framing section?",
    "questionUk": "Який діапазон ухилів даху входить до меж застосування приписового розділу холодногнутого сталевого каркаса даху?",
    "answers": [
      [
        "3:12 through 12:12, inclusive",
        "Від 3:12 до 12:12 включно"
      ],
      [
        "1:12 through 12:12, inclusive",
        "Від 1:12 до 12:12 включно"
      ],
      [
        "2:12 through 16:12, inclusive",
        "Від 2:12 до 16:12 включно"
      ],
      [
        "Any slope below 3:12",
        "Будь-який ухил нижче 3:12"
      ],
      [
        "Only slopes steeper than 12:12",
        "Лише ухили крутіші за 12:12"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.1.1 limits slopes to at least 3:12 and no greater than 12:12. Other building-size, story, wind and snow limits must also be satisfied.",
    "explanationUk": "R804.1.1 обмежує ухил мінімумом 3:12 і максимумом 12:12. Також мають виконуватися межі розмірів будівлі, поверховості, вітру й снігу."
  },
  {
    "section": "R804.3",
    "difficulty": "easy",
    "question": "What pair of framing elements must a roof system constructed under R804.3 contain?",
    "questionUk": "Яку пару елементів повинен містити каркас даху, виконаний за R804.3?",
    "answers": [
      [
        "Both ceiling joists and rafters",
        "І балки перекриття стелі, і крокви"
      ],
      [
        "Rafters only, with no ceiling ties",
        "Лише крокви без стельових затяжок"
      ],
      [
        "Ceiling joists only, with no rafters",
        "Лише балки стелі без крокв"
      ],
      [
        "Only purlins and finish battens",
        "Лише прогони й оздоблювальні рейки"
      ],
      [
        "Only roof sheathing and fascia",
        "Лише обшивку даху та лобову дошку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3 specifies a cold-formed steel system consisting of both ceiling joists and rafters, assembled to its figure and fastening table. It does not describe an unrestricted rafter-only system.",
    "explanationUk": "R804.3 визначає сталеву систему і з балок стелі, і з крокв за відповідними схемою та таблицею кріплень. Це не необмежена система лише з крокв."
  },
  {
    "section": "R804.3.1.1",
    "difficulty": "exam",
    "question": "Sheathing is attached to the top flange of steel ceiling joists. Which bracing classification must be used when selecting values from Tables R804.3.1.1(1) and (2)?",
    "questionUk": "До верхньої полиці сталевих балок стелі прикріплено обшивку. Яку категорію розкріплення слід застосувати у таблицях R804.3.1.1(1) і (2)?",
    "answers": [
      [
        "Third-point values",
        "Значення для розкріплення в третинах"
      ],
      [
        "Unbraced values only",
        "Лише значення без розкріплення"
      ],
      [
        "Midspan values only",
        "Лише значення розкріплення посередині"
      ],
      [
        "An average of unbraced and midspan values",
        "Середнє між значеннями без розкріплення та посередині"
      ],
      [
        "No table values may be used",
        "Жодні табличні значення не дозволені"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.1.1 directs use of third-point values when sheathing is attached to the top flange or bracing is closer than third points. It does not create an extra table category for continuous sheathing.",
    "explanationUk": "R804.3.1.1 вимагає значення для третин, коли верхню полицю обшито або розкріплення частіше за третини. Окремої табличної категорії суцільної обшивки не створено."
  },
  {
    "section": "R804.3.1.1",
    "difficulty": "easy",
    "question": "What minimum bearing support length is required for cold-formed steel ceiling joists under R804.3.1.1?",
    "questionUk": "Яка мінімальна довжина опирання холодногнутих сталевих балок стелі за R804.3.1.1?",
    "answers": [
      [
        "1-1/2 inches",
        "1-1/2 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "3/4 inch",
        "3/4 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "1-1/4 inches",
        "1-1/4 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.1.1 requires a bearing support length of at least 1-1/2 inches. Joist-to-rafter heel connections are separately specified.",
    "explanationUk": "R804.3.1.1 вимагає довжину опирання щонайменше 1-1/2 дюйма. З’єднання балки стелі з кроквою в опорному вузлі задається окремо."
  },
  {
    "section": "R804.3.1.1",
    "difficulty": "medium",
    "question": "A continuous steel ceiling joist crosses an interior bearing support. How far from the joist's midspan may that support be located under R804.3.1.1?",
    "questionUk": "Нерозрізна сталева балка стелі проходить над внутрішньою опорою. Наскільки від середини балки можна змістити цю опору за R804.3.1.1?",
    "answers": [
      [
        "Within 24 inches of midspan",
        "У межах 24 дюймів від середини"
      ],
      [
        "Within 48 inches of midspan",
        "У межах 48 дюймів від середини"
      ],
      [
        "Within 72 inches of midspan",
        "У межах 72 дюймів від середини"
      ],
      [
        "Anywhere if the joist is continuous",
        "Будь-де, якщо балка нерозрізна"
      ],
      [
        "Only at an exterior wall",
        "Лише на зовнішній стіні"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The interior support must lie within 24 inches of midspan, and each individual span must remain within its applicable table limit. Continuity does not waive span checks.",
    "explanationUk": "Внутрішня опора має бути в межах 24 дюймів від середини, а кожен окремий проліт — у межах своєї таблиці. Нерозрізність не скасовує перевірки прольотів."
  },
  {
    "section": "R804.3.1.4",
    "difficulty": "medium",
    "question": "Where must a permitted steel ceiling-joist splice be supported under R804.3.1.4?",
    "questionUk": "Де має спиратися дозволений стик сталевої балки стелі за R804.3.1.4?",
    "answers": [
      [
        "At an interior bearing point",
        "На внутрішній несучій опорі"
      ],
      [
        "At any unsupported midspan location",
        "Будь-де посередині прольоту без опори"
      ],
      [
        "Only on gypsum board",
        "Лише на гіпсокартоні"
      ],
      [
        "Only on a roof sheathing joint",
        "Лише на стику обшивки даху"
      ],
      [
        "At any location if covered by insulation",
        "Будь-де, якщо стик закритий утеплювачем"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.1.4 permits ceiling-joist splices supported at interior bearing points and constructed to its figure. Screw counts on each side must match the specified heel-joint requirement.",
    "explanationUk": "R804.3.1.4 дозволяє стики балок стелі на внутрішніх несучих опорах за відповідною схемою. Кількість шурупів з кожного боку має відповідати заданій вимозі опорного з’єднання."
  },
  {
    "section": "R804.3.2.3",
    "difficulty": "medium",
    "question": "A roofer proposes splicing two cold-formed steel rafter pieces under the prescriptive R804 provisions. What does R804.3.2.3 state?",
    "questionUk": "Покрівельник пропонує з’єднати два відрізки холодногнутої сталевої крокви за приписовими правилами R804. Що визначає R804.3.2.3?",
    "answers": [
      [
        "Roof rafters shall not be spliced",
        "Крокви даху не можна стикувати"
      ],
      [
        "Any splice is permitted with ceiling-joist screw counts",
        "Будь-який стик дозволено з кількістю шурупів балок стелі"
      ],
      [
        "Splices are permitted only at rafter midspan",
        "Стики дозволені лише посередині крокви"
      ],
      [
        "A track splice automatically qualifies as a rafter splice",
        "Стик напрямної автоматично підходить для крокви"
      ],
      [
        "Splices need no restrictions below a 6:12 slope",
        "Нижче ухилу 6:12 стики не обмежені"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.2.3 expressly prohibits roof-rafter splices. The ceiling-joist splice provision cannot be transferred to rafters.",
    "explanationUk": "R804.3.2.3 прямо забороняє стики крокв даху. Правило стиків балок стелі не можна переносити на крокви."
  },
  {
    "section": "R804.3.2.4",
    "difficulty": "medium",
    "question": "At the ridge, how must the steel ridge member's depth relate to the sloped roof-rafter cut?",
    "questionUk": "Як висота сталевого коникового елемента має співвідноситися з похилим зрізом крокви?",
    "answers": [
      [
        "Extend the full depth of the sloped rafter cut",
        "Охоплювати повну висоту похилого зрізу крокви"
      ],
      [
        "Extend only half the depth of the cut",
        "Охоплювати лише половину висоти зрізу"
      ],
      [
        "Match only the rafter lip height",
        "Дорівнювати лише висоті відгину крокви"
      ],
      [
        "Stop above the bottom third of the cut",
        "Не доходити до нижньої третини зрізу"
      ],
      [
        "Depth is unrelated if sheathing covers the joint",
        "Висота неважлива, якщо стик закрито обшивкою"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.2.4 requires the ridge member to extend the full depth of the sloped rafter cut. It also specifies the built-up ridge section and clip-angle connections.",
    "explanationUk": "R804.3.2.4 вимагає кониковий елемент на повну висоту похилого зрізу крокви. Також задано складений переріз коника й кутникові з’єднання."
  },
  {
    "section": "R804.3.2.5",
    "difficulty": "medium",
    "question": "Measured parallel to the steel roof rafters, what maximum spacing applies to continuous bottom-flange bracing?",
    "questionUk": "Який найбільший крок безперервних ліній розкріплення нижніх полиць сталевих крокв, виміряний паралельно кроквам?",
    "answers": [
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
        "16 feet",
        "16 футів"
      ],
      [
        "20 feet",
        "20 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.2.5 limits spacing along the rafter run to 8 feet. The separate 12-foot blocking interval is measured perpendicular to rafters along the bracing.",
    "explanationUk": "R804.3.2.5 обмежує крок уздовж крокви 8 футами. Окремий крок блокування 12 футів вимірюють перпендикулярно кроквам уздовж розкріплення."
  },
  {
    "section": "R804.3.5",
    "difficulty": "easy",
    "question": "What maximum header-joist span is allowed when framing openings in steel roofs and ceilings under R804.3.5?",
    "questionUk": "Який найбільший проліт header joist дозволений при обрамленні отворів сталевих дахів і стель за R804.3.5?",
    "answers": [
      [
        "4 feet",
        "4 фути"
      ],
      [
        "5 feet",
        "5 футів"
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
    "explanation": "R804.3.5 limits header-joist spans to 4 feet. Header/trimmer member construction, clip angles and fastening also must follow the section.",
    "explanationUk": "R804.3.5 обмежує проліт header joist 4 футами. Конструкція поперечних і обрамлювальних елементів, кутники й кріплення також повинні відповідати розділу."
  },
  {
    "section": "R804.3.7.1",
    "difficulty": "exam",
    "question": "A building is exactly 36 feet wide. Its required gable-end ceiling diaphragm uses wood structural panels, and the full-height unbraced-stud exception does not apply. What minimum diaphragm length is specified?",
    "questionUk": "Будівля має ширину рівно 36 футів. Потрібна стельова діафрагма біля фронтону виконана з деревних конструкційних плит, а виняток повновисотних стійок без розкріплення не діє. Яка мінімальна довжина діафрагми задана?",
    "answers": [
      [
        "14 feet",
        "14 футів"
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
        "13 feet",
        "13 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For wood structural panel ceiling diaphragms, R804.3.7.1 requires at least 14 feet when building width is 36 feet or more. The 12-foot minimum applies below 36 feet.",
    "explanationUk": "Для стельових діафрагм із деревних конструкційних плит R804.3.7.1 вимагає щонайменше 14 футів за ширини будівлі від 36 футів. Мінімум 12 футів діє за ширини менше 36 футів."
  },
  {
    "section": "R804.3.7.2",
    "difficulty": "exam",
    "question": "A steel-framed roof has a 3:1 building plan aspect ratio and a 9:12 rafter slope. Do these values trigger the special rafter/ceiling-joist blocking detail in R804.3.7.2?",
    "questionUk": "Сталевий дах має співвідношення сторін плану 3:1 та ухил крокв 9:12. Чи запускають ці значення спеціальний вузол блокування крокв і балок стелі за R804.3.7.2?",
    "answers": [
      [
        "Yes; both stated thresholds are inclusive",
        "Так; обидві задані межі включні"
      ],
      [
        "No; both values must be strictly exceeded",
        "Ні; обидва значення треба строго перевищити"
      ],
      [
        "No; the trigger is 4:1 and 12:12",
        "Ні; пороги становлять 4:1 і 12:12"
      ],
      [
        "Only the building's number of windows matters",
        "Важлива лише кількість вікон будівлі"
      ],
      [
        "No; blocking applies only below 3:12",
        "Ні; блокування діє лише нижче 3:12"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R804.3.7.2 requires the figure's blocking where plan aspect ratio is 3:1 or larger and roof slope is 9:12 or larger. Exactly those values meet both triggers.",
    "explanationUk": "R804.3.7.2 вимагає блокування за схемою при співвідношенні плану від 3:1 та ухилі від 9:12. Рівно ці значення задовольняють обидві умови."
  }
];
export const intakeVerified123 = verifiedBatch(1461, "Carpentry", "Roof Framing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-121-126", true, "2026-10-22");
