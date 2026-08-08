# Minnesota QB Exam Simulator

A local, desktop-first study application for the Minnesota Residential Building Contractor — Qualifying Builder exam. The MVP emphasizes reliable sessions, scoring, timing, persistence, and analytics rather than a comprehensive question bank.

## Stack and setup

Next.js App Router, React, TypeScript, Tailwind CSS, and browser `localStorage`; no backend, account, database, or external API.

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Question data

The replaceable sample bank is in `data/questions.ts`; its schema is defined in `lib/types.ts`. A `Question` has a stable ID, primary official domain, training subcategory, difficulty, single/multiple type, English question, Ukrainian question-only translation, stable answer IDs, an exact correct-answer ID set, optional required selection count, explanation, structured reference, general tags, independent exam-language tags, and skills.

To add questions safely, use a unique stable ID, provide four or five unique answer IDs, ensure every `correctAnswers` ID exists, set `requiredSelections` to the correct-answer count for multiple-select items, and retain the taxonomy dimensions. Do not mutate IDs after attempts exist. Confirm technical claims against current authoritative sources. Full Exam enables automatically at 110 eligible unique records.

## Local data and disclaimer

`lib/storage.ts` owns versioned `mnqb:v1:*` localStorage records for the profile, active session, completed attempts, and latest result. Clearing browser site data removes all progress. Corrupt or missing JSON falls back to safe empty states.

The included 24 questions are original sample practice content for engine validation. They are **not** actual, leaked, reconstructed, or confidential Minnesota DLI exam questions and are not a substitute for current authoritative code, statute, rule, or DLI guidance.

## Validation and Architecture Guarantees

- `lib/question-validation.ts` validates IDs, taxonomy, translations, answer structures, correct-answer references, selection counts, tags, and skills. The canonical bank is covered by tests.
- Multiple-select scoring compares exact unique answer-ID sets: order does not matter, while missing, extra, wrong, or duplicate selections receive no credit.
- Overall exam time is computed from `startedAt` and the current/completion timestamp. It survives renders and refreshes and never displays below zero.
- Per-question time records only active open intervals. Navigation and submission accrue the current interval; restore starts a new interval so closed-browser time is included in overall duration but is not assigned to one question.
- Active sessions preserve their stable ID, bank version, question order, position, selections, flags, checked practice answers, and accumulated question times. Completion is idempotent by attempt/session ID.
- Versioned `mnqb:v1:*` storage readers reject malformed records safely. Attempts store stable question IDs rather than question copies and tolerate questions later being removed.
- Question bank version is currently **1**. Full Exam requires 110 eligible unique questions and remains unavailable with the current 24-question sample bank.
- `/diagnostics` is a developer QA view with bank composition, validation findings, missing metadata counts, and Full Exam readiness. It never displays correct answers.

Current limitations: local browser storage has no cross-device sync; reference metadata and all future questions require editorial validation; the 60/40 weighting configuration is explicitly planning-only until reviewed quotas exist.
