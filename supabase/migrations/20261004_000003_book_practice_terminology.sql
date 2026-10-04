-- Rename reserved code-book practice fields to project-specific terminology.
-- This feature has not been launched yet; the migration preserves a clean, independent vocabulary.

alter table public.study_sessions
  drop constraint if exists study_sessions_mode_check;

alter table public.study_sessions
  add constraint study_sessions_mode_check
  check (mode in ('full-exam', 'quick-test', 'category-practice', 'book-practice'));

alter table public.session_answers
  rename column answer_source to response_path;

alter table public.session_answers
  rename column lookup_started_at to book_search_started_at;

alter table public.session_answers
  rename column lookup_completed_at to book_search_completed_at;

alter table public.session_answers
  rename column lookup_seconds to book_search_seconds;

alter table public.session_answers
  rename column submitted_section to reported_section;

alter table public.session_answers
  rename column index_keyword to index_term;

alter table public.session_answers
  drop constraint if exists session_answers_source_check;

alter table public.session_answers
  drop constraint if exists session_answers_lookup_seconds_check;

alter table public.session_answers
  add constraint session_answers_response_path_check
  check (response_path is null or response_path in ('direct', 'book-assisted'));

alter table public.session_answers
  add constraint session_answers_book_search_seconds_check
  check (book_search_seconds is null or book_search_seconds >= 0);
