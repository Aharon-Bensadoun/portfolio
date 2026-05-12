import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { SERVICES } from '../../data/services'

const ACCENT_STYLES: Record<string, { ring: string; glow: string; icon: string }> = {
  cyan: {
    ring: 'group-hover:border-accent-cyan/50',
    glow: 'group-hover:shadow-glow',
    icon: 'text-accent-cyan',
  },
  violet: {
    ring: 'group-hover:border-accent-violet/50',
    glow: 'group-hover:shadow-glow-violet',
    icon: 'text-accent-violet',
  },
  pink: {
    ring: 'group-hover:border-pink-400/50',
    glow: 'group-hover:shadow-[0_0_60px_-10px_rgba(244,114,182,0.3)]',
    icon: 'text-pink-400',
  },
  amber: {
    ring: 'group-hover:border-amber-400/40',
    glow: 'group-hover:shadow-[0_0_60px_-10px_rgba(251,191,36,0.25)]',
    icon: 'text-amber-400',
  },
}

export const Services = () => {
  const { t } = useTranslation()

  return (
    <Section id="services" className="bg-bg-elevated/30">
      <SectionHeader
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {SERVICES.map((svc, idx) => {
          const Icon = svc.icon
          const styles = ACCENT_STYLES[svc.accent]
          return (
            <motion.article
              key={svc.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative card p-6 sm:p-8 transition-all duration-300 ${styles.ring} ${styles.glow}`}
            >
              <div className="flex items-start gap-5">
                <div
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-bg-surface ${styles.icon}`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                      {t(`services.items.${svc.key}.title`)}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      className="text-ink-faint transition-all duration-300 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[270deg] rtl:group-hover:-translate-x-0.5 rtl:group-hover:translate-y-0"
                    />
                  </div>
                  <p className="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed">
                    {t(`services.items.${svc.key}.desc`)}
                  </p>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
