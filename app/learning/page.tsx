'use client';
import { learningText, type LearningLanguage } from '@/lib/learning-copy';
import { learningAnalytics } from '@/lib/learning-analytics';
import './learning.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { activeLearningSeconds, type LearningRuntime } from '@/lib/learning-runtime';
import type { LearnerQuestion } from '@/lib/question-projection';
import { estimatedReadingSeconds, readingAndPacing, paceReserveSeconds } from '@/lib/learning-timing';
type ReviewRow = LearnerQuestion & { correct: boolean; selectedAnswerIds: string[]; seconds: number; reportedSection: string; indexTerm: string; usedBook: boolean; correctAnswerIds: string[]; explanation: string; explanationUk?: string; reference?: { source: string; section?: string } };
type Progress = { answers: Record<string, { seconds: number }>; runtime: LearningRuntime | null; serverNow: number; revision: number; checkpoint: number; complete: boolean; pendingIds: string[]; questions: LearnerQuestion[]; review: ReviewRow[] };
export default function Learning() {
  const [theme, setTheme] = useState('system');
  const [intensity, setIntensity] = useState('calm');
  const [language, setLanguage] = useState<LearningLanguage>('en');
  const [preferencesReady, setPreferencesReady] = useState(false);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('exam-learning-preferences') ?? '{}');
      if (['en','uk','es'].includes(saved.language)) setLanguage(saved.language);
      if (['system','light','dark'].includes(saved.theme)) setTheme(saved.theme);
      if (['calm','exam'].includes(saved.intensity)) setIntensity(saved.intensity);
    } catch { /* Preferences are optional in restricted browsers. */ }
    setPreferencesReady(true);
  }, []);
  useEffect(() => {
    if (preferencesReady) try { localStorage.setItem('exam-learning-preferences', JSON.stringify({ language, theme, intensity })); } catch { /* Keep in-memory preferences. */ }
  }, [preferencesReady, language, theme, intensity]);
  const t = (text: string) => learningText(text, language);
  const [data, setData] = useState<Progress | null>(null);
  const [reviewDetail, setReviewDetail] = useState<ReviewRow | null>(null);
  const [reviewBlock, setReviewBlock] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => { if (reviewDetail && !dialog.current?.open) dialog.current?.showModal(); }, [reviewDetail]);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(true);
  const [selected, setSelected] = useState<string[]>([]);
  const [seconds, setSeconds] = useState(0);
  const [section, setSection] = useState('');
  const [indexTerm, setIndexTerm] = useState('');
  const [usedBook, setUsedBook] = useState(false);
  const [clockOffset, setClockOffset] = useState(0);
  const [reviewing, setReviewing] = useState(false);
  const load = useCallback(async (body?: object) => {
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
  }, []);
  useEffect(() => { void load(); }, [load]);
  const question = data?.questions.find(q => q.id === data.pendingIds[0]);

  useEffect(() => {
    if (!data?.runtime || reviewing) return;
    const runtime = data.runtime;
    const timer = setInterval(() => setSeconds(Math.floor(activeLearningSeconds(runtime, Date.now() + clockOffset))), 500);
    return () => clearInterval(timer);
  }, [data, reviewing, clockOffset]);
  const draft = { selected, section, indexTerm, usedBook };
  const dirty = Boolean(question && JSON.stringify(draft) !== JSON.stringify(data?.runtime?.draft));
  useEffect(() => {
    if (!data || busy || reviewing || error || !dirty) return;
    const timer = setTimeout(() => { void load({ action: 'draft', revision: data.revision, selected, section, indexTerm, usedBook }); }, 700);
    return () => clearTimeout(timer);
  }, [data, busy, reviewing, error, dirty, selected, section, indexTerm, usedBook, load]);
  useEffect(() => {
    if (!dirty) return;
    const warn = (event: BeforeUnloadEvent) => { event.preventDefault(); };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);
  const answered = Object.values(data?.answers ?? {});
  const reserve = paceReserveSeconds(answered.length, answered.reduce((total, answer) => total + answer.seconds, 0) + seconds);
  const analytics = useMemo(() => learningAnalytics(data?.review ?? []), [data?.review]);
  const reviewedBlocks = Math.ceil((data?.review.length ?? 0) / 11);
  const selectedBlock = Math.min(reviewBlock ?? reviewedBlocks, reviewedBlocks);
  const blockRows = data?.review.slice((selectedBlock - 1) * 11, selectedBlock * 11) ?? [];
  const pace = readingAndPacing(seconds, question ? estimatedReadingSeconds(question.question, question.answers.map(a => a.text)) : 5);
  return <main lang={language} data-theme={theme} className="learning-shell mx-auto min-h-screen max-w-3xl space-y-6 bg-[#efede7] p-5 text-[#303735] sm:p-10">
    <div className="flex flex-wrap gap-3"><label>{t('Theme')} <select value={theme} onChange={e => setTheme(e.target.value)}><option value="system">{t('System')}</option><option value="light">{t('Light')}</option><option value="dark">{t('Dark')}</option></select></label><label>{t('Timer')} <select value={intensity} onChange={e => setIntensity(e.target.value)}><option value="calm">{t('Calm')}</option><option value="exam">{t('Exam')}</option></select></label></div>
    <label className="block">Language / Мова / Idioma <select className="min-h-12 rounded border bg-white p-2" value={language} onChange={e => setLanguage(e.target.value as LearningLanguage)}><option value="en">English</option><option value="uk">Українська</option><option value="es">Español</option></select></label><a href="/platform/dashboard">← {t('Dashboard')}</a><h1 className="text-3xl font-semibold">{t("Learning Mode 2.0")}</h1>
    <p role="status" aria-live="polite">{t(busy ? 'Saving…' : error ? 'Not saved' : dirty ? 'Unsaved changes' : 'Saved')}</p>
    {error && <div className="learning-notice" role="alert"><p>{t(error)}</p>{error === 'Unauthorized' ? <a href="/sign-in">{t('Sign in')}</a> : <button disabled={busy} onClick={() => void load()}>{t('Reload saved progress')}</button>}</div>}
    {!data && !error && <><p>{t("110 questions · 10 checkpoints. Review opens after each 11 submissions. Three minutes is a pacing guide; you can take longer. Section and Index entries are optional.")}</p><button disabled={busy} onClick={() => void load({ action: 'start' })} className="min-h-14 w-full rounded-xl bg-[#526d60] p-4 text-white">{t("Start")}</button></>}
    {data && <p>{t('Checkpoint')} {data.checkpoint + 1} / 10 · {data.review.length} {t('reviewed questions')} · {t('Pace reserve')}: {reserve > 0 ? '+' : ''}{reserve}s</p>}
    {data && (reviewing || data.complete) ? <><h2 className="text-2xl">{t("Checkpoint review")}</h2><p>{t('Correct')}: {analytics.correct}/{analytics.total} · {t('Unanswered')}: {analytics.unanswered} · {t('Active seconds')}: {Math.floor(analytics.seconds)}</p><p>{t('Book use (self-reported)')}: {analytics.usedBook} · {t('Section entered')}: {analytics.sectionsEntered}</p><h3>{t('Topics to practice')}</h3><ul>{analytics.topics.map(topic => <li key={topic.topic}>{topic.topic}: {topic.correct}/{topic.total} · {Math.round(topic.averageSeconds)}s</li>)}</ul>{reviewedBlocks > 0 && <label className="block">{t('Checkpoint')} <select value={selectedBlock} onChange={e => setReviewBlock(Number(e.target.value))}>{Array.from({length:reviewedBlocks}, (_,i) => <option key={i} value={i+1}>{i+1}</option>)}</select></label>}
      {blockRows.map(q => <button key={q.id} className="learning-review-row" onClick={() => setReviewDetail(q)}><strong>{t(q.correct ? 'Correct' : q.selectedAnswerIds.length ? 'Incorrect' : 'Unanswered')}</strong><span lang="en">{q.question}</span></button>)}{!data.complete && <button disabled={busy} className="min-h-12 p-4" onClick={async () => { const result = await load({ action: 'resume', revision: data.revision }); if (result) setReviewing(false); }}>{t("Continue Learning")}</button>}</> : question && <>
      <div data-pace={intensity === 'calm' ? 'calm' : seconds >= 180 ? 'overtime' : seconds >= 150 ? 'late' : seconds >= 120 ? 'steady' : 'calm'} role="timer" aria-label="Question pacing" className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#789081] text-2xl tabular-nums">{pace.overtimeSeconds ? '+' + pace.overtimeSeconds : pace.remainingSeconds}s</div><p>{t(pace.phase === 'reading' ? 'Reading' : 'Search pacing')} · {t('no time limit')}</p>
      <div className="flex flex-wrap gap-3"><button disabled={busy} className="min-h-12 rounded border p-3" onClick={() => void load({ action: 'draft', revision: data?.revision, selected, section, indexTerm, usedBook })}>{t("Save draft")}</button><button disabled={busy} className="min-h-12 rounded border p-3" onClick={() => void load({ action: data?.runtime?.paused ? 'resume' : 'pause', revision: data?.revision, selected, section, indexTerm, usedBook })}>{t(data?.runtime?.paused ? 'Resume' : 'Pause')}</button><button disabled={busy} className="min-h-12 rounded border p-3" onClick={async () => { const result = await load({ action: 'pause', revision: data?.revision, selected, section, indexTerm, usedBook }); if (result) setReviewing(true); }}>{t("History")}</button></div>
      {data?.runtime?.paused && <p role="status">{t("Paused · timer stopped")}</p>}
      <h2 className="text-xl leading-relaxed" lang="en">{question.question}</h2>{language === 'uk' && <p>{question.questionUk}</p>}<fieldset disabled={busy} className="space-y-3"><legend className="mb-3">{t('Choose')} {question.requiredSelections ?? 1} {t('answer(s)')}</legend>{question.answers.map(a => <label key={a.id} className="flex min-h-14 items-center gap-3 rounded-xl border border-[#bac3ba] bg-white p-4"><input type={question.type === 'single' ? 'radio' : 'checkbox'} name="answer" checked={selected.includes(a.id)} onChange={() => setSelected(question.type === 'single' ? [a.id] : selected.includes(a.id) ? selected.filter(id => id !== a.id) : [...selected, a.id])} /><span><span lang="en">{a.text}</span>{language === 'uk' && a.textUk && <span className="block">{a.textUk}</span>}</span></label>)}</fieldset>
      <label className="block">{t("Section (optional)")}<input disabled={busy} className="block min-h-12 w-full rounded border bg-white p-3" value={section} onChange={e => setSection(e.target.value)} /></label><label className="block">{t("Index term (optional)")}<input className="block min-h-12 w-full rounded border bg-white p-3" value={indexTerm} onChange={e => setIndexTerm(e.target.value)} /></label><label className="flex min-h-12 gap-3"><input disabled={busy} type="checkbox" checked={usedBook} onChange={e => setUsedBook(e.target.checked)} />{t("I used my Code Book (self-reported)")}</label>
      <button disabled={busy || data?.runtime?.paused} className="min-h-14 w-full rounded-xl bg-[#526d60] p-4 text-white" onClick={async () => { if (!data) return; const result = await load({ action: 'answer', revision: data.revision, questionId: question.id, selected, seconds, section, indexTerm, usedBook }); if (result && result.review.length > data.review.length) { setReviewBlock(null); setReviewing(true); } }}>{t("Save answer")}</button>
    </>}
    <dialog ref={dialog} className="learning-review-dialog" onClose={() => setReviewDetail(null)} aria-labelledby="learning-review-title">
      {reviewDetail && <div className="space-y-4">
        <form method="dialog" className="learning-dialog-close"><button autoFocus>{t('Close review')}</button></form>
        <h2 id="learning-review-title" className="text-xl font-semibold" lang="en">{reviewDetail.question}</h2>
        <p>{t('Your answer')}: {reviewDetail.answers.filter(a => reviewDetail.selectedAnswerIds.includes(a.id)).map(a => a.text).join(', ') || t('Unanswered')}</p>
        <p>{t('Correct answer')}: {reviewDetail.answers.filter(a => reviewDetail.correctAnswerIds.includes(a.id)).map(a => a.text).join(', ')}</p>
        <p>{language === 'uk' ? reviewDetail.explanationUk || reviewDetail.explanation : reviewDetail.explanation}</p>
        <p>{reviewDetail.reference?.source} {reviewDetail.reference?.section}</p>
        <p>{reviewDetail.seconds}s · {reviewDetail.reportedSection ? t('Section entered') + ': ' + reviewDetail.reportedSection : t('No section entered')} {reviewDetail.indexTerm}</p>
      </div>}
    </dialog>
  </main>;
}
