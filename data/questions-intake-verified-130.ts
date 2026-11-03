import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R603.2.6.1(2)",
    "question": "Where across a cold-formed steel wall member's web may an ordinary prescriptive service hole be located?",
    "questionUk": "Де поперек стінки холодногнутого сталевого стінового профілю може розташовуватися звичайний приписовий отвір комунікацій?",
    "answers": [
      [
        "Along the web centerline",
        "Уздовж центральної осі стінки"
      ],
      [
        "Against either flange",
        "Впритул до будь-якої полиці"
      ],
      [
        "Through the lip only",
        "Лише через відгин"
      ],
      [
        "Anywhere across the web without restriction",
        "Будь-де поперек стінки без обмежень"
      ],
      [
        "Only through both flanges",
        "Лише через обидві полиці"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R603.2.6.1 permits holes only along the web centerline; the other size and spacing conditions also apply.",
    "explanationUk": "R603.2.6.1 дозволяє отвори лише вздовж осі стінки; також діють умови розміру й кроку."
  },
  {
    "section": "R603.2.6.1(3)",
    "question": "What minimum center-to-center spacing applies to ordinary web holes in steel wall studs?",
    "questionUk": "Який мінімальний крок осей звичайних отворів у стінках сталевих стійок?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "16 inches",
        "16 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The minimum center-to-center hole spacing is 24 inches.",
    "explanationUk": "Мінімальний крок між осями отворів становить 24 дюйми."
  },
  {
    "section": "R603.2.6.1(5)",
    "question": "Without invoking reinforcement, patching or engineering, what maximum web-hole length applies to steel wall members?",
    "questionUk": "Яка максимальна довжина отвору в стінці сталевого стінового профілю без підсилення, латки чи інженерного проєкту?",
    "answers": [
      [
        "4-1/2 inches",
        "4-1/2 дюйма"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "10 inches",
        "10 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The ordinary hole-length limit is 4-1/2 inches; exceeding it requires a separately permitted remedy.",
    "explanationUk": "Звичайна межа довжини отвору — 4-1/2 дюйма; перевищення потребує окремо дозволеного рішення."
  },
  {
    "section": "R603.2.6.1(6)",
    "question": "From the edge of a bearing surface to the nearest edge of an ordinary steel wall web hole, what minimum clearance is required?",
    "questionUk": "Який мінімальний просвіт потрібен від краю опорної поверхні до найближчого краю звичайного отвору в стінці сталевого стінового профілю?",
    "answers": [
      [
        "10 inches",
        "10 дюймів"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "This is an edge-to-edge clearance of at least 10 inches, not a measurement to the hole center.",
    "explanationUk": "Це відстань від краю до краю щонайменше 10 дюймів, а не вимір до центра отвору."
  },
  {
    "section": "R603.2.6.2",
    "question": "A gable-endwall stud has a 10-foot span. Its oversized hole will use the prescribed reinforcing method. In what central span length must the entire hole lie?",
    "questionUk": "Фронтонна стійка має проліт 10 футів. Завеликий отвір планують підсилити приписовим методом. У якій центральній довжині прольоту має повністю міститися отвір?",
    "answers": [
      [
        "The central 4 feet",
        "У центральних 4 футах"
      ],
      [
        "The central 2 feet",
        "У центральних 2 футах"
      ],
      [
        "The central 5 feet",
        "У центральних 5 футах"
      ],
      [
        "The central 6 feet",
        "У центральних 6 футах"
      ],
      [
        "The entire 10 feet",
        "У всіх 10 футах"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The entire hole must lie within the center 40 percent: 10 × 0.40 = 4 feet. Other reinforcing limits remain applicable.",
    "explanationUk": "Весь отвір має лежати в центральних 40%: 10 × 0,40 = 4 фути. Інші межі підсилення також чинні."
  },
  {
    "section": "R603.2.6.2",
    "question": "A gable-endwall stud web has a flat width of 6 inches. For the specified reinforcing method, what maximum applies to both hole depth and hole length?",
    "questionUk": "Плоска ширина стінки фронтонної стійки — 6 дюймів. Який максимум діє і для глибини, і для довжини отвору за заданим методом підсилення?",
    "answers": [
      [
        "3.9 inches",
        "3,9 дюйма"
      ],
      [
        "3.0 inches",
        "3,0 дюйма"
      ],
      [
        "4.2 inches",
        "4,2 дюйма"
      ],
      [
        "4.5 inches",
        "4,5 дюйма"
      ],
      [
        "6.0 inches",
        "6,0 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Both dimensions may not exceed 65 percent of flat web width: 6 × 0.65 = 3.9 inches.",
    "explanationUk": "Обидва розміри не можуть перевищувати 65% плоскої ширини стінки: 6 × 0,65 = 3,9 дюйма."
  },
  {
    "section": "R603.2.6.2",
    "question": "A gable-endwall hole reinforcement plate is proposed thinner than its receiving member. Does R603.2.6.2 permit that thickness reduction?",
    "questionUk": "Лист підсилення отвору фронтонної стійки пропонують тоншим за основний профіль. Чи дозволяє R603.2.6.2 таке зменшення?",
    "answers": [
      [
        "No; reinforcing steel must have the same thickness as the receiving member",
        "Ні; сталь підсилення повинна мати ту саму товщину, що й основний профіль"
      ],
      [
        "Yes; half thickness is sufficient",
        "Так; достатньо половини товщини"
      ],
      [
        "Yes; any thickness is acceptable",
        "Так; будь-яка товщина прийнятна"
      ],
      [
        "Yes; if the plate is painted",
        "Так; якщо лист пофарбовано"
      ],
      [
        "Yes; if only one screw is used",
        "Так; якщо є лише один шуруп"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The gable-endwall reinforcing method specifies the same steel thickness as the receiving member.",
    "explanationUk": "Метод підсилення фронтонної стійки задає ту саму товщину сталі, що й основний профіль."
  },
  {
    "section": "R603.2.6.2",
    "question": "How far must the reinforcing steel extend beyond every edge of a reinforced gable-endwall stud hole?",
    "questionUk": "Наскільки сталь підсилення має виступати за кожен край отвору фронтонної стійки?",
    "answers": [
      [
        "At least 1 inch",
        "Щонайменше 1 дюйм"
      ],
      [
        "At least 1/8 inch",
        "Щонайменше 1/8 дюйма"
      ],
      [
        "At least 1/4 inch",
        "Щонайменше 1/4 дюйма"
      ],
      [
        "At least 3/8 inch",
        "Щонайменше 3/8 дюйма"
      ],
      [
        "At least 1/2 inch",
        "Щонайменше 1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R603.2.6.2 requires at least a 1-inch extension beyond all hole edges.",
    "explanationUk": "R603.2.6.2 вимагає виступ щонайменше 1 дюйм за всі краї отвору."
  },
  {
    "section": "R603.2.6.2",
    "question": "Which screw detail is specified for attaching a gable-endwall hole reinforcement to the receiving web?",
    "questionUk": "Який вузол шурупів задано для кріплення підсилення отвору фронтонної стійки до основної стінки?",
    "answers": [
      [
        "No. 8 screws, at most 1 inch on center, at least 1/2 inch from edges",
        "Шурупи No. 8, крок максимум 1 дюйм, від краю мінімум 1/2 дюйма"
      ],
      [
        "No. 6 screws at 6 inches on center",
        "Шурупи No. 6 через 6 дюймів"
      ],
      [
        "No. 8 screws only at two corners",
        "Шурупи No. 8 лише у двох кутах"
      ],
      [
        "Finish nails at 12 inches on center",
        "Оздоблювальні цвяхи через 12 дюймів"
      ],
      [
        "No. 4 screws at 4 inches on center",
        "Шурупи No. 4 через 4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The reinforcing edge attachment uses No. 8 screws with maximum 1-inch spacing and minimum 1/2-inch edge distance.",
    "explanationUk": "Кріплення підсилення вздовж країв виконують No. 8 із кроком не більше 1 дюйма та відстанню від краю не менше 1/2 дюйма."
  },
  {
    "section": "R603.2.6.3(1.1)",
    "question": "A steel wall member has a 5-inch flat web width and a hole 3.6 inches deep across the web. May ordinary prescriptive patching be used without replacement or engineering?",
    "questionUk": "Сталевий стіновий профіль має плоску ширину стінки 5 дюймів та отвір глибиною 3,6 дюйма поперек неї. Чи можна застосувати звичайну приписову латку без заміни чи інженерного проєкту?",
    "answers": [
      [
        "No; the hole exceeds 70 percent of flat web width",
        "Ні; отвір перевищує 70% плоскої ширини стінки"
      ],
      [
        "Yes; any hole below 4 inches qualifies",
        "Так; будь-який отвір менше 4 дюймів підходить"
      ],
      [
        "Yes; only hole length matters",
        "Так; важлива лише довжина"
      ],
      [
        "Yes; two paint coats restore capacity",
        "Так; два шари фарби відновлюють несучу здатність"
      ],
      [
        "Yes; all holes are patchable",
        "Так; будь-який отвір можна залатати"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Seventy percent of 5 inches is 3.5 inches. A 3.6-inch depth exceeds that patching limit and requires replacement or accepted engineering design.",
    "explanationUk": "70% від 5 дюймів — 3,5 дюйма. Глибина 3,6 перевищує межу приписової латки та потребує заміни чи прийнятного інженерного проєкту."
  },
  {
    "section": "R603.2.6.3(1.2)",
    "question": "For a steel wall member with a 12-inch web depth, what hole-length threshold is used before replacement or engineering is required by the patching provision?",
    "questionUk": "Для сталевого стінового профілю з висотою стінки 12 дюймів яку межу довжини отвору використовує правило латки перед вимогою заміни чи інженерного проєкту?",
    "answers": [
      [
        "12 inches, the greater of 10 inches and web depth",
        "12 дюймів — більше з 10 дюймів та висоти стінки"
      ],
      [
        "10 inches in every member",
        "10 дюймів для будь-якого профілю"
      ],
      [
        "6 inches, half the web depth",
        "6 дюймів — половину висоти"
      ],
      [
        "8 inches in every member",
        "8 дюймів для будь-якого профілю"
      ],
      [
        "24 inches, twice the web depth",
        "24 дюйми — подвійну висоту"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The length threshold is the greater of 10 inches and web depth. Other dimensional and patch-detail requirements still apply.",
    "explanationUk": "Межа довжини — більше з 10 дюймів та висоти стінки. Інші обмеження розмірів і вузла латки також діють."
  },
  {
    "section": "R603.2.6.3(2)",
    "question": "Select THREE permitted steel forms for a solid patch over a qualifying oversized wall-member web hole.",
    "questionUk": "Оберіть ТРИ дозволені сталеві форми суцільної латки придатного завеликого отвору стінового профілю.",
    "answers": [
      [
        "Solid steel plate",
        "Суцільний сталевий лист"
      ],
      [
        "Stud section",
        "Відрізок стійкового профілю"
      ],
      [
        "Track section",
        "Відрізок напрямного профілю"
      ],
      [
        "Gypsum board strip",
        "Смуга гіпсокартону"
      ],
      [
        "Plywood shim alone",
        "Лише фанерна прокладка"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "difficulty": "medium",
    "explanation": "The permitted solid patches are steel plate, stud section or track section, with required thickness, overlap and screws.",
    "explanationUk": "Дозволені суцільні латки — сталевий лист, відрізок стійки чи напрямної з потрібними товщиною, перекриттям і шурупами."
  }
];
export const intakeVerified130 = verifiedBatch(1545, "Carpentry", "Drilling / Notching", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-127-132", true, "2026-11-02");
