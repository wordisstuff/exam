import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R606.13",
    "difficulty": "medium",
    "question": "A multiple-wythe cavity wall has a 4-inch nominal facing and a 3-inch nominal backing. What R606.13 problem remains even though each wythe is at least 3 inches nominal?",
    "questionUk": "Порожниста багатошарова мурована стіна має зовнішній шар номінально 4 дюйми та внутрішній 3 дюйми. Яке порушення R606.13 залишається, хоча кожен шар має мінімум 3 дюйми?",
    "answers": [
      [
        "The backing must be at least as thick as the facing",
        "Внутрішній шар має бути не тоншим за зовнішній"
      ],
      [
        "The facing must always be thinner than 3 inches",
        "Зовнішній шар завжди має бути тоншим за 3 дюйми"
      ],
      [
        "The cavity must always be filled solid",
        "Порожнину завжди потрібно заповнювати суцільно"
      ],
      [
        "Both wythes must always be 8 inches thick",
        "Обидва шари завжди повинні мати товщину 8 дюймів"
      ],
      [
        "No dimensional relationship applies between wythes",
        "Співвідношення товщини шарів не регулюється"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13 requires facing and backing of at least 3 inches nominal and also requires the backing to be no thinner than the facing. A 3-inch backing behind a 4-inch facing fails the latter rule.",
    "explanationUk": "R606.13 вимагає номінально не менше 3 дюймів для обох шарів, а також внутрішній шар не тонший за зовнішній. Внутрішній шар 3 дюйми за зовнішнім 4 дюйми порушує другу умову."
  },
  {
    "section": "R606.13 Exception",
    "difficulty": "exam",
    "question": "A designer proposes a nominal 5-inch cavity between masonry wythes. What must be established to use the R606.13 exception to the 4-inch cavity limit?",
    "questionUk": "Проєктувальник пропонує номінальну порожнину 5 дюймів між шарами мурування. Що потрібно встановити для винятку R606.13 з обмеження 4 дюйми?",
    "answers": [
      [
        "Tie size and spacing by calculation",
        "Розмір і крок зв’язків розрахунком"
      ],
      [
        "Only the mortar color",
        "Лише колір розчину"
      ],
      [
        "Only the brick supplier's delivery schedule",
        "Лише графік постачання цегли"
      ],
      [
        "Only the interior paint thickness",
        "Лише товщину внутрішньої фарби"
      ],
      [
        "Only a note that the cavity is concealed",
        "Лише примітку, що порожнина прихована"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exception permits cavities wider than 4 inches nominal when tie size and tie spacing have been established by calculation. It does not give automatic approval based solely on cavity width.",
    "explanationUk": "Виняток дозволяє порожнину ширшу за номінальні 4 дюйми, коли розмір і крок зв’язків визначено розрахунком. Самого зазначення ширини недостатньо для дозволу."
  },
  {
    "section": "R606.13.1.1",
    "difficulty": "exam",
    "question": "Solid masonry wythes are bonded with masonry headers. For a 150-square-foot surface on EACH face, what minimum surface area on each face must consist of headers?",
    "questionUk": "Шари повнотілого мурування перев’язують тичковими елементами. За площі КОЖНОЇ поверхні 150 квадратних футів яку мінімальну площу кожної поверхні мають становити тички?",
    "answers": [
      [
        "6 square feet per face",
        "6 квадратних футів на кожній поверхні"
      ],
      [
        "3 square feet per face",
        "3 квадратні фути на кожній поверхні"
      ],
      [
        "4 square feet per face",
        "4 квадратні фути на кожній поверхні"
      ],
      [
        "1.5 square feet per face",
        "1,5 квадратного фута на кожній поверхні"
      ],
      [
        "6 square feet shared between both faces",
        "6 квадратних футів сумарно для обох поверхонь"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13.1.1 requires headers over at least 4 percent of each face: 150 × 0.04 = 6 square feet on each face. Header embedment and distribution rules also apply.",
    "explanationUk": "R606.13.1.1 вимагає тички на щонайменше 4% кожної поверхні: 150 × 0,04 = 6 квадратних футів на кожній. Також діють вимоги до заглиблення та розподілу тичків."
  },
  {
    "section": "R606.13.1.1",
    "difficulty": "easy",
    "question": "For solid masonry wythes bonded by masonry headers, how far must the headers extend into the backing at minimum?",
    "questionUk": "На яку мінімальну глибину мають заходити тички у внутрішній шар при перев’язуванні шарів повнотілого мурування?",
    "answers": [
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "1-1/2 inches",
        "1-1/2 дюйма"
      ],
      [
        "2 inches",
        "2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13.1.1 requires masonry headers to extend at least 3 inches into the backing. This penetration requirement is in addition to header area and spacing requirements.",
    "explanationUk": "R606.13.1.1 вимагає заглиблення тичків у внутрішній шар щонайменше на 3 дюйми. Ця вимога діє додатково до площі та кроку тичків."
  },
  {
    "section": "R606.13.1.2",
    "difficulty": "medium",
    "question": "Hollow masonry wythes use the bonding option with vertical intervals up to 34 inches. What minimum lap over the unit below is required for that option?",
    "questionUk": "Шари з порожнистих блоків перев’язують за варіантом із вертикальними інтервалами до 34 дюймів. Яке мінімальне перекриття блока нижче потрібне за цим варіантом?",
    "answers": [
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "1/4 inch",
        "1/4 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ],
      [
        "1 inch",
        "1 дюйм"
      ],
      [
        "2 inches",
        "2 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 34-inch-interval option in R606.13.1.2 requires at least 3 inches of lap over the unit below. The separate 17-inch option uses units at least 50 percent thicker than the units below.",
    "explanationUk": "Варіант R606.13.1.2 з інтервалом до 34 дюймів потребує перекриття нижнього блока не менше 3 дюймів. Окремий варіант з інтервалом 17 дюймів використовує блоки щонайменше на 50% товщі за нижні."
  },
  {
    "section": "R606.13.2.1",
    "difficulty": "exam",
    "question": "For ordinary 3/16-inch wall ties bonding masonry wythes, consider ONLY the one-tie-per-4.5-square-feet area rule. What is the minimum count for 90 square feet before checking spacing and opening ties?",
    "questionUk": "Для звичайних зв’язків діаметром 3/16 дюйма між шарами мурування врахуйте ЛИШЕ норму один зв’язок на 4,5 квадратного фута. Яка мінімальна кількість на 90 квадратних футів до перевірки кроку й додаткових зв’язків отворів?",
    "answers": [
      [
        "20 ties",
        "20 зв’язків"
      ],
      [
        "10 ties",
        "10 зв’язків"
      ],
      [
        "15 ties",
        "15 зв’язків"
      ],
      [
        "18 ties",
        "18 зв’язків"
      ],
      [
        "9 ties",
        "9 зв’язків"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13.2.1 requires at least one tie per 4.5 square feet: 90 ÷ 4.5 = 20. This area count alone does not establish compliance with maximum spacing or additional ties at openings.",
    "explanationUk": "R606.13.2.1 вимагає щонайменше один зв’язок на 4,5 квадратного фута: 90 ÷ 4,5 = 20. Цей підрахунок не доводить відповідності максимальному кроку чи додатковим зв’язкам біля отворів."
  },
  {
    "section": "R606.13.2.1",
    "difficulty": "medium",
    "question": "Which pair gives the maximum vertical and horizontal spacing, respectively, of ordinary wall ties bonding masonry wythes under R606.13.2.1?",
    "questionUk": "Яка пара задає відповідно максимальний вертикальний та горизонтальний крок звичайних зв’язків між шарами мурування за R606.13.2.1?",
    "answers": [
      [
        "24 inches vertical; 36 inches horizontal",
        "24 дюйми вертикально; 36 дюймів горизонтально"
      ],
      [
        "36 inches vertical; 48 inches horizontal",
        "36 дюймів вертикально; 48 дюймів горизонтально"
      ],
      [
        "48 inches vertical; 48 inches horizontal",
        "48 дюймів вертикально; 48 дюймів горизонтально"
      ],
      [
        "32 inches vertical; 40 inches horizontal",
        "32 дюйми вертикально; 40 дюймів горизонтально"
      ],
      [
        "36 inches vertical; 36 inches horizontal",
        "36 дюймів вертикально; 36 дюймів горизонтально"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13.2.1 limits vertical spacing to 24 inches and horizontal spacing to 36 inches. Ties in alternate courses must be staggered, and the area and opening requirements remain applicable.",
    "explanationUk": "R606.13.2.1 обмежує вертикальний крок 24 дюймами, горизонтальний — 36. Зв’язки суміжних перев’язаних рядів розташовують зі зміщенням; вимоги до площі та отворів також чинні."
  },
  {
    "section": "R606.13.2.2",
    "difficulty": "easy",
    "question": "Adjustable wall ties connect two masonry wythes whose bed joints are at different elevations. What maximum vertical offset between the bed joints is permitted?",
    "questionUk": "Регульовані зв’язки з’єднують два шари мурування, горизонтальні шви яких мають різні відмітки. Яке найбільше вертикальне зміщення цих швів допускається?",
    "answers": [
      [
        "1.25 inches",
        "1,25 дюйма"
      ],
      [
        "2 inches",
        "2 дюйми"
      ],
      [
        "2.5 inches",
        "2,5 дюйма"
      ],
      [
        "3 inches",
        "3 дюйми"
      ],
      [
        "4 inches",
        "4 дюйми"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13.2.2 permits a maximum bed-joint vertical offset of 1.25 inches between wythes when using adjustable ties. This is not the tie spacing dimension.",
    "explanationUk": "R606.13.2.2 допускає вертикальне зміщення горизонтальних швів між шарами до 1,25 дюйма для регульованих зв’язків. Це не розмір кроку зв’язків."
  },
  {
    "section": "R606.13.2.2",
    "difficulty": "medium",
    "question": "What is the maximum clearance between the connecting parts of adjustable masonry wall ties under R606.13.2.2?",
    "questionUk": "Який найбільший зазор між з’єднуваними частинами регульованих зв’язків мурованої стіни допускає R606.13.2.2?",
    "answers": [
      [
        "1/16 inch",
        "1/16 дюйма"
      ],
      [
        "1/8 inch",
        "1/8 дюйма"
      ],
      [
        "1/4 inch",
        "1/4 дюйма"
      ],
      [
        "3/8 inch",
        "3/8 дюйма"
      ],
      [
        "1/2 inch",
        "1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The clearance between connecting tie parts cannot exceed 1/16 inch. Larger adjustment capability does not permit a larger connection clearance.",
    "explanationUk": "Зазор між з’єднуваними частинами зв’язків не може перевищувати 1/16 дюйма. Можливість регулювання не дозволяє збільшувати зазор з’єднання."
  },
  {
    "section": "R606.13.2.3",
    "difficulty": "medium",
    "question": "Select TWO requirements for prefabricated joint reinforcement used to bond adjacent masonry wythes.",
    "questionUk": "Оберіть ДВІ вимоги до збірного армування швів, яким зв’язують суміжні шари мурування.",
    "answers": [
      [
        "Vertical spacing no greater than 16 inches",
        "Вертикальний крок не більше 16 дюймів"
      ],
      [
        "Cross wires no smaller than No. 9 gage",
        "Поперечні дроти не тонші за No. 9 gage"
      ],
      [
        "Vertical spacing may always be 36 inches",
        "Вертикальний крок завжди може становити 36 дюймів"
      ],
      [
        "Longitudinal wires must remain outside the mortar",
        "Поздовжні дроти повинні залишатися поза розчином"
      ],
      [
        "One cross-wire tie per 20 square feet is sufficient",
        "Достатньо одного поперечного дроту-зв’язку на 20 квадратних футів"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R606.13.2.3 limits vertical spacing to 16 inches and requires cross wires at least No. 9 gage. It also requires a cross-wire tie per 2.67 square feet and longitudinal wires embedded in mortar.",
    "explanationUk": "R606.13.2.3 обмежує вертикальний крок 16 дюймами та вимагає поперечні дроти не тонші за No. 9 gage. Також потрібен дріт-зв’язок на 2,67 квадратного фута та заглиблення поздовжніх дротів у розчин."
  },
  {
    "section": "R606.13.3.1",
    "difficulty": "medium",
    "question": "Which minimum combination applies to uniformly distributed bonder units in ashlar masonry?",
    "questionUk": "Яка пара мінімумів застосовується до рівномірно розподілених перев’язувальних каменів в ashlar-муруванні?",
    "answers": [
      [
        "10 percent of wall area and 4-inch penetration into backing",
        "10% площі стіни та заглиблення у внутрішній шар на 4 дюйми"
      ],
      [
        "4 percent of wall area and 1-inch penetration",
        "4% площі стіни та заглиблення на 1 дюйм"
      ],
      [
        "5 percent of wall area and 2-inch penetration",
        "5% площі стіни та заглиблення на 2 дюйми"
      ],
      [
        "2 percent of wall area and 3-inch penetration",
        "2% площі стіни та заглиблення на 3 дюйми"
      ],
      [
        "1 percent of wall area and 1/2-inch penetration",
        "1% площі стіни та заглиблення на 1/2 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R606.13.3.1 requires uniformly distributed bonder units over at least 10 percent of wall area, extending at least 4 inches into the backing wall.",
    "explanationUk": "R606.13.3.1 вимагає рівномірних перев’язувальних каменів на щонайменше 10% площі стіни із заглибленням у внутрішній шар не менше 4 дюймів."
  },
  {
    "section": "R606.13.3.2",
    "difficulty": "exam",
    "question": "A rubble-stone masonry wall is 30 inches thick and has 72 square feet of surface on each side. What minimum bonder count does the area rule require on EACH side?",
    "questionUk": "Бутова стіна має товщину 30 дюймів і площу 72 квадратні фути з кожного боку. Яку мінімальну кількість перев’язувальних каменів вимагає норма площі на КОЖНОМУ боці?",
    "answers": [
      [
        "12 bonder units per side",
        "12 перев’язувальних каменів на кожному боці"
      ],
      [
        "6 bonder units per side",
        "6 перев’язувальних каменів на кожному боці"
      ],
      [
        "8 bonder units per side",
        "8 перев’язувальних каменів на кожному боці"
      ],
      [
        "9 bonder units per side",
        "9 перев’язувальних каменів на кожному боці"
      ],
      [
        "12 bonder units total for both sides",
        "12 перев’язувальних каменів сумарно на обох боках"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For rubble masonry thicker than 24 inches, R606.13.3.2 requires one bonder per 6 square feet of wall surface on both sides. Therefore 72 ÷ 6 = 12 on each side.",
    "explanationUk": "Для бутового мурування товщиною понад 24 дюйми R606.13.3.2 вимагає один перев’язувальний камінь на 6 квадратних футів поверхні з обох боків. Отже, 72 ÷ 6 = 12 на кожному боці."
  }
];
export const intakeVerified117 = verifiedBatch(1389, "Footings and Foundations", "Masonry / Concrete Walls", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-115-120", true, "2026-10-22");
