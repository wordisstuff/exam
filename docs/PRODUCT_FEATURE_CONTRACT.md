# Product Feature Contract — Minnesota QB Exam Prep

Status: approved requirements recovered from prior product discussions; preservation baseline before UI redesign.
Scope: wordisstuff/exam. This file is a product contract, NOT a claim that every feature is already implemented.
Rule: any redesign/refactor MUST preserve working behaviors below and may not silently drop future agreed features. Implement the missing ones explicitly and test them.

## 1. Core modes and distinction

### Exam Mode — high-fidelity simulation
- Exactly 110 unique eligible reviewed, source-checked questions, randomized without duplicate IDs.
- 5 hours 30 minutes; 70% passing threshold; support server-authoritative elapsed time and auto-finish at expiration.
- Deferred feedback: do NOT disclose correctness, answer key, explanation or exact hidden reference before finish.
- Navigate forward/back, select one or specified multiple answers, flag and review questions, show progress and remaining time.
- Exact-set scoring for multiple choice (no partial credit); finish once; results PASS/FAIL, correct/incorrect/unanswered, explanations and sources only at permitted finish time.
- Protect correctAnswers, hidden grading metadata and private editorial annotations from browser payloads.

### Learning Mode — learn by finding rules in a physical code book
- NOT merely an exam with instant feedback: allow user to learn from their physical Minnesota Residential Code book.
- Show original English question and answer options; optional Ukrainian question translation; keep technical English/code identifiers intact.
- For code-book-searchable questions, offer a dedicated learning path in which the learner FIRST looks up the rule in the physical book; do not give a section hint ahead of their attempt.
- Learner chooses answer and can enter a precise section/table reference; optionally record Index search term/path. Check correctness of answer and code reference separately where deterministic verification is supported.
- Once submitted/checked, reveal correct answer, exact section/table reference, original explanation and useful book-navigation or Index guidance, along with separate answer accuracy and reference-finding accuracy.
- Instant feedback in learning sessions, but only AFTER the user chooses to check; do not reveal solutions by merely displaying a question.
- Configurable topic/category/subcategory, number of questions, difficulty where relevant, and repeat mistakes/weak areas; access the full appropriate learning inventory, including legitimate 2-/4-choice legacy learning questions. Do not misrepresent ineligible questions as Full Exam eligible.
- For questions sourced outside the physical code book (OSHA, statutes etc.), offer a suitable non-book learning flow with their actual primary reference, NEVER invent a residential code section.

### Code Book Practice — measure lookup speed
- Preserve the agreed explicit actions: 'Answer now' OR 'Find in Code Book'.
- 'Find in Code Book' starts a book-search timer; 'Found It' stops it. It must not force a section input to stop the timer.
- Optional entry of section/table and Index path/term, not required to finish the question. Show accurate section/reference and search path after checking.
- Store responsePath ('direct' vs 'book-assisted'), search start/finish, search duration, reported section and Index term where supported.
- Separate direct-answer accuracy from book-assisted accuracy and average seconds to find a rule; keep weak-topic and lookup-speed analysis.
- Existing 20-question Code Book Practice is a default session configuration, not a reason to restrict all future book-study configurations to 20.

### Public demo
- Keep 10 curated questions without account, immediate server-graded feedback and 2 code-book examples; allow optional claim of demo progress on sign-in.
- Never include correctAnswers or private scoring data in initial question response.

## 2. All question content and editorial guarantees
- Keep the full canonical bank; baseline at 2026-11-03: 2,134 records (2,000 verified intake plus 134 older), 1,607 Full Exam eligible after localization repair.
- Eligibility is DERIVED by validator; do not label every record as equally verified or make all records eligible for Exam Mode.
- Preserve stable IDs, English prompts, answers, correct answer IDs, explanation, Ukrainian translations, original source and precise code references, category, subcategory and verification metadata.
- Original question content only, no copied Mometrix/commercial exam material or reconstructed actual exam items. Validate controlling Minnesota rules and amendments. Do not change answer keys during visual work.
- Question-answer projection to clients must exclude keys prior to allowed grading/reveal; server grades final result.
- Future multi-track architecture: QB active, QC/QR planned; avoid silently merging their scope.

## 3. UI/UX requirements
- Mobile-first responsive layout and accessible desktop layout.
- English canonical terminology; user-facing Ukrainian language toggle; future Spanish without sacrificing English/UK.
- Clear learning/exam/code-book mode selection; large tappable answers, visible progress, timer, flags, navigation, pause/resume behavior consistent with authoritative session timestamps.
- After question check or exam completion: short reasoning, reference/section, source edition, optionally how to find it in Index. Never reveal hidden answer information prematurely.
- Dashboard: continue active sessions, attempts/history, mistakes, weak areas, per-question time, daily practice targets and study streak where already supported.
- Preserve the product independent/non-affiliated disclosure and never market practice questions as real state-exam questions.

## 4. Commercial / security / persistence
- Keep Next.js/React/TypeScript/Tailwind, Supabase-backed authentication, server sessions/answers, server grading, persisted cross-device progress.
- Preserve Stripe Checkout/webhook/entitlement checks and free demo vs paid access; don't accidentally remove billing gates during visual redesign.
- Preserve security boundaries: service keys server-only, verified webhooks, strict user access/RLS, answer IDs and question IDs validated server-side.
- Future AI Tutor is planned, not an existing requirement to launch. Never permit AI to override verified answer keys.
- Existing fixed-duration commercial proposal was $199 for 180 days (historical product discussion; confirm before enabling live prices). No new recurring subscription implied.

## 5. Redesign regression acceptance gates
1. Existing npm test / npm run lint / npm run build remain passing; check GitHub Actions and Vercel Preview before production.
2. Full Exam returns 110 unique eligible IDs, correct 5h30 timer and 70% threshold; no answer leakage before finish.
3. Learning question: user may choose answer + enter code section, then separately see answer/reference results; absence of section does not prevent checking where optional.
4. Code Book Practice: direct path, lookup timer start/stop with Found It, optional section, lookup statistics persist.
5. Legacy 2/4-answer learning records are available in appropriate learning catalog, never used in Full Exam.
6. Filter/search/catalog supports real question coverage, not just hard-coded demo or random full exam sample.
7. Server persistence supports refresh, navigation, resume, finish and cross-device history without double-scoring.
8. Demo, sign-in, entitlements, checkout webhook and history remain functional.
9. Language and accessibility verified on mobile and desktop.
10. Compare before/after normalized bank inventory, question IDs, answer keys and references; no semantic content edits during UI-only redesign.

## 6. Implementation gaps identified at the audit
- Current server APIs expose Full Exam and 20-question Code Book Practice; dashboard's Learning Mode currently calls Full Exam session creation with immediate feedback.
- Dedicated configurable full-bank Learning catalog, code-section entry/independent validation and Index guidance require implementation and tests.
- Existing README is outdated about question counts and architecture; update it after code implementation.
- QUESTION_BANK_VERSION currently 1; define compatibility strategy for snapshots/session history before altering question schema.

## 7. Change control
- Consider this document the functional baseline, not a frozen visual design.
- If a proposed change conflicts with this contract, record the decision and alter tests/documentation explicitly before shipping.
- Prefer small gated PRs/commits and a preview verification; preserve all work already completed.
