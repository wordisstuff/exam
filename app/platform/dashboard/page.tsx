"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserInfo {
  id: string;
  email: string | null;
  displayName: string;
}

interface ProgressSummary {
  completed: number;
  active: number;
  averageScore: number;
  bestScore: number;
  answered: number;
  weakAreas: Array<{
    name: string;
    correct: number;
    total: number;
    percentage: number;
    averageSeconds: number;
  }>;
  activeSessions: Array<{
    id: string;
    mode: string;
    feedbackMode: string;
    startedAt: string;
    answered: number;
    total: number;
  }>;
}

export default function PlatformDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [progress, setProgress] = useState<ProgressSummary | null>(null);
  const [busy, setBusy] = useState<"deferred" | "immediate" | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    Promise.all([
      fetch("/api/auth/me", { cache: "no-store" }),
      fetch("/api/progress", { cache: "no-store" }),
    ])
      .then(async ([meResponse, progressResponse]) => {
        if (meResponse.status === 401 || progressResponse.status === 401) {
          router.replace("/sign-in");
          return null;
        }
        if (!meResponse.ok) throw new Error("Unable to load account.");
        if (!progressResponse.ok) throw new Error("Unable to load progress.");
        const [meBody, progressBody] = await Promise.all([meResponse.json(), progressResponse.json()]);
        return { meBody, progressBody };
      })
      .then(payload => {
        if (!payload) return;
        setUser(payload.meBody.user);
        setProgress(payload.progressBody.progress);
      })
      .catch(err => setError(err instanceof Error ? err.message : "Unable to load dashboard."));
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
          <p className="muted mt-1">Your Full Exam, grading, and progress are stored on the server.</p>
        </div>
        <div className="flex gap-4 text-sm">
          <button className="underline" onClick={() => router.push("/platform/history")}>History</button>
          <button className="underline" onClick={() => void signOut()}>Sign out</button>
        </div>
      </header>

      {error && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">{error}</p>}

      {progress && (
        <>
          <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["Exams Completed", progress.completed],
              ["Average Score", `${progress.averageScore.toFixed(1)}%`],
              ["Best Score", `${progress.bestScore.toFixed(1)}%`],
              ["Questions Answered", progress.answered],
            ].map(item => (
              <div className="card" key={item[0]}>
                <p className="muted text-sm">{item[0]}</p>
                <p className="mt-1 text-2xl font-bold">{item[1]}</p>
              </div>
            ))}
          </section>

          {progress.activeSessions.length > 0 && (
            <section className="card mt-6">
              <h2 className="font-bold">Continue an active session</h2>
              <div className="mt-3 grid gap-3">
                {progress.activeSessions.map(session => (
                  <button
                    key={session.id}
                    onClick={() => router.push(`/study/${session.id}`)}
                    className="rounded-lg border p-4 text-left hover:bg-slate-50"
                  >
                    <strong>{session.feedbackMode === "immediate" ? "Learning Mode" : "Exam Mode"}</strong>
                    <span className="muted ml-3 text-sm">{session.answered}/{session.total} answered</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-bold">Exam Mode</h2>
          <p className="muted mt-2">110 questions · 5h30m · no correctness revealed until Finish.</p>
          <button disabled={busy !== null} onClick={() => void start("deferred")} className="btn primary mt-5 disabled:opacity-50">
            {busy === "deferred" ? "Creating…" : "Start Full Exam"}
          </button>
        </article>

        <article className="card">
          <h2 className="text-xl font-bold">Learning Mode</h2>
          <p className="muted mt-2">Same verified pool with server-side Check Answer feedback.</p>
          <button disabled={busy !== null} onClick={() => void start("immediate")} className="btn primary mt-5 disabled:opacity-50">
            {busy === "immediate" ? "Creating…" : "Start Learning Mode"}
          </button>
        </article>
      </section>

      {progress && (
        <section className="card mt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-bold">Weakest meaningful areas</h2>
            <button className="text-sm underline" onClick={() => router.push("/platform/history")}>View full history</button>
          </div>
          {progress.weakAreas.length ? (
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {progress.weakAreas.slice(0, 4).map(area => (
                <div key={area.name} className="rounded-lg border p-3">
                  <strong>{area.name}</strong>
                  <p className="mt-1">{area.percentage.toFixed(0)}% <span className="muted">({area.correct}/{area.total})</span></p>
                  <p className="muted text-sm">Avg. {Math.round(area.averageSeconds)} sec/question</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted mt-2">Complete more questions to identify trends. At least 3 graded attempts per area are needed.</p>
          )}
        </section>
      )}

      <section className="card mt-6">
        <h2 className="font-bold">Migration status</h2>
        <p className="muted mt-2">
          Full Exam creation, answer checking, final grading, active-session resume, history, and weak-area analytics are server-backed.
          Billing and Code Navigation Mode are next.
        </p>
      </section>
    </main>
  );
}
