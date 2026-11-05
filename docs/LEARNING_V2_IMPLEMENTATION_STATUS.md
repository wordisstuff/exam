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

## Database rollout and Preview
The owner authorized the additive migration on mn-qb-exam (erwgnlrasmrfxwbtcuua). The original nine public tables and RLS were confirmed before applying anything. The first eight SQL files are reflected in the live schema even though their historical versions were absent from the migration ledger:

| Repository migration | Verified on Exam |
| --- | --- |
| Commercial foundation | Nine core tables, owner RLS policies, update triggers and protected question tables |
| Entitlement checkout uniques | Payment-intent index present; checkout index superseded below |
| Book Practice terminology | Renamed columns and response-path constraints present |
| Demo claim mode | `demo` allowed in the session mode constraint |
| Entitlement checkout unique | Non-partial unique checkout-session index present |
| Demo claim idempotency | `demo_claim_key` and unique index present |
| Service-role privileges | Server role grants present on existing application tables |
| TypeScript bank session answers | Question FK absent and question ID index present |

Only Learning V2 was applied, using the migration ledger version `20261105042841`. It creates `learning_cycles` with RLS and unique indexes for `id` and `user_id`. The client roles have no direct table privileges; `service_role` has SELECT/INSERT/UPDATE only. Transactional role probes denied direct reads for anonymous and two authenticated identities. No historical migration was replayed. No existing application data or policies were changed.

Vercel reuses the existing Exam Supabase settings for Preview without changing their values. The Learning V2 flag and entitlement enforcement are limited to Preview on `feature/learning-mode-v2`. The Learning API also rejects Production. No Production deployment was triggered. The mobile checkpoint detail uses a full-screen dialog; history groups released results by checkpoint, with localized labels and recovery for stale progress.

### Verification after rollout

- Before/after catalog comparison: all 41 original constraints, 22 original indexes, 5 policies and 150 grants match. `learning_cycles` is the only added public table; its RLS and both unique indexes were verified on the live project.
- Supabase Data API returned 401 for `anon` and 403 for two separately authenticated test users. A rollback-only server-role transaction verified inserts, owner-filtered updates, and rejection of stale revisions. Both temporary test users and their test entitlement were removed.
- `npm run test:learning-http` exercises the built Next.js route with an isolated Auth/Data API fixture. It verifies anonymous and unpaid requests, two owners, 110 unique questions, draft round-trip, 0/11 answer reveal boundaries, repeat submission, next block, pause/reload/resume, and history. The test runs after build in CI.
- The dashboard links to Learning V2 only when the server says the feature is enabled; the existing Learning route remains the fallback. The flag cannot enable the new API on Vercel Production.
- Preview deployment is protected by Vercel SSO. The connector can fetch the page but cannot attach a test app session. A temporary deployment share link was revoked after it redirected the test runner to SSO; a project-wide bypass was not created. Local Chromium could not launch due to macOS process permissions. Authenticated browser E2E and iPhone visual QA remain open. No Production deployment was launched.
