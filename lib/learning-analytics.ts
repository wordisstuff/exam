import { paceReserveSeconds } from './learning-timing.ts';
export interface LearningReviewMetric {
 primaryCategory: string;
 correct: boolean;
 selectedAnswerIds: string[];
 seconds: number;
 usedBook: boolean;
 reportedSection: string;
}
/** Use only server-released review rows. No inference of physical book searching. */
export function learningAnalytics(review: readonly LearningReviewMetric[]) {
 const topics = new Map<string, { topic: string; total: number; correct: number; seconds: number }>();
 let unanswered = 0, usedBook = 0, sectionsEntered = 0, seconds = 0, correct = 0;
 for (const row of review) {
  const elapsed = Number.isFinite(row.seconds) ? Math.max(0, row.seconds) : 0;
  const topic = topics.get(row.primaryCategory) ?? { topic: row.primaryCategory, total: 0, correct: 0, seconds: 0 };
  topic.total++; topic.correct += Number(row.correct); topic.seconds += elapsed;
  topics.set(row.primaryCategory, topic);
  unanswered += Number(row.selectedAnswerIds.length === 0);
  usedBook += Number(row.usedBook); sectionsEntered += Number(Boolean(row.reportedSection.trim()));
  seconds += elapsed; correct += Number(row.correct);
 }
 return { total: review.length, correct, unanswered, usedBook, sectionsEntered, seconds,
  reserveSeconds: paceReserveSeconds(review.length, seconds),
  topics: [...topics.values()].map(t => ({ ...t, accuracy: t.correct / t.total, averageSeconds: t.seconds / t.total })).sort((a,b) => a.accuracy - b.accuracy || a.topic.localeCompare(b.topic)) };
}
