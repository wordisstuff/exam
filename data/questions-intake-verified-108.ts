import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 516.2(a)(7)",
    "difficulty": "medium",
    "question": "For a nonexempt employee subject to the cited FLSA record rule, which hours must the payroll records show?",
    "questionUk": "Які години роботи мають містити зарплатні записи працівника, на якого поширюються вимоги FLSA щодо обліку часу та оплати понаднормових?",
    "answers": [
      [
        "Hours worked each workday and total hours each workweek",
        "Години кожного робочого дня та загальні години кожного робочого тижня"
      ],
      [
        "Only the number of calendar months employed",
        "Лише кількість календарних місяців роботи"
      ],
      [
        "Only overtime hours, with all other hours omitted",
        "Лише понаднормові години без решти часу"
      ],
      [
        "Only total hours for the entire year",
        "Лише підсумок годин за рік"
      ],
      [
        "Only the estimated hours in the bid",
        "Лише години з кошторису пропозиції"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The rule requires daily hours and weekly totals. The fixed-schedule recording alternative has additional conditions under paragraph (c).",
    "explanationUk": "Правило вимагає щоденних годин і тижневих підсумків. Альтернатива для сталого графіка має додаткові умови пункту (c)."
  },
  {
    "section": "29 CFR 516.2(a)(5)",
    "difficulty": "medium",
    "question": "Every employee in a contractor's workforce starts the workweek at the same time and on the same day. How may that workweek-start information be recorded under 516.2(a)(5)?",
    "questionUk": "У всіх працівників підрядника робочий тиждень починається того самого дня й у той самий час. Як за 516.2(a)(5) можна записати ці дані?",
    "answers": [
      [
        "One notation of the starting day and time for the whole workforce",
        "Однією приміткою про початкові день і час для всього колективу"
      ],
      [
        "Omit all workweek-start information",
        "Не фіксувати початок тижня"
      ],
      [
        "Record only the payday",
        "Записати лише день виплати"
      ],
      [
        "Record only the first employee's birth date",
        "Записати лише дату народження першого працівника"
      ],
      [
        "Use a different unrecorded starting time each week",
        "Щотижня використовувати інший незаписаний початок"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A common workforce start may be recorded by a single notation showing both time of day and day of week.",
    "explanationUk": "Спільний початок тижня колективу можна зафіксувати однією приміткою, що містить і час доби, і день тижня."
  },
  {
    "section": "29 CFR 516.2(a)(3)",
    "difficulty": "easy",
    "question": "A covered contractor employs an 18-year-old worker. Must the worker's date of birth be included under this federal payroll-record provision?",
    "questionUk": "Підрядник, на якого поширюється правило, наймає 18-річного працівника. Чи потрібно за цим федеральним положенням зазначати дату його народження?",
    "answers": [
      [
        "Yes; the provision requires it for employees under 19",
        "Так; положення вимагає її для працівників молодше 19 років"
      ],
      [
        "No; only employees under 16 need a recorded birth date",
        "Ні; дата потрібна лише молодшим за 16"
      ],
      [
        "No; turning 18 automatically removes this record requirement",
        "Ні; досягнення 18 років автоматично скасовує вимогу"
      ],
      [
        "Only if the employee operates a vehicle",
        "Лише якщо працівник керує автомобілем"
      ],
      [
        "Only if the worker requests it",
        "Лише на прохання працівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The date-of-birth requirement applies to employees under 19, so it includes an 18-year-old.",
    "explanationUk": "Вимога дати народження стосується працівників молодше 19 років, отже охоплює 18-річного."
  },
  {
    "section": "29 CFR 516.2(a)(6)",
    "difficulty": "medium",
    "question": "A nonexempt employee is owed FLSA overtime for a workweek. Which pay-rate record is expressly required for that week?",
    "questionUk": "Працівнику належить понаднормова оплата за FLSA за робочий тиждень. Який запис ставки прямо потрібен за цей тиждень?",
    "answers": [
      [
        "The regular hourly rate of pay, with the required explanation of the pay basis",
        "Звичайна погодинна ставка з потрібним поясненням бази оплати"
      ],
      [
        "Only the contractor's customer billing rate",
        "Лише ставка, виставлена підрядником замовнику"
      ],
      [
        "Only the employee's preferred future salary",
        "Лише бажана майбутня зарплата працівника"
      ],
      [
        "Only the project profit margin",
        "Лише прибутковість проєкту"
      ],
      [
        "Only the hourly rate of a different employee",
        "Лише погодинна ставка іншого працівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (a)(6) requires the regular hourly rate for weeks in which overtime is due and an explanation of the basis of pay and specified excluded payments.",
    "explanationUk": "Пункт (a)(6) вимагає звичайну погодинну ставку за тижні з належною понаднормовою оплатою та пояснення бази оплати й визначених виключених виплат."
  },
  {
    "section": "29 CFR 516.2(a)(8)–(9)",
    "difficulty": "medium",
    "question": "How is total premium pay for overtime recorded relative to straight-time earnings under the federal payroll-record rule?",
    "questionUk": "Як федеральне правило обліку розділяє надбавку за понаднормові години та заробіток за звичайною ставкою?",
    "answers": [
      [
        "Record the overtime premium separately, excluding straight-time earnings already recorded under paragraph (a)(8)",
        "Надбавку фіксують окремо без заробітку за звичайною ставкою, уже врахованого в (a)(8)"
      ],
      [
        "Count all straight-time earnings again as overtime premium",
        "Увесь звичайний заробіток повторно зараховують як надбавку"
      ],
      [
        "Omit the premium whenever total wages are shown",
        "Не фіксують надбавку за наявності загальної зарплати"
      ],
      [
        "Replace the premium record with the project contract amount",
        "Замінюють запис надбавки сумою договору проєкту"
      ],
      [
        "Record overtime premium only once per year",
        "Надбавку фіксують лише раз на рік"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The total premium-pay record excludes the straight-time portion already recorded under (a)(8), including straight-time earnings for overtime hours.",
    "explanationUk": "Запис загальної надбавки не включає звичайну частину заробітку, вже записану за (a)(8), зокрема звичайну оплату понаднормових годин."
  },
  {
    "section": "29 CFR 516.2(a)(10)",
    "difficulty": "medium",
    "question": "A contractor records only one unexplained total for deductions from each employee's pay. What additional detail does the federal rule require in individual employee records?",
    "questionUk": "Підрядник записує лише одну непояснену суму відрахувань із зарплати. Які додаткові дані федеральне правило вимагає в індивідуальних записах?",
    "answers": [
      [
        "Dates, amounts and nature of the items making up the additions and deductions",
        "Дати, суми та характер складників доплат і відрахувань"
      ],
      [
        "Only the payroll clerk's favorite payment method",
        "Лише бажаний спосіб оплати бухгалтера"
      ],
      [
        "Only the employee's jobsite parking location",
        "Лише місце паркування працівника"
      ],
      [
        "Only the total price of the building contract",
        "Лише загальну ціну будівельного договору"
      ],
      [
        "No detail beyond an unexplained total",
        "Жодних даних крім непоясненої суми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The rule requires totals each pay period and, in individual records, dates, amounts and nature of the component additions and deductions.",
    "explanationUk": "Правило вимагає підсумків за кожний платіжний період та індивідуальних дат, сум і характеру складників доплат і відрахувань."
  },
  {
    "section": "29 CFR 516.2(a)(12)",
    "difficulty": "exam",
    "question": "Which TWO payment details must the cited federal payroll records identify?",
    "questionUk": "Які ДВІ платіжні деталі мають визначати зазначені федеральні зарплатні записи?",
    "answers": [
      [
        "Date of payment",
        "Дату виплати"
      ],
      [
        "Pay period covered by the payment",
        "Період оплати, який охоплює виплата"
      ],
      [
        "Date the customer first visited the site",
        "Дату першого візиту замовника"
      ],
      [
        "Estimated project sale price",
        "Оціночну ціну продажу проєкту"
      ],
      [
        "Owner's mortgage interest rate",
        "Іпотечну ставку власника"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Paragraph (a)(12) requires both the payment date and the pay period covered.",
    "explanationUk": "Пункт (a)(12) вимагає і дату виплати, і період, який вона охоплює."
  },
  {
    "section": "29 CFR 516.2(c)(1)",
    "difficulty": "medium",
    "question": "A covered employee works exactly the recorded fixed daily and weekly schedule. What additional indication is needed to use the fixed-schedule recordkeeping alternative?",
    "questionUk": "Працівник відпрацював точно записаний сталий денний і тижневий графік. Яка додаткова відмітка потрібна для альтернативного обліку за сталим графіком?",
    "answers": [
      [
        "A check mark, statement or other indication that those hours were actually worked",
        "Позначка, заява або інше підтвердження, що ці години фактично відпрацьовані"
      ],
      [
        "No confirmation of actual work is ever needed",
        "Підтвердження фактичної роботи ніколи не потрібне"
      ],
      [
        "Only a customer satisfaction score",
        "Лише оцінка задоволеності замовника"
      ],
      [
        "Only the anticipated hours from the bid",
        "Лише очікувані години з пропозиції"
      ],
      [
        "Only a note that the worker owns a time clock",
        "Лише примітка про власний табельний годинник"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "When the employee follows the recorded fixed schedule, the employer must indicate by check mark, statement or other method that the scheduled hours were actually worked.",
    "explanationUk": "Якщо працівник дотримався записаного сталого графіка, роботодавець підтверджує позначкою, заявою чи іншим методом, що години реально відпрацьовані."
  },
  {
    "section": "29 CFR 516.2(c)(2)",
    "difficulty": "exam",
    "question": "An employee normally works a recorded 8-hour daily schedule but works 10 hours Tuesday and 6 hours Friday. What must the fixed-schedule records show for that week?",
    "questionUk": "За записаним сталим графіком працівник працює по 8 годин, але у вівторок відпрацював 10, а в п’ятницю 6. Що потрібно записати за цей тиждень?",
    "answers": [
      [
        "Exact hours actually worked each day and each week",
        "Точні фактично відпрацьовані години кожного дня та тижня"
      ],
      [
        "The normal schedule only because the weekly total may be unchanged",
        "Лише звичайний графік, бо тижневий підсумок може не змінитися"
      ],
      [
        "Only Tuesday's deviation, omitting Friday",
        "Лише відхилення вівторка без п’ятниці"
      ],
      [
        "Only the owner's estimated labor hours",
        "Лише оцінку трудовитрат власника"
      ],
      [
        "No hours if wages are paid on Friday",
        "Без годин, якщо виплата в п’ятницю"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "If actual hours differ from the fixed schedule, records must show exact daily and weekly hours; an unchanged weekly total does not justify inaccurate daily entries.",
    "explanationUk": "За відхилення від графіка фіксують точні денні й тижневі години; незмінний тижневий підсумок не виправдовує неточних щоденних записів."
  },
  {
    "section": "29 CFR 516.5(a)",
    "difficulty": "medium",
    "question": "Under the federal FLSA record rule alone, how long must required payroll records be preserved, measured from their last date of entry?",
    "questionUk": "Який мінімальний строк збереження обов’язкових зарплатних записів від останнього внесення даних лише за федеральним правилом FLSA?",
    "answers": [
      [
        "At least 3 years",
        "Щонайменше 3 роки"
      ],
      [
        "30 days",
        "30 днів"
      ],
      [
        "6 months",
        "6 місяців"
      ],
      [
        "1 year",
        "1 рік"
      ],
      [
        "2 years",
        "2 роки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The federal payroll-record minimum is 3 years from the last entry. This question does not establish the longest retention required under other applicable laws.",
    "explanationUk": "Федеральний мінімум для зарплатних записів — 3 роки від останнього внесення. Питання не визначає найдовшого строку за іншими застосовними законами.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-516/subpart-A/section-516.5"
  },
  {
    "section": "29 CFR 516.6(a)(1)",
    "difficulty": "medium",
    "question": "Under the federal supplementary-record rule, what minimum preservation period applies to basic time cards used to compute wages, from their last entry?",
    "questionUk": "Який федеральний мінімальний строк збереження первинних табельних карток для розрахунку зарплати від останнього запису?",
    "answers": [
      [
        "2 years",
        "2 роки"
      ],
      [
        "1 month",
        "1 місяць"
      ],
      [
        "3 months",
        "3 місяці"
      ],
      [
        "6 months",
        "6 місяців"
      ],
      [
        "1 year",
        "1 рік"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Basic time and earning cards fall under the 2-year supplementary-record rule, distinct from the 3-year payroll-record rule; other laws may require longer retention.",
    "explanationUk": "Первинні табельні й розрахункові картки належать до дворічної категорії допоміжних записів, окремої від трирічних зарплатних записів; інші закони можуть вимагати довше.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-516/subpart-A/section-516.6"
  },
  {
    "section": "29 CFR 516.6(a)(2)",
    "difficulty": "medium",
    "question": "For a wage-rate table used in computing straight-time or overtime pay, when does the federal 2-year minimum preservation period begin?",
    "questionUk": "Від якої дати починається федеральний мінімальний дворічний строк збереження таблиці ставок для звичайної або понаднормової оплати?",
    "answers": [
      [
        "Its last effective date",
        "Від останньої дати її чинності"
      ],
      [
        "The date the contractor first opened the business",
        "Від відкриття підприємства підрядника"
      ],
      [
        "The first day of the employee's schooling",
        "Від першого дня навчання працівника"
      ],
      [
        "The date a customer approved the roof color",
        "Від погодження замовником кольору даху"
      ],
      [
        "Only after an employee files a lawsuit",
        "Лише після позову працівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Wage-rate tables or schedules are preserved for at least 2 years from their last effective date, not necessarily their creation date.",
    "explanationUk": "Таблиці чи графіки ставок зберігають щонайменше 2 роки від останньої дати чинності, а не обов’язково від створення.",
    "sourceUrl": "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-516/subpart-A/section-516.6"
  }
];
export const intakeVerified108 = verifiedBatch(1281, "Minnesota Contractor Law / Business", "Business / Licensing", "U.S. DOL 29 CFR Part 516", "federal", "https://www.ecfr.gov/current/title-29/subtitle-B/chapter-V/subchapter-A/part-516/subpart-A/section-516.2", seeds, "intake-series-103-108", false, "2026-10-22");

