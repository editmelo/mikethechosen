import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CREDITS } from "@/lib/siteData";

function CreditColumn({
  title,
  names,
  delay,
}: {
  title: string;
  names: string[];
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="flex-1">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-gold-deep">
        {title}
      </p>
      <div className="gold-rule-deep mt-4" />
      <ul className="mt-6 flex flex-col gap-4">
        {names.map((name) => (
          <li
            key={name}
            className="font-serif text-2xl text-ink/85 transition-colors hover:text-gold-deep sm:text-[1.7rem]"
          >
            {name}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function Credits() {
  return (
    <section id="credits" className="scroll-mt-20 bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="The Resume"
            align="center"
            title={
              <>
                In the room with{" "}
                <span className="text-gold-gradient-deep">the legends.</span>
              </>
            }
          />
          <p className="mx-auto mt-5 max-w-2xl text-center text-[1.02rem] leading-relaxed text-ink-muted">
            A versatile and undeniable force — Big Mike has collaborated with
            elite producers and shared the stage with some of the most
            legendary names in R&amp;B and Soul.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-12 sm:flex-row sm:gap-16 lg:gap-24">
          <CreditColumn
            title={CREDITS.workedWith.title}
            names={CREDITS.workedWith.names}
            delay={0}
          />
          <div className="hidden w-px self-stretch bg-ink/10 sm:block" />
          <CreditColumn
            title={CREDITS.sharedStage.title}
            names={CREDITS.sharedStage.names}
            delay={120}
          />
        </div>
      </div>
    </section>
  );
}
