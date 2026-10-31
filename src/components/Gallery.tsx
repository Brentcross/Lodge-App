import Image from "next/image";
import type { Photo } from "@/config/property";

const PLACEHOLDERS = ["Exterior", "Living room", "Kitchen", "Bedroom", "Grounds", "Event space"];

/** Shows real photos when configured, otherwise labeled placeholders. */
export default function Gallery({ photos, limit }: { photos: Photo[]; limit?: number }) {
  const items = limit ? photos.slice(0, limit) : photos;

  if (items.length === 0) {
    const labels = limit ? PLACEHOLDERS.slice(0, limit) : PLACEHOLDERS;
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {labels.map((label) => (
          <div
            key={label}
            className="aspect-[4/3] rounded-lg border border-dashed border-line bg-gradient-to-br from-[#efe6da] to-[#e2d4c2] flex items-center justify-center text-muted text-sm"
          >
            {label} photo
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((p) => (
        <figure key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
          {p.caption && (
            <figcaption className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs px-2 py-1">
              {p.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
