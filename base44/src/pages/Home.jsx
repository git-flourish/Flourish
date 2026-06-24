import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ScienceTicker from "@/components/home/ScienceTicker";
import PhaseSection from "@/components/home/PhaseSection";
import WhySection from "@/components/home/WhySection";
import SocialProof from "@/components/home/SocialProof";
import CtaBanner from "@/components/home/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <ScienceTicker />
      <PhaseSection />
      <WhySection />
      <SocialProof />
      <CtaBanner />
      <Footer />
    </div>
  );
}