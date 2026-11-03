import assert from "node:assert/strict";
import test from "node:test";
import { LEARNING_BLOCK_COUNT, LEARNING_BLOCK_SIZE, LEARNING_CYCLE_SIZE, checkpointRange, estimatedReadingSeconds, paceReserveSeconds, readingAndPacing } from "../lib/learning-timing.ts";

test("ten checkpoints of eleven cover the learning cycle", () => {
  assert.equal(LEARNING_BLOCK_COUNT * LEARNING_BLOCK_SIZE, LEARNING_CYCLE_SIZE);
  assert.deepEqual(checkpointRange(0), [0, 11]);
  assert.deepEqual(checkpointRange(9), [99, 110]);
  assert.throws(() => checkpointRange(10), RangeError);
});

test("estimated reading time counts the prompt and all options with bounds", () => {
  assert.equal(estimatedReadingSeconds("one two", ["three", "four"]), 5);
  assert.equal(estimatedReadingSeconds("one two three four five six", Array(4).fill("one two three four")), 11);
  assert.equal(estimatedReadingSeconds(Array(100).fill("word").join(" "), []), 30);
  assert.equal(estimatedReadingSeconds("", []), 5);
});

test("time reserve reflects answered-question baseline and active time", () => {
  assert.equal(paceReserveSeconds(1, 30), 150);
  assert.equal(paceReserveSeconds(20, 1200), 2400);
  assert.equal(paceReserveSeconds(2, 400), -40);
  assert.throws(() => paceReserveSeconds(NaN, 2));
});

test("reading moves into search pacing automatically without auto-ending", () => {
  assert.deepEqual(readingAndPacing(3, 10), { phase: "reading", remainingSeconds: 177, overtimeSeconds: 0 });
  assert.deepEqual(readingAndPacing(10, 10), { phase: "search", remainingSeconds: 170, overtimeSeconds: 0 });
  assert.deepEqual(readingAndPacing(181, 10), { phase: "search", remainingSeconds: 0, overtimeSeconds: 1 });
});
