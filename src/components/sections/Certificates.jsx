import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { assetUrl } from '../../utils/assets'

export default function Certificates({ certificates }) {
  return (
    <AnimatedSection id="certificates" className="section-padding">
      <div className="container-narrow">
        <SectionHeader
          label="Credentials"
          title="Certificates"
          description="Professional certifications and completed programs."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => {
            const img = assetUrl(cert.image)

            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-2xl border border-border bg-surface-card transition-shadow hover:glow-ring"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-indigo-900/40 to-violet-900/30">
                  {img ? (
                    <img
                      src={img}
                      alt={cert.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Award className="h-16 w-16 text-white/15" />
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium text-accent-light">{cert.date}</p>
                  <h3 className="mt-1 font-display text-base font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light hover:text-white"
                    >
                      Verify credential
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
