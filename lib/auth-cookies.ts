import type { SupabaseAuthSession } from "./supabase-auth-rest.ts";

export const AUTH_COOKIE = "mnqb_access";
export const REFRESH_COOKIE = "mnqb_refresh";

interface CookieStore {
  get(name: string): { value: string } | undefined;
  set(
    name: string,
    value: string,
    options?: {
      httpOnly?: boolean;
      sameSite?: "lax" | "strict" | "none";
      secure?: boolean;
      path?: string;
      maxAge?: number;
    },
  ): void;
}

const baseCookie = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

export function setAuthCookies(store: CookieStore, session: SupabaseAuthSession) {
  store.set(AUTH_COOKIE, session.access_token, {
    ...baseCookie,
    maxAge: Math.max(60, session.expires_in || 3600),
  });
  store.set(REFRESH_COOKIE, session.refresh_token, {
    ...baseCookie,
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function clearAuthCookies(store: CookieStore) {
  store.set(AUTH_COOKIE, "", { ...baseCookie, maxAge: 0 });
  store.set(REFRESH_COOKIE, "", { ...baseCookie, maxAge: 0 });
}
