import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import PhaseSection from '../components/home/PhaseSection.jsx'
import WhySection from '../components/home/WhySection.jsx'
import SocialProof from '../components/home/SocialProof.jsx'
import ScienceTicker from '../components/home/ScienceTicker.jsx'
import WaitlistModal from '../components/WaitlistModal.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  const [searchParams] = useSearchParams()
  const [queryModalOpen, setQueryModalOpen] = useState(searchParams.get('waitlist') === '1')

  return (
    <div className="bg-cream">
      <Navbar />
      <HeroSection />
      <ScienceTicker />
      <PhaseSection />
      <WhySection />
      <SocialProof />
      {/* ponytail: button + fine print only — full CtaBanner in step 2.12; flush before Footer for ref */}
      <section className="bg-flamingo py-16 md:py-20 text-center">
        <button
          type="button"
          onClick={() => setQueryModalOpen(true)}
          className="bg-cream text-flamingo font-sans font-semibold text-base py-4 px-12 rounded-full hover:bg-mulberry hover:text-cream transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group shadow-xl"
        >
          Reserve Your Spot
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <p className="mt-6 font-sans text-xs text-cream/50 uppercase tracking-widest">
          Free to join · No credit card required
        </p>
      </section>
      <Footer />
      <WaitlistModal
        isOpen={queryModalOpen}
        onClose={() => setQueryModalOpen(false)}
        sourcePage="homepage"
      />
    </div>
  )
}
