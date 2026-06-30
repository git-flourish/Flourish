import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'

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
          © {year} Flourish Inc. All rights reserved.
        </p>

        <div className="flex items-center gap-8">
          <Link to="/" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            Home
          </Link>
          <Link to="/science" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            Our Science
          </Link>
          <Link to="/about" className="font-sans text-xs uppercase tracking-widest text-cream/70 hover:text-cream transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/now_flourish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @now_flourish"
            className="text-cream/70 hover:text-cream transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.linkedin.com/company/nowflourish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn @nowflourish"
            className="text-cream/70 hover:text-cream transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
