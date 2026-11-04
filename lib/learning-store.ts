import { serverSupabaseConfig } from './platform-env.ts';
export interface LearningRecord { id: string; user_id: string; revision: number; state: { questionIds: string[]; answers: Record<string, { selected: string[]; seconds: number; section: string; indexTerm: string; usedBook: boolean }>; }; }
export async function learningStore(userId: string, row?: LearningRecord, previousRevision?: number): Promise<LearningRecord | null> {
  const { url, serviceRoleKey } = serverSupabaseConfig();
  const target = new URL(`${url}/rest/v1/learning_cycles`);
  target.searchParams.set('user_id', `eq.${userId}`);
  if (previousRevision !== undefined) target.searchParams.set('revision', `eq.${previousRevision}`);
  const response = await fetch(target, { method: row ? previousRevision === undefined ? 'POST' : 'PATCH' : 'GET', headers: { apikey: serviceRoleKey, Authorization: `Bearer ${serviceRoleKey}`, 'Content-Type': 'application/json', Prefer: 'return=representation' }, ...(row ? { body: JSON.stringify(row) } : {}), cache: 'no-store' });
  if (!response.ok) throw new Error('Learning storage unavailable. Verify the learning_cycles migration.');
  return (await response.json())[0] ?? null;
}
