import { cookies } from "next/headers";
import { AUTH_COOKIE, REFRESH_COOKIE, clearAuthCookies, setAuthCookies } from "./auth-cookies.ts";
import { fetchAuthUser, refreshAuthSession, type SupabaseAuthUser } from "./supabase-auth-rest.ts";

export async function currentUser(): Promise<SupabaseAuthUser | null> {
  const store = await cookies();
  const access = store.get(AUTH_COOKIE)?.value;
  const refresh = store.get(REFRESH_COOKIE)?.value;

  if (access) {
    try {
      return await fetchAuthUser(access);
    } catch {
      // Fall through to refresh.
    }
  }

  if (!refresh) return null;

  try {
    const session = await refreshAuthSession(refresh);
    setAuthCookies(store, session);
    return session.user;
  } catch {
    clearAuthCookies(store);
    return null;
  }
}
