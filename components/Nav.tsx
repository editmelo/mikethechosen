"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LINKS } from "@/lib/siteData";
import ThemeToggle from "./ThemeToggle";

const SECTIONS = [
  { id: "music", label: "Music" },
  { id: "story", label: "Story" },
  { id: "live", label: "Live" },
  { id: "credits", label: "Credits" },
  { id: "connect", label: "Connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--nav-bar)] border-[color:var(--nav-bar-border)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="Mike the Chosen — home">
          <Image
            src="/images/logo-mark.png"
            alt="Mike the Chosen"
            width={1418}
            height={533}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-7 text-[0.82rem] font-medium uppercase tracking-[0.14em] text-[color:var(--nav-fg)]">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="transition-colors hover:text-[color:var(--nav-fg-strong)]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a
            href={LINKS.linktree}
            target="_blank"
            rel="noopener noreferrer"
            className="mtc-listen rounded-full px-5 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-all"
          >
            Listen
          </a>
        </div>

        {/* Mobile cluster */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-8 items-center justify-center text-[color:var(--nav-fg-strong)]"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[color:var(--nav-bar-border)] bg-[var(--nav-bar)] backdrop-blur-md md:hidden ${
          open ? "max-h-96" : "max-h-0"
        } transition-[max-height] duration-300 ease-out`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm font-medium uppercase tracking-[0.14em] text-[color:var(--nav-fg)]"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={LINKS.linktree}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mtc-cta block rounded-full px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-[0.12em]"
            >
              Listen Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
