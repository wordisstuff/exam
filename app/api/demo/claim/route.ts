import { NextResponse } from "next/server";
import { currentUser } from "@/lib/server-auth";
import { DEMO_QUESTION_IDS, checkDemoAnswer } from "@/lib/demo-bank";
import { QUESTION_BANK_VERSION } from "@/lib/config";
import {
  completeStudySession,
  insertStudySession,
  upsertSessionAnswers,
} from "@/lib/supabase-rest-admin";
import { platformDataMode } from "@/lib/platform-env";

interface DemoClaimAnswer {
  questionId: string;
  selectedAnswerIds: string[];
  bookSearchSeconds?: number | null;
}

export async function POST(request: Request) {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Demo claiming is not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json().catch(() => null) as {
    answers?: unknown;
    startedAt?: unknown;
  } | null;

  if (!Array.isArray(body?.answers)) {
    return NextResponse.json({ error: "Invalid demo claim." }, { status: 400 });
  }

  const answers: DemoClaimAnswer[] = [];
  for (const item of body.answers) {
    if (
      typeof item !== "object" ||
      item === null ||
      typeof (item as { questionId?: unknown }).questionId !== "string" ||
      !Array.isArray((item as { selectedAnswerIds?: unknown }).selectedAnswerIds)
    ) {
      return NextResponse.json({ error: "Invalid demo answer." }, { status: 400 });
    }

    const questionId = (item as { questionId: string }).questionId;
    if (!DEMO_QUESTION_IDS.includes(questionId as (typeof DEMO_QUESTION_IDS)[number])) {
      return NextResponse.json({ error: "Question is not part of the public demo." }, { status: 400 });
    }

    const selectedAnswerIds = (item as { selectedAnswerIds: unknown[] }).selectedAnswerIds
      .filter((value): value is string => typeof value === "string");

    const rawSeconds = (item as { bookSearchSeconds?: unknown }).bookSearchSeconds;
    const bookSearchSeconds =
      typeof rawSeconds === "number" && Number.isFinite(rawSeconds)
        ? Math.max(0, Math.floor(rawSeconds))
        : null;

    answers.push({ questionId, selectedAnswerIds, bookSearchSeconds });
  }

  const byId = new Map(answers.map(answer => [answer.questionId, answer]));
  const ordered = DEMO_QUESTION_IDS.map(questionId => byId.get(questionId)).filter(Boolean) as DemoClaimAnswer[];

  if (ordered.length !== DEMO_QUESTION_IDS.length) {
    return NextResponse.json({ error: "Complete all 10 demo questions before saving progress." }, { status: 400 });
  }

  const startedAt =
    typeof body.startedAt === "string" && !Number.isNaN(Date.parse(body.startedAt))
      ? new Date(body.startedAt).toISOString()
      : new Date().toISOString();

  const sessionId = crypto.randomUUID();

  try {
    await insertStudySession({
      id: sessionId,
      userId: user.id,
      bankVersion: QUESTION_BANK_VERSION,
      mode: "demo",
      feedbackMode: "immediate",
      startedAt,
      timeLimitSeconds: null,
      questionIds: [...DEMO_QUESTION_IDS],
    });

    const checkedAt = new Date().toISOString();
    const rows = ordered.map(answer => {
      const feedback = checkDemoAnswer(answer.questionId, answer.selectedAnswerIds);
      const usedBook = (answer.bookSearchSeconds ?? 0) > 0;
      return {
        sessionId,
        questionId: answer.questionId,
        selectedAnswerIds: answer.selectedAnswerIds,
        checkedAt,
        isCorrect: feedback.correct,
        questionTimeSeconds: 0,
        flagged: false,
        responsePath: usedBook ? "book-assisted" as const : "direct" as const,
        bookSearchSeconds: usedBook ? answer.bookSearchSeconds : null,
      };
    });

    await upsertSessionAnswers(rows);
    await completeStudySession(sessionId, checkedAt);

    return NextResponse.json({
      saved: true,
      sessionId,
      score: rows.filter(row => row.isCorrect).length,
      total: rows.length,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to save demo progress." },
      { status: 500 },
    );
  }
}
