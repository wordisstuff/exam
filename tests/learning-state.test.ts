import test from 'node:test';
import assert from 'node:assert/strict';
import { authorizeLearningSubmission, learningCheckpointState } from '../lib/learning-state.ts';
const ids = Array.from({ length: 110 }, (_, i) => String(i));
test('each checkpoint opens only after all eleven submissions', () => {
  for (let count = 0; count <= 110; count++) {
    const submitted = new Set(ids.slice(0, count));
    const state = learningCheckpointState(ids, submitted);
    assert.equal(state.complete, count === 110);
    assert.equal(state.checkpoint, Math.min(9, Math.floor(count / 11)));
    if (count < 110) assert.equal(authorizeLearningSubmission(ids, submitted, ids[count]), 'submit');
    if (count > 0) assert.equal(authorizeLearningSubmission(ids, submitted, ids[count - 1]), 'retry');
    const future = (Math.floor(count / 11) + 1) * 11;
    if (future < 110) assert.throws(() => authorizeLearningSubmission(ids, submitted, ids[future]));
  }
});
test('resume preserves an incomplete checkpoint and rejects foreign questions', () => {
  const submitted = new Set(ids.slice(0, 5));
  assert.deepEqual(learningCheckpointState(ids, submitted).pendingIds, ids.slice(5, 11));
  assert.throws(() => authorizeLearningSubmission(ids, submitted, 'foreign'));
  assert.throws(() => learningCheckpointState(ids.slice(1), submitted));
});
