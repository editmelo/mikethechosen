import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-gold-light ${
            center ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-7 bg-gold" />
          {eyebrow}
          {center && <span className="h-px w-7 bg-gold" />}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
