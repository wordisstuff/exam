import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../data/questions.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";
import { isCodeBookSearchable } from "../lib/question-source.ts";

const added = questions.filter(q => q.tags.includes("intake-to-2000"));

test("completion intake has 276 consecutive, valid and eligible bilingual records", () => {
  assert.deepEqual(added.map(q => q.id), Array.from({ length: 276 }, (_, i) => `intake-verified-${1725 + i}`));
  assert.deepEqual(validateQuestionBank(added), []);
  assert.ok(added.every(isFullExamEligible));
  for (const q of added) {
    assert.equal(q.editorialStatus, "reviewed", q.id);
    assert.equal(q.verificationStatus, "source-checked", q.id);
    assert.equal(q.answers.length, 5, q.id);
    assert.ok(q.questionUk && q.explanationUk && q.answers.every(a => a.textUk), q.id);
    assert.ok(q.reference?.note?.includes("2026-11-02"), q.id);
    assert.ok(q.reference?.note?.includes("https://"), q.id);
  }
  assert.equal(questions.filter(q => /^intake-verified-\d+$/.test(q.id)).length, 2000);
});

test("completion intake IDs and prompts are unique across production", () => {
  for (const q of added) {
    assert.equal(questions.filter(x => x.id === q.id).length, 1, q.id);
    assert.equal(questions.filter(x => x.question.trim().toLowerCase() === q.question.trim().toLowerCase()).length, 1, q.id);
  }
});

test("completion intake separates 192 adopted-code lookups from 84 safety and business records", () => {
  assert.equal(added.filter(isCodeBookSearchable).length, 192);
  assert.equal(added.filter(q => q.sourceType === "osha").length, 48);
  assert.equal(added.filter(q => q.sourceType === "federal").length, 12);
  assert.equal(added.filter(q => q.sourceType === "mn-statute").length, 24);
  for (const q of added) {
    assert.equal(isCodeBookSearchable(q), q.bookSearchable, q.id);
    if (q.bookSearchable) {
      assert.equal(q.sourceType, "mn-code-book", q.id);
      assert.equal(q.bookReference, q.reference?.section, q.id);
      assert.match(q.bookReference!, /^(?:Tables? )?R\d{3}/, q.id);
    } else {
      assert.equal(q.bookReference, undefined, q.id);
      assert.ok(["osha", "federal", "mn-statute"].includes(q.sourceType!), q.id);
    }
    if (q.sourceType === "osha") {
      const section = q.reference!.section!.match(/1926\.\d+/)![0];
      assert.ok(q.reference!.note!.includes(`https://www.osha.gov/laws-regs/regulations/standardnumber/1926/${section}`), q.id);
    }
    if (q.sourceType === "mn-statute") {
      const section = q.reference!.section!.match(/326B\.\d+/)![0];
      assert.ok(q.reference!.note!.includes(`https://www.revisor.mn.gov/statutes/cite/${section}`), q.id);
    }
  }
});
