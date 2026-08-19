import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'

const team = [
  { name: 'Liora Kubala', role: 'CEO and Head of Formulation', photo: '/team/liora-kubala.png' },
  { name: 'Ana Paula Albin', role: 'CMO', photo: '/team/ana-paula-albin.png' },
  { name: 'Melina Lopatin', role: 'COO', photo: '/team/melina-lopatin.png' },
]

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
                Flourish was born from a fact that frustrated all of us: women in health have been
                misstudied for decades. Most products in the supplement market were built for men,
                then handed to women as if our bodies worked the same way.
              </p>
              <p>
                When we came together to build something meaningful, we realized this wasn&apos;t
                just a market gap, it was something we had all lived. Each of us felt unwell at
                different points throughout our cycles, and instead of ignoring it the way the
                industry always had, we decided to actually look at it.
              </p>
              <p>
                Women go through four distinct phases, and we feel every one of them. So instead of
                building one more generic formula, we built four, one for each phase, designed
                around what our bodies actually need in that moment.
              </p>
              <p>
                Flourish is the supplement we always wished existed. One made for the body we
                actually have, not the one the industry assumed we had.
              </p>
              <p>
                This isn&apos;t just a product to us. It&apos;s the thing we needed and couldn&apos;t
                find, made real.
              </p>
              <p className="font-semibold text-mulberry">
                Built by women, for women.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="team" className="py-24 md:py-32 bg-flamingo-light">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">
              The People
            </p>
            <h2 className="font-flourish text-[clamp(2rem,5vw,4rem)] font-bold text-mulberry">
              The <span className="text-flamingo italic">team.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 justify-items-center">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1} className="w-full flex justify-center">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={`${member.photo}?v=3`}
                    alt={member.name}
                    className="block w-44 h-44 md:w-52 md:h-52 rounded-full object-cover object-center mb-5"
                  />
                  <p className="font-flourish font-bold text-lg md:text-xl text-lavender">{member.name}</p>
                  <p className="font-sans text-sm text-lavender/80 mt-1">{member.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
