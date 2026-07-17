import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroBW from "@/components/HeroBW";
import FeaturedRelease from "@/components/FeaturedRelease";
import Story from "@/components/Story";
import Highlights from "@/components/Highlights";
import Live from "@/components/Live";
import Credits from "@/components/Credits";
import Beyond from "@/components/Beyond";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Both heroes render; the active theme (see globals.css) shows one. */}
        <div id="top">
          <Hero />
          <HeroBW />
        </div>
        <FeaturedRelease />
        <Story />
        <Highlights />
        <Live />
        <Credits />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}
