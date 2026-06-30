import ScrollReveal from '../ScrollReveal.jsx'

const testimonials = [
  {
    quote: "I've been taking generic women's multivitamins for years and wondered why I still felt off every single month. Flourish finally made sense of my cycle.",
    name: 'Sophia R.',
    detail: 'Beta tester, 29',
    color: '#FF6EB4',
  },
  {
    quote: 'The fact that the formula changes with my phases is mind-blowing. My luteal phase used to wreck me — not anymore.',
    name: 'Camille D.',
    detail: 'Beta tester, 33',
    color: '#A78BCA',
  },
  {
    quote: "As a functional medicine practitioner, I've been waiting for a product that respects hormonal nuance. This is it.",
    name: 'Dr. Mara K.',
    detail: 'Functional medicine MD',
    color: '#6DB589',
  },
]

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full border border-flamingo/8 top-10 -left-32 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">
            Early Community
          </p>
          <h2 className="font-flourish text-[clamp(2rem,5vw,4rem)] font-black text-mulberry">
            Women are ready to{' '}
            <span className="text-flamingo italic">Flourish.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-flamingo/10 h-full flex flex-col">
                <span
                  className="font-flourish text-5xl font-black leading-none mb-4"
                  style={{ color: t.color }}
                >
                  "
                </span>
                <p className="font-sans text-base text-mulberry/80 leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-flourish text-sm font-bold text-cream"
                    style={{ background: t.color }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-mulberry">{t.name}</p>
                    <p className="font-sans text-xs text-mulberry/50">{t.detail}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
