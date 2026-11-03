/** Pure timing and checkpoint helpers for Learning Mode V2. */
export const LEARNING_PACE_SECONDS = 180;
export const LEARNING_BLOCK_SIZE = 11;
export const LEARNING_BLOCK_COUNT = 10;
export const LEARNING_CYCLE_SIZE = LEARNING_BLOCK_SIZE * LEARNING_BLOCK_COUNT;

export function estimatedReadingSeconds(question: string, options: readonly string[]): number {
  const words = [question, ...options].join(" ").trim().match(/\S+/g)?.length ?? 0;
  return Math.max(5, Math.min(30, Math.ceil(words / 2)));
}

export function paceReserveSeconds(completedQuestions: number, activeElapsedSeconds: number): number {
  if (!Number.isFinite(completedQuestions) || !Number.isFinite(activeElapsedSeconds)) {
    throw new TypeError("Timing inputs must be finite.");
  }
  return Math.floor(Math.max(0, completedQuestions)) * LEARNING_PACE_SECONDS
    - Math.floor(Math.max(0, activeElapsedSeconds));
}

export function checkpointRange(blockIndex: number): readonly [number, number] {
  if (!Number.isInteger(blockIndex) || blockIndex < 0 || blockIndex >= LEARNING_BLOCK_COUNT) {
    throw new RangeError("Checkpoint index outside the learning cycle.");
  }
  const start = blockIndex * LEARNING_BLOCK_SIZE;
  return [start, start + LEARNING_BLOCK_SIZE];
}

export function readingAndPacing(elapsedSeconds: number, readingSeconds: number) {
  const elapsed = Math.max(0, Math.floor(elapsedSeconds));
  const reading = Math.max(0, Math.floor(readingSeconds));
  return {
    phase: elapsed < reading ? "reading" as const : "search" as const,
    remainingSeconds: Math.max(0, LEARNING_PACE_SECONDS - elapsed),
    overtimeSeconds: Math.max(0, elapsed - LEARNING_PACE_SECONDS),
  };
}
