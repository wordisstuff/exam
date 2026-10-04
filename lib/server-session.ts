import { EXAM_CONFIG, QUESTION_BANK_VERSION } from "./config.ts";
import { shuffledUnique } from "./engine.ts";
import { fullExamEligibleQuestions } from "./question-validation.ts";
import { toLearnerQuestion, type LearnerQuestion } from "./question-projection.ts";
import type { FeedbackMode, Question } from "./types.ts";

export const BOOK_PRACTICE_QUESTION_COUNT = 20;

export interface ServerStudySessionDraft {
  id: string;
  bankVersion: number;
  mode: "full-exam" | "book-practice";
  feedbackMode: FeedbackMode;
  startedAt: string;
  timeLimitSeconds: number | null;
  questionIds: string[];
  questions: LearnerQuestion[];
}

function eligibleUnique(bank: readonly Question[]) {
  const eligible = fullExamEligibleQuestions(bank);
  const unique = new Map(eligible.map(question => [question.id, question]));
  if (unique.size !== eligible.length) {
    throw new Error("Eligible question IDs must be unique.");
  }
  return [...unique.values()];
}

export function buildServerFullExamSession(
  bank: readonly Question[],
  feedbackMode: FeedbackMode,
  now = new Date(),
  idFactory: () => string = () => crypto.randomUUID(),
  rng: () => number = Math.random,
): ServerStudySessionDraft {
  const eligible = eligibleUnique(bank);

  if (eligible.length < EXAM_CONFIG.questionCount) {
    throw new Error(
      `Full Exam requires at least ${EXAM_CONFIG.questionCount} eligible questions. Current bank: ${eligible.length}.`,
    );
  }

  const picked = shuffledUnique(eligible, EXAM_CONFIG.questionCount, rng);

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

export function buildBookPracticeSession(
  bank: readonly Question[],
  now = new Date(),
  idFactory: () => string = () => crypto.randomUUID(),
  rng: () => number = Math.random,
): ServerStudySessionDraft {
  const eligible = eligibleUnique(bank);
  const count = Math.min(BOOK_PRACTICE_QUESTION_COUNT, eligible.length);

  if (count === 0) {
    throw new Error("Code Book Practice requires at least one eligible question.");
  }

  const picked = shuffledUnique(eligible, count, rng);

  return {
    id: idFactory(),
    bankVersion: QUESTION_BANK_VERSION,
    mode: "book-practice",
    feedbackMode: "immediate",
    startedAt: now.toISOString(),
    timeLimitSeconds: null,
    questionIds: picked.map(question => question.id),
    questions: picked.map(toLearnerQuestion),
  };
}
