# Phase 1 — Commercial Foundation Architecture

## Goal

Convert the current local-only Minnesota QB simulator into a production-ready paid study platform without breaking the existing exam engine or question-quality guarantees.

The current application is a strong prototype:
- 134 canonical questions on main
- 110 reviewed + source-checked Full Exam eligible questions
- Full Exam Exam Mode and Learning Mode
- bilingual English/Ukrainian question content
- exact-match scoring for multiple-select
- local history, mistakes, weak areas, per-question timing

Phase 1 is intentionally focused on infrastructure and trust boundaries, not on adding more question batches.

## Product boundary

The production product should support:

- account-based access across devices
- free demo access
- paid access with an expiration/entitlement
- server-controlled question delivery
- server-controlled answer checking and final scoring
- persisted attempts and progress
- room for Code Book Practice, Spanish, and AI Tutor in later phases

## Recommended stack

### Web app
Keep:
- Next.js App Router
- React
- TypeScript
- Tailwind

### Auth + database
Use Supabase:
- Supabase Auth
- PostgreSQL
- Row Level Security

Reason:
- fastest path from the current Next.js app to durable accounts/progress
- avoids building password/auth infrastructure ourselves
- PostgreSQL is suitable for question-bank/editorial data and analytics
- RLS gives a clear user-data boundary

### Billing
Use Stripe Checkout + webhooks.

Stripe is the source of payment events.
Our database is the source of current entitlement state after webhook processing.

Do not trust client-provided subscription state.

### AI
Later phase:
- OpenAI API through server-only routes/actions
- AI receives verified question/rule context
- AI must never be the authority for answer keys

## Trust boundary

### Never send before grading
The browser must not receive:
- correctAnswers
- hidden scoring metadata
- private editorial notes
- answer explanations before the product flow allows them

The current app imports the entire local question bank into client components. That is acceptable for the prototype but not for a paid product.

### Server responsibilities
The server should own:
- session creation
- eligible question selection
- answer-key lookup
- answer checking
- final scoring
- entitlement checks
- persistence
- AI requests

### Client responsibilities
The client should own:
- rendering the question
- temporary answer selection
- UI navigation
- optimistic UX where safe
- timers displayed to the learner

Authoritative elapsed/completion timestamps are persisted server-side.

## Content model

Do not discard the existing Question model. Split it into public and private projections.

Public question payload:
- id
- primaryCategory
- subcategory
- difficulty
- type
- question
- translations
- visible answer choices
- requiredSelections
- language tags if useful
- skills if useful

Private question data:
- correctAnswers
- explanation
- translated explanations
- source/reference details if hidden until grading
- editorialStatus
- verificationStatus
- internal QA metadata

Exact code references may be returned after check/finish.

## Multilingual model

The current fields:
- questionUk
- answer.textUk
- explanationUk

should eventually migrate to a generic structure such as:

```ts
translations: {
  uk?: {
    question: string;
    answers: Record<string, string>;
    explanation?: string;
  };
  es?: {
    question: string;
    answers: Record<string, string>;
    explanation?: string;
  };
}
```

English remains the canonical authoring language.

Do not perform this migration in the first infrastructure commit unless it is needed to unblock persistence.

## Session modes

Preserve:
- full-exam
- quick-test
- category-practice

Preserve feedback modes:
- deferred
- immediate

Future:
- book-practice

A server session record should include:
- userId
- mode
- feedbackMode
- questionBankVersion
- startedAt
- completedAt
- timeLimitSeconds
- ordered question IDs
- current status

User answers should be stored separately from question truth data.

## Code Book Practice — reserved architecture

Phase 1 should leave room for these later fields per question attempt:
- responsePath: "direct" | "book-assisted"
- bookSearchStartedAt
- bookSearchCompletedAt
- bookSearchSeconds
- reportedSection
- indexTerm

This is the product feature most likely to distinguish the platform from a generic question bank.

## Access model

Recommended entitlements:

### Demo
- account optional or lightweight
- 10 curated questions
- no full exam
- limited analytics
- no AI Tutor

### Paid
Initial product:
- fixed-duration access, e.g. 90 or 180 days
- full question bank
- full exam
- learning mode
- history
- weak areas
- later: Code Book Practice + AI Tutor

A fixed-duration access product is simpler than a monthly auto-renew subscription for v1.

## Security requirements

- Supabase service role key is server-only.
- Stripe secret key is server-only.
- Stripe webhook signature must be verified.
- Never rely on client-localStorage for authorization.
- Rate-limit grading and AI endpoints.
- Validate all question IDs and answer IDs server-side.
- RLS must prevent users reading other users' attempts.
- Admin/editorial operations must be separated from learner APIs.

## Independent development rule

All product, content, terminology, and UI work must follow `docs/INDEPENDENT_DEVELOPMENT.md`. Competitor products are not source material for questions, explanations, code, wording, or interaction design.

## Copyright/content rule

The production bank should contain original questions and original explanations.

Do not store or publish:
- scans of the ICC book
- copied commercial prep-book questions
- reconstructed confidential exam items
- large verbatim code sections

Store:
- section identifiers
- short factual summaries
- original explanations
- links to official sources where appropriate

## Migration principle

Do not rewrite the working simulator all at once.

Use a staged migration:
1. add database/auth behind feature flags
2. preserve local mode during migration
3. introduce server question projection
4. move session persistence server-side
5. move grading server-side
6. add entitlements/paywall
7. remove local-only production path after parity

## Definition of done for Phase 1

Phase 1 is complete when:
- user can sign in
- user progress persists across devices
- paid/demo entitlement is stored server-side
- a Full Exam session is created by the server
- the client never receives correct answer keys before grading
- final score is computed server-side
- current 110-question Full Exam behavior remains intact
- existing question validation/tests still pass
- no question content is semantically changed
