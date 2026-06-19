import Reveal from "./Reveal";
import { HIGHLIGHTS } from "@/lib/siteData";

export default function Highlights() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 110}
              className="flex h-full flex-col bg-ink p-8 transition-colors hover:bg-ink-soft"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-gold-light">
                {item.label}
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug text-cream">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
