-- Make public-demo claiming retry-safe without blocking future demo attempts.

alter table public.study_sessions
  add column if not exists demo_claim_key text;

create unique index if not exists study_sessions_demo_claim_key_unique
  on public.study_sessions(demo_claim_key);
