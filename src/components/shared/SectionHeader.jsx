import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <>
          <p
            className={`font-sans font-medium text-sm uppercase tracking-[0.2em] ${
              light ? 'text-sea-light' : 'text-sea'
            }`}
          >
            {eyebrow}
          </p>
          <div
            className={`w-12 h-0.5 bg-sand mt-2 ${centered ? 'mx-auto' : ''}`}
          />
        </>
      )}

      {title && (
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl mt-3 ${
            light ? 'text-white' : 'text-stone'
          }`}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={`text-lg mt-4 max-w-2xl ${
            light ? 'text-white/70' : 'text-stone/70'
          } ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
