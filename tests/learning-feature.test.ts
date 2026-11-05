import test from 'node:test';
import assert from 'node:assert/strict';
import { learningV2Enabled } from '../lib/learning-feature.ts';
test('Learning cannot be enabled in Production by a misconfigured flag', () => {
  assert.equal(learningV2Enabled({ VERCEL_ENV: 'production', LEARNING_V2_ENABLED: 'true' }), false);
  assert.equal(learningV2Enabled({ VERCEL_ENV: 'preview', LEARNING_V2_ENABLED: 'true' }), true);
  assert.equal(learningV2Enabled({ VERCEL_ENV: 'preview' }), false);
});
