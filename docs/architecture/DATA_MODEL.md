# Phase 1 — Proposed Data Model

This is a design document, not yet a migration.

## profiles

- id uuid PK, references auth.users
- display_name text
- preferred_language text default 'en'
- created_at timestamptz
- updated_at timestamptz

## entitlements

- id uuid PK
- user_id uuid
- product_code text
- status text
- starts_at timestamptz
- ends_at timestamptz
- stripe_customer_id text nullable
- stripe_checkout_session_id text nullable
- stripe_payment_intent_id text nullable
- created_at timestamptz
- updated_at timestamptz

Suggested status values:
- active
- expired
- revoked
- pending

Never grant paid access from a client redirect alone. Activate entitlement from verified Stripe webhook state.

## questions

- id text PK
- bank_version integer
- primary_category text
- subcategory text
- difficulty text
- question_type text
- canonical_question text
- required_selections integer nullable
- tags jsonb
- language_tags jsonb
- skills jsonb
- editorial_status text
- verification_status text
- source_checked_at timestamptz nullable
- active boolean default true

## question_answers

- question_id text
- answer_id text
- canonical_text text
- sort_order integer
- PRIMARY KEY(question_id, answer_id)

No learner-facing query may expose correctness from this table.

## question_keys

Private/server-only logical table or protected columns:
- question_id text PK
- correct_answer_ids jsonb
- explanation text
- reference jsonb

Access should be denied to normal authenticated users.

## question_translations

- question_id text
- locale text
- question_text text
- explanation_text text nullable
- answer_texts jsonb
- reviewed boolean default false
- PRIMARY KEY(question_id, locale)

Initial locales:
- uk
Future:
- es

## study_sessions

- id uuid PK
- user_id uuid
- bank_version integer
- mode text
- feedback_mode text
- status text
- started_at timestamptz
- completed_at timestamptz nullable
- time_limit_seconds integer nullable
- current_index integer default 0
- question_ids jsonb
- created_at timestamptz
- updated_at timestamptz

Status:
- active
- completed
- abandoned
- expired

## session_answers

- session_id uuid
- question_id text
- selected_answer_ids jsonb
- checked_at timestamptz nullable
- is_correct boolean nullable
- question_time_seconds integer default 0
- flagged boolean default false

Future Code Navigation fields:
- answer_source text nullable
- lookup_started_at timestamptz nullable
- lookup_completed_at timestamptz nullable
- lookup_seconds integer nullable
- submitted_section text nullable
- index_keyword text nullable

PRIMARY KEY(session_id, question_id)

## attempts

Could be represented by completed study_sessions instead of duplicating data.

Recommendation:
Do not create a second full attempt record initially. Use completed study_sessions + session_answers and expose a server projection equivalent to the current Attempt type.

## demo_questions

Do not duplicate question content.

Use a small table/list of approved question IDs:
- question_id
- sort_order
- active

## RLS policy intent

profiles:
- user can select/update own row

entitlements:
- user can select own rows
- only server/service role can insert/update paid entitlement state

study_sessions:
- user can select own rows
- create/update through server API for stricter validation

session_answers:
- user can select own rows through ownership relation
- writes preferably through server API

questions/question_answers:
- authenticated/demo read only through server projection, not direct unrestricted table reads

question_keys:
- no learner access

question_translations:
- exposed only through server question projection

## Compatibility mapping

Current local:
- Profile -> profiles
- Session -> study_sessions + session_answers
- Attempt -> completed study_session projection
- questions TS files -> import seed pipeline into question tables

The existing TS question files remain the editorial source of truth during the first migration. Database seeding should be deterministic and bank-versioned.
