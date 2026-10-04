import { NextResponse } from "next/server";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import { displayNameFromUser } from "@/lib/supabase-auth-rest";

export async function GET() {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server auth is not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email ?? null,
      displayName: displayNameFromUser(user),
    },
  });
}
