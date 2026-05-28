import { motion } from 'framer-motion'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'

const categoryColors = {
  Frontend: 'from-indigo-500/20 to-indigo-500/5 border-indigo-500/30',
  Backend: 'from-violet-500/20 to-violet-500/5 border-violet-500/30',
  Database: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30',
  DevOps: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
  Design: 'from-pink-500/20 to-pink-500/5 border-pink-500/30',
}

export default function Skills({ skills }) {
  const categories = [...new Set(skills.map((s) => s.category))]

  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Skills"
          title="Technical expertise"
          description="Core technologies I use to build reliable, user-focused products."
        />

        <div className="space-y-10">
          {categories.map((category, catIndex) => {
            const items = skills.filter((s) => s.category === category)
            const color =
              categoryColors[category] ??
              'from-slate-500/20 to-slate-500/5 border-slate-500/30'

            return (
              <div key={category}>
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-muted">
                  {category}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.05 + i * 0.04 }}
                      className={`rounded-xl border bg-gradient-to-br p-4 ${color}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{skill.name}</span>
                        <span className="text-sm font-semibold text-accent-light">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-black/20">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.15 + i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
