import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'

const STEPS = ['1', '2', '3', '4'] as const

export const Approach = () => {
  const { t } = useTranslation()

  return (
    <Section id="approach">
      <SectionHeader eyebrow={t('approach.eyebrow')} title={t('approach.title')} />

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {STEPS.map((step, idx) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative card p-6 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="font-mono text-xs text-ink-faint pt-1">0{step}</span>
              <div className="flex-1">
                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink">
                  {t(`approach.items.${step}.title`)}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-ink-muted leading-relaxed">
                  {t(`approach.items.${step}.desc`)}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
