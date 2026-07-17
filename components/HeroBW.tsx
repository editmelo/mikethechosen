import Image from "next/image";
import { HERO, FEATURED, LINKS } from "@/lib/siteData";

/**
 * Black & white hero (shown when the B&W theme is active). The studio photo is high-key (bright), so this
 * inverts the main hero: white scrim + black type instead of dark scrim + gold.
 */
export default function HeroBW() {
  return (
    <section className="hero-bw relative min-h-[100svh] w-full overflow-hidden bg-white">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bw.jpg"
          alt="Mike the Chosen recording in the studio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] contrast-[1.08]"
        />
        {/* Clean white for the type column, then release so the subject keeps
            its contrast rather than washing the whole frame out */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-28% via-white/70 to-transparent" />
        {/* Just enough at the bottom for the scroll cue */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-ink">
            <span className="h-px w-8 bg-ink" />
            {HERO.city}
          </p>

          <Image
            src="/images/logo-mark.png"
            alt={HERO.name}
            width={1418}
            height={533}
            priority
            className="w-full max-w-xl"
          />

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium uppercase tracking-[0.18em] text-ink/75">
            {HERO.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-ink/40">·</span>}
                {role}
              </span>
            ))}
          </div>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/80">
            {HERO.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg shadow-ink/20 transition-transform hover:-translate-y-0.5"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="transition-transform group-hover:scale-110"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Listen to &ldquo;{FEATURED.title}&rdquo;
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-ink/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Book Mike
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#music"
        aria-label="Scroll to music"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/45 transition-colors hover:text-ink sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-px animate-pulse bg-gradient-to-b from-ink to-transparent" />
      </a>
    </section>
  );
}
