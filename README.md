# Minnesota QB Exam Simulator

A local, desktop-first Next.js/TypeScript/Tailwind study application for the Minnesota Residential Building Contractor — Qualifying Builder exam. Sessions, exact-set scoring, timing, analytics, and versioned `localStorage` require no backend, account, database, or external API.

## Setup

```bash
npm install
npm run dev
npm run lint
npm test
npm run build
```

## Question-bank architecture

The canonical bank combines 24 `sample` records in `data/questions.ts` with 25 Building Planning / Life Safety records in `data/questions-life-safety.ts` (49 total). All 25 Life Safety records were rewritten from the supplied source-checked specification, reviewed, and source-checked; all 25 are Full Exam eligible. The 24 legacy samples remain unverified and ineligible. Full Exam remains unavailable until the bank reaches 110 eligible unique questions. See `docs/audits/LIFE_SAFETY_BATCH_01.md` for per-question traceability.

Editorial status and verification are independent:

- `sample`: engine/demo learning content, not serious exam inventory.
- `draft`: an original bank candidate awaiting substantive review.
- `reviewed`: editorially approved content; it is not automatically verified.
- `unverified`: no completed primary-source check.
- `source-checked`: a reviewer confirmed the technical/legal claim and precise source locator.

Structural validation is **not** technical or legal verification. Full Exam eligibility is derived—not manually asserted—and requires `reviewed`, `source-checked`, exactly five choices, a structurally valid record, English and Ukrainian questions, an explanation, a reference, and valid correct-answer IDs. Full Exam becomes available only with 110 eligible **unique** questions. Four-choice sample content remains available for learning modes but cannot enter Full Exam.

`data/question-bank-plan.ts` is the canonical coverage/source-family matrix. Its **550-question target and every category/subcategory allocation are internal editorial planning values, not official DLI percentages or quotas**. The matrix separately represents contractor law/business/regulatory study. The DLI public description of approximately 60% Residential Building Code and 40% statutes/rules/regulatory material is not converted into an asserted exam count. The linked guide's “60 Scored Questions” content-outline label alongside its 110-question exam statement remains unresolved; we do not infer 50 unscored items, a 60/50 split, that only listed technical items score, or official subcategory counts.

The required authoring and promotion process is in `docs/QUESTION_WRITING_GUIDE.md`. New serious questions use five plausible English answer options, stable answer IDs, question-only Ukrainian translation, explanations, and structured references (`source`, `section`, optional `subsection`, `title`, and `note`). The source-family registry includes the DLI exam guide/reference manual, 2020 Minnesota Residential and Energy Codes, applicable Minnesota Rules, Plumbing Rules 4714, and identified Minnesota Statutes chapters. For residential-code verification, “2020 Minnesota Residential Code” means the 2018 IRC provision incorporated by Minnesota, compared with Minnesota Rules Chapter 1309 amendments and Chapter 1300 or another cross-referenced State Building Code chapter where applicable. A generic or later-edition IRC provision is not sufficient.

## Validation and guarantees

- `lib/question-validation.ts` validates IDs, taxonomy, editorial metadata, translations, answer structures, correct-answer references, selection counts, explanations, references, tags, and skills; it also owns Full Exam eligibility.
- Multiple-select scoring compares exact unique answer-ID sets; no partial credit is given.
- `lib/engine.ts` filters Full Exam generation through derived eligibility while preserving all structurally valid sample/draft content for quick and category practice.
- Session timing, versioned `mnqb:v1:*` persistence, safe malformed-data fallback, stable question IDs, and idempotent completion remain intact.
- `/diagnostics` reports the coverage plan, planned/current primary and subcategory counts, editorial/verification totals, quality findings, and eligibility readiness without exposing correct answers or cluttering the learner dashboard.

The questions are original practice content, not actual, leaked, reconstructed, confidential, copied, or near-copied DLI exam questions. Always consult current authoritative sources.
