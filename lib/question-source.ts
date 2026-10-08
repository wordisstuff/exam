import type { Question } from "./types.ts";

export type QuestionSourceType =
  | "mn-code-book"
  | "mn-energy-code"
  | "osha"
  | "mn-statute"
  | "other"
  | "needs-book-verification";

function sourceText(question: Question) {
  return question.reference?.source.trim().toLowerCase() ?? "";
}

export function questionSourceType(question: Question): QuestionSourceType {
  const source = sourceText(question);

  if (source.includes("osha") || source.includes("29 cfr")) return "osha";
  if (source.includes("minnesota statutes")) return "mn-statute";
  if (source.includes("minnesota rules chapter 1322")) return "mn-energy-code";

  if (
    source.includes("minnesota rules chapter 1309") ||
    source.includes("international residential code as adopted by minnesota") ||
    source.includes("irc as adopted by minnesota")
  ) {
    return "mn-code-book";
  }

  if (source.includes("2018 irc") || source.includes("international residential code")) {
    return "needs-book-verification";
  }

  return "other";
}

export function isCodeBookSearchable(question: Question) {
  return (
    questionSourceType(question) === "mn-code-book" &&
    Boolean(question.reference?.section?.trim())
  );
}

export function sourceAuditLabel(question: Question) {
  const type = questionSourceType(question);
  if (type === "mn-code-book") return "Minnesota Residential Code book";
  if (type === "mn-energy-code") return "Minnesota Energy Code";
  if (type === "osha") return "OSHA / federal";
  if (type === "mn-statute") return "Minnesota Statutes / law";
  if (type === "needs-book-verification") return "IRC rule — verify against Minnesota book before Code Book Practice";
  return "Other authoritative / review";
}
