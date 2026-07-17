import Reveal from "./Reveal";
import { HIGHLIGHTS } from "@/lib/siteData";

export default function Highlights() {
  return (
    <section className="bg-gradient-to-br from-gold via-gold-light to-gold py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid divide-y divide-ink/15 overflow-hidden rounded-2xl border border-ink/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {HIGHLIGHTS.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 110}
              className="flex h-full flex-col p-8 transition-colors hover:bg-ink/5"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-ink/65">
                {item.label}
              </p>
              <p className="mt-4 font-serif text-2xl leading-snug text-ink">
                {item.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {item.note}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
