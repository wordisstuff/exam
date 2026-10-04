import { EXAM_CONFIG } from "./config.ts";
import type { Question } from "./types.ts";
import type { PersistedSessionAnswer, PersistedStudySession } from "./supabase-rest-admin.ts";

export interface ProgressHistoryItem {
  id: string;
  mode: string;
  feedbackMode: string;
  status: string;
  startedAt: string;
  completedAt: string | null;
  score: number | null;
  passed: boolean | null;
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
}

export interface WeakArea {
  name: string;
  correct: number;
  total: number;
  percentage: number;
  averageSeconds: number;
}

export interface BookPracticeTopic {
  name: string;
  searches: number;
  averageSearchSeconds: number;
  bookAssistedAccuracy: number;
}

export interface BookPracticeSummary {
  directAnswers: number;
  directCorrect: number;
  directAccuracy: number;
  bookAssistedAnswers: number;
  bookAssistedCorrect: number;
  bookAssistedAccuracy: number;
  averageBookSearchSeconds: number;
  topics: BookPracticeTopic[];
}

export interface ProgressSummary {
  completed: number;
  active: number;
  averageScore: number;
  bestScore: number;
  answered: number;
  history: ProgressHistoryItem[];
  weakAreas: WeakArea[];
  bookPractice: BookPracticeSummary;
  activeSessions: Array<{
    id: string;
    mode: string;
    feedbackMode: string;
    startedAt: string;
    answered: number;
    total: number;
  }>;
}

export function buildProgressSummary(
  sessions: readonly PersistedStudySession[],
  answers: readonly PersistedSessionAnswer[],
  bank: readonly Question[],
): ProgressSummary {
  const questionById = new Map(bank.map(question => [question.id, question]));
  const answersBySession = new Map<string, PersistedSessionAnswer[]>();

  for (const answer of answers) {
    const list = answersBySession.get(answer.session_id) ?? [];
    list.push(answer);
    answersBySession.set(answer.session_id, list);
  }

  const history: ProgressHistoryItem[] = sessions.map(session => {
    const rows = answersBySession.get(session.id) ?? [];
    const byQuestion = new Map(rows.map(row => [row.question_id, row]));
    let correct = 0;
    let unanswered = 0;

    for (const questionId of session.question_ids) {
      const row = byQuestion.get(questionId);
      if (!row || !row.selected_answer_ids.length) unanswered++;
      if (row?.is_correct === true) correct++;
    }

    const total = session.question_ids.length;
    const incorrect = Math.max(0, total - correct - unanswered);
    const score = session.status === "completed" && total ? (correct / total) * 100 : null;

    return {
      id: session.id,
      mode: session.mode,
      feedbackMode: session.feedback_mode,
      status: session.status,
      startedAt: session.started_at,
      completedAt: session.completed_at,
      score,
      passed: score === null ? null : score >= EXAM_CONFIG.passingPercentage,
      correct,
      incorrect,
      unanswered,
      total,
    };
  });

  const completedHistory = history.filter(item => item.status === "completed" && item.score !== null);
  const averageScore = completedHistory.length
    ? completedHistory.reduce((sum, item) => sum + (item.score ?? 0), 0) / completedHistory.length
    : 0;
  const bestScore = completedHistory.length
    ? Math.max(...completedHistory.map(item => item.score ?? 0))
    : 0;

  const aggregate = new Map<string, { correct: number; total: number; seconds: number }>();
  for (const session of sessions) {
    if (session.status !== "completed") continue;
    for (const row of answersBySession.get(session.id) ?? []) {
      if (row.is_correct === null) continue;
      const question = questionById.get(row.question_id);
      if (!question) continue;
      const current = aggregate.get(question.subcategory) ?? { correct: 0, total: 0, seconds: 0 };
      current.total += 1;
      current.correct += row.is_correct ? 1 : 0;
      current.seconds += Math.max(0, row.question_time_seconds ?? 0);
      aggregate.set(question.subcategory, current);
    }
  }

  const weakAreas = [...aggregate.entries()]
    .filter(([, value]) => value.total >= 3)
    .map(([name, value]) => ({
      name,
      correct: value.correct,
      total: value.total,
      percentage: value.total ? (value.correct / value.total) * 100 : 0,
      averageSeconds: value.total ? value.seconds / value.total : 0,
    }))
    .sort((a, b) => a.percentage - b.percentage || b.total - a.total)
    .slice(0, 8);

  let directAnswers = 0;
  let directCorrect = 0;
  let bookAssistedAnswers = 0;
  let bookAssistedCorrect = 0;
  let totalBookSearchSeconds = 0;
  let timedBookSearches = 0;
  const bookTopics = new Map<string, { searches: number; seconds: number; correct: number }>();

  for (const row of answers) {
    if (!row.selected_answer_ids.length) continue;

    if (row.response_path === "direct") {
      directAnswers++;
      if (row.is_correct === true) directCorrect++;
      continue;
    }

    if (row.response_path !== "book-assisted") continue;

    bookAssistedAnswers++;
    if (row.is_correct === true) bookAssistedCorrect++;

    const seconds = Math.max(0, row.book_search_seconds ?? 0);
    if (seconds > 0) {
      timedBookSearches++;
      totalBookSearchSeconds += seconds;
    }

    const question = questionById.get(row.question_id);
    if (!question) continue;
    const topic = bookTopics.get(question.subcategory) ?? { searches: 0, seconds: 0, correct: 0 };
    topic.searches++;
    topic.seconds += seconds;
    topic.correct += row.is_correct === true ? 1 : 0;
    bookTopics.set(question.subcategory, topic);
  }

  const bookPractice: BookPracticeSummary = {
    directAnswers,
    directCorrect,
    directAccuracy: directAnswers ? (directCorrect / directAnswers) * 100 : 0,
    bookAssistedAnswers,
    bookAssistedCorrect,
    bookAssistedAccuracy: bookAssistedAnswers ? (bookAssistedCorrect / bookAssistedAnswers) * 100 : 0,
    averageBookSearchSeconds: timedBookSearches ? totalBookSearchSeconds / timedBookSearches : 0,
    topics: [...bookTopics.entries()]
      .filter(([, value]) => value.searches >= 2)
      .map(([name, value]) => ({
        name,
        searches: value.searches,
        averageSearchSeconds: value.searches ? value.seconds / value.searches : 0,
        bookAssistedAccuracy: value.searches ? (value.correct / value.searches) * 100 : 0,
      }))
      .sort((a, b) => b.averageSearchSeconds - a.averageSearchSeconds || a.bookAssistedAccuracy - b.bookAssistedAccuracy)
      .slice(0, 8),
  };

  const activeSessions = sessions
    .filter(session => session.status === "active")
    .map(session => ({
      id: session.id,
      mode: session.mode,
      feedbackMode: session.feedback_mode,
      startedAt: session.started_at,
      answered: (answersBySession.get(session.id) ?? []).filter(row => row.selected_answer_ids.length > 0).length,
      total: session.question_ids.length,
    }));

  return {
    completed: completedHistory.length,
    active: activeSessions.length,
    averageScore,
    bestScore,
    answered: answers.filter(answer => answer.selected_answer_ids.length > 0).length,
    history,
    weakAreas,
    bookPractice,
    activeSessions,
  };
}
