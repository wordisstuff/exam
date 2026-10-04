import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import type { SupabaseAuthSession } from "./supabase-auth-rest.ts";

export const AUTH_COOKIE = "mnqb_access";
export const REFRESH_COOKIE = "mnqb_refresh";

const baseCookie = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

export function setAuthCookies(store: ReadonlyRequestCookies, session: SupabaseAuthSession) {
  store.set(AUTH_COOKIE, session.access_token, {
    ...baseCookie,
    maxAge: Math.max(60, session.expires_in || 3600),
  });
  store.set(REFRESH_COOKIE, session.refresh_token, {
    ...baseCookie,
    maxAge: 60 * 60 * 24 * 30,
  });
}

export function clearAuthCookies(store: ReadonlyRequestCookies) {
  store.set(AUTH_COOKIE, "", { ...baseCookie, maxAge: 0 });
  store.set(REFRESH_COOKIE, "", { ...baseCookie, maxAge: 0 });
}
