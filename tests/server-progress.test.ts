import assert from "node:assert/strict";
import test from "node:test";
import { buildProgressSummary } from "../lib/server-progress.ts";
import type { PersistedSessionAnswer, PersistedStudySession } from "../lib/supabase-rest-admin.ts";
import type { Question } from "../lib/types.ts";

const bank: Question[] = [
  {
    id: "q1",
    primaryCategory: "Carpentry",
    subcategory: "Framing",
    difficulty: "easy",
    type: "single",
    question: "Q1",
    questionUk: "Q1 uk",
    answers: [
      { id: "a", text: "A" }, { id: "b", text: "B" }, { id: "c", text: "C" },
      { id: "d", text: "D" }, { id: "e", text: "E" },
    ],
    correctAnswers: ["a"],
    explanation: "x",
    tags: [],
    languageTags: [],
    skills: [],
    editorialStatus: "reviewed",
    verificationStatus: "source-checked",
  },
  {
    id: "q2",
    primaryCategory: "Carpentry",
    subcategory: "Framing",
    difficulty: "easy",
    type: "single",
    question: "Q2",
    questionUk: "Q2 uk",
    answers: [
      { id: "a", text: "A" }, { id: "b", text: "B" }, { id: "c", text: "C" },
      { id: "d", text: "D" }, { id: "e", text: "E" },
    ],
    correctAnswers: ["a"],
    explanation: "x",
    tags: [],
    languageTags: [],
    skills: [],
    editorialStatus: "reviewed",
    verificationStatus: "source-checked",
  },
  {
    id: "q3",
    primaryCategory: "Carpentry",
    subcategory: "Framing",
    difficulty: "easy",
    type: "single",
    question: "Q3",
    questionUk: "Q3 uk",
    answers: [
      { id: "a", text: "A" }, { id: "b", text: "B" }, { id: "c", text: "C" },
      { id: "d", text: "D" }, { id: "e", text: "E" },
    ],
    correctAnswers: ["a"],
    explanation: "x",
    tags: [],
    languageTags: [],
    skills: [],
    editorialStatus: "reviewed",
    verificationStatus: "source-checked",
  },
];

const session: PersistedStudySession = {
  id: "s1",
  user_id: "u1",
  bank_version: 1,
  mode: "full-exam",
  feedback_mode: "deferred",
  status: "completed",
  started_at: "2026-10-01T00:00:00.000Z",
  completed_at: "2026-10-01T01:00:00.000Z",
  time_limit_seconds: 19800,
  current_index: 0,
  question_ids: ["q1", "q2", "q3"],
};

const answers: PersistedSessionAnswer[] = [
  { session_id: "s1", question_id: "q1", selected_answer_ids: ["a"], checked_at: "", is_correct: true, question_time_seconds: 30, flagged: false },
  { session_id: "s1", question_id: "q2", selected_answer_ids: ["b"], checked_at: "", is_correct: false, question_time_seconds: 60, flagged: false },
  { session_id: "s1", question_id: "q3", selected_answer_ids: ["b"], checked_at: "", is_correct: false, question_time_seconds: 90, flagged: false },
];

test("buildProgressSummary derives cross-device score and weak areas", () => {
  const summary = buildProgressSummary([session], answers, bank);
  assert.equal(summary.completed, 1);
  assert.ok(Math.abs(summary.averageScore - 100 / 3) < 1e-10);
  assert.ok(Math.abs(summary.bestScore - 100 / 3) < 1e-10);
  assert.equal(summary.answered, 3);
  assert.equal(summary.weakAreas.length, 1);
  assert.equal(summary.weakAreas[0].name, "Framing");
  assert.equal(summary.weakAreas[0].averageSeconds, 60);
});


test("buildProgressSummary keeps Code Book Practice analytics independent from other modes", () => {
  const bookSession: PersistedStudySession = {
    ...session,
    id: "book-1",
    mode: "book-practice",
  };

  const learningSession: PersistedStudySession = {
    ...session,
    id: "learning-1",
    mode: "full-exam",
    feedback_mode: "immediate",
  };

  const bookAnswers: PersistedSessionAnswer[] = [
    {
      session_id: "book-1",
      question_id: "q1",
      selected_answer_ids: ["a"],
      checked_at: "",
      is_correct: true,
      question_time_seconds: 40,
      flagged: false,
      response_path: "direct",
    },
    {
      session_id: "book-1",
      question_id: "q2",
      selected_answer_ids: ["a"],
      checked_at: "",
      is_correct: true,
      question_time_seconds: 80,
      flagged: false,
      response_path: "book-assisted",
      book_search_seconds: 50,
    },
    {
      session_id: "book-1",
      question_id: "q3",
      selected_answer_ids: ["b"],
      checked_at: "",
      is_correct: false,
      question_time_seconds: 100,
      flagged: false,
      response_path: "book-assisted",
      book_search_seconds: 70,
    },
    {
      session_id: "learning-1",
      question_id: "q1",
      selected_answer_ids: ["a"],
      checked_at: "",
      is_correct: true,
      question_time_seconds: 20,
      flagged: false,
      response_path: "direct",
    },
  ];

  const summary = buildProgressSummary([bookSession, learningSession], bookAnswers, bank);

  assert.equal(summary.bookPractice.directAnswers, 1);
  assert.equal(summary.bookPractice.directAccuracy, 100);
  assert.equal(summary.bookPractice.bookAssistedAnswers, 2);
  assert.equal(summary.bookPractice.bookAssistedCorrect, 1);
  assert.equal(summary.bookPractice.bookAssistedAccuracy, 50);
  assert.equal(summary.bookPractice.averageBookSearchSeconds, 60);
  assert.equal(summary.bookPractice.topics.length, 1);
  assert.equal(summary.bookPractice.topics[0].name, "Framing");
});
