// Run against a built Next.js app and an isolated Supabase Auth/Data API fixture.
// No credentials, network services, or deployed database are used.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

const sessions = new Map();
const users = { owner: { id: 'test-owner' }, unpaid: { id: 'test-unpaid' }, other: { id: 'test-other' } };
const backend = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const send = (status, body) => { res.writeHead(status, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(body)); };
  const token = req.headers.authorization?.replace(/^Bearer /, '');
  if (url.pathname === '/auth/v1/user') return send(users[token] ? 200 : 401, users[token] ?? {});
  if (token !== 'fixture-service-role') return send(403, {});
  const owner = url.searchParams.get('user_id')?.replace(/^eq\./, '');
  if (!owner) return send(400, { message: 'Missing owner filter' });
  if (url.pathname === '/rest/v1/entitlements') {
    return send(200, owner === users.unpaid.id ? [] : [{ status: 'active', product_code: 'fixture', starts_at: '2020-01-01T00:00:00Z', ends_at: '2100-01-01T00:00:00Z' }]);
  }
  if (url.pathname !== '/rest/v1/learning_cycles') return send(404, {});
  const previous = sessions.get(owner);
  if (req.method === 'GET') return send(200, previous ? [previous] : []);
  let raw = '';
  for await (const chunk of req) raw += chunk;
  const row = JSON.parse(raw);
  if (row.user_id !== owner) return send(403, { message: 'Owner mismatch' });
  if (req.method === 'POST' && previous) return send(409, { message: 'Already started' });
  if (req.method === 'PATCH' && url.searchParams.get('revision') !== `eq.${previous?.revision}`) return send(200, []);
  sessions.set(owner, row);
  return send(200, [row]);
});
async function listen(server) {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  return server.address().port;
}
const backendPort = await listen(backend);
const portProbe = createServer();
const port = await listen(portProbe);
await new Promise(resolve => portProbe.close(resolve));
const app = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
  env: { ...process.env, VERCEL_ENV: 'preview', LEARNING_V2_ENABLED: 'true', PLATFORM_ENTITLEMENT_ENFORCEMENT: 'on', NEXT_PUBLIC_SUPABASE_URL: `http://localhost:${backendPort}`, NEXT_PUBLIC_SUPABASE_ANON_KEY: 'fixture-public-key', SUPABASE_SERVICE_ROLE_KEY: 'fixture-service-role' },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let logs = '';
app.stdout.on('data', chunk => { logs += chunk; });
app.stderr.on('data', chunk => { logs += chunk; });
const url = `http://127.0.0.1:${port}/api/learning`;
async function api(token, body, status = 200) {
  const response = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: { ...(token ? { Cookie: `mnqb_access=${token}` } : {}), 'Content-Type': 'application/json' },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.timeout(5000),
  });
  assert.equal(response.status, status, `${body?.action ?? 'GET'} for ${token ?? 'visitor'}`);
  return response.json();
}
function assertNoKeys(state) {
  for (const q of state.questions) for (const field of ['correctAnswers', 'correctAnswerIds', 'reference', 'explanation', 'explanationUk']) assert.equal(field in q, false, field);
}
try {
  let ready = false;
  for (let attempt = 0; attempt < 100 && app.exitCode === null; attempt++) {
    try { await api(null, null, 401); ready = true; break; } catch { await delay(100); }
  }
  assert.ok(ready, `Next.js did not start: ${logs}`);
  await api('unpaid', { action: 'start', userId: users.owner.id }, 402);
  let state = await api('owner', { action: 'start' });
  const cycleId = state.id;
  assert.equal(new Set(state.questions.map(q => q.id)).size, 110);
  assert.equal(await api('other'), null);
  assertNoKeys(state);
  const first = state.questions.find(q => q.id === state.pendingIds[0]);
  await api('owner', { action: 'answer', revision: state.revision, questionId: state.pendingIds[1], selected: [] }, 409);
  const draft = { selected: [first.answers[0].id], section: 'Test section', indexTerm: 'Test index', usedBook: true };
  state = await api('owner', { action: 'draft', revision: state.revision, ...draft });
  assert.deepEqual((await api('owner')).runtime.draft, draft);
  await api('owner', { action: 'draft', revision: state.revision - 1, selected: [] }, 409);
  for (let i = 0; i < 11; i++) {
    const q = state.questions.find(q => q.id === state.pendingIds[0]);
    const submission = { action: 'answer', revision: state.revision, questionId: q.id, selected: q.answers.slice(0, q.requiredSelections ?? 1).map(a => a.id), section: i === 0 ? draft.section : '' };
    state = await api('owner', submission);
    assert.equal(Object.keys(state.answers).length, i + 1);
    assert.equal(state.review.length, i === 10 ? 11 : 0);
    assertNoKeys(state);
    if (i === 0) assert.equal((await api('owner', submission)).revision, state.revision);
  }
  assert.equal(state.runtime.paused, true);
  assert.equal(state.review[0].reportedSection, draft.section);
  assert.ok(state.review.every(q => q.correctAnswerIds.length > 0));
  state = await api('owner', { action: 'resume', revision: state.revision });
  assert.equal(state.checkpoint, 1);
  state = await api('owner', { action: 'pause', revision: state.revision });
  const restored = await api('owner');
  assert.equal(restored.id, cycleId);
  assert.equal(restored.runtime.activeSince, null);
  assert.equal(restored.runtime.elapsedSeconds, state.runtime.elapsedSeconds);
  assert.equal(restored.review.length, 11);
  state = await api('owner', { action: 'resume', revision: restored.revision });
  assert.equal(state.runtime.paused, false);
  const other = await api('other', { action: 'start', cycleId, userId: users.owner.id });
  assert.notEqual(other.id, cycleId);
  assert.equal(other.review.length, 0);
  assert.equal((await api('owner')).review.length, 11);
  console.log('Learning HTTP flow passed: auth, paywall, ownership, drafts, 11-answer reveal, idempotency, pause/resume and history.');
} finally {
  app.kill('SIGTERM');
  backend.closeAllConnections();
  backend.close();
}
