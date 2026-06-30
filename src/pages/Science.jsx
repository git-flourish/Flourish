import { useState } from 'react'
import { ArrowRight, FlaskConical, Leaf, Shield, Zap } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScienceTicker from '../components/home/ScienceTicker.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import WaitlistModal from '../components/WaitlistModal.jsx'
import HormoneCycleChart from '../components/HormoneCycleChart.jsx'
import { phases } from '../data/phaseData.js'

const principles = [
  {
    icon: FlaskConical,
    title: 'Evidence First',
    body: 'Every ingredient in each formula is researched and checked for synergy.',
  },
  {
    icon: Leaf,
    title: 'Bioavailability by Design',
    body: 'Ingredients are chosen in their most absorbable format.',
  },
  {
    icon: Zap,
    title: 'Cycle Synced',
    body: 'Each formula is exactly mapped to each phase in the natural hormonal cycle.',
  },
  {
    icon: Shield,
    title: 'Clean and Vegan',
    body: 'There are no animal derivatives in our product, no unnecessary additives and our ingredients are ethically sourced.',
  },
]

export default function Science() {
  const [activePhase, setActivePhase] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const phase = phases[activePhase]

  return (
    <>
      <div className="min-h-screen bg-cream">
        <Navbar />

        <section className="pt-40 pb-20 bg-cream relative overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full border border-flamingo/10 top-0 right-0 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-4">
                The Flourish Standard
              </p>
              <h1 className="font-flourish text-[clamp(3rem,9vw,8rem)] font-black text-mulberry leading-tight mb-6">
                The science
                <br />
                <span className="text-flamingo italic">of your cycle.</span>
              </h1>
              <p className="font-sans text-lg text-mulberry/60 leading-relaxed max-w-2xl">
                We reviewed clinical trials, journals, and studies to build four formulas that match
                exactly what your body needs at each phase of your 28-day cycle. Here&apos;s the evidence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <ScienceTicker />

        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-flourish text-[clamp(2rem,5vw,4rem)] font-black text-mulberry">
                Our scientific principles
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.1}>
                  <div className="bg-white/50 rounded-2xl p-7 border border-flamingo/10 h-full">
                    <div className="w-10 h-10 rounded-full bg-flamingo/10 flex items-center justify-center mb-5">
                      <p.icon size={20} className="text-flamingo" />
                    </div>
                    <h3 className="font-flourish text-xl font-bold text-mulberry mb-3">{p.title}</h3>
                    <p className="font-sans text-sm text-mulberry/60 leading-relaxed">{p.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-mulberry relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full border border-cream/5 -right-64 top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-14">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-flamingo mb-3">Four Formulas</p>
              <h2 className="font-flourish text-[clamp(2.5rem,6vw,5rem)] font-black text-cream leading-tight">
                The natural hormonal cycle explained
              </h2>
              <p className="mt-4 font-sans text-base text-cream/60 max-w-xl mx-auto">
                Understand your cycle, phase by phase.
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
                        : { background: 'transparent', borderColor: `${p.color}50`, color: p.color }
                    }
                  >
                    {p.emoji} {p.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-3xl overflow-hidden" style={{ background: phase.bgLight }}>
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{phase.emoji}</span>
                      <div>
                        <h3 className="font-flourish text-2xl font-bold" style={{ color: phase.color }}>
                          {phase.name}
                        </h3>
                        <p className="font-sans text-xs uppercase tracking-widest text-mulberry/50">
                          {phase.phase} · {phase.days}
                        </p>
                      </div>
                    </div>
                    <div className="border-l-4 pl-6 mb-8" style={{ borderColor: phase.color }}>
                      <p className="font-flourish text-xl font-bold italic text-mulberry/80">
                        Hormone status: {phase.hormone}
                      </p>
                    </div>
                    <p
                      className="font-sans text-xs uppercase tracking-[0.2em] mb-4"
                      style={{ color: phase.color }}
                    >
                      This is whats happening in your body
                    </p>
                    <p className="font-sans text-sm text-mulberry/70 leading-relaxed">{phase.scienceBody}</p>
                  </div>
                  <div
                    className="p-8 md:p-12 lg:p-16 flex flex-col gap-10"
                    style={{ background: `${phase.color}12` }}
                  >
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-4">
                        Key Ingredients
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {phase.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{ background: `${phase.color}20`, color: phase.color }}
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-4">
                        Supporting Research
                      </p>
                      <div className="space-y-4">
                        {phase.studies.map((s) => (
                          <div
                            key={s.title}
                            className="rounded-xl p-4"
                            style={{ background: 'rgba(250,240,230,0.7)' }}
                          >
                            <p className="font-sans text-sm font-medium text-mulberry leading-snug mb-1">
                              {s.title}
                            </p>
                            <p className="font-sans text-xs text-mulberry/50 italic">{s.journal}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-24 bg-cream">
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-flourish text-[clamp(2rem,5vw,4rem)] font-black text-mulberry">
                The 28-day journey
              </h2>
              <p className="mt-4 font-sans text-base text-mulberry/60 max-w-lg mx-auto">
                No one supplement with one formula can cover for all four phases — and now, none has to.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl bg-white/60 border border-flamingo/10 p-6 md:p-10">
                <HormoneCycleChart />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-20 bg-flamingo relative overflow-hidden">
          <div className="absolute w-[400px] h-[400px] rounded-full border border-cream/10 -bottom-20 -left-20 pointer-events-none" />
          <div className="max-w-3xl lg:max-w-5xl mx-auto px-6 text-center relative z-10">
            <ScrollReveal>
              <h2 className="font-flourish text-[clamp(2rem,5vw,3.5rem)] lg:text-[clamp(2rem,2.8vw,3.25rem)] font-black text-cream leading-tight mb-6 hyphens-none lg:whitespace-nowrap">
                Science-backed. Cycle-synced. Finally.
              </h2>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="bg-cream text-flamingo font-sans font-semibold text-base py-4 px-12 rounded-full hover:bg-mulberry hover:text-cream transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto group shadow-xl"
              >
                Join the Waitlist
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} sourcePage="science" />
    </>
  )
}
