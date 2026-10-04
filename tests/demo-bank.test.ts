import assert from "node:assert/strict";
import test from "node:test";
import { DEMO_BOOK_PRACTICE_IDS, DEMO_QUESTION_IDS, demoQuestions } from "../lib/demo-bank.ts";

test("public demo contains exactly ten unique reviewed learner-safe questions", () => {
  const payload = demoQuestions();
  assert.equal(payload.length, 10);
  assert.equal(new Set(DEMO_QUESTION_IDS).size, 10);
  assert.equal(DEMO_BOOK_PRACTICE_IDS.size, 2);

  for (const question of payload) {
    assert.equal(Object.hasOwn(question, "correctAnswers"), false);
    assert.equal(Object.hasOwn(question, "explanation"), false);
    assert.equal(Object.hasOwn(question, "reference"), false);
    assert.equal(Object.hasOwn(question, "editorialStatus"), false);
    assert.equal(Object.hasOwn(question, "verificationStatus"), false);
  }
});
