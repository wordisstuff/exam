import { NextResponse } from "next/server";
import { questions } from "@/data/questions";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import { buildProgressSummary } from "@/lib/server-progress";
import {
  listAnswersForSessionIds,
  listUserStudySessions,
} from "@/lib/supabase-rest-admin";

export async function GET() {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server progress is not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const sessions = await listUserStudySessions(user.id);
    const answers = await listAnswersForSessionIds(sessions.map(session => session.id));
    return NextResponse.json({
      progress: buildProgressSummary(sessions, answers, questions),
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load progress." },
      { status: 500 },
    );
  }
}
