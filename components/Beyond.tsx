import Reveal from "./Reveal";
import { BEYOND } from "@/lib/siteData";

export default function Beyond() {
  return (
    <section className="border-t border-line bg-ink-soft py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-gold-light">
            {BEYOND.title}
          </p>
          <p className="font-serif text-2xl leading-[1.5] text-cream/90 sm:text-[1.9rem] sm:leading-[1.5]">
            {BEYOND.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
