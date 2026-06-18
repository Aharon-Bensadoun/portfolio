import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, Github, Play } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { DeploymentStatusBadge } from '../ui/DeploymentStatusBadge'
import { VimeoEmbed } from '../ui/VimeoEmbed'
import { FEATURED_DEMO_SLUGS, PROJECTS, showRepoButton } from '../../data/projects'
import type { Lang } from '../../i18n/config'

const featuredProjects = FEATURED_DEMO_SLUGS.map(
  (slug) => PROJECTS.find((p) => p.slug === slug)!,
).filter((p) => p.videoUrl)

export const FeaturedDemos = () => {
  const { t, i18n } = useTranslation()
  const lang = (i18n.resolvedLanguage ?? 'en') as Lang

  return (
    <section id="demos" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-page mb-12 sm:mb-16">
        <SectionHeader
          eyebrow={t('demos.eyebrow')}
          title={t('demos.title')}
          subtitle={t('demos.subtitle')}
        />
      </div>

      <div className="divide-y divide-line">
        {featuredProjects.map((project, index) => {
          const videoFirst = index % 2 === 0

          return (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[50vh]"
            >
              <div
                className={`flex items-center p-4 sm:p-6 lg:p-8 xl:p-10 ${
                  videoFirst ? '' : 'lg:order-2'
                }`}
              >
                <VimeoEmbed
                  url={project.videoUrl!}
                  title={`${project.name} demo`}
                  className="w-full"
                />
              </div>

              <div
                className={`flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 lg:py-16 ${
                  videoFirst ? '' : 'lg:order-1'
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Play size={14} strokeWidth={2.5} className="text-accent-cyan" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
                    {t('demos.video_label')}
                  </span>
                  {project.deploymentStatus && (
                    <DeploymentStatusBadge status={project.deploymentStatus} />
                  )}
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-ink text-balance">
                  {project.name}
                </h3>
                <p className="mt-2 text-base sm:text-lg font-medium text-ink-muted">
                  {project.tagline[lang]}
                </p>
                <p className="mt-5 text-sm sm:text-base text-ink-muted leading-relaxed text-pretty max-w-xl">
                  {project.description[lang]}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan hover:text-accent-cyan/80 transition-colors cursor-pointer"
                    >
                      <span>{t('projects.view_demo')}</span>
                      <ExternalLink size={14} strokeWidth={2.25} />
                    </a>
                  )}
                  {project.repoUrl && showRepoButton(project.slug) && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors cursor-pointer"
                    >
                      <Github size={16} strokeWidth={2} />
                      <span>{t('projects.view_repo')}</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
