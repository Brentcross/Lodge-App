import Link from "next/link";
import { property } from "@/config/property";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import { asset } from "@/lib/asset";

export default function Home() {
  const hero = property.photos[0];
  return (
    <>
      <section
        className="relative bg-[#3b2a1d] text-white"
        style={hero ? { backgroundImage: `url(${asset(hero.src)})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
      >
        <div className="bg-black/40">
          <div className="mx-auto max-w-6xl px-4 py-28 sm:py-40">
            <p className="uppercase tracking-[0.2em] text-xs text-white/80">
              {property.city}, {property.state}
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl mt-3 max-w-2xl">{property.name}</h1>
            <p className="mt-4 text-lg text-white/90 max-w-xl">{property.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/reserve" className="rounded-full bg-white text-[#3b2a1d] px-6 py-3 font-medium">
                Check availability
              </Link>
              <Link href="/the-home" className="rounded-full border border-white/70 px-6 py-3">
                Tour the home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Stats />
      </section>

      <section className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
        {property.highlights.map((h) => (
          <div key={h.title}>
            <h2 className="font-serif text-xl">{h.title}</h2>
            <p className="text-muted mt-2">{h.body}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between mb-4">
          <h2 className="font-serif text-2xl">A look inside</h2>
          <Link href="/the-home" className="text-accent text-sm">See all photos →</Link>
        </div>
        <Gallery photos={property.photos} limit={6} />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-surface border border-line p-8 sm:p-12 text-center">
          <h2 className="font-serif text-3xl">Planning a wedding or big gathering?</h2>
          <p className="text-muted mt-3 max-w-xl mx-auto">{property.events.intro}</p>
          <Link href="/events" className="inline-block mt-6 rounded-full bg-accent text-accent-contrast px-6 py-3">
            Weddings & events
          </Link>
        </div>
      </section>
    </>
  );
}
