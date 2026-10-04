import { NextResponse } from "next/server";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import { createStripeCheckout } from "@/lib/stripe-server";

export async function POST() {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Billing is not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const checkout = await createStripeCheckout({
      userId: user.id,
      email: user.email ?? null,
    });
    return NextResponse.json(checkout);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create checkout." },
      { status: 500 },
    );
  }
}
