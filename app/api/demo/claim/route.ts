import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { currentUser } from "@/lib/server-auth";
import { DEMO_QUESTION_IDS, checkDemoAnswer } from "@/lib/demo-bank";
import { QUESTION_BANK_VERSION } from "@/lib/config";
import {
  completeStudySession,
  getClaimedDemoSession,
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
  const userId = userId;

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

  if (answers.length !== DEMO_QUESTION_IDS.length || byId.size !== DEMO_QUESTION_IDS.length || ordered.length !== DEMO_QUESTION_IDS.length) {
    return NextResponse.json({ error: "Complete all 10 demo questions before saving progress." }, { status: 400 });
  }

  const startedAt =
    typeof body.startedAt === "string" && !Number.isNaN(Date.parse(body.startedAt))
      ? new Date(body.startedAt).toISOString()
      : new Date().toISOString();

  const claimPayload = JSON.stringify({
    userId: userId,
    bankVersion: QUESTION_BANK_VERSION,
    startedAt,
    answers: ordered.map(answer => ({
      questionId: answer.questionId,
      selectedAnswerIds: [...answer.selectedAnswerIds].sort(),
      bookSearchSeconds: answer.bookSearchSeconds ?? null,
    })),
  });
  const demoClaimKey = createHash("sha256").update(claimPayload).digest("hex");

  const gradedRows = ordered.map(answer => {
    const feedback = checkDemoAnswer(answer.questionId, answer.selectedAnswerIds);
    const usedBook = (answer.bookSearchSeconds ?? 0) > 0;
    return {
      questionId: answer.questionId,
      selectedAnswerIds: answer.selectedAnswerIds,
      isCorrect: feedback.correct,
      responsePath: usedBook ? "book-assisted" as const : "direct" as const,
      bookSearchSeconds: usedBook ? answer.bookSearchSeconds : null,
    };
  });

  async function persistClaim(sessionId: string) {
    const checkedAt = new Date().toISOString();
    const rows = gradedRows.map(answer => ({
      sessionId,
      ...answer,
      checkedAt,
      questionTimeSeconds: 0,
      flagged: false,
    }));

    await upsertSessionAnswers(rows);
    await completeStudySession(sessionId, userId, checkedAt);
    return rows;
  }

  try {
    let existing = await getClaimedDemoSession(userId, demoClaimKey);
    let duplicate = Boolean(existing);

    if (existing?.status === "completed") {
      return NextResponse.json({
        saved: true,
        duplicate: true,
        sessionId: existing.id,
        score: gradedRows.filter(row => row.isCorrect).length,
        total: gradedRows.length,
      });
    }

    let sessionId = existing?.id;
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      try {
        await insertStudySession({
          id: sessionId,
          userId: userId,
          bankVersion: QUESTION_BANK_VERSION,
          mode: "demo",
          feedbackMode: "immediate",
          startedAt,
          timeLimitSeconds: null,
          questionIds: [...DEMO_QUESTION_IDS],
          demoClaimKey,
        });
      } catch (error) {
        existing = await getClaimedDemoSession(userId, demoClaimKey);
        if (!existing) throw error;
        sessionId = existing.id;
        duplicate = true;
        if (existing.status === "completed") {
          return NextResponse.json({
            saved: true,
            duplicate: true,
            sessionId,
            score: gradedRows.filter(row => row.isCorrect).length,
            total: gradedRows.length,
          });
        }
      }
    }

    const rows = await persistClaim(sessionId);

    return NextResponse.json({
      saved: true,
      duplicate,
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
