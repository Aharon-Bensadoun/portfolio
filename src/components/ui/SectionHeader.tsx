import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: {
  eyebrow: string
  title: string | ReactNode
  subtitle?: string
  align?: 'left' | 'center'
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className={`mb-12 sm:mb-16 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
  >
    <div className="mb-4 inline-flex items-center gap-2">
      <span className="h-px w-8 bg-gradient-to-r from-accent-cyan to-accent-violet" />
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
        {eyebrow}
      </span>
    </div>
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink text-balance">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-5 text-base sm:text-lg text-ink-muted text-pretty leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
)
