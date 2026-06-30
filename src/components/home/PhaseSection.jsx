import { useState } from 'react'
import ScrollReveal from '../ScrollReveal.jsx'
import WaitlistModal from '../WaitlistModal.jsx'
import { phases } from '../../data/phaseData.js'

function SymptomText({ symptom }) {
  if (typeof symptom === 'string') return symptom
  return (
    <>
      <em className="italic">{symptom.emphasis}</em> {symptom.text}
    </>
  )
}

export default function PhaseSection() {
  const [activePhase, setActivePhase] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const phase = phases[activePhase]

  return (
    <>
      <section id="how-it-works" className="py-24 md:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">The System</p>
            <h2 className="font-flourish text-[clamp(2.5rem,7vw,6rem)] font-black text-mulberry leading-tight">
              <span className="block">Four phases.</span>
              <span className="block text-flamingo">Four formulas.</span>
            </h2>
            <p className="mt-4 font-sans text-lg text-mulberry/60 max-w-xl mx-auto">
              Each formula adjusted to each phase, so you can flourish
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {phases.map((p, i) => (
                <button
                  key={p.name}
                  type="button"
                  onClick={() => setActivePhase(i)}
                  className="font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border-2"
                  style={
                    activePhase === i
                      ? {
                          background: p.color,
                          borderColor: p.color,
                          color: '#FAF0E6',
                          transform: 'scale(1.05)',
                        }
                      : {
                          background: 'transparent',
                          borderColor: `${p.color}60`,
                          color: p.color,
                        }
                  }
                >
                  {p.emoji} {p.name}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div
              className="rounded-3xl overflow-hidden transition-all duration-500"
              style={{ background: phase.bgLight }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{ background: `${phase.color}20` }}
                    >
                      {phase.emoji}
                    </div>
                    <div>
                      <h3 className="font-flourish text-2xl font-bold" style={{ color: phase.color }}>
                        {phase.name}
                      </h3>
                      <p className="font-sans text-xs text-mulberry/50 uppercase tracking-widest">{phase.sub}</p>
                    </div>
                  </div>

                  <p className="font-flourish text-[clamp(1.6rem,4vw,3rem)] font-bold text-mulberry leading-tight mb-5">
                    &ldquo;{phase.headline}&rdquo;
                  </p>

                  {phase.showHomeMissionLabel && (
                    <p
                      className="font-sans text-xs uppercase tracking-[0.2em] mb-2"
                      style={{ color: phase.color }}
                    >
                      Our mission this phase
                    </p>
                  )}
                  <p className="font-sans text-base text-mulberry/70 leading-relaxed mb-8">{phase.homeBody}</p>

                  {!phase.hideChips && (
                    <div className="flex flex-wrap gap-2">
                      {phase.symptoms.map((s) => (
                        <span
                          key={s}
                          className="font-sans text-xs font-medium px-3 py-1 rounded-full"
                          style={{ background: `${phase.color}20`, color: phase.color }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                  style={{ background: `${phase.color}15` }}
                >
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-6">
                    {phase.symptomsLabel ?? 'Symptomes addressed'}
                  </p>
                  <div className="space-y-4">
                    {phase.symptoms.map((s, i) => (
                      <div key={typeof s === 'string' ? s : `${s.emphasis}-${s.text}`} className="flex items-center gap-4">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold text-cream"
                          style={{ background: phase.color }}
                        >
                          {i + 1}
                        </div>
                        <span className="font-sans text-base font-medium text-mulberry">
                          <SymptomText symptom={s} />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex items-end gap-3">
                    <span
                      className="font-flourish font-black text-[6rem] leading-none opacity-10"
                      style={{ color: phase.color }}
                    >
                      0{activePhase + 1}
                    </span>
                    <span className="font-sans text-sm text-mulberry/40 mb-3">of 4</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="text-center mt-16">
            <p className="font-sans text-base text-mulberry/60 mb-5">
              Ready to be supported throughout your full cycle?
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="bg-flamingo text-cream font-sans font-semibold text-base py-4 px-10 rounded-full hover:bg-mulberry transition-all duration-300 hover:scale-105 shadow-lg shadow-flamingo/25"
            >
              Join the Waitlist
            </button>
          </ScrollReveal>
        </div>
      </section>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} sourcePage="homepage" />
    </>
  )
}
