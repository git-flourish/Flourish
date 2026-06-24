import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScienceTicker from "@/components/home/ScienceTicker";
import ScrollReveal from "@/components/ScrollReveal";
import WaitlistModal from "@/components/WaitlistModal";
import { ArrowRight, FlaskConical, Leaf, Zap, Shield } from "lucide-react";

const phases = [
  {
    name: "The Drain",
    phase: "Menstrual",
    days: "Days 1–7",
    color: "#FF6B6B",
    bgLight: "#FFF0F0",
    icon: "🌑",
    hormone: "Estrogen & progesterone at their lowest",
    mission: "Replenish, restore, reduce pain",
    body: "During menstruation, the uterine lining sheds and key nutrients are lost. Iron, in particular, drops significantly with blood loss. Inflammation spikes, and the hormone-gut axis becomes sensitive. Our Drain formula is built on the clinical evidence for iron bisglycinate (high absorption, low GI side effects), magnesium glycinate (proven to reduce cramping and improve sleep quality), and omega-3 EPA/DHA (anti-inflammatory, mood-stabilising).",
    studies: [
      { title: "Iron bisglycinate vs iron sulfate in menstrual blood loss", journal: "J Womens Health, 2022" },
      { title: "Magnesium supplementation for primary dysmenorrhea", journal: "Eur J Clin Nutr, 2023" },
      { title: "Omega-3 fatty acids in menstrual pain management", journal: "Complement Ther Med, 2021" },
    ],
    ingredients: ["Iron bisglycinate", "Magnesium glycinate", "Omega-3 EPA/DHA", "Turmeric extract", "Vitamin C", "B12"],
  },
  {
    name: "The Rise",
    phase: "Follicular",
    days: "Days 8–13",
    color: "#6DB589",
    bgLight: "#F0FAF3",
    icon: "🌒",
    hormone: "Estrogen climbing, FSH active",
    mission: "Amplify energy, support hormonal rise",
    body: "The follicular phase is your body's spring. Estrogen begins rising, the follicle matures, and cognitive performance peaks. Our Rise formula capitalises on this receptive window — the B-vitamin complex supports the methylation pathways that regulate estrogen metabolism; CoQ10 enhances mitochondrial energy production; zinc supports follicular development. Ashwagandha (KSM-66®) reduces cortisol without sedating the natural energy surge.",
    studies: [
      { title: "B-vitamin complex and estrogen metabolism in premenopausal women", journal: "Nutrients, 2023" },
      { title: "CoQ10 supplementation and mitochondrial function", journal: "Biofactors, 2022" },
      { title: "Ashwagandha (KSM-66) on cortisol and stress", journal: "J Int Soc Sports Nutr, 2021" },
    ],
    ingredients: ["B-complex (methylated)", "Ashwagandha KSM-66®", "CoQ10", "Zinc bisglycinate", "Folate", "Iodine"],
  },
  {
    name: "The Peak",
    phase: "Ovulatory",
    days: "Days 14–21",
    color: "#FF6EB4",
    bgLight: "#FFF0F8",
    icon: "🌕",
    hormone: "LH surge, peak estrogen, testosterone rise",
    mission: "Manage inflammation, sustain radiance",
    body: "The LH surge triggers ovulation and a brief but significant inflammatory response. You feel your best — but oxidative stress is quietly rising. Our Peak formula targets this paradox: NAC (N-acetyl cysteine) replenishes glutathione — the body's master antioxidant; selenium and vitamin C work synergistically for cellular protection; Vitex agnus-castus (chaste tree berry) supports progesterone synthesis in preparation for the luteal phase.",
    studies: [
      { title: "NAC and oxidative stress across the menstrual cycle", journal: "Oxid Med Cell Longev, 2022" },
      { title: "Vitex agnus-castus in hormone modulation", journal: "Planta Med, 2021" },
      { title: "Selenium and reproductive hormones in women", journal: "Biol Trace Elem Res, 2023" },
    ],
    ingredients: ["NAC", "Selenium", "Vitamin C (ascorbate)", "Vitex agnus-castus", "Vitamin D3+K2", "Choline"],
  },
  {
    name: "The Crash",
    phase: "Luteal",
    days: "Days 22–28",
    color: "#A78BCA",
    bgLight: "#F5F0FA",
    icon: "🌘",
    hormone: "Progesterone rises then falls",
    mission: "Calm the storm, protect sleep, ease PMS",
    body: "As progesterone drops in the late luteal phase, serotonin and GABA pathways are disrupted. This is the root of PMS — not weakness, but a predictable neurochemical shift. Magnesium L-threonate crosses the blood-brain barrier to directly support GABA receptor function; vitamin B6 (pyridoxal-5-phosphate form) is a clinical-grade PMS intervention with multiple RCT support; saffron extract (affron®) has demonstrated equivalence to low-dose SSRIs for premenstrual mood in double-blind trials.",
    studies: [
      { title: "Magnesium L-threonate and GABA modulation", journal: "Neuropharmacology, 2022" },
      { title: "Vitamin B6 (P5P) for premenstrual syndrome: RCT review", journal: "Cochrane Review, 2023" },
      { title: "Saffron extract vs placebo for PMDD", journal: "BJOG, 2022" },
    ],
    ingredients: ["Magnesium L-threonate", "Vitamin B6 (P5P)", "Saffron extract affron®", "Passionflower", "Glycine", "L-theanine"],
  },
];

