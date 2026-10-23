import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "R610.2",
    "difficulty": "medium",
    "question": "A proposed SIP building has two stories, but a SIP wall is 11 feet high. All other applicability conditions are satisfied. Does R610.2 cover this wall prescriptively?",
    "questionUk": "Запроєктована SIP-будівля має два поверхи, але висота SIP-стіни становить 11 футів. Усі інші умови застосування виконано. Чи охоплює R610.2 цю стіну приписовими правилами?",
    "answers": [
      [
        "No; each wall is limited to 10 feet high",
        "Ні; висота кожної стіни обмежена 10 футами"
      ],
      [
        "Yes; two stories permit any wall height",
        "Так; два поверхи дозволяють будь-яку висоту стіни"
      ],
      [
        "Yes; the limit is 12 feet",
        "Так; межа становить 12 футів"
      ],
      [
        "Yes; the limit is 14 feet",
        "Так; межа становить 14 футів"
      ],
      [
        "Yes; wall height matters only for interior partitions",
        "Так; висота важлива лише для внутрішніх перегородок"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.2 limits the prescriptive SIP provisions to two stories with each wall no higher than 10 feet. An 11-foot wall is outside that scope regardless of meeting the other limits.",
    "explanationUk": "R610.2 обмежує приписові правила SIP двома поверхами та висотою кожної стіни не більше 10 футів. Стіна 11 футів виходить за ці межі незалежно від інших умов."
  },
  {
    "section": "R610.3.1",
    "difficulty": "exam",
    "question": "A contractor proposes another lumber species instead of No. 2 Spruce-pine-fir in a prescriptive SIP assembly. What must the substitution meet or exceed?",
    "questionUk": "Підрядник пропонує іншу породу деревини замість No. 2 Spruce-pine-fir у приписовій SIP-конструкції. Яким показникам має відповідати або перевищувати їх заміна?",
    "answers": [
      [
        "Both mechanical properties and specific gravity of No. 2 Spruce-pine-fir",
        "І механічним властивостям, і питомій густині No. 2 Spruce-pine-fir"
      ],
      [
        "Only the original lumber's color",
        "Лише кольору початкової деревини"
      ],
      [
        "Only the original board length",
        "Лише довжині початкової дошки"
      ],
      [
        "Only the original lumber's purchase price",
        "Лише закупівельній ціні початкової деревини"
      ],
      [
        "Only a matching nominal width, regardless of strength",
        "Лише номінальній ширині незалежно від міцності"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.3.1 permits other species or grades only if they meet or exceed both the mechanical properties and specific gravity of No. 2 Spruce-pine-fir. A dimensional match alone is insufficient.",
    "explanationUk": "R610.3.1 дозволяє інші породи чи сорти за відповідності або перевищення і механічних властивостей, і питомої густини No. 2 Spruce-pine-fir. Самої відповідності розмірів недостатньо."
  },
  {
    "section": "R610.3.2",
    "difficulty": "medium",
    "question": "SIP erection screws supplied by the SIP manufacturer extend only 3/4 inch into the receiving wood member. What minimum penetration does R610.3.2 require?",
    "questionUk": "Монтажні шурупи виробника SIP входять у дерев’яний елемент лише на 3/4 дюйма. Яка мінімальна глибина входження потрібна за R610.3.2?",
    "answers": [
      [
        "1 inch",
        "1 дюйм"
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
      ],
      [
        "5/8 inch",
        "5/8 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.3.2 requires SIP erection screws to penetrate the receiving wood member at least 1 inch. Manufacturer supply does not waive that minimum.",
    "explanationUk": "R610.3.2 вимагає входження монтажного шурупа SIP у дерев’яний елемент щонайменше на 1 дюйм. Постачання виробником не скасовує цього мінімуму."
  },
  {
    "section": "R610.3.2",
    "difficulty": "exam",
    "question": "Which diameter pair meets BOTH minimum dimensions for corrosion-resistant SIP erection screws under R610.3.2?",
    "questionUk": "Яка пара діаметрів відповідає ОБОМ мінімальним розмірам корозійностійких монтажних шурупів SIP за R610.3.2?",
    "answers": [
      [
        "0.188-inch shank and 0.620-inch head",
        "Стрижень 0,188 дюйма та головка 0,620 дюйма"
      ],
      [
        "0.125-inch shank and 0.620-inch head",
        "Стрижень 0,125 дюйма та головка 0,620 дюйма"
      ],
      [
        "0.188-inch shank and 0.500-inch head",
        "Стрижень 0,188 дюйма та головка 0,500 дюйма"
      ],
      [
        "0.160-inch shank and 0.600-inch head",
        "Стрижень 0,160 дюйма та головка 0,600 дюйма"
      ],
      [
        "0.180-inch shank and 0.610-inch head",
        "Стрижень 0,180 дюйма та головка 0,610 дюйма"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The minimum shank and head diameters are 0.188 inch and 0.620 inch respectively. Both dimensions must comply, along with the other SIP screw requirements.",
    "explanationUk": "Мінімальні діаметри стрижня та головки становлять відповідно 0,188 та 0,620 дюйма. Потрібне виконання обох розмірів та інших вимог до шурупів SIP."
  },
  {
    "section": "R610.5.1",
    "difficulty": "medium",
    "question": "Which description correctly distinguishes the two components of the SIP double top plate?",
    "questionUk": "Який опис правильно розрізняє два елементи подвійної верхньої обв’язки SIP?",
    "answers": [
      [
        "A recessed plate matches the core width; the cap matches total SIP thickness and overlaps both facers",
        "Заглиблена дошка дорівнює ширині ядра; накладна — повній товщині SIP і перекриває обидві обшивки"
      ],
      [
        "Both plates must be narrower than the foam core",
        "Обидві дошки мають бути вужчими за пінне ядро"
      ],
      [
        "Both plates cover only one facer",
        "Обидві дошки перекривають лише одну обшивку"
      ],
      [
        "The cap is the core width and leaves both facers uncovered",
        "Накладна дошка дорівнює ширині ядра та не перекриває обшивки"
      ],
      [
        "The recessed plate replaces the cap entirely",
        "Заглиблена дошка повністю замінює накладну"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.5.1 distinguishes a nominal 2-by plate recessed into the core from the cap above it. The cap matches full SIP thickness and overlaps the facers on both sides.",
    "explanationUk": "R610.5.1 розрізняє номінальну дошку 2-by, заглиблену в ядро, та верхню накладну дошку. Накладна дорівнює повній товщині SIP і перекриває обшивки з обох боків."
  },
  {
    "section": "R610.5.1",
    "difficulty": "easy",
    "question": "The end joints of a SIP double top plate are offset 18 inches. What minimum offset is required?",
    "questionUk": "Торцеві стики подвійної верхньої обв’язки SIP зміщено на 18 дюймів. Який мінімальний зсув потрібен?",
    "answers": [
      [
        "24 inches",
        "24 дюйми"
      ],
      [
        "6 inches",
        "6 дюймів"
      ],
      [
        "12 inches",
        "12 дюймів"
      ],
      [
        "16 inches",
        "16 дюймів"
      ],
      [
        "18 inches",
        "18 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.5.1 requires top-plate end joints to be offset at least 24 inches. An 18-inch offset does not comply.",
    "explanationUk": "R610.5.1 вимагає зміщення торцевих стиків верхніх дощок щонайменше на 24 дюйми. Зсув 18 дюймів не відповідає вимозі."
  },
  {
    "section": "R610.5.2",
    "difficulty": "medium",
    "question": "How must the sole plate support a SIP wall under R610.5.2?",
    "questionUk": "Як нижня sole plate має підтримувати SIP-стіну за R610.5.2?",
    "answers": [
      [
        "Provide full bearing with a width equal to the nominal foam-core width",
        "Забезпечувати повне опирання та ширину, рівну номінальній ширині пінного ядра"
      ],
      [
        "Support only one facer with a narrow strip",
        "Підтримувати вузькою смугою лише одну обшивку"
      ],
      [
        "Be half the nominal foam-core width",
        "Мати половину номінальної ширини пінного ядра"
      ],
      [
        "Support the wall only at panel corners",
        "Підтримувати стіну лише в кутах панелей"
      ],
      [
        "Leave the foam core unsupported between studs",
        "Залишати пінне ядро без опори між стійками"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.5.2 requires full bearing on a sole plate as wide as the nominal foam core. This bearing rule is separate from foundation anchorage requirements.",
    "explanationUk": "R610.5.2 вимагає повного опирання на нижню дошку завширшки з номінальне пінне ядро. Це окрема вимога від анкерування до фундаменту."
  },
  {
    "section": "R610.5.5",
    "difficulty": "medium",
    "question": "For calculating required wall bracing, which bracing method classification does R610.5.5 assign to SIP walls?",
    "questionUk": "До якого методу розкріплення R610.5.5 відносить SIP-стіни при розрахунку потрібного wall bracing?",
    "answers": [
      [
        "Continuous wood structural panel sheathing, Method CS-WSP",
        "Суцільна обшивка деревними конструкційними плитами, Method CS-WSP"
      ],
      [
        "Gypsum-board bracing, Method GB",
        "Гіпсокартонне розкріплення, Method GB"
      ],
      [
        "Let-in bracing, Method LIB",
        "Врізне розкріплення, Method LIB"
      ],
      [
        "Portland cement plaster, Method PCP",
        "Цементна штукатурка, Method PCP"
      ],
      [
        "No wall bracing classification is assigned",
        "Класифікацію розкріплення не задано"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.5.5 treats SIP walls as continuous wood structural panel sheathing, Method CS-WSP, for bracing calculations under R602.10. SIP-specific corner and attachment requirements also apply.",
    "explanationUk": "R610.5.5 для розрахунку розкріплення за R602.10 прирівнює SIP до суцільної обшивки деревними конструкційними плитами CS-WSP. Також діють спеціальні вимоги SIP до кутів і кріплень."
  },
  {
    "section": "R610.7",
    "difficulty": "exam",
    "question": "Select TWO requirements for prescriptive vertical utility chases in SIP walls under R610.7.",
    "questionUk": "Оберіть ДВІ вимоги R610.7 до приписових вертикальних каналів комунікацій у SIP-стінах.",
    "answers": [
      [
        "Maximum side dimension of 2 inches, centered in the panel",
        "Максимальний бічний розмір 2 дюйми, по центру панелі"
      ],
      [
        "Minimum spacing of 24 inches on center",
        "Мінімальний крок осей 24 дюйми"
      ],
      [
        "Maximum side dimension of 4 inches without analysis",
        "Максимальний бічний розмір 4 дюйми без розрахунку"
      ],
      [
        "Chases may be placed against either facer",
        "Канали можна розміщувати впритул до будь-якої обшивки"
      ],
      [
        "Minimum spacing of 8 inches on center",
        "Мінімальний крок осей 8 дюймів"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R610.7 limits the maximum side dimension to 2 inches and requires the chase to be centered. Vertical chases must be at least 24 inches apart on center; additional penetrations need analysis.",
    "explanationUk": "R610.7 обмежує максимальний бічний розмір 2 дюймами та вимагає центрування каналу. Крок вертикальних каналів — не менше 24 дюймів; додаткові проходи потребують розрахункового обґрунтування."
  },
  {
    "section": "R610.7",
    "difficulty": "exam",
    "question": "Without an analysis supporting additional penetrations, which horizontal-chase arrangement is permitted in one SIP wall panel?",
    "questionUk": "Яке розташування горизонтальних каналів дозволене в одній SIP-панелі без розрахункового обґрунтування додаткових проходів?",
    "answers": [
      [
        "Two chases: one 14 ± 2 inches and one 48 ± 2 inches from the panel bottom",
        "Два канали: на 14 ± 2 та 48 ± 2 дюйми від низу панелі"
      ],
      [
        "Three chases at any convenient heights",
        "Три канали на будь-якій зручній висоті"
      ],
      [
        "Two chases located anywhere in the upper half",
        "Два канали будь-де у верхній половині"
      ],
      [
        "Four chases spaced 12 inches apart",
        "Чотири канали з кроком 12 дюймів"
      ],
      [
        "Two chases both located 6 inches from the top",
        "Два канали на відстані 6 дюймів від верху"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.7 permits no more than two horizontal chases per panel at the specified heights: 14 inches plus or minus 2 and 48 inches plus or minus 2 from the bottom.",
    "explanationUk": "R610.7 дозволяє не більше двох горизонтальних каналів у панелі на заданих висотах: 14 ± 2 та 48 ± 2 дюйми від низу."
  },
  {
    "section": "R610.7",
    "difficulty": "medium",
    "question": "A SIP utility layout needs penetrations beyond the prescriptive chase allowances. What does R610.7 require to permit those additional penetrations?",
    "questionUk": "Схема комунікацій SIP потребує проходів понад приписові допуски для каналів. Що вимагає R610.7 для дозволу цих додаткових проходів?",
    "answers": [
      [
        "Justification by analysis",
        "Розрахункове обґрунтування"
      ],
      [
        "Only the drywall installer's verbal consent",
        "Лише усну згоду монтажника гіпсокартону"
      ],
      [
        "Only a thicker coat of interior paint",
        "Лише товстіший шар внутрішньої фарби"
      ],
      [
        "Only moving the electrical panel outdoors",
        "Лише перенесення електрощита назовні"
      ],
      [
        "Only labeling the openings as temporary",
        "Лише позначення отворів як тимчасових"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.7 expressly permits additional penetrations where justified by analysis. The numerical chase allowances cannot simply be exceeded based on field preference.",
    "explanationUk": "R610.7 прямо дозволяє додаткові проходи за розрахункового обґрунтування. Перевищення числових допусків лише за рішенням монтажника не передбачене."
  },
  {
    "section": "R610.8",
    "difficulty": "medium",
    "question": "A SIP header is made from two panel pieces joined with a spline. Which R610.8 requirement directly rejects this construction?",
    "questionUk": "SIP-перемичку складено з двох частин панелей, з’єднаних шпонкою. Яка вимога R610.8 прямо виключає таку конструкцію?",
    "answers": [
      [
        "SIP headers must be continuous sections without splines",
        "SIP-перемички мають бути суцільними секціями без шпонок"
      ],
      [
        "SIP headers must always contain a central spline",
        "SIP-перемички завжди мають містити центральну шпонку"
      ],
      [
        "Splines are required whenever the header is painted",
        "Шпонки обов’язкові, коли перемичку фарбують"
      ],
      [
        "Only the finish coating controls header continuity",
        "Суцільність перемички визначає лише фінішне покриття"
      ],
      [
        "SIP header continuity is not regulated",
        "Суцільність SIP-перемичок не регулюється"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R610.8 requires SIP headers to be continuous sections without splines. Its minimum depth, span and construction provisions must also be checked; removing a spline alone does not establish full compliance.",
    "explanationUk": "R610.8 вимагає суцільних SIP-перемичок без шпонкових стиків. Також слід перевіряти мінімальну висоту, проліт і конструкцію; усунення шпонки саме по собі не доводить повної відповідності."
  }
];
export const intakeVerified116 = verifiedBatch(1377, "Carpentry", "Structural Wood Products", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg", seeds, "intake-series-115-120", true, "2026-10-22");
