"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface UserInfo {
  id: string;
  email: string | null;
  displayName: string;
}

interface AccessState {
  enforcement: boolean;
  paid: boolean;
  productCode: string | null;
  startsAt: string | null;
  endsAt: string | null;
}

interface ProgressSummary {
  completed: number;
  active: number;
  averageScore: number;
  bestScore: number;
  answered: number;
  weakAreas: Array<{ name: string; correct: number; total: number; percentage: number; averageSeconds: number }>;
  bookPractice: {
    directAnswers: number;
    directCorrect: number;
    directAccuracy: number;
    bookAssistedAnswers: number;
    bookAssistedCorrect: number;
    bookAssistedAccuracy: number;
    averageBookSearchSeconds: number;
    topics: Array<{ name: string; searches: number; averageSearchSeconds: number; bookAssistedAccuracy: number }>;
  };
  activeSessions: Array<{ id: string; mode: string; feedbackMode: string; startedAt: string; answered: number; total: number }>;
}

export default function PlatformDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(null);
  const [access, setAccess] = useState<AccessState | null>(null);
  const [progress, setProgress] = useState<ProgressSummary | null>(null);
  const [busy, setBusy] = useState<"deferred" | "immediate" | "book-practice" | null>(null);
  const [error, setError] = useState("");
  const [demoSaved, setDemoSaved] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setDemoSaved(params.get("demo") === "saved");

    Promise.all([
      fetch("/api/auth/me", { cache: "no-store" }),
      fetch("/api/access", { cache: "no-store" }),
      fetch("/api/progress", { cache: "no-store" }),
    ])
      .then(async ([meResponse, accessResponse, progressResponse]) => {
        if ([meResponse, accessResponse, progressResponse].some(response => response.status === 401)) {
          router.replace("/sign-in");
          return null;
        }
        if (!meResponse.ok) throw new Error("Unable to load account.");
        if (!accessResponse.ok) throw new Error("Unable to load access.");
        if (!progressResponse.ok) throw new Error("Unable to load progress.");
        const [meBody, accessBody, progressBody] = await Promise.all([
          meResponse.json(), accessResponse.json(), progressResponse.json(),
        ]);
        return { meBody, accessBody, progressBody };
      })
      .then(payload => {
        if (!payload) return;
        setUser(payload.meBody.user);
        setAccess(payload.accessBody.access);
        setProgress(payload.progressBody.progress);
      })
      .catch(err => setError(err instanceof Error ? err.message : "Unable to load dashboard."));
  }, [router]);

  async function start(feedbackMode: "deferred" | "immediate") {
    if (access && !access.paid) {
      router.push("/pricing");
      return;
    }
    setBusy(feedbackMode);
    setError("");
    try {
      const response = await fetch("/api/study-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "full-exam", feedbackMode }),
      });
      const body = await response.json();
      if (response.status === 402) {
        router.push("/pricing");
        return;
      }
      if (!response.ok) throw new Error(body.error || "Unable to start exam.");
      router.push(`/study/${body.session.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start exam.");
      setBusy(null);
    }
  }

  async function startBookPractice() {
    if (access && !access.paid) {
      router.push("/pricing");
      return;
    }
    setBusy("book-practice");
    setError("");
    try {
      const response = await fetch("/api/study-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "book-practice" }),
      });
      const body = await response.json();
      if (response.status === 402) {
        router.push("/pricing");
        return;
      }
      if (!response.ok) throw new Error(body.error || "Unable to start Code Book Practice.");
      router.push(`/study/${body.session.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start Code Book Practice.");
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

      {access?.enforcement && (
        <section className="card mt-5">
          {access.paid ? (
            <p><strong>Paid access active.</strong> <span className="muted">Through {access.endsAt ? new Date(access.endsAt).toLocaleDateString() : "—"}.</span></p>
          ) : (
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div><strong>Full access required</strong><p className="muted text-sm">Unlock the 180-day QB practice platform.</p></div>
              <button onClick={() => router.push("/pricing")} className="btn primary">View $199 access</button>
            </div>
          )}
        </section>
      )}

      {demoSaved && (
        <section className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
          <strong>Demo progress saved.</strong>
          <span className="ml-2">Your 10-question demo is now part of this account’s study history.</span>
        </section>
      )}

      {error && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-red-800">{error}</p>}

      {progress && (
        <>
          <section className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ["Exams Completed", progress.completed],
              ["Average Score", `${progress.averageScore.toFixed(1)}%`],
              ["Best Score", `${progress.bestScore.toFixed(1)}%`],
              ["Questions Answered", progress.answered],
            ].map(item => <div className="card" key={item[0]}><p className="muted text-sm">{item[0]}</p><p className="mt-1 text-2xl font-bold">{item[1]}</p></div>)}
          </section>

          {progress.activeSessions.length > 0 && (
            <section className="card mt-6">
              <h2 className="font-bold">Continue an active session</h2>
              <div className="mt-3 grid gap-3">
                {progress.activeSessions.map(session => (
                  <button key={session.id} onClick={() => router.push(`/study/${session.id}`)} className="rounded-lg border p-4 text-left hover:bg-slate-50">
                    <strong>{session.mode === "book-practice" ? "Code Book Practice" : session.feedbackMode === "immediate" ? "Learning Mode" : "Exam Mode"}</strong>
                    <span className="muted ml-3 text-sm">{session.answered}/{session.total} answered</span>
                  </button>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <section className="mt-8 grid gap-5 lg:grid-cols-3">
        <article className="card">
          <h2 className="text-xl font-bold">Exam Mode</h2>
          <p className="muted mt-2">110 questions · 5h30m · no correctness revealed until Finish.</p>
          <button disabled={busy !== null || access?.paid === false} onClick={() => void start("deferred")} className="btn primary mt-5 disabled:opacity-50">
            {busy === "deferred" ? "Creating…" : access?.paid === false ? "Paid access required" : "Start Full Exam"}
          </button>
        </article>

        <article className="card">
          <h2 className="text-xl font-bold">Learning Mode</h2>
          <p className="muted mt-2">Same verified pool with server-side Check Answer feedback.</p>
          <button disabled={busy !== null || access?.paid === false} onClick={() => void start("immediate")} className="btn primary mt-5 disabled:opacity-50">
            {busy === "immediate" ? "Creating…" : access?.paid === false ? "Paid access required" : "Start Learning Mode"}
          </button>
        </article>

        <article className="card">
          <h2 className="text-xl font-bold">Code Book Practice</h2>
          <p className="muted mt-2">20 questions focused on finding the rule efficiently in your physical code book.</p>
          <button disabled={busy !== null || access?.paid === false} onClick={() => void startBookPractice()} className="btn primary mt-5 disabled:opacity-50">
            {busy === "book-practice" ? "Creating…" : access?.paid === false ? "Paid access required" : "Start Code Book Practice"}
          </button>
        </article>
      </section>

      {progress && progress.bookPractice && (
        <section className="card mt-6">
          <h2 className="font-bold">Code Book Practice analytics</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <div className="rounded-lg border p-3">
              <p className="muted text-sm">Direct Answer Accuracy</p>
              <p className="mt-1 text-2xl font-bold">{progress.bookPractice.directAccuracy.toFixed(0)}%</p>
              <p className="muted text-xs">{progress.bookPractice.directCorrect}/{progress.bookPractice.directAnswers}</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="muted text-sm">Book-Assisted Accuracy</p>
              <p className="mt-1 text-2xl font-bold">{progress.bookPractice.bookAssistedAccuracy.toFixed(0)}%</p>
              <p className="muted text-xs">{progress.bookPractice.bookAssistedCorrect}/{progress.bookPractice.bookAssistedAnswers}</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="muted text-sm">Average Book Search</p>
              <p className="mt-1 text-2xl font-bold">{Math.round(progress.bookPractice.averageBookSearchSeconds)} sec</p>
              <p className="muted text-xs">Timed physical-book searches</p>
            </div>
          </div>
          {progress.bookPractice.topics.length > 0 && (
            <div className="mt-4 grid gap-2">
              {progress.bookPractice.topics.slice(0, 4).map(topic => (
                <div key={topic.name} className="flex flex-wrap justify-between gap-2 rounded-lg border p-3 text-sm">
                  <strong>{topic.name}</strong>
                  <span className="muted">{Math.round(topic.averageSearchSeconds)} sec avg · {topic.bookAssistedAccuracy.toFixed(0)}% accurate</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

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
          ) : <p className="muted mt-2">Complete more questions to identify trends. At least 3 graded attempts per area are needed.</p>}
        </section>
      )}

      <section className="card mt-6">
        <h2 className="font-bold">Migration status</h2>
        <p className="muted mt-2">
          Full Exam, grading, resume, history, weak-area analytics, and paid-access architecture are server-backed.
          Code Book Practice now has its own session type and analytics. Free demo and content expansion are next.
        </p>
      </section>
    </main>
  );
}
