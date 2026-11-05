import test from 'node:test';
import assert from 'node:assert/strict';
import { hasLearningPreviewPass, learningV2Enabled } from '../lib/learning-feature.ts';
test('Learning cannot be enabled in Production by a misconfigured flag', () => {
  assert.equal(learningV2Enabled({ VERCEL_ENV: 'production', LEARNING_V2_ENABLED: 'true' }), false);
  assert.equal(learningV2Enabled({ VERCEL_ENV: 'preview', LEARNING_V2_ENABLED: 'true' }), true);
  assert.equal(learningV2Enabled({ VERCEL_ENV: 'preview' }), false);
});

test('temporary pass is limited to one user, the PR Preview branch, and its expiration', () => {
  const now = Date.parse('2026-11-05T00:00:00Z');
  const env = {
    LEARNING_V2_ENABLED: 'true',
    VERCEL_ENV: 'preview',
    VERCEL_GIT_COMMIT_REF: 'feature/learning-mode-v2',
    LEARNING_PREVIEW_TEST_USER_ID: 'tester',
    LEARNING_PREVIEW_TEST_UNTIL: '2026-11-06T00:00:00Z',
  };
  assert.equal(hasLearningPreviewPass('tester', env, now), true);
  assert.equal(hasLearningPreviewPass('other', env, now), false);
  assert.equal(hasLearningPreviewPass('tester', { ...env, VERCEL_ENV: 'production' }, now), false);
  assert.equal(hasLearningPreviewPass('tester', { ...env, VERCEL_GIT_COMMIT_REF: 'other' }, now), false);
  assert.equal(hasLearningPreviewPass('tester', env, now + 86_400_000), false);
});
