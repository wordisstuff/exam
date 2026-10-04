import assert from "node:assert/strict";
import test from "node:test";
import { createHmac } from "node:crypto";
import { verifyStripeWebhookSignature } from "../lib/stripe-server.ts";

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
