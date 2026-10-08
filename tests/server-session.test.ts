import assert from "node:assert/strict";
import test from "node:test";
import { questions } from "../data/questions.ts";
import { EXAM_CONFIG, QUESTION_BANK_VERSION } from "../lib/config.ts";
import { BOOK_PRACTICE_QUESTION_COUNT, buildBookPracticeSession, buildServerFullExamSession } from "../lib/server-session.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";

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

  for (const learnerQuestion of draft.questions) {
    assert.equal(Object.hasOwn(learnerQuestion, "correctAnswers"), false);
    assert.equal(Object.hasOwn(learnerQuestion, "explanation"), false);
    assert.equal(Object.hasOwn(learnerQuestion, "reference"), false);
    assert.equal(Object.hasOwn(learnerQuestion, "editorialStatus"), false);
    assert.equal(Object.hasOwn(learnerQuestion, "verificationStatus"), false);
  }
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


test("Code Book Practice creates a 20-question immediate-feedback session without an exam timer", () => {
  const draft = buildBookPracticeSession(
    questions,
    new Date("2026-10-04T00:00:00.000Z"),
    () => "book-session",
    () => 0.42,
  );

  assert.equal(draft.id, "book-session");
  assert.equal(draft.mode, "book-practice");
  assert.equal(draft.feedbackMode, "immediate");
  assert.equal(draft.timeLimitSeconds, null);
  assert.equal(draft.questionIds.length, BOOK_PRACTICE_QUESTION_COUNT);
  assert.equal(new Set(draft.questionIds).size, BOOK_PRACTICE_QUESTION_COUNT);
  assert.equal(draft.questions.length, BOOK_PRACTICE_QUESTION_COUNT);
});


test("Code Book Practice uses only Minnesota code-book-searchable questions", () => {
  const byId = new Map(questions.map(question => [question.id, question]));
  const draft = buildBookPracticeSession(questions, new Date(0), () => "book", () => 0.37);

  for (const id of draft.questionIds) {
    const question = byId.get(id);
    assert.ok(question);
    assert.equal(isCodeBookSearchable(question), true);
    assert.ok(question.reference?.section);
  }
});
