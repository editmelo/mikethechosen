import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import YouTubeLite from "./YouTubeLite";
import { FEATURED, LINKS } from "@/lib/siteData";

export default function FeaturedRelease() {
  return (
    <section id="music" className="relative scroll-mt-20 bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Video */}
          <Reveal className="order-1">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-2xl bg-gold/10 blur-2xl" />
              <YouTubeLite
                id={FEATURED.youtubeId}
                poster={FEATURED.poster}
                title={`${FEATURED.title} — ${FEATURED.artists}`}
              />
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal className="order-2" delay={120}>
            <SectionHeading
              eyebrow={FEATURED.eyebrow}
              title={
                <span className="text-gold-gradient">
                  &ldquo;{FEATURED.title}&rdquo;
                </span>
              }
            />
            <p className="mt-4 text-lg text-cream/80">{FEATURED.artists}</p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-gold-light">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              {FEATURED.status}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={FEATURED.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink transition-transform hover:-translate-y-0.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch on YouTube
              </a>
              <a
                href={LINKS.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:border-gold hover:text-gold-light"
              >
                Stream Everywhere
              </a>
            </div>

            <div className="mt-12">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                No. 1 Hits Written &amp; Produced
              </p>
              <div className="gold-rule mt-4 max-w-xs" />
              <ul className="mt-5 flex flex-col gap-3">
                {FEATURED.hits.map((hit) => (
                  <li
                    key={hit}
                    className="flex items-baseline gap-3 font-serif text-xl text-cream/90"
                  >
                    <span className="text-sm text-gold">&#9733;</span>
                    {hit}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
