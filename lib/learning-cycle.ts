import { QUESTION_BANK_VERSION } from "./config.ts";
import { shuffledUnique } from "./engine.ts";
import { LEARNING_BLOCK_COUNT, LEARNING_BLOCK_SIZE, LEARNING_CYCLE_SIZE, checkpointRange } from "./learning-timing.ts";
import { toLearnerQuestion, type LearnerQuestion } from "./question-projection.ts";
import { fullExamEligibleQuestions } from "./question-validation.ts";
import type { Question } from "./types.ts";

/**
 * Isolated V2 draft builder; deliberately NOT wired to the existing database
 * or public API until server-side checkpoint gating and persistence are ready.
 */
export interface LearningCycleDraft {
  id: string;
  bankVersion: number;
  mode: "learning-cycle";
  startedAt: string;
  questionIds: string[];
  questions: LearnerQuestion[];
  checkpointSize: number;
  checkpointCount: number;
}

export function buildLearningCycleDraft(
  bank: readonly Question[],
  now = new Date(),
  idFactory: () => string = () => crypto.randomUUID(),
  rng: () => number = Math.random,
): LearningCycleDraft {
  // V1 uses the strict verified pool. Broader learning-only content requires
  // an explicit editorial policy, never implicit promotion to exam eligibility.
  const eligible = fullExamEligibleQuestions(bank);
  const uniqueById = new Map(eligible.map(question => [question.id, question]));
  if (uniqueById.size !== eligible.length) {
    throw new Error("Learning cycle requires unique verified question IDs.");
  }
  if (eligible.length < LEARNING_CYCLE_SIZE) {
    throw new Error(`Learning cycle requires ${LEARNING_CYCLE_SIZE} eligible questions; found ${eligible.length}.`);
  }

  const picked = shuffledUnique([...uniqueById.values()], LEARNING_CYCLE_SIZE, rng);
  return {
    id: idFactory(),
    bankVersion: QUESTION_BANK_VERSION,
    mode: "learning-cycle",
    startedAt: now.toISOString(),
    questionIds: picked.map(question => question.id),
    questions: picked.map(toLearnerQuestion),
    checkpointSize: LEARNING_BLOCK_SIZE,
    checkpointCount: LEARNING_BLOCK_COUNT,
  };
}

/** Server-side ONLY: restrict review access to completed checkpoints.
 * answeredIds is trusted only after fetching persisted selections for the owner.
 */
export function completedCheckpointIndexes(
  orderedQuestionIds: readonly string[],
  answeredIds: ReadonlySet<string>,
): number[] {
  if (orderedQuestionIds.length !== LEARNING_CYCLE_SIZE
      || new Set(orderedQuestionIds).size !== LEARNING_CYCLE_SIZE) {
    throw new Error("Invalid learning cycle question inventory.");
  }
  const completed: number[] = [];
  for (let index = 0; index < LEARNING_BLOCK_COUNT; index++) {
    const [start, end] = checkpointRange(index);
    const allAnswered = orderedQuestionIds.slice(start, end).every(id => answeredIds.has(id));
    if (allAnswered) completed.push(index);
  }
  return completed;
}

export function canRevealCheckpoint(
  orderedQuestionIds: readonly string[],
  answeredIds: ReadonlySet<string>,
  checkpointIndex: number,
): boolean {
  if (!Number.isInteger(checkpointIndex) || checkpointIndex < 0 || checkpointIndex >= LEARNING_BLOCK_COUNT) {
    return false;
  }
  return completedCheckpointIndexes(orderedQuestionIds, answeredIds).includes(checkpointIndex);
}
