import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Minn. Stat. 181.79, subd. 1(a), (c)",
    "difficulty": "exam",
    "question": "A nonunion hourly employee signs a hiring form authorizing deductions for all future tool losses. A tool is later lost, with no post-loss authorization or court determination. Does that advance blanket form authorize the loss deduction under 181.79?",
    "questionUk": "Найманий погодинний працівник без колективного договору підписує при наймі згоду на відрахування за всі майбутні втрати інструментів. Згодом інструмент зникає; нової згоди чи рішення суду немає. Чи дозволяє початкова загальна згода таке відрахування за 181.79?",
    "answers": [
      [
        "No; the ordinary loss authorization must be voluntary, written and made after the loss",
        "Ні; звичайна згода на втрату має бути добровільною, письмовою й після втрати"
      ],
      [
        "Yes; any hiring form overrides the statute",
        "Так; будь-яка форма найму переважає закон"
      ],
      [
        "Yes; any lost tool automatically becomes a wage deduction",
        "Так; будь-яка втрата інструмента автоматично стає відрахуванням"
      ],
      [
        "Yes; a supervisor's belief alone is sufficient",
        "Так; достатньо думки керівника"
      ],
      [
        "Yes; deductions are unrestricted during probation",
        "Так; у випробувальний строк відрахування необмежені"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Under the ordinary rule, authorization must follow the loss or indebtedness; alternatively, liability may be determined by a competent court. The stated case has neither and excludes the relevant collective-bargaining exception.",
    "explanationUk": "За загальним правилом згода має бути після втрати чи виникнення боргу; альтернатива — встановлена компетентним судом відповідальність. У сценарії немає жодного шляху й виключено виняток колективного договору."
  },
  {
    "section": "Minn. Stat. 181.79, subd. 1(a)",
    "difficulty": "medium",
    "question": "An employee voluntarily authorizes a lawful post-loss wage deduction in writing. What must that authorization state about payroll installments?",
    "questionUk": "Працівник добровільно письмово дозволяє законне відрахування із зарплати після втрати. Що згода має визначати щодо частин відрахування?",
    "answers": [
      [
        "The amount to be deducted during each pay period",
        "Суму відрахування за кожен платіжний період"
      ],
      [
        "Only the employer's total annual revenue",
        "Лише загальний річний дохід роботодавця"
      ],
      [
        "Only a general promise to repay without installment amounts",
        "Лише загальну обіцянку повернення без сум частин"
      ],
      [
        "Only the employee's job title",
        "Лише посаду працівника"
      ],
      [
        "Only a maximum number of future work hours",
        "Лише максимальну кількість майбутніх робочих годин"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1(a) requires the authorization to set out the amount deducted during each pay period. A general repayment promise does not supply that required detail.",
    "explanationUk": "Subd. 1(a) вимагає зазначати суму відрахування за кожен платіжний період. Загальна обіцянка повернути кошти не містить обов’язкової деталізації."
  },
  {
    "section": "Minn. Stat. 181.79, subd. 1(b)",
    "difficulty": "medium",
    "question": "Even with otherwise valid authorization for a loss deduction, what upper limit does 181.79, subdivision 1(b), impose?",
    "questionUk": "Навіть за належної згоди на відрахування за втрату яку верхню межу задає 181.79, subd. 1(b)?",
    "answers": [
      [
        "The amount legally subject to garnishment or execution on wages",
        "Суму, на яку законом дозволено звертати стягнення із зарплати"
      ],
      [
        "The employer may always take the entire paycheck",
        "Роботодавець завжди може забрати всю зарплату"
      ],
      [
        "The amount is unlimited if the employee is new",
        "Сума необмежена для нового працівника"
      ],
      [
        "Only the employer's preferred bookkeeping limit",
        "Лише бажану бухгалтерську межу роботодавця"
      ],
      [
        "The full replacement cost regardless of wage-protection limits",
        "Повну вартість заміни незалежно від захисту зарплати"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1(b) limits deductions to the amount established by law as subject to garnishment or execution. Authorization does not itself remove the statutory wage-protection ceiling.",
    "explanationUk": "Subd. 1(b) обмежує відрахування сумою, на яку закон дозволяє звернути стягнення. Сама згода не скасовує законної межі захисту зарплати."
  },
  {
    "section": "Minn. Stat. 181.79, subd. 1(c)",
    "difficulty": "easy",
    "question": "Outside the listed exceptions, what is the effect of an employer-employee agreement contrary to 181.79's deduction protections?",
    "questionUk": "Поза переліченими винятками який наслідок має угода роботодавця й працівника всупереч захисту відрахувань за 181.79?",
    "answers": [
      [
        "The contrary agreement is void",
        "Суперечлива угода недійсна"
      ],
      [
        "It is automatically enforceable because both signed",
        "Вона автоматично чинна через обидва підписи"
      ],
      [
        "It overrides the law if notarized",
        "Вона переважає закон за нотаріального посвідчення"
      ],
      [
        "It becomes valid after one paycheck",
        "Вона стає чинною після однієї виплати"
      ],
      [
        "It becomes valid if attached to a timecard",
        "Вона стає чинною як додаток до табеля"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1(c) makes agreements contrary to the section void, subject to its express exceptions. A signature or notarization does not generally override the protection.",
    "explanationUk": "Subd. 1(c) визнає угоди всупереч розділу недійсними з урахуванням прямо зазначених винятків. Підпис чи нотаріальне посвідчення загалом не скасовують захист."
  },
  {
    "section": "Minn. Stat. 181.79, subd. 1(c)(3)",
    "difficulty": "exam",
    "question": "Before taking a loan from the employer, an employee voluntarily signs a written authorization to deduct its cost at regular intervals or on termination. Which exception addresses that arrangement?",
    "questionUk": "До отримання позики від роботодавця працівник добровільно письмово дозволяє відраховувати її вартість регулярними частинами або при звільненні. Який виняток охоплює таку угоду?",
    "answers": [
      [
        "The advance written authorization exception for an employer purchase or loan",
        "Виняток попередньої письмової згоди на покупку чи позику у роботодавця"
      ],
      [
        "An exception allowing advance authorization for every future property loss",
        "Виняток попередньої згоди на будь-яку майбутню втрату майна"
      ],
      [
        "An exception for any deduction approved orally",
        "Виняток для будь-якого усно погодженого відрахування"
      ],
      [
        "An exception eliminating all wage protections at termination",
        "Виняток, що скасовує весь захист при звільненні"
      ],
      [
        "No exception exists for purchases or loans",
        "Для покупок чи позик винятку немає"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1(c)(3) addresses voluntary written authorization before an employee's purchase or loan from the employer. This specific exception should not be treated as general permission for advance tool-loss deductions.",
    "explanationUk": "Subd. 1(c)(3) охоплює добровільну письмову згоду до покупки чи позики у роботодавця. Цей конкретний виняток не є загальним дозволом завчасних відрахувань за втрачені інструменти."
  },
  {
    "section": "Minn. Stat. 181.79, subd. 2",
    "difficulty": "exam",
    "question": "An employer unlawfully deducts $180 from an employee's wages in violation of 181.79. What amount does subdivision 2 make the employer liable for in the employee's civil action?",
    "questionUk": "Роботодавець незаконно відраховує 180 доларів із зарплати всупереч 181.79. Яку суму відповідальності визначає subd. 2 у цивільному позові працівника?",
    "answers": [
      [
        "$360",
        "360 доларів"
      ],
      [
        "$90",
        "90 доларів"
      ],
      [
        "$180",
        "180 доларів"
      ],
      [
        "$270",
        "270 доларів"
      ],
      [
        "$540",
        "540 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 2 specifies twice the deduction or credit taken. For a $180 unlawful deduction, 2 × $180 = $360 under that provision.",
    "explanationUk": "Subd. 2 визначає подвійну суму відрахування чи зарахування. Для незаконних 180 доларів: 2 × 180 = 360 доларів за цим положенням."
  },
  {
    "section": "Minn. Stat. 177.253, subd. 1",
    "difficulty": "medium",
    "question": "In 2026, a covered Minnesota employee needs only 8 minutes to use the nearest convenient restroom. With no different collective bargaining provision, what minimum rest-break duration must the employer allow?",
    "questionUk": "У 2026 році охопленому працівнику Minnesota достатньо 8 хвилин для найближчої зручної вбиральні. За відсутності іншого колективного правила яка мінімальна тривалість відпочинку потрібна?",
    "answers": [
      [
        "At least 15 minutes",
        "Щонайменше 15 хвилин"
      ],
      [
        "Only 8 minutes",
        "Лише 8 хвилин"
      ],
      [
        "Only 5 minutes",
        "Лише 5 хвилин"
      ],
      [
        "Only 10 minutes",
        "Лише 10 хвилин"
      ],
      [
        "No break unless restroom use takes 20 minutes",
        "Без перерви, якщо вбиральня не потребує 20 хвилин"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The current statute requires at least 15 minutes or enough time for the nearest convenient restroom, whichever is longer. Eight minutes does not reduce the 15-minute floor.",
    "explanationUk": "Чинний закон вимагає щонайменше 15 хвилин або достатньо часу для найближчої зручної вбиральні — залежно від довшого. Вісім хвилин не зменшують мінімум 15.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.253"
  },
  {
    "section": "Minn. Stat. 177.253, subd. 1",
    "difficulty": "medium",
    "question": "In 2026, a covered employee needs 18 minutes to use the nearest convenient restroom. May an employer apply an absolute 15-minute rest-break cap under 177.253?",
    "questionUk": "У 2026 році охопленому працівнику потрібно 18 хвилин для найближчої зручної вбиральні. Чи може роботодавець встановити абсолютну межу відпочинку 15 хвилин за 177.253?",
    "answers": [
      [
        "No; the employee must have the longer time needed for that restroom use",
        "Ні; працівнику потрібно надати довший потрібний час для вбиральні"
      ],
      [
        "Yes; 15 minutes is always the maximum",
        "Так; 15 хвилин завжди є максимумом"
      ],
      [
        "Yes; any additional time must occur after the shift",
        "Так; додатковий час можливий лише після зміни"
      ],
      [
        "Yes; the rule concerns only meal periods",
        "Так; правило стосується лише обіду"
      ],
      [
        "Yes; restroom travel time is never considered",
        "Так; час до вбиральні ніколи не враховують"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1 uses whichever is longer: 15 minutes or sufficient time for the nearest convenient restroom. In this scenario 18 minutes is required, absent a different applicable collective bargaining provision.",
    "explanationUk": "Subd. 1 обирає довший час: 15 хвилин або достатній час для найближчої зручної вбиральні. У цьому сценарії потрібно 18 хвилин за відсутності іншого колективного правила.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.253"
  },
  {
    "section": "Minn. Stat. 177.253, subd. 1",
    "difficulty": "easy",
    "question": "Under Minnesota's 2026 rule for covered employees, when must the required rest break be allowed?",
    "questionUk": "Коли за правилом Minnesota 2026 року потрібно надавати обов’язкову перерву відпочинку охопленим працівникам?",
    "answers": [
      [
        "Within each four consecutive hours of work",
        "У межах кожних чотирьох послідовних годин роботи"
      ],
      [
        "Only after eight consecutive hours",
        "Лише після восьми послідовних годин"
      ],
      [
        "Only at the end of the shift",
        "Лише наприкінці зміни"
      ],
      [
        "Once per calendar week",
        "Раз на календарний тиждень"
      ],
      [
        "Only when an employee works overtime",
        "Лише при понаднормовій роботі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1 requires a rest break within each four consecutive hours of work. The statute's current minimum duration and any applicable collective bargaining provisions must also be checked.",
    "explanationUk": "Subd. 1 вимагає відпочинок у межах кожних чотирьох послідовних годин роботи. Також перевіряють чинну мінімальну тривалість і застосовний колективний договір.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.253"
  },
  {
    "section": "Minn. Stat. 177.254, subd. 1",
    "difficulty": "medium",
    "question": "A covered Minnesota employee is scheduled to work exactly six consecutive hours in 2026. With no different collective bargaining provision, what meal-break minimum applies?",
    "questionUk": "Охоплений працівник Minnesota запланований на рівно шість послідовних годин у 2026 році. Який мінімум обідньої перерви діє без іншого колективного правила?",
    "answers": [
      [
        "At least 30 minutes",
        "Щонайменше 30 хвилин"
      ],
      [
        "No meal break until eight hours",
        "Обід не потрібен до восьми годин"
      ],
      [
        "Only 10 minutes",
        "Лише 10 хвилин"
      ],
      [
        "Only 15 minutes",
        "Лише 15 хвилин"
      ],
      [
        "Exactly 20 minutes at the employer's option",
        "Рівно 20 хвилин за вибором роботодавця"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The current subdivision 1 applies at six or more consecutive hours and requires at least 30 minutes. The former eight-hour threshold is not the 2026 rule.",
    "explanationUk": "Чинна subd. 1 застосовується від шести послідовних годин включно й вимагає щонайменше 30 хвилин. Колишня межа восьми годин не є правилом 2026 року.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.254"
  },
  {
    "section": "Minn. Stat. 177.253, subd. 2; 177.254, subd. 3",
    "difficulty": "medium",
    "question": "Which arrangement do Minnesota's rest- and meal-break statutes expressly allow to establish different break provisions?",
    "questionUk": "Яку домовленість закони Minnesota про відпочинок і обід прямо дозволяють для встановлення інших правил перерв?",
    "answers": [
      [
        "A collective bargaining agreement between employers and employees",
        "Колективний договір між роботодавцями й працівниками"
      ],
      [
        "Only an unsigned note posted by one supervisor",
        "Лише непідписану записку одного керівника"
      ],
      [
        "Any customer's construction specification",
        "Будь-яку будівельну специфікацію клієнта"
      ],
      [
        "Any tool-rental agreement",
        "Будь-який договір оренди інструментів"
      ],
      [
        "Only a change order signed by the homeowner",
        "Лише change order власника будинку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Both statutes preserve different break arrangements established through a collective bargaining agreement. This is an express statutory route, not a general power to replace the rules unilaterally.",
    "explanationUk": "Обидва закони зберігають можливість інших правил перерв за колективним договором. Це прямо передбачений шлях, а не загальне право односторонньо замінити норми.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.254"
  },
  {
    "section": "Minn. Stat. 177.254, subd. 4",
    "difficulty": "exam",
    "question": "An employer fails to allow one required 30-minute meal break. The employee's regular rate is $28 per hour. Considering only subdivision 4's break-time compensation plus equal liquidated damages, what amount results?",
    "questionUk": "Роботодавець не дозволяє одну обов’язкову 30-хвилинну обідню перерву. Звичайна ставка працівника — 28 доларів за годину. Яка сума виходить лише за компенсацією часу та рівними liquidated damages у subd. 4?",
    "answers": [
      [
        "$28 total",
        "28 доларів загалом"
      ],
      [
        "$7 total",
        "7 доларів загалом"
      ],
      [
        "$14 total",
        "14 доларів загалом"
      ],
      [
        "$21 total",
        "21 долар загалом"
      ],
      [
        "$56 total",
        "56 доларів загалом"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Half an hour at $28 is $14. Subdivision 4 adds an equal $14 as liquidated damages, producing $28 under the stated remedy calculation.",
    "explanationUk": "Пів години за ставкою 28 доларів — це 14 доларів. Subd. 4 додає рівні 14 доларів liquidated damages, разом 28 за цим розрахунком.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/177.254"
  }
];
export const intakeVerified126 = verifiedBatch(1497, "Minnesota Contractor Law / Business", "Business / Licensing", "Minnesota Statutes", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/181.79", seeds, "intake-series-121-126", false, "2026-10-22");
