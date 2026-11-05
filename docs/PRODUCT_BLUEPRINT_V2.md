# Exam Prep — Product Blueprint V2 (2026-11-03)

Approved founder requirements. This supersedes earlier Learning Mode instant-feedback and 20-question defaults in PRODUCT_FEATURE_CONTRACT.md. It DOES NOT replace safeguards for Full Exam, Code Book Practice, demo, authentication, payments, or question provenance. This is a product contract, not a claim of shipping.

## Scope and routing
- Minnesota (statewide) first. At start choose state and license track. QB is live; QC Remodeler and QR Roofer show Coming Soon until their separate verified banks and references are ready.
- Future states (Illinois, Wisconsin and others), Electrical, Plumbing, etc. must be versioned by jurisdiction, license exam and code edition. Never present QB questions as a full QR/QC bank.
- Canonical English original questions and options, optional Ukrainian and Spanish interface and on-demand translations. Preserve technical English and code identifiers. Official exam language policies depend on the test; avoid blanket English-only warnings.
- Independent training platform, not affiliated with state regulators or exam providers. Questions are original preparation, not actual exam questions.

## Learning Mode V2 (primary feature)
- A learning cycle contains 110 unique appropriate questions; exactly 10 checkpoints of 11 each, not separate miniature exams. Learning-only legacy questions can be used if valid but cannot become Full Exam eligible by accident.
- User sees a short timing explanation and presses ONE large Start button. Immediately show question and start overall active timer and per-question timer; no required Start Searching button, Face ID, or camera.
- Calculate an estimated reading phase using the English question PLUS all English options: ceil(total words / 2), minimum 5 seconds, maximum 30 seconds. Transition automatically into search pacing. The estimate gives NO extra exam time; selection is allowed immediately.
- Three minutes per question is a pacing baseline, never a hard stop in Learning Mode. Show a circular numeric timer; sage to amber to terracotta to red, remaining time and overtime. Avoid stress-inducing animations. Compact session reserve = 180 seconds times answered questions MINUS active time, including reading. Checkpoint breaks do not consume active study time.
- Learner can answer directly or use their physical book. Code section/table and Index term are OPTIONAL. If a section was entered, show a section-entered badge rather than claiming proven book use. Optional explicit Used Code Book flag for honest self-reported metrics.
- Answer-neutral highlighted keywords may help searching, but do not reveal answer, exact code section or protected grading metadata before review. Optional progressive hints must not leak the solution.
- Do NOT reveal corrections after each question. Only after all 11 questions in a checkpoint have been submitted does the SERVER authorize reveal of that checkpoint. Review lists correct/incorrect/unanswered; each item can open scrollable detail with own answer, verified correct answer, original explanation, exact source and section, optional entered reference, and elapsed time. On mobile, use a screen-filling sheet.
- Continue Learning advances to the next group of 11. Paused review checkpoints must not consume active learning time. At the end of 110, show aggregate history and weak-topic analysis. Save and resume after refresh or switching devices, including incomplete checkpoint.
- Keep responses and review correctness server-authoritative, idempotent and inaccessible before checkpoint completion. Do not send answer keys with initial questions.
- Distinguish real measured timing from inferred book searching; never claim the latter is measured automatically.

## Protected modes
- Full Exam: 110 eligible questions, 330-minute server-authoritative limit, 70% threshold, deferred feedback until finish, question flags/review, no artificial breaks.
- Code Book Practice: existing default 20 questions, Answer now / Find in Code Book / Found It, optional section and index, independent timing path.
- Demo: curated 10 questions and protected grading.
- Preserve Supabase identity/RLS/data persistence, Stripe paywall/webhook, server-side answer grading, existing bank IDs and references, user progress and history.

## Soft Industrial Minimalism
- Light theme: warm concrete neutral, graphite text, sage/eucalyptus highlights and restrained terracotta alerts.
- Dark theme: charcoal, not pure black, accessible contrast. Light/Dark/System switch; Calm/Exam timer intensity; reduced motion and touch/keyboard accessibility.
- Mobile-first Focus Mode removes visual noise around question and answers, with readable circular numeric timer, discreet reserve/progress, large touch targets.
- Track selection/dashboard, 11-question checkpoint screen, scrollable history and a compact modal/drawer. Smooth but subtle transitions; no heavy 3D or forced camera permissions.

## Deferred, NOT shipping yet
- Two-choice Quick Recall and future graphic quiz, optional experimental camera gaze detection, more states, licenses and translations.
- No bulk reproductions of copyrighted ICC code. Use original explanations, checked section references and licensed/official view links.

## Regression gates
1. Existing npm test, lint and build, GitHub CI and Vercel Preview must pass before production.
2. Dedicated Learning session, unique 110 IDs, server-authorized 11-question checkpoint reveal, no answer leakage, safe 11/22/.../110 transitions.
3. Reading estimate/clamping, active-timer and pacing-reserve accuracy; optional code section and answer without book; no expiry at 180 seconds.
4. Resume at question six with no progress loss. Report and review preserve correct answers, timing, reference and user selection.
5. No regressions in Full Exam, demo, Book Practice, Supabase, Stripe, pricing or entitlements.
6. English/Ukrainian/Spanish, light/dark, iPhone and desktop usability and accessibility checked. Bank inventory and answer keys unchanged.

## Shipping stages
Stage 1: Learning V2 server session/checkpoint state, timed question metadata, secure review and tests. Keep existing working flows intact until migration passes.
Stage 2: polished UI and localization, responsive progress and checkpoint review, E2E test, Preview validation, then controlled promotion.
