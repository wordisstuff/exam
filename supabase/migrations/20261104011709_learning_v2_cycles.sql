create table public.learning_cycles (
 id uuid primary key,
 user_id uuid not null unique references auth.users(id) on delete cascade,
 revision integer not null default 0 check (revision >= 0),
 state jsonb not null check (jsonb_typeof(state) = 'object'),
 created_at timestamptz not null default now()
);
alter table public.learning_cycles enable row level security;
revoke all on public.learning_cycles from public, anon, authenticated;
grant select, insert, update on public.learning_cycles to service_role;
