import { NextResponse } from "next/server";
import { blockedRanges } from "@/lib/reservations";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ blocked: blockedRanges() });
}
