import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import useSEO from '../hooks/useSEO'
import { HOTEL, PLACEHOLDER_IMAGES } from '../constants/hotel'
import ContactForm from '../components/contact/ContactForm'

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description:
      'Get in touch with Seagonia Hotel. Phone, email, address and contact form for reservations and enquiries.',
  })

  const mapsEmbedUrl = import.meta.env.VITE_GOOGLE_MAPS_EMBED

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative h-[40vh] min-h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${PLACEHOLDER_IMAGES.seaView})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-stone/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl text-stone mb-2">
                Send Us a Message
              </h2>
              <p className="text-stone/60 mb-8">
                Fill out the form below and our team will respond within 24
                hours.
              </p>
              <ContactForm />
            </motion.div>

            {/* Right: Hotel Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card p-8">
                <h3 className="font-serif text-2xl text-stone mb-6">
                  Hotel Details
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sea/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-sea" />
                    </div>
                    <div>
                      <p className="text-stone/60 text-sm">Phone</p>
                      <a
                        href={`tel:${HOTEL.contact.phone}`}
                        className="text-stone font-medium hover:text-sea transition-colors"
                      >
                        {HOTEL.contact.phone || '+30 000 000 0000'}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sea/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-sea" />
                    </div>
                    <div>
                      <p className="text-stone/60 text-sm">Email</p>
                      <a
                        href={`mailto:${HOTEL.contact.email}`}
                        className="text-stone font-medium hover:text-sea transition-colors"
                      >
                        {HOTEL.contact.email || 'info@seagonia.com'}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sea/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-sea" />
                    </div>
                    <div>
                      <p className="text-stone/60 text-sm">Address</p>
                      <p className="text-stone font-medium">
                        {HOTEL.contact.address || 'Pogonia, Paleros 300 04, Greece'}
                      </p>
                    </div>
                  </div>

                  {/* Reception Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sea/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-sea" />
                    </div>
                    <div>
                      <p className="text-stone/60 text-sm">Reception Hours</p>
                      <p className="text-stone font-medium">
                        Daily 7:00 &ndash; 23:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Small Map */}
                <div className="mt-8 rounded-xl overflow-hidden">
                  {mapsEmbedUrl ? (
                    <iframe
                      src={mapsEmbedUrl}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Seagonia Hotel location"
                    />
                  ) : (
                    <div className="w-full h-[200px] bg-sand/30 flex items-center justify-center">
                      <p className="text-stone/40 text-sm">Map</p>
                    </div>
                  )}
                </div>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-stone/10">
                  <p className="text-stone/60 text-sm mb-3">Follow us</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={HOTEL.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-stone/5 rounded-full flex items-center justify-center hover:bg-sea/10 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-stone/70" />
                    </a>
                    <a
                      href={HOTEL.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-stone/5 rounded-full flex items-center justify-center hover:bg-sea/10 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-stone/70" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
