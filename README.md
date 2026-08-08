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
