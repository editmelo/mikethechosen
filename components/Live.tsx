import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { LIVE } from "@/lib/siteData";

export default function Live() {
  return (
    <section
      id="live"
      className="relative scroll-mt-20 overflow-hidden border-y border-line bg-ink-soft py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Copy */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow={LIVE.eyebrow}
                title={
                  <>
                    Commanding the stage at{" "}
                    <span className="text-gold-gradient">{LIVE.title}</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-gold-light">
                {LIVE.presenter}
              </p>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-cream/80">
                {LIVE.blurb}
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-9">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">
                On the Bill
              </p>
              <div className="gold-rule mt-4 max-w-sm" />
              <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
                {LIVE.lineup.map((act) => (
                  <li
                    key={act}
                    className="rounded-full border border-line bg-gold/[0.04] px-4 py-2 text-sm font-medium text-cream/85"
                  >
                    {act}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Flyer */}
          <Reveal delay={120} className="order-first lg:order-last">
            <div className="group relative mx-auto max-w-xs sm:max-w-sm">
              <div className="flyer-glow absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-orange-500/20 via-gold/10 to-transparent blur-xl" />
              <div className="overflow-hidden rounded-xl border border-line shadow-2xl">
                <Image
                  src="/images/cashbash.jpg"
                  alt="Cash Bash 2 event flyer"
                  width={759}
                  height={1024}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
