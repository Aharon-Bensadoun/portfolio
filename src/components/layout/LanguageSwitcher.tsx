import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Languages, Check, ChevronDown } from 'lucide-react'
import { SUPPORTED_LANGUAGES, type Lang } from '../../i18n/config'

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = (i18n.resolvedLanguage ?? 'en') as Lang

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-card/60 px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:text-ink hover:border-line-strong cursor-pointer"
        style={{ minHeight: 36 }}
      >
        <Languages size={14} strokeWidth={2} />
        <span className="uppercase tracking-wide">{current}</span>
        <ChevronDown size={12} strokeWidth={2.5} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 mt-2 min-w-40 overflow-hidden rounded-xl border border-line glass shadow-card z-50"
        >
          {SUPPORTED_LANGUAGES.map((lng) => {
            const active = current === lng
            return (
              <li key={lng} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    i18n.changeLanguage(lng)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-sm transition-colors cursor-pointer ${
                    active ? 'text-ink bg-bg-card/80' : 'text-ink-muted hover:bg-bg-card/60 hover:text-ink'
                  }`}
                >
                  <span>{t(`lang.${lng}`)}</span>
                  {active && <Check size={14} strokeWidth={2.5} className="text-accent-cyan" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
