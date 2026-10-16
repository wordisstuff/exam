import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R401.4",
    "difficulty": "medium",
    "question": "Accepted soil-science data suggest questionable soil at a site. Who determines whether to require testing, and how must a required test be performed?",
    "questionUk": "Дані прийнятих ґрунтознавчих методів указують на сумнівний ґрунт. Хто вирішує питання випробування та як його проводять?",
    "answers": [
      [
        "Building official decides; an approved agency uses an approved method",
        "Вирішує будівельний посадовець; схвалена організація застосовує схвалений метод"
      ],
      [
        "Owner decides; any unrecorded visual guess suffices",
        "Вирішує власник; достатньо незаписаної здогадки"
      ],
      [
        "Truck driver decides; no method is needed",
        "Вирішує водій; метод не потрібний"
      ],
      [
        "Neighbor decides; photographs alone always suffice",
        "Вирішує сусід; завжди досить фото"
      ],
      [
        "Testing is forbidden before excavation",
        "До земляних робіт випробування заборонене"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where accepted data indicate questionable characteristics are likely, the building official decides whether to require a test. A required test uses an approved agency and method.",
    "explanationUk": "За даними про ймовірні сумнівні властивості посадовець вирішує, чи потрібне випробування. Обов’язкове випробування виконує схвалена організація схваленим методом."
  },
  {
    "section": "Table R401.4.1, clay row",
    "difficulty": "easy",
    "question": "Absent a required soils investigation, what presumptive bearing pressure does the table assign to CL clay?",
    "questionUk": "Який умовний допустимий тиск таблиця задає глині CL за відсутності обов’язкового ґрунтового дослідження?",
    "answers": [
      [
        "1,500 psf",
        "1 500 фунтів/фут²"
      ],
      [
        "2,000 psf",
        "2 000 фунтів/фут²"
      ],
      [
        "3,000 psf",
        "3 000 фунтів/фут²"
      ],
      [
        "4,000 psf",
        "4 000 фунтів/фут²"
      ],
      [
        "12,000 psf",
        "12 000 фунтів/фут²"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The clay group including CL has a presumptive 1,500 psf value. Footnote b requires investigation if the official anticipates weaker soils.",
    "explanationUk": "Група глин, включно з CL, має умовне значення 1 500 psf. Примітка b вимагає дослідження, якщо посадовець очікує слабші ґрунти."
  },
  {
    "section": "Table R401.4.1, GW/GP row; R403.1.1",
    "difficulty": "exam",
    "question": "A pier carries 7,500 pounds to GW gravel with the table's presumptive capacity. What bearing area is required by load divided by allowable soil pressure alone?",
    "questionUk": "Стовп передає 7 500 фунтів на гравій GW із табличною умовною несучою здатністю. Яка площа потрібна лише за діленням навантаження на допустимий тиск?",
    "answers": [
      [
        "2.5 square feet",
        "2,5 квадратного фута"
      ],
      [
        "1 square foot",
        "1 квадратний фут"
      ],
      [
        "1.5 square feet",
        "1,5 квадратного фута"
      ],
      [
        "3.75 square feet",
        "3,75 квадратного фута"
      ],
      [
        "5 square feet",
        "5 квадратних футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "GW gravel is 3,000 psf; 7,500/3,000 = 2.5 square feet. Other footing dimensions, strength and site requirements still apply.",
    "explanationUk": "Для GW задано 3 000 psf; 7 500/3 000 = 2,5 фута². Інші розміри підошви, міцність і вимоги ділянки залишаються."
  },
  {
    "section": "Table R401.4.1, sand/gravel rows",
    "difficulty": "exam",
    "question": "Select soil symbols assigned 2,000 psf rather than the 3,000-psf GW/GP group.",
    "questionUk": "Виберіть позначення ґрунтів зі значенням 2 000 psf, а не 3 000 psf групи GW/GP.",
    "answers": [
      [
        "SM",
        "Ґрунт SM"
      ],
      [
        "SC",
        "Ґрунт SC"
      ],
      [
        "GC",
        "Ґрунт GC"
      ],
      [
        "GW",
        "Ґрунт GW"
      ],
      [
        "GP",
        "Ґрунт GP"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "SM, SC and GC belong to the 2,000-psf sand/silty/clayey group; GW and GP are the 3,000-psf gravel group.",
    "explanationUk": "SM, SC і GC належать до піщаної/пилуватої/глинистої групи 2 000 psf; GW і GP — до гравійної групи 3 000 psf."
  },
  {
    "section": "Table R401.4.1, rock rows",
    "difficulty": "exam",
    "question": "How does the table's crystalline-bedrock bearing value compare with its sedimentary/foliated-rock value?",
    "questionUk": "Як співвідносяться табличні значення для кристалічної корінної породи та осадової/сланцюватої породи?",
    "answers": [
      [
        "Three times as large",
        "Кристалічна має втричі більше значення"
      ],
      [
        "The same",
        "Значення однакові"
      ],
      [
        "Half as large",
        "Кристалічна має вдвічі менше"
      ],
      [
        "Twice as large",
        "Кристалічна має вдвічі більше"
      ],
      [
        "Six times as large",
        "Кристалічна має вшість разів більше"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The table gives 12,000 psf for crystalline bedrock and 4,000 psf for sedimentary/foliated rock: a 3:1 ratio.",
    "explanationUk": "Таблиця дає 12 000 psf кристалічній породі та 4 000 psf осадовій/сланцюватій: співвідношення 3:1."
  },
  {
    "section": "Table R401.4.1, footnote b",
    "difficulty": "medium",
    "question": "The building official expects in-place soil capacity below 1,500 psf. May the clay-row value simply be assumed instead?",
    "questionUk": "Посадовець очікує несучу здатність природного ґрунту нижче 1 500 psf. Чи можна просто прийняти значення рядка глин?",
    "answers": [
      [
        "No; allowable bearing capacity must be determined by soils investigation",
        "Ні; допустиму здатність визначають ґрунтовим дослідженням"
      ],
      [
        "Yes; 1,500 psf is an unconditional minimum for every soil",
        "Так; 1 500 psf — безумовний мінімум будь-якого ґрунту"
      ],
      [
        "Yes; use the gravel value instead",
        "Так; беруть значення гравію"
      ],
      [
        "Yes; double the load to compensate",
        "Так; для компенсації подвоюють навантаження"
      ],
      [
        "No footing is permitted under any circumstances",
        "Підошви заборонені за будь-яких умов"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote b requires investigation where the official determines soils below 1,500 psf are likely; it does not create a guaranteed floor.",
    "explanationUk": "Примітка b вимагає дослідження за очікуваної здатності нижче 1 500 psf; вона не гарантує нижню межу."
  },
  {
    "section": "R401.2",
    "difficulty": "medium",
    "question": "What quality-control basis is required for fill supporting footings or foundations?",
    "questionUk": "Яка основа контролю якості потрібна для насипу, що підтримує підошви чи фундаменти?",
    "answers": [
      [
        "Design, installation and testing under accepted engineering practice",
        "Проєктування, укладання та випробування за визнаною інженерною практикою"
      ],
      [
        "Only an owner's statement that fill looks firm",
        "Лише твердження власника про твердість"
      ],
      [
        "Only flattening the surface with a rake",
        "Лише вирівнювання граблями"
      ],
      [
        "Any excavation spoil without testing",
        "Будь-який відвал без випробувань"
      ],
      [
        "Only grass growth on top",
        "Лише ріст трави зверху"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Supporting fill soils must be designed, installed and tested according to accepted engineering practice.",
    "explanationUk": "Несучий насип проєктують, укладають і випробовують за визнаною інженерною практикою."
  },
  {
    "section": "R403.1.5",
    "difficulty": "exam",
    "question": "A proposed continuous footing has a top surface sloped along the hill. Which code requirement controls the top surface?",
    "questionUk": "Запроєктована безперервна підошва має верхню поверхню, похилу вздовж схилу. Яка вимога діє для верху?",
    "answers": [
      [
        "It must be level; use steps when top elevation must change",
        "Верх має бути горизонтальним; за зміни висоти роблять уступи"
      ],
      [
        "It may slope 1:3 without steps",
        "Дозволено ухил 1:3 без уступів"
      ],
      [
        "It must match the roof slope",
        "Верх повторює ухил даху"
      ],
      [
        "It may have any slope if thick enough",
        "Будь-який ухил дозволений за великої товщини"
      ],
      [
        "Only the bottom, never the top, must be level",
        "Горизонтальним має бути лише низ"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footing tops must be level. Steps are required where top elevation changes or bottom slope would exceed 1 vertical to 10 horizontal.",
    "explanationUk": "Верх підошви має бути горизонтальним. Уступи потрібні за зміни висоти верху або ухилу низу понад 1 по вертикалі до 10 по горизонталі."
  },
  {
    "section": "R403.1.7",
    "difficulty": "exam",
    "question": "Which hillside slope is steeper than 1 vertical to 3 horizontal and therefore triggers this section's adjacent-slope provisions?",
    "questionUk": "Який ухил крутіший за 1 по вертикалі до 3 по горизонталі й тому підпадає під правила сусідніх схилів цього розділу?",
    "answers": [
      [
        "2 vertical to 5 horizontal",
        "2 по вертикалі до 5 по горизонталі"
      ],
      [
        "1 vertical to 4 horizontal",
        "1 по вертикалі до 4 по горизонталі"
      ],
      [
        "1 vertical to 5 horizontal",
        "1 по вертикалі до 5 по горизонталі"
      ],
      [
        "1 vertical to 6 horizontal",
        "1 по вертикалі до 6 по горизонталі"
      ],
      [
        "1 vertical to 10 horizontal",
        "1 по вертикалі до 10 по горизонталі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "2/5 = 40%, greater than 1/3 = 33.3%. The other choices are gentler than the section's threshold.",
    "explanationUk": "2/5 = 40%, що більше 1/3 = 33,3%. Решта варіантів пологіші за поріг розділу."
  },
  {
    "section": "R403.1.7.1",
    "difficulty": "medium",
    "question": "A retaining wall stands at the toe of an ascending slope behind a building. From where is slope height measured for this provision?",
    "questionUk": "Підпірна стіна стоїть біля підошви висхідного схилу позаду будівлі. Звідки вимірюють висоту схилу для цього положення?",
    "answers": [
      [
        "From the retaining-wall top to the slope top",
        "Від верху підпірної стіни до верху схилу"
      ],
      [
        "From the wall footing bottom to the roof ridge",
        "Від низу підошви стіни до конька"
      ],
      [
        "From the street gutter to the roof",
        "Від вуличного жолоба до даху"
      ],
      [
        "From the wall footing bottom to grade only",
        "Лише від низу підошви стіни до землі"
      ],
      [
        "From the basement floor to the eave",
        "Від підлоги підвалу до карниза"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For a retaining wall at the toe, R403.1.7.1 measures slope height from the wall top to the slope top.",
    "explanationUk": "За підпірної стіни біля підошви R403.1.7.1 вимірює висоту від верху стіни до верху схилу."
  },
  {
    "section": "R403.1.7.2",
    "difficulty": "exam",
    "question": "A descending slope is steeper than 1:1. What reference plane is used for the required footing setback under this provision?",
    "questionUk": "Низхідний схил крутіший за 1:1. Від якої умовної площини визначають потрібний відступ підошви за цим положенням?",
    "answers": [
      [
        "A 45° plane projected upward from the slope toe",
        "Площина 45°, проведена вгору від підошви схилу"
      ],
      [
        "A vertical plane through the roof ridge",
        "Вертикальна площина через коньок"
      ],
      [
        "A horizontal plane at the street gutter",
        "Горизонтальна площина вуличного жолоба"
      ],
      [
        "A 10° plane from the eave",
        "Площина 10° від карниза"
      ],
      [
        "Any plane selected by the excavator",
        "Будь-яка площина за вибором екскаваторника"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For slopes steeper than 1:1, the setback reference is an imaginary plane at 45° to horizontal projected upward from the toe.",
    "explanationUk": "Для схилів крутіших за 1:1 відлік відступу ведуть від умовної площини 45° до горизонталі, проведеної вгору від підошви."
  },
  {
    "section": "R403.1.7.4",
    "difficulty": "exam",
    "question": "For a proposed alternate slope setback, which factors must a required qualified-engineer investigation consider? Select all listed factors.",
    "questionUk": "Які чинники має врахувати обов’язкове дослідження кваліфікованого інженера для альтернативного відступу від схилу? Виберіть усі наведені чинники.",
    "answers": [
      [
        "Slope height and gradient",
        "Висоту та крутість схилу"
      ],
      [
        "Load intensity",
        "Інтенсивність навантаження"
      ],
      [
        "Slope-material erosion characteristics",
        "Ерозійні властивості матеріалу схилу"
      ],
      [
        "Paint color",
        "Колір фарби"
      ],
      [
        "Contractor's advertising budget",
        "Рекламний бюджет підрядника"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Alternate clearances require official approval. The official may require an engineer's investigation considering material, slope height/gradient, load intensity and erosion characteristics.",
    "explanationUk": "Альтернативні відступи потребують схвалення посадовця. Він може вимагати інженерне дослідження матеріалу, висоти й крутості схилу, інтенсивності навантаження та ерозії."
  }
];
export const intakeVerified91 = verifiedBatch(1077, "Sitework", "Sitework / Soils", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/IRC2018P7/chapter-4-foundations", seeds, "intake-series-91-96", true, "2026-10-15");

