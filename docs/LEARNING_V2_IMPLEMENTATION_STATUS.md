# Learning V2 implementation status

Draft, not ready for production. Main and question inventory unchanged.

Implemented: isolated authenticated paid API at /api/learning, service-role-only storage migration, optimistic revision checks, immutable submitted answers, server-only checkpoint projection, starter mobile layout at /learning, optional reference/Index/self-reported book usage. Tests cover every 0–110 reveal boundary and resume after five answers.

Enable only in a dedicated Preview after applying the learning_cycles migration: LEARNING_V2_ENABLED=true. No production database migration was applied. Connected Supabase projects could not be identified as Exam; do not apply to WeDo projects.

Outstanding: database integration/RLS/concurrency tests against the correct project; authenticated browser E2E; dashboard migration from legacy learning flow; draft selections and active timing persistence across refresh/device switch; checkpoint pause state; history/weak-topic aggregate; repeated cycles; full checkpoint detail with own answer/time; theme and intensity controls; EN/UK/ES; iPhone visual/accessibility QA.

npm ci succeeds with a writable cache and network access. Dependency audit reports existing vulnerabilities, including Next.js; npm reports no automatic fix for several packages. A dependency upgrade needs separate regression verification; no force upgrade performed.

## Follow-up: configuration and runtime
Vercel project prj_lWJtwiUMQwiJncv57abel98qQkco (exam) has NEXT_PUBLIC_SUPABASE_URL pointing to project erwgnlrasmrfxwbtcuua. Supabase variables are Production-only; no Preview database is configured. This project is absent from the connected Supabase account. Do not copy production credentials into Preview or apply migrations until the database is confirmed. No migrations applied.

Added persisted runtime timestamps, pause/resume actions, explicit draft save and draft preservation on pause; server-derived submitted question duration; pause on checkpoint review; full released-checkpoint history with own answer and timing; initial UK/ES interface copy. Runtime tests cover pauses, reading, overtime and serialized resume. Full localization (including history labels and errors), automatic draft save, theme controls, real browser and database tests remain incomplete.

## Follow-up: autosave, presentation and analytics
Added debounced draft autosave (700 ms), pending-save indication and unload warning. Controls are locked during requests to avoid overwriting edits with an older server response. Save failures remain visible and can be retried manually. Added scoped Light/Dark/System and Calm/Exam controls with persisted preferences, translated main study/history/settings labels and released-history weak-topic analysis. Book-use self-report and section-entered counts remain separate. Added analytics test. Real browser autosave/concurrency and database behavior still require verification.

Confirmed by owner: project is mn-qb-exam (erwgnlrasmrfxwbtcuua). Direct get_project and list_tables attempts both returned permission denied. No SQL executed. Reconnect the Supabase plugin with an account belonging to the organization that owns mn-qb-exam, authorizing this project. Vercel Preview still has no Supabase variables; do not reuse WeDo or silently copy Production credentials. Read the existing schema before applying any migration.
