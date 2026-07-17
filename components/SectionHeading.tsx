import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
  /** "dark" = cream text on black sections; "light" = ink text on sand sections */
  tone?: "dark" | "light";
}) {
  const center = align === "center";
  const light = tone === "light";

  const eyebrowColor = light ? "text-gold-deep" : "text-gold-light";
  const tickColor = light ? "bg-gold-deep" : "bg-gold";
  const titleColor = light ? "text-ink" : "text-cream";

  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.3em] ${eyebrowColor} ${
            center ? "justify-center" : ""
          }`}
        >
          <span className={`h-px w-7 ${tickColor}`} />
          {eyebrow}
          {center && <span className={`h-px w-7 ${tickColor}`} />}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
