import type { Metadata } from "next";
import Nav from "@/components/Nav";
import HeroBW from "@/components/HeroBW";
import FeaturedRelease from "@/components/FeaturedRelease";
import Story from "@/components/Story";
import Highlights from "@/components/Highlights";
import Live from "@/components/Live";
import Credits from "@/components/Credits";
import Beyond from "@/components/Beyond";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Test",
  // Style exploration — keep it out of search results
  robots: { index: false, follow: false },
};

/**
 * /test — identical to the home page, but with the black & white studio hero
 * and a monochrome palette. Everything below the hero is the same shared
 * components; `theme-bw` re-points the color tokens (see globals.css).
 */
export default function TestPage() {
  return (
    <div className="theme-bw">
      <Nav tone="light" />
      <main>
        <HeroBW />
        <FeaturedRelease />
        <Story />
        <Highlights />
        <Live />
        <Credits />
        <Beyond />
      </main>
      <Footer />
    </div>
  );
}
