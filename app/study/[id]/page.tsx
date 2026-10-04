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
        responsePath: responsePath[questionId] ?? "direct",
        bookSearchSeconds: bookSeconds[questionId],
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

    if (session.feedbackMode === "deferred") {
      try {
        await saveAnswer(question.id, next, false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to save answer.");
      }
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
      <main className="mx-auto max-w-4xl p-4 md:p-8">
        <section className="card text-center">
          <p className={`text-2xl font-bold ${result.passed ? "text-green-700" : "text-red-700"}`}>
            {result.passed ? "PASS" : "FAIL"}
          </p>
          <p className="mt-3 text-5xl font-bold">{result.percentage.toFixed(1)}%</p>
          <p className="muted mt-2">{result.correct} correct · {result.incorrect} incorrect · {result.unanswered} unanswered</p>
          <button className="btn primary mt-6" onClick={() => router.push("/platform/dashboard")}>Return to dashboard</button>
        </section>
      </main>
    );
  }

  const values = selected[question.id] ?? [];
  const checked = feedback[question.id];
  const answered = Object.values(selected).filter(items => items.length > 0).length;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 p-3">
          <div>
            <strong>QB Practice Platform</strong>
            <span className="muted ml-3 text-sm">{session.feedbackMode === "immediate" ? "Learning Mode" : "Exam Mode"}</span>
          </div>
          <div className="flex items-center gap-3">
            {remaining !== null && <span className="font-mono font-bold">{fmt(remaining)}</span>}
            <button disabled={busy} onClick={() => void finish()} className="btn primary disabled:opacity-50">
              {busy ? "Saving…" : "Finish"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-5 p-4 lg:grid-cols-[1fr_300px]">
        <section className="card min-w-0">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <p className="font-bold">Question {currentIndex + 1} of {session.questions.length}</p>
              <p className="muted text-sm">{question.primaryCategory} · {question.subcategory}</p>
            </div>
            <span className="tag">Server graded</span>
          </div>

          <progress className="my-4 w-full" value={answered} max={session.questions.length} />
          <p className="muted text-sm">{answered} answered</p>

          <h1 className="mt-6 text-xl font-bold leading-8">{question.question}</h1>
          <button className="mt-3 text-sm font-bold text-teal-800 underline" onClick={() => setUk(value => !value)}>
            {uk ? "Hide Ukrainian" : "Show Ukrainian"}
          </button>
          {uk && <p lang="uk" className="mt-3 border-l-4 border-teal-700 pl-4">{question.questionUk}</p>}

          {session.feedbackMode === "immediate" && !checked && (
            <div className="mt-5 rounded-lg border bg-slate-50 p-4">
              <p className="font-bold">Code Book Practice</p>
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
              {responsePath[question.id] === "book-assisted" && bookSeconds[question.id] !== undefined && (
                <p className="muted mt-3 text-sm">Book search: {bookSeconds[question.id]} sec</p>
              )}
              {responsePath[question.id] !== "book-assisted" && (
                <p className="muted mt-2 text-sm">Answer normally, or start a timed search in your physical code book.</p>
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
            <div className="mt-5 rounded-lg border bg-slate-50 p-4">
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

          <div className="mt-7 flex gap-3">
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

        <aside className="card self-start">
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
