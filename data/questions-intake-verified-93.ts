import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R703.6.1",
    "difficulty": "exam",
    "question": "Wood shakes are installed over a nonpermeable water-resistive barrier. What furring arrangement does the section require?",
    "questionUk": "Дерев’яний колотий ґонт монтують поверх непроникного водозахисного бар’єра. Яку схему рейок вимагає розділ?",
    "answers": [
      [
        "Vertical furring first, then horizontal furring attached to it, then the shakes",
        "Спочатку вертикальні рейки, потім закріплені до них горизонтальні, далі ґонт"
      ],
      [
        "Only horizontal furring directly on the barrier",
        "Лише горизонтальні рейки прямо на бар’єрі"
      ],
      [
        "Only vertical furring with no horizontal attachment strips",
        "Лише вертикальні без горизонтальних рейок кріплення"
      ],
      [
        "No furring in this case",
        "У цьому випадку рейки не потрібні"
      ],
      [
        "Furring behind the interior gypsum only",
        "Рейки лише за внутрішнім гіпсокартоном"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The nonpermeable-barrier provision requires vertical furring over the barrier plus horizontal strips attached to the vertical strips before shake/shingle attachment.",
    "explanationUk": "Положення для непроникного бар’єра вимагає вертикальних рейок поверх нього та горизонтальних рейок на вертикальних перед монтажем ґонту."
  },
  {
    "section": "R703.6.1",
    "difficulty": "exam",
    "question": "Which spacing pair allows expansion between adjacent wood shingles versus wood shakes on an exterior wall?",
    "questionUk": "Яка пара проміжків забезпечує розширення сусідніх пиляних і колотих дерев’яних ґонтин зовнішньої стіни?",
    "answers": [
      [
        "Shingles: ⅛–¼ inch; shakes: ⅜–½ inch",
        "Пиляні: ⅛–¼ дюйма; колоті: ⅜–½ дюйма"
      ],
      [
        "Shingles: no gap; shakes: no gap",
        "Пиляні: без проміжку; колоті: без проміжку"
      ],
      [
        "Shingles: ½–¾ inch; shakes: ⅛ inch",
        "Пиляні: ½–¾ дюйма; колоті: ⅛ дюйма"
      ],
      [
        "Both: exactly 1 inch",
        "Обидва види: рівно 1 дюйм"
      ],
      [
        "Both: exactly 2 inches",
        "Обидва види: рівно 2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.6.1 specifies different expansion gaps for shingles and shakes; the two products should not be assigned the same gap by assumption.",
    "explanationUk": "R703.6.1 задає різні проміжки розширення пиляного та колотого ґонту; однаковий проміжок для них не припускають."
  },
  {
    "section": "R703.6.1",
    "difficulty": "medium",
    "question": "What minimum offset is required between joints in adjacent exterior wood-shake/shingle courses?",
    "questionUk": "Яке мінімальне зміщення стиків сусідніх рядів зовнішнього дерев’яного ґонту?",
    "answers": [
      [
        "1½ inches",
        "1½ дюйма"
      ],
      [
        "¼ inch",
        "¼ дюйма"
      ],
      [
        "½ inch",
        "½ дюйма"
      ],
      [
        "¾ inch",
        "¾ дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Adjacent-course joints must be offset at least 1½ inches; this is distinct from the expansion gap between adjacent pieces.",
    "explanationUk": "Стики сусідніх рядів зміщують щонайменше на 1½ дюйма; це відрізняється від проміжку розширення між деталями."
  },
  {
    "section": "Table R703.6.1, shingles 16-inch row; note a",
    "difficulty": "medium",
    "question": "What maximum single-course wall exposure is listed for 16-inch No. 1 wood shingles?",
    "questionUk": "Яка максимальна відкрита висота однорядного стінового покриття з пиляного ґонту №1 завдовжки 16 дюймів?",
    "answers": [
      [
        "7 inches",
        "7 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "9 inches",
        "9 дюймів"
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
    "explanation": "The 16-inch No. 1 shingle/single-course cell is 7 inches. The 12-inch figure in the adjacent column is double-course exposure.",
    "explanationUk": "Комірка 16-дюймового пиляного ґонту №1 в один ряд дає 7 дюймів. Сусідні 12 дюймів стосуються подвійного укладання."
  },
  {
    "section": "Table R703.6.1, shingles 18-inch row; note c",
    "difficulty": "exam",
    "question": "An installer chooses 18-inch No. 2 wood shingles in double-course wall application. Which maximum exposure does the footnote permit?",
    "questionUk": "Монтажник обрав пиляний ґонт №2 завдовжки 18 дюймів для подвійного стінового укладання. Яку максимальну відкриту висоту дозволяє примітка?",
    "answers": [
      [
        "10 inches",
        "10 дюймів"
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
        "14 inches",
        "14 дюймів"
      ],
      [
        "18 inches",
        "18 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Note c limits No. 2 grade to 10 inches rather than the No. 1 grade's 14-inch double-course value.",
    "explanationUk": "Примітка c обмежує сорт №2 до 10 дюймів замість 14 дюймів подвійного укладання сорту №1."
  },
  {
    "section": "Table R703.6.1, 24-inch rows; note a",
    "difficulty": "exam",
    "question": "For 24-inch No. 1 products in double-course wall installation, how much greater is the table exposure for shakes than for shingles?",
    "questionUk": "На скільки більша таблична відкрита висота колотого ґонту порівняно з пиляним за довжини 24 дюйми, сорту №1 та подвійного стінового укладання?",
    "answers": [
      [
        "2 inches",
        "На 2 дюйми"
      ],
      [
        "No difference",
        "Різниці немає"
      ],
      [
        "1 inch",
        "На 1 дюйм"
      ],
      [
        "4 inches",
        "На 4 дюйми"
      ],
      [
        "8 inches",
        "На 8 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The No. 1 double-course values are 18 inches for 24-inch shakes and 16 inches for 24-inch shingles: difference 2 inches.",
    "explanationUk": "Для сорту №1 подвійне укладання 24-дюймових колотих ґонтин дає 18 дюймів, пиляних — 16: різниця 2 дюйми."
  },
  {
    "section": "R703.6.3",
    "difficulty": "exam",
    "question": "For untreated wall shakes using the nail method away from saltwater-coastal conditions, select the listed acceptable nail materials.",
    "questionUk": "Для необробленого стінового ґонту, який кріплять цвяхами поза умовами солоного узбережжя, виберіть дозволені матеріали цвяхів.",
    "answers": [
      [
        "Type 304 stainless steel",
        "Нержавіюча сталь Type 304"
      ],
      [
        "Type 316 stainless steel",
        "Нержавіюча сталь Type 316"
      ],
      [
        "Hot-dipped zinc-coated corrosion-resistant box nails meeting the stated coating requirement",
        "Гарячеоцинковані корозійностійкі box nails із потрібним покриттям"
      ],
      [
        "Plain uncoated iron",
        "Звичайне необроблене залізо"
      ],
      [
        "Uncoated interior finish nails",
        "Необроблені внутрішні оздоблювальні цвяхи"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The nail method uses two qualifying box nails per piece. R703.6.3 lists 304, 316 or the specified hot-dipped galvanized nails; sizing/penetration requirements also apply.",
    "explanationUk": "Цвяховий спосіб використовує два належні box nails на деталь. R703.6.3 перелічує 304, 316 або зазначені гарячеоцинковані цвяхи; розмір і заглиблення також обов’язкові."
  },
  {
    "section": "R703.6.3",
    "difficulty": "medium",
    "question": "Which stainless-steel type is required for fasteners of the specified fire-retardant-treated or pressure-preservative-treated exterior wall shakes/shingles?",
    "questionUk": "Який тип нержавіючої сталі потрібний для кріплень зазначеного вогнезахисно або під тиском консервувально обробленого зовнішнього стінового ґонту?",
    "answers": [
      [
        "Type 316",
        "Тип 316"
      ],
      [
        "Type 304 alone",
        "Лише тип 304"
      ],
      [
        "Any unclassified stainless",
        "Будь-яка некласифікована нержавіюча"
      ],
      [
        "Plain steel if painted",
        "Звичайна сталь під фарбою"
      ],
      [
        "Aluminum if hidden",
        "Алюміній, якщо прихований"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.6.3 specifically requires Type 316 for the identified treated shakes/shingles; do not substitute the broader untreated-product material list.",
    "explanationUk": "R703.6.3 прямо вимагає Type 316 для зазначеного обробленого ґонту; ширший перелік необроблених виробів не підставляють."
  },
  {
    "section": "R703.5.3",
    "difficulty": "exam",
    "question": "No manufacturer recommendation is available for horizontal rabbeted wood lap siding. What minimum lap does the fallback rule permit?",
    "questionUk": "Для горизонтального дерев’яного сайдингу з фальцом немає рекомендації виробника. Який мінімальний напуск дозволяє резервне правило?",
    "answers": [
      [
        "½ inch",
        "½ дюйма"
      ],
      [
        "¼ inch",
        "¼ дюйма"
      ],
      [
        "⅜ inch",
        "⅜ дюйма"
      ],
      [
        "1½ inches",
        "1½ дюйма"
      ],
      [
        "2 inches",
        "2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Without recommendations, ordinary lap is at least 1 inch, reduced to ½ inch if rabbeted. Required end treatment still applies.",
    "explanationUk": "Без рекомендацій звичайний напуск — від 1 дюйма, для фальцьованого — від ½ дюйма. Обробка торців також обов’язкова."
  },
  {
    "section": "R703.11",
    "difficulty": "easy",
    "question": "What standard must vinyl siding be certified and labeled to by an approved quality-control agency?",
    "questionUk": "За яким стандартом схвалена організація контролю якості має сертифікувати й маркувати вініловий сайдинг?",
    "answers": [
      [
        "ASTM D3679",
        "Стандарт ASTM D3679"
      ],
      [
        "ASTM C1167",
        "Стандарт ASTM C1167"
      ],
      [
        "ASTM C1492",
        "Стандарт ASTM C1492"
      ],
      [
        "ASTM C1107",
        "Стандарт ASTM C1107"
      ],
      [
        "ASTM C665",
        "Стандарт ASTM C665"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R703.11 requires certification and labeling to ASTM D3679 by an approved quality-control agency.",
    "explanationUk": "R703.11 вимагає сертифікації та маркування за ASTM D3679 схваленою організацією контролю якості."
  },
  {
    "section": "R703.11.1.1",
    "difficulty": "medium",
    "question": "Unless the vinyl-siding manufacturer specifies otherwise, which nail shank/head diameter pair is prescribed?",
    "questionUk": "Яка пара діаметрів стрижня й головки цвяха задана для вінілового сайдингу, якщо виробник не вказав іншого?",
    "answers": [
      [
        "0.120-inch shank; 0.313-inch head",
        "Стрижень 0,120; головка 0,313 дюйма"
      ],
      [
        "0.080-inch shank; 0.100-inch head",
        "Стрижень 0,080; головка 0,100 дюйма"
      ],
      [
        "0.100-inch shank; 0.120-inch head",
        "Стрижень 0,100; головка 0,120 дюйма"
      ],
      [
        "0.120-inch shank; 0.120-inch head",
        "Стрижень 0,120; головка 0,120 дюйма"
      ],
      [
        "0.313-inch shank; 0.120-inch head",
        "Стрижень 0,313; головка 0,120 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The fallback nail is 0.120 inch at the shank and 0.313 inch at the head; manufacturer instructions may specify otherwise.",
    "explanationUk": "Резервний цвях має стрижень 0,120 і головку 0,313 дюйма; виробник може встановити інше."
  },
  {
    "section": "R703.11.1.1",
    "difficulty": "medium",
    "question": "Under the vinyl-siding fastener fallback, which 16-gage staple crown-width range is specified?",
    "questionUk": "Який діапазон ширини коронки скоби калібру 16 задано резервним правилом кріплення вінілового сайдингу?",
    "answers": [
      [
        "⅜–½ inch",
        "⅜–½ дюйма"
      ],
      [
        "⅛–¼ inch",
        "⅛–¼ дюйма"
      ],
      [
        "¼–5⁄16 inch",
        "¼–5⁄16 дюйма"
      ],
      [
        "¾–1 inch",
        "¾–1 дюйма"
      ],
      [
        "1–1½ inches",
        "1–1½ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The fallback staple is 16 gage with a ⅜- to ½-inch crown, unless manufacturer instructions specify otherwise.",
    "explanationUk": "Резервна скоба має калібр 16 та коронку ⅜–½ дюйма, якщо інструкція виробника не встановлює іншого."
  }
];
export const intakeVerified93 = verifiedBatch(1101, "Exterior Finishes", "Exterior", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter7.pdf", seeds, "intake-series-91-96", true, "2026-10-15");

