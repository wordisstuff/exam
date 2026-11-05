import test from 'node:test';
import assert from 'node:assert/strict';
import { learningAnalytics } from '../lib/learning-analytics.ts';
test('released history separates measured time, reported book use, section entry and weak topics', () => {
 const a = learningAnalytics([
  { primaryCategory: 'Roofing', correct: false, selectedAnswerIds: [], seconds: 200, usedBook: false, reportedSection: 'R1' },
  { primaryCategory: 'Safety', correct: true, selectedAnswerIds: ['a'], seconds: 100, usedBook: true, reportedSection: '' },
 ]);
 assert.equal(a.unanswered, 1); assert.equal(a.usedBook, 1); assert.equal(a.sectionsEntered, 1);
 assert.equal(a.seconds, 300); assert.equal(a.reserveSeconds, 60);
 assert.equal(a.topics[0].topic, 'Roofing'); assert.equal(a.topics[1].accuracy, 1);
 assert.deepEqual(learningAnalytics([]).topics, []);
});
