import { NextResponse } from "next/server";
import { parseStripeEvent, verifyStripeWebhookSignature } from "@/lib/stripe-server";
import { upsertPaidEntitlementFromCheckout } from "@/lib/supabase-rest-admin";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature || !verifyStripeWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid Stripe signature." }, { status: 400 });
  }

  let event;
  try {
    event = parseStripeEvent(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid Stripe payload." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata?.user_id;
    const productCode = session.metadata?.product_code;

    if (!userId || !productCode) {
      return NextResponse.json({ error: "Checkout metadata is incomplete." }, { status: 400 });
    }

    if (session.payment_status && session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const startsAt = new Date();
    const endsAt = new Date(startsAt);
    endsAt.setUTCDate(endsAt.getUTCDate() + 180);

    await upsertPaidEntitlementFromCheckout({
      userId,
      productCode,
      startsAt: startsAt.toISOString(),
      endsAt: endsAt.toISOString(),
      stripeCustomerId: session.customer ?? null,
      stripeCheckoutSessionId: session.id,
      stripePaymentIntentId: session.payment_intent ?? null,
    });
  }

  return NextResponse.json({ received: true });
}
