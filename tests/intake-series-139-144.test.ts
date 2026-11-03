import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../data/questions.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";
const added = questions.filter(q => q.tags.includes("intake-series-139-144"));
test("series 139–144 has 72 consecutive valid Full Exam records", () => {
  assert.deepEqual(added.map(q => q.id), Array.from({length:72}, (_,i) => `intake-verified-${1653+i}`));
  assert.deepEqual(validateQuestionBank(added), []);
  assert.ok(added.every(isFullExamEligible));
});
test("series 139–144 IDs and prompts are unique across production", () => {
  for (const q of added) {
    assert.equal(questions.filter(x => x.id === q.id).length, 1, q.id);
    assert.equal(questions.filter(x => x.question.trim().toLowerCase() === q.question.trim().toLowerCase()).length, 1, q.id);
  }
});
test("series 139–144 keeps source-verified code lookup separate from safety and employment law", () => {
  assert.equal(added.filter(isCodeBookSearchable).length, 48);
  for (const q of added) {
    assert.equal(isCodeBookSearchable(q), q.bookSearchable, q.id);
    if (q.bookSearchable) {
      assert.equal(q.sourceType, "mn-code-book");
      assert.equal(q.bookReference, q.reference?.section);
    } else assert.ok(q.sourceType === "osha" || q.sourceType === "mn-statute");
    assert.ok(q.reference?.note?.includes("https://"));
    assert.ok(q.reference?.note?.includes("2026-11-02"));
  }
});
