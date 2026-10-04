-- Allow authenticated users to claim their completed public demo into study history.

alter table public.study_sessions
  drop constraint if exists study_sessions_mode_check;

alter table public.study_sessions
  add constraint study_sessions_mode_check
  check (mode in ('full-exam', 'quick-test', 'category-practice', 'book-practice', 'demo'));
