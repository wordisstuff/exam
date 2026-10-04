import { NextResponse } from "next/server";
import { questions } from "@/data/questions";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import { gradeCompletedSession, postExamReview } from "@/lib/server-grading";
import {
  completeStudySession,
  getOwnedStudySession,
  listSessionAnswers,
  upsertSessionAnswers,
} from "@/lib/supabase-rest-admin";

export async function POST(
  _request: Request,
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
  if (session.status !== "active") {
    return NextResponse.json({ error: "Study session has already been completed or closed." }, { status: 409 });
  }

  const savedAnswers = await listSessionAnswers(sessionId);
  const selectedAnswers: Record<string, string[]> = Object.fromEntries(
    savedAnswers.map(answer => [answer.question_id, answer.selected_answer_ids]),
  );

  let result;
  try {
    result = gradeCompletedSession(session.question_ids, selectedAnswers, questions);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to grade study session." },
      { status: 500 },
    );
  }

  const byQuestion = new Map(savedAnswers.map(answer => [answer.question_id, answer]));
  const checkedAt = new Date().toISOString();

  await upsertSessionAnswers(
    session.question_ids.map(questionId => ({
      sessionId,
      questionId,
      selectedAnswerIds: selectedAnswers[questionId] ?? [],
      checkedAt: byQuestion.get(questionId)?.checked_at ?? checkedAt,
      isCorrect: result.correctness[questionId],
      questionTimeSeconds: byQuestion.get(questionId)?.question_time_seconds ?? 0,
      flagged: byQuestion.get(questionId)?.flagged ?? false,
      responsePath: byQuestion.get(questionId)?.response_path ?? null,
      bookSearchStartedAt: byQuestion.get(questionId)?.book_search_started_at ?? null,
      bookSearchCompletedAt: byQuestion.get(questionId)?.book_search_completed_at ?? null,
      bookSearchSeconds: byQuestion.get(questionId)?.book_search_seconds ?? null,
      reportedSection: byQuestion.get(questionId)?.reported_section ?? null,
      indexTerm: byQuestion.get(questionId)?.index_term ?? null,
    })),
  );

  await completeStudySession(sessionId, user.id, checkedAt);

  return NextResponse.json({
    result: {
      sessionId,
      completedAt: checkedAt,
      ...result,
    },
    review: postExamReview(session.question_ids, questions),
  });
}
