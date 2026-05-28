import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

export default function Contact({ contact, profile }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contact.submitEndpoint) {
      // Wire to your API when ready
      fetch(contact.submitEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    }
    setSubmitted(true)
  }

  return (
    <AnimatedSection id="contact" className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeader
          label="Contact"
          title={contact.heading}
          description={contact.subheading}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="glass glow-ring rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <CheckCircle className="h-12 w-12 text-cyan-400" />
                <p className="mt-4 font-display text-lg font-semibold text-white">
                  Message sent!
                </p>
                <p className="mt-2 text-sm text-muted">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition-colors focus:border-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition-colors focus:border-accent"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-2.5 text-white outline-none transition-colors focus:border-accent"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send message
                </Button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-muted">
              Prefer email? Reach me directly at{' '}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-accent-light hover:text-white"
              >
                {profile.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-muted">
              Based in {profile.location}. Available for remote and hybrid roles.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
