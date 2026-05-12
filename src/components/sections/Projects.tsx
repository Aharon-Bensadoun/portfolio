import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import { PROJECTS, type ProjectCategory } from '../../data/projects'

type FilterKey = 'all' | ProjectCategory

const FILTERS: FilterKey[] = ['all', 'ai_platform', 'healthcare', 'ecommerce', 'tools', 'religious']

export const Projects = () => {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = useMemo(() => {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)
    return [...list].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0))
  }, [filter])

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      <div className="mb-8 flex flex-wrap items-center gap-2" role="tablist" aria-label="Project filters">
        {FILTERS.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                active
                  ? 'border-ink/20 bg-ink text-bg'
                  : 'border-line bg-bg-card/40 text-ink-muted hover:text-ink hover:border-line-strong'
              }`}
              style={{ minHeight: 40 }}
            >
              {t(`projects.filters.${f}`)}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
