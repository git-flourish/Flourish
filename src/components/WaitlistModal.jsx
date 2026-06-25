import { useState, useEffect } from 'react'
import { X, ArrowRight, Sparkles } from 'lucide-react'
import { submitWaitlistEntry } from '../api/waitlist.js'

export default function WaitlistModal({ isOpen, onClose, sourcePage = 'homepage' }) {
  const [step, setStep] = useState('form')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleClose = () => {
    setStep('form')
    setEmail('')
    setFirstName('')
    setError('')
    onClose()
  }

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setLoading(true)
    setError('')
    try {
      await submitWaitlistEntry({
        email: email.toLowerCase().trim(),
        firstName: firstName.trim() || undefined,
        sourcePage,
      })
      setStep('success')
    } catch {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-mulberry/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg mx-4 split-reveal">
        {step === 'form' ? (
          <div className="bg-flamingo rounded-2xl p-8 md:p-12 shadow-2xl">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 text-cream/70 hover:text-cream transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <div className="orbital-ring w-64 h-64 -top-16 -right-16 opacity-30" />

            <p className="text-cream/80 text-xs uppercase tracking-widest font-sans mb-3">
              Early Access
            </p>
            <h2 className="font-flourish text-4xl md:text-5xl font-black text-cream leading-tight mb-3">
              Join the
              <br />
              Inner Circle
            </h2>
            <p className="text-cream/80 font-sans text-base mb-8 leading-relaxed">
              Be first to know when Flourish launches. Four formulas. Built for every phase of you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-cream/40 focus:border-cream text-cream placeholder-cream/50 text-lg py-3 outline-none font-sans transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  className="w-full bg-transparent border-b-2 border-cream/40 focus:border-cream text-cream placeholder-cream/50 text-lg py-3 outline-none font-sans transition-colors"
                  required
                />
              </div>
              {error && <p className="text-cream/80 text-sm font-sans">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full bg-cream text-flamingo font-sans font-semibold text-base py-4 px-8 rounded-full hover:bg-flamingo-light transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-60"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-flamingo/40 border-t-flamingo rounded-full animate-spin" />
                ) : (
                  <>
                    Reserve My Spot
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <p className="text-cream/50 text-xs font-sans mt-5 text-center">
              No spam. Unsubscribe anytime. We respect your inbox like we respect your cycle.
            </p>
          </div>
        ) : (
          <div className="bg-flamingo rounded-2xl p-8 md:p-12 shadow-2xl text-center">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-5 right-5 text-cream/70 hover:text-cream transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-cream/20 flex items-center justify-center">
                <Sparkles size={28} className="text-cream" />
              </div>
            </div>
            <h2 className="font-flourish text-4xl md:text-5xl font-black text-cream mb-4">
              You&apos;re in!
            </h2>
            <p className="text-cream/80 font-sans text-base leading-relaxed mb-8">
              {firstName ? `Welcome, ${firstName}! ` : ''}
              We&apos;ll reach out the moment Flourish is ready to launch. Your cycle deserves this.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="bg-cream text-flamingo font-sans font-semibold text-sm py-3 px-8 rounded-full hover:bg-flamingo-light transition-all duration-300"
            >
              Back to Flourish
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
