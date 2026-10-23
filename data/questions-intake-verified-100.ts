import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";

const seeds: VerifiedSeed[] = [
  {
    "section": "R908.2",
    "difficulty": "medium",
    "question": "A reroofing plan checks only the weight of the completed roof and ignores pallets of material and equipment during installation. Which load check is missing?",
    "questionUk": "План перекриття даху враховує лише вагу готової покрівлі, але ігнорує піддони матеріалів і обладнання під час монтажу. Якої перевірки навантажень бракує?",
    "answers": [
      [
        "The structure must also support installation material and equipment loads",
        "Конструкція також має витримувати матеріали й обладнання під час монтажу"
      ],
      [
        "Only the color of the replacement roofing must be checked",
        "Потрібно перевірити лише колір нової покрівлі"
      ],
      [
        "Installation loads never count for reroofing",
        "Монтажні навантаження ніколи не враховують"
      ],
      [
        "Only snow-free days need a load check",
        "Перевірка потрібна лише в дні без снігу"
      ],
      [
        "Material loads may be ignored if stored for less than one day",
        "Матеріали можна ігнорувати за зберігання менше доби"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R908.2 requires capacity for the roofing system and the material and equipment loads encountered during installation.",
    "explanationUk": "R908.2 вимагає несучої здатності як для покрівельної системи, так і для матеріалів та обладнання під час її монтажу."
  },
  {
    "section": "R908.3",
    "difficulty": "easy",
    "question": "For a roof replacement rather than a roof recover, how far must existing roof-covering layers generally be removed?",
    "questionUk": "При заміні покрівлі, а не накритті новим шаром поверх старої, до якого рівня загалом знімають старі покриття?",
    "answers": [
      [
        "Down to the roof deck",
        "До настилу даху"
      ],
      [
        "Only the uppermost shingle course",
        "Лише верхній ряд ґонту"
      ],
      [
        "Only until the roof looks flat",
        "Лише до візуального вирівнювання"
      ],
      [
        "Down to the ceiling finish",
        "До оздоблення стелі"
      ],
      [
        "Only loose pieces need removal",
        "Знімають лише незакріплені шматки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Roof replacement generally includes removal of the existing covering layers down to the deck; the adhered ice-barrier exception is separate.",
    "explanationUk": "Заміна загалом передбачає зняття старих шарів до настилу; окремий виняток стосується приклеєного протиожеледного бар’єра."
  },
  {
    "section": "R908.3, Exception",
    "difficulty": "exam",
    "question": "During roof replacement, an existing ice-barrier membrane is adhered to the deck. Which treatment is expressly permitted by the exception?",
    "questionUk": "Під час заміни покрівлі виявлено протиожеледну мембрану, приклеєну до настилу. Який спосіб прямо дозволяє виняток?",
    "answers": [
      [
        "Leave it and cover it with an additional ice-barrier layer complying with R905",
        "Залишити й накрити додатковим шаром протиожеледного бар’єра за R905"
      ],
      [
        "Leave it exposed as the finished roof covering",
        "Залишити відкритою як готову покрівлю"
      ],
      [
        "Leave it with no additional barrier layer",
        "Залишити без додаткового шару бар’єра"
      ],
      [
        "Replace the entire roof deck solely because the membrane adheres",
        "Замінити весь настил лише через приклеювання мембрани"
      ],
      [
        "Cover it only with loose gravel",
        "Засипати лише незакріпленим гравієм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The adhered existing membrane may remain if covered with an additional ice-barrier layer in accordance with R905.",
    "explanationUk": "Приклеєну стару мембрану дозволено залишити, накривши додатковим шаром бар’єра відповідно до R905."
  },
  {
    "section": "R908.3.1.1, Item 1",
    "difficulty": "medium",
    "question": "A proposed roof recover would use a water-soaked covering that is no longer an adequate base. What does the recover limitation require?",
    "questionUk": "Новий шар пропонують укласти на намокле старе покриття, яке вже не є придатною основою. Що встановлює обмеження накриття?",
    "answers": [
      [
        "A roof recover is not permitted over that condition",
        "Накривати покрівлю за таких умов не дозволено"
      ],
      [
        "Recover is permitted if a darker shingle is used",
        "Дозволено за використання темнішого ґонту"
      ],
      [
        "Recover is permitted whenever only one layer exists",
        "Завжди дозволено за наявності лише одного старого шару"
      ],
      [
        "A second underlayment automatically cures the condition",
        "Другий підкладковий шар автоматично усуває проблему"
      ],
      [
        "Only the contractor's warranty determines eligibility",
        "Допустимість визначає лише гарантія підрядника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Water-soaked or sufficiently deteriorated roofing that is inadequate as a base is a prohibited recover condition.",
    "explanationUk": "Намокання або руйнування до стану непридатної основи є підставою заборонити накриття новим шаром."
  },
  {
    "section": "R908.3.1.1, Item 3",
    "difficulty": "medium",
    "question": "Inspection finds two existing applications of roof covering. Can a third application be installed as a roof recover under R908.3.1.1?",
    "questionUk": "Під час огляду виявлено два наявні шари покрівельного покриття. Чи дозволяє R908.3.1.1 додати третій як накриття?",
    "answers": [
      [
        "No; two or more existing applications prohibit recover",
        "Ні; два або більше наявних шарів забороняють накриття"
      ],
      [
        "Yes, if both old layers are dry",
        "Так, якщо обидва старі шари сухі"
      ],
      [
        "Yes, if the new layer weighs less",
        "Так, якщо новий шар легший"
      ],
      [
        "Yes, if the roof is smaller than 2,000 square feet",
        "Так, якщо площа даху менша за 2 000 кв. футів"
      ],
      [
        "Yes, but only on the north slope",
        "Так, але лише на північному схилі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The prohibition applies when the existing roof has two or more applications of any roof-covering type.",
    "explanationUk": "Заборона діє, коли дах уже має два або більше шарів покриття будь-якого типу."
  },
  {
    "section": "R908.3.1.1, Item 2",
    "difficulty": "exam",
    "question": "Which TWO existing roof coverings are specifically listed as conditions where roof recover is not permitted?",
    "questionUk": "Які ДВА наявні покрівельні покриття прямо внесено до переліку умов, за яких накриття новим шаром заборонено?",
    "answers": [
      [
        "Slate",
        "Сланець"
      ],
      [
        "Clay tile",
        "Глиняна черепиця"
      ],
      [
        "A single sound asphalt-shingle application solely because it is asphalt",
        "Один справний шар бітумного ґонту лише через його матеріал"
      ],
      [
        "Metal panels solely because they are metal",
        "Металеві панелі лише через те, що вони металеві"
      ],
      [
        "Sound wood shakes solely because they are wood",
        "Справна дерев’яна дранка лише через те, що вона дерев’яна"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Item 2 lists slate, clay, cement and asbestos-cement tile. Other systems still must satisfy all applicable recover provisions.",
    "explanationUk": "Пункт 2 називає сланець, глиняну, цементну та азбестоцементну черепицю. Інші системи все одно мають відповідати всім застосовним вимогам накриття."
  },
  {
    "section": "R908.3.1, Item 2",
    "difficulty": "medium",
    "question": "A complete separate standing-seam system is proposed without removing old roofing. Which load path is required by the separate-system provision?",
    "questionUk": "Пропонують окрему фальцеву покрівельну систему без зняття старої покрівлі. Який шлях передавання навантажень вимагає положення про окрему систему?",
    "answers": [
      [
        "Directly to the building structure, without relying on the existing roof or covering for support",
        "Безпосередньо на несучі конструкції будівлі без опори на старий дах чи покриття"
      ],
      [
        "Entirely through the old shingles",
        "Повністю через старий ґонт"
      ],
      [
        "Through loose insulation only",
        "Лише через незакріплений утеплювач"
      ],
      [
        "Only through old gutter hangers",
        "Лише через старі кронштейни ринв"
      ],
      [
        "No structural load path is required for metal roofing",
        "Для металевої покрівлі шлях навантажень не потрібен"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The separate system must transmit loads directly to the structural system and not rely on existing roofs or coverings for support.",
    "explanationUk": "Окрема система має передавати навантаження прямо на несучі конструкції, не покладаючись на старий дах або його покриття."
  },
  {
    "section": "R908.4",
    "difficulty": "medium",
    "question": "A new covering over wood shakes creates a combustible concealed space. What treatment is required for the existing surface?",
    "questionUk": "Нове покриття поверх дерев’яної дранки утворює прихований горючий простір. Як потрібно обробити стару поверхню?",
    "answers": [
      [
        "Cover the entire existing surface with securely fastened gypsum board, mineral fiber, glass fiber or another approved material",
        "Покрити всю стару поверхню надійно закріпленим гіпсокартоном, мінеральним чи скляним волокном або іншим схваленим матеріалом"
      ],
      [
        "Cover only the eaves with roofing felt",
        "Покрити руберойдом лише карниз"
      ],
      [
        "Leave the wood exposed if it is dry",
        "Залишити деревину відкритою, якщо вона суха"
      ],
      [
        "Apply paint only at penetrations",
        "Пофарбувати лише проходки"
      ],
      [
        "Remove all ceiling drywall instead",
        "Натомість зняти весь гіпсокартон стелі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where recover creates the specified combustible concealed space, R908.4 requires coverage of the entire existing surface with securely fastened listed or approved materials.",
    "explanationUk": "Якщо накриття утворює такий прихований горючий простір, R908.4 вимагає покриття всієї старої поверхні надійно закріпленими зазначеними або схваленими матеріалами."
  },
  {
    "section": "R908.5",
    "difficulty": "easy",
    "question": "A roofer sorts salvaged clay tiles for reinstallation. Which tile must be rejected under R908.5?",
    "questionUk": "Покрівельник сортує стару глиняну черепицю для повторного монтажу. Яку черепицю потрібно відбракувати за R908.5?",
    "answers": [
      [
        "A cracked tile",
        "Черепицю з тріщиною"
      ],
      [
        "An undamaged tile solely because it was previously installed",
        "Неушкоджену черепицю лише через попередній монтаж"
      ],
      [
        "An intact tile solely because it is clay",
        "Цілу черепицю лише через її глиняний матеріал"
      ],
      [
        "A sound tile solely because its color varies slightly",
        "Справну черепицю лише через невелику різницю кольору"
      ],
      [
        "Every existing tile regardless of condition",
        "Усю стару черепицю незалежно від стану"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Existing slate, clay and cement tiles may be reinstalled, but damaged, cracked or broken units may not.",
    "explanationUk": "Старий сланець, глиняну й цементну черепицю можна монтувати повторно, але пошкоджені, тріснуті чи зламані елементи — ні."
  },
  {
    "section": "R908.5",
    "difficulty": "medium",
    "question": "During reroofing, an existing metal outlet forming part of the roof assembly is found rusted and deteriorated. What is required?",
    "questionUk": "Під час перекриття даху наявний металевий випуск, що входить до покрівельної системи, виявився іржавим і зруйнованим. Що потрібно зробити?",
    "answers": [
      [
        "Replace it",
        "Замінити його"
      ],
      [
        "Reinstall it solely because it is original",
        "Встановити повторно лише тому, що він первісний"
      ],
      [
        "Hide it beneath an additional shingle",
        "Сховати під додатковим ґонтом"
      ],
      [
        "Reuse it if its exterior is painted",
        "Повторно використати після фарбування зовні"
      ],
      [
        "Leave it until the next roof replacement",
        "Залишити до наступної заміни покрівлі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Rusted, damaged or deteriorated existing flashings, edgings, outlets, vents and similar assembly devices must be replaced.",
    "explanationUk": "Іржаві, пошкоджені чи зруйновані фартухи, крайові елементи, випуски, вентиляційні й подібні елементи системи потрібно замінювати."
  },
  {
    "section": "R908.5",
    "difficulty": "easy",
    "question": "May aggregate surfacing removed from an existing roof be reinstalled under R908.5?",
    "questionUk": "Чи дозволяє R908.5 повторно укладати заповнювач захисної посипки, знятий зі старої покрівлі?",
    "answers": [
      [
        "No; aggregate surfacing materials may not be reinstalled",
        "Ні; матеріали захисної посипки повторно не укладають"
      ],
      [
        "Yes, if the aggregate is washed",
        "Так, якщо заповнювач промити"
      ],
      [
        "Yes, if mixed equally with new aggregate",
        "Так, якщо змішати порівну з новим"
      ],
      [
        "Yes, on roofs below 500 square feet",
        "Так, на дахах до 500 кв. футів"
      ],
      [
        "Yes, whenever the owner consents",
        "Так, за будь-якої згоди власника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R908.5 specifically prohibits reinstallation of aggregate surfacing materials.",
    "explanationUk": "R908.5 прямо забороняє повторне використання матеріалів захисної посипки."
  },
  {
    "section": "R908.6",
    "difficulty": "medium",
    "question": "Before adhering bituminous material to metal flashing during reroofing, what preparation does R908.6 require?",
    "questionUk": "Що вимагає R908.6 перед приклеюванням бітумного матеріалу до металевого фартуха під час перекриття даху?",
    "answers": [
      [
        "Prime the metal flashing before installation",
        "Заґрунтувати металевий фартух до монтажу"
      ],
      [
        "Wet the metal with plain water and leave it wet",
        "Змочити чистою водою й залишити мокрим"
      ],
      [
        "Dust the metal with soil",
        "Присипати метал ґрунтом"
      ],
      [
        "Apply no preparation if the metal is shiny",
        "Не готувати поверхню, якщо метал блищить"
      ],
      [
        "Cover the bonding surface with loose sand",
        "Покрити поверхню склеювання сипким піском"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Metal flashing receiving adhered bituminous material must be primed before installation; reconstructed flashing must follow approved manufacturer instructions.",
    "explanationUk": "Металевий фартух, до якого приклеюють бітумний матеріал, ґрунтують до монтажу; відновлені фартухи виконують за схваленою інструкцією виробника."
  }
];

export const intakeVerified100 = verifiedBatch(1185, "Roofing", "Roofing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-97-102", true, "2026-10-22");

