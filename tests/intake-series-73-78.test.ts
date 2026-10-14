import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { questions } from "../data/questions.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";
const added = questions.filter(q => q.tags.includes("intake-series-73-78"));
const count = fs.readdirSync(new URL("../data/", import.meta.url)).filter(n => /^questions-intake-verified-(73|74|75|76|77|78)\.ts$/.test(n)).length;
test("series 73–78 has consecutive valid Full Exam records", () => {
  assert.equal(count, 6);
  assert.equal(added.length, 72);
  assert.equal(added.length, count * 12);
  assert.deepEqual(added.map(q => q.id), Array.from({length: count * 12}, (_, i) => `intake-verified-${861+i}`));
  assert.deepEqual(validateQuestionBank(added), []);
  assert.ok(added.every(isFullExamEligible));
});
test("series 73–78 IDs and prompts are unique across production", () => {
  for (const q of added) {
    assert.equal(questions.filter(x => x.id === q.id).length, 1, q.id);
    assert.equal(questions.filter(x => x.question.trim().toLowerCase() === q.question.trim().toLowerCase()).length, 1, q.id);
  }
});
test("series 73–78 book eligibility agrees with explicit provenance", () => {
  for (const q of added) {
    assert.equal(isCodeBookSearchable(q), q.bookSearchable, q.id);
    if (q.bookSearchable) assert.equal(q.bookReference, q.reference?.section);
    assert.ok(q.sourceType && q.reference?.section && q.reference?.note?.includes("https://"));
  }
});
