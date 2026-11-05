import test from 'node:test';
import assert from 'node:assert/strict';
import { projectLearning } from '../lib/learning-projection.ts';
import { buildLearningCycleDraft } from '../lib/learning-cycle.ts';
import { questions } from '../data/questions.ts';
import type { LearningRecord } from '../lib/learning-store.ts';
test('API projection releases only fully submitted checkpoints at every boundary', () => {
 const draft = buildLearningCycleDraft(questions);
 const row: LearningRecord = { id: draft.id, user_id: 'owner', revision: 0, state: { questionIds: draft.questionIds, answers: {} } };
 for (let count = 0; count <= 110; count++) {
  const response = projectLearning(row);
  assert.equal(response.review.length, Math.floor(count / 11) * 11);
  assert.equal(response.complete, count === 110);
  for (const q of response.questions) {
   assert.equal('correctAnswers' in q, false);
   assert.equal('reference' in q, false);
   assert.equal('explanation' in q, false);
  }
  if (count < 110) row.state.answers[draft.questionIds[count]] = { selected: [], seconds: 180, section: '', indexTerm: '', usedBook: false };
 }
});
