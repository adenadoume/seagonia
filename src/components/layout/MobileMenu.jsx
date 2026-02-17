import { Link } from 'react-router-dom'
import { X, Phone, Mail } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { HOTEL } from '../../constants/hotel'

const NAV_LINKS = [
  { label: 'Rooms', to: '/rooms' },
  { label: 'Amenities', to: '/amenities' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
]

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone/10">
            {/* Logo centered */}
            <div className="flex-1 flex justify-center">
              <Link
                to="/"
                className="font-serif text-xl tracking-[0.3em] uppercase font-semibold text-sea"
                onClick={onClose}
              >
                SEAGONIA
              </Link>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 p-2 text-stone hover:text-sea transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-center justify-center flex-1 gap-6 py-10 px-6">
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07, duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  onClick={onClose}
                  className="font-serif text-3xl font-semibold text-stone hover:text-sea transition-colors duration-200 tracking-wide"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Book Now button */}
          <div className="px-6 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.3 }}
            >
              <Link
                to="/book"
                onClick={onClose}
                className="btn-primary w-full flex items-center justify-center rounded-full py-4 text-base font-sans font-medium"
              >
                Book Now
              </Link>
            </motion.div>
          </div>

          {/* Contact info at bottom */}
          <motion.div
            className="px-6 pb-8 pt-2 border-t border-stone/10 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <a
              href={`tel:${HOTEL.phone}`}
              className="flex items-center gap-2 text-sm font-sans text-stone hover:text-sea transition-colors"
            >
              <Phone size={16} />
              <span>{HOTEL.phone}</span>
            </a>
            <a
              href={`mailto:${HOTEL.email}`}
              className="flex items-center gap-2 text-sm font-sans text-stone hover:text-sea transition-colors"
            >
              <Mail size={16} />
              <span>{HOTEL.email}</span>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
