import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-flamingo overflow-hidden">
      <div className="py-10 overflow-hidden border-b border-cream/20">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-12 pr-12">
            {Array(8).fill(null).map((_, i) => (
              <span
                key={i}
                className="font-flourish text-[clamp(5rem,14vw,12rem)] font-black leading-none select-none"
                style={{ color: i % 2 === 0 ? 'rgba(250,240,230,1)' : 'rgba(250,240,230,0.3)' }}
              >
                FLOURISH
              </span>
            ))}
            {Array(8).fill(null).map((_, i) => (
              <span
                key={`b-${i}`}
                className="font-flourish text-[clamp(5rem,14vw,12rem)] font-black leading-none select-none"
                style={{ color: i % 2 === 0 ? 'rgba(250,240,230,1)' : 'rgba(250,240,230,0.3)' }}
              >
                FLOURISH
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-sans text-xs uppercase tracking-widest text-cream/60">
          © {year} Flourish Health, Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <Link to="/" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            Home
          </Link>
          <Link to="/science" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            Our Science
          </Link>
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            Privacy
          </a>
          <a href="#" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            Terms
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 hover:text-cream transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/70 hover:text-cream transition-colors"
          >
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
