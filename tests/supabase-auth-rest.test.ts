import assert from "node:assert/strict";
import test from "node:test";
import { displayNameFromUser } from "../lib/supabase-auth-rest.ts";

test("displayNameFromUser prefers explicit display metadata", () => {
  assert.equal(
    displayNameFromUser({
      id: "u1",
      email: "henry@example.com",
      user_metadata: { display_name: "Henry" },
    }),
    "Henry",
  );
});

test("displayNameFromUser falls back to the email local part", () => {
  assert.equal(
    displayNameFromUser({ id: "u1", email: "henry@example.com", user_metadata: {} }),
    "henry",
  );
});
