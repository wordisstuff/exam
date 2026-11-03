import type { Question } from "../lib/types.ts";
import { legacyIntakeExplanationsUk } from "./intake-legacy-explanations-uk.ts";
import { legacyAnswerUk } from "./intake-legacy-answers-uk.ts";

/** Localize only existing legacy fields; never change English, keys, IDs, source or review status. */
export function localizeLegacyIntake(bank: readonly Question[]): Question[] {
  return bank.map(question => {
    const match = /^intake-verified-(\d+)$/.exec(question.id);
    const number = match ? Number(match[1]) : 0;
    if (number < 1 || number > 644) return question;
    return {
      ...question,
      ...(question.explanationUk ? {} : { explanationUk: legacyIntakeExplanationsUk[number] }),
      answers: question.answers.map(answer => ({
        ...answer,
        textUk: /[А-Яа-яІіЇїЄєҐґ]/.test(answer.textUk ?? "")
          ? answer.textUk : legacyAnswerUk(answer.text) ?? answer.textUk,
      })),
    };
  });
}
