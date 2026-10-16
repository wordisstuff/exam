import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "326B.83 subd. 1(a)",
    "difficulty": "medium",
    "question": "How must a Minnesota residential-contractor license application be submitted under this subdivision?",
    "questionUk": "Як за цим підрозділом подають заяву на ліцензію житлового підрядника Minnesota?",
    "answers": [
      [
        "Under oath, on the commissioner's prescribed form, with required fees",
        "Під присягою, на формі комісара, з потрібними зборами"
      ],
      [
        "Only by an unsigned verbal request",
        "Лише непідписаним усним проханням"
      ],
      [
        "Only through a customer's invoice",
        "Лише рахунком клієнта"
      ],
      [
        "On any form without fees",
        "На будь-якій формі без зборів"
      ],
      [
        "Only after starting unlicensed work",
        "Лише після початку неліцензованих робіт"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1(a) requires an application under oath on the prescribed form, accompanied by fees required by 326B.092.",
    "explanationUk": "Підрозділ 1(a) вимагає заяву під присягою на встановленій формі зі зборами за 326B.092."
  },
  {
    "section": "326B.83 subd. 1(b)",
    "difficulty": "medium",
    "question": "An application category does not apply to the applicant. What must the applicant do rather than simply leave it unexplained?",
    "questionUk": "Певна категорія заяви не стосується заявника. Що потрібно зробити замість незаповненого пункту без пояснення?",
    "answers": [
      [
        "Identify the category and state why it does not apply",
        "Указати категорію й пояснити, чому вона не застосовується"
      ],
      [
        "Delete the entire application",
        "Видалити всю заяву"
      ],
      [
        "Write a false answer to fill the blank",
        "Записати неправду для заповнення"
      ],
      [
        "Ignore the category without explanation",
        "Проігнорувати без пояснення"
      ],
      [
        "Ask a customer to sign it instead",
        "Попросити клієнта підписати замість себе"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The applicant must identify an inapplicable category and give the reason. Incomplete or unsatisfactory information may lead to refusal to issue the license.",
    "explanationUk": "Незастосовну категорію вказують із причиною. Неповна чи незадовільна інформація може спричинити відмову у видачі ліцензії."
  },
  {
    "section": "326B.83 subd. 2(7)",
    "difficulty": "exam",
    "question": "In addition to all corporate officers and directors, which listed shareholder must be named and addressed under this application's shareholder clause?",
    "questionUk": "Крім усіх посадових осіб і директорів корпорації, якого з наведених акціонерів потрібно вказати з адресою за пунктом заяви щодо акціонерів?",
    "answers": [
      [
        "A shareholder holding 11% of outstanding stock",
        "Власника 11% акцій в обігу"
      ],
      [
        "A shareholder holding exactly 10% only",
        "Власника лише рівно 10%"
      ],
      [
        "A shareholder holding 9% only",
        "Власника лише 9%"
      ],
      [
        "A shareholder holding 5% only",
        "Власника лише 5%"
      ],
      [
        "A shareholder holding 1% only",
        "Власника лише 1%"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Clause (7) lists all officers/directors and shareholders holding more than 10% of outstanding stock. Exactly 10% does not cross that shareholder threshold.",
    "explanationUk": "Пункт (7) охоплює всіх посадових осіб/директорів та акціонерів із понад 10% акцій в обігу. Рівно 10% не перевищує цей акціонерний поріг."
  },
  {
    "section": "326B.83 subd. 2(12)",
    "difficulty": "easy",
    "question": "What business-history period must the application disclose for the applicant and qualifying person under clause (12)?",
    "questionUk": "За який період пункт (12) вимагає розкрити історію діяльності заявника й qualifying person?",
    "answers": [
      [
        "The past five years",
        "За останні п’ять років"
      ],
      [
        "Only the past month",
        "Лише за останній місяць"
      ],
      [
        "Only the current tax year",
        "Лише за поточний податковий рік"
      ],
      [
        "The past two years",
        "За останні два роки"
      ],
      [
        "Only years after the examination",
        "Лише за роки після іспиту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The business-history lookback is five years. The same clause's separate bankruptcy/unsatisfied-judgment disclosures must not be assumed to have that same time limit.",
    "explanationUk": "Історію діяльності подають за п’ять років. Окремі відомості цього пункту про банкрутство й невиконані рішення не можна автоматично обмежувати тим самим строком."
  },
  {
    "section": "326B.83 subd. 5",
    "difficulty": "exam",
    "question": "Instead of denying a license on the stated statutory grounds, select additional conditions the commissioner may reasonably impose to protect the public.",
    "questionUk": "Замість відмови за визначеними законом підставами виберіть додаткові умови, які комісар може розумно встановити для захисту громадськості.",
    "answers": [
      [
        "Additional insurance",
        "Додаткове страхування"
      ],
      [
        "Additional bonding",
        "Додаткову гарантійну облігацію"
      ],
      [
        "Reporting or record-keeping requirements",
        "Вимоги звітування чи ведення записів"
      ],
      [
        "A guarantee that no future inspection can occur",
        "Гарантію відсутності майбутніх оглядів"
      ],
      [
        "Permission to ignore applicable building codes",
        "Дозвіл ігнорувати будівельні коди"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Subdivision 5 permits reasonable added insurance, bonding, reporting, record keeping and other protective requirements based on the specified information/findings.",
    "explanationUk": "Підрозділ 5 дозволяє розумні додаткові вимоги страхування, гарантій, звітів, записів та іншого захисту за визначеною інформацією чи висновками."
  },
  {
    "section": "326B.83 subd. 6",
    "difficulty": "medium",
    "question": "Must an otherwise fully compliant residential-contractor applicant be a Minnesota resident to obtain a license?",
    "questionUk": "Чи обов’язково повністю відповідний іншим вимогам заявник на ліцензію житлового підрядника має бути мешканцем Minnesota?",
    "answers": [
      [
        "No; a nonresident may be licensed by complying with the cited licensing provisions",
        "Ні; нерезидент може отримати ліцензію за виконання зазначених положень"
      ],
      [
        "Yes; nonresidents are absolutely prohibited",
        "Так; нерезидентам безумовно заборонено"
      ],
      [
        "Yes; unless a customer signs a waiver",
        "Так; крім відмови клієнта від вимоги"
      ],
      [
        "No; nonresidents are exempt from all licensing requirements",
        "Ні; нерезиденти звільнені від усіх вимог"
      ],
      [
        "Only roofers may be nonresidents",
        "Нерезидентами можуть бути лише покрівельники"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The statute permits nonresidents to be licensed on compliance with the cited Minnesota licensing provisions; it is not an exemption from them.",
    "explanationUk": "Закон дозволяє ліцензування нерезидентів за виконання зазначених вимог Minnesota; це не звільнення від них."
  },
  {
    "section": "326B.86 subd. 1(b)",
    "difficulty": "easy",
    "question": "What minimum penal sum must a licensed Minnesota residential roofer's bond have?",
    "questionUk": "Яка мінімальна сума відповідальності гарантійної облігації ліцензованого житлового покрівельника Minnesota?",
    "answers": [
      [
        "$15,000",
        "15 000 доларів"
      ],
      [
        "$2,500",
        "2 500 доларів"
      ],
      [
        "$5,000",
        "5 000 доларів"
      ],
      [
        "$10,000",
        "10 000 доларів"
      ],
      [
        "$25,000",
        "25 000 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The residential-roofer bond minimum is $15,000. The statute separately lists a different amount for manufactured-home installers.",
    "explanationUk": "Мінімум гарантії житлового покрівельника — $15 000. Для монтажників manufactured homes закон окремо задає іншу суму.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/326B.86"
  },
  {
    "section": "326B.86 subd. 2",
    "difficulty": "exam",
    "question": "Select the coverage components expressly required within the licensee's commercial general liability insurance.",
    "questionUk": "Виберіть компоненти, прямо обов’язкові в комерційному страхуванні загальної відповідальності ліцензіата.",
    "answers": [
      [
        "Premises and operations",
        "Приміщення та поточні операції"
      ],
      [
        "Products and completed operations",
        "Продукція й завершені операції"
      ],
      [
        "Both remain required, not merely coverage while work is in progress",
        "Обидва потрібні, а не лише покриття під час робіт"
      ],
      [
        "Only the owner's personal auto policy",
        "Лише особистий автополіс власника"
      ],
      [
        "Only loss of the contractor's own tools",
        "Лише втрата власних інструментів підрядника"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The law expressly includes premises/operations and products/completed operations in CGL. Tool/property or personal-auto coverage is not a substitute.",
    "explanationUk": "Закон прямо включає premises/operations і products/completed operations до CGL. Покриття інструментів чи особисте автострахування не є заміною.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/326B.86"
  },
  {
    "section": "326B.86 subd. 2",
    "difficulty": "exam",
    "question": "Under the separate-limits insurance option, which minimum set matches the statute?",
    "questionUk": "Який набір мінімумів відповідає законові за варіанта страхування з окремими лімітами?",
    "answers": [
      [
        "Bodily injury $100,000 per occurrence/$300,000 aggregate; property damage $25,000",
        "Тілесна шкода $100 000 на випадок/$300 000 сукупно; майнова $25 000"
      ],
      [
        "Bodily injury $25,000/$50,000; property damage $5,000",
        "Тілесна шкода $25 000/$50 000; майнова $5 000"
      ],
      [
        "Bodily injury $50,000/$100,000; property damage $10,000",
        "Тілесна шкода $50 000/$100 000; майнова $10 000"
      ],
      [
        "Bodily injury $100,000/$100,000; property damage $10,000",
        "Тілесна шкода $100 000/$100 000; майнова $10 000"
      ],
      [
        "Bodily injury $25,000/$300,000; property damage $25,000",
        "Тілесна шкода $25 000/$300 000; майнова $25 000"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The separate-limits option specifies bodily injury at least $100,000 per occurrence and $300,000 aggregate, with property damage at least $25,000. The commissioner may increase minimums.",
    "explanationUk": "Окремі ліміти: тілесна шкода від $100 000 на випадок та $300 000 сукупно, майнова — від $25 000. Комісар може підвищувати мінімальні вимоги.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/326B.86"
  },
  {
    "section": "326B.86 subd. 2",
    "difficulty": "medium",
    "question": "A licensee chooses the statute's single-limit bodily-injury/property-damage policy alternative. Which occurrence/aggregate minimum pair applies?",
    "questionUk": "Ліцензіат обрав альтернативний єдиний ліміт тілесної та майнової шкоди. Яка мінімальна пара на випадок/сукупно діє?",
    "answers": [
      [
        "$300,000 / $300,000",
        "300 000 / 300 000 доларів"
      ],
      [
        "$100,000 / $100,000",
        "100 000 / 100 000 доларів"
      ],
      [
        "$100,000 / $300,000",
        "100 000 / 300 000 доларів"
      ],
      [
        "$25,000 / $300,000",
        "25 000 / 300 000 доларів"
      ],
      [
        "$300,000 / $100,000",
        "300 000 / 100 000 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The single-limit alternative is at least $300,000 per occurrence and $300,000 aggregate for bodily injury/property damage. These are statutory floors, not recommendations of adequate project coverage.",
    "explanationUk": "Єдиний ліміт становить від $300 000 на випадок і $300 000 сукупно для тілесної/майнової шкоди. Це законодавчі мінімуми, а не рекомендація достатнього покриття проєкту.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/326B.86"
  },
  {
    "section": "326B.86 subd. 2",
    "difficulty": "exam",
    "question": "Select the insurer/documentation requirements expressly stated for the licensee's required insurance.",
    "questionUk": "Виберіть прямо зазначені вимоги до страховика й підтвердження обов’язкового страхування ліцензіата.",
    "answers": [
      [
        "Insurer licensed to do business in Minnesota",
        "Страховик ліцензований працювати в Minnesota"
      ],
      [
        "Insurance certificate maintained on file with the commissioner",
        "Страховий сертифікат зберігається у комісара"
      ],
      [
        "Only a quote, without an effective policy",
        "Лише пропозиція ціни без чинного поліса"
      ],
      [
        "Only a customer-held business card",
        "Лише візитка у клієнта"
      ],
      [
        "Any unlicensed insurer if cheaper",
        "Будь-який неліцензований страховик, якщо дешевше"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The insurer must be licensed in the state and the licensee must maintain a certificate with the commissioner, in addition to maintaining the policy in effect.",
    "explanationUk": "Страховик має бути ліцензований у штаті, а ліцензіат має підтримувати страховий сертифікат у комісара та чинне покриття.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/326B.86"
  },
  {
    "section": "326B.86 subd. 2",
    "difficulty": "medium",
    "question": "When a required policy is canceled, when must the insurer send written notice to the commissioner under the stated notice rule?",
    "questionUk": "Коли за правилом повідомлення страховик має письмово повідомити комісара про скасування потрібного поліса?",
    "answers": [
      [
        "At the same time cancellation is requested by or notice is sent to the insured",
        "Одночасно з отриманням запиту застрахованого про скасування або надсиланням йому повідомлення"
      ],
      [
        "Only at the next annual renewal",
        "Лише на наступному річному поновленні"
      ],
      [
        "Only after a claim is denied",
        "Лише після відмови у страховому випадку"
      ],
      [
        "Only 90 days after cancellation",
        "Лише через 90 днів після скасування"
      ],
      [
        "Only if the contractor asks",
        "Лише на прохання підрядника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The statute ties commissioner notice to the time the insurer receives the insured's cancellation request or sends cancellation notice to the insured.",
    "explanationUk": "Закон прив’язує повідомлення комісару до моменту отримання страховиком запиту застрахованого про скасування або надсилання застрахованому повідомлення.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/326B.86"
  }
];
export const intakeVerified96 = verifiedBatch(1137, "Minnesota Contractor Law / Business", "Business / Licensing", "Minnesota Statutes §§326B.83 and 326B.86", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/326B.83", seeds, "intake-series-91-96", false, "2026-10-15");

