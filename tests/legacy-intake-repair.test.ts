import test from "node:test";
import assert from "node:assert/strict";
import { questions } from "../data/questions.ts";
import { localizeLegacyIntake } from "../data/intake-legacy-localization.ts";
import { legacyIntakeExplanationsUk } from "../data/intake-legacy-explanations-uk.ts";
import { isLanguageNeutralAnswer } from "../lib/localization-text.ts";
import { validateQuestionBank, isFullExamEligible } from "../lib/question-validation.ts";

test("all 504 previously missing explanations have substantive Ukrainian text", () => {
  assert.deepEqual(Object.keys(legacyIntakeExplanationsUk).map(Number), Array.from({length:504}, (_,i)=>141+i));
  for (const [id, explanationUk] of Object.entries(legacyIntakeExplanationsUk)) {
    const q = questions.find(q => q.id === `intake-verified-${id}`)!;
    assert.ok(q, id);
    assert.equal(q.explanationUk, explanationUk, id);
    assert.match(explanationUk, /[А-Яа-яІіЇїЄєҐґ]/, id);
    assert.notEqual(explanationUk, q.explanation, id);
  }
});

test("localization preserves every production English field, key, reference and status without mutation", () => {
  const before = structuredClone(questions);
  for (const q of before) if (/^intake-verified-/.test(q.id) && Number(q.id.split("-").at(-1)) <= 644) {
    q.explanationUk = undefined;
    for (const a of q.answers) a.textUk = a.text;
  }
  const snapshot = structuredClone(before);
  const after = localizeLegacyIntake(before);
  const invariant = (bank: typeof questions) => bank.map(q => {
    const { explanationUk: ignoredExplanation, answers, ...rest } = q;
    void ignoredExplanation;
    return { ...rest, answers: answers.map(a => ({id:a.id,text:a.text})) };
  });
  assert.deepEqual(before, snapshot);
  assert.deepEqual(invariant(after), invariant(before));
  assert.deepEqual(localizeLegacyIntake(questions), questions);
});

test("language-neutral exceptions allow identifiers and quantities, never copied English prose", () => {
  for (const value of ["R-49", "2x6", "1-1/2H:1V", "ASTM C315", "UL 1777", "L/120", "$320", "0.25", "10%", "100 cfm"]) assert.equal(isLanguageNeutralAnswer(value), true, value);
  for (const value of ["Safe condition", "Only 24 inches", "ASTM C315 is required", "No protection", "Within 30 days", "A 2x6 board", "", "xyz"]) assert.equal(isLanguageNeutralAnswer(value), false, value);
});

test("binary and four-choice Learning records never enter Full Exam and unknown categories still fail", () => {
  for (const count of [2,4]) {
    const q = structuredClone(questions.find(isFullExamEligible)!);
    q.type = "single";
    delete q.requiredSelections;
    q.answers = q.answers.slice(0,count);
    q.correctAnswers = [q.answers[0].id];
    assert.deepEqual(validateQuestionBank([q]), []);
    assert.equal(isFullExamEligible(q), false);
    if (count === 2) {
      const multiple = { ...q, type: "multiple" as const, correctAnswers: q.answers.map(a=>a.id), requiredSelections: 2 };
      assert.ok(validateQuestionBank([multiple]).some(issue=>issue.field==="answers"));
    }
    q.subcategory = "Misspelled unregistered category";
    assert.ok(validateQuestionBank([q]).some(issue=>issue.field==="subcategory"));
  }
  const q = structuredClone(questions.find(isFullExamEligible)!);
  q.answers = q.answers.slice(0,3);
  q.correctAnswers = [q.answers[0].id];
  assert.ok(validateQuestionBank([q]).some(issue=>issue.field==="answers"));
});
