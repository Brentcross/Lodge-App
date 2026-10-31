import { NextResponse } from "next/server";
import { property } from "@/config/property";
import { createReservation, overlapsBlocked, validateReservation } from "@/lib/reservations";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ errors: { form: "Invalid request." } }, { status: 400 });
  }

  const today = new Date().toISOString().slice(0, 10);
  const result = validateReservation(body, { today, minimumNights: property.pricing.minimumNights });
  if (!result.ok) return NextResponse.json({ errors: result.errors }, { status: 422 });

  const { checkIn, checkOut } = result.value;
  if (overlapsBlocked(checkIn, checkOut)) {
    return NextResponse.json(
      { errors: { checkIn: "Those dates are no longer available." } },
      { status: 409 },
    );
  }

  const reservation = createReservation(result.value);
  // TODO: email the host and the guest; take a deposit via Stripe.
  return NextResponse.json({ id: reservation.id, status: reservation.status }, { status: 201 });
}
