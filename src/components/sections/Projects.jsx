import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import ProjectCard from '../ui/ProjectCard'

export default function Projects({ projects }) {
  const completed = projects.filter((p) => p.status === 'completed')
  const planned = projects.filter((p) => p.status === 'planned')

  return (
    <AnimatedSection id="projects" className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeader
          label="Portfolio"
          title="Projects"
          description="Selected work — completed deliveries and ideas on the roadmap."
        />

        {completed.length > 0 && (
          <div className="mb-16">
            <h3 className="mb-6 font-display text-lg font-semibold text-white">
              Completed
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {completed.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {planned.length > 0 && (
          <div>
            <h3 className="mb-6 font-display text-lg font-semibold text-white">
              Planned
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {planned.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  )
}
