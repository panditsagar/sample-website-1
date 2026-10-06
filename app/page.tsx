import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import DocumentarySeries from "./components/DocumentarySeries";
import VisionMission from "./components/VisionMission";
import LatestPodcast from "./components/LatestPodcast";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <FeaturedIn />
      <DocumentarySeries />
      <VisionMission />
      <LatestPodcast />
      <Testimonials />
      <Footer />
    </main>
  );
}

