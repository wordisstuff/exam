import assert from "node:assert/strict";
import test from "node:test";
import { questions } from "../data/questions.ts";
import { buildLearningCycleDraft, canRevealCheckpoint, completedCheckpointIndexes } from "../lib/learning-cycle.ts";

test("Learning V2 draft is 110 unique learner-safe questions with ten eleven-question checkpoints", () => {
  const cycle = buildLearningCycleDraft(questions, new Date("2026-11-03T00:00:00Z"), () => "v2-test", () => 0.31);
  assert.equal(cycle.id, "v2-test");
  assert.equal(cycle.mode, "learning-cycle");
  assert.equal(cycle.checkpointCount, 10);
  assert.equal(cycle.checkpointSize, 11);
  assert.equal(cycle.questionIds.length, 110);
  assert.equal(new Set(cycle.questionIds).size, 110);
  assert.deepEqual(cycle.questions.map(q => q.id), cycle.questionIds);
  for (const q of cycle.questions) {
    for (const key of ["correctAnswers", "explanation", "reference", "editorialStatus", "verificationStatus"]) {
      assert.equal(Object.hasOwn(q, key), false, `Leaked ${key}`);
    }
  }
});

test("checkpoint review is locked until all eleven persisted answers exist", () => {
  const ids = Array.from({ length: 110 }, (_, i) => `q${i + 1}`);
  const nineAnswers = new Set(ids.slice(0, 9));
  assert.equal(canRevealCheckpoint(ids, nineAnswers, 0), false);
  const firstEleven = new Set(ids.slice(0, 11));
  assert.equal(canRevealCheckpoint(ids, firstEleven, 0), true);
  assert.equal(canRevealCheckpoint(ids, firstEleven, 1), false);
  assert.deepEqual(completedCheckpointIndexes(ids, firstEleven), [0]);
  assert.equal(canRevealCheckpoint(ids, new Set(ids.slice(0, 22)), 1), true);
  assert.equal(canRevealCheckpoint(ids, new Set(ids), 9), true);
  assert.equal(canRevealCheckpoint(ids, new Set(ids), 10), false);
});

test("invalid duplicate session inventory cannot unlock checkpoint", () => {
  const badIds = Array.from({ length: 110 }, () => "same");
  assert.throws(() => completedCheckpointIndexes(badIds, new Set(["same"])));
});
