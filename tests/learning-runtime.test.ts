import test from 'node:test';
import assert from 'node:assert/strict';
import { activeLearningSeconds, initialLearningRuntime, pauseLearning, resumeLearning } from '../lib/learning-runtime.ts';
test('reading and overtime count; pause and review do not; persisted state resumes', () => {
 let r = initialLearningRuntime('q6', 1000);
 assert.equal(activeLearningSeconds(r, 206000), 205);
 r = pauseLearning(r, 206000);
 assert.equal(activeLearningSeconds(r, 900000), 205);
 r = JSON.parse(JSON.stringify(r));
 r = resumeLearning(r, 900000);
 assert.equal(activeLearningSeconds(r, 905000), 210);
 assert.deepEqual(resumeLearning(r, 999999), r);
 assert.equal(activeLearningSeconds(r, 1), 205);
});
