import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'Rooms', to: '/rooms' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl tracking-[0.3em] uppercase font-semibold transition-colors duration-300 ${
                scrolled ? 'text-sea' : 'text-white'
              }`}
            >
              SEAGONIA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-sans font-medium transition-colors duration-300 hover:text-sea ${
                    scrolled ? 'text-stone' : 'text-white hover:text-white/75'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right side: Language + Book Now + Hamburger */}
            <div className="flex items-center gap-4">
              {/* Language Toggle (visual only) */}
              <div
                className={`hidden lg:flex items-center gap-1 text-xs font-sans font-medium select-none transition-colors duration-300 ${
                  scrolled ? 'text-stone' : 'text-white'
                }`}
              >
                <span className="cursor-pointer hover:opacity-75">EN</span>
                <span className="opacity-50">|</span>
                <span className="cursor-pointer hover:opacity-75 opacity-60">GR</span>
              </div>

              {/* Book Now */}
              <Link
                to="/book"
                className="hidden lg:inline-flex btn-primary rounded-full px-6 py-2 text-sm font-sans font-medium"
              >
                Book Now
              </Link>

              {/* Hamburger (mobile) */}
              <button
                className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
                  scrolled ? 'text-stone hover:text-sea' : 'text-white hover:text-white/75'
                }`}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
