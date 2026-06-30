import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import WaitlistModal from '../WaitlistModal.jsx'
import ScrollReveal from '../ScrollReveal.jsx'

export default function CtaBanner() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="bg-flamingo py-24 md:py-32 relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-cream/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute w-[900px] h-[900px] rounded-full border border-cream/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-cream/60 mb-5">
              Coming Soon
            </p>
            <h2 className="font-flourish text-[clamp(1.75rem,8vw,7rem)] font-black text-cream leading-tight mb-6 hyphens-none">
              <span className="block whitespace-nowrap">Women finally get</span>
              <span className="block whitespace-nowrap">what they need.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-cream/80 leading-relaxed max-w-lg mx-auto mb-10">
              Be among the first to experience Flourish. Early access members
              get exclusive launch pricing and a free cycle guide.
            </p>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="bg-cream text-flamingo font-sans font-semibold text-base py-4 px-12 rounded-full hover:bg-mulberry hover:text-cream transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto group shadow-xl"
            >
              Reserve Your Spot
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-6 font-sans text-xs text-cream/50 uppercase tracking-widest">
              Free to join · No credit card required
            </p>
          </ScrollReveal>
        </div>
      </section>

      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sourcePage="homepage"
      />
    </>
  )
}
