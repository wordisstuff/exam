# Supabase Setup — Phase 1

This document describes the staged commercial migration. The working local simulator remains the default until server-backed parity is complete.

## 1. Create the project

Create a Supabase project for the QB platform.

Do not put real keys in git.

Copy `.env.example` to `.env.local` and populate:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Keep:

`NEXT_PUBLIC_PLATFORM_DATA_MODE=local`

while validating the migration locally.

Switch to:

`NEXT_PUBLIC_PLATFORM_DATA_MODE=supabase`

to exercise the new account sign-in flow.

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

## 3. Configure email OTP

The Phase 2 sign-in UI expects a numeric email verification code.

In Supabase Auth email templates, configure the email OTP template to include the token, for example using Supabase's token template variable rather than only a magic-link URL.

The browser sends the code to our own `/api/auth/verify-otp` route. The route verifies it with Supabase and stores the returned access/refresh tokens in HttpOnly cookies.

Do not store Supabase access or refresh tokens in localStorage.

## 4. Security model

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

## 5. Auth strategy

Implemented Phase 2 foundation:

- email OTP
- access token in HttpOnly cookie
- refresh token in HttpOnly cookie
- automatic token refresh when `/api/auth/me` detects an expired access token
- server-side authenticated-user lookup
- sign-out cookie clearing
- profile row auto-created by database trigger

No Supabase client library is required for this first auth foundation; the server talks to the documented Supabase Auth REST endpoints directly.

## 6. Current migration boundary

When data mode is `supabase`:

- account identity is remote/server-backed
- dashboard authentication is checked through `/api/auth/me`
- study sessions/history are STILL local during this phase

The dashboard intentionally shows a migration notice in this state.

Do not treat the current remote-auth mode as production-complete until server session creation, grading, and progress persistence are implemented.

## 7. Content migration strategy

The TypeScript question files remain the editorial source of truth during Phase 1.

Do not manually copy the bank into Supabase yet.

A deterministic seed/import pipeline will be added after the server projection and session APIs are in place.

## 8. Why local remains the default

The current main application is known to work entirely from localStorage.

Phase 1 is a staged migration. Enabling Supabase for production before the required server routes exist would create a partial product.

The feature flag is an explicit migration gate, not a learner setting.
