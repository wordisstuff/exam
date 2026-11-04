import { NextResponse } from 'next/server';
import { currentUser } from '@/lib/server-auth';
import { requirePaidAccess } from '@/lib/access-control';
import { questions } from '@/data/questions';
import { learningStore } from '@/lib/learning-store';
import { buildLearningCycleDraft } from '@/lib/learning-cycle';
import { authorizeLearningSubmission } from '@/lib/learning-state';
import { validateSelectedAnswers } from '@/lib/server-grading';
import { projectLearning } from '@/lib/learning-projection';
async function handle(request: Request) {
  if (process.env.LEARNING_V2_ENABLED !== 'true') return NextResponse.json({ error: 'Learning V2 preview is not enabled.' }, { status: 409 });
  const user = await currentUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try { await requirePaidAccess(user.id); } catch { return NextResponse.json({ error: 'Paid access required' }, { status: 402 }); }
  try {
    let row = await learningStore(user.id);
    if (request.method === 'POST') {
      const body = await request.json();
      if (!row) {
        if (body.action !== 'start') return NextResponse.json({ error: 'Start a cycle first' }, { status: 409 });
        const draft = buildLearningCycleDraft(questions);
        row = await learningStore(user.id, { id: draft.id, user_id: user.id, revision: 0, state: { questionIds: draft.questionIds, answers: {} } });
      } else if (body.action === 'answer') {
        const q = questions.find(q => q.id === body.questionId);
        if (!q) throw new Error('Invalid question');
        const selected = validateSelectedAnswers(q, body.selected);
        const action = authorizeLearningSubmission(row.state.questionIds, new Set(Object.keys(row.state.answers)), q.id);
        if (action === 'submit') {
          if (body.revision !== row.revision) return NextResponse.json({ error: 'Progress changed. Reload and retry.' }, { status: 409 });
          const next = { ...row, revision: row.revision + 1, state: { ...row.state, answers: { ...row.state.answers, [q.id]: { selected, seconds: typeof body.seconds === 'number' && Number.isFinite(body.seconds) ? Math.max(0, Math.floor(body.seconds)) : 0, section: String(body.section ?? '').slice(0, 80), indexTerm: String(body.indexTerm ?? '').slice(0, 120), usedBook: body.usedBook === true } } } };
          row = await learningStore(user.id, next, row.revision);
          if (!row) return NextResponse.json({ error: 'Concurrent update. Reload and retry.' }, { status: 409 });
        }
      }
    }
    return NextResponse.json(row ? projectLearning(row) : null, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : 'Learning unavailable' }, { status: 400 }); }
}
export const GET = handle;
export const POST = handle;
