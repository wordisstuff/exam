'use client';
import { learningText, type LearningLanguage } from '@/lib/learning-copy';
import { useEffect, useState } from 'react';
import { activeLearningSeconds, type LearningRuntime } from '@/lib/learning-runtime';
import type { LearnerQuestion } from '@/lib/question-projection';
import { estimatedReadingSeconds, readingAndPacing } from '@/lib/learning-timing';
type Progress = { runtime: LearningRuntime | null; serverNow: number; revision: number; checkpoint: number; complete: boolean; pendingIds: string[]; questions: LearnerQuestion[]; review: (LearnerQuestion & { correct: boolean; selectedAnswerIds: string[]; seconds: number; reportedSection: string; indexTerm: string; usedBook: boolean; correctAnswerIds: string[]; explanation: string; reference?: { source: string; section?: string } })[] };
export default function Learning() {
  const [language, setLanguage] = useState<LearningLanguage>('en');
  const t = (text: string) => learningText(text, language);
  const [data, setData] = useState<Progress | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [section, setSection] = useState('');
  const [indexTerm, setIndexTerm] = useState('');
  const [usedBook, setUsedBook] = useState(false);
  const [clockOffset, setClockOffset] = useState(0);
  const [reviewing, setReviewing] = useState(false);
  async function load(body?: object) {
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/learning', body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : { cache: 'no-store' });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setData(result);
      if (result) {
        setClockOffset(result.serverNow - Date.now());
        const draft = result.runtime?.draft;
        setSelected(draft?.selected ?? []); setSection(draft?.section ?? ''); setIndexTerm(draft?.indexTerm ?? ''); setUsedBook(draft?.usedBook ?? false);
        setSeconds(result.runtime ? Math.floor(activeLearningSeconds(result.runtime, result.serverNow)) : 0);
      }
      return result as Progress;
    } catch (e) { setError(e instanceof Error ? e.message : 'Unable to save progress'); } finally { setBusy(false); }
  }
  useEffect(() => { void load(); }, []);
  const question = data?.questions.find(q => q.id === data.pendingIds[0]);

  useEffect(() => {
    if (!data?.runtime || reviewing) return;
    const runtime = data.runtime;
    const timer = setInterval(() => setSeconds(Math.floor(activeLearningSeconds(runtime, Date.now() + clockOffset))), 500);
    return () => clearInterval(timer);
  }, [data, reviewing, clockOffset]);
  const pace = readingAndPacing(seconds, question ? estimatedReadingSeconds(question.question, question.answers.map(a => a.text)) : 5);
  return <main className="mx-auto min-h-screen max-w-3xl space-y-6 bg-[#efede7] p-5 text-[#303735] sm:p-10">
    <label className="block">Language / Мова / Idioma <select className="min-h-12 rounded border bg-white p-2" value={language} onChange={e => setLanguage(e.target.value as LearningLanguage)}><option value="en">English</option><option value="uk">Українська</option><option value="es">Español</option></select></label><a href="/platform/dashboard">← Dashboard</a><h1 className="text-3xl font-semibold">{t("Learning Mode 2.0")}</h1>
    {error && <p role="alert">{error}</p>}
    {!data && <><p>{t("110 questions · 10 checkpoints. Review opens after each 11 submissions. Three minutes is a pacing guide; you can take longer. Section and Index entries are optional.")}</p><button disabled={busy} onClick={() => void load({ action: 'start' })} className="min-h-14 w-full rounded-xl bg-[#526d60] p-4 text-white">{t("Start")}</button></>}
    {data && <p>Checkpoint {data.checkpoint + 1} / 10 · {data.review.length} reviewed questions</p>}
    {data && (reviewing || data.complete) ? <><h2 className="text-2xl">{t("Checkpoint review")}</h2>{data.review.map(q => <details key={q.id} className="rounded-xl bg-white p-5"><summary>{t(q.correct ? 'Correct' : 'Incorrect / unanswered')} · {q.question}</summary><p>{q.answers.filter(a => q.correctAnswerIds.includes(a.id)).map(a => a.text).join(', ')}</p><p>Your answer: {q.answers.filter(a => q.selectedAnswerIds.includes(a.id)).map(a => a.text).join(", ") || "Unanswered"}</p><p>{q.seconds}s · {q.reportedSection ? "Section entered: " + q.reportedSection : "No section entered"} · {q.indexTerm}</p><p>{q.explanation}</p><p>{q.reference?.source} {q.reference?.section}</p></details>)}{!data.complete && <button className="min-h-12 p-4" onClick={async () => { const result = await load({ action: 'resume', revision: data.revision }); if (result) setReviewing(false); }}>{t("Continue Learning")}</button>}</> : question && <>
      <div role="timer" aria-label="Question pacing" className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#789081] text-2xl tabular-nums">{pace.overtimeSeconds ? '+' + pace.overtimeSeconds : pace.remainingSeconds}s</div><p>{t(pace.phase === 'reading' ? 'Reading' : 'Search pacing')} · {t('no time limit')}</p>
      <div className="flex flex-wrap gap-3"><button disabled={busy} className="min-h-12 rounded border p-3" onClick={() => void load({ action: 'draft', revision: data?.revision, selected, section, indexTerm, usedBook })}>{t("Save draft")}</button><button disabled={busy} className="min-h-12 rounded border p-3" onClick={() => void load({ action: data?.runtime?.paused ? 'resume' : 'pause', revision: data?.revision, selected, section, indexTerm, usedBook })}>{t(data?.runtime?.paused ? 'Resume' : 'Pause')}</button><button className="min-h-12 rounded border p-3" onClick={async () => { const result = await load({ action: 'pause', revision: data?.revision, selected, section, indexTerm, usedBook }); if (result) setReviewing(true); }}>{t("History")}</button></div>
      {data?.runtime?.paused && <p role="status">{t("Paused · timer stopped")}</p>}
      <h2 className="text-xl leading-relaxed">{question.question}</h2>{language === 'uk' && <p>{question.questionUk}</p>}<fieldset className="space-y-3"><legend className="mb-3">Choose {question.requiredSelections ?? 1} answer(s)</legend>{question.answers.map(a => <label key={a.id} className="flex min-h-14 items-center gap-3 rounded-xl border border-[#bac3ba] bg-white p-4"><input type={question.type === 'single' ? 'radio' : 'checkbox'} name="answer" checked={selected.includes(a.id)} onChange={() => setSelected(question.type === 'single' ? [a.id] : selected.includes(a.id) ? selected.filter(id => id !== a.id) : [...selected, a.id])} />{a.text}</label>)}</fieldset>
      <label className="block">{t("Section (optional)")}<input className="block min-h-12 w-full rounded border bg-white p-3" value={section} onChange={e => setSection(e.target.value)} /></label><label className="block">{t("Index term (optional)")}<input className="block min-h-12 w-full rounded border bg-white p-3" value={indexTerm} onChange={e => setIndexTerm(e.target.value)} /></label><label className="flex min-h-12 gap-3"><input type="checkbox" checked={usedBook} onChange={e => setUsedBook(e.target.checked)} />{t("I used my Code Book (self-reported)")}</label>
      <button disabled={busy || data?.runtime?.paused} className="min-h-14 w-full rounded-xl bg-[#526d60] p-4 text-white" onClick={async () => { if (!data) return; const result = await load({ action: 'answer', revision: data.revision, questionId: question.id, selected, seconds, section, indexTerm, usedBook }); if (result && result.review.length > data.review.length) setReviewing(true); }}>{t("Save answer")}</button>
    </>}
  </main>;
}
