export function learningV2Enabled(env: Record<string, string | undefined> = process.env) {
  return env.VERCEL_ENV !== 'production' && env.LEARNING_V2_ENABLED === 'true';
}
