import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
const seeds: VerifiedSeed[] = [
  {
    "section": "337.10 subd. 3",
    "difficulty": "medium",
    "question": "A prime receives payment for a supplier's undisputed materials. Within what period must the prime pass that payment to the supplier?",
    "questionUk": "Генпідрядник отримав оплату за безспірні матеріали постачальника. Протягом якого строку він має передати оплату постачальнику?",
    "answers": [
      [
        "10 days after receipt",
        "10 днів після отримання"
      ],
      [
        "30 days after receipt",
        "30 днів після отримання"
      ],
      [
        "60 days after receipt",
        "60 днів після отримання"
      ],
      [
        "At the next annual audit",
        "На наступній річній перевірці"
      ],
      [
        "Only after the warranty expires",
        "Лише після закінчення гарантії"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The statutory contract term requires payment within ten days after the responsible party receives payment for the requesting party's undisputed services, including material suppliers.",
    "explanationUk": "Законодавче положення договору вимагає оплати протягом десяти днів після отримання відповідною стороною коштів за безспірне виконання сторони, що вимагає оплату; постачальники також охоплені."
  },
  {
    "section": "337.10 subd. 3",
    "difficulty": "exam",
    "question": "An undisputed $400 balance remains overdue for one full month. What is the statutory monthly interest penalty?",
    "questionUk": "Безспірний залишок $400 прострочений на один повний місяць. Яка законодавча місячна процентна санкція?",
    "answers": [
      [
        "$10",
        "10 доларів"
      ],
      [
        "$6",
        "6 доларів"
      ],
      [
        "$4",
        "4 долари"
      ],
      [
        "$15",
        "15 доларів"
      ],
      [
        "$40",
        "40 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "1.5% × $400 = $6, but balances of $100 or more carry a minimum monthly penalty of $10.",
    "explanationUk": "1,5% × $400 = $6, але для залишку від $100 мінімальна місячна санкція становить $10."
  },
  {
    "section": "337.10 subd. 3",
    "difficulty": "exam",
    "question": "An undisputed $80 balance is overdue for one full month. What monthly interest penalty applies?",
    "questionUk": "Безспірний залишок $80 прострочений на один повний місяць. Яка місячна процентна санкція діє?",
    "answers": [
      [
        "$1.20",
        "1 долар 20 центів"
      ],
      [
        "$10",
        "10 доларів"
      ],
      [
        "$8",
        "8 доларів"
      ],
      [
        "$12",
        "12 доларів"
      ],
      [
        "$0",
        "0 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Below $100, the actual penalty applies: $80 × 1.5% = $1.20. The $10 floor does not apply.",
    "explanationUk": "До $100 застосовують фактичну санкцію: $80 × 1,5% = $1,20. Мінімум $10 не діє."
  },
  {
    "section": "337.10 subd. 3",
    "difficulty": "medium",
    "question": "A subcontractor wins a civil action collecting statutory interest penalties. Which additional award does the statute require?",
    "questionUk": "Субпідрядник виграв цивільну справу про стягнення законодавчих процентних санкцій. Яке додаткове відшкодування вимагає закон?",
    "answers": [
      [
        "Costs and disbursements, including attorney fees incurred bringing the action",
        "Судові витрати, включно з оплатою адвоката у цій справі"
      ],
      [
        "Only filing costs, never attorney fees",
        "Лише збір за подання, без адвоката"
      ],
      [
        "Automatic ownership of the building",
        "Автоматичне право власності на будівлю"
      ],
      [
        "Double the entire project price",
        "Подвійну ціну всього проєкту"
      ],
      [
        "No additional award",
        "Жодного додаткового відшкодування"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "A prevailing claimant collecting interest penalties must receive costs and disbursements including attorney fees incurred in the action.",
    "explanationUk": "Переможцю справи про процентні санкції мають відшкодувати судові витрати, включно з оплатою адвоката для цієї справи."
  },
  {
    "section": "337.10 subd. 4(a)",
    "difficulty": "easy",
    "question": "For a private building contract with no different progress-payment schedule, what schedule does the statute establish?",
    "questionUk": "Яку періодичність проміжної оплати встановлює закон для приватного будівельного договору без іншого погодженого графіка?",
    "answers": [
      [
        "Monthly as work progresses",
        "Щомісяця в міру виконання"
      ],
      [
        "Weekly in every case",
        "Щотижня в усіх випадках"
      ],
      [
        "Only at final completion",
        "Лише після завершення всього"
      ],
      [
        "Every six months",
        "Кожні шість місяців"
      ],
      [
        "Only when the lender chooses",
        "Лише за рішенням кредитора"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Monthly progress payments are the default unless the contract provides otherwise; estimates of completed work require owner or agent approval.",
    "explanationUk": "Типове правило — щомісячна оплата, якщо договір не передбачає іншого; оцінку виконаного схвалює власник або його представник."
  },
  {
    "section": "337.10 subd. 4(a)",
    "difficulty": "medium",
    "question": "An owner makes an approved progress payment on a private project. Does that payment by itself waive defects in the work?",
    "questionUk": "Власник здійснив схвалену проміжну оплату приватного проєкту. Чи скасовує сама оплата претензії щодо дефектів?",
    "answers": [
      [
        "No; it is not acceptance, approval of work or waiver of defects",
        "Ні; це не прийняття чи схвалення робіт і не відмова від дефектів"
      ],
      [
        "Yes; every paid item is permanently accepted",
        "Так; кожен оплачений елемент остаточно прийнято"
      ],
      [
        "Yes; unless paid in cash",
        "Так; крім готівкової оплати"
      ],
      [
        "Yes; once more than half the price is paid",
        "Так; після оплати понад половини ціни"
      ],
      [
        "Yes; if a subcontractor supplied the work",
        "Так; якщо роботу виконав субпідрядник"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The statute expressly separates progress payment from acceptance or approval of work and waiver of defects.",
    "explanationUk": "Закон прямо відокремлює проміжну оплату від прийняття або схвалення робіт і відмови від претензій щодо дефектів."
  },
  {
    "section": "337.10 subd. 4(b)",
    "difficulty": "exam",
    "question": "For a covered private building contract, what is the maximum retainage on a $120,000 payment base before substantial completion?",
    "questionUk": "Яке максимальне утримання з бази оплати $120 000 до істотного завершення дозволено для охопленого приватного будівельного договору?",
    "answers": [
      [
        "$6,000",
        "6 000 доларів"
      ],
      [
        "$12,000",
        "12 000 доларів"
      ],
      [
        "$18,000",
        "18 000 доларів"
      ],
      [
        "$24,000",
        "24 000 доларів"
      ],
      [
        "$30,000",
        "30 000 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Retainage may not exceed 5%: $120,000 × .05 = $6,000. The law does not require withholding retainage.",
    "explanationUk": "Утримання не може перевищувати 5%: $120 000 × 0,05 = $6 000. Закон не зобов’язує взагалі утримувати кошти."
  },
  {
    "section": "337.10 subd. 4(b)",
    "difficulty": "medium",
    "question": "On a covered private project, the owner reduces retainage from 5% to 3%. What must the contractor do for subcontractor retainage?",
    "questionUk": "На охопленому приватному проєкті власник зменшує утримання з 5% до 3%. Що підрядник має зробити з утриманням субпідрядників?",
    "answers": [
      [
        "Reduce it at the same rate",
        "Зменшити за тією самою ставкою"
      ],
      [
        "Keep all subcontractors at 5%",
        "Залишити всім субпідрядникам 5%"
      ],
      [
        "Increase it to 7%",
        "Збільшити до 7%"
      ],
      [
        "Release only the largest subcontractor",
        "Звільнити лише найбільшого субпідрядника"
      ],
      [
        "Wait until all warranties expire",
        "Чекати завершення всіх гарантій"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "When the owner reduces retainage, the contractor must reduce subcontractor retainage at the same rate; the reduction cannot be kept solely upstream.",
    "explanationUk": "За зменшення утримання власником підрядник має зменшити його субпідрядникам за тією самою ставкою; вигоду не можна залишити лише верхньому рівню."
  },
  {
    "section": "337.10 subd. 4(c)",
    "difficulty": "medium",
    "question": "All work and final paperwork are complete on a covered private project with no permissible withholding. What is the owner's outer retainage-release deadline measured from substantial completion?",
    "questionUk": "На охопленому приватному проєкті роботи й фінальні документи завершені, законних підстав утримувати немає. Яка гранична дата повернення утримання від істотного завершення?",
    "answers": [
      [
        "No later than 60 days",
        "Не пізніше 60 днів"
      ],
      [
        "No later than 10 days",
        "Не пізніше 10 днів"
      ],
      [
        "No later than 120 days",
        "Не пізніше 120 днів"
      ],
      [
        "After one year",
        "Через один рік"
      ],
      [
        "After ten years",
        "Через десять років"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Release is due no later than 60 days after substantial completion, subject to the subdivision's authorized withholding terms. The scenario removes those grounds.",
    "explanationUk": "Повернення належить не пізніше 60 днів після істотного завершення з урахуванням дозволених умов утримання; у сценарії таких підстав немає."
  },
  {
    "section": "337.10 subd. 4(d)",
    "difficulty": "exam",
    "question": "After receiving retainage on a covered private project, a contractor disputes only the painter's work. Select the required actions.",
    "questionUk": "Після отримання утриманих коштів приватного проєкту підрядник оспорює лише роботу маляра. Виберіть обов’язкові дії.",
    "answers": [
      [
        "Pay remaining retainage to unaffected subcontractors within ten days of receipt",
        "Сплатити решту утримання непричетним субпідрядникам протягом десяти днів після отримання"
      ],
      [
        "Give the affected painter a written amount and reason for withholding",
        "Надати маляру письмово суму та причину утримання"
      ],
      [
        "Freeze every subcontractor's retainage",
        "Заморозити кошти всіх субпідрядників"
      ],
      [
        "Give the painter only an oral explanation",
        "Дати маляру лише усне пояснення"
      ],
      [
        "Wait for warranty expiration before paying anyone",
        "Нікому не платити до завершення гарантії"
      ]
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "The dispute exception concerns affected work only. Unaffected parties receive retainage, and the affected subcontractor receives a written statement of amount and reason.",
    "explanationUk": "Виняток спору стосується лише відповідної роботи. Непричетним повертають кошти, а відповідному субпідряднику надають письмово суму та причину."
  },
  {
    "section": "337.10 subd. 4(e)(1)",
    "difficulty": "exam",
    "question": "At substantial completion of a covered private project, known correction work costs $2,400. Excluding any paperwork allowance, what maximum may the owner withhold for that work?",
    "questionUk": "На момент істотного завершення приватного проєкту відомі виправлення коштують $2 400. Який максимум можна утримати саме за ці роботи, без допуску на документи?",
    "answers": [
      [
        "$6,000",
        "6 000 доларів"
      ],
      [
        "$2,400",
        "2 400 доларів"
      ],
      [
        "$3,600",
        "3 600 доларів"
      ],
      [
        "$4,800",
        "4 800 доларів"
      ],
      [
        "$12,000",
        "12 000 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "The cap is 250% of known correction/completion cost: $2,400 × 2.5 = $6,000. Written amount and basis are required; withheld correction funds are due within 60 days after work completion.",
    "explanationUk": "Межа — 250% відомої вартості виправлення чи завершення: $2 400 × 2,5 = $6 000. Потрібна письмова сума й підстава; кошти за виправлення повертають протягом 60 днів після їх завершення."
  },
  {
    "section": "337.10 subd. 4(e)(2), (f)",
    "difficulty": "exam",
    "question": "A covered private contract totals $30,000. After substantial completion, only final paperwork remains. What maximum paperwork withholding is allowed?",
    "questionUk": "Охоплений приватний договір коштує $30 000. Після істотного завершення залишилися лише фінальні документи. Яке максимальне утримання за документи дозволене?",
    "answers": [
      [
        "$500",
        "500 доларів"
      ],
      [
        "$300",
        "300 доларів"
      ],
      [
        "$750",
        "750 доларів"
      ],
      [
        "$1,500",
        "1 500 доларів"
      ],
      [
        "$3,000",
        "3 000 доларів"
      ]
    ],
    "correct": [
      0
    ],
    "explanation": "Use the greater of 1% of contract value or $500: $300 versus $500. Funds are due within 60 days after all final paperwork is submitted. Warranty-work retainage is prohibited without waiving warranty claims.",
    "explanationUk": "Беруть більше з 1% ціни або $500: $300 проти $500. Кошти належать протягом 60 днів після подання всіх фінальних документів. Утримання за гарантійні роботи заборонене, але гарантійні претензії зберігаються."
  }
];
export const intakeVerified83 = verifiedBatch(981, "Minnesota Contractor Law / Business", "Minnesota Contractor Law", "Minnesota Statutes §337.10", "mn-statute", "https://www.revisor.mn.gov/statutes/cite/337.10", seeds, "intake-series-79-84", false);

