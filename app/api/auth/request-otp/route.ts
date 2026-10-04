import { NextResponse } from "next/server";
import { platformDataMode } from "@/lib/platform-env";
import { requestEmailOtp } from "@/lib/supabase-auth-rest";

function validEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server auth is not enabled." }, { status: 409 });
  }

  const body = await request.json().catch(() => null) as { email?: unknown } | null;
  if (!validEmail(body?.email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    await requestEmailOtp(body.email.trim().toLowerCase());
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send sign-in code." },
      { status: 400 },
    );
  }
}
