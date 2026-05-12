import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight, ExternalLink, Github, Star } from 'lucide-react'
import type { Project } from '../../data/projects'
import type { Lang } from '../../i18n/config'

const ACCENT_GRADIENTS: Record<NonNullable<Project['accent']>, string> = {
  cyan: 'from-accent-cyan/30 via-accent-cyan/10 to-transparent',
  violet: 'from-accent-violet/30 via-accent-violet/10 to-transparent',
  pink: 'from-pink-400/30 via-pink-400/10 to-transparent',
  amber: 'from-amber-400/25 via-amber-400/8 to-transparent',
  emerald: 'from-emerald-400/25 via-emerald-400/8 to-transparent',
}

const ACCENT_DOTS: Record<NonNullable<Project['accent']>, string> = {
  cyan: 'bg-accent-cyan',
  violet: 'bg-accent-violet',
  pink: 'bg-pink-400',
  amber: 'bg-amber-400',
  emerald: 'bg-emerald-400',
}

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { t, i18n } = useTranslation()
  const lang = (i18n.resolvedLanguage ?? 'en') as Lang
  const accent = project.accent ?? 'cyan'

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className={`group relative card overflow-hidden p-6 sm:p-7 flex flex-col ${
        project.highlight ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className={`pointer-events-none absolute -top-32 -right-16 h-64 w-64 rounded-full bg-gradient-radial bg-gradient-to-br ${ACCENT_GRADIENTS[accent]} blur-3xl opacity-60 transition-opacity duration-500 group-hover:opacity-90`}
        aria-hidden="true"
      />

      <header className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className={`h-2 w-2 rounded-full ${ACCENT_DOTS[accent]}`} aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            {project.category.replace('_', ' ')}
          </span>
          {project.highlight && (
            <span className="inline-flex items-center gap-1 chip">
              <Star size={10} strokeWidth={2.5} className="text-accent-cyan" />
              {t('projects.highlight')}
            </span>
          )}
        </div>
      </header>

      <h3 className="relative mt-4 font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink">
        {project.name}
      </h3>
      <p className="relative mt-1 text-sm font-medium text-ink-muted">{project.tagline[lang]}</p>
      <p className="relative mt-4 text-sm sm:text-[15px] text-ink-muted leading-relaxed text-pretty">
        {project.description[lang]}
      </p>

      {project.metrics && project.highlight && (
        <div className="relative mt-5 grid grid-cols-3 gap-3 border-t border-line-subtle pt-5">
          {project.metrics.map((m) => (
            <div key={m.label.en}>
              <div className="font-display text-lg font-semibold text-ink tabular-nums">
                {m.value}
              </div>
              <div className="mt-0.5 text-2xs uppercase tracking-wider text-ink-faint leading-tight">
                {m.label[lang]}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, project.highlight ? 8 : 5).map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>

      <footer className="relative mt-6 pt-5 border-t border-line-subtle flex items-center justify-between gap-3">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ink transition-colors cursor-pointer"
          >
            <Github size={14} strokeWidth={2} />
            <span>{t('projects.view_repo')}</span>
          </a>
        ) : (
          <span />
        )}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors cursor-pointer"
          >
            <span>{t('projects.view_demo')}</span>
            <ExternalLink size={13} strokeWidth={2.25} />
          </a>
        ) : (
          <ArrowUpRight
            size={18}
            strokeWidth={1.75}
            className="text-ink-faint transition-all duration-300 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[270deg] rtl:group-hover:-translate-x-0.5 rtl:group-hover:translate-y-0"
          />
        )}
      </footer>
    </motion.article>
  )
}
