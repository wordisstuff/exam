import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R606.4.1",
    "difficulty": "easy",
    "question": "What minimum masonry bearing-wall thickness applies where the wall is more than one story high?",
    "questionUk": "Яка мінімальна товщина несучої муруваної стіни, якщо вона вища за один поверх?",
    "answers": [
      [
        "8 inches",
        "8 дюймів"
      ],
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
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
    "explanation": "Bearing walls more than one story high require at least 8 inches; the limited one-story solid-wall option is different.",
    "explanationUk": "Несучі стіни заввишки понад один поверх потребують щонайменше 8 дюймів; обмежений варіант одноповерхової повнотілої стіни інший."
  },
  {
    "section": "R606.4.1",
    "difficulty": "exam",
    "question": "A one-story dwelling uses the 6-inch solid-masonry option with a 9-foot wall and a permitted gable. What maximum height to the gable peak follows this provision?",
    "questionUk": "Одноповерхове житло використовує повнотілу стіну 6 дюймів, заввишки 9 футів, із дозволеним фронтоном. Яка найбільша висота до вершини фронтону за цим положенням?",
    "answers": [
      [
        "15 feet",
        "15 футів"
      ],
      [
        "9 feet",
        "9 футів"
      ],
      [
        "12 feet",
        "12 футів"
      ],
      [
        "18 feet",
        "18 футів"
      ],
      [
        "20 feet",
        "20 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The limited one-story option permits 9 feet of wall plus 6 additional feet to a gable peak, totaling 15 feet; lateral support remains required.",
    "explanationUk": "Обмежений одноповерховий варіант дозволяє 9 футів стіни та додаткові 6 футів до вершини фронтону — разом 15; бокова опора залишається обов’язковою."
  },
  {
    "section": "R606.4.2",
    "difficulty": "medium",
    "question": "What minimum thickness applies to rough, random or coursed rubble-stone masonry walls?",
    "questionUk": "Яка мінімальна товщина стін із грубого, нерегулярного чи рядами укладеного бутового каменю?",
    "answers": [
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "6 inches",
        "6 дюймів"
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
    "explanation": "R606.4.2 sets a 16-inch minimum for these rubble-stone masonry walls.",
    "explanationUk": "R606.4.2 установлює мінімум 16 дюймів для таких бутових стін."
  },
  {
    "section": "R606.4.3",
    "difficulty": "medium",
    "question": "A hollow-unit masonry wall decreases in thickness above a floor level. What load-transfer detail must be provided?",
    "questionUk": "Товщина пустотілої муруваної стіни зменшується над перекриттям. Який вузол передавання навантаження потрібний?",
    "answers": [
      [
        "A solid or mortar/grout-filled course, or special construction transferring loads to the lower wall",
        "Повнотілий або заповнений розчином чи заливкою ряд, або спеціальна конструкція передавання навантажень нижній стіні"
      ],
      [
        "An open unsupported gap between wythes",
        "Відкритий непідпертий проміжок між шарами мурування"
      ],
      [
        "Only a thicker paint layer",
        "Лише товстіший шар фарби"
      ],
      [
        "Only insulation filling the change in thickness",
        "Лише утеплювач у місці зміни товщини"
      ],
      [
        "No transition detail if the wall is indoors",
        "Без перехідного вузла всередині будівлі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The transition must transmit loads from upper face shells or wythes to those below using the listed solid/filled course or special construction.",
    "explanationUk": "Перехід має передавати навантаження від верхніх стінок блоків чи шарів мурування нижнім через зазначений повнотілий або заповнений ряд чи спеціальну конструкцію."
  },
  {
    "section": "R606.4.4",
    "difficulty": "exam",
    "question": "In Seismic Design Category A, an 8-inch-thick unreinforced solid masonry parapet is proposed. What maximum height follows its thickness ratio?",
    "questionUk": "У сейсмічній категорії A запропоновано неармований повнотілий муруваний парапет 8 дюймів. Яка найбільша висота за відношенням до товщини?",
    "answers": [
      [
        "32 inches",
        "32 дюйми"
      ],
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "40 inches",
        "40 дюймів"
      ],
      [
        "48 inches",
        "48 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Unreinforced solid parapets need at least 8-inch thickness and height no more than four times thickness: 4×8=32 inches.",
    "explanationUk": "Неармовані повнотілі парапети потребують товщини щонайменше 8 дюймів і висоти не більш як чотири товщини: 4×8=32 дюйми."
  },
  {
    "section": "R606.4.4",
    "difficulty": "exam",
    "question": "In Seismic Design Category A, an 8-inch-thick unreinforced hollow-unit parapet is proposed. What maximum height follows its own ratio?",
    "questionUk": "У сейсмічній категорії A запропоновано неармований парапет із пустотілих блоків 8 дюймів. Яка найбільша висота за його окремим відношенням?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "32 inches",
        "32 дюйми"
      ],
      [
        "40 inches",
        "40 дюймів"
      ],
      [
        "48 inches",
        "48 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Hollow-unit parapet height is limited to three times thickness: 3×8=24 inches, not the solid-unit four-times ratio.",
    "explanationUk": "Висота пустотілого парапету обмежена трьома товщинами: 3×8=24 дюйми, а не чотирма, як для повнотілого."
  },
  {
    "section": "R606.5.1",
    "difficulty": "medium",
    "question": "Which TWO unit conditions are permitted for masonry corbeling? Select TWO.",
    "questionUk": "Які ДВА види мурувальних виробів дозволені для консолей мурування? Оберіть ДВА.",
    "answers": [
      [
        "Solid masonry units",
        "Повнотілі мурувальні вироби"
      ],
      [
        "Masonry units filled with mortar or grout",
        "Вироби, заповнені розчином або заливкою"
      ],
      [
        "Unfilled hollow units",
        "Незаповнені пустотілі вироби"
      ],
      [
        "Units supported only by foam filler",
        "Вироби, підтримані лише пінним заповнювачем"
      ],
      [
        "Unfilled units whose exterior faces are painted",
        "Незаповнені вироби з фарбованими зовнішніми гранями"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Corbeling uses solid units or units filled with mortar or grout.",
    "explanationUk": "Для консолей використовують повнотілі вироби або вироби, заповнені розчином чи заливкою."
  },
  {
    "section": "R606.5.2",
    "difficulty": "exam",
    "question": "One corbel unit is 8 inches high and 9 inches thick perpendicular to the wall. Applying both single-unit limits, what maximum projection is permitted?",
    "questionUk": "Один консольний виріб має висоту 8 дюймів і товщину 9 дюймів перпендикулярно стіні. Який найбільший виступ дозволений за обома межами одного виробу?",
    "answers": [
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "4½ inches",
        "4½ дюйма"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Projection cannot exceed half unit height or one-third perpendicular thickness. The smaller limit is min(4,3)=3 inches.",
    "explanationUk": "Виступ не перевищує половини висоти або третини перпендикулярної товщини. Менша межа — min(4,3)=3 дюйми."
  },
  {
    "section": "R606.5.2, item 1",
    "difficulty": "exam",
    "question": "A 12-inch multiple-wythe wall is bonded with mortar/grout and wall ties or masonry headers. What maximum total corbel projection beyond its face applies?",
    "questionUk": "Багатошарова стіна 12 дюймів зв’язана розчином/заливкою й в’язями або перев’язувальними цеглинами. Який найбільший загальний виступ консолі за її грань?",
    "answers": [
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "3 inches",
        "3 дюйми"
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
        "12 inches",
        "12 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For the specified bonded multiple-wythe wall, total projection is limited to half the wall thickness: 12÷2=6 inches. Each unit's limit also applies.",
    "explanationUk": "Для зазначеної зв’язаної багатошарової стіни загальний виступ обмежений половиною товщини стіни: 12÷2=6 дюймів. Межа окремого виробу також діє."
  },
  {
    "section": "R606.5.2, item 2",
    "difficulty": "exam",
    "question": "A single-wythe wall is 8 inches thick. What maximum total corbel projection follows the single-wythe rule?",
    "questionUk": "Одношарова мурувана стіна має товщину 8 дюймів. Який найбільший загальний виступ консолі за правилом одного шару?",
    "answers": [
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "8 inches",
        "8 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The limit is half the wythe thickness: 8÷2=4 inches, with individual-unit limits still required.",
    "explanationUk": "Межа — половина товщини шару: 8÷2=4 дюйми; межі окремих виробів також обов’язкові."
  },
  {
    "section": "R606.5.3",
    "difficulty": "medium",
    "question": "A masonry corbel supports floor or roof framing. Which TWO top-course arrangements are expressly permitted? Select TWO.",
    "questionUk": "Мурувана консоль підтримує каркас перекриття чи даху. Які ДВА варіанти верхнього ряду прямо дозволені? Оберіть ДВА.",
    "answers": [
      [
        "A header top course",
        "Верхній ряд із поперечною перев’язкою"
      ],
      [
        "Ties in the top-course bed joint to the vertical wall",
        "В’язі горизонтального шва верхнього ряду до вертикальної стіни"
      ],
      [
        "An untied projecting top course without headers",
        "Незв’язаний виступний ряд без перев’язувальних виробів"
      ],
      [
        "Only adhesive between framing and masonry",
        "Лише клей між каркасом і муруванням"
      ],
      [
        "A top course separated from the wall by insulation",
        "Верхній ряд, відділений від стіни утеплювачем"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The top course is a header course or its bed joint has ties to the vertical wall.",
    "explanationUk": "Верхній ряд має поперечну перев’язку або його горизонтальний шов має в’язі до вертикальної стіни."
  },
  {
    "section": "R606.6.1",
    "difficulty": "exam",
    "question": "A masonry wythe is 6 inches thick. What minimum bearing width follows the two-thirds support requirement?",
    "questionUk": "Шар мурування має товщину 6 дюймів. Яка мінімальна ширина опори за вимогою двох третин?",
    "answers": [
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "4½ inches",
        "4½ дюйма"
      ],
      [
        "6 inches",
        "6 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Each wythe needs support of at least two-thirds its thickness: 6×⅔=4 inches.",
    "explanationUk": "Кожен шар потребує опори щонайменше на дві третини товщини: 6×⅔=4 дюйми."
  }
];
export const intakeVerified79 = verifiedBatch(933, "Footings and Foundations", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter6.pdf", seeds, "intake-series-79-84", true);

