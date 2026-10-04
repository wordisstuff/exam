-- Stripe-backed fixed-duration entitlement hardening.

create unique index if not exists entitlements_checkout_session_unique
  on public.entitlements(stripe_checkout_session_id)
  where stripe_checkout_session_id is not null;

create index if not exists entitlements_payment_intent_idx
  on public.entitlements(stripe_payment_intent_id)
  where stripe_payment_intent_id is not null;
