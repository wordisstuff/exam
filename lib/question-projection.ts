import type { Question } from "./types.ts";

export interface LearnerAnswer {
  id: string;
  text: string;
  textUk?: string;
}

export interface LearnerQuestion {
  id: string;
  primaryCategory: Question["primaryCategory"];
  subcategory: string;
  difficulty: Question["difficulty"];
  type: Question["type"];
  question: string;
  questionUk: string;
  answers: LearnerAnswer[];
  requiredSelections?: number;
  languageTags: string[];
  skills: string[];
}

/**
 * Safe learner projection for future server-backed delivery.
 * Deliberately excludes answer keys, explanations, references and editorial metadata.
 */
export function toLearnerQuestion(question: Question): LearnerQuestion {
  return {
    id: question.id,
    primaryCategory: question.primaryCategory,
    subcategory: question.subcategory,
    difficulty: question.difficulty,
    type: question.type,
    question: question.question,
    questionUk: question.questionUk,
    answers: question.answers.map(({ id, text, textUk }) => ({ id, text, textUk })),
    requiredSelections: question.requiredSelections,
    languageTags: [...question.languageTags],
    skills: [...question.skills],
  };
}
