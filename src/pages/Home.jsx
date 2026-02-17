import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import useSEO from '../hooks/useSEO'
import { EXPERIENCES, PLACEHOLDER_IMAGES } from '../constants/hotel'
import SectionHeader from '../components/shared/SectionHeader'
import Hero from '../components/home/Hero'
import BookingBar from '../components/home/BookingBar'
import RoomHighlights from '../components/home/RoomHighlights'
import AmenitiesStrip from '../components/home/AmenitiesStrip'
import WhyDirectBook from '../components/home/WhyDirectBook'
import ContactForm from '../components/contact/ContactForm'

const testimonials = [
  {
    quote:
      'Waking up to the sound of the Ionian Sea just steps from our room was pure magic. The staff made us feel like family from the moment we arrived.',
    name: 'Sophie & Laurent',
    country: 'France',
  },
  {
    quote:
      'Paleros is one of Greece\'s best-kept secrets, and Seagonia is the perfect base to explore it. The swim-up room was an absolute dream.',
    name: 'James W.',
    country: 'United Kingdom',
  },
  {
    quote:
      'We came for three nights and wished we had booked a week. The farm-to-table breakfast, the boat trips, the sunsets — everything was unforgettable.',
    name: 'Anna & Markus',
    country: 'Germany',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
}

export default function Home() {
  useSEO({
    title: 'Boutique Hotel in Paleros',
    description:
      'Seagonia Hotel — Your Corner by the Sea. A boutique 58-room hotel in Pogonia village near Paleros, on the Ionian coast of Greece.',
  })

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Booking Bar */}
      <BookingBar />

      {/* Rooms Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="ACCOMMODATION"
            title="Our Rooms"
            subtitle="58 rooms designed with simplicity and comfort in mind, each a quiet retreat by the Ionian Sea."
          />
          <div className="mt-12">
            <RoomHighlights />
          </div>
        </div>
      </section>

      {/* Amenities Strip */}
      <AmenitiesStrip />

      {/* Experiences Section */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="EXPERIENCES"
            title="Discover the Ionian"
            subtitle="From boat trips to cooking classes, make every day an adventure."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="card group overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={PLACEHOLDER_IMAGES[exp.image]}
                    alt={exp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-stone">{exp.name}</h3>
                  <p className="text-stone/60 text-sm mt-1 line-clamp-2">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/amenities" className="btn-outline-dark">
              All Amenities & Experiences
            </Link>
          </div>
        </div>
      </section>

      {/* Why Book Direct */}
      <WhyDirectBook />

      {/* Testimonials */}
      <section className="section-padding bg-stone text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="GUEST STORIES"
            title="What Our Guests Say"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative"
              >
                <Quote className="w-8 h-8 text-sand/60 mb-4" />
                <p className="text-white/90 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="font-medium text-sand">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Contact Us"
            subtitle="Have a question or want to plan your stay? We would love to hear from you."
          />
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
