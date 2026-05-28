import { useMemo } from 'react'
import portfolioData from '../data/portfolio.json'

export function usePortfolio() {
  return useMemo(() => portfolioData, [])
}

export function useProjectStats(projects) {
  return useMemo(() => {
    const completed = projects.filter((p) => p.status === 'completed').length
    const ongoing = projects.filter((p) => p.status === 'ongoing').length
    const planned = projects.filter((p) => p.status === 'planned').length

    const categories = projects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1
      return acc
    }, {})

    return {
      completed,
      ongoing,
      planned,
      total: projects.length,
      categoryData: Object.entries(categories).map(([name, value]) => ({
        name,
        value,
      })),
      statusData: [
        { name: 'Completed', value: completed, fill: '#22d3ee' },
        { name: 'Ongoing', value: ongoing, fill: '#818cf8' },
        { name: 'Planned', value: planned, fill: '#64748b' },
      ].filter((d) => d.value > 0),
    }
  }, [projects])
}
