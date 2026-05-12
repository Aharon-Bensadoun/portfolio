import { useTranslation } from 'react-i18next'
import { Github } from 'lucide-react'
import { SITE_CONFIG } from '../../data/config'

export const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10 sm:py-14">
      <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="font-display text-sm font-semibold text-ink">
            {SITE_CONFIG.name}
          </div>
          <div className="mt-1 text-xs text-ink-muted">{t('footer.tagline')}</div>
          <div className="mt-3 text-xs text-ink-faint">
            © {year} {SITE_CONFIG.name}. {t('footer.rights')}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            aria-label={t('footer.github')}
          >
            <Github size={16} strokeWidth={2} />
            <span>{t('footer.github')}</span>
          </a>
          <a
            href={SITE_CONFIG.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <span className="font-mono text-xs">{t('footer.source')}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
