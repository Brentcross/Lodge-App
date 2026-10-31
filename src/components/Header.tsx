import Link from "next/link";
import { property } from "@/config/property";

const links = [
  { href: "/the-home", label: "The Home" },
  { href: "/events", label: "Weddings & Events" },
];

export default function Header() {
  return (
    <header className="border-b border-line bg-surface/90 backdrop-blur sticky top-0 z-20">
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-xl tracking-tight">
          {property.name}
        </Link>
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hidden sm:inline text-muted hover:text-foreground">
              {l.label}
            </Link>
          ))}
          <Link
            href="/reserve"
            className="rounded-full bg-accent text-accent-contrast px-4 py-2 font-medium hover:opacity-90"
          >
            Reserve
          </Link>
        </div>
      </nav>
    </header>
  );
}
