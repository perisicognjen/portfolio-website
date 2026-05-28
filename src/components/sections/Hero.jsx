import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import Button from '../ui/Button'
import { cvUrl } from '../../utils/assets'

export default function Hero({ profile, cv }) {
  const cvLink = cvUrl(cv.filename)

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="container-narrow relative z-10 section-padding !pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            {profile.availability}
          </motion.span>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">{profile.name}</span>
          </h1>

          <p className="mt-4 font-display text-xl font-medium text-indigo-200/90 sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {cvLink && (
              <Button href={cvLink} variant="primary">
                <Download className="h-4 w-4" />
                {cv.label}
              </Button>
            )}
            <Button href="#contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact me
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center gap-2 text-sm text-muted"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
