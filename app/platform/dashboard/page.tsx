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

function modeLabel(session: { mode: string; feedbackMode: string }) {
  if (session.mode === "book-practice") return "Code Book Practice";
  return session.feedbackMode === "immediate" ? "Learning Mode" : "Exam Mode";
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

  const firstActive = progress?.activeSessions[0] ?? null;

  return (
    <main className="min-h-screen">
      <header className="topbar">
        <div className="app-shell flex min-h-16 items-center justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold tracking-tight">Minnesota QB Practice</p>
            <p className="muted text-xs">Your study dashboard</p>
          </div>
          <div className="flex items-center gap-1">
            <button className="btn ghost" onClick={() => router.push("/platform/history")}>History</button>
            <button className="btn ghost" onClick={() => void signOut()}>Sign out</button>
          </div>
        </div>
      </header>

      <div className="app-shell py-7 md:py-10">
        <section className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Study dashboard</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Welcome back, {user.displayName}
            </h1>
            <p className="muted mt-2">Choose a mode, continue where you left off, and watch your weak areas improve.</p>
          </div>

          {access?.enforcement && access.paid && access.endsAt && (
            <div className="tag">Access through {new Date(access.endsAt).toLocaleDateString()}</div>
          )}
        </section>

        {demoSaved && (
          <section className="alert-success mt-5 flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <strong>Demo progress saved</strong>
              <p className="mt-1 text-sm">Your 10-question demo is now in your study history.</p>
            </div>
            <button className="btn secondary" onClick={() => router.push("/platform/history")}>View history</button>
          </section>
        )}

        {error && <p role="alert" className="alert-danger mt-5 p-4 text-sm">{error}</p>}

        {access?.enforcement && !access.paid && (
          <section className="card-elevated mt-6 grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow">Full access</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">Unlock the complete study platform</h2>
              <p className="muted mt-2">Full Exam, Learning Mode, Code Book Practice, history, and analytics.</p>
            </div>
            <button onClick={() => router.push("/pricing")} className="btn primary">View access options</button>
          </section>
        )}

        {firstActive && (
          <section className="card-elevated mt-7 overflow-hidden p-0">
            <div className="grid md:grid-cols-[1fr_auto] md:items-center">
              <div className="p-6 md:p-7">
                <p className="eyebrow">Continue where you left off</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{modeLabel(firstActive)}</h2>
                <p className="muted mt-2">
                  {firstActive.answered} of {firstActive.total} questions answered
                </p>
                <div className="progress-track mt-4 max-w-xl">
                  <div
                    className="progress-fill"
                    style={{ width: `${Math.min(100, (firstActive.answered / Math.max(firstActive.total, 1)) * 100)}%` }}
                  />
                </div>
              </div>
              <div className="border-t border-slate-200 p-6 md:border-l md:border-t-0">
                <button className="btn primary w-full md:w-auto" onClick={() => router.push(`/study/${firstActive.id}`)}>
                  Continue session
                </button>
              </div>
            </div>
          </section>
        )}

        {progress && (
          <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            <div className="metric">
              <p className="muted text-xs font-bold uppercase tracking-wider">Completed</p>
              <p className="mt-2 text-2xl font-extrabold">{progress.completed}</p>
            </div>
            <div className="metric">
              <p className="muted text-xs font-bold uppercase tracking-wider">Average score</p>
              <p className="mt-2 text-2xl font-extrabold">{progress.averageScore.toFixed(1)}%</p>
            </div>
            <div className="metric">
              <p className="muted text-xs font-bold uppercase tracking-wider">Best score</p>
              <p className="mt-2 text-2xl font-extrabold">{progress.bestScore.toFixed(1)}%</p>
            </div>
            <div className="metric">
              <p className="muted text-xs font-bold uppercase tracking-wider">Answered</p>
              <p className="mt-2 text-2xl font-extrabold">{progress.answered}</p>
            </div>
          </section>
        )}

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Choose your training</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight">Study modes</h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <article className="card mode-card flex flex-col">
              <span className="tag self-start">Exam simulation</span>
              <h3 className="section-title mt-4">Full Exam</h3>
              <p className="muted mt-3 flex-1 leading-6">110 questions · 5h 30m · results revealed when you finish.</p>
              <button
                disabled={busy !== null || access?.paid === false}
                onClick={() => void start("deferred")}
                className="btn primary mt-6 w-full disabled:opacity-50"
              >
                {busy === "deferred" ? "Creating…" : access?.paid === false ? "Full access required" : "Start Full Exam"}
              </button>
            </article>

            <article className="card mode-card flex flex-col">
              <span className="tag self-start">Learn as you go</span>
              <h3 className="section-title mt-4">Learning Mode</h3>
              <p className="muted mt-3 flex-1 leading-6">Check each answer immediately and study the explanation and code reference.</p>
              <button
                disabled={busy !== null || access?.paid === false}
                onClick={() => void start("immediate")}
                className="btn primary mt-6 w-full disabled:opacity-50"
              >
                {busy === "immediate" ? "Creating…" : access?.paid === false ? "Full access required" : "Start Learning Mode"}
              </button>
            </article>

            <article className="card mode-card flex flex-col">
              <span className="tag self-start">Navigation skill</span>
              <h3 className="section-title mt-4">Code Book Practice</h3>
              <p className="muted mt-3 flex-1 leading-6">20 questions built around finding the rule efficiently in your physical code book.</p>
              <button
                disabled={busy !== null || access?.paid === false}
                onClick={() => void startBookPractice()}
                className="btn primary mt-6 w-full disabled:opacity-50"
              >
                {busy === "book-practice" ? "Creating…" : access?.paid === false ? "Full access required" : "Start Code Book Practice"}
              </button>
            </article>
          </div>
        </section>

        {progress && progress.bookPractice && (
          <section className="card mt-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow">Code Book Practice</p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight">Navigation performance</h2>
              </div>
              {progress.bookPractice.bookAssistedAnswers === 0 && (
                <span className="muted text-sm">Start a Code Book Practice session to build this view.</span>
              )}
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="metric">
                <p className="muted text-sm">Direct Answer Accuracy</p>
                <p className="mt-2 text-3xl font-extrabold">{progress.bookPractice.directAccuracy.toFixed(0)}%</p>
                <p className="muted mt-1 text-xs">{progress.bookPractice.directCorrect}/{progress.bookPractice.directAnswers} correct</p>
              </div>
              <div className="metric">
                <p className="muted text-sm">Book-Assisted Accuracy</p>
                <p className="mt-2 text-3xl font-extrabold">{progress.bookPractice.bookAssistedAccuracy.toFixed(0)}%</p>
                <p className="muted mt-1 text-xs">{progress.bookPractice.bookAssistedCorrect}/{progress.bookPractice.bookAssistedAnswers} correct</p>
              </div>
              <div className="metric">
                <p className="muted text-sm">Average Book Search</p>
                <p className="mt-2 text-3xl font-extrabold">{Math.round(progress.bookPractice.averageBookSearchSeconds)} sec</p>
                <p className="muted mt-1 text-xs">Timed physical-book searches</p>
              </div>
            </div>

            {progress.bookPractice.topics.length > 0 && (
              <div className="mt-5 grid gap-2">
                {progress.bookPractice.topics.slice(0, 4).map(topic => (
                  <div key={topic.name} className="soft-panel flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
                    <strong>{topic.name}</strong>
                    <span className="muted">{Math.round(topic.averageSearchSeconds)} sec avg · {topic.bookAssistedAccuracy.toFixed(0)}% accurate</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {progress && (
          <section className="card mt-7">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow">Focus next</p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight">Weak areas</h2>
              </div>
              <button className="btn ghost" onClick={() => router.push("/platform/history")}>Open full history</button>
            </div>

            {progress.weakAreas.length ? (
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {progress.weakAreas.slice(0, 4).map(area => (
                  <div key={area.name} className="soft-panel p-4">
                    <div className="flex items-center justify-between gap-3">
                      <strong>{area.name}</strong>
                      <span className="font-extrabold">{area.percentage.toFixed(0)}%</span>
                    </div>
                    <div className="progress-track mt-3">
                      <div className="progress-fill" style={{ width: `${Math.max(4, Math.min(100, area.percentage))}%` }} />
                    </div>
                    <p className="muted mt-2 text-xs">{area.correct}/{area.total} correct · {Math.round(area.averageSeconds)} sec/question</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="soft-panel mt-5 p-5">
                <p className="font-bold">No weak-area pattern yet</p>
                <p className="muted mt-1 text-sm">Complete more graded questions and this section will start prioritizing topics for you.</p>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
