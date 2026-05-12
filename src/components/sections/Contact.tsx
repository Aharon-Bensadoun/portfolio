import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mail, MessageCircle, Linkedin, ArrowUpRight } from 'lucide-react'
import { Section } from '../ui/Section'
import { SectionHeader } from '../ui/SectionHeader'
import { SITE_CONFIG, getLinkedInLink, getWhatsAppLink } from '../../data/config'

export const Contact = () => {
  const { t } = useTranslation()

  const channels = [
    {
      key: 'email',
      label: t('contact.email'),
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
      icon: Mail,
      accent: 'cyan' as const,
      enabled: true,
    },
    {
      key: 'linkedin',
      label: t('contact.linkedin'),
      value: '/in/aharon-bensadoun',
      href: getLinkedInLink(),
      icon: Linkedin,
      accent: 'violet' as const,
      enabled: !SITE_CONFIG.linkedin.includes('TODO_'),
    },
    {
      key: 'whatsapp',
      label: t('contact.whatsapp'),
      value: 'WhatsApp',
      href: getWhatsAppLink('Hi Aharon, I’d like to discuss an AI project.'),
      icon: MessageCircle,
      accent: 'pink' as const,
      enabled: !SITE_CONFIG.whatsappNumber.startsWith('TODO_'),
    },
  ]

  return (
    <Section id="contact" className="bg-bg-elevated/30">
      <SectionHeader
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {channels.map((c, idx) => {
          const Icon = c.icon
          const isPlaceholder = !c.enabled
          return (
            <motion.a
              key={c.key}
              href={c.href}
              target={c.key === 'email' ? undefined : '_blank'}
              rel="noreferrer"
              aria-disabled={isPlaceholder || undefined}
              onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group card p-6 sm:p-7 transition-all duration-300 ${
                isPlaceholder
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:border-line-strong cursor-pointer'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl border border-line bg-bg-surface ${
                    c.accent === 'cyan'
                      ? 'text-accent-cyan'
                      : c.accent === 'violet'
                        ? 'text-accent-violet'
                        : 'text-pink-400'
                  }`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="text-ink-faint transition-all duration-300 group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-[270deg] rtl:group-hover:-translate-x-0.5 rtl:group-hover:translate-y-0"
                />
              </div>
              <div className="mt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
                  // {c.label.toLowerCase()}
                </div>
                <div className="mt-1.5 font-display text-base font-semibold text-ink break-all">
                  {c.value}
                </div>
                {isPlaceholder && (
                  <p className="mt-2 text-xs text-ink-faint">
                    (configure in <code className="font-mono">src/data/config.ts</code>)
                  </p>
                )}
              </div>
            </motion.a>
          )
        })}
      </div>

      <p className="mt-8 text-center text-sm text-ink-muted">{t('contact.response_note')}</p>
    </Section>
  )
}
