import { EXAM_CONFIG } from "./config.ts";
import { exactMatch } from "./engine.ts";
import type { Question, QuestionReference } from "./types.ts";

export interface AnswerFeedback {
  questionId: string;
  correct: boolean;
  correctAnswerIds: string[];
  explanation: string;
  explanationUk?: string;
  reference?: QuestionReference;
}

export interface ServerExamResult {
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
  percentage: number;
  passed: boolean;
  correctness: Record<string, boolean>;
}

export function validateSelectedAnswers(question: Question, selected: unknown): string[] {
  if (!Array.isArray(selected) || !selected.every(value => typeof value === "string")) {
    throw new Error("Selected answer IDs must be an array of strings.");
  }

  if (new Set(selected).size !== selected.length) {
    throw new Error("Selected answer IDs must be unique.");
  }

  const validIds = new Set(question.answers.map(answer => answer.id));
  if (selected.some(id => !validIds.has(id))) {
    throw new Error("One or more selected answer IDs are invalid for this question.");
  }

  const maximum = question.type === "single" ? 1 : question.requiredSelections ?? question.answers.length;
  if (selected.length > maximum) {
    throw new Error(`This question allows at most ${maximum} selected answer(s).`);
  }

  return selected;
}

export function gradeCheckedAnswer(question: Question, selected: string[]): AnswerFeedback {
  const checked = validateSelectedAnswers(question, selected);
  const required = question.type === "single" ? 1 : question.requiredSelections ?? question.correctAnswers.length;

  if (checked.length !== required) {
    throw new Error(`Select exactly ${required} answer(s) before checking.`);
  }

  return {
    questionId: question.id,
    correct: exactMatch(checked, question.correctAnswers),
    correctAnswerIds: [...question.correctAnswers],
    explanation: question.explanation,
    explanationUk: question.explanationUk,
    reference: question.reference,
  };
}

export function gradeCompletedSession(
  questionIds: readonly string[],
  selectedAnswers: Readonly<Record<string, string[]>>,
  bank: readonly Question[],
): ServerExamResult {
  const byId = new Map(bank.map(question => [question.id, question]));
  const correctness: Record<string, boolean> = {};
  let correct = 0;
  let unanswered = 0;

  for (const questionId of questionIds) {
    const question = byId.get(questionId);
    if (!question) throw new Error(`Question not found in authoritative bank: ${questionId}`);

    const selected = selectedAnswers[questionId] ?? [];
    validateSelectedAnswers(question, selected);

    if (selected.length === 0) unanswered++;
    const isCorrect = exactMatch(selected, question.correctAnswers);
    correctness[questionId] = isCorrect;
    if (isCorrect) correct++;
  }

  const total = questionIds.length;
  const incorrect = total - correct - unanswered;
  const percentage = total ? (correct / total) * 100 : 0;

  return {
    correct,
    incorrect,
    unanswered,
    total,
    percentage,
    passed: percentage >= EXAM_CONFIG.passingPercentage,
    correctness,
  };
}

export function postExamReview(questionIds: readonly string[], bank: readonly Question[]) {
  const byId = new Map(bank.map(question => [question.id, question]));
  return questionIds.map(questionId => {
    const question = byId.get(questionId);
    if (!question) throw new Error(`Question not found in authoritative bank: ${questionId}`);
    return {
      questionId,
      correctAnswerIds: [...question.correctAnswers],
      explanation: question.explanation,
      explanationUk: question.explanationUk,
      reference: question.reference,
    };
  });
}
