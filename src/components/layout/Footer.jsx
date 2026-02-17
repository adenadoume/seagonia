import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { HOTEL } from '../../constants/hotel'
import { subscribeNewsletter } from '../../services/api'

const QUICK_LINKS = [
  { label: 'Rooms', to: '/rooms' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
  { label: 'Book Now', to: '/book' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState('idle') // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribeStatus('loading')
    try {
      await subscribeNewsletter(email.trim())
      setSubscribeStatus('success')
      setEmail('')
    } catch {
      setSubscribeStatus('error')
    }
  }

  return (
    <footer className="bg-stone text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.3em] uppercase font-semibold text-white hover:text-sand transition-colors"
            >
              SEAGONIA
            </Link>
            <p className="font-serif text-sand italic text-sm">
              {HOTEL.tagline}
            </p>
            <p className="font-sans text-white/70 text-sm leading-relaxed">
              A boutique hotel nestled in the serene village of Pogonia, overlooking the crystal-clear
              waters of Paleros. A timeless retreat where the Ionian Sea meets Greek hospitality.
            </p>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="font-sans text-sm font-medium text-sand mb-2">
                Stay in the loop
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm font-sans text-white placeholder-white/40 focus:outline-none focus:border-sand focus:bg-white/15 transition-colors"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                  className="btn-outline rounded-md px-4 py-2 text-sm font-sans font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribeStatus === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
              </form>
              {subscribeStatus === 'success' && (
                <p className="text-sand text-xs font-sans mt-2">Thank you for subscribing!</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-400 text-xs font-sans mt-2">Something went wrong. Please try again.</p>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-sand tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-lg font-semibold text-sand tracking-wide">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${HOTEL.phone}`}
                  className="flex items-start gap-3 text-sm font-sans text-white/70 hover:text-white transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-sand" />
                  <span>{HOTEL.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HOTEL.email}`}
                  className="flex items-start gap-3 text-sm font-sans text-white/70 hover:text-white transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-sand" />
                  <span>{HOTEL.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm font-sans text-white/70">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-sand" />
                  <span>{HOTEL.address}</span>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-4 mt-2">
              {HOTEL.social?.instagram && (
                <a
                  href={HOTEL.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/60 hover:text-sand transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {HOTEL.social?.facebook && (
                <a
                  href={HOTEL.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/60 hover:text-sand transition-colors"
                >
                  <Facebook size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/50">
            &copy; 2025 Seagonia Hotel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/cookies"
              className="font-sans text-xs text-white/50 hover:text-white/80 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
