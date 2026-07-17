import Image from "next/image";
import Reveal from "./Reveal";
import { LINKS } from "@/lib/siteData";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = 2026;
  return (
    <footer id="connect" className="scroll-mt-20 bg-ink">
      {/* CTA band */}
      <div className="border-t border-line bg-gradient-to-b from-gold/[0.06] to-transparent">
        <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <Image
              src="/images/logo-mark.png"
              alt="Mike the Chosen"
              width={1418}
              height={533}
              className="logo-gold mx-auto w-full max-w-md drop-shadow-[0_8px_40px_var(--color-glow-soft)]"
            />
            <h2 className="mt-10 font-serif text-3xl font-semibold text-cream sm:text-4xl">
              Let&rsquo;s make it happen.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-cream/70">
              For booking, features, and press — reach out to management, or tap
              in with the music and socials.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={LINKS.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Listen Now
              </a>
              <a
                href={`mailto:${LINKS.email}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-gold hover:text-gold-light sm:w-auto"
              >
                Email for Booking
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Contact details */}
      <div className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted">
              Management &amp; Booking
            </p>
            <a
              href={LINKS.management}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-serif text-lg text-cream transition-colors hover:text-gold-light"
            >
              LBH Multimedia Group
            </a>
            <a
              href={LINKS.bookingPhoneHref}
              className="mt-1 block text-cream/75 transition-colors hover:text-gold-light"
            >
              {LINKS.bookingPhone}
            </a>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted">
              Email
            </p>
            <a
              href={`mailto:${LINKS.email}`}
              className="mt-3 block break-words text-cream/75 transition-colors hover:text-gold-light"
            >
              {LINKS.email}
            </a>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted">
              Follow
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={LINKS.instagramArtist}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-gold-light"
                >
                  <InstagramIcon />
                  @mikethechosen_llc
                </a>
              </li>
              <li>
                <a
                  href={LINKS.instagramPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-gold-light"
                >
                  <InstagramIcon />
                  @bigmikemosley_
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-muted">
              All Links
            </p>
            <a
              href={LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-gold-light"
            >
              Linktree &#8599;
            </a>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-7 text-center text-xs text-muted sm:flex-row sm:px-8 sm:text-left">
          <p>
            &copy; {year} Mike the Chosen &middot; LBH Multimedia Management
            Group
          </p>
          <p>RockStar / ICO / Warner Bros.</p>
        </div>
      </div>

      {/* Designed by */}
      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-4 text-center text-xs text-muted sm:px-8">
          Designed by{" "}
          <a
            href={LINKS.designer}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold-light transition-colors hover:text-gold"
          >
            Edit Me Lo
          </a>
        </div>
      </div>
    </footer>
  );
}
