import ScrollReveal from "../ScrollReveal";
import { CheckCircle2, X } from "lucide-react";

const differentiators = [
  { label: "Women specific", flo: true, thorne: true, flourish: true },
  { label: "Cycle-synced formula", flo: true, thorne: false, flourish: true },
  { label: "Sequenced by phase", flo: false, thorne: false, flourish: true },
  { label: "Water soluble — Bioavailability", flo: false, thorne: false, flourish: true },
  { label: "Vegan, ethically sourced", flo: false, thorne: false, flourish: true },
];

export default function WhySection() {
  return (
    <section className="py-24 md:py-32 bg-mulberry overflow-hidden relative">
      {/* Orbital ring decoration */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full border border-cream/5 top-1/2 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-flamingo mb-4">
              Why Flourish
            </p>
            <h2 className="font-flourish text-[clamp(2.5rem,6vw,5rem)] font-black text-cream leading-tight mb-6">
              Not new,<br />
              but <span className="text-flamingo italic">different.</span>
            </h2>
            <p className="font-sans text-base text-cream/60 leading-relaxed max-w-md">
              The women's supplement market is $165B — yet 65% of women are
              unsatisfied. Because every other brand gives you one formula for
              all four phases. We give you four.
            </p>
          </ScrollReveal>

          {/* Right: comparison table */}
          <ScrollReveal delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-cream/10">
              {/* Header */}
              <div className="grid grid-cols-4 bg-cream/5 px-4 py-4">
                <div />
                <p className="font-sans text-xs text-center text-cream/40 uppercase tracking-wider">Flo-Living</p>
                <p className="font-sans text-xs text-center text-cream/40 uppercase tracking-wider">Thorne</p>
                <p className="font-sans text-xs text-center text-flamingo uppercase tracking-wider font-semibold">Flourish</p>
              </div>

              {/* Rows */}
              {differentiators.map((d, i) => (
                <div
                  key={d.label}
                  className={`grid grid-cols-4 px-4 py-4 items-center border-t border-cream/10 ${
                    i % 2 === 0 ? "bg-transparent" : "bg-cream/[0.03]"
                  }`}
                >
                  <p className="font-sans text-sm text-cream/70 pr-2">{d.label}</p>
                  <div className="flex justify-center">
                    {d.flo ? (
                      <CheckCircle2 size={18} className="text-sage" />
                    ) : (
                      <X size={16} className="text-cream/20" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {d.thorne ? (
                      <CheckCircle2 size={18} className="text-sage" />
                    ) : (
                      <X size={16} className="text-cream/20" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {d.flourish ? (
                      <CheckCircle2 size={18} className="text-flamingo" />
                    ) : (
                      <X size={16} className="text-cream/20" />
                    )}
                  </div>
                </div>
              ))}

              {/* Footer badge */}
              <div className="bg-flamingo/20 px-4 py-4 text-center">
                <p className="font-sans text-xs font-semibold text-flamingo uppercase tracking-widest">
                  Only all-in-one solution ✦
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}