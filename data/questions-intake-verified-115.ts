import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R603.1.1",
    "difficulty": "medium",
    "question": "A cold-formed steel wall design otherwise meets R603.1.1. Which building exceeds that section's story limit?",
    "questionUk": "Проєкт стін зі сталевих холодногнутих профілів відповідає іншим умовам R603.1.1. Яка будівля перевищує межу поверховості?",
    "answers": [
      [
        "Four stories above grade plane",
        "Чотири поверхи над grade plane"
      ],
      [
        "Three stories above grade plane",
        "Три поверхи над grade plane"
      ],
      [
        "Two stories above grade plane",
        "Два поверхи над grade plane"
      ],
      [
        "One story above grade plane",
        "Один поверх над grade plane"
      ],
      [
        "Three stories above grade plane with no basement",
        "Три поверхи над grade plane без підвалу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.1.1 limits these prescriptive wall provisions to three stories above grade plane. Four stories exceed the limit even if the other applicability conditions are met.",
    "explanationUk": "R603.1.1 обмежує ці приписові правила трьома поверхами над grade plane. Чотири поверхи виходять за межу навіть за виконання інших умов."
  },
  {
    "section": "R603.1.1",
    "difficulty": "exam",
    "question": "At a site with Exposure B and a 60 psf ground snow load, the ultimate design wind speed is exactly 140 mph. Does the wind criterion permit use of R603 wall provisions?",
    "questionUk": "На ділянці Exposure B зі сніговим навантаженням ґрунту 60 psf гранична розрахункова швидкість вітру дорівнює рівно 140 mph. Чи дозволяє вітрова умова застосувати правила стін R603?",
    "answers": [
      [
        "No; the wind speed must be less than 140 mph",
        "Ні; швидкість має бути меншою за 140 mph"
      ],
      [
        "Yes; exactly 140 mph is included",
        "Так; рівно 140 mph входить у межу"
      ],
      [
        "Yes; Exposure B eliminates the wind limit",
        "Так; Exposure B скасовує обмеження вітру"
      ],
      [
        "Yes; snow below 70 psf eliminates the wind limit",
        "Так; сніг нижче 70 psf скасовує обмеження вітру"
      ],
      [
        "No; the section permits only Exposure D",
        "Ні; розділ дозволяє лише Exposure D"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.1.1 uses a strict less-than-140-mph wind criterion, together with Exposure B or C and ground snow load no greater than 70 psf. The boundary value 140 mph does not qualify.",
    "explanationUk": "R603.1.1 вимагає швидкості строго менше 140 mph разом з Exposure B або C та сніговим навантаженням не більше 70 psf. Значення 140 mph не відповідає умові."
  },
  {
    "section": "R603.1.2(1)",
    "difficulty": "medium",
    "question": "For in-line load-bearing cold-formed steel framing, what is the maximum permitted offset between horizontal-member and vertical-member centerlines?",
    "questionUk": "Яке найбільше зміщення осей горизонтального та вертикального елементів допускається для in-line несучого каркаса з холодногнутої сталі?",
    "answers": [
      [
        "3/4 inch",
        "3/4 дюйма"
      ],
      [
        "1/8 inch",
        "1/8 дюйма"
      ],
      [
        "1-1/2 inches",
        "1-1/2 дюйма"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.1.2(1) permits at most 3/4 inch between the member centerlines. The separate one-sided web-to-edge tolerance is a different measurement.",
    "explanationUk": "R603.1.2(1) допускає між осями не більше 3/4 дюйма. Окремий допуск між стінкою та краєм при однобічному розташуванні вимірюють інакше."
  },
  {
    "section": "R603.1.2(2)",
    "difficulty": "exam",
    "question": "The horizontal member and its bearing stiffener lie to one side of the steel stud centerline. What maximum distance is allowed between the horizontal-member web and the vertical-member edge?",
    "questionUk": "Горизонтальний елемент і його опорний підсилювач розташовані з одного боку осі сталевої стійки. Яка найбільша відстань допускається між стінкою горизонтального профілю та краєм вертикального?",
    "answers": [
      [
        "1/8 inch",
        "1/8 дюйма"
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
      ],
      [
        "2 inches",
        "2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The one-sided arrangement in R603.1.2(2) has a maximum web-to-edge tolerance of 1/8 inch. Applying the 3/4-inch centerline tolerance to this measurement would be incorrect.",
    "explanationUk": "Для однобічного розташування R603.1.2(2) встановлює допуск між стінкою та краєм 1/8 дюйма. Допуск 3/4 дюйма між осями до цього вимірювання не застосовують."
  },
  {
    "section": "R603.2.1",
    "difficulty": "easy",
    "question": "Which material specification does R603.2.1 identify for structural-quality sheet steel used in load-bearing cold-formed wall framing?",
    "questionUk": "Який стандарт R603.2.1 визначає для конструкційної листової сталі несучих холодногнутих стінових профілів?",
    "answers": [
      [
        "ASTM A1003, Structural Grades 33 Type H and 50 Type H",
        "Стандарт ASTM A1003, Structural Grades 33 Type H і 50 Type H"
      ],
      [
        "ASTM C150, Type I cement",
        "Стандарт ASTM C150, цемент Type I"
      ],
      [
        "ASTM C1396 gypsum board",
        "Стандарт ASTM C1396 для гіпсових плит"
      ],
      [
        "ASTM D226 roofing felt",
        "Стандарт ASTM D226 для покрівельного картону"
      ],
      [
        "ASTM C90 concrete masonry units",
        "Стандарт ASTM C90 для бетонних блоків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.2.1 specifies ASTM A1003 structural-quality sheet steel, Grades 33 Type H and 50 Type H. Product standards for gypsum, masonry or roofing do not establish this framing material requirement.",
    "explanationUk": "R603.2.1 визначає конструкційну листову сталь ASTM A1003, Grades 33 Type H та 50 Type H. Стандарти гіпсу, мурування чи покрівлі не задають вимог до цієї сталі."
  },
  {
    "section": "R603.2.2",
    "difficulty": "medium",
    "question": "Select TWO metallic-coating alternatives expressly permitted for load-bearing cold-formed steel walls, assuming ASTM A1003 compliance.",
    "questionUk": "Оберіть ДВА прямо дозволені варіанти металевого покриття несучих холодногнутих сталевих стін за умови відповідності ASTM A1003.",
    "answers": [
      [
        "At least G60 under ASTM A653",
        "Не менше G60 за ASTM A653"
      ],
      [
        "At least AZ50 under ASTM A792",
        "Не менше AZ50 за ASTM A792"
      ],
      [
        "Bare steel with no coating",
        "Сталь без покриття"
      ],
      [
        "G30 under ASTM A653",
        "Покриття G30 за ASTM A653"
      ],
      [
        "AZ30 under ASTM A792",
        "Покриття AZ30 за ASTM A792"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R603.2.2 allows a metallic coating meeting ASTM A1003 and either at least G60 under A653 or at least AZ50 under A792. The lower designations offered do not reach those minima.",
    "explanationUk": "R603.2.2 дозволяє металеве покриття за ASTM A1003 та щонайменше G60 за A653 або AZ50 за A792. Запропоновані нижчі позначення не досягають мінімуму."
  },
  {
    "section": "R603.2.3",
    "difficulty": "medium",
    "question": "Which C-shaped flange width lies within the R603.2.3 permitted range for load-bearing steel wall members?",
    "questionUk": "Яка ширина полиці C-профілю лежить у дозволеному R603.2.3 діапазоні для несучих сталевих стінових елементів?",
    "answers": [
      [
        "1-3/4 inches",
        "1-3/4 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "1-1/4 inches",
        "1-1/4 дюйма"
      ],
      [
        "1-1/2 inches",
        "1-1/2 дюйма"
      ],
      [
        "2-1/4 inches",
        "2-1/4 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The flange must be at least 1-5/8 inches and at most 2 inches wide. A 1-3/4-inch flange satisfies this dimensional range; the other choices fall outside it.",
    "explanationUk": "Полиця має бути завширшки від 1-5/8 до 2 дюймів. Ширина 1-3/4 дюйма входить у цей діапазон; інші варіанти виходять за його межі."
  },
  {
    "section": "R603.2.3",
    "difficulty": "easy",
    "question": "A C-shaped load-bearing steel wall member meets the flange requirements. What minimum lip dimension must it also have?",
    "questionUk": "C-профіль несучої сталевої стіни відповідає вимогам до полиць. Який мінімальний розмір відгину краю він також повинен мати?",
    "answers": [
      [
        "1/2 inch",
        "1/2 дюйма"
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
        "1/16 inch",
        "1/16 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.2.3 requires a C-shaped member lip of at least 1/2 inch. Meeting the flange-width requirement does not remove this separate lip requirement.",
    "explanationUk": "R603.2.3 вимагає відгин краю C-профілю не менше 1/2 дюйма. Виконання вимог до ширини полиці не скасовує цієї окремої вимоги."
  },
  {
    "section": "R603.2.3",
    "difficulty": "easy",
    "question": "Under R603.2.3, what is the minimum flange width for track sections in load-bearing cold-formed steel walls?",
    "questionUk": "Яка мінімальна ширина полиці напрямного track-профілю в несучих холодногнутих сталевих стінах за R603.2.3?",
    "answers": [
      [
        "1-1/4 inches",
        "1-1/4 дюйма"
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
        "1/4 inch",
        "1/4 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The minimum track flange width is 1-1/4 inches. This is distinct from the 1-5/8-inch minimum flange width for C-shaped members.",
    "explanationUk": "Мінімальна ширина полиці напрямного профілю становить 1-1/4 дюйма. Це окрема вимога від мінімуму 1-5/8 дюйма для C-профілів."
  },
  {
    "section": "R603.2.3",
    "difficulty": "exam",
    "question": "A steel wall detail specifies 54 mil members. Which minimum steel grade must be used under R603.2.3?",
    "questionUk": "У кресленні сталевої стіни задано елементи товщиною 54 mil. Яка мінімальна марка сталі потрібна за R603.2.3?",
    "answers": [
      [
        "Grade 50 ksi",
        "Марка 50 ksi"
      ],
      [
        "Grade 33 ksi",
        "Марка 33 ksi"
      ],
      [
        "Grade 25 ksi",
        "Марка 25 ksi"
      ],
      [
        "Grade 30 ksi",
        "Марка 30 ksi"
      ],
      [
        "Grade 40 ksi",
        "Марка 40 ksi"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.2.3 requires minimum Grade 50 ksi where 54 or 68 mil thicknesses are specified. Minimum Grade 33 ksi applies where 33 or 43 mil is specified.",
    "explanationUk": "R603.2.3 вимагає щонайменше Grade 50 ksi для заданої товщини 54 або 68 mil. Мінімум Grade 33 ksi стосується товщини 33 або 43 mil."
  },
  {
    "section": "R603.2.4",
    "difficulty": "medium",
    "question": "Select TWO items that must appear in the identification of a load-bearing cold-formed steel framing member.",
    "questionUk": "Оберіть ДВА реквізити, які мають входити до маркування несучого холодногнутого сталевого елемента.",
    "answers": [
      [
        "Minimum base steel thickness",
        "Мінімальна товщина основної сталі"
      ],
      [
        "Minimum yield strength",
        "Мінімальна границя текучості"
      ],
      [
        "Installer's hourly wage",
        "Погодинна оплата монтажника"
      ],
      [
        "Project's building-permit fee",
        "Вартість дозволу на будівництво"
      ],
      [
        "Date the interior paint will be applied",
        "Дата нанесення внутрішньої фарби"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R603.2.4 requires manufacturer identification, minimum base steel thickness, minimum coating designation and minimum yield strength. Of these choices, thickness and yield strength are mandatory identification data.",
    "explanationUk": "R603.2.4 вимагає дані виробника, мінімальну товщину сталі, позначення мінімального покриття та мінімальну границю текучості. Серед варіантів обов’язковими є товщина та границя текучості."
  },
  {
    "section": "R603.2.5",
    "difficulty": "medium",
    "question": "For a steel-to-steel wall framing screw connection under R603.2.5, what minimum applies to BOTH screw edge distance and center-to-center spacing?",
    "questionUk": "Який мінімум за R603.2.5 застосовується ОДНОЧАСНО до відстані шурупа від краю та кроку між осями шурупів у з’єднанні сталевих стінових профілів?",
    "answers": [
      [
        "1/2 inch",
        "1/2 дюйма"
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
        "1/16 inch",
        "1/16 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.2.5 sets both minimum edge distance and minimum screw center-to-center spacing at 1/2 inch for steel-to-steel connections. Other connection requirements still apply.",
    "explanationUk": "R603.2.5 задає мінімум 1/2 дюйма і для відстані від краю, і для кроку осей шурупів у з’єднанні сталі зі сталлю. Інші вимоги до кріплення також залишаються чинними."
  }
];
export const intakeVerified115 = verifiedBatch(1365, "Carpentry", "Framing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-115-120", true, "2026-10-22");
