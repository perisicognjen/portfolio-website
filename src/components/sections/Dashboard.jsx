import { motion } from 'framer-motion'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeader from '../ui/SectionHeader'
import { useProjectStats } from '../../hooks/usePortfolio'

const CHART_COLORS = ['#22d3ee', '#818cf8', '#a78bfa', '#34d399', '#f472b6', '#fb923c']

function ChartCard({ title, subtitle, children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`glass glow-ring overflow-hidden rounded-2xl p-5 sm:p-6 ${className}`}
    >
      <div className="mb-5">
        <h3 className="font-display text-base font-semibold text-white">{title}</h3>
        {subtitle && <p className="mt-1 text-xs text-muted">{subtitle}</p>}
      </div>
      {children}
    </motion.div>
  )
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-border bg-surface-card px-3 py-2 shadow-xl">
      <p className="text-xs text-muted">{label ?? payload[0].name}</p>
      <p className="text-sm font-semibold text-white">
        {payload[0].value}
        {payload[0].unit ?? (typeof payload[0].value === 'number' && payload[0].name?.includes('%') ? '%' : '')}
      </p>
    </div>
  )
}

function SkillTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const item = payload[0].payload
  return (
    <div className="rounded-lg border border-border bg-surface-card px-3 py-2 shadow-xl">
      <p className="text-sm font-semibold text-white">{item.name}</p>
      <p className="text-xs text-accent-light">{item.level}% proficiency</p>
    </div>
  )
}

export default function Dashboard({ skills, projects }) {
  const stats = useProjectStats(projects)

  const topSkills = [...skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, 8)
    .map((s) => ({ name: s.name, level: s.level, fill: '#818cf8' }))

  const radialSkills = topSkills.slice(0, 6).map((s, i) => ({
    ...s,
    fill: CHART_COLORS[i % CHART_COLORS.length],
  }))

  const totalStatus = stats.completed + stats.ongoing + stats.planned

  return (
    <AnimatedSection id="dashboard" className="section-padding bg-surface-elevated/50">
      <div className="container-narrow">
        <SectionHeader
          label="Analytics"
          title="Statistics dashboard"
          description="Visual overview of skills, project mix, and delivery status."
        />

        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Total projects', value: stats.total, accent: 'text-white' },
            { label: 'Completed', value: stats.completed, accent: 'text-cyan-400' },
            { label: 'Ongoing', value: stats.ongoing, accent: 'text-indigo-400' },
            { label: 'Planned', value: stats.planned, accent: 'text-slate-400' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface-card p-4 text-center sm:p-5"
            >
              <p className={`font-display text-2xl font-bold sm:text-3xl ${item.accent}`}>
                {item.value}
              </p>
              <p className="mt-1 text-xs text-muted">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <ChartCard
            title="Skill levels"
            subtitle="Top technologies by proficiency"
            className="lg:col-span-2"
          >
            <div className="h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topSkills}
                  layout="vertical"
                  margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
                >
                  <defs>
                    <linearGradient id="skillGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={88}
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <Tooltip content={<SkillTooltip />} cursor={{ fill: 'rgba(99,102,241,0.08)' }} />
                  <Bar
                    dataKey="level"
                    radius={[0, 6, 6, 0]}
                    maxBarSize={22}
                    animationDuration={1200}
                    animationEasing="ease-out"
                  >
                    {topSkills.map((_, index) => (
                      <Cell key={`cell-${index}`} fill="url(#skillGradient)" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </ChartCard>

          <ChartCard title="Project categories" subtitle="Distribution by type">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <defs>
                    {stats.categoryData.map((_, i) => (
                      <linearGradient
                        key={`grad-${i}`}
                        id={`pieGrad${i}`}
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop offset="0%" stopColor={CHART_COLORS[i % CHART_COLORS.length]} stopOpacity={1} />
                        <stop offset="100%" stopColor={CHART_COLORS[i % CHART_COLORS.length]} stopOpacity={0.5} />
                      </linearGradient>
                    ))}
                  </defs>
                  <Pie
                    data={stats.categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={88}
                    paddingAngle={3}
                    dataKey="value"
                    animationDuration={1000}
                  >
                    {stats.categoryData.map((_, index) => (
                      <Cell key={`pie-${index}`} fill={`url(#pieGrad${index})`} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="mt-2 flex flex-wrap justify-center gap-3">
              {stats.categoryData.map((item, i) => (
                <li key={item.name} className="flex items-center gap-1.5 text-xs text-muted">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }}
                  />
                  {item.name} ({item.value})
                </li>
              ))}
            </ul>
          </ChartCard>

          <ChartCard title="Project status" subtitle="Completed vs ongoing vs planned">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={92}
                    paddingAngle={4}
                    dataKey="value"
                    animationDuration={1000}
                  >
                    {stats.statusData.map((entry, index) => (
                      <Cell key={`status-${index}`} fill={entry.fill} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 text-center">
              <p className="text-2xl font-bold text-white">{totalStatus}</p>
              <p className="text-xs text-muted">Total tracked projects</p>
            </div>
          </ChartCard>

          <ChartCard
            title="Skill radar"
            subtitle="Radial view of core strengths"
            className="lg:col-span-2"
          >
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="18%"
                  outerRadius="95%"
                  data={radialSkills}
                  startAngle={180}
                  endAngle={-180}
                >
                  <RadialBar
                    background={{ fill: '#1e1e2a' }}
                    dataKey="level"
                    cornerRadius={6}
                    animationDuration={1400}
                  />
                  <Tooltip content={<SkillTooltip />} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              {radialSkills.map((s) => (
                <span key={s.name} className="text-xs text-muted">
                  <span className="font-medium text-white">{s.name}</span> — {s.level}%
                </span>
              ))}
            </div>
          </ChartCard>
        </div>
      </div>
    </AnimatedSection>
  )
}
