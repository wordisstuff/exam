import assert from "node:assert/strict";
import test from "node:test";
import { platformDataMode, publicSupabaseConfig, serverSupabaseConfig } from "../lib/platform-env.ts";

test("platform data mode defaults to local", () => {
  assert.equal(platformDataMode({}), "local");
});

test("platform data mode accepts supabase", () => {
  assert.equal(platformDataMode({ NEXT_PUBLIC_PLATFORM_DATA_MODE: "supabase" }), "supabase");
});

test("platform data mode rejects unknown values", () => {
  assert.throws(
    () => platformDataMode({ NEXT_PUBLIC_PLATFORM_DATA_MODE: "remote" }),
    /must be 'local' or 'supabase'/,
  );
});

test("public Supabase config requires URL and anon key", () => {
  assert.throws(() => publicSupabaseConfig({}), /NEXT_PUBLIC_SUPABASE_URL/);
  assert.deepEqual(
    publicSupabaseConfig({
      NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon-test-key",
    }),
    { url: "https://example.supabase.co", anonKey: "anon-test-key" },
  );
});

test("server Supabase config additionally requires service role key", () => {
  assert.throws(
    () =>
      serverSupabaseConfig({
        NEXT_PUBLIC_SUPABASE_URL: "https://example.supabase.co",
        NEXT_PUBLIC_SUPABASE_ANON_KEY: "anon-test-key",
      }),
    /SUPABASE_SERVICE_ROLE_KEY/,
  );
});
