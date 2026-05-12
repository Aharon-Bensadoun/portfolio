import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { SITE_CONFIG } from '../../data/config'

export const About = () => {
  const { t } = useTranslation()

  return (
    <Section id="about">
      <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-3 space-y-5 text-base sm:text-lg text-ink-muted leading-relaxed text-pretty">
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p className="text-ink">{t('about.p3')}</p>

          <div className="flex flex-wrap gap-2 pt-4">
            <span className="chip">{t('about.tag_role')}</span>
            <span className="chip">{t('about.tag_focus')}</span>
            <span className="chip">{t('about.tag_methodology')}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 lg:sticky lg:top-24"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-cyan/20 via-accent-violet/15 to-transparent rounded-3xl blur-2xl" aria-hidden="true" />
            <div className="relative card overflow-hidden aspect-[4/5]">
              {SITE_CONFIG.introVideo ? (
                <video
                  src={SITE_CONFIG.introVideo}
                  className="h-full w-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                />
              ) : SITE_CONFIG.avatar ? (
                <img
                  src={SITE_CONFIG.avatar}
                  alt={t('about.title')}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <PlaceholderPortrait />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  // {t('about.video_caption')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

const PlaceholderPortrait = () => (
  <div className="relative h-full w-full bg-gradient-to-br from-bg-elevated via-bg-surface to-bg-card">
    <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
    <div className="absolute inset-0 grid place-items-center">
      <div className="text-center px-6">
        <div className="mx-auto h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br from-accent-cyan/20 via-accent-violet/20 to-accent-cyan/10 grid place-items-center backdrop-blur-sm border border-line">
          <span className="font-display text-3xl sm:text-4xl font-semibold text-gradient">AB</span>
        </div>
        <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint">
          // photo / video placeholder
        </p>
      </div>
    </div>
  </div>
)
