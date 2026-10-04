"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function checkout() {
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/billing/checkout", { method: "POST" });
      if (response.status === 401) {
        router.push("/sign-in");
        return;
      }
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to start checkout.");
      window.location.assign(body.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl p-4 md:p-8">
      <header className="text-center">
        <p className="tag">Minnesota QB Practice</p>
        <h1 className="mt-4 text-4xl font-bold">Full platform access</h1>
        <p className="muted mx-auto mt-3 max-w-2xl">
          Original Minnesota QB practice questions, server-graded Full Exams, Learning Mode,
          cross-device progress, and weak-area analytics.
        </p>
      </header>

      <section className="card mx-auto mt-8 max-w-xl p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">180-day access</h2>
            <p className="muted mt-1">One-time payment. No automatic renewal.</p>
          </div>
          <p className="text-4xl font-bold">$199</p>
        </div>

        <ul className="mt-6 list-disc space-y-2 pl-5">
          <li>110-question Full Exam simulation</li>
          <li>Learning Mode with explanations and references</li>
          <li>English + Ukrainian content currently available</li>
          <li>Cross-device history and weak-area analytics</li>
          <li>Code Book Practice and AI Tutor planned for the full product</li>
        </ul>

        <button disabled={busy} onClick={() => void checkout()} className="btn primary mt-7 w-full disabled:opacity-50">
          {busy ? "Opening checkout…" : "Get 180-day access"}
        </button>
        {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}

        <p className="muted mt-6 text-xs">
          Independent exam-preparation platform. Not affiliated with or endorsed by Minnesota DLI or ICC.
          Practice questions are original and are not actual state examination questions. Access does not guarantee a passing score.
        </p>
      </section>
    </main>
  );
}
