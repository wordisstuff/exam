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

function restUrl(path: string) {
  const { url } = serverSupabaseConfig();
  return `${url.replace(/\/$/, "")}/rest/v1/${path}`;
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
  if (!response.ok) {
    const message =
      typeof payload === "object" &&
      payload !== null &&
      "message" in payload &&
      typeof (payload as { message?: unknown }).message === "string"
        ? (payload as { message: string }).message
        : "Unable to persist study session";
    throw new Error(message);
  }

  if (!Array.isArray(payload) || !payload[0]) {
    throw new Error("Supabase did not return the created study session");
  }

  return payload[0] as PersistedStudySession;
}
