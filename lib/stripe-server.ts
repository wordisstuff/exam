import { createHmac, timingSafeEqual } from "node:crypto";

export interface StripeCheckoutSession {
  id: string;
  customer?: string | null;
  payment_intent?: string | null;
  payment_status?: string | null;
  metadata?: Record<string, string>;
}

export interface StripeEvent {
  id: string;
  type: string;
  data: {
    object: StripeCheckoutSession;
  };
}

function required(key: string) {
  const value = process.env[key]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

export function entitlementEnforcementEnabled() {
  return process.env.PLATFORM_ENTITLEMENT_ENFORCEMENT?.trim() === "on";
}

export function platformBaseUrl() {
  const value = required("PLATFORM_BASE_URL");
  return value.replace(/\/$/, "");
}

export async function createStripeCheckout(input: {
  userId: string;
  email?: string | null;
}): Promise<{ id: string; url: string }> {
  const secret = required("STRIPE_SECRET_KEY");
  const price = required("STRIPE_PRICE_QB_180_DAY");
  const base = platformBaseUrl();

  const form = new URLSearchParams();
  form.set("mode", "payment");
  form.set("line_items[0][price]", price);
  form.set("line_items[0][quantity]", "1");
  form.set("success_url", `${base}/platform/dashboard?checkout=success`);
  form.set("cancel_url", `${base}/pricing?checkout=cancelled`);
  form.set("metadata[user_id]", input.userId);
  form.set("metadata[product_code]", "qb-180-day");
  if (input.email) form.set("customer_email", input.email);

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: form.toString(),
    cache: "no-store",
  });

  const payload = await response.json() as { id?: string; url?: string; error?: { message?: string } };
  if (!response.ok || !payload.id || !payload.url) {
    throw new Error(payload.error?.message || "Unable to create Stripe Checkout Session");
  }

  return { id: payload.id, url: payload.url };
}

export function verifyStripeWebhookSignature(
  rawBody: string,
  signatureHeader: string,
  secret = required("STRIPE_WEBHOOK_SECRET"),
  nowSeconds = Math.floor(Date.now() / 1000),
  toleranceSeconds = 300,
): boolean {
  const pieces = signatureHeader.split(",").map(piece => piece.trim());
  const timestamp = pieces.find(piece => piece.startsWith("t="))?.slice(2);
  const signatures = pieces.filter(piece => piece.startsWith("v1=")).map(piece => piece.slice(3));
  if (!timestamp || signatures.length === 0 || !/^\d+$/.test(timestamp)) return false;

  const timestampNumber = Number(timestamp);
  if (Math.abs(nowSeconds - timestampNumber) > toleranceSeconds) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`, "utf8")
    .digest("hex");

  const expectedBuffer = Buffer.from(expected, "hex");
  return signatures.some(signature => {
    if (!/^[0-9a-f]{64}$/i.test(signature)) return false;
    const candidate = Buffer.from(signature, "hex");
    return candidate.length === expectedBuffer.length && timingSafeEqual(candidate, expectedBuffer);
  });
}

export function parseStripeEvent(rawBody: string): StripeEvent {
  const parsed = JSON.parse(rawBody) as StripeEvent;
  if (!parsed?.id || !parsed?.type || !parsed?.data?.object) {
    throw new Error("Invalid Stripe event payload");
  }
  return parsed;
}
