import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "Table R702.4.2",
    "difficulty": "medium",
    "question": "A shower tile specification calls for glass-mat gypsum backing panels. Which table standard matches that material?",
    "questionUk": "Специфікація плитки душу передбачає гіпсові плити зі скломатовим армуванням. Який стандарт таблиці відповідає цьому матеріалу?",
    "answers": [
      [
        "ASTM C1178",
        "Стандарт ASTM C1178"
      ],
      [
        "ASTM C1278",
        "Стандарт ASTM C1278"
      ],
      [
        "ASTM C1288",
        "Стандарт ASTM C1288"
      ],
      [
        "ASTM C1325",
        "Стандарт ASTM C1325"
      ],
      [
        "ASTM C90",
        "Стандарт ASTM C90"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The glass-mat gypsum backing-panel row specifies ASTM C1178.",
    "explanationUk": "Рядок гіпсових плит зі скломатовим армуванням визначає ASTM C1178."
  },
  {
    "section": "Table R702.4.2",
    "difficulty": "medium",
    "question": "A delivered product is a fiber-reinforced gypsum panel intended as a listed shower backer. Which standard corresponds to its table row?",
    "questionUk": "Доставлений виріб — гіпсова плита, армована волокнами, для основи під плитку душу. Який стандарт відповідає її рядку таблиці?",
    "answers": [
      [
        "ASTM C1278",
        "Стандарт ASTM C1278"
      ],
      [
        "ASTM C1178",
        "Стандарт ASTM C1178"
      ],
      [
        "ASTM C1288",
        "Стандарт ASTM C1288"
      ],
      [
        "ASTM C1325",
        "Стандарт ASTM C1325"
      ],
      [
        "ASTM C216",
        "Стандарт ASTM C216"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Fiber-reinforced gypsum panels are listed under ASTM C1278.",
    "explanationUk": "Гіпсові плити, армовані волокнами, зазначені за ASTM C1278."
  },
  {
    "section": "Table R702.4.2",
    "difficulty": "exam",
    "question": "Which TWO standards are alternative compliance identifications in the nonasbestos fiber-cement backer-board row? Select TWO.",
    "questionUk": "Які ДВА стандарти є альтернативними позначеннями відповідності в рядку безазбестової фіброцементної плити-основи? Оберіть ДВА.",
    "answers": [
      [
        "ASTM C1288",
        "Стандарт ASTM C1288"
      ],
      [
        "ISO 8336, Category C",
        "Стандарт ISO 8336, категорія C"
      ],
      [
        "ASTM C1178",
        "Стандарт ASTM C1178"
      ],
      [
        "ISO 8336, any category without qualification",
        "ISO 8336, будь-яка категорія без уточнення"
      ],
      [
        "ASTM C90",
        "Стандарт ASTM C90"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The row permits ASTM C1288 or ISO 8336 specifically in Category C.",
    "explanationUk": "Рядок дозволяє ASTM C1288 або ISO 8336 саме категорії C."
  },
  {
    "section": "Table R702.4.2",
    "difficulty": "medium",
    "question": "Which material matches ASTM C1325 in the shower/tub tile-backer table?",
    "questionUk": "Який матеріал відповідає ASTM C1325 у таблиці основ під плитку душів і ванн?",
    "answers": [
      [
        "Nonasbestos fiber-mat-reinforced cementitious backer units",
        "Безазбестові цементні плити-основи, армовані волокнистим матом"
      ],
      [
        "Glass-mat gypsum backing panels",
        "Гіпсові плити зі скломатовим армуванням"
      ],
      [
        "Fiber-reinforced gypsum panels",
        "Гіпсові плити, армовані волокнами"
      ],
      [
        "Ordinary hardboard paneling",
        "Звичайні тверді деревноволокнисті панелі"
      ],
      [
        "Solid concrete facing brick",
        "Повнотіла бетонна облицювальна цегла"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The cementitious fiber-mat-reinforced backer-unit row specifies ASTM C1325.",
    "explanationUk": "Рядок цементних плит-основ із волокнистим армувальним матом визначає ASTM C1325."
  },
  {
    "section": "R702.4.2",
    "difficulty": "medium",
    "question": "A tub/shower wall backer is listed in Table R702.4.2. What additional installation condition remains?",
    "questionUk": "Основа стіни ванни або душу входить до таблиці R702.4.2. Яка додаткова умова монтажу залишається?",
    "answers": [
      [
        "Install according to the manufacturer's recommendations",
        "Монтувати за рекомендаціями виробника"
      ],
      [
        "Install under any generic floor-panel schedule",
        "Монтувати за будь-яким загальним графіком плит підлоги"
      ],
      [
        "Use any screw spacing without product review",
        "Використовувати будь-який крок шурупів без перевірки виробу"
      ],
      [
        "Omit product instructions once the material is listed",
        "Не враховувати інструкцію, якщо матеріал у переліку"
      ],
      [
        "Use only the mortar's instructions for backer attachment",
        "Використовувати лише інструкцію розчину для кріплення основи"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The material listing and manufacturer-recommended installation are both required; listing alone is insufficient.",
    "explanationUk": "Потрібні і матеріал із переліку, і монтаж за рекомендаціями виробника; самої наявності в таблиці недостатньо."
  },
  {
    "section": "R702.5",
    "difficulty": "easy",
    "question": "Wood-veneer and hardboard interior paneling are attached to framing. What maximum framing spacing applies?",
    "questionUk": "Внутрішні фанеровані та тверді деревноволокнисті панелі прикріплюють до каркаса. Який найбільший крок каркаса дозволений?",
    "answers": [
      [
        "16 inches on center",
        "Крок 16 дюймів по осях"
      ],
      [
        "12 inches on center",
        "Крок 12 дюймів по осях"
      ],
      [
        "20 inches on center",
        "Крок 20 дюймів по осях"
      ],
      [
        "24 inches on center",
        "Крок 24 дюйми по осях"
      ],
      [
        "32 inches on center",
        "Крок 32 дюйми по осях"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "These paneling materials must be on wood or cold-formed steel framing spaced no more than 16 inches on center.",
    "explanationUk": "Такі панелі монтують на дерев’яний або холодногнутий сталевий каркас із кроком не більш як 16 дюймів."
  },
  {
    "section": "R702.5",
    "difficulty": "medium",
    "question": "Interior wood-veneer paneling is 3/16 inch nominal thickness. What minimum gypsum backer is required?",
    "questionUk": "Внутрішня фанерована панель має номінальну товщину 3/16 дюйма. Яка мінімальна гіпсова основа потрібна?",
    "answers": [
      [
        "⅜ inch",
        "⅜ дюйма"
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
        "5/16 inch",
        "5/16 дюйма"
      ],
      [
        "No backer under this thin-panel rule",
        "Основа за цим правилом тонких панелей не потрібна"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Paneling thinner than ¼ inch nominal requires at least a ⅜-inch gypsum board or gypsum panel-product backer.",
    "explanationUk": "Панелі номінально тонші за ¼ дюйма потребують гіпсокартонної або іншої гіпсової основи щонайменше ⅜ дюйма."
  },
  {
    "section": "R702.6",
    "difficulty": "medium",
    "question": "Interior wood shakes or shingles are installed directly to studs. What maximum stud spacing applies to this permitted method?",
    "questionUk": "Внутрішню дерев’яну дранку або гонтові пластини монтують безпосередньо на стійки. Який найбільший крок стійок для цього способу?",
    "answers": [
      [
        "24 inches on center",
        "Крок 24 дюйми по осях"
      ],
      [
        "12 inches on center",
        "Крок 12 дюймів по осях"
      ],
      [
        "16 inches on center",
        "Крок 16 дюймів по осях"
      ],
      [
        "32 inches on center",
        "Крок 32 дюйми по осях"
      ],
      [
        "48 inches on center",
        "Крок 48 дюймів по осях"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "R702.6 permits direct installation to studs at no more than 24 inches on center, with the named CSSB grading rules.",
    "explanationUk": "R702.6 дозволяє прямий монтаж на стійки з кроком не більш як 24 дюйми за зазначених правил сортування CSSB."
  },
  {
    "section": "R702.6.1",
    "difficulty": "medium",
    "question": "Nails or staples attach interior shakes/shingles. Which fastener count and concealment detail is required per unit?",
    "questionUk": "Цвяхами або скобами кріплять внутрішню дранку чи гонтові пластини. Яка кількість кріплень і спосіб їх закриття потрібні для кожного виробу?",
    "answers": [
      [
        "Two fasteners, covered by the course above",
        "Два кріплення, закриті верхнім рядом"
      ],
      [
        "One fastener, always exposed",
        "Одне кріплення, завжди відкрите"
      ],
      [
        "Two fasteners, always below the next course",
        "Два кріплення, завжди нижче наступного ряду"
      ],
      [
        "Three fasteners, all exposed",
        "Три кріплення, всі відкриті"
      ],
      [
        "One fastener at each fourth unit only",
        "Одне кріплення лише на кожному четвертому виробі"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Where nails or staples are used, two fasteners are provided and positioned to be covered by the course above.",
    "explanationUk": "Якщо використовують цвяхи або скоби, ставлять два кріплення й розташовують їх так, щоб верхній ряд їх закривав."
  },
  {
    "section": "R702.6.2",
    "difficulty": "medium",
    "question": "Which TWO furring-strip dimensions are listed for interior wood shakes and shingles? Select TWO.",
    "questionUk": "Які ДВА розміри рейок основи зазначені для внутрішньої дранки й гонтових пластин? Оберіть ДВА.",
    "answers": [
      [
        "1 × 2 inches",
        "Розмір 1 × 2 дюйми"
      ],
      [
        "1 × 3 inches",
        "Розмір 1 × 3 дюйми"
      ],
      [
        "½ × 1 inch",
        "Розмір ½ × 1 дюйм"
      ],
      [
        "½ × 2 inches",
        "Розмір ½ × 2 дюйми"
      ],
      [
        "1 × 1 inch",
        "Розмір 1 × 1 дюйм"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "R702.6.2 lists 1×2 or 1×3 furring strips.",
    "explanationUk": "R702.6.2 зазначає рейки 1×2 або 1×3 дюйми."
  },
  {
    "section": "R702.6.2",
    "difficulty": "exam",
    "question": "The desired exposure of interior wood shingles is 5 inches. Under the furring-strip rule, what on-center strip spacing follows?",
    "questionUk": "Бажана відкрита висота внутрішніх гонтових пластин становить 5 дюймів. Який осьовий крок рейок випливає з відповідного правила?",
    "answers": [
      [
        "5 inches",
        "5 дюймів"
      ],
      [
        "2½ inches",
        "2½ дюйма"
      ],
      [
        "4 inches",
        "4 дюйми"
      ],
      [
        "10 inches",
        "10 дюймів"
      ],
      [
        "16 inches",
        "16 дюймів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Furring-strip on-center spacing equals the desired exposure; 5-inch exposure gives 5-inch spacing.",
    "explanationUk": "Осьовий крок рейок дорівнює бажаній відкритій висоті; 5 дюймів відкритої частини дають крок 5 дюймів."
  },
  {
    "section": "R702.6.2",
    "difficulty": "medium",
    "question": "Furring strips for interior shakes are installed over another wall material. Where must their attachment nails penetrate?",
    "questionUk": "Рейки для внутрішньої дранки монтують поверх іншого матеріалу стіни. Куди мають входити їхні кріпильні цвяхи?",
    "answers": [
      [
        "Through the other wall material into studs",
        "Крізь інший матеріал стіни у стійки"
      ],
      [
        "Only into the surface finish coat",
        "Лише у фінішний шар поверхні"
      ],
      [
        "Only into the paper face of gypsum board",
        "Лише в паперову поверхню гіпсокартону"
      ],
      [
        "Only into neighboring shakes",
        "Лише в сусідні пластини дранки"
      ],
      [
        "Only into the insulation",
        "Лише в утеплювач"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Furring is attached by nailing through other wall material into the studs, not merely into the finish.",
    "explanationUk": "Рейки прикріплюють цвяхами крізь інший матеріал стіни у стійки, а не лише в оздоблення."
  }
];
export const intakeVerified76 = verifiedBatch(897, "Interior Finishes", "Drywall", "2018 IRC as adopted by Minnesota", "mn-code-book", "https://codes.iccsafe.org/content/NYSRC2020P1/chapter-7-wall-covering", seeds, "intake-series-73-78", true);

