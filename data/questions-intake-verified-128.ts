import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.352(a)",
    "question": "A metal part can readily be moved before cutting. What fire-prevention approach does paragraph (a) favor when practical?",
    "questionUk": "Металеву деталь легко перенести перед різанням. Який протипожежний підхід рекомендує пункт (a), коли це практично?",
    "answers": [
      [
        "Move it to a designated safe location",
        "Перенести її у визначене безпечне місце"
      ],
      [
        "Cut it wherever originally delivered",
        "Різати там, де її доставили"
      ],
      [
        "Move only the fire extinguisher away",
        "Віднести лише вогнегасник"
      ],
      [
        "Cover nearby combustibles with paper",
        "Накрити горючі речі папером"
      ],
      [
        "Rely only on the operator's experience",
        "Покладатися лише на досвід оператора"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Move the work to a designated safe location when practical; otherwise remove or protect nearby movable fire hazards.",
    "explanationUk": "Коли практично, роботу переносять у визначене безпечне місце; інакше прибирають чи захищають рухомі горючі предмети."
  },
  {
    "section": "29 CFR 1926.352(b)",
    "question": "Neither the steel assembly nor all nearby fire hazards can be moved. What must protect the immovable hazards during hot work?",
    "questionUk": "Ані сталевий вузол, ані всі пожежонебезпечні предмети поруч неможливо перенести. Що потрібно для захисту нерухомих предметів під час гарячих робіт?",
    "answers": [
      [
        "Positive means to confine heat, sparks and slag",
        "Дієві засоби обмеження тепла, іскор і шлаку"
      ],
      [
        "Only a verbal warning",
        "Лише усне попередження"
      ],
      [
        "Only a painted floor line",
        "Лише фарбована лінія на підлозі"
      ],
      [
        "Only closing the work order",
        "Лише закриття наряду"
      ],
      [
        "Only reducing the crew size",
        "Лише зменшення бригади"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (b) requires confinement of heat, sparks and slag and protection of immovable fire hazards.",
    "explanationUk": "Пункт (b) вимагає обмежити тепло, іскри та шлак і захистити нерухомі пожежонебезпечні предмети."
  },
  {
    "section": "29 CFR 1926.352(c)",
    "question": "Flammable paint application creates a hazard near proposed torch work. May heating proceed merely because an extinguisher is present?",
    "questionUk": "Нанесення легкозаймистої фарби створює небезпеку біля запланованих робіт пальником. Чи дозволяє сама наявність вогнегасника почати нагрівання?",
    "answers": [
      [
        "No; hot work is prohibited where that hazard exists",
        "Ні; гарячі роботи за такої небезпеки заборонені"
      ],
      [
        "Yes; any extinguisher cancels the prohibition",
        "Так; будь-який вогнегасник скасовує заборону"
      ],
      [
        "Yes; only cutting is prohibited",
        "Так; заборонено лише різання"
      ],
      [
        "Yes; if a supervisor watches",
        "Так; під наглядом керівника"
      ],
      [
        "Yes; if work lasts under five minutes",
        "Так; якщо робота коротша за п’ять хвилин"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (c) prohibits welding, cutting or heating where flammable compounds or heavy dust concentrations create a hazard.",
    "explanationUk": "Пункт (c) забороняє зварювання, різання чи нагрівання там, де легкозаймисті речовини або значний пил створюють небезпеку."
  },
  {
    "section": "29 CFR 1926.352(d)",
    "question": "Which extinguisher arrangement meets the hot-work availability rule?",
    "questionUk": "Яке розміщення вогнегасного обладнання відповідає правилу гарячих робіт?",
    "answers": [
      [
        "Suitable equipment immediately available in the work area and ready for instant use",
        "Відповідне обладнання негайно доступне в робочій зоні й готове до використання"
      ],
      [
        "Equipment locked in an off-site warehouse",
        "Обладнання замкнене на віддаленому складі"
      ],
      [
        "An empty extinguisher beside the work",
        "Порожній вогнегасник поруч"
      ],
      [
        "Equipment available only after calling a supplier",
        "Обладнання лише після дзвінка постачальнику"
      ],
      [
        "Equipment stored beyond a locked exit",
        "Обладнання за замкненим виходом"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Suitable extinguishing equipment must be immediately available and maintained ready for instant use.",
    "explanationUk": "Відповідне обладнання має бути негайно доступним та підтримуватися в готовності до миттєвого використання."
  },
  {
    "section": "29 CFR 1926.352(e)",
    "question": "Normal hot-work fire precautions are insufficient. How long must additional fire-guard personnel remain assigned?",
    "questionUk": "Звичайних протипожежних заходів гарячих робіт недостатньо. Як довго мають працювати додаткові спостерігачі?",
    "answers": [
      [
        "During work and sufficiently afterward to ensure no possibility of fire remains",
        "Під час робіт і достатньо після них, щоб виключити можливість пожежі"
      ],
      [
        "Only until the first cut is finished",
        "Лише до завершення першого різу"
      ],
      [
        "Only while the operator takes lunch",
        "Лише під час обіду оператора"
      ],
      [
        "Exactly five minutes regardless of conditions",
        "Рівно п’ять хвилин незалежно від умов"
      ],
      [
        "Only before equipment is energized",
        "Лише до подачі живлення"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The rule requires coverage during the operation and a sufficient post-work period; it does not supply a universal fixed number of minutes.",
    "explanationUk": "Правило вимагає нагляду під час роботи й достатнього періоду після неї; універсальної кількості хвилин воно не задає."
  },
  {
    "section": "29 CFR 1926.352(e)",
    "question": "Select TWO subjects that additional hot-work fire guards must be instructed about.",
    "questionUk": "Оберіть ДВІ теми, щодо яких потрібно інструктувати додаткових пожежних спостерігачів.",
    "answers": [
      [
        "Specific anticipated fire hazards",
        "Конкретні очікувані пожежні небезпеки"
      ],
      [
        "Use of the firefighting equipment provided",
        "Використання наданого пожежного обладнання"
      ],
      [
        "Only the operator's hourly pay",
        "Лише погодинна ставка оператора"
      ],
      [
        "Only the project profit margin",
        "Лише прибутковість проєкту"
      ],
      [
        "Only the supplier's delivery route",
        "Лише маршрут постачальника"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "difficulty": "medium",
    "explanation": "Instruction must address the anticipated hazards and operation of the provided firefighting equipment.",
    "explanationUk": "Інструктаж має охоплювати очікувані небезпеки та використання наданого пожежного обладнання."
  },
  {
    "section": "29 CFR 1926.352(f)",
    "question": "Welding a wall can transmit heat or sparks into the adjacent room. Where must equivalent fire precautions also be taken?",
    "questionUk": "Зварювання стіни може передавати тепло чи іскри в сусідню кімнату. Де також потрібні рівноцінні протипожежні заходи?",
    "answers": [
      [
        "On the opposite side of the wall",
        "З протилежного боку стіни"
      ],
      [
        "Only in the parking area",
        "Лише на стоянці"
      ],
      [
        "Only at the power panel",
        "Лише біля електрощита"
      ],
      [
        "Only on the roof",
        "Лише на даху"
      ],
      [
        "Only at the site entrance",
        "Лише біля входу на об’єкт"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (f) requires the same precautions on the opposite side of walls, floors and ceilings exposed to heat or spark transfer.",
    "explanationUk": "Пункт (f) вимагає таких самих заходів з протилежного боку стін, підлог і стель при передачі тепла чи іскор."
  },
  {
    "section": "29 CFR 1926.352(g)",
    "question": "A torch in an enclosed space will be unattended over lunch. Where must its gas supply be positively shut off?",
    "questionUk": "Пальник у замкненому просторі залишать без нагляду на обід. Де потрібно надійно перекрити подачу газу?",
    "answers": [
      [
        "At a point outside the enclosed space",
        "У точці поза замкненим простором"
      ],
      [
        "Only at the torch tip inside",
        "Лише на наконечнику всередині"
      ],
      [
        "Only by pinching the hose",
        "Лише перетисканням шланга"
      ],
      [
        "Only at a valve inside the space",
        "Лише вентилем усередині"
      ],
      [
        "Nowhere if the flame has gone out",
        "Ніде, якщо полум’я згасло"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (g) requires positive gas shutoff outside the space for substantial unattended periods such as lunch.",
    "explanationUk": "Пункт (g) вимагає надійно перекривати газ поза простором при суттєвих перервах без нагляду, зокрема на обід."
  },
  {
    "section": "29 CFR 1926.352(g)",
    "question": "What must happen to a torch and hose in a confined space overnight and at shift changes?",
    "questionUk": "Що потрібно зробити з пальником і шлангом в обмеженому просторі на ніч та при зміні бригад?",
    "answers": [
      [
        "Remove both from the space",
        "Винести обидва з простору"
      ],
      [
        "Leave both if the torch valve is closed",
        "Залишити за закритого вентиля пальника"
      ],
      [
        "Remove only the torch tip",
        "Зняти лише наконечник"
      ],
      [
        "Cover both with a blanket",
        "Накрити ковдрою"
      ],
      [
        "Leave both if the room is dark",
        "Залишити, якщо приміщення темне"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The torch and hose must be removed overnight and at shift changes. Disconnected open-ended hoses also require immediate removal.",
    "explanationUk": "Пальник і шланг виносять на ніч та при зміні бригад. Від’єднані шланги з відкритими кінцями також потрібно негайно прибирати."
  },
  {
    "section": "29 CFR 1926.352(h)",
    "question": "A pail previously held flammable liquid and is not being emptied or transferred. What handling rule applies near hot work?",
    "questionUk": "Відро раніше містило легкозаймисту рідину; зараз її не переливають і не видаляють. Яке правило діє біля гарячих робіт?",
    "answers": [
      [
        "Keep it closed; move empty containers to a safe area away from hot work or flames",
        "Тримати закритим; порожню тару віднести в безпечне місце подалі від робіт і полум’я"
      ],
      [
        "Leave it open to collect sparks",
        "Залишити відкритим для іскор"
      ],
      [
        "Store it directly beside the torch",
        "Зберігати біля пальника"
      ],
      [
        "Use it as a slag bin without cleaning",
        "Використати для шлаку без очищення"
      ],
      [
        "Leave it open because it is nominally empty",
        "Залишити відкритим, бо формально порожнє"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (h) covers containers that contain or have contained flammable liquids; empty containers must be separated from hot work.",
    "explanationUk": "Пункт (h) охоплює тару, яка містить чи містила легкозаймисті рідини; порожню тару віддаляють від гарячих робіт."
  },
  {
    "section": "29 CFR 1926.352(i)",
    "question": "Before heating a drum that held flammable substances, which alternative preparation is specified besides filling it with water?",
    "questionUk": "Яка підготовка, крім заповнення водою, задана перед нагріванням бочки, що містила легкозаймисті речовини?",
    "answers": [
      [
        "Thorough cleaning, ventilation and testing",
        "Ретельне очищення, вентиляція й перевірка"
      ],
      [
        "Only opening the lid briefly",
        "Лише коротко відкрити кришку"
      ],
      [
        "Only wiping the outside",
        "Лише протерти зовні"
      ],
      [
        "Only painting over the old label",
        "Лише зафарбувати етикетку"
      ],
      [
        "Only waiting one hour",
        "Лише почекати годину"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "The specified alternative is thorough removal of the substances followed by ventilation and testing, not an assumption that an empty drum is safe.",
    "explanationUk": "Задана альтернатива — ретельно видалити речовини, провентилювати й перевірити, а не припустити безпечність порожньої бочки."
  },
  {
    "section": "29 CFR 1926.352(j)",
    "question": "Before heat is applied to a drum or hollow structure, what pressure-control provision is required?",
    "questionUk": "Який захід проти тиску потрібен перед нагріванням бочки чи порожнистої конструкції?",
    "answers": [
      [
        "A vent or opening to release pressure buildup",
        "Вентиляційний отвір для випуску накопиченого тиску"
      ],
      [
        "A completely sealed enclosure",
        "Повністю герметичне закриття"
      ],
      [
        "Only a thicker paint layer",
        "Лише товстіший шар фарби"
      ],
      [
        "Only a warning label",
        "Лише попереджувальна етикетка"
      ],
      [
        "An added external clamp to prevent venting",
        "Додатковий зовнішній затискач проти вентиляції"
      ]
    ],
    "correct": [
      0
    ],
    "difficulty": "medium",
    "explanation": "Paragraph (j) requires a vent or opening before heating so accumulated pressure can escape.",
    "explanationUk": "Пункт (j) вимагає отвір до нагрівання, щоб накопичений тиск міг вийти."
  }
];
export const intakeVerified128 = verifiedBatch(1521, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926", "osha", "https://www.ecfr.gov/current/title-29/section-1926.352", seeds, "intake-series-127-132", false, "2026-11-02");
