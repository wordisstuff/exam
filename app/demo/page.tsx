"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

interface DemoAnswer {
  id: string;
  text: string;
  textUk?: string;
}

interface DemoQuestion {
  id: string;
  primaryCategory: string;
  subcategory: string;
  difficulty: string;
  type: "single" | "multiple";
  question: string;
  questionUk: string;
  answers: DemoAnswer[];
  requiredSelections?: number;
  codeBookDemo: boolean;
}

interface DemoFeedback {
  questionId: string;
  correct: boolean;
  correctAnswerIds: string[];
  explanation: string;
  explanationUk?: string;
  reference?: {
    source: string;
    section?: string;
    subsection?: string;
    title?: string;
    note?: string;
  };
}

export default function DemoPage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<DemoQuestion[]>([]);
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [feedback, setFeedback] = useState<Record<string, DemoFeedback>>({});
  const [uk, setUk] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [bookStartedAt, setBookStartedAt] = useState<Record<string, number>>({});
  const [bookSeconds, setBookSeconds] = useState<Record<string, number>>({});
  const [now, setNow] = useState(Date.now());
  const [demoStartedAt] = useState(() => new Date().toISOString());

  useEffect(() => {
    fetch("/api/demo/questions", { cache: "no-store" })
      .then(async response => {
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "Unable to load demo.");
        return body;
      })
      .then(body => setQuestions(body.questions ?? []))
      .catch(err => setError(err instanceof Error ? err.message : "Unable to load demo."));
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const question = questions[index] ?? null;
  const done = questions.length > 0 && Object.keys(feedback).length === questions.length;
  const score = useMemo(
    () => Object.values(feedback).filter(item => item.correct).length,
    [feedback],
  );

  function choose(answerId: string) {
    if (!question || feedback[question.id]) return;
    const previous = selected[question.id] ?? [];
    const next =
      question.type === "single"
        ? [answerId]
        : previous.includes(answerId)
          ? previous.filter(id => id !== answerId)
          : previous.length < (question.requiredSelections ?? question.answers.length)
            ? [...previous, answerId]
            : previous;
    setSelected(all => ({ ...all, [question.id]: next }));
  }

  async function check() {
    if (!question) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/demo/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: question.id,
          selectedAnswerIds: selected[question.id] ?? [],
        }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to check answer.");
      setFeedback(all => ({ ...all, [question.id]: body.feedback as DemoFeedback }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to check answer.");
    } finally {
      setBusy(false);
    }
  }

  function startBookSearch() {
    if (!question || feedback[question.id] || bookStartedAt[question.id]) return;
    setBookStartedAt(all => ({ ...all, [question.id]: Date.now() }));
  }

  function foundIt() {
    if (!question) return;
    const startedAt = bookStartedAt[question.id];
    if (!startedAt) return;
    setBookSeconds(all => ({
      ...all,
      [question.id]: Math.max(1, Math.floor((Date.now() - startedAt) / 1000)),
    }));
    setBookStartedAt(all => {
      const next = { ...all };
      delete next[question.id];
      return next;
    });
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(value => value + 1);
      setUk(false);
      setError("");
    }
  }

  function persistDemoClaim() {
    const payload = {
      startedAt: demoStartedAt,
      answers: questions.map(item => ({
        questionId: item.id,
        selectedAnswerIds: selected[item.id] ?? [],
        bookSearchSeconds: bookSeconds[item.id] ?? null,
      })),
    };
    window.sessionStorage.setItem("mnqb:demo-claim", JSON.stringify(payload));
  }

  function continueAfterDemo(nextPath = "/platform/dashboard") {
    persistDemoClaim();
    const params = new URLSearchParams({ from: "demo", next: nextPath });
    router.push(`/sign-in?${params.toString()}`);
  }

  if (error && !questions.length) {
    return (
      <main className="grid min-h-screen place-items-center p-4">
        <section className="card-elevated max-w-lg p-7">
          <p className="eyebrow">Free demo</p>
          <h1 className="mt-2 text-2xl font-extrabold">Demo unavailable</h1>
          <p className="alert-danger mt-4 p-3 text-sm">{error}</p>
          <button className="btn primary mt-5" onClick={() => router.push("/")}>Back to home</button>
        </section>
      </main>
    );
  }

  if (!questions.length || !question) return null;

  if (!started) {
    return (
      <main className="min-h-screen">
        <header className="topbar">
          <div className="app-shell flex min-h-16 items-center justify-between">
            <button className="ghost rounded-lg px-2 py-2 text-left" onClick={() => router.push("/")}>
              <span className="block text-sm font-extrabold">Minnesota QB Practice</span>
              <span className="muted block text-xs">Free preview</span>
            </button>
            <button className="btn ghost" onClick={() => router.push("/")}>Exit</button>
          </div>
        </header>

        <section className="app-shell grid min-h-[calc(100vh-4rem)] items-center py-10">
          <div className="card-elevated mx-auto w-full max-w-3xl overflow-hidden p-0">
            <div className="p-7 md:p-10">
              <p className="eyebrow">10-question free demo</p>
              <h1 className="page-title mt-4 max-w-2xl">See exactly how studying feels before you sign up.</h1>
              <p className="muted mt-4 max-w-2xl text-lg leading-7">
                You’ll get immediate feedback, English + Ukrainian support, and two questions that preview Code Book Practice.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="metric"><p className="text-2xl font-extrabold">10</p><p className="muted text-sm">Source-checked questions</p></div>
                <div className="metric"><p className="text-2xl font-extrabold">2</p><p className="muted text-sm">Code Book Practice previews</p></div>
                <div className="metric"><p className="text-2xl font-extrabold">0</p><p className="muted text-sm">Account required</p></div>
              </div>

              <div className="soft-panel mt-7 p-5">
                <p className="font-bold">How the demo works</p>
                <div className="muted mt-3 grid gap-2 text-sm sm:grid-cols-3">
                  <span>1. Choose your answer</span>
                  <span>2. Check it instantly</span>
                  <span>3. Read why + reference</span>
                </div>
              </div>

              <button className="btn primary mt-7 w-full sm:w-auto sm:px-8" onClick={() => setStarted(true)}>
                Start free demo
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (done) {
    const bookEntries = Object.entries(bookSeconds);
    const averageBook = bookEntries.length
      ? bookEntries.reduce((sum, [, seconds]) => sum + seconds, 0) / bookEntries.length
      : 0;
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="min-h-screen">
        <header className="topbar">
          <div className="app-shell flex min-h-16 items-center justify-between">
            <div>
              <p className="text-sm font-extrabold">Minnesota QB Practice</p>
              <p className="muted text-xs">Demo results</p>
            </div>
            <button className="btn ghost" onClick={() => router.push("/")}>Home</button>
          </div>
        </header>

        <section className="app-shell py-8 md:py-12">
          <div className="card-elevated mx-auto max-w-3xl p-7 md:p-10">
            <div className="text-center">
              <p className="eyebrow">Free demo complete</p>
              <h1 className="mt-3 text-5xl font-extrabold tracking-tight">{percentage}%</h1>
              <p className="mt-2 text-xl font-bold">{score} of {questions.length} correct</p>
              <p className="muted mx-auto mt-3 max-w-xl">
                You’ve completed the same server-graded question flow used inside the full platform.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="metric text-center">
                <p className="muted text-sm">Questions completed</p>
                <p className="mt-2 text-3xl font-extrabold">10/10</p>
              </div>
              <div className="metric text-center">
                <p className="muted text-sm">Average book search</p>
                <p className="mt-2 text-3xl font-extrabold">{bookEntries.length ? `${Math.round(averageBook)} sec` : "—"}</p>
              </div>
            </div>

            <div className="soft-panel mt-7 p-5">
              <h2 className="font-extrabold">Keep this result</h2>
              <p className="muted mt-2 text-sm">
                Verify your email and this demo will be added to your study history automatically.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button className="btn primary" onClick={() => continueAfterDemo("/platform/dashboard")}>Save my progress</button>
                <button className="btn secondary" onClick={() => continueAfterDemo("/pricing")}>See full access</button>
              </div>
            </div>

            <p className="muted mt-6 text-center text-xs">
              Independent exam-preparation platform. Practice questions are original and are not actual Minnesota state exam questions.
            </p>
          </div>
        </section>
      </main>
    );
  }

  const values = selected[question.id] ?? [];
  const checked = feedback[question.id];
  const required = question.type === "single" ? 1 : question.requiredSelections ?? 1;
  const canCheck = values.length === required;
  const checkedCount = Object.keys(feedback).length;
  const progressPercent = ((checkedCount + (checked ? 0 : 0)) / questions.length) * 100;

  return (
    <main className="min-h-screen pb-4">
      <header className="topbar">
        <div className="app-shell flex min-h-16 items-center justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold">Free demo</p>
            <p className="muted text-xs">Question {index + 1} of {questions.length}</p>
          </div>
          <button className="btn ghost" onClick={() => router.push("/")}>Exit</button>
        </div>
      </header>

      <div className="app-shell py-5 md:py-8">
        <div className="mb-5">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${Math.max((index / questions.length) * 100, progressPercent)}%` }} />
          </div>
          <div className="muted mt-2 flex justify-between text-xs">
            <span>{checkedCount} checked</span>
            <span>{questions.length - checkedCount} remaining</span>
          </div>
        </div>

        <section className="card-elevated mx-auto max-w-4xl p-5 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="eyebrow">{question.primaryCategory}</p>
              <p className="muted mt-1 text-sm">{question.subcategory}</p>
            </div>
            {question.codeBookDemo && <span className="tag">Code Book Practice preview</span>}
          </div>

          <h1 className="mt-6 text-xl font-extrabold leading-8 tracking-tight md:text-2xl">{question.question}</h1>
          <button className="btn ghost mt-2 px-0 text-sm" onClick={() => setUk(value => !value)}>
            {uk ? "Hide Ukrainian" : "Show Ukrainian"}
          </button>
          {uk && <p lang="uk" className="soft-panel mt-3 border-l-4 border-l-emerald-700 p-4">{question.questionUk}</p>}

          {question.codeBookDemo && !checked && (
            <div className="soft-panel mt-5 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-extrabold">Try Code Book Practice</p>
                  <p className="muted mt-1 text-sm">Time a real search in your physical code book.</p>
                </div>
                {bookSeconds[question.id] !== undefined && <span className="tag">{bookSeconds[question.id]} sec</span>}
              </div>

              {!bookStartedAt[question.id] && bookSeconds[question.id] === undefined && (
                <button className="btn secondary mt-4" type="button" onClick={startBookSearch}>Use Code Book</button>
              )}

              {bookStartedAt[question.id] && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-2xl font-extrabold">
                    {Math.floor((now - bookStartedAt[question.id]) / 1000)} sec
                  </span>
                  <button className="btn primary" type="button" onClick={foundIt}>Found It</button>
                </div>
              )}
            </div>
          )}

          {question.type === "multiple" && (
            <p className="mt-5 font-bold">Select {question.requiredSelections} answers.</p>
          )}

          <fieldset className="mt-5 space-y-3">
            <legend className="sr-only">Answer choices</legend>
            {question.answers.map(answer => {
              const on = values.includes(answer.id);
              const correct = checked?.correctAnswerIds.includes(answer.id);
              return (
                <button
                  key={answer.id}
                  type="button"
                  disabled={Boolean(checked)}
                  aria-pressed={on}
                  onClick={() => choose(answer.id)}
                  className="answer-choice disabled:cursor-default"
                  data-selected={on}
                  data-correct={Boolean(checked && correct)}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-extrabold">
                    {answer.id.toUpperCase()}
                  </span>
                  <span>
                    <span>{answer.text}</span>
                    {uk && answer.textUk && <span lang="uk" className="muted mt-1 block text-sm">{answer.textUk}</span>}
                  </span>
                </button>
              );
            })}
          </fieldset>

          {checked && (
            <div className={`${checked.correct ? "alert-success" : "alert-danger"} mt-5 p-5`}>
              <p className="font-extrabold">{checked.correct ? "✓ Correct" : "✕ Not quite"}</p>
              <p className="mt-3 leading-6"><strong>Why:</strong> {checked.explanation}</p>
              {uk && checked.explanationUk && <p lang="uk" className="mt-2"><strong>Пояснення:</strong> {checked.explanationUk}</p>}
              {checked.reference && (
                <p className="mt-3 text-sm">
                  <strong>Reference:</strong> {checked.reference.source}
                  {checked.reference.section ? ` · ${checked.reference.section}` : ""}
                </p>
              )}
            </div>
          )}

          {error && <p role="alert" className="alert-danger mt-4 p-3 text-sm">{error}</p>}

          <div className="mobile-actionbar flex gap-3">
            {!checked ? (
              <button disabled={busy || !canCheck} className="btn primary w-full disabled:opacity-50" onClick={() => void check()}>
                {busy ? "Checking…" : "Check Answer"}
              </button>
            ) : (
              <button className="btn primary w-full" onClick={next}>
                {index === questions.length - 1 ? "See my results" : "Next Question"}
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
