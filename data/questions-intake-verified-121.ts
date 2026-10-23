import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R603.3.4",
    "difficulty": "medium",
    "question": "An installer wants to notch a cold-formed steel wall stud's flange to route a pipe. What does R603.3.4 require?",
    "questionUk": "Монтажник хоче вирізати паз у полиці холодногнутої сталевої стійки стіни для труби. Що вимагає R603.3.4?",
    "answers": [
      [
        "Do not cut or notch the flange",
        "Не різати й не робити паз у полиці"
      ],
      [
        "Permit a notch up to one-quarter of flange width",
        "Дозволити паз до чверті ширини полиці"
      ],
      [
        "Permit a notch anywhere above midheight",
        "Дозволити паз будь-де вище середини"
      ],
      [
        "Apply the wood-stud notch limit",
        "Застосувати межу пазів дерев’яних стійок"
      ],
      [
        "Permit a notch if the lip is left intact",
        "Дозволити паз, якщо відгин краю збережено"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.3.4 prohibits cutting or notching flanges and lips of steel wall studs and headers. Web-hole provisions do not authorize flange cuts.",
    "explanationUk": "R603.3.4 забороняє різати полиці й відгини сталевих стійок та перемичок. Правила отворів у стінках профілів не дозволяють різати полиці."
  },
  {
    "section": "R603.3.5",
    "difficulty": "medium",
    "question": "A crew proposes a field splice in a load-bearing steel wall stud. What is required before that stud splice is permitted?",
    "questionUk": "Бригада пропонує монтажний стик несучої сталевої стійки стіни. Що потрібно для дозволу такого стику?",
    "answers": [
      [
        "An approved design",
        "Затверджений проєкт"
      ],
      [
        "Only the track-splice sketch applied without review",
        "Лише схема стику напрямних без перевірки"
      ],
      [
        "Only four drywall screws",
        "Лише чотири шурупи гіпсокартону"
      ],
      [
        "Only approval from the siding installer",
        "Лише згода монтажника сайдингу"
      ],
      [
        "No design if both pieces have the same thickness",
        "Проєкт не потрібен за однакової товщини частин"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.3.5 prohibits splicing steel studs and other structural members without an approved design. Track splices have their own figure and do not automatically authorize stud splices.",
    "explanationUk": "R603.3.5 забороняє стикувати сталеві стійки й інші конструкційні елементи без затвердженого проєкту. Окрема схема стиків напрямних не є автоматичним дозволом стиків стійок."
  },
  {
    "section": "R603.3.3(2)",
    "difficulty": "exam",
    "question": "Under the both-sides horizontal-strap bracing option, where are straps placed for 8-foot walls versus 9- or 10-foot walls?",
    "questionUk": "Де розміщують горизонтальні стрічки за варіантом двобічного розкріплення для стін 8 футів і стін 9 або 10 футів?",
    "answers": [
      [
        "At midheight for 8 feet; at one-third points for 9 or 10 feet",
        "На половині висоти для 8 футів; у третинах для 9 або 10 футів"
      ],
      [
        "At midheight for every wall height",
        "На половині висоти для будь-якої стіни"
      ],
      [
        "At the top only for 8 feet; at the bottom only for 10 feet",
        "Лише вгорі для 8 футів; лише внизу для 10 футів"
      ],
      [
        "At quarter points for every wall height",
        "У чвертях висоти для всіх стін"
      ],
      [
        "Only at each window sill",
        "Лише на кожному підвіконні"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.3.3(2) distinguishes midheight straps for 8-foot walls from third-point straps for 9- and 10-foot walls. The straps are installed on both sides under this option.",
    "explanationUk": "R603.3.3(2) розрізняє стрічки посередині 8-футових стін та у третинах 9- і 10-футових. За цим варіантом стрічки встановлюють з обох боків."
  },
  {
    "section": "R603.3.3(2)",
    "difficulty": "easy",
    "question": "What minimum width and thickness apply to horizontal steel straps used for steel wall-stud bracing?",
    "questionUk": "Які мінімальні ширина й товщина горизонтальних сталевих стрічок для розкріплення стійок сталевих стін?",
    "answers": [
      [
        "1-1/2 inches wide and 33 mils thick",
        "Ширина 1-1/2 дюйма й товщина 33 mil"
      ],
      [
        "1 inch wide and 18 mils thick",
        "Ширина 1 дюйм і товщина 18 mil"
      ],
      [
        "1-1/4 inches wide and 27 mils thick",
        "Ширина 1-1/4 дюйма й товщина 27 mil"
      ],
      [
        "3/4 inch wide and 33 mils thick",
        "Ширина 3/4 дюйма й товщина 33 mil"
      ],
      [
        "1-1/2 inches wide and 18 mils thick",
        "Ширина 1-1/2 дюйма й товщина 18 mil"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.3.3(2) requires straps at least 1-1/2 inches wide and 33 mils thick. Both minimum dimensions apply.",
    "explanationUk": "R603.3.3(2) вимагає стрічки завширшки щонайменше 1-1/2 дюйма та завтовшки 33 mil. Обидва мінімуми обов’язкові."
  },
  {
    "section": "R603.3.3(2)",
    "difficulty": "medium",
    "question": "In-line blocking is provided at steel wall-bracing strap terminations. What maximum interval also applies to blocking along the strap?",
    "questionUk": "У кінцях стрічок розкріплення сталевої стіни передбачено блокування між стійками. Який найбільший крок блокування також діє вздовж стрічки?",
    "answers": [
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
      ],
      [
        "24 feet",
        "24 фути"
      ],
      [
        "32 feet",
        "32 фути"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.3.3(2) requires blocking at strap terminations and at 12-foot intervals along the strap. End blocking alone is insufficient for longer runs.",
    "explanationUk": "R603.3.3(2) вимагає блокування на кінцях стрічок і з кроком 12 футів уздовж них. Для довгих стрічок лише кінцевого блокування недостатньо."
  },
  {
    "section": "R603.9.2",
    "difficulty": "exam",
    "question": "Before any special hold-down adjustment, a 40-foot steel braced wall line has a calculated full-height sheathing requirement below the basic minimum. What minimum length follows the 20-percent floor in R603.9.2?",
    "questionUk": "До спеціального коригування з hold-down розрахована довжина суцільної обшивки сталевої розкріпленої стіни завдовжки 40 футів нижча за базовий мінімум. Який мінімум випливає з межі 20% у R603.9.2?",
    "answers": [
      [
        "8 feet",
        "8 футів"
      ],
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
        "7 feet",
        "7 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The basic minimum is 20 percent of the braced wall line: 40 × 0.20 = 8 feet. This question excludes the separate lowest-story hold-down adjustment.",
    "explanationUk": "Базовий мінімум — 20% довжини розкріпленої стіни: 40 × 0,20 = 8 футів. Окреме коригування нижнього поверху з hold-down тут виключене."
  },
  {
    "section": "R603.9.2",
    "difficulty": "medium",
    "question": "Which sheathed steel-wall segment can count toward the minimum full-height sheathing percentage, assuming all other requirements are met?",
    "questionUk": "Яка обшита ділянка сталевої стіни може зараховуватися до мінімальної частки обшивки на всю висоту за виконання інших вимог?",
    "answers": [
      [
        "48 inches wide, uninterrupted from bottom track to top track",
        "Завширшки 48 дюймів, без прорізів від нижньої до верхньої напрямної"
      ],
      [
        "36 inches wide, uninterrupted full height",
        "Завширшки 36 дюймів, без прорізів на всю висоту"
      ],
      [
        "48 inches wide with a window interrupting it",
        "Завширшки 48 дюймів, але перервана вікном"
      ],
      [
        "24 inches wide, uninterrupted full height",
        "Завширшки 24 дюйми, без прорізів на всю висоту"
      ],
      [
        "60 inches wide but stopping below the top track",
        "Завширшки 60 дюймів, але нижча за верхню напрямну"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Counted sections must be at least 48 inches wide and extend full height without interruption by openings. Merely having enough panel area does not satisfy the geometry.",
    "explanationUk": "Зараховувані ділянки мають бути завширшки щонайменше 48 дюймів і безперервними на всю висоту без прорізів. Самої достатньої площі плит недостатньо."
  },
  {
    "section": "R603.9.2(2)",
    "difficulty": "exam",
    "question": "Structural sheathing is installed with its long dimension perpendicular to steel wall studs. Which minimum blocking and joint-fastening detail is specified?",
    "questionUk": "Конструкційну обшивку встановлюють довгою стороною перпендикулярно сталевим стійкам. Які мінімальні блокування й кріплення стику задано?",
    "answers": [
      [
        "33-mil blocking with No. 8 screws at 6 inches on center",
        "Блокування 33 mil із шурупами No. 8 через 6 дюймів по осях"
      ],
      [
        "18-mil blocking with finish nails at 12 inches",
        "Блокування 18 mil з оздоблювальними цвяхами через 12 дюймів"
      ],
      [
        "No blocking if the panel is painted",
        "Без блокування, якщо плиту фарбують"
      ],
      [
        "Gypsum offcuts with staples at 24 inches",
        "Обрізки гіпсу зі скобами через 24 дюйми"
      ],
      [
        "33-mil blocking with screws only at the ends",
        "Блокування 33 mil з шурупами лише на кінцях"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.9.2 requires horizontal joints to be blocked where panels run perpendicular to studs. Blocking is at least 33 mils and each panel is attached to it with No. 8 screws at 6 inches on center.",
    "explanationUk": "R603.9.2 вимагає блокувати горизонтальні стики при перпендикулярному розташуванні плит. Товщина блокування — щонайменше 33 mil; кожну плиту кріплять до нього No. 8 через 6 дюймів."
  },
  {
    "section": "R603.9.2.1",
    "difficulty": "exam",
    "question": "A base full-height sheathing percentage is 30 percent for a steel wall. Before other adjustments, what percentage results for a 10-foot-high wall under R603.9.2.1?",
    "questionUk": "Базова частка обшивки на всю висоту сталевої стіни — 30%. До інших коригувань яка частка виходить для стіни заввишки 10 футів за R603.9.2.1?",
    "answers": [
      [
        "36 percent",
        "36 відсотків"
      ],
      [
        "30 percent",
        "30 відсотків"
      ],
      [
        "32 percent",
        "32 відсотки"
      ],
      [
        "33 percent",
        "33 відсотки"
      ],
      [
        "40 percent",
        "40 відсотків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Ten-foot walls use a 1.20 multiplier: 30% × 1.20 = 36%. The 1.10 multiplier applies to 9-foot walls.",
    "explanationUk": "Для 10-футових стін множник становить 1,20: 30% × 1,20 = 36%. Множник 1,10 застосовується до 9-футових стін."
  },
  {
    "section": "R603.9.2.2",
    "difficulty": "medium",
    "question": "What condition accompanies the permitted 0.6 multiplier to the table's full-height sheathing percentage in the lowest dwelling story?",
    "questionUk": "Яка умова супроводжує дозволений множник 0,6 до табличної частки обшивки на всю висоту найнижчого поверху житла?",
    "answers": [
      [
        "Provide hold-down anchors complying with R603.9.4.2",
        "Передбачити hold-down анкери за R603.9.4.2"
      ],
      [
        "Omit all end anchorage",
        "Прибрати всі кінцеві анкери"
      ],
      [
        "Use the multiplier on any story without conditions",
        "Застосувати множник на будь-якому поверсі без умов"
      ],
      [
        "Remove sheathing around corners",
        "Зняти обшивку біля кутів"
      ],
      [
        "Replace structural sheathing with housewrap",
        "Замінити конструкційну обшивку мембраною"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.9.2.2 permits the lowest-story adjustment only with hold-down anchors under R603.9.4.2. It is a conditional reduction, not a general sheathing discount.",
    "explanationUk": "R603.9.2.2 дозволяє коригування найнижчого поверху лише з hold-down анкерами за R603.9.4.2. Це умовне зменшення, а не загальна знижка обшивки."
  },
  {
    "section": "R603.9.4.2",
    "difficulty": "medium",
    "question": "When the lowest-story sheathing adjustment is used, what strength is specified for the hold-down anchor at each end of each counted full-height sheathed section?",
    "questionUk": "За коригування обшивки найнижчого поверху яка міцність задана для hold-down анкера на кожному кінці кожної зарахованої повновисотної ділянки?",
    "answers": [
      [
        "4,300 pounds",
        "4 300 фунтів"
      ],
      [
        "1,000 pounds",
        "1 000 фунтів"
      ],
      [
        "1,500 pounds",
        "1 500 фунтів"
      ],
      [
        "2,000 pounds",
        "2 000 фунтів"
      ],
      [
        "3,000 pounds",
        "3 000 фунтів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R603.9.4.2 specifies 4,300-pound hold-down strength at each end, with attachment to back-to-back studs. A single corner anchor is separately permitted when installed to the cited figure.",
    "explanationUk": "R603.9.4.2 задає міцність 4 300 фунтів на кожному кінці з кріпленням до спарених спинками стійок. Один кутовий анкер окремо дозволено за відповідною схемою."
  },
  {
    "section": "Table R603.8, Footnote c",
    "difficulty": "exam",
    "question": "Table R603.8 gives 6 feet 9 inches for a 350T125-43 track at 115 mph, Exposure B. An opening is exactly 6 feet high and has both head and sill tracks. What adjusted allowable span follows footnote c?",
    "questionUk": "Таблиця R603.8 дає 6 футів 9 дюймів для напрямної 350T125-43 при 115 mph, Exposure B. Проріз має висоту рівно 6 футів та верхню й підвіконну напрямні. Який скоригований допустимий проліт за приміткою c?",
    "answers": [
      [
        "10 feet 1-1/2 inches",
        "10 футів 1-1/2 дюйма"
      ],
      [
        "6 feet 9 inches",
        "6 футів 9 дюймів"
      ],
      [
        "8 feet 5-1/4 inches",
        "8 футів 5-1/4 дюйма"
      ],
      [
        "11 feet 9-3/4 inches",
        "11 футів 9-3/4 дюйма"
      ],
      [
        "13 feet 6 inches",
        "13 футів 6 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote c permits 1.5 for openings at most 6 feet high with both tracks: 81 inches × 1.5 = 121.5 inches, or 10 feet 1-1/2 inches. The 1.75 factor requires height less than 4 feet.",
    "explanationUk": "Примітка c дозволяє 1,5 для прорізів не вище 6 футів з обома напрямними: 81 × 1,5 = 121,5 дюйма, тобто 10 футів 1-1/2 дюйма. Множник 1,75 потребує висоти менше 4 футів."
  }
];
export const intakeVerified121 = verifiedBatch(1437, "Carpentry", "Wall Bracing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-121-126", true, "2026-10-22");
