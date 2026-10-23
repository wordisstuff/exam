import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { questions } from "../data/questions.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";
const added = questions.filter(q => q.tags.includes("intake-series-103-108"));
const count = fs.readdirSync(new URL("../data/", import.meta.url)).filter(n => /^questions-intake-verified-(103|104|105|106|107|108)\.ts$/.test(n)).length;
test("series 103–108 has consecutive valid Full Exam records", () => {
  assert.ok(count >= 1 && count <= 6);
  assert.equal(added.length, count * 12);
  assert.deepEqual(added.map(q => q.id), Array.from({length: count * 12}, (_, i) => `intake-verified-${1221+i}`));
  assert.deepEqual(validateQuestionBank(added), []);
  assert.ok(added.every(isFullExamEligible));
});
test("series 103–108 IDs and prompts are unique across production", () => {
  for (const q of added) {
    assert.equal(questions.filter(x => x.id === q.id).length, 1, q.id);
    assert.equal(questions.filter(x => x.question.trim().toLowerCase() === q.question.trim().toLowerCase()).length, 1, q.id);
  }
});
test("series 103–108 book eligibility agrees with explicit provenance", () => {
  for (const q of added) {
    assert.equal(isCodeBookSearchable(q), q.bookSearchable, q.id);
    if (q.bookSearchable) assert.equal(q.bookReference, q.reference?.section);
    assert.ok(q.sourceType && q.reference?.section && q.reference?.note?.includes("https://"));
    assert.ok(q.reference?.note?.includes("2026-10-22"));
  }
});
