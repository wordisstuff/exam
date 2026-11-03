import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R603.6",
    "question": "Under the steel wall-framing provisions, where must headers be installed above openings?",
    "questionUk": "Де за правилами сталевого стінового каркаса над прорізами потрібні перемички?",
    "answers": [
      [
        "All exterior walls and interior load-bearing walls",
        "У всіх зовнішніх і внутрішніх несучих стінах"
      ],
      [
        "Only nonbearing interior partitions",
        "Лише у внутрішніх ненесучих перегородках"
      ],
      [
        "Only walls with brick veneer",
        "Лише у стінах із цегляним облицюванням"
      ],
      [
        "Only openings wider than 8 feet",
        "Лише над прорізами ширше 8 футів"
      ],
      [
        "Only second-story openings",
        "Лише над прорізами другого поверху"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R603.6 requires headers over all openings in exterior and interior load-bearing walls.",
    "explanationUk": "R603.6 вимагає перемички над усіма прорізами зовнішніх і внутрішніх несучих стін."
  },
  {
    "section": "R603.6",
    "question": "What basic member combination forms a prescriptive steel box-beam or back-to-back header?",
    "questionUk": "Яке базове поєднання профілів утворює приписову сталеву коробчасту чи спарену спинками перемичку?",
    "answers": [
      [
        "Two equal-sized C-shaped members",
        "Два C-профілі однакового розміру"
      ],
      [
        "One track without any C-shaped member",
        "Одна напрямна без C-профілю"
      ],
      [
        "Two unrelated sizes chosen only by availability",
        "Два довільні розміри за наявністю"
      ],
      [
        "One gypsum strip and one steel strap",
        "Гіпсова смуга та сталева стрічка"
      ],
      [
        "Only a single sheet-metal flashing",
        "Лише один лист відливу"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R603.6 specifies two equal-sized C-shaped members, assembled to the applicable figures and span tables.",
    "explanationUk": "R603.6 задає два однакові C-профілі, зібрані за відповідними схемами й таблицями прольотів."
  },
  {
    "section": "R603.6.1(1)",
    "question": "Using the gable-endwall header alternative, an opening is exactly 4 feet wide. Which member pair is specified?",
    "questionUk": "За альтернативою перемички фронтонної стіни проріз має ширину рівно 4 фути. Яку пару профілів задано?",
    "answers": [
      [
        "Two 362S162-33 members",
        "Два профілі 362S162-33"
      ],
      [
        "Two 250S125-18 members",
        "Два профілі 250S125-18"
      ],
      [
        "One 362S162-33 member",
        "Один профіль 362S162-33"
      ],
      [
        "Two 600S162-27 members",
        "Два профілі 600S162-27"
      ],
      [
        "One 800S162-54 member",
        "Один профіль 800S162-54"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The first alternative covers openings up to and including 4 feet with two 362S162-33 members directly above the opening.",
    "explanationUk": "Перший варіант охоплює прорізи до 4 футів включно двома 362S162-33 безпосередньо над прорізом."
  },
  {
    "section": "R603.6.1(3)",
    "question": "A 7-foot gable-endwall opening uses the specified alternative header detail. Which member pair applies?",
    "questionUk": "Для фронтонного прорізу 7 футів застосовують заданий альтернативний вузол перемички. Яка пара профілів потрібна?",
    "answers": [
      [
        "Two 800S162-54 members",
        "Два профілі 800S162-54"
      ],
      [
        "Two 362S162-33 members",
        "Два профілі 362S162-33"
      ],
      [
        "One 600S162-43 member",
        "Один профіль 600S162-43"
      ],
      [
        "Two 600S162-33 members",
        "Два профілі 600S162-33"
      ],
      [
        "One 350S162-18 member",
        "Один профіль 350S162-18"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Openings greater than 6 feet and at most 9 feet use two 800S162-54 members under this alternative.",
    "explanationUk": "Прорізи понад 6 і до 9 футів включно за цією альтернативою потребують двох 800S162-54."
  },
  {
    "section": "R603.7",
    "question": "How must steel king, jack and cripple stud dimensions and thickness relate to adjacent wall studs?",
    "questionUk": "Як розміри й товщина сталевих king, jack та коротких стійок мають співвідноситися із сусідніми стійками стіни?",
    "answers": [
      [
        "They must be the same dimension and thickness",
        "Мати ті самі розміри й товщину"
      ],
      [
        "They may always be half as thick",
        "Завжди можуть мати половину товщини"
      ],
      [
        "Only the paint color must match",
        "Має збігатися лише колір"
      ],
      [
        "Only the king studs must match; others are unrestricted",
        "Збіг потрібен лише king; інші необмежені"
      ],
      [
        "They must always be smaller",
        "Завжди повинні бути меншими"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R603.7 requires these studs to match adjacent wall studs in dimension and thickness.",
    "explanationUk": "R603.7 вимагає відповідності цих стійок сусіднім стіновим за розмірами й товщиною."
  },
  {
    "section": "Table R603.7(1)",
    "question": "A steel wall opening is 5 feet 3 inches wide. How do required jack studs at EACH end differ between 24-inch and 16-inch stud spacing?",
    "questionUk": "Сталевий стіновий проріз має ширину 5 футів 3 дюйми. Як відрізняється кількість jack-стійок на КОЖНОМУ кінці за кроку стійок 24 і 16 дюймів?",
    "answers": [
      [
        "One at 24-inch spacing; two at 16-inch spacing",
        "Одна за кроку 24 дюйми; дві за кроку 16 дюймів"
      ],
      [
        "Two at 24-inch spacing; one at 16-inch spacing",
        "Дві за кроку 24 дюйми; одна за кроку 16 дюймів"
      ],
      [
        "One for both spacings",
        "Одна для обох кроків"
      ],
      [
        "Three for both spacings",
        "Три для обох кроків"
      ],
      [
        "Zero for both spacings",
        "Нуль для обох кроків"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The greater-than-5-foot through 5-foot-6-inch row gives one jack at 24 inches and two at 16 inches per end; each arrangement also needs two king studs.",
    "explanationUk": "Рядок понад 5 футів до 5 футів 6 дюймів задає одну jack за кроку 24 та дві за кроку 16 на кінець; також потрібно по дві king."
  },
  {
    "section": "Table R603.7(1)",
    "question": "For a 12-foot-6-inch opening in a steel wall with studs at 24 inches on center, what stud combination is required at EACH end?",
    "questionUk": "Для прорізу 12 футів 6 дюймів у сталевій стіні з кроком стійок 24 дюйми яка комбінація потрібна на КОЖНОМУ кінці?",
    "answers": [
      [
        "Two jack and three king studs",
        "Дві jack і три king"
      ],
      [
        "One jack and one king stud",
        "Одна jack і одна king"
      ],
      [
        "Two jack and two king studs",
        "Дві jack і дві king"
      ],
      [
        "Three jack and four king studs",
        "Три jack і чотири king"
      ],
      [
        "Four jack and four king studs",
        "Чотири jack і чотири king"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The greater-than-12-foot through 13-foot row at 24-inch spacing specifies two jack and three king studs at each end.",
    "explanationUk": "Рядок понад 12 до 13 футів за кроку 24 дюйми задає дві jack та три king на кожному кінці."
  },
  {
    "section": "R603.7(1)",
    "question": "A box-beam header-to-king connection requires eight screws in total. How are they divided between header and king stud through the connecting section?",
    "questionUk": "З’єднання коробчастої перемички з king-стійкою потребує загалом восьми шурупів. Як їх ділять між перемичкою та стійкою через з’єднувальний профіль?",
    "answers": [
      [
        "Four into the header and four into the king stud",
        "Чотири в перемичку й чотири в king-стійку"
      ],
      [
        "Eight into the header and none into the king",
        "Вісім у перемичку й нуль у king"
      ],
      [
        "Six into the header and two into the king",
        "Шість у перемичку й два в king"
      ],
      [
        "Two into the header and six into the king",
        "Два в перемичку й шість у king"
      ],
      [
        "Any division totaling eight",
        "Будь-який поділ із сумою вісім"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "R603.7 assigns half the required screws to each connected member.",
    "explanationUk": "R603.7 призначає половину потрібних шурупів кожному з’єднуваному елементу."
  },
  {
    "section": "R603.7(1)",
    "question": "A steel box header is 10 inches deep. What vertical length is required for its connecting track or C-section under the depth-minus-1/2-inch detail?",
    "questionUk": "Висота сталевої коробчастої перемички — 10 дюймів. Яка вертикальна довжина з’єднувальної напрямної чи C-профілю потрібна за вузлом висота мінус 1/2 дюйма?",
    "answers": [
      [
        "9-1/2 inches",
        "9-1/2 дюйма"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "8-1/2 inches",
        "8-1/2 дюйма"
      ],
      [
        "9 inches",
        "9 дюймів"
      ],
      [
        "10-1/2 inches",
        "10-1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The connecting section extends header depth minus 1/2 inch: 10 − 0.5 = 9.5 inches; its thickness must also meet the wall-stud minimum.",
    "explanationUk": "З’єднувальний профіль має довжину висота перемички мінус 1/2 дюйма: 10 − 0,5 = 9,5; товщина також має відповідати мінімуму стійки."
  },
  {
    "section": "R603.7(2)",
    "question": "What minimum clip-angle leg dimensions connect a back-to-back steel header to its king stud?",
    "questionUk": "Які мінімальні розміри полиць кутника для з’єднання сталевої перемички зі спарених спинками профілів із king-стійкою?",
    "answers": [
      [
        "2 inches by 2 inches",
        "2 на 2 дюйми"
      ],
      [
        "1/2 inch by 1/2 inch",
        "1/2 на 1/2 дюйма"
      ],
      [
        "1 inch by 1 inch",
        "1 на 1 дюйм"
      ],
      [
        "1 inch by 1-1/2 inches",
        "1 на 1-1/2 дюйма"
      ],
      [
        "1-1/4 inches by 1-1/4 inches",
        "1-1/4 на 1-1/4 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R603.7(2) specifies at least a 2-by-2-inch clip angle, with the stated depth and thickness requirements.",
    "explanationUk": "R603.7(2) задає кутник не менше 2 на 2 дюйми разом із вимогами довжини й товщини."
  },
  {
    "section": "Table R603.7(2), Footnote c",
    "question": "A connection has a base requirement of six screws. Apply ONLY the roof-slope reduction for a 6:12 roof. What screw count remains after respecting the minimum?",
    "questionUk": "Базова вимога з’єднання — шість шурупів. Застосуйте ЛИШЕ зменшення за ухилу даху 6:12. Яка кількість залишається з урахуванням мінімуму?",
    "answers": [
      [
        "Four screws",
        "Чотири шурупи"
      ],
      [
        "Three screws",
        "Три шурупи"
      ],
      [
        "Two screws",
        "Два шурупи"
      ],
      [
        "One screw",
        "Один шуруп"
      ],
      [
        "Zero screws",
        "Нуль шурупів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Footnote c permits halving at slopes of 6:12 or greater but never fewer than four screws. Half of six is three, so four governs.",
    "explanationUk": "Примітка c дозволяє половину за ухилу від 6:12, але не менше чотирьох. Половина шести — три, тому визначальним є чотири."
  },
  {
    "section": "Table R603.7(2), Footnote d",
    "question": "Eight required screws will be replaced by a permitted uplift connector. What minimum connector capacity follows the table's conversion?",
    "questionUk": "Вісім потрібних шурупів замінять дозволеним з’єднувачем проти підйому. Яка мінімальна несуча здатність випливає з табличного перерахунку?",
    "answers": [
      [
        "1,312 pounds",
        "1 312 фунтів"
      ],
      [
        "656 pounds",
        "656 фунтів"
      ],
      [
        "800 pounds",
        "800 фунтів"
      ],
      [
        "1,000 pounds",
        "1 000 фунтів"
      ],
      [
        "1,640 pounds",
        "1 640 фунтів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Footnote d uses required screw count × 164 pounds: 8 × 164 = 1,312 pounds.",
    "explanationUk": "Примітка d використовує кількість потрібних шурупів × 164 фунти: 8 × 164 = 1 312 фунтів."
  }
];
export const intakeVerified133 = verifiedBatch(1581, "Carpentry", "Headers", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-133-138", true, "2026-11-02");
