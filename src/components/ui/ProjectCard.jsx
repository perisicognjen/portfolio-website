import { motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'
import StatusBadge from './StatusBadge'
import ProgressBar from './ProgressBar'
import { projectImage } from '../../utils/assets'

const placeholderGradients = [
  'from-indigo-600/40 to-violet-800/40',
  'from-cyan-600/30 to-indigo-800/40',
  'from-violet-600/30 to-fuchsia-800/30',
]

function hashIndex(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h += str.charCodeAt(i)
  return h % placeholderGradients.length
}

export default function ProjectCard({ project, index = 0 }) {
  const img = projectImage(project)
  const gradient = placeholderGradients[hashIndex(project.id)]

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface-card transition-shadow hover:glow-ring"
    >
      <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${gradient}`}>
        {img ? (
          <img
            src={img}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-display text-4xl font-bold text-white/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute right-3 top-3">
          <StatusBadge status={project.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="text-xs font-medium text-accent-light">{project.category}</span>
        <h3 className="mt-1 font-display text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.status === 'ongoing' && project.progress != null && (
          <div className="mt-4">
            <ProgressBar value={project.progress} />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-3 border-t border-border pt-4">
          {project.link && (
            <a
              href={project.link}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white"
            >
              <Code2 className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
