"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserInfo {
  id: string;
  email: string | null;
  displayName: string;
}

export default function PlatformDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [busy, setBusy] = useState<"deferred" | "immediate" | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" })
      .then(async response => {
        if (response.status === 401) {
          router.replace("/sign-in");
          return null;
        }
        if (!response.ok) throw new Error("Unable to load account.");
        return response.json();
      })
      .then(body => {
        if (body?.user) setUser(body.user);
      })
      .catch(() => router.replace("/sign-in"));
  }, [router]);

  async function start(feedbackMode: "deferred" | "immediate") {
    setBusy(feedbackMode);
    setError("");
    try {
      const response = await fetch("/api/study-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "full-exam", feedbackMode }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to start exam.");
      router.push(`/study/${body.session.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start exam.");
      setBusy(null);
    }
  }

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => undefined);
    router.replace("/sign-in");
    router.refresh();
  }

  if (!user) return null;

  return (
    <main className="mx-auto max-w-6xl p-4 md:p-8">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="tag">Server-backed preview</p>
          <h1 className="mt-3 text-3xl font-bold">Welcome, {user.displayName}</h1>
          <p className="muted mt-1">Your Full Exam session and grading are now controlled by the server.</p>
        </div>
        <button className="text-sm underline" onClick={() => void signOut()}>Sign out</button>
      </header>

      {error && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">{error}</p>}

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-bold">Exam Mode</h2>
          <p className="muted mt-2">110 questions · 5h30m · no correctness revealed until Finish.</p>
          <button
            disabled={busy !== null}
            onClick={() => void start("deferred")}
            className="btn primary mt-5 disabled:opacity-50"
          >
            {busy === "deferred" ? "Creating…" : "Start Full Exam"}
          </button>
        </article>

        <article className="card">
          <h2 className="text-xl font-bold">Learning Mode</h2>
          <p className="muted mt-2">Same verified pool with server-side Check Answer feedback.</p>
          <button
            disabled={busy !== null}
            onClick={() => void start("immediate")}
            className="btn primary mt-5 disabled:opacity-50"
          >
            {busy === "immediate" ? "Creating…" : "Start Learning Mode"}
          </button>
        </article>
      </section>

      <section className="card mt-6">
        <h2 className="font-bold">Migration status</h2>
        <p className="muted mt-2">
          Full Exam creation, answer checking, and final grading are server-backed. Quick Test, category practice,
          cross-device history, billing, and Code Navigation Mode are still being migrated.
        </p>
      </section>
    </main>
  );
}
