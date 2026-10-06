import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";
import DocumentarySeries from "./components/DocumentarySeries";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <FeaturedIn />
      <DocumentarySeries />
    </main>
  );
}
