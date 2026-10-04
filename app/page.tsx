"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { storage } from "@/lib/storage";

const remoteAuth = process.env.NEXT_PUBLIC_PLATFORM_DATA_MODE === "supabase";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [ready, setReady] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (remoteAuth) {
      router.replace("/sign-in");
      return;
    }
    if (storage.profile()) router.replace("/dashboard");
    else setReady(true);
  }, [router]);

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please enter your name.");
      return;
    }
    storage.saveProfile({ name: trimmed, createdAt: Date.now() });
    router.push("/dashboard");
  }

  if (!ready) return null;

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <section className="card w-full max-w-xl p-8">
        <p className="tag">Local study application</p>
        <h1 className="mt-4 text-3xl font-bold">Minnesota QB Exam Simulator</h1>
        <p className="muted mt-2">Prepare for the Minnesota Qualifying Builder Exam</p>
        <dl className="my-7 grid grid-cols-3 gap-2 border-y py-4 text-center">
          <div><dt className="text-xs muted">QUESTIONS</dt><dd className="font-bold">110</dd></div>
          <div><dt className="text-xs muted">TIME</dt><dd className="font-bold">5h 30m</dd></div>
          <div><dt className="text-xs muted">PASS</dt><dd className="font-bold">70%</dd></div>
        </dl>
        <form onSubmit={submit}>
          <label className="mb-2 block font-bold" htmlFor="name">Enter your name</label>
          <input
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Henry"
            className="w-full rounded-lg border p-3"
            autoFocus
          />
          {error && <p role="alert" className="mt-2 text-red-700">{error}</p>}
          <button className="btn primary mt-5 w-full">Start Training</button>
        </form>
        <p className="muted mt-6 text-xs">
          Includes original sample practice content—not actual or confidential DLI exam questions.
        </p>
      </section>
    </main>
  );
}
