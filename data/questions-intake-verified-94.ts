import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R301.4",
    "difficulty": "medium",
    "question": "Which basis must a designer use for dead load, including fixed service equipment?",
    "questionUk": "Яку основу має використовувати проєктувальник для постійного навантаження, включно зі стаціонарним інженерним обладнанням?",
    "answers": [
      [
        "Actual weights of materials and construction, considering fixed equipment",
        "Фактичну вагу матеріалів і конструкцій з урахуванням стаціонарного обладнання"
      ],
      [
        "Only the occupants' weights",
        "Лише вагу мешканців"
      ],
      [
        "Only the roof snow load",
        "Лише сніг на даху"
      ],
      [
        "A single arbitrary value for every house",
        "Одне довільне значення для всіх будинків"
      ],
      [
        "Only movable furniture",
        "Лише пересувні меблі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R301.4 bases dead load on actual material/construction weights and requires consideration of fixed service equipment.",
    "explanationUk": "R301.4 визначає постійне навантаження за фактичною вагою матеріалів і конструкцій та враховує стаціонарне інженерне обладнання."
  },
  {
    "section": "R301.6",
    "difficulty": "exam",
    "question": "A roof location has 20 psf required roof live load and 35 psf required snow load. Which of these two loads governs the roof-load comparison?",
    "questionUk": "Для даху задано тимчасове покрівельне навантаження 20 psf і снігове 35 psf. Яке з цих двох визначає порівняння за правилом навантаження даху?",
    "answers": [
      [
        "35 psf snow load",
        "Снігове 35 psf"
      ],
      [
        "20 psf roof live load",
        "Покрівельне тимчасове 20 psf"
      ],
      [
        "Their average, 27.5 psf",
        "Середнє 27,5 psf"
      ],
      [
        "Zero because both exist",
        "Нуль, бо є обидва"
      ],
      [
        "Always their sum, 55 psf, under this comparison",
        "Завжди їх сума 55 psf за цим порівнянням"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R301.6 requires the roof live load or snow load, whichever is greater. This comparison does not replace other required loads or load combinations.",
    "explanationUk": "R301.6 вимагає покрівельне тимчасове або снігове навантаження — яке більше. Це порівняння не замінює інших потрібних навантажень чи комбінацій."
  },
  {
    "section": "Table R301.6, flat/<4:12 row, 201–600-sq-ft column",
    "difficulty": "exam",
    "question": "For the roof-live-load component alone, a member supports 300 square feet of horizontal projected roof area at 3:12 slope. What total live load follows from Table R301.6?",
    "questionUk": "Для лише тимчасової покрівельної складової елемент підтримує 300 футів² горизонтальної проєкції даху з ухилом 3:12. Яке сумарне тимчасове навантаження дає таблиця R301.6?",
    "answers": [
      [
        "4,800 pounds",
        "4 800 фунтів"
      ],
      [
        "3,600 pounds",
        "3 600 фунтів"
      ],
      [
        "4,200 pounds",
        "4 200 фунтів"
      ],
      [
        "6,000 pounds",
        "6 000 фунтів"
      ],
      [
        "9,000 pounds",
        "9 000 фунтів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "3:12 is below 4:12 and 300 square feet is in the 201–600 column, giving 16 psf: 300 × 16 = 4,800 pounds. Snow must still be compared separately.",
    "explanationUk": "3:12 нижче 4:12, а 300 футів² належать колонці 201–600, тобто 16 psf: 300 × 16 = 4 800 фунтів. Сніг додатково порівнюють окремо."
  },
  {
    "section": "Table R301.6, ≥12:12 row",
    "difficulty": "medium",
    "question": "At exactly 12:12 roof slope, what minimum roof live load does Table R301.6 list for a 150-square-foot tributary area?",
    "questionUk": "Яке мінімальне тимчасове навантаження даху таблиця R301.6 задає за ухилу рівно 12:12 та вантажної площі 150 футів²?",
    "answers": [
      [
        "12 psf",
        "12 фунтів/фут²"
      ],
      [
        "14 psf",
        "14 фунтів/фут²"
      ],
      [
        "16 psf",
        "16 фунтів/фут²"
      ],
      [
        "20 psf",
        "20 фунтів/фут²"
      ],
      [
        "30 psf",
        "30 фунтів/фут²"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Exactly 12:12 belongs to the '12 inches per foot and greater' row, which is 12 psf in all tributary-area columns; governing snow may be higher.",
    "explanationUk": "Рівно 12:12 належить рядку «12 дюймів на фут і більше», де всі колонки площі дають 12 psf; визначальний сніг може бути більшим."
  },
  {
    "section": "Table R301.7, Floors row",
    "difficulty": "exam",
    "question": "An ordinary floor member spans 18 feet. What live-load deflection limit corresponds to the table's floor ratio?",
    "questionUk": "Звичайний елемент підлоги має проліт 18 футів. Який допустимий прогин від тимчасового навантаження відповідає табличному відношенню підлоги?",
    "answers": [
      [
        "0.60 inch",
        "0,60 дюйма"
      ],
      [
        "0.30 inch",
        "0,30 дюйма"
      ],
      [
        "0.90 inch",
        "0,90 дюйма"
      ],
      [
        "1.20 inches",
        "1,20 дюйма"
      ],
      [
        "1.80 inches",
        "1,80 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The floor ratio is L/360: 18 × 12 = 216 inches; 216/360 = .60 inch. Specialized member-table criteria may be stricter.",
    "explanationUk": "Для підлоги задано L/360: 18 × 12 = 216 дюймів; 216/360 = 0,60. Спеціальні таблиці елементів можуть бути суворішими."
  },
  {
    "section": "Table R301.7, Ceiling rows",
    "difficulty": "medium",
    "question": "Which deflection-ratio pair matches ceilings with brittle finishes versus flexible finishes?",
    "questionUk": "Яка пара відношень прогину відповідає стелям із крихким і гнучким оздобленням?",
    "answers": [
      [
        "Brittle: L/360; flexible: L/240",
        "Крихке: L/360; гнучке: L/240"
      ],
      [
        "Brittle: L/240; flexible: L/360",
        "Крихке: L/240; гнучке: L/360"
      ],
      [
        "Both: L/120",
        "Обидва: L/120"
      ],
      [
        "Both: L/180",
        "Обидва: L/180"
      ],
      [
        "Brittle: L/60; flexible: L/90",
        "Крихке: L/60; гнучке: L/90"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Plaster/stucco are examples of brittle ceiling finishes at L/360; gypsum board is a flexible-finish example at L/240.",
    "explanationUk": "Штукатурка й stucco — приклади крихкого стельового оздоблення з L/360; гіпсокартон — гнучкого з L/240."
  },
  {
    "section": "Table R301.7, Rafter row",
    "difficulty": "medium",
    "question": "Which listed deflection ratio applies to rafters at 4:12 slope when finished ceiling is not attached to them?",
    "questionUk": "Яке табличне відношення прогину діє для крокв ухилу 4:12, до яких не прикріплено чистову стелю?",
    "answers": [
      [
        "L/180",
        "Відношення L/180"
      ],
      [
        "L/60",
        "Відношення L/60"
      ],
      [
        "L/120",
        "Відношення L/120"
      ],
      [
        "L/360",
        "Відношення L/360"
      ],
      [
        "L/600",
        "Відношення L/600"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The special row applies to rafters steeper than 3:12 with no finished ceiling attached and permits L/180.",
    "explanationUk": "Спеціальний рядок охоплює крокви крутіші за 3:12 без прикріпленої чистової стелі та дозволяє L/180."
  },
  {
    "section": "Table R301.7, Interior walls and partitions row",
    "difficulty": "exam",
    "question": "A 9-foot-high interior partition is checked under its table deflection ratio. What maximum deflection results?",
    "questionUk": "Внутрішню перегородку заввишки 9 футів перевіряють за її табличним відношенням прогину. Яка максимальна деформація?",
    "answers": [
      [
        "0.60 inch",
        "0,60 дюйма"
      ],
      [
        "0.15 inch",
        "0,15 дюйма"
      ],
      [
        "0.30 inch",
        "0,30 дюйма"
      ],
      [
        "0.45 inch",
        "0,45 дюйма"
      ],
      [
        "0.90 inch",
        "0,90 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Interior walls/partitions use H/180. H = 9 × 12 = 108 inches; 108/180 = .60 inch.",
    "explanationUk": "Для внутрішніх стін і перегородок задано H/180. H = 9 × 12 = 108 дюймів; 108/180 = 0,60."
  },
  {
    "section": "Table R301.7, footnote d",
    "difficulty": "exam",
    "question": "An exterior wall has flexible exterior finish but interior gypsum board. Which footnote limit supersedes the H/120 flexible-finish entry?",
    "questionUk": "Зовнішня стіна має гнучке зовнішнє оздоблення, але гіпсокартон усередині. Яка межа примітки замінює H/120 рядка гнучкого оздоблення?",
    "answers": [
      [
        "H/180",
        "Відношення H/180"
      ],
      [
        "H/60",
        "Відношення H/60"
      ],
      [
        "H/90",
        "Відношення H/90"
      ],
      [
        "H/100",
        "Відношення H/100"
      ],
      [
        "H/120 remains unchanged",
        "H/120 залишається без змін"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote d limits exterior walls with interior gypsum board to H/180, making the allowable deflection smaller than H/120.",
    "explanationUk": "Примітка d обмежує зовнішні стіни з внутрішнім гіпсокартоном до H/180, тобто дозволяє менше відхилення, ніж H/120."
  },
  {
    "section": "Table R301.7, Floors row and footnote b",
    "difficulty": "exam",
    "question": "For a 36-inch floor cantilever governed by the ordinary L/360 floor limit, what deflection limit results when the cantilever footnote is applied?",
    "questionUk": "Для консолі підлоги 36 дюймів зі звичайною межею L/360 який допустимий прогин виходить з урахуванням примітки консолі?",
    "answers": [
      [
        "0.20 inch",
        "0,20 дюйма"
      ],
      [
        "0.10 inch",
        "0,10 дюйма"
      ],
      [
        "0.30 inch",
        "0,30 дюйма"
      ],
      [
        "0.40 inch",
        "0,40 дюйма"
      ],
      [
        "1.00 inch",
        "1,00 дюйм"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Footnote b takes L as twice the cantilever length: L = 72 inches; 72/360 = .20 inch. Other member-specific limits may still govern.",
    "explanationUk": "Примітка b приймає L подвійною довжиною консолі: L = 72 дюйми; 72/360 = 0,20. Окремі межі конкретного елемента також можуть визначати розрахунок."
  },
  {
    "section": "Table R301.7, footnote a",
    "difficulty": "exam",
    "question": "For the table's deflection-limit check, a component/cladding ASD wind load obtained from Table R301.2(2) is 10 psf. What reduced load does footnote a permit?",
    "questionUk": "Для перевірки прогину табличне ASD вітрове навантаження елементів/обшивки з таблиці R301.2(2) — 10 psf. Яке зменшене навантаження дозволяє примітка a?",
    "answers": [
      [
        "7 psf",
        "7 фунтів/фут²"
      ],
      [
        "3 psf",
        "3 фунти/фут²"
      ],
      [
        "5 psf",
        "5 фунтів/фут²"
      ],
      [
        "10 psf only",
        "Лише 10 фунтів/фут²"
      ],
      [
        "14 psf",
        "14 фунтів/фут²"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For these deflection limits, footnote a permits 0.7 times the specified component/cladding ASD load: .7 × 10 = 7 psf. This is not a general strength-design reduction.",
    "explanationUk": "Для цих меж прогину примітка a дозволяє 0,7 зазначеного ASD навантаження: 0,7 × 10 = 7 psf. Це не загальне зменшення для розрахунку міцності."
  },
  {
    "section": "R301.8",
    "difficulty": "easy",
    "question": "Unless specifically designated as actual, how are lumber dimensions stated in this code interpreted?",
    "questionUk": "Як тлумачать розміри пиломатеріалів у цьому коді, якщо їх спеціально не названо фактичними?",
    "answers": [
      [
        "As nominal dimensions",
        "Як номінальні розміри"
      ],
      [
        "As exact measured dimensions in every case",
        "Завжди як точні виміряні розміри"
      ],
      [
        "As minimum clear span",
        "Як мінімальний чистий проліт"
      ],
      [
        "As moisture percentages",
        "Як відсоток вологості"
      ],
      [
        "As finished floor elevations",
        "Як позначки чистої підлоги"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R301.8 treats code lumber dimensions as nominal unless expressly identified as actual dimensions.",
    "explanationUk": "R301.8 трактує розміри пиломатеріалів як номінальні, якщо прямо не вказано, що вони фактичні."
  }
];
export const intakeVerified94 = verifiedBatch(1113, "Plans and Specifications", "Plans", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.seattle.gov/documents/Departments/SDCI/Codes/SeattleResidentialCode/2018SRCChapter3.pdf", seeds, "intake-series-91-96", true, "2026-10-15");

