import assert from "node:assert/strict";
import test from "node:test";
import { questions } from "../data/questions.ts";
import { EXAM_CONFIG, QUESTION_BANK_VERSION } from "../lib/config.ts";
import { buildServerFullExamSession } from "../lib/server-session.ts";

test("server Full Exam draft contains exactly 110 unique learner-safe questions", () => {
  let n = 0;
  const draft = buildServerFullExamSession(
    questions,
    "deferred",
    new Date("2026-10-04T00:00:00.000Z"),
    () => "session-test",
    () => {
      n = (n + 0.137) % 1;
      return n;
    },
  );

  assert.equal(draft.id, "session-test");
  assert.equal(draft.bankVersion, QUESTION_BANK_VERSION);
  assert.equal(draft.questionIds.length, EXAM_CONFIG.questionCount);
  assert.equal(new Set(draft.questionIds).size, EXAM_CONFIG.questionCount);
  assert.equal(draft.questions.length, EXAM_CONFIG.questionCount);
  assert.deepEqual(draft.questions.map(question => question.id), draft.questionIds);

  const payload = JSON.stringify(draft);
  assert.doesNotMatch(payload, /correctAnswers/);
  assert.doesNotMatch(payload, /explanation/);
  assert.doesNotMatch(payload, /reference/);
  assert.doesNotMatch(payload, /editorialStatus/);
  assert.doesNotMatch(payload, /verificationStatus/);
});

test("server Full Exam uses only reviewed source-checked five-choice questions", () => {
  const byId = new Map(questions.map(question => [question.id, question]));
  const draft = buildServerFullExamSession(questions, "immediate", new Date(0), () => "s", () => 0.5);

  for (const id of draft.questionIds) {
    const question = byId.get(id);
    assert.ok(question);
    assert.equal(question.editorialStatus, "reviewed");
    assert.equal(question.verificationStatus, "source-checked");
    assert.equal(question.answers.length, 5);
  }
});
