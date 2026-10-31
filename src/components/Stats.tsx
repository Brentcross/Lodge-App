import { property } from "@/config/property";

export default function Stats() {
  const s = property.stats;
  const items = [
    { label: "Bedrooms", value: s.bedrooms },
    { label: "Bathrooms", value: s.bathrooms },
    { label: "Sleeps", value: s.sleeps },
    { label: "Event guests", value: s.eventCapacity },
  ];
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {items.map((i) => (
        <div key={i.label} className="rounded-lg bg-surface border border-line p-4 text-center">
          <dt className="text-xs uppercase tracking-wide text-muted">{i.label}</dt>
          <dd className="font-serif text-2xl mt-1">{i.value || "—"}</dd>
        </div>
      ))}
    </dl>
  );
}
