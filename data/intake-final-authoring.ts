import { verifiedBatch, type VerifiedSeed } from "./intake-verified-authoring.ts";
import type { Difficulty, PrimaryCategory, Question } from "../lib/types.ts";
/** Tuple serialization only; every prompt, option and explanation is independently authored. */
export type FinalRow = [section: string, question: string, questionUk: string, answers: [string,string][], correct: number[], explanation: string, explanationUk: string, difficulty?: Difficulty];
export function finalBatch(batch: number, category: PrimaryCategory, subcategory: string, rows: FinalRow[], sourceType: Question["sourceType"] = "mn-code-book", url = "https://www.nyecountynv.gov/DocumentCenter/View/38279/2018_Int-Res-Code-2nd_ptg"): Question[] {
  const seeds: VerifiedSeed[] = rows.map(([section,question,questionUk,answers,correct,explanation,explanationUk,difficulty="exam"]) => ({section,question,questionUk,answers,correct,explanation,explanationUk,difficulty,
    ...(sourceType === "osha" && /1926\.\d+/.test(section) ? { sourceUrl: `https://www.osha.gov/laws-regs/regulations/standardnumber/1926/${section.match(/1926\.\d+/)![0]}` } : {}),
    ...(sourceType === "mn-statute" && /326B\.\d+/.test(section) ? { sourceUrl: `https://www.revisor.mn.gov/statutes/cite/${section.match(/326B\.\d+/)![0]}` } : {}) }));
  const source = sourceType === "mn-code-book" ? "2018 IRC as adopted by Minnesota" : sourceType === "mn-statute" ? "Minnesota Statutes" : sourceType === "osha" ? "OSHA construction regulations" : "Federal regulations";
  return verifiedBatch(1725+(batch-145)*12,category,subcategory,source,sourceType,url,seeds,"intake-to-2000",sourceType === "mn-code-book","2026-11-02");
}
