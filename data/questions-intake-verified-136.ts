import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Table R606.9",
    "question": "For solid brick masonry in the 4,500-psi unit-strength row, which allowable compressive-stress pair applies to Type M/S and Type N mortar, respectively?",
    "questionUk": "Для повнотілого цегляного мурування в рядку міцності блоків 4 500 psi яка пара допустимих напружень стиску діє відповідно для розчинів M/S та N?",
    "answers": [
      [
        "225 psi and 200 psi",
        "225 та 200 psi"
      ],
      [
        "200 psi and 225 psi",
        "200 та 225 psi"
      ],
      [
        "350 psi and 300 psi",
        "350 та 300 psi"
      ],
      [
        "160 psi and 140 psi",
        "160 та 140 psi"
      ],
      [
        "115 psi and 100 psi",
        "115 та 100 psi"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The 4,500-psi solid-brick row lists 225 psi for M/S mortar and 200 psi for N. These are masonry allowable stresses, not the unit's strength.",
    "explanationUk": "Рядок повнотілої цегли 4 500 psi дає 225 psi для M/S і 200 для N. Це допустимі напруження мурування, а не міцність окремої цегли."
  },
  {
    "section": "Table R606.9",
    "question": "Hollow load-bearing units have 1,500-psi gross-area compressive strength and Type N mortar. What allowable masonry compressive stress is listed?",
    "questionUk": "Порожнисті несучі блоки мають міцність 1 500 psi за повною площею та розчин N. Яке допустиме напруження стиску мурування в таблиці?",
    "answers": [
      [
        "100 psi",
        "Напруження 100 psi"
      ],
      [
        "55 psi",
        "Напруження 55 psi"
      ],
      [
        "70 psi",
        "Напруження 70 psi"
      ],
      [
        "120 psi",
        "Напруження 120 psi"
      ],
      [
        "200 psi",
        "Напруження 200 psi"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The hollow load-bearing 1,500-psi row and Type N column give 100 psi.",
    "explanationUk": "Перетин рядка порожнистих несучих блоків 1 500 psi та колонки N дає 100 psi."
  },
  {
    "section": "Table R606.9",
    "question": "Solid concrete masonry units have 2,000-psi gross-area strength and Type M mortar. What allowable masonry compressive stress applies from the table?",
    "questionUk": "Повнотілі бетонні блоки мають міцність 2 000 psi за повною площею та розчин M. Яке допустиме напруження стиску мурування за таблицею?",
    "answers": [
      [
        "160 psi",
        "Напруження 160 psi"
      ],
      [
        "75 psi",
        "Напруження 75 psi"
      ],
      [
        "100 psi",
        "Напруження 100 psi"
      ],
      [
        "140 psi",
        "Напруження 140 psi"
      ],
      [
        "225 psi",
        "Напруження 225 psi"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The solid concrete masonry 2,000-psi row lists 160 psi for Type M or S mortar.",
    "explanationUk": "Рядок повнотілих бетонних блоків 2 000 psi задає 160 psi для розчину M або S."
  },
  {
    "section": "Table R606.9",
    "question": "Which allowable compressive-stress pair is listed for granite ashlar masonry with Type M/S versus Type N mortar?",
    "questionUk": "Яка пара допустимих напружень стиску задана для гранітного ashlar-мурування з розчином M/S та N?",
    "answers": [
      [
        "720 psi and 640 psi",
        "720 та 640 psi"
      ],
      [
        "640 psi and 720 psi",
        "640 та 720 psi"
      ],
      [
        "450 psi and 400 psi",
        "450 та 400 psi"
      ],
      [
        "360 psi and 320 psi",
        "360 та 320 psi"
      ],
      [
        "120 psi and 100 psi",
        "120 та 100 psi"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Granite ashlar is listed at 720 psi with M/S mortar and 640 psi with N mortar.",
    "explanationUk": "Для гранітного ashlar таблиця дає 720 psi з M/S та 640 psi з N."
  },
  {
    "section": "Table R606.9",
    "question": "For coarse, rough or random rubble-stone masonry with Type N mortar, what allowable compressive stress is listed?",
    "questionUk": "Яке допустиме напруження стиску задано для грубого чи випадкового бутового мурування з розчином N?",
    "answers": [
      [
        "100 psi",
        "Напруження 100 psi"
      ],
      [
        "120 psi",
        "Напруження 120 psi"
      ],
      [
        "200 psi",
        "Напруження 200 psi"
      ],
      [
        "320 psi",
        "Напруження 320 psi"
      ],
      [
        "400 psi",
        "Напруження 400 psi"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The rubble-stone row gives 100 psi for Type N mortar; its M/S entry is 120 psi.",
    "explanationUk": "Рядок бутового мурування дає 100 psi для N; значення M/S — 120 psi."
  },
  {
    "section": "Table R606.9, Footnote a",
    "question": "Solid brick units have 3,500-psi strength with Type M mortar. The table gives 160 psi at 2,500 and 225 psi at 4,500. What allowable stress follows required linear interpolation?",
    "questionUk": "Повнотіла цегла має міцність 3 500 psi з розчином M. Таблиця дає 160 psi при 2 500 та 225 при 4 500. Яке напруження виходить за потрібною лінійною інтерполяцією?",
    "answers": [
      [
        "192.5 psi",
        "Напруження 192,5 psi"
      ],
      [
        "160 psi",
        "Напруження 160 psi"
      ],
      [
        "180 psi",
        "Напруження 180 psi"
      ],
      [
        "200 psi",
        "Напруження 200 psi"
      ],
      [
        "225 psi",
        "Напруження 225 psi"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "3,500 is halfway between 2,500 and 4,500, so interpolate halfway: 160 + (225 − 160)/2 = 192.5 psi.",
    "explanationUk": "3 500 лежить посередині між 2 500 і 4 500; отже 160 + (225 − 160)/2 = 192,5 psi."
  },
  {
    "section": "Table R606.9, Footnote b",
    "question": "A masonry section is nominally 8 by 16 inches but actually 7.625 by 15.625 inches. Which gross area should be used, rounded to two decimals?",
    "questionUk": "Переріз мурування номінально 8 на 16 дюймів, фактично 7,625 на 15,625. Яку повну площу слід брати з округленням до сотих?",
    "answers": [
      [
        "119.14 square inches",
        "119,14 квадратного дюйма"
      ],
      [
        "128.00 square inches",
        "128,00 квадратного дюйма"
      ],
      [
        "120.00 square inches",
        "120,00 квадратного дюйма"
      ],
      [
        "112.00 square inches",
        "112,00 квадратного дюйма"
      ],
      [
        "122.00 square inches",
        "122,00 квадратного дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Footnote b requires actual dimensions: 7.625 × 15.625 = 119.140625 square inches, or 119.14 rounded.",
    "explanationUk": "Примітка b вимагає фактичні розміри: 7,625 × 15,625 = 119,140625 квадратного дюйма, округлено 119,14."
  },
  {
    "section": "Table R606.9, Footnote d",
    "question": "A cavity wall carries floor and roof loads on only one wythe. What gross cross-sectional area is used for the table's stress check?",
    "questionUk": "Порожниста двошарова стіна несе навантаження підлог і даху лише одним шаром. Яку повну площу перерізу беруть для табличної перевірки напружень?",
    "answers": [
      [
        "The area of the loaded wythe",
        "Площу навантаженого шару"
      ],
      [
        "The exterior envelope including the empty cavity",
        "Зовнішній габарит із порожниною"
      ],
      [
        "Twice the unloaded wythe area",
        "Подвійну площу ненавантаженого шару"
      ],
      [
        "The entire wall area with no cavity deduction",
        "Площу всієї стіни без виключення порожнини"
      ],
      [
        "Only the cavity's area",
        "Лише площу порожнини"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Where only one wythe carries the floor/roof loads, footnote d uses that wythe's gross area.",
    "explanationUk": "Коли підлоги й дах навантажують лише один шар, примітка d використовує повну площу саме цього шару."
  },
  {
    "section": "Table R606.9, Footnote d",
    "question": "For the table's area treatment, a wall bonded with metal ties is considered a cavity wall unless what condition is met?",
    "questionUk": "Коли стіну, зв’язану металевими зв’язками, для табличного визначення площі перестають вважати порожнистою?",
    "answers": [
      [
        "The collar joints are filled with mortar or grout",
        "Коли проміжні collar joints заповнені розчином чи grout"
      ],
      [
        "The exterior is painted",
        "Коли зовнішню поверхню пофарбовано"
      ],
      [
        "The ties are hidden from view",
        "Коли зв’язків не видно"
      ],
      [
        "The wall has interior wallpaper",
        "Коли всередині є шпалери"
      ],
      [
        "The cavity is described as decorative",
        "Коли порожнину названо декоративною"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Footnote d treats metal-tied walls as cavity walls unless their collar joints are mortar- or grout-filled.",
    "explanationUk": "Примітка d вважає стіни на металевих зв’язках порожнистими, якщо проміжні шви не заповнені розчином або grout."
  },
  {
    "section": "R606.9; Table R606.9",
    "question": "For an isolated axial stress calculation ONLY, allowable stress is 100 psi and the applicable actual gross area is 120 square inches. What axial load equals that stress limit?",
    "questionUk": "ЛИШЕ для окремого розрахунку осьового напруження допустиме напруження — 100 psi, застосовна фактична повна площа — 120 квадратних дюймів. Яка сила відповідає цій межі?",
    "answers": [
      [
        "12,000 pounds",
        "12 000 фунтів"
      ],
      [
        "1,200 pounds",
        "1 200 фунтів"
      ],
      [
        "10,000 pounds",
        "10 000 фунтів"
      ],
      [
        "20,000 pounds",
        "20 000 фунтів"
      ],
      [
        "120,000 pounds",
        "120 000 фунтів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "Load = stress × area = 100 × 120 = 12,000 pounds. This isolated check does not replace checks for all loads, eccentricity and other conditions required by R606.9.",
    "explanationUk": "Сила = напруження × площа = 100 × 120 = 12 000 фунтів. Ця окрема перевірка не замінює всіх навантажень, ексцентриситету й інших умов R606.9."
  },
  {
    "section": "R606.10",
    "question": "Select THREE listed support types for masonry above openings, each designed for the imposed load.",
    "questionUk": "Оберіть ТРИ перелічені опори мурування над прорізами, кожна розрахована на прикладене навантаження.",
    "answers": [
      [
        "Steel lintels",
        "Сталеві перемички"
      ],
      [
        "Reinforced concrete lintels",
        "Залізобетонні перемички"
      ],
      [
        "Masonry arches",
        "Муровані арки"
      ],
      [
        "Gypsum-board strips alone",
        "Лише гіпсові смуги"
      ],
      [
        "Unsupported foam sheathing",
        "Пінна обшивка без опор"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "difficulty": "medium",
    "explanation": "R606.10 lists steel lintels, reinforced concrete or masonry lintels and masonry arches, designed to support imposed loads.",
    "explanationUk": "R606.10 перелічує сталеві, залізобетонні чи армовані муровані перемички та муровані арки, розраховані на прикладені навантаження."
  },
  {
    "section": "R606.11",
    "question": "May a footing be considered a point of lateral support for masonry walls under R606.11?",
    "questionUk": "Чи можна вважати фундаментну підошву точкою бічної опори мурованої стіни за R606.11?",
    "answers": [
      [
        "Yes; the section expressly permits it",
        "Так; розділ прямо це дозволяє"
      ],
      [
        "No; only roof framing qualifies",
        "Ні; підходить лише дах"
      ],
      [
        "No; footings provide vertical support only under this section",
        "Ні; за цим розділом підошва дає лише вертикальну опору"
      ],
      [
        "Only if the wall contains no mortar",
        "Лише за відсутності розчину"
      ],
      [
        "Only if all floor anchorage is omitted",
        "Лише якщо прибрано всі анкери підлоги"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "R606.11 permits footings as lateral-support points while separately requiring masonry-to-floor/roof anchorage to the cited details.",
    "explanationUk": "R606.11 дозволяє підошви як точки бічної опори та окремо вимагає анкерування мурування до підлог/дахів за згаданими вузлами."
  }
];
export const intakeVerified136 = verifiedBatch(1617, "Footings and Foundations", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-133-138", true, "2026-11-02");
