/** Persisted active time includes reading and excludes explicit pauses and reviews. */
export interface LearningRuntime {
  elapsedSeconds: number;
  activeSince: number | null;
  paused: boolean;
  questionId: string | null;
  draft: { selected: string[]; section: string; indexTerm: string; usedBook: boolean };
}
export function initialLearningRuntime(questionId: string | null, now: number): LearningRuntime {
  return { elapsedSeconds: 0, activeSince: questionId ? now : null, paused: !questionId, questionId, draft: { selected: [], section: '', indexTerm: '', usedBook: false } };
}
export function activeLearningSeconds(runtime: LearningRuntime, now: number): number {
  return runtime.elapsedSeconds + (runtime.activeSince === null ? 0 : Math.max(0, now - runtime.activeSince) / 1000);
}
export function pauseLearning(runtime: LearningRuntime, now: number): LearningRuntime {
  return { ...runtime, elapsedSeconds: activeLearningSeconds(runtime, now), activeSince: null, paused: true };
}
export function resumeLearning(runtime: LearningRuntime, now: number): LearningRuntime {
  return runtime.activeSince !== null || !runtime.questionId ? runtime : { ...runtime, paused: false, activeSince: now };
}
