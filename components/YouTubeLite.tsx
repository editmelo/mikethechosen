"use client";

import Image from "next/image";
import { useState } from "react";

export default function YouTubeLite({
  id,
  poster,
  title,
}: {
  id: string;
  poster: string;
  title: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-line shadow-2xl">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 620px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/95 text-ink shadow-[0_10px_30px_-6px_rgba(201,162,75,0.7)] transition-transform duration-300 group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cream/90">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
            Watch on YouTube
          </span>
        </button>
      )}
    </div>
  );
}
