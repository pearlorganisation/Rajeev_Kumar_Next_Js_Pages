import Features from "@/components/HomePage/Features";
import HeroSection from "@/components/HomePage/HeroSection";
import KnowAbout from "@/components/HomePage/KnowAbout";

function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <KnowAbout />
      <Features />
    </div>
  );
}

export default Home;
