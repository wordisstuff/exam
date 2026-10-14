import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Table R503.1",
    "difficulty": "medium",
    "question": "At 24-inch joist spacing, which pair gives minimum net lumber-subfloor thickness perpendicular and diagonal to joists?",
    "questionUk": "За кроку балок 24 дюйми яка пара визначає мінімальну фактичну товщину дощатої чорнової підлоги перпендикулярно й діагонально до балок?",
    "answers": [
      [
        "11/16 inch perpendicular; ¾ inch diagonal",
        "11/16 дюйма перпендикулярно; ¾ дюйма діагонально"
      ],
      [
        "⅝ inch for both",
        "⅝ дюйма для обох"
      ],
      [
        "¾ inch perpendicular; 11/16 inch diagonal",
        "¾ дюйма перпендикулярно; 11/16 дюйма діагонально"
      ],
      [
        "½ inch for both",
        "½ дюйма для обох"
      ],
      [
        "⅝ inch perpendicular; ½ inch diagonal",
        "⅝ дюйма перпендикулярно; ½ дюйма діагонально"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 24-inch row differentiates orientation: 11/16 inch perpendicular and ¾ inch diagonal.",
    "explanationUk": "Рядок 24 дюйми розрізняє напрямок: 11/16 дюйма перпендикулярно та ¾ дюйма діагонально."
  },
  {
    "section": "Table R503.1",
    "difficulty": "easy",
    "question": "At 16-inch joist spacing, what minimum net lumber floor-sheathing thickness applies to either listed orientation?",
    "questionUk": "За кроку балок 16 дюймів яка мінімальна фактична товщина дощатого настилу діє для обох указаних напрямків?",
    "answers": [
      [
        "⅝ inch",
        "⅝ дюйма"
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
        "11/16 inch",
        "11/16 дюйма"
      ],
      [
        "¾ inch",
        "¾ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 16-inch row specifies ⅝ inch for both perpendicular and diagonal sheathing.",
    "explanationUk": "Рядок 16 дюймів установлює ⅝ дюйма для перпендикулярного й діагонального настилу."
  },
  {
    "section": "R503.1.1",
    "difficulty": "medium",
    "question": "Ordinary square-ended subfloor boards are used, not end-matched lumber. Where must their end joints occur?",
    "questionUk": "Для чорнової підлоги використані звичайні дошки з прямими торцями, а не з торцевим замком. Де мають бути торцеві стики?",
    "answers": [
      [
        "Over supports",
        "Над опорами"
      ],
      [
        "At any location between supports",
        "У будь-якому місці між опорами"
      ],
      [
        "Only at room centerlines",
        "Лише по центральній лінії кімнати"
      ],
      [
        "Only at panel edge clips",
        "Лише на крайових кліпсах плит"
      ],
      [
        "Anywhere if finish flooring is later installed",
        "Будь-де за подальшого монтажу чистової підлоги"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Lumber subfloor end joints occur over supports unless the end-matched exception is used.",
    "explanationUk": "Торцеві стики дощатої чорнової підлоги розташовують над опорами, якщо не застосовано виняток для торцевого замка."
  },
  {
    "section": "R503.1.1",
    "difficulty": "medium",
    "question": "End-matched subfloor lumber uses the exception to supported end joints. Each piece must bear on at least how many joists?",
    "questionUk": "Дошки з торцевим замком використовують виняток щодо опори торцевих стиків. На скільки щонайменше балок має спиратися кожна дошка?",
    "answers": [
      [
        "Two",
        "На дві"
      ],
      [
        "One",
        "На одну"
      ],
      [
        "Three",
        "На три"
      ],
      [
        "Four",
        "На чотири"
      ],
      [
        "Five",
        "На п’ять"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception requires each end-matched piece to bear on at least two joists.",
    "explanationUk": "Виняток вимагає опори кожної дошки з торцевим замком щонайменше на дві балки."
  },
  {
    "section": "R503.1.1",
    "difficulty": "exam",
    "question": "Which arrangement qualifies for the provision permitting omission of subflooring?",
    "questionUk": "Яке рішення відповідає положенню, що дозволяє не влаштовувати чорновий настил?",
    "answers": [
      [
        "Joists at no more than 16 inches; 1-inch nominal tongue-and-groove strips perpendicular to joists",
        "Балки з кроком не більш як 16 дюймів; номінальні 1-дюймові шпунтовані планки перпендикулярно балкам"
      ],
      [
        "Joists at 24 inches; ¾-inch strips parallel to joists",
        "Балки з кроком 24 дюйми; планки ¾ дюйма паралельно балкам"
      ],
      [
        "Joists at 16 inches; ½-inch square-edge strips",
        "Балки з кроком 16 дюймів; планки ½ дюйма з прямими краями"
      ],
      [
        "Joists at 20 inches; 1-inch nominal tongue-and-groove strips",
        "Балки з кроком 20 дюймів; номінальні 1-дюймові шпунтовані планки"
      ],
      [
        "Joists at 16 inches; 1-inch strips parallel to joists",
        "Балки з кроком 16 дюймів; 1-дюймові планки паралельно балкам"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "All listed conditions must be met: joist spacing no greater than 16 inches and 1-inch nominal tongue-and-groove strip flooring perpendicular to joists.",
    "explanationUk": "Потрібні всі умови: крок балок не більш як 16 дюймів і номінальні 1-дюймові шпунтовані планки перпендикулярно балкам."
  },
  {
    "section": "R503.2.1",
    "difficulty": "medium",
    "question": "When the code refers to structural-panel nominal thickness, which marked value does R503.2.1 require using?",
    "questionUk": "Коли код посилається на номінальну товщину конструкційної плити, яке марковане значення вимагає використовувати R503.2.1?",
    "answers": [
      [
        "The Performance Category value",
        "Значення Performance Category"
      ],
      [
        "Only the rounded tape-measure reading",
        "Лише округлений вимір рулеткою"
      ],
      [
        "Only the distributor's shelf label",
        "Лише етикетку полиці продавця"
      ],
      [
        "The second number of a roof/floor span rating",
        "Другу цифру позначення прольоту даху/підлоги"
      ],
      [
        "The nominal depth of the supporting joist",
        "Номінальну висоту опорної балки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The marked Performance Category serves as nominal panel thickness wherever the code uses that reference.",
    "explanationUk": "Маркована Performance Category є номінальною товщиною плити там, де код використовує таке посилання."
  },
  {
    "section": "R503.2.3; Table R505.3.1(2)",
    "difficulty": "exam",
    "question": "For a subfloor attached to cold-formed steel joists under the cited fastening table, which minimum screw and spacing pair applies?",
    "questionUk": "Для чорнової підлоги на холодногнутих сталевих балках за зазначеною таблицею яка пара мінімального шурупа та кроку потрібна?",
    "answers": [
      [
        "No. 8 screws; 6 inches at edges and 12 inches at intermediate supports",
        "Шурупи No. 8; 6 дюймів по краях і 12 дюймів на проміжних опорах"
      ],
      [
        "No. 6 screws; 12 inches at edges and 24 inches at intermediate supports",
        "Шурупи No. 6; 12 дюймів по краях і 24 дюйми на проміжних опорах"
      ],
      [
        "No. 8 screws; 12 inches at every location",
        "Шурупи No. 8; 12 дюймів усюди"
      ],
      [
        "No. 6 screws; 6 inches at edges and 12 inches at intermediate supports",
        "Шурупи No. 6; 6 дюймів по краях і 12 дюймів на проміжних опорах"
      ],
      [
        "No. 10 screws; 24 inches at every location",
        "Шурупи No. 10; 24 дюйми усюди"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Table R505.3.1(2) gives minimum No. 8 screws at 6-inch edges and 12-inch intermediate supports.",
    "explanationUk": "Таблиця R505.3.1(2) установлює мінімальні шурупи No. 8 з кроком 6 дюймів по краях і 12 дюймів на проміжних опорах."
  },
  {
    "section": "R503.3.2",
    "difficulty": "medium",
    "question": "Which type and minimum thickness are required for particleboard floor underlayment?",
    "questionUk": "Який тип і мінімальна товщина потрібні для підкладки підлоги з деревностружкової плити?",
    "answers": [
      [
        "Type PBU, at least ¼ inch",
        "Type PBU, щонайменше ¼ дюйма"
      ],
      [
        "Any particleboard, at least ⅛ inch",
        "Будь-яка плита, щонайменше ⅛ дюйма"
      ],
      [
        "Type PBU, at least 3/16 inch",
        "Type PBU, щонайменше 3/16 дюйма"
      ],
      [
        "Any unmarked board, at least ¼ inch",
        "Будь-яка немаркована плита, щонайменше ¼ дюйма"
      ],
      [
        "Type PBU, exactly ¾ inch only",
        "Type PBU, лише рівно ¾ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Particleboard floor underlayment must be Type PBU and no thinner than ¼ inch.",
    "explanationUk": "Деревностружкова підкладка підлоги має бути Type PBU та не тоншою за ¼ дюйма."
  },
  {
    "section": "R503.3.3",
    "difficulty": "medium",
    "question": "What instructions govern particleboard-underlayment installation in addition to the framing attachment table?",
    "questionUk": "Які вказівки регулюють монтаж деревностружкової підкладки додатково до таблиці кріплень до каркаса?",
    "answers": [
      [
        "The manufacturer's recommendations",
        "Рекомендації виробника"
      ],
      [
        "An unrelated roofing-nail schedule",
        "Сторонній графік покрівельних цвяхів"
      ],
      [
        "Only the finish-paint instructions",
        "Лише інструкція фінішної фарби"
      ],
      [
        "Only the joist supplier's shipping label",
        "Лише транспортна етикетка постачальника балок"
      ],
      [
        "Only local custom without product instructions",
        "Лише місцева практика без інструкції виробу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R503.3.3 requires manufacturer recommendations and framing attachment under Table R602.3(1).",
    "explanationUk": "R503.3.3 вимагає рекомендацій виробника та кріплення до каркаса за таблицею R602.3(1)."
  },
  {
    "section": "R504.1.1",
    "difficulty": "exam",
    "question": "Opposite exterior walls of a wood basement have fill depths differing by 30 inches. No special provision resists sliding from unbalanced soil loads. What is the finding?",
    "questionUk": "Глибини засипки протилежних зовнішніх стін дерев’яного підвалу відрізняються на 30 дюймів. Окремого захисту від зсуву через нерівномірні ґрунтові навантаження немає. Який висновок?",
    "answers": [
      [
        "It exceeds the permitted 2-foot differential",
        "Перевищено дозволену різницю 2 фути"
      ],
      [
        "It complies with a 3-foot differential",
        "Відповідає різниці 3 фути"
      ],
      [
        "It complies if finish flooring is hardwood",
        "Відповідає за паркетної чистової підлоги"
      ],
      [
        "It complies if joists are painted",
        "Відповідає за фарбованих балок"
      ],
      [
        "Only the average fill depth matters",
        "Важлива лише середня глибина засипки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Without special sliding resistance, differential fill depth must be 2 feet or less; 30 inches exceeds 24 inches.",
    "explanationUk": "Без окремого захисту від зсуву різниця глибин засипки має бути не більш як 2 фути; 30 дюймів перевищують 24."
  },
  {
    "section": "R504.1.2",
    "difficulty": "medium",
    "question": "Which joist-to-foundation-wall contact is required for a wood basement floor?",
    "questionUk": "Який контакт балки перекриття з фундаментною стіною потрібний для дерев’яної підвальної підлоги?",
    "answers": [
      [
        "Tight bearing against the narrow stud face or a band joist bearing on the studs",
        "Щільна опора на вузьку грань стійки або обв’язувальну балку, що спирається на стійки"
      ],
      [
        "A free gap between joist ends and every wall stud",
        "Вільний проміжок між торцями балок і всіма стійками"
      ],
      [
        "Bearing only against interior finish trim",
        "Опора лише на внутрішню лиштву"
      ],
      [
        "Contact only through insulation batts",
        "Контакт лише через мінеральну вату"
      ],
      [
        "No contact if joists carry vertical loads",
        "Контакт не потрібний за вертикального навантаження"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The joists bear tightly against the narrow face of foundation studs or a band joist that bears on them.",
    "explanationUk": "Балки щільно спираються на вузьку грань фундаментних стійок або на обв’язувальну балку, що спирається на них."
  },
  {
    "section": "R504.1.2",
    "difficulty": "medium",
    "question": "Which TWO details help transfer lateral forces in the prescribed wood-basement floor construction? Select TWO.",
    "questionUk": "Які ДВА вузли передають бокові сили у приписаній конструкції дерев’яної підвальної підлоги? Оберіть ДВА.",
    "answers": [
      [
        "Plywood continuous over lapped or in-line butt-jointed joists",
        "Безперервна фанера над балками, з’єднаними внапуск або торцями по одній лінії"
      ],
      [
        "Sufficient joist blocking transferring end-wall base forces into the floor",
        "Достатні перемички між балками для передавання сил від основи торцевих стін у перекриття"
      ],
      [
        "Plywood interrupted at every joist lap",
        "Розрив фанери на кожному напуску балок"
      ],
      [
        "Removing blocking at end walls",
        "Видалення перемичок біля торцевих стін"
      ],
      [
        "Joist ends bearing only on finish trim",
        "Опора торців лише на чистову лиштву"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R504.1.2 requires continuous plywood over these joist joints and blocking sufficient for lateral force transfer.",
    "explanationUk": "R504.1.2 вимагає безперервної фанери над такими стиками та достатніх перемичок для передавання бокових сил."
  }
];
export const intakeVerified75 = verifiedBatch(885, "Carpentry", "Floors", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018P7/chapter-5-floors", seeds, "intake-series-73-78", true);

