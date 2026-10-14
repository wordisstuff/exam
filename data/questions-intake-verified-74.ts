import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R607.2",
    "difficulty": "easy",
    "question": "What minimum average glass-face thickness is required for hollow glass masonry units?",
    "questionUk": "Яка мінімальна середня товщина скляної лицьової стінки потрібна для пустотілих склоблоків?",
    "answers": [
      [
        "3/16 inch",
        "3/16 дюйма"
      ],
      [
        "⅛ inch",
        "⅛ дюйма"
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
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Hollow units must be partially evacuated and have average face thickness of at least 3/16 inch.",
    "explanationUk": "Пустотілі блоки мають бути частково вакуумовані та мати середню товщину лицьової стінки щонайменше 3/16 дюйма."
  },
  {
    "section": "R607.2",
    "difficulty": "medium",
    "question": "Salvaged glass blocks are proposed for a new code-regulated masonry panel. What does R607.2 say about reclaimed units?",
    "questionUk": "Вживані склоблоки пропонують для нової панелі мурування, регульованої кодом. Що R607.2 встановлює щодо повторно використаних блоків?",
    "answers": [
      [
        "Their use is prohibited",
        "Їхнє використання заборонене"
      ],
      [
        "They are allowed whenever washed",
        "Вони дозволені після миття"
      ],
      [
        "They are allowed only in exterior panels",
        "Вони дозволені лише в зовнішніх панелях"
      ],
      [
        "They are allowed if mortar is Type M",
        "Вони дозволені з розчином Type M"
      ],
      [
        "They are allowed if the panel is below 85 square feet",
        "Вони дозволені за площі панелі менш як 85 квадратних футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The materials rule expressly prohibits reclaimed glass masonry units.",
    "explanationUk": "Вимога до матеріалів прямо забороняє повторно використані склоблоки."
  },
  {
    "section": "R607.2",
    "difficulty": "medium",
    "question": "Which TWO surface treatments are named for glass-unit surfaces that contact mortar? Select TWO.",
    "questionUk": "Які ДВА покриття зазначені для поверхонь склоблоків, що контактують із розчином? Оберіть ДВА.",
    "answers": [
      [
        "Polyvinyl butyral coating",
        "Полівінілбутиральне покриття"
      ],
      [
        "Latex-based paint",
        "Фарба на латексній основі"
      ],
      [
        "Asphalt roofing cement",
        "Асфальтовий покрівельний цемент"
      ],
      [
        "Uncoated polished glass",
        "Непокрите поліроване скло"
      ],
      [
        "Ordinary lubricating oil",
        "Звичайна мастильна олива"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Mortar-contact surfaces require polyvinyl butyral coating or latex-based paint.",
    "explanationUk": "Поверхні контакту з розчином потребують полівінілбутирального покриття або фарби на латексній основі."
  },
  {
    "section": "R607.3.1",
    "difficulty": "easy",
    "question": "What minimum specified unit thickness defines a standard glass masonry unit?",
    "questionUk": "Яка мінімальна задана товщина визначає стандартний склоблок?",
    "answers": [
      [
        "3⅞ inches",
        "3⅞ дюйма"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "3⅛ inches",
        "3⅛ дюйма"
      ],
      [
        "3½ inches",
        "3½ дюйма"
      ],
      [
        "4½ inches",
        "4½ дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Standard units have specified thickness of at least 3⅞ inches.",
    "explanationUk": "Задана товщина стандартних склоблоків становить щонайменше 3⅞ дюйма."
  },
  {
    "section": "R607.3.2",
    "difficulty": "medium",
    "question": "Which pair gives minimum specified thicknesses for hollow and solid thin glass units, respectively?",
    "questionUk": "Яка пара визначає мінімальні задані товщини відповідно пустотілих і повнотілих тонких склоблоків?",
    "answers": [
      [
        "3⅛ inches hollow; 3 inches solid",
        "3⅛ дюйма пустотілий; 3 дюйми повнотілий"
      ],
      [
        "3 inches hollow; 3⅛ inches solid",
        "3 дюйми пустотілий; 3⅛ дюйма повнотілий"
      ],
      [
        "3⅞ inches for both",
        "3⅞ дюйма для обох"
      ],
      [
        "2½ inches for both",
        "2½ дюйма для обох"
      ],
      [
        "3½ inches hollow; 2½ inches solid",
        "3½ дюйма пустотілий; 2½ дюйма повнотілий"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Thin hollow units require at least 3⅛ inches; thin solid units require at least 3 inches.",
    "explanationUk": "Тонкі пустотілі блоки потребують щонайменше 3⅛ дюйма, а тонкі повнотілі — 3 дюйми."
  },
  {
    "section": "R607.4.1",
    "difficulty": "medium",
    "question": "At a design wind pressure of 20 psf, what maximum area applies to an individual exterior standard-unit glass masonry panel?",
    "questionUk": "За розрахункового вітрового тиску 20 psf яка найбільша площа окремої зовнішньої панелі зі стандартних склоблоків?",
    "answers": [
      [
        "144 square feet",
        "144 квадратні фути"
      ],
      [
        "85 square feet",
        "85 квадратних футів"
      ],
      [
        "100 square feet",
        "100 квадратних футів"
      ],
      [
        "200 square feet",
        "200 квадратних футів"
      ],
      [
        "250 square feet",
        "250 квадратних футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 20-psf condition permits 144 square feet; other wind pressures use Figure R607.4.1 and dimensional limits still apply.",
    "explanationUk": "За 20 psf дозволено 144 квадратні фути; для інших тисків використовують рисунок R607.4.1, а обмеження розмірів залишаються чинними."
  },
  {
    "section": "R607.4.2",
    "difficulty": "exam",
    "question": "A proposed exterior thin-unit glass panel is 90 square feet, with width, height and wind pressure otherwise within the rule. What is the area finding?",
    "questionUk": "Запропонована зовнішня панель із тонких склоблоків має 90 квадратних футів; ширина, висота й вітровий тиск відповідають нормі. Який висновок щодо площі?",
    "answers": [
      [
        "It exceeds the 85-square-foot limit",
        "Перевищено межу 85 квадратних футів"
      ],
      [
        "It complies with a 144-square-foot limit",
        "Відповідає межі 144 квадратні фути"
      ],
      [
        "It complies because height alone controls",
        "Відповідає, бо визначає лише висота"
      ],
      [
        "It complies if the units are hollow",
        "Відповідає за пустотілих блоків"
      ],
      [
        "It complies if mortar is Type S",
        "Відповідає з розчином Type S"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Exterior thin-unit panels are limited to 85 square feet; the standard-unit area is not interchangeable.",
    "explanationUk": "Зовнішні панелі з тонких блоків обмежені 85 квадратними футами; площу стандартних блоків не можна підставляти замість цієї межі."
  },
  {
    "section": "R607.8",
    "difficulty": "exam",
    "question": "Glass-unit mortar was mixed two hours ago and remains unused. What does the specified time limit require?",
    "questionUk": "Розчин для склоблоків замішано дві години тому, він залишається невикористаним. Що вимагає встановлена часова межа?",
    "answers": [
      [
        "Discard it; unused mortar has a 1½-hour limit",
        "Викинути; невикористаний розчин має межу 1½ години"
      ],
      [
        "Use it until four hours have elapsed",
        "Використовувати до чотирьох годин"
      ],
      [
        "Use it if more water is added after initial set",
        "Використати після додавання води після початкового тужавіння"
      ],
      [
        "Keep it until the next day",
        "Залишити до наступного дня"
      ],
      [
        "Use it whenever its color matches fresh mortar",
        "Використовувати, якщо колір такий самий, як у свіжого"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Mortar unused within 1½ hours of initial mixing must be discarded, and retempering after initial set is prohibited.",
    "explanationUk": "Розчин, не використаний протягом 1½ години після початкового замішування, викидають; повторне розрідження після початкового тужавіння заборонене."
  },
  {
    "section": "R607.9",
    "difficulty": "medium",
    "question": "How must horizontal glass-panel joint reinforcement treat expansion joints?",
    "questionUk": "Як горизонтальна арматура швів склоблокової панелі має проходити відносно деформаційних швів?",
    "answers": [
      [
        "Run the panel length but not cross expansion joints",
        "Проходити по довжині панелі, але не перетинати деформаційні шви"
      ],
      [
        "Cross every expansion joint without interruption",
        "Безперервно перетинати кожен деформаційний шов"
      ],
      [
        "Stop after the first two units",
        "Закінчуватися після перших двох блоків"
      ],
      [
        "Run only vertically",
        "Проходити лише вертикально"
      ],
      [
        "Cross expansion joints only if painted",
        "Перетинати деформаційні шви лише після фарбування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Horizontal joint reinforcement extends along the panel but must not cross expansion joints; maximum spacing is 16 inches.",
    "explanationUk": "Горизонтальна арматура проходить уздовж панелі, але не перетинає деформаційні шви; найбільший крок — 16 дюймів."
  },
  {
    "section": "R607.6",
    "difficulty": "medium",
    "question": "Before bedding glass units, which sill preparation is required?",
    "questionUk": "Яка підготовка нижньої опорної поверхні потрібна перед укладанням склоблоків?",
    "answers": [
      [
        "Water-base asphaltic emulsion at least ⅛ inch thick",
        "Водна асфальтова емульсія завтовшки щонайменше ⅛ дюйма"
      ],
      [
        "Oil-based paint no more than 1/32 inch thick",
        "Олійна фарба не більш як 1/32 дюйма"
      ],
      [
        "Bare uncoated sill in every case",
        "Завжди непокрита опорна поверхня"
      ],
      [
        "Polyethylene only at vertical edges",
        "Поліетилен лише на вертикальних краях"
      ],
      [
        "Dry mortar dust only",
        "Лише сухий розчинний пил"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R607.6 requires the sill area to receive water-base asphaltic emulsion of at least ⅛ inch before bedding.",
    "explanationUk": "R607.6 вимагає покрити опорну поверхню водною асфальтовою емульсією завтовшки щонайменше ⅛ дюйма до укладання."
  },
  {
    "section": "R607.7",
    "difficulty": "exam",
    "question": "Which expansion-joint detail complies for a glass masonry panel at structural supports?",
    "questionUk": "Який вузол деформаційного шва відповідає нормі для склоблокової панелі біля конструктивних опор?",
    "answers": [
      [
        "Top and side joints at least ⅜ inch thick, free of mortar/debris and filled with resilient material",
        "Верхні й бічні шви щонайменше ⅜ дюйма, без розчину та сміття, з пружним заповненням"
      ],
      [
        "Only a bottom joint filled with rigid mortar",
        "Лише нижній шов із жорстким розчином"
      ],
      [
        "Top and side joints ⅛ inch thick in every case",
        "Верхні й бічні шви ⅛ дюйма в кожному випадку"
      ],
      [
        "Side joints entirely filled with leftover grout",
        "Бічні шви повністю заповнені залишками заливки"
      ],
      [
        "No joints if standard units are used",
        "Без швів за стандартних блоків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Expansion joints occur at top and sides, minimum ⅜ inch and sufficiently thick for displacement, clean and resiliently filled.",
    "explanationUk": "Деформаційні шви влаштовують угорі й з боків: мінімум ⅜ дюйма та достатньо для переміщень, чисті й із пружним заповненням."
  },
  {
    "section": "R607.8",
    "difficulty": "medium",
    "question": "Which TWO mortar types are permitted for glass-unit masonry? Select TWO.",
    "questionUk": "Які ДВА типи розчину дозволені для мурування зі склоблоків? Оберіть ДВА.",
    "answers": [
      [
        "Type S",
        "Розчин Type S"
      ],
      [
        "Type N",
        "Розчин Type N"
      ],
      [
        "Type M",
        "Розчин Type M"
      ],
      [
        "Type O",
        "Розчин Type O"
      ],
      [
        "Type K",
        "Розчин Type K"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Glass-unit masonry is laid with Type S or N mortar, not any mortar type generally available for other masonry.",
    "explanationUk": "Склоблоки укладають на розчин Type S або N, а не на будь-який тип, доступний для іншого мурування."
  }
];
export const intakeVerified74 = verifiedBatch(873, "Associated Issues", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf", seeds, "intake-series-73-78", true);

