import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

const STACK_LABELS = [
  '.NET 8',
  'React 19',
  'Node + Prisma',
  'PostgreSQL',
  'Azure OpenAI',
  'AWS Bedrock',
  'Gemini',
  'Whisper',
  'Terraform',
]

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-x-0 -top-40 h-[40rem] bg-radial-fade pointer-events-none" aria-hidden="true" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-bg-card/60 px-3 py-1.5 text-xs font-medium text-ink-muted backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-accent-cyan" strokeWidth={2.5} />
          <span>{t('hero.eyebrow')}</span>
          <span className="mx-1 h-1 w-1 rounded-full bg-line-strong" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em]">available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance"
        >
          {t('hero.title_a')}{' '}
          <span className="text-gradient">{t('hero.title_b')}</span>{' '}
          {t('hero.title_c')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed text-pretty"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#demos" className="btn-primary">
            {t('hero.cta_primary')}
            <ArrowRight size={16} strokeWidth={2.5} className="rtl:rotate-180" />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} strokeWidth={2} />
            {t('hero.cta_secondary')}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl"
        >
          {[
            { value: '15+', label: t('hero.stat_projects') },
            { value: '4', label: t('hero.stat_domains') },
            { value: '5', label: t('hero.stat_stack') },
          ].map((s) => (
            <div key={s.label} className="card p-5 sm:p-6">
              <div className="font-display text-3xl sm:text-4xl font-semibold tabular-nums text-ink">
                {s.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-ink-muted leading-snug">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-14 sm:mt-20"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-faint mb-4">
            // stack
          </div>
          <div className="flex flex-wrap gap-2">
            {STACK_LABELS.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
