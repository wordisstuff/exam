-- Phase 1 commercial foundation for the Minnesota QB practice platform.
-- The existing TypeScript question bank remains the editorial source of truth
-- until a deterministic seed/import pipeline is added.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  preferred_language text not null default 'en',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_preferred_language_check
    check (preferred_language in ('en', 'uk', 'es'))
);

create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_code text not null,
  status text not null default 'pending',
  starts_at timestamptz,
  ends_at timestamptz,
  stripe_customer_id text,
  stripe_checkout_session_id text,
  stripe_payment_intent_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint entitlements_status_check
    check (status in ('pending', 'active', 'expired', 'revoked')),
  constraint entitlements_date_order_check
    check (ends_at is null or starts_at is null or ends_at > starts_at)
);

create index if not exists entitlements_user_id_idx
  on public.entitlements(user_id);

create index if not exists entitlements_active_lookup_idx
  on public.entitlements(user_id, status, ends_at);

create table if not exists public.questions (
  id text primary key,
  bank_version integer not null,
  primary_category text not null,
  subcategory text not null,
  difficulty text not null,
  question_type text not null,
  canonical_question text not null,
  required_selections integer,
  tags jsonb not null default '[]'::jsonb,
  language_tags jsonb not null default '[]'::jsonb,
  skills jsonb not null default '[]'::jsonb,
  editorial_status text not null,
  verification_status text not null,
  source_checked_at timestamptz,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint questions_difficulty_check
    check (difficulty in ('easy', 'medium', 'exam')),
  constraint questions_type_check
    check (question_type in ('single', 'multiple')),
  constraint questions_editorial_status_check
    check (editorial_status in ('sample', 'draft', 'reviewed')),
  constraint questions_verification_status_check
    check (verification_status in ('unverified', 'source-checked')),
  constraint questions_required_selections_check
    check (
      (question_type = 'single' and required_selections is null)
      or
      (question_type = 'multiple' and required_selections is not null and required_selections >= 2)
    )
);

create index if not exists questions_bank_active_idx
  on public.questions(bank_version, active);

create index if not exists questions_category_idx
  on public.questions(primary_category, subcategory);

create table if not exists public.question_answers (
  question_id text not null references public.questions(id) on delete cascade,
  answer_id text not null,
  canonical_text text not null,
  sort_order integer not null,
  primary key (question_id, answer_id),
  unique (question_id, sort_order)
);

create table if not exists public.question_keys (
  question_id text primary key references public.questions(id) on delete cascade,
  correct_answer_ids jsonb not null,
  explanation text not null,
  reference jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint question_keys_correct_answers_array_check
    check (jsonb_typeof(correct_answer_ids) = 'array'),
  constraint question_keys_reference_object_check
    check (jsonb_typeof(reference) = 'object')
);

create table if not exists public.question_translations (
  question_id text not null references public.questions(id) on delete cascade,
  locale text not null,
  question_text text not null,
  explanation_text text,
  answer_texts jsonb not null default '{}'::jsonb,
  reviewed boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (question_id, locale),
  constraint question_translations_locale_check
    check (locale in ('uk', 'es')),
  constraint question_translations_answer_texts_object_check
    check (jsonb_typeof(answer_texts) = 'object')
);

create table if not exists public.study_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  bank_version integer not null,
  mode text not null,
  feedback_mode text not null,
  status text not null default 'active',
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  time_limit_seconds integer,
  current_index integer not null default 0,
  question_ids jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint study_sessions_mode_check
    check (mode in ('full-exam', 'quick-test', 'category-practice', 'code-navigation')),
  constraint study_sessions_feedback_mode_check
    check (feedback_mode in ('deferred', 'immediate')),
  constraint study_sessions_status_check
    check (status in ('active', 'completed', 'abandoned', 'expired')),
  constraint study_sessions_question_ids_array_check
    check (jsonb_typeof(question_ids) = 'array'),
  constraint study_sessions_current_index_check
    check (current_index >= 0),
  constraint study_sessions_time_limit_check
    check (time_limit_seconds is null or time_limit_seconds > 0)
);

create index if not exists study_sessions_user_started_idx
  on public.study_sessions(user_id, started_at desc);

