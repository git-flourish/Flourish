import ScrollReveal from "../ScrollReveal";

const testimonials = [
  {
    quote: "I've been taking generic women's multivitamins for years and wondered why I still felt off every single month. Flourish finally made sense of my cycle.",
    name: "Sophia R.",
    detail: "Beta tester, 29",
    color: "#FF6EB4",
  },
  {
    quote: "The fact that the formula changes with my phases is mind-blowing. My luteal phase used to wreck me — not anymore.",
    name: "Camille D.",
    detail: "Beta tester, 33",
    color: "#A78BCA",
  },
  {
    quote: "As a functional medicine practitioner, I've been waiting for a product that respects hormonal nuance. This is it.",
    name: "Dr. Mara K.",
    detail: "Functional medicine MD",
    color: "#6DB589",
  },
];

const stats = [
  { number: "+150", label: "Clinical articles reviewed" },
  { number: "65%", label: "of women unsatisfied with current supplements" },
  { number: "$165B", label: "Women's supplement market" },
  { number: "4", label: "Cycle-specific formulas" },
];

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* BG orbital */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full border border-flamingo/8 top-10 -left-32 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Stats row */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
            {stats.map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <span className="font-flourish text-[clamp(2rem,5vw,4rem)] font-black text-flamingo leading-none">
                  {s.number}
                </span>
                <span className="font-sans text-sm text-mulberry/60 mt-2 max-w-[140px] mx-auto leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Section header */}
        <ScrollReveal className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">
            Early Community
          </p>
          <h2 className="font-flourish text-[clamp(2rem,5vw,4rem)] font-black text-mulberry">
            Women are already{" "}
            <span className="text-flamingo italic">flourishing.</span>
          </h2>
        </ScrollReveal>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-flamingo/10 h-full flex flex-col">
                {/* Quote mark */}
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
  );
}