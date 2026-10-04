"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface HistoryItem {
  id: string;
  mode: string;
  feedbackMode: string;
  status: string;
  startedAt: string;
  completedAt: string | null;
  score: number | null;
  passed: boolean | null;
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
}

interface WeakArea {
  name: string;
  correct: number;
  total: number;
  percentage: number;
  averageSeconds: number;
}

export default function PlatformHistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [weakAreas, setWeakAreas] = useState<WeakArea[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/progress", { cache: "no-store" })
      .then(async response => {
        if (response.status === 401) {
          router.replace("/sign-in");
          return null;
        }
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "Unable to load progress.");
        return body.progress;
      })
      .then(progress => {
        if (!progress) return;
        setHistory(progress.history ?? []);
        setWeakAreas(progress.weakAreas ?? []);
      })
      .catch(err => setError(err instanceof Error ? err.message : "Unable to load progress."));
  }, [router]);

  return (
    <main className="mx-auto max-w-6xl p-4 md:p-8">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="tag">Cross-device progress</p>
          <h1 className="mt-3 text-3xl font-bold">History & weak areas</h1>
        </div>
        <button className="text-sm underline" onClick={() => router.push("/platform/dashboard")}>Dashboard</button>
      </header>

      {error && <p role="alert" className="mt-5 text-red-700">{error}</p>}

      <section className="card mt-7">
        <h2 className="text-xl font-bold">Weak areas</h2>
        {weakAreas.length ? (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {weakAreas.map(area => (
              <div key={area.name} className="rounded-lg border p-4">
                <strong>{area.name}</strong>
                <p className="mt-1 text-2xl font-bold">{area.percentage.toFixed(0)}%</p>
                <p className="muted text-sm">{area.correct}/{area.total} correct · {Math.round(area.averageSeconds)} sec/question average</p>
              </div>
            ))}
          </div>
        ) : <p className="muted mt-3">Not enough completed graded questions yet.</p>}
      </section>

      <section className="card mt-6">
        <h2 className="text-xl font-bold">Study history</h2>
        {history.length ? (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 pr-4">Date</th>
                  <th className="py-3 pr-4">Mode</th>
                  <th className="py-3 pr-4">Status</th>
                  <th className="py-3 pr-4">Score</th>
                  <th className="py-3 pr-4">Correct</th>
                  <th className="py-3 pr-4">Unanswered</th>
                  <th className="py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {history.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3 pr-4">{new Date(item.startedAt).toLocaleDateString()}</td>
                    <td className="py-3 pr-4">{item.mode === "demo" ? "Free Demo" : item.mode === "book-practice" ? "Code Book Practice" : item.feedbackMode === "immediate" ? "Learning" : "Exam"}</td>
                    <td className="py-3 pr-4">{item.status}</td>
                    <td className="py-3 pr-4">{item.score === null ? "—" : `${item.score.toFixed(1)}%`}</td>
                    <td className="py-3 pr-4">{item.correct}/{item.total}</td>
                    <td className="py-3 pr-4">{item.unanswered}</td>
                    <td className="py-3">
                      <button className="underline" onClick={() => router.push(`/study/${item.id}`)}>
                        {item.status === "active" ? "Continue" : "Review"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className="muted mt-3">No server-backed study sessions yet.</p>}
      </section>
    </main>
  );
}
