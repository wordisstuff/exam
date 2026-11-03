import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Minn. Stat. 181.13(a)",
    "question": "A discharged employee demands unpaid wages under 181.13. What form must the demand take?",
    "questionUk": "Звільнений роботодавцем працівник вимагає невиплачену зарплату за 181.13. Яка форма вимоги потрібна?",
    "answers": [
      [
        "Written, without needing the precise unpaid amount",
        "Письмова без обов’язкового зазначення точної невиплаченої суми"
      ],
      [
        "Only oral, with no written demand allowed",
        "Лише усна, письмова заборонена"
      ],
      [
        "Notarized with an exact amount in every case",
        "Завжди нотаріальна з точною сумою"
      ],
      [
        "Filed only by a lawyer",
        "Лише через адвоката"
      ],
      [
        "Only a message to a material supplier",
        "Лише повідомлення постачальнику"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Section 181.13 requires a written employee demand but does not require the precise unpaid wage or commission amount.",
    "explanationUk": "181.13 вимагає письмової вимоги працівника без обов’язкової точної суми невиплаченої зарплати чи комісійних."
  },
  {
    "section": "Minn. Stat. 181.13(a)",
    "question": "An ordinary private construction employer discharges an employee who is not subject to an applicable account-audit delay. After a written demand, what nonpayment interval puts the employer in default?",
    "questionUk": "Звичайний приватний будівельний роботодавець звільняє працівника без застосовної затримки аудиту рахунків. Який строк несплати після письмової вимоги створює прострочення?",
    "answers": [
      [
        "24 hours",
        "24 години"
      ],
      [
        "Five business days",
        "П’ять робочих днів"
      ],
      [
        "Ten calendar days in every case",
        "Десять календарних днів у кожному випадку"
      ],
      [
        "The next calendar month",
        "Наступний календарний місяць"
      ],
      [
        "Ninety days",
        "Дев’яносто днів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "For the stated private-employer scenario, nonpayment within 24 hours after demand places the employer in default. Public-board approval and account-audit provisions are not invoked.",
    "explanationUk": "Для заданого приватного сценарію несплата протягом 24 годин після вимоги створює прострочення. Положення публічної ради й аудиту тут не застосовуються."
  },
  {
    "section": "Minn. Stat. 181.13(a)",
    "question": "A discharged employee's applicable average daily earnings are $180. The employer remains in default long enough to reach the 15-day penalty cap. What maximum penalty results, apart from unpaid earnings?",
    "questionUk": "Застосовний середньоденний заробіток звільненого працівника — 180 доларів. Прострочення роботодавця досягає межі штрафу 15 днів. Який максимум штрафу окремо від невиплаченої зарплати?",
    "answers": [
      [
        "$2,700",
        "2 700 доларів"
      ],
      [
        "$180",
        "180 доларів"
      ],
      [
        "$900",
        "900 доларів"
      ],
      [
        "$1,800",
        "1 800 доларів"
      ],
      [
        "$3,600",
        "3 600 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The penalty is average daily earnings for up to 15 default days: $180 × 15 = $2,700, in addition to earned unpaid wages and commissions.",
    "explanationUk": "Штраф — середньоденний заробіток максимум за 15 днів прострочення: 180 × 15 = 2 700 доларів додатково до заробленої невиплаченої суми."
  },
  {
    "section": "Minn. Stat. 181.13(a)",
    "question": "An employee's regular rate is $22 per hour, but applicable law requires $25 for the work. Which rate controls the statute's earned-unpaid-wage measure?",
    "questionUk": "Звичайна ставка працівника — 22 долари за годину, але застосовне право вимагає 25 за цю роботу. Яка ставка визначає зароблену невиплачену суму за законом?",
    "answers": [
      [
        "$25, the greater applicable rate",
        "25 доларів — більша застосовна ставка"
      ],
      [
        "$22, regardless of the legal requirement",
        "22 долари незалежно від вимоги права"
      ],
      [
        "The average, $23.50",
        "Середня — 23,50 долара"
      ],
      [
        "Whichever rate the employer prefers",
        "Будь-яка ставка на вибір роботодавця"
      ],
      [
        "Zero until the employee hires a lawyer",
        "Нуль до найму адвоката"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The section uses the regular rate or the legally required rate, whichever is greater.",
    "explanationUk": "Розділ використовує звичайну або встановлену правом ставку — залежно від більшої."
  },
  {
    "section": "Minn. Stat. 181.14, subd. 1(a)",
    "question": "An employee voluntarily resigns, is not a migrant worker, and has no different collective bargaining provision. The next regular payday is seven calendar days after the final workday. When is full earned unpaid pay due?",
    "questionUk": "Працівник добровільно звільняється, не є migrant worker і не має іншого колективного правила. Наступний звичайний день виплати — через сім календарних днів після останнього робочого дня. Коли належить повна невиплачена сума?",
    "answers": [
      [
        "That first regularly scheduled payday",
        "У цей перший звичайний день виплати"
      ],
      [
        "Only 30 days after leaving",
        "Лише через 30 днів після звільнення"
      ],
      [
        "Only after a new employee is hired",
        "Лише після найму заміни"
      ],
      [
        "Only at year-end",
        "Лише наприкінці року"
      ],
      [
        "Automatically on the second payday",
        "Автоматично у другий день виплати"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The ordinary resignation rule requires payment by the first regular payday; the less-than-five-day exception does not apply to a seven-day interval.",
    "explanationUk": "Звичайне правило добровільного звільнення вимагає виплату до першого дня виплати; виняток менш ніж п’яти днів не діє для семиденного інтервалу."
  },
  {
    "section": "Minn. Stat. 181.14, subd. 1(a)",
    "question": "After an ordinary employee resigns, the first regular payday is three calendar days later. The employer uses the permitted second-payday delay. What absolute limit applies?",
    "questionUk": "Після добровільного звільнення звичайного працівника перший день виплати — через три календарні дні. Роботодавець використовує дозволене відкладення до другого дня виплати. Яка абсолютна межа?",
    "answers": [
      [
        "20 calendar days after the final employment day",
        "20 календарних днів після останнього дня зайнятості"
      ],
      [
        "20 business days after the first payday",
        "20 робочих днів після першої виплати"
      ],
      [
        "31 days after the final employment day",
        "31 день після останнього дня зайнятості"
      ],
      [
        "60 days after resignation",
        "60 днів після звільнення"
      ],
      [
        "No limit if a second payday is scheduled",
        "Без межі за наявності другого дня виплати"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Where the first payday is less than five calendar days after departure, payment may wait to the second payday but never more than 20 calendar days after the final day.",
    "explanationUk": "Якщо перший день виплати менш ніж через п’ять календарних днів після звільнення, можна чекати другого, але не довше 20 календарних днів після останнього дня."
  },
  {
    "section": "Minn. Stat. 181.14, subd. 1(a)",
    "question": "The first regular payday is exactly five calendar days after an ordinary employee's final day. Does the less-than-five-day exception by itself allow deferral to the second payday?",
    "questionUk": "Перший звичайний день виплати — рівно через п’ять календарних днів після останнього дня звичайного працівника. Чи дозволяє сам виняток менш ніж п’яти днів перенесення на другий день виплати?",
    "answers": [
      [
        "No; exactly five days is not less than five",
        "Ні; рівно п’ять не є менше п’яти"
      ],
      [
        "Yes; five is always included in less than five",
        "Так; п’ять завжди входить у менше п’яти"
      ],
      [
        "Yes; all resignations permit two missed paydays",
        "Так; усі звільнення дозволяють пропустити дві виплати"
      ],
      [
        "Yes; the exception applies whenever payroll is inconvenient",
        "Так; виняток діє при незручності payroll"
      ],
      [
        "Yes; the employer may choose any month",
        "Так; роботодавець обирає будь-який місяць"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "exam",
    "explanation": "The statutory exception is strictly less than five calendar days. The scenario assumes no separate applicable exception.",
    "explanationUk": "Законний виняток — строго менш ніж п’ять календарних днів. Сценарій не передбачає іншого застосовного винятку."
  },
  {
    "section": "Minn. Stat. 181.14, subd. 4",
    "question": "A departing employee was entrusted with handling employer money or property. What account-audit period does subdivision 4 provide after termination?",
    "questionUk": "Працівнику, який звільняється, було довірено гроші чи майно роботодавця. Який строк аудиту рахунків дає subd. 4 після припинення роботи?",
    "answers": [
      [
        "Ten calendar days",
        "Десять календарних днів"
      ],
      [
        "Ten working weeks",
        "Десять робочих тижнів"
      ],
      [
        "Thirty calendar days",
        "Тридцять календарних днів"
      ],
      [
        "Sixty calendar days",
        "Шістдесят календарних днів"
      ],
      [
        "One calendar year",
        "Один календарний рік"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Subdivision 4 allows ten calendar days to audit and adjust accounts in this specific entrusted-money/property situation; its demand/penalty timing conditions also apply.",
    "explanationUk": "Subd. 4 дає десять календарних днів на аудит і коригування рахунків у конкретній ситуації довірених грошей/майна; також діють її умови вимоги й штрафу."
  },
  {
    "section": "Minn. Stat. 181.13(b); 181.14, subd. 5",
    "question": "At the departing employee's request, final earned wages are mailed. What date counts as payment under the cited mailing provisions?",
    "questionUk": "На прохання працівника остаточну зароблену суму надсилають поштою. Яку дату згадані положення вважають датою виплати?",
    "answers": [
      [
        "The postmark date",
        "Дату поштового штемпеля"
      ],
      [
        "The day the employer first thinks of mailing",
        "День першої думки роботодавця про відправлення"
      ],
      [
        "Only the day the employee cashes the check",
        "Лише день переведення чека в готівку"
      ],
      [
        "Thirty days after mailing",
        "Через тридцять днів після відправлення"
      ],
      [
        "Only the next tax-filing date",
        "Лише наступну дату податкової звітності"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "When mailing is requested by the employee and used accordingly, the statutes deem payment made as of the postmark.",
    "explanationUk": "Коли працівник просить поштову виплату й її так здійснюють, закони вважають виплату проведеною на дату штемпеля."
  },
  {
    "section": "Minn. Stat. 181.101(a)",
    "question": "For an ordinary private construction employee outside the statute's special exception, how often must wages be paid on a regular payday designated in advance?",
    "questionUk": "Як часто звичайному приватному будівельному працівнику поза спеціальним законним винятком потрібно платити зарплату у заздалегідь визначений день?",
    "answers": [
      [
        "At least once every 31 days",
        "Щонайменше раз на 31 день"
      ],
      [
        "Only once every three months",
        "Лише раз на три місяці"
      ],
      [
        "Only when the owner pays the contractor",
        "Лише коли замовник платить підряднику"
      ],
      [
        "Only twice a year",
        "Лише двічі на рік"
      ],
      [
        "Only after the project is complete",
        "Лише після завершення проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (a) requires wages at least every 31 days on a payday designated in advance, regardless of an ordinary employee's request for longer intervals.",
    "explanationUk": "Пункт (a) вимагає зарплату щонайменше кожні 31 день у заздалегідь визначений день, незалежно від прохання звичайного працівника про довший інтервал."
  },
  {
    "section": "Minn. Stat. 181.101(a)",
    "question": "What payment-frequency minimum does 181.101(a) separately establish for earned employee commissions?",
    "questionUk": "Який окремий мінімум частоти виплат зароблених комісійних працівнику встановлює 181.101(a)?",
    "answers": [
      [
        "At least once every three months",
        "Щонайменше раз на три місяці"
      ],
      [
        "Only once every year",
        "Лише раз на рік"
      ],
      [
        "Only after employment ends",
        "Лише після припинення роботи"
      ],
      [
        "Only after an employee files suit",
        "Лише після подання позову"
      ],
      [
        "At any interval with no statutory limit",
        "Будь-який інтервал без законної межі"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Earned commissions have a separate minimum payment frequency of once every three months under paragraph (a).",
    "explanationUk": "Зароблені комісійні за пунктом (a) мають окрему мінімальну частоту — раз на три місяці."
  },
  {
    "section": "Minn. Stat. 181.101(a)",
    "question": "For the wage-payment right in 181.101, on what day are wages earned?",
    "questionUk": "Якого дня зарплату вважають заробленою для права на виплату за 181.101?",
    "answers": [
      [
        "The day the employee works",
        "Дня виконання роботи працівником"
      ],
      [
        "Only when the employer invoices the customer",
        "Лише коли роботодавець виставляє рахунок клієнту"
      ],
      [
        "Only when the customer pays",
        "Лише коли платить клієнт"
      ],
      [
        "Only when the employer files its tax return",
        "Лише при податковій звітності роботодавця"
      ],
      [
        "Only at project closeout",
        "Лише при закритті проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The section expressly states that wages are earned on the day an employee works; customer billing or payment does not define when they are earned.",
    "explanationUk": "Розділ прямо визначає заробіток днем роботи працівника; рахунок чи оплата клієнта не визначають моменту заробітку."
  }
];
export const intakeVerified138 = verifiedBatch(1641, "Minnesota Contractor Law / Business", "Business / Licensing", "Minnesota Statutes", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/181/full", seeds, "intake-series-133-138", false, "2026-11-02");
