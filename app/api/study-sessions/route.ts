import { NextResponse } from "next/server";
import { questions } from "@/data/questions";
import { platformDataMode } from "@/lib/platform-env";
import { buildBookPracticeSession, buildServerFullExamSession } from "@/lib/server-session";
import { currentUser } from "@/lib/server-auth";
import { insertStudySession } from "@/lib/supabase-rest-admin";
import { requirePaidAccess } from "@/lib/access-control";
import type { FeedbackMode } from "@/lib/types";

function parseFeedbackMode(value: unknown): FeedbackMode | null {
  return value === "deferred" || value === "immediate" ? value : null;
}

export async function POST(request: Request) {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server study sessions are not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    await requirePaidAccess(user.id);
  } catch (error) {
    const code = (error as Error & { code?: string }).code;
    if (code === "PAYMENT_REQUIRED") {
      return NextResponse.json({ error: "Paid access is required.", code }, { status: 402 });
    }
    return NextResponse.json({ error: "Unable to verify access." }, { status: 500 });
  }

  const body = await request.json().catch(() => null) as {
    mode?: unknown;
    feedbackMode?: unknown;
  } | null;

  if (body?.mode !== "full-exam" && body?.mode !== "book-practice") {
    return NextResponse.json({ error: "Invalid study mode." }, { status: 400 });
  }

  const feedbackMode =
    body.mode === "book-practice"
      ? "immediate"
      : parseFeedbackMode(body.feedbackMode);

  if (!feedbackMode) {
    return NextResponse.json({ error: "Invalid feedback mode." }, { status: 400 });
  }

  try {
    const draft =
      body.mode === "book-practice"
        ? buildBookPracticeSession(questions)
        : buildServerFullExamSession(questions, feedbackMode);

    await insertStudySession({
      id: draft.id,
      userId: user.id,
      bankVersion: draft.bankVersion,
      mode: draft.mode,
      feedbackMode: draft.feedbackMode,
      startedAt: draft.startedAt,
      timeLimitSeconds: draft.timeLimitSeconds,
      questionIds: draft.questionIds,
    });

    return NextResponse.json({
      session: {
        id: draft.id,
        bankVersion: draft.bankVersion,
        mode: draft.mode,
        feedbackMode: draft.feedbackMode,
        startedAt: draft.startedAt,
        timeLimitSeconds: draft.timeLimitSeconds,
        questionIds: draft.questionIds,
        questions: draft.questions,
      },
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create study session." },
      { status: 500 },
    );
  }
}
