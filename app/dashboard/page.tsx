"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Shell } from "@/components/Shell";
import { questions } from "@/data/questions";
import { storage } from "@/lib/storage";
import { dashboardStats, performance } from "@/lib/analytics";
import { createSession } from "@/lib/engine";
import { EXAM_CONFIG } from "@/lib/config";
import { fullExamReadiness } from "@/lib/question-validation";
import type { FeedbackMode, Profile, SessionMode } from "@/lib/types";

const remoteAuth = process.env.NEXT_PUBLIC_PLATFORM_DATA_MODE === "supabase";

interface RemoteMe {
  user: {
    id: string;
    email: string | null;
    displayName: string;
  };
}

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [category, setCategory] = useState(questions[0].subcategory);
  const [count, setCount] = useState(5);

  const attempts = loaded ? storage.attempts() : [];
  const stats = dashboardStats(attempts);
  const eligible = questions;
  const fullExam = fullExamReadiness(questions);
  const available = eligible.filter(question => question.subcategory === category).length;

  useEffect(() => {
    let cancelled = false;

    async function loadProfile() {
      if (!remoteAuth) {
        const localProfile = storage.profile();
        if (!localProfile) {
          router.replace("/");
          return;
        }
        if (!cancelled) {
          setProfile(localProfile);
          setLoaded(true);
        }
        return;
      }

      try {
        const response = await fetch("/api/auth/me", { cache: "no-store" });
        if (response.status === 401) {
          router.replace("/sign-in");
          return;
        }
        if (!response.ok) throw new Error("Unable to load account");
        const body = await response.json() as RemoteMe;
        if (!cancelled) {
          setProfile({ name: body.user.displayName, createdAt: Date.now() });
          setLoaded(true);
        }
      } catch {
        if (!cancelled) router.replace("/sign-in");
      }
    }

    void loadProfile();
    return () => {
      cancelled = true;
    };
  }, [router]);

  function start(mode: SessionMode, feedbackMode?: FeedbackMode) {
    const pool =
      mode === "full-exam"
        ? eligible
        : mode === "quick-test"
          ? eligible
          : eligible.filter(question => question.subcategory === category);

    if (!pool.length) return;

    const sessionCount =
      mode === "full-exam"
        ? EXAM_CONFIG.questionCount
        : mode === "quick-test"
          ? 20
          : Math.min(count, pool.length);

    const session = createSession(
      mode,
      pool,
      sessionCount,
      Date.now(),
      () => crypto.randomUUID(),
      feedbackMode,
    );

    // Phase 2 identity is remote, while study-session persistence remains local
    // until P4/P5 server session creation and grading are implemented.
    storage.saveActive(session);
    router.push(`/exam/${session.id}`);
  }

  async function leaveAccount() {
    if (remoteAuth) {
      await fetch("/api/auth/logout", { method: "POST" }).catch(() => undefined);
      router.replace("/sign-in");
      router.refresh();
      return;
    }

    if (confirm("Change user? Your exam history remains on this browser.")) {
      storage.clearProfile();
      router.push("/");
    }
  }

  if (!profile) return null;

  const weak = performance(attempts, questions, "subcategory")
    .filter(item => item.total >= 3)
    .slice(0, 3);

  return (
    <Shell>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {profile.name}</h1>
          <p className="muted mt-1">Choose a focused session or review your progress.</p>
        </div>
        <button className="text-sm underline" onClick={() => void leaveAccount()}>
          {remoteAuth ? "Sign out" : "Change user"}
        </button>
      </div>

      {remoteAuth && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm">
          Account sign-in is server-backed. Study history is still stored on this browser during the migration.
        </div>
      )}

      <section aria-label="Statistics" className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ["Exams Completed", stats.completed],
          ["Average Score", `${stats.average.toFixed(1)}%`],
          ["Best Score", `${stats.best.toFixed(1)}%`],
          ["Questions Answered", stats.answered],
        ].map(item => (
          <div className="card" key={item[0]}>
            <p className="muted text-sm">{item[0]}</p>
            <p className="mt-1 text-2xl font-bold">{item[1]}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="card">
          <h2 className="text-xl font-bold">Full Exam</h2>
          <p className="muted mt-2">Choose realistic testing or study with immediate explanations.</p>
          {fullExam.ready ? (
            <div className="mt-5 grid gap-3">
              <div>
                <strong>Exam Mode</strong>
                <p className="muted text-sm">{EXAM_CONFIG.questionCount} questions · 5h30m · feedback after completion</p>
                <button onClick={() => start("full-exam", "deferred")} className="btn primary mt-2">Start Exam Mode</button>
              </div>
              <div className="border-t pt-3">
                <strong>Learning Mode</strong>
                <p className="muted text-sm">{EXAM_CONFIG.questionCount} questions · immediate answer explanations</p>
                <button onClick={() => start("full-exam", "immediate")} className="btn secondary mt-2">Start Learning Mode</button>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-5 rounded-lg bg-amber-50 p-3 text-sm">
                <strong>Question bank not ready</strong><br />
                Full Exam requires {EXAM_CONFIG.questionCount} unique reviewed, source-checked, five-choice questions.
                Current eligible bank: {fullExam.eligible.length}.
              </div>
              <button disabled className="btn secondary mt-4 opacity-50">Unavailable</button>
            </>
          )}
        </article>

        <article className="card">
          <h2 className="text-xl font-bold">Quick Test</h2>
          <p className="muted mt-2">20 random unique questions. Feedback after completion.</p>
          <button onClick={() => start("quick-test")} className="btn primary mt-7">Start Quick Test</button>
        </article>

        <article className="card">
          <h2 className="text-xl font-bold">Practice by Category</h2>
          <label className="mt-3 block text-sm font-bold" htmlFor="cat">Training subcategory</label>
          <select
            id="cat"
            value={category}
            onChange={event => setCategory(event.target.value)}
            className="mt-1 w-full rounded border p-2"
          >
            {[...new Set(eligible.map(question => question.subcategory))].map(item => <option key={item}>{item}</option>)}
          </select>
          <label className="mt-3 block text-sm font-bold" htmlFor="count">Questions (available: {available})</label>
          <input
            id="count"
            type="number"
            min="1"
            max={available}
            value={Math.min(count, available)}
            onChange={event => setCount(Number(event.target.value))}
            className="mt-1 w-full rounded border p-2"
          />
          <button onClick={() => start("category-practice")} className="btn primary mt-4">Start Practice</button>
        </article>
      </section>

      <section className="card mt-6">
        <h2 className="font-bold">Weakest meaningful areas</h2>
        {weak.length ? (
          weak.map(item => (
            <p className="mt-2" key={item.name}>
              {item.name}: {item.percentage.toFixed(0)}% <span className="muted">({item.total} attempts)</span>
            </p>
          ))
        ) : (
          <p className="muted mt-2">Complete more questions to identify trends. At least 3 attempts per area are needed.</p>
        )}
        <div className="mt-3 flex gap-4">
          <Link href="/mistakes" className="underline">Review mistakes</Link>
          <Link href="/weak-areas" className="underline">View analysis</Link>
        </div>
      </section>
    </Shell>
  );
}
