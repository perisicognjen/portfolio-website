import { motion } from 'framer-motion'

export default function ProgressBar({ value = 0, label }) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className="w-full">
      <div className="mb-1.5 flex justify-between text-xs">
        <span className="text-muted">{label ?? 'Progress'}</span>
        <span className="font-medium text-accent-light">{clamped}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
      </div>
    </div>
  )
}