const principles = [
  {
    icon: FlaskConical,
    title: "Evidence First",
    body: "Every ingredient in every formula is backed by peer-reviewed clinical data — not trend cycles, not marketing.",
  },
  {
    icon: Leaf,
    title: "Bioavailability by Design",
    body: "We choose the forms of nutrients your body actually absorbs — bisglycinate chelates, methylated B-vitamins, water-soluble delivery.",
  },
  {
    icon: Zap,
    title: "Cycle Intelligence",
    body: "Supplements timed to your phase don't just check nutrient boxes — they work with your body's natural hormonal architecture.",
  },
  {
    icon: Shield,
    title: "Clean & Vegan",
    body: "No fillers, no animal-derived gelatin capsules, no unnecessary additives. Cruelty-free certified. Ethically sourced.",
  },
];

export default function Science() {
  const [activePhase, setActivePhase] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const phase = phases[activePhase];

  return (
    <>
      <div className="min-h-screen bg-cream">
        <Navbar />

        {/* Hero */}
        <section className="pt-40 pb-20 bg-cream relative overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full border border-flamingo/10 top-0 right-0 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6">
            <ScrollReveal>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-4">
                The Flourish Standard
              </p>
              <h1 className="font-flourish text-[clamp(3rem,9vw,8rem)] font-black text-mulberry leading-tight mb-6">
                The science<br />
                <span className="text-flamingo italic">of your cycle.</span>
              </h1>
              <p className="font-sans text-lg text-mulberry/60 leading-relaxed max-w-2xl">
                We reviewed 150+ clinical trials, journals, and studies to build four
                formulas that match exactly what your body needs at each phase of your
                28-day cycle. Here's the evidence.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <ScienceTicker />

        {/* Science Principles */}
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

        {/* Phase Deep-Dive */}
        <section className="py-24 bg-mulberry relative overflow-hidden">
          <div className="absolute w-[800px] h-[800px] rounded-full border border-cream/5 -right-64 top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal className="text-center mb-14">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-flamingo mb-3">
                Four Formulas
              </p>
              <h2 className="font-flourish text-[clamp(2.5rem,6vw,5rem)] font-black text-cream leading-tight">
                Phase-by-phase breakdown
              </h2>
              <p className="mt-4 font-sans text-base text-cream/60 max-w-xl mx-auto">
                Select a phase to explore the clinical rationale and key ingredients behind each formula.
              </p>
            </ScrollReveal>

            {/* Phase selector */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {phases.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => setActivePhase(i)}
                    className="font-sans text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 border-2"
                    style={
                      activePhase === i
                        ? { background: p.color, borderColor: p.color, color: "#FAF0E6", transform: "scale(1.05)" }
                        : { background: "transparent", borderColor: p.color + "50", color: p.color }
                    }
                  >
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Phase card */}
            <ScrollReveal delay={0.15}>
              <div
                className="rounded-3xl overflow-hidden"
                style={{ background: phase.bgLight }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: editorial */}
                  <div className="p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{phase.icon}</span>
                      <div>
                        <h3 className="font-flourish text-2xl font-bold" style={{ color: phase.color }}>
                          {phase.name}
                        </h3>
                        <p className="font-sans text-xs uppercase tracking-widest text-mulberry/50">
                          {phase.phase} · {phase.days}
                        </p>
                      </div>
                    </div>

                    {/* Pull quote */}
                    <div
                      className="border-l-4 pl-6 mb-8"
                      style={{ borderColor: phase.color }}
                    >
                      <p className="font-flourish text-xl font-bold italic text-mulberry/80">
                        Hormone status: {phase.hormone}
                      </p>
                    </div>

                    <p
                      className="font-sans text-xs uppercase tracking-[0.2em] mb-2"
                      style={{ color: phase.color }}
                    >
                      Our mission this phase
                    </p>
                    <p className="font-flourish text-[clamp(1.4rem,3vw,2.2rem)] font-bold text-mulberry leading-snug mb-6">
                      {phase.mission}
                    </p>

                    <p className="font-sans text-sm text-mulberry/70 leading-relaxed">
                      {phase.body}
                    </p>
                  </div>

                  {/* Right: ingredients + studies */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-10" style={{ background: phase.color + "12" }}>
                    {/* Ingredients */}
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-4">
                        Key Ingredients
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {phase.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{ background: phase.color + "20", color: phase.color }}
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Studies */}
                    <div>
                      <p className="font-sans text-xs uppercase tracking-[0.2em] text-mulberry/50 mb-4">
                        Supporting Research
                      </p>
                      <div className="space-y-4">
                        {phase.studies.map((s) => (
                          <div
                            key={s.title}
                            className="rounded-xl p-4"
                            style={{ background: "rgba(250,240,230,0.7)" }}
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

        {/* Cycle visualiser */}
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

            {/* Timeline */}
            <ScrollReveal delay={0.1}>
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-coral via-sage via-flamingo to-lavender opacity-40" />

                <div className="grid md:grid-cols-4 gap-6">
                  {phases.map((p, i) => (
                    <div key={p.name} className="flex flex-col items-center md:items-start text-center md:text-left">
                      {/* Dot */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4 relative z-10"
                        style={{ background: p.color + "20", border: `2px solid ${p.color}` }}
                      >
                        {p.icon}
                      </div>
                      <p className="font-sans text-xs uppercase tracking-widest text-mulberry/40 mb-1">{p.days}</p>
                      <h3 className="font-flourish text-xl font-bold mb-1" style={{ color: p.color }}>{p.name}</h3>
                      <p className="font-sans text-xs text-mulberry/60">{p.phase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-flamingo relative overflow-hidden">
          <div className="absolute w-[400px] h-[400px] rounded-full border border-cream/10 -bottom-20 -left-20 pointer-events-none" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <ScrollReveal>
              <h2 className="font-flourish text-[clamp(2.5rem,7vw,6rem)] font-black text-cream leading-tight mb-6">
                Science-backed.<br />Cycle-synced.<br />Finally.
              </h2>
              <button
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

      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        sourcePage="science"
      />
    </>
  );
}