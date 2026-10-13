import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "2012 IECC R403.1.1; Minn. R. 1322.0010",
    "difficulty": "medium",
    "question": "A dwelling's primary heat comes from a forced-air furnace. What scheduling capability must at least one thermostat provide under the adopted 2012 energy rule?",
    "questionUk": "Основне опалення житла забезпечує повітряна піч. Яке програмування має забезпечувати щонайменше один термостат за прийнятою енергетичною нормою 2012 року?",
    "answers": [
      [
        "Different temperature set points at different times on a daily schedule",
        "Різні задані температури в різний час добового графіка"
      ],
      [
        "Only one fixed temperature with no scheduling",
        "Лише одну сталу температуру без графіка"
      ],
      [
        "Only a monthly utility-cost limit",
        "Лише місячний ліміт витрат на енергію"
      ],
      [
        "Only manual on/off control",
        "Лише ручне ввімкнення й вимкнення"
      ],
      [
        "Only outdoor-temperature display",
        "Лише показ зовнішньої температури"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For a primary forced-air furnace, at least one thermostat must support daily scheduling with different temperature set points.",
    "explanationUk": "За основної повітряної печі щонайменше один термостат має підтримувати добовий графік різних заданих температур."
  },
  {
    "section": "2012 IECC R403.1.1",
    "difficulty": "medium",
    "question": "Which initial thermostat pair meets the adopted programmable-thermostat limits for a primary forced-air furnace?",
    "questionUk": "Яка пара початкових налаштувань термостата відповідає прийнятим межам для основної повітряної печі?",
    "answers": [
      [
        "Heating 70°F; cooling 78°F",
        "Опалення 70°F; охолодження 78°F"
      ],
      [
        "Heating 72°F; cooling 78°F",
        "Опалення 72°F; охолодження 78°F"
      ],
      [
        "Heating 70°F; cooling 76°F",
        "Опалення 70°F; охолодження 76°F"
      ],
      [
        "Heating 72°F; cooling 76°F",
        "Опалення 72°F; охолодження 76°F"
      ],
      [
        "Heating 75°F; cooling 80°F",
        "Опалення 75°F; охолодження 80°F"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Initial heating must be no higher than 70°F and cooling no lower than 78°F.",
    "explanationUk": "Початкове налаштування опалення має бути не вище 70°F, а охолодження — не нижче 78°F."
  },
  {
    "section": "2012 IECC R403.1.1",
    "difficulty": "exam",
    "question": "The required programmable thermostat will be checked for setback/setup capability. Which endpoint pair is specified?",
    "questionUk": "Обов’язковий програмований термостат перевіряють на можливість зниження й підвищення заданої температури. Яка пара крайніх значень установлена?",
    "answers": [
      [
        "Down to 55°F and up to 85°F",
        "До 55°F униз і до 85°F угору"
      ],
      [
        "Down to 60°F and up to 80°F",
        "До 60°F униз і до 80°F угору"
      ],
      [
        "Down to 65°F and up to 75°F",
        "До 65°F униз і до 75°F угору"
      ],
      [
        "Down to 70°F and up to 78°F",
        "До 70°F униз і до 78°F угору"
      ],
      [
        "Down to 50°F and up to 70°F",
        "До 50°F униз і до 70°F угору"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The required capability reaches 55°F for setback and 85°F for setup; these are capability endpoints, not the initial settings.",
    "explanationUk": "Потрібна можливість зниження до 55°F і підвищення до 85°F; це межі можливостей, а не початкові налаштування."
  },
  {
    "section": "2012 IECC R403.1.2",
    "difficulty": "medium",
    "question": "Outside defrost operation, a heat-pump compressor can meet the heating load. How must its supplemental electric-resistance heat be controlled?",
    "questionUk": "Поза режимом розморожування компресор теплового насоса може забезпечити потрібне опалення. Як має керуватися додатковий електронагрів?",
    "answers": [
      [
        "Controls must prevent supplemental heat operation",
        "Керування має не допускати роботи додаткового нагріву"
      ],
      [
        "Resistance heat must run continuously",
        "Електронагрів має працювати постійно"
      ],
      [
        "Resistance heat must always replace the compressor",
        "Електронагрів завжди має замінювати компресор"
      ],
      [
        "Only the occupant's verbal instructions are needed",
        "Достатньо усних вказівок мешканця"
      ],
      [
        "No control is required if the house is insulated",
        "Керування не потрібне в утепленому будинку"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Except during defrost, supplemental resistance heat is prevented when the compressor can satisfy the load.",
    "explanationUk": "Крім розморожування, додатковий електронагрів блокують, коли компресор може покрити навантаження."
  },
  {
    "section": "2012 IECC R403.1.2 Exception",
    "difficulty": "exam",
    "question": "Which condition is expressly excepted from the heat-pump control rule that prevents unnecessary supplemental resistance heating?",
    "questionUk": "Яку умову прямо виключено з вимоги керування тепловим насосом, що блокує непотрібний додатковий електронагрів?",
    "answers": [
      [
        "Defrost operation",
        "Режим розморожування"
      ],
      [
        "Every nighttime period",
        "Кожен нічний період"
      ],
      [
        "Any outdoor temperature below 50°F",
        "Будь-яку зовнішню температуру нижче 50°F"
      ],
      [
        "Any request to heat faster",
        "Будь-яке бажання швидше нагріти"
      ],
      [
        "Every cooling cycle",
        "Кожен цикл охолодження"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The explicit exception is during defrost; the other listed conditions do not establish this exception.",
    "explanationUk": "Прямий виняток діє під час розморожування; інші перелічені умови його не встановлюють."
  },
  {
    "section": "2012 IECC R403.3",
    "difficulty": "medium",
    "question": "Mechanical-system piping is capable of carrying 120°F fluid. What minimum insulation R-value applies under R403.3?",
    "questionUk": "Трубопровід механічної системи може переносити рідину 120°F. Яке мінімальне значення теплоізоляції R потрібне за R403.3?",
    "answers": [
      [
        "R-3",
        "Тепловий опір R-3"
      ],
      [
        "R-1",
        "Тепловий опір R-1"
      ],
      [
        "R-2",
        "Тепловий опір R-2"
      ],
      [
        "R-4.2",
        "Тепловий опір R-4,2"
      ],
      [
        "R-8",
        "Тепловий опір R-8"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Piping capable of carrying fluid above 105°F or below 55°F requires at least R-3; 120°F exceeds the upper threshold.",
    "explanationUk": "Для труб, здатних переносити рідину понад 105°F або нижче 55°F, потрібно щонайменше R-3; 120°F перевищує верхню межу."
  },
  {
    "section": "2012 IECC R403.3.1",
    "difficulty": "medium",
    "question": "Which THREE are listed damage sources from which weather-exposed piping insulation must be protected? Select THREE.",
    "questionUk": "Від яких ТРЬОХ перелічених джерел пошкоджень слід захищати теплоізоляцію труб, відкриту погоді? Оберіть ТРИ.",
    "answers": [
      [
        "Sunlight",
        "Сонячного світла"
      ],
      [
        "Moisture",
        "Вологи"
      ],
      [
        "Wind",
        "Вітру"
      ],
      [
        "The pipe's identification color itself",
        "Самого кольору маркування труби"
      ],
      [
        "The thermostat's daily schedule",
        "Добового графіка термостата"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The rule includes sunlight, moisture, equipment maintenance and wind. Solar shielding is required; adhesive tape is not permitted.",
    "explanationUk": "Правило охоплює сонячне світло, вологу, обслуговування обладнання й вітер. Потрібен захист від сонячного випромінювання; клейка стрічка не дозволена."
  },
  {
    "section": "2012 IECC R403.8",
    "difficulty": "exam",
    "question": "An energy-supplied driveway snow-melt system has pavement at 52°F and no falling precipitation. What shutoff capability is required?",
    "questionUk": "Система танення снігу на під’їзді використовує енергію будівлі; покриття має 52°F, опади не падають. Яка можливість вимкнення потрібна?",
    "answers": [
      [
        "Automatic shutdown under these conditions",
        "Автоматичне вимкнення за цих умов"
      ],
      [
        "Manual shutdown only, with no automatic control",
        "Лише ручне вимкнення без автоматики"
      ],
      [
        "No shutdown until pavement exceeds 60°F",
        "Вимкнення лише після перевищення 60°F покриттям"
      ],
      [
        "Shutdown only when outdoor air exceeds 50°F",
        "Вимкнення лише за зовнішнього повітря понад 50°F"
      ],
      [
        "Continued operation whenever pavement is wet",
        "Постійна робота, коли покриття мокре"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The automatic control must shut off when pavement is above 50°F and precipitation is not falling.",
    "explanationUk": "Автоматичне керування має вимкнути систему, коли покриття тепліше за 50°F і опади не падають."
  },
  {
    "section": "2012 IECC R403.8",
    "difficulty": "medium",
    "question": "Besides its pavement-temperature automatic control, a snow-melt system needs shutoff capability when outdoor air exceeds what temperature?",
    "questionUk": "Крім автоматичного керування за температурою покриття, при якій зовнішній температурі система танення снігу потребує можливості вимкнення?",
    "answers": [
      [
        "40°F",
        "Температура 40°F"
      ],
      [
        "32°F",
        "Температура 32°F"
      ],
      [
        "35°F",
        "Температура 35°F"
      ],
      [
        "50°F",
        "Температура 50°F"
      ],
      [
        "55°F",
        "Температура 55°F"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A separate automatic or manual control must allow shutoff when outdoor temperature exceeds 40°F.",
    "explanationUk": "Окреме автоматичне або ручне керування має дозволяти вимкнення, коли зовнішня температура перевищує 40°F."
  },
  {
    "section": "2012 IECC R403.9.1",
    "difficulty": "medium",
    "question": "A pool heater can be stopped only by changing its thermostat setting. What additional control is required?",
    "questionUk": "Нагрівач басейну можна зупинити лише зміною термостата. Який додатковий елемент керування потрібний?",
    "answers": [
      [
        "A readily accessible on/off switch outside the heater",
        "Легкодоступний вимикач поза нагрівачем"
      ],
      [
        "A locked disconnect accessible only to the manufacturer",
        "Заблокований роз’єднувач, доступний лише виробнику"
      ],
      [
        "A thermostat fixed at the maximum temperature",
        "Термостат, зафіксований на максимумі"
      ],
      [
        "Only a timer with no on/off capability",
        "Лише таймер без можливості ввімкнення й вимкнення"
      ],
      [
        "A switch located inside the heater casing only",
        "Вимикач лише всередині корпуса нагрівача"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The heater must have a readily accessible external on/off switch so shutting off does not require changing the thermostat.",
    "explanationUk": "Нагрівач має мати легкодоступний зовнішній вимикач, щоб вимкнення не вимагало зміни термостата."
  },
  {
    "section": "2012 IECC R403.9.1",
    "difficulty": "easy",
    "question": "Which ignition arrangement is prohibited for a natural-gas-fired pool heater under the adopted energy provision?",
    "questionUk": "Який спосіб запалювання заборонений для газового нагрівача басейну за прийнятим енергетичним положенням?",
    "answers": [
      [
        "A continuously burning pilot light",
        "Постійно запалений пілотний пальник"
      ],
      [
        "An ignition source that operates on demand",
        "Запалювання, що працює за потреби"
      ],
      [
        "Electronic ignition with automatic shutoff",
        "Електронне запалювання з автоматичним вимкненням"
      ],
      [
        "An external accessible heater switch",
        "Доступний зовнішній вимикач нагрівача"
      ],
      [
        "A timed heater control",
        "Керування нагрівачем за таймером"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Natural-gas pool heaters may not have continuously burning pilot lights.",
    "explanationUk": "Нагрівачі басейнів на природному газі не можуть мати постійно запалений пілотний пальник."
  },
  {
    "section": "2012 IECC R403.9.2 Exception 1",
    "difficulty": "exam",
    "question": "Public-health standards require a pool pump to operate 24 hours per day. How does the time-switch requirement apply to that pump?",
    "questionUk": "Санітарні норми вимагають цілодобової роботи насоса басейну. Як до цього насоса застосовується вимога вимикача за часом?",
    "answers": [
      [
        "It qualifies for the stated pump time-switch exception",
        "Він підпадає під зазначений виняток щодо часових вимикачів насосів"
      ],
      [
        "It must stop for at least 8 hours regardless of health requirements",
        "Він має зупинятися щонайменше на 8 годин попри санітарні вимоги"
      ],
      [
        "Its heater also becomes exempt from every energy rule",
        "Його нагрівач також звільняється від усіх енергетичних норм"
      ],
      [
        "It must use a continuously burning pilot",
        "Він має використовувати постійний пілотний пальник"
      ],
      [
        "The exception applies only to decorative fountains",
        "Виняток стосується лише декоративних фонтанів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The time-switch exceptions include pumps required by public-health standards to run 24 hours. Other heater requirements are not waived.",
    "explanationUk": "Винятки щодо часових вимикачів включають насоси з обов’язковою цілодобовою роботою за санітарними нормами. Інші вимоги до нагрівача не скасовуються."
  }
];
export const intakeVerified71 = verifiedBatch(837, "Energy Code", "Insulation / Energy", "Minnesota Rules Chapter 1322 / 2012 IECC", "mn-energy-code", "https://www.energycodes.gov/sites/default/files/2019-09/2012iecc_residential_BECU.pdf", seeds, "intake-series-67-72", false);

