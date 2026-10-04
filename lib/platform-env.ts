export type PlatformDataMode = "local" | "supabase";

type EnvSource = Record<string, string | undefined>;

export interface PublicSupabaseConfig {
  url: string;
  anonKey: string;
}

export interface ServerSupabaseConfig extends PublicSupabaseConfig {
  serviceRoleKey: string;
}

function required(env: EnvSource, key: string): string {
  const value = env[key]?.trim();
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

function validateUrl(value: string, key: string): string {
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new Error(`Invalid URL in environment variable: ${key}`);
  }
  if (parsed.protocol !== "https:" && parsed.hostname !== "localhost") {
    throw new Error(`Expected HTTPS URL in environment variable: ${key}`);
  }
  return value;
}

export function platformDataMode(env: EnvSource = process.env): PlatformDataMode {
  const value = env.NEXT_PUBLIC_PLATFORM_DATA_MODE?.trim() || "local";
  if (value !== "local" && value !== "supabase") {
    throw new Error("NEXT_PUBLIC_PLATFORM_DATA_MODE must be 'local' or 'supabase'");
  }
  return value;
}

export function publicSupabaseConfig(env: EnvSource = process.env): PublicSupabaseConfig {
  const url = validateUrl(required(env, "NEXT_PUBLIC_SUPABASE_URL"), "NEXT_PUBLIC_SUPABASE_URL");
  const anonKey = required(env, "NEXT_PUBLIC_SUPABASE_ANON_KEY");
  return { url, anonKey };
}

export function serverSupabaseConfig(env: EnvSource = process.env): ServerSupabaseConfig {
  return {
    ...publicSupabaseConfig(env),
    serviceRoleKey: required(env, "SUPABASE_SERVICE_ROLE_KEY"),
  };
}
