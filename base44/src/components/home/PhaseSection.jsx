import { useState } from "react";
import ScrollReveal from "../ScrollReveal";
import WaitlistModal from "../WaitlistModal";

const phases = [
{
  name: "The Drain",
  sub: "Menstrual Phase · Days 1–7",
  color: "#FF6B6B",
  bgLight: "#FFF0F0",
  emoji: "🌑",
  headline: "Rest is not weakness.",
  body: "Your estrogen and progesterone hit their floor. We replenish iron, reduce inflammation, ease cramping, and lift brain fog — so you can honour this phase without losing yourself in it.",
  symptoms: ["Cramping", "Fatigue", "Inflammation", "Iron loss", "Brain fog"],
  keyIngredients: ["Iron bisglycinate", "Magnesium glycinate", "Omega-3", "Turmeric extract"]
},
{
  name: "The Rise",
  sub: "Follicular Phase · Days 8–13",
  color: "#6DB589",
  bgLight: "#F0FAF3",
  emoji: "🌒",
  headline: "Energy is climbing. Meet it.",
  body: "Estrogen begins its ascent. This is your window for mental clarity and momentum. We support rising hormones with nutrients that amplify focus, mood, and physical vitality.",
  symptoms: ["Energy building", "Estrogen climbing", "Mental clarity"],
  keyIngredients: ["B-complex vitamins", "Ashwagandha", "CoQ10", "Zinc"]
},
{
  name: "The Peak",
  sub: "Ovulatory Phase · Days 14–21",
  color: "#FF6EB4",
  bgLight: "#FFF0F8",
  emoji: "🌕",
  headline: "You are luminous. Protect it.",
  body: "LH surges, confidence peaks, and inflammation quietly rises. Our Peak formula manages oxidative stress while you channel your highest energy — keeping you radiant, not depleted.",
  symptoms: ["High energy", "Confidence", "Inflammation", "Sex drive"],
  keyIngredients: ["Vitamin C", "Selenium", "Chaste tree berry", "NAC"]
},
{
  name: "The Crash",
  sub: "Luteal Phase · Days 22–28",
  color: "#A78BCA",
  bgLight: "#F5F0FA",
  emoji: "🌘",
  headline: "Support before the storm.",
  body: "Progesterone rises then falls. Mood swings, bloating, and sleep disruption are real — and preventable. Our Crash formula addresses the root hormonal shifts so you feel like yourself, even now.",
  symptoms: ["Mood swings", "Bloating", "Anxiety", "Sleep issues"],
  keyIngredients: ["Magnesium L-threonate", "Vitamin B6", "Saffron extract", "Passionflower"]
}];


export default function PhaseSection() {
  const [activePhase, setActivePhase] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const phase = phases[activePhase];

  return (
    <>
      <section id="how-it-works" className="py-24 md:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <ScrollReveal className="text-center mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">
              The System
            </p>
            <h2 className="font-flourish text-[clamp(2.5rem,7vw,6rem)] font-black text-mulberry leading-tight">
              <span className="block">Four phases.</span>
              <span className="block text-flamingo">Four formulas.</span>
            </h2>
            <p className="mt-4 font-sans text-lg text-mulberry/60 max-w-xl mx-auto">
              Each formula adjusted to each phase, so you can flourish
            </p>
          </ScrollReveal>

          {/* Phase tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {phases.map((p, i) =>
              <button
                key={p.name}
                onClick={() => setActivePhase(i)}
                className="font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border-2"
                style={
                activePhase === i ?
                {
                  background: p.color,
                  borderColor: p.color,
                  color: "#FAF0E6",
                  transform: "scale(1.05)"
                } :
                {
                  background: "transparent",
                  borderColor: p.color + "60",
                  color: p.color
                }
                }>
                
                  {p.emoji} {p.name}
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Phase detail card */}
          <ScrollReveal delay={0.15}>
            <div
              className="rounded-3xl overflow-hidden transition-all duration-500"
              style={{ background: phase.bgLight }}>
              
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: content */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                      style={{ background: phase.color + "20" }}>
                      
                      {phase.emoji}
                    </div>
                    <div>
                      <h3
                        className="font-flourish text-2xl font-bold"
                        style={{ color: phase.color }}>
                        
                        {phase.name}
                      </h3>
                      <p className="font-sans text-xs text-mulberry/50 uppercase tracking-widest">
                        {phase.sub}
                      </p>
                    </div>
                  </div>

                  <p className="font-flourish text-[clamp(1.6rem,4vw,3rem)] font-bold text-mulberry leading-tight mb-5">
                    "{phase.headline}"
                  </p>

                  <p className="font-sans text-base text-mulberry/70 leading-relaxed mb-8">
                    {phase.body}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {phase.symptoms.map((s) =>
                    <span
                      key={s}
                      className="font-sans text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        background: phase.color + "20",
                        color: phase.color
                      }}>
                      
                        {s}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: ingredients */}
                <div
                  className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
                  style={{ background: phase.color + "15" }}>
                  
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-6">Symptomes addressed

                  </p>
                  <div className="space-y-4">
                    {phase.symptoms.map((s, i) =>
                    <div key={s} className="flex items-center gap-4">
                        <div
                        className="w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs font-bold text-cream"
                        style={{ background: phase.color }}>
                          {i + 1}
                        </div>
                        <span className="font-sans text-base font-medium text-mulberry">
                          {s}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Phase number visual */}
                  <div className="mt-10 flex items-end gap-3">
                    <span
                      className="font-flourish font-black text-[6rem] leading-none opacity-10"
                      style={{ color: phase.color }}>
                      
                      0{activePhase + 1}
                    </span>
                    <span className="font-sans text-sm text-mulberry/40 mb-3">of 4</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bottom CTA */}
          <ScrollReveal delay={0.2} className="text-center mt-16">
            <p className="font-sans text-base text-mulberry/60 mb-5">Ready to be supported throughout your full cycle?

            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-flamingo text-cream font-sans font-semibold text-base py-4 px-10 rounded-full hover:bg-mulberry transition-all duration-300 hover:scale-105 shadow-lg shadow-flamingo/25">
              
              Join the Waitlist
            </button>
          </ScrollReveal>
        </div>
      </section>

      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sourcePage="homepage" />
      
    </>);

}