import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Table R301.5",
    "difficulty": "medium",
    "question": "Which minimum uniformly distributed live-load pair applies to sleeping rooms and rooms other than sleeping rooms, respectively?",
    "questionUk": "Яка мінімальна пара рівномірно розподілених тимчасових навантажень діє відповідно для спальних та інших кімнат?",
    "answers": [
      [
        "30 psf and 40 psf",
        "30 і 40 фунтів/кв. фут"
      ],
      [
        "20 psf and 30 psf",
        "20 і 30 фунтів/кв. фут"
      ],
      [
        "40 psf and 30 psf",
        "40 і 30 фунтів/кв. фут"
      ],
      [
        "50 psf and 50 psf",
        "50 і 50 фунтів/кв. фут"
      ],
      [
        "10 psf and 20 psf",
        "10 і 20 фунтів/кв. фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Table R301.5 lists 30 psf for sleeping rooms and 40 psf for other rooms; these are live loads, not total loads.",
    "explanationUk": "Таблиця R301.5 дає 30 фунтів/кв. фут для спальних і 40 для інших кімнат; це тимчасові, а не повні навантаження."
  },
  {
    "section": "Table R301.5",
    "difficulty": "medium",
    "question": "For attics that qualify for the respective table categories, what minimum live loads distinguish uninhabitable attics without storage from those with limited storage?",
    "questionUk": "Які мінімальні тимчасові навантаження розрізняють непридатні для проживання горища без зберігання та з обмеженим зберіганням, якщо умови відповідних категорій виконано?",
    "answers": [
      [
        "10 psf without storage; 20 psf with limited storage",
        "10 фунтів/кв. фут без зберігання; 20 з обмеженим зберіганням"
      ],
      [
        "20 psf without storage; 10 psf with limited storage",
        "20 фунтів/кв. фут без зберігання; 10 з обмеженим зберіганням"
      ],
      [
        "30 psf for both",
        "30 фунтів/кв. фут для обох"
      ],
      [
        "40 psf for both",
        "40 фунтів/кв. фут для обох"
      ],
      [
        "No load for either category",
        "Для обох навантаження не потрібне"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table lists 10 and 20 psf respectively. Footnotes b and g define the attic categories and where loads apply.",
    "explanationUk": "Таблиця вказує відповідно 10 і 20 фунтів/кв. фут. Примітки b та g визначають категорії горищ і ділянки прикладання навантажень."
  },
  {
    "section": "Table R301.5",
    "difficulty": "easy",
    "question": "What minimum uniformly distributed live load is listed for habitable attics and attics served by fixed stairs?",
    "questionUk": "Яке мінімальне рівномірно розподілене тимчасове навантаження наведено для житлових горищ і горищ зі стаціонарними сходами?",
    "answers": [
      [
        "30 psf",
        "30 фунтів/кв. фут"
      ],
      [
        "10 psf",
        "10 фунтів/кв. фут"
      ],
      [
        "20 psf",
        "20 фунтів/кв. фут"
      ],
      [
        "40 psf",
        "40 фунтів/кв. фут"
      ],
      [
        "50 psf",
        "50 фунтів/кв. фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Habitable attics and attics served with fixed stairs are listed at 30 psf.",
    "explanationUk": "Для житлових горищ і горищ зі стаціонарними сходами наведено 30 фунтів/кв. фут."
  },
  {
    "section": "Table R301.5",
    "difficulty": "medium",
    "question": "What minimum uniformly distributed live load is listed for a passenger-vehicle garage, apart from the elevated-floor concentrated-load check?",
    "questionUk": "Яке мінімальне рівномірно розподілене тимчасове навантаження наведено для гаража легкових автомобілів, окремо від перевірки зосередженого навантаження піднятої підлоги?",
    "answers": [
      [
        "50 psf",
        "50 фунтів/кв. фут"
      ],
      [
        "20 psf",
        "20 фунтів/кв. фут"
      ],
      [
        "30 psf",
        "30 фунтів/кв. фут"
      ],
      [
        "40 psf",
        "40 фунтів/кв. фут"
      ],
      [
        "100 psf",
        "100 фунтів/кв. фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The garage row is 50 psf; footnote a adds a separate concentrated-load requirement for elevated garage floors.",
    "explanationUk": "Рядок гаражів указує 50 фунтів/кв. фут; примітка a додає окрему вимогу зосередженого навантаження для піднятих гаражних підлог."
  },
  {
    "section": "Table R301.5, Footnote a",
    "difficulty": "exam",
    "question": "Which concentrated-load check is specifically required for an elevated garage floor?",
    "questionUk": "Яку перевірку зосередженого навантаження прямо вимагають для піднятої підлоги гаража?",
    "answers": [
      [
        "2,000 pounds applied over 20 square inches",
        "2 000 фунтів на площі 20 кв. дюймів"
      ],
      [
        "200 pounds over 1 square foot",
        "200 фунтів на 1 кв. фут"
      ],
      [
        "300 pounds over 4 square inches",
        "300 фунтів на 4 кв. дюйми"
      ],
      [
        "50 pounds over 20 square feet",
        "50 фунтів на 20 кв. футів"
      ],
      [
        "1,000 pounds spread over the entire floor",
        "1 000 фунтів на всю підлогу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote a requires elevated garage floors to support a 2,000-pound load applied over 20 square inches.",
    "explanationUk": "Примітка a вимагає, щоб піднята підлога гаража витримувала 2 000 фунтів на площі 20 кв. дюймів."
  },
  {
    "section": "Table R301.5, Footnote c",
    "difficulty": "exam",
    "question": "In addition to the uniform-load check, what concentrated-load alternative must be considered for an individual stair tread, using whichever produces greater stresses?",
    "questionUk": "Яку альтернативу зосередженого навантаження перевіряють для окремої сходинки разом із рівномірним навантаженням, обираючи більші напруження?",
    "answers": [
      [
        "300 pounds over 4 square inches",
        "300 фунтів на 4 кв. дюйми"
      ],
      [
        "200 pounds over 20 square inches",
        "200 фунтів на 20 кв. дюймів"
      ],
      [
        "50 pounds over 1 square foot",
        "50 фунтів на 1 кв. фут"
      ],
      [
        "30 pounds over the entire stair",
        "30 фунтів на всі сходи"
      ],
      [
        "2,000 pounds over 20 square feet",
        "2 000 фунтів на 20 кв. футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "An individual tread is designed for the uniform load or 300 pounds over 4 square inches, whichever produces greater stresses.",
    "explanationUk": "Окрему сходинку розраховують на рівномірне навантаження або 300 фунтів на 4 кв. дюйми — залежно від більших напружень."
  },
  {
    "section": "Table R301.5, Footnote d",
    "difficulty": "medium",
    "question": "How is the table's 200-pound guard and handrail load applied?",
    "questionUk": "Як прикладають наведене в таблиці навантаження 200 фунтів для огорож і поручнів?",
    "answers": [
      [
        "As a single concentrated load in any direction at any point along the top",
        "Як одне зосереджене навантаження в будь-якому напрямку в будь-якій точці верху"
      ],
      [
        "Only vertically downward at the bottom",
        "Лише вертикально вниз у нижній точці"
      ],
      [
        "As 200 psf uniformly over the entire wall",
        "Як рівномірні 200 фунтів/кв. фут на всю стіну"
      ],
      [
        "Only at the midpoint of every baluster",
        "Лише посередині кожної балясини"
      ],
      [
        "Only simultaneously with every other live load",
        "Лише одночасно з усіма іншими навантаженнями"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote d specifies a single 200-pound concentrated load at any point along the top and in any direction.",
    "explanationUk": "Примітка d визначає одне зосереджене навантаження 200 фунтів у будь-якій точці верху та будь-якому напрямку."
  },
  {
    "section": "Table R301.5, Footnote f",
    "difficulty": "medium",
    "question": "What load-and-area pair is prescribed for guard infill components such as balusters and panel fillers?",
    "questionUk": "Яка пара навантаження та площі передбачена для заповнення огорожі, зокрема балясин і панелей?",
    "answers": [
      [
        "50 pounds horizontally normal to a 1-square-foot area",
        "50 фунтів горизонтально перпендикулярно площі 1 кв. фут"
      ],
      [
        "200 psf over the whole floor",
        "200 фунтів/кв. фут на всю підлогу"
      ],
      [
        "300 pounds over 4 square inches at each tread",
        "300 фунтів на 4 кв. дюйми кожної сходинки"
      ],
      [
        "2,000 pounds over 20 square inches",
        "2 000 фунтів на 20 кв. дюймів"
      ],
      [
        "10 pounds vertically over the entire guard",
        "10 фунтів вертикально на всю огорожу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Infill must withstand a 50-pound horizontally applied normal load on 1 square foot; it need not act concurrently with other live loads.",
    "explanationUk": "Заповнення витримує горизонтальне нормальне навантаження 50 фунтів на 1 кв. фут; одночасність з іншими тимчасовими навантаженнями не потрібна."
  },
  {
    "section": "Table R301.5, Footnote h",
    "difficulty": "medium",
    "question": "What safety factor applies to glazing used in handrail assemblies and guards under the table footnote?",
    "questionUk": "Який коефіцієнт запасу примітка таблиці встановлює для скла в поручнях та огорожах?",
    "answers": [
      [
        "4",
        "Чотири"
      ],
      [
        "1",
        "Один"
      ],
      [
        "1.5",
        "Півтора"
      ],
      [
        "2",
        "Два"
      ],
      [
        "3",
        "Три"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote h applies a safety factor of 4 to glazing for the specified top-rail and infill loads, determined independently.",
    "explanationUk": "Примітка h встановлює для скла коефіцієнт 4 щодо визначених навантажень верху та заповнення, які визначають незалежно."
  },
  {
    "section": "Table R301.5, Footnote g, Item 2",
    "difficulty": "medium",
    "question": "For the table's limited-storage attic loading provisions, what maximum slope is allowed for the relevant joists or truss bottom chords?",
    "questionUk": "Який найбільший ухил відповідних балок або нижніх поясів ферм дозволено в положенні таблиці про навантаження горища з обмеженим зберіганням?",
    "answers": [
      [
        "2:12",
        "Ухил 2:12"
      ],
      [
        "3:12",
        "Ухил 3:12"
      ],
      [
        "4:12",
        "Ухил 4:12"
      ],
      [
        "6:12",
        "Ухил 6:12"
      ],
      [
        "12:12",
        "Ухил 12:12"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "One condition for the portions receiving the limited-storage load is slope no greater than 2 vertical units in 12 horizontal units; the other footnote conditions also apply.",
    "explanationUk": "Одна з умов для ділянок із навантаженням обмеженого зберігання — ухил не більше 2 вертикальних одиниць на 12 горизонтальних; також діють інші умови примітки."
  },
  {
    "section": "Table R301.5, Footnote g, Item 3",
    "difficulty": "medium",
    "question": "Which insulation-depth condition is part of identifying the attic portions to receive the limited-storage live load?",
    "questionUk": "Яка умова товщини утеплення враховується при визначенні ділянок горища з навантаженням обмеженого зберігання?",
    "answers": [
      [
        "Required insulation depth is less than joist or truss-bottom-chord depth",
        "Потрібна товщина утеплення менша за висоту балки або нижнього пояса ферми"
      ],
      [
        "Insulation depth must exceed member depth by 12 inches",
        "Утеплення має перевищувати висоту елемента на 12 дюймів"
      ],
      [
        "Insulation must be omitted everywhere",
        "Утеплення потрібно повністю прибрати"
      ],
      [
        "Insulation must fill every storage space to the roof",
        "Утеплення має заповнити простір до даху"
      ],
      [
        "Insulation depth has no role in the listed conditions",
        "Товщина утеплення не входить до умов"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Item 3 requires the needed insulation depth to be less than member depth; this does not authorize reducing the required insulation.",
    "explanationUk": "Пункт 3 вимагає, щоб потрібна товщина утеплення була меншою за висоту елемента; це не дозволяє зменшувати обов’язкове утеплення."
  },
  {
    "section": "Table R301.5, Footnote g",
    "difficulty": "exam",
    "question": "After applying the limited-storage attic live load to the qualifying portions, what concurrent uniform live load must the remaining joist or truss-bottom-chord portions support?",
    "questionUk": "Після прикладання навантаження обмеженого зберігання до відповідних ділянок яке одночасне рівномірне тимчасове навантаження мають витримувати решта ділянок балок або нижніх поясів?",
    "answers": [
      [
        "At least 10 psf",
        "Щонайменше 10 фунтів/кв. фут"
      ],
      [
        "Zero",
        "Нульове"
      ],
      [
        "At least 5 psf",
        "Щонайменше 5 фунтів/кв. фут"
      ],
      [
        "At least 30 psf in every case",
        "Завжди щонайменше 30 фунтів/кв. фут"
      ],
      [
        "At least 100 psf",
        "Щонайменше 100 фунтів/кв. фут"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote g requires at least 10 psf concurrent uniform live load on the remaining portions.",
    "explanationUk": "Примітка g вимагає на решті ділянок одночасного рівномірного тимчасового навантаження не менше 10 фунтів/кв. фут."
  }
];
export const intakeVerified109 = verifiedBatch(1293, "Plans and Specifications", "Plans", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-109-114", true, "2026-10-22");

