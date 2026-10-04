import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/auth-cookies";
import { platformDataMode } from "@/lib/platform-env";
import { displayNameFromUser, verifyEmailOtp } from "@/lib/supabase-auth-rest";

function validEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function validToken(value: unknown): value is string {
  return typeof value === "string" && /^[0-9]{6,8}$/.test(value.trim());
}

export async function POST(request: Request) {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server auth is not enabled." }, { status: 409 });
  }

  const body = await request.json().catch(() => null) as { email?: unknown; token?: unknown } | null;
  if (!validEmail(body?.email) || !validToken(body?.token)) {
    return NextResponse.json({ error: "Enter a valid email and verification code." }, { status: 400 });
  }

  try {
    const session = await verifyEmailOtp(body.email.trim().toLowerCase(), body.token.trim());
    const store = await cookies();
    setAuthCookies(store, session);
    return NextResponse.json({
      ok: true,
      user: {
        id: session.user.id,
        email: session.user.email ?? null,
        displayName: displayNameFromUser(session.user),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to verify sign-in code." },
      { status: 400 },
    );
  }
}
