import type { Difficulty, PrimaryCategory, Question } from "../lib/types.ts";

export interface VerifiedSeed {
  primaryCategory?: PrimaryCategory;
  subcategory?: string;
  question: string;
  questionUk: string;
  answers: [string, string][];
  correct: number[];
  explanation: string;
  explanationUk: string;
  section: string;
  difficulty: Difficulty;
}

/** Shared serialization only. Verification is recorded in each batch's audit. */
export function verifiedBatch(start: number, category: PrimaryCategory, subcategory: string,
  source: string, sourceType: Question["sourceType"], url: string, seeds: VerifiedSeed[],
  seriesTag = "intake-2026-10-13"): Question[] {
  return seeds.map((seed, index) => {
    // Rotate independently authored options to avoid a fixed correct-answer position.
    const rotation = index % seed.answers.length;
    const order = seed.answers.map((_, i) => (i + rotation) % seed.answers.length);
    const correctAnswers = order.flatMap((originalIndex, i) =>
      seed.correct.includes(originalIndex) ? [String.fromCharCode(97 + i)] : []);
    return {
      id: `intake-verified-${start + index}`, primaryCategory: seed.primaryCategory ?? category,
      subcategory: seed.subcategory ?? subcategory,
      difficulty: seed.difficulty, type: seed.correct.length > 1 ? "multiple" : "single",
      question: seed.question, questionUk: seed.questionUk,
      answers: order.map((originalIndex, i) => ({ id: String.fromCharCode(97 + i),
        text: seed.answers[originalIndex][0], textUk: seed.answers[originalIndex][1] })),
      correctAnswers, ...(seed.correct.length > 1 ? { requiredSelections: seed.correct.length } : {}),
      explanation: seed.explanation, explanationUk: seed.explanationUk,
      reference: { source, section: seed.section, note: `Primary source checked 2026-10-13: ${url}. Not designated for Minnesota Residential Code Book Practice.` },
      sourceType, bookSearchable: false,
      tags: ["original-reviewed", "independent-primary-source", seriesTag],
      languageTags: seed.correct.length > 1 ? ["select"] : [],
      skills: [(seed.subcategory ?? subcategory).toLowerCase(), "source application"],
      editorialStatus: "reviewed", verificationStatus: "source-checked",
    };
  });
}
