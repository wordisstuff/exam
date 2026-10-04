import assert from "node:assert/strict";
import test from "node:test";
import { questions } from "../data/questions.ts";
import {
  gradeCheckedAnswer,
  gradeCompletedSession,
  validateSelectedAnswers,
} from "../lib/server-grading.ts";

const question = questions.find(q => q.editorialStatus === "reviewed" && q.verificationStatus === "source-checked");
assert.ok(question);

test("server grading rejects unknown and duplicate answer IDs", () => {
  assert.throws(() => validateSelectedAnswers(question, ["not-an-answer"]), /invalid/);
  assert.throws(() => validateSelectedAnswers(question, [question.answers[0].id, question.answers[0].id]), /unique/);
});

test("checked-answer feedback is only created after a complete selection", () => {
  const correct = [...question.correctAnswers];
  const feedback = gradeCheckedAnswer(question, correct);
  assert.equal(feedback.correct, true);
  assert.deepEqual(feedback.correctAnswerIds, correct);
  assert.equal(feedback.questionId, question.id);
  assert.ok(feedback.explanation.length > 0);
});

test("completed-session grading separates unanswered from incorrect", () => {
  const q1 = questions.find(q => q.type === "single" && q.editorialStatus === "reviewed" && q.verificationStatus === "source-checked");
  const q2 = questions.find(q => q.id !== q1?.id && q.type === "single" && q.editorialStatus === "reviewed" && q.verificationStatus === "source-checked");
  const q3 = questions.find(q => q.id !== q1?.id && q.id !== q2?.id && q.type === "single" && q.editorialStatus === "reviewed" && q.verificationStatus === "source-checked");
  assert.ok(q1 && q2 && q3);

  const wrongId = q2.answers.find(answer => !q2.correctAnswers.includes(answer.id))?.id;
  assert.ok(wrongId);

  const result = gradeCompletedSession(
    [q1.id, q2.id, q3.id],
    {
      [q1.id]: [...q1.correctAnswers],
      [q2.id]: [wrongId],
      [q3.id]: [],
    },
    [q1, q2, q3],
  );

  assert.equal(result.correct, 1);
  assert.equal(result.incorrect, 1);
  assert.equal(result.unanswered, 1);
  assert.equal(result.total, 3);
});
