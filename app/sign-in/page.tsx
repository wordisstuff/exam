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
      let safeNext = requestedNext?.startsWith("/") && !requestedNext.startsWith("//")
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
            if (safeNext === "/platform/dashboard") safeNext = "/platform/dashboard?demo=saved";
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
    <main className="min-h-screen">
      <header className="topbar">
        <div className="app-shell flex min-h-16 items-center justify-between">
          <button className="ghost rounded-lg px-2 py-2 text-left" onClick={() => router.push("/")}>
            <span className="block text-sm font-extrabold">Minnesota QB Practice</span>
            <span className="muted block text-xs">Independent exam preparation</span>
          </button>
          {!fromDemo && <button className="btn ghost" onClick={() => router.push("/demo")}>Try free demo</button>}
        </div>
      </header>

      <div className="app-shell grid min-h-[calc(100vh-4rem)] items-center gap-8 py-8 lg:grid-cols-[.9fr_1.1fr] lg:py-12">
        <section className="hidden lg:block">
          <p className="eyebrow">{fromDemo ? "Step 2 of 2" : "Your study account"}</p>
          <h1 className="page-title mt-4 max-w-xl">
            {fromDemo ? "Save what you just accomplished." : "Pick up where you left off, on any device."}
          </h1>
          <p className="muted mt-5 max-w-lg text-lg leading-8">
            {fromDemo
              ? "Verify your email and your completed 10-question demo will be attached to your study history."
              : "No password to remember. We send a one-time verification code to your email."}
          </p>

          <div className="mt-8 grid max-w-lg gap-3">
            {[
              ["01", "Verify your email", "A short one-time code keeps sign-in simple."],
              ["02", "Keep your progress", "History, scores, and active sessions stay with your account."],
              ["03", "Continue training", "Resume Exam, Learning, or Code Book Practice."],
            ].map(([number, title, description]) => (
              <div key={number} className="soft-panel flex gap-4 p-4">
                <span className="tag self-start">{number}</span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="muted mt-1 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card-elevated mx-auto w-full max-w-md p-6 md:p-8">
          <div className="lg:hidden">
            <p className="eyebrow">{fromDemo ? "Save your progress" : "Study account"}</p>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs font-bold">
            <span className={`h-2 flex-1 rounded-full ${step === "email" ? "bg-emerald-700" : "bg-emerald-200"}`} />
            <span className={`h-2 flex-1 rounded-full ${step === "code" ? "bg-emerald-700" : "bg-slate-200"}`} />
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight">
            {step === "email"
              ? fromDemo ? "Keep your demo progress" : "Sign in with email"
              : "Enter your verification code"}
          </h2>

          <p className="muted mt-2 leading-6">
            {step === "email"
              ? fromDemo
                ? "Your demo is complete. Verify your email to save it to your account."
                : "We’ll email you a one-time code. No password required."
              : <>We sent a code to <strong className="text-slate-900">{email}</strong>.</>}
          </p>

          {step === "email" ? (
            <form className="mt-7" onSubmit={requestCode}>
              <label className="mb-2 block text-sm font-bold" htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={event => setEmail(event.target.value)}
                className="input"
                placeholder="you@example.com"
                autoFocus
              />
              <button disabled={busy} className="btn primary mt-5 w-full disabled:opacity-50">
                {busy ? "Sending…" : "Send verification code"}
              </button>
            </form>
          ) : (
            <form className="mt-7" onSubmit={verifyCode}>
              <label className="mb-2 block text-sm font-bold" htmlFor="code">Verification code</label>
              <input
                id="code"
                inputMode="numeric"
                autoComplete="one-time-code"
                required
                value={token}
                onChange={event => setToken(event.target.value.replace(/D/g, ""))}
                className="input text-center text-xl tracking-[.35em]"
                placeholder="123456"
                autoFocus
              />
              <button disabled={busy} className="btn primary mt-5 w-full disabled:opacity-50">
                {busy ? "Verifying…" : fromDemo ? "Verify & save progress" : "Verify & continue"}
              </button>
              <button
                type="button"
                className="btn ghost mt-2 w-full"
                onClick={() => {
                  setStep("email");
                  setToken("");
                  setError("");
                }}
              >
                Change email
              </button>
            </form>
          )}

          {error && <p role="alert" className="alert-danger mt-4 p-3 text-sm">{error}</p>}

          <p className="muted mt-6 text-center text-xs">
            Your email is used to sign you in and keep study progress across devices.
          </p>
        </section>
      </div>
    </main>
  );
}
