import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import WaitlistModal from '../WaitlistModal.jsx'

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen bg-cream flex flex-col items-center justify-center overflow-hidden">
        <div className="orbital-ring w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="orbital-ring w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="orbital-ring w-[400px] h-[400px] -top-20 -left-20 opacity-15" />
        <div className="orbital-ring w-[300px] h-[300px] -bottom-10 right-10 opacity-15" />

        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-flourish font-black text-[clamp(6rem,22vw,20rem)] leading-none tracking-tight"
            style={{
              WebkitTextStroke: '2px rgba(255,110,180,0.1)',
              color: 'transparent',
            }}
          >
            FLOURISH
          </span>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/60 mb-6">
            The first cycle-synced supplement system
          </p>

          <h1 className="flourish-wordmark text-[clamp(5rem,16vw,14rem)] leading-none mb-6">Flourish</h1>

          <p className="font-flourish text-[clamp(1.5rem,3.5vw,2.75rem)] font-bold text-mulberry leading-snug mb-4">
            Built for a woman&apos;s cycle.
          </p>
          <p className="font-sans text-base md:text-lg text-mulberry/70 max-w-xl mx-auto leading-relaxed mb-10">
            Four phases. Four formulas. Finally, supplements that actually match what your body needs — phase by
            phase.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="pulse-cta bg-flamingo text-cream font-sans font-semibold text-base py-4 px-10 rounded-full hover:bg-mulberry transition-all duration-300 hover:scale-105 shadow-lg shadow-flamingo/30"
            >
              Join the Waitlist
            </button>
            <a
              href="#how-it-works"
              className="font-sans text-sm font-medium text-mulberry/70 hover:text-flamingo transition-colors flex items-center gap-2"
            >
              See how it works <ArrowDown size={15} />
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {['FF6EB4', 'A78BCA', 'FF6B6B', '6DB589'].map((c) => (
                <div
                  key={c}
                  className="w-8 h-8 rounded-full border-2 border-cream"
                  style={{ background: `#${c}` }}
                />
              ))}
            </div>
            <p className="font-sans text-sm text-mulberry/60 ml-2">
              <span className="text-flamingo font-semibold">1,200+ women</span> already on the waitlist
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
          <div className="w-px h-12 bg-mulberry/40" />
        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} sourcePage="homepage" />
    </>
  )
}
