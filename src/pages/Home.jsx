import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import HowItWorksStub from '../components/home/HowItWorksStub.jsx'
import ScienceTicker from '../components/home/ScienceTicker.jsx'
import WaitlistModal from '../components/WaitlistModal.jsx'

export default function Home() {
  const [searchParams] = useSearchParams()
  const [queryModalOpen, setQueryModalOpen] = useState(searchParams.get('waitlist') === '1')

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
      <WaitlistModal
        isOpen={queryModalOpen}
        onClose={() => setQueryModalOpen(false)}
        sourcePage="homepage"
      />
    </div>
  )
}
