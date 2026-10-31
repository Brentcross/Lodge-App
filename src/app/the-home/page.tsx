import type { Metadata } from "next";
import Link from "next/link";
import { property } from "@/config/property";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";

export const metadata: Metadata = { title: "The Home" };

export default function TheHome() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-12">
      <header>
        <h1 className="font-serif text-4xl">The Home</h1>
        <div className="mt-4 space-y-3 text-muted max-w-3xl">
          {property.description.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </header>

      <Stats />

      <section>
        <h2 className="font-serif text-2xl mb-4">Photos</h2>
        <Gallery photos={property.photos} />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        {property.rooms.map((r) => (
          <div key={r.name} className="rounded-lg bg-surface border border-line p-6">
            <h3 className="font-serif text-xl">{r.name}</h3>
            <p className="text-muted mt-2">{r.body}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="font-serif text-2xl mb-4">Amenities</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {property.amenities.map((a) => (
            <li key={a} className="flex items-center gap-2"><span className="text-accent">✓</span>{a}</li>
          ))}
        </ul>
      </section>

      <div className="text-center">
        <Link href="/reserve" className="inline-block rounded-full bg-accent text-accent-contrast px-6 py-3">
          Request your dates
        </Link>
      </div>
    </div>
  );
}
