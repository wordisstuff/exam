import { canRevealCheckpoint } from './learning-cycle.ts';
import { checkpointRange, LEARNING_BLOCK_COUNT } from './learning-timing.ts';

/** Apply only to owner-scoped persisted responses, inside a database transaction. */
export function learningCheckpointState(questionIds: readonly string[], submittedIds: ReadonlySet<string>) {
  // Validate inventory even before the first submission.
  canRevealCheckpoint(questionIds, submittedIds, 0);
  for (let checkpoint = 0; checkpoint < LEARNING_BLOCK_COUNT; checkpoint++) {
    if (!canRevealCheckpoint(questionIds, submittedIds, checkpoint)) {
      const [start, end] = checkpointRange(checkpoint);
      return { checkpoint, complete: false, pendingIds: questionIds.slice(start, end).filter(id => !submittedIds.has(id)) };
    }
  }
  return { checkpoint: LEARNING_BLOCK_COUNT - 1, complete: true, pendingIds: [] as string[] };
}

/** Submitted responses are immutable, making retries safe without double scoring. */
export function authorizeLearningSubmission(
  questionIds: readonly string[], submittedIds: ReadonlySet<string>, questionId: string,
): 'submit' | 'retry' {
  if (!questionIds.includes(questionId)) throw new Error('Question does not belong to this learning cycle.');
  if (submittedIds.has(questionId)) return 'retry';
  const state = learningCheckpointState(questionIds, submittedIds);
  if (!state.pendingIds.includes(questionId)) throw new Error('Complete the current checkpoint first.');
  return 'submit';
}
