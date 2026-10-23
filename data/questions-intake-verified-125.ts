import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "40 CFR 745.89(b)",
    "difficulty": "easy",
    "question": "Under EPA's federal RRP firm-certification process, how often must a firm be recertified to maintain certification?",
    "questionUk": "Як часто фірма має проходити повторну сертифікацію за федеральним процесом EPA RRP, щоб зберігати сертифікат?",
    "answers": [
      [
        "Every 5 years",
        "Кожні 5 років"
      ],
      [
        "Every year",
        "Щороку"
      ],
      [
        "Every 2 years",
        "Кожні 2 роки"
      ],
      [
        "Every 3 years",
        "Кожні 3 роки"
      ],
      [
        "Only once, with no renewal",
        "Лише один раз без поновлення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Section 745.89(b) requires firm recertification every five years. This is firm certification, not the separate individual renovator training/certification interval.",
    "explanationUk": "745.89(b) вимагає повторної сертифікації фірми кожні п’ять років. Це сертифікація фірми, а не окремий строк навчання чи сертифікації фізичної особи-renovator."
  },
  {
    "section": "40 CFR 745.89(b)(1)(i)",
    "difficulty": "exam",
    "question": "An RRP firm electronically submits a complete recertification application 100 days before expiration. EPA has not decided by the expiration date. What happens to current certification?",
    "questionUk": "Фірма RRP електронно подає повну заяву на повторну сертифікацію за 100 днів до закінчення. EPA не ухвалила рішення до цієї дати. Що відбувається з чинним сертифікатом?",
    "answers": [
      [
        "It remains effective until expiration or EPA's final decision, whichever is later",
        "Він діє до початкового закінчення або остаточного рішення EPA, залежно від пізнішого"
      ],
      [
        "It automatically ends at the original expiration despite timely filing",
        "Він автоматично закінчується в початкову дату попри вчасне подання"
      ],
      [
        "It becomes permanent certification",
        "Він стає безстроковим"
      ],
      [
        "It extends for ten years without a decision",
        "Він продовжується на десять років без рішення"
      ],
      [
        "It remains valid only for dust sampling, never renovations",
        "Він діє лише для відбору пилу, але не ремонту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A complete application submitted at least 90 days before expiration is timely. Paragraph (b)(1)(i) preserves current certification until the later of expiration or EPA's final decision.",
    "explanationUk": "Повна заява, подана щонайменше за 90 днів до закінчення, є своєчасною. Пункт (b)(1)(i) зберігає сертифікат до пізнішої з дат: закінчення або остаточного рішення EPA."
  },
  {
    "section": "40 CFR 745.89(b)(1)(ii)",
    "difficulty": "medium",
    "question": "An RRP firm submits a complete recertification application 45 days before expiration, but EPA has not approved it when the certificate expires. May covered renovations continue during the lapse?",
    "questionUk": "Фірма RRP подає повну заяву за 45 днів до закінчення, але EPA не встигла схвалити її до завершення сертифіката. Чи можна продовжувати охоплені ремонти під час перерви сертифікації?",
    "answers": [
      [
        "No; work must wait until EPA approves recertification",
        "Ні; роботи мають чекати схвалення повторної сертифікації EPA"
      ],
      [
        "Yes; every filed application creates automatic continuation",
        "Так; будь-яка подана заява автоматично продовжує дію"
      ],
      [
        "Yes; for another five years",
        "Так; ще п’ять років"
      ],
      [
        "Yes; if the customer signs a waiver",
        "Так; за відмовою клієнта від вимог"
      ],
      [
        "Yes; if workers keep the expired certificate on site",
        "Так; якщо зберігати прострочений сертифікат на об’єкті"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "When a complete application is submitted less than 90 days before expiration, paragraph (b)(1)(ii) does not preserve certification if approval is late. The firm cannot conduct renovations until EPA approves it.",
    "explanationUk": "За повної заяви менш ніж за 90 днів пункт (b)(1)(ii) не зберігає сертифікат у разі затримки схвалення. Фірма не може виконувати ремонти до схвалення EPA."
  },
  {
    "section": "40 CFR 745.89(c)",
    "difficulty": "medium",
    "question": "Information in an RRP firm's latest certification application changes. Within what period must the firm amend its certification?",
    "questionUk": "Змінилися відомості останньої заяви фірми RRP на сертифікацію. Протягом якого строку потрібно внести зміну до сертифікації?",
    "answers": [
      [
        "90 days after the change",
        "90 днів після зміни"
      ],
      [
        "7 days after the change",
        "7 днів після зміни"
      ],
      [
        "30 days after the change",
        "30 днів після зміни"
      ],
      [
        "One year after the change",
        "Один рік після зміни"
      ],
      [
        "Only at the next five-year renewal",
        "Лише під час наступного п’ятирічного поновлення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (c) requires amendment within 90 days of a change to application information. Failure to amend within that time prohibits renovations or dust sampling until amended.",
    "explanationUk": "Пункт (c) вимагає змінити сертифікацію протягом 90 днів після зміни відомостей. За пропуску строку ремонти чи відбір пилу заборонені до внесення змін."
  },
  {
    "section": "40 CFR 745.89(c)(3)",
    "difficulty": "easy",
    "question": "An RRP firm amends its certification after changing application information. How does that amendment affect the expiration date?",
    "questionUk": "Фірма RRP змінює сертифікацію після оновлення відомостей заяви. Як це впливає на дату закінчення?",
    "answers": [
      [
        "It does not change the expiration date",
        "Не змінює дати закінчення"
      ],
      [
        "It restarts a five-year term automatically",
        "Автоматично запускає новий п’ятирічний строк"
      ],
      [
        "It adds one year automatically",
        "Автоматично додає один рік"
      ],
      [
        "It makes certification permanent",
        "Робить сертифікацію безстроковою"
      ],
      [
        "It shortens the term to 30 days",
        "Скорочує строк до 30 днів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (c)(3) expressly states that amending certification does not affect its expiration date. An amendment is not a renewal.",
    "explanationUk": "Пункт (c)(3) прямо визначає, що зміна сертифікації не впливає на дату закінчення. Внесення зміни не є поновленням."
  },
  {
    "section": "40 CFR 745.89(d)(1)",
    "difficulty": "medium",
    "question": "Which worker qualification arrangement is permitted for renovation activities performed on behalf of an RRP firm?",
    "questionUk": "Який варіант кваліфікації працівників дозволений для ремонтних робіт від імені фірми RRP?",
    "answers": [
      [
        "Workers are certified renovators or are trained by a certified renovator under 745.90",
        "Працівники є certified renovators або навчені certified renovator за 745.90"
      ],
      [
        "Every worker needs only a building permit",
        "Кожному працівнику потрібен лише будівельний дозвіл"
      ],
      [
        "Only the company's bookkeeper must attend training",
        "Навчання потрібне лише бухгалтеру фірми"
      ],
      [
        "No worker training is needed when the firm is certified",
        "Сертифікація фірми скасовує навчання працівників"
      ],
      [
        "A customer's verbal approval replaces all training",
        "Усна згода клієнта замінює все навчання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (d)(1) permits certified renovators and workers trained by a certified renovator in accordance with 745.90. Firm certification alone does not establish individual worker qualification.",
    "explanationUk": "Пункт (d)(1) дозволяє certified renovators та працівників, навчених certified renovator за 745.90. Сам сертифікат фірми не підтверджує кваліфікацію кожного працівника."
  },
  {
    "section": "40 CFR 745.89(d)(2)",
    "difficulty": "medium",
    "question": "How must an RRP firm assign certified-renovator responsibility across its renovation projects?",
    "questionUk": "Як фірма RRP повинна призначати відповідального certified renovator для своїх ремонтних проєктів?",
    "answers": [
      [
        "Assign a certified renovator to each renovation and ensure the required responsibilities are discharged",
        "Призначати certified renovator на кожен ремонт і забезпечувати виконання його обов’язків"
      ],
      [
        "Assign one name to the office roster without project assignments",
        "Внести одне ім’я до офісного списку без призначень на проєкти"
      ],
      [
        "Assign only projects where a child is visibly present",
        "Призначати лише там, де видно дитину"
      ],
      [
        "Assign only after cleanup has failed",
        "Призначати лише після невдалого прибирання"
      ],
      [
        "Use the owner of the building as the renovator automatically",
        "Автоматично вважати власника будівлі renovator"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (d)(2) requires a certified renovator assigned to each renovation and performance of all specified renovator responsibilities. A company-wide name without project responsibility is insufficient.",
    "explanationUk": "Пункт (d)(2) вимагає призначення certified renovator на кожен ремонт і виконання всіх його заданих обов’язків. Загального імені у списку фірми без відповідальності за проєкт недостатньо."
  },
  {
    "section": "40 CFR 745.86(a)",
    "difficulty": "easy",
    "question": "What is the federal minimum retention period for records demonstrating RRP compliance after renovation completion, without displacing any longer applicable retention duty?",
    "questionUk": "Який федеральний мінімальний строк зберігання підтверджень відповідності RRP після завершення ремонту без скасування довших застосовних строків?",
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
    "explanation": "Section 745.86(a) requires three years after completion and production to EPA on request. It expressly preserves longer documentation obligations under other provisions or state/tribal law.",
    "explanationUk": "745.86(a) вимагає три роки після завершення та надання EPA на запит. Закон прямо зберігає довші обов’язки за іншими положеннями чи правом штату/племені.",
    "sourceUrl": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.86"
  },
  {
    "section": "40 CFR 745.86(b)(1)(ii)",
    "difficulty": "exam",
    "question": "Select THREE required elements of a certified renovator's records when EPA-recognized test kits support an RRP lead-paint determination.",
    "questionUk": "Оберіть ТРИ обов’язкові складові записів certified renovator, коли EPA-recognized test kits використано для визначення наявності свинцевої фарби за RRP.",
    "answers": [
      [
        "Test-kit manufacturer and model",
        "Виробник і модель тест-набору"
      ],
      [
        "Description and locations of tested components",
        "Опис і місця перевірених компонентів"
      ],
      [
        "Result of each test kit used",
        "Результат кожного використаного тест-набору"
      ],
      [
        "Only the customer's estimated property value",
        "Лише оцінка вартості нерухомості клієнта"
      ],
      [
        "Only the paint color chosen for the finished room",
        "Лише колір фінішної фарби кімнати"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Paragraph (b)(1)(ii) requires test-kit manufacturer/model, descriptions and locations of tested components, and the result of each test kit used. A conclusion without the supporting test record is incomplete.",
    "explanationUk": "Пункт (b)(1)(ii) вимагає виробника/модель набору, опис і місця перевірених компонентів та результат кожного використаного набору. Висновок без таких записів неповний.",
    "sourceUrl": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.86"
  },
  {
    "section": "40 CFR 745.86(b)(6)(i)",
    "difficulty": "medium",
    "question": "An RRP project record says only that workers were trained. What additional training detail must the certified renovator's certification identify?",
    "questionUk": "У документах RRP записано лише, що працівників навчено. Які додаткові дані навчання повинно визначати засвідчення certified renovator?",
    "answers": [
      [
        "The training topics for each worker",
        "Теми навчання для кожного працівника"
      ],
      [
        "Only the total cost of all tools",
        "Лише загальну вартість інструментів"
      ],
      [
        "Only the project mailing address",
        "Лише поштову адресу проєкту"
      ],
      [
        "Only the business's gross revenue",
        "Лише валовий дохід бізнесу"
      ],
      [
        "Only the number of windows in the building",
        "Лише кількість вікон у будівлі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (b)(6)(i) requires certification that training was provided, identifying the topics for each worker. A generic statement about the crew does not supply the worker-specific topics.",
    "explanationUk": "Пункт (b)(6)(i) вимагає засвідчення проведеного навчання із зазначенням тем для кожного працівника. Загальна фраза про бригаду не містить індивідуальних тем.",
    "sourceUrl": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.86"
  },
  {
    "section": "40 CFR 745.86(c)(1)",
    "difficulty": "medium",
    "question": "A covered RRP renovation is performed inside a rented dwelling. The building owner and adult occupant are different people. Who must receive the specified compliance information?",
    "questionUk": "Охоплений RRP ремонт виконують усередині орендованого житла. Власник будівлі й дорослий мешканець — різні особи. Хто має отримати задану інформацію про відповідність?",
    "answers": [
      [
        "Both the owner and an adult occupant of the dwelling",
        "І власник, і дорослий мешканець житла"
      ],
      [
        "Only the owner",
        "Лише власник"
      ],
      [
        "Only the occupant's neighbor",
        "Лише сусід мешканця"
      ],
      [
        "Only the material supplier",
        "Лише постачальник матеріалів"
      ],
      [
        "Only the mortgage lender",
        "Лише іпотечний кредитор"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (c)(1) requires information for the building owner and, if different, an adult occupant when the renovation occurred within a residential dwelling.",
    "explanationUk": "Пункт (c)(1) вимагає інформацію власнику будівлі та, якщо це інша особа, дорослому мешканцю, коли ремонт виконували всередині житла.",
    "sourceUrl": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.86"
  },
  {
    "section": "40 CFR 745.86(c)(1)",
    "difficulty": "exam",
    "question": "An RRP firm delivers its final invoice 12 days after renovation completion. When is the specified compliance information due?",
    "questionUk": "Фірма RRP передає остаточний рахунок через 12 днів після завершення ремонту. Коли потрібно надати задану інформацію про відповідність?",
    "answers": [
      [
        "When the final invoice is delivered on day 12",
        "При передачі остаточного рахунку на 12-й день"
      ],
      [
        "Only on day 30, despite the earlier invoice",
        "Лише на 30-й день попри ранній рахунок"
      ],
      [
        "At the end of the calendar year",
        "Наприкінці календарного року"
      ],
      [
        "Only after the customer pays in full",
        "Лише після повної оплати клієнтом"
      ],
      [
        "Only when EPA asks for it",
        "Лише після запиту EPA"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paragraph (c)(1) uses the earlier of final-invoice delivery or 30 days after completion. Here invoice delivery on day 12 is earlier and controls.",
    "explanationUk": "Пункт (c)(1) встановлює ранішу з дат: передачу остаточного рахунку або 30 днів після завершення. Тут визначальною є передача рахунку на 12-й день.",
    "sourceUrl": "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.86"
  }
];
export const intakeVerified125 = verifiedBatch(1485, "Associated Issues", "Business / Licensing", "Federal EPA 40 CFR 745", "federal", "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.89", seeds, "intake-series-121-126", false, "2026-10-22");
