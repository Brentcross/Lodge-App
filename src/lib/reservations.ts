/**
 * Reservation requests.
 *
 * This is a deliberately simple in-memory store so the booking flow works end
 * to end today. It resets whenever the server restarts. Swap the functions
 * below for a real database (e.g. Postgres via Supabase/Neon) and add payments
 * (e.g. Stripe Checkout) when ready. Callers shouldn't need to change.
 */

export type StayType = "stay" | "event";

export type ReservationRequest = {
  id: string;
  createdAt: string;
  type: StayType;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  guests: number;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  status: "pending" | "confirmed" | "declined";
};

export type NewReservation = Omit<ReservationRequest, "id" | "createdAt" | "status">;

const store: ReservationRequest[] = [];

export function listReservations(): ReservationRequest[] {
  return [...store];
}

/** Date ranges that are already confirmed and can't be booked. */
export function blockedRanges(): { checkIn: string; checkOut: string }[] {
  return store
    .filter((r) => r.status === "confirmed")
    .map(({ checkIn, checkOut }) => ({ checkIn, checkOut }));
}

export function overlapsBlocked(checkIn: string, checkOut: string): boolean {
  return blockedRanges().some((b) => checkIn < b.checkOut && b.checkIn < checkOut);
}

export function createReservation(input: NewReservation): ReservationRequest {
  const r: ReservationRequest = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "pending",
  };
  store.push(r);
  return r;
}

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateReservation(
  body: unknown,
  opts: { today: string; minimumNights: number },
): { ok: true; value: NewReservation } | { ok: false; errors: Record<string, string> } {
  const b = (body ?? {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const str = (k: string) => (typeof b[k] === "string" ? (b[k] as string).trim() : "");

  const type = str("type") as StayType;
  if (type !== "stay" && type !== "event") errors.type = "Choose a stay or an event.";

  const checkIn = str("checkIn");
  const checkOut = str("checkOut");
  if (!DATE_RE.test(checkIn)) errors.checkIn = "Choose a start date.";
  else if (checkIn < opts.today) errors.checkIn = "Start date can't be in the past.";
  if (!DATE_RE.test(checkOut)) errors.checkOut = "Choose an end date.";
  else if (DATE_RE.test(checkIn) && checkOut <= checkIn) errors.checkOut = "End date must be after the start date.";

  if (!errors.checkIn && !errors.checkOut && type === "stay") {
    const nights = (Date.parse(checkOut) - Date.parse(checkIn)) / 86_400_000;
    if (nights < opts.minimumNights) errors.checkOut = `Minimum stay is ${opts.minimumNights} nights.`;
  }

  const guests = Number(b.guests);
  if (!Number.isInteger(guests) || guests < 1) errors.guests = "Enter the number of guests.";

  const name = str("name");
  if (!name) errors.name = "Enter your name.";
  const email = str("email");
  if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    value: {
      type,
      checkIn,
      checkOut,
      guests,
      name,
      email,
      phone: str("phone") || undefined,
      message: str("message").slice(0, 2000) || undefined,
    },
  };
}
