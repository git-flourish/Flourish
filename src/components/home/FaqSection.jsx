import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import ScrollReveal from '../ScrollReveal.jsx'

const faqs = [
  {
    question: 'What is Flourish?',
    answer:
      "Flourish is a daily supplement built around the four phases of a woman's menstrual cycle. Four evidence-backed formulas, one for each phase, delivered in a single monthly box aligned to your cycle.",
  },
  {
    question: 'How does Flourish work?',
    intro: 'Three steps.',
    steps: [
      'Order your pack.',
      'Take the first sachet when your period starts.',
      'The following day, take the next sachet in the stack. Your pack is pre-sequenced to match a regular cycle, so you just work through it in order. No tracking, no guessing.',
    ],
  },
  {
    question: 'How can I purchase Flourish?',
    answer:
      "Flourish isn't available yet. We're finishing formulation and opening pre-sales soon. Join the Waitlist for exclusive launch pricing and first access!",
  },
  {
    question: 'What do I get by joining the Waitlist?',
    answer:
      'Founder updates as we build, a free cycle guide, invites to community events, exclusive launch pricing, and early access ahead of everyone else.',
  },
  {
    question: 'Who is Flourish for?',
    answer:
      "Women 18 to 40 with regular cycles who want a daily supplement that truly supports them. Irregular cycle support is on our roadmap. Join our community to hear when it's ready.",
  },
  {
    question: 'How is Flourish different from a regular multivitamin?',
    answer:
      'Most multivitamins provide the same nutrients in the same amounts every day, no matter where you are in your cycle. Flourish provides a monthly pack with four unique formulations, one for each phase, so your nutrition changes as your body does.',
  },
  {
    question: 'Do I really need a different formula for every phase of my cycle?',
    answer:
      'Your hormones shift four times a month. Your supplement should too. Each Flourish formula matches what that phase demands: recovery during your drain phase, metabolism support as you rise, stress resilience at your peak, sleep support through the crash.',
  },
  {
    question: 'Is Flourish backed by science?',
    answer: 'Yes. Our formulas are informed by research studies on women.',
  },
  {
    question: 'When will Flourish launch?',
    answer: "Soon! We're aiming to launch in early 2027. The community members hear the date first!",
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 md:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-mulberry/50 mb-3">
            Questions
          </p>
          <h2 className="font-flourish text-[clamp(2rem,5vw,4rem)] font-bold text-mulberry">
            FAQ<span className="text-flamingo italic">s</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            const panelId = `faq-panel-${i}`
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-mulberry/10 shadow-sm p-6 md:p-8"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  id={`faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="font-flourish font-bold text-lg md:text-xl text-mulberry leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-flamingo text-cream' : 'bg-flamingo-light text-flamingo'
                    }`}
                  >
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-5 font-sans text-base text-mulberry/60 leading-relaxed">
                      {faq.steps ? (
                        <>
                          <p className="mb-5">{faq.intro}</p>
                          <ol className="flex flex-col gap-5">
                            {faq.steps.map((step, n) => (
                              <li key={n} className="flex items-start gap-4">
                                <span className="w-8 h-8 rounded-full bg-flamingo text-cream font-sans text-sm font-semibold flex items-center justify-center flex-shrink-0">
                                  {n + 1}
                                </span>
                                <span className="pt-1">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
