import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import HowItWorksStub from '../components/home/HowItWorksStub.jsx'
import ScienceTicker from '../components/home/ScienceTicker.jsx'

export default function Home() {
  return (
    <div className="bg-cream">
      <Navbar />
      <div className="h-screen flex flex-col bg-cream">
        <div className="flex-1 flex flex-col justify-end min-h-0">
          <HeroSection />
        </div>
        <ScienceTicker />
      </div>
      <HowItWorksStub />
    </div>
  )
}
