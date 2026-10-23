import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Minn. Stat. 176.181, subd. 2(a)",
    "difficulty": "medium",
    "question": "A private Minnesota construction employer is liable to pay workers' compensation under Chapter 176. Select TWO authorized ways to secure that liability under 176.181, subdivision 2(a).",
    "questionUk": "Приватний будівельний роботодавець Minnesota зобов’язаний виплачувати workers’ compensation за главою 176. Оберіть ДВА дозволені способи забезпечити це зобов’язання за 176.181, subd. 2(a).",
    "answers": [
      [
        "Insure with a carrier authorized to insure workers' compensation liability in Minnesota",
        "Застрахуватися у страховика, уповноваженого страхувати workers’ compensation у Minnesota"
      ],
      [
        "Obtain the commissioner of commerce's written order permitting self-insurance",
        "Отримати письмовий наказ commissioner of commerce, що дозволяє самострахування"
      ],
      [
        "Rely solely on a general liability policy",
        "Покладатися лише на загальний поліс відповідальності"
      ],
      [
        "Have employees waive statutory coverage in their hiring forms",
        "Отримати відмову працівників від законного покриття в документах найму"
      ],
      [
        "Set aside a bank balance without obtaining self-insurance authorization",
        "Зарезервувати кошти без дозволу на самострахування"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Subdivision 2(a) requires an authorized workers' compensation carrier or a written order permitting self-insurance. A reserve, general liability policy or employee waiver is not one of those statutory alternatives.",
    "explanationUk": "Subd. 2(a) вимагає уповноваженого страховика workers’ compensation або письмового дозволу на самострахування. Резерв коштів, загальний поліс чи відмова працівника не є такими законними альтернативами."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 2(a)",
    "difficulty": "medium",
    "question": "A contractor applies for permission to self-insure workers' compensation. What financial showing does subdivision 2(a) require?",
    "questionUk": "Підрядник подає заяву на самострахування workers’ compensation. Що він має довести щодо фінансів за subd. 2(a)?",
    "answers": [
      [
        "Financial ability to pay compensation, which may be shown through financial statements",
        "Фінансову здатність виплачувати компенсації, яку можна підтвердити фінансовою звітністю"
      ],
      [
        "Only that the company has never filed a building permit",
        "Лише відсутність поданих будівельних дозволів"
      ],
      [
        "Only that annual sales exceed payroll by any amount",
        "Лише перевищення продажів над зарплатою на будь-яку суму"
      ],
      [
        "Only that employees hold personal health insurance",
        "Лише наявність особистого медичного страхування працівників"
      ],
      [
        "Only that a corporate resolution calls the company self-insured",
        "Лише корпоративне рішення назвати компанію самозастрахованою"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The application must show financial ability to pay compensation; the statute expressly permits the employer's financial statements as evidence. Approval remains with the commissioner of commerce, rather than arising from the employer's declaration.",
    "explanationUk": "Заява має доводити фінансову здатність виплачувати компенсації; закон прямо дозволяє фінансову звітність як доказ. Дозвіл надає commissioner of commerce, а не сама декларація роботодавця."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 2(a)",
    "difficulty": "exam",
    "question": "After the commissioner of commerce revokes a workers' compensation self-insurance exemption on the statutory ten days' written notice, when must the employer insure the liability?",
    "questionUk": "Після відкликання commissioner of commerce звільнення для самострахування workers’ compensation з передбаченим письмовим повідомленням за десять днів коли роботодавець повинен застрахувати зобов’язання?",
    "answers": [
      [
        "Immediately upon revocation",
        "Негайно після відкликання"
      ],
      [
        "At the next annual business-license renewal",
        "Під час наступного щорічного поновлення ліцензії"
      ],
      [
        "Within 90 days after revocation",
        "Протягом 90 днів після відкликання"
      ],
      [
        "Only after an employee files a claim",
        "Лише після заяви працівника про виплату"
      ],
      [
        "Only when the next construction contract is signed",
        "Лише при підписанні наступного будівельного договору"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 2(a) permits revocation on ten days' written notice and requires the employer to insure the liability immediately when the exemption is revoked. It provides no additional 90-day coverage gap.",
    "explanationUk": "Subd. 2(a) дозволяє відкликання після письмового повідомлення за десять днів і вимагає негайного страхування після відкликання. Додаткового 90-денного проміжку без покриття не передбачено."
  },
  {
    "section": "Minn. Stat. 176.182",
    "difficulty": "medium",
    "question": "A covered business uses an insurance policy rather than a self-insurance permit to document workers' compensation compliance for license renewal. Which information does 176.182 specify?",
    "questionUk": "Бізнес із обов’язком покриття підтверджує workers’ compensation для поновлення ліцензії страховим полісом, а не дозволом самострахування. Які дані визначає 176.182?",
    "answers": [
      [
        "Insurance company name, policy number and dates of coverage",
        "Назву страхової компанії, номер поліса та дати покриття"
      ],
      [
        "Only the insurance agent's first name",
        "Лише ім’я страхового агента"
      ],
      [
        "Only the premium payment amount",
        "Лише суму страхової премії"
      ],
      [
        "Only the business's federal tax number",
        "Лише федеральний податковий номер бізнесу"
      ],
      [
        "Only a statement that coverage will be purchased later",
        "Лише заяву про майбутню купівлю покриття"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 176.182 specifies the carrier name, policy number and coverage dates, or a permit to self-insure, as evidence for licensing. The agency must withhold issuance or renewal until acceptable evidence is presented.",
    "explanationUk": "176.182 визначає назву страховика, номер поліса та дати покриття або дозвіл самострахування як підтвердження для ліцензування. До прийнятного підтвердження видачу чи поновлення утримують.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/176.182"
  },
  {
    "section": "Minn. Stat. 176.182",
    "difficulty": "easy",
    "question": "What penalty does 176.182 direct the commissioner to assess if required workers' compensation coverage information is not reported or is falsely reported?",
    "questionUk": "Який штраф 176.182 вимагає накласти, якщо обов’язкові відомості про покриття workers’ compensation не подано або подано неправдиво?",
    "answers": [
      [
        "$2,000",
        "2 000 доларів"
      ],
      [
        "$200",
        "200 доларів"
      ],
      [
        "$500",
        "500 доларів"
      ],
      [
        "$1,000",
        "1 000 доларів"
      ],
      [
        "$10,000",
        "10 000 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 176.182 sets a $2,000 penalty for failure to report or false reporting of the required information. This reporting penalty is distinct from penalties for employing people without required coverage.",
    "explanationUk": "176.182 встановлює штраф 2 000 доларів за неподання або неправдиве подання потрібних відомостей. Це окремий штраф від санкцій за найм без обов’язкового покриття.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/176.182"
  },
  {
    "section": "Minn. Stat. 176.182",
    "difficulty": "medium",
    "question": "Before a Minnesota governmental body enters a public-work contract, from whom must it receive acceptable evidence of workers' compensation compliance under 176.182?",
    "questionUk": "Від кого державний чи місцевий орган Minnesota має отримати прийнятне підтвердження workers’ compensation перед укладенням договору публічних робіт за 176.182?",
    "answers": [
      [
        "All other contracting parties",
        "Від усіх інших сторін договору"
      ],
      [
        "Only the lowest bidder's insurance agent after project completion",
        "Лише від агента найдешевшого учасника після завершення робіт"
      ],
      [
        "Only parties that have already reported an injury",
        "Лише від сторін, які вже повідомили про травму"
      ],
      [
        "Only the design consultant, regardless of other parties",
        "Лише від проєктувальника незалежно від інших сторін"
      ],
      [
        "No one until the first progress payment",
        "Ні від кого до першого проміжного платежу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 176.182 prohibits entering the public-work contract before receiving acceptable evidence from all other contracting parties. Waiting until payment or completion is too late under this provision.",
    "explanationUk": "176.182 забороняє укладати договір публічних робіт до отримання прийнятного підтвердження від усіх інших сторін. Очікування платежу чи завершення робіт не відповідає цьому правилу.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/176.182"
  },
  {
    "section": "Minn. Stat. 176.181, subd. 3(a)",
    "difficulty": "exam",
    "question": "A noncompliant employer employs three people without required workers' compensation coverage for two weeks. Considering ONLY the subdivision 3(a) maximum rate, what penalty amount may be ordered for that period?",
    "questionUk": "Роботодавець наймає трьох працівників без обов’язкового покриття workers’ compensation протягом двох тижнів. Враховуючи ЛИШЕ максимальну ставку subd. 3(a), який штраф може бути призначений за цей період?",
    "answers": [
      [
        "Up to $6,000",
        "До 6 000 доларів"
      ],
      [
        "Up to $1,000 total",
        "До 1 000 доларів загалом"
      ],
      [
        "Up to $2,000 total",
        "До 2 000 доларів загалом"
      ],
      [
        "Up to $3,000 total",
        "До 3 000 доларів загалом"
      ],
      [
        "Exactly $2,000 regardless of employee count",
        "Рівно 2 000 доларів незалежно від кількості працівників"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 3(a) allows up to $1,000 per employee per week: 3 × 2 × $1,000 = $6,000. This is a maximum under that paragraph, not a claim that the maximum is mandatory or the only possible consequence.",
    "explanationUk": "Subd. 3(a) дозволяє до 1 000 доларів за працівника за тиждень: 3 × 2 × 1 000 = 6 000 доларів. Це максимум цього пункту, а не обов’язкова сума чи єдиний можливий наслідок."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 3(b)",
    "difficulty": "medium",
    "question": "How must an employer contest a failure-to-insure order under 176.181, subdivision 3?",
    "questionUk": "Як роботодавець має оскаржити наказ за відсутність страхування за 176.181, subd. 3?",
    "answers": [
      [
        "File a written objection with detailed reasons within ten working days",
        "Подати письмове заперечення з докладними причинами протягом десяти робочих днів"
      ],
      [
        "Make an oral objection to a supplier within 30 days",
        "Усно заперечити постачальнику протягом 30 днів"
      ],
      [
        "Wait until the next annual insurance audit",
        "Чекати наступного щорічного страхового аудиту"
      ],
      [
        "File only a tax return within 60 calendar days",
        "Подати лише податкову декларацію протягом 60 календарних днів"
      ],
      [
        "Ignore the order until a court sends a summons",
        "Ігнорувати наказ до судової повістки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 3(b) gives ten working days to file a written objection with the commissioner, detailing the reasons. It does not substitute an oral complaint or a later insurance audit for that filing.",
    "explanationUk": "Subd. 3(b) дає десять робочих днів на письмове заперечення commissioner із докладними причинами. Усна скарга чи пізніший страховий аудит не замінюють такого подання."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 3(b)",
    "difficulty": "medium",
    "question": "The commissioner receives no objection to a failure-to-insure order within ten working days. What is the order's status under subdivision 3(b)?",
    "questionUk": "Commissioner не отримує заперечення на наказ за відсутність страхування протягом десяти робочих днів. Яким стає статус наказу за subd. 3(b)?",
    "answers": [
      [
        "A final order not subject to further review",
        "Остаточний наказ, що не підлягає подальшому перегляду"
      ],
      [
        "An automatically canceled warning",
        "Автоматично скасоване попередження"
      ],
      [
        "A draft that cannot be enforced",
        "Проєкт, який не можна виконувати примусово"
      ],
      [
        "A request that the employer may disregard",
        "Прохання, яке можна ігнорувати"
      ],
      [
        "An order suspended until the next license renewal",
        "Наказ, призупинений до поновлення ліцензії"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "If no objection is received within ten working days, subdivision 3(b) makes the commissioner's order final and not subject to further review. Violation may be enforced through civil contempt proceedings.",
    "explanationUk": "Якщо заперечення не отримано протягом десяти робочих днів, subd. 3(b) робить наказ остаточним без подальшого перегляду. Порушення можна примусово переслідувати через civil contempt."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 3(d)",
    "difficulty": "exam",
    "question": "For the failure-to-insure penalty subdivision, which corporate individuals are expressly included in the term employer?",
    "questionUk": "Яких осіб корпорації прямо включено до поняття employer для підрозділу санкцій за відсутність страхування?",
    "answers": [
      [
        "Owners or officers who direct and control employees' activities",
        "Власників або посадових осіб, які керують і контролюють діяльність працівників"
      ],
      [
        "Every customer who buys a completed house",
        "Кожного покупця готового будинку"
      ],
      [
        "Every passive shareholder regardless of employee control",
        "Кожного пасивного акціонера незалежно від контролю працівників"
      ],
      [
        "Only outside insurance brokers",
        "Лише зовнішніх страхових брокерів"
      ],
      [
        "Only employees who submit injury claims",
        "Лише працівників, які подають заяви про травми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 3(d) expressly includes corporate owners or officers who direct and control employee activities. The question concerns that penalty subdivision, not a general rule that every shareholder is personally liable.",
    "explanationUk": "Subd. 3(d) прямо включає власників чи посадових осіб корпорації, які керують і контролюють діяльність працівників. Це правило саме цього підрозділу санкцій, а не загальна відповідальність усіх акціонерів."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 4",
    "difficulty": "medium",
    "question": "An employer willfully and intentionally fails to comply with compulsory workers' compensation insurance requirements. What offense does subdivision 4 establish in addition to the subdivision 3 penalty?",
    "questionUk": "Роботодавець свідомо й навмисно не виконує вимоги обов’язкового workers’ compensation. Яке правопорушення встановлює subd. 4 додатково до штрафу subd. 3?",
    "answers": [
      [
        "A gross misdemeanor",
        "Правопорушення gross misdemeanor"
      ],
      [
        "Only a noncriminal warning",
        "Лише некримінальне попередження"
      ],
      [
        "An automatic felony in every case",
        "Автоматично felony в кожному випадку"
      ],
      [
        "Only a private contract dispute",
        "Лише приватний договірний спір"
      ],
      [
        "No offense unless an injury has already occurred",
        "Жодного правопорушення без уже наявної травми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 4 makes willful and intentional noncompliance with subdivision 2 a gross misdemeanor, in addition to the subdivision 3 penalty. The text does not require a prior employee injury.",
    "explanationUk": "Subd. 4 визначає свідоме й навмисне невиконання subd. 2 як gross misdemeanor додатково до штрафу subd. 3. Текст не вимагає попередньої травми працівника."
  },
  {
    "section": "Minn. Stat. 176.181, subd. 8(b)",
    "difficulty": "medium",
    "question": "To determine employment status and workers' compensation compliance, what records may the commissioner inspect and order an alleged employer to produce?",
    "questionUk": "Які документи commissioner може перевіряти й вимагати від імовірного роботодавця для визначення статусу зайнятості та відповідності workers’ compensation?",
    "answers": [
      [
        "Payroll and other business records and documents",
        "Зарплатні та інші ділові записи й документи"
      ],
      [
        "Only public building-permit drawings",
        "Лише публічні креслення будівельного дозволу"
      ],
      [
        "Only the employer's advertising brochure",
        "Лише рекламний буклет роботодавця"
      ],
      [
        "Only records voluntarily selected by the employer",
        "Лише документи, добровільно обрані роботодавцем"
      ],
      [
        "No records unless an employee has already won benefits",
        "Жодних документів, поки працівнику не присуджено виплати"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 8(b) authorizes inspection and ordered production of payroll and other business records to determine employment status and compliance. If a person refuses, the commissioner may seek a court order compelling production.",
    "explanationUk": "Subd. 8(b) дозволяє перевірку й витребування зарплатних та інших ділових документів для визначення зайнятості та відповідності. За відмови commissioner може просити суд примусово зобов’язати надати документи."
  }
];
export const intakeVerified120 = verifiedBatch(1425, "Minnesota Contractor Law / Business", "Business / Licensing", "Minnesota Statutes", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/176.181", seeds, "intake-series-115-120", false, "2026-10-22");
