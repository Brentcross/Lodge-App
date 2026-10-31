import Link from "next/link";
import { property } from "@/config/property";

export default function Footer() {
  const location = property.showFullAddressPublicly
    ? property.privateAddress
    : `${property.city}, ${property.state}`;
  return (
    <footer className="border-t border-line mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted flex flex-col sm:flex-row gap-4 justify-between">
        <div>
          <div className="font-serif text-foreground">{property.name}</div>
          <div>{location}</div>
        </div>
        <div className="flex gap-4">
          <Link href="/the-home">The Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/reserve">Reserve</Link>
          <a href={`mailto:${property.contactEmail}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
