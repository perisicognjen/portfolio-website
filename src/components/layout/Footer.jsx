import { Code2, Link2, MessageCircle } from 'lucide-react'

const iconMap = {
  github: Code2,
  linkedin: Link2,
  twitter: MessageCircle,
}

export default function Footer({ profile }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-elevated">
      <div className="container-narrow flex flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex gap-4">
          {profile.social.map((item) => {
            const Icon = iconMap[item.icon] ?? Link2
            return (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-muted transition-colors hover:bg-white/5 hover:text-white"
                aria-label={item.platform}
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
