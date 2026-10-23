import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R608.5.5",
    "difficulty": "medium",
    "question": "Where must construction joints in plain concrete walls be located under R608.5.5?",
    "questionUk": "Де за R608.5.5 розташовують робочі шви в неармованих бетонних стінах?",
    "answers": [
      [
        "At points of lateral support",
        "У місцях бічного закріплення"
      ],
      [
        "Only at the center of every opening",
        "Лише посередині кожного отвору"
      ],
      [
        "Anywhere the concrete truck stops",
        "Будь-де, де зупиниться бетоновоз"
      ],
      [
        "Only at roof valleys",
        "Лише під розжолобками даху"
      ],
      [
        "At the lowest point of each window sill",
        "У найнижчій точці кожного підвіконня"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Plain-concrete wall construction joints are located at lateral supports. The rule also includes walls with the minimum No. 4 bars at 48 inches required by R608.6.",
    "explanationUk": "Робочі шви неармованих стін розташовують у місцях бічного закріплення. Це також охоплює стіни з мінімальними стрижнями №4 через 48 дюймів за R608.6."
  },
  {
    "section": "R608.5.5",
    "difficulty": "medium",
    "question": "Using the ordinary joint-reinforcement detail rather than its substitution exception, what minimum bar and maximum spacing are required across a plain-concrete wall construction joint?",
    "questionUk": "Який мінімальний стрижень і найбільший крок потрібні поперек робочого шва неармованої бетонної стіни за звичайним вузлом без винятку заміни арматури?",
    "answers": [
      [
        "At least one No. 4 bar at no more than 24 inches on center",
        "Щонайменше один стрижень №4 із кроком не більше 24 дюймів"
      ],
      [
        "No. 3 bars at 48 inches on center",
        "Стрижні №3 через 48 дюймів"
      ],
      [
        "No. 4 bars at 72 inches on center",
        "Стрижні №4 через 72 дюйми"
      ],
      [
        "One unanchored wire per wall",
        "Один незакріплений дріт на стіну"
      ],
      [
        "No reinforcement at any joint",
        "Арматура в будь-якому шві не потрібна"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.5.5 requires No. 4 bars crossing the joint at spacing no greater than 24 inches unless the stated wall-reinforcement exception is used.",
    "explanationUk": "R608.5.5 вимагає стрижнів №4 поперек шва з кроком не більше 24 дюймів, якщо не застосовано виняток для стінової арматури."
  },
  {
    "section": "R608.5.5",
    "difficulty": "easy",
    "question": "What minimum embedment is required on EACH side of the wall construction joint for the joint reinforcement specified in R608.5.5?",
    "questionUk": "Яка мінімальна довжина закладення потрібна З КОЖНОГО боку робочого шва для передбаченої R608.5.5 арматури шва?",
    "answers": [
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "3 inches",
        "3 дюйми"
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
    "explanation": "Construction-joint reinforcement must embed at least 12 inches on both sides of the joint.",
    "explanationUk": "Арматуру робочого шва закладають щонайменше на 12 дюймів з обох боків шва."
  },
  {
    "section": "R608.5.5",
    "difficulty": "exam",
    "question": "Which location option is permitted for a construction joint in a reinforced concrete wall?",
    "questionUk": "Який варіант розміщення робочого шва дозволено для армованої бетонної стіни?",
    "answers": [
      [
        "In the middle third between lateral supports, or located and constructed as required for plain-concrete wall joints",
        "У середній третині між бічними опорами або за розташуванням і конструкцією шва неармованої стіни"
      ],
      [
        "Anywhere with no joint detailing",
        "Будь-де без деталей шва"
      ],
      [
        "Only within a door opening",
        "Лише в дверному отворі"
      ],
      [
        "Only at the extreme unsupported end of the wall",
        "Лише на крайньому незакріпленому кінці стіни"
      ],
      [
        "Only through the center of a reinforcing hook",
        "Лише через середину арматурного гака"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Reinforced-wall joints may be in the middle third of the span between lateral supports, or use the plain-wall joint location and construction requirements.",
    "explanationUk": "Шви армованих стін можуть бути в середній третині прольоту між бічними опорами або відповідати розташуванню й деталям швів неармованих стін."
  },
  {
    "section": "R608.5.5, Exception",
    "difficulty": "medium",
    "question": "Required vertical wall bars are proposed in place of separate construction-joint bars. What maximum spacing is a condition of this substitution?",
    "questionUk": "Обов’язкові вертикальні стрижні стіни пропонують замість окремої арматури робочого шва. Який максимальний крок є умовою такої заміни?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "36 inches",
        "36 дюймів"
      ],
      [
        "48 inches",
        "48 дюймів"
      ],
      [
        "60 inches",
        "60 дюймів"
      ],
      [
        "72 inches",
        "72 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Required vertical reinforcement may replace joint reinforcement if spacing does not exceed 24 inches; a combination with the specified No. 4 joint bars may also meet that spacing.",
    "explanationUk": "Обов’язкова вертикальна арматура може замінити арматуру шва за кроку не більше 24 дюймів; також дозволена комбінація з указаними стрижнями №4 за цього кроку."
  },
  {
    "section": "R608.5.4.6",
    "difficulty": "medium",
    "question": "May reinforcement, including stirrups, be placed in the thin webs of waffle-grid concrete walls under R608.5.4.6?",
    "questionUk": "Чи дозволяє R608.5.4.6 розміщувати арматуру, включно з хомутами, у тонких перемичках стін із вафельною бетонною сіткою?",
    "answers": [
      [
        "No; reinforcement is not placed in the webs, although form ties are permitted",
        "Ні; арматуру в тонких перемичках не розміщують, але стяжки опалубки дозволені"
      ],
      [
        "Yes, provided the bars touch the forms",
        "Так, якщо стрижні торкаються опалубки"
      ],
      [
        "Yes, but only in lintel webs",
        "Так, але лише в тонких перемичках над отворами"
      ],
      [
        "Yes, if the web contains two stirrups",
        "Так, якщо там два хомути"
      ],
      [
        "All webs must contain reinforcing bars",
        "Усі тонкі перемички обов’язково армують"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The prohibition includes lintel webs and all reinforcement, including stirrups. Form ties in webs are expressly permitted.",
    "explanationUk": "Заборона охоплює також ділянки над отворами й усю арматуру, включно з хомутами. Стяжки опалубки прямо дозволені."
  },
  {
    "section": "R608.5.4.7",
    "difficulty": "exam",
    "question": "An alternate vertical-bar arrangement in an 8-inch concrete wall otherwise provides the required equivalent steel area. What absolute spacing range does R608.5.4.7 impose?",
    "questionUk": "Альтернативне вертикальне армування бетонної стіни 8 дюймів забезпечує потрібну еквівалентну площу сталі. Які абсолютні межі кроку встановлює R608.5.4.7?",
    "answers": [
      [
        "At least 4 inches and no more than 48 inches",
        "Не менше 4 і не більше 48 дюймів"
      ],
      [
        "At least 1 inch and no more than 72 inches",
        "Не менше 1 і не більше 72 дюймів"
      ],
      [
        "At least 8 inches and no more than 96 inches",
        "Не менше 8 і не більше 96 дюймів"
      ],
      [
        "Exactly 24 inches in every case",
        "Завжди рівно 24 дюйми"
      ],
      [
        "Any spacing if total steel weight is unchanged",
        "Будь-який крок за незмінної маси сталі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Bar spacing may not be less than half the wall thickness or greater than 48 inches. For an 8-inch wall, the lower limit is 4 inches; equivalent reinforcement and other design conditions still apply.",
    "explanationUk": "Крок не менший за половину товщини стіни й не більший за 48 дюймів. Для стіни 8 дюймів нижня межа — 4 дюйми; інші розрахункові умови зберігаються."
  },
  {
    "section": "R608.6.1",
    "difficulty": "medium",
    "question": "An above-grade concrete wall falls outside both the R608.2 applicability limits and the scope of the prescriptive wall tables. Which design standard does R608.6.1 require?",
    "questionUk": "Надземна бетонна стіна виходить за межі застосування R608.2 та нормативних стінових таблиць. За яким стандартом R608.6.1 вимагає розрахунок?",
    "answers": [
      [
        "ACI 318",
        "Стандарт ACI 318"
      ],
      [
        "ASTM C1288",
        "Стандарт ASTM C1288"
      ],
      [
        "ANSI A208.1",
        "Стандарт ANSI A208.1"
      ],
      [
        "ASTM D226",
        "Стандарт ASTM D226"
      ],
      [
        "APA E30 alone",
        "Лише посібник APA E30"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.6.1 requires ACI 318 design where the wall/building is outside the applicability limits or table scope, or the tables require design.",
    "explanationUk": "R608.6.1 вимагає розрахунку за ACI 318 за виходу за межі застосування чи таблиць або коли таблиця прямо вимагає розрахунок."
  },
  {
    "section": "R608.6.1",
    "difficulty": "medium",
    "question": "Which support arrangement is specified for above-grade concrete walls by R608.6.1?",
    "questionUk": "Яку схему опирання надземних бетонних стін передбачає R608.6.1?",
    "answers": [
      [
        "Continuous foundation walls or slabs-on-ground monolithic with the footing under R403",
        "Безперервні фундаментні стіни або плити по ґрунту, монолітні з підошвою за R403"
      ],
      [
        "Loose concrete pavers on topsoil",
        "Незакріплені бетонні плитки на рослинному ґрунті"
      ],
      [
        "Roof sheathing supported only at its ends",
        "Покрівельний настил з опорами лише на кінцях"
      ],
      [
        "Uncompacted fill without a footing",
        "Неущільнена засипка без підошви"
      ],
      [
        "Only nonbearing interior partitions",
        "Лише внутрішні ненесучі перегородки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The required supports are continuous foundation walls or slabs-on-ground monolithic with the footing in accordance with R403.",
    "explanationUk": "Передбачені опори — безперервні фундаментні стіни або плити по ґрунту, монолітні з підошвою відповідно до R403."
  },
  {
    "section": "R608.6.1",
    "difficulty": "medium",
    "question": "Under R608.6.1, how must a concrete wall's thickness compare with the wall in the story above?",
    "questionUk": "Як за R608.6.1 товщина бетонної стіни має співвідноситися зі стіною поверхом вище?",
    "answers": [
      [
        "Equal to or greater than the wall thickness above",
        "Не менша за товщину стіни вище"
      ],
      [
        "Always half the thickness above",
        "Завжди вдвічі менша"
      ],
      [
        "Always 2 inches thinner",
        "Завжди на 2 дюйми менша"
      ],
      [
        "Unrelated to the wall above",
        "Не пов’язана зі стіною вище"
      ],
      [
        "Determined only by paint thickness",
        "Визначається лише товщиною фарби"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Wall thickness must be at least the thickness of the wall in the story above.",
    "explanationUk": "Товщина стіни має бути не меншою за товщину стіни поверхом вище."
  },
  {
    "section": "R608.6.2",
    "difficulty": "easy",
    "question": "When using Tables R608.6(1), (2) or (3) to design a nonload-bearing wall for out-of-plane wind, which labeled column is used?",
    "questionUk": "Яку позначену колонку таблиць R608.6(1), (2) або (3) беруть для ненесучої стіни під дією вітру з площини?",
    "answers": [
      [
        "Top",
        "Колонку «Top»"
      ],
      [
        "Bottom only",
        "Лише колонку «Bottom»"
      ],
      [
        "Footing depth",
        "Глибину підошви"
      ],
      [
        "Roof pitch",
        "Ухил даху"
      ],
      [
        "Mortar type",
        "Тип розчину"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The nonload-bearing wall instruction specifically directs use of the appropriate column labeled Top.",
    "explanationUk": "Для ненесучих стін прямо наказано використовувати відповідну колонку з позначенням «Top»."
  },
  {
    "section": "R608.6.2",
    "difficulty": "exam",
    "question": "Assume no other provision requires more horizontal reinforcement. Which TWO reinforcement details are required for above-grade concrete walls under R608.6.2?",
    "questionUk": "Припустімо, інші положення не вимагають більшого горизонтального армування. Які ДВІ деталі потрібні надземним бетонним стінам за R608.6.2?",
    "answers": [
      [
        "A vertical bar at exterior-wall corners",
        "Вертикальний стрижень у кутах зовнішніх стін"
      ],
      [
        "At least four horizontal No. 4 Grade 40 bars at the prescribed wall-height locations",
        "Щонайменше чотири горизонтальні стрижні №4 Grade 40 у визначених місцях по висоті"
      ],
      [
        "Only one horizontal wire at the wall midpoint",
        "Лише один горизонтальний дріт посередині стіни"
      ],
      [
        "No vertical corner bars if concrete is painted",
        "Без вертикальних кутових стрижнів, якщо бетон пофарбовано"
      ],
      [
        "All horizontal bars concentrated within 2 inches of the wall top",
        "Усі горизонтальні стрижні в межах 2 дюймів від верху"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Exterior corners need vertical bars. The four horizontal bars are within 12 inches of the wall top, within 12 inches of finished floor, and approximately at one-third and two-thirds wall height, unless more is required.",
    "explanationUk": "У зовнішніх кутах потрібні вертикальні стрижні. Чотири горизонтальні розміщують у межах 12 дюймів від верху й чистої підлоги та приблизно на третині й двох третинах висоти, якщо не потрібно більше."
  }
];
export const intakeVerified105 = verifiedBatch(1245, "Footings and Foundations", "Reinforcement", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-103-108", true, "2026-10-22");

