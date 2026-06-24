import { useState } from 'react'
import ScrollReveal from '../ScrollReveal.jsx'

// ponytail: minimal #how-it-works stub for scroll-reveal validation; replaced by PhaseSection in step 2.9
const phases = [
  {
    name: 'The Drain',
    sub: 'Menstrual Phase · Days 1–7',
    color: '#FF6B6B',
    bgLight: '#FFF0F0',
    emoji: '🌑',
    symptoms: ['Cramping', 'Fatigue', 'Inflammation'],
  },
  {
    name: 'The Rise',
    sub: 'Follicular Phase · Days 8–13',
    color: '#6DB589',
    bgLight: '#F0FAF3',
    emoji: '🌒',
    symptoms: ['Energy building'],
  },
  {
    name: 'The Peak',
    sub: 'Ovulatory Phase · Days 14–21',
    color: '#FF6EB4',
    bgLight: '#FFF0F8',
    emoji: '🌕',
    symptoms: ['High energy'],
  },
  {
    name: 'The Crash',
    sub: 'Luteal Phase · Days 22–28',
    color: '#A78BCA',
    bgLight: '#F5F0FA',
    emoji: '🌘',
    symptoms: ['Mood swings'],
  },
]

export default function HowItWorksStub() {
  const [activePhase, setActivePhase] = useState(0)
  const phase = phases[activePhase]

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">The System</p>
          <h2 className="font-flourish text-[clamp(2.5rem,7vw,6rem)] font-black text-mulberry leading-tight">
            Four phases. <span className="text-flamingo">Four formulas.</span>
          </h2>
          <p className="mt-4 font-sans text-lg text-mulberry/60 max-w-xl mx-auto">
            No one supplement with one formula can cover all four phases.
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
                    ? { background: p.color, borderColor: p.color, color: '#FAF0E6', transform: 'scale(1.05)' }
                    : { background: 'transparent', borderColor: `${p.color}60`, color: p.color }
                }
              >
                {p.emoji} {p.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden transition-all duration-500" style={{ background: phase.bgLight }}>
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
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center" style={{ background: `${phase.color}15` }}>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-6">Symptomes addressed</p>
                <div className="space-y-4">
                  {phase.symptoms.map((s, i) => (
                    <div key={s} className="flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold text-cream"
                        style={{ background: phase.color }}
                      >
                        {i + 1}
                      </div>
                      <span className="font-sans text-base font-medium text-mulberry">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
