import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";

const seeds: VerifiedSeed[] = [
  {
    "section": "40 CFR 745.85(a)(1)",
    "difficulty": "medium",
    "question": "For a covered, nonemergency renovation under the federal RRP rule, how long must the work-area warning signs remain readable and in place?",
    "questionUk": "Під час неаварійного ремонту, на який поширюється федеральне правило RRP, доки попереджувальні знаки робочої зони мають залишатися читабельними й на місці?",
    "answers": [
      [
        "Until renovation and post-renovation cleaning verification are complete",
        "До завершення ремонту та перевірки прибирання після нього"
      ],
      [
        "Only until the first worker enters",
        "Лише до входу першого працівника"
      ],
      [
        "Only until painting begins",
        "Лише до початку фарбування"
      ],
      [
        "Only for the first workday",
        "Лише протягом першого робочого дня"
      ],
      [
        "Until waste is first bagged, regardless of verification",
        "До першого пакування відходів незалежно від перевірки"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Signs are posted before renovation and remain until both the renovation and post-renovation cleaning verification are complete. Qualifying HUD or OSHA signs avoid duplicate signs.",
    "explanationUk": "Знаки встановлюють до ремонту й залишають до завершення робіт та перевірки прибирання. Належні знаки HUD або OSHA дозволяють не дублювати їх."
  },
  {
    "section": "40 CFR 745.85(a)(2)",
    "difficulty": "medium",
    "question": "A containment barrier for a covered federal RRP renovation blocks the occupants' only emergency exit. Is that containment arrangement acceptable?",
    "questionUk": "Ізоляційний бар’єр під час ремонту за федеральним RRP перекриває єдиний аварійний вихід мешканців. Чи допустима така схема?",
    "answers": [
      [
        "No; containment must not interfere with occupant or worker emergency egress",
        "Ні; ізоляція не повинна заважати аварійному виходу мешканців або працівників"
      ],
      [
        "Yes, if the barrier contains all dust",
        "Так, якщо бар’єр утримує весь пил"
      ],
      [
        "Yes, if a warning sign is posted",
        "Так, якщо встановлено попередження"
      ],
      [
        "Yes, for renovations shorter than one day",
        "Так, за ремонту тривалістю менше доби"
      ],
      [
        "Yes, if the owner accepts the obstruction",
        "Так, якщо власник згоден на перешкоду"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The containment rule expressly preserves emergency egress for both occupants and workers.",
    "explanationUk": "Правило ізоляції прямо вимагає зберігати можливість аварійного виходу мешканців і працівників."
  },
  {
    "section": "40 CFR 745.85(a)(2)(i)(D)",
    "difficulty": "exam",
    "question": "In a covered federal RRP interior renovation with no vertical containment barrier, dust can travel 8 feet beyond the painted surface being disturbed. How far must impermeable floor protection extend beyond that surface?",
    "questionUk": "Під час внутрішнього ремонту за федеральним RRP без вертикального ізоляційного бар’єра пил поширюється на 8 футів від оброблюваної фарбованої поверхні. На яку відстань потрібно продовжити непроникний захист підлоги?",
    "answers": [
      [
        "At least 8 feet, because that exceeds the 6-foot minimum and is needed to contain the dust",
        "Щонайменше на 8 футів: це більше мінімуму 6 футів і потрібно для утримання пилу"
      ],
      [
        "Exactly 6 feet regardless of dust travel",
        "Рівно на 6 футів незалежно від поширення пилу"
      ],
      [
        "Only 2 feet",
        "Лише на 2 фути"
      ],
      [
        "Only to the nearest furniture leg",
        "Лише до найближчої ніжки меблів"
      ],
      [
        "No protection is required over installed carpet",
        "На наявному килимовому покритті захист не потрібен"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Floor protection extends 6 feet or far enough to contain dust, whichever is greater, including over installed carpet. A qualifying vertical containment system has a separate stopping-edge allowance.",
    "explanationUk": "Захист підлоги, включно з килимом, продовжують на 6 футів або далі для утримання пилу — залежно від більшого. Для належної вертикальної ізоляції є окремий виняток щодо краю."
  },
  {
    "section": "40 CFR 745.85(a)(2)(i)(D)",
    "difficulty": "medium",
    "question": "Which vertical barrier allows interior floor containment for a covered RRP renovation to stop at the barrier edge?",
    "questionUk": "Який вертикальний бар’єр дозволяє завершити захист підлоги при внутрішньому ремонті за RRP на його краю?",
    "answers": [
      [
        "Impermeable floor-to-ceiling barriers tightly sealed at joints with floor, ceiling and walls",
        "Непроникні бар’єри від підлоги до стелі, герметично з’єднані з підлогою, стелею та стінами"
      ],
      [
        "A waist-high fabric curtain",
        "Тканинна завіса до пояса"
      ],
      [
        "A rope stretched across the room",
        "Мотузка поперек кімнати"
      ],
      [
        "An unsealed sheet hanging short of the floor",
        "Негерметичне полотно, що не доходить до підлоги"
      ],
      [
        "An open doorway marked with tape",
        "Відкриті двері з позначенням стрічкою"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The stopping-edge allowance requires an impermeable floor-to-ceiling system tightly sealed at the floor, ceiling and wall joints.",
    "explanationUk": "Виняток щодо краю потребує непроникної системи від підлоги до стелі з герметичними стиками з підлогою, стелею та стінами."
  },
  {
    "section": "40 CFR 745.85(a)(2)(i)(B)",
    "difficulty": "easy",
    "question": "Before beginning a covered federal RRP interior renovation, what must be done to ducts opening into the work area?",
    "questionUk": "Що потрібно зробити з отворами повітроводів у робочій зоні до початку внутрішнього ремонту за федеральним RRP?",
    "answers": [
      [
        "Close them and cover with taped-down plastic or another impermeable material",
        "Закрити й накрити приклеєною плівкою або іншим непроникним матеріалом"
      ],
      [
        "Leave them open to carry dust away",
        "Залишити відкритими для видалення пилу"
      ],
      [
        "Cover only the return ducts, never supplies",
        "Закрити лише витяжні, але не припливні отвори"
      ],
      [
        "Install a loose paper towel over each opening",
        "Вільно накрити паперовими рушниками"
      ],
      [
        "Wait until demolition is finished to cover them",
        "Закрити лише після демонтажу"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "All ducts opening in the work area must be closed and covered with taped-down plastic or another impermeable material.",
    "explanationUk": "Усі отвори повітроводів у робочій зоні закривають і накривають закріпленою стрічкою плівкою або іншим непроникним матеріалом."
  },
  {
    "section": "40 CFR 745.85(a)(2)(ii)(A)",
    "difficulty": "exam",
    "question": "Exterior RRP work occurs on the second floor. A first-floor window lies 15 feet horizontally from the work. What does the exterior window rule require?",
    "questionUk": "Зовнішній ремонт за RRP виконують на другому поверсі. Вікно першого поверху розташоване за 15 футів по горизонталі від робіт. Що вимагає правило щодо зовнішніх вікон?",
    "answers": [
      [
        "Close that window because it is on a floor below and within the 20-foot horizontal distance",
        "Закрити це вікно, бо воно поверхом нижче та в межах 20 футів по горизонталі"
      ],
      [
        "Leave it open because it is not on the work floor",
        "Залишити відкритим, бо воно не на поверсі робіт"
      ],
      [
        "Close it only if it is within 6 feet",
        "Закрити лише в межах 6 футів"
      ],
      [
        "Leave it open to ventilate the work area",
        "Залишити відкритим для вентиляції робочої зони"
      ],
      [
        "Close only windows directly above the renovation",
        "Закрити лише вікна прямо над місцем ремонту"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For multi-story buildings the rule includes doors and windows within 20 feet on the work floor and those on all lower floors at that horizontal distance.",
    "explanationUk": "Для багатоповерхових будівель правило охоплює двері й вікна в межах 20 футів на поверсі робіт та на всіх нижчих поверхах у тій самій горизонтальній зоні."
  },
  {
    "section": "40 CFR 745.85(a)(2)(ii)(C)–(D)",
    "difficulty": "medium",
    "question": "A covered exterior RRP renovation affects a painted wall 7 feet from the property line. What additional containment approach is required?",
    "questionUk": "Зовнішній ремонт за RRP зачіпає фарбовану стіну за 7 футів від межі ділянки. Який додатковий підхід до ізоляції потрібен?",
    "answers": [
      [
        "Vertical containment or equivalent extra precautions preventing dust and debris migration to adjacent property",
        "Вертикальна ізоляція або рівноцінні додаткові заходи проти перенесення пилу й сміття на сусідню ділянку"
      ],
      [
        "No precautions because the property line limits ground sheeting",
        "Заходи не потрібні, бо межа обмежує наземне покриття"
      ],
      [
        "Only a verbal warning to the neighbor",
        "Лише усне попередження сусіда"
      ],
      [
        "Move the property-line marker during the work",
        "Перенести межовий знак на час робіт"
      ],
      [
        "A 6-inch strip of plastic with no other precautions",
        "Смужка плівки 6 дюймів без інших заходів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Work affecting surfaces within 10 feet of the property line requires vertical containment or equivalent extra precautions. A property-line limit on ground coverage does not waive dust control.",
    "explanationUk": "Для поверхонь у межах 10 футів від межі потрібна вертикальна ізоляція або рівноцінні додаткові заходи. Обмеження наземного покриття межею не скасовує контролю пилу."
  },
  {
    "section": "40 CFR 745.85(a)(3)(i)",
    "difficulty": "easy",
    "question": "Which paint-removal practice is prohibited during a covered federal RRP renovation even if surrounding floors are protected?",
    "questionUk": "Який спосіб видалення фарби заборонено під час ремонту за федеральним RRP навіть за захисту навколишньої підлоги?",
    "answers": [
      [
        "Burning or torching painted surfaces with an open flame",
        "Випалювання фарбованих поверхонь відкритим полум’ям"
      ],
      [
        "Using a damp cloth for cleaning",
        "Прибирання вологою ганчіркою"
      ],
      [
        "Containing debris in heavy-duty bags",
        "Пакування сміття в міцні мішки"
      ],
      [
        "Closing work-area windows",
        "Закривання вікон робочої зони"
      ],
      [
        "Using sealed impermeable containment",
        "Використання герметичної непроникної ізоляції"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Open-flame burning or torching painted surfaces is prohibited; floor protection does not create an exception.",
    "explanationUk": "Випалювання фарбованих поверхонь відкритим полум’ям заборонено; захист підлоги не створює винятку."
  },
  {
    "section": "40 CFR 745.85(a)(3)(iii)",
    "difficulty": "exam",
    "question": "A heat gun operates on a painted surface at exactly 1,100°F during a covered federal RRP renovation. Does that temperature meet the rule?",
    "questionUk": "Термопістолет працює по фарбованій поверхні за температури рівно 1 100°F під час ремонту за федеральним RRP. Чи відповідає ця температура правилу?",
    "answers": [
      [
        "No; operation is permitted only below 1,100°F",
        "Ні; дозволена лише температура нижче 1 100°F"
      ],
      [
        "Yes; only temperatures above 1,100°F are restricted",
        "Так; обмежено лише температури вище 1 100°F"
      ],
      [
        "Yes, if a window is open",
        "Так, якщо відчинене вікно"
      ],
      [
        "Yes, if the surface is exterior",
        "Так, якщо поверхня зовнішня"
      ],
      [
        "Yes, if the paint is dry",
        "Так, якщо фарба суха"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The regulation says below 1,100°F, so exactly 1,100°F does not meet this condition.",
    "explanationUk": "Норма вимагає температури нижче 1 100°F, тому рівно 1 100°F не відповідає цій умові."
  },
  {
    "section": "40 CFR 745.85(a)(3)(ii)",
    "difficulty": "exam",
    "question": "Which TWO conditions are required for high-speed powered paint removal on painted surfaces during a covered RRP renovation?",
    "questionUk": "Які ДВІ умови потрібні для високошвидкісного машинного видалення фарби з фарбованих поверхонь під час ремонту за RRP?",
    "answers": [
      [
        "A shroud or containment system with a HEPA vacuum attachment collecting at the point of generation",
        "Кожух або система ізоляції з HEPA-пиловідсмоктуванням у місці утворення"
      ],
      [
        "Operation without visible dust or release of air outside the shroud or containment",
        "Робота без видимого пилу або виходу повітря за межі кожуха чи ізоляції"
      ],
      [
        "A household fan blowing unfiltered dust outside",
        "Побутовий вентилятор, що видуває нефільтрований пил назовні"
      ],
      [
        "Dust collection only after the machine stops",
        "Збирання пилу лише після зупинки машини"
      ],
      [
        "Use without containment whenever workers wear respirators",
        "Робота без ізоляції за наявності респіраторів"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The exception to the powered-removal prohibition requires both shrouding/containment with HEPA collection at generation and operation without visible dust or escaping air outside it.",
    "explanationUk": "Виняток із заборони машинного видалення потребує і кожуха/ізоляції з HEPA-збором у джерелі, і роботи без видимого пилу чи виходу повітря за її межі."
  },
  {
    "section": "40 CFR 745.85(a)(5)(i)(B)",
    "difficulty": "medium",
    "question": "When removing protective sheeting after a covered RRP renovation, which handling method follows the required cleanup procedure?",
    "questionUk": "Яке поводження із захисною плівкою під час прибирання після ремонту за RRP відповідає процедурі?",
    "answers": [
      [
        "Mist it, fold the dirty side inward, then seal with tape or in heavy-duty bags",
        "Зволожити розпиленням, скласти брудним боком усередину й герметично заклеїти або запакувати в міцні мішки"
      ],
      [
        "Shake it vigorously outside and reuse it",
        "Сильно витрусити надворі й використати повторно"
      ],
      [
        "Fold the dirty side outward and leave seams open",
        "Скласти брудним боком назовні й залишити стики відкритими"
      ],
      [
        "Drag it uncovered through occupied rooms",
        "Тягнути незапакованою через зайняті кімнати"
      ],
      [
        "Remove room-isolation barriers first while dirty sheeting remains",
        "Спочатку прибрати міжкімнатні ізоляційні бар’єри, залишивши брудну плівку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Mist before folding, keep the dirty side inward and seal. Room-isolation sheeting remains until other cleaning and sheeting removal are complete; the sheeting is disposed of as waste.",
    "explanationUk": "Перед складанням плівку зволожують, брудний бік загортають усередину й герметично пакують. Міжкімнатну ізоляцію залишають до завершення іншого прибирання; плівку утилізують як відходи."
  },
  {
    "section": "40 CFR 745.85(a)(5)(ii)(B)",
    "difficulty": "medium",
    "question": "During required interior cleanup after a covered RRP renovation, what extra feature must the HEPA vacuum have when vacuuming carpets and rugs?",
    "questionUk": "Яке додаткове оснащення потрібне HEPA-пилососу для чищення килимів під час обов’язкового внутрішнього прибирання після ремонту за RRP?",
    "answers": [
      [
        "A beater bar",
        "Механічну вибивальну щітку"
      ],
      [
        "A bypass that releases unfiltered air",
        "Обхідний канал викиду нефільтрованого повітря"
      ],
      [
        "A disconnected dust collector",
        "Від’єднаний пилозбірник"
      ],
      [
        "A dry broom attached instead of a vacuum hose",
        "Сухий віник замість вакуумного шланга"
      ],
      [
        "No additional feature is specified for carpets",
        "Для килимів додаткового оснащення не передбачено"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The interior-cleaning provision requires a HEPA vacuum equipped with a beater bar for carpets and rugs.",
    "explanationUk": "Положення про внутрішнє прибирання вимагає HEPA-пилососа з механічною вибивальною щіткою для килимів."
  }
];

export const intakeVerified102 = verifiedBatch(1209, "Associated Issues", "Job Site Safety", "EPA 40 CFR 745.85", "federal", "https://www.ecfr.gov/current/title-40/chapter-I/subchapter-R/part-745/subpart-E/section-745.85", seeds, "intake-series-97-102", false, "2026-10-22");

