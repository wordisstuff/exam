-- Ensure trusted server-side Supabase REST calls can access application tables.
-- RLS remains enabled for client roles; the service_role key is server-only.

grant usage on schema public to service_role;

grant all privileges on table public.profiles to service_role;
grant all privileges on table public.entitlements to service_role;
grant all privileges on table public.questions to service_role;
grant all privileges on table public.question_answers to service_role;
grant all privileges on table public.question_keys to service_role;
grant all privileges on table public.question_translations to service_role;
grant all privileges on table public.study_sessions to service_role;
grant all privileges on table public.session_answers to service_role;
grant all privileges on table public.demo_questions to service_role;

-- Keep future application tables created by migrations accessible to trusted server code.
alter default privileges in schema public
  grant all privileges on tables to service_role;
