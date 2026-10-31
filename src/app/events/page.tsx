import type { Metadata } from "next";
import Link from "next/link";
import { property } from "@/config/property";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = { title: "Weddings & Events" };

export default function Events() {
  const eventPhotos = property.photos.filter((p) => /event|wedding|reception|ceremony/i.test(p.src + p.alt));
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-10">
      <header>
        <h1 className="font-serif text-4xl">Weddings & Events</h1>
        <p className="mt-4 text-muted max-w-3xl">{property.events.intro}</p>
      </header>

      <section>
        <h2 className="font-serif text-2xl mb-4">What&apos;s available</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {property.events.offerings.map((o) => (
            <li key={o} className="rounded-lg bg-surface border border-line p-4">{o}</li>
          ))}
        </ul>
        {property.stats.eventCapacity > 0 && (
          <p className="mt-4 text-muted">Up to {property.stats.eventCapacity} guests.</p>
        )}
      </section>

      <Gallery photos={eventPhotos} limit={3} />

      <div className="text-center">
        <Link href="/reserve?type=event" className="inline-block rounded-full bg-accent text-accent-contrast px-6 py-3">
          Send an event inquiry
        </Link>
      </div>
    </div>
  );
}
