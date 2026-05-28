import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import ProjectCard from '../ui/ProjectCard'

export default function OngoingProjects({ projects }) {
  const ongoing = projects.filter((p) => p.status === 'ongoing')

  if (ongoing.length === 0) return null

  return (
    <AnimatedSection id="ongoing" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="In progress"
          title="Ongoing projects"
          description="Active builds with live progress — updated as milestones ship."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {ongoing.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
