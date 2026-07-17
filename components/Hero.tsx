import Image from "next/image";
import { HERO, FEATURED, LINKS } from "@/lib/siteData";

export default function Hero() {
  return (
    <section className="hero-gold relative min-h-[100svh] w-full overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <Image
          src="/images/portrait-neon.jpg"
          alt="Mike the Chosen lit by neon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        {/* Tints: darken for legibility + gold warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-[0.78rem] font-semibold uppercase tracking-[0.32em] text-gold-light">
            <span className="h-px w-8 bg-gold" />
            {HERO.city}
          </p>

          <Image
            src="/images/logo-mark.png"
            alt={HERO.name}
            width={1418}
            height={533}
            priority
            className="w-full max-w-xl drop-shadow-[0_8px_40px_var(--color-glow-soft)]"
          />

          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium uppercase tracking-[0.18em] text-cream/80">
            {HERO.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-gold/70">·</span>}
                {role}
              </span>
            ))}
          </div>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/85">
            {HERO.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-ink shadow-[0_10px_30px_-8px_var(--color-glow)] transition-transform hover:-translate-y-0.5"
            >
              <PlayIcon />
              Listen to &ldquo;{FEATURED.title}&rdquo;
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-gold hover:text-gold-light"
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
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/45 transition-colors hover:text-gold-light sm:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-9 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </a>
    </section>
  );
}

function PlayIcon() {
  return (
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
  );
}
