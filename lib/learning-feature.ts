export function learningV2Enabled(env: Record<string, string | undefined> = process.env) {
  return env.VERCEL_ENV !== 'production' && env.LEARNING_V2_ENABLED === 'true';
}

export function hasLearningPreviewPass(
  userId: string,
  env: Record<string, string | undefined> = process.env,
  now = Date.now(),
) {
  if (
    env.VERCEL_ENV !== 'preview' ||
    env.VERCEL_GIT_COMMIT_REF !== 'feature/learning-mode-v2' ||
    !learningV2Enabled(env)
  ) return false;

  const expires = Date.parse(env.LEARNING_PREVIEW_TEST_UNTIL ?? '');
  return Boolean(userId && userId === env.LEARNING_PREVIEW_TEST_USER_ID && now < expires);
}
