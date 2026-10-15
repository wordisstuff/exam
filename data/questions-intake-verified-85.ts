import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R802.9",
    "difficulty": "medium",
    "question": "A roof-framing opening has a header span of exactly 4 feet. What single-member header allowance applies?",
    "questionUk": "Отвір у каркасі даху має проліт ригеля рівно 4 фути. Який дозвіл щодо одинарного ригеля діє?",
    "answers": [
      [
        "One member the same size as the ceiling joist or rafter",
        "Один елемент такого самого розміру, як балка стелі чи кроква"
      ],
      [
        "One member half the rafter depth",
        "Один елемент половинної висоти крокви"
      ],
      [
        "Any scrap board",
        "Будь-який обрізок"
      ],
      [
        "A single 1×2 regardless of load",
        "Один 1×2 незалежно від навантаження"
      ],
      [
        "No header is necessary",
        "Ригель не потрібний"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A header spanning no more than 4 feet may be a single member matching the ceiling joist or rafter size.",
    "explanationUk": "За прольоту не більше 4 футів дозволений одинарний ригель розміром як балка стелі чи кроква."
  },
  {
    "section": "R802.9",
    "difficulty": "exam",
    "question": "A single roof-opening header is 2 feet 8 inches from the trimmer's bearing. Which location limit permits a single trimmer to carry that single header?",
    "questionUk": "Одинарний ригель отвору даху розташований за 2 фути 8 дюймів від опори обрамлювальної балки. Яка межа дозволяє одинарну обрамлювальну балку?",
    "answers": [
      [
        "Within 3 feet of the trimmer bearing",
        "У межах 3 футів від опори обрамлювальної балки"
      ],
      [
        "Within 6 feet of the trimmer bearing",
        "У межах 6 футів"
      ],
      [
        "Only directly above the bearing",
        "Лише безпосередньо над опорою"
      ],
      [
        "Anywhere in the trimmer span",
        "Будь-де у прольоті"
      ],
      [
        "Within 12 feet of the trimmer bearing",
        "У межах 12 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The single-trimmer allowance requires the single header to be within 3 feet of the trimmer bearing; 2 feet 8 inches satisfies that location condition.",
    "explanationUk": "Дозвіл на одинарну обрамлювальну балку потребує одинарного ригеля в межах 3 футів від її опори; 2 фути 8 дюймів відповідають цій умові."
  },
  {
    "section": "R802.9",
    "difficulty": "medium",
    "question": "A roof-opening header spans 5 feet. Which members must be doubled and adequately sized?",
    "questionUk": "Ригель отвору даху має проліт 5 футів. Які елементи потрібно здвоїти та належно розрахувати за перерізом?",
    "answers": [
      [
        "Both header and trimmer joists",
        "Ригель і обрамлювальні балки"
      ],
      [
        "Only the ridge board",
        "Лише конькову дошку"
      ],
      [
        "Only the ceiling finish",
        "Лише оздоблення стелі"
      ],
      [
        "Only the tail joists",
        "Лише перерізані балки"
      ],
      [
        "None if the opening is rectangular",
        "Жодні, якщо отвір прямокутний"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Beyond a 4-foot header span, the header and trimmers must be doubled and have sufficient cross section for the supported framing.",
    "explanationUk": "За прольоту ригеля понад 4 фути ригель та обрамлювальні балки здвоюють і забезпечують достатній переріз для опертого каркаса."
  },
  {
    "section": "R802.9",
    "difficulty": "medium",
    "question": "A header in roof framing spans 7 feet. What connection is required where it meets the trimmer joists?",
    "questionUk": "Ригель каркаса даху має проліт 7 футів. Яке з’єднання потрібне з обрамлювальними балками?",
    "answers": [
      [
        "Approved hangers",
        "Схвалені підвіси"
      ],
      [
        "Only toenails of any size",
        "Лише косі цвяхи будь-якого розміру"
      ],
      [
        "Only construction adhesive",
        "Лише будівельний клей"
      ],
      [
        "A finish-nail connection",
        "Оздоблювальні цвяхи"
      ],
      [
        "No connection beyond bearing on drywall",
        "Достатньо опертя на гіпсокартон"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Approved header-to-trimmer hangers are required when header span exceeds 6 feet. Doubling requirements also still apply.",
    "explanationUk": "Схвалені підвіси між ригелем та обрамлювальними балками потрібні за прольоту понад 6 футів. Вимога здвоєння також залишається."
  },
  {
    "section": "R802.9",
    "difficulty": "exam",
    "question": "A 13-foot tail joist ends at a roof-opening header. Select the two prescribed support methods at that header.",
    "questionUk": "Перерізана балка завдовжки 13 футів закінчується на ригелі отвору даху. Виберіть два передбачені способи підтримки на ригелі.",
    "answers": [
      [
        "Framing anchors",
        "Каркасні анкери"
      ],
      [
        "Ledger strips at least 2×2 inches",
        "Опорні бруски щонайменше 2×2 дюйми"
      ],
      [
        "Finish nails into end grain only",
        "Лише оздоблювальні цвяхи в торець"
      ],
      [
        "A 1×1-inch ledger strip",
        "Опорний брусок 1×1 дюйм"
      ],
      [
        "Joint compound beneath the joist",
        "Шпаклівка під балкою"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Tail joists over 12 feet require framing anchors or ledger strips at least 2 by 2 inches at the header.",
    "explanationUk": "Балки, що закінчуються на ригелі та довші за 12 футів, потребують каркасних анкерів або опорних брусків щонайменше 2×2 дюйми."
  },
  {
    "section": "R802.10.1",
    "difficulty": "easy",
    "question": "When must truss design drawings be provided to the building official and approved?",
    "questionUk": "Коли проєктні креслення ферм потрібно надати будівельному інспектору та отримати схвалення?",
    "answers": [
      [
        "Before installation",
        "До монтажу"
      ],
      [
        "Only after roof sheathing",
        "Лише після настилу даху"
      ],
      [
        "Only at final inspection",
        "Лише на фінальному огляді"
      ],
      [
        "Only after occupancy",
        "Лише після заселення"
      ],
      [
        "After a truss is altered",
        "Після зміни ферми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Truss design drawings must be provided and approved before installation; delivery to the site is a separate requirement.",
    "explanationUk": "Креслення ферм надають і схвалюють до монтажу; доставка на об’єкт є окремою вимогою."
  },
  {
    "section": "R802.10.1",
    "difficulty": "medium",
    "question": "The truss shipment arrives without its design drawings. What delivery requirement has been missed?",
    "questionUk": "Партія ферм прибула без проєктних креслень. Яку вимогу доставки порушено?",
    "answers": [
      [
        "Design drawings must accompany the truss shipment to the jobsite",
        "Креслення мають супроводжувати партію ферм на об’єкт"
      ],
      [
        "Drawings are needed only at the plant",
        "Креслення потрібні лише на заводі"
      ],
      [
        "The truck driver must redesign the trusses",
        "Водій має перепроєктувати ферми"
      ],
      [
        "A sales invoice replaces the drawings",
        "Рахунок замінює креслення"
      ],
      [
        "Drawings are optional for factory trusses",
        "Для заводських ферм креслення необов’язкові"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R802.10.1 requires the design drawings with the shipment delivered to the jobsite, not merely somewhere in the supplier's records.",
    "explanationUk": "R802.10.1 вимагає креслення разом із партією на об’єкті, а не лише десь у записах постачальника."
  },
  {
    "section": "R802.10.1, items 1–3",
    "difficulty": "exam",
    "question": "Select the information expressly required on truss design drawings.",
    "questionUk": "Виберіть відомості, прямо обов’язкові на проєктних кресленнях ферм.",
    "answers": [
      [
        "Slope or depth, span and spacing",
        "Ухил або висота, проліт та крок"
      ],
      [
        "Locations of all joints",
        "Місця всіх вузлів"
      ],
      [
        "Required bearing widths",
        "Потрібна ширина опор"
      ],
      [
        "Roofing contractor's profit margin",
        "Прибуток покрівельника"
      ],
      [
        "Delivery driver's route",
        "Маршрут водія доставки"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The opening items of R802.10.1 require geometry/spacing, joint locations and bearing widths. This is not the complete drawing-content list.",
    "explanationUk": "Початкові пункти R802.10.1 вимагають геометрію й крок, розташування вузлів та ширину опор. Це не повний перелік вмісту креслення."
  },
  {
    "section": "R802.10.3",
    "difficulty": "medium",
    "question": "What two structural purposes must roof-truss bracing serve?",
    "questionUk": "Які дві конструктивні функції мають виконувати розкріплення ферм даху?",
    "answers": [
      [
        "Prevent rotation",
        "Запобігати повороту"
      ],
      [
        "Provide lateral stability",
        "Забезпечувати бічну стійкість"
      ],
      [
        "Replace every bearing wall",
        "Замінити всі несучі стіни"
      ],
      [
        "Eliminate all roof gravity loads",
        "Усунути всі вертикальні навантаження даху"
      ],
      [
        "Make design drawings unnecessary",
        "Зробити креслення непотрібними"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Bracing must prevent truss rotation and provide lateral stability according to building construction documents and individual truss drawings.",
    "explanationUk": "Розкріплення має запобігати повороту ферм і забезпечувати бічну стійкість відповідно до документації будівлі та креслень окремих ферм."
  },
  {
    "section": "R802.10.3",
    "difficulty": "medium",
    "question": "No specific truss-bracing requirements are supplied. What does the code direct the installer to use?",
    "questionUk": "Спеціальних вимог розкріплення ферм немає. Чим код приписує керуватися монтажнику?",
    "answers": [
      [
        "Accepted industry practice, such as the SBCA BCSI guide",
        "Визнаною галузевою практикою, наприклад настановою SBCA BCSI"
      ],
      [
        "No bracing at all",
        "Узагалі не робити розкріплення"
      ],
      [
        "Only the owner's verbal preference",
        "Лише усним побажанням власника"
      ],
      [
        "Random scraps without a bracing plan",
        "Випадковими обрізками без плану"
      ],
      [
        "Roofing color instructions",
        "Інструкцією щодо кольору покрівлі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Absence of specific requirements does not remove bracing; the fallback is accepted industry practice such as BCSI.",
    "explanationUk": "Відсутність спеціальних вимог не скасовує розкріплення; застосовують визнану галузеву практику, наприклад BCSI."
  },
  {
    "section": "R802.10.4",
    "difficulty": "medium",
    "question": "A plumber wants to drill a roof-truss member for a new pipe. Whose approval is required before altering it?",
    "questionUk": "Сантехнік хоче просвердлити елемент ферми даху для труби. Чиє схвалення потрібне перед зміною?",
    "answers": [
      [
        "A registered design professional",
        "Зареєстрованого фахівця з проєктування"
      ],
      [
        "Only the homeowner",
        "Лише власника"
      ],
      [
        "Only the delivery driver",
        "Лише водія доставки"
      ],
      [
        "Any worker with a drill",
        "Будь-якого працівника з дрилем"
      ],
      [
        "No approval if the hole is small",
        "Малий отвір не потребує схвалення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Truss members may not be cut, notched, drilled, spliced or otherwise altered without registered-design-professional approval.",
    "explanationUk": "Елементи ферм не можна різати, надрізати, свердлити, зрощувати чи інакше змінювати без схвалення зареєстрованого проєктувальника."
  },
  {
    "section": "R802.10.4",
    "difficulty": "exam",
    "question": "A proposed attic HVAC unit would load a roof truss beyond its design load without cutting any member. What must be verified?",
    "questionUk": "Нова вентиляційна установка на горищі перевищить проєктне навантаження ферми, хоча елементи не різатимуть. Що потрібно перевірити?",
    "answers": [
      [
        "The truss can support the additional loading",
        "Що ферма здатна нести додаткове навантаження"
      ],
      [
        "Only that no member is cut",
        "Лише відсутність розрізів"
      ],
      [
        "Only that the unit fits through the hatch",
        "Лише проходження установки крізь люк"
      ],
      [
        "Only that insulation is replaced",
        "Лише відновлення утеплювача"
      ],
      [
        "Only that the owner accepts the risk",
        "Лише згоду власника на ризик"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Adding load beyond the truss design requires verification of capacity even if no member is physically cut.",
    "explanationUk": "Додавання навантаження понад проєктне потребує перевірки несучої здатності навіть без фізичного розрізання елементів."
  }
];
export const intakeVerified85 = verifiedBatch(1005, "Carpentry", "Roof Framing", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter8.pdf", seeds, "intake-series-85-90", true, "2026-10-14");

