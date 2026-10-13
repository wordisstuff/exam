import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { questions } from "../data/questions.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";
const added = questions.filter(q => q.tags.includes("intake-series-61-66"));
const count = fs.readdirSync(new URL("../data/", import.meta.url))
  .filter(name => /^questions-intake-verified-(61|62|63|64|65|66)\.ts$/.test(name)).length;
test("series 61–66 validates and remains Full Exam eligible", () => {
  assert.equal(added.length, count * 12);
  assert.deepEqual(added.map(q => q.id), Array.from({ length: count * 12 }, (_, i) => `intake-verified-${717 + i}`));
  assert.deepEqual(validateQuestionBank(added), []);
  assert.ok(added.every(isFullExamEligible));
});
test("series 61–66 has unique IDs and exact English prompts across the bank", () => {
  for (const q of added) {
    assert.equal(questions.filter(x => x.id === q.id).length, 1, q.id);
    assert.equal(questions.filter(x => x.question.trim().toLowerCase() === q.question.trim().toLowerCase()).length, 1, q.id);
  }
});
test("direct-rule and OSHA additions are not misclassified as blue-book questions", () => {
  for (const q of added) {
    assert.equal(q.bookSearchable, false, q.id);
    assert.equal(isCodeBookSearchable(q), false, q.id);
    assert.ok(q.sourceType && q.reference?.section && q.reference?.note?.includes("https://"));
  }
});
