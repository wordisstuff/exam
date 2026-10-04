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
    const started = bookStartedAt[question.id];
    if (!started) return;
    setBookSeconds(all => ({
      ...all,
      [question.id]: Math.max(1, Math.floor((Date.now() - started) / 1000)),
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

  if (error && !questions.length) {
    return (
      <main className="grid min-h-screen place-items-center p-4">
        <section className="card max-w-lg p-6">
          <h1 className="text-2xl font-bold">Demo unavailable</h1>
          <p className="mt-3 text-red-700">{error}</p>
          <button className="btn primary mt-5" onClick={() => router.push("/")}>Back</button>
        </section>
      </main>
    );
  }

  if (!question) return null;

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

  function continueAfterDemo(next = "/platform/dashboard") {
    persistDemoClaim();
    const params = new URLSearchParams({ from: "demo", next });
    router.push(`/sign-in?${params.toString()}`);
  }

  if (done) {
    const bookEntries = Object.entries(bookSeconds);
    const averageBook = bookEntries.length
      ? bookEntries.reduce((sum, [, seconds]) => sum + seconds, 0) / bookEntries.length
      : 0;

    return (
      <main className="mx-auto max-w-4xl p-4 md:p-8">
        <section className="card p-8 text-center">
          <p className="tag">Free demo complete</p>
          <h1 className="mt-4 text-4xl font-bold">{score}/10 correct</h1>
          <p className="muted mt-3">
            You just tried the same server-graded question flow used by the full platform.
          </p>

          {bookEntries.length > 0 && (
            <div className="mx-auto mt-6 max-w-md rounded-lg border p-4 text-left">
              <p className="font-bold">Code Book Practice preview</p>
              <p className="muted mt-1 text-sm">
                {bookEntries.length} timed search{bookEntries.length === 1 ? "" : "es"} · {Math.round(averageBook)} sec average
              </p>
            </div>
          )}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button className="btn primary" onClick={() => continueAfterDemo("/platform/dashboard")}>
              Keep my progress
            </button>
            <button className="btn secondary" onClick={() => continueAfterDemo("/pricing")}>
              Continue to full access
            </button>
          </div>

          <p className="muted mt-6 text-xs">
            Independent exam-preparation platform. Practice questions are original and are not actual Minnesota state exam questions.
          </p>
        </section>
      </main>
    );
  }

  const values = selected[question.id] ?? [];
  const checked = feedback[question.id];
  const required = question.type === "single" ? 1 : question.requiredSelections ?? 1;
  const canCheck = values.length === required;

  return (
    <main className="mx-auto max-w-5xl p-4 md:p-8">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="tag">Free 10-question demo</p>
          <h1 className="mt-2 text-2xl font-bold">Minnesota QB Practice</h1>
          <p className="muted mt-1">No account required.</p>
        </div>
        <button className="text-sm underline" onClick={() => router.push("/")}>Exit demo</button>
      </header>

      <section className="card mt-6 p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-bold">Question {index + 1} of {questions.length}</p>
            <p className="muted text-sm">{question.primaryCategory} · {question.subcategory}</p>
          </div>
          <p className="muted text-sm">{Object.keys(feedback).length}/{questions.length} checked</p>
        </div>

        <progress className="my-5 w-full" value={Object.keys(feedback).length} max={questions.length} />

        <h2 className="mt-4 text-xl font-bold leading-8">{question.question}</h2>
        <button className="mt-3 text-sm font-bold text-teal-800 underline" onClick={() => setUk(value => !value)}>
          {uk ? "Hide Ukrainian" : "Show Ukrainian"}
        </button>
        {uk && <p lang="uk" className="mt-3 border-l-4 border-teal-700 pl-4">{question.questionUk}</p>}

        {question.codeBookDemo && !checked && (
          <div className="mt-5 rounded-lg border bg-slate-50 p-4">
            <p className="font-bold">Try Code Book Practice</p>
            <p className="muted mt-1 text-sm">Use your physical code book and measure how long it takes to find the rule.</p>

            {!bookStartedAt[question.id] && bookSeconds[question.id] === undefined && (
              <button className="btn secondary mt-3" type="button" onClick={startBookSearch}>Use Code Book</button>
            )}

            {bookStartedAt[question.id] && (
              <div className="mt-3 flex items-center gap-3">
                <span className="font-mono font-bold">
                  {Math.floor((now - bookStartedAt[question.id]) / 1000)} sec
                </span>
                <button className="btn primary" type="button" onClick={foundIt}>Found It</button>
              </div>
            )}

            {bookSeconds[question.id] !== undefined && (
              <p className="mt-3 text-sm"><strong>Book search:</strong> {bookSeconds[question.id]} sec</p>
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
                className={`flex min-h-14 w-full items-start gap-3 rounded-lg border p-4 text-left disabled:cursor-default ${on ? "border-teal-700 bg-teal-50" : "bg-white"} ${checked && correct ? "ring-2 ring-green-600" : ""}`}
              >
                <span className="font-bold">{answer.id.toUpperCase()}.</span>
                <span>
                  <span>{answer.text}</span>
                  {uk && answer.textUk && <span lang="uk" className="mt-1 block text-sm text-slate-600">{answer.textUk}</span>}
                </span>
              </button>
            );
          })}
        </fieldset>

        {!checked && (
          <button disabled={busy || !canCheck} className="btn primary mt-5 disabled:opacity-50" onClick={() => void check()}>
            {busy ? "Checking…" : "Check Answer"}
          </button>
        )}

        {checked && (
          <div className="mt-5 rounded-lg border bg-slate-50 p-4">
            <p className={`font-bold ${checked.correct ? "text-green-700" : "text-red-700"}`}>
              {checked.correct ? "✓ Correct" : "✕ Incorrect"}
            </p>
            <p className="mt-3"><strong>Why:</strong> {checked.explanation}</p>
            {uk && checked.explanationUk && (
              <p lang="uk" className="mt-2"><strong>Пояснення:</strong> {checked.explanationUk}</p>
            )}
            {checked.reference && (
              <p className="muted mt-3 text-sm">
                <strong>Reference:</strong> {checked.reference.source}
                {checked.reference.section ? ` · ${checked.reference.section}` : ""}
              </p>
            )}

            <button className="btn primary mt-5" onClick={next}>
              {index === questions.length - 1 ? "See demo results" : "Next Question"}
            </button>
          </div>
        )}

        {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}
      </section>
    </main>
  );
}
