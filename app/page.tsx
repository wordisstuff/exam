"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/storage";

const remotePlatform = process.env.NEXT_PUBLIC_PLATFORM_DATA_MODE === "supabase";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [ready, setReady] = useState(remotePlatform);
  const [error, setError] = useState("");

  useEffect(() => {
    if (remotePlatform) return;
    if (storage.profile()) router.replace("/dashboard");
    else setReady(true);
  }, [router]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please enter your name.");
      return;
    }
    storage.saveProfile({ name: trimmed, createdAt: Date.now() });
    router.push("/dashboard");
  }

  if (!ready) return null;

  if (remotePlatform) {
    return (
      <main>
        <header className="topbar">
          <div className="app-shell flex min-h-16 items-center justify-between gap-4">
            <button className="ghost rounded-lg px-2 py-2 text-left" onClick={() => router.push("/")}>
              <span className="block text-sm font-extrabold tracking-tight">Minnesota QB Practice</span>
              <span className="muted block text-xs">Independent exam preparation</span>
            </button>
            <div className="flex items-center gap-2">
              <button className="btn ghost" onClick={() => router.push("/pricing")}>Pricing</button>
              <button className="btn secondary" onClick={() => router.push("/sign-in")}>Sign in</button>
            </div>
          </div>
        </header>

        <section className="app-shell py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
            <div>
              <p className="eyebrow">Minnesota Qualifying Builder prep</p>
              <h1 className="page-title mt-4 max-w-3xl">
                Practice the exam. Learn to find the rule faster.
              </h1>
              <p className="muted mt-5 max-w-2xl text-lg leading-8">
                Original QB practice questions, bilingual explanations, full exam simulation,
                and a dedicated Code Book Practice mode for real code-navigation skill.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="btn primary px-6" onClick={() => router.push("/demo")}>
                  Try 10 questions free
                </button>
                <button className="btn secondary px-6" onClick={() => router.push("/pricing")}>
                  See full access
                </button>
              </div>
              <div className="muted mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <span>✓ No account for demo</span>
                <span>✓ English + Ukrainian</span>
                <span>✓ Server-graded answers</span>
              </div>
            </div>

            <div className="card-elevated overflow-hidden p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="eyebrow">Product preview</p>
                  <p className="mt-1 font-extrabold">Code Book Practice</p>
                </div>
                <span className="tag">20 questions</span>
              </div>

              <div className="soft-panel mt-5 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="muted text-xs font-bold uppercase tracking-wider">Question 4</p>
                    <p className="mt-2 font-bold leading-6">
                      What is the maximum permitted spacing for foundation anchor bolts?
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <p className="font-bold">Searching in your code book</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <span className="font-mono text-2xl font-extrabold">01:18</span>
                    <span className="btn primary">Found It</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {["4 feet", "5 feet", "6 feet"].map((value, index) => (
                    <div key={value} className={`answer-choice ${index === 2 ? "border-emerald-600 bg-emerald-50" : ""}`}>
                      <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="metric"><p className="text-xl font-extrabold">110</p><p className="muted text-xs">Full Exam</p></div>
                <div className="metric"><p className="text-xl font-extrabold">5h30</p><p className="muted text-xs">Exam timer</p></div>
                <div className="metric"><p className="text-xl font-extrabold">70%</p><p className="muted text-xs">Pass target</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="app-shell pb-6 md:pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            <article className="card mode-card">
              <p className="eyebrow">01 · Simulate</p>
              <h2 className="section-title mt-3">Full Exam Mode</h2>
              <p className="muted mt-3 leading-6">
                Practice a complete 110-question session with the real exam-style time pressure.
              </p>
            </article>
            <article className="card mode-card">
              <p className="eyebrow">02 · Understand</p>
              <h2 className="section-title mt-3">Learning Mode</h2>
              <p className="muted mt-3 leading-6">
                Check answers immediately and study the explanation and code reference while it is fresh.
              </p>
            </article>
            <article className="card mode-card">
              <p className="eyebrow">03 · Navigate</p>
              <h2 className="section-title mt-3">Code Book Practice</h2>
              <p className="muted mt-3 leading-6">
                Measure how fast you can find the rule in your physical book—not just whether you memorized it.
              </p>
            </article>
          </div>
        </section>

        <section className="app-shell py-10 md:py-14">
          <div className="card-elevated grid gap-7 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
            <div>
              <p className="eyebrow">Start free</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">See the real experience before you create an account.</h2>
              <p className="muted mt-3 max-w-2xl">
                Ten source-checked questions, bilingual support, immediate feedback, and two Code Book Practice examples.
              </p>
            </div>
            <button className="btn primary px-6" onClick={() => router.push("/demo")}>Start free demo</button>
          </div>
        </section>

        <footer className="app-shell muted border-t py-7 text-xs leading-5">
          Independent exam-preparation platform. Not affiliated with, endorsed by, or approved by Minnesota DLI or ICC.
          Practice questions are original and are not actual state examination questions.
        </footer>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <section className="card-elevated w-full max-w-xl p-8">
        <p className="tag">Local study application</p>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">Minnesota QB Exam Simulator</h1>
        <p className="muted mt-2">Prepare for the Minnesota Qualifying Builder Exam</p>
        <dl className="my-7 grid grid-cols-3 gap-2 border-y border-slate-200 py-4 text-center">
          <div><dt className="text-xs muted">QUESTIONS</dt><dd className="font-bold">110</dd></div>
          <div><dt className="text-xs muted">TIME</dt><dd className="font-bold">5h 30m</dd></div>
          <div><dt className="text-xs muted">PASS</dt><dd className="font-bold">70%</dd></div>
        </dl>
        <form onSubmit={submit}>
          <label className="mb-2 block font-bold" htmlFor="name">Enter your name</label>
          <input id="name" value={name} onChange={event => setName(event.target.value)} placeholder="Henry" className="input" autoFocus />
          {error && <p role="alert" className="mt-2 text-red-700">{error}</p>}
          <button className="btn primary mt-5 w-full">Start Training</button>
        </form>
        <p className="muted mt-6 text-xs">Includes original sample practice content—not actual or confidential DLI exam questions.</p>
      </section>
    </main>
  );
}
