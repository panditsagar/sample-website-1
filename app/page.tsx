import Hero from "./components/Hero";
import FeaturedIn from "./components/FeaturedIn";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <FeaturedIn />
    </main>
  );
}
