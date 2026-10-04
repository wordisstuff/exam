import { publicSupabaseConfig } from "./platform-env.ts";

export interface SupabaseAuthUser {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
}

export interface SupabaseAuthSession {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: SupabaseAuthUser;
}

function authUrl(path: string) {
  const { url } = publicSupabaseConfig();
  return `${url.replace(/\/$/, "")}/auth/v1${path}`;
}

function headers(accessToken?: string) {
  const { anonKey } = publicSupabaseConfig();
  return {
    apikey: anonKey,
    "Content-Type": "application/json",
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
}

async function parseJson(response: Response) {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return { message: text };
  }
}

function errorMessage(payload: Record<string, unknown>, fallback: string) {
  for (const key of ["msg", "message", "error_description", "error"]) {
    const value = payload[key];
    if (typeof value === "string" && value.trim()) return value;
  }
  return fallback;
}

export async function requestEmailOtp(email: string) {
  const response = await fetch(authUrl("/otp"), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, create_user: true }),
    cache: "no-store",
  });
  const payload = await parseJson(response);
  if (!response.ok) throw new Error(errorMessage(payload, "Unable to send sign-in code"));
}

export async function verifyEmailOtp(email: string, token: string): Promise<SupabaseAuthSession> {
  const response = await fetch(authUrl("/verify"), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, token, type: "email" }),
    cache: "no-store",
  });
  const payload = await parseJson(response);
  if (!response.ok) throw new Error(errorMessage(payload, "Unable to verify sign-in code"));
  return payload as unknown as SupabaseAuthSession;
}

export async function refreshAuthSession(refreshToken: string): Promise<SupabaseAuthSession> {
  const response = await fetch(authUrl("/token?grant_type=refresh_token"), {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ refresh_token: refreshToken }),
    cache: "no-store",
  });
  const payload = await parseJson(response);
  if (!response.ok) throw new Error(errorMessage(payload, "Unable to refresh session"));
  return payload as unknown as SupabaseAuthSession;
}

export async function fetchAuthUser(accessToken: string): Promise<SupabaseAuthUser> {
  const response = await fetch(authUrl("/user"), {
    method: "GET",
    headers: headers(accessToken),
    cache: "no-store",
  });
  const payload = await parseJson(response);
  if (!response.ok) throw new Error(errorMessage(payload, "Unable to load authenticated user"));
  return payload as unknown as SupabaseAuthUser;
}

export function displayNameFromUser(user: SupabaseAuthUser): string {
  const metadata = user.user_metadata ?? {};
  for (const key of ["display_name", "name", "full_name"]) {
    const value = metadata[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return user.email?.split("@")[0] || "Student";
}
