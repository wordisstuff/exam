import { NextResponse } from "next/server";
import { questions } from "@/data/questions";
import { platformDataMode } from "@/lib/platform-env";
import { currentUser } from "@/lib/server-auth";
import {
  gradeCheckedAnswer,
  gradeCompletedSession,
  postExamReview,
} from "@/lib/server-grading";
import { toLearnerQuestion } from "@/lib/question-projection";
import {
  getOwnedStudySession,
  listSessionAnswers,
} from "@/lib/supabase-rest-admin";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  if (platformDataMode() !== "supabase") {
    return NextResponse.json({ error: "Server study sessions are not enabled." }, { status: 409 });
  }

  const user = await currentUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const session = await getOwnedStudySession(id, user.id);
  if (!session) return NextResponse.json({ error: "Study session not found." }, { status: 404 });

  const bank = new Map(questions.map(question => [question.id, question]));
  const sessionQuestions = session.question_ids.map(questionId => bank.get(questionId)).filter(Boolean);
  if (sessionQuestions.length !== session.question_ids.length) {
    return NextResponse.json({ error: "This session references unavailable questions." }, { status: 409 });
  }

  const answers = await listSessionAnswers(id);
  const savedAnswers = Object.fromEntries(
    answers.map(answer => [
      answer.question_id,
      {
        selectedAnswerIds: answer.selected_answer_ids,
        checkedAt: answer.checked_at,
        questionTimeSeconds: answer.question_time_seconds,
        flagged: answer.flagged,
        responsePath: answer.response_path ?? null,
        bookSearchStartedAt: answer.book_search_started_at ?? null,
        bookSearchCompletedAt: answer.book_search_completed_at ?? null,
        bookSearchSeconds: answer.book_search_seconds ?? null,
        reportedSection: answer.reported_section ?? null,
        indexTerm: answer.index_term ?? null,
      },
    ]),
  );

  const checkedFeedback =
    session.feedback_mode === "immediate"
      ? Object.fromEntries(
          answers
            .filter(answer => answer.checked_at)
            .map(answer => {
              const question = bank.get(answer.question_id);
              if (!question) return [answer.question_id, null];
              return [answer.question_id, gradeCheckedAnswer(question, answer.selected_answer_ids)];
            })
            .filter((entry): entry is [string, NonNullable<(typeof entry)[1]>] => entry[1] !== null),
        )
      : {};

  const response: Record<string, unknown> = {
    session: {
      id: session.id,
      bankVersion: session.bank_version,
      mode: session.mode,
      feedbackMode: session.feedback_mode,
      status: session.status,
      startedAt: session.started_at,
      completedAt: session.completed_at,
      timeLimitSeconds: session.time_limit_seconds,
      questionIds: session.question_ids,
      questions: sessionQuestions.map(question => toLearnerQuestion(question!)),
      answers: savedAnswers,
      checkedFeedback,
    },
  };

  if (session.status === "completed") {
    const selections = Object.fromEntries(
      answers.map(answer => [answer.question_id, answer.selected_answer_ids]),
    );
    response.result = gradeCompletedSession(session.question_ids, selections, questions);
    response.review = postExamReview(session.question_ids, questions);
  }

  return NextResponse.json(response);
}
