"use client";

/**
 * Segmented GOLD | B&W control. The active state and all colors are driven by
 * the `theme-bw` class on <html> via CSS, so there's no React state to hydrate
 * and no flash — clicking just toggles the class and saves the choice.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  function set(theme: "gold" | "bw") {
    const el = document.documentElement;
    el.classList.toggle("theme-bw", theme === "bw");
    try {
      localStorage.setItem("mtc-theme", theme);
    } catch {
      /* private mode / storage disabled — theme still applies for this visit */
    }
  }

  return (
    <div className={`theme-seg ${className}`} role="group" aria-label="Color theme">
      <button
        type="button"
        data-opt="gold"
        onClick={() => set("gold")}
        aria-label="Black and gold theme"
      >
        Gold
      </button>
      <button
        type="button"
        data-opt="bw"
        onClick={() => set("bw")}
        aria-label="Black and white theme"
      >
        B&amp;W
      </button>
    </div>
  );
}
