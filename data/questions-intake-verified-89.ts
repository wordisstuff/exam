import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "325G.06 subd. 2",
    "difficulty": "medium",
    "question": "All other definition conditions are met and no exclusion applies. Which price exceeds the Minnesota home-solicitation-sale threshold?",
    "questionUk": "Інші умови визначення виконані, винятків немає. Яка ціна перевищує поріг домашнього продажу за законом Minnesota?",
    "answers": [
      [
        "$26",
        "26 доларів"
      ],
      [
        "$25",
        "25 доларів"
      ],
      [
        "$24",
        "24 долари"
      ],
      [
        "$20",
        "20 доларів"
      ],
      [
        "$10",
        "10 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The definition requires a purchase price more than $25, not $25 or more. It covers qualifying goods, services and real-property improvements for personal/family/household use.",
    "explanationUk": "Визначення потребує ціни понад $25, а не від $25. Воно охоплює відповідні товари, послуги й поліпшення нерухомості для особистого чи сімейного використання.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.06"
  },
  {
    "section": "325G.06 subd. 2(3)",
    "difficulty": "exam",
    "question": "A homeowner requests only repair of a sticking door. During that visit, the contractor separately sells new kitchen cabinets. Does the requested-repair exclusion automatically cover the cabinet sale?",
    "questionUk": "Власник замовив лише ремонт дверей, що заїдають. Під час візиту підрядник окремо продав нові кухонні шафи. Чи автоматично охоплює їх виняток замовленого ремонту?",
    "answers": [
      [
        "No; added goods/services beyond necessary repair parts are not within that exclusion",
        "Ні; додаткові товари чи послуги поза потрібними запчастинами не охоплені цим винятком"
      ],
      [
        "Yes; everything sold during the visit is excluded",
        "Так; усе продане під час візиту виключено"
      ],
      [
        "Yes; if the same salesperson handles both",
        "Так; якщо продавець той самий"
      ],
      [
        "Yes; if payment is by card",
        "Так; за оплати карткою"
      ],
      [
        "Yes; if the owner initially called",
        "Так; якщо першим зателефонував власник"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The repair/maintenance exclusion does not extend to additional goods or services other than replacement parts necessarily used for that repair or maintenance.",
    "explanationUk": "Виняток ремонту чи обслуговування не охоплює додаткові товари або послуги, крім запчастин, необхідних для цього ремонту чи обслуговування.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.06"
  },
  {
    "section": "325G.06 subd. 2(2)",
    "difficulty": "exam",
    "question": "A buyer initiates contact for a genuine immediate personal emergency. Which statement meets the emergency exclusion's documentation requirement?",
    "questionUk": "Покупець сам звернувся через справжню невідкладну особисту аварію. Яка заява відповідає документальній умові аварійного винятку?",
    "answers": [
      [
        "A separate dated, signed buyer statement, not furnished by the seller, describing the emergency and expressly acknowledging and waiving cancellation",
        "Окрема датована й підписана заява покупця, не надана продавцем, з описом аварії та прямим усвідомленням і відмовою від скасування"
      ],
      [
        "Only a seller-provided checkbox saying urgent",
        "Лише позначка терміново у формі продавця"
      ],
      [
        "Only the seller's oral statement",
        "Лише усне твердження продавця"
      ],
      [
        "Only an invoice marked emergency",
        "Лише рахунок із написом аварія"
      ],
      [
        "Only a neighbor's signature",
        "Лише підпис сусіда"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The exclusion requires that separate buyer statement and additional conditions: good-faith substantial performance before cancellation and, for goods, inability to return them in substantially as good condition.",
    "explanationUk": "Виняток потребує такої окремої заяви та додаткових умов: добросовісного істотного початку виконання до скасування, а для товарів — неможливості повернути їх у практично тому самому стані.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.06"
  },
  {
    "section": "325G.07; 325G.06 subd. 6",
    "difficulty": "exam",
    "question": "A covered home solicitation sale occurs Thursday. All following weekdays are nonholidays and proper notices were given. When does the ordinary cancellation period end?",
    "questionUk": "Охоплений домашній продаж відбувся в четвер. Усі наступні будні не є святами, належні повідомлення надані. Коли закінчується звичайний строк скасування?",
    "answers": [
      [
        "Midnight Tuesday",
        "Опівночі вівторка"
      ],
      [
        "Midnight Friday",
        "Опівночі п’ятниці"
      ],
      [
        "Midnight Saturday",
        "Опівночі суботи"
      ],
      [
        "Midnight Sunday",
        "Опівночі неділі"
      ],
      [
        "Midnight Monday",
        "Опівночі понеділка"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Count business days after the sale: Friday 1, Monday 2, Tuesday 3. Minnesota excludes Saturdays, Sundays and defined holidays.",
    "explanationUk": "Рахують робочі дні після продажу: п’ятниця — 1, понеділок — 2, вівторок — 3. Minnesota виключає суботи, неділі й визначені свята.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.07"
  },
  {
    "section": "325G.07",
    "difficulty": "medium",
    "question": "A timely cancellation is mailed to the seller's stated address, properly addressed with prepaid postage. When is that mailed notice effective?",
    "questionUk": "Своєчасне скасування правильно адресоване продавцю за зазначеною адресою, поштові витрати сплачені. Коли повідомлення поштою набуває чинності?",
    "answers": [
      [
        "When deposited in a mailbox",
        "Коли його опущено до поштової скриньки"
      ],
      [
        "Only when the seller opens it",
        "Лише коли продавець відкриє"
      ],
      [
        "Only when the seller signs consent",
        "Лише після згоди продавця"
      ],
      [
        "Only when a judge receives it",
        "Лише після отримання суддею"
      ],
      [
        "Only when the bank reverses payment",
        "Лише після повернення оплати банком"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Properly addressed, postage-prepaid mailed cancellation is effective upon mailbox deposit, not seller receipt.",
    "explanationUk": "Правильно адресоване скасування з оплаченою пересилкою діє з моменту опускання до поштової скриньки, а не отримання продавцем.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.07"
  },
  {
    "section": "325G.07",
    "difficulty": "medium",
    "question": "A buyer sends a timely handwritten note clearly stating an intention not to be bound by a covered home sale. Must it use the seller's exact cancellation form?",
    "questionUk": "Покупець вчасно надіслав рукописну заяву з чітким наміром не бути зв’язаним домашнім продажем. Чи обов’язкова точна форма продавця?",
    "answers": [
      [
        "No; a written expression clearly conveying cancellation is sufficient",
        "Ні; достатньо письмового вираження чіткого наміру скасувати"
      ],
      [
        "Yes; only the printed form works",
        "Так; лише друкована форма чинна"
      ],
      [
        "Yes; only a notarized form works",
        "Так; лише нотаріальна форма чинна"
      ],
      [
        "Yes; only a lawyer's letter works",
        "Так; лише лист адвоката чинний"
      ],
      [
        "Yes; handwriting is prohibited",
        "Так; рукопис заборонений"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The notice need not follow a particular form if its written expression indicates the buyer's intention not to be bound.",
    "explanationUk": "Повідомлення не потребує спеціальної форми, якщо письмово виражає намір покупця не бути зв’язаним продажем.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.07"
  },
  {
    "section": "325G.08 subd. 1(a)",
    "difficulty": "easy",
    "question": "Besides providing the required written materials, what must a seller tell the buyer at the time of a covered home solicitation sale?",
    "questionUk": "Що продавець має повідомити покупцю в момент охопленого домашнього продажу, крім надання обов’язкових письмових матеріалів?",
    "answers": [
      [
        "Orally explain the right to cancel",
        "Усно повідомити про право скасування"
      ],
      [
        "Only give the supplier's phone number",
        "Лише надати телефон постачальника"
      ],
      [
        "Only quote the sales tax",
        "Лише назвати податок"
      ],
      [
        "Nothing if the buyer can read",
        "Нічого, якщо покупець уміє читати"
      ],
      [
        "Only describe the warranty",
        "Лише описати гарантію"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 1(a) separately requires oral notice of cancellation rights when the sale occurs.",
    "explanationUk": "Підпункт 1(a) окремо вимагає усно повідомити про право скасування в момент продажу.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.08"
  },
  {
    "section": "325G.08 subd. 1(c)",
    "difficulty": "exam",
    "question": "Select the required characteristics of the standard cancellation form furnished with a covered home solicitation sale.",
    "questionUk": "Виберіть обов’язкові характеристики стандартної форми скасування, що надається з охопленим домашнім продажем.",
    "answers": [
      [
        "Fully completed in duplicate",
        "Повністю заповнена у двох примірниках"
      ],
      [
        "Attached to the contract or receipt and easily detachable",
        "Прикріплена до договору чи квитанції та легко відокремлюється"
      ],
      [
        "Required information in boldface at least 10 points",
        "Обов’язкові відомості жирним шрифтом щонайменше 10 пунктів"
      ],
      [
        "Only an oral description instead of the form",
        "Лише усний опис замість форми"
      ],
      [
        "A form whose seller address is deliberately blank",
        "Форма з навмисно порожньою адресою продавця"
      ]
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "The standard form must be completed in duplicate, attached/easily detachable, and contain the specified boldface information. Subdivision 2 permits a compliant federal-format alternative.",
    "explanationUk": "Стандартна форма заповнюється у двох примірниках, прикріплюється з легким відокремленням і містить визначені відомості жирним шрифтом. Підрозділ 2 дозволяє належну альтернативу федерального формату.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.08"
  },
  {
    "section": "325G.08 subd. 2",
    "difficulty": "exam",
    "question": "A seller has not complied with the home-solicitation notice section. What cancellation method remains available until compliance?",
    "questionUk": "Продавець не виконав розділ повідомлень домашнього продажу. Який спосіб скасування доступний до виконання вимог?",
    "answers": [
      [
        "Notify the seller of cancellation by any manner and means",
        "Повідомити продавця про скасування будь-яким способом і засобом"
      ],
      [
        "Only file a lawsuit",
        "Лише подати позов"
      ],
      [
        "Only use a form the seller withheld",
        "Лише використати приховану продавцем форму"
      ],
      [
        "Only cancel within 24 hours",
        "Лише скасувати протягом 24 годин"
      ],
      [
        "No cancellation is possible",
        "Скасування неможливе"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Until the seller complies with section 325G.08, the buyer may communicate the intention to cancel in any manner and by any means.",
    "explanationUk": "До виконання продавцем вимог 325G.08 покупець може повідомити намір скасувати будь-яким способом і засобом.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.08"
  },
  {
    "section": "325G.09 subd. 6",
    "difficulty": "exam",
    "question": "A covered, nonexcluded home solicitation service sale is validly canceled after the seller performed some services. What compensation does this subdivision allow for those services?",
    "questionUk": "Охоплений продаж послуг без винятку належно скасований після часткового виконання продавцем. Яку компенсацію за ці послуги дозволяє цей підрозділ?",
    "answers": [
      [
        "None",
        "Жодної"
      ],
      [
        "The full contract price",
        "Повну ціну договору"
      ],
      [
        "An automatic 50% fee",
        "Автоматично 50%"
      ],
      [
        "Materials plus any desired profit",
        "Матеріали й будь-який бажаний прибуток"
      ],
      [
        "An automatic cancellation penalty",
        "Автоматичний штраф за скасування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "For services performed under a home solicitation sale before its cancellation, subdivision 6 grants the seller no compensation. The scenario excludes statutory exclusions.",
    "explanationUk": "За послуги, виконані за домашнім продажем до його скасування, підрозділ 6 не дає продавцю компенсації. Сценарій не підпадає під законодавчі винятки.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.09"
  },
  {
    "section": "325G.09 subd. 2",
    "difficulty": "medium",
    "question": "After cancellation, the seller has not fulfilled its statutory return-of-payments/goods obligations. May the buyer retain delivered goods meanwhile?",
    "questionUk": "Після скасування продавець ще не виконав обов’язки повернення платежів чи товарів. Чи може покупець поки залишити доставлені товари у себе?",
    "answers": [
      [
        "Yes, until the seller complies with that section's obligations",
        "Так, до виконання продавцем обов’язків цього розділу"
      ],
      [
        "No, the buyer must immediately pay again",
        "Ні, покупець має негайно заплатити знову"
      ],
      [
        "No, goods must immediately be abandoned outdoors",
        "Ні, товари негайно викидають надвір"
      ],
      [
        "Only if the seller grants a new loan",
        "Лише якщо продавець дасть нову позику"
      ],
      [
        "Only after paying a storage fee",
        "Лише після сплати за зберігання"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Subdivision 2 allows possession to be retained until the seller complies; it does not remove the buyer's reasonable-care duty.",
    "explanationUk": "Підрозділ 2 дозволяє зберігати володіння до виконання продавцем обов’язків; це не скасовує обов’язку розумного догляду.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.09"
  },
  {
    "section": "325G.09 subd. 5",
    "difficulty": "medium",
    "question": "While holding goods during the statutory post-cancellation possession-demand period, what duty does the buyer have?",
    "questionUk": "Який обов’язок має покупець, зберігаючи товари протягом законодавчого строку вимоги їх повернення після скасування?",
    "answers": [
      [
        "Take reasonable care of the goods",
        "Розумно дбати про товари"
      ],
      [
        "Intentionally destroy them",
        "Навмисно знищити їх"
      ],
      [
        "Guarantee the seller a resale profit",
        "Гарантувати продавцю прибуток перепродажу"
      ],
      [
        "Pay automatic daily rent",
        "Автоматично сплачувати щоденну оренду"
      ],
      [
        "Return them only at a distant warehouse",
        "Повертати лише на віддалений склад"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The buyer owes reasonable care before cancellation and during the seller's demand period; the goods otherwise remain at the seller's risk during that period.",
    "explanationUk": "Покупець має розумно дбати про товари до скасування та протягом строку вимоги продавця; інші ризики товарів у цей строк несе продавець.",
    "sourceUrl": "https://www.revisor.mn.gov/statutes/cite/325G.09"
  }
];
export const intakeVerified89 = verifiedBatch(1053, "Minnesota Contractor Law / Business", "Minnesota Contractor Law", "Minnesota Statutes §§325G.06–325G.09", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/325G.06", seeds, "intake-series-85-90", false, "2026-10-14");

