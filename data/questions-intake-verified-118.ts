import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R608.8.1.1; R608.8.2",
    "difficulty": "medium",
    "question": "A concrete wall opening is exactly 24 inches wide. Does it reach the R608.8 threshold requiring a lintel above the opening?",
    "questionUk": "Ширина прорізу бетонної стіни дорівнює рівно 24 дюймам. Чи досягає він порога R608.8, за якого над прорізом потрібна перемичка?",
    "answers": [
      [
        "Yes; openings 2 feet wide or greater require lintels",
        "Так; перемички потрібні над прорізами від 2 футів включно"
      ],
      [
        "No; the opening must exceed 3 feet",
        "Ні; ширина повинна перевищувати 3 фути"
      ],
      [
        "No; exactly 2 feet is excluded",
        "Ні; рівно 2 фути виключено"
      ],
      [
        "Only if the opening is a garage door",
        "Лише якщо це отвір гаражних воріт"
      ],
      [
        "Only if the opening reaches the floor",
        "Лише якщо проріз доходить до підлоги"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.2 requires lintels over all openings at least 2 feet wide. A 24-inch opening equals 2 feet and is included, subject to the applicable lintel design provisions.",
    "explanationUk": "R608.8.2 вимагає перемички над усіма прорізами завширшки щонайменше 2 фути. 24 дюйми дорівнюють 2 футам і входять у вимогу з відповідним проєктуванням перемички."
  },
  {
    "section": "R608.8.1",
    "difficulty": "medium",
    "question": "Which minimum concrete depths over an opening does R608.8.1 specify for flat/waffle-grid walls and screen-grid walls, respectively?",
    "questionUk": "Які мінімальні висоти бетону над прорізом задає R608.8.1 відповідно для суцільних/waffle-grid стін і screen-grid стін?",
    "answers": [
      [
        "8 inches; 12 inches",
        "8 дюймів; 12 дюймів"
      ],
      [
        "4 inches; 6 inches",
        "4 дюйми; 6 дюймів"
      ],
      [
        "6 inches; 8 inches",
        "6 дюймів; 8 дюймів"
      ],
      [
        "8 inches; 8 inches",
        "8 дюймів; 8 дюймів"
      ],
      [
        "12 inches; 6 inches",
        "12 дюймів; 6 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.1 requires at least 8 inches of concrete depth over the opening width in flat and waffle-grid walls, and 12 inches in screen-grid walls. Span and reinforcement requirements also apply.",
    "explanationUk": "R608.8.1 вимагає над шириною прорізу мінімум 8 дюймів висоти бетону для суцільних і waffle-grid стін та 12 дюймів для screen-grid. Також діють вимоги до прольоту й армування."
  },
  {
    "section": "R608.8.1",
    "difficulty": "medium",
    "question": "How must an opening be located in a waffle-grid or screen-grid concrete wall relative to the vertical cores beside it?",
    "questionUk": "Як слід розташовувати проріз у waffle-grid або screen-grid бетонній стіні відносно вертикальних бетонних ядер біля нього?",
    "answers": [
      [
        "At least half of a vertical core must remain along each side",
        "Уздовж кожного боку має залишатися щонайменше половина вертикального ядра"
      ],
      [
        "No vertical core may touch either side",
        "Жодне вертикальне ядро не повинно торкатися боків"
      ],
      [
        "Only one side needs any vertical core",
        "Будь-яке вертикальне ядро потрібне лише з одного боку"
      ],
      [
        "Each side must cut through an entire core leaving none",
        "З кожного боку потрібно повністю видалити ціле ядро"
      ],
      [
        "Core location is irrelevant to openings",
        "Розташування ядер не стосується прорізів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.1 requires openings in waffle-grid and screen-grid walls to leave not less than half a vertical core along each side. This is a geometric requirement in addition to reinforcing details.",
    "explanationUk": "R608.8.1 вимагає розташовувати прорізи у waffle-grid та screen-grid стінах так, щоб уздовж кожного боку було не менше половини вертикального ядра. Це геометрична умова додатково до армування."
  },
  {
    "section": "R608.8.1.1",
    "difficulty": "medium",
    "question": "Below a 3-foot-wide concrete wall opening, which minimum horizontal reinforcement arrangement is required by R608.8.1.1?",
    "questionUk": "Яке мінімальне горизонтальне армування під прорізом бетонної стіни завширшки 3 фути вимагає R608.8.1.1?",
    "answers": [
      [
        "At least one No. 4 bar within 12 inches of the opening bottom",
        "Щонайменше один стрижень No. 4 у межах 12 дюймів від низу прорізу"
      ],
      [
        "One No. 3 bar 24 inches below the opening",
        "Один стрижень No. 3 на 24 дюйми нижче прорізу"
      ],
      [
        "Only wire mesh at the floor slab",
        "Лише сітку в плиті підлоги"
      ],
      [
        "No reinforcement below any window",
        "Жодного армування під будь-яким вікном"
      ],
      [
        "One bar located anywhere in the wall story",
        "Один стрижень будь-де по висоті поверху"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For openings at least 2 feet wide, R608.8.1.1 requires at least one No. 4 bar within 12 inches below the opening. The bar must also extend beyond the opening as required for tension development.",
    "explanationUk": "Для прорізів від 2 футів R608.8.1.1 вимагає щонайменше один No. 4 у межах 12 дюймів під прорізом. Стрижень також продовжують за його краї на потрібну довжину анкерування на розтяг."
  },
  {
    "section": "R608.8.1.2",
    "difficulty": "exam",
    "question": "Which vertical reinforcement detail satisfies the stated minimum around a concrete wall opening at least 2 feet wide?",
    "questionUk": "Яке вертикальне армування відповідає зазначеному мінімуму навколо прорізу бетонної стіни завширшки щонайменше 2 фути?",
    "answers": [
      [
        "At least one No. 4 Grade 40 bar at each side, within 12 inches, extending the full story height",
        "Щонайменше по одному No. 4 Grade 40 з кожного боку, у межах 12 дюймів, на всю висоту поверху"
      ],
      [
        "One short No. 3 bar at the opening center",
        "Один короткий No. 3 посередині прорізу"
      ],
      [
        "One No. 4 bar on only the left side",
        "Один No. 4 лише ліворуч"
      ],
      [
        "Two bars ending at sill height on both sides",
        "Два стрижні з обох боків, що закінчуються на висоті підвіконня"
      ],
      [
        "One bar on each side located 24 inches from the opening",
        "По стрижню з кожного боку на відстані 24 дюйми від прорізу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.1.2 requires at least one No. 4 Grade 40 bar on each side, located within 12 inches and extending the full wall-story height. Other applicable wall reinforcement requirements still apply.",
    "explanationUk": "R608.8.1.2 вимагає по одному No. 4 Grade 40 мінімум з кожного боку, у межах 12 дюймів та на всю висоту поверху стіни. Інші застосовні вимоги до армування також діють."
  },
  {
    "section": "R608.8.2",
    "difficulty": "medium",
    "question": "A concrete lintel will support a concentrated reaction from a roof girder. What design standard does R608.8.2 require for this loading?",
    "questionUk": "Бетонна перемичка сприйматиме зосереджену реакцію від головної балки даху. Який стандарт проєктування вимагає R608.8.2 для такого навантаження?",
    "answers": [
      [
        "Design in accordance with ACI 318",
        "Проєктування за ACI 318"
      ],
      [
        "Use any uniform-load lintel table without adjustment",
        "Будь-яку таблицю перемичок рівномірного навантаження без змін"
      ],
      [
        "Use only the gypsum board fastening table",
        "Лише таблицю кріплення гіпсокартону"
      ],
      [
        "Use only the asphalt-shingle wind table",
        "Лише вітрову таблицю бітумної черепиці"
      ],
      [
        "Ignore the girder reaction if the opening is narrow",
        "Ігнорування реакції балки за вузького прорізу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.2 directs lintels supporting concentrated loads, including beam or girder reactions, to ACI 318. The prescriptive uniform-load tables do not by themselves address that concentrated reaction.",
    "explanationUk": "R608.8.2 направляє проєктування перемичок зі зосередженими навантаженнями, зокрема реакціями балок, до ACI 318. Самі таблиці рівномірного навантаження не охоплюють таку реакцію."
  },
  {
    "section": "R608.8.2.1",
    "difficulty": "exam",
    "question": "A lintel requires No. 3 stirrups. The calculated d values for its top and bottom bars are 18 and 16 inches. What maximum stirrup spacing follows the d/2 rule?",
    "questionUk": "Перемичка потребує хомутів No. 3. Розраховані значення d для верхніх і нижніх стрижнів — 18 та 16 дюймів. Який найбільший крок хомутів за правилом d/2?",
    "answers": [
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "9 inches",
        "9 дюймів"
      ],
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "17 inches",
        "17 дюймів"
      ],
      [
        "18 inches",
        "18 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.2.1 uses the smaller top/bottom d to determine maximum stirrup spacing. The smaller value is 16 inches, so d/2 = 8 inches.",
    "explanationUk": "R608.8.2.1 вимагає менше з верхнього та нижнього значень d для максимального кроку хомутів. Менше значення — 16 дюймів; d/2 = 8 дюймів."
  },
  {
    "section": "R608.8.2.1",
    "difficulty": "easy",
    "question": "Two bars are required at the top and bottom of a concrete lintel and are NOT bundled. What minimum separation does R608.8.2.1 require between the bars?",
    "questionUk": "У верхній і нижній зонах бетонної перемички потрібно по два стрижні, які НЕ об’єднують у пакети. Яка мінімальна відстань між стрижнями потрібна за R608.8.2.1?",
    "answers": [
      [
        "1 inch",
        "1 дюйм"
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
        "1/2 inch",
        "1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where the two top and bottom bars are not bundled, R608.8.2.1 requires them to be separated by at least 1 inch. Bundled bars are subject to the separate conditions in R608.8.2.2.",
    "explanationUk": "Коли два верхні та нижні стрижні не утворюють пакетів, R608.8.2.1 вимагає відстані між ними щонайменше 1 дюйм. Для пакетів діють окремі умови R608.8.2.2."
  },
  {
    "section": "R608.8.2.2(1)",
    "difficulty": "medium",
    "question": "Which two-bar bundle is within the bar-size limit of the prescriptive concrete-lintel bundling provision?",
    "questionUk": "Який пакет із двох стрижнів відповідає обмеженню розміру стрижнів у приписовому правилі пакетів бетонних перемичок?",
    "answers": [
      [
        "Two No. 6 bars in contact",
        "Два стрижні No. 6 впритул"
      ],
      [
        "Two No. 7 bars in contact",
        "Два стрижні No. 7 впритул"
      ],
      [
        "Two No. 8 bars in contact",
        "Два стрижні No. 8 впритул"
      ],
      [
        "Two No. 9 bars in contact",
        "Два стрижні No. 9 впритул"
      ],
      [
        "Two No. 10 bars in contact",
        "Два стрижні No. 10 впритул"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.2.2 permits two bars in contact to be bundled only when all listed conditions are met, including bars no larger than No. 6. Meeting the size limit alone is not complete approval.",
    "explanationUk": "R608.8.2.2 дозволяє пакет із двох контактних стрижнів лише за всіх перелічених умов, зокрема розміром не більше No. 6. Самої відповідності розміру недостатньо."
  },
  {
    "section": "R608.8.2.2(2)",
    "difficulty": "exam",
    "question": "A horizontal bundle of lintel bars would leave only 2-1/2 inches of total clear space beside the bars, summed over both sides. What orientation does R608.8.2.2 require?",
    "questionUk": "Горизонтальний пакет стрижнів перемички залишив би лише 2-1/2 дюйма сумарного вільного простору збоку від стрижнів з обох боків. Яку орієнтацію вимагає R608.8.2.2?",
    "answers": [
      [
        "Orient the bundled bars in a vertical plane",
        "Розташувати пакет стрижнів у вертикальній площині"
      ],
      [
        "Keep the horizontal bundle because 2 inches is sufficient",
        "Залишити горизонтально, бо достатньо 2 дюймів"
      ],
      [
        "Remove all side cover",
        "Прибрати весь бічний захисний шар"
      ],
      [
        "Use a diagonal bundle without further checks",
        "Зробити діагональний пакет без інших перевірок"
      ],
      [
        "Replace the stirrups with paint",
        "Замінити хомути фарбою"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where wall thickness cannot provide at least 3 inches total clear space beside a horizontal bundle on both sides combined, item 2 requires vertical orientation. The proposed 2-1/2 inches is insufficient.",
    "explanationUk": "Коли товщина стіни не забезпечує сумарно щонайменше 3 дюйми вільного простору з обох боків горизонтального пакета, пункт 2 вимагає вертикальної орієнтації. 2-1/2 дюйма недостатньо."
  },
  {
    "section": "R608.8.2.2(4)",
    "difficulty": "medium",
    "question": "Where are lap splices prohibited for bundled bars in concrete lintels under R608.8.2.2?",
    "questionUk": "Де R608.8.2.2 забороняє стики внапуск пакетів стрижнів бетонних перемичок?",
    "answers": [
      [
        "Within the lintel span and the tension-development length at each end",
        "У межах прольоту перемички та довжини анкерування на розтяг на кожному кінці"
      ],
      [
        "Only outside the supporting wall",
        "Лише поза опорною стіною"
      ],
      [
        "Only in the middle inch of the opening",
        "Лише на середньому дюймі прорізу"
      ],
      [
        "Only where the concrete is painted",
        "Лише там, де бетон пофарбований"
      ],
      [
        "Nowhere; bundled bars may be lap-spliced anywhere",
        "Ніде; стики пакетів дозволені будь-де"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Item 4 prohibits lap splices within both the lintel span and the required tension-development length on each end. The restriction extends beyond just the clear opening.",
    "explanationUk": "Пункт 4 забороняє стики внапуск у прольоті та на потрібній довжині анкерування на розтяг на кожному кінці. Заборона охоплює більше, ніж лише чистий проріз."
  },
  {
    "section": "R608.8.2.1; R608.8.2.2(5)",
    "difficulty": "exam",
    "question": "A lintel with bundled bars has a table-indicated center distance A that would otherwise permit omission of stirrups. May stirrups be omitted in that center portion?",
    "questionUk": "Перемичка з пакетами стрижнів має табличну центральну ділянку A, де за інших умов можна було б не ставити хомути. Чи можна пропустити хомути на цій центральній ділянці?",
    "answers": [
      [
        "No; bundled bars require stirrups throughout the lintel length",
        "Ні; пакети стрижнів потребують хомутів по всій довжині перемички"
      ],
      [
        "Yes; all center-A regions are exempt regardless of bundles",
        "Так; усі ділянки A звільнено незалежно від пакетів"
      ],
      [
        "Yes; only the bottom bundle needs any stirrups",
        "Так; хомути потрібні лише нижньому пакету"
      ],
      [
        "Yes; bundles eliminate the need for stirrups everywhere",
        "Так; пакети взагалі скасовують потребу в хомутах"
      ],
      [
        "Yes; a note on the finish schedule is sufficient",
        "Так; достатньо примітки у відомості оздоблення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R608.8.2.1 points to item 5 of R608.8.2.2 for bundled bars. That item requires stirrups throughout the lintel length, so the ordinary center-A omission does not apply to bundled bars.",
    "explanationUk": "R608.8.2.1 відсилає для пакетів до пункту 5 R608.8.2.2. Він вимагає хомути по всій довжині перемички, тому звичайний пропуск на ділянці A до пакетів не застосовується."
  }
];
export const intakeVerified118 = verifiedBatch(1401, "Footings and Foundations", "Reinforcement", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-115-120", true, "2026-10-22");
