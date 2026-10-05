-- The TypeScript question bank is still the authoritative source of truth.
-- Until a deterministic Supabase question import exists, session answers must not
-- require a matching row in public.questions. Server routes validate question IDs
-- against the authoritative bank before persisting answers.

alter table public.session_answers
  drop constraint if exists session_answers_question_id_fkey;

create index if not exists session_answers_question_id_idx
  on public.session_answers(question_id);
