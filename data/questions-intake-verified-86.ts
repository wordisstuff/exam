import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R402.3.1, item 1",
    "difficulty": "easy",
    "question": "What minimum 28-day compressive strength applies to concrete manufactured for precast concrete foundations?",
    "questionUk": "Яка мінімальна міцність на стиск у 28 діб потрібна бетону для виготовлення збірних бетонних фундаментів?",
    "answers": [
      [
        "5,000 psi",
        "5 000 psi"
      ],
      [
        "2,000 psi",
        "2 000 psi"
      ],
      [
        "2,500 psi",
        "2 500 psi"
      ],
      [
        "3,000 psi",
        "3 000 psi"
      ],
      [
        "3,500 psi",
        "3 500 psi"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Precast foundation concrete requires at least 5,000 psi at 28 days under R402.3.1; do not substitute the lower cast-in-place wall value.",
    "explanationUk": "Бетон збірного фундаменту потребує щонайменше 5 000 psi у 28 діб за R402.3.1; нижче значення монолітної стіни не підставляють."
  },
  {
    "section": "R402.3.1, item 1",
    "difficulty": "medium",
    "question": "Precast foundation concrete will face freezing and thawing. What minimum total air content does its specific material rule require?",
    "questionUk": "Бетон збірного фундаменту зазнаватиме замерзання й відтавання. Який мінімальний загальний вміст повітря вимагає спеціальне правило цього матеріалу?",
    "answers": [
      [
        "5 percent",
        "5 відсотків"
      ],
      [
        "1 percent",
        "1 відсоток"
      ],
      [
        "2 percent",
        "2 відсотки"
      ],
      [
        "3 percent",
        "3 відсотки"
      ],
      [
        "10 percent",
        "10 відсотків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The precast rule requires air entrainment with at least 5% total air for freeze/thaw exposure. Other applicable concrete provisions remain in force.",
    "explanationUk": "Правило збірного бетону вимагає повітровтягування щонайменше 5% за впливу замерзання й відтавання. Інші застосовні вимоги бетону залишаються."
  },
  {
    "section": "R402.3.1, item 2",
    "difficulty": "medium",
    "question": "What minimum reinforcing-steel yield strength is specified for precast concrete foundation materials?",
    "questionUk": "Яка мінімальна границя плинності арматурної сталі задана для збірних бетонних фундаментів?",
    "answers": [
      [
        "40,000 psi (Grade 40)",
        "40 000 psi, клас Grade 40"
      ],
      [
        "20,000 psi (Grade 20)",
        "20 000 psi, клас Grade 20"
      ],
      [
        "25,000 psi",
        "25 000 psi"
      ],
      [
        "30,000 psi",
        "30 000 psi"
      ],
      [
        "36,000 psi",
        "36 000 psi"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The precast material provision sets a minimum 40,000 psi yield strength and lists ASTM A615, A706 or A996.",
    "explanationUk": "Правило матеріалів збірних фундаментів установлює мінімум 40 000 psi та перелічує ASTM A615, A706 чи A996."
  },
  {
    "section": "R402.3.1, item 2",
    "difficulty": "medium",
    "question": "A precast foundation-wall drawing shows only ½ inch of concrete cover over reinforcing steel. What minimum in the precast material rule is missed?",
    "questionUk": "Креслення збірної фундаментної стіни показує лише ½ дюйма захисного шару над арматурою. Який мінімум спеціального правила порушено?",
    "answers": [
      [
        "¾ inch",
        "¾ дюйма"
      ],
      [
        "¼ inch",
        "¼ дюйма"
      ],
      [
        "⅜ inch",
        "⅜ дюйма"
      ],
      [
        "½ inch",
        "½ дюйма"
      ],
      [
        "⅝ inch",
        "⅝ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Steel reinforcement for precast concrete foundation walls requires at least ¾-inch concrete cover.",
    "explanationUk": "Для сталевої арматури збірних бетонних фундаментних стін потрібно щонайменше ¾ дюйма бетонного захисного шару."
  },
  {
    "section": "R402.3.1, item 3",
    "difficulty": "easy",
    "question": "What fastener grade does the precast foundation material provision specify for panel-to-panel connections?",
    "questionUk": "Який клас сталевих кріплень правило матеріалів збірного фундаменту задає для з’єднання панелей?",
    "answers": [
      [
        "Grade II steel fasteners",
        "Сталеві кріплення Grade II"
      ],
      [
        "Unclassified finish nails",
        "Некласифіковані оздоблювальні цвяхи"
      ],
      [
        "Any plastic rivets",
        "Будь-які пластикові заклепки"
      ],
      [
        "Drywall screws of any grade",
        "Будь-які гіпсокартонні шурупи"
      ],
      [
        "Wooden dowels only",
        "Лише дерев’яні шканти"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R402.3.1 item 3 specifically calls for Grade II steel fasteners between panels.",
    "explanationUk": "Пункт 3 R402.3.1 прямо вимагає між панелями сталеві кріплення Grade II."
  },
  {
    "section": "R402.3.1, item 4",
    "difficulty": "medium",
    "question": "Which standard governs nonstructural fibers used in precast concrete foundation materials?",
    "questionUk": "Який стандарт регулює неструктурні волокна в матеріалах збірних бетонних фундаментів?",
    "answers": [
      [
        "ASTM C1116",
        "Стандарт ASTM C1116"
      ],
      [
        "ASTM C1107",
        "Стандарт ASTM C1107"
      ],
      [
        "ASTM C143",
        "Стандарт ASTM C143"
      ],
      [
        "ASTM C1167",
        "Стандарт ASTM C1167"
      ],
      [
        "ASTM C1492",
        "Стандарт ASTM C1492"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Nonstructural fiber use must conform to ASTM C1116. This requirement does not authorize replacing structural reinforcement with fibers.",
    "explanationUk": "Неструктурні волокна мають відповідати ASTM C1116. Ця вимога не дозволяє замінювати ними робочу арматуру."
  },
  {
    "section": "R402.3.1, item 5",
    "difficulty": "medium",
    "question": "A precast foundation is bedded in grout on concrete footings. Which specified grout standard applies?",
    "questionUk": "Збірний фундамент установлюють на підливку поверх бетонної підошви. Який передбачений стандарт підливки діє?",
    "answers": [
      [
        "ASTM C1107",
        "Стандарт ASTM C1107"
      ],
      [
        "ASTM C1116",
        "Стандарт ASTM C1116"
      ],
      [
        "ASTM C150 only",
        "Лише ASTM C150"
      ],
      [
        "ASTM C1167",
        "Стандарт ASTM C1167"
      ],
      [
        "ASTM C665",
        "Стандарт ASTM C665"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Bedding grout for precast foundations on concrete footings must meet ASTM C1107.",
    "explanationUk": "Підливка під збірними фундаментами на бетонних підошвах має відповідати ASTM C1107."
  },
  {
    "section": "R608.5.1.6",
    "difficulty": "medium",
    "question": "Under the general rule, how must concrete in stay-in-place wall forms be consolidated?",
    "questionUk": "Як за загальним правилом ущільнюють бетон у незнімних стінових формах?",
    "answers": [
      [
        "Internal vibration",
        "Внутрішньою вібрацією"
      ],
      [
        "Only tapping the exterior finish",
        "Лише постукуванням по оздобленню"
      ],
      [
        "No consolidation is needed",
        "Ущільнення не потрібне"
      ],
      [
        "Only watering the surface",
        "Лише поливанням поверхні"
      ],
      [
        "Only waiting for settlement",
        "Лише очікуванням осідання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Stay-in-place forms require internal vibration unless the approved self-consolidating-mixture exception applies; concrete must work around reinforcement and into corners.",
    "explanationUk": "Незнімні форми потребують внутрішньої вібрації, крім схваленого винятку самоущільнювальної суміші; бетон має заповнити зони арматури й кути.",
    "sourceUrl": "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf"
  },
  {
    "section": "R608.5.1.6 Exception",
    "difficulty": "exam",
    "question": "Select all conditions stated for omitting internal vibration under the self-consolidating wall-concrete exception.",
    "questionUk": "Виберіть усі зазначені умови відмови від внутрішньої вібрації за винятком самоущільнювального стінового бетону.",
    "answers": [
      [
        "Approval of the mixture",
        "Схвалення суміші"
      ],
      [
        "Slump at least 8 inches",
        "Осадка конуса щонайменше 8 дюймів"
      ],
      [
        "Specific design for placement without internal vibration",
        "Спеціальний склад для укладання без внутрішньої вібрації"
      ],
      [
        "Slump below 4 inches",
        "Осадка менше 4 дюймів"
      ],
      [
        "Owner consent alone",
        "Лише згода власника"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "All three listed conditions matter: approved self-consolidating mixture, slump of 8 inches or more, and design for placement without internal vibration.",
    "explanationUk": "Важливі всі три умови: схвалена самоущільнювальна суміш, осадка від 8 дюймів і спеціальне призначення для укладання без внутрішньої вібрації.",
    "sourceUrl": "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf"
  },
  {
    "section": "R608.5.1.3",
    "difficulty": "exam",
    "question": "Without an approved exception, wall forms are 6 inches apart and the controlling clear bar spacing is 1 inch. What nominal maximum coarse aggregate size is allowed?",
    "questionUk": "Без схваленого винятку відстань між стінками форм — 6 дюймів, а визначальний чистий проміжок арматури — 1 дюйм. Який номінальний максимальний розмір крупного заповнювача?",
    "answers": [
      [
        "¾ inch",
        "¾ дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "1⅕ inches",
        "1⅕ дюйма"
      ],
      [
        "1½ inches",
        "1½ дюйма"
      ],
      [
        "2 inches",
        "2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Take the smaller limit: 6/5 = 1.2 inches and ¾ × 1 = .75 inch. The approved removable-form/workability exception is not invoked.",
    "explanationUk": "Беруть меншу межу: 6/5 = 1,2 дюйма та ¾ × 1 = 0,75 дюйма. Схвалений виняток для знімних форм і належної укладальності тут не застосовується.",
    "sourceUrl": "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf"
  },
  {
    "section": "R608.5.3",
    "difficulty": "medium",
    "question": "Which loading must a concrete-wall form tie be capable of resisting?",
    "questionUk": "Яке навантаження має витримувати стяжка стінової бетонної форми?",
    "answers": [
      [
        "Forces from fluid pressure of fresh concrete",
        "Зусилля від тиску свіжого рідкого бетону"
      ],
      [
        "Only the dry form's empty weight",
        "Лише вагу порожньої сухої форми"
      ],
      [
        "Only paint pressure",
        "Лише тиск фарби"
      ],
      [
        "Only the completed wall's insulation weight",
        "Лише вагу ізоляції готової стіни"
      ],
      [
        "No load after the first foot of placement",
        "Жодне після першого фута бетонування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Form ties need suitable strength against fresh-concrete fluid-pressure forces. Forms themselves must contain concrete during placement.",
    "explanationUk": "Стяжки мають витримувати зусилля тиску свіжого бетону. Самі форми мають утримувати бетон під час укладання.",
    "sourceUrl": "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf"
  },
  {
    "section": "R608.5.1.4",
    "difficulty": "exam",
    "question": "For wall concrete in removable forms, with no approved higher-slump exception, what is the maximum slump?",
    "questionUk": "Яка максимальна осадка конуса стінового бетону в знімних формах без схваленого винятку вищої осадки?",
    "answers": [
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "10 inches",
        "10 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Removable-form concrete slump is capped at 6 inches. Higher slump needs approval, segregation resistance and consistency with form-manufacturer recommendations; stay-in-place forms have a different rule.",
    "explanationUk": "Для знімних форм межа осадки — 6 дюймів. Більша потребує схвалення, стійкості до розшарування та відповідності рекомендаціям виробника форм; для незнімних форм інше правило.",
    "sourceUrl": "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf"
  }
];
export const intakeVerified86 = verifiedBatch(1017, "Footings and Foundations", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018P7/chapter-4-foundations", seeds, "intake-series-85-90", true, "2026-10-14");

