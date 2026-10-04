# Phase 1 — Migration and Rollout Plan

## P0 — Freeze working behavior

Before infrastructure changes:
- preserve current main behavior
- keep current 110 eligible questions
- keep Exam Mode and Learning Mode
- keep current test suite as regression gate

No question wording or answer keys should change in Phase 1.

## P1 — Add Supabase foundation

Add:
- environment schema/documentation
- Supabase client for browser-safe auth
- Supabase server client
- initial SQL migrations
- profiles + entitlements + sessions + answers schema
- RLS policies

Keep current local app usable behind a development fallback until server parity exists.

## P2 — Auth

Replace name-only identity with:
- email magic link or OTP first
- persistent profile

Do not start with passwords unless needed.

Anonymous demo can remain separate.

## P3 — Server question projection

Create server API/service that returns only:
- visible question text
- visible answer choices
- translations
- metadata needed by UI

It must not include:
- correctAnswers
- explanation before grading
- private verification/editorial metadata

Add tests proving private key data is absent from learner payloads.

## P4 — Server session creation

Move Full Exam generation to server:
- entitlement check
- derive eligible bank
- random unique 110 selection
- persist ordered IDs
- return learner-safe first/session payload

Preserve:
- 5h30m
- exact 110
- no legacy samples
- bank version

## P5 — Server grading

Learning Mode:
- POST selected IDs for one question
- server returns correct/incorrect + allowed feedback/reference

Exam Mode:
- no per-question correctness endpoint before finish

Finish:
- server grades full session
- persists completion
- returns result projection

## P6 — Cross-device history

Migrate dashboard/history/mistakes/weak areas to server data.

Analytics must remain derivable from completed server sessions.

## P7 — Stripe entitlement

Start with one-time fixed-duration product.

Flow:
1. authenticated user opens checkout
2. server creates Stripe Checkout Session
3. Stripe webhook verified server-side
4. entitlement activated with ends_at
5. app gates paid routes/features by server entitlement

No access grant based only on success_url query params.

## P8 — Demo

Free public/demo flow:
- 10 curated questions
- no correct-answer leakage
- clear CTA to paid access
- optional account creation at the end

## P9 — Production cleanup

After parity:
- remove production dependence on localStorage
- localStorage may remain for non-sensitive UI preferences only
- remove learner-facing diagnostics route or protect it as admin/development-only
- update README
- synchronize Next/eslint-config-next versions
- add CI for lint/test/build

## Acceptance gates

Every migration PR should pass:
- npm test
- npm run lint
- npm run build
- git diff --check

And preserve:
- 110 Full Exam eligible
- exact 110 unique questions per Full Exam
- 70% pass threshold
- 5h30m timer
- no semantic changes to existing reviewed/source-checked content

## Non-goals in Phase 1

Do not add yet:
- Spanish translation
- AI Tutor
- Code Book Practice UI
- 500+ bank expansion
- admin CMS
- recurring monthly subscriptions

Those come after auth/server grading/payment foundation is stable.

All later product work must follow `docs/INDEPENDENT_DEVELOPMENT.md`.
