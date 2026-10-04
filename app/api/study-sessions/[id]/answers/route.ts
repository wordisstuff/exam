import { NextResponse } from "next/server";
import { questions } from "@/data/questions";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import { gradeCheckedAnswer, validateSelectedAnswers } from "@/lib/server-grading";
import {
  getOwnedStudySession,
  getSessionAnswer,
  upsertSessionAnswer,
} from "@/lib/supabase-rest-admin";

function activeAndWithinTime(session: {
  status: string;
  started_at: string;
  time_limit_seconds: number | null;
}) {
  if (session.status !== "active") return false;
  if (!session.time_limit_seconds) return true;
  const deadline = new Date(session.started_at).getTime() + session.time_limit_seconds * 1000;
  return Date.now() < deadline;
}

export async function POST(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server grading is not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id: sessionId } = await context.params;
  const session = await getOwnedStudySession(sessionId, user.id);
  if (!session) return NextResponse.json({ error: "Study session not found." }, { status: 404 });
  if (!activeAndWithinTime(session)) {
    return NextResponse.json({ error: "This study session is no longer accepting answers." }, { status: 409 });
  }

  const body = await request.json().catch(() => null) as {
    questionId?: unknown;
    selectedAnswerIds?: unknown;
    questionTimeSeconds?: unknown;
    flagged?: unknown;
    check?: unknown;
  } | null;

  if (typeof body?.questionId !== "string" || !session.question_ids.includes(body.questionId)) {
    return NextResponse.json({ error: "Question does not belong to this study session." }, { status: 400 });
  }

  const question = questions.find(item => item.id === body.questionId);
  if (!question) return NextResponse.json({ error: "Question is unavailable." }, { status: 409 });

  let selected: string[];
  try {
    selected = validateSelectedAnswers(question, body.selectedAnswerIds);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Invalid answer selection." },
      { status: 400 },
    );
  }

  const questionTimeSeconds =
    typeof body.questionTimeSeconds === "number" && Number.isFinite(body.questionTimeSeconds)
      ? Math.max(0, Math.floor(body.questionTimeSeconds))
      : undefined;

  const flagged = typeof body.flagged === "boolean" ? body.flagged : undefined;
  const wantsCheck = body.check === true;

  if (session.feedback_mode === "deferred" && wantsCheck) {
    return NextResponse.json({ error: "Exam Mode does not reveal correctness before finish." }, { status: 403 });
  }

  if (session.feedback_mode === "immediate" && wantsCheck) {
    const existing = await getSessionAnswer(sessionId, question.id);
    if (existing?.checked_at) {
      return NextResponse.json({ error: "This answer has already been checked and is locked." }, { status: 409 });
    }

    try {
      const feedback = gradeCheckedAnswer(question, selected);
      await upsertSessionAnswer({
        sessionId,
        questionId: question.id,
        selectedAnswerIds: selected,
        checkedAt: new Date().toISOString(),
        isCorrect: feedback.correct,
        questionTimeSeconds,
        flagged,
      });

      return NextResponse.json({
        saved: true,
        checked: true,
        feedback,
      });
    } catch (error) {
      return NextResponse.json(
        { error: error instanceof Error ? error.message : "Unable to check answer." },
        { status: 400 },
      );
    }
  }

  const existing = session.feedback_mode === "immediate"
    ? await getSessionAnswer(sessionId, question.id)
    : null;

  if (existing?.checked_at) {
    return NextResponse.json({ error: "This checked answer is locked." }, { status: 409 });
  }

  await upsertSessionAnswer({
    sessionId,
    questionId: question.id,
    selectedAnswerIds: selected,
    questionTimeSeconds,
    flagged,
  });

  return NextResponse.json({ saved: true, checked: false });
}
