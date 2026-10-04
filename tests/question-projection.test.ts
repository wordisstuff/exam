import assert from "node:assert/strict";
import test from "node:test";
import { questions } from "../data/questions.ts";
import { toLearnerQuestion } from "../lib/question-projection.ts";

test("learner question projection never exposes private grading fields", () => {
  const eligible = questions.find(q => q.editorialStatus === "reviewed" && q.verificationStatus === "source-checked");
  assert.ok(eligible);

  const payload = toLearnerQuestion(eligible);
  const serialized = JSON.stringify(payload);

  assert.equal(payload.id, eligible.id);
  assert.equal(payload.answers.length, eligible.answers.length);
  assert.doesNotMatch(serialized, /correctAnswers/);
  assert.doesNotMatch(serialized, /explanation/);
  assert.doesNotMatch(serialized, /reference/);
  assert.doesNotMatch(serialized, /editorialStatus/);
  assert.doesNotMatch(serialized, /verificationStatus/);
});
