const styles = {
  completed: 'bg-cyan-500/15 text-cyan-300 ring-cyan-500/30',
  ongoing: 'bg-indigo-500/15 text-indigo-300 ring-indigo-500/30',
  planned: 'bg-slate-500/15 text-slate-300 ring-slate-500/30',
}

const labels = {
  completed: 'Completed',
  ongoing: 'Ongoing',
  planned: 'Planned',
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[status] ?? styles.planned}`}
    >
      {labels[status] ?? status}
    </span>
  )
}
