import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { MapPin, Mail } from 'lucide-react'

export default function About({ profile }) {
  return (
    <AnimatedSection id="about" className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeader
          label="About"
          title="Portfolio mission"
          description="A concise view of how this evidence portfolio is structured and why it matters."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              {profile.about}
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="glass glow-ring rounded-2xl p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-accent-light">
                Details
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                  <span className="text-muted">{profile.location}</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-light" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-muted transition-colors hover:text-white"
                  >
                    {profile.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'SOC domains covered', value: '8' },
                { label: 'Core evidence tracks', value: '20+' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface-card p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-gradient">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
