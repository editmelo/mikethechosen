import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { STORY } from "@/lib/siteData";

export default function Story() {
  return (
    <section
      id="story"
      className="relative scroll-mt-20 border-y border-line bg-ink-soft py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          {/* Portrait */}
          <Reveal className="relative">
            <div className="relative mx-auto max-w-sm lg:sticky lg:top-28">
              <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-b from-gold/15 to-transparent blur-xl" />
              <div className="overflow-hidden rounded-xl border border-line shadow-2xl">
                <Image
                  src="/images/portrait-car.jpg"
                  alt="Mike the Chosen"
                  width={485}
                  height={1024}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="The Origin Story"
                title={
                  <>
                    Decades in the making,{" "}
                    <span className="text-gold-gradient">soul at the core.</span>
                  </>
                }
              />
            </Reveal>

            <div className="mt-7 space-y-5 text-[1.02rem] leading-relaxed text-cream/80">
              {STORY.origin.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <div className="rounded-xl border border-line bg-gold/[0.04] p-7 sm:p-8">
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-gold-light">
                  A New Era — The Solo Journey
                </p>
                <div className="mt-5 space-y-4 text-[1.02rem] leading-relaxed text-cream/80">
                  {STORY.newEra.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
