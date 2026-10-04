import { serverSupabaseConfig } from "./platform-env.ts";

export interface PersistedStudySession {
  id: string;
  user_id: string;
  bank_version: number;
  mode: string;
  feedback_mode: string;
  status: string;
  started_at: string;
  completed_at: string | null;
  time_limit_seconds: number | null;
  current_index: number;
  question_ids: string[];
}

export interface PersistedSessionAnswer {
  session_id: string;
  question_id: string;
  selected_answer_ids: string[];
  checked_at: string | null;
  is_correct: boolean | null;
  question_time_seconds: number;
  flagged: boolean;
}

function restBase() {
  const { url } = serverSupabaseConfig();
  return `${url.replace(/\/$/, "")}/rest/v1`;
}

function restUrl(path: string, params?: Record<string, string>) {
  const url = new URL(`${restBase()}/${path}`);
  for (const [key, value] of Object.entries(params ?? {})) url.searchParams.set(key, value);
  return url.toString();
}

function adminHeaders() {
  const { serviceRoleKey } = serverSupabaseConfig();
  return {
    apikey: serviceRoleKey,
    Authorization: `Bearer ${serviceRoleKey}`,
    "Content-Type": "application/json",
  };
}

async function parseJson(response: Response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return text;
  }
}

function messageFromPayload(payload: unknown, fallback: string) {
  if (
    typeof payload === "object" &&
    payload !== null &&
    "message" in payload &&
    typeof (payload as { message?: unknown }).message === "string"
  ) {
    return (payload as { message: string }).message;
  }
  return fallback;
}

export async function insertStudySession(input: {
  id: string;
  userId: string;
  bankVersion: number;
  mode: "full-exam";
  feedbackMode: "deferred" | "immediate";
  startedAt: string;
  timeLimitSeconds: number;
  questionIds: string[];
}): Promise<PersistedStudySession> {
  const response = await fetch(restUrl("study_sessions"), {
    method: "POST",
    headers: {
      ...adminHeaders(),
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      id: input.id,
      user_id: input.userId,
      bank_version: input.bankVersion,
      mode: input.mode,
      feedback_mode: input.feedbackMode,
      status: "active",
      started_at: input.startedAt,
      time_limit_seconds: input.timeLimitSeconds,
      current_index: 0,
      question_ids: input.questionIds,
    }),
    cache: "no-store",
  });

  const payload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(payload, "Unable to persist study session"));
  if (!Array.isArray(payload) || !payload[0]) throw new Error("Supabase did not return the created study session");
  return payload[0] as PersistedStudySession;
}

export async function getOwnedStudySession(sessionId: string, userId: string): Promise<PersistedStudySession | null> {
  const response = await fetch(
    restUrl("study_sessions", {
      id: `eq.${sessionId}`,
      user_id: `eq.${userId}`,
      select: "*",
      limit: "1",
    }),
    {
      headers: adminHeaders(),
      cache: "no-store",
    },
  );

  const payload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(payload, "Unable to load study session"));
  return Array.isArray(payload) && payload[0] ? payload[0] as PersistedStudySession : null;
}

export async function getSessionAnswer(sessionId: string, questionId: string): Promise<PersistedSessionAnswer | null> {
  const response = await fetch(
    restUrl("session_answers", {
      session_id: `eq.${sessionId}`,
      question_id: `eq.${questionId}`,
      select: "*",
      limit: "1",
    }),
    {
      headers: adminHeaders(),
      cache: "no-store",
    },
  );

  const payload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(payload, "Unable to load session answer"));
  return Array.isArray(payload) && payload[0] ? payload[0] as PersistedSessionAnswer : null;
}

export async function listSessionAnswers(sessionId: string): Promise<PersistedSessionAnswer[]> {
  const response = await fetch(
    restUrl("session_answers", {
      session_id: `eq.${sessionId}`,
      select: "*",
    }),
    {
      headers: adminHeaders(),
      cache: "no-store",
    },
  );

  const payload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(payload, "Unable to load session answers"));
  return Array.isArray(payload) ? payload as PersistedSessionAnswer[] : [];
}

export async function upsertSessionAnswer(input: {
  sessionId: string;
  questionId: string;
  selectedAnswerIds: string[];
  checkedAt?: string | null;
  isCorrect?: boolean | null;
  questionTimeSeconds?: number;
  flagged?: boolean;
}): Promise<PersistedSessionAnswer> {
  const row: Record<string, unknown> = {
    session_id: input.sessionId,
    question_id: input.questionId,
    selected_answer_ids: input.selectedAnswerIds,
  };

  if (input.checkedAt !== undefined) row.checked_at = input.checkedAt;
  if (input.isCorrect !== undefined) row.is_correct = input.isCorrect;
  if (input.questionTimeSeconds !== undefined) row.question_time_seconds = input.questionTimeSeconds;
  if (input.flagged !== undefined) row.flagged = input.flagged;

  const response = await fetch(restUrl("session_answers", { on_conflict: "session_id,question_id" }), {
    method: "POST",
    headers: {
      ...adminHeaders(),
      Prefer: "resolution=merge-duplicates,return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  const payload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(payload, "Unable to save session answer"));
  if (!Array.isArray(payload) || !payload[0]) throw new Error("Supabase did not return the saved session answer");
  return payload[0] as PersistedSessionAnswer;
}

export async function upsertSessionAnswers(rows: Array<{
  sessionId: string;
  questionId: string;
  selectedAnswerIds: string[];
  checkedAt?: string | null;
  isCorrect?: boolean | null;
  questionTimeSeconds?: number;
  flagged?: boolean;
}>): Promise<void> {
  if (!rows.length) return;

  const payload = rows.map(input => ({
    session_id: input.sessionId,
    question_id: input.questionId,
    selected_answer_ids: input.selectedAnswerIds,
    ...(input.checkedAt !== undefined ? { checked_at: input.checkedAt } : {}),
    ...(input.isCorrect !== undefined ? { is_correct: input.isCorrect } : {}),
    ...(input.questionTimeSeconds !== undefined ? { question_time_seconds: input.questionTimeSeconds } : {}),
    ...(input.flagged !== undefined ? { flagged: input.flagged } : {}),
  }));

  const response = await fetch(restUrl("session_answers", { on_conflict: "session_id,question_id" }), {
    method: "POST",
    headers: {
      ...adminHeaders(),
      Prefer: "resolution=merge-duplicates,return=minimal",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const responsePayload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(responsePayload, "Unable to save session answers"));
}

export async function completeStudySession(sessionId: string, completedAt: string): Promise<void> {
  const response = await fetch(
    restUrl("study_sessions", { id: `eq.${sessionId}` }),
    {
      method: "PATCH",
      headers: {
        ...adminHeaders(),
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        status: "completed",
        completed_at: completedAt,
      }),
      cache: "no-store",
    },
  );

  const payload = await parseJson(response);
  if (!response.ok) throw new Error(messageFromPayload(payload, "Unable to complete study session"));
}