create index if not exists study_sessions_user_status_idx
  on public.study_sessions(user_id, status);

create table if not exists public.session_answers (
  session_id uuid not null references public.study_sessions(id) on delete cascade,
  question_id text not null references public.questions(id) on delete restrict,
  selected_answer_ids jsonb not null default '[]'::jsonb,
  checked_at timestamptz,
  is_correct boolean,
  question_time_seconds integer not null default 0,
  flagged boolean not null default false,
  answer_source text,
  lookup_started_at timestamptz,
  lookup_completed_at timestamptz,
  lookup_seconds integer,
  submitted_section text,
  index_keyword text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (session_id, question_id),
  constraint session_answers_selected_array_check
    check (jsonb_typeof(selected_answer_ids) = 'array'),
  constraint session_answers_time_check
    check (question_time_seconds >= 0),
  constraint session_answers_source_check
    check (answer_source is null or answer_source in ('knew', 'looked-up')),
  constraint session_answers_lookup_seconds_check
    check (lookup_seconds is null or lookup_seconds >= 0)
);

create index if not exists session_answers_question_idx
  on public.session_answers(question_id);

create table if not exists public.demo_questions (
  question_id text primary key references public.questions(id) on delete cascade,
  sort_order integer not null unique,
  active boolean not null default true
);

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    nullif(trim(coalesce(new.raw_user_meta_data ->> 'display_name', new.raw_user_meta_data ->> 'name', '')), '')
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute function public.handle_new_user_profile();

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists entitlements_set_updated_at on public.entitlements;
create trigger entitlements_set_updated_at
before update on public.entitlements
for each row execute function public.set_updated_at();

drop trigger if exists questions_set_updated_at on public.questions;
create trigger questions_set_updated_at
before update on public.questions
for each row execute function public.set_updated_at();

drop trigger if exists question_keys_set_updated_at on public.question_keys;
create trigger question_keys_set_updated_at
before update on public.question_keys
for each row execute function public.set_updated_at();

drop trigger if exists question_translations_set_updated_at on public.question_translations;
create trigger question_translations_set_updated_at
before update on public.question_translations
for each row execute function public.set_updated_at();

drop trigger if exists study_sessions_set_updated_at on public.study_sessions;
create trigger study_sessions_set_updated_at
before update on public.study_sessions
for each row execute function public.set_updated_at();

drop trigger if exists session_answers_set_updated_at on public.session_answers;
create trigger session_answers_set_updated_at
before update on public.session_answers
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.entitlements enable row level security;
alter table public.questions enable row level security;
alter table public.question_answers enable row level security;
alter table public.question_keys enable row level security;
alter table public.question_translations enable row level security;
alter table public.study_sessions enable row level security;
alter table public.session_answers enable row level security;
alter table public.demo_questions enable row level security;

drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

drop policy if exists "entitlements_select_own" on public.entitlements;
create policy "entitlements_select_own"
on public.entitlements
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "study_sessions_select_own" on public.study_sessions;
create policy "study_sessions_select_own"
on public.study_sessions
for select
to authenticated
using ((select auth.uid()) = user_id);

drop policy if exists "session_answers_select_own" on public.session_answers;
create policy "session_answers_select_own"
on public.session_answers
for select
to authenticated
using (
  exists (
    select 1
    from public.study_sessions s
    where s.id = session_answers.session_id
      and s.user_id = (select auth.uid())
  )
);

-- Learners do not receive direct table access to protected question content.
-- Application server routes will use service-role access and return safe projections.
revoke all on table public.question_keys from anon, authenticated;
revoke all on table public.questions from anon, authenticated;
revoke all on table public.question_answers from anon, authenticated;
revoke all on table public.question_translations from anon, authenticated;
revoke all on table public.demo_questions from anon, authenticated;

-- Paid entitlement state must only be written by trusted server/webhook code.
revoke insert, update, delete on table public.entitlements from anon, authenticated;

-- Session writes are intentionally server-controlled so answer IDs, timing and grading
-- can be validated against the authoritative bank before persistence.
revoke insert, update, delete on table public.study_sessions from anon, authenticated;
revoke insert, update, delete on table public.session_answers from anon, authenticated;
