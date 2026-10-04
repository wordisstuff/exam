-- Make Stripe Checkout entitlement upserts compatible with PostgREST on_conflict.
-- A normal UNIQUE index still permits multiple NULL values in PostgreSQL.

drop index if exists public.entitlements_checkout_session_unique;

create unique index entitlements_checkout_session_unique
  on public.entitlements(stripe_checkout_session_id);
