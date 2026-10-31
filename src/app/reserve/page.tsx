import type { Metadata } from "next";
import { Suspense } from "react";
import { property } from "@/config/property";
import ReserveForm from "./ReserveForm";

export const metadata: Metadata = { title: "Reserve" };

export default function Reserve() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-serif text-4xl">Request a reservation</h1>
      <p className="mt-3 text-muted">
        Send us your dates and we&apos;ll confirm availability. No payment is taken yet.
        {property.pricing.nightlyFrom > 0 && <> Stays from ${property.pricing.nightlyFrom}/night.</>}
        {" "}Minimum stay {property.pricing.minimumNights} nights.
      </p>
      <Suspense>
        <ReserveForm minimumNights={property.pricing.minimumNights} />
      </Suspense>
    </div>
  );
}
