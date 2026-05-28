import { motion } from 'framer-motion'

export default function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {label && (
        <motion.span
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent-light"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-base leading-relaxed text-muted"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
