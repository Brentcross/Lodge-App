"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

type Errors = Record<string, string>;

const field = "w-full rounded-md border border-line bg-surface px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent";

export default function ReserveForm({ minimumNights }: { minimumNights: number }) {
  const params = useSearchParams();
  const [type, setType] = useState<"stay" | "event">(params.get("type") === "event" ? "event" : "stay");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      if (res.ok) setDone(true);
      else setErrors((await res.json()).errors ?? { form: "Something went wrong." });
    } catch {
      setErrors({ form: "Couldn't reach the server. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="mt-8 rounded-lg border border-line bg-surface p-8 text-center">
        <h2 className="font-serif text-2xl">Request received</h2>
        <p className="text-muted mt-2">Thanks! We&apos;ll be in touch soon to confirm your dates.</p>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p className="text-red-700 text-sm mt-1">{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
      <fieldset className="flex gap-2">
        <legend className="sr-only">Reservation type</legend>
        {(["stay", "event"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            aria-pressed={type === t}
            className={`rounded-full px-4 py-2 border ${type === t ? "bg-accent text-accent-contrast border-accent" : "border-line"}`}
          >
            {t === "stay" ? "Overnight stay" : "Wedding / event"}
          </button>
        ))}
      </fieldset>

      <div className="grid sm:grid-cols-3 gap-4">
        <label className="block">
          <span className="text-sm">{type === "stay" ? "Check-in" : "Start date"}</span>
          <input type="date" name="checkIn" min={today} required className={field} />
          {err("checkIn")}
        </label>
        <label className="block">
          <span className="text-sm">{type === "stay" ? "Check-out" : "End date"}</span>
          <input type="date" name="checkOut" min={today} required className={field} />
          {err("checkOut")}
        </label>
        <label className="block">
          <span className="text-sm">Guests</span>
          <input type="number" name="guests" min={1} defaultValue={2} required className={field} />
          {err("guests")}
        </label>
      </div>
      {type === "stay" && <p className="text-xs text-muted -mt-3">Minimum {minimumNights} nights.</p>}

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm">Name</span>
          <input name="name" autoComplete="name" required className={field} />
          {err("name")}
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input type="email" name="email" autoComplete="email" required className={field} />
          {err("email")}
        </label>
      </div>
      <label className="block">
        <span className="text-sm">Phone (optional)</span>
        <input type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <label className="block">
        <span className="text-sm">{type === "event" ? "Tell us about your event" : "Anything we should know?"}</span>
        <textarea name="message" rows={4} className={field} />
      </label>

      {err("form")}
      {err("type")}
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-accent text-accent-contrast px-6 py-3 font-medium disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
