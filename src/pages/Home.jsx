import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import HowItWorksStub from '../components/home/HowItWorksStub.jsx'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <HowItWorksStub />
    </div>
  )
}
