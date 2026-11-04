# Learning V2 implementation status

Draft, not ready for production. Main and question inventory unchanged.

Implemented: isolated authenticated paid API at /api/learning, service-role-only storage migration, optimistic revision checks, immutable submitted answers, server-only checkpoint projection, starter mobile layout at /learning, optional reference/Index/self-reported book usage. Tests cover every 0–110 reveal boundary and resume after five answers.

Enable only in a dedicated Preview after applying the learning_cycles migration: LEARNING_V2_ENABLED=true. No production database migration was applied. Connected Supabase projects could not be identified as Exam; do not apply to WeDo projects.

Outstanding: database integration/RLS/concurrency tests against the correct project; authenticated browser E2E; dashboard migration from legacy learning flow; draft selections and active timing persistence across refresh/device switch; checkpoint pause state; history/weak-topic aggregate; repeated cycles; full checkpoint detail with own answer/time; theme and intensity controls; EN/UK/ES; iPhone visual/accessibility QA.

npm ci succeeds with a writable cache and network access. Dependency audit reports existing vulnerabilities, including Next.js; npm reports no automatic fix for several packages. A dependency upgrade needs separate regression verification; no force upgrade performed.

## Follow-up: configuration and runtime
Vercel project prj_lWJtwiUMQwiJncv57abel98qQkco (exam) has NEXT_PUBLIC_SUPABASE_URL pointing to project erwgnlrasmrfxwbtcuua. Supabase variables are Production-only; no Preview database is configured. This project is absent from the connected Supabase account. Do not copy production credentials into Preview or apply migrations until the database is confirmed. No migrations applied.

Added persisted runtime timestamps, pause/resume actions, explicit draft save and draft preservation on pause; server-derived submitted question duration; pause on checkpoint review; full released-checkpoint history with own answer and timing; initial UK/ES interface copy. Runtime tests cover pauses, reading, overtime and serialized resume. Full localization (including history labels and errors), automatic draft save, theme controls, real browser and database tests remain incomplete.
