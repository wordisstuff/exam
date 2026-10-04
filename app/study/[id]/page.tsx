"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface LearnerAnswer {
  id: string;
  text: string;
  textUk?: string;
}

interface LearnerQuestion {
  id: string;
  primaryCategory: string;
  subcategory: string;
  difficulty: string;
  type: "single" | "multiple";
  question: string;
  questionUk: string;
  answers: LearnerAnswer[];
  requiredSelections?: number;
  languageTags: string[];
  skills: string[];
}

interface Feedback {
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

interface SessionPayload {
  id: string;
  bankVersion: number;
  mode: string;
  feedbackMode: "deferred" | "immediate";
  status: string;
  startedAt: string;
  completedAt: string | null;
  timeLimitSeconds: number | null;
  questionIds: string[];
  questions: LearnerQuestion[];
  answers: Record<string, {
    selectedAnswerIds: string[];
    checkedAt: string | null;
    questionTimeSeconds: number;
    flagged: boolean;
    responsePath?: "direct" | "book-assisted" | null;
    bookSearchStartedAt?: string | null;
    bookSearchCompletedAt?: string | null;
    bookSearchSeconds?: number | null;
    reportedSection?: string | null;
    indexTerm?: string | null;
  }>;
  checkedFeedback: Record<string, Feedback>;
}

interface ExamResult {
  sessionId?: string;
  completedAt?: string;
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
  percentage: number;
  passed: boolean;
  correctness: Record<string, boolean>;
}

const fmt = (seconds: number) => {
  const safe = Math.max(0, Math.floor(seconds));
  const h = Math.floor(safe / 3600).toString().padStart(2, "0");
  const m = Math.floor((safe % 3600) / 60).toString().padStart(2, "0");
  const s = Math.floor(safe % 60).toString().padStart(2, "0");
  return `${h}:${m}:${s}`;
};

export default function StudySessionPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<Record<string, string[]>>({});
  const [feedback, setFeedback] = useState<Record<string, Feedback>>({});
  const [uk, setUk] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<ExamResult | null>(null);
  const [bookStartedAt, setBookStartedAt] = useState<Record<string, number>>({});
  const [bookSeconds, setBookSeconds] = useState<Record<string, number>>({});
  const [responsePath, setResponsePath] = useState<Record<string, "direct" | "book-assisted">>({});
  const enteredAt = useRef(Date.now());
  const autoFinished = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(`/api/study-sessions/${id}`, { cache: "no-store" })
      .then(async response => {
        if (response.status === 401) {
          router.replace("/sign-in");
          return null;
        }
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "Unable to load study session.");
        return body;
      })
      .then(body => {
        if (!body?.session) return;
        const loaded = body.session as SessionPayload;
        setSession(loaded);
        setSelected(Object.fromEntries(
          Object.entries(loaded.answers ?? {}).map(([questionId, answer]) => [
            questionId,
            answer.selectedAnswerIds ?? [],
          ]),
        ));
        setFeedback(loaded.checkedFeedback ?? {});
        setResponsePath(Object.fromEntries(
          Object.entries(loaded.answers ?? {})
            .filter(([, answer]) => answer.responsePath === "direct" || answer.responsePath === "book-assisted")
            .map(([questionId, answer]) => [questionId, answer.responsePath as "direct" | "book-assisted"]),
        ));
        setBookSeconds(Object.fromEntries(
          Object.entries(loaded.answers ?? {})
            .filter(([, answer]) => typeof answer.bookSearchSeconds === "number")
            .map(([questionId, answer]) => [questionId, answer.bookSearchSeconds as number]),
        ));
        if (body.result) setResult(body.result as ExamResult);
        enteredAt.current = Date.now();
      })
      .catch(err => setError(err instanceof Error ? err.message : "Unable to load study session."));
  }, [id, router]);

  const question = session?.questions[currentIndex] ?? null;
  const remaining = useMemo(() => {
    if (!session?.timeLimitSeconds) return null;
    const elapsed = Math.floor((now - new Date(session.startedAt).getTime()) / 1000);
    return Math.max(0, session.timeLimitSeconds - elapsed);
  }, [now, session]);

  const questionSeconds = useCallback(() => {
    const current = question ? session?.answers?.[question.id]?.questionTimeSeconds ?? 0 : 0;
    return current + Math.max(0, Math.floor((Date.now() - enteredAt.current) / 1000));
  }, [question, session]);

  async function saveAnswer(questionId: string, values: string[], check = false) {
    const response = await fetch(`/api/study-sessions/${id}/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questionId,
        selectedAnswerIds: values,
        questionTimeSeconds: questionSeconds(),
        check,
        responsePath: session?.mode === "book-practice" ? (responsePath[questionId] ?? "direct") : undefined,
        bookSearchSeconds: session?.mode === "book-practice" ? bookSeconds[questionId] : undefined,
      }),
    });
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Unable to save answer.");
    if (body.feedback) {
      setFeedback(previous => ({ ...previous, [questionId]: body.feedback as Feedback }));
    }
  }

  async function choose(answerId: string) {
    if (!session || !question || result) return;
    if (feedback[question.id]) return;

    const previous = selected[question.id] ?? [];
    const next =
      question.type === "single"
        ? [answerId]
        : previous.includes(answerId)
          ? previous.filter(idValue => idValue !== answerId)
          : previous.length < (question.requiredSelections ?? question.answers.length)
            ? [...previous, answerId]
            : previous;

    setSelected(all => ({ ...all, [question.id]: next }));
    if (!responsePath[question.id]) {
      setResponsePath(all => ({ ...all, [question.id]: "direct" }));
    }
    setError("");

    try {
      await saveAnswer(question.id, next, false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save answer.");
    }
  }

  function startBookSearch() {
    if (!question || feedback[question.id] || bookStartedAt[question.id]) return;
    setResponsePath(all => ({ ...all, [question.id]: "book-assisted" }));
    setBookStartedAt(all => ({ ...all, [question.id]: Date.now() }));
  }

  function finishBookSearch() {
    if (!question) return;
    const started = bookStartedAt[question.id];
    if (!started) return;
    const seconds = Math.max(1, Math.floor((Date.now() - started) / 1000));
    setBookSeconds(all => ({ ...all, [question.id]: seconds }));
    setBookStartedAt(all => {
      const next = { ...all };
      delete next[question.id];
      return next;
    });
  }

  async function checkCurrent() {
    if (!question) return;
    setBusy(true);
    setError("");
    try {
      await saveAnswer(question.id, selected[question.id] ?? [], true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to check answer.");
    } finally {
      setBusy(false);
    }
  }

  function move(index: number) {
    if (!session || index < 0 || index >= session.questions.length) return;
    setCurrentIndex(index);
    setUk(false);
    enteredAt.current = Date.now();
  }

  const finish = useCallback(async () => {
    if (busy || result) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch(`/api/study-sessions/${id}/finish`, { method: "POST" });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to finish exam.");
      setResult(body.result as ExamResult);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to finish exam.");
    } finally {
      setBusy(false);
    }
  }, [busy, id, result]);

  useEffect(() => {
    if (remaining === 0 && session?.status === "active" && !result && !autoFinished.current) {
      autoFinished.current = true;
      void finish();
    }
  }, [remaining, session?.status, result, finish]);

  if (error && !session) {
    return (
      <main className="grid min-h-screen place-items-center p-4">
        <section className="card max-w-lg">
          <h1 className="text-xl font-bold">Study session unavailable</h1>
          <p className="mt-3 text-red-700">{error}</p>
          <button onClick={() => router.push("/platform/dashboard")} className="btn primary mt-5">Dashboard</button>
        </section>
      </main>
    );
  }

  if (!session || !question) return null;

  if (result) {
    return (
      <main className="min-h-screen">
        <header className="topbar">
          <div className="app-shell flex min-h-16 items-center justify-between">
            <div>
              <p className="text-sm font-extrabold">Minnesota QB Practice</p>
              <p className="muted text-xs">Session complete</p>
            </div>
            <button className="btn ghost" onClick={() => router.push("/platform/dashboard")}>Dashboard</button>
          </div>
        </header>

        <section className="app-shell py-8 md:py-12">
          <div className="card-elevated mx-auto max-w-3xl p-7 text-center md:p-10">
            <p className="eyebrow">{session.mode === "book-practice" ? "Code Book Practice" : session.feedbackMode === "immediate" ? "Learning Mode" : "Full Exam"}</p>
            <div className={`mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full text-lg font-extrabold ${result.passed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {result.passed ? "PASS" : "REVIEW"}
            </div>
            <p className="mt-5 text-5xl font-extrabold tracking-tight">{result.percentage.toFixed(1)}%</p>
            <p className="muted mt-3">{result.correct} correct · {result.incorrect} incorrect · {result.unanswered} unanswered</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="metric"><p className="muted text-xs">Correct</p><p className="mt-1 text-2xl font-extrabold">{result.correct}</p></div>
              <div className="metric"><p className="muted text-xs">Incorrect</p><p className="mt-1 text-2xl font-extrabold">{result.incorrect}</p></div>
              <div className="metric"><p className="muted text-xs">Unanswered</p><p className="mt-1 text-2xl font-extrabold">{result.unanswered}</p></div>
            </div>

            <button className="btn primary mt-7 w-full sm:w-auto sm:px-8" onClick={() => router.push("/platform/dashboard")}>
              Back to dashboard
            </button>
          </div>
        </section>
      </main>
    );
  }

  const values = selected[question.id] ?? [];
  const checked = feedback[question.id];
  const answered = Object.values(selected).filter(items => items.length > 0).length;

  return (
    <div className="min-h-screen pb-4">
      <header className="topbar">
        <div className="app-shell flex min-h-16 items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold">Minnesota QB Practice</p>
            <p className="muted truncate text-xs">{session.mode === "book-practice" ? "Code Book Practice" : session.feedbackMode === "immediate" ? "Learning Mode" : "Full Exam"}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {remaining !== null && (
              <span className={`rounded-lg px-3 py-2 font-mono text-sm font-extrabold ${remaining < 600 ? "bg-red-50 text-red-700" : "bg-white"}`}>
                {fmt(remaining)}
              </span>
            )}
            <button disabled={busy} onClick={() => void finish()} className="btn secondary disabled:opacity-50">
              {busy ? "Saving…" : "Finish"}
            </button>
          </div>
        </div>
      </header>

      <main className="app-shell grid gap-5 py-5 md:py-8 lg:grid-cols-[1fr_300px]">
        <section className="card-elevated min-w-0 p-5 md:p-8">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <p className="font-bold">Question {currentIndex + 1} of {session.questions.length}</p>
              <p className="muted text-sm">{question.primaryCategory} · {question.subcategory}</p>
            </div>
            <span className="tag">{session.mode === "book-practice" ? "Book practice" : session.feedbackMode === "immediate" ? "Instant feedback" : "Exam session"}</span>
          </div>

          <div className="progress-track mt-5">
            <div className="progress-fill" style={{ width: `${Math.min(100, (answered / Math.max(session.questions.length, 1)) * 100)}%` }} />
          </div>
          <p className="muted mt-2 text-xs">{answered} answered · {session.questions.length - answered} remaining</p>

          <h1 className="mt-6 text-xl font-extrabold leading-8 tracking-tight md:text-2xl">{question.question}</h1>
          <button className="btn ghost mt-2 px-0 text-sm" onClick={() => setUk(value => !value)}>
            {uk ? "Hide Ukrainian" : "Show Ukrainian"}
          </button>
          {uk && <p lang="uk" className="soft-panel mt-3 border-l-4 border-l-emerald-700 p-4">{question.questionUk}</p>}

          {session.mode === "book-practice" && !checked && (
            <div className="soft-panel mt-5 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-extrabold">Code Book Practice</p>
                  <p className="muted mt-1 text-sm">Time how long it takes to find the rule in your physical book.</p>
                </div>
                {responsePath[question.id] === "book-assisted" && bookSeconds[question.id] !== undefined && <span className="tag">{bookSeconds[question.id]} sec</span>}
              </div>
              {!bookStartedAt[question.id] && responsePath[question.id] !== "book-assisted" && (
                <button type="button" className="btn secondary mt-3" onClick={startBookSearch}>
                  Use Code Book
                </button>
              )}
              {bookStartedAt[question.id] && (
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="font-mono font-bold">
                    {fmt(Math.floor((now - bookStartedAt[question.id]) / 1000))}
                  </span>
                  <button type="button" className="btn primary" onClick={finishBookSearch}>Found It</button>
                </div>
              )}
              {responsePath[question.id] !== "book-assisted" && !bookStartedAt[question.id] && (
                <p className="muted mt-3 text-sm">You can answer directly or start a timed code-book search.</p>
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
                  type="button"
                  key={answer.id}
                  aria-pressed={on}
                  disabled={Boolean(checked)}
                  onClick={() => void choose(answer.id)}
                  className="answer-choice disabled:cursor-default"
                  data-selected={on}
                  data-correct={Boolean(checked && correct)}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-extrabold">{answer.id.toUpperCase()}</span>
                  <span>
                    <span>{answer.text}</span>
                    {uk && answer.textUk && <span lang="uk" className="mt-1 block text-sm text-slate-600">{answer.textUk}</span>}
                  </span>
                </button>
              );
            })}
          </fieldset>

          {session.feedbackMode === "immediate" && !checked && (
            <button
              disabled={busy || values.length === 0 || (question.type === "multiple" && values.length !== question.requiredSelections)}
              onClick={() => void checkCurrent()}
              className="btn primary mt-5 disabled:opacity-50"
            >
              Check Answer
            </button>
          )}

          {checked && (
            <div className={`${checked.correct ? "alert-success" : "alert-danger"} mt-5 p-5`}>
              <p className={`font-bold ${checked.correct ? "text-green-700" : "text-red-700"}`}>
                {checked.correct ? "✓ Correct" : "✕ Incorrect"}
              </p>
              <p className="mt-3"><strong>Why:</strong> {checked.explanation}</p>
              {uk && checked.explanationUk && <p lang="uk" className="mt-2"><strong>Пояснення:</strong> {checked.explanationUk}</p>}
              {checked.reference && (
                <p className="muted mt-3 text-sm">
                  <strong>Reference:</strong> {checked.reference.source}
                  {checked.reference.section ? ` · ${checked.reference.section}` : ""}
                </p>
              )}
            </div>
          )}

          {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}

          <div className="mobile-actionbar flex gap-3">
            <button disabled={currentIndex === 0} onClick={() => move(currentIndex - 1)} className="btn secondary disabled:opacity-40">Previous</button>
            <button
              disabled={currentIndex === session.questions.length - 1}
              onClick={() => move(currentIndex + 1)}
              className="btn primary ml-auto disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </section>

        <aside className="card desktop-only self-start lg:sticky lg:top-24">
          <h2 className="font-bold">Question navigator</h2>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {session.questionIds.map((questionId, index) => {
              const hasAnswer = (selected[questionId] ?? []).length > 0;
              const checkedFeedback = feedback[questionId];
              return (
                <button
                  key={questionId}
                  onClick={() => move(index)}
                  className={`min-h-11 rounded border text-sm ${index === currentIndex ? "ring-2 ring-teal-700" : checkedFeedback ? (checkedFeedback.correct ? "bg-green-100" : "bg-red-100") : hasAnswer ? "bg-teal-50" : "bg-white"}`}
                >
                  {index + 1}{checkedFeedback ? (checkedFeedback.correct ? "✓" : "✕") : hasAnswer ? "•" : ""}
                </button>
              );
            })}
          </div>
        </aside>
      </main>
    </div>
  );
}
