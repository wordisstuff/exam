"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [step, setStep] = useState<"email" | "code">("email");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [fromDemo, setFromDemo] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFromDemo(params.get("from") === "demo");
  }, []);

  async function requestCode(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/auth/request-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to send code.");
      setStep("code");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send code.");
    } finally {
      setBusy(false);
    }
  }

  async function verifyCode(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Unable to verify code.");
      const params = new URLSearchParams(window.location.search);
      const requestedNext = params.get("next");
      const safeNext = requestedNext?.startsWith("/") && !requestedNext.startsWith("//")
        ? requestedNext
        : "/platform/dashboard";

      if (params.get("from") === "demo") {
        const claim = window.sessionStorage.getItem("mnqb:demo-claim");
        if (claim) {
          const claimResponse = await fetch("/api/demo/claim", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: claim,
          });
          if (claimResponse.ok) {
            window.sessionStorage.removeItem("mnqb:demo-claim");
          }
        }
      }

      router.replace(safeNext);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to verify code.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <section className="card w-full max-w-md p-8">
        <p className="tag">QB Practice Platform</p>
        <h1 className="mt-4 text-3xl font-bold">{fromDemo ? "Keep your demo progress" : "Sign in"}</h1>
        <p className="muted mt-2">
          {fromDemo
            ? "Enter your email, verify it, and we’ll attach your completed demo to your account."
            : "Use your email to continue your progress across devices."}
        </p>

        {step === "email" ? (
          <form className="mt-6" onSubmit={requestCode}>
            <label className="mb-2 block font-bold" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
              className="w-full rounded-lg border p-3"
              placeholder="you@example.com"
            />
            <button disabled={busy} className="btn primary mt-5 w-full disabled:opacity-50">
              {busy ? "Sending…" : fromDemo ? "Send verification code" : "Send sign-in code"}
            </button>
          </form>
        ) : (
          <form className="mt-6" onSubmit={verifyCode}>
            <p className="muted text-sm">We sent a verification code to <strong>{email}</strong>.</p>
            <label className="mb-2 mt-4 block font-bold" htmlFor="code">Verification code</label>
            <input
              id="code"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              value={token}
              onChange={event => setToken(event.target.value.replace(/\D/g, ""))}
              className="w-full rounded-lg border p-3 tracking-widest"
              placeholder="123456"
            />
            <button disabled={busy} className="btn primary mt-5 w-full disabled:opacity-50">
              {busy ? "Verifying…" : fromDemo ? "Verify and save progress" : "Verify and continue"}
            </button>
            <button
              type="button"
              className="btn secondary mt-3 w-full"
              onClick={() => {
                setStep("email");
                setToken("");
                setError("");
              }}
            >
              Use a different email
            </button>
          </form>
        )}

        {error && <p role="alert" className="mt-4 text-sm text-red-700">{error}</p>}
      </section>
    </main>
  );
}
