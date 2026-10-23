import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Minn. Stat. 181.032(a)",
    "difficulty": "easy",
    "question": "When must a Minnesota employer provide an employee's earnings statement for a pay period?",
    "questionUk": "Коли роботодавець Minnesota має надати працівнику відомість заробітку за платіжний період?",
    "answers": [
      [
        "At the end of each pay period",
        "Наприкінці кожного платіжного періоду"
      ],
      [
        "Only once each calendar year",
        "Лише раз на календарний рік"
      ],
      [
        "Only when the employee resigns",
        "Лише після звільнення"
      ],
      [
        "Only after a wage complaint",
        "Лише після скарги на зарплату"
      ],
      [
        "Only at the end of the construction project",
        "Лише після завершення будівельного проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (a) requires an earnings statement, written or electronic, at the end of each pay period covering that period.",
    "explanationUk": "Пункт (a) вимагає письмової або електронної відомості наприкінці кожного платіжного періоду за цей період."
  },
  {
    "section": "Minn. Stat. 181.032(a)",
    "difficulty": "medium",
    "question": "A contractor provides earnings statements electronically. What workplace access must be provided so employees can review and print them?",
    "questionUk": "Підрядник надає зарплатні відомості електронно. Який доступ на роботі потрібен працівникам для перегляду й друку?",
    "answers": [
      [
        "Access to an employer-owned computer during regular working hours",
        "До комп’ютера роботодавця у звичайні робочі години"
      ],
      [
        "Only access on the employee's personal phone at home",
        "Лише на власному телефоні працівника вдома"
      ],
      [
        "Only access at a paid public computer after work",
        "Лише на платному публічному комп’ютері після роботи"
      ],
      [
        "Only a handwritten total on the jobsite board",
        "Лише рукописна сума на дошці об’єкта"
      ],
      [
        "No access unless the employee buys a printer",
        "Доступ лише після купівлі принтера працівником"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Electronic statements require access to an employer-owned computer during the employee's regular work hours for review and printing.",
    "explanationUk": "Для електронних відомостей потрібен доступ до комп’ютера роботодавця у звичайні робочі години для перегляду й друку."
  },
  {
    "section": "Minn. Stat. 181.032(a)",
    "difficulty": "easy",
    "question": "For how long must electronically provided Minnesota earnings statements remain available for employee review or printing?",
    "questionUk": "Як довго електронні зарплатні відомості Minnesota мають бути доступні працівнику для перегляду чи друку?",
    "answers": [
      [
        "3 years",
        "3 роки"
      ],
      [
        "30 days",
        "30 днів"
      ],
      [
        "90 days",
        "90 днів"
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
    "explanation": "Paragraph (a) requires electronic statements to remain available for review or printing for three years.",
    "explanationUk": "Пункт (a) вимагає доступності електронних відомостей для перегляду чи друку протягом трьох років."
  },
  {
    "section": "Minn. Stat. 181.032(c)",
    "difficulty": "medium",
    "question": "An employee gives at least 24 hours' notice requesting paper earnings statements. How must the Minnesota employer respond?",
    "questionUk": "Працівник щонайменше за 24 години просить паперові зарплатні відомості. Як має діяти роботодавець Minnesota?",
    "answers": [
      [
        "Provide written statements on an ongoing basis",
        "Надалі постійно надавати письмові відомості"
      ],
      [
        "Provide only one paper copy and then automatically return to electronic delivery",
        "Надати одну копію й автоматично повернутися до електронних"
      ],
      [
        "Refuse unless all employees make the same request",
        "Відмовити без такого самого прохання всіх працівників"
      ],
      [
        "Require the employee to buy a computer",
        "Вимагати від працівника купити комп’ютер"
      ],
      [
        "Wait until the next calendar year",
        "Чекати наступного календарного року"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "After at least 24 hours' notice requesting written statements, the employer must honor that request on an ongoing basis.",
    "explanationUk": "Після прохання про письмові відомості щонайменше за 24 години роботодавець виконує його на постійній основі."
  },
  {
    "section": "Minn. Stat. 181.032(d)",
    "difficulty": "medium",
    "question": "At what point must the Minnesota employer give the written employee notice containing the listed pay, leave, status and employer information?",
    "questionUk": "Коли роботодавець Minnesota має надати письмове повідомлення з переліченими даними оплати, відпусток, статусу та роботодавця?",
    "answers": [
      [
        "At the start of employment",
        "На початку трудових відносин"
      ],
      [
        "Only after the first annual review",
        "Лише після першої щорічної оцінки"
      ],
      [
        "Only after the employee asks for overtime",
        "Лише після прохання про понаднормову оплату"
      ],
      [
        "At project closeout",
        "Після завершення проєкту"
      ],
      [
        "Only when the employee files a complaint",
        "Лише після скарги працівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (d) requires the specified written notice at the start of employment; it is separate from each pay-period earnings statement.",
    "explanationUk": "Пункт (d) вимагає визначеного письмового повідомлення на початку роботи; воно окреме від відомості за кожний платіжний період."
  },
  {
    "section": "Minn. Stat. 181.032(e)",
    "difficulty": "medium",
    "question": "What signed document must the employer keep regarding the initial Minnesota employee notice?",
    "questionUk": "Який підписаний документ роботодавець має зберігати щодо початкового повідомлення працівнику Minnesota?",
    "answers": [
      [
        "A copy of the notice signed by the employee acknowledging receipt",
        "Копію повідомлення з підписом працівника про отримання"
      ],
      [
        "A waiver releasing all future wage claims",
        "Відмову від усіх майбутніх зарплатних претензій"
      ],
      [
        "A copy signed only by the project owner",
        "Копію лише з підписом власника проєкту"
      ],
      [
        "An unsigned blank form",
        "Непідписаний порожній бланк"
      ],
      [
        "Only the payroll software purchase receipt",
        "Лише чек купівлі зарплатної програми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The employer keeps a notice copy signed by each employee acknowledging receipt, not a statutory wage-rights waiver.",
    "explanationUk": "Роботодавець зберігає копію з підписом кожного працівника про отримання; це не законодавча відмова від права на зарплату."
  },
  {
    "section": "Minn. Stat. 181.032(e)",
    "difficulty": "exam",
    "question": "Which TWO language duties apply to the initial Minnesota employee notice?",
    "questionUk": "Які ДВА мовні обов’язки діють для початкового повідомлення працівнику Minnesota?",
    "answers": [
      [
        "Provide an English notice containing the commissioner's text about requesting another language",
        "Надати англійське повідомлення з текстом комісара про можливість попросити іншу мову"
      ],
      [
        "Provide the notice in the employee's requested language when requested",
        "На прохання надати повідомлення запитаною працівником мовою"
      ],
      [
        "Provide only English even after a language request",
        "Залишити лише англійську навіть після мовного запиту"
      ],
      [
        "Use only the contractor's preferred language with no English notice",
        "Використати лише бажану підрядником мову без англійського повідомлення"
      ],
      [
        "Require the employee to waive translation rights",
        "Вимагати відмови від перекладу"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The statute requires the English version with the commissioner's language-request text and a requested-language notice if the employee requests it.",
    "explanationUk": "Закон вимагає англійської версії з текстом комісара щодо мовного запиту й повідомлення запитаною мовою на прохання працівника."
  },
  {
    "section": "Minn. Stat. 181.032(f)",
    "difficulty": "medium",
    "question": "A contractor changes information covered by an employee's initial Minnesota notice. When must written changes be provided to the employee?",
    "questionUk": "Підрядник змінює інформацію початкового повідомлення працівнику Minnesota. Коли потрібно надати письмові зміни?",
    "answers": [
      [
        "Before the changes take effect",
        "До набрання змінами чинності"
      ],
      [
        "Within 30 days after the changes take effect",
        "Протягом 30 днів після набрання чинності"
      ],
      [
        "Only at the next annual review",
        "Лише під час наступної щорічної оцінки"
      ],
      [
        "Only if the employee discovers the change",
        "Лише після виявлення зміни працівником"
      ],
      [
        "At the end of the project",
        "Після завершення проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (f) requires written changes before the effective date of the changed information.",
    "explanationUk": "Пункт (f) вимагає письмових змін до дати набрання ними чинності."
  },
  {
    "section": "Minn. Stat. 177.30(a)(4)",
    "difficulty": "medium",
    "question": "Which personnel-policy record must a covered Minnesota employer maintain?",
    "questionUk": "Який облік кадрових політик має вести роботодавець Minnesota, на якого поширюється правило?",
    "answers": [
      [
        "A list of policies provided, the date given to the employee and a brief description",
        "Перелік наданих політик, дату вручення працівнику та короткий опис"
      ],
      [
        "Only the name of the payroll software",
        "Лише назву зарплатної програми"
      ],
      [
        "Only policies never delivered to employees",
        "Лише політики, які працівникам не надавали"
      ],
      [
        "Only a verbal recollection of policies",
        "Лише усний спогад про політики"
      ],
      [
        "Only the project schedule",
        "Лише графік проєкту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 177.30(a)(4) requires the policy list, delivery date and brief description.",
    "explanationUk": "Стаття 177.30(a)(4) вимагає переліку політик, дати надання та короткого опису.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.30"
  },
  {
    "section": "Minn. Stat. 177.30(b)",
    "difficulty": "medium",
    "question": "Required Minnesota employment records are maintained offsite rather than where employees work. Within what period must the recordkeeping arrangement allow compliance with the commissioner's demand for inspection?",
    "questionUk": "Обов’язкові трудові записи Minnesota зберігають поза місцем роботи працівників. У який строк спосіб зберігання має дозволяти виконати вимогу комісара про перевірку?",
    "answers": [
      [
        "72 hours",
        "72 години"
      ],
      [
        "7 days",
        "7 днів"
      ],
      [
        "14 days",
        "14 днів"
      ],
      [
        "30 days",
        "30 днів"
      ],
      [
        "One year",
        "Один рік"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Records must be readily available upon demand, either at the work location or maintained so the employer can comply within 72 hours.",
    "explanationUk": "Записи мають бути доступними на вимогу на місці роботи або зберігатися так, щоб роботодавець міг виконати вимогу протягом 72 годин.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.30"
  },
  {
    "section": "Minn. Stat. 177.30(a)(6)",
    "difficulty": "exam",
    "question": "A covered employer performs public works funded partly by Minnesota state funds. Which certified-payroll submission schedule and certification are required by this provision?",
    "questionUk": "Роботодавець, на якого поширюється положення, виконує громадські роботи з частковим фінансуванням штату Minnesota. Які періодичність і засвідчення certified payroll потрібні?",
    "answers": [
      [
        "Every two weeks, under oath signed by an owner or officer, to the contracting authority and project owner",
        "Кожні два тижні, під присягою з підписом власника або посадової особи, замовному органу й власнику проєкту"
      ],
      [
        "Once annually, unsigned, to the bank only",
        "Раз на рік без підпису лише банку"
      ],
      [
        "Monthly, signed only by any supplier",
        "Щомісяця лише з підписом постачальника"
      ],
      [
        "Only at final payment, without certification",
        "Лише при остаточному платежі без засвідчення"
      ],
      [
        "Only when an employee complains",
        "Лише після скарги працівника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For the specified employers and state-funded public work, the statute requires biweekly certified reports under owner/officer oath to both named recipients.",
    "explanationUk": "Для визначених роботодавців і робіт із коштами штату закон вимагає засвідчених звітів кожні два тижні під присягою власника/посадової особи обом зазначеним одержувачам.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.30"
  },
  {
    "section": "Minn. Stat. 177.30(a)(8)",
    "difficulty": "exam",
    "question": "For the specified covered employer performing state-funded public works, what event starts the special three-year employment-record retention period?",
    "questionUk": "Яка подія запускає спеціальний трирічний строк збереження трудових записів для визначеного роботодавця на громадських роботах із фінансуванням штату?",
    "answers": [
      [
        "The contracting authority's final payment on the public works project",
        "Остаточний платіж замовного органу за громадський проєкт"
      ],
      [
        "The date the contractor first bids",
        "Дата першої тендерної пропозиції"
      ],
      [
        "The first delivery of materials",
        "Перша доставка матеріалів"
      ],
      [
        "The date the project sign is installed",
        "Дата встановлення таблички проєкту"
      ],
      [
        "The first progress payment",
        "Перший проміжний платіж"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For the stated public-works scope, records are kept for three years after the contracting authority makes final payment, not merely from the first payroll entry.",
    "explanationUk": "Для зазначеної сфери громадських робіт записи зберігають три роки після остаточного платежу замовного органу, а не лише від першого зарплатного запису.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.30"
  }
];
export const intakeVerified114 = verifiedBatch(1353, "Minnesota Contractor Law / Business", "Business / Licensing", "Minnesota Statutes 181.032 and 177.30", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/181.032", seeds, "intake-series-109-114", false, "2026-10-22");

