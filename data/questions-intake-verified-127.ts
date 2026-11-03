import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "29 CFR 1926.351(a)(1)",
    "difficulty": "medium",
    "question": "What current must a manual arc-welding electrode holder safely handle?",
    "questionUk": "Який струм має безпечно витримувати ручний електродотримач дугового зварювання?",
    "answers": [
      [
        "Maximum rated current required by the electrodes",
        "Максимальний номінальний струм електродів"
      ],
      [
        "Only half the electrode current",
        "Лише половину струму електродів"
      ],
      [
        "Only the machine's idle current",
        "Лише струм холостого ходу апарата"
      ],
      [
        "Any current if the handle is dry",
        "Будь-який струм за сухої ручки"
      ],
      [
        "Only the circuit's lighting load",
        "Лише навантаження освітлення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The holder must be designed for arc work and rated for the electrodes' maximum required current.",
    "explanationUk": "Тримач має бути призначений для дугових робіт і розрахований на максимальний потрібний струм електродів."
  },
  {
    "section": "29 CFR 1926.351(a)(2)",
    "difficulty": "medium",
    "question": "Which electrode-holder surfaces require full insulation against maximum voltage to ground?",
    "questionUk": "Які поверхні електродотримача потребують повної ізоляції проти максимальної напруги відносно землі?",
    "answers": [
      [
        "Current-carrying parts through the handgrip and outer jaw surfaces",
        "Струмовідні частини в зоні руків’я та зовнішні поверхні губок"
      ],
      [
        "Only the manufacturer's label",
        "Лише етикетка виробника"
      ],
      [
        "Only the cable's storage reel",
        "Лише котушка кабелю"
      ],
      [
        "Only the metal workpiece",
        "Лише металева заготовка"
      ],
      [
        "Only the welding table legs",
        "Лише ніжки зварювального стола"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The handgrip's current-carrying parts and the jaws' outer surfaces require full insulation.",
    "explanationUk": "Повної ізоляції потребують струмовідні частини руків’я та зовнішні поверхні губок."
  },
  {
    "section": "29 CFR 1926.351(b)(1)",
    "difficulty": "medium",
    "question": "What operating factor must be considered when sizing flexible, fully insulated arc-welding cables?",
    "questionUk": "Який робочий фактор слід враховувати при виборі повністю ізольованих гнучких зварювальних кабелів?",
    "answers": [
      [
        "Duty cycle as well as maximum current",
        "Робочий цикл разом із максимальним струмом"
      ],
      [
        "Only cable color",
        "Лише колір кабелю"
      ],
      [
        "Only the purchase date",
        "Лише дату придбання"
      ],
      [
        "Only the electrode brand",
        "Лише марку електрода"
      ],
      [
        "Only storage temperature",
        "Лише температуру зберігання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Cable capacity must meet the work's maximum current requirements with the duty cycle considered.",
    "explanationUk": "Пропускна здатність кабелю має відповідати максимальному струму роботи з урахуванням робочого циклу."
  },
  {
    "section": "29 CFR 1926.351(b)(2)",
    "difficulty": "medium",
    "question": "A splice lies 6 feet from an electrode holder and has insulation equal to the cable's insulation. Is it automatically prohibited by the 10-foot rule?",
    "questionUk": "Стик розміщено за 6 футів від електродотримача й ізольовано рівноцінно кабелю. Чи автоматично забороняє його правило 10 футів?",
    "answers": [
      [
        "No; equal-quality insulated splices are an express exception",
        "Ні; рівноцінно ізольовані стики прямо дозволені винятком"
      ],
      [
        "Yes; all splices within 10 feet are prohibited without exception",
        "Так; усі стики в межах 10 футів заборонені без винятків"
      ],
      [
        "Yes; only bare splices are allowed there",
        "Так; там дозволені лише неізольовані стики"
      ],
      [
        "No; insulation is never required",
        "Ні; ізоляція взагалі не потрібна"
      ],
      [
        "Yes; the exception applies only beyond 20 feet",
        "Так; виняток діє лише далі 20 футів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The 10-foot restriction expressly excepts standard insulated connectors and splices of equal insulating quality.",
    "explanationUk": "Правило 10 футів прямо допускає стандартні ізольовані з’єднувачі та стики з рівноцінною ізоляцією."
  },
  {
    "section": "29 CFR 1926.351(b)(3)",
    "difficulty": "medium",
    "question": "A welding cable needs an insulated extension connector. What minimum capacity must that connector have?",
    "questionUk": "Зварювальний кабель потребує ізольованого подовжувального з’єднувача. Яка мінімальна пропускна здатність потрібна?",
    "answers": [
      [
        "At least the cable's capacity",
        "Не менша за здатність кабелю"
      ],
      [
        "Half the cable's capacity",
        "Половина здатності кабелю"
      ],
      [
        "One-quarter of the cable's capacity",
        "Чверть здатності кабелю"
      ],
      [
        "Only the holder's idle current",
        "Лише струм холостого ходу тримача"
      ],
      [
        "No rating if the connector is taped",
        "Без номіналу, якщо з’єднувач обмотано"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Substantial insulated connectors must have capacity at least equivalent to the cable.",
    "explanationUk": "Надійні ізольовані з’єднувачі повинні мати пропускну здатність щонайменше рівну кабелю."
  },
  {
    "section": "29 CFR 1926.351(c)(1)",
    "difficulty": "medium",
    "question": "One return cable serves welding units with maximum outputs of 180 A and 220 A. What minimum current capacity is required?",
    "questionUk": "Один зворотний кабель обслуговує апарати з максимальними струмами 180 A і 220 A. Яка мінімальна пропускна здатність потрібна?",
    "answers": [
      [
        "400 amperes",
        "400 амперів"
      ],
      [
        "180 amperes",
        "180 амперів"
      ],
      [
        "200 amperes",
        "200 амперів"
      ],
      [
        "220 amperes",
        "220 амперів"
      ],
      [
        "300 amperes",
        "300 амперів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A shared return cable must handle the sum of maximum outputs: 180 + 220 = 400 A.",
    "explanationUk": "Спільний зворотний кабель має витримувати суму максимальних струмів: 180 + 220 = 400 A."
  },
  {
    "section": "29 CFR 1926.351(c)(2)",
    "difficulty": "medium",
    "question": "May a conduit containing electrical circuits serve as an arc-welding ground return?",
    "questionUk": "Чи може труба з електричними колами служити зворотним шляхом струму дугового зварювання?",
    "answers": [
      [
        "No; that use is prohibited",
        "Ні; таке використання заборонено"
      ],
      [
        "Yes, whenever metallic",
        "Так, якщо труба металева"
      ],
      [
        "Yes, with the owner's oral consent",
        "Так, за усної згоди власника"
      ],
      [
        "Yes, below 200 amperes",
        "Так, нижче 200 амперів"
      ],
      [
        "Yes, if the conduit is painted",
        "Так, якщо труба пофарбована"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Conduits containing electrical circuits cannot serve as ground returns; gas and flammable-liquid pipelines are also prohibited.",
    "explanationUk": "Труби з електричними колами не можна використовувати для зворотного струму; трубопроводи газу й легкозаймистих рідин також заборонені."
  },
  {
    "section": "29 CFR 1926.351(c)(3)",
    "difficulty": "medium",
    "question": "A structure used as a welding return develops sparks at a joint. What must happen to its use as a return circuit?",
    "questionUk": "На стику конструкції, використаної для зворотного струму, з’являються іскри. Що слід зробити з її використанням у колі?",
    "answers": [
      [
        "Reject it as a ground-return circuit",
        "Відхилити її як зворотне коло"
      ],
      [
        "Continue if the arc is small",
        "Продовжити, якщо дуга мала"
      ],
      [
        "Increase the welding current",
        "Збільшити зварювальний струм"
      ],
      [
        "Ignore it until the next shift",
        "Ігнорувати до наступної зміни"
      ],
      [
        "Cover the sparks with paper",
        "Прикрити іскри папером"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Arcs, sparks or heat at any point require rejecting the structure as a ground circuit.",
    "explanationUk": "Дуга, іскри чи нагрівання в будь-якій точці вимагають відхилення конструкції як зворотного кола."
  },
  {
    "section": "29 CFR 1926.351(d)(1)",
    "difficulty": "medium",
    "question": "How must an electrode holder be left unattended?",
    "questionUk": "Як слід залишати електродотримач без нагляду?",
    "answers": [
      [
        "Remove the electrode and prevent contact with people or conducting objects",
        "Зняти електрод і запобігти контакту з людьми чи провідними предметами"
      ],
      [
        "Leave the electrode clamped against a metal table",
        "Залишити електрод притиснутим до металевого стола"
      ],
      [
        "Place it in a water bucket",
        "Покласти у відро води"
      ],
      [
        "Leave the electrode touching a pipe",
        "Залишити електрод на трубі"
      ],
      [
        "Hang it from an exposed conductor",
        "Підвісити на оголеному провіднику"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Remove electrodes and place or protect unattended holders against electrical contact.",
    "explanationUk": "Електроди знімають, а залишені тримачі розміщують чи захищають від електричного контакту."
  },
  {
    "section": "29 CFR 1926.351(d)(2)",
    "difficulty": "medium",
    "question": "A hot electrode holder needs cooling. May it be dipped in water?",
    "questionUk": "Гарячий електродотримач потрібно охолодити. Чи можна занурити його у воду?",
    "answers": [
      [
        "No; dipping a hot holder in water is prohibited",
        "Ні; занурення гарячого тримача у воду заборонено"
      ],
      [
        "Yes, if gloves are worn",
        "Так, у рукавицях"
      ],
      [
        "Yes, if the water is clean",
        "Так, якщо вода чиста"
      ],
      [
        "Yes, below 100 amperes",
        "Так, нижче 100 амперів"
      ],
      [
        "Yes, whenever the holder is insulated",
        "Так, якщо тримач ізольований"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Hot holders must not be dipped in water because this may expose the operator to electric shock.",
    "explanationUk": "Гарячі тримачі не можна занурювати у воду через можливе ураження оператора струмом."
  },
  {
    "section": "29 CFR 1926.351(d)(3)",
    "difficulty": "medium",
    "question": "Before moving an arc-welding machine, what must be done to its power-supply switch?",
    "questionUk": "Що потрібно зробити з вимикачем живлення перед переміщенням дугового зварювального апарата?",
    "answers": [
      [
        "Open the switch to disconnect the supply",
        "Розімкнути вимикач для відключення живлення"
      ],
      [
        "Leave it closed if cables remain attached",
        "Залишити замкненим за під’єднаних кабелів"
      ],
      [
        "Increase current to its maximum",
        "Підняти струм до максимуму"
      ],
      [
        "Only remove the equipment label",
        "Лише зняти етикетку обладнання"
      ],
      [
        "Only turn off nearby lighting",
        "Лише вимкнути сусіднє освітлення"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The supply switch must be opened before moving the machine and during appreciable work interruptions.",
    "explanationUk": "Вимикач живлення розмикають перед переміщенням апарата та при суттєвих перервах роботи."
  },
  {
    "section": "29 CFR 1926.351(e)",
    "difficulty": "medium",
    "question": "Whenever practicable, what shielding protects nearby people from direct arc rays?",
    "questionUk": "Яке екранування за можливості захищає людей поруч від прямих променів дуги?",
    "answers": [
      [
        "Noncombustible or flameproof screens",
        "Негорючі або вогнестійкі екрани"
      ],
      [
        "Untreated paper screens",
        "Екрани з необробленого паперу"
      ],
      [
        "Only a rope perimeter",
        "Лише огорожа мотузкою"
      ],
      [
        "Only a verbal warning",
        "Лише усне попередження"
      ],
      [
        "Only clear household plastic",
        "Лише прозорий побутовий пластик"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Use noncombustible or flameproof screens whenever practicable to protect nearby people from direct arc rays.",
    "explanationUk": "За можливості застосовують негорючі чи вогнестійкі екрани для захисту людей поруч від прямих променів дуги."
  }
];
export const intakeVerified127 = verifiedBatch(1509, "Job Site Safety", "Job Site Safety", "OSHA 29 CFR 1926", "osha", "https://www.ecfr.gov/current/title-29/section-1926.351", seeds, "intake-series-127-132", false, "2026-11-02");
