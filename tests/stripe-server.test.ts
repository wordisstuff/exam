import assert from "node:assert/strict";
import test from "node:test";
import { createHmac } from "node:crypto";
import {
  entitlementStartFromStripeEvent,
  paidCheckoutSessionFromEvent,
  verifyStripeWebhookSignature,
} from "../lib/stripe-server.ts";

test("Stripe webhook verification accepts a matching recent v1 signature", () => {
  const body = '{"id":"evt_1","type":"checkout.session.completed","data":{"object":{"id":"cs_1"}}}';
  const secret = "whsec_test";
  const timestamp = 1_800_000_000;
  const digest = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
  assert.equal(
    verifyStripeWebhookSignature(body, `t=${timestamp},v1=${digest}`, secret, timestamp),
    true,
  );
});

test("Stripe webhook verification rejects stale or incorrect signatures", () => {
  const body = "{}";
  const secret = "whsec_test";
  const timestamp = 1_800_000_000;
  const digest = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
  assert.equal(verifyStripeWebhookSignature(body, `t=${timestamp},v1=${digest}`, secret, timestamp + 301), false);
  assert.equal(verifyStripeWebhookSignature(body, `t=${timestamp},v1=${"0".repeat(64)}`, secret, timestamp), false);
});


test("paid checkout helper waits for async payment and accepts async success", () => {
  const unpaidCompleted = {
    id: "evt_unpaid",
    type: "checkout.session.completed",
    data: { object: { id: "cs_1", payment_status: "unpaid" } },
  };
  assert.equal(paidCheckoutSessionFromEvent(unpaidCompleted), null);

  const asyncSucceeded = {
    id: "evt_async",
    type: "checkout.session.async_payment_succeeded",
    data: { object: { id: "cs_1", payment_status: "paid" } },
  };
  assert.equal(paidCheckoutSessionFromEvent(asyncSucceeded)?.id, "cs_1");
});

test("paid checkout helper accepts immediately paid checkout and uses Stripe event time", () => {
  const event = {
    id: "evt_paid",
    type: "checkout.session.completed",
    created: 1_800_000_000,
    data: { object: { id: "cs_2", payment_status: "paid" } },
  };
  assert.equal(paidCheckoutSessionFromEvent(event)?.id, "cs_2");
  assert.equal(entitlementStartFromStripeEvent(event).toISOString(), new Date(1_800_000_000 * 1000).toISOString());
});
