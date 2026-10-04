import { NextResponse } from "next/server";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import { getAccessState } from "@/lib/access-control";

export async function GET() {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server access control is not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    return NextResponse.json({ access: await getAccessState(user.id) });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load access." },
      { status: 500 },
    );
  }
}
