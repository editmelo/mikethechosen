import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
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
        <Hero />
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
