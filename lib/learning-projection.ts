import { questions } from '../data/questions.ts';
import type { LearningRecord } from './learning-store.ts';
import { completedCheckpointIndexes } from './learning-cycle.ts';
import { learningCheckpointState } from './learning-state.ts';
import { toLearnerQuestion } from './question-projection.ts';
import { exactMatch } from './engine.ts';
export function projectLearning(row: LearningRecord) {
  const { questionIds, answers } = row.state;
  const submitted = new Set(Object.keys(answers));
  const released = new Set(completedCheckpointIndexes(questionIds, submitted).flatMap(i => questionIds.slice(i * 11, i * 11 + 11)));
  return { id: row.id, revision: row.revision, ...learningCheckpointState(questionIds, submitted), answers,
    questions: questionIds.map(id => toLearnerQuestion(questions.find(q => q.id === id)!)),
    review: questionIds.filter(id => released.has(id)).map(id => { const q = questions.find(q => q.id === id)!; return { ...toLearnerQuestion(q), correct: exactMatch(answers[id].selected, q.correctAnswers), correctAnswerIds: q.correctAnswers, explanation: q.explanation, reference: q.reference }; }) };
}
