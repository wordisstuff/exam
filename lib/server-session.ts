import { EXAM_CONFIG, QUESTION_BANK_VERSION } from "./config.ts";
import { shuffledUnique } from "./engine.ts";
import { fullExamEligibleQuestions } from "./question-validation.ts";
import { toLearnerQuestion, type LearnerQuestion } from "./question-projection.ts";
import type { FeedbackMode, Question } from "./types.ts";

export interface ServerFullExamSessionDraft {
  id: string;
  bankVersion: number;
  mode: "full-exam";
  feedbackMode: FeedbackMode;
  startedAt: string;
  timeLimitSeconds: number;
  questionIds: string[];
  questions: LearnerQuestion[];
}

export function buildServerFullExamSession(
  bank: readonly Question[],
  feedbackMode: FeedbackMode,
  now = new Date(),
  idFactory: () => string = () => crypto.randomUUID(),
  rng: () => number = Math.random,
): ServerFullExamSessionDraft {
  const eligible = fullExamEligibleQuestions(bank);
  const unique = new Map(eligible.map(question => [question.id, question]));

  if (unique.size !== eligible.length) {
    throw new Error("Eligible question IDs must be unique.");
  }

  if (unique.size < EXAM_CONFIG.questionCount) {
    throw new Error(
      `Full Exam requires at least ${EXAM_CONFIG.questionCount} eligible questions. Current bank: ${unique.size}.`,
    );
  }

  const picked = shuffledUnique([...unique.values()], EXAM_CONFIG.questionCount, rng);

  return {
    id: idFactory(),
    bankVersion: QUESTION_BANK_VERSION,
    mode: "full-exam",
    feedbackMode,
    startedAt: now.toISOString(),
    timeLimitSeconds: EXAM_CONFIG.durationSeconds,
    questionIds: picked.map(question => question.id),
    questions: picked.map(toLearnerQuestion),
  };
}
