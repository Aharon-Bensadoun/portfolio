import { useTranslation } from 'react-i18next'
import type { DeploymentStatus } from '../../data/projects'

const STATUS_STYLES: Record<DeploymentStatus, string> = {
  production_public:
    'border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan',
  production_client:
    'border-amber-400/25 bg-amber-400/10 text-amber-600 dark:text-amber-400',
  in_development:
    'border-line-subtle bg-ink-faint/10 text-ink-muted',
}

const STATUS_I18N_KEYS: Record<DeploymentStatus, string> = {
  production_public: 'projects.status_production_public',
  production_client: 'projects.status_production_client',
  in_development: 'projects.status_in_development',
}

export const DeploymentStatusBadge = ({ status }: { status: DeploymentStatus }) => {
  const { t } = useTranslation()

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${STATUS_STYLES[status]}`}
    >
      {t(STATUS_I18N_KEYS[status])}
    </span>
  )
}
