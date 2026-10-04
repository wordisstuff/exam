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
      <main className="mx-auto max-w-6xl p-4 md:p-8">
        <header className="flex items-center justify-between gap-4">
          <strong className="text-lg">Minnesota QB Practice</strong>
          <button className="text-sm underline" onClick={() => router.push("/sign-in")}>Sign in</button>
        </header>

        <section className="py-14 text-center md:py-20">
          <p className="tag">Independent Minnesota QB exam practice</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Practice the exam. Learn to find the rule in the code book.
          </h1>
          <p className="muted mx-auto mt-5 max-w-2xl text-lg">
            Original practice questions, server-graded exams, bilingual explanations, and Code Book Practice
            designed around real code-book navigation skills.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
            <button className="btn primary" onClick={() => router.push("/demo")}>
              Try 10 questions free
            </button>
            <button className="btn secondary" onClick={() => router.push("/sign-in")}>
              Sign in
            </button>
          </div>

          <p className="muted mt-4 text-sm">No account required for the demo.</p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="card p-6">
            <p className="text-2xl font-bold">110</p>
            <h2 className="mt-2 font-bold">Full Exam</h2>
            <p className="muted mt-2 text-sm">Practice a complete Minnesota QB-style 110-question session with server-side grading.</p>
          </article>
          <article className="card p-6">
            <p className="text-2xl font-bold">Code Book Practice</p>
            <h2 className="mt-2 font-bold">Train navigation, not memorization</h2>
            <p className="muted mt-2 text-sm">Time physical-book searches and compare direct-answer accuracy with book-assisted accuracy.</p>
          </article>
          <article className="card p-6">
            <p className="text-2xl font-bold">EN + UK</p>
            <h2 className="mt-2 font-bold">Bilingual learning</h2>
            <p className="muted mt-2 text-sm">Study technical construction language in English with Ukrainian support and explanations.</p>
          </article>
        </section>

        <section className="card mt-8 p-7">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-bold">Start with the free demo</h2>
              <p className="muted mt-2">
                Ten source-checked questions. Two include a preview of Code Book Practice. Correct answers stay server-side until you check.
              </p>
            </div>
            <button className="btn primary" onClick={() => router.push("/demo")}>Start free demo</button>
          </div>
        </section>

        <footer className="muted mt-8 border-t py-6 text-xs">
          Independent exam-preparation platform. Not affiliated with, endorsed by, or approved by Minnesota DLI or ICC.
          Practice questions are original and are not actual state examination questions.
        </footer>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <section className="card w-full max-w-xl p-8">
        <p className="tag">Local study application</p>
        <h1 className="mt-4 text-3xl font-bold">Minnesota QB Exam Simulator</h1>
        <p className="muted mt-2">Prepare for the Minnesota Qualifying Builder Exam</p>
        <dl className="my-7 grid grid-cols-3 gap-2 border-y py-4 text-center">
          <div><dt className="text-xs muted">QUESTIONS</dt><dd className="font-bold">110</dd></div>
          <div><dt className="text-xs muted">TIME</dt><dd className="font-bold">5h 30m</dd></div>
          <div><dt className="text-xs muted">PASS</dt><dd className="font-bold">70%</dd></div>
        </dl>
        <form onSubmit={submit}>
          <label className="mb-2 block font-bold" htmlFor="name">Enter your name</label>
          <input
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Henry"
            className="w-full rounded-lg border p-3"
            autoFocus
          />
          {error && <p role="alert" className="mt-2 text-red-700">{error}</p>}
          <button className="btn primary mt-5 w-full">Start Training</button>
        </form>
        <p className="muted mt-6 text-xs">
          Includes original sample practice content—not actual or confidential DLI exam questions.
        </p>
      </section>
    </main>
  );
}
