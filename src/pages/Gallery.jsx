import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useSEO from '../hooks/useSEO'
import { PLACEHOLDER_IMAGES } from '../constants/hotel'
import ImageLightbox from '../components/shared/ImageLightbox'

const categories = ['All', 'Hotel', 'Rooms', 'Pool', 'Dining', 'Experiences']

const galleryImages = [
  { src: PLACEHOLDER_IMAGES.hero, category: 'Hotel', alt: 'Seagonia Hotel aerial view' },
  { src: PLACEHOLDER_IMAGES.pool, category: 'Pool', alt: 'Swimming pool' },
  { src: PLACEHOLDER_IMAGES.seaView, category: 'Hotel', alt: 'Ionian Sea view' },
  { src: PLACEHOLDER_IMAGES.roomGarden, category: 'Rooms', alt: 'Garden Room' },
  { src: PLACEHOLDER_IMAGES.roomSwimUp, category: 'Rooms', alt: 'Swim-Up Room' },
  { src: PLACEHOLDER_IMAGES.roomBalcony, category: 'Rooms', alt: 'Balcony Room' },
  { src: PLACEHOLDER_IMAGES.roomTerrace, category: 'Rooms', alt: 'Terrace Suite' },
  { src: PLACEHOLDER_IMAGES.roomSuite, category: 'Rooms', alt: 'Seagonia Suite' },
  { src: PLACEHOLDER_IMAGES.restaurant, category: 'Dining', alt: 'Galia Restaurant' },
  { src: PLACEHOLDER_IMAGES.breakfast, category: 'Dining', alt: 'Breakfast buffet' },
  { src: PLACEHOLDER_IMAGES.boatTrip, category: 'Experiences', alt: 'Boat trip on the Ionian' },
  { src: PLACEHOLDER_IMAGES.hiking, category: 'Experiences', alt: 'Hiking trails near Paleros' },
  { src: PLACEHOLDER_IMAGES.yoga, category: 'Experiences', alt: 'Outdoor yoga session' },
  { src: PLACEHOLDER_IMAGES.cooking, category: 'Experiences', alt: 'Cooking class' },
  { src: PLACEHOLDER_IMAGES.spa, category: 'Pool', alt: 'Wellness and spa area' },
  { src: PLACEHOLDER_IMAGES.fitness, category: 'Hotel', alt: 'Technogym fitness centre' },
  { src: PLACEHOLDER_IMAGES.beach, category: 'Hotel', alt: 'Sandy beach near the hotel' },
  { src: PLACEHOLDER_IMAGES.ionian, category: 'Experiences', alt: 'Ionian islands' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  useSEO({
    title: 'Gallery',
    description:
      'Browse photos of Seagonia Hotel — rooms, pool, dining, beach and experiences on the Ionian coast of Greece.',
  })

  const filtered =
    activeFilter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter)

  const filteredSrcs = filtered.map((img) => img.src)

  function openLightbox(index) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      {/* Page Hero */}
      <section
        className="relative h-[40vh] min-h-[320px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${PLACEHOLDER_IMAGES.ionian})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-stone/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === cat
                    ? 'bg-sea text-white'
                    : 'bg-sand/30 text-stone hover:bg-sand/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={`${img.src}-${img.alt}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={filteredSrcs}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % filteredSrcs.length)
        }
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + filteredSrcs.length) % filteredSrcs.length
          )
        }
      />
    </>
  )
}
