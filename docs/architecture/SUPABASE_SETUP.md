# Supabase Setup — Phase 1

This document describes the first infrastructure step only. The working local simulator remains the default until server-backed parity is complete.

## 1. Create the project

Create a Supabase project for the QB platform.

Do not put real keys in git.

Copy `.env.example` to `.env.local` and populate:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Keep:

`NEXT_PUBLIC_PLATFORM_DATA_MODE=local`

until auth/session/question routes are implemented and validated.

## 2. Apply migrations

Apply the SQL files under:

`supabase/migrations/`

The initial migration creates:

- profiles
- entitlements
- questions
- question_answers
- question_keys
- question_translations
- study_sessions
- session_answers
- demo_questions

It also creates Row Level Security policies.

## 3. Security model

Normal authenticated learners may:

- read/update their own profile
- read their own entitlements
- read their own sessions
- read answers that belong to their own sessions

Normal authenticated learners may NOT directly read:

- question keys
- correct answer IDs
- private explanations
- editorial/verification metadata

Question delivery and grading will be exposed later through server-controlled application routes.

The Supabase service-role key is server-only.

## 4. Auth strategy

Planned first auth flow:

- email magic link / OTP
- one profile per auth user

The initial migration includes a trigger that creates a profile when a new auth user is created.

## 5. Content migration strategy

The TypeScript question files remain the editorial source of truth during Phase 1.

Do not manually copy the bank into Supabase yet.

A deterministic seed/import pipeline will be added after the server projection and session APIs are in place.

## 6. Why data mode defaults to local

The current main application is known to work entirely from localStorage.

Phase 1 is a staged migration. Setting the flag to Supabase before the required server routes exist would create a partial, insecure product.

The feature flag is an explicit migration gate, not a learner setting.
