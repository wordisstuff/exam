import { questions } from "../data/questions.ts";
import { gradeCheckedAnswer } from "./server-grading.ts";
import { toLearnerQuestion } from "./question-projection.ts";

export const DEMO_QUESTION_IDS = [
  "life-safety-draft-003",
  "life-safety-draft-004",
  "energy-002",
  "energy-003",
  "foundations-001",
  "foundations-004",
  "foundations-005",
  "carpentry-004",
  "carpentry-005",
  "carpentry-006",
] as const;

export const DEMO_BOOK_PRACTICE_IDS = new Set<string>([
  "foundations-004",
  "carpentry-005",
]);

const questionById = new Map(questions.map(question => [question.id, question]));

export function demoQuestions() {
  return DEMO_QUESTION_IDS.map(id => {
    const question = questionById.get(id);
    if (!question) throw new Error(`Demo question is missing from canonical bank: ${id}`);
    if (question.editorialStatus !== "reviewed" || question.verificationStatus !== "source-checked") {
      throw new Error(`Demo question is not production eligible: ${id}`);
    }
    return {
      ...toLearnerQuestion(question),
      codeBookDemo: DEMO_BOOK_PRACTICE_IDS.has(id),
    };
  });
}

export function checkDemoAnswer(questionId: string, selectedAnswerIds: string[]) {
  if (!DEMO_QUESTION_IDS.includes(questionId as (typeof DEMO_QUESTION_IDS)[number])) {
    throw new Error("Question is not part of the public demo.");
  }

  const question = questionById.get(questionId);
  if (!question) throw new Error("Demo question is unavailable.");

  return gradeCheckedAnswer(question, selectedAnswerIds);
}
