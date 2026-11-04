import test from 'node:test';
import assert from 'node:assert/strict';
import { learningStore } from '../lib/learning-store.ts';
test('storage scopes reads and compare-and-swap writes to owner; stale write returns null', async () => {
 const oldFetch = globalThis.fetch;
 const oldEnv = { ...process.env };
 process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://example.supabase.co';
 process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'test';
 process.env.SUPABASE_SERVICE_ROLE_KEY = 'server-only-test';
 const calls: { url: URL; init?: RequestInit }[] = [];
 globalThis.fetch = async (url, init) => { calls.push({ url: new URL(String(url)), init }); return new Response('[]', { status: 200 }); };
 try {
  assert.equal(await learningStore('owner'), null);
  assert.equal(calls[0].url.searchParams.get('user_id'), 'eq.owner');
  assert.equal(calls[0].init?.method, 'GET');
  assert.equal(await learningStore('owner', { id: 'cycle', user_id: 'owner', revision: 4, state: { questionIds: [], answers: {} } }, 3), null);
  assert.equal(calls[1].url.searchParams.get('revision'), 'eq.3');
  assert.equal(calls[1].url.searchParams.get('user_id'), 'eq.owner');
  assert.equal(calls[1].init?.method, 'PATCH');
 } finally { globalThis.fetch = oldFetch; process.env = oldEnv; }
});
