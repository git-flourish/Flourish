import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import WaitlistModal from './WaitlistModal.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const { pathname } = location
  const navLink = (path) =>
    `nav-link font-sans text-sm font-medium tracking-wide transition-colors ${
      pathname === path ? 'text-flamingo' : 'text-mulberry/70 hover:text-mulberry'
    }`

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="font-flourish text-2xl font-black text-flamingo tracking-tight hover:opacity-80 transition-opacity"
          >
            Flourish
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLink('/')}>
              Home
            </Link>
            <Link to="/science" className={navLink('/science')}>
              The Science
            </Link>
            <Link to="/about" className={navLink('/about')}>
              About
            </Link>
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="pulse-cta bg-flamingo text-cream font-sans font-semibold text-sm py-2.5 px-6 rounded-full hover:bg-mulberry transition-all duration-300 hover:scale-105"
            >
              Join Waitlist
            </button>
          </div>

          <button
            type="button"
            className="md:hidden text-mulberry p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-cream/95 backdrop-blur-md border-t border-flamingo/10 px-6 py-6 flex flex-col gap-5">
            <Link to="/" onClick={() => setMenuOpen(false)} className="font-sans text-base font-medium text-mulberry">
              Home
            </Link>
            <Link
              to="/science"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base font-medium text-mulberry"
            >
              The Science
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="font-sans text-base font-medium text-mulberry"
            >
              About
            </Link>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                setModalOpen(true)
              }}
              className="bg-flamingo text-cream font-sans font-semibold text-sm py-3 px-6 rounded-full w-full"
            >
              Join Waitlist
            </button>
          </div>
        )}
      </nav>

      <WaitlistModal isOpen={modalOpen} onClose={() => setModalOpen(false)} sourcePage="homepage" />
    </>
  )
}
