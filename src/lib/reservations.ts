/**
 * Reservation request validation.
 *
 * The site is currently static (GitHub Pages), so requests are emailed to the
 * host rather than stored. When a backend is added (database + payments),
 * reuse this validation on the server too.
 */

export type StayType = "stay" | "event";

export type ReservationRequest = {
  type: StayType;
  checkIn: string; // YYYY-MM-DD
  checkOut: string; // YYYY-MM-DD
  guests: number;
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateReservation(
  body: unknown,
  opts: { today: string; minimumNights: number },
): { ok: true; value: ReservationRequest } | { ok: false; errors: Record<string, string> } {
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
      type, checkIn, checkOut, guests, name, email,
      phone: str("phone") || undefined,
      message: str("message").slice(0, 2000) || undefined,
    },
  };
}

/** Build a mailto: link that opens the guest's email app with the request filled in. */
export function reservationMailto(to: string, r: ReservationRequest): string {
  const kind = r.type === "stay" ? "Stay" : "Event";
  const subject = `${kind} request: ${r.checkIn} to ${r.checkOut} (${r.name})`;
  const body = [
    `Type: ${r.type === "stay" ? "Overnight stay" : "Wedding / event"}`,
    `Dates: ${r.checkIn} to ${r.checkOut}`,
    `Guests: ${r.guests}`,
    `Name: ${r.name}`,
    `Email: ${r.email}`,
    r.phone ? `Phone: ${r.phone}` : "",
    "",
    r.message ?? "",
  ].filter((l, i, a) => l !== "" || i === a.length - 2).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
