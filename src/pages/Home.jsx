import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import PhaseSection from '../components/home/PhaseSection.jsx'
import WhySection from '../components/home/WhySection.jsx'
import SocialProof from '../components/home/SocialProof.jsx'
import CtaBanner from '../components/home/CtaBanner.jsx'
import ScienceTicker from '../components/home/ScienceTicker.jsx'
import WaitlistModal from '../components/WaitlistModal.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  const [searchParams] = useSearchParams()
  const [queryModalOpen, setQueryModalOpen] = useState(searchParams.get('waitlist') === '1')

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
      <WaitlistModal
        isOpen={queryModalOpen}
        onClose={() => setQueryModalOpen(false)}
        sourcePage="homepage"
      />
    </div>
  )
}
