import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <section className="pt-40 pb-20 bg-cream relative overflow-hidden">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-flamingo/10 top-0 right-0 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-4">
              About
            </p>
            <h1 className="font-flourish text-[clamp(3rem,9vw,6rem)] font-black text-mulberry leading-tight mb-16">
              Our <span className="text-flamingo italic">motivation.</span>
            </h1>

            <div className="space-y-6 font-sans text-base md:text-lg text-mulberry/75 leading-relaxed">
              <p>
                Women&apos;s health research gets a fraction of the funding men&apos;s health does,
                and supplements never caught up either. The industry still sells one static formula
                for a body that changes every single week.
              </p>
              <p>
                We&apos;re a team of women who got tired of guessing. Tired of the vitamin bottle
                graveyard. Tired of being told to &apos;just listen to our bodies&apos; while every
                product on the shelf ignored what our bodies were actually doing.
              </p>
              <p>
                So we built the thing we wished existed: nutrition that moves with the cycle instead
                of against it. Grounded in clinical research, not wellness trends.
              </p>
              <p className="font-semibold text-mulberry">
                Designed by women for women who live it every month.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
