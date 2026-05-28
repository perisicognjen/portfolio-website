import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function AnimatedSection({
  children,
  className = '',
  id,
  delay = 0,
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.section>
  )
}
