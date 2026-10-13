import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { questions } from "../data/questions.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";

const added = questions.filter(q => q.tags.includes("intake-2026-10-13"));
const files = fs.readdirSync(new URL("../data/", import.meta.url))
  .filter(name => /^questions-intake-verified-(55|56|57|58|59|60)\.ts$/.test(name));

test("new intake batches validate without relaxing legacy validation", () => {
  assert.equal(added.length, files.length * 12);
  assert.equal(added.length, 72);
  assert.equal(files.length, 6);
  assert.deepEqual(added.map(q => q.id), Array.from({ length: 72 }, (_, i) => `intake-verified-${645 + i}`));
  assert.deepEqual(validateQuestionBank(added), []);
  assert.ok(added.every(isFullExamEligible));
});
test("new intake IDs and English prompts are unique across the bank", () => {
  for (const q of added) {
    assert.equal(questions.filter(other => other.id === q.id).length, 1, q.id);
    assert.equal(questions.filter(other => other.question.trim().toLowerCase() === q.question.trim().toLowerCase()).length, 1, q.id);
  }
});
test("rule, energy and OSHA additions are explicitly excluded from code-book practice", () => {
  for (const q of added) {
    assert.equal(q.bookSearchable, false, q.id);
    assert.equal(isCodeBookSearchable(q), false, q.id);
    assert.ok(q.sourceType && q.reference?.section && q.reference?.note?.includes("https://"));
  }
});
